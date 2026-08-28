// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNetworkInterfaceProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#connection_tracking_specification CcNetworkInterface#connection_tracking_specification}
    */
    readonly connectionTrackingSpecification?: CcNetworkInterface.ConnectionTrackingSpecificationProperty;
    /**
    * A description for the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#description CcNetworkInterface#description}
    */
    readonly description?: string;
    /**
    * If you have instances or ENIs that rely on the IPv6 address not changing, to avoid disrupting traffic to instances or ENIs, you can enable a primary IPv6 address. Enable this option to automatically assign an IPv6 associated with the ENI attached to your instance to be the primary IPv6 address. When you enable an IPv6 address to be a primary IPv6, you cannot disable it. Traffic will be routed to the primary IPv6 address until the instance is terminated or the ENI is detached. If you have multiple IPv6 addresses associated with an ENI and you enable a primary IPv6 address, the first IPv6 address associated with the ENI becomes the primary IPv6 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#enable_primary_ipv_6 CcNetworkInterface#enable_primary_ipv_6}
    */
    readonly enablePrimaryIpv6?: boolean | cdktn.IResolvable;
    /**
    * A list of security group IDs associated with this network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#group_set CcNetworkInterface#group_set}
    */
    readonly groupSet?: string[];
    /**
    * Indicates the type of network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#interface_type CcNetworkInterface#interface_type}
    */
    readonly interfaceType?: string;
    /**
    * The number of IPv4 prefixes to assign to a network interface. When you specify a number of IPv4 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /28 prefixes. You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#ipv_4_prefix_count CcNetworkInterface#ipv_4_prefix_count}
    */
    readonly ipv4PrefixCount?: number;
    /**
    * Assigns a list of IPv4 prefixes to the network interface. If you want EC2 to automatically assign IPv4 prefixes, use the Ipv4PrefixCount property and do not specify this property. Presently, only /28 prefixes are supported. You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#ipv_4_prefixes CcNetworkInterface#ipv_4_prefixes}
    */
    readonly ipv4Prefixes?: CcNetworkInterface.Ipv4PrefixSpecificationProperty[] | cdktn.IResolvable;
    /**
    * The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#ipv_6_address_count CcNetworkInterface#ipv_6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#ipv_6_addresses CcNetworkInterface#ipv_6_addresses}
    */
    readonly ipv6Addresses?: CcNetworkInterface.InstanceIpv6AddressProperty[] | cdktn.IResolvable;
    /**
    * The number of IPv6 prefixes to assign to a network interface. When you specify a number of IPv6 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /80 prefixes. You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#ipv_6_prefix_count CcNetworkInterface#ipv_6_prefix_count}
    */
    readonly ipv6PrefixCount?: number;
    /**
    * Assigns a list of IPv6 prefixes to the network interface. If you want EC2 to automatically assign IPv6 prefixes, use the Ipv6PrefixCount property and do not specify this property. Presently, only /80 prefixes are supported. You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#ipv_6_prefixes CcNetworkInterface#ipv_6_prefixes}
    */
    readonly ipv6Prefixes?: CcNetworkInterface.Ipv6PrefixSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#private_ip_address CcNetworkInterface#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#private_ip_addresses CcNetworkInterface#private_ip_addresses}
    */
    readonly privateIpAddresses?: CcNetworkInterface.PrivateIpAddressSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Public IP DNS hostname type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#public_ip_dns_hostname_type_specification CcNetworkInterface#public_ip_dns_hostname_type_specification}
    */
    readonly publicIpDnsHostnameTypeSpecification?: string;
    /**
    * The number of secondary private IPv4 addresses to assign to a network interface. When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#secondary_private_ip_address_count CcNetworkInterface#secondary_private_ip_address_count}
    */
    readonly secondaryPrivateIpAddressCount?: number;
    /**
    * Indicates whether traffic to or from the instance is validated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#source_dest_check CcNetworkInterface#source_dest_check}
    */
    readonly sourceDestCheck?: boolean | cdktn.IResolvable;
    /**
    * The ID of the subnet to associate with the network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#subnet_id CcNetworkInterface#subnet_id}
    */
    readonly subnetId: string;
    /**
    * An arbitrary set of tags (key-value pairs) for this network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#tags CcNetworkInterface#tags}
    */
    readonly tags?: CcNetworkInterface.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface awscc_ec2_network_interface}
*/
export class CcNetworkInterface extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_network_interface";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNetworkInterface resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNetworkInterface to import
    * @param importFromId The id of the existing CcNetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNetworkInterface to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_interface", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface awscc_ec2_network_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNetworkInterfaceProps
    */
    public constructor(scope: Construct, id: string, config: CcNetworkInterfaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_network_interface',
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
        this._connectionTrackingSpecification.internalValue = config.connectionTrackingSpecification;
        this._description = config.description;
        this._enablePrimaryIpv6 = config.enablePrimaryIpv6;
        this._groupSet = config.groupSet;
        this._interfaceType = config.interfaceType;
        this._ipv4PrefixCount = config.ipv4PrefixCount;
        this._ipv4Prefixes.internalValue = config.ipv4Prefixes;
        this._ipv6AddressCount = config.ipv6AddressCount;
        this._ipv6Addresses.internalValue = config.ipv6Addresses;
        this._ipv6PrefixCount = config.ipv6PrefixCount;
        this._ipv6Prefixes.internalValue = config.ipv6Prefixes;
        this._privateIpAddress = config.privateIpAddress;
        this._privateIpAddresses.internalValue = config.privateIpAddresses;
        this._publicIpDnsHostnameTypeSpecification = config.publicIpDnsHostnameTypeSpecification;
        this._secondaryPrivateIpAddressCount = config.secondaryPrivateIpAddressCount;
        this._sourceDestCheck = config.sourceDestCheck;
        this._subnetId = config.subnetId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connection_tracking_specification - computed: true, optional: true, required: false
    private _connectionTrackingSpecification = new CcNetworkInterface.ConnectionTrackingSpecificationPropertyOutputReference(this, "connection_tracking_specification");
    public get connectionTrackingSpecification() {
        return this._connectionTrackingSpecification;
    }
    public putConnectionTrackingSpecification(value: CcNetworkInterface.ConnectionTrackingSpecificationProperty) {
        this._connectionTrackingSpecification.internalValue = value;
    }
    public resetConnectionTrackingSpecification() {
        this._connectionTrackingSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTrackingSpecificationInput() {
        return this._connectionTrackingSpecification.internalValue;
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

    // enable_primary_ipv_6 - computed: true, optional: true, required: false
    private _enablePrimaryIpv6?: boolean | cdktn.IResolvable; 
    public get enablePrimaryIpv6() {
        return this.getBooleanAttribute('enable_primary_ipv_6');
    }
    public set enablePrimaryIpv6(value: boolean | cdktn.IResolvable) {
        this._enablePrimaryIpv6 = value;
    }
    public resetEnablePrimaryIpv6() {
        this._enablePrimaryIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePrimaryIpv6Input() {
        return this._enablePrimaryIpv6;
    }

    // group_set - computed: true, optional: true, required: false
    private _groupSet?: string[]; 
    public get groupSet() {
        return this.getListAttribute('group_set');
    }
    public set groupSet(value: string[]) {
        this._groupSet = value;
    }
    public resetGroupSet() {
        this._groupSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupSetInput() {
        return this._groupSet;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // interface_type - computed: true, optional: true, required: false
    private _interfaceType?: string; 
    public get interfaceType() {
        return this.getStringAttribute('interface_type');
    }
    public set interfaceType(value: string) {
        this._interfaceType = value;
    }
    public resetInterfaceType() {
        this._interfaceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interfaceTypeInput() {
        return this._interfaceType;
    }

    // ipv_4_prefix_count - computed: true, optional: true, required: false
    private _ipv4PrefixCount?: number; 
    public get ipv4PrefixCount() {
        return this.getNumberAttribute('ipv_4_prefix_count');
    }
    public set ipv4PrefixCount(value: number) {
        this._ipv4PrefixCount = value;
    }
    public resetIpv4PrefixCount() {
        this._ipv4PrefixCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4PrefixCountInput() {
        return this._ipv4PrefixCount;
    }

    // ipv_4_prefixes - computed: true, optional: true, required: false
    private _ipv4Prefixes = new CcNetworkInterface.Ipv4PrefixSpecificationPropertyList(this, "ipv_4_prefixes", false);
    public get ipv4Prefixes() {
        return this._ipv4Prefixes;
    }
    public putIpv4Prefixes(value: CcNetworkInterface.Ipv4PrefixSpecificationProperty[] | cdktn.IResolvable) {
        this._ipv4Prefixes.internalValue = value;
    }
    public resetIpv4Prefixes() {
        this._ipv4Prefixes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4PrefixesInput() {
        return this._ipv4Prefixes.internalValue;
    }

    // ipv_6_address_count - computed: true, optional: true, required: false
    private _ipv6AddressCount?: number; 
    public get ipv6AddressCount() {
        return this.getNumberAttribute('ipv_6_address_count');
    }
    public set ipv6AddressCount(value: number) {
        this._ipv6AddressCount = value;
    }
    public resetIpv6AddressCount() {
        this._ipv6AddressCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressCountInput() {
        return this._ipv6AddressCount;
    }

    // ipv_6_addresses - computed: true, optional: true, required: false
    private _ipv6Addresses = new CcNetworkInterface.InstanceIpv6AddressPropertyList(this, "ipv_6_addresses", true);
    public get ipv6Addresses() {
        return this._ipv6Addresses;
    }
    public putIpv6Addresses(value: CcNetworkInterface.InstanceIpv6AddressProperty[] | cdktn.IResolvable) {
        this._ipv6Addresses.internalValue = value;
    }
    public resetIpv6Addresses() {
        this._ipv6Addresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressesInput() {
        return this._ipv6Addresses.internalValue;
    }

    // ipv_6_prefix_count - computed: true, optional: true, required: false
    private _ipv6PrefixCount?: number; 
    public get ipv6PrefixCount() {
        return this.getNumberAttribute('ipv_6_prefix_count');
    }
    public set ipv6PrefixCount(value: number) {
        this._ipv6PrefixCount = value;
    }
    public resetIpv6PrefixCount() {
        this._ipv6PrefixCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6PrefixCountInput() {
        return this._ipv6PrefixCount;
    }

    // ipv_6_prefixes - computed: true, optional: true, required: false
    private _ipv6Prefixes = new CcNetworkInterface.Ipv6PrefixSpecificationPropertyList(this, "ipv_6_prefixes", false);
    public get ipv6Prefixes() {
        return this._ipv6Prefixes;
    }
    public putIpv6Prefixes(value: CcNetworkInterface.Ipv6PrefixSpecificationProperty[] | cdktn.IResolvable) {
        this._ipv6Prefixes.internalValue = value;
    }
    public resetIpv6Prefixes() {
        this._ipv6Prefixes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6PrefixesInput() {
        return this._ipv6Prefixes.internalValue;
    }

    // network_interface_id - computed: true, optional: false, required: false
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }

    // primary_ipv_6_address - computed: true, optional: false, required: false
    public get primaryIpv6Address() {
        return this.getStringAttribute('primary_ipv_6_address');
    }

    // primary_private_ip_address - computed: true, optional: false, required: false
    public get primaryPrivateIpAddress() {
        return this.getStringAttribute('primary_private_ip_address');
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

    // private_ip_addresses - computed: true, optional: true, required: false
    private _privateIpAddresses = new CcNetworkInterface.PrivateIpAddressSpecificationPropertyList(this, "private_ip_addresses", false);
    public get privateIpAddresses() {
        return this._privateIpAddresses;
    }
    public putPrivateIpAddresses(value: CcNetworkInterface.PrivateIpAddressSpecificationProperty[] | cdktn.IResolvable) {
        this._privateIpAddresses.internalValue = value;
    }
    public resetPrivateIpAddresses() {
        this._privateIpAddresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateIpAddressesInput() {
        return this._privateIpAddresses.internalValue;
    }

    // public_ip_dns_hostname_type_specification - computed: true, optional: true, required: false
    private _publicIpDnsHostnameTypeSpecification?: string; 
    public get publicIpDnsHostnameTypeSpecification() {
        return this.getStringAttribute('public_ip_dns_hostname_type_specification');
    }
    public set publicIpDnsHostnameTypeSpecification(value: string) {
        this._publicIpDnsHostnameTypeSpecification = value;
    }
    public resetPublicIpDnsHostnameTypeSpecification() {
        this._publicIpDnsHostnameTypeSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicIpDnsHostnameTypeSpecificationInput() {
        return this._publicIpDnsHostnameTypeSpecification;
    }

    // public_ip_dns_name_options - computed: true, optional: false, required: false
    private _publicIpDnsNameOptions = new CcNetworkInterface.PublicIpDnsNameOptionsPropertyOutputReference(this, "public_ip_dns_name_options");
    public get publicIpDnsNameOptions() {
        return this._publicIpDnsNameOptions;
    }

    // secondary_private_ip_address_count - computed: true, optional: true, required: false
    private _secondaryPrivateIpAddressCount?: number; 
    public get secondaryPrivateIpAddressCount() {
        return this.getNumberAttribute('secondary_private_ip_address_count');
    }
    public set secondaryPrivateIpAddressCount(value: number) {
        this._secondaryPrivateIpAddressCount = value;
    }
    public resetSecondaryPrivateIpAddressCount() {
        this._secondaryPrivateIpAddressCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryPrivateIpAddressCountInput() {
        return this._secondaryPrivateIpAddressCount;
    }

    // secondary_private_ip_addresses - computed: true, optional: false, required: false
    public get secondaryPrivateIpAddresses() {
        return this.getListAttribute('secondary_private_ip_addresses');
    }

    // source_dest_check - computed: true, optional: true, required: false
    private _sourceDestCheck?: boolean | cdktn.IResolvable; 
    public get sourceDestCheck() {
        return this.getBooleanAttribute('source_dest_check');
    }
    public set sourceDestCheck(value: boolean | cdktn.IResolvable) {
        this._sourceDestCheck = value;
    }
    public resetSourceDestCheck() {
        this._sourceDestCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDestCheckInput() {
        return this._sourceDestCheck;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNetworkInterface.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNetworkInterface.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            connection_tracking_specification: ccNetworkInterfaceConnectionTrackingSpecificationPropertyToTerraform(this._connectionTrackingSpecification.internalValue),
            description: cdktn.stringToTerraform(this._description),
            enable_primary_ipv_6: cdktn.booleanToTerraform(this._enablePrimaryIpv6),
            group_set: cdktn.listMapper(cdktn.stringToTerraform, false)(this._groupSet),
            interface_type: cdktn.stringToTerraform(this._interfaceType),
            ipv_4_prefix_count: cdktn.numberToTerraform(this._ipv4PrefixCount),
            ipv_4_prefixes: cdktn.listMapper(ccNetworkInterfaceIpv4PrefixSpecificationPropertyToTerraform, false)(this._ipv4Prefixes.internalValue),
            ipv_6_address_count: cdktn.numberToTerraform(this._ipv6AddressCount),
            ipv_6_addresses: cdktn.listMapper(ccNetworkInterfaceInstanceIpv6AddressPropertyToTerraform, false)(this._ipv6Addresses.internalValue),
            ipv_6_prefix_count: cdktn.numberToTerraform(this._ipv6PrefixCount),
            ipv_6_prefixes: cdktn.listMapper(ccNetworkInterfaceIpv6PrefixSpecificationPropertyToTerraform, false)(this._ipv6Prefixes.internalValue),
            private_ip_address: cdktn.stringToTerraform(this._privateIpAddress),
            private_ip_addresses: cdktn.listMapper(ccNetworkInterfacePrivateIpAddressSpecificationPropertyToTerraform, false)(this._privateIpAddresses.internalValue),
            public_ip_dns_hostname_type_specification: cdktn.stringToTerraform(this._publicIpDnsHostnameTypeSpecification),
            secondary_private_ip_address_count: cdktn.numberToTerraform(this._secondaryPrivateIpAddressCount),
            source_dest_check: cdktn.booleanToTerraform(this._sourceDestCheck),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
            tags: cdktn.listMapper(ccNetworkInterfaceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connection_tracking_specification: {
                value: ccNetworkInterfaceConnectionTrackingSpecificationPropertyToHclTerraform(this._connectionTrackingSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcNetworkInterface.ConnectionTrackingSpecificationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_primary_ipv_6: {
                value: cdktn.booleanToHclTerraform(this._enablePrimaryIpv6),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            group_set: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._groupSet),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            interface_type: {
                value: cdktn.stringToHclTerraform(this._interfaceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ipv_4_prefix_count: {
                value: cdktn.numberToHclTerraform(this._ipv4PrefixCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ipv_4_prefixes: {
                value: cdktn.listMapperHcl(ccNetworkInterfaceIpv4PrefixSpecificationPropertyToHclTerraform, false)(this._ipv4Prefixes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNetworkInterface.Ipv4PrefixSpecificationPropertyList",
            },
            ipv_6_address_count: {
                value: cdktn.numberToHclTerraform(this._ipv6AddressCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ipv_6_addresses: {
                value: cdktn.listMapperHcl(ccNetworkInterfaceInstanceIpv6AddressPropertyToHclTerraform, false)(this._ipv6Addresses.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcNetworkInterface.InstanceIpv6AddressPropertyList",
            },
            ipv_6_prefix_count: {
                value: cdktn.numberToHclTerraform(this._ipv6PrefixCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ipv_6_prefixes: {
                value: cdktn.listMapperHcl(ccNetworkInterfaceIpv6PrefixSpecificationPropertyToHclTerraform, false)(this._ipv6Prefixes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNetworkInterface.Ipv6PrefixSpecificationPropertyList",
            },
            private_ip_address: {
                value: cdktn.stringToHclTerraform(this._privateIpAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            private_ip_addresses: {
                value: cdktn.listMapperHcl(ccNetworkInterfacePrivateIpAddressSpecificationPropertyToHclTerraform, false)(this._privateIpAddresses.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNetworkInterface.PrivateIpAddressSpecificationPropertyList",
            },
            public_ip_dns_hostname_type_specification: {
                value: cdktn.stringToHclTerraform(this._publicIpDnsHostnameTypeSpecification),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secondary_private_ip_address_count: {
                value: cdktn.numberToHclTerraform(this._secondaryPrivateIpAddressCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            source_dest_check: {
                value: cdktn.booleanToHclTerraform(this._sourceDestCheck),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            subnet_id: {
                value: cdktn.stringToHclTerraform(this._subnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNetworkInterfaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNetworkInterface.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNetworkInterfaceConnectionTrackingSpecificationPropertyToTerraform(struct?: CcNetworkInterface.ConnectionTrackingSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tcp_established_timeout: cdktn.numberToTerraform(struct!.tcpEstablishedTimeout),
        udp_stream_timeout: cdktn.numberToTerraform(struct!.udpStreamTimeout),
        udp_timeout: cdktn.numberToTerraform(struct!.udpTimeout),
    }
}


export function ccNetworkInterfaceConnectionTrackingSpecificationPropertyToHclTerraform(struct?: CcNetworkInterface.ConnectionTrackingSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tcp_established_timeout: {
            value: cdktn.numberToHclTerraform(struct!.tcpEstablishedTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        udp_stream_timeout: {
            value: cdktn.numberToHclTerraform(struct!.udpStreamTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        udp_timeout: {
            value: cdktn.numberToHclTerraform(struct!.udpTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInterfaceIpv4PrefixSpecificationPropertyToTerraform(struct?: CcNetworkInterface.Ipv4PrefixSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ipv_4_prefix: cdktn.stringToTerraform(struct!.ipv4Prefix),
    }
}


export function ccNetworkInterfaceIpv4PrefixSpecificationPropertyToHclTerraform(struct?: CcNetworkInterface.Ipv4PrefixSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ipv_4_prefix: {
            value: cdktn.stringToHclTerraform(struct!.ipv4Prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInterfaceInstanceIpv6AddressPropertyToTerraform(struct?: CcNetworkInterface.InstanceIpv6AddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ipv_6_address: cdktn.stringToTerraform(struct!.ipv6Address),
    }
}


export function ccNetworkInterfaceInstanceIpv6AddressPropertyToHclTerraform(struct?: CcNetworkInterface.InstanceIpv6AddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ipv_6_address: {
            value: cdktn.stringToHclTerraform(struct!.ipv6Address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInterfaceIpv6PrefixSpecificationPropertyToTerraform(struct?: CcNetworkInterface.Ipv6PrefixSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ipv_6_prefix: cdktn.stringToTerraform(struct!.ipv6Prefix),
    }
}


export function ccNetworkInterfaceIpv6PrefixSpecificationPropertyToHclTerraform(struct?: CcNetworkInterface.Ipv6PrefixSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ipv_6_prefix: {
            value: cdktn.stringToHclTerraform(struct!.ipv6Prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInterfacePrivateIpAddressSpecificationPropertyToTerraform(struct?: CcNetworkInterface.PrivateIpAddressSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        primary: cdktn.booleanToTerraform(struct!.primary),
        private_ip_address: cdktn.stringToTerraform(struct!.privateIpAddress),
    }
}


export function ccNetworkInterfacePrivateIpAddressSpecificationPropertyToHclTerraform(struct?: CcNetworkInterface.PrivateIpAddressSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        primary: {
            value: cdktn.booleanToHclTerraform(struct!.primary),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        private_ip_address: {
            value: cdktn.stringToHclTerraform(struct!.privateIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkInterfacePublicIpDnsNameOptionsPropertyToTerraform(struct?: CcNetworkInterface.PublicIpDnsNameOptionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccNetworkInterfacePublicIpDnsNameOptionsPropertyToHclTerraform(struct?: CcNetworkInterface.PublicIpDnsNameOptionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccNetworkInterfaceTagPropertyToTerraform(struct?: CcNetworkInterface.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNetworkInterfaceTagPropertyToHclTerraform(struct?: CcNetworkInterface.TagProperty | cdktn.IResolvable): any {
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


export namespace CcNetworkInterface {
export interface ConnectionTrackingSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#tcp_established_timeout CcNetworkInterface#tcp_established_timeout}
    */
    readonly tcpEstablishedTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#udp_stream_timeout CcNetworkInterface#udp_stream_timeout}
    */
    readonly udpStreamTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#udp_timeout CcNetworkInterface#udp_timeout}
    */
    readonly udpTimeout?: number;
}
export class ConnectionTrackingSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectionTrackingSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tcpEstablishedTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.tcpEstablishedTimeout = this._tcpEstablishedTimeout;
        }
        if (this._udpStreamTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.udpStreamTimeout = this._udpStreamTimeout;
        }
        if (this._udpTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.udpTimeout = this._udpTimeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectionTrackingSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tcpEstablishedTimeout = undefined;
            this._udpStreamTimeout = undefined;
            this._udpTimeout = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tcpEstablishedTimeout = value.tcpEstablishedTimeout;
            this._udpStreamTimeout = value.udpStreamTimeout;
            this._udpTimeout = value.udpTimeout;
        }
    }

    // tcp_established_timeout - computed: true, optional: true, required: false
    private _tcpEstablishedTimeout?: number; 
    public get tcpEstablishedTimeout() {
        return this.getNumberAttribute('tcp_established_timeout');
    }
    public set tcpEstablishedTimeout(value: number) {
        this._tcpEstablishedTimeout = value;
    }
    public resetTcpEstablishedTimeout() {
        this._tcpEstablishedTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcpEstablishedTimeoutInput() {
        return this._tcpEstablishedTimeout;
    }

    // udp_stream_timeout - computed: true, optional: true, required: false
    private _udpStreamTimeout?: number; 
    public get udpStreamTimeout() {
        return this.getNumberAttribute('udp_stream_timeout');
    }
    public set udpStreamTimeout(value: number) {
        this._udpStreamTimeout = value;
    }
    public resetUdpStreamTimeout() {
        this._udpStreamTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get udpStreamTimeoutInput() {
        return this._udpStreamTimeout;
    }

    // udp_timeout - computed: true, optional: true, required: false
    private _udpTimeout?: number; 
    public get udpTimeout() {
        return this.getNumberAttribute('udp_timeout');
    }
    public set udpTimeout(value: number) {
        this._udpTimeout = value;
    }
    public resetUdpTimeout() {
        this._udpTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get udpTimeoutInput() {
        return this._udpTimeout;
    }
}
export interface Ipv4PrefixSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#ipv_4_prefix CcNetworkInterface#ipv_4_prefix}
    */
    readonly ipv4Prefix?: string;
}
export class Ipv4PrefixSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ipv4PrefixSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipv4Prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv4Prefix = this._ipv4Prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ipv4PrefixSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipv4Prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipv4Prefix = value.ipv4Prefix;
        }
    }

    // ipv_4_prefix - computed: true, optional: true, required: false
    private _ipv4Prefix?: string; 
    public get ipv4Prefix() {
        return this.getStringAttribute('ipv_4_prefix');
    }
    public set ipv4Prefix(value: string) {
        this._ipv4Prefix = value;
    }
    public resetIpv4Prefix() {
        this._ipv4Prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv4PrefixInput() {
        return this._ipv4Prefix;
    }
}

export class Ipv4PrefixSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : Ipv4PrefixSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): Ipv4PrefixSpecificationPropertyOutputReference {
        return new Ipv4PrefixSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InstanceIpv6AddressProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#ipv_6_address CcNetworkInterface#ipv_6_address}
    */
    readonly ipv6Address?: string;
}
export class InstanceIpv6AddressPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InstanceIpv6AddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipv6Address !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Address = this._ipv6Address;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceIpv6AddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipv6Address = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipv6Address = value.ipv6Address;
        }
    }

    // ipv_6_address - computed: true, optional: true, required: false
    private _ipv6Address?: string; 
    public get ipv6Address() {
        return this.getStringAttribute('ipv_6_address');
    }
    public set ipv6Address(value: string) {
        this._ipv6Address = value;
    }
    public resetIpv6Address() {
        this._ipv6Address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AddressInput() {
        return this._ipv6Address;
    }
}

export class InstanceIpv6AddressPropertyList extends cdktn.ComplexList {
    public internalValue? : InstanceIpv6AddressProperty[] | cdktn.IResolvable

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
    public get(index: number): InstanceIpv6AddressPropertyOutputReference {
        return new InstanceIpv6AddressPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Ipv6PrefixSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#ipv_6_prefix CcNetworkInterface#ipv_6_prefix}
    */
    readonly ipv6Prefix?: string;
}
export class Ipv6PrefixSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Ipv6PrefixSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipv6Prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Prefix = this._ipv6Prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Ipv6PrefixSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipv6Prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipv6Prefix = value.ipv6Prefix;
        }
    }

    // ipv_6_prefix - computed: true, optional: true, required: false
    private _ipv6Prefix?: string; 
    public get ipv6Prefix() {
        return this.getStringAttribute('ipv_6_prefix');
    }
    public set ipv6Prefix(value: string) {
        this._ipv6Prefix = value;
    }
    public resetIpv6Prefix() {
        this._ipv6Prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6PrefixInput() {
        return this._ipv6Prefix;
    }
}

export class Ipv6PrefixSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : Ipv6PrefixSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): Ipv6PrefixSpecificationPropertyOutputReference {
        return new Ipv6PrefixSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PrivateIpAddressSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#primary CcNetworkInterface#primary}
    */
    readonly primary?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#private_ip_address CcNetworkInterface#private_ip_address}
    */
    readonly privateIpAddress?: string;
}
export class PrivateIpAddressSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PrivateIpAddressSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._primary !== undefined) {
            hasAnyValues = true;
            internalValueResult.primary = this._primary;
        }
        if (this._privateIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateIpAddress = this._privateIpAddress;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateIpAddressSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._primary = undefined;
            this._privateIpAddress = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._primary = value.primary;
            this._privateIpAddress = value.privateIpAddress;
        }
    }

    // primary - computed: true, optional: true, required: false
    private _primary?: boolean | cdktn.IResolvable; 
    public get primary() {
        return this.getBooleanAttribute('primary');
    }
    public set primary(value: boolean | cdktn.IResolvable) {
        this._primary = value;
    }
    public resetPrimary() {
        this._primary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryInput() {
        return this._primary;
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
}

export class PrivateIpAddressSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : PrivateIpAddressSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): PrivateIpAddressSpecificationPropertyOutputReference {
        return new PrivateIpAddressSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PublicIpDnsNameOptionsProperty {
}
export class PublicIpDnsNameOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PublicIpDnsNameOptionsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublicIpDnsNameOptionsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // dns_hostname_type - computed: true, optional: false, required: false
    public get dnsHostnameType() {
        return this.getStringAttribute('dns_hostname_type');
    }

    // public_dual_stack_dns_name - computed: true, optional: false, required: false
    public get publicDualStackDnsName() {
        return this.getStringAttribute('public_dual_stack_dns_name');
    }

    // public_ipv_4_dns_name - computed: true, optional: false, required: false
    public get publicIpv4DnsName() {
        return this.getStringAttribute('public_ipv_4_dns_name');
    }

    // public_ipv_6_dns_name - computed: true, optional: false, required: false
    public get publicIpv6DnsName() {
        return this.getStringAttribute('public_ipv_6_dns_name');
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#key CcNetworkInterface#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_network_interface#value CcNetworkInterface#value}
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
