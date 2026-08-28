// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRotationProps extends cdktn.TerraformMetaArguments {
    /**
    * Members of the rotation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#contact_ids CcRotation#contact_ids}
    */
    readonly contactIds: string[];
    /**
    * Name of the Rotation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#name CcRotation#name}
    */
    readonly name: string;
    /**
    * Information about when an on-call rotation is in effect and how long the rotation period lasts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#recurrence CcRotation#recurrence}
    */
    readonly recurrence: CcRotation.RecurrenceSettingsProperty;
    /**
    * Start time of the first shift of Oncall Schedule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#start_time CcRotation#start_time}
    */
    readonly startTime: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#tags CcRotation#tags}
    */
    readonly tags?: CcRotation.TagProperty[] | cdktn.IResolvable;
    /**
    * TimeZone Identifier for the Oncall Schedule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#time_zone_id CcRotation#time_zone_id}
    */
    readonly timeZoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation awscc_ssmcontacts_rotation}
*/
export class CcRotation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssmcontacts_rotation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRotation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRotation to import
    * @param importFromId The id of the existing CcRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRotation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmcontacts_rotation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation awscc_ssmcontacts_rotation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRotationProps
    */
    public constructor(scope: Construct, id: string, config: CcRotationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssmcontacts_rotation',
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
        this._contactIds = config.contactIds;
        this._name = config.name;
        this._recurrence.internalValue = config.recurrence;
        this._startTime = config.startTime;
        this._tags.internalValue = config.tags;
        this._timeZoneId = config.timeZoneId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // contact_ids - computed: false, optional: false, required: true
    private _contactIds?: string[]; 
    public get contactIds() {
        return this.getListAttribute('contact_ids');
    }
    public set contactIds(value: string[]) {
        this._contactIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contactIdsInput() {
        return this._contactIds;
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

    // recurrence - computed: false, optional: false, required: true
    private _recurrence = new CcRotation.RecurrenceSettingsPropertyOutputReference(this, "recurrence");
    public get recurrence() {
        return this._recurrence;
    }
    public putRecurrence(value: CcRotation.RecurrenceSettingsProperty) {
        this._recurrence.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recurrenceInput() {
        return this._recurrence.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRotation.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRotation.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // time_zone_id - computed: false, optional: false, required: true
    private _timeZoneId?: string; 
    public get timeZoneId() {
        return this.getStringAttribute('time_zone_id');
    }
    public set timeZoneId(value: string) {
        this._timeZoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get timeZoneIdInput() {
        return this._timeZoneId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            contact_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._contactIds),
            name: cdktn.stringToTerraform(this._name),
            recurrence: ccRotationRecurrenceSettingsPropertyToTerraform(this._recurrence.internalValue),
            start_time: cdktn.stringToTerraform(this._startTime),
            tags: cdktn.listMapper(ccRotationTagPropertyToTerraform, false)(this._tags.internalValue),
            time_zone_id: cdktn.stringToTerraform(this._timeZoneId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            contact_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._contactIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recurrence: {
                value: ccRotationRecurrenceSettingsPropertyToHclTerraform(this._recurrence.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRotation.RecurrenceSettingsProperty",
            },
            start_time: {
                value: cdktn.stringToHclTerraform(this._startTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRotationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRotation.TagPropertyList",
            },
            time_zone_id: {
                value: cdktn.stringToHclTerraform(this._timeZoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRotationMonthlySettingPropertyToTerraform(struct?: CcRotation.MonthlySettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        day_of_month: cdktn.numberToTerraform(struct!.dayOfMonth),
        hand_off_time: cdktn.stringToTerraform(struct!.handOffTime),
    }
}


export function ccRotationMonthlySettingPropertyToHclTerraform(struct?: CcRotation.MonthlySettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        day_of_month: {
            value: cdktn.numberToHclTerraform(struct!.dayOfMonth),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        hand_off_time: {
            value: cdktn.stringToHclTerraform(struct!.handOffTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRotationCoverageTimePropertyToTerraform(struct?: CcRotation.CoverageTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.stringToTerraform(struct!.endTime),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccRotationCoverageTimePropertyToHclTerraform(struct?: CcRotation.CoverageTimeProperty | cdktn.IResolvable): any {
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


export function ccRotationShiftCoveragePropertyToTerraform(struct?: CcRotation.ShiftCoverageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        coverage_times: cdktn.listMapper(ccRotationCoverageTimePropertyToTerraform, false)(struct!.coverageTimes),
        day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    }
}


export function ccRotationShiftCoveragePropertyToHclTerraform(struct?: CcRotation.ShiftCoverageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        coverage_times: {
            value: cdktn.listMapperHcl(ccRotationCoverageTimePropertyToHclTerraform, false)(struct!.coverageTimes),
            isBlock: true,
            type: "list",
            storageClassType: "CoverageTimePropertyList",
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


export function ccRotationWeeklySettingPropertyToTerraform(struct?: CcRotation.WeeklySettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
        hand_off_time: cdktn.stringToTerraform(struct!.handOffTime),
    }
}


export function ccRotationWeeklySettingPropertyToHclTerraform(struct?: CcRotation.WeeklySettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        day_of_week: {
            value: cdktn.stringToHclTerraform(struct!.dayOfWeek),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hand_off_time: {
            value: cdktn.stringToHclTerraform(struct!.handOffTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRotationRecurrenceSettingsPropertyToTerraform(struct?: CcRotation.RecurrenceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        daily_settings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dailySettings),
        monthly_settings: cdktn.listMapper(ccRotationMonthlySettingPropertyToTerraform, false)(struct!.monthlySettings),
        number_of_on_calls: cdktn.numberToTerraform(struct!.numberOfOnCalls),
        recurrence_multiplier: cdktn.numberToTerraform(struct!.recurrenceMultiplier),
        shift_coverages: cdktn.listMapper(ccRotationShiftCoveragePropertyToTerraform, false)(struct!.shiftCoverages),
        weekly_settings: cdktn.listMapper(ccRotationWeeklySettingPropertyToTerraform, false)(struct!.weeklySettings),
    }
}


export function ccRotationRecurrenceSettingsPropertyToHclTerraform(struct?: CcRotation.RecurrenceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        daily_settings: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dailySettings),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        monthly_settings: {
            value: cdktn.listMapperHcl(ccRotationMonthlySettingPropertyToHclTerraform, false)(struct!.monthlySettings),
            isBlock: true,
            type: "list",
            storageClassType: "MonthlySettingPropertyList",
        },
        number_of_on_calls: {
            value: cdktn.numberToHclTerraform(struct!.numberOfOnCalls),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        recurrence_multiplier: {
            value: cdktn.numberToHclTerraform(struct!.recurrenceMultiplier),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        shift_coverages: {
            value: cdktn.listMapperHcl(ccRotationShiftCoveragePropertyToHclTerraform, false)(struct!.shiftCoverages),
            isBlock: true,
            type: "list",
            storageClassType: "ShiftCoveragePropertyList",
        },
        weekly_settings: {
            value: cdktn.listMapperHcl(ccRotationWeeklySettingPropertyToHclTerraform, false)(struct!.weeklySettings),
            isBlock: true,
            type: "list",
            storageClassType: "WeeklySettingPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRotationTagPropertyToTerraform(struct?: CcRotation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRotationTagPropertyToHclTerraform(struct?: CcRotation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRotation {
export interface MonthlySettingProperty {
    /**
    * The day of the month when monthly recurring on-call rotations begin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#day_of_month CcRotation#day_of_month}
    */
    readonly dayOfMonth?: number;
    /**
    * Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#hand_off_time CcRotation#hand_off_time}
    */
    readonly handOffTime?: string;
}
export class MonthlySettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MonthlySettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dayOfMonth !== undefined) {
            hasAnyValues = true;
            internalValueResult.dayOfMonth = this._dayOfMonth;
        }
        if (this._handOffTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.handOffTime = this._handOffTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonthlySettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dayOfMonth = undefined;
            this._handOffTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dayOfMonth = value.dayOfMonth;
            this._handOffTime = value.handOffTime;
        }
    }

    // day_of_month - computed: true, optional: true, required: false
    private _dayOfMonth?: number; 
    public get dayOfMonth() {
        return this.getNumberAttribute('day_of_month');
    }
    public set dayOfMonth(value: number) {
        this._dayOfMonth = value;
    }
    public resetDayOfMonth() {
        this._dayOfMonth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dayOfMonthInput() {
        return this._dayOfMonth;
    }

    // hand_off_time - computed: true, optional: true, required: false
    private _handOffTime?: string; 
    public get handOffTime() {
        return this.getStringAttribute('hand_off_time');
    }
    public set handOffTime(value: string) {
        this._handOffTime = value;
    }
    public resetHandOffTime() {
        this._handOffTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get handOffTimeInput() {
        return this._handOffTime;
    }
}

export class MonthlySettingPropertyList extends cdktn.ComplexList {
    public internalValue? : MonthlySettingProperty[] | cdktn.IResolvable

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
    public get(index: number): MonthlySettingPropertyOutputReference {
        return new MonthlySettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CoverageTimeProperty {
    /**
    * Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#end_time CcRotation#end_time}
    */
    readonly endTime?: string;
    /**
    * Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#start_time CcRotation#start_time}
    */
    readonly startTime?: string;
}
export class CoverageTimePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CoverageTimeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CoverageTimeProperty | cdktn.IResolvable | undefined) {
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

export class CoverageTimePropertyList extends cdktn.ComplexList {
    public internalValue? : CoverageTimeProperty[] | cdktn.IResolvable

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
    public get(index: number): CoverageTimePropertyOutputReference {
        return new CoverageTimePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ShiftCoverageProperty {
    /**
    * Information about when an on-call shift begins and ends.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#coverage_times CcRotation#coverage_times}
    */
    readonly coverageTimes?: CoverageTimeProperty[] | cdktn.IResolvable;
    /**
    * The day of the week when weekly recurring on-call shift rotations begin. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#day_of_week CcRotation#day_of_week}
    */
    readonly dayOfWeek?: string;
}
export class ShiftCoveragePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ShiftCoverageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._coverageTimes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.coverageTimes = this._coverageTimes?.internalValue;
        }
        if (this._dayOfWeek !== undefined) {
            hasAnyValues = true;
            internalValueResult.dayOfWeek = this._dayOfWeek;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShiftCoverageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._coverageTimes.internalValue = undefined;
            this._dayOfWeek = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._coverageTimes.internalValue = value.coverageTimes;
            this._dayOfWeek = value.dayOfWeek;
        }
    }

    // coverage_times - computed: true, optional: true, required: false
    private _coverageTimes = new CoverageTimePropertyList(this, "coverage_times", false);
    public get coverageTimes() {
        return this._coverageTimes;
    }
    public putCoverageTimes(value: CoverageTimeProperty[] | cdktn.IResolvable) {
        this._coverageTimes.internalValue = value;
    }
    public resetCoverageTimes() {
        this._coverageTimes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coverageTimesInput() {
        return this._coverageTimes.internalValue;
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

export class ShiftCoveragePropertyList extends cdktn.ComplexList {
    public internalValue? : ShiftCoverageProperty[] | cdktn.IResolvable

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
    public get(index: number): ShiftCoveragePropertyOutputReference {
        return new ShiftCoveragePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WeeklySettingProperty {
    /**
    * The day of the week when weekly recurring on-call shift rotations begin. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#day_of_week CcRotation#day_of_week}
    */
    readonly dayOfWeek?: string;
    /**
    * Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#hand_off_time CcRotation#hand_off_time}
    */
    readonly handOffTime?: string;
}
export class WeeklySettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WeeklySettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dayOfWeek !== undefined) {
            hasAnyValues = true;
            internalValueResult.dayOfWeek = this._dayOfWeek;
        }
        if (this._handOffTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.handOffTime = this._handOffTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WeeklySettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dayOfWeek = undefined;
            this._handOffTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dayOfWeek = value.dayOfWeek;
            this._handOffTime = value.handOffTime;
        }
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

    // hand_off_time - computed: true, optional: true, required: false
    private _handOffTime?: string; 
    public get handOffTime() {
        return this.getStringAttribute('hand_off_time');
    }
    public set handOffTime(value: string) {
        this._handOffTime = value;
    }
    public resetHandOffTime() {
        this._handOffTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get handOffTimeInput() {
        return this._handOffTime;
    }
}

export class WeeklySettingPropertyList extends cdktn.ComplexList {
    public internalValue? : WeeklySettingProperty[] | cdktn.IResolvable

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
    public get(index: number): WeeklySettingPropertyOutputReference {
        return new WeeklySettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RecurrenceSettingsProperty {
    /**
    * Information about on-call rotations that recur daily.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#daily_settings CcRotation#daily_settings}
    */
    readonly dailySettings?: string[];
    /**
    * Information about on-call rotations that recur monthly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#monthly_settings CcRotation#monthly_settings}
    */
    readonly monthlySettings?: MonthlySettingProperty[] | cdktn.IResolvable;
    /**
    * Number of Oncalls per shift.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#number_of_on_calls CcRotation#number_of_on_calls}
    */
    readonly numberOfOnCalls?: number;
    /**
    * The number of days, weeks, or months a single rotation lasts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#recurrence_multiplier CcRotation#recurrence_multiplier}
    */
    readonly recurrenceMultiplier?: number;
    /**
    * Information about the days of the week included in on-call rotation coverage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#shift_coverages CcRotation#shift_coverages}
    */
    readonly shiftCoverages?: ShiftCoverageProperty[] | cdktn.IResolvable;
    /**
    * Information about on-call rotations that recur weekly.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#weekly_settings CcRotation#weekly_settings}
    */
    readonly weeklySettings?: WeeklySettingProperty[] | cdktn.IResolvable;
}
export class RecurrenceSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecurrenceSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dailySettings !== undefined) {
            hasAnyValues = true;
            internalValueResult.dailySettings = this._dailySettings;
        }
        if (this._monthlySettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monthlySettings = this._monthlySettings?.internalValue;
        }
        if (this._numberOfOnCalls !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfOnCalls = this._numberOfOnCalls;
        }
        if (this._recurrenceMultiplier !== undefined) {
            hasAnyValues = true;
            internalValueResult.recurrenceMultiplier = this._recurrenceMultiplier;
        }
        if (this._shiftCoverages?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.shiftCoverages = this._shiftCoverages?.internalValue;
        }
        if (this._weeklySettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.weeklySettings = this._weeklySettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecurrenceSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dailySettings = undefined;
            this._monthlySettings.internalValue = undefined;
            this._numberOfOnCalls = undefined;
            this._recurrenceMultiplier = undefined;
            this._shiftCoverages.internalValue = undefined;
            this._weeklySettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dailySettings = value.dailySettings;
            this._monthlySettings.internalValue = value.monthlySettings;
            this._numberOfOnCalls = value.numberOfOnCalls;
            this._recurrenceMultiplier = value.recurrenceMultiplier;
            this._shiftCoverages.internalValue = value.shiftCoverages;
            this._weeklySettings.internalValue = value.weeklySettings;
        }
    }

    // daily_settings - computed: true, optional: true, required: false
    private _dailySettings?: string[]; 
    public get dailySettings() {
        return this.getListAttribute('daily_settings');
    }
    public set dailySettings(value: string[]) {
        this._dailySettings = value;
    }
    public resetDailySettings() {
        this._dailySettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dailySettingsInput() {
        return this._dailySettings;
    }

    // monthly_settings - computed: true, optional: true, required: false
    private _monthlySettings = new MonthlySettingPropertyList(this, "monthly_settings", false);
    public get monthlySettings() {
        return this._monthlySettings;
    }
    public putMonthlySettings(value: MonthlySettingProperty[] | cdktn.IResolvable) {
        this._monthlySettings.internalValue = value;
    }
    public resetMonthlySettings() {
        this._monthlySettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monthlySettingsInput() {
        return this._monthlySettings.internalValue;
    }

    // number_of_on_calls - computed: true, optional: true, required: false
    private _numberOfOnCalls?: number; 
    public get numberOfOnCalls() {
        return this.getNumberAttribute('number_of_on_calls');
    }
    public set numberOfOnCalls(value: number) {
        this._numberOfOnCalls = value;
    }
    public resetNumberOfOnCalls() {
        this._numberOfOnCalls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfOnCallsInput() {
        return this._numberOfOnCalls;
    }

    // recurrence_multiplier - computed: true, optional: true, required: false
    private _recurrenceMultiplier?: number; 
    public get recurrenceMultiplier() {
        return this.getNumberAttribute('recurrence_multiplier');
    }
    public set recurrenceMultiplier(value: number) {
        this._recurrenceMultiplier = value;
    }
    public resetRecurrenceMultiplier() {
        this._recurrenceMultiplier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recurrenceMultiplierInput() {
        return this._recurrenceMultiplier;
    }

    // shift_coverages - computed: true, optional: true, required: false
    private _shiftCoverages = new ShiftCoveragePropertyList(this, "shift_coverages", false);
    public get shiftCoverages() {
        return this._shiftCoverages;
    }
    public putShiftCoverages(value: ShiftCoverageProperty[] | cdktn.IResolvable) {
        this._shiftCoverages.internalValue = value;
    }
    public resetShiftCoverages() {
        this._shiftCoverages.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shiftCoveragesInput() {
        return this._shiftCoverages.internalValue;
    }

    // weekly_settings - computed: true, optional: true, required: false
    private _weeklySettings = new WeeklySettingPropertyList(this, "weekly_settings", false);
    public get weeklySettings() {
        return this._weeklySettings;
    }
    public putWeeklySettings(value: WeeklySettingProperty[] | cdktn.IResolvable) {
        this._weeklySettings.internalValue = value;
    }
    public resetWeeklySettings() {
        this._weeklySettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weeklySettingsInput() {
        return this._weeklySettings.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#key CcRotation#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ssmcontacts_rotation#value CcRotation#value}
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
