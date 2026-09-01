// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_transaction_search_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransactionSearchConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * Determines the percentage of traces indexed from CloudWatch Logs to X-Ray
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_transaction_search_config#indexing_percentage CcTransactionSearchConfig#indexing_percentage}
    */
    readonly indexingPercentage?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_transaction_search_config awscc_xray_transaction_search_config}
*/
export class CcTransactionSearchConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_xray_transaction_search_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransactionSearchConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransactionSearchConfig to import
    * @param importFromId The id of the existing CcTransactionSearchConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_transaction_search_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransactionSearchConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_xray_transaction_search_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/xray_transaction_search_config awscc_xray_transaction_search_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransactionSearchConfigProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTransactionSearchConfigProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_xray_transaction_search_config',
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
        this._indexingPercentage = config.indexingPercentage;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // indexing_percentage - computed: true, optional: true, required: false
    private _indexingPercentage?: number; 
    public get indexingPercentage() {
        return this.getNumberAttribute('indexing_percentage');
    }
    public set indexingPercentage(value: number) {
        this._indexingPercentage = value;
    }
    public resetIndexingPercentage() {
        this._indexingPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexingPercentageInput() {
        return this._indexingPercentage;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            indexing_percentage: cdktn.numberToTerraform(this._indexingPercentage),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            indexing_percentage: {
                value: cdktn.numberToHclTerraform(this._indexingPercentage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTransactionSearchConfig {
}
