// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/signer_profile_permission

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProfilePermissionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/signer_profile_permission#action CcProfilePermission#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/signer_profile_permission#principal CcProfilePermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/signer_profile_permission#profile_name CcProfilePermission#profile_name}
    */
    readonly profileName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/signer_profile_permission#profile_version CcProfilePermission#profile_version}
    */
    readonly profileVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/signer_profile_permission#statement_id CcProfilePermission#statement_id}
    */
    readonly statementId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/signer_profile_permission awscc_signer_profile_permission}
*/
export class CcProfilePermission extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_signer_profile_permission";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProfilePermission resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProfilePermission to import
    * @param importFromId The id of the existing CcProfilePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/signer_profile_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProfilePermission to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_signer_profile_permission", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/signer_profile_permission awscc_signer_profile_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProfilePermissionProps
    */
    public constructor(scope: Construct, id: string, config: CcProfilePermissionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_signer_profile_permission',
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
        this._action = config.action;
        this._principal = config.principal;
        this._profileName = config.profileName;
        this._profileVersion = config.profileVersion;
        this._statementId = config.statementId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // principal - computed: false, optional: false, required: true
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
    }

    // profile_name - computed: false, optional: false, required: true
    private _profileName?: string; 
    public get profileName() {
        return this.getStringAttribute('profile_name');
    }
    public set profileName(value: string) {
        this._profileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get profileNameInput() {
        return this._profileName;
    }

    // profile_version - computed: true, optional: true, required: false
    private _profileVersion?: string; 
    public get profileVersion() {
        return this.getStringAttribute('profile_version');
    }
    public set profileVersion(value: string) {
        this._profileVersion = value;
    }
    public resetProfileVersion() {
        this._profileVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileVersionInput() {
        return this._profileVersion;
    }

    // statement_id - computed: false, optional: false, required: true
    private _statementId?: string; 
    public get statementId() {
        return this.getStringAttribute('statement_id');
    }
    public set statementId(value: string) {
        this._statementId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statementIdInput() {
        return this._statementId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action: cdktn.stringToTerraform(this._action),
            principal: cdktn.stringToTerraform(this._principal),
            profile_name: cdktn.stringToTerraform(this._profileName),
            profile_version: cdktn.stringToTerraform(this._profileVersion),
            statement_id: cdktn.stringToTerraform(this._statementId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action: {
                value: cdktn.stringToHclTerraform(this._action),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal: {
                value: cdktn.stringToHclTerraform(this._principal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_name: {
                value: cdktn.stringToHclTerraform(this._profileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            profile_version: {
                value: cdktn.stringToHclTerraform(this._profileVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            statement_id: {
                value: cdktn.stringToHclTerraform(this._statementId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcProfilePermission {
}
