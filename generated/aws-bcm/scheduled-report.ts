// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScheduledReportProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#dashboard_arn CcScheduledReport#dashboard_arn}
    */
    readonly dashboardArn: string;
    /**
    * A description of the scheduled report's purpose or contents.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#description CcScheduledReport#description}
    */
    readonly description?: string;
    /**
    * The name of the scheduled report.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#name CcScheduledReport#name}
    */
    readonly name: string;
    /**
    * The schedule configuration that defines when and how often the report is generated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#schedule_config CcScheduledReport#schedule_config}
    */
    readonly scheduleConfig: CcScheduledReport.ScheduleConfigProperty;
    /**
    * The ARN of the IAM role that the scheduled report uses to execute. AWS Billing and Cost Management Dashboards assumes this IAM role while executing the scheduled report.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#scheduled_report_execution_role_arn CcScheduledReport#scheduled_report_execution_role_arn}
    */
    readonly scheduledReportExecutionRoleArn: string;
    /**
    * The tags applied to the scheduled report.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#tags CcScheduledReport#tags}
    */
    readonly tags?: CcScheduledReport.TagsProperty[] | cdktn.IResolvable;
    /**
    * The date range override applied to widgets in the scheduled report.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#widget_date_range_override CcScheduledReport#widget_date_range_override}
    */
    readonly widgetDateRangeOverride?: CcScheduledReport.WidgetDateRangeOverrideProperty;
    /**
    * The list of widget identifiers included in the scheduled report. If not specified, all widgets in the dashboard are included.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#widget_ids CcScheduledReport#widget_ids}
    */
    readonly widgetIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report awscc_bcm_scheduled_report}
*/
export class CcScheduledReport extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bcm_scheduled_report";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScheduledReport resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScheduledReport to import
    * @param importFromId The id of the existing CcScheduledReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScheduledReport to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bcm_scheduled_report", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report awscc_bcm_scheduled_report} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScheduledReportProps
    */
    public constructor(scope: Construct, id: string, config: CcScheduledReportProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bcm_scheduled_report',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._dashboardArn = config.dashboardArn;
        this._description = config.description;
        this._name = config.name;
        this._scheduleConfig.internalValue = config.scheduleConfig;
        this._scheduledReportExecutionRoleArn = config.scheduledReportExecutionRoleArn;
        this._tags.internalValue = config.tags;
        this._widgetDateRangeOverride.internalValue = config.widgetDateRangeOverride;
        this._widgetIds = config.widgetIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // dashboard_arn - computed: false, optional: false, required: true
    private _dashboardArn?: string; 
    public get dashboardArn() {
        return this.getStringAttribute('dashboard_arn');
    }
    public set dashboardArn(value: string) {
        this._dashboardArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dashboardArnInput() {
        return this._dashboardArn;
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

    // health_status - computed: true, optional: false, required: false
    private _healthStatus = new CcScheduledReport.HealthStatusPropertyOutputReference(this, "health_status");
    public get healthStatus() {
        return this._healthStatus;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // schedule_config - computed: false, optional: false, required: true
    private _scheduleConfig = new CcScheduledReport.ScheduleConfigPropertyOutputReference(this, "schedule_config");
    public get scheduleConfig() {
        return this._scheduleConfig;
    }
    public putScheduleConfig(value: CcScheduledReport.ScheduleConfigProperty) {
        this._scheduleConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleConfigInput() {
        return this._scheduleConfig.internalValue;
    }

    // scheduled_report_execution_role_arn - computed: false, optional: false, required: true
    private _scheduledReportExecutionRoleArn?: string; 
    public get scheduledReportExecutionRoleArn() {
        return this.getStringAttribute('scheduled_report_execution_role_arn');
    }
    public set scheduledReportExecutionRoleArn(value: string) {
        this._scheduledReportExecutionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledReportExecutionRoleArnInput() {
        return this._scheduledReportExecutionRoleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcScheduledReport.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcScheduledReport.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // widget_date_range_override - computed: true, optional: true, required: false
    private _widgetDateRangeOverride = new CcScheduledReport.WidgetDateRangeOverridePropertyOutputReference(this, "widget_date_range_override");
    public get widgetDateRangeOverride() {
        return this._widgetDateRangeOverride;
    }
    public putWidgetDateRangeOverride(value: CcScheduledReport.WidgetDateRangeOverrideProperty) {
        this._widgetDateRangeOverride.internalValue = value;
    }
    public resetWidgetDateRangeOverride() {
        this._widgetDateRangeOverride.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get widgetDateRangeOverrideInput() {
        return this._widgetDateRangeOverride.internalValue;
    }

    // widget_ids - computed: true, optional: true, required: false
    private _widgetIds?: string[]; 
    public get widgetIds() {
        return this.getListAttribute('widget_ids');
    }
    public set widgetIds(value: string[]) {
        this._widgetIds = value;
    }
    public resetWidgetIds() {
        this._widgetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get widgetIdsInput() {
        return this._widgetIds;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            dashboard_arn: cdktn.stringToTerraform(this._dashboardArn),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            schedule_config: ccScheduledReportScheduleConfigPropertyToTerraform(this._scheduleConfig.internalValue),
            scheduled_report_execution_role_arn: cdktn.stringToTerraform(this._scheduledReportExecutionRoleArn),
            tags: cdktn.listMapper(ccScheduledReportTagsPropertyToTerraform, false)(this._tags.internalValue),
            widget_date_range_override: ccScheduledReportWidgetDateRangeOverridePropertyToTerraform(this._widgetDateRangeOverride.internalValue),
            widget_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._widgetIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            dashboard_arn: {
                value: cdktn.stringToHclTerraform(this._dashboardArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            schedule_config: {
                value: ccScheduledReportScheduleConfigPropertyToHclTerraform(this._scheduleConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScheduledReport.ScheduleConfigProperty",
            },
            scheduled_report_execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._scheduledReportExecutionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccScheduledReportTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcScheduledReport.TagsPropertyList",
            },
            widget_date_range_override: {
                value: ccScheduledReportWidgetDateRangeOverridePropertyToHclTerraform(this._widgetDateRangeOverride.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScheduledReport.WidgetDateRangeOverrideProperty",
            },
            widget_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._widgetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScheduledReportHealthStatusPropertyToTerraform(struct?: CcScheduledReport.HealthStatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccScheduledReportHealthStatusPropertyToHclTerraform(struct?: CcScheduledReport.HealthStatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccScheduledReportSchedulePeriodPropertyToTerraform(struct?: CcScheduledReport.SchedulePeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.stringToTerraform(struct!.endTime),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccScheduledReportSchedulePeriodPropertyToHclTerraform(struct?: CcScheduledReport.SchedulePeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.stringToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccScheduledReportScheduleConfigPropertyToTerraform(struct?: CcScheduledReport.ScheduleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
        schedule_expression_time_zone: cdktn.stringToTerraform(struct!.scheduleExpressionTimeZone),
        schedule_period: ccScheduledReportSchedulePeriodPropertyToTerraform(struct!.schedulePeriod),
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccScheduledReportScheduleConfigPropertyToHclTerraform(struct?: CcScheduledReport.ScheduleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        schedule_expression: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_expression_time_zone: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpressionTimeZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_period: {
            value: ccScheduledReportSchedulePeriodPropertyToHclTerraform(struct!.schedulePeriod),
            isBlock: true,
            type: "struct",
            storageClassType: "SchedulePeriodProperty",
        },
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduledReportTagsPropertyToTerraform(struct?: CcScheduledReport.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScheduledReportTagsPropertyToHclTerraform(struct?: CcScheduledReport.TagsProperty | cdktn.IResolvable): any {
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


export function ccScheduledReportEndTimePropertyToTerraform(struct?: CcScheduledReport.EndTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScheduledReportEndTimePropertyToHclTerraform(struct?: CcScheduledReport.EndTimeProperty | cdktn.IResolvable): any {
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
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduledReportStartTimePropertyToTerraform(struct?: CcScheduledReport.StartTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccScheduledReportStartTimePropertyToHclTerraform(struct?: CcScheduledReport.StartTimeProperty | cdktn.IResolvable): any {
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
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduledReportWidgetDateRangeOverridePropertyToTerraform(struct?: CcScheduledReport.WidgetDateRangeOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: ccScheduledReportEndTimePropertyToTerraform(struct!.endTime),
        start_time: ccScheduledReportStartTimePropertyToTerraform(struct!.startTime),
    }
}


export function ccScheduledReportWidgetDateRangeOverridePropertyToHclTerraform(struct?: CcScheduledReport.WidgetDateRangeOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: ccScheduledReportEndTimePropertyToHclTerraform(struct!.endTime),
            isBlock: true,
            type: "struct",
            storageClassType: "EndTimeProperty",
        },
        start_time: {
            value: ccScheduledReportStartTimePropertyToHclTerraform(struct!.startTime),
            isBlock: true,
            type: "struct",
            storageClassType: "StartTimeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcScheduledReport {
export interface HealthStatusProperty {
}
export class HealthStatusPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HealthStatusProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthStatusProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // last_refreshed_at - computed: true, optional: false, required: false
    public get lastRefreshedAt() {
        return this.getStringAttribute('last_refreshed_at');
    }

    // status_code - computed: true, optional: false, required: false
    public get statusCode() {
        return this.getStringAttribute('status_code');
    }
}
export interface SchedulePeriodProperty {
    /**
    * The time at which the schedule stops being active.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#end_time CcScheduledReport#end_time}
    */
    readonly endTime?: string;
    /**
    * The time at which the schedule becomes active.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#start_time CcScheduledReport#start_time}
    */
    readonly startTime?: string;
}
export class SchedulePeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchedulePeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchedulePeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._startTime = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string; 
    public get endTime() {
        return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
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
}
export interface ScheduleConfigProperty {
    /**
    * The schedule expression that specifies when to trigger the scheduled report run. This value must be a cron expression consisting of six fields separated by white spaces: cron(minutes hours day_of_month month day_of_week year).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#schedule_expression CcScheduledReport#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * The time zone for the schedule expression, for example, UTC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#schedule_expression_time_zone CcScheduledReport#schedule_expression_time_zone}
    */
    readonly scheduleExpressionTimeZone?: string;
    /**
    * The time period during which the schedule is active.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#schedule_period CcScheduledReport#schedule_period}
    */
    readonly schedulePeriod?: SchedulePeriodProperty;
    /**
    * The state of the schedule. ENABLED means the scheduled report runs according to its schedule expression. DISABLED means the scheduled report is paused and will not run until re-enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#state CcScheduledReport#state}
    */
    readonly state?: string;
}
export class ScheduleConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scheduleExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        if (this._scheduleExpressionTimeZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpressionTimeZone = this._scheduleExpressionTimeZone;
        }
        if (this._schedulePeriod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedulePeriod = this._schedulePeriod?.internalValue;
        }
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scheduleExpression = undefined;
            this._scheduleExpressionTimeZone = undefined;
            this._schedulePeriod.internalValue = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scheduleExpression = value.scheduleExpression;
            this._scheduleExpressionTimeZone = value.scheduleExpressionTimeZone;
            this._schedulePeriod.internalValue = value.schedulePeriod;
            this._state = value.state;
        }
    }

    // schedule_expression - computed: true, optional: true, required: false
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
        this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }

    // schedule_expression_time_zone - computed: true, optional: true, required: false
    private _scheduleExpressionTimeZone?: string; 
    public get scheduleExpressionTimeZone() {
        return this.getStringAttribute('schedule_expression_time_zone');
    }
    public set scheduleExpressionTimeZone(value: string) {
        this._scheduleExpressionTimeZone = value;
    }
    public resetScheduleExpressionTimeZone() {
        this._scheduleExpressionTimeZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionTimeZoneInput() {
        return this._scheduleExpressionTimeZone;
    }

    // schedule_period - computed: true, optional: true, required: false
    private _schedulePeriod = new SchedulePeriodPropertyOutputReference(this, "schedule_period");
    public get schedulePeriod() {
        return this._schedulePeriod;
    }
    public putSchedulePeriod(value: SchedulePeriodProperty) {
        this._schedulePeriod.internalValue = value;
    }
    public resetSchedulePeriod() {
        this._schedulePeriod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulePeriodInput() {
        return this._schedulePeriod.internalValue;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }
}
export interface TagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#key CcScheduledReport#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#value CcScheduledReport#value}
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
export interface EndTimeProperty {
    /**
    * Whether Value is an absolute date or a duration relative to now.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#type CcScheduledReport#type}
    */
    readonly type?: string;
    /**
    * The date, or an ISO 8601 duration when Type is RELATIVE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#value CcScheduledReport#value}
    */
    readonly value?: string;
}
export class EndTimePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndTimeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EndTimeProperty | cdktn.IResolvable | undefined) {
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
export interface StartTimeProperty {
    /**
    * Whether Value is an absolute date or a duration relative to now.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#type CcScheduledReport#type}
    */
    readonly type?: string;
    /**
    * The date, or an ISO 8601 duration when Type is RELATIVE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#value CcScheduledReport#value}
    */
    readonly value?: string;
}
export class StartTimePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StartTimeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: StartTimeProperty | cdktn.IResolvable | undefined) {
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
export interface WidgetDateRangeOverrideProperty {
    /**
    * The end of the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#end_time CcScheduledReport#end_time}
    */
    readonly endTime?: EndTimeProperty;
    /**
    * The start of the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/bcm_scheduled_report#start_time CcScheduledReport#start_time}
    */
    readonly startTime?: StartTimeProperty;
}
export class WidgetDateRangeOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WidgetDateRangeOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime?.internalValue;
        }
        if (this._startTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WidgetDateRangeOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime.internalValue = undefined;
            this._startTime.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime.internalValue = value.endTime;
            this._startTime.internalValue = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime = new EndTimePropertyOutputReference(this, "end_time");
    public get endTime() {
        return this._endTime;
    }
    public putEndTime(value: EndTimeProperty) {
        this._endTime.internalValue = value;
    }
    public resetEndTime() {
        this._endTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime.internalValue;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime = new StartTimePropertyOutputReference(this, "start_time");
    public get startTime() {
        return this._startTime;
    }
    public putStartTime(value: StartTimeProperty) {
        this._startTime.internalValue = value;
    }
    public resetStartTime() {
        this._startTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime.internalValue;
    }
}
}
