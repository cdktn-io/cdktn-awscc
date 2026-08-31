// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpcdhcp_options_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPCDHCPOptionsAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the DHCP options set, or default to associate no DHCP options with the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpcdhcp_options_association#dhcp_options_id CcVPCDHCPOptionsAssociation#dhcp_options_id}
    */
    readonly dhcpOptionsId: string;
    /**
    * The ID of the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpcdhcp_options_association#vpc_id CcVPCDHCPOptionsAssociation#vpc_id}
    */
    readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpcdhcp_options_association awscc_ec2_vpcdhcp_options_association}
*/
export class CcVPCDHCPOptionsAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpcdhcp_options_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPCDHCPOptionsAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPCDHCPOptionsAssociation to import
    * @param importFromId The id of the existing CcVPCDHCPOptionsAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpcdhcp_options_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPCDHCPOptionsAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpcdhcp_options_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpcdhcp_options_association awscc_ec2_vpcdhcp_options_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPCDHCPOptionsAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcVPCDHCPOptionsAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpcdhcp_options_association',
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
        this._dhcpOptionsId = config.dhcpOptionsId;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dhcp_options_id - computed: false, optional: false, required: true
    private _dhcpOptionsId?: string; 
    public get dhcpOptionsId() {
        return this.getStringAttribute('dhcp_options_id');
    }
    public set dhcpOptionsId(value: string) {
        this._dhcpOptionsId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dhcpOptionsIdInput() {
        return this._dhcpOptionsId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            dhcp_options_id: cdktn.stringToTerraform(this._dhcpOptionsId),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            dhcp_options_id: {
                value: cdktn.stringToHclTerraform(this._dhcpOptionsId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcVPCDHCPOptionsAssociation {
}
