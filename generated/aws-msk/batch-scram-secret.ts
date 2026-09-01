// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_batch_scram_secret

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBatchScramSecretProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_batch_scram_secret#cluster_arn CcBatchScramSecret#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_batch_scram_secret#secret_arn_list CcBatchScramSecret#secret_arn_list}
    */
    readonly secretArnList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_batch_scram_secret awscc_msk_batch_scram_secret}
*/
export class CcBatchScramSecret extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_msk_batch_scram_secret";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBatchScramSecret resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBatchScramSecret to import
    * @param importFromId The id of the existing CcBatchScramSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_batch_scram_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBatchScramSecret to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_batch_scram_secret", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/msk_batch_scram_secret awscc_msk_batch_scram_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBatchScramSecretProps
    */
    public constructor(scope: Construct, id: string, config: CcBatchScramSecretProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_msk_batch_scram_secret',
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
        this._clusterArn = config.clusterArn;
        this._secretArnList = config.secretArnList;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn?: string; 
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
        this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
        return this._clusterArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // secret_arn_list - computed: true, optional: true, required: false
    private _secretArnList?: string[]; 
    public get secretArnList() {
        return this.getListAttribute('secret_arn_list');
    }
    public set secretArnList(value: string[]) {
        this._secretArnList = value;
    }
    public resetSecretArnList() {
        this._secretArnList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnListInput() {
        return this._secretArnList;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cluster_arn: cdktn.stringToTerraform(this._clusterArn),
            secret_arn_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._secretArnList),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster_arn: {
                value: cdktn.stringToHclTerraform(this._clusterArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_arn_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._secretArnList),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcBatchScramSecret {
}
