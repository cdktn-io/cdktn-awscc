// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_application_assignment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationAssignmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_application_assignment#application_arn CcApplicationAssignment#application_arn}
    */
    readonly applicationArn: string;
    /**
    * An identifier for an object in IAM Identity Center, such as a user or group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_application_assignment#principal_id CcApplicationAssignment#principal_id}
    */
    readonly principalId: string;
    /**
    * The entity type for which the assignment will be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_application_assignment#principal_type CcApplicationAssignment#principal_type}
    */
    readonly principalType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_application_assignment awscc_sso_application_assignment}
*/
export class CcApplicationAssignment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sso_application_assignment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplicationAssignment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplicationAssignment to import
    * @param importFromId The id of the existing CcApplicationAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_application_assignment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplicationAssignment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sso_application_assignment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_application_assignment awscc_sso_application_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationAssignmentProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationAssignmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sso_application_assignment',
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
        this._applicationArn = config.applicationArn;
        this._principalId = config.principalId;
        this._principalType = config.principalType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_arn - computed: false, optional: false, required: true
    private _applicationArn?: string; 
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }
    public set applicationArn(value: string) {
        this._applicationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationArnInput() {
        return this._applicationArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_arn: cdktn.stringToTerraform(this._applicationArn),
            principal_id: cdktn.stringToTerraform(this._principalId),
            principal_type: cdktn.stringToTerraform(this._principalType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_arn: {
                value: cdktn.stringToHclTerraform(this._applicationArn),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcApplicationAssignment {
}
