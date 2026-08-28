// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPCCidrBlockProps extends cdktn.TerraformMetaArguments {
    /**
    * Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IPv6 addresses, or the size of the CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block#amazon_provided_ipv_6_cidr_block CcVPCCidrBlock#amazon_provided_ipv_6_cidr_block}
    */
    readonly amazonProvidedIpv6CidrBlock?: boolean | cdktn.IResolvable;
    /**
    * An IPv4 CIDR block to associate with the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block#cidr_block CcVPCCidrBlock#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block#ipv_4_ipam_pool_id CcVPCCidrBlock#ipv_4_ipam_pool_id}
    */
    readonly ipv4IpamPoolId?: string;
    /**
    * The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block#ipv_4_netmask_length CcVPCCidrBlock#ipv_4_netmask_length}
    */
    readonly ipv4NetmaskLength?: number;
    /**
    * An IPv6 CIDR block from the IPv6 address pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block CcVPCCidrBlock#ipv_6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * The name of the location from which we advertise the IPV6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block_network_border_group CcVPCCidrBlock#ipv_6_cidr_block_network_border_group}
    */
    readonly ipv6CidrBlockNetworkBorderGroup?: string;
    /**
    * The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block#ipv_6_ipam_pool_id CcVPCCidrBlock#ipv_6_ipam_pool_id}
    */
    readonly ipv6IpamPoolId?: string;
    /**
    * The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block#ipv_6_netmask_length CcVPCCidrBlock#ipv_6_netmask_length}
    */
    readonly ipv6NetmaskLength?: number;
    /**
    * The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block#ipv_6_pool CcVPCCidrBlock#ipv_6_pool}
    */
    readonly ipv6Pool?: string;
    /**
    * The ID of the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block#vpc_id CcVPCCidrBlock#vpc_id}
    */
    readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block awscc_ec2_vpc_cidr_block}
*/
export class CcVPCCidrBlock extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpc_cidr_block";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPCCidrBlock resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPCCidrBlock to import
    * @param importFromId The id of the existing CcVPCCidrBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPCCidrBlock to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc_cidr_block", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_cidr_block awscc_ec2_vpc_cidr_block} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPCCidrBlockProps
    */
    public constructor(scope: Construct, id: string, config: CcVPCCidrBlockProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpc_cidr_block',
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
        this._amazonProvidedIpv6CidrBlock = config.amazonProvidedIpv6CidrBlock;
        this._cidrBlock = config.cidrBlock;
        this._ipv4IpamPoolId = config.ipv4IpamPoolId;
        this._ipv4NetmaskLength = config.ipv4NetmaskLength;
        this._ipv6CidrBlock = config.ipv6CidrBlock;
        this._ipv6CidrBlockNetworkBorderGroup = config.ipv6CidrBlockNetworkBorderGroup;
        this._ipv6IpamPoolId = config.ipv6IpamPoolId;
        this._ipv6NetmaskLength = config.ipv6NetmaskLength;
        this._ipv6Pool = config.ipv6Pool;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // amazon_provided_ipv_6_cidr_block - computed: true, optional: true, required: false
    private _amazonProvidedIpv6CidrBlock?: boolean | cdktn.IResolvable; 
    public get amazonProvidedIpv6CidrBlock() {
        return this.getBooleanAttribute('amazon_provided_ipv_6_cidr_block');
    }
    public set amazonProvidedIpv6CidrBlock(value: boolean | cdktn.IResolvable) {
        this._amazonProvidedIpv6CidrBlock = value;
    }
    public resetAmazonProvidedIpv6CidrBlock() {
        this._amazonProvidedIpv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonProvidedIpv6CidrBlockInput() {
        return this._amazonProvidedIpv6CidrBlock;
    }

    // cidr_block - computed: true, optional: true, required: false
    private _cidrBlock?: string; 
    public get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string) {
        this._cidrBlock = value;
    }
    public resetCidrBlock() {
        this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
        return this._cidrBlock;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_source - computed: true, optional: false, required: false
    public get ipSource() {
        return this.getStringAttribute('ip_source');
    }

    // ipv_4_ipam_pool_id - computed: true, optional: true, required: false
    private _ipv4IpamPoolId?: string; 
    public get ipv4IpamPoolId() {
        return this.getStringAttribute('ipv_4_ipam_pool_id');
    }
    public set ipv4IpamPoolId(value: string) {
        this._ipv4IpamPoolId = value;
    }
    public resetIpv4IpamPoolId() {
        this._ipv4IpamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4IpamPoolIdInput() {
        return this._ipv4IpamPoolId;
    }

    // ipv_4_netmask_length - computed: true, optional: true, required: false
    private _ipv4NetmaskLength?: number; 
    public get ipv4NetmaskLength() {
        return this.getNumberAttribute('ipv_4_netmask_length');
    }
    public set ipv4NetmaskLength(value: number) {
        this._ipv4NetmaskLength = value;
    }
    public resetIpv4NetmaskLength() {
        this._ipv4NetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4NetmaskLengthInput() {
        return this._ipv4NetmaskLength;
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

    // ipv_6_cidr_block_network_border_group - computed: true, optional: true, required: false
    private _ipv6CidrBlockNetworkBorderGroup?: string; 
    public get ipv6CidrBlockNetworkBorderGroup() {
        return this.getStringAttribute('ipv_6_cidr_block_network_border_group');
    }
    public set ipv6CidrBlockNetworkBorderGroup(value: string) {
        this._ipv6CidrBlockNetworkBorderGroup = value;
    }
    public resetIpv6CidrBlockNetworkBorderGroup() {
        this._ipv6CidrBlockNetworkBorderGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6CidrBlockNetworkBorderGroupInput() {
        return this._ipv6CidrBlockNetworkBorderGroup;
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

    // ipv_6_pool - computed: true, optional: true, required: false
    private _ipv6Pool?: string; 
    public get ipv6Pool() {
        return this.getStringAttribute('ipv_6_pool');
    }
    public set ipv6Pool(value: string) {
        this._ipv6Pool = value;
    }
    public resetIpv6Pool() {
        this._ipv6Pool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6PoolInput() {
        return this._ipv6Pool;
    }

    // vpc_cidr_block_id - computed: true, optional: false, required: false
    public get vpcCidrBlockId() {
        return this.getStringAttribute('vpc_cidr_block_id');
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
            amazon_provided_ipv_6_cidr_block: cdktn.booleanToTerraform(this._amazonProvidedIpv6CidrBlock),
            cidr_block: cdktn.stringToTerraform(this._cidrBlock),
            ipv_4_ipam_pool_id: cdktn.stringToTerraform(this._ipv4IpamPoolId),
            ipv_4_netmask_length: cdktn.numberToTerraform(this._ipv4NetmaskLength),
            ipv_6_cidr_block: cdktn.stringToTerraform(this._ipv6CidrBlock),
            ipv_6_cidr_block_network_border_group: cdktn.stringToTerraform(this._ipv6CidrBlockNetworkBorderGroup),
            ipv_6_ipam_pool_id: cdktn.stringToTerraform(this._ipv6IpamPoolId),
            ipv_6_netmask_length: cdktn.numberToTerraform(this._ipv6NetmaskLength),
            ipv_6_pool: cdktn.stringToTerraform(this._ipv6Pool),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            amazon_provided_ipv_6_cidr_block: {
                value: cdktn.booleanToHclTerraform(this._amazonProvidedIpv6CidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cidr_block: {
                value: cdktn.stringToHclTerraform(this._cidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv_4_ipam_pool_id: {
                value: cdktn.stringToHclTerraform(this._ipv4IpamPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv_4_netmask_length: {
                value: cdktn.numberToHclTerraform(this._ipv4NetmaskLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ipv_6_cidr_block: {
                value: cdktn.stringToHclTerraform(this._ipv6CidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv_6_cidr_block_network_border_group: {
                value: cdktn.stringToHclTerraform(this._ipv6CidrBlockNetworkBorderGroup),
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
            ipv_6_pool: {
                value: cdktn.stringToHclTerraform(this._ipv6Pool),
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

export namespace CcVPCCidrBlock {
}
