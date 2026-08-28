// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDashboardProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the dashboard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#name CcDashboard#name}
    */
    readonly name?: string;
    /**
    * Configures the automatic refresh schedule for the dashboard. Includes the frequency unit (DAYS or HOURS) and value, as well as the status (ENABLED or DISABLED) of the refresh schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#refresh_schedule CcDashboard#refresh_schedule}
    */
    readonly refreshSchedule?: CcDashboard.RefreshScheduleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#tags CcDashboard#tags}
    */
    readonly tags?: CcDashboard.TagProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether the dashboard is protected from termination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#termination_protection_enabled CcDashboard#termination_protection_enabled}
    */
    readonly terminationProtectionEnabled?: boolean | cdktn.IResolvable;
    /**
    * List of widgets on the dashboard
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#widgets CcDashboard#widgets}
    */
    readonly widgets?: CcDashboard.WidgetProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard awscc_cloudtrail_dashboard}
*/
export class CcDashboard extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudtrail_dashboard";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDashboard resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDashboard to import
    * @param importFromId The id of the existing CcDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDashboard to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudtrail_dashboard", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard awscc_cloudtrail_dashboard} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDashboardProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDashboardProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudtrail_dashboard',
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
        this._name = config.name;
        this._refreshSchedule.internalValue = config.refreshSchedule;
        this._tags.internalValue = config.tags;
        this._terminationProtectionEnabled = config.terminationProtectionEnabled;
        this._widgets.internalValue = config.widgets;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_timestamp - computed: true, optional: false, required: false
    public get createdTimestamp() {
        return this.getStringAttribute('created_timestamp');
    }

    // dashboard_arn - computed: true, optional: false, required: false
    public get dashboardArn() {
        return this.getStringAttribute('dashboard_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // refresh_schedule - computed: true, optional: true, required: false
    private _refreshSchedule = new CcDashboard.RefreshSchedulePropertyOutputReference(this, "refresh_schedule");
    public get refreshSchedule() {
        return this._refreshSchedule;
    }
    public putRefreshSchedule(value: CcDashboard.RefreshScheduleProperty) {
        this._refreshSchedule.internalValue = value;
    }
    public resetRefreshSchedule() {
        this._refreshSchedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshScheduleInput() {
        return this._refreshSchedule.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDashboard.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDashboard.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // termination_protection_enabled - computed: true, optional: true, required: false
    private _terminationProtectionEnabled?: boolean | cdktn.IResolvable; 
    public get terminationProtectionEnabled() {
        return this.getBooleanAttribute('termination_protection_enabled');
    }
    public set terminationProtectionEnabled(value: boolean | cdktn.IResolvable) {
        this._terminationProtectionEnabled = value;
    }
    public resetTerminationProtectionEnabled() {
        this._terminationProtectionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminationProtectionEnabledInput() {
        return this._terminationProtectionEnabled;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // updated_timestamp - computed: true, optional: false, required: false
    public get updatedTimestamp() {
        return this.getStringAttribute('updated_timestamp');
    }

    // widgets - computed: true, optional: true, required: false
    private _widgets = new CcDashboard.WidgetPropertyList(this, "widgets", false);
    public get widgets() {
        return this._widgets;
    }
    public putWidgets(value: CcDashboard.WidgetProperty[] | cdktn.IResolvable) {
        this._widgets.internalValue = value;
    }
    public resetWidgets() {
        this._widgets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get widgetsInput() {
        return this._widgets.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            name: cdktn.stringToTerraform(this._name),
            refresh_schedule: ccDashboardRefreshSchedulePropertyToTerraform(this._refreshSchedule.internalValue),
            tags: cdktn.listMapper(ccDashboardTagPropertyToTerraform, false)(this._tags.internalValue),
            termination_protection_enabled: cdktn.booleanToTerraform(this._terminationProtectionEnabled),
            widgets: cdktn.listMapper(ccDashboardWidgetPropertyToTerraform, false)(this._widgets.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            refresh_schedule: {
                value: ccDashboardRefreshSchedulePropertyToHclTerraform(this._refreshSchedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDashboard.RefreshScheduleProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDashboardTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDashboard.TagPropertyList",
            },
            termination_protection_enabled: {
                value: cdktn.booleanToHclTerraform(this._terminationProtectionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            widgets: {
                value: cdktn.listMapperHcl(ccDashboardWidgetPropertyToHclTerraform, false)(this._widgets.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDashboard.WidgetPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDashboardFrequencyPropertyToTerraform(struct?: CcDashboard.FrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccDashboardFrequencyPropertyToHclTerraform(struct?: CcDashboard.FrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDashboardRefreshSchedulePropertyToTerraform(struct?: CcDashboard.RefreshScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        frequency: ccDashboardFrequencyPropertyToTerraform(struct!.frequency),
        status: cdktn.stringToTerraform(struct!.status),
        time_of_day: cdktn.stringToTerraform(struct!.timeOfDay),
    }
}


export function ccDashboardRefreshSchedulePropertyToHclTerraform(struct?: CcDashboard.RefreshScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        frequency: {
            value: ccDashboardFrequencyPropertyToHclTerraform(struct!.frequency),
            isBlock: true,
            type: "struct",
            storageClassType: "FrequencyProperty",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_of_day: {
            value: cdktn.stringToHclTerraform(struct!.timeOfDay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDashboardTagPropertyToTerraform(struct?: CcDashboard.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDashboardTagPropertyToHclTerraform(struct?: CcDashboard.TagProperty | cdktn.IResolvable): any {
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


export function ccDashboardWidgetPropertyToTerraform(struct?: CcDashboard.WidgetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        query_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.queryParameters),
        query_statement: cdktn.stringToTerraform(struct!.queryStatement),
        view_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.viewProperties),
    }
}


export function ccDashboardWidgetPropertyToHclTerraform(struct?: CcDashboard.WidgetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        query_parameters: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.queryParameters),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        query_statement: {
            value: cdktn.stringToHclTerraform(struct!.queryStatement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        view_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.viewProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDashboard {
export interface FrequencyProperty {
    /**
    * The frequency unit. Supported values are HOURS and DAYS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#unit CcDashboard#unit}
    */
    readonly unit?: string;
    /**
    * The frequency value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#value CcDashboard#value}
    */
    readonly value?: number;
}
export class FrequencyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FrequencyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FrequencyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface RefreshScheduleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#frequency CcDashboard#frequency}
    */
    readonly frequency?: FrequencyProperty;
    /**
    * The status of the schedule. Supported values are ENABLED and DISABLED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#status CcDashboard#status}
    */
    readonly status?: string;
    /**
    * StartTime of the automatic schedule refresh.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#time_of_day CcDashboard#time_of_day}
    */
    readonly timeOfDay?: string;
}
export class RefreshSchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RefreshScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._frequency?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.frequency = this._frequency?.internalValue;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._timeOfDay !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeOfDay = this._timeOfDay;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RefreshScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._frequency.internalValue = undefined;
            this._status = undefined;
            this._timeOfDay = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._frequency.internalValue = value.frequency;
            this._status = value.status;
            this._timeOfDay = value.timeOfDay;
        }
    }

    // frequency - computed: true, optional: true, required: false
    private _frequency = new FrequencyPropertyOutputReference(this, "frequency");
    public get frequency() {
        return this._frequency;
    }
    public putFrequency(value: FrequencyProperty) {
        this._frequency.internalValue = value;
    }
    public resetFrequency() {
        this._frequency.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frequencyInput() {
        return this._frequency.internalValue;
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
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#key CcDashboard#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#value CcDashboard#value}
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
export interface WidgetProperty {
    /**
    * The placeholder keys in the QueryStatement. For example: $StartTime$, $EndTime$, $Period$.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#query_parameters CcDashboard#query_parameters}
    */
    readonly queryParameters?: string[];
    /**
    * The SQL query statement on one or more event data stores.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#query_statement CcDashboard#query_statement}
    */
    readonly queryStatement?: string;
    /**
    * The view properties of the widget.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_dashboard#view_properties CcDashboard#view_properties}
    */
    readonly viewProperties?: { [key: string]: string };
}
export class WidgetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WidgetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._queryParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryParameters = this._queryParameters;
        }
        if (this._queryStatement !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStatement = this._queryStatement;
        }
        if (this._viewProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.viewProperties = this._viewProperties;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WidgetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._queryParameters = undefined;
            this._queryStatement = undefined;
            this._viewProperties = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._queryParameters = value.queryParameters;
            this._queryStatement = value.queryStatement;
            this._viewProperties = value.viewProperties;
        }
    }

    // query_parameters - computed: true, optional: true, required: false
    private _queryParameters?: string[]; 
    public get queryParameters() {
        return this.getListAttribute('query_parameters');
    }
    public set queryParameters(value: string[]) {
        this._queryParameters = value;
    }
    public resetQueryParameters() {
        this._queryParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryParametersInput() {
        return this._queryParameters;
    }

    // query_statement - computed: true, optional: true, required: false
    private _queryStatement?: string; 
    public get queryStatement() {
        return this.getStringAttribute('query_statement');
    }
    public set queryStatement(value: string) {
        this._queryStatement = value;
    }
    public resetQueryStatement() {
        this._queryStatement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStatementInput() {
        return this._queryStatement;
    }

    // view_properties - computed: true, optional: true, required: false
    private _viewProperties?: { [key: string]: string }; 
    public get viewProperties() {
        return this.getStringMapAttribute('view_properties');
    }
    public set viewProperties(value: { [key: string]: string }) {
        this._viewProperties = value;
    }
    public resetViewProperties() {
        this._viewProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get viewPropertiesInput() {
        return this._viewProperties;
    }
}

export class WidgetPropertyList extends cdktn.ComplexList {
    public internalValue? : WidgetProperty[] | cdktn.IResolvable

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
    public get(index: number): WidgetPropertyOutputReference {
        return new WidgetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
