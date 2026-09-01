// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_storage_tier_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStorageTierPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The storage tier to apply. Only INTELLIGENT_TIERING is accepted for creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_storage_tier_policy#storage_tier CcStorageTierPolicy#storage_tier}
    */
    readonly storageTier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_storage_tier_policy awscc_logs_storage_tier_policy}
*/
export class CcStorageTierPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_logs_storage_tier_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStorageTierPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStorageTierPolicy to import
    * @param importFromId The id of the existing CcStorageTierPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_storage_tier_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStorageTierPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_logs_storage_tier_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_storage_tier_policy awscc_logs_storage_tier_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStorageTierPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcStorageTierPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_logs_storage_tier_policy',
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
        this._storageTier = config.storageTier;
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

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getNumberAttribute('last_updated_time');
    }

    // storage_tier - computed: false, optional: false, required: true
    private _storageTier?: string; 
    public get storageTier() {
        return this.getStringAttribute('storage_tier');
    }
    public set storageTier(value: string) {
        this._storageTier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get storageTierInput() {
        return this._storageTier;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            storage_tier: cdktn.stringToTerraform(this._storageTier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            storage_tier: {
                value: cdktn.stringToHclTerraform(this._storageTier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcStorageTierPolicy {
}
