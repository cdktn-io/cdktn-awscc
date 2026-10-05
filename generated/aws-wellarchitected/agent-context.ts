// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_context

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAgentContextProps extends cdktn.TerraformMetaArguments {
    /**
    * The free-form content of the Agent Context, supplied as an arbitrary JSON object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_context#content CcAgentContext#content}
    */
    readonly content: string;
    /**
    * The type of the Agent Context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_context#context_type CcAgentContext#context_type}
    */
    readonly contextType: string;
    /**
    * The Amazon Resource Name (ARN) of the parent Agent Profile that owns this context. Pass `!Ref` of the parent AWS::WellArchitected::AgentProfile to flow its ARN here.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_context#profile_arn CcAgentContext#profile_arn}
    */
    readonly profileArn: string;
    /**
    * The title of the Agent Context.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_context#title CcAgentContext#title}
    */
    readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_context awscc_wellarchitected_agent_context}
*/
export class CcAgentContext extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wellarchitected_agent_context";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAgentContext resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAgentContext to import
    * @param importFromId The id of the existing CcAgentContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_context#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAgentContext to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wellarchitected_agent_context", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/wellarchitected_agent_context awscc_wellarchitected_agent_context} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAgentContextProps
    */
    public constructor(scope: Construct, id: string, config: CcAgentContextProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wellarchitected_agent_context',
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
        this._content = config.content;
        this._contextType = config.contextType;
        this._profileArn = config.profileArn;
        this._title = config.title;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_context_id - computed: true, optional: false, required: false
    public get agentContextId() {
        return this.getStringAttribute('agent_context_id');
    }

    // application_type - computed: true, optional: false, required: false
    public get applicationType() {
        return this.getStringAttribute('application_type');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // content - computed: false, optional: false, required: true
    private _content?: string; 
    public get content() {
        return this.getStringAttribute('content');
    }
    public set content(value: string) {
        this._content = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content;
    }

    // context_type - computed: false, optional: false, required: true
    private _contextType?: string; 
    public get contextType() {
        return this.getStringAttribute('context_type');
    }
    public set contextType(value: string) {
        this._contextType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contextTypeInput() {
        return this._contextType;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
    }

    // criticality - computed: true, optional: false, required: false
    public get criticality() {
        return this.getStringAttribute('criticality');
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
            content: cdktn.stringToTerraform(this._content),
            context_type: cdktn.stringToTerraform(this._contextType),
            profile_arn: cdktn.stringToTerraform(this._profileArn),
            title: cdktn.stringToTerraform(this._title),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            content: {
                value: cdktn.stringToHclTerraform(this._content),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            context_type: {
                value: cdktn.stringToHclTerraform(this._contextType),
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

export namespace CcAgentContext {
}
