// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSubnetProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether a network interface created in this subnet receives an IPv6 address. The default value is ``false``.
    *  If you specify ``AssignIpv6AddressOnCreation``, you must also specify an IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#assign_ipv_6_address_on_creation CcSubnet#assign_ipv_6_address_on_creation}
    */
    readonly assignIpv6AddressOnCreation?: boolean | cdktn.IResolvable;
    /**
    * The Availability Zone of the subnet.
    *  If you update this property, you must also update the ``CidrBlock`` property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#availability_zone CcSubnet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The AZ ID of the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#availability_zone_id CcSubnet#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * The IPv4 CIDR block assigned to the subnet.
    *  If you update this property, we create a new subnet, and then delete the existing one.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#cidr_block CcSubnet#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
    *   You must first configure a NAT gateway in a public subnet (separate from the subnet containing the IPv6-only workloads). For example, the subnet containing the NAT gateway should have a ``0.0.0.0/0`` route pointing to the internet gateway. For more information, see [Configure DNS64 and NAT64](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-nat64-dns64.html#nat-gateway-nat64-dns64-walkthrough) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#enable_dns_64 CcSubnet#enable_dns_64}
    */
    readonly enableDns64?: boolean | cdktn.IResolvable;
    /**
    * Indicates the device position for local network interfaces in this subnet. For example, ``1`` indicates local network interfaces in this subnet are the secondary network interface (eth1).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#enable_lni_at_device_index CcSubnet#enable_lni_at_device_index}
    */
    readonly enableLniAtDeviceIndex?: number;
    /**
    * An IPv4 IPAM pool ID for the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#ipv_4_ipam_pool_id CcSubnet#ipv_4_ipam_pool_id}
    */
    readonly ipv4IpamPoolId?: string;
    /**
    * An IPv4 netmask length for the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#ipv_4_netmask_length CcSubnet#ipv_4_netmask_length}
    */
    readonly ipv4NetmaskLength?: number;
    /**
    * The IPv6 CIDR block.
    *  If you specify ``AssignIpv6AddressOnCreation``, you must also specify an IPv6 CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#ipv_6_cidr_block CcSubnet#ipv_6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * An IPv6 IPAM pool ID for the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#ipv_6_ipam_pool_id CcSubnet#ipv_6_ipam_pool_id}
    */
    readonly ipv6IpamPoolId?: string;
    /**
    * Indicates whether this is an IPv6 only subnet. For more information, see [Subnet basics](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#subnet-basics) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#ipv_6_native CcSubnet#ipv_6_native}
    */
    readonly ipv6Native?: boolean | cdktn.IResolvable;
    /**
    * An IPv6 netmask length for the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#ipv_6_netmask_length CcSubnet#ipv_6_netmask_length}
    */
    readonly ipv6NetmaskLength?: number;
    /**
    * Indicates whether instances launched in this subnet receive a public IPv4 address. The default value is ``false``.
    *  AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the *Public IPv4 Address* tab on the [VPC pricing page](https://docs.aws.amazon.com/vpc/pricing/).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#map_public_ip_on_launch CcSubnet#map_public_ip_on_launch}
    */
    readonly mapPublicIpOnLaunch?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the Outpost.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#outpost_arn CcSubnet#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the *User Guide*.
    *  Available options:
    *   +  EnableResourceNameDnsAAAARecord (true | false)
    *   +  EnableResourceNameDnsARecord (true | false)
    *   +  HostnameType (ip-name | resource-name)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#private_dns_name_options_on_launch CcSubnet#private_dns_name_options_on_launch}
    */
    readonly privateDnsNameOptionsOnLaunch?: CcSubnet.PrivateDnsNameOptionsOnLaunchProperty;
    /**
    * Any tags assigned to the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#tags CcSubnet#tags}
    */
    readonly tags?: CcSubnet.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the VPC the subnet is in.
    *  If you update this property, you must also update the ``CidrBlock`` property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#vpc_id CcSubnet#vpc_id}
    */
    readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet awscc_ec2_subnet}
*/
export class CcSubnet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_subnet";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSubnet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSubnet to import
    * @param importFromId The id of the existing CcSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSubnet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_subnet", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet awscc_ec2_subnet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSubnetProps
    */
    public constructor(scope: Construct, id: string, config: CcSubnetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_subnet',
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
        this._assignIpv6AddressOnCreation = config.assignIpv6AddressOnCreation;
        this._availabilityZone = config.availabilityZone;
        this._availabilityZoneId = config.availabilityZoneId;
        this._cidrBlock = config.cidrBlock;
        this._enableDns64 = config.enableDns64;
        this._enableLniAtDeviceIndex = config.enableLniAtDeviceIndex;
        this._ipv4IpamPoolId = config.ipv4IpamPoolId;
        this._ipv4NetmaskLength = config.ipv4NetmaskLength;
        this._ipv6CidrBlock = config.ipv6CidrBlock;
        this._ipv6IpamPoolId = config.ipv6IpamPoolId;
        this._ipv6Native = config.ipv6Native;
        this._ipv6NetmaskLength = config.ipv6NetmaskLength;
        this._mapPublicIpOnLaunch = config.mapPublicIpOnLaunch;
        this._outpostArn = config.outpostArn;
        this._privateDnsNameOptionsOnLaunch.internalValue = config.privateDnsNameOptionsOnLaunch;
        this._tags.internalValue = config.tags;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // assign_ipv_6_address_on_creation - computed: true, optional: true, required: false
    private _assignIpv6AddressOnCreation?: boolean | cdktn.IResolvable; 
    public get assignIpv6AddressOnCreation() {
        return this.getBooleanAttribute('assign_ipv_6_address_on_creation');
    }
    public set assignIpv6AddressOnCreation(value: boolean | cdktn.IResolvable) {
        this._assignIpv6AddressOnCreation = value;
    }
    public resetAssignIpv6AddressOnCreation() {
        this._assignIpv6AddressOnCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assignIpv6AddressOnCreationInput() {
        return this._assignIpv6AddressOnCreation;
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

    // block_public_access_states - computed: true, optional: false, required: false
    private _blockPublicAccessStates = new CcSubnet.BlockPublicAccessStatesPropertyOutputReference(this, "block_public_access_states");
    public get blockPublicAccessStates() {
        return this._blockPublicAccessStates;
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

    // enable_dns_64 - computed: true, optional: true, required: false
    private _enableDns64?: boolean | cdktn.IResolvable; 
    public get enableDns64() {
        return this.getBooleanAttribute('enable_dns_64');
    }
    public set enableDns64(value: boolean | cdktn.IResolvable) {
        this._enableDns64 = value;
    }
    public resetEnableDns64() {
        this._enableDns64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableDns64Input() {
        return this._enableDns64;
    }

    // enable_lni_at_device_index - computed: true, optional: true, required: false
    private _enableLniAtDeviceIndex?: number; 
    public get enableLniAtDeviceIndex() {
        return this.getNumberAttribute('enable_lni_at_device_index');
    }
    public set enableLniAtDeviceIndex(value: number) {
        this._enableLniAtDeviceIndex = value;
    }
    public resetEnableLniAtDeviceIndex() {
        this._enableLniAtDeviceIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableLniAtDeviceIndexInput() {
        return this._enableLniAtDeviceIndex;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // ipv_6_cidr_blocks - computed: true, optional: false, required: false
    public get ipv6CidrBlocks() {
        return this.getListAttribute('ipv_6_cidr_blocks');
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

    // ipv_6_native - computed: true, optional: true, required: false
    private _ipv6Native?: boolean | cdktn.IResolvable; 
    public get ipv6Native() {
        return this.getBooleanAttribute('ipv_6_native');
    }
    public set ipv6Native(value: boolean | cdktn.IResolvable) {
        this._ipv6Native = value;
    }
    public resetIpv6Native() {
        this._ipv6Native = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6NativeInput() {
        return this._ipv6Native;
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

    // map_public_ip_on_launch - computed: true, optional: true, required: false
    private _mapPublicIpOnLaunch?: boolean | cdktn.IResolvable; 
    public get mapPublicIpOnLaunch() {
        return this.getBooleanAttribute('map_public_ip_on_launch');
    }
    public set mapPublicIpOnLaunch(value: boolean | cdktn.IResolvable) {
        this._mapPublicIpOnLaunch = value;
    }
    public resetMapPublicIpOnLaunch() {
        this._mapPublicIpOnLaunch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mapPublicIpOnLaunchInput() {
        return this._mapPublicIpOnLaunch;
    }

    // network_acl_association_id - computed: true, optional: false, required: false
    public get networkAclAssociationId() {
        return this.getStringAttribute('network_acl_association_id');
    }

    // outpost_arn - computed: true, optional: true, required: false
    private _outpostArn?: string; 
    public get outpostArn() {
        return this.getStringAttribute('outpost_arn');
    }
    public set outpostArn(value: string) {
        this._outpostArn = value;
    }
    public resetOutpostArn() {
        this._outpostArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostArnInput() {
        return this._outpostArn;
    }

    // private_dns_name_options_on_launch - computed: true, optional: true, required: false
    private _privateDnsNameOptionsOnLaunch = new CcSubnet.PrivateDnsNameOptionsOnLaunchPropertyOutputReference(this, "private_dns_name_options_on_launch");
    public get privateDnsNameOptionsOnLaunch() {
        return this._privateDnsNameOptionsOnLaunch;
    }
    public putPrivateDnsNameOptionsOnLaunch(value: CcSubnet.PrivateDnsNameOptionsOnLaunchProperty) {
        this._privateDnsNameOptionsOnLaunch.internalValue = value;
    }
    public resetPrivateDnsNameOptionsOnLaunch() {
        this._privateDnsNameOptionsOnLaunch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateDnsNameOptionsOnLaunchInput() {
        return this._privateDnsNameOptionsOnLaunch.internalValue;
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSubnet.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSubnet.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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
            assign_ipv_6_address_on_creation: cdktn.booleanToTerraform(this._assignIpv6AddressOnCreation),
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            availability_zone_id: cdktn.stringToTerraform(this._availabilityZoneId),
            cidr_block: cdktn.stringToTerraform(this._cidrBlock),
            enable_dns_64: cdktn.booleanToTerraform(this._enableDns64),
            enable_lni_at_device_index: cdktn.numberToTerraform(this._enableLniAtDeviceIndex),
            ipv_4_ipam_pool_id: cdktn.stringToTerraform(this._ipv4IpamPoolId),
            ipv_4_netmask_length: cdktn.numberToTerraform(this._ipv4NetmaskLength),
            ipv_6_cidr_block: cdktn.stringToTerraform(this._ipv6CidrBlock),
            ipv_6_ipam_pool_id: cdktn.stringToTerraform(this._ipv6IpamPoolId),
            ipv_6_native: cdktn.booleanToTerraform(this._ipv6Native),
            ipv_6_netmask_length: cdktn.numberToTerraform(this._ipv6NetmaskLength),
            map_public_ip_on_launch: cdktn.booleanToTerraform(this._mapPublicIpOnLaunch),
            outpost_arn: cdktn.stringToTerraform(this._outpostArn),
            private_dns_name_options_on_launch: ccSubnetPrivateDnsNameOptionsOnLaunchPropertyToTerraform(this._privateDnsNameOptionsOnLaunch.internalValue),
            tags: cdktn.listMapper(ccSubnetTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            assign_ipv_6_address_on_creation: {
                value: cdktn.booleanToHclTerraform(this._assignIpv6AddressOnCreation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
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
            cidr_block: {
                value: cdktn.stringToHclTerraform(this._cidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_dns_64: {
                value: cdktn.booleanToHclTerraform(this._enableDns64),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_lni_at_device_index: {
                value: cdktn.numberToHclTerraform(this._enableLniAtDeviceIndex),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
            ipv_6_ipam_pool_id: {
                value: cdktn.stringToHclTerraform(this._ipv6IpamPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv_6_native: {
                value: cdktn.booleanToHclTerraform(this._ipv6Native),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ipv_6_netmask_length: {
                value: cdktn.numberToHclTerraform(this._ipv6NetmaskLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            map_public_ip_on_launch: {
                value: cdktn.booleanToHclTerraform(this._mapPublicIpOnLaunch),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            outpost_arn: {
                value: cdktn.stringToHclTerraform(this._outpostArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            private_dns_name_options_on_launch: {
                value: ccSubnetPrivateDnsNameOptionsOnLaunchPropertyToHclTerraform(this._privateDnsNameOptionsOnLaunch.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSubnet.PrivateDnsNameOptionsOnLaunchProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSubnetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSubnet.TagPropertyList",
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

export function ccSubnetBlockPublicAccessStatesPropertyToTerraform(struct?: CcSubnet.BlockPublicAccessStatesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccSubnetBlockPublicAccessStatesPropertyToHclTerraform(struct?: CcSubnet.BlockPublicAccessStatesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccSubnetPrivateDnsNameOptionsOnLaunchPropertyToTerraform(struct?: CcSubnet.PrivateDnsNameOptionsOnLaunchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_resource_name_dns_a_record: cdktn.booleanToTerraform(struct!.enableResourceNameDnsARecord),
        enable_resource_name_dns_aaaa_record: cdktn.booleanToTerraform(struct!.enableResourceNameDnsAaaaRecord),
        hostname_type: cdktn.stringToTerraform(struct!.hostnameType),
    }
}


export function ccSubnetPrivateDnsNameOptionsOnLaunchPropertyToHclTerraform(struct?: CcSubnet.PrivateDnsNameOptionsOnLaunchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_resource_name_dns_a_record: {
            value: cdktn.booleanToHclTerraform(struct!.enableResourceNameDnsARecord),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_resource_name_dns_aaaa_record: {
            value: cdktn.booleanToHclTerraform(struct!.enableResourceNameDnsAaaaRecord),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        hostname_type: {
            value: cdktn.stringToHclTerraform(struct!.hostnameType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSubnetTagPropertyToTerraform(struct?: CcSubnet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSubnetTagPropertyToHclTerraform(struct?: CcSubnet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSubnet {
export interface BlockPublicAccessStatesProperty {
}
export class BlockPublicAccessStatesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BlockPublicAccessStatesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BlockPublicAccessStatesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // internet_gateway_block_mode - computed: true, optional: false, required: false
    public get internetGatewayBlockMode() {
        return this.getStringAttribute('internet_gateway_block_mode');
    }
}
export interface PrivateDnsNameOptionsOnLaunchProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#enable_resource_name_dns_a_record CcSubnet#enable_resource_name_dns_a_record}
    */
    readonly enableResourceNameDnsARecord?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#enable_resource_name_dns_aaaa_record CcSubnet#enable_resource_name_dns_aaaa_record}
    */
    readonly enableResourceNameDnsAaaaRecord?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#hostname_type CcSubnet#hostname_type}
    */
    readonly hostnameType?: string;
}
export class PrivateDnsNameOptionsOnLaunchPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateDnsNameOptionsOnLaunchProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableResourceNameDnsARecord !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableResourceNameDnsARecord = this._enableResourceNameDnsARecord;
        }
        if (this._enableResourceNameDnsAaaaRecord !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableResourceNameDnsAaaaRecord = this._enableResourceNameDnsAaaaRecord;
        }
        if (this._hostnameType !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostnameType = this._hostnameType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateDnsNameOptionsOnLaunchProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableResourceNameDnsARecord = undefined;
            this._enableResourceNameDnsAaaaRecord = undefined;
            this._hostnameType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableResourceNameDnsARecord = value.enableResourceNameDnsARecord;
            this._enableResourceNameDnsAaaaRecord = value.enableResourceNameDnsAaaaRecord;
            this._hostnameType = value.hostnameType;
        }
    }

    // enable_resource_name_dns_a_record - computed: true, optional: true, required: false
    private _enableResourceNameDnsARecord?: boolean | cdktn.IResolvable; 
    public get enableResourceNameDnsARecord() {
        return this.getBooleanAttribute('enable_resource_name_dns_a_record');
    }
    public set enableResourceNameDnsARecord(value: boolean | cdktn.IResolvable) {
        this._enableResourceNameDnsARecord = value;
    }
    public resetEnableResourceNameDnsARecord() {
        this._enableResourceNameDnsARecord = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableResourceNameDnsARecordInput() {
        return this._enableResourceNameDnsARecord;
    }

    // enable_resource_name_dns_aaaa_record - computed: true, optional: true, required: false
    private _enableResourceNameDnsAaaaRecord?: boolean | cdktn.IResolvable; 
    public get enableResourceNameDnsAaaaRecord() {
        return this.getBooleanAttribute('enable_resource_name_dns_aaaa_record');
    }
    public set enableResourceNameDnsAaaaRecord(value: boolean | cdktn.IResolvable) {
        this._enableResourceNameDnsAaaaRecord = value;
    }
    public resetEnableResourceNameDnsAaaaRecord() {
        this._enableResourceNameDnsAaaaRecord = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableResourceNameDnsAaaaRecordInput() {
        return this._enableResourceNameDnsAaaaRecord;
    }

    // hostname_type - computed: true, optional: true, required: false
    private _hostnameType?: string; 
    public get hostnameType() {
        return this.getStringAttribute('hostname_type');
    }
    public set hostnameType(value: string) {
        this._hostnameType = value;
    }
    public resetHostnameType() {
        this._hostnameType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostnameTypeInput() {
        return this._hostnameType;
    }
}
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#key CcSubnet#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet#value CcSubnet#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
