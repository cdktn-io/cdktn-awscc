// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScalingPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies how the scaling adjustment is interpreted. The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#adjustment_type CcScalingPolicy#adjustment_type}
    */
    readonly adjustmentType?: string;
    /**
    * The name of the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#auto_scaling_group_name CcScalingPolicy#auto_scaling_group_name}
    */
    readonly autoScalingGroupName: string;
    /**
    * The duration of the policy's cooldown period, in seconds. When a cooldown period is specified here, it overrides the default cooldown period defined for the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#cooldown CcScalingPolicy#cooldown}
    */
    readonly cooldown?: string;
    /**
    * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. If not provided, the default is to use the value from the default cooldown period for the Auto Scaling group. Valid only if the policy type is TargetTrackingScaling or StepScaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#estimated_instance_warmup CcScalingPolicy#estimated_instance_warmup}
    */
    readonly estimatedInstanceWarmup?: number;
    /**
    * The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average. Valid only if the policy type is StepScaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_aggregation_type CcScalingPolicy#metric_aggregation_type}
    */
    readonly metricAggregationType?: string;
    /**
    * The minimum value to scale by when the adjustment type is PercentChangeInCapacity. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a MinAdjustmentMagnitude of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a MinAdjustmentMagnitude of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#min_adjustment_magnitude CcScalingPolicy#min_adjustment_magnitude}
    */
    readonly minAdjustmentMagnitude?: number;
    /**
    * One of the following policy types: TargetTrackingScaling, StepScaling, SimpleScaling (default), PredictiveScaling
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#policy_type CcScalingPolicy#policy_type}
    */
    readonly policyType?: string;
    /**
    * A predictive scaling policy. Includes support for predefined metrics only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#predictive_scaling_configuration CcScalingPolicy#predictive_scaling_configuration}
    */
    readonly predictiveScalingConfiguration?: CcScalingPolicy.PredictiveScalingConfigurationProperty;
    /**
    * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value. Required if the policy type is SimpleScaling. (Not used with any other policy type.)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#scaling_adjustment CcScalingPolicy#scaling_adjustment}
    */
    readonly scalingAdjustment?: number;
    /**
    * A set of adjustments that enable you to scale based on the size of the alarm breach. Required if the policy type is StepScaling. (Not used with any other policy type.)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#step_adjustments CcScalingPolicy#step_adjustments}
    */
    readonly stepAdjustments?: CcScalingPolicy.StepAdjustmentProperty[] | cdktn.IResolvable;
    /**
    * A target tracking scaling policy. Includes support for predefined or customized metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#target_tracking_configuration CcScalingPolicy#target_tracking_configuration}
    */
    readonly targetTrackingConfiguration?: CcScalingPolicy.TargetTrackingConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy awscc_autoscaling_scaling_policy}
*/
export class CcScalingPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_autoscaling_scaling_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScalingPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScalingPolicy to import
    * @param importFromId The id of the existing CcScalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScalingPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscaling_scaling_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy awscc_autoscaling_scaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScalingPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcScalingPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_autoscaling_scaling_policy',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._adjustmentType = config.adjustmentType;
        this._autoScalingGroupName = config.autoScalingGroupName;
        this._cooldown = config.cooldown;
        this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
        this._metricAggregationType = config.metricAggregationType;
        this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
        this._policyType = config.policyType;
        this._predictiveScalingConfiguration.internalValue = config.predictiveScalingConfiguration;
        this._scalingAdjustment = config.scalingAdjustment;
        this._stepAdjustments.internalValue = config.stepAdjustments;
        this._targetTrackingConfiguration.internalValue = config.targetTrackingConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // adjustment_type - computed: true, optional: true, required: false
    private _adjustmentType?: string; 
    public get adjustmentType() {
        return this.getStringAttribute('adjustment_type');
    }
    public set adjustmentType(value: string) {
        this._adjustmentType = value;
    }
    public resetAdjustmentType() {
        this._adjustmentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adjustmentTypeInput() {
        return this._adjustmentType;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auto_scaling_group_name - computed: false, optional: false, required: true
    private _autoScalingGroupName?: string; 
    public get autoScalingGroupName() {
        return this.getStringAttribute('auto_scaling_group_name');
    }
    public set autoScalingGroupName(value: string) {
        this._autoScalingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingGroupNameInput() {
        return this._autoScalingGroupName;
    }

    // cooldown - computed: true, optional: true, required: false
    private _cooldown?: string; 
    public get cooldown() {
        return this.getStringAttribute('cooldown');
    }
    public set cooldown(value: string) {
        this._cooldown = value;
    }
    public resetCooldown() {
        this._cooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cooldownInput() {
        return this._cooldown;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // metric_aggregation_type - computed: true, optional: true, required: false
    private _metricAggregationType?: string; 
    public get metricAggregationType() {
        return this.getStringAttribute('metric_aggregation_type');
    }
    public set metricAggregationType(value: string) {
        this._metricAggregationType = value;
    }
    public resetMetricAggregationType() {
        this._metricAggregationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricAggregationTypeInput() {
        return this._metricAggregationType;
    }

    // min_adjustment_magnitude - computed: true, optional: true, required: false
    private _minAdjustmentMagnitude?: number; 
    public get minAdjustmentMagnitude() {
        return this.getNumberAttribute('min_adjustment_magnitude');
    }
    public set minAdjustmentMagnitude(value: number) {
        this._minAdjustmentMagnitude = value;
    }
    public resetMinAdjustmentMagnitude() {
        this._minAdjustmentMagnitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minAdjustmentMagnitudeInput() {
        return this._minAdjustmentMagnitude;
    }

    // policy_name - computed: true, optional: false, required: false
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }

    // policy_type - computed: true, optional: true, required: false
    private _policyType?: string; 
    public get policyType() {
        return this.getStringAttribute('policy_type');
    }
    public set policyType(value: string) {
        this._policyType = value;
    }
    public resetPolicyType() {
        this._policyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTypeInput() {
        return this._policyType;
    }

    // predictive_scaling_configuration - computed: true, optional: true, required: false
    private _predictiveScalingConfiguration = new CcScalingPolicy.PredictiveScalingConfigurationPropertyOutputReference(this, "predictive_scaling_configuration");
    public get predictiveScalingConfiguration() {
        return this._predictiveScalingConfiguration;
    }
    public putPredictiveScalingConfiguration(value: CcScalingPolicy.PredictiveScalingConfigurationProperty) {
        this._predictiveScalingConfiguration.internalValue = value;
    }
    public resetPredictiveScalingConfiguration() {
        this._predictiveScalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predictiveScalingConfigurationInput() {
        return this._predictiveScalingConfiguration.internalValue;
    }

    // scaling_adjustment - computed: true, optional: true, required: false
    private _scalingAdjustment?: number; 
    public get scalingAdjustment() {
        return this.getNumberAttribute('scaling_adjustment');
    }
    public set scalingAdjustment(value: number) {
        this._scalingAdjustment = value;
    }
    public resetScalingAdjustment() {
        this._scalingAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingAdjustmentInput() {
        return this._scalingAdjustment;
    }

    // step_adjustments - computed: true, optional: true, required: false
    private _stepAdjustments = new CcScalingPolicy.StepAdjustmentPropertyList(this, "step_adjustments", true);
    public get stepAdjustments() {
        return this._stepAdjustments;
    }
    public putStepAdjustments(value: CcScalingPolicy.StepAdjustmentProperty[] | cdktn.IResolvable) {
        this._stepAdjustments.internalValue = value;
    }
    public resetStepAdjustments() {
        this._stepAdjustments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepAdjustmentsInput() {
        return this._stepAdjustments.internalValue;
    }

    // target_tracking_configuration - computed: true, optional: true, required: false
    private _targetTrackingConfiguration = new CcScalingPolicy.TargetTrackingConfigurationPropertyOutputReference(this, "target_tracking_configuration");
    public get targetTrackingConfiguration() {
        return this._targetTrackingConfiguration;
    }
    public putTargetTrackingConfiguration(value: CcScalingPolicy.TargetTrackingConfigurationProperty) {
        this._targetTrackingConfiguration.internalValue = value;
    }
    public resetTargetTrackingConfiguration() {
        this._targetTrackingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingConfigurationInput() {
        return this._targetTrackingConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            adjustment_type: cdktn.stringToTerraform(this._adjustmentType),
            auto_scaling_group_name: cdktn.stringToTerraform(this._autoScalingGroupName),
            cooldown: cdktn.stringToTerraform(this._cooldown),
            estimated_instance_warmup: cdktn.numberToTerraform(this._estimatedInstanceWarmup),
            metric_aggregation_type: cdktn.stringToTerraform(this._metricAggregationType),
            min_adjustment_magnitude: cdktn.numberToTerraform(this._minAdjustmentMagnitude),
            policy_type: cdktn.stringToTerraform(this._policyType),
            predictive_scaling_configuration: ccScalingPolicyPredictiveScalingConfigurationPropertyToTerraform(this._predictiveScalingConfiguration.internalValue),
            scaling_adjustment: cdktn.numberToTerraform(this._scalingAdjustment),
            step_adjustments: cdktn.listMapper(ccScalingPolicyStepAdjustmentPropertyToTerraform, false)(this._stepAdjustments.internalValue),
            target_tracking_configuration: ccScalingPolicyTargetTrackingConfigurationPropertyToTerraform(this._targetTrackingConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            adjustment_type: {
                value: cdktn.stringToHclTerraform(this._adjustmentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_scaling_group_name: {
                value: cdktn.stringToHclTerraform(this._autoScalingGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cooldown: {
                value: cdktn.stringToHclTerraform(this._cooldown),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            estimated_instance_warmup: {
                value: cdktn.numberToHclTerraform(this._estimatedInstanceWarmup),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            metric_aggregation_type: {
                value: cdktn.stringToHclTerraform(this._metricAggregationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            min_adjustment_magnitude: {
                value: cdktn.numberToHclTerraform(this._minAdjustmentMagnitude),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            policy_type: {
                value: cdktn.stringToHclTerraform(this._policyType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            predictive_scaling_configuration: {
                value: ccScalingPolicyPredictiveScalingConfigurationPropertyToHclTerraform(this._predictiveScalingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScalingPolicy.PredictiveScalingConfigurationProperty",
            },
            scaling_adjustment: {
                value: cdktn.numberToHclTerraform(this._scalingAdjustment),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            step_adjustments: {
                value: cdktn.listMapperHcl(ccScalingPolicyStepAdjustmentPropertyToHclTerraform, false)(this._stepAdjustments.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcScalingPolicy.StepAdjustmentPropertyList",
            },
            target_tracking_configuration: {
                value: ccScalingPolicyTargetTrackingConfigurationPropertyToHclTerraform(this._targetTrackingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScalingPolicy.TargetTrackingConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScalingPolicyMetricDimensionPropertyToTerraform(struct?: CcScalingPolicy.MetricDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPolicyMetricDimensionPropertyToHclTerraform(struct?: CcScalingPolicy.MetricDimensionProperty | cdktn.IResolvable): any {
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


export function ccScalingPolicyMetricPropertyToTerraform(struct?: CcScalingPolicy.MetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPolicyMetricDimensionPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccScalingPolicyMetricPropertyToHclTerraform(struct?: CcScalingPolicy.MetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPolicyMetricDimensionPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "set",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyMetricStatPropertyToTerraform(struct?: CcScalingPolicy.MetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccScalingPolicyMetricPropertyToTerraform(struct!.metric),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPolicyMetricStatPropertyToHclTerraform(struct?: CcScalingPolicy.MetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccScalingPolicyMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricProperty",
        },
        stat: {
            value: cdktn.stringToHclTerraform(struct!.stat),
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


export function ccScalingPolicyMetricDataQueryPropertyToTerraform(struct?: CcScalingPolicy.MetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        label: cdktn.stringToTerraform(struct!.label),
        metric_stat: ccScalingPolicyMetricStatPropertyToTerraform(struct!.metricStat),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccScalingPolicyMetricDataQueryPropertyToHclTerraform(struct?: CcScalingPolicy.MetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktn.stringToHclTerraform(struct!.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_stat: {
            value: ccScalingPolicyMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricStatProperty",
        },
        return_data: {
            value: cdktn.booleanToHclTerraform(struct!.returnData),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingCustomizedCapacityMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedCapacityMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_data_queries: cdktn.listMapper(ccScalingPolicyMetricDataQueryPropertyToTerraform, false)(struct!.metricDataQueries),
    }
}


export function ccScalingPolicyPredictiveScalingCustomizedCapacityMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedCapacityMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_data_queries: {
            value: cdktn.listMapperHcl(ccScalingPolicyMetricDataQueryPropertyToHclTerraform, false)(struct!.metricDataQueries),
            isBlock: true,
            type: "set",
            storageClassType: "MetricDataQueryPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
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


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "set",
            storageClassType: "PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToTerraform(struct!.metric),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty",
        },
        stat: {
            value: cdktn.stringToHclTerraform(struct!.stat),
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


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        label: cdktn.stringToTerraform(struct!.label),
        metric_stat: ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyToTerraform(struct!.metricStat),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktn.stringToHclTerraform(struct!.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_stat: {
            value: ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty",
        },
        return_data: {
            value: cdktn.booleanToHclTerraform(struct!.returnData),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingCustomizedLoadMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedLoadMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_data_queries: cdktn.listMapper(ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyToTerraform, false)(struct!.metricDataQueries),
    }
}


export function ccScalingPolicyPredictiveScalingCustomizedLoadMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedLoadMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_data_queries: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyToHclTerraform, false)(struct!.metricDataQueries),
            isBlock: true,
            type: "set",
            storageClassType: "PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
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


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "set",
            storageClassType: "PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToTerraform(struct!.metric),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty",
        },
        stat: {
            value: cdktn.stringToHclTerraform(struct!.stat),
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


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        label: cdktn.stringToTerraform(struct!.label),
        metric_stat: ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyToTerraform(struct!.metricStat),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktn.stringToHclTerraform(struct!.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_stat: {
            value: ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty",
        },
        return_data: {
            value: cdktn.booleanToHclTerraform(struct!.returnData),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingCustomizedScalingMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedScalingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_data_queries: cdktn.listMapper(ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyToTerraform, false)(struct!.metricDataQueries),
    }
}


export function ccScalingPolicyPredictiveScalingCustomizedScalingMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingCustomizedScalingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_data_queries: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyToHclTerraform, false)(struct!.metricDataQueries),
            isBlock: true,
            type: "set",
            storageClassType: "PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyPredictiveScalingPredefinedLoadMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedLoadMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
        resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
    }
}


export function ccScalingPolicyPredictiveScalingPredefinedLoadMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedLoadMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
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


export function ccScalingPolicyPredictiveScalingPredefinedMetricPairPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedMetricPairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
        resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
    }
}


export function ccScalingPolicyPredictiveScalingPredefinedMetricPairPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedMetricPairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
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


export function ccScalingPolicyPredictiveScalingPredefinedScalingMetricPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedScalingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
        resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
    }
}


export function ccScalingPolicyPredictiveScalingPredefinedScalingMetricPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingPredefinedScalingMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
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


export function ccScalingPolicyPredictiveScalingMetricSpecificationPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customized_capacity_metric_specification: ccScalingPolicyPredictiveScalingCustomizedCapacityMetricPropertyToTerraform(struct!.customizedCapacityMetricSpecification),
        customized_load_metric_specification: ccScalingPolicyPredictiveScalingCustomizedLoadMetricPropertyToTerraform(struct!.customizedLoadMetricSpecification),
        customized_scaling_metric_specification: ccScalingPolicyPredictiveScalingCustomizedScalingMetricPropertyToTerraform(struct!.customizedScalingMetricSpecification),
        predefined_load_metric_specification: ccScalingPolicyPredictiveScalingPredefinedLoadMetricPropertyToTerraform(struct!.predefinedLoadMetricSpecification),
        predefined_metric_pair_specification: ccScalingPolicyPredictiveScalingPredefinedMetricPairPropertyToTerraform(struct!.predefinedMetricPairSpecification),
        predefined_scaling_metric_specification: ccScalingPolicyPredictiveScalingPredefinedScalingMetricPropertyToTerraform(struct!.predefinedScalingMetricSpecification),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccScalingPolicyPredictiveScalingMetricSpecificationPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customized_capacity_metric_specification: {
            value: ccScalingPolicyPredictiveScalingCustomizedCapacityMetricPropertyToHclTerraform(struct!.customizedCapacityMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingCustomizedCapacityMetricProperty",
        },
        customized_load_metric_specification: {
            value: ccScalingPolicyPredictiveScalingCustomizedLoadMetricPropertyToHclTerraform(struct!.customizedLoadMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingCustomizedLoadMetricProperty",
        },
        customized_scaling_metric_specification: {
            value: ccScalingPolicyPredictiveScalingCustomizedScalingMetricPropertyToHclTerraform(struct!.customizedScalingMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingCustomizedScalingMetricProperty",
        },
        predefined_load_metric_specification: {
            value: ccScalingPolicyPredictiveScalingPredefinedLoadMetricPropertyToHclTerraform(struct!.predefinedLoadMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingPredefinedLoadMetricProperty",
        },
        predefined_metric_pair_specification: {
            value: ccScalingPolicyPredictiveScalingPredefinedMetricPairPropertyToHclTerraform(struct!.predefinedMetricPairSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingPredefinedMetricPairProperty",
        },
        predefined_scaling_metric_specification: {
            value: ccScalingPolicyPredictiveScalingPredefinedScalingMetricPropertyToHclTerraform(struct!.predefinedScalingMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveScalingPredefinedScalingMetricProperty",
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


export function ccScalingPolicyPredictiveScalingConfigurationPropertyToTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_capacity_breach_behavior: cdktn.stringToTerraform(struct!.maxCapacityBreachBehavior),
        max_capacity_buffer: cdktn.numberToTerraform(struct!.maxCapacityBuffer),
        metric_specifications: cdktn.listMapper(ccScalingPolicyPredictiveScalingMetricSpecificationPropertyToTerraform, false)(struct!.metricSpecifications),
        mode: cdktn.stringToTerraform(struct!.mode),
        scheduling_buffer_time: cdktn.numberToTerraform(struct!.schedulingBufferTime),
    }
}


export function ccScalingPolicyPredictiveScalingConfigurationPropertyToHclTerraform(struct?: CcScalingPolicy.PredictiveScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_capacity_breach_behavior: {
            value: cdktn.stringToHclTerraform(struct!.maxCapacityBreachBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_capacity_buffer: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacityBuffer),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        metric_specifications: {
            value: cdktn.listMapperHcl(ccScalingPolicyPredictiveScalingMetricSpecificationPropertyToHclTerraform, false)(struct!.metricSpecifications),
            isBlock: true,
            type: "set",
            storageClassType: "PredictiveScalingMetricSpecificationPropertyList",
        },
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheduling_buffer_time: {
            value: cdktn.numberToHclTerraform(struct!.schedulingBufferTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyStepAdjustmentPropertyToTerraform(struct?: CcScalingPolicy.StepAdjustmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_interval_lower_bound: cdktn.numberToTerraform(struct!.metricIntervalLowerBound),
        metric_interval_upper_bound: cdktn.numberToTerraform(struct!.metricIntervalUpperBound),
        scaling_adjustment: cdktn.numberToTerraform(struct!.scalingAdjustment),
    }
}


export function ccScalingPolicyStepAdjustmentPropertyToHclTerraform(struct?: CcScalingPolicy.StepAdjustmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_interval_lower_bound: {
            value: cdktn.numberToHclTerraform(struct!.metricIntervalLowerBound),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        metric_interval_upper_bound: {
            value: cdktn.numberToHclTerraform(struct!.metricIntervalUpperBound),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scaling_adjustment: {
            value: cdktn.numberToHclTerraform(struct!.scalingAdjustment),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsPropertyToTerraform(struct?: CcScalingPolicy.TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsPropertyToHclTerraform(struct?: CcScalingPolicy.TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsProperty | cdktn.IResolvable): any {
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


export function ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsPropertyToTerraform(struct?: CcScalingPolicy.TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsPropertyToHclTerraform(struct?: CcScalingPolicy.TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
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


export function ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricPropertyToTerraform(struct?: CcScalingPolicy.TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricPropertyToHclTerraform(struct?: CcScalingPolicy.TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "set",
            storageClassType: "TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsPropertyList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyTargetTrackingMetricStatPropertyToTerraform(struct?: CcScalingPolicy.TargetTrackingMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricPropertyToTerraform(struct!.metric),
        period: cdktn.numberToTerraform(struct!.period),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPolicyTargetTrackingMetricStatPropertyToHclTerraform(struct?: CcScalingPolicy.TargetTrackingMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricProperty",
        },
        period: {
            value: cdktn.numberToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stat: {
            value: cdktn.stringToHclTerraform(struct!.stat),
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


export function ccScalingPolicyTargetTrackingMetricDataQueryPropertyToTerraform(struct?: CcScalingPolicy.TargetTrackingMetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        label: cdktn.stringToTerraform(struct!.label),
        metric_stat: ccScalingPolicyTargetTrackingMetricStatPropertyToTerraform(struct!.metricStat),
        period: cdktn.numberToTerraform(struct!.period),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccScalingPolicyTargetTrackingMetricDataQueryPropertyToHclTerraform(struct?: CcScalingPolicy.TargetTrackingMetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktn.stringToHclTerraform(struct!.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_stat: {
            value: ccScalingPolicyTargetTrackingMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetTrackingMetricStatProperty",
        },
        period: {
            value: cdktn.numberToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        return_data: {
            value: cdktn.booleanToHclTerraform(struct!.returnData),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalingPolicyCustomizedMetricSpecificationPropertyToTerraform(struct?: CcScalingPolicy.CustomizedMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        metrics: cdktn.listMapper(ccScalingPolicyTargetTrackingMetricDataQueryPropertyToTerraform, false)(struct!.metrics),
        namespace: cdktn.stringToTerraform(struct!.namespace),
        period: cdktn.numberToTerraform(struct!.period),
        statistic: cdktn.stringToTerraform(struct!.statistic),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccScalingPolicyCustomizedMetricSpecificationPropertyToHclTerraform(struct?: CcScalingPolicy.CustomizedMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "set",
            storageClassType: "TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsPropertyList",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metrics: {
            value: cdktn.listMapperHcl(ccScalingPolicyTargetTrackingMetricDataQueryPropertyToHclTerraform, false)(struct!.metrics),
            isBlock: true,
            type: "set",
            storageClassType: "TargetTrackingMetricDataQueryPropertyList",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        period: {
            value: cdktn.numberToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccScalingPolicyPredefinedMetricSpecificationPropertyToTerraform(struct?: CcScalingPolicy.PredefinedMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        predefined_metric_type: cdktn.stringToTerraform(struct!.predefinedMetricType),
        resource_label: cdktn.stringToTerraform(struct!.resourceLabel),
    }
}


export function ccScalingPolicyPredefinedMetricSpecificationPropertyToHclTerraform(struct?: CcScalingPolicy.PredefinedMetricSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        predefined_metric_type: {
            value: cdktn.stringToHclTerraform(struct!.predefinedMetricType),
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


export function ccScalingPolicyTargetTrackingConfigurationPropertyToTerraform(struct?: CcScalingPolicy.TargetTrackingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customized_metric_specification: ccScalingPolicyCustomizedMetricSpecificationPropertyToTerraform(struct!.customizedMetricSpecification),
        disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
        predefined_metric_specification: ccScalingPolicyPredefinedMetricSpecificationPropertyToTerraform(struct!.predefinedMetricSpecification),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccScalingPolicyTargetTrackingConfigurationPropertyToHclTerraform(struct?: CcScalingPolicy.TargetTrackingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customized_metric_specification: {
            value: ccScalingPolicyCustomizedMetricSpecificationPropertyToHclTerraform(struct!.customizedMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomizedMetricSpecificationProperty",
        },
        disable_scale_in: {
            value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        predefined_metric_specification: {
            value: ccScalingPolicyPredefinedMetricSpecificationPropertyToHclTerraform(struct!.predefinedMetricSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "PredefinedMetricSpecificationProperty",
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


export namespace CcScalingPolicy {
export interface MetricDimensionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#name CcScalingPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#value CcScalingPolicy#value}
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
export interface MetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#dimensions CcScalingPolicy#dimensions}
    */
    readonly dimensions?: MetricDimensionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_name CcScalingPolicy#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#namespace CcScalingPolicy#namespace}
    */
    readonly namespace?: string;
}
export class MetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricProperty | cdktn.IResolvable | undefined {
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
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
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new MetricDimensionPropertyList(this, "dimensions", true);
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
}
export interface MetricStatProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric CcScalingPolicy#metric}
    */
    readonly metric?: MetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#stat CcScalingPolicy#stat}
    */
    readonly stat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#unit CcScalingPolicy#unit}
    */
    readonly unit?: string;
}
export class MetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricStatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        if (this._stat !== undefined) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricStatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metric.internalValue = undefined;
            this._stat = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metric.internalValue = value.metric;
            this._stat = value.stat;
            this._unit = value.unit;
        }
    }

    // metric - computed: true, optional: true, required: false
    private _metric = new MetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: MetricProperty) {
        this._metric.internalValue = value;
    }
    public resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric.internalValue;
    }

    // stat - computed: true, optional: true, required: false
    private _stat?: string; 
    public get stat() {
        return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
        this._stat = value;
    }
    public resetStat() {
        this._stat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
        return this._stat;
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
export interface MetricDataQueryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#expression CcScalingPolicy#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#id CcScalingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#label CcScalingPolicy#label}
    */
    readonly label?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_stat CcScalingPolicy#metric_stat}
    */
    readonly metricStat?: MetricStatProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#return_data CcScalingPolicy#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class MetricDataQueryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricDataQueryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._metricStat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricStat = this._metricStat?.internalValue;
        }
        if (this._returnData !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnData = this._returnData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricDataQueryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._id = undefined;
            this._label = undefined;
            this._metricStat.internalValue = undefined;
            this._returnData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._id = value.id;
            this._label = value.label;
            this._metricStat.internalValue = value.metricStat;
            this._returnData = value.returnData;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // label - computed: true, optional: true, required: false
    private _label?: string; 
    public get label() {
        return this.getStringAttribute('label');
    }
    public set label(value: string) {
        this._label = value;
    }
    public resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelInput() {
        return this._label;
    }

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new MetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: MetricStatProperty) {
        this._metricStat.internalValue = value;
    }
    public resetMetricStat() {
        this._metricStat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricStatInput() {
        return this._metricStat.internalValue;
    }

    // return_data - computed: true, optional: true, required: false
    private _returnData?: boolean | cdktn.IResolvable; 
    public get returnData() {
        return this.getBooleanAttribute('return_data');
    }
    public set returnData(value: boolean | cdktn.IResolvable) {
        this._returnData = value;
    }
    public resetReturnData() {
        this._returnData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get returnDataInput() {
        return this._returnData;
    }
}

export class MetricDataQueryPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricDataQueryProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricDataQueryPropertyOutputReference {
        return new MetricDataQueryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingCustomizedCapacityMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_data_queries CcScalingPolicy#metric_data_queries}
    */
    readonly metricDataQueries?: MetricDataQueryProperty[] | cdktn.IResolvable;
}
export class PredictiveScalingCustomizedCapacityMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingCustomizedCapacityMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricDataQueries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingCustomizedCapacityMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = value.metricDataQueries;
        }
    }

    // metric_data_queries - computed: true, optional: true, required: false
    private _metricDataQueries = new MetricDataQueryPropertyList(this, "metric_data_queries", true);
    public get metricDataQueries() {
        return this._metricDataQueries;
    }
    public putMetricDataQueries(value: MetricDataQueryProperty[] | cdktn.IResolvable) {
        this._metricDataQueries.internalValue = value;
    }
    public resetMetricDataQueries() {
        this._metricDataQueries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDataQueriesInput() {
        return this._metricDataQueries.internalValue;
    }
}
export interface PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#name CcScalingPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#value CcScalingPolicy#value}
    */
    readonly value?: string;
}
export class PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined) {
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

export class PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference {
        return new PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#dimensions CcScalingPolicy#dimensions}
    */
    readonly dimensions?: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_name CcScalingPolicy#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#namespace CcScalingPolicy#namespace}
    */
    readonly namespace?: string;
}
export class PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable | undefined {
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
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
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList(this, "dimensions", true);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable) {
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
}
export interface PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric CcScalingPolicy#metric}
    */
    readonly metric?: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#stat CcScalingPolicy#stat}
    */
    readonly stat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#unit CcScalingPolicy#unit}
    */
    readonly unit?: string;
}
export class PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        if (this._stat !== undefined) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metric.internalValue = undefined;
            this._stat = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metric.internalValue = value.metric;
            this._stat = value.stat;
            this._unit = value.unit;
        }
    }

    // metric - computed: true, optional: true, required: false
    private _metric = new PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricProperty) {
        this._metric.internalValue = value;
    }
    public resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric.internalValue;
    }

    // stat - computed: true, optional: true, required: false
    private _stat?: string; 
    public get stat() {
        return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
        this._stat = value;
    }
    public resetStat() {
        this._stat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
        return this._stat;
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
export interface PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#expression CcScalingPolicy#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#id CcScalingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#label CcScalingPolicy#label}
    */
    readonly label?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_stat CcScalingPolicy#metric_stat}
    */
    readonly metricStat?: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#return_data CcScalingPolicy#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._metricStat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricStat = this._metricStat?.internalValue;
        }
        if (this._returnData !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnData = this._returnData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._id = undefined;
            this._label = undefined;
            this._metricStat.internalValue = undefined;
            this._returnData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._id = value.id;
            this._label = value.label;
            this._metricStat.internalValue = value.metricStat;
            this._returnData = value.returnData;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // label - computed: true, optional: true, required: false
    private _label?: string; 
    public get label() {
        return this.getStringAttribute('label');
    }
    public set label(value: string) {
        this._label = value;
    }
    public resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelInput() {
        return this._label;
    }

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatProperty) {
        this._metricStat.internalValue = value;
    }
    public resetMetricStat() {
        this._metricStat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricStatInput() {
        return this._metricStat.internalValue;
    }

    // return_data - computed: true, optional: true, required: false
    private _returnData?: boolean | cdktn.IResolvable; 
    public get returnData() {
        return this.getBooleanAttribute('return_data');
    }
    public set returnData(value: boolean | cdktn.IResolvable) {
        this._returnData = value;
    }
    public resetReturnData() {
        this._returnData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get returnDataInput() {
        return this._returnData;
    }
}

export class PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyOutputReference {
        return new PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingCustomizedLoadMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_data_queries CcScalingPolicy#metric_data_queries}
    */
    readonly metricDataQueries?: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable;
}
export class PredictiveScalingCustomizedLoadMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingCustomizedLoadMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricDataQueries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingCustomizedLoadMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = value.metricDataQueries;
        }
    }

    // metric_data_queries - computed: true, optional: true, required: false
    private _metricDataQueries = new PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesPropertyList(this, "metric_data_queries", true);
    public get metricDataQueries() {
        return this._metricDataQueries;
    }
    public putMetricDataQueries(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable) {
        this._metricDataQueries.internalValue = value;
    }
    public resetMetricDataQueries() {
        this._metricDataQueries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDataQueriesInput() {
        return this._metricDataQueries.internalValue;
    }
}
export interface PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#name CcScalingPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#value CcScalingPolicy#value}
    */
    readonly value?: string;
}
export class PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined) {
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

export class PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference {
        return new PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#dimensions CcScalingPolicy#dimensions}
    */
    readonly dimensions?: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_name CcScalingPolicy#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#namespace CcScalingPolicy#namespace}
    */
    readonly namespace?: string;
}
export class PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable | undefined {
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
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
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsPropertyList(this, "dimensions", true);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable) {
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
}
export interface PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric CcScalingPolicy#metric}
    */
    readonly metric?: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#stat CcScalingPolicy#stat}
    */
    readonly stat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#unit CcScalingPolicy#unit}
    */
    readonly unit?: string;
}
export class PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        if (this._stat !== undefined) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metric.internalValue = undefined;
            this._stat = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metric.internalValue = value.metric;
            this._stat = value.stat;
            this._unit = value.unit;
        }
    }

    // metric - computed: true, optional: true, required: false
    private _metric = new PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricProperty) {
        this._metric.internalValue = value;
    }
    public resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric.internalValue;
    }

    // stat - computed: true, optional: true, required: false
    private _stat?: string; 
    public get stat() {
        return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
        this._stat = value;
    }
    public resetStat() {
        this._stat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
        return this._stat;
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
export interface PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#expression CcScalingPolicy#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#id CcScalingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#label CcScalingPolicy#label}
    */
    readonly label?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_stat CcScalingPolicy#metric_stat}
    */
    readonly metricStat?: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#return_data CcScalingPolicy#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._metricStat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricStat = this._metricStat?.internalValue;
        }
        if (this._returnData !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnData = this._returnData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._id = undefined;
            this._label = undefined;
            this._metricStat.internalValue = undefined;
            this._returnData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._id = value.id;
            this._label = value.label;
            this._metricStat.internalValue = value.metricStat;
            this._returnData = value.returnData;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // label - computed: true, optional: true, required: false
    private _label?: string; 
    public get label() {
        return this.getStringAttribute('label');
    }
    public set label(value: string) {
        this._label = value;
    }
    public resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelInput() {
        return this._label;
    }

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatProperty) {
        this._metricStat.internalValue = value;
    }
    public resetMetricStat() {
        this._metricStat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricStatInput() {
        return this._metricStat.internalValue;
    }

    // return_data - computed: true, optional: true, required: false
    private _returnData?: boolean | cdktn.IResolvable; 
    public get returnData() {
        return this.getBooleanAttribute('return_data');
    }
    public set returnData(value: boolean | cdktn.IResolvable) {
        this._returnData = value;
    }
    public resetReturnData() {
        this._returnData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get returnDataInput() {
        return this._returnData;
    }
}

export class PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyOutputReference {
        return new PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingCustomizedScalingMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_data_queries CcScalingPolicy#metric_data_queries}
    */
    readonly metricDataQueries?: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable;
}
export class PredictiveScalingCustomizedScalingMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingCustomizedScalingMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricDataQueries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingCustomizedScalingMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = value.metricDataQueries;
        }
    }

    // metric_data_queries - computed: true, optional: true, required: false
    private _metricDataQueries = new PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesPropertyList(this, "metric_data_queries", true);
    public get metricDataQueries() {
        return this._metricDataQueries;
    }
    public putMetricDataQueries(value: PredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesProperty[] | cdktn.IResolvable) {
        this._metricDataQueries.internalValue = value;
    }
    public resetMetricDataQueries() {
        this._metricDataQueries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDataQueriesInput() {
        return this._metricDataQueries.internalValue;
    }
}
export interface PredictiveScalingPredefinedLoadMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#predefined_metric_type CcScalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#resource_label CcScalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
}
export class PredictiveScalingPredefinedLoadMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingPredefinedLoadMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPredefinedLoadMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }

    // predefined_metric_type - computed: true, optional: true, required: false
    private _predefinedMetricType?: string; 
    public get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    public set predefinedMetricType(value: string) {
        this._predefinedMetricType = value;
    }
    public resetPredefinedMetricType() {
        this._predefinedMetricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
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
export interface PredictiveScalingPredefinedMetricPairProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#predefined_metric_type CcScalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#resource_label CcScalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
}
export class PredictiveScalingPredefinedMetricPairPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingPredefinedMetricPairProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPredefinedMetricPairProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }

    // predefined_metric_type - computed: true, optional: true, required: false
    private _predefinedMetricType?: string; 
    public get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    public set predefinedMetricType(value: string) {
        this._predefinedMetricType = value;
    }
    public resetPredefinedMetricType() {
        this._predefinedMetricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
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
export interface PredictiveScalingPredefinedScalingMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#predefined_metric_type CcScalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#resource_label CcScalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
}
export class PredictiveScalingPredefinedScalingMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingPredefinedScalingMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingPredefinedScalingMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }

    // predefined_metric_type - computed: true, optional: true, required: false
    private _predefinedMetricType?: string; 
    public get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    public set predefinedMetricType(value: string) {
        this._predefinedMetricType = value;
    }
    public resetPredefinedMetricType() {
        this._predefinedMetricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
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
export interface PredictiveScalingMetricSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#customized_capacity_metric_specification CcScalingPolicy#customized_capacity_metric_specification}
    */
    readonly customizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#customized_load_metric_specification CcScalingPolicy#customized_load_metric_specification}
    */
    readonly customizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#customized_scaling_metric_specification CcScalingPolicy#customized_scaling_metric_specification}
    */
    readonly customizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#predefined_load_metric_specification CcScalingPolicy#predefined_load_metric_specification}
    */
    readonly predefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#predefined_metric_pair_specification CcScalingPolicy#predefined_metric_pair_specification}
    */
    readonly predefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPairProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#predefined_scaling_metric_specification CcScalingPolicy#predefined_scaling_metric_specification}
    */
    readonly predefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#target_value CcScalingPolicy#target_value}
    */
    readonly targetValue?: number;
}
export class PredictiveScalingMetricSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PredictiveScalingMetricSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customizedCapacityMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedCapacityMetricSpecification = this._customizedCapacityMetricSpecification?.internalValue;
        }
        if (this._customizedLoadMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedLoadMetricSpecification = this._customizedLoadMetricSpecification?.internalValue;
        }
        if (this._customizedScalingMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedScalingMetricSpecification = this._customizedScalingMetricSpecification?.internalValue;
        }
        if (this._predefinedLoadMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedLoadMetricSpecification = this._predefinedLoadMetricSpecification?.internalValue;
        }
        if (this._predefinedMetricPairSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricPairSpecification = this._predefinedMetricPairSpecification?.internalValue;
        }
        if (this._predefinedScalingMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedScalingMetricSpecification = this._predefinedScalingMetricSpecification?.internalValue;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingMetricSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customizedCapacityMetricSpecification.internalValue = undefined;
            this._customizedLoadMetricSpecification.internalValue = undefined;
            this._customizedScalingMetricSpecification.internalValue = undefined;
            this._predefinedLoadMetricSpecification.internalValue = undefined;
            this._predefinedMetricPairSpecification.internalValue = undefined;
            this._predefinedScalingMetricSpecification.internalValue = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customizedCapacityMetricSpecification.internalValue = value.customizedCapacityMetricSpecification;
            this._customizedLoadMetricSpecification.internalValue = value.customizedLoadMetricSpecification;
            this._customizedScalingMetricSpecification.internalValue = value.customizedScalingMetricSpecification;
            this._predefinedLoadMetricSpecification.internalValue = value.predefinedLoadMetricSpecification;
            this._predefinedMetricPairSpecification.internalValue = value.predefinedMetricPairSpecification;
            this._predefinedScalingMetricSpecification.internalValue = value.predefinedScalingMetricSpecification;
            this._targetValue = value.targetValue;
        }
    }

    // customized_capacity_metric_specification - computed: true, optional: true, required: false
    private _customizedCapacityMetricSpecification = new PredictiveScalingCustomizedCapacityMetricPropertyOutputReference(this, "customized_capacity_metric_specification");
    public get customizedCapacityMetricSpecification() {
        return this._customizedCapacityMetricSpecification;
    }
    public putCustomizedCapacityMetricSpecification(value: PredictiveScalingCustomizedCapacityMetricProperty) {
        this._customizedCapacityMetricSpecification.internalValue = value;
    }
    public resetCustomizedCapacityMetricSpecification() {
        this._customizedCapacityMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizedCapacityMetricSpecificationInput() {
        return this._customizedCapacityMetricSpecification.internalValue;
    }

    // customized_load_metric_specification - computed: true, optional: true, required: false
    private _customizedLoadMetricSpecification = new PredictiveScalingCustomizedLoadMetricPropertyOutputReference(this, "customized_load_metric_specification");
    public get customizedLoadMetricSpecification() {
        return this._customizedLoadMetricSpecification;
    }
    public putCustomizedLoadMetricSpecification(value: PredictiveScalingCustomizedLoadMetricProperty) {
        this._customizedLoadMetricSpecification.internalValue = value;
    }
    public resetCustomizedLoadMetricSpecification() {
        this._customizedLoadMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizedLoadMetricSpecificationInput() {
        return this._customizedLoadMetricSpecification.internalValue;
    }

    // customized_scaling_metric_specification - computed: true, optional: true, required: false
    private _customizedScalingMetricSpecification = new PredictiveScalingCustomizedScalingMetricPropertyOutputReference(this, "customized_scaling_metric_specification");
    public get customizedScalingMetricSpecification() {
        return this._customizedScalingMetricSpecification;
    }
    public putCustomizedScalingMetricSpecification(value: PredictiveScalingCustomizedScalingMetricProperty) {
        this._customizedScalingMetricSpecification.internalValue = value;
    }
    public resetCustomizedScalingMetricSpecification() {
        this._customizedScalingMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizedScalingMetricSpecificationInput() {
        return this._customizedScalingMetricSpecification.internalValue;
    }

    // predefined_load_metric_specification - computed: true, optional: true, required: false
    private _predefinedLoadMetricSpecification = new PredictiveScalingPredefinedLoadMetricPropertyOutputReference(this, "predefined_load_metric_specification");
    public get predefinedLoadMetricSpecification() {
        return this._predefinedLoadMetricSpecification;
    }
    public putPredefinedLoadMetricSpecification(value: PredictiveScalingPredefinedLoadMetricProperty) {
        this._predefinedLoadMetricSpecification.internalValue = value;
    }
    public resetPredefinedLoadMetricSpecification() {
        this._predefinedLoadMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedLoadMetricSpecificationInput() {
        return this._predefinedLoadMetricSpecification.internalValue;
    }

    // predefined_metric_pair_specification - computed: true, optional: true, required: false
    private _predefinedMetricPairSpecification = new PredictiveScalingPredefinedMetricPairPropertyOutputReference(this, "predefined_metric_pair_specification");
    public get predefinedMetricPairSpecification() {
        return this._predefinedMetricPairSpecification;
    }
    public putPredefinedMetricPairSpecification(value: PredictiveScalingPredefinedMetricPairProperty) {
        this._predefinedMetricPairSpecification.internalValue = value;
    }
    public resetPredefinedMetricPairSpecification() {
        this._predefinedMetricPairSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricPairSpecificationInput() {
        return this._predefinedMetricPairSpecification.internalValue;
    }

    // predefined_scaling_metric_specification - computed: true, optional: true, required: false
    private _predefinedScalingMetricSpecification = new PredictiveScalingPredefinedScalingMetricPropertyOutputReference(this, "predefined_scaling_metric_specification");
    public get predefinedScalingMetricSpecification() {
        return this._predefinedScalingMetricSpecification;
    }
    public putPredefinedScalingMetricSpecification(value: PredictiveScalingPredefinedScalingMetricProperty) {
        this._predefinedScalingMetricSpecification.internalValue = value;
    }
    public resetPredefinedScalingMetricSpecification() {
        this._predefinedScalingMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedScalingMetricSpecificationInput() {
        return this._predefinedScalingMetricSpecification.internalValue;
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

export class PredictiveScalingMetricSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : PredictiveScalingMetricSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): PredictiveScalingMetricSpecificationPropertyOutputReference {
        return new PredictiveScalingMetricSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredictiveScalingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#max_capacity_breach_behavior CcScalingPolicy#max_capacity_breach_behavior}
    */
    readonly maxCapacityBreachBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#max_capacity_buffer CcScalingPolicy#max_capacity_buffer}
    */
    readonly maxCapacityBuffer?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_specifications CcScalingPolicy#metric_specifications}
    */
    readonly metricSpecifications?: PredictiveScalingMetricSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#mode CcScalingPolicy#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#scheduling_buffer_time CcScalingPolicy#scheduling_buffer_time}
    */
    readonly schedulingBufferTime?: number;
}
export class PredictiveScalingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveScalingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxCapacityBreachBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacityBreachBehavior = this._maxCapacityBreachBehavior;
        }
        if (this._maxCapacityBuffer !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacityBuffer = this._maxCapacityBuffer;
        }
        if (this._metricSpecifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSpecifications = this._metricSpecifications?.internalValue;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._schedulingBufferTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedulingBufferTime = this._schedulingBufferTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveScalingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxCapacityBreachBehavior = undefined;
            this._maxCapacityBuffer = undefined;
            this._metricSpecifications.internalValue = undefined;
            this._mode = undefined;
            this._schedulingBufferTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxCapacityBreachBehavior = value.maxCapacityBreachBehavior;
            this._maxCapacityBuffer = value.maxCapacityBuffer;
            this._metricSpecifications.internalValue = value.metricSpecifications;
            this._mode = value.mode;
            this._schedulingBufferTime = value.schedulingBufferTime;
        }
    }

    // max_capacity_breach_behavior - computed: true, optional: true, required: false
    private _maxCapacityBreachBehavior?: string; 
    public get maxCapacityBreachBehavior() {
        return this.getStringAttribute('max_capacity_breach_behavior');
    }
    public set maxCapacityBreachBehavior(value: string) {
        this._maxCapacityBreachBehavior = value;
    }
    public resetMaxCapacityBreachBehavior() {
        this._maxCapacityBreachBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityBreachBehaviorInput() {
        return this._maxCapacityBreachBehavior;
    }

    // max_capacity_buffer - computed: true, optional: true, required: false
    private _maxCapacityBuffer?: number; 
    public get maxCapacityBuffer() {
        return this.getNumberAttribute('max_capacity_buffer');
    }
    public set maxCapacityBuffer(value: number) {
        this._maxCapacityBuffer = value;
    }
    public resetMaxCapacityBuffer() {
        this._maxCapacityBuffer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityBufferInput() {
        return this._maxCapacityBuffer;
    }

    // metric_specifications - computed: true, optional: true, required: false
    private _metricSpecifications = new PredictiveScalingMetricSpecificationPropertyList(this, "metric_specifications", true);
    public get metricSpecifications() {
        return this._metricSpecifications;
    }
    public putMetricSpecifications(value: PredictiveScalingMetricSpecificationProperty[] | cdktn.IResolvable) {
        this._metricSpecifications.internalValue = value;
    }
    public resetMetricSpecifications() {
        this._metricSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSpecificationsInput() {
        return this._metricSpecifications.internalValue;
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }

    // scheduling_buffer_time - computed: true, optional: true, required: false
    private _schedulingBufferTime?: number; 
    public get schedulingBufferTime() {
        return this.getNumberAttribute('scheduling_buffer_time');
    }
    public set schedulingBufferTime(value: number) {
        this._schedulingBufferTime = value;
    }
    public resetSchedulingBufferTime() {
        this._schedulingBufferTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulingBufferTimeInput() {
        return this._schedulingBufferTime;
    }
}
export interface StepAdjustmentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_interval_lower_bound CcScalingPolicy#metric_interval_lower_bound}
    */
    readonly metricIntervalLowerBound?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_interval_upper_bound CcScalingPolicy#metric_interval_upper_bound}
    */
    readonly metricIntervalUpperBound?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#scaling_adjustment CcScalingPolicy#scaling_adjustment}
    */
    readonly scalingAdjustment?: number;
}
export class StepAdjustmentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StepAdjustmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricIntervalLowerBound !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricIntervalLowerBound = this._metricIntervalLowerBound;
        }
        if (this._metricIntervalUpperBound !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricIntervalUpperBound = this._metricIntervalUpperBound;
        }
        if (this._scalingAdjustment !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingAdjustment = this._scalingAdjustment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepAdjustmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricIntervalLowerBound = undefined;
            this._metricIntervalUpperBound = undefined;
            this._scalingAdjustment = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricIntervalLowerBound = value.metricIntervalLowerBound;
            this._metricIntervalUpperBound = value.metricIntervalUpperBound;
            this._scalingAdjustment = value.scalingAdjustment;
        }
    }

    // metric_interval_lower_bound - computed: true, optional: true, required: false
    private _metricIntervalLowerBound?: number; 
    public get metricIntervalLowerBound() {
        return this.getNumberAttribute('metric_interval_lower_bound');
    }
    public set metricIntervalLowerBound(value: number) {
        this._metricIntervalLowerBound = value;
    }
    public resetMetricIntervalLowerBound() {
        this._metricIntervalLowerBound = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricIntervalLowerBoundInput() {
        return this._metricIntervalLowerBound;
    }

    // metric_interval_upper_bound - computed: true, optional: true, required: false
    private _metricIntervalUpperBound?: number; 
    public get metricIntervalUpperBound() {
        return this.getNumberAttribute('metric_interval_upper_bound');
    }
    public set metricIntervalUpperBound(value: number) {
        this._metricIntervalUpperBound = value;
    }
    public resetMetricIntervalUpperBound() {
        this._metricIntervalUpperBound = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricIntervalUpperBoundInput() {
        return this._metricIntervalUpperBound;
    }

    // scaling_adjustment - computed: true, optional: true, required: false
    private _scalingAdjustment?: number; 
    public get scalingAdjustment() {
        return this.getNumberAttribute('scaling_adjustment');
    }
    public set scalingAdjustment(value: number) {
        this._scalingAdjustment = value;
    }
    public resetScalingAdjustment() {
        this._scalingAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingAdjustmentInput() {
        return this._scalingAdjustment;
    }
}

export class StepAdjustmentPropertyList extends cdktn.ComplexList {
    public internalValue? : StepAdjustmentProperty[] | cdktn.IResolvable

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
    public get(index: number): StepAdjustmentPropertyOutputReference {
        return new StepAdjustmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#name CcScalingPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#value CcScalingPolicy#value}
    */
    readonly value?: string;
}
export class TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsProperty | cdktn.IResolvable | undefined) {
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

export class TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsPropertyOutputReference {
        return new TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#name CcScalingPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#value CcScalingPolicy#value}
    */
    readonly value?: string;
}
export class TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined) {
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

export class TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsPropertyOutputReference {
        return new TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#dimensions CcScalingPolicy#dimensions}
    */
    readonly dimensions?: TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_name CcScalingPolicy#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#namespace CcScalingPolicy#namespace}
    */
    readonly namespace?: string;
}
export class TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricProperty | cdktn.IResolvable | undefined {
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
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
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsPropertyList(this, "dimensions", true);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsProperty[] | cdktn.IResolvable) {
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
}
export interface TargetTrackingMetricStatProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric CcScalingPolicy#metric}
    */
    readonly metric?: TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#period CcScalingPolicy#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#stat CcScalingPolicy#stat}
    */
    readonly stat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#unit CcScalingPolicy#unit}
    */
    readonly unit?: string;
}
export class TargetTrackingMetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetTrackingMetricStatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._stat !== undefined) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingMetricStatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metric.internalValue = undefined;
            this._period = undefined;
            this._stat = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metric.internalValue = value.metric;
            this._period = value.period;
            this._stat = value.stat;
            this._unit = value.unit;
        }
    }

    // metric - computed: true, optional: true, required: false
    private _metric = new TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: TargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricProperty) {
        this._metric.internalValue = value;
    }
    public resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric.internalValue;
    }

    // period - computed: true, optional: true, required: false
    private _period?: number; 
    public get period() {
        return this.getNumberAttribute('period');
    }
    public set period(value: number) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // stat - computed: true, optional: true, required: false
    private _stat?: string; 
    public get stat() {
        return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
        this._stat = value;
    }
    public resetStat() {
        this._stat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
        return this._stat;
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
export interface TargetTrackingMetricDataQueryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#expression CcScalingPolicy#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#id CcScalingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#label CcScalingPolicy#label}
    */
    readonly label?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_stat CcScalingPolicy#metric_stat}
    */
    readonly metricStat?: TargetTrackingMetricStatProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#period CcScalingPolicy#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#return_data CcScalingPolicy#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class TargetTrackingMetricDataQueryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetTrackingMetricDataQueryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._metricStat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricStat = this._metricStat?.internalValue;
        }
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._returnData !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnData = this._returnData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingMetricDataQueryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._id = undefined;
            this._label = undefined;
            this._metricStat.internalValue = undefined;
            this._period = undefined;
            this._returnData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._id = value.id;
            this._label = value.label;
            this._metricStat.internalValue = value.metricStat;
            this._period = value.period;
            this._returnData = value.returnData;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // label - computed: true, optional: true, required: false
    private _label?: string; 
    public get label() {
        return this.getStringAttribute('label');
    }
    public set label(value: string) {
        this._label = value;
    }
    public resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelInput() {
        return this._label;
    }

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new TargetTrackingMetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: TargetTrackingMetricStatProperty) {
        this._metricStat.internalValue = value;
    }
    public resetMetricStat() {
        this._metricStat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricStatInput() {
        return this._metricStat.internalValue;
    }

    // period - computed: true, optional: true, required: false
    private _period?: number; 
    public get period() {
        return this.getNumberAttribute('period');
    }
    public set period(value: number) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // return_data - computed: true, optional: true, required: false
    private _returnData?: boolean | cdktn.IResolvable; 
    public get returnData() {
        return this.getBooleanAttribute('return_data');
    }
    public set returnData(value: boolean | cdktn.IResolvable) {
        this._returnData = value;
    }
    public resetReturnData() {
        this._returnData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get returnDataInput() {
        return this._returnData;
    }
}

export class TargetTrackingMetricDataQueryPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetTrackingMetricDataQueryProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetTrackingMetricDataQueryPropertyOutputReference {
        return new TargetTrackingMetricDataQueryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomizedMetricSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#dimensions CcScalingPolicy#dimensions}
    */
    readonly dimensions?: TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metric_name CcScalingPolicy#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#metrics CcScalingPolicy#metrics}
    */
    readonly metrics?: TargetTrackingMetricDataQueryProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#namespace CcScalingPolicy#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#period CcScalingPolicy#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#statistic CcScalingPolicy#statistic}
    */
    readonly statistic?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#unit CcScalingPolicy#unit}
    */
    readonly unit?: string;
}
export class CustomizedMetricSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomizedMetricSpecificationProperty | cdktn.IResolvable | undefined {
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
        if (this._metrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metrics = this._metrics?.internalValue;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
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

    public set internalValue(value: CustomizedMetricSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._metrics.internalValue = undefined;
            this._namespace = undefined;
            this._period = undefined;
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
            this._metrics.internalValue = value.metrics;
            this._namespace = value.namespace;
            this._period = value.period;
            this._statistic = value.statistic;
            this._unit = value.unit;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsPropertyList(this, "dimensions", true);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: TargetTrackingConfigurationCustomizedMetricSpecificationDimensionsProperty[] | cdktn.IResolvable) {
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

    // metrics - computed: true, optional: true, required: false
    private _metrics = new TargetTrackingMetricDataQueryPropertyList(this, "metrics", true);
    public get metrics() {
        return this._metrics;
    }
    public putMetrics(value: TargetTrackingMetricDataQueryProperty[] | cdktn.IResolvable) {
        this._metrics.internalValue = value;
    }
    public resetMetrics() {
        this._metrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsInput() {
        return this._metrics.internalValue;
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

    // period - computed: true, optional: true, required: false
    private _period?: number; 
    public get period() {
        return this.getNumberAttribute('period');
    }
    public set period(value: number) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
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
export interface PredefinedMetricSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#predefined_metric_type CcScalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#resource_label CcScalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
}
export class PredefinedMetricSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredefinedMetricSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._predefinedMetricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricType = this._predefinedMetricType;
        }
        if (this._resourceLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceLabel = this._resourceLabel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredefinedMetricSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._predefinedMetricType = undefined;
            this._resourceLabel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._predefinedMetricType = value.predefinedMetricType;
            this._resourceLabel = value.resourceLabel;
        }
    }

    // predefined_metric_type - computed: true, optional: true, required: false
    private _predefinedMetricType?: string; 
    public get predefinedMetricType() {
        return this.getStringAttribute('predefined_metric_type');
    }
    public set predefinedMetricType(value: string) {
        this._predefinedMetricType = value;
    }
    public resetPredefinedMetricType() {
        this._predefinedMetricType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricTypeInput() {
        return this._predefinedMetricType;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#customized_metric_specification CcScalingPolicy#customized_metric_specification}
    */
    readonly customizedMetricSpecification?: CustomizedMetricSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#disable_scale_in CcScalingPolicy#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#predefined_metric_specification CcScalingPolicy#predefined_metric_specification}
    */
    readonly predefinedMetricSpecification?: PredefinedMetricSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/autoscaling_scaling_policy#target_value CcScalingPolicy#target_value}
    */
    readonly targetValue?: number;
}
export class TargetTrackingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetTrackingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customizedMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customizedMetricSpecification = this._customizedMetricSpecification?.internalValue;
        }
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._predefinedMetricSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predefinedMetricSpecification = this._predefinedMetricSpecification?.internalValue;
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
            this._customizedMetricSpecification.internalValue = undefined;
            this._disableScaleIn = undefined;
            this._predefinedMetricSpecification.internalValue = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customizedMetricSpecification.internalValue = value.customizedMetricSpecification;
            this._disableScaleIn = value.disableScaleIn;
            this._predefinedMetricSpecification.internalValue = value.predefinedMetricSpecification;
            this._targetValue = value.targetValue;
        }
    }

    // customized_metric_specification - computed: true, optional: true, required: false
    private _customizedMetricSpecification = new CustomizedMetricSpecificationPropertyOutputReference(this, "customized_metric_specification");
    public get customizedMetricSpecification() {
        return this._customizedMetricSpecification;
    }
    public putCustomizedMetricSpecification(value: CustomizedMetricSpecificationProperty) {
        this._customizedMetricSpecification.internalValue = value;
    }
    public resetCustomizedMetricSpecification() {
        this._customizedMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizedMetricSpecificationInput() {
        return this._customizedMetricSpecification.internalValue;
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

    // predefined_metric_specification - computed: true, optional: true, required: false
    private _predefinedMetricSpecification = new PredefinedMetricSpecificationPropertyOutputReference(this, "predefined_metric_specification");
    public get predefinedMetricSpecification() {
        return this._predefinedMetricSpecification;
    }
    public putPredefinedMetricSpecification(value: PredefinedMetricSpecificationProperty) {
        this._predefinedMetricSpecification.internalValue = value;
    }
    public resetPredefinedMetricSpecification() {
        this._predefinedMetricSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predefinedMetricSpecificationInput() {
        return this._predefinedMetricSpecification.internalValue;
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
}
