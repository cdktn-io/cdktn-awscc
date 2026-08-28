// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScheduledActionProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action#auto_scaling_group_name CcScheduledAction#auto_scaling_group_name}
    */
    readonly autoScalingGroupName: string;
    /**
    * The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action#desired_capacity CcScheduledAction#desired_capacity}
    */
    readonly desiredCapacity?: number;
    /**
    * The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action#end_time CcScheduledAction#end_time}
    */
    readonly endTime?: string;
    /**
    * The minimum size of the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action#max_size CcScheduledAction#max_size}
    */
    readonly maxSize?: number;
    /**
    * The minimum size of the Auto Scaling group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action#min_size CcScheduledAction#min_size}
    */
    readonly minSize?: number;
    /**
    * The recurring schedule for the action, in Unix cron syntax format. When StartTime and EndTime are specified with Recurrence , they form the boundaries of when the recurring action starts and stops.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action#recurrence CcScheduledAction#recurrence}
    */
    readonly recurrence?: string;
    /**
    * The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action#start_time CcScheduledAction#start_time}
    */
    readonly startTime?: string;
    /**
    * The time zone for the cron expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action#time_zone CcScheduledAction#time_zone}
    */
    readonly timeZone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action awscc_autoscaling_scheduled_action}
*/
export class CcScheduledAction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_autoscaling_scheduled_action";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScheduledAction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScheduledAction to import
    * @param importFromId The id of the existing CcScheduledAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScheduledAction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscaling_scheduled_action", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_scheduled_action awscc_autoscaling_scheduled_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScheduledActionProps
    */
    public constructor(scope: Construct, id: string, config: CcScheduledActionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_autoscaling_scheduled_action',
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
        this._autoScalingGroupName = config.autoScalingGroupName;
        this._desiredCapacity = config.desiredCapacity;
        this._endTime = config.endTime;
        this._maxSize = config.maxSize;
        this._minSize = config.minSize;
        this._recurrence = config.recurrence;
        this._startTime = config.startTime;
        this._timeZone = config.timeZone;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_scaling_group_name - computed: false, optional: false, required: true
    private _autoScalingGroupName?: string; 
    public get autoScalingGroupName() {
        return this.getStringAttribute('auto_scaling_group_name');
    }
    public set autoScalingGroupName(value: string) {
        this._autoScalingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingGroupNameInput() {
        return this._autoScalingGroupName;
    }

    // desired_capacity - computed: true, optional: true, required: false
    private _desiredCapacity?: number; 
    public get desiredCapacity() {
        return this.getNumberAttribute('desired_capacity');
    }
    public set desiredCapacity(value: number) {
        this._desiredCapacity = value;
    }
    public resetDesiredCapacity() {
        this._desiredCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredCapacityInput() {
        return this._desiredCapacity;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_size - computed: true, optional: true, required: false
    private _maxSize?: number; 
    public get maxSize() {
        return this.getNumberAttribute('max_size');
    }
    public set maxSize(value: number) {
        this._maxSize = value;
    }
    public resetMaxSize() {
        this._maxSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSizeInput() {
        return this._maxSize;
    }

    // min_size - computed: true, optional: true, required: false
    private _minSize?: number; 
    public get minSize() {
        return this.getNumberAttribute('min_size');
    }
    public set minSize(value: number) {
        this._minSize = value;
    }
    public resetMinSize() {
        this._minSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minSizeInput() {
        return this._minSize;
    }

    // recurrence - computed: true, optional: true, required: false
    private _recurrence?: string; 
    public get recurrence() {
        return this.getStringAttribute('recurrence');
    }
    public set recurrence(value: string) {
        this._recurrence = value;
    }
    public resetRecurrence() {
        this._recurrence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recurrenceInput() {
        return this._recurrence;
    }

    // scheduled_action_name - computed: true, optional: false, required: false
    public get scheduledActionName() {
        return this.getStringAttribute('scheduled_action_name');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_scaling_group_name: cdktn.stringToTerraform(this._autoScalingGroupName),
            desired_capacity: cdktn.numberToTerraform(this._desiredCapacity),
            end_time: cdktn.stringToTerraform(this._endTime),
            max_size: cdktn.numberToTerraform(this._maxSize),
            min_size: cdktn.numberToTerraform(this._minSize),
            recurrence: cdktn.stringToTerraform(this._recurrence),
            start_time: cdktn.stringToTerraform(this._startTime),
            time_zone: cdktn.stringToTerraform(this._timeZone),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_scaling_group_name: {
                value: cdktn.stringToHclTerraform(this._autoScalingGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            desired_capacity: {
                value: cdktn.numberToHclTerraform(this._desiredCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            end_time: {
                value: cdktn.stringToHclTerraform(this._endTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_size: {
                value: cdktn.numberToHclTerraform(this._maxSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            min_size: {
                value: cdktn.numberToHclTerraform(this._minSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            recurrence: {
                value: cdktn.stringToHclTerraform(this._recurrence),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            start_time: {
                value: cdktn.stringToHclTerraform(this._startTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            time_zone: {
                value: cdktn.stringToHclTerraform(this._timeZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcScheduledAction {
}
