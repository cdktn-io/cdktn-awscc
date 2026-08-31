// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_delegated_admin

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDelegatedAdminProps extends cdktn.TerraformMetaArguments {
    /**
    * The AWS-account identifier of the account to designate as the Security Hub CSPM administrator account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_delegated_admin#admin_account_id CcDelegatedAdmin#admin_account_id}
    */
    readonly adminAccountId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_delegated_admin awscc_securityhub_delegated_admin}
*/
export class CcDelegatedAdmin extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_delegated_admin";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDelegatedAdmin resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDelegatedAdmin to import
    * @param importFromId The id of the existing CcDelegatedAdmin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_delegated_admin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDelegatedAdmin to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_delegated_admin", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityhub_delegated_admin awscc_securityhub_delegated_admin} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDelegatedAdminProps
    */
    public constructor(scope: Construct, id: string, config: CcDelegatedAdminProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_delegated_admin',
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
        this._adminAccountId = config.adminAccountId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // admin_account_id - computed: false, optional: false, required: true
    private _adminAccountId?: string; 
    public get adminAccountId() {
        return this.getStringAttribute('admin_account_id');
    }
    public set adminAccountId(value: string) {
        this._adminAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get adminAccountIdInput() {
        return this._adminAccountId;
    }

    // delegated_admin_identifier - computed: true, optional: false, required: false
    public get delegatedAdminIdentifier() {
        return this.getStringAttribute('delegated_admin_identifier');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            admin_account_id: cdktn.stringToTerraform(this._adminAccountId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            admin_account_id: {
                value: cdktn.stringToHclTerraform(this._adminAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcDelegatedAdmin {
}
