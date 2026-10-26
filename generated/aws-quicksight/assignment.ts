// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_assignment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAssignmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the assignment, also called a rule. The name must be unique within the AWS account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_assignment#assignment_name CcAssignment#assignment_name}
    */
    readonly assignmentName: string;
    /**
    * The status of the assignment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_assignment#assignment_status CcAssignment#assignment_status}
    */
    readonly assignmentStatus: string;
    /**
    * The QuickSight users, groups, or both that you want to assign the policy to. This maps identity type to a list of identity names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_assignment#identities CcAssignment#identities}
    */
    readonly identities?: { [key: string]: string[] } | cdktn.IResolvable;
    /**
    * The namespace that contains the assignment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_assignment#namespace CcAssignment#namespace}
    */
    readonly namespace: string;
    /**
    * The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_assignment#policy_arn CcAssignment#policy_arn}
    */
    readonly policyArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_assignment awscc_quicksight_assignment}
*/
export class CcAssignment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_assignment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAssignment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAssignment to import
    * @param importFromId The id of the existing CcAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_assignment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAssignment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_assignment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/quicksight_assignment awscc_quicksight_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAssignmentProps
    */
    public constructor(scope: Construct, id: string, config: CcAssignmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_assignment',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._assignmentName = config.assignmentName;
        this._assignmentStatus = config.assignmentStatus;
        this._identities = config.identities;
        this._namespace = config.namespace;
        this._policyArn = config.policyArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // assignment_id - computed: true, optional: false, required: false
    public get assignmentId() {
        return this.getStringAttribute('assignment_id');
    }

    // assignment_name - computed: false, optional: false, required: true
    private _assignmentName?: string; 
    public get assignmentName() {
        return this.getStringAttribute('assignment_name');
    }
    public set assignmentName(value: string) {
        this._assignmentName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get assignmentNameInput() {
        return this._assignmentName;
    }

    // assignment_status - computed: false, optional: false, required: true
    private _assignmentStatus?: string; 
    public get assignmentStatus() {
        return this.getStringAttribute('assignment_status');
    }
    public set assignmentStatus(value: string) {
        this._assignmentStatus = value;
    }
    // Temporarily expose input value. Use with caution.
    public get assignmentStatusInput() {
        return this._assignmentStatus;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identities - computed: true, optional: true, required: false
    private _identities?: { [key: string]: string[] } | cdktn.IResolvable; 
    public get identities() {
        return this.interpolationForAttribute('identities');
    }
    public set identities(value: { [key: string]: string[] } | cdktn.IResolvable) {
        this._identities = value;
    }
    public resetIdentities() {
        this._identities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identitiesInput() {
        return this._identities;
    }

    // namespace - computed: false, optional: false, required: true
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // policy_arn - computed: true, optional: true, required: false
    private _policyArn?: string; 
    public get policyArn() {
        return this.getStringAttribute('policy_arn');
    }
    public set policyArn(value: string) {
        this._policyArn = value;
    }
    public resetPolicyArn() {
        this._policyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyArnInput() {
        return this._policyArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            assignment_name: cdktn.stringToTerraform(this._assignmentName),
            assignment_status: cdktn.stringToTerraform(this._assignmentStatus),
            identities: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(this._identities),
            namespace: cdktn.stringToTerraform(this._namespace),
            policy_arn: cdktn.stringToTerraform(this._policyArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            assignment_name: {
                value: cdktn.stringToHclTerraform(this._assignmentName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            assignment_status: {
                value: cdktn.stringToHclTerraform(this._assignmentStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identities: {
                value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(this._identities),
                isBlock: false,
                type: "map",
                storageClassType: "stringListMap",
            },
            namespace: {
                value: cdktn.stringToHclTerraform(this._namespace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_arn: {
                value: cdktn.stringToHclTerraform(this._policyArn),
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
