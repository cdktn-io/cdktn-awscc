// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCapacityProviderProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#auto_scaling_group_provider CcCapacityProvider#auto_scaling_group_provider}
    */
    readonly autoScalingGroupProvider?: CcCapacityProvider.AutoScalingGroupProviderProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#cluster_name CcCapacityProvider#cluster_name}
    */
    readonly clusterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#managed_instances_provider CcCapacityProvider#managed_instances_provider}
    */
    readonly managedInstancesProvider?: CcCapacityProvider.ManagedInstancesProviderProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#name CcCapacityProvider#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#tags CcCapacityProvider#tags}
    */
    readonly tags?: CcCapacityProvider.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider awscc_ecs_capacity_provider}
*/
export class CcCapacityProvider extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecs_capacity_provider";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCapacityProvider resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCapacityProvider to import
    * @param importFromId The id of the existing CcCapacityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCapacityProvider to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_capacity_provider", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider awscc_ecs_capacity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCapacityProviderProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcCapacityProviderProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecs_capacity_provider',
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
        this._autoScalingGroupProvider.internalValue = config.autoScalingGroupProvider;
        this._clusterName = config.clusterName;
        this._managedInstancesProvider.internalValue = config.managedInstancesProvider;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_scaling_group_provider - computed: true, optional: true, required: false
    private _autoScalingGroupProvider = new CcCapacityProvider.AutoScalingGroupProviderPropertyOutputReference(this, "auto_scaling_group_provider");
    public get autoScalingGroupProvider() {
        return this._autoScalingGroupProvider;
    }
    public putAutoScalingGroupProvider(value: CcCapacityProvider.AutoScalingGroupProviderProperty) {
        this._autoScalingGroupProvider.internalValue = value;
    }
    public resetAutoScalingGroupProvider() {
        this._autoScalingGroupProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingGroupProviderInput() {
        return this._autoScalingGroupProvider.internalValue;
    }

    // cluster_name - computed: true, optional: true, required: false
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    public resetClusterName() {
        this._clusterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // managed_instances_provider - computed: true, optional: true, required: false
    private _managedInstancesProvider = new CcCapacityProvider.ManagedInstancesProviderPropertyOutputReference(this, "managed_instances_provider");
    public get managedInstancesProvider() {
        return this._managedInstancesProvider;
    }
    public putManagedInstancesProvider(value: CcCapacityProvider.ManagedInstancesProviderProperty) {
        this._managedInstancesProvider.internalValue = value;
    }
    public resetManagedInstancesProvider() {
        this._managedInstancesProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedInstancesProviderInput() {
        return this._managedInstancesProvider.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCapacityProvider.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCapacityProvider.TagProperty[] | cdktn.IResolvable) {
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
            auto_scaling_group_provider: ccCapacityProviderAutoScalingGroupProviderPropertyToTerraform(this._autoScalingGroupProvider.internalValue),
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            managed_instances_provider: ccCapacityProviderManagedInstancesProviderPropertyToTerraform(this._managedInstancesProvider.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccCapacityProviderTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_scaling_group_provider: {
                value: ccCapacityProviderAutoScalingGroupProviderPropertyToHclTerraform(this._autoScalingGroupProvider.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapacityProvider.AutoScalingGroupProviderProperty",
            },
            cluster_name: {
                value: cdktn.stringToHclTerraform(this._clusterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            managed_instances_provider: {
                value: ccCapacityProviderManagedInstancesProviderPropertyToHclTerraform(this._managedInstancesProvider.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCapacityProvider.ManagedInstancesProviderProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCapacityProviderTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCapacityProvider.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCapacityProviderManagedScalingPropertyToTerraform(struct?: CcCapacityProvider.ManagedScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_warmup_period: cdktn.numberToTerraform(struct!.instanceWarmupPeriod),
        maximum_scaling_step_size: cdktn.numberToTerraform(struct!.maximumScalingStepSize),
        minimum_scaling_step_size: cdktn.numberToTerraform(struct!.minimumScalingStepSize),
        status: cdktn.stringToTerraform(struct!.status),
        target_capacity: cdktn.numberToTerraform(struct!.targetCapacity),
    }
}


export function ccCapacityProviderManagedScalingPropertyToHclTerraform(struct?: CcCapacityProvider.ManagedScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_warmup_period: {
            value: cdktn.numberToHclTerraform(struct!.instanceWarmupPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_scaling_step_size: {
            value: cdktn.numberToHclTerraform(struct!.maximumScalingStepSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum_scaling_step_size: {
            value: cdktn.numberToHclTerraform(struct!.minimumScalingStepSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_capacity: {
            value: cdktn.numberToHclTerraform(struct!.targetCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderAutoScalingGroupProviderPropertyToTerraform(struct?: CcCapacityProvider.AutoScalingGroupProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_scaling_group_arn: cdktn.stringToTerraform(struct!.autoScalingGroupArn),
        managed_draining: cdktn.stringToTerraform(struct!.managedDraining),
        managed_scaling: ccCapacityProviderManagedScalingPropertyToTerraform(struct!.managedScaling),
        managed_termination_protection: cdktn.stringToTerraform(struct!.managedTerminationProtection),
    }
}


export function ccCapacityProviderAutoScalingGroupProviderPropertyToHclTerraform(struct?: CcCapacityProvider.AutoScalingGroupProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_scaling_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.autoScalingGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        managed_draining: {
            value: cdktn.stringToHclTerraform(struct!.managedDraining),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        managed_scaling: {
            value: ccCapacityProviderManagedScalingPropertyToHclTerraform(struct!.managedScaling),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedScalingProperty",
        },
        managed_termination_protection: {
            value: cdktn.stringToHclTerraform(struct!.managedTerminationProtection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderAutoRepairConfigurationPropertyToTerraform(struct?: CcCapacityProvider.AutoRepairConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions_status: cdktn.stringToTerraform(struct!.actionsStatus),
    }
}


export function ccCapacityProviderAutoRepairConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.AutoRepairConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions_status: {
            value: cdktn.stringToHclTerraform(struct!.actionsStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderInfrastructureOptimizationPropertyToTerraform(struct?: CcCapacityProvider.InfrastructureOptimizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scale_in_after: cdktn.numberToTerraform(struct!.scaleInAfter),
    }
}


export function ccCapacityProviderInfrastructureOptimizationPropertyToHclTerraform(struct?: CcCapacityProvider.InfrastructureOptimizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scale_in_after: {
            value: cdktn.numberToHclTerraform(struct!.scaleInAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderCapacityReservationRequestPropertyToTerraform(struct?: CcCapacityProvider.CapacityReservationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        reservation_group_arn: cdktn.stringToTerraform(struct!.reservationGroupArn),
        reservation_preference: cdktn.stringToTerraform(struct!.reservationPreference),
    }
}


export function ccCapacityProviderCapacityReservationRequestPropertyToHclTerraform(struct?: CcCapacityProvider.CapacityReservationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        reservation_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.reservationGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        reservation_preference: {
            value: cdktn.stringToHclTerraform(struct!.reservationPreference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderAcceleratorCountRequestPropertyToTerraform(struct?: CcCapacityProvider.AcceleratorCountRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccCapacityProviderAcceleratorCountRequestPropertyToHclTerraform(struct?: CcCapacityProvider.AcceleratorCountRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderAcceleratorTotalMemoryMiBRequestPropertyToTerraform(struct?: CcCapacityProvider.AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccCapacityProviderAcceleratorTotalMemoryMiBRequestPropertyToHclTerraform(struct?: CcCapacityProvider.AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderBaselineEbsBandwidthMbpsRequestPropertyToTerraform(struct?: CcCapacityProvider.BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccCapacityProviderBaselineEbsBandwidthMbpsRequestPropertyToHclTerraform(struct?: CcCapacityProvider.BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderMemoryGiBPerVCpuRequestPropertyToTerraform(struct?: CcCapacityProvider.MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccCapacityProviderMemoryGiBPerVCpuRequestPropertyToHclTerraform(struct?: CcCapacityProvider.MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderMemoryMiBRequestPropertyToTerraform(struct?: CcCapacityProvider.MemoryMiBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccCapacityProviderMemoryMiBRequestPropertyToHclTerraform(struct?: CcCapacityProvider.MemoryMiBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderNetworkBandwidthGbpsRequestPropertyToTerraform(struct?: CcCapacityProvider.NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccCapacityProviderNetworkBandwidthGbpsRequestPropertyToHclTerraform(struct?: CcCapacityProvider.NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderNetworkInterfaceCountRequestPropertyToTerraform(struct?: CcCapacityProvider.NetworkInterfaceCountRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccCapacityProviderNetworkInterfaceCountRequestPropertyToHclTerraform(struct?: CcCapacityProvider.NetworkInterfaceCountRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderTotalLocalStorageGBRequestPropertyToTerraform(struct?: CcCapacityProvider.TotalLocalStorageGBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccCapacityProviderTotalLocalStorageGBRequestPropertyToHclTerraform(struct?: CcCapacityProvider.TotalLocalStorageGBRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderVCpuCountRangeRequestPropertyToTerraform(struct?: CcCapacityProvider.VCpuCountRangeRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max: cdktn.numberToTerraform(struct!.max),
        min: cdktn.numberToTerraform(struct!.min),
    }
}


export function ccCapacityProviderVCpuCountRangeRequestPropertyToHclTerraform(struct?: CcCapacityProvider.VCpuCountRangeRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max: {
            value: cdktn.numberToHclTerraform(struct!.max),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min: {
            value: cdktn.numberToHclTerraform(struct!.min),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderInstanceRequirementsRequestPropertyToTerraform(struct?: CcCapacityProvider.InstanceRequirementsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accelerator_count: ccCapacityProviderAcceleratorCountRequestPropertyToTerraform(struct!.acceleratorCount),
        accelerator_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorManufacturers),
        accelerator_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorNames),
        accelerator_total_memory_mi_b: ccCapacityProviderAcceleratorTotalMemoryMiBRequestPropertyToTerraform(struct!.acceleratorTotalMemoryMiB),
        accelerator_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.acceleratorTypes),
        allowed_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInstanceTypes),
        bare_metal: cdktn.stringToTerraform(struct!.bareMetal),
        baseline_ebs_bandwidth_mbps: ccCapacityProviderBaselineEbsBandwidthMbpsRequestPropertyToTerraform(struct!.baselineEbsBandwidthMbps),
        burstable_performance: cdktn.stringToTerraform(struct!.burstablePerformance),
        cpu_manufacturers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cpuManufacturers),
        excluded_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedInstanceTypes),
        instance_generations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceGenerations),
        local_storage: cdktn.stringToTerraform(struct!.localStorage),
        local_storage_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.localStorageTypes),
        max_spot_price_as_percentage_of_optimal_on_demand_price: cdktn.numberToTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
        memory_gi_b_per_v_cpu: ccCapacityProviderMemoryGiBPerVCpuRequestPropertyToTerraform(struct!.memoryGiBPerVCpu),
        memory_mi_b: ccCapacityProviderMemoryMiBRequestPropertyToTerraform(struct!.memoryMiB),
        network_bandwidth_gbps: ccCapacityProviderNetworkBandwidthGbpsRequestPropertyToTerraform(struct!.networkBandwidthGbps),
        network_interface_count: ccCapacityProviderNetworkInterfaceCountRequestPropertyToTerraform(struct!.networkInterfaceCount),
        on_demand_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
        require_hibernate_support: cdktn.booleanToTerraform(struct!.requireHibernateSupport),
        spot_max_price_percentage_over_lowest_price: cdktn.numberToTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
        total_local_storage_gb: ccCapacityProviderTotalLocalStorageGBRequestPropertyToTerraform(struct!.totalLocalStorageGb),
        v_cpu_count: ccCapacityProviderVCpuCountRangeRequestPropertyToTerraform(struct!.vCpuCount),
    }
}


export function ccCapacityProviderInstanceRequirementsRequestPropertyToHclTerraform(struct?: CcCapacityProvider.InstanceRequirementsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accelerator_count: {
            value: ccCapacityProviderAcceleratorCountRequestPropertyToHclTerraform(struct!.acceleratorCount),
            isBlock: true,
            type: "struct",
            storageClassType: "AcceleratorCountRequestProperty",
        },
        accelerator_manufacturers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorManufacturers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        accelerator_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        accelerator_total_memory_mi_b: {
            value: ccCapacityProviderAcceleratorTotalMemoryMiBRequestPropertyToHclTerraform(struct!.acceleratorTotalMemoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "AcceleratorTotalMemoryMiBRequestProperty",
        },
        accelerator_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.acceleratorTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        bare_metal: {
            value: cdktn.stringToHclTerraform(struct!.bareMetal),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        baseline_ebs_bandwidth_mbps: {
            value: ccCapacityProviderBaselineEbsBandwidthMbpsRequestPropertyToHclTerraform(struct!.baselineEbsBandwidthMbps),
            isBlock: true,
            type: "struct",
            storageClassType: "BaselineEbsBandwidthMbpsRequestProperty",
        },
        burstable_performance: {
            value: cdktn.stringToHclTerraform(struct!.burstablePerformance),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_manufacturers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cpuManufacturers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        excluded_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        instance_generations: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceGenerations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        local_storage: {
            value: cdktn.stringToHclTerraform(struct!.localStorage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_storage_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.localStorageTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_spot_price_as_percentage_of_optimal_on_demand_price: {
            value: cdktn.numberToHclTerraform(struct!.maxSpotPriceAsPercentageOfOptimalOnDemandPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory_gi_b_per_v_cpu: {
            value: ccCapacityProviderMemoryGiBPerVCpuRequestPropertyToHclTerraform(struct!.memoryGiBPerVCpu),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryGiBPerVCpuRequestProperty",
        },
        memory_mi_b: {
            value: ccCapacityProviderMemoryMiBRequestPropertyToHclTerraform(struct!.memoryMiB),
            isBlock: true,
            type: "struct",
            storageClassType: "MemoryMiBRequestProperty",
        },
        network_bandwidth_gbps: {
            value: ccCapacityProviderNetworkBandwidthGbpsRequestPropertyToHclTerraform(struct!.networkBandwidthGbps),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkBandwidthGbpsRequestProperty",
        },
        network_interface_count: {
            value: ccCapacityProviderNetworkInterfaceCountRequestPropertyToHclTerraform(struct!.networkInterfaceCount),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkInterfaceCountRequestProperty",
        },
        on_demand_max_price_percentage_over_lowest_price: {
            value: cdktn.numberToHclTerraform(struct!.onDemandMaxPricePercentageOverLowestPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        require_hibernate_support: {
            value: cdktn.booleanToHclTerraform(struct!.requireHibernateSupport),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        spot_max_price_percentage_over_lowest_price: {
            value: cdktn.numberToHclTerraform(struct!.spotMaxPricePercentageOverLowestPrice),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        total_local_storage_gb: {
            value: ccCapacityProviderTotalLocalStorageGBRequestPropertyToHclTerraform(struct!.totalLocalStorageGb),
            isBlock: true,
            type: "struct",
            storageClassType: "TotalLocalStorageGBRequestProperty",
        },
        v_cpu_count: {
            value: ccCapacityProviderVCpuCountRangeRequestPropertyToHclTerraform(struct!.vCpuCount),
            isBlock: true,
            type: "struct",
            storageClassType: "VCpuCountRangeRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderManagedInstancesLocalStorageConfigurationPropertyToTerraform(struct?: CcCapacityProvider.ManagedInstancesLocalStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        use_local_storage: cdktn.booleanToTerraform(struct!.useLocalStorage),
    }
}


export function ccCapacityProviderManagedInstancesLocalStorageConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.ManagedInstancesLocalStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        use_local_storage: {
            value: cdktn.booleanToHclTerraform(struct!.useLocalStorage),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderManagedInstancesNetworkConfigurationPropertyToTerraform(struct?: CcCapacityProvider.ManagedInstancesNetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccCapacityProviderManagedInstancesNetworkConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.ManagedInstancesNetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderManagedInstancesStorageConfigurationPropertyToTerraform(struct?: CcCapacityProvider.ManagedInstancesStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        storage_size_gi_b: cdktn.numberToTerraform(struct!.storageSizeGiB),
    }
}


export function ccCapacityProviderManagedInstancesStorageConfigurationPropertyToHclTerraform(struct?: CcCapacityProvider.ManagedInstancesStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        storage_size_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.storageSizeGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderInstanceLaunchTemplatePropertyToTerraform(struct?: CcCapacityProvider.InstanceLaunchTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_option_type: cdktn.stringToTerraform(struct!.capacityOptionType),
        capacity_reservations: ccCapacityProviderCapacityReservationRequestPropertyToTerraform(struct!.capacityReservations),
        ec_2_instance_profile_arn: cdktn.stringToTerraform(struct!.ec2InstanceProfileArn),
        fips_enabled: cdktn.booleanToTerraform(struct!.fipsEnabled),
        instance_metadata_tags_propagation: cdktn.booleanToTerraform(struct!.instanceMetadataTagsPropagation),
        instance_requirements: ccCapacityProviderInstanceRequirementsRequestPropertyToTerraform(struct!.instanceRequirements),
        local_storage_configuration: ccCapacityProviderManagedInstancesLocalStorageConfigurationPropertyToTerraform(struct!.localStorageConfiguration),
        monitoring: cdktn.stringToTerraform(struct!.monitoring),
        network_configuration: ccCapacityProviderManagedInstancesNetworkConfigurationPropertyToTerraform(struct!.networkConfiguration),
        storage_configuration: ccCapacityProviderManagedInstancesStorageConfigurationPropertyToTerraform(struct!.storageConfiguration),
    }
}


export function ccCapacityProviderInstanceLaunchTemplatePropertyToHclTerraform(struct?: CcCapacityProvider.InstanceLaunchTemplateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_option_type: {
            value: cdktn.stringToHclTerraform(struct!.capacityOptionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        capacity_reservations: {
            value: ccCapacityProviderCapacityReservationRequestPropertyToHclTerraform(struct!.capacityReservations),
            isBlock: true,
            type: "struct",
            storageClassType: "CapacityReservationRequestProperty",
        },
        ec_2_instance_profile_arn: {
            value: cdktn.stringToHclTerraform(struct!.ec2InstanceProfileArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fips_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.fipsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        instance_metadata_tags_propagation: {
            value: cdktn.booleanToHclTerraform(struct!.instanceMetadataTagsPropagation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        instance_requirements: {
            value: ccCapacityProviderInstanceRequirementsRequestPropertyToHclTerraform(struct!.instanceRequirements),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceRequirementsRequestProperty",
        },
        local_storage_configuration: {
            value: ccCapacityProviderManagedInstancesLocalStorageConfigurationPropertyToHclTerraform(struct!.localStorageConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedInstancesLocalStorageConfigurationProperty",
        },
        monitoring: {
            value: cdktn.stringToHclTerraform(struct!.monitoring),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_configuration: {
            value: ccCapacityProviderManagedInstancesNetworkConfigurationPropertyToHclTerraform(struct!.networkConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedInstancesNetworkConfigurationProperty",
        },
        storage_configuration: {
            value: ccCapacityProviderManagedInstancesStorageConfigurationPropertyToHclTerraform(struct!.storageConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedInstancesStorageConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderManagedInstancesProviderPropertyToTerraform(struct?: CcCapacityProvider.ManagedInstancesProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_repair_configuration: ccCapacityProviderAutoRepairConfigurationPropertyToTerraform(struct!.autoRepairConfiguration),
        infrastructure_optimization: ccCapacityProviderInfrastructureOptimizationPropertyToTerraform(struct!.infrastructureOptimization),
        infrastructure_role_arn: cdktn.stringToTerraform(struct!.infrastructureRoleArn),
        instance_launch_template: ccCapacityProviderInstanceLaunchTemplatePropertyToTerraform(struct!.instanceLaunchTemplate),
        propagate_tags: cdktn.stringToTerraform(struct!.propagateTags),
    }
}


export function ccCapacityProviderManagedInstancesProviderPropertyToHclTerraform(struct?: CcCapacityProvider.ManagedInstancesProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_repair_configuration: {
            value: ccCapacityProviderAutoRepairConfigurationPropertyToHclTerraform(struct!.autoRepairConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoRepairConfigurationProperty",
        },
        infrastructure_optimization: {
            value: ccCapacityProviderInfrastructureOptimizationPropertyToHclTerraform(struct!.infrastructureOptimization),
            isBlock: true,
            type: "struct",
            storageClassType: "InfrastructureOptimizationProperty",
        },
        infrastructure_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.infrastructureRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_launch_template: {
            value: ccCapacityProviderInstanceLaunchTemplatePropertyToHclTerraform(struct!.instanceLaunchTemplate),
            isBlock: true,
            type: "struct",
            storageClassType: "InstanceLaunchTemplateProperty",
        },
        propagate_tags: {
            value: cdktn.stringToHclTerraform(struct!.propagateTags),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCapacityProviderTagPropertyToTerraform(struct?: CcCapacityProvider.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCapacityProviderTagPropertyToHclTerraform(struct?: CcCapacityProvider.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCapacityProvider {
export interface ManagedScalingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#instance_warmup_period CcCapacityProvider#instance_warmup_period}
    */
    readonly instanceWarmupPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#maximum_scaling_step_size CcCapacityProvider#maximum_scaling_step_size}
    */
    readonly maximumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#minimum_scaling_step_size CcCapacityProvider#minimum_scaling_step_size}
    */
    readonly minimumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#status CcCapacityProvider#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#target_capacity CcCapacityProvider#target_capacity}
    */
    readonly targetCapacity?: number;
}
export class ManagedScalingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedScalingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceWarmupPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceWarmupPeriod = this._instanceWarmupPeriod;
        }
        if (this._maximumScalingStepSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumScalingStepSize = this._maximumScalingStepSize;
        }
        if (this._minimumScalingStepSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumScalingStepSize = this._minimumScalingStepSize;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._targetCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetCapacity = this._targetCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedScalingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceWarmupPeriod = undefined;
            this._maximumScalingStepSize = undefined;
            this._minimumScalingStepSize = undefined;
            this._status = undefined;
            this._targetCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceWarmupPeriod = value.instanceWarmupPeriod;
            this._maximumScalingStepSize = value.maximumScalingStepSize;
            this._minimumScalingStepSize = value.minimumScalingStepSize;
            this._status = value.status;
            this._targetCapacity = value.targetCapacity;
        }
    }

    // instance_warmup_period - computed: true, optional: true, required: false
    private _instanceWarmupPeriod?: number; 
    public get instanceWarmupPeriod() {
        return this.getNumberAttribute('instance_warmup_period');
    }
    public set instanceWarmupPeriod(value: number) {
        this._instanceWarmupPeriod = value;
    }
    public resetInstanceWarmupPeriod() {
        this._instanceWarmupPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceWarmupPeriodInput() {
        return this._instanceWarmupPeriod;
    }

    // maximum_scaling_step_size - computed: true, optional: true, required: false
    private _maximumScalingStepSize?: number; 
    public get maximumScalingStepSize() {
        return this.getNumberAttribute('maximum_scaling_step_size');
    }
    public set maximumScalingStepSize(value: number) {
        this._maximumScalingStepSize = value;
    }
    public resetMaximumScalingStepSize() {
        this._maximumScalingStepSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumScalingStepSizeInput() {
        return this._maximumScalingStepSize;
    }

    // minimum_scaling_step_size - computed: true, optional: true, required: false
    private _minimumScalingStepSize?: number; 
    public get minimumScalingStepSize() {
        return this.getNumberAttribute('minimum_scaling_step_size');
    }
    public set minimumScalingStepSize(value: number) {
        this._minimumScalingStepSize = value;
    }
    public resetMinimumScalingStepSize() {
        this._minimumScalingStepSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumScalingStepSizeInput() {
        return this._minimumScalingStepSize;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // target_capacity - computed: true, optional: true, required: false
    private _targetCapacity?: number; 
    public get targetCapacity() {
        return this.getNumberAttribute('target_capacity');
    }
    public set targetCapacity(value: number) {
        this._targetCapacity = value;
    }
    public resetTargetCapacity() {
        this._targetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetCapacityInput() {
        return this._targetCapacity;
    }
}
export interface AutoScalingGroupProviderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#auto_scaling_group_arn CcCapacityProvider#auto_scaling_group_arn}
    */
    readonly autoScalingGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#managed_draining CcCapacityProvider#managed_draining}
    */
    readonly managedDraining?: string;
    /**
    * The managed scaling settings for the Auto Scaling group capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#managed_scaling CcCapacityProvider#managed_scaling}
    */
    readonly managedScaling?: ManagedScalingProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#managed_termination_protection CcCapacityProvider#managed_termination_protection}
    */
    readonly managedTerminationProtection?: string;
}
export class AutoScalingGroupProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoScalingGroupProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoScalingGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScalingGroupArn = this._autoScalingGroupArn;
        }
        if (this._managedDraining !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedDraining = this._managedDraining;
        }
        if (this._managedScaling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedScaling = this._managedScaling?.internalValue;
        }
        if (this._managedTerminationProtection !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedTerminationProtection = this._managedTerminationProtection;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoScalingGroupProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoScalingGroupArn = undefined;
            this._managedDraining = undefined;
            this._managedScaling.internalValue = undefined;
            this._managedTerminationProtection = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoScalingGroupArn = value.autoScalingGroupArn;
            this._managedDraining = value.managedDraining;
            this._managedScaling.internalValue = value.managedScaling;
            this._managedTerminationProtection = value.managedTerminationProtection;
        }
    }

    // auto_scaling_group_arn - computed: true, optional: true, required: false
    private _autoScalingGroupArn?: string; 
    public get autoScalingGroupArn() {
        return this.getStringAttribute('auto_scaling_group_arn');
    }
    public set autoScalingGroupArn(value: string) {
        this._autoScalingGroupArn = value;
    }
    public resetAutoScalingGroupArn() {
        this._autoScalingGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingGroupArnInput() {
        return this._autoScalingGroupArn;
    }

    // managed_draining - computed: true, optional: true, required: false
    private _managedDraining?: string; 
    public get managedDraining() {
        return this.getStringAttribute('managed_draining');
    }
    public set managedDraining(value: string) {
        this._managedDraining = value;
    }
    public resetManagedDraining() {
        this._managedDraining = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedDrainingInput() {
        return this._managedDraining;
    }

    // managed_scaling - computed: true, optional: true, required: false
    private _managedScaling = new ManagedScalingPropertyOutputReference(this, "managed_scaling");
    public get managedScaling() {
        return this._managedScaling;
    }
    public putManagedScaling(value: ManagedScalingProperty) {
        this._managedScaling.internalValue = value;
    }
    public resetManagedScaling() {
        this._managedScaling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedScalingInput() {
        return this._managedScaling.internalValue;
    }

    // managed_termination_protection - computed: true, optional: true, required: false
    private _managedTerminationProtection?: string; 
    public get managedTerminationProtection() {
        return this.getStringAttribute('managed_termination_protection');
    }
    public set managedTerminationProtection(value: string) {
        this._managedTerminationProtection = value;
    }
    public resetManagedTerminationProtection() {
        this._managedTerminationProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedTerminationProtectionInput() {
        return this._managedTerminationProtection;
    }
}
export interface AutoRepairConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#actions_status CcCapacityProvider#actions_status}
    */
    readonly actionsStatus?: string;
}
export class AutoRepairConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoRepairConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionsStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionsStatus = this._actionsStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoRepairConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionsStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionsStatus = value.actionsStatus;
        }
    }

    // actions_status - computed: true, optional: true, required: false
    private _actionsStatus?: string; 
    public get actionsStatus() {
        return this.getStringAttribute('actions_status');
    }
    public set actionsStatus(value: string) {
        this._actionsStatus = value;
    }
    public resetActionsStatus() {
        this._actionsStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsStatusInput() {
        return this._actionsStatus;
    }
}
export interface InfrastructureOptimizationProperty {
    /**
    * This parameter defines the number of seconds Amazon ECS Managed Instances waits before optimizing EC2 instances that have become idle or underutilized. A longer delay increases the likelihood of placing new tasks on idle instances, reducing startup time. A shorter delay helps reduce infrastructure costs by optimizing idle instances more quickly. Valid values are: Not set (null) - Uses the default optimization behavior, `-1` - Disables automatic infrastructure optimization, `0` to `3600` (inclusive) - Specifies the number of seconds to wait before optimizing instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#scale_in_after CcCapacityProvider#scale_in_after}
    */
    readonly scaleInAfter?: number;
}
export class InfrastructureOptimizationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InfrastructureOptimizationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scaleInAfter !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInAfter = this._scaleInAfter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InfrastructureOptimizationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scaleInAfter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scaleInAfter = value.scaleInAfter;
        }
    }

    // scale_in_after - computed: true, optional: true, required: false
    private _scaleInAfter?: number; 
    public get scaleInAfter() {
        return this.getNumberAttribute('scale_in_after');
    }
    public set scaleInAfter(value: number) {
        this._scaleInAfter = value;
    }
    public resetScaleInAfter() {
        this._scaleInAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInAfterInput() {
        return this._scaleInAfter;
    }
}
export interface CapacityReservationRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#reservation_group_arn CcCapacityProvider#reservation_group_arn}
    */
    readonly reservationGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#reservation_preference CcCapacityProvider#reservation_preference}
    */
    readonly reservationPreference?: string;
}
export class CapacityReservationRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityReservationRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reservationGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.reservationGroupArn = this._reservationGroupArn;
        }
        if (this._reservationPreference !== undefined) {
            hasAnyValues = true;
            internalValueResult.reservationPreference = this._reservationPreference;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityReservationRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reservationGroupArn = undefined;
            this._reservationPreference = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reservationGroupArn = value.reservationGroupArn;
            this._reservationPreference = value.reservationPreference;
        }
    }

    // reservation_group_arn - computed: true, optional: true, required: false
    private _reservationGroupArn?: string; 
    public get reservationGroupArn() {
        return this.getStringAttribute('reservation_group_arn');
    }
    public set reservationGroupArn(value: string) {
        this._reservationGroupArn = value;
    }
    public resetReservationGroupArn() {
        this._reservationGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reservationGroupArnInput() {
        return this._reservationGroupArn;
    }

    // reservation_preference - computed: true, optional: true, required: false
    private _reservationPreference?: string; 
    public get reservationPreference() {
        return this.getStringAttribute('reservation_preference');
    }
    public set reservationPreference(value: string) {
        this._reservationPreference = value;
    }
    public resetReservationPreference() {
        this._reservationPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reservationPreferenceInput() {
        return this._reservationPreference;
    }
}
export interface AcceleratorCountRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#max CcCapacityProvider#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#min CcCapacityProvider#min}
    */
    readonly min?: number;
}
export class AcceleratorCountRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AcceleratorCountRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AcceleratorCountRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface AcceleratorTotalMemoryMiBRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#max CcCapacityProvider#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#min CcCapacityProvider#min}
    */
    readonly min?: number;
}
export class AcceleratorTotalMemoryMiBRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AcceleratorTotalMemoryMiBRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface BaselineEbsBandwidthMbpsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#max CcCapacityProvider#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#min CcCapacityProvider#min}
    */
    readonly min?: number;
}
export class BaselineEbsBandwidthMbpsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BaselineEbsBandwidthMbpsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface MemoryGiBPerVCpuRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#max CcCapacityProvider#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#min CcCapacityProvider#min}
    */
    readonly min?: number;
}
export class MemoryGiBPerVCpuRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryGiBPerVCpuRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface MemoryMiBRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#max CcCapacityProvider#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#min CcCapacityProvider#min}
    */
    readonly min?: number;
}
export class MemoryMiBRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemoryMiBRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemoryMiBRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface NetworkBandwidthGbpsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#max CcCapacityProvider#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#min CcCapacityProvider#min}
    */
    readonly min?: number;
}
export class NetworkBandwidthGbpsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkBandwidthGbpsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface NetworkInterfaceCountRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#max CcCapacityProvider#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#min CcCapacityProvider#min}
    */
    readonly min?: number;
}
export class NetworkInterfaceCountRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkInterfaceCountRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkInterfaceCountRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface TotalLocalStorageGBRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#max CcCapacityProvider#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#min CcCapacityProvider#min}
    */
    readonly min?: number;
}
export class TotalLocalStorageGBRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TotalLocalStorageGBRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TotalLocalStorageGBRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface VCpuCountRangeRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#max CcCapacityProvider#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#min CcCapacityProvider#min}
    */
    readonly min?: number;
}
export class VCpuCountRangeRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VCpuCountRangeRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._max !== undefined) {
            hasAnyValues = true;
            internalValueResult.max = this._max;
        }
        if (this._min !== undefined) {
            hasAnyValues = true;
            internalValueResult.min = this._min;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VCpuCountRangeRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._max = undefined;
            this._min = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._max = value.max;
            this._min = value.min;
        }
    }

    // max - computed: true, optional: true, required: false
    private _max?: number; 
    public get max() {
        return this.getNumberAttribute('max');
    }
    public set max(value: number) {
        this._max = value;
    }
    public resetMax() {
        this._max = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInput() {
        return this._max;
    }

    // min - computed: true, optional: true, required: false
    private _min?: number; 
    public get min() {
        return this.getNumberAttribute('min');
    }
    public set min(value: number) {
        this._min = value;
    }
    public resetMin() {
        this._min = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minInput() {
        return this._min;
    }
}
export interface InstanceRequirementsRequestProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#accelerator_count CcCapacityProvider#accelerator_count}
    */
    readonly acceleratorCount?: AcceleratorCountRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#accelerator_manufacturers CcCapacityProvider#accelerator_manufacturers}
    */
    readonly acceleratorManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#accelerator_names CcCapacityProvider#accelerator_names}
    */
    readonly acceleratorNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#accelerator_total_memory_mi_b CcCapacityProvider#accelerator_total_memory_mi_b}
    */
    readonly acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#accelerator_types CcCapacityProvider#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#allowed_instance_types CcCapacityProvider#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#bare_metal CcCapacityProvider#bare_metal}
    */
    readonly bareMetal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#baseline_ebs_bandwidth_mbps CcCapacityProvider#baseline_ebs_bandwidth_mbps}
    */
    readonly baselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#burstable_performance CcCapacityProvider#burstable_performance}
    */
    readonly burstablePerformance?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#cpu_manufacturers CcCapacityProvider#cpu_manufacturers}
    */
    readonly cpuManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#excluded_instance_types CcCapacityProvider#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#instance_generations CcCapacityProvider#instance_generations}
    */
    readonly instanceGenerations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#local_storage CcCapacityProvider#local_storage}
    */
    readonly localStorage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#local_storage_types CcCapacityProvider#local_storage_types}
    */
    readonly localStorageTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#max_spot_price_as_percentage_of_optimal_on_demand_price CcCapacityProvider#max_spot_price_as_percentage_of_optimal_on_demand_price}
    */
    readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#memory_gi_b_per_v_cpu CcCapacityProvider#memory_gi_b_per_v_cpu}
    */
    readonly memoryGiBPerVCpu?: MemoryGiBPerVCpuRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#memory_mi_b CcCapacityProvider#memory_mi_b}
    */
    readonly memoryMiB?: MemoryMiBRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#network_bandwidth_gbps CcCapacityProvider#network_bandwidth_gbps}
    */
    readonly networkBandwidthGbps?: NetworkBandwidthGbpsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#network_interface_count CcCapacityProvider#network_interface_count}
    */
    readonly networkInterfaceCount?: NetworkInterfaceCountRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#on_demand_max_price_percentage_over_lowest_price CcCapacityProvider#on_demand_max_price_percentage_over_lowest_price}
    */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#require_hibernate_support CcCapacityProvider#require_hibernate_support}
    */
    readonly requireHibernateSupport?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#spot_max_price_percentage_over_lowest_price CcCapacityProvider#spot_max_price_percentage_over_lowest_price}
    */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#total_local_storage_gb CcCapacityProvider#total_local_storage_gb}
    */
    readonly totalLocalStorageGb?: TotalLocalStorageGBRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#v_cpu_count CcCapacityProvider#v_cpu_count}
    */
    readonly vCpuCount?: VCpuCountRangeRequestProperty;
}
export class InstanceRequirementsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceRequirementsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acceleratorCount?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorCount = this._acceleratorCount?.internalValue;
        }
        if (this._acceleratorManufacturers !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorManufacturers = this._acceleratorManufacturers;
        }
        if (this._acceleratorNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorNames = this._acceleratorNames;
        }
        if (this._acceleratorTotalMemoryMiB?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorTotalMemoryMiB = this._acceleratorTotalMemoryMiB?.internalValue;
        }
        if (this._acceleratorTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceleratorTypes = this._acceleratorTypes;
        }
        if (this._allowedInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedInstanceTypes = this._allowedInstanceTypes;
        }
        if (this._bareMetal !== undefined) {
            hasAnyValues = true;
            internalValueResult.bareMetal = this._bareMetal;
        }
        if (this._baselineEbsBandwidthMbps?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.baselineEbsBandwidthMbps = this._baselineEbsBandwidthMbps?.internalValue;
        }
        if (this._burstablePerformance !== undefined) {
            hasAnyValues = true;
            internalValueResult.burstablePerformance = this._burstablePerformance;
        }
        if (this._cpuManufacturers !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuManufacturers = this._cpuManufacturers;
        }
        if (this._excludedInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludedInstanceTypes = this._excludedInstanceTypes;
        }
        if (this._instanceGenerations !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceGenerations = this._instanceGenerations;
        }
        if (this._localStorage !== undefined) {
            hasAnyValues = true;
            internalValueResult.localStorage = this._localStorage;
        }
        if (this._localStorageTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.localStorageTypes = this._localStorageTypes;
        }
        if (this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxSpotPriceAsPercentageOfOptimalOnDemandPrice = this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
        }
        if (this._memoryGiBPerVCpu?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryGiBPerVCpu = this._memoryGiBPerVCpu?.internalValue;
        }
        if (this._memoryMiB?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryMiB = this._memoryMiB?.internalValue;
        }
        if (this._networkBandwidthGbps?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkBandwidthGbps = this._networkBandwidthGbps?.internalValue;
        }
        if (this._networkInterfaceCount?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceCount = this._networkInterfaceCount?.internalValue;
        }
        if (this._onDemandMaxPricePercentageOverLowestPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.onDemandMaxPricePercentageOverLowestPrice = this._onDemandMaxPricePercentageOverLowestPrice;
        }
        if (this._requireHibernateSupport !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireHibernateSupport = this._requireHibernateSupport;
        }
        if (this._spotMaxPricePercentageOverLowestPrice !== undefined) {
            hasAnyValues = true;
            internalValueResult.spotMaxPricePercentageOverLowestPrice = this._spotMaxPricePercentageOverLowestPrice;
        }
        if (this._totalLocalStorageGb?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.totalLocalStorageGb = this._totalLocalStorageGb?.internalValue;
        }
        if (this._vCpuCount?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vCpuCount = this._vCpuCount?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceRequirementsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceleratorCount.internalValue = undefined;
            this._acceleratorManufacturers = undefined;
            this._acceleratorNames = undefined;
            this._acceleratorTotalMemoryMiB.internalValue = undefined;
            this._acceleratorTypes = undefined;
            this._allowedInstanceTypes = undefined;
            this._bareMetal = undefined;
            this._baselineEbsBandwidthMbps.internalValue = undefined;
            this._burstablePerformance = undefined;
            this._cpuManufacturers = undefined;
            this._excludedInstanceTypes = undefined;
            this._instanceGenerations = undefined;
            this._localStorage = undefined;
            this._localStorageTypes = undefined;
            this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = undefined;
            this._memoryGiBPerVCpu.internalValue = undefined;
            this._memoryMiB.internalValue = undefined;
            this._networkBandwidthGbps.internalValue = undefined;
            this._networkInterfaceCount.internalValue = undefined;
            this._onDemandMaxPricePercentageOverLowestPrice = undefined;
            this._requireHibernateSupport = undefined;
            this._spotMaxPricePercentageOverLowestPrice = undefined;
            this._totalLocalStorageGb.internalValue = undefined;
            this._vCpuCount.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceleratorCount.internalValue = value.acceleratorCount;
            this._acceleratorManufacturers = value.acceleratorManufacturers;
            this._acceleratorNames = value.acceleratorNames;
            this._acceleratorTotalMemoryMiB.internalValue = value.acceleratorTotalMemoryMiB;
            this._acceleratorTypes = value.acceleratorTypes;
            this._allowedInstanceTypes = value.allowedInstanceTypes;
            this._bareMetal = value.bareMetal;
            this._baselineEbsBandwidthMbps.internalValue = value.baselineEbsBandwidthMbps;
            this._burstablePerformance = value.burstablePerformance;
            this._cpuManufacturers = value.cpuManufacturers;
            this._excludedInstanceTypes = value.excludedInstanceTypes;
            this._instanceGenerations = value.instanceGenerations;
            this._localStorage = value.localStorage;
            this._localStorageTypes = value.localStorageTypes;
            this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = value.maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
            this._memoryGiBPerVCpu.internalValue = value.memoryGiBPerVCpu;
            this._memoryMiB.internalValue = value.memoryMiB;
            this._networkBandwidthGbps.internalValue = value.networkBandwidthGbps;
            this._networkInterfaceCount.internalValue = value.networkInterfaceCount;
            this._onDemandMaxPricePercentageOverLowestPrice = value.onDemandMaxPricePercentageOverLowestPrice;
            this._requireHibernateSupport = value.requireHibernateSupport;
            this._spotMaxPricePercentageOverLowestPrice = value.spotMaxPricePercentageOverLowestPrice;
            this._totalLocalStorageGb.internalValue = value.totalLocalStorageGb;
            this._vCpuCount.internalValue = value.vCpuCount;
        }
    }

    // accelerator_count - computed: true, optional: true, required: false
    private _acceleratorCount = new AcceleratorCountRequestPropertyOutputReference(this, "accelerator_count");
    public get acceleratorCount() {
        return this._acceleratorCount;
    }
    public putAcceleratorCount(value: AcceleratorCountRequestProperty) {
        this._acceleratorCount.internalValue = value;
    }
    public resetAcceleratorCount() {
        this._acceleratorCount.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorCountInput() {
        return this._acceleratorCount.internalValue;
    }

    // accelerator_manufacturers - computed: true, optional: true, required: false
    private _acceleratorManufacturers?: string[]; 
    public get acceleratorManufacturers() {
        return this.getListAttribute('accelerator_manufacturers');
    }
    public set acceleratorManufacturers(value: string[]) {
        this._acceleratorManufacturers = value;
    }
    public resetAcceleratorManufacturers() {
        this._acceleratorManufacturers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorManufacturersInput() {
        return this._acceleratorManufacturers;
    }

    // accelerator_names - computed: true, optional: true, required: false
    private _acceleratorNames?: string[]; 
    public get acceleratorNames() {
        return this.getListAttribute('accelerator_names');
    }
    public set acceleratorNames(value: string[]) {
        this._acceleratorNames = value;
    }
    public resetAcceleratorNames() {
        this._acceleratorNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorNamesInput() {
        return this._acceleratorNames;
    }

    // accelerator_total_memory_mi_b - computed: true, optional: true, required: false
    private _acceleratorTotalMemoryMiB = new AcceleratorTotalMemoryMiBRequestPropertyOutputReference(this, "accelerator_total_memory_mi_b");
    public get acceleratorTotalMemoryMiB() {
        return this._acceleratorTotalMemoryMiB;
    }
    public putAcceleratorTotalMemoryMiB(value: AcceleratorTotalMemoryMiBRequestProperty) {
        this._acceleratorTotalMemoryMiB.internalValue = value;
    }
    public resetAcceleratorTotalMemoryMiB() {
        this._acceleratorTotalMemoryMiB.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorTotalMemoryMiBInput() {
        return this._acceleratorTotalMemoryMiB.internalValue;
    }

    // accelerator_types - computed: true, optional: true, required: false
    private _acceleratorTypes?: string[]; 
    public get acceleratorTypes() {
        return this.getListAttribute('accelerator_types');
    }
    public set acceleratorTypes(value: string[]) {
        this._acceleratorTypes = value;
    }
    public resetAcceleratorTypes() {
        this._acceleratorTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorTypesInput() {
        return this._acceleratorTypes;
    }

    // allowed_instance_types - computed: true, optional: true, required: false
    private _allowedInstanceTypes?: string[]; 
    public get allowedInstanceTypes() {
        return this.getListAttribute('allowed_instance_types');
    }
    public set allowedInstanceTypes(value: string[]) {
        this._allowedInstanceTypes = value;
    }
    public resetAllowedInstanceTypes() {
        this._allowedInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedInstanceTypesInput() {
        return this._allowedInstanceTypes;
    }

    // bare_metal - computed: true, optional: true, required: false
    private _bareMetal?: string; 
    public get bareMetal() {
        return this.getStringAttribute('bare_metal');
    }
    public set bareMetal(value: string) {
        this._bareMetal = value;
    }
    public resetBareMetal() {
        this._bareMetal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bareMetalInput() {
        return this._bareMetal;
    }

    // baseline_ebs_bandwidth_mbps - computed: true, optional: true, required: false
    private _baselineEbsBandwidthMbps = new BaselineEbsBandwidthMbpsRequestPropertyOutputReference(this, "baseline_ebs_bandwidth_mbps");
    public get baselineEbsBandwidthMbps() {
        return this._baselineEbsBandwidthMbps;
    }
    public putBaselineEbsBandwidthMbps(value: BaselineEbsBandwidthMbpsRequestProperty) {
        this._baselineEbsBandwidthMbps.internalValue = value;
    }
    public resetBaselineEbsBandwidthMbps() {
        this._baselineEbsBandwidthMbps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baselineEbsBandwidthMbpsInput() {
        return this._baselineEbsBandwidthMbps.internalValue;
    }

    // burstable_performance - computed: true, optional: true, required: false
    private _burstablePerformance?: string; 
    public get burstablePerformance() {
        return this.getStringAttribute('burstable_performance');
    }
    public set burstablePerformance(value: string) {
        this._burstablePerformance = value;
    }
    public resetBurstablePerformance() {
        this._burstablePerformance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get burstablePerformanceInput() {
        return this._burstablePerformance;
    }

    // cpu_manufacturers - computed: true, optional: true, required: false
    private _cpuManufacturers?: string[]; 
    public get cpuManufacturers() {
        return this.getListAttribute('cpu_manufacturers');
    }
    public set cpuManufacturers(value: string[]) {
        this._cpuManufacturers = value;
    }
    public resetCpuManufacturers() {
        this._cpuManufacturers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuManufacturersInput() {
        return this._cpuManufacturers;
    }

    // excluded_instance_types - computed: true, optional: true, required: false
    private _excludedInstanceTypes?: string[]; 
    public get excludedInstanceTypes() {
        return this.getListAttribute('excluded_instance_types');
    }
    public set excludedInstanceTypes(value: string[]) {
        this._excludedInstanceTypes = value;
    }
    public resetExcludedInstanceTypes() {
        this._excludedInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedInstanceTypesInput() {
        return this._excludedInstanceTypes;
    }

    // instance_generations - computed: true, optional: true, required: false
    private _instanceGenerations?: string[]; 
    public get instanceGenerations() {
        return this.getListAttribute('instance_generations');
    }
    public set instanceGenerations(value: string[]) {
        this._instanceGenerations = value;
    }
    public resetInstanceGenerations() {
        this._instanceGenerations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceGenerationsInput() {
        return this._instanceGenerations;
    }

    // local_storage - computed: true, optional: true, required: false
    private _localStorage?: string; 
    public get localStorage() {
        return this.getStringAttribute('local_storage');
    }
    public set localStorage(value: string) {
        this._localStorage = value;
    }
    public resetLocalStorage() {
        this._localStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localStorageInput() {
        return this._localStorage;
    }

    // local_storage_types - computed: true, optional: true, required: false
    private _localStorageTypes?: string[]; 
    public get localStorageTypes() {
        return this.getListAttribute('local_storage_types');
    }
    public set localStorageTypes(value: string[]) {
        this._localStorageTypes = value;
    }
    public resetLocalStorageTypes() {
        this._localStorageTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localStorageTypesInput() {
        return this._localStorageTypes;
    }

    // max_spot_price_as_percentage_of_optimal_on_demand_price - computed: true, optional: true, required: false
    private _maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number; 
    public get maxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
        return this.getNumberAttribute('max_spot_price_as_percentage_of_optimal_on_demand_price');
    }
    public set maxSpotPriceAsPercentageOfOptimalOnDemandPrice(value: number) {
        this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = value;
    }
    public resetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice() {
        this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSpotPriceAsPercentageOfOptimalOnDemandPriceInput() {
        return this._maxSpotPriceAsPercentageOfOptimalOnDemandPrice;
    }

    // memory_gi_b_per_v_cpu - computed: true, optional: true, required: false
    private _memoryGiBPerVCpu = new MemoryGiBPerVCpuRequestPropertyOutputReference(this, "memory_gi_b_per_v_cpu");
    public get memoryGiBPerVCpu() {
        return this._memoryGiBPerVCpu;
    }
    public putMemoryGiBPerVCpu(value: MemoryGiBPerVCpuRequestProperty) {
        this._memoryGiBPerVCpu.internalValue = value;
    }
    public resetMemoryGiBPerVCpu() {
        this._memoryGiBPerVCpu.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryGiBPerVCpuInput() {
        return this._memoryGiBPerVCpu.internalValue;
    }

    // memory_mi_b - computed: true, optional: true, required: false
    private _memoryMiB = new MemoryMiBRequestPropertyOutputReference(this, "memory_mi_b");
    public get memoryMiB() {
        return this._memoryMiB;
    }
    public putMemoryMiB(value: MemoryMiBRequestProperty) {
        this._memoryMiB.internalValue = value;
    }
    public resetMemoryMiB() {
        this._memoryMiB.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryMiBInput() {
        return this._memoryMiB.internalValue;
    }

    // network_bandwidth_gbps - computed: true, optional: true, required: false
    private _networkBandwidthGbps = new NetworkBandwidthGbpsRequestPropertyOutputReference(this, "network_bandwidth_gbps");
    public get networkBandwidthGbps() {
        return this._networkBandwidthGbps;
    }
    public putNetworkBandwidthGbps(value: NetworkBandwidthGbpsRequestProperty) {
        this._networkBandwidthGbps.internalValue = value;
    }
    public resetNetworkBandwidthGbps() {
        this._networkBandwidthGbps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkBandwidthGbpsInput() {
        return this._networkBandwidthGbps.internalValue;
    }

    // network_interface_count - computed: true, optional: true, required: false
    private _networkInterfaceCount = new NetworkInterfaceCountRequestPropertyOutputReference(this, "network_interface_count");
    public get networkInterfaceCount() {
        return this._networkInterfaceCount;
    }
    public putNetworkInterfaceCount(value: NetworkInterfaceCountRequestProperty) {
        this._networkInterfaceCount.internalValue = value;
    }
    public resetNetworkInterfaceCount() {
        this._networkInterfaceCount.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceCountInput() {
        return this._networkInterfaceCount.internalValue;
    }

    // on_demand_max_price_percentage_over_lowest_price - computed: true, optional: true, required: false
    private _onDemandMaxPricePercentageOverLowestPrice?: number; 
    public get onDemandMaxPricePercentageOverLowestPrice() {
        return this.getNumberAttribute('on_demand_max_price_percentage_over_lowest_price');
    }
    public set onDemandMaxPricePercentageOverLowestPrice(value: number) {
        this._onDemandMaxPricePercentageOverLowestPrice = value;
    }
    public resetOnDemandMaxPricePercentageOverLowestPrice() {
        this._onDemandMaxPricePercentageOverLowestPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onDemandMaxPricePercentageOverLowestPriceInput() {
        return this._onDemandMaxPricePercentageOverLowestPrice;
    }

    // require_hibernate_support - computed: true, optional: true, required: false
    private _requireHibernateSupport?: boolean | cdktn.IResolvable; 
    public get requireHibernateSupport() {
        return this.getBooleanAttribute('require_hibernate_support');
    }
    public set requireHibernateSupport(value: boolean | cdktn.IResolvable) {
        this._requireHibernateSupport = value;
    }
    public resetRequireHibernateSupport() {
        this._requireHibernateSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireHibernateSupportInput() {
        return this._requireHibernateSupport;
    }

    // spot_max_price_percentage_over_lowest_price - computed: true, optional: true, required: false
    private _spotMaxPricePercentageOverLowestPrice?: number; 
    public get spotMaxPricePercentageOverLowestPrice() {
        return this.getNumberAttribute('spot_max_price_percentage_over_lowest_price');
    }
    public set spotMaxPricePercentageOverLowestPrice(value: number) {
        this._spotMaxPricePercentageOverLowestPrice = value;
    }
    public resetSpotMaxPricePercentageOverLowestPrice() {
        this._spotMaxPricePercentageOverLowestPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spotMaxPricePercentageOverLowestPriceInput() {
        return this._spotMaxPricePercentageOverLowestPrice;
    }

    // total_local_storage_gb - computed: true, optional: true, required: false
    private _totalLocalStorageGb = new TotalLocalStorageGBRequestPropertyOutputReference(this, "total_local_storage_gb");
    public get totalLocalStorageGb() {
        return this._totalLocalStorageGb;
    }
    public putTotalLocalStorageGb(value: TotalLocalStorageGBRequestProperty) {
        this._totalLocalStorageGb.internalValue = value;
    }
    public resetTotalLocalStorageGb() {
        this._totalLocalStorageGb.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get totalLocalStorageGbInput() {
        return this._totalLocalStorageGb.internalValue;
    }

    // v_cpu_count - computed: true, optional: true, required: false
    private _vCpuCount = new VCpuCountRangeRequestPropertyOutputReference(this, "v_cpu_count");
    public get vCpuCount() {
        return this._vCpuCount;
    }
    public putVCpuCount(value: VCpuCountRangeRequestProperty) {
        this._vCpuCount.internalValue = value;
    }
    public resetVCpuCount() {
        this._vCpuCount.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vCpuCountInput() {
        return this._vCpuCount.internalValue;
    }
}
export interface ManagedInstancesLocalStorageConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#use_local_storage CcCapacityProvider#use_local_storage}
    */
    readonly useLocalStorage?: boolean | cdktn.IResolvable;
}
export class ManagedInstancesLocalStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedInstancesLocalStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._useLocalStorage !== undefined) {
            hasAnyValues = true;
            internalValueResult.useLocalStorage = this._useLocalStorage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedInstancesLocalStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._useLocalStorage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._useLocalStorage = value.useLocalStorage;
        }
    }

    // use_local_storage - computed: true, optional: true, required: false
    private _useLocalStorage?: boolean | cdktn.IResolvable; 
    public get useLocalStorage() {
        return this.getBooleanAttribute('use_local_storage');
    }
    public set useLocalStorage(value: boolean | cdktn.IResolvable) {
        this._useLocalStorage = value;
    }
    public resetUseLocalStorage() {
        this._useLocalStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useLocalStorageInput() {
        return this._useLocalStorage;
    }
}
export interface ManagedInstancesNetworkConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#security_groups CcCapacityProvider#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#subnets CcCapacityProvider#subnets}
    */
    readonly subnets?: string[];
}
export class ManagedInstancesNetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedInstancesNetworkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedInstancesNetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroups = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroups = value.securityGroups;
            this._subnets = value.subnets;
        }
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
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
}
export interface ManagedInstancesStorageConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#storage_size_gi_b CcCapacityProvider#storage_size_gi_b}
    */
    readonly storageSizeGiB?: number;
}
export class ManagedInstancesStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedInstancesStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._storageSizeGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageSizeGiB = this._storageSizeGiB;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedInstancesStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._storageSizeGiB = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._storageSizeGiB = value.storageSizeGiB;
        }
    }

    // storage_size_gi_b - computed: true, optional: true, required: false
    private _storageSizeGiB?: number; 
    public get storageSizeGiB() {
        return this.getNumberAttribute('storage_size_gi_b');
    }
    public set storageSizeGiB(value: number) {
        this._storageSizeGiB = value;
    }
    public resetStorageSizeGiB() {
        this._storageSizeGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageSizeGiBInput() {
        return this._storageSizeGiB;
    }
}
export interface InstanceLaunchTemplateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#capacity_option_type CcCapacityProvider#capacity_option_type}
    */
    readonly capacityOptionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#capacity_reservations CcCapacityProvider#capacity_reservations}
    */
    readonly capacityReservations?: CapacityReservationRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#ec_2_instance_profile_arn CcCapacityProvider#ec_2_instance_profile_arn}
    */
    readonly ec2InstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#fips_enabled CcCapacityProvider#fips_enabled}
    */
    readonly fipsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#instance_metadata_tags_propagation CcCapacityProvider#instance_metadata_tags_propagation}
    */
    readonly instanceMetadataTagsPropagation?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#instance_requirements CcCapacityProvider#instance_requirements}
    */
    readonly instanceRequirements?: InstanceRequirementsRequestProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#local_storage_configuration CcCapacityProvider#local_storage_configuration}
    */
    readonly localStorageConfiguration?: ManagedInstancesLocalStorageConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#monitoring CcCapacityProvider#monitoring}
    */
    readonly monitoring?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#network_configuration CcCapacityProvider#network_configuration}
    */
    readonly networkConfiguration?: ManagedInstancesNetworkConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#storage_configuration CcCapacityProvider#storage_configuration}
    */
    readonly storageConfiguration?: ManagedInstancesStorageConfigurationProperty;
}
export class InstanceLaunchTemplatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceLaunchTemplateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityOptionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityOptionType = this._capacityOptionType;
        }
        if (this._capacityReservations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityReservations = this._capacityReservations?.internalValue;
        }
        if (this._ec2InstanceProfileArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2InstanceProfileArn = this._ec2InstanceProfileArn;
        }
        if (this._fipsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.fipsEnabled = this._fipsEnabled;
        }
        if (this._instanceMetadataTagsPropagation !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceMetadataTagsPropagation = this._instanceMetadataTagsPropagation;
        }
        if (this._instanceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRequirements = this._instanceRequirements?.internalValue;
        }
        if (this._localStorageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.localStorageConfiguration = this._localStorageConfiguration?.internalValue;
        }
        if (this._monitoring !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoring = this._monitoring;
        }
        if (this._networkConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
        }
        if (this._storageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageConfiguration = this._storageConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceLaunchTemplateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityOptionType = undefined;
            this._capacityReservations.internalValue = undefined;
            this._ec2InstanceProfileArn = undefined;
            this._fipsEnabled = undefined;
            this._instanceMetadataTagsPropagation = undefined;
            this._instanceRequirements.internalValue = undefined;
            this._localStorageConfiguration.internalValue = undefined;
            this._monitoring = undefined;
            this._networkConfiguration.internalValue = undefined;
            this._storageConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityOptionType = value.capacityOptionType;
            this._capacityReservations.internalValue = value.capacityReservations;
            this._ec2InstanceProfileArn = value.ec2InstanceProfileArn;
            this._fipsEnabled = value.fipsEnabled;
            this._instanceMetadataTagsPropagation = value.instanceMetadataTagsPropagation;
            this._instanceRequirements.internalValue = value.instanceRequirements;
            this._localStorageConfiguration.internalValue = value.localStorageConfiguration;
            this._monitoring = value.monitoring;
            this._networkConfiguration.internalValue = value.networkConfiguration;
            this._storageConfiguration.internalValue = value.storageConfiguration;
        }
    }

    // capacity_option_type - computed: true, optional: true, required: false
    private _capacityOptionType?: string; 
    public get capacityOptionType() {
        return this.getStringAttribute('capacity_option_type');
    }
    public set capacityOptionType(value: string) {
        this._capacityOptionType = value;
    }
    public resetCapacityOptionType() {
        this._capacityOptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityOptionTypeInput() {
        return this._capacityOptionType;
    }

    // capacity_reservations - computed: true, optional: true, required: false
    private _capacityReservations = new CapacityReservationRequestPropertyOutputReference(this, "capacity_reservations");
    public get capacityReservations() {
        return this._capacityReservations;
    }
    public putCapacityReservations(value: CapacityReservationRequestProperty) {
        this._capacityReservations.internalValue = value;
    }
    public resetCapacityReservations() {
        this._capacityReservations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityReservationsInput() {
        return this._capacityReservations.internalValue;
    }

    // ec_2_instance_profile_arn - computed: true, optional: true, required: false
    private _ec2InstanceProfileArn?: string; 
    public get ec2InstanceProfileArn() {
        return this.getStringAttribute('ec_2_instance_profile_arn');
    }
    public set ec2InstanceProfileArn(value: string) {
        this._ec2InstanceProfileArn = value;
    }
    public resetEc2InstanceProfileArn() {
        this._ec2InstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2InstanceProfileArnInput() {
        return this._ec2InstanceProfileArn;
    }

    // fips_enabled - computed: true, optional: true, required: false
    private _fipsEnabled?: boolean | cdktn.IResolvable; 
    public get fipsEnabled() {
        return this.getBooleanAttribute('fips_enabled');
    }
    public set fipsEnabled(value: boolean | cdktn.IResolvable) {
        this._fipsEnabled = value;
    }
    public resetFipsEnabled() {
        this._fipsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fipsEnabledInput() {
        return this._fipsEnabled;
    }

    // instance_metadata_tags_propagation - computed: true, optional: true, required: false
    private _instanceMetadataTagsPropagation?: boolean | cdktn.IResolvable; 
    public get instanceMetadataTagsPropagation() {
        return this.getBooleanAttribute('instance_metadata_tags_propagation');
    }
    public set instanceMetadataTagsPropagation(value: boolean | cdktn.IResolvable) {
        this._instanceMetadataTagsPropagation = value;
    }
    public resetInstanceMetadataTagsPropagation() {
        this._instanceMetadataTagsPropagation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMetadataTagsPropagationInput() {
        return this._instanceMetadataTagsPropagation;
    }

    // instance_requirements - computed: true, optional: true, required: false
    private _instanceRequirements = new InstanceRequirementsRequestPropertyOutputReference(this, "instance_requirements");
    public get instanceRequirements() {
        return this._instanceRequirements;
    }
    public putInstanceRequirements(value: InstanceRequirementsRequestProperty) {
        this._instanceRequirements.internalValue = value;
    }
    public resetInstanceRequirements() {
        this._instanceRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRequirementsInput() {
        return this._instanceRequirements.internalValue;
    }

    // local_storage_configuration - computed: true, optional: true, required: false
    private _localStorageConfiguration = new ManagedInstancesLocalStorageConfigurationPropertyOutputReference(this, "local_storage_configuration");
    public get localStorageConfiguration() {
        return this._localStorageConfiguration;
    }
    public putLocalStorageConfiguration(value: ManagedInstancesLocalStorageConfigurationProperty) {
        this._localStorageConfiguration.internalValue = value;
    }
    public resetLocalStorageConfiguration() {
        this._localStorageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localStorageConfigurationInput() {
        return this._localStorageConfiguration.internalValue;
    }

    // monitoring - computed: true, optional: true, required: false
    private _monitoring?: string; 
    public get monitoring() {
        return this.getStringAttribute('monitoring');
    }
    public set monitoring(value: string) {
        this._monitoring = value;
    }
    public resetMonitoring() {
        this._monitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringInput() {
        return this._monitoring;
    }

    // network_configuration - computed: true, optional: true, required: false
    private _networkConfiguration = new ManagedInstancesNetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: ManagedInstancesNetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    public resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }

    // storage_configuration - computed: true, optional: true, required: false
    private _storageConfiguration = new ManagedInstancesStorageConfigurationPropertyOutputReference(this, "storage_configuration");
    public get storageConfiguration() {
        return this._storageConfiguration;
    }
    public putStorageConfiguration(value: ManagedInstancesStorageConfigurationProperty) {
        this._storageConfiguration.internalValue = value;
    }
    public resetStorageConfiguration() {
        this._storageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConfigurationInput() {
        return this._storageConfiguration.internalValue;
    }
}
export interface ManagedInstancesProviderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#auto_repair_configuration CcCapacityProvider#auto_repair_configuration}
    */
    readonly autoRepairConfiguration?: AutoRepairConfigurationProperty;
    /**
    * Defines how Amazon ECS Managed Instances optimizes the infrastructure in your capacity provider. Configure it to turn on or off the infrastructure optimization in your capacity provider, and to control the idle EC2 instances optimization delay.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#infrastructure_optimization CcCapacityProvider#infrastructure_optimization}
    */
    readonly infrastructureOptimization?: InfrastructureOptimizationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#infrastructure_role_arn CcCapacityProvider#infrastructure_role_arn}
    */
    readonly infrastructureRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#instance_launch_template CcCapacityProvider#instance_launch_template}
    */
    readonly instanceLaunchTemplate?: InstanceLaunchTemplateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#propagate_tags CcCapacityProvider#propagate_tags}
    */
    readonly propagateTags?: string;
}
export class ManagedInstancesProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedInstancesProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoRepairConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoRepairConfiguration = this._autoRepairConfiguration?.internalValue;
        }
        if (this._infrastructureOptimization?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.infrastructureOptimization = this._infrastructureOptimization?.internalValue;
        }
        if (this._infrastructureRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.infrastructureRoleArn = this._infrastructureRoleArn;
        }
        if (this._instanceLaunchTemplate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceLaunchTemplate = this._instanceLaunchTemplate?.internalValue;
        }
        if (this._propagateTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagateTags = this._propagateTags;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedInstancesProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoRepairConfiguration.internalValue = undefined;
            this._infrastructureOptimization.internalValue = undefined;
            this._infrastructureRoleArn = undefined;
            this._instanceLaunchTemplate.internalValue = undefined;
            this._propagateTags = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoRepairConfiguration.internalValue = value.autoRepairConfiguration;
            this._infrastructureOptimization.internalValue = value.infrastructureOptimization;
            this._infrastructureRoleArn = value.infrastructureRoleArn;
            this._instanceLaunchTemplate.internalValue = value.instanceLaunchTemplate;
            this._propagateTags = value.propagateTags;
        }
    }

    // auto_repair_configuration - computed: true, optional: true, required: false
    private _autoRepairConfiguration = new AutoRepairConfigurationPropertyOutputReference(this, "auto_repair_configuration");
    public get autoRepairConfiguration() {
        return this._autoRepairConfiguration;
    }
    public putAutoRepairConfiguration(value: AutoRepairConfigurationProperty) {
        this._autoRepairConfiguration.internalValue = value;
    }
    public resetAutoRepairConfiguration() {
        this._autoRepairConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoRepairConfigurationInput() {
        return this._autoRepairConfiguration.internalValue;
    }

    // infrastructure_optimization - computed: true, optional: true, required: false
    private _infrastructureOptimization = new InfrastructureOptimizationPropertyOutputReference(this, "infrastructure_optimization");
    public get infrastructureOptimization() {
        return this._infrastructureOptimization;
    }
    public putInfrastructureOptimization(value: InfrastructureOptimizationProperty) {
        this._infrastructureOptimization.internalValue = value;
    }
    public resetInfrastructureOptimization() {
        this._infrastructureOptimization.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get infrastructureOptimizationInput() {
        return this._infrastructureOptimization.internalValue;
    }

    // infrastructure_role_arn - computed: true, optional: true, required: false
    private _infrastructureRoleArn?: string; 
    public get infrastructureRoleArn() {
        return this.getStringAttribute('infrastructure_role_arn');
    }
    public set infrastructureRoleArn(value: string) {
        this._infrastructureRoleArn = value;
    }
    public resetInfrastructureRoleArn() {
        this._infrastructureRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get infrastructureRoleArnInput() {
        return this._infrastructureRoleArn;
    }

    // instance_launch_template - computed: true, optional: true, required: false
    private _instanceLaunchTemplate = new InstanceLaunchTemplatePropertyOutputReference(this, "instance_launch_template");
    public get instanceLaunchTemplate() {
        return this._instanceLaunchTemplate;
    }
    public putInstanceLaunchTemplate(value: InstanceLaunchTemplateProperty) {
        this._instanceLaunchTemplate.internalValue = value;
    }
    public resetInstanceLaunchTemplate() {
        this._instanceLaunchTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceLaunchTemplateInput() {
        return this._instanceLaunchTemplate.internalValue;
    }

    // propagate_tags - computed: true, optional: true, required: false
    private _propagateTags?: string; 
    public get propagateTags() {
        return this.getStringAttribute('propagate_tags');
    }
    public set propagateTags(value: string) {
        this._propagateTags = value;
    }
    public resetPropagateTags() {
        this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
        return this._propagateTags;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#key CcCapacityProvider#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecs_capacity_provider#value CcCapacityProvider#value}
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
