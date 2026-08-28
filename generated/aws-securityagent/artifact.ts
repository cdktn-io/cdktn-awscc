// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_artifact

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcArtifactProps extends cdktn.TerraformMetaArguments {
    /**
    * The unique identifier of the agent space to add the artifact to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_artifact#agent_space_id CcArtifact#agent_space_id}
    */
    readonly agentSpaceId: string;
    /**
    * The binary content of the artifact to upload, encoded as a Base64 string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_artifact#artifact_content CcArtifact#artifact_content}
    */
    readonly artifactContent?: string;
    /**
    * The file type of the artifact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_artifact#artifact_type CcArtifact#artifact_type}
    */
    readonly artifactType: string;
    /**
    * The file name of the artifact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_artifact#file_name CcArtifact#file_name}
    */
    readonly fileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_artifact awscc_securityagent_artifact}
*/
export class CcArtifact extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityagent_artifact";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcArtifact resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcArtifact to import
    * @param importFromId The id of the existing CcArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_artifact#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcArtifact to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityagent_artifact", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityagent_artifact awscc_securityagent_artifact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcArtifactProps
    */
    public constructor(scope: Construct, id: string, config: CcArtifactProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityagent_artifact',
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
        this._agentSpaceId = config.agentSpaceId;
        this._artifactContent = config.artifactContent;
        this._artifactType = config.artifactType;
        this._fileName = config.fileName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_space_id - computed: false, optional: false, required: true
    private _agentSpaceId?: string; 
    public get agentSpaceId() {
        return this.getStringAttribute('agent_space_id');
    }
    public set agentSpaceId(value: string) {
        this._agentSpaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentSpaceIdInput() {
        return this._agentSpaceId;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // artifact_content - computed: true, optional: true, required: false
    private _artifactContent?: string; 
    public get artifactContent() {
        return this.getStringAttribute('artifact_content');
    }
    public set artifactContent(value: string) {
        this._artifactContent = value;
    }
    public resetArtifactContent() {
        this._artifactContent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactContentInput() {
        return this._artifactContent;
    }

    // artifact_id - computed: true, optional: false, required: false
    public get artifactId() {
        return this.getStringAttribute('artifact_id');
    }

    // artifact_type - computed: false, optional: false, required: true
    private _artifactType?: string; 
    public get artifactType() {
        return this.getStringAttribute('artifact_type');
    }
    public set artifactType(value: string) {
        this._artifactType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactTypeInput() {
        return this._artifactType;
    }

    // file_name - computed: false, optional: false, required: true
    private _fileName?: string; 
    public get fileName() {
        return this.getStringAttribute('file_name');
    }
    public set fileName(value: string) {
        this._fileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileNameInput() {
        return this._fileName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            agent_space_id: cdktn.stringToTerraform(this._agentSpaceId),
            artifact_content: cdktn.stringToTerraform(this._artifactContent),
            artifact_type: cdktn.stringToTerraform(this._artifactType),
            file_name: cdktn.stringToTerraform(this._fileName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_space_id: {
                value: cdktn.stringToHclTerraform(this._agentSpaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            artifact_content: {
                value: cdktn.stringToHclTerraform(this._artifactContent),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            artifact_type: {
                value: cdktn.stringToHclTerraform(this._artifactType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            file_name: {
                value: cdktn.stringToHclTerraform(this._fileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcArtifact {
}
