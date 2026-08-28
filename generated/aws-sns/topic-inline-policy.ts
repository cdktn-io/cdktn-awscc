// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic_inline_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTopicInlinePolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * A policy document that contains permissions to add to the specified SNS topics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic_inline_policy#policy_document CcTopicInlinePolicy#policy_document}
    */
    readonly policyDocument: string;
    /**
    * The Amazon Resource Name (ARN) of the topic to which you want to add the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic_inline_policy#topic_arn CcTopicInlinePolicy#topic_arn}
    */
    readonly topicArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic_inline_policy awscc_sns_topic_inline_policy}
*/
export class CcTopicInlinePolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sns_topic_inline_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTopicInlinePolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTopicInlinePolicy to import
    * @param importFromId The id of the existing CcTopicInlinePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic_inline_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTopicInlinePolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sns_topic_inline_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic_inline_policy awscc_sns_topic_inline_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTopicInlinePolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcTopicInlinePolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sns_topic_inline_policy',
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
        this._policyDocument = config.policyDocument;
        this._topicArn = config.topicArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // topic_arn - computed: false, optional: false, required: true
    private _topicArn?: string; 
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
        this._topicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
        return this._topicArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            policy_document: cdktn.stringToTerraform(this._policyDocument),
            topic_arn: cdktn.stringToTerraform(this._topicArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            policy_document: {
                value: cdktn.stringToHclTerraform(this._policyDocument),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            topic_arn: {
                value: cdktn.stringToHclTerraform(this._topicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTopicInlinePolicy {
}
