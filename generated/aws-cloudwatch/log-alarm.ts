// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLogAlarmProps extends cdktn.TerraformMetaArguments {
    /**
    * The number of log lines to include in alarm notifications. Valid values are 0 to 50.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#action_log_line_count CcLogAlarm#action_log_line_count}
    */
    readonly actionLogLineCount?: number;
    /**
    * The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications. Required when ActionLogLineCount is greater than 0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#action_log_line_role_arn CcLogAlarm#action_log_line_role_arn}
    */
    readonly actionLogLineRoleArn?: string;
    /**
    * Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#actions_enabled CcLogAlarm#actions_enabled}
    */
    readonly actionsEnabled?: boolean | cdktn.IResolvable;
    /**
    * The list of actions to execute when this alarm transitions into an ALARM state from any other state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#alarm_actions CcLogAlarm#alarm_actions}
    */
    readonly alarmActions?: string[];
    /**
    * The description of the log alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#alarm_description CcLogAlarm#alarm_description}
    */
    readonly alarmDescription?: string;
    /**
    * The name of the log alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#alarm_name CcLogAlarm#alarm_name}
    */
    readonly alarmName?: string;
    /**
    * The arithmetic operation to use when comparing the specified threshold and the query results. Valid values are GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, and LessThanOrEqualToThreshold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#comparison_operator CcLogAlarm#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#insufficient_data_actions CcLogAlarm#insufficient_data_actions}
    */
    readonly insufficientDataActions?: string[];
    /**
    * The actions to execute when this alarm transitions to the OK state from any other state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#ok_actions CcLogAlarm#ok_actions}
    */
    readonly okActions?: string[];
    /**
    * The number of query results that must be breaching to trigger the alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#query_results_to_alarm CcLogAlarm#query_results_to_alarm}
    */
    readonly queryResultsToAlarm: number;
    /**
    * The number of query results over which data is compared to the specified threshold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#query_results_to_evaluate CcLogAlarm#query_results_to_evaluate}
    */
    readonly queryResultsToEvaluate: number;
    /**
    * The scheduled query configuration for the log alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#scheduled_query_configuration CcLogAlarm#scheduled_query_configuration}
    */
    readonly scheduledQueryConfiguration: CcLogAlarm.ScheduledQueryConfigurationProperty;
    /**
    * A list of key-value pairs to associate with the log alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#tags CcLogAlarm#tags}
    */
    readonly tags?: CcLogAlarm.TagsProperty[] | cdktn.IResolvable;
    /**
    * The value to compare against the results of the scheduled query evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#threshold CcLogAlarm#threshold}
    */
    readonly threshold: number;
    /**
    * Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#treat_missing_data CcLogAlarm#treat_missing_data}
    */
    readonly treatMissingData?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm awscc_cloudwatch_log_alarm}
*/
export class CcLogAlarm extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudwatch_log_alarm";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLogAlarm resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLogAlarm to import
    * @param importFromId The id of the existing CcLogAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLogAlarm to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_log_alarm", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm awscc_cloudwatch_log_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLogAlarmProps
    */
    public constructor(scope: Construct, id: string, config: CcLogAlarmProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudwatch_log_alarm',
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
        this._actionLogLineCount = config.actionLogLineCount;
        this._actionLogLineRoleArn = config.actionLogLineRoleArn;
        this._actionsEnabled = config.actionsEnabled;
        this._alarmActions = config.alarmActions;
        this._alarmDescription = config.alarmDescription;
        this._alarmName = config.alarmName;
        this._comparisonOperator = config.comparisonOperator;
        this._insufficientDataActions = config.insufficientDataActions;
        this._okActions = config.okActions;
        this._queryResultsToAlarm = config.queryResultsToAlarm;
        this._queryResultsToEvaluate = config.queryResultsToEvaluate;
        this._scheduledQueryConfiguration.internalValue = config.scheduledQueryConfiguration;
        this._tags.internalValue = config.tags;
        this._threshold = config.threshold;
        this._treatMissingData = config.treatMissingData;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action_log_line_count - computed: true, optional: true, required: false
    private _actionLogLineCount?: number; 
    public get actionLogLineCount() {
        return this.getNumberAttribute('action_log_line_count');
    }
    public set actionLogLineCount(value: number) {
        this._actionLogLineCount = value;
    }
    public resetActionLogLineCount() {
        this._actionLogLineCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionLogLineCountInput() {
        return this._actionLogLineCount;
    }

    // action_log_line_role_arn - computed: true, optional: true, required: false
    private _actionLogLineRoleArn?: string; 
    public get actionLogLineRoleArn() {
        return this.getStringAttribute('action_log_line_role_arn');
    }
    public set actionLogLineRoleArn(value: string) {
        this._actionLogLineRoleArn = value;
    }
    public resetActionLogLineRoleArn() {
        this._actionLogLineRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionLogLineRoleArnInput() {
        return this._actionLogLineRoleArn;
    }

    // actions_enabled - computed: true, optional: true, required: false
    private _actionsEnabled?: boolean | cdktn.IResolvable; 
    public get actionsEnabled() {
        return this.getBooleanAttribute('actions_enabled');
    }
    public set actionsEnabled(value: boolean | cdktn.IResolvable) {
        this._actionsEnabled = value;
    }
    public resetActionsEnabled() {
        this._actionsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsEnabledInput() {
        return this._actionsEnabled;
    }

    // alarm_actions - computed: true, optional: true, required: false
    private _alarmActions?: string[]; 
    public get alarmActions() {
        return this.getListAttribute('alarm_actions');
    }
    public set alarmActions(value: string[]) {
        this._alarmActions = value;
    }
    public resetAlarmActions() {
        this._alarmActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmActionsInput() {
        return this._alarmActions;
    }

    // alarm_description - computed: true, optional: true, required: false
    private _alarmDescription?: string; 
    public get alarmDescription() {
        return this.getStringAttribute('alarm_description');
    }
    public set alarmDescription(value: string) {
        this._alarmDescription = value;
    }
    public resetAlarmDescription() {
        this._alarmDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmDescriptionInput() {
        return this._alarmDescription;
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

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // comparison_operator - computed: false, optional: false, required: true
    private _comparisonOperator?: string; 
    public get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    public set comparisonOperator(value: string) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonOperatorInput() {
        return this._comparisonOperator;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // insufficient_data_actions - computed: true, optional: true, required: false
    private _insufficientDataActions?: string[]; 
    public get insufficientDataActions() {
        return this.getListAttribute('insufficient_data_actions');
    }
    public set insufficientDataActions(value: string[]) {
        this._insufficientDataActions = value;
    }
    public resetInsufficientDataActions() {
        this._insufficientDataActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insufficientDataActionsInput() {
        return this._insufficientDataActions;
    }

    // ok_actions - computed: true, optional: true, required: false
    private _okActions?: string[]; 
    public get okActions() {
        return this.getListAttribute('ok_actions');
    }
    public set okActions(value: string[]) {
        this._okActions = value;
    }
    public resetOkActions() {
        this._okActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get okActionsInput() {
        return this._okActions;
    }

    // query_results_to_alarm - computed: false, optional: false, required: true
    private _queryResultsToAlarm?: number; 
    public get queryResultsToAlarm() {
        return this.getNumberAttribute('query_results_to_alarm');
    }
    public set queryResultsToAlarm(value: number) {
        this._queryResultsToAlarm = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryResultsToAlarmInput() {
        return this._queryResultsToAlarm;
    }

    // query_results_to_evaluate - computed: false, optional: false, required: true
    private _queryResultsToEvaluate?: number; 
    public get queryResultsToEvaluate() {
        return this.getNumberAttribute('query_results_to_evaluate');
    }
    public set queryResultsToEvaluate(value: number) {
        this._queryResultsToEvaluate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryResultsToEvaluateInput() {
        return this._queryResultsToEvaluate;
    }

    // scheduled_query_configuration - computed: false, optional: false, required: true
    private _scheduledQueryConfiguration = new CcLogAlarm.ScheduledQueryConfigurationPropertyOutputReference(this, "scheduled_query_configuration");
    public get scheduledQueryConfiguration() {
        return this._scheduledQueryConfiguration;
    }
    public putScheduledQueryConfiguration(value: CcLogAlarm.ScheduledQueryConfigurationProperty) {
        this._scheduledQueryConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledQueryConfigurationInput() {
        return this._scheduledQueryConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLogAlarm.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLogAlarm.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // threshold - computed: false, optional: false, required: true
    private _threshold?: number; 
    public get threshold() {
        return this.getNumberAttribute('threshold');
    }
    public set threshold(value: number) {
        this._threshold = value;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
        return this._threshold;
    }

    // treat_missing_data - computed: true, optional: true, required: false
    private _treatMissingData?: string; 
    public get treatMissingData() {
        return this.getStringAttribute('treat_missing_data');
    }
    public set treatMissingData(value: string) {
        this._treatMissingData = value;
    }
    public resetTreatMissingData() {
        this._treatMissingData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get treatMissingDataInput() {
        return this._treatMissingData;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action_log_line_count: cdktn.numberToTerraform(this._actionLogLineCount),
            action_log_line_role_arn: cdktn.stringToTerraform(this._actionLogLineRoleArn),
            actions_enabled: cdktn.booleanToTerraform(this._actionsEnabled),
            alarm_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._alarmActions),
            alarm_description: cdktn.stringToTerraform(this._alarmDescription),
            alarm_name: cdktn.stringToTerraform(this._alarmName),
            comparison_operator: cdktn.stringToTerraform(this._comparisonOperator),
            insufficient_data_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._insufficientDataActions),
            ok_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._okActions),
            query_results_to_alarm: cdktn.numberToTerraform(this._queryResultsToAlarm),
            query_results_to_evaluate: cdktn.numberToTerraform(this._queryResultsToEvaluate),
            scheduled_query_configuration: ccLogAlarmScheduledQueryConfigurationPropertyToTerraform(this._scheduledQueryConfiguration.internalValue),
            tags: cdktn.listMapper(ccLogAlarmTagsPropertyToTerraform, false)(this._tags.internalValue),
            threshold: cdktn.numberToTerraform(this._threshold),
            treat_missing_data: cdktn.stringToTerraform(this._treatMissingData),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action_log_line_count: {
                value: cdktn.numberToHclTerraform(this._actionLogLineCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            action_log_line_role_arn: {
                value: cdktn.stringToHclTerraform(this._actionLogLineRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            actions_enabled: {
                value: cdktn.booleanToHclTerraform(this._actionsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            alarm_actions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._alarmActions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            alarm_description: {
                value: cdktn.stringToHclTerraform(this._alarmDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alarm_name: {
                value: cdktn.stringToHclTerraform(this._alarmName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            comparison_operator: {
                value: cdktn.stringToHclTerraform(this._comparisonOperator),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            insufficient_data_actions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._insufficientDataActions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            ok_actions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._okActions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            query_results_to_alarm: {
                value: cdktn.numberToHclTerraform(this._queryResultsToAlarm),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            query_results_to_evaluate: {
                value: cdktn.numberToHclTerraform(this._queryResultsToEvaluate),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            scheduled_query_configuration: {
                value: ccLogAlarmScheduledQueryConfigurationPropertyToHclTerraform(this._scheduledQueryConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcLogAlarm.ScheduledQueryConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLogAlarmTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLogAlarm.TagsPropertyList",
            },
            threshold: {
                value: cdktn.numberToHclTerraform(this._threshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            treat_missing_data: {
                value: cdktn.stringToHclTerraform(this._treatMissingData),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLogAlarmScheduleConfigurationPropertyToTerraform(struct?: CcLogAlarm.ScheduleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time_offset: cdktn.numberToTerraform(struct!.endTimeOffset),
        schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
        start_time_offset: cdktn.numberToTerraform(struct!.startTimeOffset),
    }
}


export function ccLogAlarmScheduleConfigurationPropertyToHclTerraform(struct?: CcLogAlarm.ScheduleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time_offset: {
            value: cdktn.numberToHclTerraform(struct!.endTimeOffset),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        schedule_expression: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_time_offset: {
            value: cdktn.numberToHclTerraform(struct!.startTimeOffset),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLogAlarmTagPropertyToTerraform(struct?: CcLogAlarm.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLogAlarmTagPropertyToHclTerraform(struct?: CcLogAlarm.TagProperty | cdktn.IResolvable): any {
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


export function ccLogAlarmScheduledQueryConfigurationPropertyToTerraform(struct?: CcLogAlarm.ScheduledQueryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aggregation_expression: cdktn.stringToTerraform(struct!.aggregationExpression),
        log_group_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.logGroupIdentifiers),
        query_string: cdktn.stringToTerraform(struct!.queryString),
        schedule_configuration: ccLogAlarmScheduleConfigurationPropertyToTerraform(struct!.scheduleConfiguration),
        scheduled_query_role_arn: cdktn.stringToTerraform(struct!.scheduledQueryRoleArn),
        tags: cdktn.listMapper(ccLogAlarmTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccLogAlarmScheduledQueryConfigurationPropertyToHclTerraform(struct?: CcLogAlarm.ScheduledQueryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aggregation_expression: {
            value: cdktn.stringToHclTerraform(struct!.aggregationExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_identifiers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.logGroupIdentifiers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        query_string: {
            value: cdktn.stringToHclTerraform(struct!.queryString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_configuration: {
            value: ccLogAlarmScheduleConfigurationPropertyToHclTerraform(struct!.scheduleConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ScheduleConfigurationProperty",
        },
        scheduled_query_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.scheduledQueryRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccLogAlarmTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "set",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccLogAlarmTagsPropertyToTerraform(struct?: CcLogAlarm.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLogAlarmTagsPropertyToHclTerraform(struct?: CcLogAlarm.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcLogAlarm {
export interface ScheduleConfigurationProperty {
    /**
    * The number of seconds into the past to end the query window. Must be a non-negative value and cannot exceed 2592000 seconds (30 days).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#end_time_offset CcLogAlarm#end_time_offset}
    */
    readonly endTimeOffset?: number;
    /**
    * The expression that defines when the scheduled query runs, e.g. rate(1 minute).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#schedule_expression CcLogAlarm#schedule_expression}
    */
    readonly scheduleExpression: string;
    /**
    * The number of seconds into the past to start the query window. Must be a positive value and cannot exceed 2592000 seconds (30 days).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#start_time_offset CcLogAlarm#start_time_offset}
    */
    readonly startTimeOffset: number;
}
export class ScheduleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTimeOffset !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTimeOffset = this._endTimeOffset;
        }
        if (this._scheduleExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        if (this._startTimeOffset !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTimeOffset = this._startTimeOffset;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTimeOffset = undefined;
            this._scheduleExpression = undefined;
            this._startTimeOffset = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTimeOffset = value.endTimeOffset;
            this._scheduleExpression = value.scheduleExpression;
            this._startTimeOffset = value.startTimeOffset;
        }
    }

    // end_time_offset - computed: true, optional: true, required: false
    private _endTimeOffset?: number; 
    public get endTimeOffset() {
        return this.getNumberAttribute('end_time_offset');
    }
    public set endTimeOffset(value: number) {
        this._endTimeOffset = value;
    }
    public resetEndTimeOffset() {
        this._endTimeOffset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeOffsetInput() {
        return this._endTimeOffset;
    }

    // schedule_expression - computed: false, optional: false, required: true
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }

    // start_time_offset - computed: false, optional: false, required: true
    private _startTimeOffset?: number; 
    public get startTimeOffset() {
        return this.getNumberAttribute('start_time_offset');
    }
    public set startTimeOffset(value: number) {
        this._startTimeOffset = value;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeOffsetInput() {
        return this._startTimeOffset;
    }
}
export interface TagProperty {
    /**
    * A unique identifier for the tag. The combination of tag keys and values can help you organize and categorize your resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#key CcLogAlarm#key}
    */
    readonly key?: string;
    /**
    * The value for the specified tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#value CcLogAlarm#value}
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
export interface ScheduledQueryConfigurationProperty {
    /**
    * The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#aggregation_expression CcLogAlarm#aggregation_expression}
    */
    readonly aggregationExpression: string;
    /**
    * The log groups to query.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#log_group_identifiers CcLogAlarm#log_group_identifiers}
    */
    readonly logGroupIdentifiers?: string[];
    /**
    * The query string to execute against the specified log groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#query_string CcLogAlarm#query_string}
    */
    readonly queryString: string;
    /**
    * The schedule configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#schedule_configuration CcLogAlarm#schedule_configuration}
    */
    readonly scheduleConfiguration: ScheduleConfigurationProperty;
    /**
    * The ARN of the IAM role that grants permissions to execute the scheduled query.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#scheduled_query_role_arn CcLogAlarm#scheduled_query_role_arn}
    */
    readonly scheduledQueryRoleArn: string;
    /**
    * A list of key-value pairs to associate with the scheduled query that backs the log alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#tags CcLogAlarm#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
}
export class ScheduledQueryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduledQueryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aggregationExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregationExpression = this._aggregationExpression;
        }
        if (this._logGroupIdentifiers !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupIdentifiers = this._logGroupIdentifiers;
        }
        if (this._queryString !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString;
        }
        if (this._scheduleConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleConfiguration = this._scheduleConfiguration?.internalValue;
        }
        if (this._scheduledQueryRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduledQueryRoleArn = this._scheduledQueryRoleArn;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduledQueryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aggregationExpression = undefined;
            this._logGroupIdentifiers = undefined;
            this._queryString = undefined;
            this._scheduleConfiguration.internalValue = undefined;
            this._scheduledQueryRoleArn = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aggregationExpression = value.aggregationExpression;
            this._logGroupIdentifiers = value.logGroupIdentifiers;
            this._queryString = value.queryString;
            this._scheduleConfiguration.internalValue = value.scheduleConfiguration;
            this._scheduledQueryRoleArn = value.scheduledQueryRoleArn;
            this._tags.internalValue = value.tags;
        }
    }

    // aggregation_expression - computed: false, optional: false, required: true
    private _aggregationExpression?: string; 
    public get aggregationExpression() {
        return this.getStringAttribute('aggregation_expression');
    }
    public set aggregationExpression(value: string) {
        this._aggregationExpression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationExpressionInput() {
        return this._aggregationExpression;
    }

    // log_group_identifiers - computed: true, optional: true, required: false
    private _logGroupIdentifiers?: string[]; 
    public get logGroupIdentifiers() {
        return this.getListAttribute('log_group_identifiers');
    }
    public set logGroupIdentifiers(value: string[]) {
        this._logGroupIdentifiers = value;
    }
    public resetLogGroupIdentifiers() {
        this._logGroupIdentifiers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupIdentifiersInput() {
        return this._logGroupIdentifiers;
    }

    // query_string - computed: false, optional: false, required: true
    private _queryString?: string; 
    public get queryString() {
        return this.getStringAttribute('query_string');
    }
    public set queryString(value: string) {
        this._queryString = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
        return this._queryString;
    }

    // schedule_configuration - computed: false, optional: false, required: true
    private _scheduleConfiguration = new ScheduleConfigurationPropertyOutputReference(this, "schedule_configuration");
    public get scheduleConfiguration() {
        return this._scheduleConfiguration;
    }
    public putScheduleConfiguration(value: ScheduleConfigurationProperty) {
        this._scheduleConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleConfigurationInput() {
        return this._scheduleConfiguration.internalValue;
    }

    // scheduled_query_role_arn - computed: false, optional: false, required: true
    private _scheduledQueryRoleArn?: string; 
    public get scheduledQueryRoleArn() {
        return this.getStringAttribute('scheduled_query_role_arn');
    }
    public set scheduledQueryRoleArn(value: string) {
        this._scheduledQueryRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledQueryRoleArnInput() {
        return this._scheduledQueryRoleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}
export interface TagsProperty {
    /**
    * A unique identifier for the tag. The combination of tag keys and values can help you organize and categorize your resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#key CcLogAlarm#key}
    */
    readonly key?: string;
    /**
    * The value for the specified tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_log_alarm#value CcLogAlarm#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
