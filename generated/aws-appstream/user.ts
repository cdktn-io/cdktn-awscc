// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_user

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserProps extends cdktn.TerraformMetaArguments {
    /**
    * The authentication type for the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_user#authentication_type CcUser#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * The first name, or given name, of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_user#first_name CcUser#first_name}
    */
    readonly firstName?: string;
    /**
    * The last name, or surname, of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_user#last_name CcUser#last_name}
    */
    readonly lastName?: string;
    /**
    * The action to take for the welcome email that is sent to a user after the user is created in the user pool. If you specify SUPPRESS, no email is sent. If you specify RESEND, do not specify the first name or last name of the user. If the value is null, the email is sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_user#message_action CcUser#message_action}
    */
    readonly messageAction?: string;
    /**
    * The email address of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_user#user_name CcUser#user_name}
    */
    readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_user awscc_appstream_user}
*/
export class CcUser extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appstream_user";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUser resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUser to import
    * @param importFromId The id of the existing CcUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUser to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_user", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_user awscc_appstream_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserProps
    */
    public constructor(scope: Construct, id: string, config: CcUserProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appstream_user',
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
        this._firstName = config.firstName;
        this._lastName = config.lastName;
        this._messageAction = config.messageAction;
        this._userName = config.userName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

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

    // first_name - computed: true, optional: true, required: false
    private _firstName?: string; 
    public get firstName() {
        return this.getStringAttribute('first_name');
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public resetFirstName() {
        this._firstName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstNameInput() {
        return this._firstName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_name - computed: true, optional: true, required: false
    private _lastName?: string; 
    public get lastName() {
        return this.getStringAttribute('last_name');
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public resetLastName() {
        this._lastName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastNameInput() {
        return this._lastName;
    }

    // message_action - computed: true, optional: true, required: false
    private _messageAction?: string; 
    public get messageAction() {
        return this.getStringAttribute('message_action');
    }
    public set messageAction(value: string) {
        this._messageAction = value;
    }
    public resetMessageAction() {
        this._messageAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageActionInput() {
        return this._messageAction;
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
            first_name: cdktn.stringToTerraform(this._firstName),
            last_name: cdktn.stringToTerraform(this._lastName),
            message_action: cdktn.stringToTerraform(this._messageAction),
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
            first_name: {
                value: cdktn.stringToHclTerraform(this._firstName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            last_name: {
                value: cdktn.stringToHclTerraform(this._lastName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            message_action: {
                value: cdktn.stringToHclTerraform(this._messageAction),
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

export namespace CcUser {
}
