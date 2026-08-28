// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLifecycleHookProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the Auto Scaling group for the lifecycle hook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook#auto_scaling_group_name CcLifecycleHook#auto_scaling_group_name}
    */
    readonly autoScalingGroupName: string;
    /**
    * The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The valid values are CONTINUE and ABANDON (default).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook#default_result CcLifecycleHook#default_result}
    */
    readonly defaultResult?: string;
    /**
    * The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour). If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook#heartbeat_timeout CcLifecycleHook#heartbeat_timeout}
    */
    readonly heartbeatTimeout?: number;
    /**
    * The name of the lifecycle hook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook#lifecycle_hook_name CcLifecycleHook#lifecycle_hook_name}
    */
    readonly lifecycleHookName?: string;
    /**
    * The instance state to which you want to attach the lifecycle hook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook#lifecycle_transition CcLifecycleHook#lifecycle_transition}
    */
    readonly lifecycleTransition: string;
    /**
    * Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook#notification_metadata CcLifecycleHook#notification_metadata}
    */
    readonly notificationMetadata?: string;
    /**
    * The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. You can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes the following information: lifecycle action token, user account ID, Auto Scaling group name, lifecycle hook name, instance ID, lifecycle transition, and notification metadata.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook#notification_target_arn CcLifecycleHook#notification_target_arn}
    */
    readonly notificationTargetArn?: string;
    /**
    * The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook#role_arn CcLifecycleHook#role_arn}
    */
    readonly roleArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook awscc_autoscaling_lifecycle_hook}
*/
export class CcLifecycleHook extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_autoscaling_lifecycle_hook";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLifecycleHook resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLifecycleHook to import
    * @param importFromId The id of the existing CcLifecycleHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLifecycleHook to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscaling_lifecycle_hook", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/autoscaling_lifecycle_hook awscc_autoscaling_lifecycle_hook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLifecycleHookProps
    */
    public constructor(scope: Construct, id: string, config: CcLifecycleHookProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_autoscaling_lifecycle_hook',
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
        this._defaultResult = config.defaultResult;
        this._heartbeatTimeout = config.heartbeatTimeout;
        this._lifecycleHookName = config.lifecycleHookName;
        this._lifecycleTransition = config.lifecycleTransition;
        this._notificationMetadata = config.notificationMetadata;
        this._notificationTargetArn = config.notificationTargetArn;
        this._roleArn = config.roleArn;
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

    // default_result - computed: true, optional: true, required: false
    private _defaultResult?: string; 
    public get defaultResult() {
        return this.getStringAttribute('default_result');
    }
    public set defaultResult(value: string) {
        this._defaultResult = value;
    }
    public resetDefaultResult() {
        this._defaultResult = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResultInput() {
        return this._defaultResult;
    }

    // heartbeat_timeout - computed: true, optional: true, required: false
    private _heartbeatTimeout?: number; 
    public get heartbeatTimeout() {
        return this.getNumberAttribute('heartbeat_timeout');
    }
    public set heartbeatTimeout(value: number) {
        this._heartbeatTimeout = value;
    }
    public resetHeartbeatTimeout() {
        this._heartbeatTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get heartbeatTimeoutInput() {
        return this._heartbeatTimeout;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // lifecycle_hook_name - computed: true, optional: true, required: false
    private _lifecycleHookName?: string; 
    public get lifecycleHookName() {
        return this.getStringAttribute('lifecycle_hook_name');
    }
    public set lifecycleHookName(value: string) {
        this._lifecycleHookName = value;
    }
    public resetLifecycleHookName() {
        this._lifecycleHookName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleHookNameInput() {
        return this._lifecycleHookName;
    }

    // lifecycle_transition - computed: false, optional: false, required: true
    private _lifecycleTransition?: string; 
    public get lifecycleTransition() {
        return this.getStringAttribute('lifecycle_transition');
    }
    public set lifecycleTransition(value: string) {
        this._lifecycleTransition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleTransitionInput() {
        return this._lifecycleTransition;
    }

    // notification_metadata - computed: true, optional: true, required: false
    private _notificationMetadata?: string; 
    public get notificationMetadata() {
        return this.getStringAttribute('notification_metadata');
    }
    public set notificationMetadata(value: string) {
        this._notificationMetadata = value;
    }
    public resetNotificationMetadata() {
        this._notificationMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationMetadataInput() {
        return this._notificationMetadata;
    }

    // notification_target_arn - computed: true, optional: true, required: false
    private _notificationTargetArn?: string; 
    public get notificationTargetArn() {
        return this.getStringAttribute('notification_target_arn');
    }
    public set notificationTargetArn(value: string) {
        this._notificationTargetArn = value;
    }
    public resetNotificationTargetArn() {
        this._notificationTargetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTargetArnInput() {
        return this._notificationTargetArn;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_scaling_group_name: cdktn.stringToTerraform(this._autoScalingGroupName),
            default_result: cdktn.stringToTerraform(this._defaultResult),
            heartbeat_timeout: cdktn.numberToTerraform(this._heartbeatTimeout),
            lifecycle_hook_name: cdktn.stringToTerraform(this._lifecycleHookName),
            lifecycle_transition: cdktn.stringToTerraform(this._lifecycleTransition),
            notification_metadata: cdktn.stringToTerraform(this._notificationMetadata),
            notification_target_arn: cdktn.stringToTerraform(this._notificationTargetArn),
            role_arn: cdktn.stringToTerraform(this._roleArn),
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
            default_result: {
                value: cdktn.stringToHclTerraform(this._defaultResult),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            heartbeat_timeout: {
                value: cdktn.numberToHclTerraform(this._heartbeatTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            lifecycle_hook_name: {
                value: cdktn.stringToHclTerraform(this._lifecycleHookName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lifecycle_transition: {
                value: cdktn.stringToHclTerraform(this._lifecycleTransition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_metadata: {
                value: cdktn.stringToHclTerraform(this._notificationMetadata),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notification_target_arn: {
                value: cdktn.stringToHclTerraform(this._notificationTargetArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcLifecycleHook {
}
