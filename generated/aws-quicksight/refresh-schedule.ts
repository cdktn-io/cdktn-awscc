// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRefreshScheduleProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#aws_account_id CcRefreshSchedule#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#data_set_id CcRefreshSchedule#data_set_id}
    */
    readonly dataSetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#schedule CcRefreshSchedule#schedule}
    */
    readonly schedule?: CcRefreshSchedule.RefreshScheduleMapProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule awscc_quicksight_refresh_schedule}
*/
export class CcRefreshSchedule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_refresh_schedule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRefreshSchedule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRefreshSchedule to import
    * @param importFromId The id of the existing CcRefreshSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRefreshSchedule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_refresh_schedule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule awscc_quicksight_refresh_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRefreshScheduleProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcRefreshScheduleProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_refresh_schedule',
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
        this._awsAccountId = config.awsAccountId;
        this._dataSetId = config.dataSetId;
        this._schedule.internalValue = config.schedule;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: true, optional: true, required: false
    private _awsAccountId?: string; 
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string) {
        this._awsAccountId = value;
    }
    public resetAwsAccountId() {
        this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId;
    }

    // data_set_id - computed: true, optional: true, required: false
    private _dataSetId?: string; 
    public get dataSetId() {
        return this.getStringAttribute('data_set_id');
    }
    public set dataSetId(value: string) {
        this._dataSetId = value;
    }
    public resetDataSetId() {
        this._dataSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSetIdInput() {
        return this._dataSetId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // schedule - computed: true, optional: true, required: false
    private _schedule = new CcRefreshSchedule.RefreshScheduleMapPropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: CcRefreshSchedule.RefreshScheduleMapProperty) {
        this._schedule.internalValue = value;
    }
    public resetSchedule() {
        this._schedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
            data_set_id: cdktn.stringToTerraform(this._dataSetId),
            schedule: ccRefreshScheduleRefreshScheduleMapPropertyToTerraform(this._schedule.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aws_account_id: {
                value: cdktn.stringToHclTerraform(this._awsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_set_id: {
                value: cdktn.stringToHclTerraform(this._dataSetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule: {
                value: ccRefreshScheduleRefreshScheduleMapPropertyToHclTerraform(this._schedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRefreshSchedule.RefreshScheduleMapProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRefreshScheduleRefreshOnDayPropertyToTerraform(struct?: CcRefreshSchedule.RefreshOnDayProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        day_of_month: cdktn.stringToTerraform(struct!.dayOfMonth),
        day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    }
}


export function ccRefreshScheduleRefreshOnDayPropertyToHclTerraform(struct?: CcRefreshSchedule.RefreshOnDayProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        day_of_month: {
            value: cdktn.stringToHclTerraform(struct!.dayOfMonth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        day_of_week: {
            value: cdktn.stringToHclTerraform(struct!.dayOfWeek),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRefreshScheduleScheduleFrequencyPropertyToTerraform(struct?: CcRefreshSchedule.ScheduleFrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        interval: cdktn.stringToTerraform(struct!.interval),
        refresh_on_day: ccRefreshScheduleRefreshOnDayPropertyToTerraform(struct!.refreshOnDay),
        time_of_the_day: cdktn.stringToTerraform(struct!.timeOfTheDay),
        time_zone: cdktn.stringToTerraform(struct!.timeZone),
    }
}


export function ccRefreshScheduleScheduleFrequencyPropertyToHclTerraform(struct?: CcRefreshSchedule.ScheduleFrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        interval: {
            value: cdktn.stringToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        refresh_on_day: {
            value: ccRefreshScheduleRefreshOnDayPropertyToHclTerraform(struct!.refreshOnDay),
            isBlock: true,
            type: "struct",
            storageClassType: "RefreshOnDayProperty",
        },
        time_of_the_day: {
            value: cdktn.stringToHclTerraform(struct!.timeOfTheDay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_zone: {
            value: cdktn.stringToHclTerraform(struct!.timeZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRefreshScheduleRefreshScheduleMapPropertyToTerraform(struct?: CcRefreshSchedule.RefreshScheduleMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        refresh_type: cdktn.stringToTerraform(struct!.refreshType),
        schedule_frequency: ccRefreshScheduleScheduleFrequencyPropertyToTerraform(struct!.scheduleFrequency),
        schedule_id: cdktn.stringToTerraform(struct!.scheduleId),
        start_after_date_time: cdktn.stringToTerraform(struct!.startAfterDateTime),
    }
}


export function ccRefreshScheduleRefreshScheduleMapPropertyToHclTerraform(struct?: CcRefreshSchedule.RefreshScheduleMapProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        refresh_type: {
            value: cdktn.stringToHclTerraform(struct!.refreshType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_frequency: {
            value: ccRefreshScheduleScheduleFrequencyPropertyToHclTerraform(struct!.scheduleFrequency),
            isBlock: true,
            type: "struct",
            storageClassType: "ScheduleFrequencyProperty",
        },
        schedule_id: {
            value: cdktn.stringToHclTerraform(struct!.scheduleId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_after_date_time: {
            value: cdktn.stringToHclTerraform(struct!.startAfterDateTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRefreshSchedule {
export interface RefreshOnDayProperty {
    /**
    * <p>The Day Of Month for scheduled refresh.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#day_of_month CcRefreshSchedule#day_of_month}
    */
    readonly dayOfMonth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#day_of_week CcRefreshSchedule#day_of_week}
    */
    readonly dayOfWeek?: string;
}
export class RefreshOnDayPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RefreshOnDayProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dayOfMonth !== undefined) {
            hasAnyValues = true;
            internalValueResult.dayOfMonth = this._dayOfMonth;
        }
        if (this._dayOfWeek !== undefined) {
            hasAnyValues = true;
            internalValueResult.dayOfWeek = this._dayOfWeek;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RefreshOnDayProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dayOfMonth = undefined;
            this._dayOfWeek = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dayOfMonth = value.dayOfMonth;
            this._dayOfWeek = value.dayOfWeek;
        }
    }

    // day_of_month - computed: true, optional: true, required: false
    private _dayOfMonth?: string; 
    public get dayOfMonth() {
        return this.getStringAttribute('day_of_month');
    }
    public set dayOfMonth(value: string) {
        this._dayOfMonth = value;
    }
    public resetDayOfMonth() {
        this._dayOfMonth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dayOfMonthInput() {
        return this._dayOfMonth;
    }

    // day_of_week - computed: true, optional: true, required: false
    private _dayOfWeek?: string; 
    public get dayOfWeek() {
        return this.getStringAttribute('day_of_week');
    }
    public set dayOfWeek(value: string) {
        this._dayOfWeek = value;
    }
    public resetDayOfWeek() {
        this._dayOfWeek = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dayOfWeekInput() {
        return this._dayOfWeek;
    }
}
export interface ScheduleFrequencyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#interval CcRefreshSchedule#interval}
    */
    readonly interval?: string;
    /**
    * <p>The day scheduled for refresh.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#refresh_on_day CcRefreshSchedule#refresh_on_day}
    */
    readonly refreshOnDay?: RefreshOnDayProperty;
    /**
    * <p>The time of the day for scheduled refresh.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#time_of_the_day CcRefreshSchedule#time_of_the_day}
    */
    readonly timeOfTheDay?: string;
    /**
    * <p>The timezone for scheduled refresh.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#time_zone CcRefreshSchedule#time_zone}
    */
    readonly timeZone?: string;
}
export class ScheduleFrequencyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleFrequencyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._refreshOnDay?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshOnDay = this._refreshOnDay?.internalValue;
        }
        if (this._timeOfTheDay !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeOfTheDay = this._timeOfTheDay;
        }
        if (this._timeZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeZone = this._timeZone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleFrequencyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._interval = undefined;
            this._refreshOnDay.internalValue = undefined;
            this._timeOfTheDay = undefined;
            this._timeZone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._interval = value.interval;
            this._refreshOnDay.internalValue = value.refreshOnDay;
            this._timeOfTheDay = value.timeOfTheDay;
            this._timeZone = value.timeZone;
        }
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: string; 
    public get interval() {
        return this.getStringAttribute('interval');
    }
    public set interval(value: string) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // refresh_on_day - computed: true, optional: true, required: false
    private _refreshOnDay = new RefreshOnDayPropertyOutputReference(this, "refresh_on_day");
    public get refreshOnDay() {
        return this._refreshOnDay;
    }
    public putRefreshOnDay(value: RefreshOnDayProperty) {
        this._refreshOnDay.internalValue = value;
    }
    public resetRefreshOnDay() {
        this._refreshOnDay.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshOnDayInput() {
        return this._refreshOnDay.internalValue;
    }

    // time_of_the_day - computed: true, optional: true, required: false
    private _timeOfTheDay?: string; 
    public get timeOfTheDay() {
        return this.getStringAttribute('time_of_the_day');
    }
    public set timeOfTheDay(value: string) {
        this._timeOfTheDay = value;
    }
    public resetTimeOfTheDay() {
        this._timeOfTheDay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeOfTheDayInput() {
        return this._timeOfTheDay;
    }

    // time_zone - computed: true, optional: true, required: false
    private _timeZone?: string; 
    public get timeZone() {
        return this.getStringAttribute('time_zone');
    }
    public set timeZone(value: string) {
        this._timeZone = value;
    }
    public resetTimeZone() {
        this._timeZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeZoneInput() {
        return this._timeZone;
    }
}
export interface RefreshScheduleMapProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#refresh_type CcRefreshSchedule#refresh_type}
    */
    readonly refreshType?: string;
    /**
    * <p>Information about the schedule frequency.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#schedule_frequency CcRefreshSchedule#schedule_frequency}
    */
    readonly scheduleFrequency?: ScheduleFrequencyProperty;
    /**
    * <p>An unique identifier for the refresh schedule.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#schedule_id CcRefreshSchedule#schedule_id}
    */
    readonly scheduleId?: string;
    /**
    * <p>The date time after which refresh is to be scheduled</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_refresh_schedule#start_after_date_time CcRefreshSchedule#start_after_date_time}
    */
    readonly startAfterDateTime?: string;
}
export class RefreshScheduleMapPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RefreshScheduleMapProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._refreshType !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshType = this._refreshType;
        }
        if (this._scheduleFrequency?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleFrequency = this._scheduleFrequency?.internalValue;
        }
        if (this._scheduleId !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleId = this._scheduleId;
        }
        if (this._startAfterDateTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startAfterDateTime = this._startAfterDateTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RefreshScheduleMapProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._refreshType = undefined;
            this._scheduleFrequency.internalValue = undefined;
            this._scheduleId = undefined;
            this._startAfterDateTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._refreshType = value.refreshType;
            this._scheduleFrequency.internalValue = value.scheduleFrequency;
            this._scheduleId = value.scheduleId;
            this._startAfterDateTime = value.startAfterDateTime;
        }
    }

    // refresh_type - computed: true, optional: true, required: false
    private _refreshType?: string; 
    public get refreshType() {
        return this.getStringAttribute('refresh_type');
    }
    public set refreshType(value: string) {
        this._refreshType = value;
    }
    public resetRefreshType() {
        this._refreshType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshTypeInput() {
        return this._refreshType;
    }

    // schedule_frequency - computed: true, optional: true, required: false
    private _scheduleFrequency = new ScheduleFrequencyPropertyOutputReference(this, "schedule_frequency");
    public get scheduleFrequency() {
        return this._scheduleFrequency;
    }
    public putScheduleFrequency(value: ScheduleFrequencyProperty) {
        this._scheduleFrequency.internalValue = value;
    }
    public resetScheduleFrequency() {
        this._scheduleFrequency.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleFrequencyInput() {
        return this._scheduleFrequency.internalValue;
    }

    // schedule_id - computed: true, optional: true, required: false
    private _scheduleId?: string; 
    public get scheduleId() {
        return this.getStringAttribute('schedule_id');
    }
    public set scheduleId(value: string) {
        this._scheduleId = value;
    }
    public resetScheduleId() {
        this._scheduleId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleIdInput() {
        return this._scheduleId;
    }

    // start_after_date_time - computed: true, optional: true, required: false
    private _startAfterDateTime?: string; 
    public get startAfterDateTime() {
        return this.getStringAttribute('start_after_date_time');
    }
    public set startAfterDateTime(value: string) {
        this._startAfterDateTime = value;
    }
    public resetStartAfterDateTime() {
        this._startAfterDateTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startAfterDateTimeInput() {
        return this._startAfterDateTime;
    }
}
}
