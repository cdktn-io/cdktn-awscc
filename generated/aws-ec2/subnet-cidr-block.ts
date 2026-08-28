// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSubnetCidrBlockProps extends cdktn.TerraformMetaArguments {
    /**
    * The IPv6 network range for the subnet, in CIDR notation. The subnet size must use a /64 prefix length
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#ipv_6_cidr_block CcSubnetCidrBlock#ipv_6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * The ID of an IPv6 Amazon VPC IP Address Manager (IPAM) pool from which to allocate, to get the subnet's CIDR
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#ipv_6_ipam_pool_id CcSubnetCidrBlock#ipv_6_ipam_pool_id}
    */
    readonly ipv6IpamPoolId?: string;
    /**
    * The netmask length of the IPv6 CIDR to allocate to the subnet from an IPAM pool
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#ipv_6_netmask_length CcSubnetCidrBlock#ipv_6_netmask_length}
    */
    readonly ipv6NetmaskLength?: number;
    /**
    * The ID of the subnet
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#subnet_id CcSubnetCidrBlock#subnet_id}
    */
    readonly subnetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block awscc_ec2_subnet_cidr_block}
*/
export class CcSubnetCidrBlock extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_subnet_cidr_block";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSubnetCidrBlock resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSubnetCidrBlock to import
    * @param importFromId The id of the existing CcSubnetCidrBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSubnetCidrBlock to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_subnet_cidr_block", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_subnet_cidr_block awscc_ec2_subnet_cidr_block} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSubnetCidrBlockProps
    */
    public constructor(scope: Construct, id: string, config: CcSubnetCidrBlockProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_subnet_cidr_block',
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
        this._ipv6CidrBlock = config.ipv6CidrBlock;
        this._ipv6IpamPoolId = config.ipv6IpamPoolId;
        this._ipv6NetmaskLength = config.ipv6NetmaskLength;
        this._subnetId = config.subnetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_source - computed: true, optional: false, required: false
    public get ipSource() {
        return this.getStringAttribute('ip_source');
    }

    // ipv_6_address_attribute - computed: true, optional: false, required: false
    public get ipv6AddressAttribute() {
        return this.getStringAttribute('ipv_6_address_attribute');
    }

    // ipv_6_cidr_block - computed: true, optional: true, required: false
    private _ipv6CidrBlock?: string; 
    public get ipv6CidrBlock() {
        return this.getStringAttribute('ipv_6_cidr_block');
    }
    public set ipv6CidrBlock(value: string) {
        this._ipv6CidrBlock = value;
    }
    public resetIpv6CidrBlock() {
        this._ipv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6CidrBlockInput() {
        return this._ipv6CidrBlock;
    }

    // ipv_6_ipam_pool_id - computed: true, optional: true, required: false
    private _ipv6IpamPoolId?: string; 
    public get ipv6IpamPoolId() {
        return this.getStringAttribute('ipv_6_ipam_pool_id');
    }
    public set ipv6IpamPoolId(value: string) {
        this._ipv6IpamPoolId = value;
    }
    public resetIpv6IpamPoolId() {
        this._ipv6IpamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6IpamPoolIdInput() {
        return this._ipv6IpamPoolId;
    }

    // ipv_6_netmask_length - computed: true, optional: true, required: false
    private _ipv6NetmaskLength?: number; 
    public get ipv6NetmaskLength() {
        return this.getNumberAttribute('ipv_6_netmask_length');
    }
    public set ipv6NetmaskLength(value: number) {
        this._ipv6NetmaskLength = value;
    }
    public resetIpv6NetmaskLength() {
        this._ipv6NetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6NetmaskLengthInput() {
        return this._ipv6NetmaskLength;
    }

    // subnet_cidr_block_id - computed: true, optional: false, required: false
    public get subnetCidrBlockId() {
        return this.getStringAttribute('subnet_cidr_block_id');
    }

    // subnet_id - computed: false, optional: false, required: true
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
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
            ipv_6_cidr_block: cdktn.stringToTerraform(this._ipv6CidrBlock),
            ipv_6_ipam_pool_id: cdktn.stringToTerraform(this._ipv6IpamPoolId),
            ipv_6_netmask_length: cdktn.numberToTerraform(this._ipv6NetmaskLength),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ipv_6_cidr_block: {
                value: cdktn.stringToHclTerraform(this._ipv6CidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv_6_ipam_pool_id: {
                value: cdktn.stringToHclTerraform(this._ipv6IpamPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv_6_netmask_length: {
                value: cdktn.numberToHclTerraform(this._ipv6NetmaskLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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

export namespace CcSubnetCidrBlock {
}
