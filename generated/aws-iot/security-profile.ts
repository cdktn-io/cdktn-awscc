// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSecurityProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#additional_metrics_to_retain_v2 CcSecurityProfile#additional_metrics_to_retain_v2}
    */
    readonly additionalMetricsToRetainV2?: CcSecurityProfile.MetricToRetainProperty[] | cdktn.IResolvable;
    /**
    * Specifies the destinations to which alerts are sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#alert_targets CcSecurityProfile#alert_targets}
    */
    readonly alertTargets?: { [key: string]: CcSecurityProfile.AlertTargetProperty } | cdktn.IResolvable;
    /**
    * Specifies the behaviors that, when violated by a device (thing), cause an alert.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#behaviors CcSecurityProfile#behaviors}
    */
    readonly behaviors?: CcSecurityProfile.BehaviorProperty[] | cdktn.IResolvable;
    /**
    * A structure containing the mqtt topic for metrics export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#metrics_export_config CcSecurityProfile#metrics_export_config}
    */
    readonly metricsExportConfig?: CcSecurityProfile.MetricsExportConfigProperty;
    /**
    * A description of the security profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#security_profile_description CcSecurityProfile#security_profile_description}
    */
    readonly securityProfileDescription?: string;
    /**
    * A unique identifier for the security profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#security_profile_name CcSecurityProfile#security_profile_name}
    */
    readonly securityProfileName?: string;
    /**
    * Metadata that can be used to manage the security profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#tags CcSecurityProfile#tags}
    */
    readonly tags?: CcSecurityProfile.TagProperty[] | cdktn.IResolvable;
    /**
    * A set of target ARNs that the security profile is attached to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#target_arns CcSecurityProfile#target_arns}
    */
    readonly targetArns?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile awscc_iot_security_profile}
*/
export class CcSecurityProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_security_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSecurityProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSecurityProfile to import
    * @param importFromId The id of the existing CcSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSecurityProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_security_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile awscc_iot_security_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSecurityProfileProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcSecurityProfileProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_security_profile',
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
        this._additionalMetricsToRetainV2.internalValue = config.additionalMetricsToRetainV2;
        this._alertTargets.internalValue = config.alertTargets;
        this._behaviors.internalValue = config.behaviors;
        this._metricsExportConfig.internalValue = config.metricsExportConfig;
        this._securityProfileDescription = config.securityProfileDescription;
        this._securityProfileName = config.securityProfileName;
        this._tags.internalValue = config.tags;
        this._targetArns = config.targetArns;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_metrics_to_retain_v2 - computed: true, optional: true, required: false
    private _additionalMetricsToRetainV2 = new CcSecurityProfile.MetricToRetainPropertyList(this, "additional_metrics_to_retain_v2", true);
    public get additionalMetricsToRetainV2() {
        return this._additionalMetricsToRetainV2;
    }
    public putAdditionalMetricsToRetainV2(value: CcSecurityProfile.MetricToRetainProperty[] | cdktn.IResolvable) {
        this._additionalMetricsToRetainV2.internalValue = value;
    }
    public resetAdditionalMetricsToRetainV2() {
        this._additionalMetricsToRetainV2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalMetricsToRetainV2Input() {
        return this._additionalMetricsToRetainV2.internalValue;
    }

    // alert_targets - computed: true, optional: true, required: false
    private _alertTargets = new CcSecurityProfile.AlertTargetPropertyMap(this, "alert_targets");
    public get alertTargets() {
        return this._alertTargets;
    }
    public putAlertTargets(value: { [key: string]: CcSecurityProfile.AlertTargetProperty } | cdktn.IResolvable) {
        this._alertTargets.internalValue = value;
    }
    public resetAlertTargets() {
        this._alertTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alertTargetsInput() {
        return this._alertTargets.internalValue;
    }

    // behaviors - computed: true, optional: true, required: false
    private _behaviors = new CcSecurityProfile.BehaviorPropertyList(this, "behaviors", true);
    public get behaviors() {
        return this._behaviors;
    }
    public putBehaviors(value: CcSecurityProfile.BehaviorProperty[] | cdktn.IResolvable) {
        this._behaviors.internalValue = value;
    }
    public resetBehaviors() {
        this._behaviors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get behaviorsInput() {
        return this._behaviors.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // metrics_export_config - computed: true, optional: true, required: false
    private _metricsExportConfig = new CcSecurityProfile.MetricsExportConfigPropertyOutputReference(this, "metrics_export_config");
    public get metricsExportConfig() {
        return this._metricsExportConfig;
    }
    public putMetricsExportConfig(value: CcSecurityProfile.MetricsExportConfigProperty) {
        this._metricsExportConfig.internalValue = value;
    }
    public resetMetricsExportConfig() {
        this._metricsExportConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsExportConfigInput() {
        return this._metricsExportConfig.internalValue;
    }

    // security_profile_arn - computed: true, optional: false, required: false
    public get securityProfileArn() {
        return this.getStringAttribute('security_profile_arn');
    }

    // security_profile_description - computed: true, optional: true, required: false
    private _securityProfileDescription?: string; 
    public get securityProfileDescription() {
        return this.getStringAttribute('security_profile_description');
    }
    public set securityProfileDescription(value: string) {
        this._securityProfileDescription = value;
    }
    public resetSecurityProfileDescription() {
        this._securityProfileDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityProfileDescriptionInput() {
        return this._securityProfileDescription;
    }

    // security_profile_name - computed: true, optional: true, required: false
    private _securityProfileName?: string; 
    public get securityProfileName() {
        return this.getStringAttribute('security_profile_name');
    }
    public set securityProfileName(value: string) {
        this._securityProfileName = value;
    }
    public resetSecurityProfileName() {
        this._securityProfileName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityProfileNameInput() {
        return this._securityProfileName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSecurityProfile.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSecurityProfile.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_arns - computed: true, optional: true, required: false
    private _targetArns?: string[]; 
    public get targetArns() {
        return cdktn.Fn.tolist(this.getListAttribute('target_arns'));
    }
    public set targetArns(value: string[]) {
        this._targetArns = value;
    }
    public resetTargetArns() {
        this._targetArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnsInput() {
        return this._targetArns;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            additional_metrics_to_retain_v2: cdktn.listMapper(ccSecurityProfileMetricToRetainPropertyToTerraform, false)(this._additionalMetricsToRetainV2.internalValue),
            alert_targets: cdktn.hashMapper(ccSecurityProfileAlertTargetPropertyToTerraform)(this._alertTargets.internalValue),
            behaviors: cdktn.listMapper(ccSecurityProfileBehaviorPropertyToTerraform, false)(this._behaviors.internalValue),
            metrics_export_config: ccSecurityProfileMetricsExportConfigPropertyToTerraform(this._metricsExportConfig.internalValue),
            security_profile_description: cdktn.stringToTerraform(this._securityProfileDescription),
            security_profile_name: cdktn.stringToTerraform(this._securityProfileName),
            tags: cdktn.listMapper(ccSecurityProfileTagPropertyToTerraform, false)(this._tags.internalValue),
            target_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targetArns),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_metrics_to_retain_v2: {
                value: cdktn.listMapperHcl(ccSecurityProfileMetricToRetainPropertyToHclTerraform, false)(this._additionalMetricsToRetainV2.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSecurityProfile.MetricToRetainPropertyList",
            },
            alert_targets: {
                value: cdktn.hashMapperHcl(ccSecurityProfileAlertTargetPropertyToHclTerraform)(this._alertTargets.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcSecurityProfile.AlertTargetPropertyMap",
            },
            behaviors: {
                value: cdktn.listMapperHcl(ccSecurityProfileBehaviorPropertyToHclTerraform, false)(this._behaviors.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSecurityProfile.BehaviorPropertyList",
            },
            metrics_export_config: {
                value: ccSecurityProfileMetricsExportConfigPropertyToHclTerraform(this._metricsExportConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSecurityProfile.MetricsExportConfigProperty",
            },
            security_profile_description: {
                value: cdktn.stringToHclTerraform(this._securityProfileDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_profile_name: {
                value: cdktn.stringToHclTerraform(this._securityProfileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSecurityProfileTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSecurityProfile.TagPropertyList",
            },
            target_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targetArns),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSecurityProfileMetricDimensionPropertyToTerraform(struct?: CcSecurityProfile.MetricDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_name: cdktn.stringToTerraform(struct!.dimensionName),
        operator: cdktn.stringToTerraform(struct!.operator),
    }
}


export function ccSecurityProfileMetricDimensionPropertyToHclTerraform(struct?: CcSecurityProfile.MetricDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimension_name: {
            value: cdktn.stringToHclTerraform(struct!.dimensionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityProfileMetricToRetainPropertyToTerraform(struct?: CcSecurityProfile.MetricToRetainProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        export_metric: cdktn.booleanToTerraform(struct!.exportMetric),
        metric: cdktn.stringToTerraform(struct!.metric),
        metric_dimension: ccSecurityProfileMetricDimensionPropertyToTerraform(struct!.metricDimension),
    }
}


export function ccSecurityProfileMetricToRetainPropertyToHclTerraform(struct?: CcSecurityProfile.MetricToRetainProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        export_metric: {
            value: cdktn.booleanToHclTerraform(struct!.exportMetric),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        metric: {
            value: cdktn.stringToHclTerraform(struct!.metric),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_dimension: {
            value: ccSecurityProfileMetricDimensionPropertyToHclTerraform(struct!.metricDimension),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricDimensionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityProfileAlertTargetPropertyToTerraform(struct?: CcSecurityProfile.AlertTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alert_target_arn: cdktn.stringToTerraform(struct!.alertTargetArn),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccSecurityProfileAlertTargetPropertyToHclTerraform(struct?: CcSecurityProfile.AlertTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alert_target_arn: {
            value: cdktn.stringToHclTerraform(struct!.alertTargetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityProfileMachineLearningDetectionConfigPropertyToTerraform(struct?: CcSecurityProfile.MachineLearningDetectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        confidence_level: cdktn.stringToTerraform(struct!.confidenceLevel),
    }
}


export function ccSecurityProfileMachineLearningDetectionConfigPropertyToHclTerraform(struct?: CcSecurityProfile.MachineLearningDetectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        confidence_level: {
            value: cdktn.stringToHclTerraform(struct!.confidenceLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityProfileStatisticalThresholdPropertyToTerraform(struct?: CcSecurityProfile.StatisticalThresholdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        statistic: cdktn.stringToTerraform(struct!.statistic),
    }
}


export function ccSecurityProfileStatisticalThresholdPropertyToHclTerraform(struct?: CcSecurityProfile.StatisticalThresholdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        statistic: {
            value: cdktn.stringToHclTerraform(struct!.statistic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityProfileMetricValuePropertyToTerraform(struct?: CcSecurityProfile.MetricValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cidrs),
        count: cdktn.stringToTerraform(struct!.count),
        number: cdktn.numberToTerraform(struct!.number),
        numbers: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.numbers),
        ports: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.ports),
        strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.strings),
    }
}


export function ccSecurityProfileMetricValuePropertyToHclTerraform(struct?: CcSecurityProfile.MetricValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidrs: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cidrs),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        count: {
            value: cdktn.stringToHclTerraform(struct!.count),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        number: {
            value: cdktn.numberToHclTerraform(struct!.number),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        numbers: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.numbers),
            isBlock: false,
            type: "set",
            storageClassType: "numberList",
        },
        ports: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.ports),
            isBlock: false,
            type: "set",
            storageClassType: "numberList",
        },
        strings: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.strings),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityProfileBehaviorCriteriaPropertyToTerraform(struct?: CcSecurityProfile.BehaviorCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
        consecutive_datapoints_to_alarm: cdktn.numberToTerraform(struct!.consecutiveDatapointsToAlarm),
        consecutive_datapoints_to_clear: cdktn.numberToTerraform(struct!.consecutiveDatapointsToClear),
        duration_seconds: cdktn.numberToTerraform(struct!.durationSeconds),
        ml_detection_config: ccSecurityProfileMachineLearningDetectionConfigPropertyToTerraform(struct!.mlDetectionConfig),
        statistical_threshold: ccSecurityProfileStatisticalThresholdPropertyToTerraform(struct!.statisticalThreshold),
        value: ccSecurityProfileMetricValuePropertyToTerraform(struct!.value),
    }
}


export function ccSecurityProfileBehaviorCriteriaPropertyToHclTerraform(struct?: CcSecurityProfile.BehaviorCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison_operator: {
            value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        consecutive_datapoints_to_alarm: {
            value: cdktn.numberToHclTerraform(struct!.consecutiveDatapointsToAlarm),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        consecutive_datapoints_to_clear: {
            value: cdktn.numberToHclTerraform(struct!.consecutiveDatapointsToClear),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        duration_seconds: {
            value: cdktn.numberToHclTerraform(struct!.durationSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ml_detection_config: {
            value: ccSecurityProfileMachineLearningDetectionConfigPropertyToHclTerraform(struct!.mlDetectionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MachineLearningDetectionConfigProperty",
        },
        statistical_threshold: {
            value: ccSecurityProfileStatisticalThresholdPropertyToHclTerraform(struct!.statisticalThreshold),
            isBlock: true,
            type: "struct",
            storageClassType: "StatisticalThresholdProperty",
        },
        value: {
            value: ccSecurityProfileMetricValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityProfileBehaviorsMetricDimensionPropertyToTerraform(struct?: CcSecurityProfile.BehaviorsMetricDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_name: cdktn.stringToTerraform(struct!.dimensionName),
        operator: cdktn.stringToTerraform(struct!.operator),
    }
}


export function ccSecurityProfileBehaviorsMetricDimensionPropertyToHclTerraform(struct?: CcSecurityProfile.BehaviorsMetricDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimension_name: {
            value: cdktn.stringToHclTerraform(struct!.dimensionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityProfileBehaviorPropertyToTerraform(struct?: CcSecurityProfile.BehaviorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        criteria: ccSecurityProfileBehaviorCriteriaPropertyToTerraform(struct!.criteria),
        export_metric: cdktn.booleanToTerraform(struct!.exportMetric),
        metric: cdktn.stringToTerraform(struct!.metric),
        metric_dimension: ccSecurityProfileBehaviorsMetricDimensionPropertyToTerraform(struct!.metricDimension),
        name: cdktn.stringToTerraform(struct!.name),
        suppress_alerts: cdktn.booleanToTerraform(struct!.suppressAlerts),
    }
}


export function ccSecurityProfileBehaviorPropertyToHclTerraform(struct?: CcSecurityProfile.BehaviorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        criteria: {
            value: ccSecurityProfileBehaviorCriteriaPropertyToHclTerraform(struct!.criteria),
            isBlock: true,
            type: "struct",
            storageClassType: "BehaviorCriteriaProperty",
        },
        export_metric: {
            value: cdktn.booleanToHclTerraform(struct!.exportMetric),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        metric: {
            value: cdktn.stringToHclTerraform(struct!.metric),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_dimension: {
            value: ccSecurityProfileBehaviorsMetricDimensionPropertyToHclTerraform(struct!.metricDimension),
            isBlock: true,
            type: "struct",
            storageClassType: "BehaviorsMetricDimensionProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        suppress_alerts: {
            value: cdktn.booleanToHclTerraform(struct!.suppressAlerts),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityProfileMetricsExportConfigPropertyToTerraform(struct?: CcSecurityProfile.MetricsExportConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mqtt_topic: cdktn.stringToTerraform(struct!.mqttTopic),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccSecurityProfileMetricsExportConfigPropertyToHclTerraform(struct?: CcSecurityProfile.MetricsExportConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mqtt_topic: {
            value: cdktn.stringToHclTerraform(struct!.mqttTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSecurityProfileTagPropertyToTerraform(struct?: CcSecurityProfile.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSecurityProfileTagPropertyToHclTerraform(struct?: CcSecurityProfile.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSecurityProfile {
export interface MetricDimensionProperty {
    /**
    * A unique identifier for the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#dimension_name CcSecurityProfile#dimension_name}
    */
    readonly dimensionName?: string;
    /**
    * Defines how the dimensionValues of a dimension are interpreted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#operator CcSecurityProfile#operator}
    */
    readonly operator?: string;
}
export class MetricDimensionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricDimensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionName = this._dimensionName;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricDimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensionName = undefined;
            this._operator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensionName = value.dimensionName;
            this._operator = value.operator;
        }
    }

    // dimension_name - computed: true, optional: true, required: false
    private _dimensionName?: string; 
    public get dimensionName() {
        return this.getStringAttribute('dimension_name');
    }
    public set dimensionName(value: string) {
        this._dimensionName = value;
    }
    public resetDimensionName() {
        this._dimensionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionNameInput() {
        return this._dimensionName;
    }

    // operator - computed: true, optional: true, required: false
    private _operator?: string; 
    public get operator() {
        return this.getStringAttribute('operator');
    }
    public set operator(value: string) {
        this._operator = value;
    }
    public resetOperator() {
        this._operator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorInput() {
        return this._operator;
    }
}
export interface MetricToRetainProperty {
    /**
    * Flag to enable/disable metrics export for metric to be retained.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#export_metric CcSecurityProfile#export_metric}
    */
    readonly exportMetric?: boolean | cdktn.IResolvable;
    /**
    * What is measured by the behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#metric CcSecurityProfile#metric}
    */
    readonly metric?: string;
    /**
    * The dimension of a metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#metric_dimension CcSecurityProfile#metric_dimension}
    */
    readonly metricDimension?: MetricDimensionProperty;
}
export class MetricToRetainPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricToRetainProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exportMetric !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportMetric = this._exportMetric;
        }
        if (this._metric !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric;
        }
        if (this._metricDimension?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDimension = this._metricDimension?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricToRetainProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exportMetric = undefined;
            this._metric = undefined;
            this._metricDimension.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exportMetric = value.exportMetric;
            this._metric = value.metric;
            this._metricDimension.internalValue = value.metricDimension;
        }
    }

    // export_metric - computed: true, optional: true, required: false
    private _exportMetric?: boolean | cdktn.IResolvable; 
    public get exportMetric() {
        return this.getBooleanAttribute('export_metric');
    }
    public set exportMetric(value: boolean | cdktn.IResolvable) {
        this._exportMetric = value;
    }
    public resetExportMetric() {
        this._exportMetric = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportMetricInput() {
        return this._exportMetric;
    }

    // metric - computed: true, optional: true, required: false
    private _metric?: string; 
    public get metric() {
        return this.getStringAttribute('metric');
    }
    public set metric(value: string) {
        this._metric = value;
    }
    public resetMetric() {
        this._metric = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric;
    }

    // metric_dimension - computed: true, optional: true, required: false
    private _metricDimension = new MetricDimensionPropertyOutputReference(this, "metric_dimension");
    public get metricDimension() {
        return this._metricDimension;
    }
    public putMetricDimension(value: MetricDimensionProperty) {
        this._metricDimension.internalValue = value;
    }
    public resetMetricDimension() {
        this._metricDimension.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDimensionInput() {
        return this._metricDimension.internalValue;
    }
}

export class MetricToRetainPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricToRetainProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricToRetainPropertyOutputReference {
        return new MetricToRetainPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AlertTargetProperty {
    /**
    * The ARN of the notification target to which alerts are sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#alert_target_arn CcSecurityProfile#alert_target_arn}
    */
    readonly alertTargetArn?: string;
    /**
    * The ARN of the role that grants permission to send alerts to the notification target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#role_arn CcSecurityProfile#role_arn}
    */
    readonly roleArn?: string;
}
export class AlertTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AlertTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alertTargetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.alertTargetArn = this._alertTargetArn;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlertTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alertTargetArn = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alertTargetArn = value.alertTargetArn;
            this._roleArn = value.roleArn;
        }
    }

    // alert_target_arn - computed: true, optional: true, required: false
    private _alertTargetArn?: string; 
    public get alertTargetArn() {
        return this.getStringAttribute('alert_target_arn');
    }
    public set alertTargetArn(value: string) {
        this._alertTargetArn = value;
    }
    public resetAlertTargetArn() {
        this._alertTargetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alertTargetArnInput() {
        return this._alertTargetArn;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }
}

export class AlertTargetPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: AlertTargetProperty } | cdktn.IResolvable

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
    public get(key: string): AlertTargetPropertyOutputReference {
        return new AlertTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface MachineLearningDetectionConfigProperty {
    /**
    * The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#confidence_level CcSecurityProfile#confidence_level}
    */
    readonly confidenceLevel?: string;
}
export class MachineLearningDetectionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MachineLearningDetectionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._confidenceLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.confidenceLevel = this._confidenceLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MachineLearningDetectionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._confidenceLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._confidenceLevel = value.confidenceLevel;
        }
    }

    // confidence_level - computed: true, optional: true, required: false
    private _confidenceLevel?: string; 
    public get confidenceLevel() {
        return this.getStringAttribute('confidence_level');
    }
    public set confidenceLevel(value: string) {
        this._confidenceLevel = value;
    }
    public resetConfidenceLevel() {
        this._confidenceLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confidenceLevelInput() {
        return this._confidenceLevel;
    }
}
export interface StatisticalThresholdProperty {
    /**
    * The percentile which resolves to a threshold value by which compliance with a behavior is determined
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#statistic CcSecurityProfile#statistic}
    */
    readonly statistic?: string;
}
export class StatisticalThresholdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StatisticalThresholdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._statistic !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistic = this._statistic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatisticalThresholdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._statistic = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._statistic = value.statistic;
        }
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
}
export interface MetricValueProperty {
    /**
    * If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#cidrs CcSecurityProfile#cidrs}
    */
    readonly cidrs?: string[];
    /**
    * If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#count CcSecurityProfile#count}
    */
    readonly count?: string;
    /**
    * The numeral value of a metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#number CcSecurityProfile#number}
    */
    readonly number?: number;
    /**
    * The numeral values of a metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#numbers CcSecurityProfile#numbers}
    */
    readonly numbers?: number[];
    /**
    * If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#ports CcSecurityProfile#ports}
    */
    readonly ports?: number[];
    /**
    * The string values of a metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#strings CcSecurityProfile#strings}
    */
    readonly strings?: string[];
}
export class MetricValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidrs !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrs = this._cidrs;
        }
        if (this._count !== undefined) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        if (this._number !== undefined) {
            hasAnyValues = true;
            internalValueResult.number = this._number;
        }
        if (this._numbers !== undefined) {
            hasAnyValues = true;
            internalValueResult.numbers = this._numbers;
        }
        if (this._ports !== undefined) {
            hasAnyValues = true;
            internalValueResult.ports = this._ports;
        }
        if (this._strings !== undefined) {
            hasAnyValues = true;
            internalValueResult.strings = this._strings;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidrs = undefined;
            this._count = undefined;
            this._number = undefined;
            this._numbers = undefined;
            this._ports = undefined;
            this._strings = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidrs = value.cidrs;
            this._count = value.count;
            this._number = value.number;
            this._numbers = value.numbers;
            this._ports = value.ports;
            this._strings = value.strings;
        }
    }

    // cidrs - computed: true, optional: true, required: false
    private _cidrs?: string[]; 
    public get cidrs() {
        return cdktn.Fn.tolist(this.getListAttribute('cidrs'));
    }
    public set cidrs(value: string[]) {
        this._cidrs = value;
    }
    public resetCidrs() {
        this._cidrs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrsInput() {
        return this._cidrs;
    }

    // count - computed: true, optional: true, required: false
    private _count?: string; 
    public get count() {
        return this.getStringAttribute('count');
    }
    public set count(value: string) {
        this._count = value;
    }
    public resetCount() {
        this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countInput() {
        return this._count;
    }

    // number - computed: true, optional: true, required: false
    private _number?: number; 
    public get number() {
        return this.getNumberAttribute('number');
    }
    public set number(value: number) {
        this._number = value;
    }
    public resetNumber() {
        this._number = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberInput() {
        return this._number;
    }

    // numbers - computed: true, optional: true, required: false
    private _numbers?: number[]; 
    public get numbers() {
        return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('numbers')));
    }
    public set numbers(value: number[]) {
        this._numbers = value;
    }
    public resetNumbers() {
        this._numbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numbersInput() {
        return this._numbers;
    }

    // ports - computed: true, optional: true, required: false
    private _ports?: number[]; 
    public get ports() {
        return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('ports')));
    }
    public set ports(value: number[]) {
        this._ports = value;
    }
    public resetPorts() {
        this._ports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portsInput() {
        return this._ports;
    }

    // strings - computed: true, optional: true, required: false
    private _strings?: string[]; 
    public get strings() {
        return cdktn.Fn.tolist(this.getListAttribute('strings'));
    }
    public set strings(value: string[]) {
        this._strings = value;
    }
    public resetStrings() {
        this._strings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringsInput() {
        return this._strings;
    }
}
export interface BehaviorCriteriaProperty {
    /**
    * The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#comparison_operator CcSecurityProfile#comparison_operator}
    */
    readonly comparisonOperator?: string;
    /**
    * If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. If not specified, the default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#consecutive_datapoints_to_alarm CcSecurityProfile#consecutive_datapoints_to_alarm}
    */
    readonly consecutiveDatapointsToAlarm?: number;
    /**
    * If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. If not specified, the default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#consecutive_datapoints_to_clear CcSecurityProfile#consecutive_datapoints_to_clear}
    */
    readonly consecutiveDatapointsToClear?: number;
    /**
    * Use this to specify the time duration over which the behavior is evaluated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#duration_seconds CcSecurityProfile#duration_seconds}
    */
    readonly durationSeconds?: number;
    /**
    * The configuration of an ML Detect Security Profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#ml_detection_config CcSecurityProfile#ml_detection_config}
    */
    readonly mlDetectionConfig?: MachineLearningDetectionConfigProperty;
    /**
    * A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#statistical_threshold CcSecurityProfile#statistical_threshold}
    */
    readonly statisticalThreshold?: StatisticalThresholdProperty;
    /**
    * The value to be compared with the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#value CcSecurityProfile#value}
    */
    readonly value?: MetricValueProperty;
}
export class BehaviorCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BehaviorCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparisonOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._consecutiveDatapointsToAlarm !== undefined) {
            hasAnyValues = true;
            internalValueResult.consecutiveDatapointsToAlarm = this._consecutiveDatapointsToAlarm;
        }
        if (this._consecutiveDatapointsToClear !== undefined) {
            hasAnyValues = true;
            internalValueResult.consecutiveDatapointsToClear = this._consecutiveDatapointsToClear;
        }
        if (this._durationSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationSeconds = this._durationSeconds;
        }
        if (this._mlDetectionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mlDetectionConfig = this._mlDetectionConfig?.internalValue;
        }
        if (this._statisticalThreshold?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statisticalThreshold = this._statisticalThreshold?.internalValue;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BehaviorCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparisonOperator = undefined;
            this._consecutiveDatapointsToAlarm = undefined;
            this._consecutiveDatapointsToClear = undefined;
            this._durationSeconds = undefined;
            this._mlDetectionConfig.internalValue = undefined;
            this._statisticalThreshold.internalValue = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparisonOperator = value.comparisonOperator;
            this._consecutiveDatapointsToAlarm = value.consecutiveDatapointsToAlarm;
            this._consecutiveDatapointsToClear = value.consecutiveDatapointsToClear;
            this._durationSeconds = value.durationSeconds;
            this._mlDetectionConfig.internalValue = value.mlDetectionConfig;
            this._statisticalThreshold.internalValue = value.statisticalThreshold;
            this._value.internalValue = value.value;
        }
    }

    // comparison_operator - computed: true, optional: true, required: false
    private _comparisonOperator?: string; 
    public get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    public set comparisonOperator(value: string) {
        this._comparisonOperator = value;
    }
    public resetComparisonOperator() {
        this._comparisonOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonOperatorInput() {
        return this._comparisonOperator;
    }

    // consecutive_datapoints_to_alarm - computed: true, optional: true, required: false
    private _consecutiveDatapointsToAlarm?: number; 
    public get consecutiveDatapointsToAlarm() {
        return this.getNumberAttribute('consecutive_datapoints_to_alarm');
    }
    public set consecutiveDatapointsToAlarm(value: number) {
        this._consecutiveDatapointsToAlarm = value;
    }
    public resetConsecutiveDatapointsToAlarm() {
        this._consecutiveDatapointsToAlarm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consecutiveDatapointsToAlarmInput() {
        return this._consecutiveDatapointsToAlarm;
    }

    // consecutive_datapoints_to_clear - computed: true, optional: true, required: false
    private _consecutiveDatapointsToClear?: number; 
    public get consecutiveDatapointsToClear() {
        return this.getNumberAttribute('consecutive_datapoints_to_clear');
    }
    public set consecutiveDatapointsToClear(value: number) {
        this._consecutiveDatapointsToClear = value;
    }
    public resetConsecutiveDatapointsToClear() {
        this._consecutiveDatapointsToClear = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consecutiveDatapointsToClearInput() {
        return this._consecutiveDatapointsToClear;
    }

    // duration_seconds - computed: true, optional: true, required: false
    private _durationSeconds?: number; 
    public get durationSeconds() {
        return this.getNumberAttribute('duration_seconds');
    }
    public set durationSeconds(value: number) {
        this._durationSeconds = value;
    }
    public resetDurationSeconds() {
        this._durationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationSecondsInput() {
        return this._durationSeconds;
    }

    // ml_detection_config - computed: true, optional: true, required: false
    private _mlDetectionConfig = new MachineLearningDetectionConfigPropertyOutputReference(this, "ml_detection_config");
    public get mlDetectionConfig() {
        return this._mlDetectionConfig;
    }
    public putMlDetectionConfig(value: MachineLearningDetectionConfigProperty) {
        this._mlDetectionConfig.internalValue = value;
    }
    public resetMlDetectionConfig() {
        this._mlDetectionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mlDetectionConfigInput() {
        return this._mlDetectionConfig.internalValue;
    }

    // statistical_threshold - computed: true, optional: true, required: false
    private _statisticalThreshold = new StatisticalThresholdPropertyOutputReference(this, "statistical_threshold");
    public get statisticalThreshold() {
        return this._statisticalThreshold;
    }
    public putStatisticalThreshold(value: StatisticalThresholdProperty) {
        this._statisticalThreshold.internalValue = value;
    }
    public resetStatisticalThreshold() {
        this._statisticalThreshold.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticalThresholdInput() {
        return this._statisticalThreshold.internalValue;
    }

    // value - computed: true, optional: true, required: false
    private _value = new MetricValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: MetricValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}
export interface BehaviorsMetricDimensionProperty {
    /**
    * A unique identifier for the dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#dimension_name CcSecurityProfile#dimension_name}
    */
    readonly dimensionName?: string;
    /**
    * Defines how the dimensionValues of a dimension are interpreted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#operator CcSecurityProfile#operator}
    */
    readonly operator?: string;
}
export class BehaviorsMetricDimensionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BehaviorsMetricDimensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionName = this._dimensionName;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BehaviorsMetricDimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensionName = undefined;
            this._operator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensionName = value.dimensionName;
            this._operator = value.operator;
        }
    }

    // dimension_name - computed: true, optional: true, required: false
    private _dimensionName?: string; 
    public get dimensionName() {
        return this.getStringAttribute('dimension_name');
    }
    public set dimensionName(value: string) {
        this._dimensionName = value;
    }
    public resetDimensionName() {
        this._dimensionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionNameInput() {
        return this._dimensionName;
    }

    // operator - computed: true, optional: true, required: false
    private _operator?: string; 
    public get operator() {
        return this.getStringAttribute('operator');
    }
    public set operator(value: string) {
        this._operator = value;
    }
    public resetOperator() {
        this._operator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorInput() {
        return this._operator;
    }
}
export interface BehaviorProperty {
    /**
    * The criteria by which the behavior is determined to be normal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#criteria CcSecurityProfile#criteria}
    */
    readonly criteria?: BehaviorCriteriaProperty;
    /**
    * Flag to enable/disable metrics export for metric to be retained.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#export_metric CcSecurityProfile#export_metric}
    */
    readonly exportMetric?: boolean | cdktn.IResolvable;
    /**
    * What is measured by the behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#metric CcSecurityProfile#metric}
    */
    readonly metric?: string;
    /**
    * The dimension of a metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#metric_dimension CcSecurityProfile#metric_dimension}
    */
    readonly metricDimension?: BehaviorsMetricDimensionProperty;
    /**
    * The name for the behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#name CcSecurityProfile#name}
    */
    readonly name?: string;
    /**
    * Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed. Detect will continue to performing device behavior evaluations. However, suppressed alarms wouldn't be forwarded for SNS notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#suppress_alerts CcSecurityProfile#suppress_alerts}
    */
    readonly suppressAlerts?: boolean | cdktn.IResolvable;
}
export class BehaviorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BehaviorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._criteria?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.criteria = this._criteria?.internalValue;
        }
        if (this._exportMetric !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportMetric = this._exportMetric;
        }
        if (this._metric !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric;
        }
        if (this._metricDimension?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDimension = this._metricDimension?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._suppressAlerts !== undefined) {
            hasAnyValues = true;
            internalValueResult.suppressAlerts = this._suppressAlerts;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BehaviorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._criteria.internalValue = undefined;
            this._exportMetric = undefined;
            this._metric = undefined;
            this._metricDimension.internalValue = undefined;
            this._name = undefined;
            this._suppressAlerts = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._criteria.internalValue = value.criteria;
            this._exportMetric = value.exportMetric;
            this._metric = value.metric;
            this._metricDimension.internalValue = value.metricDimension;
            this._name = value.name;
            this._suppressAlerts = value.suppressAlerts;
        }
    }

    // criteria - computed: true, optional: true, required: false
    private _criteria = new BehaviorCriteriaPropertyOutputReference(this, "criteria");
    public get criteria() {
        return this._criteria;
    }
    public putCriteria(value: BehaviorCriteriaProperty) {
        this._criteria.internalValue = value;
    }
    public resetCriteria() {
        this._criteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get criteriaInput() {
        return this._criteria.internalValue;
    }

    // export_metric - computed: true, optional: true, required: false
    private _exportMetric?: boolean | cdktn.IResolvable; 
    public get exportMetric() {
        return this.getBooleanAttribute('export_metric');
    }
    public set exportMetric(value: boolean | cdktn.IResolvable) {
        this._exportMetric = value;
    }
    public resetExportMetric() {
        this._exportMetric = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportMetricInput() {
        return this._exportMetric;
    }

    // metric - computed: true, optional: true, required: false
    private _metric?: string; 
    public get metric() {
        return this.getStringAttribute('metric');
    }
    public set metric(value: string) {
        this._metric = value;
    }
    public resetMetric() {
        this._metric = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric;
    }

    // metric_dimension - computed: true, optional: true, required: false
    private _metricDimension = new BehaviorsMetricDimensionPropertyOutputReference(this, "metric_dimension");
    public get metricDimension() {
        return this._metricDimension;
    }
    public putMetricDimension(value: BehaviorsMetricDimensionProperty) {
        this._metricDimension.internalValue = value;
    }
    public resetMetricDimension() {
        this._metricDimension.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDimensionInput() {
        return this._metricDimension.internalValue;
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

    // suppress_alerts - computed: true, optional: true, required: false
    private _suppressAlerts?: boolean | cdktn.IResolvable; 
    public get suppressAlerts() {
        return this.getBooleanAttribute('suppress_alerts');
    }
    public set suppressAlerts(value: boolean | cdktn.IResolvable) {
        this._suppressAlerts = value;
    }
    public resetSuppressAlerts() {
        this._suppressAlerts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suppressAlertsInput() {
        return this._suppressAlerts;
    }
}

export class BehaviorPropertyList extends cdktn.ComplexList {
    public internalValue? : BehaviorProperty[] | cdktn.IResolvable

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
    public get(index: number): BehaviorPropertyOutputReference {
        return new BehaviorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricsExportConfigProperty {
    /**
    * The topic for metrics export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#mqtt_topic CcSecurityProfile#mqtt_topic}
    */
    readonly mqttTopic?: string;
    /**
    * The ARN of the role that grants permission to publish to mqtt topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#role_arn CcSecurityProfile#role_arn}
    */
    readonly roleArn?: string;
}
export class MetricsExportConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricsExportConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mqttTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.mqttTopic = this._mqttTopic;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricsExportConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mqttTopic = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mqttTopic = value.mqttTopic;
            this._roleArn = value.roleArn;
        }
    }

    // mqtt_topic - computed: true, optional: true, required: false
    private _mqttTopic?: string; 
    public get mqttTopic() {
        return this.getStringAttribute('mqtt_topic');
    }
    public set mqttTopic(value: string) {
        this._mqttTopic = value;
    }
    public resetMqttTopic() {
        this._mqttTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mqttTopicInput() {
        return this._mqttTopic;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }
}
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#key CcSecurityProfile#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_security_profile#value CcSecurityProfile#value}
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
