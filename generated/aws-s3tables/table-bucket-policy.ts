// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTableBucketPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * A policy document containing permissions to add to the specified table bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket_policy#resource_policy CcTableBucketPolicy#resource_policy}
    */
    readonly resourcePolicy: string;
    /**
    * The Amazon Resource Name (ARN) of the table bucket to which the policy applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket_policy#table_bucket_arn CcTableBucketPolicy#table_bucket_arn}
    */
    readonly tableBucketArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket_policy awscc_s3tables_table_bucket_policy}
*/
export class CcTableBucketPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3tables_table_bucket_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTableBucketPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTableBucketPolicy to import
    * @param importFromId The id of the existing CcTableBucketPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTableBucketPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3tables_table_bucket_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table_bucket_policy awscc_s3tables_table_bucket_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTableBucketPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcTableBucketPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3tables_table_bucket_policy',
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
        this._resourcePolicy = config.resourcePolicy;
        this._tableBucketArn = config.tableBucketArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // table_bucket_arn - computed: false, optional: false, required: true
    private _tableBucketArn?: string; 
    public get tableBucketArn() {
        return this.getStringAttribute('table_bucket_arn');
    }
    public set tableBucketArn(value: string) {
        this._tableBucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableBucketArnInput() {
        return this._tableBucketArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            resource_policy: cdktn.stringToTerraform(this._resourcePolicy),
            table_bucket_arn: cdktn.stringToTerraform(this._tableBucketArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            resource_policy: {
                value: cdktn.stringToHclTerraform(this._resourcePolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            table_bucket_arn: {
                value: cdktn.stringToHclTerraform(this._tableBucketArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTableBucketPolicy {
}
