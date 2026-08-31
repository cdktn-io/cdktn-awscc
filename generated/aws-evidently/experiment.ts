// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcExperimentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#description CcExperiment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#metric_goals CcExperiment#metric_goals}
    */
    readonly metricGoals: CcExperiment.MetricGoalObjectProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#name CcExperiment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#online_ab_config CcExperiment#online_ab_config}
    */
    readonly onlineAbConfig: CcExperiment.OnlineAbConfigObjectProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#project CcExperiment#project}
    */
    readonly project: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#randomization_salt CcExperiment#randomization_salt}
    */
    readonly randomizationSalt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#remove_segment CcExperiment#remove_segment}
    */
    readonly removeSegment?: boolean | cdktn.IResolvable;
    /**
    * Start Experiment. Default is False
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#running_status CcExperiment#running_status}
    */
    readonly runningStatus?: CcExperiment.RunningStatusObjectProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#sampling_rate CcExperiment#sampling_rate}
    */
    readonly samplingRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#segment CcExperiment#segment}
    */
    readonly segment?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#tags CcExperiment#tags}
    */
    readonly tags?: CcExperiment.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#treatments CcExperiment#treatments}
    */
    readonly treatments: CcExperiment.TreatmentObjectProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment awscc_evidently_experiment}
*/
export class CcExperiment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_evidently_experiment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcExperiment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcExperiment to import
    * @param importFromId The id of the existing CcExperiment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcExperiment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_evidently_experiment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment awscc_evidently_experiment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcExperimentProps
    */
    public constructor(scope: Construct, id: string, config: CcExperimentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_evidently_experiment',
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
        this._description = config.description;
        this._metricGoals.internalValue = config.metricGoals;
        this._name = config.name;
        this._onlineAbConfig.internalValue = config.onlineAbConfig;
        this._project = config.project;
        this._randomizationSalt = config.randomizationSalt;
        this._removeSegment = config.removeSegment;
        this._runningStatus.internalValue = config.runningStatus;
        this._samplingRate = config.samplingRate;
        this._segment = config.segment;
        this._tags.internalValue = config.tags;
        this._treatments.internalValue = config.treatments;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // metric_goals - computed: false, optional: false, required: true
    private _metricGoals = new CcExperiment.MetricGoalObjectPropertyList(this, "metric_goals", false);
    public get metricGoals() {
        return this._metricGoals;
    }
    public putMetricGoals(value: CcExperiment.MetricGoalObjectProperty[] | cdktn.IResolvable) {
        this._metricGoals.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricGoalsInput() {
        return this._metricGoals.internalValue;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // online_ab_config - computed: false, optional: false, required: true
    private _onlineAbConfig = new CcExperiment.OnlineAbConfigObjectPropertyOutputReference(this, "online_ab_config");
    public get onlineAbConfig() {
        return this._onlineAbConfig;
    }
    public putOnlineAbConfig(value: CcExperiment.OnlineAbConfigObjectProperty) {
        this._onlineAbConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get onlineAbConfigInput() {
        return this._onlineAbConfig.internalValue;
    }

    // project - computed: false, optional: false, required: true
    private _project?: string; 
    public get project() {
        return this.getStringAttribute('project');
    }
    public set project(value: string) {
        this._project = value;
    }
    // Temporarily expose input value. Use with caution.
    public get projectInput() {
        return this._project;
    }

    // randomization_salt - computed: true, optional: true, required: false
    private _randomizationSalt?: string; 
    public get randomizationSalt() {
        return this.getStringAttribute('randomization_salt');
    }
    public set randomizationSalt(value: string) {
        this._randomizationSalt = value;
    }
    public resetRandomizationSalt() {
        this._randomizationSalt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get randomizationSaltInput() {
        return this._randomizationSalt;
    }

    // remove_segment - computed: true, optional: true, required: false
    private _removeSegment?: boolean | cdktn.IResolvable; 
    public get removeSegment() {
        return this.getBooleanAttribute('remove_segment');
    }
    public set removeSegment(value: boolean | cdktn.IResolvable) {
        this._removeSegment = value;
    }
    public resetRemoveSegment() {
        this._removeSegment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeSegmentInput() {
        return this._removeSegment;
    }

    // running_status - computed: true, optional: true, required: false
    private _runningStatus = new CcExperiment.RunningStatusObjectPropertyOutputReference(this, "running_status");
    public get runningStatus() {
        return this._runningStatus;
    }
    public putRunningStatus(value: CcExperiment.RunningStatusObjectProperty) {
        this._runningStatus.internalValue = value;
    }
    public resetRunningStatus() {
        this._runningStatus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runningStatusInput() {
        return this._runningStatus.internalValue;
    }

    // sampling_rate - computed: true, optional: true, required: false
    private _samplingRate?: number; 
    public get samplingRate() {
        return this.getNumberAttribute('sampling_rate');
    }
    public set samplingRate(value: number) {
        this._samplingRate = value;
    }
    public resetSamplingRate() {
        this._samplingRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingRateInput() {
        return this._samplingRate;
    }

    // segment - computed: true, optional: true, required: false
    private _segment?: string; 
    public get segment() {
        return this.getStringAttribute('segment');
    }
    public set segment(value: string) {
        this._segment = value;
    }
    public resetSegment() {
        this._segment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentInput() {
        return this._segment;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcExperiment.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcExperiment.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // treatments - computed: false, optional: false, required: true
    private _treatments = new CcExperiment.TreatmentObjectPropertyList(this, "treatments", false);
    public get treatments() {
        return this._treatments;
    }
    public putTreatments(value: CcExperiment.TreatmentObjectProperty[] | cdktn.IResolvable) {
        this._treatments.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get treatmentsInput() {
        return this._treatments.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            metric_goals: cdktn.listMapper(ccExperimentMetricGoalObjectPropertyToTerraform, false)(this._metricGoals.internalValue),
            name: cdktn.stringToTerraform(this._name),
            online_ab_config: ccExperimentOnlineAbConfigObjectPropertyToTerraform(this._onlineAbConfig.internalValue),
            project: cdktn.stringToTerraform(this._project),
            randomization_salt: cdktn.stringToTerraform(this._randomizationSalt),
            remove_segment: cdktn.booleanToTerraform(this._removeSegment),
            running_status: ccExperimentRunningStatusObjectPropertyToTerraform(this._runningStatus.internalValue),
            sampling_rate: cdktn.numberToTerraform(this._samplingRate),
            segment: cdktn.stringToTerraform(this._segment),
            tags: cdktn.listMapper(ccExperimentTagPropertyToTerraform, false)(this._tags.internalValue),
            treatments: cdktn.listMapper(ccExperimentTreatmentObjectPropertyToTerraform, false)(this._treatments.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metric_goals: {
                value: cdktn.listMapperHcl(ccExperimentMetricGoalObjectPropertyToHclTerraform, false)(this._metricGoals.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcExperiment.MetricGoalObjectPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            online_ab_config: {
                value: ccExperimentOnlineAbConfigObjectPropertyToHclTerraform(this._onlineAbConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcExperiment.OnlineAbConfigObjectProperty",
            },
            project: {
                value: cdktn.stringToHclTerraform(this._project),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            randomization_salt: {
                value: cdktn.stringToHclTerraform(this._randomizationSalt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            remove_segment: {
                value: cdktn.booleanToHclTerraform(this._removeSegment),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            running_status: {
                value: ccExperimentRunningStatusObjectPropertyToHclTerraform(this._runningStatus.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcExperiment.RunningStatusObjectProperty",
            },
            sampling_rate: {
                value: cdktn.numberToHclTerraform(this._samplingRate),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            segment: {
                value: cdktn.stringToHclTerraform(this._segment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccExperimentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcExperiment.TagPropertyList",
            },
            treatments: {
                value: cdktn.listMapperHcl(ccExperimentTreatmentObjectPropertyToHclTerraform, false)(this._treatments.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcExperiment.TreatmentObjectPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccExperimentMetricGoalObjectPropertyToTerraform(struct?: CcExperiment.MetricGoalObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        desired_change: cdktn.stringToTerraform(struct!.desiredChange),
        entity_id_key: cdktn.stringToTerraform(struct!.entityIdKey),
        event_pattern: cdktn.stringToTerraform(struct!.eventPattern),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        unit_label: cdktn.stringToTerraform(struct!.unitLabel),
        value_key: cdktn.stringToTerraform(struct!.valueKey),
    }
}


export function ccExperimentMetricGoalObjectPropertyToHclTerraform(struct?: CcExperiment.MetricGoalObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        desired_change: {
            value: cdktn.stringToHclTerraform(struct!.desiredChange),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entity_id_key: {
            value: cdktn.stringToHclTerraform(struct!.entityIdKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_pattern: {
            value: cdktn.stringToHclTerraform(struct!.eventPattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit_label: {
            value: cdktn.stringToHclTerraform(struct!.unitLabel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value_key: {
            value: cdktn.stringToHclTerraform(struct!.valueKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTreatmentToWeightPropertyToTerraform(struct?: CcExperiment.TreatmentToWeightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        split_weight: cdktn.numberToTerraform(struct!.splitWeight),
        treatment: cdktn.stringToTerraform(struct!.treatment),
    }
}


export function ccExperimentTreatmentToWeightPropertyToHclTerraform(struct?: CcExperiment.TreatmentToWeightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        split_weight: {
            value: cdktn.numberToHclTerraform(struct!.splitWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        treatment: {
            value: cdktn.stringToHclTerraform(struct!.treatment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentOnlineAbConfigObjectPropertyToTerraform(struct?: CcExperiment.OnlineAbConfigObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        control_treatment_name: cdktn.stringToTerraform(struct!.controlTreatmentName),
        treatment_weights: cdktn.listMapper(ccExperimentTreatmentToWeightPropertyToTerraform, false)(struct!.treatmentWeights),
    }
}


export function ccExperimentOnlineAbConfigObjectPropertyToHclTerraform(struct?: CcExperiment.OnlineAbConfigObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        control_treatment_name: {
            value: cdktn.stringToHclTerraform(struct!.controlTreatmentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        treatment_weights: {
            value: cdktn.listMapperHcl(ccExperimentTreatmentToWeightPropertyToHclTerraform, false)(struct!.treatmentWeights),
            isBlock: true,
            type: "set",
            storageClassType: "TreatmentToWeightPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentRunningStatusObjectPropertyToTerraform(struct?: CcExperiment.RunningStatusObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        analysis_complete_time: cdktn.stringToTerraform(struct!.analysisCompleteTime),
        desired_state: cdktn.stringToTerraform(struct!.desiredState),
        reason: cdktn.stringToTerraform(struct!.reason),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccExperimentRunningStatusObjectPropertyToHclTerraform(struct?: CcExperiment.RunningStatusObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        analysis_complete_time: {
            value: cdktn.stringToHclTerraform(struct!.analysisCompleteTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        desired_state: {
            value: cdktn.stringToHclTerraform(struct!.desiredState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        reason: {
            value: cdktn.stringToHclTerraform(struct!.reason),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTagPropertyToTerraform(struct?: CcExperiment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccExperimentTagPropertyToHclTerraform(struct?: CcExperiment.TagProperty | cdktn.IResolvable): any {
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


export function ccExperimentTreatmentObjectPropertyToTerraform(struct?: CcExperiment.TreatmentObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        feature: cdktn.stringToTerraform(struct!.feature),
        treatment_name: cdktn.stringToTerraform(struct!.treatmentName),
        variation: cdktn.stringToTerraform(struct!.variation),
    }
}


export function ccExperimentTreatmentObjectPropertyToHclTerraform(struct?: CcExperiment.TreatmentObjectProperty | cdktn.IResolvable): any {
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
        feature: {
            value: cdktn.stringToHclTerraform(struct!.feature),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        treatment_name: {
            value: cdktn.stringToHclTerraform(struct!.treatmentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        variation: {
            value: cdktn.stringToHclTerraform(struct!.variation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcExperiment {
export interface MetricGoalObjectProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#desired_change CcExperiment#desired_change}
    */
    readonly desiredChange: string;
    /**
    * The JSON path to reference the entity id in the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#entity_id_key CcExperiment#entity_id_key}
    */
    readonly entityIdKey: string;
    /**
    * Event patterns have the same structure as the events they match. Rules use event patterns to select events. An event pattern either matches an event or it doesn't.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#event_pattern CcExperiment#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#metric_name CcExperiment#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#unit_label CcExperiment#unit_label}
    */
    readonly unitLabel?: string;
    /**
    * The JSON path to reference the numerical metric value in the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#value_key CcExperiment#value_key}
    */
    readonly valueKey: string;
}
export class MetricGoalObjectPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricGoalObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._desiredChange !== undefined) {
            hasAnyValues = true;
            internalValueResult.desiredChange = this._desiredChange;
        }
        if (this._entityIdKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityIdKey = this._entityIdKey;
        }
        if (this._eventPattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventPattern = this._eventPattern;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._unitLabel !== undefined) {
            hasAnyValues = true;
            internalValueResult.unitLabel = this._unitLabel;
        }
        if (this._valueKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueKey = this._valueKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricGoalObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._desiredChange = undefined;
            this._entityIdKey = undefined;
            this._eventPattern = undefined;
            this._metricName = undefined;
            this._unitLabel = undefined;
            this._valueKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._desiredChange = value.desiredChange;
            this._entityIdKey = value.entityIdKey;
            this._eventPattern = value.eventPattern;
            this._metricName = value.metricName;
            this._unitLabel = value.unitLabel;
            this._valueKey = value.valueKey;
        }
    }

    // desired_change - computed: false, optional: false, required: true
    private _desiredChange?: string; 
    public get desiredChange() {
        return this.getStringAttribute('desired_change');
    }
    public set desiredChange(value: string) {
        this._desiredChange = value;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredChangeInput() {
        return this._desiredChange;
    }

    // entity_id_key - computed: false, optional: false, required: true
    private _entityIdKey?: string; 
    public get entityIdKey() {
        return this.getStringAttribute('entity_id_key');
    }
    public set entityIdKey(value: string) {
        this._entityIdKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get entityIdKeyInput() {
        return this._entityIdKey;
    }

    // event_pattern - computed: true, optional: true, required: false
    private _eventPattern?: string; 
    public get eventPattern() {
        return this.getStringAttribute('event_pattern');
    }
    public set eventPattern(value: string) {
        this._eventPattern = value;
    }
    public resetEventPattern() {
        this._eventPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventPatternInput() {
        return this._eventPattern;
    }

    // metric_name - computed: false, optional: false, required: true
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // unit_label - computed: true, optional: true, required: false
    private _unitLabel?: string; 
    public get unitLabel() {
        return this.getStringAttribute('unit_label');
    }
    public set unitLabel(value: string) {
        this._unitLabel = value;
    }
    public resetUnitLabel() {
        this._unitLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitLabelInput() {
        return this._unitLabel;
    }

    // value_key - computed: false, optional: false, required: true
    private _valueKey?: string; 
    public get valueKey() {
        return this.getStringAttribute('value_key');
    }
    public set valueKey(value: string) {
        this._valueKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueKeyInput() {
        return this._valueKey;
    }
}

export class MetricGoalObjectPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricGoalObjectProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricGoalObjectPropertyOutputReference {
        return new MetricGoalObjectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TreatmentToWeightProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#split_weight CcExperiment#split_weight}
    */
    readonly splitWeight?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#treatment CcExperiment#treatment}
    */
    readonly treatment?: string;
}
export class TreatmentToWeightPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TreatmentToWeightProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._splitWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.splitWeight = this._splitWeight;
        }
        if (this._treatment !== undefined) {
            hasAnyValues = true;
            internalValueResult.treatment = this._treatment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TreatmentToWeightProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._splitWeight = undefined;
            this._treatment = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._splitWeight = value.splitWeight;
            this._treatment = value.treatment;
        }
    }

    // split_weight - computed: true, optional: true, required: false
    private _splitWeight?: number; 
    public get splitWeight() {
        return this.getNumberAttribute('split_weight');
    }
    public set splitWeight(value: number) {
        this._splitWeight = value;
    }
    public resetSplitWeight() {
        this._splitWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get splitWeightInput() {
        return this._splitWeight;
    }

    // treatment - computed: true, optional: true, required: false
    private _treatment?: string; 
    public get treatment() {
        return this.getStringAttribute('treatment');
    }
    public set treatment(value: string) {
        this._treatment = value;
    }
    public resetTreatment() {
        this._treatment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get treatmentInput() {
        return this._treatment;
    }
}

export class TreatmentToWeightPropertyList extends cdktn.ComplexList {
    public internalValue? : TreatmentToWeightProperty[] | cdktn.IResolvable

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
    public get(index: number): TreatmentToWeightPropertyOutputReference {
        return new TreatmentToWeightPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OnlineAbConfigObjectProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#control_treatment_name CcExperiment#control_treatment_name}
    */
    readonly controlTreatmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#treatment_weights CcExperiment#treatment_weights}
    */
    readonly treatmentWeights?: TreatmentToWeightProperty[] | cdktn.IResolvable;
}
export class OnlineAbConfigObjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnlineAbConfigObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._controlTreatmentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.controlTreatmentName = this._controlTreatmentName;
        }
        if (this._treatmentWeights?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.treatmentWeights = this._treatmentWeights?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnlineAbConfigObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._controlTreatmentName = undefined;
            this._treatmentWeights.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._controlTreatmentName = value.controlTreatmentName;
            this._treatmentWeights.internalValue = value.treatmentWeights;
        }
    }

    // control_treatment_name - computed: true, optional: true, required: false
    private _controlTreatmentName?: string; 
    public get controlTreatmentName() {
        return this.getStringAttribute('control_treatment_name');
    }
    public set controlTreatmentName(value: string) {
        this._controlTreatmentName = value;
    }
    public resetControlTreatmentName() {
        this._controlTreatmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlTreatmentNameInput() {
        return this._controlTreatmentName;
    }

    // treatment_weights - computed: true, optional: true, required: false
    private _treatmentWeights = new TreatmentToWeightPropertyList(this, "treatment_weights", true);
    public get treatmentWeights() {
        return this._treatmentWeights;
    }
    public putTreatmentWeights(value: TreatmentToWeightProperty[] | cdktn.IResolvable) {
        this._treatmentWeights.internalValue = value;
    }
    public resetTreatmentWeights() {
        this._treatmentWeights.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get treatmentWeightsInput() {
        return this._treatmentWeights.internalValue;
    }
}
export interface RunningStatusObjectProperty {
    /**
    * Provide the analysis Completion time for an experiment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#analysis_complete_time CcExperiment#analysis_complete_time}
    */
    readonly analysisCompleteTime?: string;
    /**
    * Provide CANCELLED or COMPLETED desired state when stopping an experiment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#desired_state CcExperiment#desired_state}
    */
    readonly desiredState?: string;
    /**
    * Reason is a required input for stopping the experiment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#reason CcExperiment#reason}
    */
    readonly reason?: string;
    /**
    * Provide START or STOP action to apply on an experiment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#status CcExperiment#status}
    */
    readonly status?: string;
}
export class RunningStatusObjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RunningStatusObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._analysisCompleteTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.analysisCompleteTime = this._analysisCompleteTime;
        }
        if (this._desiredState !== undefined) {
            hasAnyValues = true;
            internalValueResult.desiredState = this._desiredState;
        }
        if (this._reason !== undefined) {
            hasAnyValues = true;
            internalValueResult.reason = this._reason;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RunningStatusObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._analysisCompleteTime = undefined;
            this._desiredState = undefined;
            this._reason = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._analysisCompleteTime = value.analysisCompleteTime;
            this._desiredState = value.desiredState;
            this._reason = value.reason;
            this._status = value.status;
        }
    }

    // analysis_complete_time - computed: true, optional: true, required: false
    private _analysisCompleteTime?: string; 
    public get analysisCompleteTime() {
        return this.getStringAttribute('analysis_complete_time');
    }
    public set analysisCompleteTime(value: string) {
        this._analysisCompleteTime = value;
    }
    public resetAnalysisCompleteTime() {
        this._analysisCompleteTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analysisCompleteTimeInput() {
        return this._analysisCompleteTime;
    }

    // desired_state - computed: true, optional: true, required: false
    private _desiredState?: string; 
    public get desiredState() {
        return this.getStringAttribute('desired_state');
    }
    public set desiredState(value: string) {
        this._desiredState = value;
    }
    public resetDesiredState() {
        this._desiredState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredStateInput() {
        return this._desiredState;
    }

    // reason - computed: true, optional: true, required: false
    private _reason?: string; 
    public get reason() {
        return this.getStringAttribute('reason');
    }
    public set reason(value: string) {
        this._reason = value;
    }
    public resetReason() {
        this._reason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reasonInput() {
        return this._reason;
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
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#key CcExperiment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#value CcExperiment#value}
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
export interface TreatmentObjectProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#description CcExperiment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#feature CcExperiment#feature}
    */
    readonly feature: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#treatment_name CcExperiment#treatment_name}
    */
    readonly treatmentName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/evidently_experiment#variation CcExperiment#variation}
    */
    readonly variation: string;
}
export class TreatmentObjectPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TreatmentObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._feature !== undefined) {
            hasAnyValues = true;
            internalValueResult.feature = this._feature;
        }
        if (this._treatmentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.treatmentName = this._treatmentName;
        }
        if (this._variation !== undefined) {
            hasAnyValues = true;
            internalValueResult.variation = this._variation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TreatmentObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._feature = undefined;
            this._treatmentName = undefined;
            this._variation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._feature = value.feature;
            this._treatmentName = value.treatmentName;
            this._variation = value.variation;
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

    // feature - computed: false, optional: false, required: true
    private _feature?: string; 
    public get feature() {
        return this.getStringAttribute('feature');
    }
    public set feature(value: string) {
        this._feature = value;
    }
    // Temporarily expose input value. Use with caution.
    public get featureInput() {
        return this._feature;
    }

    // treatment_name - computed: false, optional: false, required: true
    private _treatmentName?: string; 
    public get treatmentName() {
        return this.getStringAttribute('treatment_name');
    }
    public set treatmentName(value: string) {
        this._treatmentName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get treatmentNameInput() {
        return this._treatmentName;
    }

    // variation - computed: false, optional: false, required: true
    private _variation?: string; 
    public get variation() {
        return this.getStringAttribute('variation');
    }
    public set variation(value: string) {
        this._variation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get variationInput() {
        return this._variation;
    }
}

export class TreatmentObjectPropertyList extends cdktn.ComplexList {
    public internalValue? : TreatmentObjectProperty[] | cdktn.IResolvable

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
    public get(index: number): TreatmentObjectPropertyOutputReference {
        return new TreatmentObjectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
