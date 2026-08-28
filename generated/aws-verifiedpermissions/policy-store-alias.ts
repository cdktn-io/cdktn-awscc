// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/verifiedpermissions_policy_store_alias

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyStoreAliasProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/verifiedpermissions_policy_store_alias#alias_name CcPolicyStoreAlias#alias_name}
    */
    readonly aliasName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/verifiedpermissions_policy_store_alias#policy_store_id CcPolicyStoreAlias#policy_store_id}
    */
    readonly policyStoreId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/verifiedpermissions_policy_store_alias awscc_verifiedpermissions_policy_store_alias}
*/
export class CcPolicyStoreAlias extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_verifiedpermissions_policy_store_alias";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicyStoreAlias resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicyStoreAlias to import
    * @param importFromId The id of the existing CcPolicyStoreAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/verifiedpermissions_policy_store_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicyStoreAlias to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_verifiedpermissions_policy_store_alias", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/verifiedpermissions_policy_store_alias awscc_verifiedpermissions_policy_store_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyStoreAliasProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyStoreAliasProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_verifiedpermissions_policy_store_alias',
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
        this._aliasName = config.aliasName;
        this._policyStoreId = config.policyStoreId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias_name - computed: false, optional: false, required: true
    private _aliasName?: string; 
    public get aliasName() {
        return this.getStringAttribute('alias_name');
    }
    public set aliasName(value: string) {
        this._aliasName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasNameInput() {
        return this._aliasName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy_store_id - computed: false, optional: false, required: true
    private _policyStoreId?: string; 
    public get policyStoreId() {
        return this.getStringAttribute('policy_store_id');
    }
    public set policyStoreId(value: string) {
        this._policyStoreId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyStoreIdInput() {
        return this._policyStoreId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            alias_name: cdktn.stringToTerraform(this._aliasName),
            policy_store_id: cdktn.stringToTerraform(this._policyStoreId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alias_name: {
                value: cdktn.stringToHclTerraform(this._aliasName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_store_id: {
                value: cdktn.stringToHclTerraform(this._policyStoreId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPolicyStoreAlias {
}
