// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sso_assignment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAssignmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The sso instance that the permission set is owned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sso_assignment#instance_arn CcAssignment#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The permission set that the assignment will be assigned
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sso_assignment#permission_set_arn CcAssignment#permission_set_arn}
    */
    readonly permissionSetArn: string;
    /**
    * The assignee's identifier, user id/group id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sso_assignment#principal_id CcAssignment#principal_id}
    */
    readonly principalId: string;
    /**
    * The assignee's type, user/group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sso_assignment#principal_type CcAssignment#principal_type}
    */
    readonly principalType: string;
    /**
    * The account id to be provisioned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sso_assignment#target_id CcAssignment#target_id}
    */
    readonly targetId: string;
    /**
    * The type of resource to be provisioned to, only aws account now
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sso_assignment#target_type CcAssignment#target_type}
    */
    readonly targetType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sso_assignment awscc_sso_assignment}
*/
export class CcAssignment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sso_assignment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAssignment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAssignment to import
    * @param importFromId The id of the existing CcAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sso_assignment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAssignment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sso_assignment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sso_assignment awscc_sso_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAssignmentProps
    */
    public constructor(scope: Construct, id: string, config: CcAssignmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sso_assignment',
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
        this._instanceArn = config.instanceArn;
        this._permissionSetArn = config.permissionSetArn;
        this._principalId = config.principalId;
        this._principalType = config.principalType;
        this._targetId = config.targetId;
        this._targetType = config.targetType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
    }

    // permission_set_arn - computed: false, optional: false, required: true
    private _permissionSetArn?: string; 
    public get permissionSetArn() {
        return this.getStringAttribute('permission_set_arn');
    }
    public set permissionSetArn(value: string) {
        this._permissionSetArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionSetArnInput() {
        return this._permissionSetArn;
    }

    // principal_id - computed: false, optional: false, required: true
    private _principalId?: string; 
    public get principalId() {
        return this.getStringAttribute('principal_id');
    }
    public set principalId(value: string) {
        this._principalId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalIdInput() {
        return this._principalId;
    }

    // principal_type - computed: false, optional: false, required: true
    private _principalType?: string; 
    public get principalType() {
        return this.getStringAttribute('principal_type');
    }
    public set principalType(value: string) {
        this._principalType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalTypeInput() {
        return this._principalType;
    }

    // target_id - computed: false, optional: false, required: true
    private _targetId?: string; 
    public get targetId() {
        return this.getStringAttribute('target_id');
    }
    public set targetId(value: string) {
        this._targetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
        return this._targetId;
    }

    // target_type - computed: false, optional: false, required: true
    private _targetType?: string; 
    public get targetType() {
        return this.getStringAttribute('target_type');
    }
    public set targetType(value: string) {
        this._targetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
        return this._targetType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            permission_set_arn: cdktn.stringToTerraform(this._permissionSetArn),
            principal_id: cdktn.stringToTerraform(this._principalId),
            principal_type: cdktn.stringToTerraform(this._principalType),
            target_id: cdktn.stringToTerraform(this._targetId),
            target_type: cdktn.stringToTerraform(this._targetType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permission_set_arn: {
                value: cdktn.stringToHclTerraform(this._permissionSetArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal_id: {
                value: cdktn.stringToHclTerraform(this._principalId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal_type: {
                value: cdktn.stringToHclTerraform(this._principalType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_id: {
                value: cdktn.stringToHclTerraform(this._targetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_type: {
                value: cdktn.stringToHclTerraform(this._targetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAssignment {
}
