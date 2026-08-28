// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_route

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLocalGatewayRouteProps extends cdktn.TerraformMetaArguments {
    /**
    * The CIDR block used for destination matches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_route#destination_cidr_block CcLocalGatewayRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock?: string;
    /**
    * The ID of the local gateway route table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_route#local_gateway_route_table_id CcLocalGatewayRoute#local_gateway_route_table_id}
    */
    readonly localGatewayRouteTableId?: string;
    /**
    * The ID of the virtual interface group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_route#local_gateway_virtual_interface_group_id CcLocalGatewayRoute#local_gateway_virtual_interface_group_id}
    */
    readonly localGatewayVirtualInterfaceGroupId?: string;
    /**
    * The ID of the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_route#network_interface_id CcLocalGatewayRoute#network_interface_id}
    */
    readonly networkInterfaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_route awscc_ec2_local_gateway_route}
*/
export class CcLocalGatewayRoute extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_local_gateway_route";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLocalGatewayRoute resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLocalGatewayRoute to import
    * @param importFromId The id of the existing CcLocalGatewayRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLocalGatewayRoute to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_local_gateway_route", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_local_gateway_route awscc_ec2_local_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLocalGatewayRouteProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcLocalGatewayRouteProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_local_gateway_route',
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
        this._destinationCidrBlock = config.destinationCidrBlock;
        this._localGatewayRouteTableId = config.localGatewayRouteTableId;
        this._localGatewayVirtualInterfaceGroupId = config.localGatewayVirtualInterfaceGroupId;
        this._networkInterfaceId = config.networkInterfaceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // destination_cidr_block - computed: true, optional: true, required: false
    private _destinationCidrBlock?: string; 
    public get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string) {
        this._destinationCidrBlock = value;
    }
    public resetDestinationCidrBlock() {
        this._destinationCidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
        return this._destinationCidrBlock;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // local_gateway_route_table_id - computed: true, optional: true, required: false
    private _localGatewayRouteTableId?: string; 
    public get localGatewayRouteTableId() {
        return this.getStringAttribute('local_gateway_route_table_id');
    }
    public set localGatewayRouteTableId(value: string) {
        this._localGatewayRouteTableId = value;
    }
    public resetLocalGatewayRouteTableId() {
        this._localGatewayRouteTableId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayRouteTableIdInput() {
        return this._localGatewayRouteTableId;
    }

    // local_gateway_virtual_interface_group_id - computed: true, optional: true, required: false
    private _localGatewayVirtualInterfaceGroupId?: string; 
    public get localGatewayVirtualInterfaceGroupId() {
        return this.getStringAttribute('local_gateway_virtual_interface_group_id');
    }
    public set localGatewayVirtualInterfaceGroupId(value: string) {
        this._localGatewayVirtualInterfaceGroupId = value;
    }
    public resetLocalGatewayVirtualInterfaceGroupId() {
        this._localGatewayVirtualInterfaceGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayVirtualInterfaceGroupIdInput() {
        return this._localGatewayVirtualInterfaceGroupId;
    }

    // network_interface_id - computed: true, optional: true, required: false
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
        this._networkInterfaceId = value;
    }
    public resetNetworkInterfaceId() {
        this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            destination_cidr_block: cdktn.stringToTerraform(this._destinationCidrBlock),
            local_gateway_route_table_id: cdktn.stringToTerraform(this._localGatewayRouteTableId),
            local_gateway_virtual_interface_group_id: cdktn.stringToTerraform(this._localGatewayVirtualInterfaceGroupId),
            network_interface_id: cdktn.stringToTerraform(this._networkInterfaceId),
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
            local_gateway_route_table_id: {
                value: cdktn.stringToHclTerraform(this._localGatewayRouteTableId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            local_gateway_virtual_interface_group_id: {
                value: cdktn.stringToHclTerraform(this._localGatewayVirtualInterfaceGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_interface_id: {
                value: cdktn.stringToHclTerraform(this._networkInterfaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcLocalGatewayRoute {
}
