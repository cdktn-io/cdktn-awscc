// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceLevelObjectiveProps extends cdktn.TerraformMetaArguments {
    /**
    * Each object in this array defines the length of the look-back window used to calculate one burn rate metric for this SLO. The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#burn_rate_configurations CcServiceLevelObjective#burn_rate_configurations}
    */
    readonly burnRateConfigurations?: CcServiceLevelObjective.BurnRateConfigurationProperty[] | cdktn.IResolvable;
    /**
    * An optional description for this SLO. Default is 'No description'
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#description CcServiceLevelObjective#description}
    */
    readonly description?: string;
    /**
    * Each object in this array defines a time exclusion window for this SLO. The time exclusion window is used to exclude breaching data points from affecting attainment rate, error budget, and burn rate metrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#exclusion_windows CcServiceLevelObjective#exclusion_windows}
    */
    readonly exclusionWindows?: CcServiceLevelObjective.ExclusionWindowProperty[] | cdktn.IResolvable;
    /**
    * A structure that contains the attributes that determine the goal of the SLO. This includes the time period for evaluation and the attainment threshold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#goal CcServiceLevelObjective#goal}
    */
    readonly goal?: CcServiceLevelObjective.GoalProperty;
    /**
    * The name of this SLO.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#name CcServiceLevelObjective#name}
    */
    readonly name: string;
    /**
    * This structure contains information about the performance metric that a request-based SLO monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#request_based_sli CcServiceLevelObjective#request_based_sli}
    */
    readonly requestBasedSli?: CcServiceLevelObjective.RequestBasedSliProperty;
    /**
    * This structure contains information about the performance metric that an SLO monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#sli CcServiceLevelObjective#sli}
    */
    readonly sli?: CcServiceLevelObjective.SliProperty;
    /**
    * The list of tag keys and values associated with the resource you specified
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#tags CcServiceLevelObjective#tags}
    */
    readonly tags?: CcServiceLevelObjective.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective awscc_applicationsignals_service_level_objective}
*/
export class CcServiceLevelObjective extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_applicationsignals_service_level_objective";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServiceLevelObjective resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServiceLevelObjective to import
    * @param importFromId The id of the existing CcServiceLevelObjective that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServiceLevelObjective to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationsignals_service_level_objective", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective awscc_applicationsignals_service_level_objective} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceLevelObjectiveProps
    */
    public constructor(scope: Construct, id: string, config: CcServiceLevelObjectiveProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_applicationsignals_service_level_objective',
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
        this._burnRateConfigurations.internalValue = config.burnRateConfigurations;
        this._description = config.description;
        this._exclusionWindows.internalValue = config.exclusionWindows;
        this._goal.internalValue = config.goal;
        this._name = config.name;
        this._requestBasedSli.internalValue = config.requestBasedSli;
        this._sli.internalValue = config.sli;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // burn_rate_configurations - computed: true, optional: true, required: false
    private _burnRateConfigurations = new CcServiceLevelObjective.BurnRateConfigurationPropertyList(this, "burn_rate_configurations", true);
    public get burnRateConfigurations() {
        return this._burnRateConfigurations;
    }
    public putBurnRateConfigurations(value: CcServiceLevelObjective.BurnRateConfigurationProperty[] | cdktn.IResolvable) {
        this._burnRateConfigurations.internalValue = value;
    }
    public resetBurnRateConfigurations() {
        this._burnRateConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get burnRateConfigurationsInput() {
        return this._burnRateConfigurations.internalValue;
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getNumberAttribute('created_time');
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

    // evaluation_type - computed: true, optional: false, required: false
    public get evaluationType() {
        return this.getStringAttribute('evaluation_type');
    }

    // exclusion_windows - computed: true, optional: true, required: false
    private _exclusionWindows = new CcServiceLevelObjective.ExclusionWindowPropertyList(this, "exclusion_windows", true);
    public get exclusionWindows() {
        return this._exclusionWindows;
    }
    public putExclusionWindows(value: CcServiceLevelObjective.ExclusionWindowProperty[] | cdktn.IResolvable) {
        this._exclusionWindows.internalValue = value;
    }
    public resetExclusionWindows() {
        this._exclusionWindows.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusionWindowsInput() {
        return this._exclusionWindows.internalValue;
    }

    // goal - computed: true, optional: true, required: false
    private _goal = new CcServiceLevelObjective.GoalPropertyOutputReference(this, "goal");
    public get goal() {
        return this._goal;
    }
    public putGoal(value: CcServiceLevelObjective.GoalProperty) {
        this._goal.internalValue = value;
    }
    public resetGoal() {
        this._goal.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get goalInput() {
        return this._goal.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getNumberAttribute('last_updated_time');
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

    // request_based_sli - computed: true, optional: true, required: false
    private _requestBasedSli = new CcServiceLevelObjective.RequestBasedSliPropertyOutputReference(this, "request_based_sli");
    public get requestBasedSli() {
        return this._requestBasedSli;
    }
    public putRequestBasedSli(value: CcServiceLevelObjective.RequestBasedSliProperty) {
        this._requestBasedSli.internalValue = value;
    }
    public resetRequestBasedSli() {
        this._requestBasedSli.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestBasedSliInput() {
        return this._requestBasedSli.internalValue;
    }

    // sli - computed: true, optional: true, required: false
    private _sli = new CcServiceLevelObjective.SliPropertyOutputReference(this, "sli");
    public get sli() {
        return this._sli;
    }
    public putSli(value: CcServiceLevelObjective.SliProperty) {
        this._sli.internalValue = value;
    }
    public resetSli() {
        this._sli.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sliInput() {
        return this._sli.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcServiceLevelObjective.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcServiceLevelObjective.TagProperty[] | cdktn.IResolvable) {
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
            burn_rate_configurations: cdktn.listMapper(ccServiceLevelObjectiveBurnRateConfigurationPropertyToTerraform, false)(this._burnRateConfigurations.internalValue),
            description: cdktn.stringToTerraform(this._description),
            exclusion_windows: cdktn.listMapper(ccServiceLevelObjectiveExclusionWindowPropertyToTerraform, false)(this._exclusionWindows.internalValue),
            goal: ccServiceLevelObjectiveGoalPropertyToTerraform(this._goal.internalValue),
            name: cdktn.stringToTerraform(this._name),
            request_based_sli: ccServiceLevelObjectiveRequestBasedSliPropertyToTerraform(this._requestBasedSli.internalValue),
            sli: ccServiceLevelObjectiveSliPropertyToTerraform(this._sli.internalValue),
            tags: cdktn.listMapper(ccServiceLevelObjectiveTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            burn_rate_configurations: {
                value: cdktn.listMapperHcl(ccServiceLevelObjectiveBurnRateConfigurationPropertyToHclTerraform, false)(this._burnRateConfigurations.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcServiceLevelObjective.BurnRateConfigurationPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            exclusion_windows: {
                value: cdktn.listMapperHcl(ccServiceLevelObjectiveExclusionWindowPropertyToHclTerraform, false)(this._exclusionWindows.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcServiceLevelObjective.ExclusionWindowPropertyList",
            },
            goal: {
                value: ccServiceLevelObjectiveGoalPropertyToHclTerraform(this._goal.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServiceLevelObjective.GoalProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_based_sli: {
                value: ccServiceLevelObjectiveRequestBasedSliPropertyToHclTerraform(this._requestBasedSli.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServiceLevelObjective.RequestBasedSliProperty",
            },
            sli: {
                value: ccServiceLevelObjectiveSliPropertyToHclTerraform(this._sli.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServiceLevelObjective.SliProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServiceLevelObjectiveTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcServiceLevelObjective.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServiceLevelObjectiveBurnRateConfigurationPropertyToTerraform(struct?: CcServiceLevelObjective.BurnRateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        look_back_window_minutes: cdktn.numberToTerraform(struct!.lookBackWindowMinutes),
    }
}


export function ccServiceLevelObjectiveBurnRateConfigurationPropertyToHclTerraform(struct?: CcServiceLevelObjective.BurnRateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        look_back_window_minutes: {
            value: cdktn.numberToHclTerraform(struct!.lookBackWindowMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveRecurrenceRulePropertyToTerraform(struct?: CcServiceLevelObjective.RecurrenceRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
    }
}


export function ccServiceLevelObjectiveRecurrenceRulePropertyToHclTerraform(struct?: CcServiceLevelObjective.RecurrenceRuleProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveWindowPropertyToTerraform(struct?: CcServiceLevelObjective.WindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration: cdktn.numberToTerraform(struct!.duration),
        duration_unit: cdktn.stringToTerraform(struct!.durationUnit),
    }
}


export function ccServiceLevelObjectiveWindowPropertyToHclTerraform(struct?: CcServiceLevelObjective.WindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration: {
            value: cdktn.numberToHclTerraform(struct!.duration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        duration_unit: {
            value: cdktn.stringToHclTerraform(struct!.durationUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveExclusionWindowPropertyToTerraform(struct?: CcServiceLevelObjective.ExclusionWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        reason: cdktn.stringToTerraform(struct!.reason),
        recurrence_rule: ccServiceLevelObjectiveRecurrenceRulePropertyToTerraform(struct!.recurrenceRule),
        start_time: cdktn.stringToTerraform(struct!.startTime),
        window: ccServiceLevelObjectiveWindowPropertyToTerraform(struct!.window),
    }
}


export function ccServiceLevelObjectiveExclusionWindowPropertyToHclTerraform(struct?: CcServiceLevelObjective.ExclusionWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        reason: {
            value: cdktn.stringToHclTerraform(struct!.reason),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        recurrence_rule: {
            value: ccServiceLevelObjectiveRecurrenceRulePropertyToHclTerraform(struct!.recurrenceRule),
            isBlock: true,
            type: "struct",
            storageClassType: "RecurrenceRuleProperty",
        },
        start_time: {
            value: cdktn.stringToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        window: {
            value: ccServiceLevelObjectiveWindowPropertyToHclTerraform(struct!.window),
            isBlock: true,
            type: "struct",
            storageClassType: "WindowProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveCalendarIntervalPropertyToTerraform(struct?: CcServiceLevelObjective.CalendarIntervalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration: cdktn.numberToTerraform(struct!.duration),
        duration_unit: cdktn.stringToTerraform(struct!.durationUnit),
        start_time: cdktn.numberToTerraform(struct!.startTime),
    }
}


export function ccServiceLevelObjectiveCalendarIntervalPropertyToHclTerraform(struct?: CcServiceLevelObjective.CalendarIntervalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration: {
            value: cdktn.numberToHclTerraform(struct!.duration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        duration_unit: {
            value: cdktn.stringToHclTerraform(struct!.durationUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_time: {
            value: cdktn.numberToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveRollingIntervalPropertyToTerraform(struct?: CcServiceLevelObjective.RollingIntervalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration: cdktn.numberToTerraform(struct!.duration),
        duration_unit: cdktn.stringToTerraform(struct!.durationUnit),
    }
}


export function ccServiceLevelObjectiveRollingIntervalPropertyToHclTerraform(struct?: CcServiceLevelObjective.RollingIntervalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration: {
            value: cdktn.numberToHclTerraform(struct!.duration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        duration_unit: {
            value: cdktn.stringToHclTerraform(struct!.durationUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveIntervalPropertyToTerraform(struct?: CcServiceLevelObjective.IntervalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        calendar_interval: ccServiceLevelObjectiveCalendarIntervalPropertyToTerraform(struct!.calendarInterval),
        rolling_interval: ccServiceLevelObjectiveRollingIntervalPropertyToTerraform(struct!.rollingInterval),
    }
}


export function ccServiceLevelObjectiveIntervalPropertyToHclTerraform(struct?: CcServiceLevelObjective.IntervalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        calendar_interval: {
            value: ccServiceLevelObjectiveCalendarIntervalPropertyToHclTerraform(struct!.calendarInterval),
            isBlock: true,
            type: "struct",
            storageClassType: "CalendarIntervalProperty",
        },
        rolling_interval: {
            value: ccServiceLevelObjectiveRollingIntervalPropertyToHclTerraform(struct!.rollingInterval),
            isBlock: true,
            type: "struct",
            storageClassType: "RollingIntervalProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveGoalPropertyToTerraform(struct?: CcServiceLevelObjective.GoalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attainment_goal: cdktn.numberToTerraform(struct!.attainmentGoal),
        interval: ccServiceLevelObjectiveIntervalPropertyToTerraform(struct!.interval),
        warning_threshold: cdktn.numberToTerraform(struct!.warningThreshold),
    }
}


export function ccServiceLevelObjectiveGoalPropertyToHclTerraform(struct?: CcServiceLevelObjective.GoalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attainment_goal: {
            value: cdktn.numberToHclTerraform(struct!.attainmentGoal),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval: {
            value: ccServiceLevelObjectiveIntervalPropertyToHclTerraform(struct!.interval),
            isBlock: true,
            type: "struct",
            storageClassType: "IntervalProperty",
        },
        warning_threshold: {
            value: cdktn.numberToHclTerraform(struct!.warningThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveCompositeSliComponentPropertyToTerraform(struct?: CcServiceLevelObjective.CompositeSliComponentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        operation_name: cdktn.stringToTerraform(struct!.operationName),
    }
}


export function ccServiceLevelObjectiveCompositeSliComponentPropertyToHclTerraform(struct?: CcServiceLevelObjective.CompositeSliComponentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        operation_name: {
            value: cdktn.stringToHclTerraform(struct!.operationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveSelectionConfigPropertyToTerraform(struct?: CcServiceLevelObjective.SelectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pattern: cdktn.stringToTerraform(struct!.pattern),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccServiceLevelObjectiveSelectionConfigPropertyToHclTerraform(struct?: CcServiceLevelObjective.SelectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pattern: {
            value: cdktn.stringToHclTerraform(struct!.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccServiceLevelObjectiveCompositeSliConfigPropertyToTerraform(struct?: CcServiceLevelObjective.CompositeSliConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        composite_sli_components: cdktn.listMapper(ccServiceLevelObjectiveCompositeSliComponentPropertyToTerraform, false)(struct!.compositeSliComponents),
        selection_config: ccServiceLevelObjectiveSelectionConfigPropertyToTerraform(struct!.selectionConfig),
    }
}


export function ccServiceLevelObjectiveCompositeSliConfigPropertyToHclTerraform(struct?: CcServiceLevelObjective.CompositeSliConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        composite_sli_components: {
            value: cdktn.listMapperHcl(ccServiceLevelObjectiveCompositeSliComponentPropertyToHclTerraform, false)(struct!.compositeSliComponents),
            isBlock: true,
            type: "list",
            storageClassType: "CompositeSliComponentPropertyList",
        },
        selection_config: {
            value: ccServiceLevelObjectiveSelectionConfigPropertyToHclTerraform(struct!.selectionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SelectionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveDependencyConfigPropertyToTerraform(struct?: CcServiceLevelObjective.DependencyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dependency_key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dependencyKeyAttributes),
        dependency_operation_name: cdktn.stringToTerraform(struct!.dependencyOperationName),
    }
}


export function ccServiceLevelObjectiveDependencyConfigPropertyToHclTerraform(struct?: CcServiceLevelObjective.DependencyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dependency_key_attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dependencyKeyAttributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        dependency_operation_name: {
            value: cdktn.stringToHclTerraform(struct!.dependencyOperationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveMetricSourcePropertyToTerraform(struct?: CcServiceLevelObjective.MetricSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_source_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metricSourceAttributes),
        metric_source_key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metricSourceKeyAttributes),
    }
}


export function ccServiceLevelObjectiveMetricSourcePropertyToHclTerraform(struct?: CcServiceLevelObjective.MetricSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_source_attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metricSourceAttributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        metric_source_key_attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metricSourceKeyAttributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveDimensionPropertyToTerraform(struct?: CcServiceLevelObjective.DimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceLevelObjectiveDimensionPropertyToHclTerraform(struct?: CcServiceLevelObjective.DimensionProperty | cdktn.IResolvable): any {
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


export function ccServiceLevelObjectiveMetricPropertyToTerraform(struct?: CcServiceLevelObjective.MetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccServiceLevelObjectiveDimensionPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccServiceLevelObjectiveMetricPropertyToHclTerraform(struct?: CcServiceLevelObjective.MetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccServiceLevelObjectiveDimensionPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "DimensionPropertyList",
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


export function ccServiceLevelObjectiveMetricStatPropertyToTerraform(struct?: CcServiceLevelObjective.MetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccServiceLevelObjectiveMetricPropertyToTerraform(struct!.metric),
        period: cdktn.numberToTerraform(struct!.period),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccServiceLevelObjectiveMetricStatPropertyToHclTerraform(struct?: CcServiceLevelObjective.MetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccServiceLevelObjectiveMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricProperty",
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


export function ccServiceLevelObjectiveMetricDataQueryPropertyToTerraform(struct?: CcServiceLevelObjective.MetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        metric_stat: ccServiceLevelObjectiveMetricStatPropertyToTerraform(struct!.metricStat),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccServiceLevelObjectiveMetricDataQueryPropertyToHclTerraform(struct?: CcServiceLevelObjective.MetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        metric_stat: {
            value: ccServiceLevelObjectiveMetricStatPropertyToHclTerraform(struct!.metricStat),
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


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsPropertyToTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsPropertyToHclTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
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


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricPropertyToTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricPropertyToHclTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsPropertyList",
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


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatPropertyToTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricPropertyToTerraform(struct!.metric),
        period: cdktn.numberToTerraform(struct!.period),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatPropertyToHclTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricProperty",
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


export function ccServiceLevelObjectiveGoodCountMetricPropertyToTerraform(struct?: CcServiceLevelObjective.GoodCountMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        metric_stat: ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatPropertyToTerraform(struct!.metricStat),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccServiceLevelObjectiveGoodCountMetricPropertyToHclTerraform(struct?: CcServiceLevelObjective.GoodCountMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        metric_stat: {
            value: ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatProperty",
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


export function ccServiceLevelObjectiveMonitoredRequestCountMetricPropertyToTerraform(struct?: CcServiceLevelObjective.MonitoredRequestCountMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bad_count_metric: cdktn.listMapper(ccServiceLevelObjectiveMetricDataQueryPropertyToTerraform, false)(struct!.badCountMetric),
        good_count_metric: cdktn.listMapper(ccServiceLevelObjectiveGoodCountMetricPropertyToTerraform, false)(struct!.goodCountMetric),
    }
}


export function ccServiceLevelObjectiveMonitoredRequestCountMetricPropertyToHclTerraform(struct?: CcServiceLevelObjective.MonitoredRequestCountMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bad_count_metric: {
            value: cdktn.listMapperHcl(ccServiceLevelObjectiveMetricDataQueryPropertyToHclTerraform, false)(struct!.badCountMetric),
            isBlock: true,
            type: "list",
            storageClassType: "MetricDataQueryPropertyList",
        },
        good_count_metric: {
            value: cdktn.listMapperHcl(ccServiceLevelObjectiveGoodCountMetricPropertyToHclTerraform, false)(struct!.goodCountMetric),
            isBlock: true,
            type: "list",
            storageClassType: "GoodCountMetricPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsPropertyToTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsPropertyToHclTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
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


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricPropertyToTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricPropertyToHclTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsPropertyList",
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


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatPropertyToTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricPropertyToTerraform(struct!.metric),
        period: cdktn.numberToTerraform(struct!.period),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatPropertyToHclTerraform(struct?: CcServiceLevelObjective.RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricProperty",
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


export function ccServiceLevelObjectiveTotalRequestCountMetricPropertyToTerraform(struct?: CcServiceLevelObjective.TotalRequestCountMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        metric_stat: ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatPropertyToTerraform(struct!.metricStat),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccServiceLevelObjectiveTotalRequestCountMetricPropertyToHclTerraform(struct?: CcServiceLevelObjective.TotalRequestCountMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        metric_stat: {
            value: ccServiceLevelObjectiveRequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatProperty",
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


export function ccServiceLevelObjectiveRequestBasedSliMetricPropertyToTerraform(struct?: CcServiceLevelObjective.RequestBasedSliMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        composite_sli_config: ccServiceLevelObjectiveCompositeSliConfigPropertyToTerraform(struct!.compositeSliConfig),
        dependency_config: ccServiceLevelObjectiveDependencyConfigPropertyToTerraform(struct!.dependencyConfig),
        key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.keyAttributes),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        metric_source: ccServiceLevelObjectiveMetricSourcePropertyToTerraform(struct!.metricSource),
        metric_type: cdktn.stringToTerraform(struct!.metricType),
        monitored_request_count_metric: ccServiceLevelObjectiveMonitoredRequestCountMetricPropertyToTerraform(struct!.monitoredRequestCountMetric),
        operation_name: cdktn.stringToTerraform(struct!.operationName),
        total_request_count_metric: cdktn.listMapper(ccServiceLevelObjectiveTotalRequestCountMetricPropertyToTerraform, false)(struct!.totalRequestCountMetric),
    }
}


export function ccServiceLevelObjectiveRequestBasedSliMetricPropertyToHclTerraform(struct?: CcServiceLevelObjective.RequestBasedSliMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        composite_sli_config: {
            value: ccServiceLevelObjectiveCompositeSliConfigPropertyToHclTerraform(struct!.compositeSliConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CompositeSliConfigProperty",
        },
        dependency_config: {
            value: ccServiceLevelObjectiveDependencyConfigPropertyToHclTerraform(struct!.dependencyConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DependencyConfigProperty",
        },
        key_attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.keyAttributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_source: {
            value: ccServiceLevelObjectiveMetricSourcePropertyToHclTerraform(struct!.metricSource),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricSourceProperty",
        },
        metric_type: {
            value: cdktn.stringToHclTerraform(struct!.metricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monitored_request_count_metric: {
            value: ccServiceLevelObjectiveMonitoredRequestCountMetricPropertyToHclTerraform(struct!.monitoredRequestCountMetric),
            isBlock: true,
            type: "struct",
            storageClassType: "MonitoredRequestCountMetricProperty",
        },
        operation_name: {
            value: cdktn.stringToHclTerraform(struct!.operationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        total_request_count_metric: {
            value: cdktn.listMapperHcl(ccServiceLevelObjectiveTotalRequestCountMetricPropertyToHclTerraform, false)(struct!.totalRequestCountMetric),
            isBlock: true,
            type: "list",
            storageClassType: "TotalRequestCountMetricPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveRequestBasedSliPropertyToTerraform(struct?: CcServiceLevelObjective.RequestBasedSliProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
        metric_threshold: cdktn.numberToTerraform(struct!.metricThreshold),
        request_based_sli_metric: ccServiceLevelObjectiveRequestBasedSliMetricPropertyToTerraform(struct!.requestBasedSliMetric),
    }
}


export function ccServiceLevelObjectiveRequestBasedSliPropertyToHclTerraform(struct?: CcServiceLevelObjective.RequestBasedSliProperty | cdktn.IResolvable): any {
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
        metric_threshold: {
            value: cdktn.numberToHclTerraform(struct!.metricThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        request_based_sli_metric: {
            value: ccServiceLevelObjectiveRequestBasedSliMetricPropertyToHclTerraform(struct!.requestBasedSliMetric),
            isBlock: true,
            type: "struct",
            storageClassType: "RequestBasedSliMetricProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveCompositeSliComponentsPropertyToTerraform(struct?: CcServiceLevelObjective.CompositeSliComponentsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        operation_name: cdktn.stringToTerraform(struct!.operationName),
    }
}


export function ccServiceLevelObjectiveCompositeSliComponentsPropertyToHclTerraform(struct?: CcServiceLevelObjective.CompositeSliComponentsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        operation_name: {
            value: cdktn.stringToHclTerraform(struct!.operationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigPropertyToTerraform(struct?: CcServiceLevelObjective.SliSliMetricCompositeSliConfigSelectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pattern: cdktn.stringToTerraform(struct!.pattern),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigPropertyToHclTerraform(struct?: CcServiceLevelObjective.SliSliMetricCompositeSliConfigSelectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pattern: {
            value: cdktn.stringToHclTerraform(struct!.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccServiceLevelObjectiveSliSliMetricCompositeSliConfigPropertyToTerraform(struct?: CcServiceLevelObjective.SliSliMetricCompositeSliConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        composite_sli_components: cdktn.listMapper(ccServiceLevelObjectiveCompositeSliComponentsPropertyToTerraform, false)(struct!.compositeSliComponents),
        selection_config: ccServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigPropertyToTerraform(struct!.selectionConfig),
    }
}


export function ccServiceLevelObjectiveSliSliMetricCompositeSliConfigPropertyToHclTerraform(struct?: CcServiceLevelObjective.SliSliMetricCompositeSliConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        composite_sli_components: {
            value: cdktn.listMapperHcl(ccServiceLevelObjectiveCompositeSliComponentsPropertyToHclTerraform, false)(struct!.compositeSliComponents),
            isBlock: true,
            type: "list",
            storageClassType: "CompositeSliComponentsPropertyList",
        },
        selection_config: {
            value: ccServiceLevelObjectiveSliSliMetricCompositeSliConfigSelectionConfigPropertyToHclTerraform(struct!.selectionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SliSliMetricCompositeSliConfigSelectionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveSliSliMetricDependencyConfigPropertyToTerraform(struct?: CcServiceLevelObjective.SliSliMetricDependencyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dependency_key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.dependencyKeyAttributes),
        dependency_operation_name: cdktn.stringToTerraform(struct!.dependencyOperationName),
    }
}


export function ccServiceLevelObjectiveSliSliMetricDependencyConfigPropertyToHclTerraform(struct?: CcServiceLevelObjective.SliSliMetricDependencyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dependency_key_attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.dependencyKeyAttributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        dependency_operation_name: {
            value: cdktn.stringToHclTerraform(struct!.dependencyOperationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform(struct?: CcServiceLevelObjective.SliSliMetricMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform(struct?: CcServiceLevelObjective.SliSliMetricMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
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


export function ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricPropertyToTerraform(struct?: CcServiceLevelObjective.SliSliMetricMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricPropertyToHclTerraform(struct?: CcServiceLevelObjective.SliSliMetricMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "SliSliMetricMetricDataQueriesMetricStatMetricDimensionsPropertyList",
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


export function ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatPropertyToTerraform(struct?: CcServiceLevelObjective.SliSliMetricMetricDataQueriesMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricPropertyToTerraform(struct!.metric),
        period: cdktn.numberToTerraform(struct!.period),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatPropertyToHclTerraform(struct?: CcServiceLevelObjective.SliSliMetricMetricDataQueriesMetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "SliSliMetricMetricDataQueriesMetricStatMetricProperty",
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


export function ccServiceLevelObjectiveMetricDataQueriesPropertyToTerraform(struct?: CcServiceLevelObjective.MetricDataQueriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        metric_stat: ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatPropertyToTerraform(struct!.metricStat),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccServiceLevelObjectiveMetricDataQueriesPropertyToHclTerraform(struct?: CcServiceLevelObjective.MetricDataQueriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        metric_stat: {
            value: ccServiceLevelObjectiveSliSliMetricMetricDataQueriesMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "SliSliMetricMetricDataQueriesMetricStatProperty",
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


export function ccServiceLevelObjectiveSliSliMetricMetricSourcePropertyToTerraform(struct?: CcServiceLevelObjective.SliSliMetricMetricSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_source_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metricSourceAttributes),
        metric_source_key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metricSourceKeyAttributes),
    }
}


export function ccServiceLevelObjectiveSliSliMetricMetricSourcePropertyToHclTerraform(struct?: CcServiceLevelObjective.SliSliMetricMetricSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_source_attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metricSourceAttributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        metric_source_key_attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metricSourceKeyAttributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveSliMetricPropertyToTerraform(struct?: CcServiceLevelObjective.SliMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        composite_sli_config: ccServiceLevelObjectiveSliSliMetricCompositeSliConfigPropertyToTerraform(struct!.compositeSliConfig),
        dependency_config: ccServiceLevelObjectiveSliSliMetricDependencyConfigPropertyToTerraform(struct!.dependencyConfig),
        key_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.keyAttributes),
        metric_data_queries: cdktn.listMapper(ccServiceLevelObjectiveMetricDataQueriesPropertyToTerraform, false)(struct!.metricDataQueries),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        metric_source: ccServiceLevelObjectiveSliSliMetricMetricSourcePropertyToTerraform(struct!.metricSource),
        metric_type: cdktn.stringToTerraform(struct!.metricType),
        operation_name: cdktn.stringToTerraform(struct!.operationName),
        period_seconds: cdktn.numberToTerraform(struct!.periodSeconds),
        statistic: cdktn.stringToTerraform(struct!.statistic),
    }
}


export function ccServiceLevelObjectiveSliMetricPropertyToHclTerraform(struct?: CcServiceLevelObjective.SliMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        composite_sli_config: {
            value: ccServiceLevelObjectiveSliSliMetricCompositeSliConfigPropertyToHclTerraform(struct!.compositeSliConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SliSliMetricCompositeSliConfigProperty",
        },
        dependency_config: {
            value: ccServiceLevelObjectiveSliSliMetricDependencyConfigPropertyToHclTerraform(struct!.dependencyConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SliSliMetricDependencyConfigProperty",
        },
        key_attributes: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.keyAttributes),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        metric_data_queries: {
            value: cdktn.listMapperHcl(ccServiceLevelObjectiveMetricDataQueriesPropertyToHclTerraform, false)(struct!.metricDataQueries),
            isBlock: true,
            type: "list",
            storageClassType: "MetricDataQueriesPropertyList",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_source: {
            value: ccServiceLevelObjectiveSliSliMetricMetricSourcePropertyToHclTerraform(struct!.metricSource),
            isBlock: true,
            type: "struct",
            storageClassType: "SliSliMetricMetricSourceProperty",
        },
        metric_type: {
            value: cdktn.stringToHclTerraform(struct!.metricType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operation_name: {
            value: cdktn.stringToHclTerraform(struct!.operationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        period_seconds: {
            value: cdktn.numberToHclTerraform(struct!.periodSeconds),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveSliPropertyToTerraform(struct?: CcServiceLevelObjective.SliProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
        metric_threshold: cdktn.numberToTerraform(struct!.metricThreshold),
        sli_metric: ccServiceLevelObjectiveSliMetricPropertyToTerraform(struct!.sliMetric),
    }
}


export function ccServiceLevelObjectiveSliPropertyToHclTerraform(struct?: CcServiceLevelObjective.SliProperty | cdktn.IResolvable): any {
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
        metric_threshold: {
            value: cdktn.numberToHclTerraform(struct!.metricThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sli_metric: {
            value: ccServiceLevelObjectiveSliMetricPropertyToHclTerraform(struct!.sliMetric),
            isBlock: true,
            type: "struct",
            storageClassType: "SliMetricProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceLevelObjectiveTagPropertyToTerraform(struct?: CcServiceLevelObjective.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceLevelObjectiveTagPropertyToHclTerraform(struct?: CcServiceLevelObjective.TagProperty | cdktn.IResolvable): any {
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


export namespace CcServiceLevelObjective {
export interface BurnRateConfigurationProperty {
    /**
    * The number of minutes to use as the look-back window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#look_back_window_minutes CcServiceLevelObjective#look_back_window_minutes}
    */
    readonly lookBackWindowMinutes?: number;
}
export class BurnRateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BurnRateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lookBackWindowMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.lookBackWindowMinutes = this._lookBackWindowMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BurnRateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lookBackWindowMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lookBackWindowMinutes = value.lookBackWindowMinutes;
        }
    }

    // look_back_window_minutes - computed: true, optional: true, required: false
    private _lookBackWindowMinutes?: number; 
    public get lookBackWindowMinutes() {
        return this.getNumberAttribute('look_back_window_minutes');
    }
    public set lookBackWindowMinutes(value: number) {
        this._lookBackWindowMinutes = value;
    }
    public resetLookBackWindowMinutes() {
        this._lookBackWindowMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lookBackWindowMinutesInput() {
        return this._lookBackWindowMinutes;
    }
}

export class BurnRateConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : BurnRateConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): BurnRateConfigurationPropertyOutputReference {
        return new BurnRateConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RecurrenceRuleProperty {
    /**
    * A cron or rate expression denoting how often to repeat this exclusion window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#expression CcServiceLevelObjective#expression}
    */
    readonly expression?: string;
}
export class RecurrenceRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecurrenceRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecurrenceRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
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
}
export interface WindowProperty {
    /**
    * Specifies the duration of each interval. For example, if `Duration` is 1 and `DurationUnit` is `MONTH`, each interval is one month, aligned with the calendar.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#duration CcServiceLevelObjective#duration}
    */
    readonly duration?: number;
    /**
    * Specifies the interval unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#duration_unit CcServiceLevelObjective#duration_unit}
    */
    readonly durationUnit?: string;
}
export class WindowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WindowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._duration !== undefined) {
            hasAnyValues = true;
            internalValueResult.duration = this._duration;
        }
        if (this._durationUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationUnit = this._durationUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WindowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._duration = undefined;
            this._durationUnit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._duration = value.duration;
            this._durationUnit = value.durationUnit;
        }
    }

    // duration - computed: true, optional: true, required: false
    private _duration?: number; 
    public get duration() {
        return this.getNumberAttribute('duration');
    }
    public set duration(value: number) {
        this._duration = value;
    }
    public resetDuration() {
        this._duration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInput() {
        return this._duration;
    }

    // duration_unit - computed: true, optional: true, required: false
    private _durationUnit?: string; 
    public get durationUnit() {
        return this.getStringAttribute('duration_unit');
    }
    public set durationUnit(value: string) {
        this._durationUnit = value;
    }
    public resetDurationUnit() {
        this._durationUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationUnitInput() {
        return this._durationUnit;
    }
}
export interface ExclusionWindowProperty {
    /**
    * An optional reason for scheduling this time exclusion window. Default is 'No reason'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#reason CcServiceLevelObjective#reason}
    */
    readonly reason?: string;
    /**
    * This object defines how often to repeat a time exclusion window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#recurrence_rule CcServiceLevelObjective#recurrence_rule}
    */
    readonly recurrenceRule?: RecurrenceRuleProperty;
    /**
    * The time you want the exclusion window to start at. Note that time exclusion windows can only be scheduled in the future, not the past.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#start_time CcServiceLevelObjective#start_time}
    */
    readonly startTime?: string;
    /**
    * This object defines the length of time an exclusion window should span.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#window CcServiceLevelObjective#window}
    */
    readonly window?: WindowProperty;
}
export class ExclusionWindowPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ExclusionWindowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reason !== undefined) {
            hasAnyValues = true;
            internalValueResult.reason = this._reason;
        }
        if (this._recurrenceRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recurrenceRule = this._recurrenceRule?.internalValue;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        if (this._window?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.window = this._window?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExclusionWindowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reason = undefined;
            this._recurrenceRule.internalValue = undefined;
            this._startTime = undefined;
            this._window.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reason = value.reason;
            this._recurrenceRule.internalValue = value.recurrenceRule;
            this._startTime = value.startTime;
            this._window.internalValue = value.window;
        }
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

    // recurrence_rule - computed: true, optional: true, required: false
    private _recurrenceRule = new RecurrenceRulePropertyOutputReference(this, "recurrence_rule");
    public get recurrenceRule() {
        return this._recurrenceRule;
    }
    public putRecurrenceRule(value: RecurrenceRuleProperty) {
        this._recurrenceRule.internalValue = value;
    }
    public resetRecurrenceRule() {
        this._recurrenceRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recurrenceRuleInput() {
        return this._recurrenceRule.internalValue;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }

    // window - computed: true, optional: true, required: false
    private _window = new WindowPropertyOutputReference(this, "window");
    public get window() {
        return this._window;
    }
    public putWindow(value: WindowProperty) {
        this._window.internalValue = value;
    }
    public resetWindow() {
        this._window.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowInput() {
        return this._window.internalValue;
    }
}

export class ExclusionWindowPropertyList extends cdktn.ComplexList {
    public internalValue? : ExclusionWindowProperty[] | cdktn.IResolvable

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
    public get(index: number): ExclusionWindowPropertyOutputReference {
        return new ExclusionWindowPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CalendarIntervalProperty {
    /**
    * Specifies the duration of each interval. For example, if `Duration` is 1 and `DurationUnit` is `MONTH`, each interval is one month, aligned with the calendar.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#duration CcServiceLevelObjective#duration}
    */
    readonly duration?: number;
    /**
    * Specifies the interval unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#duration_unit CcServiceLevelObjective#duration_unit}
    */
    readonly durationUnit?: string;
    /**
    * Epoch time in seconds you want the first interval to start. Be sure to choose a time that configures the intervals the way that you want. For example, if you want weekly intervals starting on Mondays at 6 a.m., be sure to specify a start time that is a Monday at 6 a.m.
    * As soon as one calendar interval ends, another automatically begins.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#start_time CcServiceLevelObjective#start_time}
    */
    readonly startTime?: number;
}
export class CalendarIntervalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CalendarIntervalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._duration !== undefined) {
            hasAnyValues = true;
            internalValueResult.duration = this._duration;
        }
        if (this._durationUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationUnit = this._durationUnit;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CalendarIntervalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._duration = undefined;
            this._durationUnit = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._duration = value.duration;
            this._durationUnit = value.durationUnit;
            this._startTime = value.startTime;
        }
    }

    // duration - computed: true, optional: true, required: false
    private _duration?: number; 
    public get duration() {
        return this.getNumberAttribute('duration');
    }
    public set duration(value: number) {
        this._duration = value;
    }
    public resetDuration() {
        this._duration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInput() {
        return this._duration;
    }

    // duration_unit - computed: true, optional: true, required: false
    private _durationUnit?: string; 
    public get durationUnit() {
        return this.getStringAttribute('duration_unit');
    }
    public set durationUnit(value: string) {
        this._durationUnit = value;
    }
    public resetDurationUnit() {
        this._durationUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationUnitInput() {
        return this._durationUnit;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: number; 
    public get startTime() {
        return this.getNumberAttribute('start_time');
    }
    public set startTime(value: number) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}
export interface RollingIntervalProperty {
    /**
    * Specifies the duration of each interval. For example, if `Duration` is 1 and `DurationUnit` is `MONTH`, each interval is one month, aligned with the calendar.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#duration CcServiceLevelObjective#duration}
    */
    readonly duration?: number;
    /**
    * Specifies the interval unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#duration_unit CcServiceLevelObjective#duration_unit}
    */
    readonly durationUnit?: string;
}
export class RollingIntervalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RollingIntervalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._duration !== undefined) {
            hasAnyValues = true;
            internalValueResult.duration = this._duration;
        }
        if (this._durationUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationUnit = this._durationUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RollingIntervalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._duration = undefined;
            this._durationUnit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._duration = value.duration;
            this._durationUnit = value.durationUnit;
        }
    }

    // duration - computed: true, optional: true, required: false
    private _duration?: number; 
    public get duration() {
        return this.getNumberAttribute('duration');
    }
    public set duration(value: number) {
        this._duration = value;
    }
    public resetDuration() {
        this._duration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInput() {
        return this._duration;
    }

    // duration_unit - computed: true, optional: true, required: false
    private _durationUnit?: string; 
    public get durationUnit() {
        return this.getStringAttribute('duration_unit');
    }
    public set durationUnit(value: string) {
        this._durationUnit = value;
    }
    public resetDurationUnit() {
        this._durationUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationUnitInput() {
        return this._durationUnit;
    }
}
export interface IntervalProperty {
    /**
    * If the interval for this service level objective is a calendar interval, this structure contains the interval specifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#calendar_interval CcServiceLevelObjective#calendar_interval}
    */
    readonly calendarInterval?: CalendarIntervalProperty;
    /**
    * If the interval is a calendar interval, this structure contains the interval specifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#rolling_interval CcServiceLevelObjective#rolling_interval}
    */
    readonly rollingInterval?: RollingIntervalProperty;
}
export class IntervalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IntervalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._calendarInterval?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.calendarInterval = this._calendarInterval?.internalValue;
        }
        if (this._rollingInterval?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rollingInterval = this._rollingInterval?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntervalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._calendarInterval.internalValue = undefined;
            this._rollingInterval.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._calendarInterval.internalValue = value.calendarInterval;
            this._rollingInterval.internalValue = value.rollingInterval;
        }
    }

    // calendar_interval - computed: true, optional: true, required: false
    private _calendarInterval = new CalendarIntervalPropertyOutputReference(this, "calendar_interval");
    public get calendarInterval() {
        return this._calendarInterval;
    }
    public putCalendarInterval(value: CalendarIntervalProperty) {
        this._calendarInterval.internalValue = value;
    }
    public resetCalendarInterval() {
        this._calendarInterval.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get calendarIntervalInput() {
        return this._calendarInterval.internalValue;
    }

    // rolling_interval - computed: true, optional: true, required: false
    private _rollingInterval = new RollingIntervalPropertyOutputReference(this, "rolling_interval");
    public get rollingInterval() {
        return this._rollingInterval;
    }
    public putRollingInterval(value: RollingIntervalProperty) {
        this._rollingInterval.internalValue = value;
    }
    public resetRollingInterval() {
        this._rollingInterval.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rollingIntervalInput() {
        return this._rollingInterval.internalValue;
    }
}
export interface GoalProperty {
    /**
    * The threshold that determines if the goal is being met. An attainment goal is the ratio of good periods that meet the threshold requirements to the total periods within the interval. For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the periods to be in healthy state.
    * If you omit this parameter, 99 is used to represent 99% as the attainment goal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#attainment_goal CcServiceLevelObjective#attainment_goal}
    */
    readonly attainmentGoal?: number;
    /**
    * The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval.
    * If you omit this parameter, a rolling interval of 7 days is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#interval CcServiceLevelObjective#interval}
    */
    readonly interval?: IntervalProperty;
    /**
    * The percentage of remaining budget over total budget that you want to get warnings for. If you omit this parameter, the default of 50.0 is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#warning_threshold CcServiceLevelObjective#warning_threshold}
    */
    readonly warningThreshold?: number;
}
export class GoalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GoalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attainmentGoal !== undefined) {
            hasAnyValues = true;
            internalValueResult.attainmentGoal = this._attainmentGoal;
        }
        if (this._interval?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval?.internalValue;
        }
        if (this._warningThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.warningThreshold = this._warningThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GoalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attainmentGoal = undefined;
            this._interval.internalValue = undefined;
            this._warningThreshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attainmentGoal = value.attainmentGoal;
            this._interval.internalValue = value.interval;
            this._warningThreshold = value.warningThreshold;
        }
    }

    // attainment_goal - computed: true, optional: true, required: false
    private _attainmentGoal?: number; 
    public get attainmentGoal() {
        return this.getNumberAttribute('attainment_goal');
    }
    public set attainmentGoal(value: number) {
        this._attainmentGoal = value;
    }
    public resetAttainmentGoal() {
        this._attainmentGoal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attainmentGoalInput() {
        return this._attainmentGoal;
    }

    // interval - computed: true, optional: true, required: false
    private _interval = new IntervalPropertyOutputReference(this, "interval");
    public get interval() {
        return this._interval;
    }
    public putInterval(value: IntervalProperty) {
        this._interval.internalValue = value;
    }
    public resetInterval() {
        this._interval.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval.internalValue;
    }

    // warning_threshold - computed: true, optional: true, required: false
    private _warningThreshold?: number; 
    public get warningThreshold() {
        return this.getNumberAttribute('warning_threshold');
    }
    public set warningThreshold(value: number) {
        this._warningThreshold = value;
    }
    public resetWarningThreshold() {
        this._warningThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warningThresholdInput() {
        return this._warningThreshold;
    }
}
export interface CompositeSliComponentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#operation_name CcServiceLevelObjective#operation_name}
    */
    readonly operationName?: string;
}
export class CompositeSliComponentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CompositeSliComponentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._operationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.operationName = this._operationName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CompositeSliComponentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._operationName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._operationName = value.operationName;
        }
    }

    // operation_name - computed: true, optional: true, required: false
    private _operationName?: string; 
    public get operationName() {
        return this.getStringAttribute('operation_name');
    }
    public set operationName(value: string) {
        this._operationName = value;
    }
    public resetOperationName() {
        this._operationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationNameInput() {
        return this._operationName;
    }
}

export class CompositeSliComponentPropertyList extends cdktn.ComplexList {
    public internalValue? : CompositeSliComponentProperty[] | cdktn.IResolvable

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
    public get(index: number): CompositeSliComponentPropertyOutputReference {
        return new CompositeSliComponentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SelectionConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#pattern CcServiceLevelObjective#pattern}
    */
    readonly pattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#type CcServiceLevelObjective#type}
    */
    readonly type?: string;
}
export class SelectionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelectionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelectionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pattern = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pattern = value.pattern;
            this._type = value.type;
        }
    }

    // pattern - computed: true, optional: true, required: false
    private _pattern?: string; 
    public get pattern() {
        return this.getStringAttribute('pattern');
    }
    public set pattern(value: string) {
        this._pattern = value;
    }
    public resetPattern() {
        this._pattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternInput() {
        return this._pattern;
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
export interface CompositeSliConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#composite_sli_components CcServiceLevelObjective#composite_sli_components}
    */
    readonly compositeSliComponents?: CompositeSliComponentProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#selection_config CcServiceLevelObjective#selection_config}
    */
    readonly selectionConfig?: SelectionConfigProperty;
}
export class CompositeSliConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CompositeSliConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compositeSliComponents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.compositeSliComponents = this._compositeSliComponents?.internalValue;
        }
        if (this._selectionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectionConfig = this._selectionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CompositeSliConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compositeSliComponents.internalValue = undefined;
            this._selectionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compositeSliComponents.internalValue = value.compositeSliComponents;
            this._selectionConfig.internalValue = value.selectionConfig;
        }
    }

    // composite_sli_components - computed: true, optional: true, required: false
    private _compositeSliComponents = new CompositeSliComponentPropertyList(this, "composite_sli_components", false);
    public get compositeSliComponents() {
        return this._compositeSliComponents;
    }
    public putCompositeSliComponents(value: CompositeSliComponentProperty[] | cdktn.IResolvable) {
        this._compositeSliComponents.internalValue = value;
    }
    public resetCompositeSliComponents() {
        this._compositeSliComponents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compositeSliComponentsInput() {
        return this._compositeSliComponents.internalValue;
    }

    // selection_config - computed: true, optional: true, required: false
    private _selectionConfig = new SelectionConfigPropertyOutputReference(this, "selection_config");
    public get selectionConfig() {
        return this._selectionConfig;
    }
    public putSelectionConfig(value: SelectionConfigProperty) {
        this._selectionConfig.internalValue = value;
    }
    public resetSelectionConfig() {
        this._selectionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionConfigInput() {
        return this._selectionConfig.internalValue;
    }
}
export interface DependencyConfigProperty {
    /**
    * If this SLO is related to a metric collected by Application Signals, you must use this field to specify which dependency the SLO metric is related to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#dependency_key_attributes CcServiceLevelObjective#dependency_key_attributes}
    */
    readonly dependencyKeyAttributes?: { [key: string]: string };
    /**
    * When the SLO monitors a specific operation of the dependency, this field specifies the name of that operation in the dependency.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#dependency_operation_name CcServiceLevelObjective#dependency_operation_name}
    */
    readonly dependencyOperationName?: string;
}
export class DependencyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DependencyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dependencyKeyAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependencyKeyAttributes = this._dependencyKeyAttributes;
        }
        if (this._dependencyOperationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependencyOperationName = this._dependencyOperationName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DependencyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dependencyKeyAttributes = undefined;
            this._dependencyOperationName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dependencyKeyAttributes = value.dependencyKeyAttributes;
            this._dependencyOperationName = value.dependencyOperationName;
        }
    }

    // dependency_key_attributes - computed: true, optional: true, required: false
    private _dependencyKeyAttributes?: { [key: string]: string }; 
    public get dependencyKeyAttributes() {
        return this.getStringMapAttribute('dependency_key_attributes');
    }
    public set dependencyKeyAttributes(value: { [key: string]: string }) {
        this._dependencyKeyAttributes = value;
    }
    public resetDependencyKeyAttributes() {
        this._dependencyKeyAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependencyKeyAttributesInput() {
        return this._dependencyKeyAttributes;
    }

    // dependency_operation_name - computed: true, optional: true, required: false
    private _dependencyOperationName?: string; 
    public get dependencyOperationName() {
        return this.getStringAttribute('dependency_operation_name');
    }
    public set dependencyOperationName(value: string) {
        this._dependencyOperationName = value;
    }
    public resetDependencyOperationName() {
        this._dependencyOperationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependencyOperationNameInput() {
        return this._dependencyOperationName;
    }
}
export interface MetricSourceProperty {
    /**
    * Optional additional attributes for the metric source
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_source_attributes CcServiceLevelObjective#metric_source_attributes}
    */
    readonly metricSourceAttributes?: { [key: string]: string };
    /**
    * Required attributes that identify the metric source
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_source_key_attributes CcServiceLevelObjective#metric_source_key_attributes}
    */
    readonly metricSourceKeyAttributes?: { [key: string]: string };
}
export class MetricSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricSourceAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSourceAttributes = this._metricSourceAttributes;
        }
        if (this._metricSourceKeyAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSourceKeyAttributes = this._metricSourceKeyAttributes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricSourceAttributes = undefined;
            this._metricSourceKeyAttributes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricSourceAttributes = value.metricSourceAttributes;
            this._metricSourceKeyAttributes = value.metricSourceKeyAttributes;
        }
    }

    // metric_source_attributes - computed: true, optional: true, required: false
    private _metricSourceAttributes?: { [key: string]: string }; 
    public get metricSourceAttributes() {
        return this.getStringMapAttribute('metric_source_attributes');
    }
    public set metricSourceAttributes(value: { [key: string]: string }) {
        this._metricSourceAttributes = value;
    }
    public resetMetricSourceAttributes() {
        this._metricSourceAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSourceAttributesInput() {
        return this._metricSourceAttributes;
    }

    // metric_source_key_attributes - computed: true, optional: true, required: false
    private _metricSourceKeyAttributes?: { [key: string]: string }; 
    public get metricSourceKeyAttributes() {
        return this.getStringMapAttribute('metric_source_key_attributes');
    }
    public set metricSourceKeyAttributes(value: { [key: string]: string }) {
        this._metricSourceKeyAttributes = value;
    }
    public resetMetricSourceKeyAttributes() {
        this._metricSourceKeyAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSourceKeyAttributesInput() {
        return this._metricSourceKeyAttributes;
    }
}
export interface DimensionProperty {
    /**
    * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#name CcServiceLevelObjective#name}
    */
    readonly name?: string;
    /**
    * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#value CcServiceLevelObjective#value}
    */
    readonly value?: string;
}
export class DimensionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DimensionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DimensionProperty | cdktn.IResolvable | undefined) {
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

export class DimensionPropertyList extends cdktn.ComplexList {
    public internalValue? : DimensionProperty[] | cdktn.IResolvable

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
    public get(index: number): DimensionPropertyOutputReference {
        return new DimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricProperty {
    /**
    * An array of one or more dimensions to use to define the metric that you want to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#dimensions CcServiceLevelObjective#dimensions}
    */
    readonly dimensions?: DimensionProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_name CcServiceLevelObjective#metric_name}
    */
    readonly metricName?: string;
    /**
    * The namespace of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#namespace CcServiceLevelObjective#namespace}
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
    private _dimensions = new DimensionPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: DimensionProperty[] | cdktn.IResolvable) {
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
    * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric CcServiceLevelObjective#metric}
    */
    readonly metric?: MetricProperty;
    /**
    * The granularity, in seconds, to be used for the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#period CcServiceLevelObjective#period}
    */
    readonly period?: number;
    /**
    * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#stat CcServiceLevelObjective#stat}
    */
    readonly stat?: string;
    /**
    * If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#unit CcServiceLevelObjective#unit}
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

    public set internalValue(value: MetricStatProperty | cdktn.IResolvable | undefined) {
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
export interface MetricDataQueryProperty {
    /**
    * The ID of the account where the metrics are located, if this is a cross-account alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#account_id CcServiceLevelObjective#account_id}
    */
    readonly accountId?: string;
    /**
    * The math expression to be performed on the returned data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#expression CcServiceLevelObjective#expression}
    */
    readonly expression?: string;
    /**
    * A short name used to tie this object to the results in the response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#id CcServiceLevelObjective#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_stat CcServiceLevelObjective#metric_stat}
    */
    readonly metricStat?: MetricStatProperty;
    /**
    * This option indicates whether to return the timestamps and raw data values of this metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#return_data CcServiceLevelObjective#return_data}
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
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
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
            this._accountId = undefined;
            this._expression = undefined;
            this._id = undefined;
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
            this._accountId = value.accountId;
            this._expression = value.expression;
            this._id = value.id;
            this._metricStat.internalValue = value.metricStat;
            this._returnData = value.returnData;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
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
export interface RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsProperty {
    /**
    * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#name CcServiceLevelObjective#name}
    */
    readonly name?: string;
    /**
    * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#value CcServiceLevelObjective#value}
    */
    readonly value?: string;
}
export class RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined) {
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

export class RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsPropertyOutputReference {
        return new RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricProperty {
    /**
    * An array of one or more dimensions to use to define the metric that you want to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#dimensions CcServiceLevelObjective#dimensions}
    */
    readonly dimensions?: RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_name CcServiceLevelObjective#metric_name}
    */
    readonly metricName?: string;
    /**
    * The namespace of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#namespace CcServiceLevelObjective#namespace}
    */
    readonly namespace?: string;
}
export class RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricProperty | cdktn.IResolvable | undefined) {
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
    private _dimensions = new RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricDimensionsProperty[] | cdktn.IResolvable) {
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
export interface RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatProperty {
    /**
    * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric CcServiceLevelObjective#metric}
    */
    readonly metric?: RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricProperty;
    /**
    * The granularity, in seconds, to be used for the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#period CcServiceLevelObjective#period}
    */
    readonly period?: number;
    /**
    * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#stat CcServiceLevelObjective#stat}
    */
    readonly stat?: string;
    /**
    * If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#unit CcServiceLevelObjective#unit}
    */
    readonly unit?: string;
}
export class RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatProperty | cdktn.IResolvable | undefined) {
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
    private _metric = new RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatMetricProperty) {
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
export interface GoodCountMetricProperty {
    /**
    * The ID of the account where the metrics are located, if this is a cross-account alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#account_id CcServiceLevelObjective#account_id}
    */
    readonly accountId?: string;
    /**
    * The math expression to be performed on the returned data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#expression CcServiceLevelObjective#expression}
    */
    readonly expression?: string;
    /**
    * A short name used to tie this object to the results in the response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#id CcServiceLevelObjective#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_stat CcServiceLevelObjective#metric_stat}
    */
    readonly metricStat?: RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatProperty;
    /**
    * This option indicates whether to return the timestamps and raw data values of this metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#return_data CcServiceLevelObjective#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class GoodCountMetricPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GoodCountMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
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

    public set internalValue(value: GoodCountMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._expression = undefined;
            this._id = undefined;
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
            this._accountId = value.accountId;
            this._expression = value.expression;
            this._id = value.id;
            this._metricStat.internalValue = value.metricStat;
            this._returnData = value.returnData;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
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

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: RequestBasedSliRequestBasedSliMetricMonitoredRequestCountMetricGoodCountMetricMetricStatProperty) {
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

export class GoodCountMetricPropertyList extends cdktn.ComplexList {
    public internalValue? : GoodCountMetricProperty[] | cdktn.IResolvable

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
    public get(index: number): GoodCountMetricPropertyOutputReference {
        return new GoodCountMetricPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MonitoredRequestCountMetricProperty {
    /**
    * If you want to count "bad requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "bad requests" in this structure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#bad_count_metric CcServiceLevelObjective#bad_count_metric}
    */
    readonly badCountMetric?: MetricDataQueryProperty[] | cdktn.IResolvable;
    /**
    * If you want to count "good requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "good requests" in this structure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#good_count_metric CcServiceLevelObjective#good_count_metric}
    */
    readonly goodCountMetric?: GoodCountMetricProperty[] | cdktn.IResolvable;
}
export class MonitoredRequestCountMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoredRequestCountMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._badCountMetric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.badCountMetric = this._badCountMetric?.internalValue;
        }
        if (this._goodCountMetric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.goodCountMetric = this._goodCountMetric?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoredRequestCountMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._badCountMetric.internalValue = undefined;
            this._goodCountMetric.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._badCountMetric.internalValue = value.badCountMetric;
            this._goodCountMetric.internalValue = value.goodCountMetric;
        }
    }

    // bad_count_metric - computed: true, optional: true, required: false
    private _badCountMetric = new MetricDataQueryPropertyList(this, "bad_count_metric", false);
    public get badCountMetric() {
        return this._badCountMetric;
    }
    public putBadCountMetric(value: MetricDataQueryProperty[] | cdktn.IResolvable) {
        this._badCountMetric.internalValue = value;
    }
    public resetBadCountMetric() {
        this._badCountMetric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get badCountMetricInput() {
        return this._badCountMetric.internalValue;
    }

    // good_count_metric - computed: true, optional: true, required: false
    private _goodCountMetric = new GoodCountMetricPropertyList(this, "good_count_metric", false);
    public get goodCountMetric() {
        return this._goodCountMetric;
    }
    public putGoodCountMetric(value: GoodCountMetricProperty[] | cdktn.IResolvable) {
        this._goodCountMetric.internalValue = value;
    }
    public resetGoodCountMetric() {
        this._goodCountMetric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get goodCountMetricInput() {
        return this._goodCountMetric.internalValue;
    }
}
export interface RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsProperty {
    /**
    * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#name CcServiceLevelObjective#name}
    */
    readonly name?: string;
    /**
    * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#value CcServiceLevelObjective#value}
    */
    readonly value?: string;
}
export class RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined) {
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

export class RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsPropertyOutputReference {
        return new RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricProperty {
    /**
    * An array of one or more dimensions to use to define the metric that you want to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#dimensions CcServiceLevelObjective#dimensions}
    */
    readonly dimensions?: RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_name CcServiceLevelObjective#metric_name}
    */
    readonly metricName?: string;
    /**
    * The namespace of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#namespace CcServiceLevelObjective#namespace}
    */
    readonly namespace?: string;
}
export class RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricProperty | cdktn.IResolvable | undefined) {
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
    private _dimensions = new RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricDimensionsProperty[] | cdktn.IResolvable) {
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
export interface RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatProperty {
    /**
    * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric CcServiceLevelObjective#metric}
    */
    readonly metric?: RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricProperty;
    /**
    * The granularity, in seconds, to be used for the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#period CcServiceLevelObjective#period}
    */
    readonly period?: number;
    /**
    * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#stat CcServiceLevelObjective#stat}
    */
    readonly stat?: string;
    /**
    * If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#unit CcServiceLevelObjective#unit}
    */
    readonly unit?: string;
}
export class RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatProperty | cdktn.IResolvable | undefined) {
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
    private _metric = new RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatMetricProperty) {
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
export interface TotalRequestCountMetricProperty {
    /**
    * The ID of the account where the metrics are located, if this is a cross-account alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#account_id CcServiceLevelObjective#account_id}
    */
    readonly accountId?: string;
    /**
    * The math expression to be performed on the returned data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#expression CcServiceLevelObjective#expression}
    */
    readonly expression?: string;
    /**
    * A short name used to tie this object to the results in the response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#id CcServiceLevelObjective#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_stat CcServiceLevelObjective#metric_stat}
    */
    readonly metricStat?: RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatProperty;
    /**
    * This option indicates whether to return the timestamps and raw data values of this metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#return_data CcServiceLevelObjective#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class TotalRequestCountMetricPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TotalRequestCountMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
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

    public set internalValue(value: TotalRequestCountMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._expression = undefined;
            this._id = undefined;
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
            this._accountId = value.accountId;
            this._expression = value.expression;
            this._id = value.id;
            this._metricStat.internalValue = value.metricStat;
            this._returnData = value.returnData;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
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

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: RequestBasedSliRequestBasedSliMetricTotalRequestCountMetricMetricStatProperty) {
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

export class TotalRequestCountMetricPropertyList extends cdktn.ComplexList {
    public internalValue? : TotalRequestCountMetricProperty[] | cdktn.IResolvable

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
    public get(index: number): TotalRequestCountMetricPropertyOutputReference {
        return new TotalRequestCountMetricPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RequestBasedSliMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#composite_sli_config CcServiceLevelObjective#composite_sli_config}
    */
    readonly compositeSliConfig?: CompositeSliConfigProperty;
    /**
    * Configuration for identifying a dependency and its operation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#dependency_config CcServiceLevelObjective#dependency_config}
    */
    readonly dependencyConfig?: DependencyConfigProperty;
    /**
    * This is a string-to-string map that contains information about the type of object that this SLO is related to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#key_attributes CcServiceLevelObjective#key_attributes}
    */
    readonly keyAttributes?: { [key: string]: string };
    /**
    * The name of the metric for non-Application Signals services
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_name CcServiceLevelObjective#metric_name}
    */
    readonly metricName?: string;
    /**
    * Configuration for identifying the source of metrics for non-Application Signals services
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_source CcServiceLevelObjective#metric_source}
    */
    readonly metricSource?: MetricSourceProperty;
    /**
    * If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_type CcServiceLevelObjective#metric_type}
    */
    readonly metricType?: string;
    /**
    * This structure defines the metric that is used as the "good request" or "bad request" value for a request-based SLO. This value observed for the metric defined in `TotalRequestCountMetric` is divided by the number found for `MonitoredRequestCountMetric` to determine the percentage of successful requests that this SLO tracks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#monitored_request_count_metric CcServiceLevelObjective#monitored_request_count_metric}
    */
    readonly monitoredRequestCountMetric?: MonitoredRequestCountMetricProperty;
    /**
    * If the SLO monitors a specific operation of the service, this field displays that operation name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#operation_name CcServiceLevelObjective#operation_name}
    */
    readonly operationName?: string;
    /**
    * This structure defines the metric that is used as the "total requests" number for a request-based SLO. The number observed for this metric is divided by the number of "good requests" or "bad requests" that is observed for the metric defined in `MonitoredRequestCountMetric`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#total_request_count_metric CcServiceLevelObjective#total_request_count_metric}
    */
    readonly totalRequestCountMetric?: TotalRequestCountMetricProperty[] | cdktn.IResolvable;
}
export class RequestBasedSliMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RequestBasedSliMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compositeSliConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.compositeSliConfig = this._compositeSliConfig?.internalValue;
        }
        if (this._dependencyConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependencyConfig = this._dependencyConfig?.internalValue;
        }
        if (this._keyAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyAttributes = this._keyAttributes;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._metricSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSource = this._metricSource?.internalValue;
        }
        if (this._metricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricType = this._metricType;
        }
        if (this._monitoredRequestCountMetric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoredRequestCountMetric = this._monitoredRequestCountMetric?.internalValue;
        }
        if (this._operationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.operationName = this._operationName;
        }
        if (this._totalRequestCountMetric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.totalRequestCountMetric = this._totalRequestCountMetric?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RequestBasedSliMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compositeSliConfig.internalValue = undefined;
            this._dependencyConfig.internalValue = undefined;
            this._keyAttributes = undefined;
            this._metricName = undefined;
            this._metricSource.internalValue = undefined;
            this._metricType = undefined;
            this._monitoredRequestCountMetric.internalValue = undefined;
            this._operationName = undefined;
            this._totalRequestCountMetric.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compositeSliConfig.internalValue = value.compositeSliConfig;
            this._dependencyConfig.internalValue = value.dependencyConfig;
            this._keyAttributes = value.keyAttributes;
            this._metricName = value.metricName;
            this._metricSource.internalValue = value.metricSource;
            this._metricType = value.metricType;
            this._monitoredRequestCountMetric.internalValue = value.monitoredRequestCountMetric;
            this._operationName = value.operationName;
            this._totalRequestCountMetric.internalValue = value.totalRequestCountMetric;
        }
    }

    // composite_sli_config - computed: true, optional: true, required: false
    private _compositeSliConfig = new CompositeSliConfigPropertyOutputReference(this, "composite_sli_config");
    public get compositeSliConfig() {
        return this._compositeSliConfig;
    }
    public putCompositeSliConfig(value: CompositeSliConfigProperty) {
        this._compositeSliConfig.internalValue = value;
    }
    public resetCompositeSliConfig() {
        this._compositeSliConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compositeSliConfigInput() {
        return this._compositeSliConfig.internalValue;
    }

    // dependency_config - computed: true, optional: true, required: false
    private _dependencyConfig = new DependencyConfigPropertyOutputReference(this, "dependency_config");
    public get dependencyConfig() {
        return this._dependencyConfig;
    }
    public putDependencyConfig(value: DependencyConfigProperty) {
        this._dependencyConfig.internalValue = value;
    }
    public resetDependencyConfig() {
        this._dependencyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependencyConfigInput() {
        return this._dependencyConfig.internalValue;
    }

    // key_attributes - computed: true, optional: true, required: false
    private _keyAttributes?: { [key: string]: string }; 
    public get keyAttributes() {
        return this.getStringMapAttribute('key_attributes');
    }
    public set keyAttributes(value: { [key: string]: string }) {
        this._keyAttributes = value;
    }
    public resetKeyAttributes() {
        this._keyAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyAttributesInput() {
        return this._keyAttributes;
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

    // metric_source - computed: true, optional: true, required: false
    private _metricSource = new MetricSourcePropertyOutputReference(this, "metric_source");
    public get metricSource() {
        return this._metricSource;
    }
    public putMetricSource(value: MetricSourceProperty) {
        this._metricSource.internalValue = value;
    }
    public resetMetricSource() {
        this._metricSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSourceInput() {
        return this._metricSource.internalValue;
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

    // monitored_request_count_metric - computed: true, optional: true, required: false
    private _monitoredRequestCountMetric = new MonitoredRequestCountMetricPropertyOutputReference(this, "monitored_request_count_metric");
    public get monitoredRequestCountMetric() {
        return this._monitoredRequestCountMetric;
    }
    public putMonitoredRequestCountMetric(value: MonitoredRequestCountMetricProperty) {
        this._monitoredRequestCountMetric.internalValue = value;
    }
    public resetMonitoredRequestCountMetric() {
        this._monitoredRequestCountMetric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoredRequestCountMetricInput() {
        return this._monitoredRequestCountMetric.internalValue;
    }

    // operation_name - computed: true, optional: true, required: false
    private _operationName?: string; 
    public get operationName() {
        return this.getStringAttribute('operation_name');
    }
    public set operationName(value: string) {
        this._operationName = value;
    }
    public resetOperationName() {
        this._operationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationNameInput() {
        return this._operationName;
    }

    // total_request_count_metric - computed: true, optional: true, required: false
    private _totalRequestCountMetric = new TotalRequestCountMetricPropertyList(this, "total_request_count_metric", false);
    public get totalRequestCountMetric() {
        return this._totalRequestCountMetric;
    }
    public putTotalRequestCountMetric(value: TotalRequestCountMetricProperty[] | cdktn.IResolvable) {
        this._totalRequestCountMetric.internalValue = value;
    }
    public resetTotalRequestCountMetric() {
        this._totalRequestCountMetric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get totalRequestCountMetricInput() {
        return this._totalRequestCountMetric.internalValue;
    }
}
export interface RequestBasedSliProperty {
    /**
    * The arithmetic operation used when comparing the specified metric to the threshold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#comparison_operator CcServiceLevelObjective#comparison_operator}
    */
    readonly comparisonOperator?: string;
    /**
    * The value that the SLI metric is compared to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_threshold CcServiceLevelObjective#metric_threshold}
    */
    readonly metricThreshold?: number;
    /**
    * This structure contains the information about the metric that is used for a request-based SLO.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#request_based_sli_metric CcServiceLevelObjective#request_based_sli_metric}
    */
    readonly requestBasedSliMetric?: RequestBasedSliMetricProperty;
}
export class RequestBasedSliPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RequestBasedSliProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparisonOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._metricThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricThreshold = this._metricThreshold;
        }
        if (this._requestBasedSliMetric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestBasedSliMetric = this._requestBasedSliMetric?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RequestBasedSliProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparisonOperator = undefined;
            this._metricThreshold = undefined;
            this._requestBasedSliMetric.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparisonOperator = value.comparisonOperator;
            this._metricThreshold = value.metricThreshold;
            this._requestBasedSliMetric.internalValue = value.requestBasedSliMetric;
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

    // metric_threshold - computed: true, optional: true, required: false
    private _metricThreshold?: number; 
    public get metricThreshold() {
        return this.getNumberAttribute('metric_threshold');
    }
    public set metricThreshold(value: number) {
        this._metricThreshold = value;
    }
    public resetMetricThreshold() {
        this._metricThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricThresholdInput() {
        return this._metricThreshold;
    }

    // request_based_sli_metric - computed: true, optional: true, required: false
    private _requestBasedSliMetric = new RequestBasedSliMetricPropertyOutputReference(this, "request_based_sli_metric");
    public get requestBasedSliMetric() {
        return this._requestBasedSliMetric;
    }
    public putRequestBasedSliMetric(value: RequestBasedSliMetricProperty) {
        this._requestBasedSliMetric.internalValue = value;
    }
    public resetRequestBasedSliMetric() {
        this._requestBasedSliMetric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestBasedSliMetricInput() {
        return this._requestBasedSliMetric.internalValue;
    }
}
export interface CompositeSliComponentsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#operation_name CcServiceLevelObjective#operation_name}
    */
    readonly operationName?: string;
}
export class CompositeSliComponentsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CompositeSliComponentsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._operationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.operationName = this._operationName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CompositeSliComponentsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._operationName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._operationName = value.operationName;
        }
    }

    // operation_name - computed: true, optional: true, required: false
    private _operationName?: string; 
    public get operationName() {
        return this.getStringAttribute('operation_name');
    }
    public set operationName(value: string) {
        this._operationName = value;
    }
    public resetOperationName() {
        this._operationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationNameInput() {
        return this._operationName;
    }
}

export class CompositeSliComponentsPropertyList extends cdktn.ComplexList {
    public internalValue? : CompositeSliComponentsProperty[] | cdktn.IResolvable

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
    public get(index: number): CompositeSliComponentsPropertyOutputReference {
        return new CompositeSliComponentsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SliSliMetricCompositeSliConfigSelectionConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#pattern CcServiceLevelObjective#pattern}
    */
    readonly pattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#type CcServiceLevelObjective#type}
    */
    readonly type?: string;
}
export class SliSliMetricCompositeSliConfigSelectionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SliSliMetricCompositeSliConfigSelectionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SliSliMetricCompositeSliConfigSelectionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pattern = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pattern = value.pattern;
            this._type = value.type;
        }
    }

    // pattern - computed: true, optional: true, required: false
    private _pattern?: string; 
    public get pattern() {
        return this.getStringAttribute('pattern');
    }
    public set pattern(value: string) {
        this._pattern = value;
    }
    public resetPattern() {
        this._pattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternInput() {
        return this._pattern;
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
export interface SliSliMetricCompositeSliConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#composite_sli_components CcServiceLevelObjective#composite_sli_components}
    */
    readonly compositeSliComponents?: CompositeSliComponentsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#selection_config CcServiceLevelObjective#selection_config}
    */
    readonly selectionConfig?: SliSliMetricCompositeSliConfigSelectionConfigProperty;
}
export class SliSliMetricCompositeSliConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SliSliMetricCompositeSliConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compositeSliComponents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.compositeSliComponents = this._compositeSliComponents?.internalValue;
        }
        if (this._selectionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectionConfig = this._selectionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SliSliMetricCompositeSliConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compositeSliComponents.internalValue = undefined;
            this._selectionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compositeSliComponents.internalValue = value.compositeSliComponents;
            this._selectionConfig.internalValue = value.selectionConfig;
        }
    }

    // composite_sli_components - computed: true, optional: true, required: false
    private _compositeSliComponents = new CompositeSliComponentsPropertyList(this, "composite_sli_components", false);
    public get compositeSliComponents() {
        return this._compositeSliComponents;
    }
    public putCompositeSliComponents(value: CompositeSliComponentsProperty[] | cdktn.IResolvable) {
        this._compositeSliComponents.internalValue = value;
    }
    public resetCompositeSliComponents() {
        this._compositeSliComponents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compositeSliComponentsInput() {
        return this._compositeSliComponents.internalValue;
    }

    // selection_config - computed: true, optional: true, required: false
    private _selectionConfig = new SliSliMetricCompositeSliConfigSelectionConfigPropertyOutputReference(this, "selection_config");
    public get selectionConfig() {
        return this._selectionConfig;
    }
    public putSelectionConfig(value: SliSliMetricCompositeSliConfigSelectionConfigProperty) {
        this._selectionConfig.internalValue = value;
    }
    public resetSelectionConfig() {
        this._selectionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionConfigInput() {
        return this._selectionConfig.internalValue;
    }
}
export interface SliSliMetricDependencyConfigProperty {
    /**
    * If this SLO is related to a metric collected by Application Signals, you must use this field to specify which dependency the SLO metric is related to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#dependency_key_attributes CcServiceLevelObjective#dependency_key_attributes}
    */
    readonly dependencyKeyAttributes?: { [key: string]: string };
    /**
    * When the SLO monitors a specific operation of the dependency, this field specifies the name of that operation in the dependency.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#dependency_operation_name CcServiceLevelObjective#dependency_operation_name}
    */
    readonly dependencyOperationName?: string;
}
export class SliSliMetricDependencyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SliSliMetricDependencyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dependencyKeyAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependencyKeyAttributes = this._dependencyKeyAttributes;
        }
        if (this._dependencyOperationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependencyOperationName = this._dependencyOperationName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SliSliMetricDependencyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dependencyKeyAttributes = undefined;
            this._dependencyOperationName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dependencyKeyAttributes = value.dependencyKeyAttributes;
            this._dependencyOperationName = value.dependencyOperationName;
        }
    }

    // dependency_key_attributes - computed: true, optional: true, required: false
    private _dependencyKeyAttributes?: { [key: string]: string }; 
    public get dependencyKeyAttributes() {
        return this.getStringMapAttribute('dependency_key_attributes');
    }
    public set dependencyKeyAttributes(value: { [key: string]: string }) {
        this._dependencyKeyAttributes = value;
    }
    public resetDependencyKeyAttributes() {
        this._dependencyKeyAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependencyKeyAttributesInput() {
        return this._dependencyKeyAttributes;
    }

    // dependency_operation_name - computed: true, optional: true, required: false
    private _dependencyOperationName?: string; 
    public get dependencyOperationName() {
        return this.getStringAttribute('dependency_operation_name');
    }
    public set dependencyOperationName(value: string) {
        this._dependencyOperationName = value;
    }
    public resetDependencyOperationName() {
        this._dependencyOperationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependencyOperationNameInput() {
        return this._dependencyOperationName;
    }
}
export interface SliSliMetricMetricDataQueriesMetricStatMetricDimensionsProperty {
    /**
    * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#name CcServiceLevelObjective#name}
    */
    readonly name?: string;
    /**
    * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#value CcServiceLevelObjective#value}
    */
    readonly value?: string;
}
export class SliSliMetricMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SliSliMetricMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SliSliMetricMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined) {
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

export class SliSliMetricMetricDataQueriesMetricStatMetricDimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : SliSliMetricMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): SliSliMetricMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference {
        return new SliSliMetricMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SliSliMetricMetricDataQueriesMetricStatMetricProperty {
    /**
    * An array of one or more dimensions to use to define the metric that you want to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#dimensions CcServiceLevelObjective#dimensions}
    */
    readonly dimensions?: SliSliMetricMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_name CcServiceLevelObjective#metric_name}
    */
    readonly metricName?: string;
    /**
    * The namespace of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#namespace CcServiceLevelObjective#namespace}
    */
    readonly namespace?: string;
}
export class SliSliMetricMetricDataQueriesMetricStatMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SliSliMetricMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SliSliMetricMetricDataQueriesMetricStatMetricProperty | cdktn.IResolvable | undefined) {
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
    private _dimensions = new SliSliMetricMetricDataQueriesMetricStatMetricDimensionsPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: SliSliMetricMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable) {
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
export interface SliSliMetricMetricDataQueriesMetricStatProperty {
    /**
    * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric CcServiceLevelObjective#metric}
    */
    readonly metric?: SliSliMetricMetricDataQueriesMetricStatMetricProperty;
    /**
    * The granularity, in seconds, to be used for the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#period CcServiceLevelObjective#period}
    */
    readonly period?: number;
    /**
    * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#stat CcServiceLevelObjective#stat}
    */
    readonly stat?: string;
    /**
    * If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#unit CcServiceLevelObjective#unit}
    */
    readonly unit?: string;
}
export class SliSliMetricMetricDataQueriesMetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SliSliMetricMetricDataQueriesMetricStatProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SliSliMetricMetricDataQueriesMetricStatProperty | cdktn.IResolvable | undefined) {
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
    private _metric = new SliSliMetricMetricDataQueriesMetricStatMetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: SliSliMetricMetricDataQueriesMetricStatMetricProperty) {
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
export interface MetricDataQueriesProperty {
    /**
    * The ID of the account where the metrics are located, if this is a cross-account alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#account_id CcServiceLevelObjective#account_id}
    */
    readonly accountId?: string;
    /**
    * The math expression to be performed on the returned data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#expression CcServiceLevelObjective#expression}
    */
    readonly expression?: string;
    /**
    * A short name used to tie this object to the results in the response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#id CcServiceLevelObjective#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_stat CcServiceLevelObjective#metric_stat}
    */
    readonly metricStat?: SliSliMetricMetricDataQueriesMetricStatProperty;
    /**
    * This option indicates whether to return the timestamps and raw data values of this metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#return_data CcServiceLevelObjective#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class MetricDataQueriesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricDataQueriesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
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

    public set internalValue(value: MetricDataQueriesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._expression = undefined;
            this._id = undefined;
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
            this._accountId = value.accountId;
            this._expression = value.expression;
            this._id = value.id;
            this._metricStat.internalValue = value.metricStat;
            this._returnData = value.returnData;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
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

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new SliSliMetricMetricDataQueriesMetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: SliSliMetricMetricDataQueriesMetricStatProperty) {
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

export class MetricDataQueriesPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricDataQueriesProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricDataQueriesPropertyOutputReference {
        return new MetricDataQueriesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SliSliMetricMetricSourceProperty {
    /**
    * Optional additional attributes for the metric source
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_source_attributes CcServiceLevelObjective#metric_source_attributes}
    */
    readonly metricSourceAttributes?: { [key: string]: string };
    /**
    * Required attributes that identify the metric source
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_source_key_attributes CcServiceLevelObjective#metric_source_key_attributes}
    */
    readonly metricSourceKeyAttributes?: { [key: string]: string };
}
export class SliSliMetricMetricSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SliSliMetricMetricSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricSourceAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSourceAttributes = this._metricSourceAttributes;
        }
        if (this._metricSourceKeyAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSourceKeyAttributes = this._metricSourceKeyAttributes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SliSliMetricMetricSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricSourceAttributes = undefined;
            this._metricSourceKeyAttributes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricSourceAttributes = value.metricSourceAttributes;
            this._metricSourceKeyAttributes = value.metricSourceKeyAttributes;
        }
    }

    // metric_source_attributes - computed: true, optional: true, required: false
    private _metricSourceAttributes?: { [key: string]: string }; 
    public get metricSourceAttributes() {
        return this.getStringMapAttribute('metric_source_attributes');
    }
    public set metricSourceAttributes(value: { [key: string]: string }) {
        this._metricSourceAttributes = value;
    }
    public resetMetricSourceAttributes() {
        this._metricSourceAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSourceAttributesInput() {
        return this._metricSourceAttributes;
    }

    // metric_source_key_attributes - computed: true, optional: true, required: false
    private _metricSourceKeyAttributes?: { [key: string]: string }; 
    public get metricSourceKeyAttributes() {
        return this.getStringMapAttribute('metric_source_key_attributes');
    }
    public set metricSourceKeyAttributes(value: { [key: string]: string }) {
        this._metricSourceKeyAttributes = value;
    }
    public resetMetricSourceKeyAttributes() {
        this._metricSourceKeyAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSourceKeyAttributesInput() {
        return this._metricSourceKeyAttributes;
    }
}
export interface SliMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#composite_sli_config CcServiceLevelObjective#composite_sli_config}
    */
    readonly compositeSliConfig?: SliSliMetricCompositeSliConfigProperty;
    /**
    * Configuration for identifying a dependency and its operation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#dependency_config CcServiceLevelObjective#dependency_config}
    */
    readonly dependencyConfig?: SliSliMetricDependencyConfigProperty;
    /**
    * This is a string-to-string map that contains information about the type of object that this SLO is related to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#key_attributes CcServiceLevelObjective#key_attributes}
    */
    readonly keyAttributes?: { [key: string]: string };
    /**
    * If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression, this structure includes the information about that metric or expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_data_queries CcServiceLevelObjective#metric_data_queries}
    */
    readonly metricDataQueries?: MetricDataQueriesProperty[] | cdktn.IResolvable;
    /**
    * The name of the metric for non-Application Signals services
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_name CcServiceLevelObjective#metric_name}
    */
    readonly metricName?: string;
    /**
    * Configuration for identifying the source of metrics for non-Application Signals services
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_source CcServiceLevelObjective#metric_source}
    */
    readonly metricSource?: SliSliMetricMetricSourceProperty;
    /**
    * If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_type CcServiceLevelObjective#metric_type}
    */
    readonly metricType?: string;
    /**
    * If the SLO monitors a specific operation of the service, this field displays that operation name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#operation_name CcServiceLevelObjective#operation_name}
    */
    readonly operationName?: string;
    /**
    * The number of seconds to use as the period for SLO evaluation. Your application's performance is compared to the SLI during each period. For each period, the application is determined to have either achieved or not achieved the necessary performance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#period_seconds CcServiceLevelObjective#period_seconds}
    */
    readonly periodSeconds?: number;
    /**
    * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#statistic CcServiceLevelObjective#statistic}
    */
    readonly statistic?: string;
}
export class SliMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SliMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compositeSliConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.compositeSliConfig = this._compositeSliConfig?.internalValue;
        }
        if (this._dependencyConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependencyConfig = this._dependencyConfig?.internalValue;
        }
        if (this._keyAttributes !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyAttributes = this._keyAttributes;
        }
        if (this._metricDataQueries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._metricSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricSource = this._metricSource?.internalValue;
        }
        if (this._metricType !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricType = this._metricType;
        }
        if (this._operationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.operationName = this._operationName;
        }
        if (this._periodSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodSeconds = this._periodSeconds;
        }
        if (this._statistic !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistic = this._statistic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SliMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compositeSliConfig.internalValue = undefined;
            this._dependencyConfig.internalValue = undefined;
            this._keyAttributes = undefined;
            this._metricDataQueries.internalValue = undefined;
            this._metricName = undefined;
            this._metricSource.internalValue = undefined;
            this._metricType = undefined;
            this._operationName = undefined;
            this._periodSeconds = undefined;
            this._statistic = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compositeSliConfig.internalValue = value.compositeSliConfig;
            this._dependencyConfig.internalValue = value.dependencyConfig;
            this._keyAttributes = value.keyAttributes;
            this._metricDataQueries.internalValue = value.metricDataQueries;
            this._metricName = value.metricName;
            this._metricSource.internalValue = value.metricSource;
            this._metricType = value.metricType;
            this._operationName = value.operationName;
            this._periodSeconds = value.periodSeconds;
            this._statistic = value.statistic;
        }
    }

    // composite_sli_config - computed: true, optional: true, required: false
    private _compositeSliConfig = new SliSliMetricCompositeSliConfigPropertyOutputReference(this, "composite_sli_config");
    public get compositeSliConfig() {
        return this._compositeSliConfig;
    }
    public putCompositeSliConfig(value: SliSliMetricCompositeSliConfigProperty) {
        this._compositeSliConfig.internalValue = value;
    }
    public resetCompositeSliConfig() {
        this._compositeSliConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compositeSliConfigInput() {
        return this._compositeSliConfig.internalValue;
    }

    // dependency_config - computed: true, optional: true, required: false
    private _dependencyConfig = new SliSliMetricDependencyConfigPropertyOutputReference(this, "dependency_config");
    public get dependencyConfig() {
        return this._dependencyConfig;
    }
    public putDependencyConfig(value: SliSliMetricDependencyConfigProperty) {
        this._dependencyConfig.internalValue = value;
    }
    public resetDependencyConfig() {
        this._dependencyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependencyConfigInput() {
        return this._dependencyConfig.internalValue;
    }

    // key_attributes - computed: true, optional: true, required: false
    private _keyAttributes?: { [key: string]: string }; 
    public get keyAttributes() {
        return this.getStringMapAttribute('key_attributes');
    }
    public set keyAttributes(value: { [key: string]: string }) {
        this._keyAttributes = value;
    }
    public resetKeyAttributes() {
        this._keyAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyAttributesInput() {
        return this._keyAttributes;
    }

    // metric_data_queries - computed: true, optional: true, required: false
    private _metricDataQueries = new MetricDataQueriesPropertyList(this, "metric_data_queries", false);
    public get metricDataQueries() {
        return this._metricDataQueries;
    }
    public putMetricDataQueries(value: MetricDataQueriesProperty[] | cdktn.IResolvable) {
        this._metricDataQueries.internalValue = value;
    }
    public resetMetricDataQueries() {
        this._metricDataQueries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDataQueriesInput() {
        return this._metricDataQueries.internalValue;
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

    // metric_source - computed: true, optional: true, required: false
    private _metricSource = new SliSliMetricMetricSourcePropertyOutputReference(this, "metric_source");
    public get metricSource() {
        return this._metricSource;
    }
    public putMetricSource(value: SliSliMetricMetricSourceProperty) {
        this._metricSource.internalValue = value;
    }
    public resetMetricSource() {
        this._metricSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricSourceInput() {
        return this._metricSource.internalValue;
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

    // operation_name - computed: true, optional: true, required: false
    private _operationName?: string; 
    public get operationName() {
        return this.getStringAttribute('operation_name');
    }
    public set operationName(value: string) {
        this._operationName = value;
    }
    public resetOperationName() {
        this._operationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationNameInput() {
        return this._operationName;
    }

    // period_seconds - computed: true, optional: true, required: false
    private _periodSeconds?: number; 
    public get periodSeconds() {
        return this.getNumberAttribute('period_seconds');
    }
    public set periodSeconds(value: number) {
        this._periodSeconds = value;
    }
    public resetPeriodSeconds() {
        this._periodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodSecondsInput() {
        return this._periodSeconds;
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
export interface SliProperty {
    /**
    * The arithmetic operation used when comparing the specified metric to the threshold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#comparison_operator CcServiceLevelObjective#comparison_operator}
    */
    readonly comparisonOperator?: string;
    /**
    * The value that the SLI metric is compared to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#metric_threshold CcServiceLevelObjective#metric_threshold}
    */
    readonly metricThreshold?: number;
    /**
    * A structure that contains information about the metric that the SLO monitors.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#sli_metric CcServiceLevelObjective#sli_metric}
    */
    readonly sliMetric?: SliMetricProperty;
}
export class SliPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SliProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparisonOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._metricThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricThreshold = this._metricThreshold;
        }
        if (this._sliMetric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sliMetric = this._sliMetric?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SliProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparisonOperator = undefined;
            this._metricThreshold = undefined;
            this._sliMetric.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparisonOperator = value.comparisonOperator;
            this._metricThreshold = value.metricThreshold;
            this._sliMetric.internalValue = value.sliMetric;
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

    // metric_threshold - computed: true, optional: true, required: false
    private _metricThreshold?: number; 
    public get metricThreshold() {
        return this.getNumberAttribute('metric_threshold');
    }
    public set metricThreshold(value: number) {
        this._metricThreshold = value;
    }
    public resetMetricThreshold() {
        this._metricThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricThresholdInput() {
        return this._metricThreshold;
    }

    // sli_metric - computed: true, optional: true, required: false
    private _sliMetric = new SliMetricPropertyOutputReference(this, "sli_metric");
    public get sliMetric() {
        return this._sliMetric;
    }
    public putSliMetric(value: SliMetricProperty) {
        this._sliMetric.internalValue = value;
    }
    public resetSliMetric() {
        this._sliMetric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sliMetricInput() {
        return this._sliMetric.internalValue;
    }
}
export interface TagProperty {
    /**
    * A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#key CcServiceLevelObjective#key}
    */
    readonly key?: string;
    /**
    * The value for the specified tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/applicationsignals_service_level_objective#value CcServiceLevelObjective#value}
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
