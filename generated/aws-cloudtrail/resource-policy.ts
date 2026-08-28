// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_resource_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourcePolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the AWS CloudTrail resource to which the policy applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_resource_policy#resource_arn CcResourcePolicy#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * A policy document containing permissions to add to the specified resource. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_resource_policy#resource_policy CcResourcePolicy#resource_policy}
    */
    readonly resourcePolicy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_resource_policy awscc_cloudtrail_resource_policy}
*/
export class CcResourcePolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudtrail_resource_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourcePolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourcePolicy to import
    * @param importFromId The id of the existing CcResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_resource_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourcePolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudtrail_resource_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudtrail_resource_policy awscc_cloudtrail_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourcePolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcResourcePolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudtrail_resource_policy',
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
        this._resourceArn = config.resourceArn;
        this._resourcePolicy = config.resourcePolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }

    // resource_policy - computed: false, optional: false, required: true
    private _resourcePolicy?: string; 
    public get resourcePolicy() {
        return this.getStringAttribute('resource_policy');
    }
    public set resourcePolicy(value: string) {
        this._resourcePolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePolicyInput() {
        return this._resourcePolicy;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            resource_arn: cdktn.stringToTerraform(this._resourceArn),
            resource_policy: cdktn.stringToTerraform(this._resourcePolicy),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            resource_arn: {
                value: cdktn.stringToHclTerraform(this._resourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_policy: {
                value: cdktn.stringToHclTerraform(this._resourcePolicy),
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
