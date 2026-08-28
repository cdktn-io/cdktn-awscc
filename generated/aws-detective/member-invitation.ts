// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMemberInvitationProps extends cdktn.TerraformMetaArguments {
    /**
    * When set to true, invitation emails are not sent to the member accounts. Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#disable_email_notification CcMemberInvitation#disable_email_notification}
    */
    readonly disableEmailNotification?: boolean | cdktn.IResolvable;
    /**
    * The ARN of the graph to which the member account will be invited
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#graph_arn CcMemberInvitation#graph_arn}
    */
    readonly graphArn: string;
    /**
    * The root email address for the account to be invited, for validation. Updating this field has no effect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#member_email_address CcMemberInvitation#member_email_address}
    */
    readonly memberEmailAddress: string;
    /**
    * The AWS account ID to be invited to join the graph as a member
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#member_id CcMemberInvitation#member_id}
    */
    readonly memberId: string;
    /**
    * A message to be included in the email invitation sent to the invited account. Updating this field has no effect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#message CcMemberInvitation#message}
    */
    readonly message?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation awscc_detective_member_invitation}
*/
export class CcMemberInvitation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_detective_member_invitation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMemberInvitation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMemberInvitation to import
    * @param importFromId The id of the existing CcMemberInvitation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMemberInvitation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_detective_member_invitation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/detective_member_invitation awscc_detective_member_invitation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMemberInvitationProps
    */
    public constructor(scope: Construct, id: string, config: CcMemberInvitationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_detective_member_invitation',
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
        this._disableEmailNotification = config.disableEmailNotification;
        this._graphArn = config.graphArn;
        this._memberEmailAddress = config.memberEmailAddress;
        this._memberId = config.memberId;
        this._message = config.message;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // disable_email_notification - computed: true, optional: true, required: false
    private _disableEmailNotification?: boolean | cdktn.IResolvable; 
    public get disableEmailNotification() {
        return this.getBooleanAttribute('disable_email_notification');
    }
    public set disableEmailNotification(value: boolean | cdktn.IResolvable) {
        this._disableEmailNotification = value;
    }
    public resetDisableEmailNotification() {
        this._disableEmailNotification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableEmailNotificationInput() {
        return this._disableEmailNotification;
    }

    // graph_arn - computed: false, optional: false, required: true
    private _graphArn?: string; 
    public get graphArn() {
        return this.getStringAttribute('graph_arn');
    }
    public set graphArn(value: string) {
        this._graphArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get graphArnInput() {
        return this._graphArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // member_email_address - computed: false, optional: false, required: true
    private _memberEmailAddress?: string; 
    public get memberEmailAddress() {
        return this.getStringAttribute('member_email_address');
    }
    public set memberEmailAddress(value: string) {
        this._memberEmailAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get memberEmailAddressInput() {
        return this._memberEmailAddress;
    }

    // member_id - computed: false, optional: false, required: true
    private _memberId?: string; 
    public get memberId() {
        return this.getStringAttribute('member_id');
    }
    public set memberId(value: string) {
        this._memberId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get memberIdInput() {
        return this._memberId;
    }

    // message - computed: true, optional: true, required: false
    private _message?: string; 
    public get message() {
        return this.getStringAttribute('message');
    }
    public set message(value: string) {
        this._message = value;
    }
    public resetMessage() {
        this._message = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageInput() {
        return this._message;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            disable_email_notification: cdktn.booleanToTerraform(this._disableEmailNotification),
            graph_arn: cdktn.stringToTerraform(this._graphArn),
            member_email_address: cdktn.stringToTerraform(this._memberEmailAddress),
            member_id: cdktn.stringToTerraform(this._memberId),
            message: cdktn.stringToTerraform(this._message),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            disable_email_notification: {
                value: cdktn.booleanToHclTerraform(this._disableEmailNotification),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            graph_arn: {
                value: cdktn.stringToHclTerraform(this._graphArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            member_email_address: {
                value: cdktn.stringToHclTerraform(this._memberEmailAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            member_id: {
                value: cdktn.stringToHclTerraform(this._memberId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            message: {
                value: cdktn.stringToHclTerraform(this._message),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcMemberInvitation {
}
