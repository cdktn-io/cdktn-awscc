// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_knowledge_base_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcKnowledgeBasePolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The unique identifier of the knowledge base
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_knowledge_base_policy#knowledge_base_id CcKnowledgeBasePolicy#knowledge_base_id}
    */
    readonly knowledgeBaseId: string;
    /**
    * The IAM policy document defining access permissions for the knowledge base
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_knowledge_base_policy#policy_document CcKnowledgeBasePolicy#policy_document}
    */
    readonly policyDocument: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_knowledge_base_policy awscc_bedrock_knowledge_base_policy}
*/
export class CcKnowledgeBasePolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_knowledge_base_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcKnowledgeBasePolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcKnowledgeBasePolicy to import
    * @param importFromId The id of the existing CcKnowledgeBasePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_knowledge_base_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcKnowledgeBasePolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_knowledge_base_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bedrock_knowledge_base_policy awscc_bedrock_knowledge_base_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcKnowledgeBasePolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcKnowledgeBasePolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_knowledge_base_policy',
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
        this._knowledgeBaseId = config.knowledgeBaseId;
        this._policyDocument = config.policyDocument;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // knowledge_base_id - computed: false, optional: false, required: true
    private _knowledgeBaseId?: string; 
    public get knowledgeBaseId() {
        return this.getStringAttribute('knowledge_base_id');
    }
    public set knowledgeBaseId(value: string) {
        this._knowledgeBaseId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseIdInput() {
        return this._knowledgeBaseId;
    }

    // policy_document - computed: false, optional: false, required: true
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }

    // revision_id - computed: true, optional: false, required: false
    public get revisionId() {
        return this.getStringAttribute('revision_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            knowledge_base_id: cdktn.stringToTerraform(this._knowledgeBaseId),
            policy_document: cdktn.stringToTerraform(this._policyDocument),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            knowledge_base_id: {
                value: cdktn.stringToHclTerraform(this._knowledgeBaseId),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcKnowledgeBasePolicy {
}
