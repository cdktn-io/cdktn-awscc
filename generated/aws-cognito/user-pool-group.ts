// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserPoolGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_group#description CcUserPoolGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_group#group_name CcUserPoolGroup#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_group#precedence CcUserPoolGroup#precedence}
    */
    readonly precedence?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_group#role_arn CcUserPoolGroup#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_group#user_pool_id CcUserPoolGroup#user_pool_id}
    */
    readonly userPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_group awscc_cognito_user_pool_group}
*/
export class CcUserPoolGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_user_pool_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserPoolGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserPoolGroup to import
    * @param importFromId The id of the existing CcUserPoolGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserPoolGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_group awscc_cognito_user_pool_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserPoolGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcUserPoolGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_user_pool_group',
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
        this._description = config.description;
        this._groupName = config.groupName;
        this._precedence = config.precedence;
        this._roleArn = config.roleArn;
        this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // group_name - computed: true, optional: true, required: false
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    public resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // precedence - computed: true, optional: true, required: false
    private _precedence?: number; 
    public get precedence() {
        return this.getNumberAttribute('precedence');
    }
    public set precedence(value: number) {
        this._precedence = value;
    }
    public resetPrecedence() {
        this._precedence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get precedenceInput() {
        return this._precedence;
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

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            group_name: cdktn.stringToTerraform(this._groupName),
            precedence: cdktn.numberToTerraform(this._precedence),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_name: {
                value: cdktn.stringToHclTerraform(this._groupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            precedence: {
                value: cdktn.numberToHclTerraform(this._precedence),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_pool_id: {
                value: cdktn.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcUserPoolGroup {
}
