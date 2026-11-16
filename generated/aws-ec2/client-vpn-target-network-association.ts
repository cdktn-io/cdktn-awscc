// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClientVpnTargetNetworkAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The Availability Zone to associate with the Client VPN endpoint. Used for Transit Gateway-based endpoints in place of SubnetId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association#availability_zone CcClientVpnTargetNetworkAssociation#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The ID of the Availability Zone to associate with the Client VPN endpoint. Used for Transit Gateway-based endpoints in place of SubnetId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association#availability_zone_id CcClientVpnTargetNetworkAssociation#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * The ID of the Client VPN endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association#client_vpn_endpoint_id CcClientVpnTargetNetworkAssociation#client_vpn_endpoint_id}
    */
    readonly clientVpnEndpointId: string;
    /**
    * The ID of the subnet to associate with the Client VPN endpoint. Required for VPC-based endpoints. For Transit Gateway-based endpoints, use AvailabilityZone or AvailabilityZoneId instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association#subnet_id CcClientVpnTargetNetworkAssociation#subnet_id}
    */
    readonly subnetId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association awscc_ec2_client_vpn_target_network_association}
*/
export class CcClientVpnTargetNetworkAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_client_vpn_target_network_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcClientVpnTargetNetworkAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcClientVpnTargetNetworkAssociation to import
    * @param importFromId The id of the existing CcClientVpnTargetNetworkAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcClientVpnTargetNetworkAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_client_vpn_target_network_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_target_network_association awscc_ec2_client_vpn_target_network_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClientVpnTargetNetworkAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcClientVpnTargetNetworkAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_client_vpn_target_network_association',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._availabilityZone = config.availabilityZone;
        this._availabilityZoneId = config.availabilityZoneId;
        this._clientVpnEndpointId = config.clientVpnEndpointId;
        this._subnetId = config.subnetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
        return this.getStringAttribute('association_id');
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // availability_zone_id - computed: true, optional: true, required: false
    private _availabilityZoneId?: string; 
    public get availabilityZoneId() {
        return this.getStringAttribute('availability_zone_id');
    }
    public set availabilityZoneId(value: string) {
        this._availabilityZoneId = value;
    }
    public resetAvailabilityZoneId() {
        this._availabilityZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdInput() {
        return this._availabilityZoneId;
    }

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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            availability_zone_id: cdktn.stringToTerraform(this._availabilityZoneId),
            client_vpn_endpoint_id: cdktn.stringToTerraform(this._clientVpnEndpointId),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            availability_zone_id: {
                value: cdktn.stringToHclTerraform(this._availabilityZoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            client_vpn_endpoint_id: {
                value: cdktn.stringToHclTerraform(this._clientVpnEndpointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subnet_id: {
                value: cdktn.stringToHclTerraform(this._subnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcClientVpnTargetNetworkAssociation {
}
