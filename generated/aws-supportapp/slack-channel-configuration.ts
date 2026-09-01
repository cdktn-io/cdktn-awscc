// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSlackChannelConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The channel ID in Slack, which identifies a channel within a workspace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration#channel_id CcSlackChannelConfiguration#channel_id}
    */
    readonly channelId: string;
    /**
    * The channel name in Slack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration#channel_name CcSlackChannelConfiguration#channel_name}
    */
    readonly channelName?: string;
    /**
    * The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration#channel_role_arn CcSlackChannelConfiguration#channel_role_arn}
    */
    readonly channelRoleArn: string;
    /**
    * Whether to notify when a correspondence is added to a case.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration#notify_on_add_correspondence_to_case CcSlackChannelConfiguration#notify_on_add_correspondence_to_case}
    */
    readonly notifyOnAddCorrespondenceToCase?: boolean | cdktn.IResolvable;
    /**
    * The severity level of a support case that a customer wants to get notified for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration#notify_on_case_severity CcSlackChannelConfiguration#notify_on_case_severity}
    */
    readonly notifyOnCaseSeverity: string;
    /**
    * Whether to notify when a case is created or reopened.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration#notify_on_create_or_reopen_case CcSlackChannelConfiguration#notify_on_create_or_reopen_case}
    */
    readonly notifyOnCreateOrReopenCase?: boolean | cdktn.IResolvable;
    /**
    * Whether to notify when a case is resolved.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration#notify_on_resolve_case CcSlackChannelConfiguration#notify_on_resolve_case}
    */
    readonly notifyOnResolveCase?: boolean | cdktn.IResolvable;
    /**
    * The team ID in Slack, which uniquely identifies a workspace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration#team_id CcSlackChannelConfiguration#team_id}
    */
    readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration awscc_supportapp_slack_channel_configuration}
*/
export class CcSlackChannelConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_supportapp_slack_channel_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSlackChannelConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSlackChannelConfiguration to import
    * @param importFromId The id of the existing CcSlackChannelConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSlackChannelConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_supportapp_slack_channel_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/supportapp_slack_channel_configuration awscc_supportapp_slack_channel_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSlackChannelConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcSlackChannelConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_supportapp_slack_channel_configuration',
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
        this._channelId = config.channelId;
        this._channelName = config.channelName;
        this._channelRoleArn = config.channelRoleArn;
        this._notifyOnAddCorrespondenceToCase = config.notifyOnAddCorrespondenceToCase;
        this._notifyOnCaseSeverity = config.notifyOnCaseSeverity;
        this._notifyOnCreateOrReopenCase = config.notifyOnCreateOrReopenCase;
        this._notifyOnResolveCase = config.notifyOnResolveCase;
        this._teamId = config.teamId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // channel_id - computed: false, optional: false, required: true
    private _channelId?: string; 
    public get channelId() {
        return this.getStringAttribute('channel_id');
    }
    public set channelId(value: string) {
        this._channelId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelIdInput() {
        return this._channelId;
    }

    // channel_name - computed: true, optional: true, required: false
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    public resetChannelName() {
        this._channelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
    }

    // channel_role_arn - computed: false, optional: false, required: true
    private _channelRoleArn?: string; 
    public get channelRoleArn() {
        return this.getStringAttribute('channel_role_arn');
    }
    public set channelRoleArn(value: string) {
        this._channelRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelRoleArnInput() {
        return this._channelRoleArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // notify_on_add_correspondence_to_case - computed: true, optional: true, required: false
    private _notifyOnAddCorrespondenceToCase?: boolean | cdktn.IResolvable; 
    public get notifyOnAddCorrespondenceToCase() {
        return this.getBooleanAttribute('notify_on_add_correspondence_to_case');
    }
    public set notifyOnAddCorrespondenceToCase(value: boolean | cdktn.IResolvable) {
        this._notifyOnAddCorrespondenceToCase = value;
    }
    public resetNotifyOnAddCorrespondenceToCase() {
        this._notifyOnAddCorrespondenceToCase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyOnAddCorrespondenceToCaseInput() {
        return this._notifyOnAddCorrespondenceToCase;
    }

    // notify_on_case_severity - computed: false, optional: false, required: true
    private _notifyOnCaseSeverity?: string; 
    public get notifyOnCaseSeverity() {
        return this.getStringAttribute('notify_on_case_severity');
    }
    public set notifyOnCaseSeverity(value: string) {
        this._notifyOnCaseSeverity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyOnCaseSeverityInput() {
        return this._notifyOnCaseSeverity;
    }

    // notify_on_create_or_reopen_case - computed: true, optional: true, required: false
    private _notifyOnCreateOrReopenCase?: boolean | cdktn.IResolvable; 
    public get notifyOnCreateOrReopenCase() {
        return this.getBooleanAttribute('notify_on_create_or_reopen_case');
    }
    public set notifyOnCreateOrReopenCase(value: boolean | cdktn.IResolvable) {
        this._notifyOnCreateOrReopenCase = value;
    }
    public resetNotifyOnCreateOrReopenCase() {
        this._notifyOnCreateOrReopenCase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyOnCreateOrReopenCaseInput() {
        return this._notifyOnCreateOrReopenCase;
    }

    // notify_on_resolve_case - computed: true, optional: true, required: false
    private _notifyOnResolveCase?: boolean | cdktn.IResolvable; 
    public get notifyOnResolveCase() {
        return this.getBooleanAttribute('notify_on_resolve_case');
    }
    public set notifyOnResolveCase(value: boolean | cdktn.IResolvable) {
        this._notifyOnResolveCase = value;
    }
    public resetNotifyOnResolveCase() {
        this._notifyOnResolveCase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notifyOnResolveCaseInput() {
        return this._notifyOnResolveCase;
    }

    // team_id - computed: false, optional: false, required: true
    private _teamId?: string; 
    public get teamId() {
        return this.getStringAttribute('team_id');
    }
    public set teamId(value: string) {
        this._teamId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get teamIdInput() {
        return this._teamId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            channel_id: cdktn.stringToTerraform(this._channelId),
            channel_name: cdktn.stringToTerraform(this._channelName),
            channel_role_arn: cdktn.stringToTerraform(this._channelRoleArn),
            notify_on_add_correspondence_to_case: cdktn.booleanToTerraform(this._notifyOnAddCorrespondenceToCase),
            notify_on_case_severity: cdktn.stringToTerraform(this._notifyOnCaseSeverity),
            notify_on_create_or_reopen_case: cdktn.booleanToTerraform(this._notifyOnCreateOrReopenCase),
            notify_on_resolve_case: cdktn.booleanToTerraform(this._notifyOnResolveCase),
            team_id: cdktn.stringToTerraform(this._teamId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channel_id: {
                value: cdktn.stringToHclTerraform(this._channelId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            channel_name: {
                value: cdktn.stringToHclTerraform(this._channelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            channel_role_arn: {
                value: cdktn.stringToHclTerraform(this._channelRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notify_on_add_correspondence_to_case: {
                value: cdktn.booleanToHclTerraform(this._notifyOnAddCorrespondenceToCase),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            notify_on_case_severity: {
                value: cdktn.stringToHclTerraform(this._notifyOnCaseSeverity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notify_on_create_or_reopen_case: {
                value: cdktn.booleanToHclTerraform(this._notifyOnCreateOrReopenCase),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            notify_on_resolve_case: {
                value: cdktn.booleanToHclTerraform(this._notifyOnResolveCase),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            team_id: {
                value: cdktn.stringToHclTerraform(this._teamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSlackChannelConfiguration {
}
