// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wickr_network

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNetworkProps extends cdktn.TerraformMetaArguments {
    /**
    * The access level of the network, which determines available features and capabilities.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wickr_network#access_level CcNetwork#access_level}
    */
    readonly accessLevel: string;
    /**
    * The name of the network. Must be between 1 and 20 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wickr_network#network_name CcNetwork#network_name}
    */
    readonly networkName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wickr_network awscc_wickr_network}
*/
export class CcNetwork extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wickr_network";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNetwork resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNetwork to import
    * @param importFromId The id of the existing CcNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wickr_network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNetwork to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wickr_network", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/wickr_network awscc_wickr_network} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNetworkProps
    */
    public constructor(scope: Construct, id: string, config: CcNetworkProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wickr_network',
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
        this._accessLevel = config.accessLevel;
        this._networkName = config.networkName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_level - computed: false, optional: false, required: true
    private _accessLevel?: string; 
    public get accessLevel() {
        return this.getStringAttribute('access_level');
    }
    public set accessLevel(value: string) {
        this._accessLevel = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLevelInput() {
        return this._accessLevel;
    }

    // aws_account_id - computed: true, optional: false, required: false
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // migration_state - computed: true, optional: false, required: false
    public get migrationState() {
        return this.getNumberAttribute('migration_state');
    }

    // network_arn - computed: true, optional: false, required: false
    public get networkArn() {
        return this.getStringAttribute('network_arn');
    }

    // network_id - computed: true, optional: false, required: false
    public get networkId() {
        return this.getStringAttribute('network_id');
    }

    // network_name - computed: false, optional: false, required: true
    private _networkName?: string; 
    public get networkName() {
        return this.getStringAttribute('network_name');
    }
    public set networkName(value: string) {
        this._networkName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkNameInput() {
        return this._networkName;
    }

    // standing - computed: true, optional: false, required: false
    public get standing() {
        return this.getNumberAttribute('standing');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_level: cdktn.stringToTerraform(this._accessLevel),
            network_name: cdktn.stringToTerraform(this._networkName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_level: {
                value: cdktn.stringToHclTerraform(this._accessLevel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_name: {
                value: cdktn.stringToHclTerraform(this._networkName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcNetwork {
}
