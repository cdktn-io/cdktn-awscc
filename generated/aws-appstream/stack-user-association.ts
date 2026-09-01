// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack_user_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStackUserAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The authentication type for the user who is associated with the stack. You must specify USERPOOL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack_user_association#authentication_type CcStackUserAssociation#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * Specifies whether a welcome email is sent to a user after the user is created in the user pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack_user_association#send_email_notification CcStackUserAssociation#send_email_notification}
    */
    readonly sendEmailNotification?: boolean | cdktn.IResolvable;
    /**
    * The name of the stack that is associated with the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack_user_association#stack_name CcStackUserAssociation#stack_name}
    */
    readonly stackName: string;
    /**
    * The name of the user who is associated with the stack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack_user_association#user_name CcStackUserAssociation#user_name}
    */
    readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack_user_association awscc_appstream_stack_user_association}
*/
export class CcStackUserAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appstream_stack_user_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStackUserAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStackUserAssociation to import
    * @param importFromId The id of the existing CcStackUserAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack_user_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStackUserAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_stack_user_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_stack_user_association awscc_appstream_stack_user_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStackUserAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcStackUserAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appstream_stack_user_association',
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
        this._authenticationType = config.authenticationType;
        this._sendEmailNotification = config.sendEmailNotification;
        this._stackName = config.stackName;
        this._userName = config.userName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // authentication_type - computed: false, optional: false, required: true
    private _authenticationType?: string; 
    public get authenticationType() {
        return this.getStringAttribute('authentication_type');
    }
    public set authenticationType(value: string) {
        this._authenticationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationTypeInput() {
        return this._authenticationType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // send_email_notification - computed: true, optional: true, required: false
    private _sendEmailNotification?: boolean | cdktn.IResolvable; 
    public get sendEmailNotification() {
        return this.getBooleanAttribute('send_email_notification');
    }
    public set sendEmailNotification(value: boolean | cdktn.IResolvable) {
        this._sendEmailNotification = value;
    }
    public resetSendEmailNotification() {
        this._sendEmailNotification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sendEmailNotificationInput() {
        return this._sendEmailNotification;
    }

    // stack_name - computed: false, optional: false, required: true
    private _stackName?: string; 
    public get stackName() {
        return this.getStringAttribute('stack_name');
    }
    public set stackName(value: string) {
        this._stackName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stackNameInput() {
        return this._stackName;
    }

    // user_name - computed: false, optional: false, required: true
    private _userName?: string; 
    public get userName() {
        return this.getStringAttribute('user_name');
    }
    public set userName(value: string) {
        this._userName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
        return this._userName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            authentication_type: cdktn.stringToTerraform(this._authenticationType),
            send_email_notification: cdktn.booleanToTerraform(this._sendEmailNotification),
            stack_name: cdktn.stringToTerraform(this._stackName),
            user_name: cdktn.stringToTerraform(this._userName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            authentication_type: {
                value: cdktn.stringToHclTerraform(this._authenticationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            send_email_notification: {
                value: cdktn.booleanToHclTerraform(this._sendEmailNotification),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            stack_name: {
                value: cdktn.stringToHclTerraform(this._stackName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_name: {
                value: cdktn.stringToHclTerraform(this._userName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcStackUserAssociation {
}
