// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_organization_admin

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOrganizationAdminProps extends cdktn.TerraformMetaArguments {
    /**
    * The account ID of the account that should be registered as your Organization's delegated administrator for Detective
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_organization_admin#account_id CcOrganizationAdmin#account_id}
    */
    readonly accountId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_organization_admin awscc_detective_organization_admin}
*/
export class CcOrganizationAdmin extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_detective_organization_admin";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOrganizationAdmin resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOrganizationAdmin to import
    * @param importFromId The id of the existing CcOrganizationAdmin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_organization_admin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOrganizationAdmin to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_detective_organization_admin", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_organization_admin awscc_detective_organization_admin} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOrganizationAdminProps
    */
    public constructor(scope: Construct, id: string, config: CcOrganizationAdminProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_detective_organization_admin',
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
        this._accountId = config.accountId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: false, optional: false, required: true
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // graph_arn - computed: true, optional: false, required: false
    public get graphArn() {
        return this.getStringAttribute('graph_arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            account_id: cdktn.stringToTerraform(this._accountId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_id: {
                value: cdktn.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcOrganizationAdmin {
}
