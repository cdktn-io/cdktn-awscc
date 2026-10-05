// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_goal

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAgentGoalProps extends cdktn.TerraformMetaArguments {
    /**
    * A description of the Agent Goal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_goal#description CcAgentGoal#description}
    */
    readonly description?: string;
    /**
    * The list of Well-Architected pillars this goal targets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_goal#pillars CcAgentGoal#pillars}
    */
    readonly pillars: string[];
    /**
    * The Amazon Resource Name (ARN) of the parent Agent Profile that owns this goal. Pass `!Ref` of the parent AWS::WellArchitected::AgentProfile to flow its ARN here.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_goal#profile_arn CcAgentGoal#profile_arn}
    */
    readonly profileArn: string;
    /**
    * The title of the Agent Goal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_goal#title CcAgentGoal#title}
    */
    readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_goal awscc_wellarchitected_agent_goal}
*/
export class CcAgentGoal extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wellarchitected_agent_goal";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAgentGoal resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAgentGoal to import
    * @param importFromId The id of the existing CcAgentGoal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_goal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAgentGoal to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wellarchitected_agent_goal", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_goal awscc_wellarchitected_agent_goal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAgentGoalProps
    */
    public constructor(scope: Construct, id: string, config: CcAgentGoalProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wellarchitected_agent_goal',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
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
        this._pillars = config.pillars;
        this._profileArn = config.profileArn;
        this._title = config.title;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_goal_id - computed: true, optional: false, required: false
    public get agentGoalId() {
        return this.getStringAttribute('agent_goal_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
    }

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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_at - computed: true, optional: false, required: false
    public get lastModifiedAt() {
        return this.getStringAttribute('last_modified_at');
    }

    // last_modified_by - computed: true, optional: false, required: false
    public get lastModifiedBy() {
        return this.getStringAttribute('last_modified_by');
    }

    // pillars - computed: false, optional: false, required: true
    private _pillars?: string[]; 
    public get pillars() {
        return cdktn.Fn.tolist(this.getListAttribute('pillars'));
    }
    public set pillars(value: string[]) {
        this._pillars = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pillarsInput() {
        return this._pillars;
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

    // title - computed: false, optional: false, required: true
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            pillars: cdktn.listMapper(cdktn.stringToTerraform, false)(this._pillars),
            profile_arn: cdktn.stringToTerraform(this._profileArn),
            title: cdktn.stringToTerraform(this._title),
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
            pillars: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._pillars),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            profile_arn: {
                value: cdktn.stringToHclTerraform(this._profileArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            title: {
                value: cdktn.stringToHclTerraform(this._title),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAgentGoal {
}
