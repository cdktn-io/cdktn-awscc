// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcJobQueueProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#compute_environment_order CcJobQueue#compute_environment_order}
    */
    readonly computeEnvironmentOrder?: CcJobQueue.ComputeEnvironmentOrderProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#job_queue_name CcJobQueue#job_queue_name}
    */
    readonly jobQueueName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#job_queue_type CcJobQueue#job_queue_type}
    */
    readonly jobQueueType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#job_state_time_limit_actions CcJobQueue#job_state_time_limit_actions}
    */
    readonly jobStateTimeLimitActions?: CcJobQueue.JobStateTimeLimitActionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#priority CcJobQueue#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#scheduling_policy_arn CcJobQueue#scheduling_policy_arn}
    */
    readonly schedulingPolicyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#service_environment_order CcJobQueue#service_environment_order}
    */
    readonly serviceEnvironmentOrder?: CcJobQueue.ServiceEnvironmentOrderProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#state CcJobQueue#state}
    */
    readonly state?: string;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#tags CcJobQueue#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue awscc_batch_job_queue}
*/
export class CcJobQueue extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_batch_job_queue";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcJobQueue resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcJobQueue to import
    * @param importFromId The id of the existing CcJobQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcJobQueue to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_batch_job_queue", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue awscc_batch_job_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcJobQueueProps
    */
    public constructor(scope: Construct, id: string, config: CcJobQueueProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_batch_job_queue',
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
        this._computeEnvironmentOrder.internalValue = config.computeEnvironmentOrder;
        this._jobQueueName = config.jobQueueName;
        this._jobQueueType = config.jobQueueType;
        this._jobStateTimeLimitActions.internalValue = config.jobStateTimeLimitActions;
        this._priority = config.priority;
        this._schedulingPolicyArn = config.schedulingPolicyArn;
        this._serviceEnvironmentOrder.internalValue = config.serviceEnvironmentOrder;
        this._state = config.state;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // compute_environment_order - computed: true, optional: true, required: false
    private _computeEnvironmentOrder = new CcJobQueue.ComputeEnvironmentOrderPropertyList(this, "compute_environment_order", false);
    public get computeEnvironmentOrder() {
        return this._computeEnvironmentOrder;
    }
    public putComputeEnvironmentOrder(value: CcJobQueue.ComputeEnvironmentOrderProperty[] | cdktn.IResolvable) {
        this._computeEnvironmentOrder.internalValue = value;
    }
    public resetComputeEnvironmentOrder() {
        this._computeEnvironmentOrder.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeEnvironmentOrderInput() {
        return this._computeEnvironmentOrder.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // job_queue_arn - computed: true, optional: false, required: false
    public get jobQueueArn() {
        return this.getStringAttribute('job_queue_arn');
    }

    // job_queue_name - computed: true, optional: true, required: false
    private _jobQueueName?: string; 
    public get jobQueueName() {
        return this.getStringAttribute('job_queue_name');
    }
    public set jobQueueName(value: string) {
        this._jobQueueName = value;
    }
    public resetJobQueueName() {
        this._jobQueueName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobQueueNameInput() {
        return this._jobQueueName;
    }

    // job_queue_type - computed: true, optional: true, required: false
    private _jobQueueType?: string; 
    public get jobQueueType() {
        return this.getStringAttribute('job_queue_type');
    }
    public set jobQueueType(value: string) {
        this._jobQueueType = value;
    }
    public resetJobQueueType() {
        this._jobQueueType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobQueueTypeInput() {
        return this._jobQueueType;
    }

    // job_state_time_limit_actions - computed: true, optional: true, required: false
    private _jobStateTimeLimitActions = new CcJobQueue.JobStateTimeLimitActionPropertyList(this, "job_state_time_limit_actions", false);
    public get jobStateTimeLimitActions() {
        return this._jobStateTimeLimitActions;
    }
    public putJobStateTimeLimitActions(value: CcJobQueue.JobStateTimeLimitActionProperty[] | cdktn.IResolvable) {
        this._jobStateTimeLimitActions.internalValue = value;
    }
    public resetJobStateTimeLimitActions() {
        this._jobStateTimeLimitActions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobStateTimeLimitActionsInput() {
        return this._jobStateTimeLimitActions.internalValue;
    }

    // priority - computed: false, optional: false, required: true
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // scheduling_policy_arn - computed: true, optional: true, required: false
    private _schedulingPolicyArn?: string; 
    public get schedulingPolicyArn() {
        return this.getStringAttribute('scheduling_policy_arn');
    }
    public set schedulingPolicyArn(value: string) {
        this._schedulingPolicyArn = value;
    }
    public resetSchedulingPolicyArn() {
        this._schedulingPolicyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulingPolicyArnInput() {
        return this._schedulingPolicyArn;
    }

    // service_environment_order - computed: true, optional: true, required: false
    private _serviceEnvironmentOrder = new CcJobQueue.ServiceEnvironmentOrderPropertyList(this, "service_environment_order", false);
    public get serviceEnvironmentOrder() {
        return this._serviceEnvironmentOrder;
    }
    public putServiceEnvironmentOrder(value: CcJobQueue.ServiceEnvironmentOrderProperty[] | cdktn.IResolvable) {
        this._serviceEnvironmentOrder.internalValue = value;
    }
    public resetServiceEnvironmentOrder() {
        this._serviceEnvironmentOrder.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceEnvironmentOrderInput() {
        return this._serviceEnvironmentOrder.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            compute_environment_order: cdktn.listMapper(ccJobQueueComputeEnvironmentOrderPropertyToTerraform, false)(this._computeEnvironmentOrder.internalValue),
            job_queue_name: cdktn.stringToTerraform(this._jobQueueName),
            job_queue_type: cdktn.stringToTerraform(this._jobQueueType),
            job_state_time_limit_actions: cdktn.listMapper(ccJobQueueJobStateTimeLimitActionPropertyToTerraform, false)(this._jobStateTimeLimitActions.internalValue),
            priority: cdktn.numberToTerraform(this._priority),
            scheduling_policy_arn: cdktn.stringToTerraform(this._schedulingPolicyArn),
            service_environment_order: cdktn.listMapper(ccJobQueueServiceEnvironmentOrderPropertyToTerraform, false)(this._serviceEnvironmentOrder.internalValue),
            state: cdktn.stringToTerraform(this._state),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            compute_environment_order: {
                value: cdktn.listMapperHcl(ccJobQueueComputeEnvironmentOrderPropertyToHclTerraform, false)(this._computeEnvironmentOrder.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcJobQueue.ComputeEnvironmentOrderPropertyList",
            },
            job_queue_name: {
                value: cdktn.stringToHclTerraform(this._jobQueueName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_queue_type: {
                value: cdktn.stringToHclTerraform(this._jobQueueType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_state_time_limit_actions: {
                value: cdktn.listMapperHcl(ccJobQueueJobStateTimeLimitActionPropertyToHclTerraform, false)(this._jobStateTimeLimitActions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcJobQueue.JobStateTimeLimitActionPropertyList",
            },
            priority: {
                value: cdktn.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            scheduling_policy_arn: {
                value: cdktn.stringToHclTerraform(this._schedulingPolicyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_environment_order: {
                value: cdktn.listMapperHcl(ccJobQueueServiceEnvironmentOrderPropertyToHclTerraform, false)(this._serviceEnvironmentOrder.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcJobQueue.ServiceEnvironmentOrderPropertyList",
            },
            state: {
                value: cdktn.stringToHclTerraform(this._state),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccJobQueueComputeEnvironmentOrderPropertyToTerraform(struct?: CcJobQueue.ComputeEnvironmentOrderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compute_environment: cdktn.stringToTerraform(struct!.computeEnvironment),
        order: cdktn.numberToTerraform(struct!.order),
    }
}


export function ccJobQueueComputeEnvironmentOrderPropertyToHclTerraform(struct?: CcJobQueue.ComputeEnvironmentOrderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compute_environment: {
            value: cdktn.stringToHclTerraform(struct!.computeEnvironment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktn.numberToHclTerraform(struct!.order),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobQueueJobStateTimeLimitActionPropertyToTerraform(struct?: CcJobQueue.JobStateTimeLimitActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        max_time_seconds: cdktn.numberToTerraform(struct!.maxTimeSeconds),
        reason: cdktn.stringToTerraform(struct!.reason),
        state: cdktn.stringToTerraform(struct!.state),
    }
}


export function ccJobQueueJobStateTimeLimitActionPropertyToHclTerraform(struct?: CcJobQueue.JobStateTimeLimitActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_time_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maxTimeSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        reason: {
            value: cdktn.stringToHclTerraform(struct!.reason),
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


export function ccJobQueueServiceEnvironmentOrderPropertyToTerraform(struct?: CcJobQueue.ServiceEnvironmentOrderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        order: cdktn.numberToTerraform(struct!.order),
        service_environment: cdktn.stringToTerraform(struct!.serviceEnvironment),
    }
}


export function ccJobQueueServiceEnvironmentOrderPropertyToHclTerraform(struct?: CcJobQueue.ServiceEnvironmentOrderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        order: {
            value: cdktn.numberToHclTerraform(struct!.order),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        service_environment: {
            value: cdktn.stringToHclTerraform(struct!.serviceEnvironment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcJobQueue {
export interface ComputeEnvironmentOrderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#compute_environment CcJobQueue#compute_environment}
    */
    readonly computeEnvironment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#order CcJobQueue#order}
    */
    readonly order?: number;
}
export class ComputeEnvironmentOrderPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComputeEnvironmentOrderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._computeEnvironment !== undefined) {
            hasAnyValues = true;
            internalValueResult.computeEnvironment = this._computeEnvironment;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComputeEnvironmentOrderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._computeEnvironment = undefined;
            this._order = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._computeEnvironment = value.computeEnvironment;
            this._order = value.order;
        }
    }

    // compute_environment - computed: true, optional: true, required: false
    private _computeEnvironment?: string; 
    public get computeEnvironment() {
        return this.getStringAttribute('compute_environment');
    }
    public set computeEnvironment(value: string) {
        this._computeEnvironment = value;
    }
    public resetComputeEnvironment() {
        this._computeEnvironment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeEnvironmentInput() {
        return this._computeEnvironment;
    }

    // order - computed: true, optional: true, required: false
    private _order?: number; 
    public get order() {
        return this.getNumberAttribute('order');
    }
    public set order(value: number) {
        this._order = value;
    }
    public resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderInput() {
        return this._order;
    }
}

export class ComputeEnvironmentOrderPropertyList extends cdktn.ComplexList {
    public internalValue? : ComputeEnvironmentOrderProperty[] | cdktn.IResolvable

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
    public get(index: number): ComputeEnvironmentOrderPropertyOutputReference {
        return new ComputeEnvironmentOrderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface JobStateTimeLimitActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#action CcJobQueue#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#max_time_seconds CcJobQueue#max_time_seconds}
    */
    readonly maxTimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#reason CcJobQueue#reason}
    */
    readonly reason?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#state CcJobQueue#state}
    */
    readonly state?: string;
}
export class JobStateTimeLimitActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): JobStateTimeLimitActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._maxTimeSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTimeSeconds = this._maxTimeSeconds;
        }
        if (this._reason !== undefined) {
            hasAnyValues = true;
            internalValueResult.reason = this._reason;
        }
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JobStateTimeLimitActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._maxTimeSeconds = undefined;
            this._reason = undefined;
            this._state = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._maxTimeSeconds = value.maxTimeSeconds;
            this._reason = value.reason;
            this._state = value.state;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // max_time_seconds - computed: true, optional: true, required: false
    private _maxTimeSeconds?: number; 
    public get maxTimeSeconds() {
        return this.getNumberAttribute('max_time_seconds');
    }
    public set maxTimeSeconds(value: number) {
        this._maxTimeSeconds = value;
    }
    public resetMaxTimeSeconds() {
        this._maxTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTimeSecondsInput() {
        return this._maxTimeSeconds;
    }

    // reason - computed: true, optional: true, required: false
    private _reason?: string; 
    public get reason() {
        return this.getStringAttribute('reason');
    }
    public set reason(value: string) {
        this._reason = value;
    }
    public resetReason() {
        this._reason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reasonInput() {
        return this._reason;
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

export class JobStateTimeLimitActionPropertyList extends cdktn.ComplexList {
    public internalValue? : JobStateTimeLimitActionProperty[] | cdktn.IResolvable

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
    public get(index: number): JobStateTimeLimitActionPropertyOutputReference {
        return new JobStateTimeLimitActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServiceEnvironmentOrderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#order CcJobQueue#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/batch_job_queue#service_environment CcJobQueue#service_environment}
    */
    readonly serviceEnvironment?: string;
}
export class ServiceEnvironmentOrderPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ServiceEnvironmentOrderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._serviceEnvironment !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceEnvironment = this._serviceEnvironment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceEnvironmentOrderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._order = undefined;
            this._serviceEnvironment = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._order = value.order;
            this._serviceEnvironment = value.serviceEnvironment;
        }
    }

    // order - computed: true, optional: true, required: false
    private _order?: number; 
    public get order() {
        return this.getNumberAttribute('order');
    }
    public set order(value: number) {
        this._order = value;
    }
    public resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderInput() {
        return this._order;
    }

    // service_environment - computed: true, optional: true, required: false
    private _serviceEnvironment?: string; 
    public get serviceEnvironment() {
        return this.getStringAttribute('service_environment');
    }
    public set serviceEnvironment(value: string) {
        this._serviceEnvironment = value;
    }
    public resetServiceEnvironment() {
        this._serviceEnvironment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceEnvironmentInput() {
        return this._serviceEnvironment;
    }
}

export class ServiceEnvironmentOrderPropertyList extends cdktn.ComplexList {
    public internalValue? : ServiceEnvironmentOrderProperty[] | cdktn.IResolvable

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
    public get(index: number): ServiceEnvironmentOrderPropertyOutputReference {
        return new ServiceEnvironmentOrderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
