// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_namespace

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNamespaceProps extends cdktn.TerraformMetaArguments {
    /**
    * A name for the namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_namespace#namespace CcNamespace#namespace}
    */
    readonly namespace: string;
    /**
    * The Amazon Resource Name (ARN) of the specified table bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_namespace#table_bucket_arn CcNamespace#table_bucket_arn}
    */
    readonly tableBucketArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_namespace awscc_s3tables_namespace}
*/
export class CcNamespace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3tables_namespace";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNamespace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNamespace to import
    * @param importFromId The id of the existing CcNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNamespace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3tables_namespace", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_namespace awscc_s3tables_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNamespaceProps
    */
    public constructor(scope: Construct, id: string, config: CcNamespaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3tables_namespace',
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
        this._namespace = config.namespace;
        this._tableBucketArn = config.tableBucketArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // namespace - computed: false, optional: false, required: true
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
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
            namespace: cdktn.stringToTerraform(this._namespace),
            table_bucket_arn: cdktn.stringToTerraform(this._tableBucketArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            namespace: {
                value: cdktn.stringToHclTerraform(this._namespace),
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

export namespace CcNamespace {
}
