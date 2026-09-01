// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_eip_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEIPAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The allocation ID. This is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_eip_association#allocation_id CcEIPAssociation#allocation_id}
    */
    readonly allocationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_eip_association#eip CcEIPAssociation#eip}
    */
    readonly eip?: string;
    /**
    * The ID of the instance. The instance must have exactly one attached network interface. You can specify either the instance ID or the network interface ID, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_eip_association#instance_id CcEIPAssociation#instance_id}
    */
    readonly instanceId?: string;
    /**
    * The ID of the network interface. If the instance has more than one network interface, you must specify a network interface ID.
    *  You can specify either the instance ID or the network interface ID, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_eip_association#network_interface_id CcEIPAssociation#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * The primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_eip_association#private_ip_address CcEIPAssociation#private_ip_address}
    */
    readonly privateIpAddress?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_eip_association awscc_ec2_eip_association}
*/
export class CcEIPAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_eip_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEIPAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEIPAssociation to import
    * @param importFromId The id of the existing CcEIPAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_eip_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEIPAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_eip_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_eip_association awscc_ec2_eip_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEIPAssociationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcEIPAssociationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_eip_association',
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
        this._allocationId = config.allocationId;
        this._eip = config.eip;
        this._instanceId = config.instanceId;
        this._networkInterfaceId = config.networkInterfaceId;
        this._privateIpAddress = config.privateIpAddress;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocation_id - computed: true, optional: true, required: false
    private _allocationId?: string; 
    public get allocationId() {
        return this.getStringAttribute('allocation_id');
    }
    public set allocationId(value: string) {
        this._allocationId = value;
    }
    public resetAllocationId() {
        this._allocationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationIdInput() {
        return this._allocationId;
    }

    // eip - computed: true, optional: true, required: false
    private _eip?: string; 
    public get eip() {
        return this.getStringAttribute('eip');
    }
    public set eip(value: string) {
        this._eip = value;
    }
    public resetEip() {
        this._eip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eipInput() {
        return this._eip;
    }

    // eip_association_id - computed: true, optional: false, required: false
    public get eipAssociationId() {
        return this.getStringAttribute('eip_association_id');
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

    // private_ip_address - computed: true, optional: true, required: false
    private _privateIpAddress?: string; 
    public get privateIpAddress() {
        return this.getStringAttribute('private_ip_address');
    }
    public set privateIpAddress(value: string) {
        this._privateIpAddress = value;
    }
    public resetPrivateIpAddress() {
        this._privateIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpAddressInput() {
        return this._privateIpAddress;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            allocation_id: cdktn.stringToTerraform(this._allocationId),
            eip: cdktn.stringToTerraform(this._eip),
            instance_id: cdktn.stringToTerraform(this._instanceId),
            network_interface_id: cdktn.stringToTerraform(this._networkInterfaceId),
            private_ip_address: cdktn.stringToTerraform(this._privateIpAddress),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allocation_id: {
                value: cdktn.stringToHclTerraform(this._allocationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            eip: {
                value: cdktn.stringToHclTerraform(this._eip),
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
            network_interface_id: {
                value: cdktn.stringToHclTerraform(this._networkInterfaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            private_ip_address: {
                value: cdktn.stringToHclTerraform(this._privateIpAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcEIPAssociation {
}
