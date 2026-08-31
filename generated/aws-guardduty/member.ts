// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_member

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMemberProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_member#detector_id CcMember#detector_id}
    */
    readonly detectorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_member#disable_email_notification CcMember#disable_email_notification}
    */
    readonly disableEmailNotification?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_member#email CcMember#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_member#member_id CcMember#member_id}
    */
    readonly memberId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_member#message CcMember#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_member#status CcMember#status}
    */
    readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_member awscc_guardduty_member}
*/
export class CcMember extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_guardduty_member";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMember resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMember to import
    * @param importFromId The id of the existing CcMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_member#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMember to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_guardduty_member", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/guardduty_member awscc_guardduty_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMemberProps
    */
    public constructor(scope: Construct, id: string, config: CcMemberProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_guardduty_member',
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
        this._detectorId = config.detectorId;
        this._disableEmailNotification = config.disableEmailNotification;
        this._email = config.email;
        this._memberId = config.memberId;
        this._message = config.message;
        this._status = config.status;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // detector_id - computed: true, optional: true, required: false
    private _detectorId?: string; 
    public get detectorId() {
        return this.getStringAttribute('detector_id');
    }
    public set detectorId(value: string) {
        this._detectorId = value;
    }
    public resetDetectorId() {
        this._detectorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detectorIdInput() {
        return this._detectorId;
    }

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

    // email - computed: false, optional: false, required: true
    private _email?: string; 
    public get email() {
        return this.getStringAttribute('email');
    }
    public set email(value: string) {
        this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
        return this._email;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // member_id - computed: true, optional: true, required: false
    private _memberId?: string; 
    public get memberId() {
        return this.getStringAttribute('member_id');
    }
    public set memberId(value: string) {
        this._memberId = value;
    }
    public resetMemberId() {
        this._memberId = undefined;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            detector_id: cdktn.stringToTerraform(this._detectorId),
            disable_email_notification: cdktn.booleanToTerraform(this._disableEmailNotification),
            email: cdktn.stringToTerraform(this._email),
            member_id: cdktn.stringToTerraform(this._memberId),
            message: cdktn.stringToTerraform(this._message),
            status: cdktn.stringToTerraform(this._status),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            detector_id: {
                value: cdktn.stringToHclTerraform(this._detectorId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_email_notification: {
                value: cdktn.booleanToHclTerraform(this._disableEmailNotification),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            email: {
                value: cdktn.stringToHclTerraform(this._email),
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
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcMember {
}
