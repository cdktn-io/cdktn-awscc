// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInstanceEventWindowProps extends cdktn.TerraformMetaArguments {
    /**
    * The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#cron_expression CcInstanceEventWindow#cron_expression}
    */
    readonly cronExpression?: string;
    /**
    * The name of the event window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#name CcInstanceEventWindow#name}
    */
    readonly name?: string;
    /**
    * The tags applied to the event window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#tags CcInstanceEventWindow#tags}
    */
    readonly tags?: CcInstanceEventWindow.TagsProperty[] | cdktn.IResolvable;
    /**
    * The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#time_ranges CcInstanceEventWindow#time_ranges}
    */
    readonly timeRanges?: CcInstanceEventWindow.TimeRangesProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window awscc_ec2_instance_event_window}
*/
export class CcInstanceEventWindow extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_instance_event_window";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInstanceEventWindow resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInstanceEventWindow to import
    * @param importFromId The id of the existing CcInstanceEventWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInstanceEventWindow to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_instance_event_window", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window awscc_ec2_instance_event_window} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInstanceEventWindowProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcInstanceEventWindowProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_instance_event_window',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.103.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._cronExpression = config.cronExpression;
        this._name = config.name;
        this._tags.internalValue = config.tags;
        this._timeRanges.internalValue = config.timeRanges;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // cron_expression - computed: true, optional: true, required: false
    private _cronExpression?: string; 
    public get cronExpression() {
        return this.getStringAttribute('cron_expression');
    }
    public set cronExpression(value: string) {
        this._cronExpression = value;
    }
    public resetCronExpression() {
        this._cronExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cronExpressionInput() {
        return this._cronExpression;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_event_window_id - computed: true, optional: false, required: false
    public get instanceEventWindowId() {
        return this.getStringAttribute('instance_event_window_id');
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

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInstanceEventWindow.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInstanceEventWindow.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // time_ranges - computed: true, optional: true, required: false
    private _timeRanges = new CcInstanceEventWindow.TimeRangesPropertyList(this, "time_ranges", false);
    public get timeRanges() {
        return this._timeRanges;
    }
    public putTimeRanges(value: CcInstanceEventWindow.TimeRangesProperty[] | cdktn.IResolvable) {
        this._timeRanges.internalValue = value;
    }
    public resetTimeRanges() {
        this._timeRanges.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeRangesInput() {
        return this._timeRanges.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cron_expression: cdktn.stringToTerraform(this._cronExpression),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccInstanceEventWindowTagsPropertyToTerraform, false)(this._tags.internalValue),
            time_ranges: cdktn.listMapper(ccInstanceEventWindowTimeRangesPropertyToTerraform, false)(this._timeRanges.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cron_expression: {
                value: cdktn.stringToHclTerraform(this._cronExpression),
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
            tags: {
                value: cdktn.listMapperHcl(ccInstanceEventWindowTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcInstanceEventWindow.TagsPropertyList",
            },
            time_ranges: {
                value: cdktn.listMapperHcl(ccInstanceEventWindowTimeRangesPropertyToHclTerraform, false)(this._timeRanges.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstanceEventWindow.TimeRangesPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInstanceEventWindowTagsPropertyToTerraform(struct?: CcInstanceEventWindow.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInstanceEventWindowTagsPropertyToHclTerraform(struct?: CcInstanceEventWindow.TagsProperty | cdktn.IResolvable): any {
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


export function ccInstanceEventWindowTimeRangesPropertyToTerraform(struct?: CcInstanceEventWindow.TimeRangesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_hour: cdktn.numberToTerraform(struct!.endHour),
        end_week_day: cdktn.stringToTerraform(struct!.endWeekDay),
        start_hour: cdktn.numberToTerraform(struct!.startHour),
        start_week_day: cdktn.stringToTerraform(struct!.startWeekDay),
    }
}


export function ccInstanceEventWindowTimeRangesPropertyToHclTerraform(struct?: CcInstanceEventWindow.TimeRangesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_hour: {
            value: cdktn.numberToHclTerraform(struct!.endHour),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        end_week_day: {
            value: cdktn.stringToHclTerraform(struct!.endWeekDay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_hour: {
            value: cdktn.numberToHclTerraform(struct!.startHour),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_week_day: {
            value: cdktn.stringToHclTerraform(struct!.startWeekDay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcInstanceEventWindow {
export interface TagsProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#key CcInstanceEventWindow#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#value CcInstanceEventWindow#value}
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
export interface TimeRangesProperty {
    /**
    * The hour when the time range ends.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_hour CcInstanceEventWindow#end_hour}
    */
    readonly endHour?: number;
    /**
    * The day on which the time range ends.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_week_day CcInstanceEventWindow#end_week_day}
    */
    readonly endWeekDay?: string;
    /**
    * The hour when the time range begins.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_hour CcInstanceEventWindow#start_hour}
    */
    readonly startHour?: number;
    /**
    * The day on which the time range begins.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_week_day CcInstanceEventWindow#start_week_day}
    */
    readonly startWeekDay?: string;
}
export class TimeRangesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TimeRangesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endHour !== undefined) {
            hasAnyValues = true;
            internalValueResult.endHour = this._endHour;
        }
        if (this._endWeekDay !== undefined) {
            hasAnyValues = true;
            internalValueResult.endWeekDay = this._endWeekDay;
        }
        if (this._startHour !== undefined) {
            hasAnyValues = true;
            internalValueResult.startHour = this._startHour;
        }
        if (this._startWeekDay !== undefined) {
            hasAnyValues = true;
            internalValueResult.startWeekDay = this._startWeekDay;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeRangesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endHour = undefined;
            this._endWeekDay = undefined;
            this._startHour = undefined;
            this._startWeekDay = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endHour = value.endHour;
            this._endWeekDay = value.endWeekDay;
            this._startHour = value.startHour;
            this._startWeekDay = value.startWeekDay;
        }
    }

    // end_hour - computed: true, optional: true, required: false
    private _endHour?: number; 
    public get endHour() {
        return this.getNumberAttribute('end_hour');
    }
    public set endHour(value: number) {
        this._endHour = value;
    }
    public resetEndHour() {
        this._endHour = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endHourInput() {
        return this._endHour;
    }

    // end_week_day - computed: true, optional: true, required: false
    private _endWeekDay?: string; 
    public get endWeekDay() {
        return this.getStringAttribute('end_week_day');
    }
    public set endWeekDay(value: string) {
        this._endWeekDay = value;
    }
    public resetEndWeekDay() {
        this._endWeekDay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endWeekDayInput() {
        return this._endWeekDay;
    }

    // start_hour - computed: true, optional: true, required: false
    private _startHour?: number; 
    public get startHour() {
        return this.getNumberAttribute('start_hour');
    }
    public set startHour(value: number) {
        this._startHour = value;
    }
    public resetStartHour() {
        this._startHour = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startHourInput() {
        return this._startHour;
    }

    // start_week_day - computed: true, optional: true, required: false
    private _startWeekDay?: string; 
    public get startWeekDay() {
        return this.getStringAttribute('start_week_day');
    }
    public set startWeekDay(value: string) {
        this._startWeekDay = value;
    }
    public resetStartWeekDay() {
        this._startWeekDay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startWeekDayInput() {
        return this._startWeekDay;
    }
}

export class TimeRangesPropertyList extends cdktn.ComplexList {
    public internalValue? : TimeRangesProperty[] | cdktn.IResolvable

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
    public get(index: number): TimeRangesPropertyOutputReference {
        return new TimeRangesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
