// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRouteProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the carrier gateway.
    *  You can only use this option when the VPC contains a subnet which is associated with a Wavelength Zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#carrier_gateway_id CcRoute#carrier_gateway_id}
    */
    readonly carrierGatewayId?: string;
    /**
    * The Amazon Resource Name (ARN) of the core network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#core_network_arn CcRoute#core_network_arn}
    */
    readonly coreNetworkArn?: string;
    /**
    * The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We modify the specified CIDR block to its canonical form; for example, if you specify ``100.68.0.18/18``, we modify it to ``100.68.0.0/18``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#destination_cidr_block CcRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock?: string;
    /**
    * The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#destination_ipv_6_cidr_block CcRoute#destination_ipv_6_cidr_block}
    */
    readonly destinationIpv6CidrBlock?: string;
    /**
    * The ID of a prefix list used for the destination match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#destination_prefix_list_id CcRoute#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * [IPv6 traffic only] The ID of an egress-only internet gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#egress_only_internet_gateway_id CcRoute#egress_only_internet_gateway_id}
    */
    readonly egressOnlyInternetGatewayId?: string;
    /**
    * The ID of an internet gateway or virtual private gateway attached to your VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#gateway_id CcRoute#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network interface is attached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#instance_id CcRoute#instance_id}
    */
    readonly instanceId?: string;
    /**
    * The ID of the local gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#local_gateway_id CcRoute#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * [IPv4 traffic only] The ID of a NAT gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#nat_gateway_id CcRoute#nat_gateway_id}
    */
    readonly natGatewayId?: string;
    /**
    * The ID of a network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#network_interface_id CcRoute#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * The Amazon Resource Name (ARN) of the ODB network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#odb_network_arn CcRoute#odb_network_arn}
    */
    readonly odbNetworkArn?: string;
    /**
    * The ID of the route table for the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#route_table_id CcRoute#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * The ID of a transit gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#transit_gateway_id CcRoute#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#vpc_endpoint_id CcRoute#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * The ID of a VPC peering connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#vpc_peering_connection_id CcRoute#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route awscc_ec2_route}
*/
export class CcRoute extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_route";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRoute resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRoute to import
    * @param importFromId The id of the existing CcRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRoute to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_route", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route awscc_ec2_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRouteProps
    */
    public constructor(scope: Construct, id: string, config: CcRouteProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_route',
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
        this._carrierGatewayId = config.carrierGatewayId;
        this._coreNetworkArn = config.coreNetworkArn;
        this._destinationCidrBlock = config.destinationCidrBlock;
        this._destinationIpv6CidrBlock = config.destinationIpv6CidrBlock;
        this._destinationPrefixListId = config.destinationPrefixListId;
        this._egressOnlyInternetGatewayId = config.egressOnlyInternetGatewayId;
        this._gatewayId = config.gatewayId;
        this._instanceId = config.instanceId;
        this._localGatewayId = config.localGatewayId;
        this._natGatewayId = config.natGatewayId;
        this._networkInterfaceId = config.networkInterfaceId;
        this._odbNetworkArn = config.odbNetworkArn;
        this._routeTableId = config.routeTableId;
        this._transitGatewayId = config.transitGatewayId;
        this._vpcEndpointId = config.vpcEndpointId;
        this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // carrier_gateway_id - computed: true, optional: true, required: false
    private _carrierGatewayId?: string; 
    public get carrierGatewayId() {
        return this.getStringAttribute('carrier_gateway_id');
    }
    public set carrierGatewayId(value: string) {
        this._carrierGatewayId = value;
    }
    public resetCarrierGatewayId() {
        this._carrierGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get carrierGatewayIdInput() {
        return this._carrierGatewayId;
    }

    // cidr_block - computed: true, optional: false, required: false
    public get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }

    // core_network_arn - computed: true, optional: true, required: false
    private _coreNetworkArn?: string; 
    public get coreNetworkArn() {
        return this.getStringAttribute('core_network_arn');
    }
    public set coreNetworkArn(value: string) {
        this._coreNetworkArn = value;
    }
    public resetCoreNetworkArn() {
        this._coreNetworkArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coreNetworkArnInput() {
        return this._coreNetworkArn;
    }

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

    // destination_ipv_6_cidr_block - computed: true, optional: true, required: false
    private _destinationIpv6CidrBlock?: string; 
    public get destinationIpv6CidrBlock() {
        return this.getStringAttribute('destination_ipv_6_cidr_block');
    }
    public set destinationIpv6CidrBlock(value: string) {
        this._destinationIpv6CidrBlock = value;
    }
    public resetDestinationIpv6CidrBlock() {
        this._destinationIpv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationIpv6CidrBlockInput() {
        return this._destinationIpv6CidrBlock;
    }

    // destination_prefix_list_id - computed: true, optional: true, required: false
    private _destinationPrefixListId?: string; 
    public get destinationPrefixListId() {
        return this.getStringAttribute('destination_prefix_list_id');
    }
    public set destinationPrefixListId(value: string) {
        this._destinationPrefixListId = value;
    }
    public resetDestinationPrefixListId() {
        this._destinationPrefixListId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPrefixListIdInput() {
        return this._destinationPrefixListId;
    }

    // egress_only_internet_gateway_id - computed: true, optional: true, required: false
    private _egressOnlyInternetGatewayId?: string; 
    public get egressOnlyInternetGatewayId() {
        return this.getStringAttribute('egress_only_internet_gateway_id');
    }
    public set egressOnlyInternetGatewayId(value: string) {
        this._egressOnlyInternetGatewayId = value;
    }
    public resetEgressOnlyInternetGatewayId() {
        this._egressOnlyInternetGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressOnlyInternetGatewayIdInput() {
        return this._egressOnlyInternetGatewayId;
    }

    // gateway_id - computed: true, optional: true, required: false
    private _gatewayId?: string; 
    public get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    public set gatewayId(value: string) {
        this._gatewayId = value;
    }
    public resetGatewayId() {
        this._gatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayIdInput() {
        return this._gatewayId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_id - computed: true, optional: true, required: false
    private _instanceId?: string; 
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
    public resetInstanceId() {
        this._instanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
        return this._instanceId;
    }

    // local_gateway_id - computed: true, optional: true, required: false
    private _localGatewayId?: string; 
    public get localGatewayId() {
        return this.getStringAttribute('local_gateway_id');
    }
    public set localGatewayId(value: string) {
        this._localGatewayId = value;
    }
    public resetLocalGatewayId() {
        this._localGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayIdInput() {
        return this._localGatewayId;
    }

    // nat_gateway_id - computed: true, optional: true, required: false
    private _natGatewayId?: string; 
    public get natGatewayId() {
        return this.getStringAttribute('nat_gateway_id');
    }
    public set natGatewayId(value: string) {
        this._natGatewayId = value;
    }
    public resetNatGatewayId() {
        this._natGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get natGatewayIdInput() {
        return this._natGatewayId;
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

    // odb_network_arn - computed: true, optional: true, required: false
    private _odbNetworkArn?: string; 
    public get odbNetworkArn() {
        return this.getStringAttribute('odb_network_arn');
    }
    public set odbNetworkArn(value: string) {
        this._odbNetworkArn = value;
    }
    public resetOdbNetworkArn() {
        this._odbNetworkArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get odbNetworkArnInput() {
        return this._odbNetworkArn;
    }

    // route_table_id - computed: false, optional: false, required: true
    private _routeTableId?: string; 
    public get routeTableId() {
        return this.getStringAttribute('route_table_id');
    }
    public set routeTableId(value: string) {
        this._routeTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeTableIdInput() {
        return this._routeTableId;
    }

    // transit_gateway_id - computed: true, optional: true, required: false
    private _transitGatewayId?: string; 
    public get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string) {
        this._transitGatewayId = value;
    }
    public resetTransitGatewayId() {
        this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
        return this._transitGatewayId;
    }

    // vpc_endpoint_id - computed: true, optional: true, required: false
    private _vpcEndpointId?: string; 
    public get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string) {
        this._vpcEndpointId = value;
    }
    public resetVpcEndpointId() {
        this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
        return this._vpcEndpointId;
    }

    // vpc_peering_connection_id - computed: true, optional: true, required: false
    private _vpcPeeringConnectionId?: string; 
    public get vpcPeeringConnectionId() {
        return this.getStringAttribute('vpc_peering_connection_id');
    }
    public set vpcPeeringConnectionId(value: string) {
        this._vpcPeeringConnectionId = value;
    }
    public resetVpcPeeringConnectionId() {
        this._vpcPeeringConnectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcPeeringConnectionIdInput() {
        return this._vpcPeeringConnectionId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            carrier_gateway_id: cdktn.stringToTerraform(this._carrierGatewayId),
            core_network_arn: cdktn.stringToTerraform(this._coreNetworkArn),
            destination_cidr_block: cdktn.stringToTerraform(this._destinationCidrBlock),
            destination_ipv_6_cidr_block: cdktn.stringToTerraform(this._destinationIpv6CidrBlock),
            destination_prefix_list_id: cdktn.stringToTerraform(this._destinationPrefixListId),
            egress_only_internet_gateway_id: cdktn.stringToTerraform(this._egressOnlyInternetGatewayId),
            gateway_id: cdktn.stringToTerraform(this._gatewayId),
            instance_id: cdktn.stringToTerraform(this._instanceId),
            local_gateway_id: cdktn.stringToTerraform(this._localGatewayId),
            nat_gateway_id: cdktn.stringToTerraform(this._natGatewayId),
            network_interface_id: cdktn.stringToTerraform(this._networkInterfaceId),
            odb_network_arn: cdktn.stringToTerraform(this._odbNetworkArn),
            route_table_id: cdktn.stringToTerraform(this._routeTableId),
            transit_gateway_id: cdktn.stringToTerraform(this._transitGatewayId),
            vpc_endpoint_id: cdktn.stringToTerraform(this._vpcEndpointId),
            vpc_peering_connection_id: cdktn.stringToTerraform(this._vpcPeeringConnectionId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            carrier_gateway_id: {
                value: cdktn.stringToHclTerraform(this._carrierGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            core_network_arn: {
                value: cdktn.stringToHclTerraform(this._coreNetworkArn),
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
            destination_ipv_6_cidr_block: {
                value: cdktn.stringToHclTerraform(this._destinationIpv6CidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_prefix_list_id: {
                value: cdktn.stringToHclTerraform(this._destinationPrefixListId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            egress_only_internet_gateway_id: {
                value: cdktn.stringToHclTerraform(this._egressOnlyInternetGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway_id: {
                value: cdktn.stringToHclTerraform(this._gatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_id: {
                value: cdktn.stringToHclTerraform(this._instanceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            local_gateway_id: {
                value: cdktn.stringToHclTerraform(this._localGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            nat_gateway_id: {
                value: cdktn.stringToHclTerraform(this._natGatewayId),
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
            odb_network_arn: {
                value: cdktn.stringToHclTerraform(this._odbNetworkArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            route_table_id: {
                value: cdktn.stringToHclTerraform(this._routeTableId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            transit_gateway_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_endpoint_id: {
                value: cdktn.stringToHclTerraform(this._vpcEndpointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_peering_connection_id: {
                value: cdktn.stringToHclTerraform(this._vpcPeeringConnectionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcRoute {
}
