// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_profile_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAgentProfilePolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The IAM resource-based policy document as a JSON string. Allow-only statements, no negation condition operators, maximum 51200 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_profile_policy#policy CcAgentProfilePolicy#policy}
    */
    readonly policy: string;
    /**
    * The Amazon Resource Name (ARN) of the parent Agent Profile the policy is attached to. Pass `!GetAtt` (or `!Ref`) of the parent AWS::WellArchitected::AgentProfile to flow its ARN here. Also serves as the primary identifier of this policy attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_profile_policy#profile_arn CcAgentProfilePolicy#profile_arn}
    */
    readonly profileArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_profile_policy awscc_wellarchitected_agent_profile_policy}
*/
export class CcAgentProfilePolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wellarchitected_agent_profile_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAgentProfilePolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAgentProfilePolicy to import
    * @param importFromId The id of the existing CcAgentProfilePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_profile_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAgentProfilePolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wellarchitected_agent_profile_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_profile_policy awscc_wellarchitected_agent_profile_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAgentProfilePolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcAgentProfilePolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wellarchitected_agent_profile_policy',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._policy = config.policy;
        this._profileArn = config.profileArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // profile_arn - computed: false, optional: false, required: true
    private _profileArn?: string; 
    public get profileArn() {
        return this.getStringAttribute('profile_arn');
    }
    public set profileArn(value: string) {
        this._profileArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileArnInput() {
        return this._profileArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            policy: cdktn.stringToTerraform(this._policy),
            profile_arn: cdktn.stringToTerraform(this._profileArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_arn: {
                value: cdktn.stringToHclTerraform(this._profileArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAgentProfilePolicy {
}
