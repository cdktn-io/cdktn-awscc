// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScalingPlanProps extends cdktn.TerraformMetaArguments {
    /**
    * A CloudFormation stack or a set of tags. You can create one scaling plan per application source. The ApplicationSource property must be present to ensure interoperability with the AWS Auto Scaling console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#application_source CcScalingPlan#application_source}
    */
    readonly applicationSource: CcScalingPlan.ApplicationSourceProperty;
    /**
    * The scaling instructions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scaling_instructions CcScalingPlan#scaling_instructions}
    */
    readonly scalingInstructions: CcScalingPlan.ScalingInstructionProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan awscc_autoscalingplans_scaling_plan}
*/
export class CcScalingPlan extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_autoscalingplans_scaling_plan";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScalingPlan resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScalingPlan to import
    * @param importFromId The id of the existing CcScalingPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScalingPlan to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscalingplans_scaling_plan", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan awscc_autoscalingplans_scaling_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScalingPlanProps
    */
    public constructor(scope: Construct, id: string, config: CcScalingPlanProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_autoscalingplans_scaling_plan',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._applicationSource.internalValue = config.applicationSource;
        this._scalingInstructions.internalValue = config.scalingInstructions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_source - computed: false, optional: false, required: true
    private _applicationSource = new CcScalingPlan.ApplicationSourcePropertyOutputReference(this, "application_source");
    public get applicationSource() {
        return this._applicationSource;
    }
    public putApplicationSource(value: CcScalingPlan.ApplicationSourceProperty) {
        this._applicationSource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationSourceInput() {
        return this._applicationSource.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // scaling_instructions - computed: false, optional: false, required: true
    private _scalingInstructions = new CcScalingPlan.ScalingInstructionPropertyList(this, "scaling_instructions", false);
    public get scalingInstructions() {
        return this._scalingInstructions;
    }
    public putScalingInstructions(value: CcScalingPlan.ScalingInstructionProperty[] | cdktn.IResolvable) {
        this._scalingInstructions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingInstructionsInput() {
        return this._scalingInstructions.internalValue;
    }

    // scaling_plan_arn - computed: true, optional: false, required: false
    public get scalingPlanArn() {
        return this.getStringAttribute('scaling_plan_arn');
    }

    // scaling_plan_name - computed: true, optional: false, required: false
    public get scalingPlanName() {
        return this.getStringAttribute('scaling_plan_name');
    }

    // scaling_plan_version - computed: true, optional: false, required: false
    public get scalingPlanVersion() {
        return this.getStringAttribute('scaling_plan_version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_source: ccScalingPlanApplicationSourcePropertyToTerraform(this._applicationSource.internalValue),
            scaling_instructions: cdktn.listMapper(ccScalingPlanScalingInstructionPropertyToTerraform, false)(this._scalingInstructions.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_source: {
                value: ccScalingPlanApplicationSourcePropertyToHclTerraform(this._applicationSource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScalingPlan.ApplicationSourceProperty",
            },
            scaling_instructions: {
                value: cdktn.listMapperHcl(ccScalingPlanScalingInstructionPropertyToHclTerraform, false)(this._scalingInstructions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcScalingPlan.ScalingInstructionPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScalingPlanTagFilterPropertyToTerraform(struct?: CcScalingPlan.TagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccScalingPlanTagFilterPropertyToHclTerraform(struct?: CcScalingPlan.TagFilterProperty | cdktn.IResolvable): any {
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
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPlanApplicationSourcePropertyToTerraform(struct?: CcScalingPlan.ApplicationSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudformation_stack_arn: cdktn.stringToTerraform(struct!.cloudformationStackArn),
        tag_filters: cdktn.listMapper(ccScalingPlanTagFilterPropertyToTerraform, false)(struct!.tagFilters),
    }
}


export function ccScalingPlanApplicationSourcePropertyToHclTerraform(struct?: CcScalingPlan.ApplicationSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudformation_stack_arn: {
            value: cdktn.stringToHclTerraform(struct!.cloudformationStackArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_filters: {
            value: cdktn.listMapperHcl(ccScalingPlanTagFilterPropertyToHclTerraform, false)(struct!.tagFilters),
            isBlock: true,
            type: "list",
            storageClassType: "TagFilterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPlanMetricDimensionPropertyToTerraform(struct?: CcScalingPlan.MetricDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPlanMetricDimensionPropertyToHclTerraform(struct?: CcScalingPlan.MetricDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccScalingPlanCustomizedLoadMetricSpecificationPropertyToTerraform(struct?: CcScalingPlan.CustomizedLoadMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPlanMetricDimensionPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
        statistic: cdktn.stringToTerraform(struct!.statistic),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPlanCustomizedLoadMetricSpecificationPropertyToHclTerraform(struct?: CcScalingPlan.CustomizedLoadMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPlanMetricDimensionPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "MetricDimensionPropertyList",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        statistic: {
            value: cdktn.stringToHclTerraform(struct!.statistic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPlanPredefinedLoadMetricSpecificationPropertyToTerraform(struct?: CcScalingPlan.PredefinedLoadMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        predefined_load_metric_type: cdktn.stringToTerraform(struct!.predefinedLoadMetricType),
        resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
    }
}


export function ccScalingPlanPredefinedLoadMetricSpecificationPropertyToHclTerraform(struct?: CcScalingPlan.PredefinedLoadMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        predefined_load_metric_type: {
            value: cdktn.stringToHclTerraform(struct!.predefinedLoadMetricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_label: {
            value: cdktn.stringToHclTerraform(struct!.resourceLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPlanDimensionsPropertyToTerraform(struct?: CcScalingPlan.DimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPlanDimensionsPropertyToHclTerraform(struct?: CcScalingPlan.DimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccScalingPlanCustomizedScalingMetricSpecificationPropertyToTerraform(struct?: CcScalingPlan.CustomizedScalingMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPlanDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
        statistic: cdktn.stringToTerraform(struct!.statistic),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPlanCustomizedScalingMetricSpecificationPropertyToHclTerraform(struct?: CcScalingPlan.CustomizedScalingMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPlanDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "DimensionsPropertyList",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        statistic: {
            value: cdktn.stringToHclTerraform(struct!.statistic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPlanPredefinedScalingMetricSpecificationPropertyToTerraform(struct?: CcScalingPlan.PredefinedScalingMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        predefined_scaling_metric_type: cdktn.stringToTerraform(struct!.predefinedScalingMetricType),
        resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
    }
}


export function ccScalingPlanPredefinedScalingMetricSpecificationPropertyToHclTerraform(struct?: CcScalingPlan.PredefinedScalingMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        predefined_scaling_metric_type: {
            value: cdktn.stringToHclTerraform(struct!.predefinedScalingMetricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_label: {
            value: cdktn.stringToHclTerraform(struct!.resourceLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPlanTargetTrackingConfigurationPropertyToTerraform(struct?: CcScalingPlan.TargetTrackingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customized_scaling_metric_specification: ccScalingPlanCustomizedScalingMetricSpecificationPropertyToTerraform(struct!.customizedScalingMetricSpecification),
        disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
        estimated_instance_warmup: cdktn.numberToTerraform(struct!.estimatedInstanceWarmup),
        predefined_scaling_metric_specification: ccScalingPlanPredefinedScalingMetricSpecificationPropertyToTerraform(struct!.predefinedScalingMetricSpecification),
        scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
        scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccScalingPlanTargetTrackingConfigurationPropertyToHclTerraform(struct?: CcScalingPlan.TargetTrackingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customized_scaling_metric_specification: {
            value: ccScalingPlanCustomizedScalingMetricSpecificationPropertyToHclTerraform(struct!.customizedScalingMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomizedScalingMetricSpecificationProperty",
        },
        disable_scale_in: {
            value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        estimated_instance_warmup: {
            value: cdktn.numberToHclTerraform(struct!.estimatedInstanceWarmup),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        predefined_scaling_metric_specification: {
            value: ccScalingPlanPredefinedScalingMetricSpecificationPropertyToHclTerraform(struct!.predefinedScalingMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredefinedScalingMetricSpecificationProperty",
        },
        scale_in_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_out_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccScalingPlanScalingInstructionPropertyToTerraform(struct?: CcScalingPlan.ScalingInstructionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customized_load_metric_specification: ccScalingPlanCustomizedLoadMetricSpecificationPropertyToTerraform(struct!.customizedLoadMetricSpecification),
        disable_dynamic_scaling: cdktn.booleanToTerraform(struct!.disableDynamicScaling),
        max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
        min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
        predefined_load_metric_specification: ccScalingPlanPredefinedLoadMetricSpecificationPropertyToTerraform(struct!.predefinedLoadMetricSpecification),
        predictive_scaling_max_capacity_behavior: cdktn.stringToTerraform(struct!.predictiveScalingMaxCapacityBehavior),
        predictive_scaling_max_capacity_buffer: cdktn.numberToTerraform(struct!.predictiveScalingMaxCapacityBuffer),
        predictive_scaling_mode: cdktn.stringToTerraform(struct!.predictiveScalingMode),
        resource_id: cdktn.stringToTerraform(struct!.resourceId),
        scalable_dimension: cdktn.stringToTerraform(struct!.scalableDimension),
        scaling_policy_update_behavior: cdktn.stringToTerraform(struct!.scalingPolicyUpdateBehavior),
        scheduled_action_buffer_time: cdktn.numberToTerraform(struct!.scheduledActionBufferTime),
        service_namespace: cdktn.stringToTerraform(struct!.serviceNamespace),
        target_tracking_configurations: cdktn.listMapper(ccScalingPlanTargetTrackingConfigurationPropertyToTerraform, false)(struct!.targetTrackingConfigurations),
    }
}


export function ccScalingPlanScalingInstructionPropertyToHclTerraform(struct?: CcScalingPlan.ScalingInstructionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customized_load_metric_specification: {
            value: ccScalingPlanCustomizedLoadMetricSpecificationPropertyToHclTerraform(struct!.customizedLoadMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomizedLoadMetricSpecificationProperty",
        },
        disable_dynamic_scaling: {
            value: cdktn.booleanToHclTerraform(struct!.disableDynamicScaling),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_capacity: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_capacity: {
            value: cdktn.numberToHclTerraform(struct!.minCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        predefined_load_metric_specification: {
            value: ccScalingPlanPredefinedLoadMetricSpecificationPropertyToHclTerraform(struct!.predefinedLoadMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredefinedLoadMetricSpecificationProperty",
        },
        predictive_scaling_max_capacity_behavior: {
            value: cdktn.stringToHclTerraform(struct!.predictiveScalingMaxCapacityBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        predictive_scaling_max_capacity_buffer: {
            value: cdktn.numberToHclTerraform(struct!.predictiveScalingMaxCapacityBuffer),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        predictive_scaling_mode: {
            value: cdktn.stringToHclTerraform(struct!.predictiveScalingMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_id: {
            value: cdktn.stringToHclTerraform(struct!.resourceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scalable_dimension: {
            value: cdktn.stringToHclTerraform(struct!.scalableDimension),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scaling_policy_update_behavior: {
            value: cdktn.stringToHclTerraform(struct!.scalingPolicyUpdateBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheduled_action_buffer_time: {
            value: cdktn.numberToHclTerraform(struct!.scheduledActionBufferTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        service_namespace: {
            value: cdktn.stringToHclTerraform(struct!.serviceNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_tracking_configurations: {
            value: cdktn.listMapperHcl(ccScalingPlanTargetTrackingConfigurationPropertyToHclTerraform, false)(struct!.targetTrackingConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "TargetTrackingConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcScalingPlan {
export interface TagFilterProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#key CcScalingPlan#key}
    */
    readonly key?: string;
    /**
    * The tag values (0 to 20).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#values CcScalingPlan#values}
    */
    readonly values?: string[];
}
export class TagFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._values = value.values;
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class TagFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : TagFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): TagFilterPropertyOutputReference {
        return new TagFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ApplicationSourceProperty {
    /**
    * The Amazon Resource Name (ARN) of a CloudFormation stack. The stack must contain at least one scalable resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#cloudformation_stack_arn CcScalingPlan#cloudformation_stack_arn}
    */
    readonly cloudformationStackArn?: string;
    /**
    * A set of tag filters (keys and values). Each tag filter specified must contain a key with values as optional. Each scaling plan can include up to 50 keys, and each key can include up to 20 values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#tag_filters CcScalingPlan#tag_filters}
    */
    readonly tagFilters?: TagFilterProperty[] | cdktn.IResolvable;
}
export class ApplicationSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApplicationSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudformationStackArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudformationStackArn = this._cloudformationStackArn;
        }
        if (this._tagFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagFilters = this._tagFilters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudformationStackArn = undefined;
            this._tagFilters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudformationStackArn = value.cloudformationStackArn;
            this._tagFilters.internalValue = value.tagFilters;
        }
    }

    // cloudformation_stack_arn - computed: true, optional: true, required: false
    private _cloudformationStackArn?: string; 
    public get cloudformationStackArn() {
        return this.getStringAttribute('cloudformation_stack_arn');
    }
    public set cloudformationStackArn(value: string) {
        this._cloudformationStackArn = value;
    }
    public resetCloudformationStackArn() {
        this._cloudformationStackArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudformationStackArnInput() {
        return this._cloudformationStackArn;
    }

    // tag_filters - computed: true, optional: true, required: false
    private _tagFilters = new TagFilterPropertyList(this, "tag_filters", false);
    public get tagFilters() {
        return this._tagFilters;
    }
    public putTagFilters(value: TagFilterProperty[] | cdktn.IResolvable) {
        this._tagFilters.internalValue = value;
    }
    public resetTagFilters() {
        this._tagFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagFiltersInput() {
        return this._tagFilters.internalValue;
    }
}
export interface MetricDimensionProperty {
    /**
    * The name of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#name CcScalingPlan#name}
    */
    readonly name?: string;
    /**
    * The value of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#value CcScalingPlan#value}
    */
    readonly value?: string;
}
export class MetricDimensionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricDimensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricDimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
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

export class MetricDimensionPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricDimensionProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricDimensionPropertyOutputReference {
        return new MetricDimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomizedLoadMetricSpecificationProperty {
    /**
    * The dimensions of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#dimensions CcScalingPlan#dimensions}
    */
    readonly dimensions?: MetricDimensionProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#metric_name CcScalingPlan#metric_name}
    */
    readonly metricName?: string;
    /**
    * The namespace of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#namespace CcScalingPlan#namespace}
    */
    readonly namespace?: string;
    /**
    * The statistic of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#statistic CcScalingPlan#statistic}
    */
    readonly statistic?: string;
    /**
    * The unit of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#unit CcScalingPlan#unit}
    */
    readonly unit?: string;
}
export class CustomizedLoadMetricSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomizedLoadMetricSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._statistic !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistic = this._statistic;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomizedLoadMetricSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
            this._statistic = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._statistic = value.statistic;
            this._unit = value.unit;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new MetricDimensionPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: MetricDimensionProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // statistic - computed: true, optional: true, required: false
    private _statistic?: string; 
    public get statistic() {
        return this.getStringAttribute('statistic');
    }
    public set statistic(value: string) {
        this._statistic = value;
    }
    public resetStatistic() {
        this._statistic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticInput() {
        return this._statistic;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}
export interface PredefinedLoadMetricSpecificationProperty {
    /**
    * The metric type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_load_metric_type CcScalingPlan#predefined_load_metric_type}
    */
    readonly predefinedLoadMetricType?: string;
    /**
    * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ALBTargetGroupRequestCount and there is a target group for an Application Load Balancer attached to the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_label CcScalingPlan#resource_label}
    */
    readonly resourceLabel?: string;
}
export class PredefinedLoadMetricSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredefinedLoadMetricSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._predefinedLoadMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedLoadMetricType = this._predefinedLoadMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredefinedLoadMetricSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._predefinedLoadMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._predefinedLoadMetricType = value.predefinedLoadMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }

    // predefined_load_metric_type - computed: true, optional: true, required: false
    private _predefinedLoadMetricType?: string; 
    public get predefinedLoadMetricType() {
        return this.getStringAttribute('predefined_load_metric_type');
    }
    public set predefinedLoadMetricType(value: string) {
        this._predefinedLoadMetricType = value;
    }
    public resetPredefinedLoadMetricType() {
        this._predefinedLoadMetricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedLoadMetricTypeInput() {
        return this._predefinedLoadMetricType;
    }

    // resource_label - computed: true, optional: true, required: false
    private _resourceLabel?: string; 
    public get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    public set resourceLabel(value: string) {
        this._resourceLabel = value;
    }
    public resetResourceLabel() {
        this._resourceLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceLabelInput() {
        return this._resourceLabel;
    }
}
export interface DimensionsProperty {
    /**
    * The name of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#name CcScalingPlan#name}
    */
    readonly name?: string;
    /**
    * The value of the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#value CcScalingPlan#value}
    */
    readonly value?: string;
}
export class DimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DimensionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DimensionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
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

export class DimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : DimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): DimensionsPropertyOutputReference {
        return new DimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomizedScalingMetricSpecificationProperty {
    /**
    * The dimensions of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#dimensions CcScalingPlan#dimensions}
    */
    readonly dimensions?: DimensionsProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#metric_name CcScalingPlan#metric_name}
    */
    readonly metricName?: string;
    /**
    * The namespace of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#namespace CcScalingPlan#namespace}
    */
    readonly namespace?: string;
    /**
    * The statistic of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#statistic CcScalingPlan#statistic}
    */
    readonly statistic?: string;
    /**
    * The unit of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#unit CcScalingPlan#unit}
    */
    readonly unit?: string;
}
export class CustomizedScalingMetricSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomizedScalingMetricSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._statistic !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistic = this._statistic;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomizedScalingMetricSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
            this._statistic = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._statistic = value.statistic;
            this._unit = value.unit;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new DimensionsPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: DimensionsProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // statistic - computed: true, optional: true, required: false
    private _statistic?: string; 
    public get statistic() {
        return this.getStringAttribute('statistic');
    }
    public set statistic(value: string) {
        this._statistic = value;
    }
    public resetStatistic() {
        this._statistic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticInput() {
        return this._statistic;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}
export interface PredefinedScalingMetricSpecificationProperty {
    /**
    * The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_scaling_metric_type CcScalingPlan#predefined_scaling_metric_type}
    */
    readonly predefinedScalingMetricType?: string;
    /**
    * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_label CcScalingPlan#resource_label}
    */
    readonly resourceLabel?: string;
}
export class PredefinedScalingMetricSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredefinedScalingMetricSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._predefinedScalingMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedScalingMetricType = this._predefinedScalingMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredefinedScalingMetricSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._predefinedScalingMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._predefinedScalingMetricType = value.predefinedScalingMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }

    // predefined_scaling_metric_type - computed: true, optional: true, required: false
    private _predefinedScalingMetricType?: string; 
    public get predefinedScalingMetricType() {
        return this.getStringAttribute('predefined_scaling_metric_type');
    }
    public set predefinedScalingMetricType(value: string) {
        this._predefinedScalingMetricType = value;
    }
    public resetPredefinedScalingMetricType() {
        this._predefinedScalingMetricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedScalingMetricTypeInput() {
        return this._predefinedScalingMetricType;
    }

    // resource_label - computed: true, optional: true, required: false
    private _resourceLabel?: string; 
    public get resourceLabel() {
        return this.getStringAttribute('resource_label');
    }
    public set resourceLabel(value: string) {
        this._resourceLabel = value;
    }
    public resetResourceLabel() {
        this._resourceLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceLabelInput() {
        return this._resourceLabel;
    }
}
export interface TargetTrackingConfigurationProperty {
    /**
    * A customized metric. You can specify either a predefined metric or a customized metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#customized_scaling_metric_specification CcScalingPlan#customized_scaling_metric_specification}
    */
    readonly customizedScalingMetricSpecification?: CustomizedScalingMetricSpecificationProperty;
    /**
    * Indicates whether scale in by the target tracking scaling policy is disabled. If the value is true, scale in is disabled and the target tracking scaling policy doesn't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource. The default value is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#disable_scale_in CcScalingPlan#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktn.IResolvable;
    /**
    * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#estimated_instance_warmup CcScalingPlan#estimated_instance_warmup}
    */
    readonly estimatedInstanceWarmup?: number;
    /**
    * A predefined metric. You can specify either a predefined metric or a customized metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_scaling_metric_specification CcScalingPlan#predefined_scaling_metric_specification}
    */
    readonly predefinedScalingMetricSpecification?: PredefinedScalingMetricSpecificationProperty;
    /**
    * The amount of time, in seconds, after a scale-in activity completes before another scale in activity can start. This value is not used if the scalable resource is an Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scale_in_cooldown CcScalingPlan#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. This value is not used if the scalable resource is an Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scale_out_cooldown CcScalingPlan#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * The target value for the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#target_value CcScalingPlan#target_value}
    */
    readonly targetValue: number;
}
export class TargetTrackingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetTrackingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customizedScalingMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedScalingMetricSpecification = this._customizedScalingMetricSpecification?.internalValue;
        }
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._estimatedInstanceWarmup !== undefined) {
            hasAnyValues = true;
            internalValueResult.estimatedInstanceWarmup = this._estimatedInstanceWarmup;
        }
        if (this._predefinedScalingMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedScalingMetricSpecification = this._predefinedScalingMetricSpecification?.internalValue;
        }
        if (this._scaleInCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInCooldown = this._scaleInCooldown;
        }
        if (this._scaleOutCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customizedScalingMetricSpecification.internalValue = undefined;
            this._disableScaleIn = undefined;
            this._estimatedInstanceWarmup = undefined;
            this._predefinedScalingMetricSpecification.internalValue = undefined;
            this._scaleInCooldown = undefined;
            this._scaleOutCooldown = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customizedScalingMetricSpecification.internalValue = value.customizedScalingMetricSpecification;
            this._disableScaleIn = value.disableScaleIn;
            this._estimatedInstanceWarmup = value.estimatedInstanceWarmup;
            this._predefinedScalingMetricSpecification.internalValue = value.predefinedScalingMetricSpecification;
            this._scaleInCooldown = value.scaleInCooldown;
            this._scaleOutCooldown = value.scaleOutCooldown;
            this._targetValue = value.targetValue;
        }
    }

    // customized_scaling_metric_specification - computed: true, optional: true, required: false
    private _customizedScalingMetricSpecification = new CustomizedScalingMetricSpecificationPropertyOutputReference(this, "customized_scaling_metric_specification");
    public get customizedScalingMetricSpecification() {
        return this._customizedScalingMetricSpecification;
    }
    public putCustomizedScalingMetricSpecification(value: CustomizedScalingMetricSpecificationProperty) {
        this._customizedScalingMetricSpecification.internalValue = value;
    }
    public resetCustomizedScalingMetricSpecification() {
        this._customizedScalingMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizedScalingMetricSpecificationInput() {
        return this._customizedScalingMetricSpecification.internalValue;
    }

    // disable_scale_in - computed: true, optional: true, required: false
    private _disableScaleIn?: boolean | cdktn.IResolvable; 
    public get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    public set disableScaleIn(value: boolean | cdktn.IResolvable) {
        this._disableScaleIn = value;
    }
    public resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableScaleInInput() {
        return this._disableScaleIn;
    }

    // estimated_instance_warmup - computed: true, optional: true, required: false
    private _estimatedInstanceWarmup?: number; 
    public get estimatedInstanceWarmup() {
        return this.getNumberAttribute('estimated_instance_warmup');
    }
    public set estimatedInstanceWarmup(value: number) {
        this._estimatedInstanceWarmup = value;
    }
    public resetEstimatedInstanceWarmup() {
        this._estimatedInstanceWarmup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get estimatedInstanceWarmupInput() {
        return this._estimatedInstanceWarmup;
    }

    // predefined_scaling_metric_specification - computed: true, optional: true, required: false
    private _predefinedScalingMetricSpecification = new PredefinedScalingMetricSpecificationPropertyOutputReference(this, "predefined_scaling_metric_specification");
    public get predefinedScalingMetricSpecification() {
        return this._predefinedScalingMetricSpecification;
    }
    public putPredefinedScalingMetricSpecification(value: PredefinedScalingMetricSpecificationProperty) {
        this._predefinedScalingMetricSpecification.internalValue = value;
    }
    public resetPredefinedScalingMetricSpecification() {
        this._predefinedScalingMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedScalingMetricSpecificationInput() {
        return this._predefinedScalingMetricSpecification.internalValue;
    }

    // scale_in_cooldown - computed: true, optional: true, required: false
    private _scaleInCooldown?: number; 
    public get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    public set scaleInCooldown(value: number) {
        this._scaleInCooldown = value;
    }
    public resetScaleInCooldown() {
        this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInCooldownInput() {
        return this._scaleInCooldown;
    }

    // scale_out_cooldown - computed: true, optional: true, required: false
    private _scaleOutCooldown?: number; 
    public get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    public set scaleOutCooldown(value: number) {
        this._scaleOutCooldown = value;
    }
    public resetScaleOutCooldown() {
        this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutCooldownInput() {
        return this._scaleOutCooldown;
    }

    // target_value - computed: false, optional: false, required: true
    private _targetValue?: number; 
    public get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    public set targetValue(value: number) {
        this._targetValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetValueInput() {
        return this._targetValue;
    }
}

export class TargetTrackingConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetTrackingConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetTrackingConfigurationPropertyOutputReference {
        return new TargetTrackingConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ScalingInstructionProperty {
    /**
    * The customized load metric to use for predictive scaling. This property or a PredefinedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#customized_load_metric_specification CcScalingPlan#customized_load_metric_specification}
    */
    readonly customizedLoadMetricSpecification?: CustomizedLoadMetricSpecificationProperty;
    /**
    * Controls whether dynamic scaling is disabled. When dynamic scaling is enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target tracking configurations. The default is enabled (false).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#disable_dynamic_scaling CcScalingPlan#disable_dynamic_scaling}
    */
    readonly disableDynamicScaling?: boolean | cdktn.IResolvable;
    /**
    * The maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for PredictiveScalingMaxCapacityBehavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#max_capacity CcScalingPlan#max_capacity}
    */
    readonly maxCapacity: number;
    /**
    * The minimum capacity of the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#min_capacity CcScalingPlan#min_capacity}
    */
    readonly minCapacity: number;
    /**
    * The predefined load metric to use for predictive scaling. This property or a CustomizedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predefined_load_metric_specification CcScalingPlan#predefined_load_metric_specification}
    */
    readonly predefinedLoadMetricSpecification?: PredefinedLoadMetricSpecificationProperty;
    /**
    * Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. The default value is SetForecastCapacityToMaxCapacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_behavior CcScalingPlan#predictive_scaling_max_capacity_behavior}
    */
    readonly predictiveScalingMaxCapacityBehavior?: string;
    /**
    * The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer. The range is 1-100. Required if PredictiveScalingMaxCapacityBehavior is set to SetMaxCapacityAboveForecastCapacity, and cannot be used otherwise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_max_capacity_buffer CcScalingPlan#predictive_scaling_max_capacity_buffer}
    */
    readonly predictiveScalingMaxCapacityBuffer?: number;
    /**
    * The predictive scaling mode. The default value is ForecastAndScale. Otherwise, AWS Auto Scaling forecasts capacity but does not apply any scheduled scaling actions based on the capacity forecast.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#predictive_scaling_mode CcScalingPlan#predictive_scaling_mode}
    */
    readonly predictiveScalingMode?: string;
    /**
    * The ID of the resource. This string consists of the resource type and unique identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#resource_id CcScalingPlan#resource_id}
    */
    readonly resourceId: string;
    /**
    * The scalable dimension associated with the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scalable_dimension CcScalingPlan#scalable_dimension}
    */
    readonly scalableDimension: string;
    /**
    * Controls whether a resource's externally created scaling policies are deleted and new target tracking scaling policies created. The default value is KeepExternalPolicies. Valid only when configuring dynamic scaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scaling_policy_update_behavior CcScalingPlan#scaling_policy_update_behavior}
    */
    readonly scalingPolicyUpdateBehavior?: string;
    /**
    * The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. The value must be less than the forecast interval duration of 3600 seconds (60 minutes). The default is 300 seconds. Valid only when configuring predictive scaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#scheduled_action_buffer_time CcScalingPlan#scheduled_action_buffer_time}
    */
    readonly scheduledActionBufferTime?: number;
    /**
    * The namespace of the AWS service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#service_namespace CcScalingPlan#service_namespace}
    */
    readonly serviceNamespace: string;
    /**
    * The target tracking configurations (up to 10). Each of these structures must specify a unique scaling metric and a target value for the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/autoscalingplans_scaling_plan#target_tracking_configurations CcScalingPlan#target_tracking_configurations}
    */
    readonly targetTrackingConfigurations: TargetTrackingConfigurationProperty[] | cdktn.IResolvable;
}
export class ScalingInstructionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ScalingInstructionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customizedLoadMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedLoadMetricSpecification = this._customizedLoadMetricSpecification?.internalValue;
        }
        if (this._disableDynamicScaling !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableDynamicScaling = this._disableDynamicScaling;
        }
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        if (this._predefinedLoadMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedLoadMetricSpecification = this._predefinedLoadMetricSpecification?.internalValue;
        }
        if (this._predictiveScalingMaxCapacityBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.predictiveScalingMaxCapacityBehavior = this._predictiveScalingMaxCapacityBehavior;
        }
        if (this._predictiveScalingMaxCapacityBuffer !== undefined) {
            hasAnyValues = true;
            internalValueResult.predictiveScalingMaxCapacityBuffer = this._predictiveScalingMaxCapacityBuffer;
        }
        if (this._predictiveScalingMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.predictiveScalingMode = this._predictiveScalingMode;
        }
        if (this._resourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId;
        }
        if (this._scalableDimension !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalableDimension = this._scalableDimension;
        }
        if (this._scalingPolicyUpdateBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingPolicyUpdateBehavior = this._scalingPolicyUpdateBehavior;
        }
        if (this._scheduledActionBufferTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduledActionBufferTime = this._scheduledActionBufferTime;
        }
        if (this._serviceNamespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNamespace = this._serviceNamespace;
        }
        if (this._targetTrackingConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTrackingConfigurations = this._targetTrackingConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScalingInstructionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customizedLoadMetricSpecification.internalValue = undefined;
            this._disableDynamicScaling = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
            this._predefinedLoadMetricSpecification.internalValue = undefined;
            this._predictiveScalingMaxCapacityBehavior = undefined;
            this._predictiveScalingMaxCapacityBuffer = undefined;
            this._predictiveScalingMode = undefined;
            this._resourceId = undefined;
            this._scalableDimension = undefined;
            this._scalingPolicyUpdateBehavior = undefined;
            this._scheduledActionBufferTime = undefined;
            this._serviceNamespace = undefined;
            this._targetTrackingConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customizedLoadMetricSpecification.internalValue = value.customizedLoadMetricSpecification;
            this._disableDynamicScaling = value.disableDynamicScaling;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
            this._predefinedLoadMetricSpecification.internalValue = value.predefinedLoadMetricSpecification;
            this._predictiveScalingMaxCapacityBehavior = value.predictiveScalingMaxCapacityBehavior;
            this._predictiveScalingMaxCapacityBuffer = value.predictiveScalingMaxCapacityBuffer;
            this._predictiveScalingMode = value.predictiveScalingMode;
            this._resourceId = value.resourceId;
            this._scalableDimension = value.scalableDimension;
            this._scalingPolicyUpdateBehavior = value.scalingPolicyUpdateBehavior;
            this._scheduledActionBufferTime = value.scheduledActionBufferTime;
            this._serviceNamespace = value.serviceNamespace;
            this._targetTrackingConfigurations.internalValue = value.targetTrackingConfigurations;
        }
    }

    // customized_load_metric_specification - computed: true, optional: true, required: false
    private _customizedLoadMetricSpecification = new CustomizedLoadMetricSpecificationPropertyOutputReference(this, "customized_load_metric_specification");
    public get customizedLoadMetricSpecification() {
        return this._customizedLoadMetricSpecification;
    }
    public putCustomizedLoadMetricSpecification(value: CustomizedLoadMetricSpecificationProperty) {
        this._customizedLoadMetricSpecification.internalValue = value;
    }
    public resetCustomizedLoadMetricSpecification() {
        this._customizedLoadMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizedLoadMetricSpecificationInput() {
        return this._customizedLoadMetricSpecification.internalValue;
    }

    // disable_dynamic_scaling - computed: true, optional: true, required: false
    private _disableDynamicScaling?: boolean | cdktn.IResolvable; 
    public get disableDynamicScaling() {
        return this.getBooleanAttribute('disable_dynamic_scaling');
    }
    public set disableDynamicScaling(value: boolean | cdktn.IResolvable) {
        this._disableDynamicScaling = value;
    }
    public resetDisableDynamicScaling() {
        this._disableDynamicScaling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableDynamicScalingInput() {
        return this._disableDynamicScaling;
    }

    // max_capacity - computed: false, optional: false, required: true
    private _maxCapacity?: number; 
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
        return this._maxCapacity;
    }

    // min_capacity - computed: false, optional: false, required: true
    private _minCapacity?: number; 
    public get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    public set minCapacity(value: number) {
        this._minCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
        return this._minCapacity;
    }

    // predefined_load_metric_specification - computed: true, optional: true, required: false
    private _predefinedLoadMetricSpecification = new PredefinedLoadMetricSpecificationPropertyOutputReference(this, "predefined_load_metric_specification");
    public get predefinedLoadMetricSpecification() {
        return this._predefinedLoadMetricSpecification;
    }
    public putPredefinedLoadMetricSpecification(value: PredefinedLoadMetricSpecificationProperty) {
        this._predefinedLoadMetricSpecification.internalValue = value;
    }
    public resetPredefinedLoadMetricSpecification() {
        this._predefinedLoadMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedLoadMetricSpecificationInput() {
        return this._predefinedLoadMetricSpecification.internalValue;
    }

    // predictive_scaling_max_capacity_behavior - computed: true, optional: true, required: false
    private _predictiveScalingMaxCapacityBehavior?: string; 
    public get predictiveScalingMaxCapacityBehavior() {
        return this.getStringAttribute('predictive_scaling_max_capacity_behavior');
    }
    public set predictiveScalingMaxCapacityBehavior(value: string) {
        this._predictiveScalingMaxCapacityBehavior = value;
    }
    public resetPredictiveScalingMaxCapacityBehavior() {
        this._predictiveScalingMaxCapacityBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predictiveScalingMaxCapacityBehaviorInput() {
        return this._predictiveScalingMaxCapacityBehavior;
    }

    // predictive_scaling_max_capacity_buffer - computed: true, optional: true, required: false
    private _predictiveScalingMaxCapacityBuffer?: number; 
    public get predictiveScalingMaxCapacityBuffer() {
        return this.getNumberAttribute('predictive_scaling_max_capacity_buffer');
    }
    public set predictiveScalingMaxCapacityBuffer(value: number) {
        this._predictiveScalingMaxCapacityBuffer = value;
    }
    public resetPredictiveScalingMaxCapacityBuffer() {
        this._predictiveScalingMaxCapacityBuffer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predictiveScalingMaxCapacityBufferInput() {
        return this._predictiveScalingMaxCapacityBuffer;
    }

    // predictive_scaling_mode - computed: true, optional: true, required: false
    private _predictiveScalingMode?: string; 
    public get predictiveScalingMode() {
        return this.getStringAttribute('predictive_scaling_mode');
    }
    public set predictiveScalingMode(value: string) {
        this._predictiveScalingMode = value;
    }
    public resetPredictiveScalingMode() {
        this._predictiveScalingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predictiveScalingModeInput() {
        return this._predictiveScalingMode;
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // scalable_dimension - computed: false, optional: false, required: true
    private _scalableDimension?: string; 
    public get scalableDimension() {
        return this.getStringAttribute('scalable_dimension');
    }
    public set scalableDimension(value: string) {
        this._scalableDimension = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalableDimensionInput() {
        return this._scalableDimension;
    }

    // scaling_policy_update_behavior - computed: true, optional: true, required: false
    private _scalingPolicyUpdateBehavior?: string; 
    public get scalingPolicyUpdateBehavior() {
        return this.getStringAttribute('scaling_policy_update_behavior');
    }
    public set scalingPolicyUpdateBehavior(value: string) {
        this._scalingPolicyUpdateBehavior = value;
    }
    public resetScalingPolicyUpdateBehavior() {
        this._scalingPolicyUpdateBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingPolicyUpdateBehaviorInput() {
        return this._scalingPolicyUpdateBehavior;
    }

    // scheduled_action_buffer_time - computed: true, optional: true, required: false
    private _scheduledActionBufferTime?: number; 
    public get scheduledActionBufferTime() {
        return this.getNumberAttribute('scheduled_action_buffer_time');
    }
    public set scheduledActionBufferTime(value: number) {
        this._scheduledActionBufferTime = value;
    }
    public resetScheduledActionBufferTime() {
        this._scheduledActionBufferTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledActionBufferTimeInput() {
        return this._scheduledActionBufferTime;
    }

    // service_namespace - computed: false, optional: false, required: true
    private _serviceNamespace?: string; 
    public get serviceNamespace() {
        return this.getStringAttribute('service_namespace');
    }
    public set serviceNamespace(value: string) {
        this._serviceNamespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNamespaceInput() {
        return this._serviceNamespace;
    }

    // target_tracking_configurations - computed: false, optional: false, required: true
    private _targetTrackingConfigurations = new TargetTrackingConfigurationPropertyList(this, "target_tracking_configurations", false);
    public get targetTrackingConfigurations() {
        return this._targetTrackingConfigurations;
    }
    public putTargetTrackingConfigurations(value: TargetTrackingConfigurationProperty[] | cdktn.IResolvable) {
        this._targetTrackingConfigurations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingConfigurationsInput() {
        return this._targetTrackingConfigurations.internalValue;
    }
}

export class ScalingInstructionPropertyList extends cdktn.ComplexList {
    public internalValue? : ScalingInstructionProperty[] | cdktn.IResolvable

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
    public get(index: number): ScalingInstructionPropertyOutputReference {
        return new ScalingInstructionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
