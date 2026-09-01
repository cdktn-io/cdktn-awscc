// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAIAgentVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent_version#ai_agent_id CcAIAgentVersion#ai_agent_id}
    */
    readonly aiAgentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent_version#assistant_id CcAIAgentVersion#assistant_id}
    */
    readonly assistantId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent_version#modified_time_seconds CcAIAgentVersion#modified_time_seconds}
    */
    readonly modifiedTimeSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent_version awscc_wisdom_ai_agent_version}
*/
export class CcAIAgentVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wisdom_ai_agent_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAIAgentVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAIAgentVersion to import
    * @param importFromId The id of the existing CcAIAgentVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAIAgentVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_ai_agent_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_ai_agent_version awscc_wisdom_ai_agent_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAIAgentVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcAIAgentVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wisdom_ai_agent_version',
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
        this._aiAgentId = config.aiAgentId;
        this._assistantId = config.assistantId;
        this._modifiedTimeSeconds = config.modifiedTimeSeconds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ai_agent_arn - computed: true, optional: false, required: false
    public get aiAgentArn() {
        return this.getStringAttribute('ai_agent_arn');
    }

    // ai_agent_id - computed: false, optional: false, required: true
    private _aiAgentId?: string; 
    public get aiAgentId() {
        return this.getStringAttribute('ai_agent_id');
    }
    public set aiAgentId(value: string) {
        this._aiAgentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aiAgentIdInput() {
        return this._aiAgentId;
    }

    // ai_agent_version_id - computed: true, optional: false, required: false
    public get aiAgentVersionId() {
        return this.getStringAttribute('ai_agent_version_id');
    }

    // assistant_arn - computed: true, optional: false, required: false
    public get assistantArn() {
        return this.getStringAttribute('assistant_arn');
    }

    // assistant_id - computed: false, optional: false, required: true
    private _assistantId?: string; 
    public get assistantId() {
        return this.getStringAttribute('assistant_id');
    }
    public set assistantId(value: string) {
        this._assistantId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get assistantIdInput() {
        return this._assistantId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // modified_time_seconds - computed: true, optional: true, required: false
    private _modifiedTimeSeconds?: number; 
    public get modifiedTimeSeconds() {
        return this.getNumberAttribute('modified_time_seconds');
    }
    public set modifiedTimeSeconds(value: number) {
        this._modifiedTimeSeconds = value;
    }
    public resetModifiedTimeSeconds() {
        this._modifiedTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modifiedTimeSecondsInput() {
        return this._modifiedTimeSeconds;
    }

    // version_number - computed: true, optional: false, required: false
    public get versionNumber() {
        return this.getNumberAttribute('version_number');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            ai_agent_id: cdktn.stringToTerraform(this._aiAgentId),
            assistant_id: cdktn.stringToTerraform(this._assistantId),
            modified_time_seconds: cdktn.numberToTerraform(this._modifiedTimeSeconds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ai_agent_id: {
                value: cdktn.stringToHclTerraform(this._aiAgentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            assistant_id: {
                value: cdktn.stringToHclTerraform(this._assistantId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            modified_time_seconds: {
                value: cdktn.numberToHclTerraform(this._modifiedTimeSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAIAgentVersion {
}
