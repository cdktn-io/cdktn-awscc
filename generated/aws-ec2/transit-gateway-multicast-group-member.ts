// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_group_member

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayMulticastGroupMemberProps extends cdktn.TerraformMetaArguments {
    /**
    * The IP address assigned to the transit gateway multicast group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_group_member#group_ip_address CcTransitGatewayMulticastGroupMember#group_ip_address}
    */
    readonly groupIpAddress: string;
    /**
    * The ID of the transit gateway attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_group_member#network_interface_id CcTransitGatewayMulticastGroupMember#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * The ID of the transit gateway multicast domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_group_member#transit_gateway_multicast_domain_id CcTransitGatewayMulticastGroupMember#transit_gateway_multicast_domain_id}
    */
    readonly transitGatewayMulticastDomainId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_group_member awscc_ec2_transit_gateway_multicast_group_member}
*/
export class CcTransitGatewayMulticastGroupMember extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_transit_gateway_multicast_group_member";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayMulticastGroupMember resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayMulticastGroupMember to import
    * @param importFromId The id of the existing CcTransitGatewayMulticastGroupMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_group_member#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayMulticastGroupMember to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_multicast_group_member", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_multicast_group_member awscc_ec2_transit_gateway_multicast_group_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayMulticastGroupMemberProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayMulticastGroupMemberProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_transit_gateway_multicast_group_member',
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
        this._groupIpAddress = config.groupIpAddress;
        this._networkInterfaceId = config.networkInterfaceId;
        this._transitGatewayMulticastDomainId = config.transitGatewayMulticastDomainId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // group_ip_address - computed: false, optional: false, required: true
    private _groupIpAddress?: string; 
    public get groupIpAddress() {
        return this.getStringAttribute('group_ip_address');
    }
    public set groupIpAddress(value: string) {
        this._groupIpAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIpAddressInput() {
        return this._groupIpAddress;
    }

    // group_member - computed: true, optional: false, required: false
    public get groupMember() {
        return this.getBooleanAttribute('group_member');
    }

    // group_source - computed: true, optional: false, required: false
    public get groupSource() {
        return this.getBooleanAttribute('group_source');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // member_type - computed: true, optional: false, required: false
    public get memberType() {
        return this.getStringAttribute('member_type');
    }

    // network_interface_id - computed: false, optional: false, required: true
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
        this._networkInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }

    // resource_id - computed: true, optional: false, required: false
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }

    // resource_type - computed: true, optional: false, required: false
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }

    // transit_gateway_attachment_id - computed: true, optional: false, required: false
    public get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }

    // transit_gateway_multicast_domain_id - computed: false, optional: false, required: true
    private _transitGatewayMulticastDomainId?: string; 
    public get transitGatewayMulticastDomainId() {
        return this.getStringAttribute('transit_gateway_multicast_domain_id');
    }
    public set transitGatewayMulticastDomainId(value: string) {
        this._transitGatewayMulticastDomainId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayMulticastDomainIdInput() {
        return this._transitGatewayMulticastDomainId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            group_ip_address: cdktn.stringToTerraform(this._groupIpAddress),
            network_interface_id: cdktn.stringToTerraform(this._networkInterfaceId),
            transit_gateway_multicast_domain_id: cdktn.stringToTerraform(this._transitGatewayMulticastDomainId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            group_ip_address: {
                value: cdktn.stringToHclTerraform(this._groupIpAddress),
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
            transit_gateway_multicast_domain_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayMulticastDomainId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTransitGatewayMulticastGroupMember {
}
