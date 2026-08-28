// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTablePolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * A policy document containing permissions to add to the specified table. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_policy#resource_policy CcTablePolicy#resource_policy}
    */
    readonly resourcePolicy: string;
    /**
    * The Amazon Resource Name (ARN) of the specified table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_policy#table_arn CcTablePolicy#table_arn}
    */
    readonly tableArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_policy awscc_s3tables_table_policy}
*/
export class CcTablePolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3tables_table_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTablePolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTablePolicy to import
    * @param importFromId The id of the existing CcTablePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTablePolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3tables_table_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_policy awscc_s3tables_table_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTablePolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcTablePolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3tables_table_policy',
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
        this._resourcePolicy = config.resourcePolicy;
        this._tableArn = config.tableArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // namespace - computed: true, optional: false, required: false
    public get namespace() {
        return this.getStringAttribute('namespace');
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

    // table_arn - computed: false, optional: false, required: true
    private _tableArn?: string; 
    public get tableArn() {
        return this.getStringAttribute('table_arn');
    }
    public set tableArn(value: string) {
        this._tableArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableArnInput() {
        return this._tableArn;
    }

    // table_bucket_arn - computed: true, optional: false, required: false
    public get tableBucketArn() {
        return this.getStringAttribute('table_bucket_arn');
    }

    // table_name - computed: true, optional: false, required: false
    public get tableName() {
        return this.getStringAttribute('table_name');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            resource_policy: cdktn.stringToTerraform(this._resourcePolicy),
            table_arn: cdktn.stringToTerraform(this._tableArn),
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
            table_arn: {
                value: cdktn.stringToHclTerraform(this._tableArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTablePolicy {
}
