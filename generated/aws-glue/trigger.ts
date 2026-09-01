// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTriggerProps extends cdktn.TerraformMetaArguments {
    /**
    * The actions initiated by this trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#actions CcTrigger#actions}
    */
    readonly actions: CcTrigger.ActionProperty[] | cdktn.IResolvable;
    /**
    * A description of this trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#description CcTrigger#description}
    */
    readonly description?: string;
    /**
    * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#event_batching_condition CcTrigger#event_batching_condition}
    */
    readonly eventBatchingCondition?: CcTrigger.EventBatchingConditionProperty;
    /**
    * The name of the trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#name CcTrigger#name}
    */
    readonly name?: string;
    /**
    * The predicate of this trigger, which defines when it will fire.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#predicate CcTrigger#predicate}
    */
    readonly predicate?: CcTrigger.PredicateProperty;
    /**
    * A cron expression used to specify the schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#schedule CcTrigger#schedule}
    */
    readonly schedule?: string;
    /**
    * Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#start_on_creation CcTrigger#start_on_creation}
    */
    readonly startOnCreation?: boolean | cdktn.IResolvable;
    /**
    * The tags to use with this trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#tags CcTrigger#tags}
    */
    readonly tags?: string;
    /**
    * The type of trigger that this is.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#type CcTrigger#type}
    */
    readonly type: string;
    /**
    * The name of the workflow associated with the trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#workflow_name CcTrigger#workflow_name}
    */
    readonly workflowName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger awscc_glue_trigger}
*/
export class CcTrigger extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_trigger";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTrigger resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTrigger to import
    * @param importFromId The id of the existing CcTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTrigger to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_trigger", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger awscc_glue_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTriggerProps
    */
    public constructor(scope: Construct, id: string, config: CcTriggerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_trigger',
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
        this._actions.internalValue = config.actions;
        this._description = config.description;
        this._eventBatchingCondition.internalValue = config.eventBatchingCondition;
        this._name = config.name;
        this._predicate.internalValue = config.predicate;
        this._schedule = config.schedule;
        this._startOnCreation = config.startOnCreation;
        this._tags = config.tags;
        this._type = config.type;
        this._workflowName = config.workflowName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions - computed: false, optional: false, required: true
    private _actions = new CcTrigger.ActionPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: CcTrigger.ActionProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
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

    // event_batching_condition - computed: true, optional: true, required: false
    private _eventBatchingCondition = new CcTrigger.EventBatchingConditionPropertyOutputReference(this, "event_batching_condition");
    public get eventBatchingCondition() {
        return this._eventBatchingCondition;
    }
    public putEventBatchingCondition(value: CcTrigger.EventBatchingConditionProperty) {
        this._eventBatchingCondition.internalValue = value;
    }
    public resetEventBatchingCondition() {
        this._eventBatchingCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBatchingConditionInput() {
        return this._eventBatchingCondition.internalValue;
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

    // predicate - computed: true, optional: true, required: false
    private _predicate = new CcTrigger.PredicatePropertyOutputReference(this, "predicate");
    public get predicate() {
        return this._predicate;
    }
    public putPredicate(value: CcTrigger.PredicateProperty) {
        this._predicate.internalValue = value;
    }
    public resetPredicate() {
        this._predicate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predicateInput() {
        return this._predicate.internalValue;
    }

    // schedule - computed: true, optional: true, required: false
    private _schedule?: string; 
    public get schedule() {
        return this.getStringAttribute('schedule');
    }
    public set schedule(value: string) {
        this._schedule = value;
    }
    public resetSchedule() {
        this._schedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule;
    }

    // start_on_creation - computed: true, optional: true, required: false
    private _startOnCreation?: boolean | cdktn.IResolvable; 
    public get startOnCreation() {
        return this.getBooleanAttribute('start_on_creation');
    }
    public set startOnCreation(value: boolean | cdktn.IResolvable) {
        this._startOnCreation = value;
    }
    public resetStartOnCreation() {
        this._startOnCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startOnCreationInput() {
        return this._startOnCreation;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: string; 
    public get tags() {
        return this.getStringAttribute('tags');
    }
    public set tags(value: string) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
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

    // workflow_name - computed: true, optional: true, required: false
    private _workflowName?: string; 
    public get workflowName() {
        return this.getStringAttribute('workflow_name');
    }
    public set workflowName(value: string) {
        this._workflowName = value;
    }
    public resetWorkflowName() {
        this._workflowName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowNameInput() {
        return this._workflowName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            actions: cdktn.listMapper(ccTriggerActionPropertyToTerraform, false)(this._actions.internalValue),
            description: cdktn.stringToTerraform(this._description),
            event_batching_condition: ccTriggerEventBatchingConditionPropertyToTerraform(this._eventBatchingCondition.internalValue),
            name: cdktn.stringToTerraform(this._name),
            predicate: ccTriggerPredicatePropertyToTerraform(this._predicate.internalValue),
            schedule: cdktn.stringToTerraform(this._schedule),
            start_on_creation: cdktn.booleanToTerraform(this._startOnCreation),
            tags: cdktn.stringToTerraform(this._tags),
            type: cdktn.stringToTerraform(this._type),
            workflow_name: cdktn.stringToTerraform(this._workflowName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            actions: {
                value: cdktn.listMapperHcl(ccTriggerActionPropertyToHclTerraform, false)(this._actions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTrigger.ActionPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_batching_condition: {
                value: ccTriggerEventBatchingConditionPropertyToHclTerraform(this._eventBatchingCondition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTrigger.EventBatchingConditionProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            predicate: {
                value: ccTriggerPredicatePropertyToHclTerraform(this._predicate.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTrigger.PredicateProperty",
            },
            schedule: {
                value: cdktn.stringToHclTerraform(this._schedule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            start_on_creation: {
                value: cdktn.booleanToHclTerraform(this._startOnCreation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.stringToHclTerraform(this._tags),
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
            workflow_name: {
                value: cdktn.stringToHclTerraform(this._workflowName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTriggerNotificationPropertyPropertyToTerraform(struct?: CcTrigger.NotificationPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        notify_delay_after: cdktn.numberToTerraform(struct!.notifyDelayAfter),
    }
}


export function ccTriggerNotificationPropertyPropertyToHclTerraform(struct?: CcTrigger.NotificationPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        notify_delay_after: {
            value: cdktn.numberToHclTerraform(struct!.notifyDelayAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTriggerActionPropertyToTerraform(struct?: CcTrigger.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arguments: cdktn.stringToTerraform(struct!.arguments),
        crawler_name: cdktn.stringToTerraform(struct!.crawlerName),
        job_name: cdktn.stringToTerraform(struct!.jobName),
        notification_property: ccTriggerNotificationPropertyPropertyToTerraform(struct!.notificationProperty),
        security_configuration: cdktn.stringToTerraform(struct!.securityConfiguration),
        timeout: cdktn.numberToTerraform(struct!.timeout),
    }
}


export function ccTriggerActionPropertyToHclTerraform(struct?: CcTrigger.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arguments: {
            value: cdktn.stringToHclTerraform(struct!.arguments),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        crawler_name: {
            value: cdktn.stringToHclTerraform(struct!.crawlerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        job_name: {
            value: cdktn.stringToHclTerraform(struct!.jobName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notification_property: {
            value: ccTriggerNotificationPropertyPropertyToHclTerraform(struct!.notificationProperty),
            isBlock: true,
            type: "struct",
            storageClassType: "NotificationPropertyProperty",
        },
        security_configuration: {
            value: cdktn.stringToHclTerraform(struct!.securityConfiguration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout: {
            value: cdktn.numberToHclTerraform(struct!.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTriggerEventBatchingConditionPropertyToTerraform(struct?: CcTrigger.EventBatchingConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_size: cdktn.numberToTerraform(struct!.batchSize),
        batch_window: cdktn.numberToTerraform(struct!.batchWindow),
    }
}


export function ccTriggerEventBatchingConditionPropertyToHclTerraform(struct?: CcTrigger.EventBatchingConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_size: {
            value: cdktn.numberToHclTerraform(struct!.batchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        batch_window: {
            value: cdktn.numberToHclTerraform(struct!.batchWindow),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
        crawl_state: cdktn.stringToTerraform(struct!.crawlState),
        crawler_name: cdktn.stringToTerraform(struct!.crawlerName),
        job_name: cdktn.stringToTerraform(struct!.jobName),
        logical_operator: cdktn.stringToTerraform(struct!.logicalOperator),
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccTriggerConditionPropertyToHclTerraform(struct?: CcTrigger.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        crawl_state: {
            value: cdktn.stringToHclTerraform(struct!.crawlState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        crawler_name: {
            value: cdktn.stringToHclTerraform(struct!.crawlerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        job_name: {
            value: cdktn.stringToHclTerraform(struct!.jobName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logical_operator: {
            value: cdktn.stringToHclTerraform(struct!.logicalOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccTriggerPredicatePropertyToTerraform(struct?: CcTrigger.PredicateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        conditions: cdktn.listMapper(ccTriggerConditionPropertyToTerraform, false)(struct!.conditions),
        logical: cdktn.stringToTerraform(struct!.logical),
    }
}


export function ccTriggerPredicatePropertyToHclTerraform(struct?: CcTrigger.PredicateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        conditions: {
            value: cdktn.listMapperHcl(ccTriggerConditionPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConditionPropertyList",
        },
        logical: {
            value: cdktn.stringToHclTerraform(struct!.logical),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTrigger {
export interface NotificationPropertyProperty {
    /**
    * After a job run starts, the number of minutes to wait before sending a job run delay notification
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#notify_delay_after CcTrigger#notify_delay_after}
    */
    readonly notifyDelayAfter?: number;
}
export class NotificationPropertyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationPropertyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._notifyDelayAfter !== undefined) {
            hasAnyValues = true;
            internalValueResult.notifyDelayAfter = this._notifyDelayAfter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationPropertyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._notifyDelayAfter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._notifyDelayAfter = value.notifyDelayAfter;
        }
    }

    // notify_delay_after - computed: true, optional: true, required: false
    private _notifyDelayAfter?: number; 
    public get notifyDelayAfter() {
        return this.getNumberAttribute('notify_delay_after');
    }
    public set notifyDelayAfter(value: number) {
        this._notifyDelayAfter = value;
    }
    public resetNotifyDelayAfter() {
        this._notifyDelayAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyDelayAfterInput() {
        return this._notifyDelayAfter;
    }
}
export interface ActionProperty {
    /**
    * The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#arguments CcTrigger#arguments}
    */
    readonly arguments?: string;
    /**
    * The name of the crawler to be used with this action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#crawler_name CcTrigger#crawler_name}
    */
    readonly crawlerName?: string;
    /**
    * The name of a job to be executed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#job_name CcTrigger#job_name}
    */
    readonly jobName?: string;
    /**
    * Specifies configuration properties of a job run notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#notification_property CcTrigger#notification_property}
    */
    readonly notificationProperty?: NotificationPropertyProperty;
    /**
    * The name of the SecurityConfiguration structure to be used with this action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#security_configuration CcTrigger#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#timeout CcTrigger#timeout}
    */
    readonly timeout?: number;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arguments !== undefined) {
            hasAnyValues = true;
            internalValueResult.arguments = this._arguments;
        }
        if (this._crawlerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.crawlerName = this._crawlerName;
        }
        if (this._jobName !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobName = this._jobName;
        }
        if (this._notificationProperty?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationProperty = this._notificationProperty?.internalValue;
        }
        if (this._securityConfiguration !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityConfiguration = this._securityConfiguration;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arguments = undefined;
            this._crawlerName = undefined;
            this._jobName = undefined;
            this._notificationProperty.internalValue = undefined;
            this._securityConfiguration = undefined;
            this._timeout = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arguments = value.arguments;
            this._crawlerName = value.crawlerName;
            this._jobName = value.jobName;
            this._notificationProperty.internalValue = value.notificationProperty;
            this._securityConfiguration = value.securityConfiguration;
            this._timeout = value.timeout;
        }
    }

    // arguments - computed: true, optional: true, required: false
    private _arguments?: string; 
    public get arguments() {
        return this.getStringAttribute('arguments');
    }
    public set arguments(value: string) {
        this._arguments = value;
    }
    public resetArguments() {
        this._arguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get argumentsInput() {
        return this._arguments;
    }

    // crawler_name - computed: true, optional: true, required: false
    private _crawlerName?: string; 
    public get crawlerName() {
        return this.getStringAttribute('crawler_name');
    }
    public set crawlerName(value: string) {
        this._crawlerName = value;
    }
    public resetCrawlerName() {
        this._crawlerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crawlerNameInput() {
        return this._crawlerName;
    }

    // job_name - computed: true, optional: true, required: false
    private _jobName?: string; 
    public get jobName() {
        return this.getStringAttribute('job_name');
    }
    public set jobName(value: string) {
        this._jobName = value;
    }
    public resetJobName() {
        this._jobName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobNameInput() {
        return this._jobName;
    }

    // notification_property - computed: true, optional: true, required: false
    private _notificationProperty = new NotificationPropertyPropertyOutputReference(this, "notification_property");
    public get notificationProperty() {
        return this._notificationProperty;
    }
    public putNotificationProperty(value: NotificationPropertyProperty) {
        this._notificationProperty.internalValue = value;
    }
    public resetNotificationProperty() {
        this._notificationProperty.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationPropertyInput() {
        return this._notificationProperty.internalValue;
    }

    // security_configuration - computed: true, optional: true, required: false
    private _securityConfiguration?: string; 
    public get securityConfiguration() {
        return this.getStringAttribute('security_configuration');
    }
    public set securityConfiguration(value: string) {
        this._securityConfiguration = value;
    }
    public resetSecurityConfiguration() {
        this._securityConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityConfigurationInput() {
        return this._securityConfiguration;
    }

    // timeout - computed: true, optional: true, required: false
    private _timeout?: number; 
    public get timeout() {
        return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number) {
        this._timeout = value;
    }
    public resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
        return this._timeout;
    }
}

export class ActionPropertyList extends cdktn.ComplexList {
    public internalValue? : ActionProperty[] | cdktn.IResolvable

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
    public get(index: number): ActionPropertyOutputReference {
        return new ActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EventBatchingConditionProperty {
    /**
    * Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#batch_size CcTrigger#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#batch_window CcTrigger#batch_window}
    */
    readonly batchWindow?: number;
}
export class EventBatchingConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventBatchingConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchSize = this._batchSize;
        }
        if (this._batchWindow !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchWindow = this._batchWindow;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventBatchingConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchSize = undefined;
            this._batchWindow = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchSize = value.batchSize;
            this._batchWindow = value.batchWindow;
        }
    }

    // batch_size - computed: true, optional: true, required: false
    private _batchSize?: number; 
    public get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    public set batchSize(value: number) {
        this._batchSize = value;
    }
    public resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchSizeInput() {
        return this._batchSize;
    }

    // batch_window - computed: true, optional: true, required: false
    private _batchWindow?: number; 
    public get batchWindow() {
        return this.getNumberAttribute('batch_window');
    }
    public set batchWindow(value: number) {
        this._batchWindow = value;
    }
    public resetBatchWindow() {
        this._batchWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchWindowInput() {
        return this._batchWindow;
    }
}
export interface ConditionProperty {
    /**
    * The state of the crawler to which this condition applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#crawl_state CcTrigger#crawl_state}
    */
    readonly crawlState?: string;
    /**
    * The name of the crawler to which this condition applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#crawler_name CcTrigger#crawler_name}
    */
    readonly crawlerName?: string;
    /**
    * The name of the job whose JobRuns this condition applies to, and on which this trigger waits.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#job_name CcTrigger#job_name}
    */
    readonly jobName?: string;
    /**
    * A logical operator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#logical_operator CcTrigger#logical_operator}
    */
    readonly logicalOperator?: string;
    /**
    * The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#state CcTrigger#state}
    */
    readonly state?: string;
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._crawlState !== undefined) {
            hasAnyValues = true;
            internalValueResult.crawlState = this._crawlState;
        }
        if (this._crawlerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.crawlerName = this._crawlerName;
        }
        if (this._jobName !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobName = this._jobName;
        }
        if (this._logicalOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.logicalOperator = this._logicalOperator;
        }
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._crawlState = undefined;
            this._crawlerName = undefined;
            this._jobName = undefined;
            this._logicalOperator = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._crawlState = value.crawlState;
            this._crawlerName = value.crawlerName;
            this._jobName = value.jobName;
            this._logicalOperator = value.logicalOperator;
            this._state = value.state;
        }
    }

    // crawl_state - computed: true, optional: true, required: false
    private _crawlState?: string; 
    public get crawlState() {
        return this.getStringAttribute('crawl_state');
    }
    public set crawlState(value: string) {
        this._crawlState = value;
    }
    public resetCrawlState() {
        this._crawlState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crawlStateInput() {
        return this._crawlState;
    }

    // crawler_name - computed: true, optional: true, required: false
    private _crawlerName?: string; 
    public get crawlerName() {
        return this.getStringAttribute('crawler_name');
    }
    public set crawlerName(value: string) {
        this._crawlerName = value;
    }
    public resetCrawlerName() {
        this._crawlerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crawlerNameInput() {
        return this._crawlerName;
    }

    // job_name - computed: true, optional: true, required: false
    private _jobName?: string; 
    public get jobName() {
        return this.getStringAttribute('job_name');
    }
    public set jobName(value: string) {
        this._jobName = value;
    }
    public resetJobName() {
        this._jobName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobNameInput() {
        return this._jobName;
    }

    // logical_operator - computed: true, optional: true, required: false
    private _logicalOperator?: string; 
    public get logicalOperator() {
        return this.getStringAttribute('logical_operator');
    }
    public set logicalOperator(value: string) {
        this._logicalOperator = value;
    }
    public resetLogicalOperator() {
        this._logicalOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logicalOperatorInput() {
        return this._logicalOperator;
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

export class ConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : ConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): ConditionPropertyOutputReference {
        return new ConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PredicateProperty {
    /**
    * A list of the conditions that determine when the trigger will fire.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#conditions CcTrigger#conditions}
    */
    readonly conditions?: ConditionProperty[] | cdktn.IResolvable;
    /**
    * An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_trigger#logical CcTrigger#logical}
    */
    readonly logical?: string;
}
export class PredicatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredicateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        if (this._logical !== undefined) {
            hasAnyValues = true;
            internalValueResult.logical = this._logical;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredicateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditions.internalValue = undefined;
            this._logical = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conditions.internalValue = value.conditions;
            this._logical = value.logical;
        }
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new ConditionPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: ConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // logical - computed: true, optional: true, required: false
    private _logical?: string; 
    public get logical() {
        return this.getStringAttribute('logical');
    }
    public set logical(value: string) {
        this._logical = value;
    }
    public resetLogical() {
        this._logical = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logicalInput() {
        return this._logical;
    }
}
}
