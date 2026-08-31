// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCisScanConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Name of the scan
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#scan_name CcCisScanConfiguration#scan_name}
    */
    readonly scanName: string;
    /**
    * Choose a Schedule cadence
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#schedule CcCisScanConfiguration#schedule}
    */
    readonly schedule: CcCisScanConfiguration.ScheduleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#security_level CcCisScanConfiguration#security_level}
    */
    readonly securityLevel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#tags CcCisScanConfiguration#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#targets CcCisScanConfiguration#targets}
    */
    readonly targets: CcCisScanConfiguration.CisTargetsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration}
*/
export class CcCisScanConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_inspectorv2_cis_scan_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCisScanConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCisScanConfiguration to import
    * @param importFromId The id of the existing CcCisScanConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCisScanConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_cis_scan_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCisScanConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcCisScanConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_inspectorv2_cis_scan_configuration',
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
        this._scanName = config.scanName;
        this._schedule.internalValue = config.schedule;
        this._securityLevel = config.securityLevel;
        this._tags = config.tags;
        this._targets.internalValue = config.targets;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // scan_name - computed: false, optional: false, required: true
    private _scanName?: string; 
    public get scanName() {
        return this.getStringAttribute('scan_name');
    }
    public set scanName(value: string) {
        this._scanName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scanNameInput() {
        return this._scanName;
    }

    // schedule - computed: false, optional: false, required: true
    private _schedule = new CcCisScanConfiguration.SchedulePropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: CcCisScanConfiguration.ScheduleProperty) {
        this._schedule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }

    // security_level - computed: false, optional: false, required: true
    private _securityLevel?: string; 
    public get securityLevel() {
        return this.getStringAttribute('security_level');
    }
    public set securityLevel(value: string) {
        this._securityLevel = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityLevelInput() {
        return this._securityLevel;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // targets - computed: false, optional: false, required: true
    private _targets = new CcCisScanConfiguration.CisTargetsPropertyOutputReference(this, "targets");
    public get targets() {
        return this._targets;
    }
    public putTargets(value: CcCisScanConfiguration.CisTargetsProperty) {
        this._targets.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            scan_name: cdktn.stringToTerraform(this._scanName),
            schedule: ccCisScanConfigurationSchedulePropertyToTerraform(this._schedule.internalValue),
            security_level: cdktn.stringToTerraform(this._securityLevel),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            targets: ccCisScanConfigurationCisTargetsPropertyToTerraform(this._targets.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            scan_name: {
                value: cdktn.stringToHclTerraform(this._scanName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule: {
                value: ccCisScanConfigurationSchedulePropertyToHclTerraform(this._schedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCisScanConfiguration.ScheduleProperty",
            },
            security_level: {
                value: cdktn.stringToHclTerraform(this._securityLevel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            targets: {
                value: ccCisScanConfigurationCisTargetsPropertyToHclTerraform(this._targets.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCisScanConfiguration.CisTargetsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCisScanConfigurationTimePropertyToTerraform(struct?: CcCisScanConfiguration.TimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        time_of_day: cdktn.stringToTerraform(struct!.timeOfDay),
        time_zone: cdktn.stringToTerraform(struct!.timeZone),
    }
}


export function ccCisScanConfigurationTimePropertyToHclTerraform(struct?: CcCisScanConfiguration.TimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        time_of_day: {
            value: cdktn.stringToHclTerraform(struct!.timeOfDay),
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


export function ccCisScanConfigurationDailySchedulePropertyToTerraform(struct?: CcCisScanConfiguration.DailyScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        start_time: ccCisScanConfigurationTimePropertyToTerraform(struct!.startTime),
    }
}


export function ccCisScanConfigurationDailySchedulePropertyToHclTerraform(struct?: CcCisScanConfiguration.DailyScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        start_time: {
            value: ccCisScanConfigurationTimePropertyToHclTerraform(struct!.startTime),
            isBlock: true,
            type: "struct",
            storageClassType: "TimeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCisScanConfigurationScheduleMonthlyStartTimePropertyToTerraform(struct?: CcCisScanConfiguration.ScheduleMonthlyStartTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        time_of_day: cdktn.stringToTerraform(struct!.timeOfDay),
        time_zone: cdktn.stringToTerraform(struct!.timeZone),
    }
}


export function ccCisScanConfigurationScheduleMonthlyStartTimePropertyToHclTerraform(struct?: CcCisScanConfiguration.ScheduleMonthlyStartTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        time_of_day: {
            value: cdktn.stringToHclTerraform(struct!.timeOfDay),
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


export function ccCisScanConfigurationMonthlySchedulePropertyToTerraform(struct?: CcCisScanConfiguration.MonthlyScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        day: cdktn.stringToTerraform(struct!.day),
        start_time: ccCisScanConfigurationScheduleMonthlyStartTimePropertyToTerraform(struct!.startTime),
    }
}


export function ccCisScanConfigurationMonthlySchedulePropertyToHclTerraform(struct?: CcCisScanConfiguration.MonthlyScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        day: {
            value: cdktn.stringToHclTerraform(struct!.day),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_time: {
            value: ccCisScanConfigurationScheduleMonthlyStartTimePropertyToHclTerraform(struct!.startTime),
            isBlock: true,
            type: "struct",
            storageClassType: "ScheduleMonthlyStartTimeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCisScanConfigurationScheduleWeeklyStartTimePropertyToTerraform(struct?: CcCisScanConfiguration.ScheduleWeeklyStartTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        time_of_day: cdktn.stringToTerraform(struct!.timeOfDay),
        time_zone: cdktn.stringToTerraform(struct!.timeZone),
    }
}


export function ccCisScanConfigurationScheduleWeeklyStartTimePropertyToHclTerraform(struct?: CcCisScanConfiguration.ScheduleWeeklyStartTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        time_of_day: {
            value: cdktn.stringToHclTerraform(struct!.timeOfDay),
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


export function ccCisScanConfigurationWeeklySchedulePropertyToTerraform(struct?: CcCisScanConfiguration.WeeklyScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        days: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.days),
        start_time: ccCisScanConfigurationScheduleWeeklyStartTimePropertyToTerraform(struct!.startTime),
    }
}


export function ccCisScanConfigurationWeeklySchedulePropertyToHclTerraform(struct?: CcCisScanConfiguration.WeeklyScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        days: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.days),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        start_time: {
            value: ccCisScanConfigurationScheduleWeeklyStartTimePropertyToHclTerraform(struct!.startTime),
            isBlock: true,
            type: "struct",
            storageClassType: "ScheduleWeeklyStartTimeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCisScanConfigurationSchedulePropertyToTerraform(struct?: CcCisScanConfiguration.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        daily: ccCisScanConfigurationDailySchedulePropertyToTerraform(struct!.daily),
        monthly: ccCisScanConfigurationMonthlySchedulePropertyToTerraform(struct!.monthly),
        one_time: cdktn.stringToTerraform(struct!.oneTime),
        weekly: ccCisScanConfigurationWeeklySchedulePropertyToTerraform(struct!.weekly),
    }
}


export function ccCisScanConfigurationSchedulePropertyToHclTerraform(struct?: CcCisScanConfiguration.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        daily: {
            value: ccCisScanConfigurationDailySchedulePropertyToHclTerraform(struct!.daily),
            isBlock: true,
            type: "struct",
            storageClassType: "DailyScheduleProperty",
        },
        monthly: {
            value: ccCisScanConfigurationMonthlySchedulePropertyToHclTerraform(struct!.monthly),
            isBlock: true,
            type: "struct",
            storageClassType: "MonthlyScheduleProperty",
        },
        one_time: {
            value: cdktn.stringToHclTerraform(struct!.oneTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weekly: {
            value: ccCisScanConfigurationWeeklySchedulePropertyToHclTerraform(struct!.weekly),
            isBlock: true,
            type: "struct",
            storageClassType: "WeeklyScheduleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCisScanConfigurationCisTargetsPropertyToTerraform(struct?: CcCisScanConfiguration.CisTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
        target_resource_tags: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(struct!.targetResourceTags),
    }
}


export function ccCisScanConfigurationCisTargetsPropertyToHclTerraform(struct?: CcCisScanConfiguration.CisTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        target_resource_tags: {
            value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(struct!.targetResourceTags),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCisScanConfiguration {
export interface TimeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day CcCisScanConfiguration#time_of_day}
    */
    readonly timeOfDay?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone CcCisScanConfiguration#time_zone}
    */
    readonly timeZone?: string;
}
export class TimePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timeOfDay !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeOfDay = this._timeOfDay;
        }
        if (this._timeZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeZone = this._timeZone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timeOfDay = undefined;
            this._timeZone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timeOfDay = value.timeOfDay;
            this._timeZone = value.timeZone;
        }
    }

    // time_of_day - computed: true, optional: true, required: false
    private _timeOfDay?: string; 
    public get timeOfDay() {
        return this.getStringAttribute('time_of_day');
    }
    public set timeOfDay(value: string) {
        this._timeOfDay = value;
    }
    public resetTimeOfDay() {
        this._timeOfDay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeOfDayInput() {
        return this._timeOfDay;
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
export interface DailyScheduleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#start_time CcCisScanConfiguration#start_time}
    */
    readonly startTime?: TimeProperty;
}
export class DailySchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DailyScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._startTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DailyScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._startTime.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._startTime.internalValue = value.startTime;
        }
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime = new TimePropertyOutputReference(this, "start_time");
    public get startTime() {
        return this._startTime;
    }
    public putStartTime(value: TimeProperty) {
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
export interface ScheduleMonthlyStartTimeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day CcCisScanConfiguration#time_of_day}
    */
    readonly timeOfDay?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone CcCisScanConfiguration#time_zone}
    */
    readonly timeZone?: string;
}
export class ScheduleMonthlyStartTimePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleMonthlyStartTimeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timeOfDay !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeOfDay = this._timeOfDay;
        }
        if (this._timeZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeZone = this._timeZone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleMonthlyStartTimeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timeOfDay = undefined;
            this._timeZone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timeOfDay = value.timeOfDay;
            this._timeZone = value.timeZone;
        }
    }

    // time_of_day - computed: true, optional: true, required: false
    private _timeOfDay?: string; 
    public get timeOfDay() {
        return this.getStringAttribute('time_of_day');
    }
    public set timeOfDay(value: string) {
        this._timeOfDay = value;
    }
    public resetTimeOfDay() {
        this._timeOfDay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeOfDayInput() {
        return this._timeOfDay;
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
export interface MonthlyScheduleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#day CcCisScanConfiguration#day}
    */
    readonly day?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#start_time CcCisScanConfiguration#start_time}
    */
    readonly startTime?: ScheduleMonthlyStartTimeProperty;
}
export class MonthlySchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonthlyScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._day !== undefined) {
            hasAnyValues = true;
            internalValueResult.day = this._day;
        }
        if (this._startTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonthlyScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._day = undefined;
            this._startTime.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._day = value.day;
            this._startTime.internalValue = value.startTime;
        }
    }

    // day - computed: true, optional: true, required: false
    private _day?: string; 
    public get day() {
        return this.getStringAttribute('day');
    }
    public set day(value: string) {
        this._day = value;
    }
    public resetDay() {
        this._day = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dayInput() {
        return this._day;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime = new ScheduleMonthlyStartTimePropertyOutputReference(this, "start_time");
    public get startTime() {
        return this._startTime;
    }
    public putStartTime(value: ScheduleMonthlyStartTimeProperty) {
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
export interface ScheduleWeeklyStartTimeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day CcCisScanConfiguration#time_of_day}
    */
    readonly timeOfDay?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone CcCisScanConfiguration#time_zone}
    */
    readonly timeZone?: string;
}
export class ScheduleWeeklyStartTimePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleWeeklyStartTimeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timeOfDay !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeOfDay = this._timeOfDay;
        }
        if (this._timeZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeZone = this._timeZone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleWeeklyStartTimeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timeOfDay = undefined;
            this._timeZone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timeOfDay = value.timeOfDay;
            this._timeZone = value.timeZone;
        }
    }

    // time_of_day - computed: true, optional: true, required: false
    private _timeOfDay?: string; 
    public get timeOfDay() {
        return this.getStringAttribute('time_of_day');
    }
    public set timeOfDay(value: string) {
        this._timeOfDay = value;
    }
    public resetTimeOfDay() {
        this._timeOfDay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeOfDayInput() {
        return this._timeOfDay;
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
export interface WeeklyScheduleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#days CcCisScanConfiguration#days}
    */
    readonly days?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#start_time CcCisScanConfiguration#start_time}
    */
    readonly startTime?: ScheduleWeeklyStartTimeProperty;
}
export class WeeklySchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WeeklyScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._days !== undefined) {
            hasAnyValues = true;
            internalValueResult.days = this._days;
        }
        if (this._startTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WeeklyScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._days = undefined;
            this._startTime.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._days = value.days;
            this._startTime.internalValue = value.startTime;
        }
    }

    // days - computed: true, optional: true, required: false
    private _days?: string[]; 
    public get days() {
        return this.getListAttribute('days');
    }
    public set days(value: string[]) {
        this._days = value;
    }
    public resetDays() {
        this._days = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysInput() {
        return this._days;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime = new ScheduleWeeklyStartTimePropertyOutputReference(this, "start_time");
    public get startTime() {
        return this._startTime;
    }
    public putStartTime(value: ScheduleWeeklyStartTimeProperty) {
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
export interface ScheduleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#daily CcCisScanConfiguration#daily}
    */
    readonly daily?: DailyScheduleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#monthly CcCisScanConfiguration#monthly}
    */
    readonly monthly?: MonthlyScheduleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#one_time CcCisScanConfiguration#one_time}
    */
    readonly oneTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#weekly CcCisScanConfiguration#weekly}
    */
    readonly weekly?: WeeklyScheduleProperty;
}
export class SchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._daily?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.daily = this._daily?.internalValue;
        }
        if (this._monthly?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monthly = this._monthly?.internalValue;
        }
        if (this._oneTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.oneTime = this._oneTime;
        }
        if (this._weekly?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.weekly = this._weekly?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._daily.internalValue = undefined;
            this._monthly.internalValue = undefined;
            this._oneTime = undefined;
            this._weekly.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._daily.internalValue = value.daily;
            this._monthly.internalValue = value.monthly;
            this._oneTime = value.oneTime;
            this._weekly.internalValue = value.weekly;
        }
    }

    // daily - computed: true, optional: true, required: false
    private _daily = new DailySchedulePropertyOutputReference(this, "daily");
    public get daily() {
        return this._daily;
    }
    public putDaily(value: DailyScheduleProperty) {
        this._daily.internalValue = value;
    }
    public resetDaily() {
        this._daily.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dailyInput() {
        return this._daily.internalValue;
    }

    // monthly - computed: true, optional: true, required: false
    private _monthly = new MonthlySchedulePropertyOutputReference(this, "monthly");
    public get monthly() {
        return this._monthly;
    }
    public putMonthly(value: MonthlyScheduleProperty) {
        this._monthly.internalValue = value;
    }
    public resetMonthly() {
        this._monthly.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monthlyInput() {
        return this._monthly.internalValue;
    }

    // one_time - computed: true, optional: true, required: false
    private _oneTime?: string; 
    public get oneTime() {
        return this.getStringAttribute('one_time');
    }
    public set oneTime(value: string) {
        this._oneTime = value;
    }
    public resetOneTime() {
        this._oneTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oneTimeInput() {
        return this._oneTime;
    }

    // weekly - computed: true, optional: true, required: false
    private _weekly = new WeeklySchedulePropertyOutputReference(this, "weekly");
    public get weekly() {
        return this._weekly;
    }
    public putWeekly(value: WeeklyScheduleProperty) {
        this._weekly.internalValue = value;
    }
    public resetWeekly() {
        this._weekly.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weeklyInput() {
        return this._weekly.internalValue;
    }
}
export interface CisTargetsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#account_ids CcCisScanConfiguration#account_ids}
    */
    readonly accountIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#target_resource_tags CcCisScanConfiguration#target_resource_tags}
    */
    readonly targetResourceTags: { [key: string]: string[] } | cdktn.IResolvable;
}
export class CisTargetsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CisTargetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountIds = this._accountIds;
        }
        if (this._targetResourceTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetResourceTags = this._targetResourceTags;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CisTargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountIds = undefined;
            this._targetResourceTags = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountIds = value.accountIds;
            this._targetResourceTags = value.targetResourceTags;
        }
    }

    // account_ids - computed: false, optional: false, required: true
    private _accountIds?: string[]; 
    public get accountIds() {
        return this.getListAttribute('account_ids');
    }
    public set accountIds(value: string[]) {
        this._accountIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdsInput() {
        return this._accountIds;
    }

    // target_resource_tags - computed: false, optional: false, required: true
    private _targetResourceTags?: { [key: string]: string[] } | cdktn.IResolvable; 
    public get targetResourceTags() {
        return this.interpolationForAttribute('target_resource_tags');
    }
    public set targetResourceTags(value: { [key: string]: string[] } | cdktn.IResolvable) {
        this._targetResourceTags = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetResourceTagsInput() {
        return this._targetResourceTags;
    }
}
}
