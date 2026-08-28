// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRuntimeEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the parent Agent Runtime (required for creation)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime_endpoint#agent_runtime_id CcRuntimeEndpoint#agent_runtime_id}
    */
    readonly agentRuntimeId: string;
    /**
    * The version of the AgentCore Runtime to use for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime_endpoint#agent_runtime_version CcRuntimeEndpoint#agent_runtime_version}
    */
    readonly agentRuntimeVersion?: string;
    /**
    * The description of the AgentCore Runtime endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime_endpoint#description CcRuntimeEndpoint#description}
    */
    readonly description?: string;
    /**
    * The name of the Agent Runtime Endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime_endpoint#name CcRuntimeEndpoint#name}
    */
    readonly name: string;
    /**
    * A map of tag keys and values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime_endpoint#tags CcRuntimeEndpoint#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime_endpoint awscc_bedrockagentcore_runtime_endpoint}
*/
export class CcRuntimeEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_runtime_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRuntimeEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRuntimeEndpoint to import
    * @param importFromId The id of the existing CcRuntimeEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRuntimeEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_runtime_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_runtime_endpoint awscc_bedrockagentcore_runtime_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRuntimeEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcRuntimeEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_runtime_endpoint',
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
        this._agentRuntimeId = config.agentRuntimeId;
        this._agentRuntimeVersion = config.agentRuntimeVersion;
        this._description = config.description;
        this._name = config.name;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_runtime_arn - computed: true, optional: false, required: false
    public get agentRuntimeArn() {
        return this.getStringAttribute('agent_runtime_arn');
    }

    // agent_runtime_endpoint_arn - computed: true, optional: false, required: false
    public get agentRuntimeEndpointArn() {
        return this.getStringAttribute('agent_runtime_endpoint_arn');
    }

    // agent_runtime_id - computed: false, optional: false, required: true
    private _agentRuntimeId?: string; 
    public get agentRuntimeId() {
        return this.getStringAttribute('agent_runtime_id');
    }
    public set agentRuntimeId(value: string) {
        this._agentRuntimeId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentRuntimeIdInput() {
        return this._agentRuntimeId;
    }

    // agent_runtime_version - computed: true, optional: true, required: false
    private _agentRuntimeVersion?: string; 
    public get agentRuntimeVersion() {
        return this.getStringAttribute('agent_runtime_version');
    }
    public set agentRuntimeVersion(value: string) {
        this._agentRuntimeVersion = value;
    }
    public resetAgentRuntimeVersion() {
        this._agentRuntimeVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentRuntimeVersionInput() {
        return this._agentRuntimeVersion;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // failure_reason - computed: true, optional: false, required: false
    public get failureReason() {
        return this.getStringAttribute('failure_reason');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
    }

    // live_version - computed: true, optional: false, required: false
    public get liveVersion() {
        return this.getStringAttribute('live_version');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // runtime_endpoint_id - computed: true, optional: false, required: false
    public get runtimeEndpointId() {
        return this.getStringAttribute('runtime_endpoint_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // target_version - computed: true, optional: false, required: false
    public get targetVersion() {
        return this.getStringAttribute('target_version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            agent_runtime_id: cdktn.stringToTerraform(this._agentRuntimeId),
            agent_runtime_version: cdktn.stringToTerraform(this._agentRuntimeVersion),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_runtime_id: {
                value: cdktn.stringToHclTerraform(this._agentRuntimeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            agent_runtime_version: {
                value: cdktn.stringToHclTerraform(this._agentRuntimeVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcRuntimeEndpoint {
}
