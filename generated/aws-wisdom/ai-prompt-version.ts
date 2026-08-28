// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_ai_prompt_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAIPromptVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_ai_prompt_version#ai_prompt_id CcAIPromptVersion#ai_prompt_id}
    */
    readonly aiPromptId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_ai_prompt_version#assistant_id CcAIPromptVersion#assistant_id}
    */
    readonly assistantId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_ai_prompt_version#modified_time_seconds CcAIPromptVersion#modified_time_seconds}
    */
    readonly modifiedTimeSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_ai_prompt_version awscc_wisdom_ai_prompt_version}
*/
export class CcAIPromptVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wisdom_ai_prompt_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAIPromptVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAIPromptVersion to import
    * @param importFromId The id of the existing CcAIPromptVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_ai_prompt_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAIPromptVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_ai_prompt_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wisdom_ai_prompt_version awscc_wisdom_ai_prompt_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAIPromptVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcAIPromptVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wisdom_ai_prompt_version',
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
        this._aiPromptId = config.aiPromptId;
        this._assistantId = config.assistantId;
        this._modifiedTimeSeconds = config.modifiedTimeSeconds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ai_prompt_arn - computed: true, optional: false, required: false
    public get aiPromptArn() {
        return this.getStringAttribute('ai_prompt_arn');
    }

    // ai_prompt_id - computed: false, optional: false, required: true
    private _aiPromptId?: string; 
    public get aiPromptId() {
        return this.getStringAttribute('ai_prompt_id');
    }
    public set aiPromptId(value: string) {
        this._aiPromptId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aiPromptIdInput() {
        return this._aiPromptId;
    }

    // ai_prompt_version_id - computed: true, optional: false, required: false
    public get aiPromptVersionId() {
        return this.getStringAttribute('ai_prompt_version_id');
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
            ai_prompt_id: cdktn.stringToTerraform(this._aiPromptId),
            assistant_id: cdktn.stringToTerraform(this._assistantId),
            modified_time_seconds: cdktn.numberToTerraform(this._modifiedTimeSeconds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ai_prompt_id: {
                value: cdktn.stringToHclTerraform(this._aiPromptId),
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

export namespace CcAIPromptVersion {
}
