// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGroupPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the group to associate the policy with.
    *  This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group_policy#group_name CcGroupPolicy#group_name}
    */
    readonly groupName: string;
    /**
    * The policy document.
    *  You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
    *  The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
    *   +  Any printable ASCII character ranging from the space character (``\u0020``) through the end of the ASCII character range
    *   +  The printable characters in the Basic Latin and Latin-1 Supplement character set (through ``\u00FF``)
    *   +  The special characters tab (``\u0009``), line feed (``\u000A``), and carriage return (``\u000D``)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group_policy#policy_document CcGroupPolicy#policy_document}
    */
    readonly policyDocument?: string;
    /**
    * The name of the policy document.
    *  This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group_policy#policy_name CcGroupPolicy#policy_name}
    */
    readonly policyName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group_policy awscc_iam_group_policy}
*/
export class CcGroupPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iam_group_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGroupPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGroupPolicy to import
    * @param importFromId The id of the existing CcGroupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGroupPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iam_group_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_group_policy awscc_iam_group_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGroupPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcGroupPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iam_group_policy',
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
        this._groupName = config.groupName;
        this._policyDocument = config.policyDocument;
        this._policyName = config.policyName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // group_name - computed: false, optional: false, required: true
    private _groupName?: string; 
    public get groupName() {
        return this.getStringAttribute('group_name');
    }
    public set groupName(value: string) {
        this._groupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNameInput() {
        return this._groupName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy_document - computed: true, optional: true, required: false
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    public resetPolicyDocument() {
        this._policyDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }

    // policy_name - computed: false, optional: false, required: true
    private _policyName?: string; 
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
        this._policyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
        return this._policyName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            group_name: cdktn.stringToTerraform(this._groupName),
            policy_document: cdktn.stringToTerraform(this._policyDocument),
            policy_name: cdktn.stringToTerraform(this._policyName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            group_name: {
                value: cdktn.stringToHclTerraform(this._groupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_document: {
                value: cdktn.stringToHclTerraform(this._policyDocument),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_name: {
                value: cdktn.stringToHclTerraform(this._policyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcGroupPolicy {
}
