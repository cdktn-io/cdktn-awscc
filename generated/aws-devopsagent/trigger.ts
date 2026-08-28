// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_trigger

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTriggerProps extends cdktn.TerraformMetaArguments {
    /**
    * The action to perform when the trigger fires. A JSON object containing actionType and task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_trigger#action CcTrigger#action}
    */
    readonly action: string;
    /**
    * The unique identifier of the parent Agent Space.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_trigger#agent_space_id CcTrigger#agent_space_id}
    */
    readonly agentSpaceId: string;
    /**
    * The condition that causes the trigger to fire.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_trigger#condition CcTrigger#condition}
    */
    readonly condition: CcTrigger.ConditionProperty;
    /**
    * The status of the trigger. Active triggers fire on schedule; Inactive triggers are paused.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_trigger#status CcTrigger#status}
    */
    readonly status?: string;
    /**
    * The type of trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_trigger#type CcTrigger#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_trigger awscc_devopsagent_trigger}
*/
export class CcTrigger extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_devopsagent_trigger";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTrigger resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTrigger to import
    * @param importFromId The id of the existing CcTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_trigger#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTrigger to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsagent_trigger", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_trigger awscc_devopsagent_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTriggerProps
    */
    public constructor(scope: Construct, id: string, config: CcTriggerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_devopsagent_trigger',
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
        this._action = config.action;
        this._agentSpaceId = config.agentSpaceId;
        this._condition.internalValue = config.condition;
        this._status = config.status;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // agent_space_id - computed: false, optional: false, required: true
    private _agentSpaceId?: string; 
    public get agentSpaceId() {
        return this.getStringAttribute('agent_space_id');
    }
    public set agentSpaceId(value: string) {
        this._agentSpaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentSpaceIdInput() {
        return this._agentSpaceId;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // condition - computed: false, optional: false, required: true
    private _condition = new CcTrigger.ConditionPropertyOutputReference(this, "condition");
    public get condition() {
        return this._condition;
    }
    public putCondition(value: CcTrigger.ConditionProperty) {
        this._condition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
        return this._condition.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // trigger_id - computed: true, optional: false, required: false
    public get triggerId() {
        return this.getStringAttribute('trigger_id');
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action: cdktn.stringToTerraform(this._action),
            agent_space_id: cdktn.stringToTerraform(this._agentSpaceId),
            condition: ccTriggerConditionPropertyToTerraform(this._condition.internalValue),
            status: cdktn.stringToTerraform(this._status),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action: {
                value: cdktn.stringToHclTerraform(this._action),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            agent_space_id: {
                value: cdktn.stringToHclTerraform(this._agentSpaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            condition: {
                value: ccTriggerConditionPropertyToHclTerraform(this._condition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTrigger.ConditionProperty",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTriggerSchedulePropertyToTerraform(struct?: CcTrigger.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
    }
}


export function ccTriggerSchedulePropertyToHclTerraform(struct?: CcTrigger.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTriggerConditionPropertyToTerraform(struct?: CcTrigger.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        schedule: ccTriggerSchedulePropertyToTerraform(struct!.schedule),
    }
}


export function ccTriggerConditionPropertyToHclTerraform(struct?: CcTrigger.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        schedule: {
            value: ccTriggerSchedulePropertyToHclTerraform(struct!.schedule),
            isBlock: true,
            type: "struct",
            storageClassType: "ScheduleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTrigger {
export interface ScheduleProperty {
    /**
    * A cron or rate expression that defines when the trigger fires.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_trigger#expression CcTrigger#expression}
    */
    readonly expression: string;
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
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
        }
    }

    // expression - computed: false, optional: false, required: true
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }
}
export interface ConditionProperty {
    /**
    * Schedule configuration for a time-based trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/devopsagent_trigger#schedule CcTrigger#schedule}
    */
    readonly schedule: ScheduleProperty;
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._schedule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedule = this._schedule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._schedule.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._schedule.internalValue = value.schedule;
        }
    }

    // schedule - computed: false, optional: false, required: true
    private _schedule = new SchedulePropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: ScheduleProperty) {
        this._schedule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }
}
}
