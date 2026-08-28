// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection_route

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPNConnectionRouteProps extends cdktn.TerraformMetaArguments {
    /**
    * The CIDR block associated with the local subnet of the customer network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection_route#destination_cidr_block CcVPNConnectionRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * The ID of the VPN connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection_route#vpn_connection_id CcVPNConnectionRoute#vpn_connection_id}
    */
    readonly vpnConnectionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection_route awscc_ec2_vpn_connection_route}
*/
export class CcVPNConnectionRoute extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpn_connection_route";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPNConnectionRoute resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPNConnectionRoute to import
    * @param importFromId The id of the existing CcVPNConnectionRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPNConnectionRoute to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpn_connection_route", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpn_connection_route awscc_ec2_vpn_connection_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPNConnectionRouteProps
    */
    public constructor(scope: Construct, id: string, config: CcVPNConnectionRouteProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpn_connection_route',
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
        this._destinationCidrBlock = config.destinationCidrBlock;
        this._vpnConnectionId = config.vpnConnectionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // destination_cidr_block - computed: false, optional: false, required: true
    private _destinationCidrBlock?: string; 
    public get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string) {
        this._destinationCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
        return this._destinationCidrBlock;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // vpn_connection_id - computed: false, optional: false, required: true
    private _vpnConnectionId?: string; 
    public get vpnConnectionId() {
        return this.getStringAttribute('vpn_connection_id');
    }
    public set vpnConnectionId(value: string) {
        this._vpnConnectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnConnectionIdInput() {
        return this._vpnConnectionId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            destination_cidr_block: cdktn.stringToTerraform(this._destinationCidrBlock),
            vpn_connection_id: cdktn.stringToTerraform(this._vpnConnectionId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            destination_cidr_block: {
                value: cdktn.stringToHclTerraform(this._destinationCidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpn_connection_id: {
                value: cdktn.stringToHclTerraform(this._vpnConnectionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcVPNConnectionRoute {
}
