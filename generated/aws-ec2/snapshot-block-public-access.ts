// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_snapshot_block_public_access

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSnapshotBlockPublicAccessProps extends cdktn.TerraformMetaArguments {
    /**
    * The state of EBS Snapshot Block Public Access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_snapshot_block_public_access#state CcSnapshotBlockPublicAccess#state}
    */
    readonly state: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_snapshot_block_public_access awscc_ec2_snapshot_block_public_access}
*/
export class CcSnapshotBlockPublicAccess extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_snapshot_block_public_access";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSnapshotBlockPublicAccess resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSnapshotBlockPublicAccess to import
    * @param importFromId The id of the existing CcSnapshotBlockPublicAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_snapshot_block_public_access#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSnapshotBlockPublicAccess to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_snapshot_block_public_access", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_snapshot_block_public_access awscc_ec2_snapshot_block_public_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSnapshotBlockPublicAccessProps
    */
    public constructor(scope: Construct, id: string, config: CcSnapshotBlockPublicAccessProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_snapshot_block_public_access',
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
        this._state = config.state;
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

    // state - computed: false, optional: false, required: true
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            state: cdktn.stringToTerraform(this._state),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            state: {
                value: cdktn.stringToHclTerraform(this._state),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSnapshotBlockPublicAccess {
}
