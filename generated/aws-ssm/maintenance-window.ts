// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMaintenanceWindowProps extends cdktn.TerraformMetaArguments {
    /**
    * Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets. If enabled, then you must specify the unregistered instances (by instance ID) when you register a task with the maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#allow_unassociated_targets CcMaintenanceWindow#allow_unassociated_targets}
    */
    readonly allowUnassociatedTargets: boolean | cdktn.IResolvable;
    /**
    * The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#cutoff CcMaintenanceWindow#cutoff}
    */
    readonly cutoff: number;
    /**
    * A description of the maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#description CcMaintenanceWindow#description}
    */
    readonly description?: string;
    /**
    * The duration of the maintenance window in hours.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#duration CcMaintenanceWindow#duration}
    */
    readonly duration: number;
    /**
    * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#end_date CcMaintenanceWindow#end_date}
    */
    readonly endDate?: string;
    /**
    * The name of the maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#name CcMaintenanceWindow#name}
    */
    readonly name: string;
    /**
    * The schedule of the maintenance window in the form of a cron or rate expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#schedule CcMaintenanceWindow#schedule}
    */
    readonly schedule: string;
    /**
    * The number of days to wait to run a maintenance window after the scheduled cron expression date and time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#schedule_offset CcMaintenanceWindow#schedule_offset}
    */
    readonly scheduleOffset?: number;
    /**
    * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#schedule_timezone CcMaintenanceWindow#schedule_timezone}
    */
    readonly scheduleTimezone?: string;
    /**
    * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. StartDate allows you to delay activation of the maintenance window until the specified future date.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#start_date CcMaintenanceWindow#start_date}
    */
    readonly startDate?: string;
    /**
    * Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#tags CcMaintenanceWindow#tags}
    */
    readonly tags?: CcMaintenanceWindow.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window awscc_ssm_maintenance_window}
*/
export class CcMaintenanceWindow extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ssm_maintenance_window";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMaintenanceWindow resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMaintenanceWindow to import
    * @param importFromId The id of the existing CcMaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMaintenanceWindow to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_maintenance_window", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window awscc_ssm_maintenance_window} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMaintenanceWindowProps
    */
    public constructor(scope: Construct, id: string, config: CcMaintenanceWindowProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ssm_maintenance_window',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._allowUnassociatedTargets = config.allowUnassociatedTargets;
        this._cutoff = config.cutoff;
        this._description = config.description;
        this._duration = config.duration;
        this._endDate = config.endDate;
        this._name = config.name;
        this._schedule = config.schedule;
        this._scheduleOffset = config.scheduleOffset;
        this._scheduleTimezone = config.scheduleTimezone;
        this._startDate = config.startDate;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_unassociated_targets - computed: false, optional: false, required: true
    private _allowUnassociatedTargets?: boolean | cdktn.IResolvable; 
    public get allowUnassociatedTargets() {
        return this.getBooleanAttribute('allow_unassociated_targets');
    }
    public set allowUnassociatedTargets(value: boolean | cdktn.IResolvable) {
        this._allowUnassociatedTargets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get allowUnassociatedTargetsInput() {
        return this._allowUnassociatedTargets;
    }

    // cutoff - computed: false, optional: false, required: true
    private _cutoff?: number; 
    public get cutoff() {
        return this.getNumberAttribute('cutoff');
    }
    public set cutoff(value: number) {
        this._cutoff = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cutoffInput() {
        return this._cutoff;
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

    // duration - computed: false, optional: false, required: true
    private _duration?: number; 
    public get duration() {
        return this.getNumberAttribute('duration');
    }
    public set duration(value: number) {
        this._duration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInput() {
        return this._duration;
    }

    // end_date - computed: true, optional: true, required: false
    private _endDate?: string; 
    public get endDate() {
        return this.getStringAttribute('end_date');
    }
    public set endDate(value: string) {
        this._endDate = value;
    }
    public resetEndDate() {
        this._endDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endDateInput() {
        return this._endDate;
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

    // schedule - computed: false, optional: false, required: true
    private _schedule?: string; 
    public get schedule() {
        return this.getStringAttribute('schedule');
    }
    public set schedule(value: string) {
        this._schedule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule;
    }

    // schedule_offset - computed: true, optional: true, required: false
    private _scheduleOffset?: number; 
    public get scheduleOffset() {
        return this.getNumberAttribute('schedule_offset');
    }
    public set scheduleOffset(value: number) {
        this._scheduleOffset = value;
    }
    public resetScheduleOffset() {
        this._scheduleOffset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleOffsetInput() {
        return this._scheduleOffset;
    }

    // schedule_timezone - computed: true, optional: true, required: false
    private _scheduleTimezone?: string; 
    public get scheduleTimezone() {
        return this.getStringAttribute('schedule_timezone');
    }
    public set scheduleTimezone(value: string) {
        this._scheduleTimezone = value;
    }
    public resetScheduleTimezone() {
        this._scheduleTimezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleTimezoneInput() {
        return this._scheduleTimezone;
    }

    // start_date - computed: true, optional: true, required: false
    private _startDate?: string; 
    public get startDate() {
        return this.getStringAttribute('start_date');
    }
    public set startDate(value: string) {
        this._startDate = value;
    }
    public resetStartDate() {
        this._startDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startDateInput() {
        return this._startDate;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMaintenanceWindow.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMaintenanceWindow.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // window_id - computed: true, optional: false, required: false
    public get windowId() {
        return this.getStringAttribute('window_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            allow_unassociated_targets: cdktn.booleanToTerraform(this._allowUnassociatedTargets),
            cutoff: cdktn.numberToTerraform(this._cutoff),
            description: cdktn.stringToTerraform(this._description),
            duration: cdktn.numberToTerraform(this._duration),
            end_date: cdktn.stringToTerraform(this._endDate),
            name: cdktn.stringToTerraform(this._name),
            schedule: cdktn.stringToTerraform(this._schedule),
            schedule_offset: cdktn.numberToTerraform(this._scheduleOffset),
            schedule_timezone: cdktn.stringToTerraform(this._scheduleTimezone),
            start_date: cdktn.stringToTerraform(this._startDate),
            tags: cdktn.listMapper(ccMaintenanceWindowTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allow_unassociated_targets: {
                value: cdktn.booleanToHclTerraform(this._allowUnassociatedTargets),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cutoff: {
                value: cdktn.numberToHclTerraform(this._cutoff),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            duration: {
                value: cdktn.numberToHclTerraform(this._duration),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            end_date: {
                value: cdktn.stringToHclTerraform(this._endDate),
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
            schedule: {
                value: cdktn.stringToHclTerraform(this._schedule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule_offset: {
                value: cdktn.numberToHclTerraform(this._scheduleOffset),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            schedule_timezone: {
                value: cdktn.stringToHclTerraform(this._scheduleTimezone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            start_date: {
                value: cdktn.stringToHclTerraform(this._startDate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMaintenanceWindowTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMaintenanceWindow.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMaintenanceWindowTagPropertyToTerraform(struct?: CcMaintenanceWindow.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMaintenanceWindowTagPropertyToHclTerraform(struct?: CcMaintenanceWindow.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMaintenanceWindow {
export interface TagProperty {
    /**
    * The name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#key CcMaintenanceWindow#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window#value CcMaintenanceWindow#value}
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
