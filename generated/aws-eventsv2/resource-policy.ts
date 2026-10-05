// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_resource_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourcePolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the event bus whose resource policy this is. The bus must already exist. This resource does not create it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_resource_policy#event_bus_arn CcResourcePolicy#event_bus_arn}
    */
    readonly eventBusArn: string;
    /**
    * The resource policy document, as a JSON object. The document can be up to 20 KB. This quota is adjustable. An empty object is not a valid policy. To remove the policy, delete this resource. The principals in the document must exist and be visible to the service when the policy is written. When you create a new IAM role or user, that principal might not be immediately visible to the service. You might need to enforce a delay before you include it in the document. For more information, see "Changes that I make are not always immediately visible" in the IAM User Guide. Declare Version. Write AWS account and role principals as ARNs rather than as account IDs. Write a single Action, Resource, or principal value as a scalar rather than as a one-element list. The service returns these forms as you wrote them. It normalizes other forms, and a normalized value can appear as drift. A stack update replaces the whole policy with this document, including any change made outside CloudFormation. For more information about event bus resource policies, see the Amazon EventBridge User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_resource_policy#policy_document CcResourcePolicy#policy_document}
    */
    readonly policyDocument: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_resource_policy awscc_eventsv2_resource_policy}
*/
export class CcResourcePolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_eventsv2_resource_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourcePolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourcePolicy to import
    * @param importFromId The id of the existing CcResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_resource_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourcePolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eventsv2_resource_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_resource_policy awscc_eventsv2_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourcePolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcResourcePolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_eventsv2_resource_policy',
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
        this._eventBusArn = config.eventBusArn;
        this._policyDocument = config.policyDocument;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // event_bus_arn - computed: false, optional: false, required: true
    private _eventBusArn?: string; 
    public get eventBusArn() {
        return this.getStringAttribute('event_bus_arn');
    }
    public set eventBusArn(value: string) {
        this._eventBusArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusArnInput() {
        return this._eventBusArn;
    }

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

    // revision_id - computed: true, optional: false, required: false
    public get revisionId() {
        return this.getStringAttribute('revision_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            event_bus_arn: cdktn.stringToTerraform(this._eventBusArn),
            policy_document: cdktn.stringToTerraform(this._policyDocument),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            event_bus_arn: {
                value: cdktn.stringToHclTerraform(this._eventBusArn),
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

export namespace CcResourcePolicy {
}
