// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScheduledActionProps extends cdktn.TerraformMetaArguments {
    /**
    * If true, the schedule is enabled. If false, the scheduled action does not trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#enable CcScheduledAction#enable}
    */
    readonly enable?: boolean | cdktn.IResolvable;
    /**
    * The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#end_time CcScheduledAction#end_time}
    */
    readonly endTime?: string;
    /**
    * The IAM role to assume to run the target action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#iam_role CcScheduledAction#iam_role}
    */
    readonly iamRole?: string;
    /**
    * The schedule in `at( )` or `cron( )` format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#schedule CcScheduledAction#schedule}
    */
    readonly schedule?: string;
    /**
    * The description of the scheduled action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#scheduled_action_description CcScheduledAction#scheduled_action_description}
    */
    readonly scheduledActionDescription?: string;
    /**
    * The name of the scheduled action. The name must be unique within an account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#scheduled_action_name CcScheduledAction#scheduled_action_name}
    */
    readonly scheduledActionName: string;
    /**
    * The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#start_time CcScheduledAction#start_time}
    */
    readonly startTime?: string;
    /**
    * A JSON format string of the Amazon Redshift API operation with input parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#target_action CcScheduledAction#target_action}
    */
    readonly targetAction?: CcScheduledAction.ScheduledActionTypeProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action awscc_redshift_scheduled_action}
*/
export class CcScheduledAction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshift_scheduled_action";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScheduledAction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScheduledAction to import
    * @param importFromId The id of the existing CcScheduledAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScheduledAction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_scheduled_action", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action awscc_redshift_scheduled_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScheduledActionProps
    */
    public constructor(scope: Construct, id: string, config: CcScheduledActionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshift_scheduled_action',
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
        this._enable = config.enable;
        this._endTime = config.endTime;
        this._iamRole = config.iamRole;
        this._schedule = config.schedule;
        this._scheduledActionDescription = config.scheduledActionDescription;
        this._scheduledActionName = config.scheduledActionName;
        this._startTime = config.startTime;
        this._targetAction.internalValue = config.targetAction;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // enable - computed: true, optional: true, required: false
    private _enable?: boolean | cdktn.IResolvable; 
    public get enable() {
        return this.getBooleanAttribute('enable');
    }
    public set enable(value: boolean | cdktn.IResolvable) {
        this._enable = value;
    }
    public resetEnable() {
        this._enable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInput() {
        return this._enable;
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

    // iam_role - computed: true, optional: true, required: false
    private _iamRole?: string; 
    public get iamRole() {
        return this.getStringAttribute('iam_role');
    }
    public set iamRole(value: string) {
        this._iamRole = value;
    }
    public resetIamRole() {
        this._iamRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleInput() {
        return this._iamRole;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // next_invocations - computed: true, optional: false, required: false
    public get nextInvocations() {
        return this.getListAttribute('next_invocations');
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

    // scheduled_action_description - computed: true, optional: true, required: false
    private _scheduledActionDescription?: string; 
    public get scheduledActionDescription() {
        return this.getStringAttribute('scheduled_action_description');
    }
    public set scheduledActionDescription(value: string) {
        this._scheduledActionDescription = value;
    }
    public resetScheduledActionDescription() {
        this._scheduledActionDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledActionDescriptionInput() {
        return this._scheduledActionDescription;
    }

    // scheduled_action_name - computed: false, optional: false, required: true
    private _scheduledActionName?: string; 
    public get scheduledActionName() {
        return this.getStringAttribute('scheduled_action_name');
    }
    public set scheduledActionName(value: string) {
        this._scheduledActionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledActionNameInput() {
        return this._scheduledActionName;
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

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // target_action - computed: true, optional: true, required: false
    private _targetAction = new CcScheduledAction.ScheduledActionTypePropertyOutputReference(this, "target_action");
    public get targetAction() {
        return this._targetAction;
    }
    public putTargetAction(value: CcScheduledAction.ScheduledActionTypeProperty) {
        this._targetAction.internalValue = value;
    }
    public resetTargetAction() {
        this._targetAction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetActionInput() {
        return this._targetAction.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            enable: cdktn.booleanToTerraform(this._enable),
            end_time: cdktn.stringToTerraform(this._endTime),
            iam_role: cdktn.stringToTerraform(this._iamRole),
            schedule: cdktn.stringToTerraform(this._schedule),
            scheduled_action_description: cdktn.stringToTerraform(this._scheduledActionDescription),
            scheduled_action_name: cdktn.stringToTerraform(this._scheduledActionName),
            start_time: cdktn.stringToTerraform(this._startTime),
            target_action: ccScheduledActionScheduledActionTypePropertyToTerraform(this._targetAction.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            enable: {
                value: cdktn.booleanToHclTerraform(this._enable),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            end_time: {
                value: cdktn.stringToHclTerraform(this._endTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            iam_role: {
                value: cdktn.stringToHclTerraform(this._iamRole),
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
            scheduled_action_description: {
                value: cdktn.stringToHclTerraform(this._scheduledActionDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scheduled_action_name: {
                value: cdktn.stringToHclTerraform(this._scheduledActionName),
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
            target_action: {
                value: ccScheduledActionScheduledActionTypePropertyToHclTerraform(this._targetAction.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScheduledAction.ScheduledActionTypeProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScheduledActionPauseClusterMessagePropertyToTerraform(struct?: CcScheduledAction.PauseClusterMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
    }
}


export function ccScheduledActionPauseClusterMessagePropertyToHclTerraform(struct?: CcScheduledAction.PauseClusterMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_identifier: {
            value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduledActionResizeClusterMessagePropertyToTerraform(struct?: CcScheduledAction.ResizeClusterMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        classic: cdktn.booleanToTerraform(struct!.classic),
        cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
        cluster_type: cdktn.stringToTerraform(struct!.clusterType),
        node_type: cdktn.stringToTerraform(struct!.nodeType),
        number_of_nodes: cdktn.numberToTerraform(struct!.numberOfNodes),
    }
}


export function ccScheduledActionResizeClusterMessagePropertyToHclTerraform(struct?: CcScheduledAction.ResizeClusterMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        classic: {
            value: cdktn.booleanToHclTerraform(struct!.classic),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cluster_identifier: {
            value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cluster_type: {
            value: cdktn.stringToHclTerraform(struct!.clusterType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        node_type: {
            value: cdktn.stringToHclTerraform(struct!.nodeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        number_of_nodes: {
            value: cdktn.numberToHclTerraform(struct!.numberOfNodes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduledActionResumeClusterMessagePropertyToTerraform(struct?: CcScheduledAction.ResumeClusterMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_identifier: cdktn.stringToTerraform(struct!.clusterIdentifier),
    }
}


export function ccScheduledActionResumeClusterMessagePropertyToHclTerraform(struct?: CcScheduledAction.ResumeClusterMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_identifier: {
            value: cdktn.stringToHclTerraform(struct!.clusterIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScheduledActionScheduledActionTypePropertyToTerraform(struct?: CcScheduledAction.ScheduledActionTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pause_cluster: ccScheduledActionPauseClusterMessagePropertyToTerraform(struct!.pauseCluster),
        resize_cluster: ccScheduledActionResizeClusterMessagePropertyToTerraform(struct!.resizeCluster),
        resume_cluster: ccScheduledActionResumeClusterMessagePropertyToTerraform(struct!.resumeCluster),
    }
}


export function ccScheduledActionScheduledActionTypePropertyToHclTerraform(struct?: CcScheduledAction.ScheduledActionTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pause_cluster: {
            value: ccScheduledActionPauseClusterMessagePropertyToHclTerraform(struct!.pauseCluster),
            isBlock: true,
            type: "struct",
            storageClassType: "PauseClusterMessageProperty",
        },
        resize_cluster: {
            value: ccScheduledActionResizeClusterMessagePropertyToHclTerraform(struct!.resizeCluster),
            isBlock: true,
            type: "struct",
            storageClassType: "ResizeClusterMessageProperty",
        },
        resume_cluster: {
            value: ccScheduledActionResumeClusterMessagePropertyToHclTerraform(struct!.resumeCluster),
            isBlock: true,
            type: "struct",
            storageClassType: "ResumeClusterMessageProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcScheduledAction {
export interface PauseClusterMessageProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#cluster_identifier CcScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
}
export class PauseClusterMessagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PauseClusterMessageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterIdentifier = this._clusterIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PauseClusterMessageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterIdentifier = value.clusterIdentifier;
        }
    }

    // cluster_identifier - computed: true, optional: true, required: false
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
        this._clusterIdentifier = value;
    }
    public resetClusterIdentifier() {
        this._clusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }
}
export interface ResizeClusterMessageProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#classic CcScheduledAction#classic}
    */
    readonly classic?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#cluster_identifier CcScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#cluster_type CcScheduledAction#cluster_type}
    */
    readonly clusterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#node_type CcScheduledAction#node_type}
    */
    readonly nodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#number_of_nodes CcScheduledAction#number_of_nodes}
    */
    readonly numberOfNodes?: number;
}
export class ResizeClusterMessagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResizeClusterMessageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._classic !== undefined) {
            hasAnyValues = true;
            internalValueResult.classic = this._classic;
        }
        if (this._clusterIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterIdentifier = this._clusterIdentifier;
        }
        if (this._clusterType !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterType = this._clusterType;
        }
        if (this._nodeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodeType = this._nodeType;
        }
        if (this._numberOfNodes !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfNodes = this._numberOfNodes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResizeClusterMessageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._classic = undefined;
            this._clusterIdentifier = undefined;
            this._clusterType = undefined;
            this._nodeType = undefined;
            this._numberOfNodes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._classic = value.classic;
            this._clusterIdentifier = value.clusterIdentifier;
            this._clusterType = value.clusterType;
            this._nodeType = value.nodeType;
            this._numberOfNodes = value.numberOfNodes;
        }
    }

    // classic - computed: true, optional: true, required: false
    private _classic?: boolean | cdktn.IResolvable; 
    public get classic() {
        return this.getBooleanAttribute('classic');
    }
    public set classic(value: boolean | cdktn.IResolvable) {
        this._classic = value;
    }
    public resetClassic() {
        this._classic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classicInput() {
        return this._classic;
    }

    // cluster_identifier - computed: true, optional: true, required: false
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
        this._clusterIdentifier = value;
    }
    public resetClusterIdentifier() {
        this._clusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }

    // cluster_type - computed: true, optional: true, required: false
    private _clusterType?: string; 
    public get clusterType() {
        return this.getStringAttribute('cluster_type');
    }
    public set clusterType(value: string) {
        this._clusterType = value;
    }
    public resetClusterType() {
        this._clusterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterTypeInput() {
        return this._clusterType;
    }

    // node_type - computed: true, optional: true, required: false
    private _nodeType?: string; 
    public get nodeType() {
        return this.getStringAttribute('node_type');
    }
    public set nodeType(value: string) {
        this._nodeType = value;
    }
    public resetNodeType() {
        this._nodeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeTypeInput() {
        return this._nodeType;
    }

    // number_of_nodes - computed: true, optional: true, required: false
    private _numberOfNodes?: number; 
    public get numberOfNodes() {
        return this.getNumberAttribute('number_of_nodes');
    }
    public set numberOfNodes(value: number) {
        this._numberOfNodes = value;
    }
    public resetNumberOfNodes() {
        this._numberOfNodes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfNodesInput() {
        return this._numberOfNodes;
    }
}
export interface ResumeClusterMessageProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#cluster_identifier CcScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
}
export class ResumeClusterMessagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResumeClusterMessageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterIdentifier = this._clusterIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResumeClusterMessageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterIdentifier = value.clusterIdentifier;
        }
    }

    // cluster_identifier - computed: true, optional: true, required: false
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
        this._clusterIdentifier = value;
    }
    public resetClusterIdentifier() {
        this._clusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }
}
export interface ScheduledActionTypeProperty {
    /**
    * Describes a pause cluster operation. For example, a scheduled action to run the `PauseCluster` API operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#pause_cluster CcScheduledAction#pause_cluster}
    */
    readonly pauseCluster?: PauseClusterMessageProperty;
    /**
    * Describes a resize cluster operation. For example, a scheduled action to run the `ResizeCluster` API operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#resize_cluster CcScheduledAction#resize_cluster}
    */
    readonly resizeCluster?: ResizeClusterMessageProperty;
    /**
    * Describes a resume cluster operation. For example, a scheduled action to run the `ResumeCluster` API operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_scheduled_action#resume_cluster CcScheduledAction#resume_cluster}
    */
    readonly resumeCluster?: ResumeClusterMessageProperty;
}
export class ScheduledActionTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduledActionTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pauseCluster?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pauseCluster = this._pauseCluster?.internalValue;
        }
        if (this._resizeCluster?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resizeCluster = this._resizeCluster?.internalValue;
        }
        if (this._resumeCluster?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resumeCluster = this._resumeCluster?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduledActionTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pauseCluster.internalValue = undefined;
            this._resizeCluster.internalValue = undefined;
            this._resumeCluster.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pauseCluster.internalValue = value.pauseCluster;
            this._resizeCluster.internalValue = value.resizeCluster;
            this._resumeCluster.internalValue = value.resumeCluster;
        }
    }

    // pause_cluster - computed: true, optional: true, required: false
    private _pauseCluster = new PauseClusterMessagePropertyOutputReference(this, "pause_cluster");
    public get pauseCluster() {
        return this._pauseCluster;
    }
    public putPauseCluster(value: PauseClusterMessageProperty) {
        this._pauseCluster.internalValue = value;
    }
    public resetPauseCluster() {
        this._pauseCluster.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pauseClusterInput() {
        return this._pauseCluster.internalValue;
    }

    // resize_cluster - computed: true, optional: true, required: false
    private _resizeCluster = new ResizeClusterMessagePropertyOutputReference(this, "resize_cluster");
    public get resizeCluster() {
        return this._resizeCluster;
    }
    public putResizeCluster(value: ResizeClusterMessageProperty) {
        this._resizeCluster.internalValue = value;
    }
    public resetResizeCluster() {
        this._resizeCluster.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resizeClusterInput() {
        return this._resizeCluster.internalValue;
    }

    // resume_cluster - computed: true, optional: true, required: false
    private _resumeCluster = new ResumeClusterMessagePropertyOutputReference(this, "resume_cluster");
    public get resumeCluster() {
        return this._resumeCluster;
    }
    public putResumeCluster(value: ResumeClusterMessageProperty) {
        this._resumeCluster.internalValue = value;
    }
    public resetResumeCluster() {
        this._resumeCluster.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resumeClusterInput() {
        return this._resumeCluster.internalValue;
    }
}
}
