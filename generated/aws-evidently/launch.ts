// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLaunchProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#description CcLaunch#description}
    */
    readonly description?: string;
    /**
    * Start or Stop Launch Launch. Default is not started.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#execution_status CcLaunch#execution_status}
    */
    readonly executionStatus?: CcLaunch.ExecutionStatusObjectProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#groups CcLaunch#groups}
    */
    readonly groups: CcLaunch.LaunchGroupObjectProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#metric_monitors CcLaunch#metric_monitors}
    */
    readonly metricMonitors?: CcLaunch.MetricDefinitionObjectProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#name CcLaunch#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#project CcLaunch#project}
    */
    readonly project: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#randomization_salt CcLaunch#randomization_salt}
    */
    readonly randomizationSalt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#scheduled_splits_config CcLaunch#scheduled_splits_config}
    */
    readonly scheduledSplitsConfig: CcLaunch.StepConfigProperty[] | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#tags CcLaunch#tags}
    */
    readonly tags?: CcLaunch.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch awscc_evidently_launch}
*/
export class CcLaunch extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_evidently_launch";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLaunch resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLaunch to import
    * @param importFromId The id of the existing CcLaunch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLaunch to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_evidently_launch", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch awscc_evidently_launch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLaunchProps
    */
    public constructor(scope: Construct, id: string, config: CcLaunchProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_evidently_launch',
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
        this._description = config.description;
        this._executionStatus.internalValue = config.executionStatus;
        this._groups.internalValue = config.groups;
        this._metricMonitors.internalValue = config.metricMonitors;
        this._name = config.name;
        this._project = config.project;
        this._randomizationSalt = config.randomizationSalt;
        this._scheduledSplitsConfig.internalValue = config.scheduledSplitsConfig;
        this._tags.internalValue = config.tags;
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

    // execution_status - computed: true, optional: true, required: false
    private _executionStatus = new CcLaunch.ExecutionStatusObjectPropertyOutputReference(this, "execution_status");
    public get executionStatus() {
        return this._executionStatus;
    }
    public putExecutionStatus(value: CcLaunch.ExecutionStatusObjectProperty) {
        this._executionStatus.internalValue = value;
    }
    public resetExecutionStatus() {
        this._executionStatus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionStatusInput() {
        return this._executionStatus.internalValue;
    }

    // groups - computed: false, optional: false, required: true
    private _groups = new CcLaunch.LaunchGroupObjectPropertyList(this, "groups", false);
    public get groups() {
        return this._groups;
    }
    public putGroups(value: CcLaunch.LaunchGroupObjectProperty[] | cdktn.IResolvable) {
        this._groups.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsInput() {
        return this._groups.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // metric_monitors - computed: true, optional: true, required: false
    private _metricMonitors = new CcLaunch.MetricDefinitionObjectPropertyList(this, "metric_monitors", false);
    public get metricMonitors() {
        return this._metricMonitors;
    }
    public putMetricMonitors(value: CcLaunch.MetricDefinitionObjectProperty[] | cdktn.IResolvable) {
        this._metricMonitors.internalValue = value;
    }
    public resetMetricMonitors() {
        this._metricMonitors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricMonitorsInput() {
        return this._metricMonitors.internalValue;
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

    // scheduled_splits_config - computed: false, optional: false, required: true
    private _scheduledSplitsConfig = new CcLaunch.StepConfigPropertyList(this, "scheduled_splits_config", false);
    public get scheduledSplitsConfig() {
        return this._scheduledSplitsConfig;
    }
    public putScheduledSplitsConfig(value: CcLaunch.StepConfigProperty[] | cdktn.IResolvable) {
        this._scheduledSplitsConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledSplitsConfigInput() {
        return this._scheduledSplitsConfig.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLaunch.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLaunch.TagProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            execution_status: ccLaunchExecutionStatusObjectPropertyToTerraform(this._executionStatus.internalValue),
            groups: cdktn.listMapper(ccLaunchLaunchGroupObjectPropertyToTerraform, false)(this._groups.internalValue),
            metric_monitors: cdktn.listMapper(ccLaunchMetricDefinitionObjectPropertyToTerraform, false)(this._metricMonitors.internalValue),
            name: cdktn.stringToTerraform(this._name),
            project: cdktn.stringToTerraform(this._project),
            randomization_salt: cdktn.stringToTerraform(this._randomizationSalt),
            scheduled_splits_config: cdktn.listMapper(ccLaunchStepConfigPropertyToTerraform, false)(this._scheduledSplitsConfig.internalValue),
            tags: cdktn.listMapper(ccLaunchTagPropertyToTerraform, false)(this._tags.internalValue),
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
            execution_status: {
                value: ccLaunchExecutionStatusObjectPropertyToHclTerraform(this._executionStatus.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLaunch.ExecutionStatusObjectProperty",
            },
            groups: {
                value: cdktn.listMapperHcl(ccLaunchLaunchGroupObjectPropertyToHclTerraform, false)(this._groups.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLaunch.LaunchGroupObjectPropertyList",
            },
            metric_monitors: {
                value: cdktn.listMapperHcl(ccLaunchMetricDefinitionObjectPropertyToHclTerraform, false)(this._metricMonitors.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLaunch.MetricDefinitionObjectPropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            scheduled_splits_config: {
                value: cdktn.listMapperHcl(ccLaunchStepConfigPropertyToHclTerraform, false)(this._scheduledSplitsConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcLaunch.StepConfigPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLaunchTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLaunch.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLaunchExecutionStatusObjectPropertyToTerraform(struct?: CcLaunch.ExecutionStatusObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        desired_state: cdktn.stringToTerraform(struct!.desiredState),
        reason: cdktn.stringToTerraform(struct!.reason),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccLaunchExecutionStatusObjectPropertyToHclTerraform(struct?: CcLaunch.ExecutionStatusObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccLaunchLaunchGroupObjectPropertyToTerraform(struct?: CcLaunch.LaunchGroupObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        feature: cdktn.stringToTerraform(struct!.feature),
        group_name: cdktn.stringToTerraform(struct!.groupName),
        variation: cdktn.stringToTerraform(struct!.variation),
    }
}


export function ccLaunchLaunchGroupObjectPropertyToHclTerraform(struct?: CcLaunch.LaunchGroupObjectProperty | cdktn.IResolvable): any {
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
        group_name: {
            value: cdktn.stringToHclTerraform(struct!.groupName),
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


export function ccLaunchMetricDefinitionObjectPropertyToTerraform(struct?: CcLaunch.MetricDefinitionObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        entity_id_key: cdktn.stringToTerraform(struct!.entityIdKey),
        event_pattern: cdktn.stringToTerraform(struct!.eventPattern),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        unit_label: cdktn.stringToTerraform(struct!.unitLabel),
        value_key: cdktn.stringToTerraform(struct!.valueKey),
    }
}


export function ccLaunchMetricDefinitionObjectPropertyToHclTerraform(struct?: CcLaunch.MetricDefinitionObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccLaunchGroupToWeightPropertyToTerraform(struct?: CcLaunch.GroupToWeightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_name: cdktn.stringToTerraform(struct!.groupName),
        split_weight: cdktn.numberToTerraform(struct!.splitWeight),
    }
}


export function ccLaunchGroupToWeightPropertyToHclTerraform(struct?: CcLaunch.GroupToWeightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_name: {
            value: cdktn.stringToHclTerraform(struct!.groupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        split_weight: {
            value: cdktn.numberToHclTerraform(struct!.splitWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchWeightsPropertyToTerraform(struct?: CcLaunch.WeightsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_name: cdktn.stringToTerraform(struct!.groupName),
        split_weight: cdktn.numberToTerraform(struct!.splitWeight),
    }
}


export function ccLaunchWeightsPropertyToHclTerraform(struct?: CcLaunch.WeightsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_name: {
            value: cdktn.stringToHclTerraform(struct!.groupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        split_weight: {
            value: cdktn.numberToHclTerraform(struct!.splitWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchSegmentOverridePropertyToTerraform(struct?: CcLaunch.SegmentOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluation_order: cdktn.numberToTerraform(struct!.evaluationOrder),
        segment: cdktn.stringToTerraform(struct!.segment),
        weights: cdktn.listMapper(ccLaunchWeightsPropertyToTerraform, false)(struct!.weights),
    }
}


export function ccLaunchSegmentOverridePropertyToHclTerraform(struct?: CcLaunch.SegmentOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluation_order: {
            value: cdktn.numberToHclTerraform(struct!.evaluationOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        segment: {
            value: cdktn.stringToHclTerraform(struct!.segment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weights: {
            value: cdktn.listMapperHcl(ccLaunchWeightsPropertyToHclTerraform, false)(struct!.weights),
            isBlock: true,
            type: "set",
            storageClassType: "WeightsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchStepConfigPropertyToTerraform(struct?: CcLaunch.StepConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_weights: cdktn.listMapper(ccLaunchGroupToWeightPropertyToTerraform, false)(struct!.groupWeights),
        segment_overrides: cdktn.listMapper(ccLaunchSegmentOverridePropertyToTerraform, false)(struct!.segmentOverrides),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccLaunchStepConfigPropertyToHclTerraform(struct?: CcLaunch.StepConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_weights: {
            value: cdktn.listMapperHcl(ccLaunchGroupToWeightPropertyToHclTerraform, false)(struct!.groupWeights),
            isBlock: true,
            type: "set",
            storageClassType: "GroupToWeightPropertyList",
        },
        segment_overrides: {
            value: cdktn.listMapperHcl(ccLaunchSegmentOverridePropertyToHclTerraform, false)(struct!.segmentOverrides),
            isBlock: true,
            type: "set",
            storageClassType: "SegmentOverridePropertyList",
        },
        start_time: {
            value: cdktn.stringToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLaunchTagPropertyToTerraform(struct?: CcLaunch.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLaunchTagPropertyToHclTerraform(struct?: CcLaunch.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLaunch {
export interface ExecutionStatusObjectProperty {
    /**
    * Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#desired_state CcLaunch#desired_state}
    */
    readonly desiredState?: string;
    /**
    * Provide a reason for stopping the launch. Defaults to empty if not provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#reason CcLaunch#reason}
    */
    readonly reason?: string;
    /**
    * Provide START or STOP action to apply on a launch
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#status CcLaunch#status}
    */
    readonly status?: string;
}
export class ExecutionStatusObjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExecutionStatusObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
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

    public set internalValue(value: ExecutionStatusObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
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
            this._desiredState = value.desiredState;
            this._reason = value.reason;
            this._status = value.status;
        }
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
export interface LaunchGroupObjectProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#description CcLaunch#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#feature CcLaunch#feature}
    */
    readonly feature: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#group_name CcLaunch#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#variation CcLaunch#variation}
    */
    readonly variation: string;
}
export class LaunchGroupObjectPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LaunchGroupObjectProperty | cdktn.IResolvable | undefined {
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
        if (this._groupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        if (this._variation !== undefined) {
            hasAnyValues = true;
            internalValueResult.variation = this._variation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LaunchGroupObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._feature = undefined;
            this._groupName = undefined;
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
            this._groupName = value.groupName;
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

    // group_name - computed: false, optional: false, required: true
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
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

export class LaunchGroupObjectPropertyList extends cdktn.ComplexList {
    public internalValue? : LaunchGroupObjectProperty[] | cdktn.IResolvable

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
    public get(index: number): LaunchGroupObjectPropertyOutputReference {
        return new LaunchGroupObjectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricDefinitionObjectProperty {
    /**
    * The JSON path to reference the entity id in the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#entity_id_key CcLaunch#entity_id_key}
    */
    readonly entityIdKey?: string;
    /**
    * Event patterns have the same structure as the events they match. Rules use event patterns to select events. An event pattern either matches an event or it doesn't.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#event_pattern CcLaunch#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#metric_name CcLaunch#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#unit_label CcLaunch#unit_label}
    */
    readonly unitLabel?: string;
    /**
    * The JSON path to reference the numerical metric value in the event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#value_key CcLaunch#value_key}
    */
    readonly valueKey?: string;
}
export class MetricDefinitionObjectPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricDefinitionObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
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

    public set internalValue(value: MetricDefinitionObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
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
            this._entityIdKey = value.entityIdKey;
            this._eventPattern = value.eventPattern;
            this._metricName = value.metricName;
            this._unitLabel = value.unitLabel;
            this._valueKey = value.valueKey;
        }
    }

    // entity_id_key - computed: true, optional: true, required: false
    private _entityIdKey?: string; 
    public get entityIdKey() {
        return this.getStringAttribute('entity_id_key');
    }
    public set entityIdKey(value: string) {
        this._entityIdKey = value;
    }
    public resetEntityIdKey() {
        this._entityIdKey = undefined;
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

    // value_key - computed: true, optional: true, required: false
    private _valueKey?: string; 
    public get valueKey() {
        return this.getStringAttribute('value_key');
    }
    public set valueKey(value: string) {
        this._valueKey = value;
    }
    public resetValueKey() {
        this._valueKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueKeyInput() {
        return this._valueKey;
    }
}

export class MetricDefinitionObjectPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricDefinitionObjectProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricDefinitionObjectPropertyOutputReference {
        return new MetricDefinitionObjectPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface GroupToWeightProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#group_name CcLaunch#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#split_weight CcLaunch#split_weight}
    */
    readonly splitWeight: number;
}
export class GroupToWeightPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GroupToWeightProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        if (this._splitWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.splitWeight = this._splitWeight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GroupToWeightProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupName = undefined;
            this._splitWeight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupName = value.groupName;
            this._splitWeight = value.splitWeight;
        }
    }

    // group_name - computed: false, optional: false, required: true
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
    }

    // split_weight - computed: false, optional: false, required: true
    private _splitWeight?: number; 
    public get splitWeight() {
        return this.getNumberAttribute('split_weight');
    }
    public set splitWeight(value: number) {
        this._splitWeight = value;
    }
    // Temporarily expose input value. Use with caution.
    public get splitWeightInput() {
        return this._splitWeight;
    }
}

export class GroupToWeightPropertyList extends cdktn.ComplexList {
    public internalValue? : GroupToWeightProperty[] | cdktn.IResolvable

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
    public get(index: number): GroupToWeightPropertyOutputReference {
        return new GroupToWeightPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WeightsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#group_name CcLaunch#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#split_weight CcLaunch#split_weight}
    */
    readonly splitWeight?: number;
}
export class WeightsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WeightsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        if (this._splitWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.splitWeight = this._splitWeight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WeightsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupName = undefined;
            this._splitWeight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupName = value.groupName;
            this._splitWeight = value.splitWeight;
        }
    }

    // group_name - computed: true, optional: true, required: false
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    public resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
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
}

export class WeightsPropertyList extends cdktn.ComplexList {
    public internalValue? : WeightsProperty[] | cdktn.IResolvable

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
    public get(index: number): WeightsPropertyOutputReference {
        return new WeightsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SegmentOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#evaluation_order CcLaunch#evaluation_order}
    */
    readonly evaluationOrder?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#segment CcLaunch#segment}
    */
    readonly segment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#weights CcLaunch#weights}
    */
    readonly weights?: WeightsProperty[] | cdktn.IResolvable;
}
export class SegmentOverridePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SegmentOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._evaluationOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluationOrder = this._evaluationOrder;
        }
        if (this._segment !== undefined) {
            hasAnyValues = true;
            internalValueResult.segment = this._segment;
        }
        if (this._weights?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.weights = this._weights?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SegmentOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluationOrder = undefined;
            this._segment = undefined;
            this._weights.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluationOrder = value.evaluationOrder;
            this._segment = value.segment;
            this._weights.internalValue = value.weights;
        }
    }

    // evaluation_order - computed: true, optional: true, required: false
    private _evaluationOrder?: number; 
    public get evaluationOrder() {
        return this.getNumberAttribute('evaluation_order');
    }
    public set evaluationOrder(value: number) {
        this._evaluationOrder = value;
    }
    public resetEvaluationOrder() {
        this._evaluationOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationOrderInput() {
        return this._evaluationOrder;
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

    // weights - computed: true, optional: true, required: false
    private _weights = new WeightsPropertyList(this, "weights", true);
    public get weights() {
        return this._weights;
    }
    public putWeights(value: WeightsProperty[] | cdktn.IResolvable) {
        this._weights.internalValue = value;
    }
    public resetWeights() {
        this._weights.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightsInput() {
        return this._weights.internalValue;
    }
}

export class SegmentOverridePropertyList extends cdktn.ComplexList {
    public internalValue? : SegmentOverrideProperty[] | cdktn.IResolvable

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
    public get(index: number): SegmentOverridePropertyOutputReference {
        return new SegmentOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StepConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#group_weights CcLaunch#group_weights}
    */
    readonly groupWeights: GroupToWeightProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#segment_overrides CcLaunch#segment_overrides}
    */
    readonly segmentOverrides?: SegmentOverrideProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#start_time CcLaunch#start_time}
    */
    readonly startTime: string;
}
export class StepConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StepConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupWeights?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupWeights = this._groupWeights?.internalValue;
        }
        if (this._segmentOverrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentOverrides = this._segmentOverrides?.internalValue;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupWeights.internalValue = undefined;
            this._segmentOverrides.internalValue = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupWeights.internalValue = value.groupWeights;
            this._segmentOverrides.internalValue = value.segmentOverrides;
            this._startTime = value.startTime;
        }
    }

    // group_weights - computed: false, optional: false, required: true
    private _groupWeights = new GroupToWeightPropertyList(this, "group_weights", true);
    public get groupWeights() {
        return this._groupWeights;
    }
    public putGroupWeights(value: GroupToWeightProperty[] | cdktn.IResolvable) {
        this._groupWeights.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupWeightsInput() {
        return this._groupWeights.internalValue;
    }

    // segment_overrides - computed: true, optional: true, required: false
    private _segmentOverrides = new SegmentOverridePropertyList(this, "segment_overrides", true);
    public get segmentOverrides() {
        return this._segmentOverrides;
    }
    public putSegmentOverrides(value: SegmentOverrideProperty[] | cdktn.IResolvable) {
        this._segmentOverrides.internalValue = value;
    }
    public resetSegmentOverrides() {
        this._segmentOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentOverridesInput() {
        return this._segmentOverrides.internalValue;
    }

    // start_time - computed: false, optional: false, required: true
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}

export class StepConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : StepConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): StepConfigPropertyOutputReference {
        return new StepConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#key CcLaunch#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/evidently_launch#value CcLaunch#value}
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
