// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClientVpnRouteProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the Client VPN endpoint to which to add the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route#client_vpn_endpoint_id CcClientVpnRoute#client_vpn_endpoint_id}
    */
    readonly clientVpnEndpointId: string;
    /**
    * A brief description of the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route#description CcClientVpnRoute#description}
    */
    readonly description?: string;
    /**
    * The IPv4 address range, in CIDR notation, of the route destination. For example: To add a route for Internet access, enter 0.0.0.0/0. To add a route for a peered VPC, enter the peered VPC's IPv4 CIDR range. To add a route for an on-premises network, enter the AWS Site-to-Site VPN connection's IPv4 CIDR range. To add a route for the local network, enter the client CIDR range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route#destination_cidr_block CcClientVpnRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * The ID of the subnet through which you want to route traffic. The specified subnet must be an existing target network of the Client VPN endpoint. Alternatively, if you're adding a route for the local network, specify local.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route#target_vpc_subnet_id CcClientVpnRoute#target_vpc_subnet_id}
    */
    readonly targetVpcSubnetId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route awscc_ec2_client_vpn_route}
*/
export class CcClientVpnRoute extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_client_vpn_route";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcClientVpnRoute resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcClientVpnRoute to import
    * @param importFromId The id of the existing CcClientVpnRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcClientVpnRoute to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_client_vpn_route", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_client_vpn_route awscc_ec2_client_vpn_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClientVpnRouteProps
    */
    public constructor(scope: Construct, id: string, config: CcClientVpnRouteProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_client_vpn_route',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.105.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._clientVpnEndpointId = config.clientVpnEndpointId;
        this._description = config.description;
        this._destinationCidrBlock = config.destinationCidrBlock;
        this._targetVpcSubnetId = config.targetVpcSubnetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // client_vpn_endpoint_id - computed: false, optional: false, required: true
    private _clientVpnEndpointId?: string; 
    public get clientVpnEndpointId() {
        return this.getStringAttribute('client_vpn_endpoint_id');
    }
    public set clientVpnEndpointId(value: string) {
        this._clientVpnEndpointId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientVpnEndpointIdInput() {
        return this._clientVpnEndpointId;
    }

    // client_vpn_route_id - computed: true, optional: false, required: false
    public get clientVpnRouteId() {
        return this.getStringAttribute('client_vpn_route_id');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

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

    // target_vpc_subnet_id - computed: true, optional: true, required: false
    private _targetVpcSubnetId?: string; 
    public get targetVpcSubnetId() {
        return this.getStringAttribute('target_vpc_subnet_id');
    }
    public set targetVpcSubnetId(value: string) {
        this._targetVpcSubnetId = value;
    }
    public resetTargetVpcSubnetId() {
        this._targetVpcSubnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetVpcSubnetIdInput() {
        return this._targetVpcSubnetId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            client_vpn_endpoint_id: cdktn.stringToTerraform(this._clientVpnEndpointId),
            description: cdktn.stringToTerraform(this._description),
            destination_cidr_block: cdktn.stringToTerraform(this._destinationCidrBlock),
            target_vpc_subnet_id: cdktn.stringToTerraform(this._targetVpcSubnetId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            client_vpn_endpoint_id: {
                value: cdktn.stringToHclTerraform(this._clientVpnEndpointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_cidr_block: {
                value: cdktn.stringToHclTerraform(this._destinationCidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_vpc_subnet_id: {
                value: cdktn.stringToHclTerraform(this._targetVpcSubnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcClientVpnRoute {
}
