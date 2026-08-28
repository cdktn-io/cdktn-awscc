// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_vector_bucket_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVectorBucketPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * A policy document containing permissions to add to the specified vector bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_vector_bucket_policy#policy CcVectorBucketPolicy#policy}
    */
    readonly policy: string;
    /**
    * The Amazon Resource Name (ARN) of the vector bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_vector_bucket_policy#vector_bucket_arn CcVectorBucketPolicy#vector_bucket_arn}
    */
    readonly vectorBucketArn?: string;
    /**
    * The name of the vector bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_vector_bucket_policy#vector_bucket_name CcVectorBucketPolicy#vector_bucket_name}
    */
    readonly vectorBucketName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_vector_bucket_policy awscc_s3vectors_vector_bucket_policy}
*/
export class CcVectorBucketPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3vectors_vector_bucket_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVectorBucketPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVectorBucketPolicy to import
    * @param importFromId The id of the existing CcVectorBucketPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_vector_bucket_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVectorBucketPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3vectors_vector_bucket_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3vectors_vector_bucket_policy awscc_s3vectors_vector_bucket_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVectorBucketPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcVectorBucketPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3vectors_vector_bucket_policy',
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
        this._policy = config.policy;
        this._vectorBucketArn = config.vectorBucketArn;
        this._vectorBucketName = config.vectorBucketName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // vector_bucket_arn - computed: true, optional: true, required: false
    private _vectorBucketArn?: string; 
    public get vectorBucketArn() {
        return this.getStringAttribute('vector_bucket_arn');
    }
    public set vectorBucketArn(value: string) {
        this._vectorBucketArn = value;
    }
    public resetVectorBucketArn() {
        this._vectorBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorBucketArnInput() {
        return this._vectorBucketArn;
    }

    // vector_bucket_name - computed: true, optional: true, required: false
    private _vectorBucketName?: string; 
    public get vectorBucketName() {
        return this.getStringAttribute('vector_bucket_name');
    }
    public set vectorBucketName(value: string) {
        this._vectorBucketName = value;
    }
    public resetVectorBucketName() {
        this._vectorBucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vectorBucketNameInput() {
        return this._vectorBucketName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            policy: cdktn.stringToTerraform(this._policy),
            vector_bucket_arn: cdktn.stringToTerraform(this._vectorBucketArn),
            vector_bucket_name: cdktn.stringToTerraform(this._vectorBucketName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vector_bucket_arn: {
                value: cdktn.stringToHclTerraform(this._vectorBucketArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vector_bucket_name: {
                value: cdktn.stringToHclTerraform(this._vectorBucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcVectorBucketPolicy {
}
