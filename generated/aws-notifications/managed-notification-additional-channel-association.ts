// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_managed_notification_additional_channel_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcManagedNotificationAdditionalChannelAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * ARN identifier of the channel.
    * Example: arn:aws:chatbot::123456789012:chat-configuration/slack-channel/security-ops
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_managed_notification_additional_channel_association#channel_arn CcManagedNotificationAdditionalChannelAssociation#channel_arn}
    */
    readonly channelArn: string;
    /**
    * ARN identifier of the Managed Notification.
    * Example: arn:aws:notifications::381491923782:managed-notification-configuration/category/AWS-Health/sub-category/Billing
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_managed_notification_additional_channel_association#managed_notification_configuration_arn CcManagedNotificationAdditionalChannelAssociation#managed_notification_configuration_arn}
    */
    readonly managedNotificationConfigurationArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_managed_notification_additional_channel_association awscc_notifications_managed_notification_additional_channel_association}
*/
export class CcManagedNotificationAdditionalChannelAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_notifications_managed_notification_additional_channel_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcManagedNotificationAdditionalChannelAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcManagedNotificationAdditionalChannelAssociation to import
    * @param importFromId The id of the existing CcManagedNotificationAdditionalChannelAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_managed_notification_additional_channel_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcManagedNotificationAdditionalChannelAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_notifications_managed_notification_additional_channel_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/notifications_managed_notification_additional_channel_association awscc_notifications_managed_notification_additional_channel_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcManagedNotificationAdditionalChannelAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcManagedNotificationAdditionalChannelAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_notifications_managed_notification_additional_channel_association',
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
        this._channelArn = config.channelArn;
        this._managedNotificationConfigurationArn = config.managedNotificationConfigurationArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // channel_arn - computed: false, optional: false, required: true
    private _channelArn?: string; 
    public get channelArn() {
        return this.getStringAttribute('channel_arn');
    }
    public set channelArn(value: string) {
        this._channelArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelArnInput() {
        return this._channelArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // managed_notification_configuration_arn - computed: false, optional: false, required: true
    private _managedNotificationConfigurationArn?: string; 
    public get managedNotificationConfigurationArn() {
        return this.getStringAttribute('managed_notification_configuration_arn');
    }
    public set managedNotificationConfigurationArn(value: string) {
        this._managedNotificationConfigurationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get managedNotificationConfigurationArnInput() {
        return this._managedNotificationConfigurationArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            channel_arn: cdktn.stringToTerraform(this._channelArn),
            managed_notification_configuration_arn: cdktn.stringToTerraform(this._managedNotificationConfigurationArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channel_arn: {
                value: cdktn.stringToHclTerraform(this._channelArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            managed_notification_configuration_arn: {
                value: cdktn.stringToHclTerraform(this._managedNotificationConfigurationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcManagedNotificationAdditionalChannelAssociation {
}
