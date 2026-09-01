// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNatGatewayProps extends cdktn.TerraformMetaArguments {
    /**
    * [Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway. This property is required for a public NAT gateway and cannot be specified with a private NAT gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#allocation_id CcNatGateway#allocation_id}
    */
    readonly allocationId?: string;
    /**
    * Indicates whether this is a zonal (single-AZ) or regional (multi-AZ) NAT gateway.
    *  A zonal NAT gateway is a NAT Gateway that provides redundancy and scalability within a single availability zone. A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
    *  For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#availability_mode CcNatGateway#availability_mode}
    */
    readonly availabilityMode?: string;
    /**
    * For regional NAT gateways only: Specifies which Availability Zones you want the NAT gateway to support and the Elastic IP addresses (EIPs) to use in each AZ. The regional NAT gateway uses these EIPs to handle outbound NAT traffic from their respective AZs. If not specified, the NAT gateway will automatically expand to new AZs and associate EIPs upon detection of an elastic network interface. If you specify this parameter, auto-expansion is disabled and you must manually manage AZ coverage.
    *  A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
    *  For more information, see [Regional NAT gateways for automatic multi-AZ expansion](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateways-regional.html) in the *Amazon VPC User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#availability_zone_addresses CcNatGateway#availability_zone_addresses}
    */
    readonly availabilityZoneAddresses?: CcNatGateway.AvailabilityZoneAddressProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#connectivity_type CcNatGateway#connectivity_type}
    */
    readonly connectivityType?: string;
    /**
    * The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#max_drain_duration_seconds CcNatGateway#max_drain_duration_seconds}
    */
    readonly maxDrainDurationSeconds?: number;
    /**
    * The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#private_ip_address CcNatGateway#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * Secondary EIP allocation IDs. For more information, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-working-with.html) in the *Amazon VPC User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#secondary_allocation_ids CcNatGateway#secondary_allocation_ids}
    */
    readonly secondaryAllocationIds?: string[];
    /**
    * [Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway. For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
    *  ``SecondaryPrivateIpAddressCount`` and ``SecondaryPrivateIpAddresses`` cannot be set at the same time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#secondary_private_ip_address_count CcNatGateway#secondary_private_ip_address_count}
    */
    readonly secondaryPrivateIpAddressCount?: number;
    /**
    * Secondary private IPv4 addresses. For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the *Amazon Virtual Private Cloud User Guide*.
    *  ``SecondaryPrivateIpAddressCount`` and ``SecondaryPrivateIpAddresses`` cannot be set at the same time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#secondary_private_ip_addresses CcNatGateway#secondary_private_ip_addresses}
    */
    readonly secondaryPrivateIpAddresses?: string[];
    /**
    * The ID of the subnet in which the NAT gateway is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#subnet_id CcNatGateway#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * The tags for the NAT gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#tags CcNatGateway#tags}
    */
    readonly tags?: CcNatGateway.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the VPC in which the NAT gateway is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#vpc_id CcNatGateway#vpc_id}
    */
    readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway awscc_ec2_nat_gateway}
*/
export class CcNatGateway extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_nat_gateway";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNatGateway resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNatGateway to import
    * @param importFromId The id of the existing CcNatGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNatGateway to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_nat_gateway", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway awscc_ec2_nat_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNatGatewayProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcNatGatewayProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_nat_gateway',
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
        this._availabilityMode = config.availabilityMode;
        this._availabilityZoneAddresses.internalValue = config.availabilityZoneAddresses;
        this._connectivityType = config.connectivityType;
        this._maxDrainDurationSeconds = config.maxDrainDurationSeconds;
        this._privateIpAddress = config.privateIpAddress;
        this._secondaryAllocationIds = config.secondaryAllocationIds;
        this._secondaryPrivateIpAddressCount = config.secondaryPrivateIpAddressCount;
        this._secondaryPrivateIpAddresses = config.secondaryPrivateIpAddresses;
        this._subnetId = config.subnetId;
        this._tags.internalValue = config.tags;
        this._vpcId = config.vpcId;
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

    // auto_provision_zones - computed: true, optional: false, required: false
    public get autoProvisionZones() {
        return this.getStringAttribute('auto_provision_zones');
    }

    // auto_scaling_ips - computed: true, optional: false, required: false
    public get autoScalingIps() {
        return this.getStringAttribute('auto_scaling_ips');
    }

    // availability_mode - computed: true, optional: true, required: false
    private _availabilityMode?: string; 
    public get availabilityMode() {
        return this.getStringAttribute('availability_mode');
    }
    public set availabilityMode(value: string) {
        this._availabilityMode = value;
    }
    public resetAvailabilityMode() {
        this._availabilityMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityModeInput() {
        return this._availabilityMode;
    }

    // availability_zone_addresses - computed: true, optional: true, required: false
    private _availabilityZoneAddresses = new CcNatGateway.AvailabilityZoneAddressPropertyList(this, "availability_zone_addresses", true);
    public get availabilityZoneAddresses() {
        return this._availabilityZoneAddresses;
    }
    public putAvailabilityZoneAddresses(value: CcNatGateway.AvailabilityZoneAddressProperty[] | cdktn.IResolvable) {
        this._availabilityZoneAddresses.internalValue = value;
    }
    public resetAvailabilityZoneAddresses() {
        this._availabilityZoneAddresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneAddressesInput() {
        return this._availabilityZoneAddresses.internalValue;
    }

    // connectivity_type - computed: true, optional: true, required: false
    private _connectivityType?: string; 
    public get connectivityType() {
        return this.getStringAttribute('connectivity_type');
    }
    public set connectivityType(value: string) {
        this._connectivityType = value;
    }
    public resetConnectivityType() {
        this._connectivityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectivityTypeInput() {
        return this._connectivityType;
    }

    // eni_id - computed: true, optional: false, required: false
    public get eniId() {
        return this.getStringAttribute('eni_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_drain_duration_seconds - computed: true, optional: true, required: false
    private _maxDrainDurationSeconds?: number; 
    public get maxDrainDurationSeconds() {
        return this.getNumberAttribute('max_drain_duration_seconds');
    }
    public set maxDrainDurationSeconds(value: number) {
        this._maxDrainDurationSeconds = value;
    }
    public resetMaxDrainDurationSeconds() {
        this._maxDrainDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxDrainDurationSecondsInput() {
        return this._maxDrainDurationSeconds;
    }

    // nat_gateway_id - computed: true, optional: false, required: false
    public get natGatewayId() {
        return this.getStringAttribute('nat_gateway_id');
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

    // route_table_id - computed: true, optional: false, required: false
    public get routeTableId() {
        return this.getStringAttribute('route_table_id');
    }

    // secondary_allocation_ids - computed: true, optional: true, required: false
    private _secondaryAllocationIds?: string[]; 
    public get secondaryAllocationIds() {
        return this.getListAttribute('secondary_allocation_ids');
    }
    public set secondaryAllocationIds(value: string[]) {
        this._secondaryAllocationIds = value;
    }
    public resetSecondaryAllocationIds() {
        this._secondaryAllocationIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryAllocationIdsInput() {
        return this._secondaryAllocationIds;
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

    // secondary_private_ip_addresses - computed: true, optional: true, required: false
    private _secondaryPrivateIpAddresses?: string[]; 
    public get secondaryPrivateIpAddresses() {
        return this.getListAttribute('secondary_private_ip_addresses');
    }
    public set secondaryPrivateIpAddresses(value: string[]) {
        this._secondaryPrivateIpAddresses = value;
    }
    public resetSecondaryPrivateIpAddresses() {
        this._secondaryPrivateIpAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryPrivateIpAddressesInput() {
        return this._secondaryPrivateIpAddresses;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNatGateway.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNatGateway.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    public resetVpcId() {
        this._vpcId = undefined;
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
            allocation_id: cdktn.stringToTerraform(this._allocationId),
            availability_mode: cdktn.stringToTerraform(this._availabilityMode),
            availability_zone_addresses: cdktn.listMapper(ccNatGatewayAvailabilityZoneAddressPropertyToTerraform, false)(this._availabilityZoneAddresses.internalValue),
            connectivity_type: cdktn.stringToTerraform(this._connectivityType),
            max_drain_duration_seconds: cdktn.numberToTerraform(this._maxDrainDurationSeconds),
            private_ip_address: cdktn.stringToTerraform(this._privateIpAddress),
            secondary_allocation_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._secondaryAllocationIds),
            secondary_private_ip_address_count: cdktn.numberToTerraform(this._secondaryPrivateIpAddressCount),
            secondary_private_ip_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(this._secondaryPrivateIpAddresses),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
            tags: cdktn.listMapper(ccNatGatewayTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
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
            availability_mode: {
                value: cdktn.stringToHclTerraform(this._availabilityMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            availability_zone_addresses: {
                value: cdktn.listMapperHcl(ccNatGatewayAvailabilityZoneAddressPropertyToHclTerraform, false)(this._availabilityZoneAddresses.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcNatGateway.AvailabilityZoneAddressPropertyList",
            },
            connectivity_type: {
                value: cdktn.stringToHclTerraform(this._connectivityType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_drain_duration_seconds: {
                value: cdktn.numberToHclTerraform(this._maxDrainDurationSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            private_ip_address: {
                value: cdktn.stringToHclTerraform(this._privateIpAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secondary_allocation_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._secondaryAllocationIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            secondary_private_ip_address_count: {
                value: cdktn.numberToHclTerraform(this._secondaryPrivateIpAddressCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            secondary_private_ip_addresses: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._secondaryPrivateIpAddresses),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            subnet_id: {
                value: cdktn.stringToHclTerraform(this._subnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNatGatewayTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNatGateway.TagPropertyList",
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

export function ccNatGatewayAvailabilityZoneAddressPropertyToTerraform(struct?: CcNatGateway.AvailabilityZoneAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allocation_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allocationIds),
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        availability_zone_id: cdktn.stringToTerraform(struct!.availabilityZoneId),
    }
}


export function ccNatGatewayAvailabilityZoneAddressPropertyToHclTerraform(struct?: CcNatGateway.AvailabilityZoneAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allocation_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allocationIds),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        availability_zone: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        availability_zone_id: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNatGatewayTagPropertyToTerraform(struct?: CcNatGateway.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNatGatewayTagPropertyToHclTerraform(struct?: CcNatGateway.TagProperty | cdktn.IResolvable): any {
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


export namespace CcNatGateway {
export interface AvailabilityZoneAddressProperty {
    /**
    * The allocation IDs of the Elastic IP addresses (EIPs) to be used for handling outbound NAT traffic in this specific Availability Zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#allocation_ids CcNatGateway#allocation_ids}
    */
    readonly allocationIds?: string[];
    /**
    * For regional NAT gateways only: The Availability Zone where this specific NAT gateway configuration will be active. Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ. 
    *  A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#availability_zone CcNatGateway#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * For regional NAT gateways only: The ID of the Availability Zone where this specific NAT gateway configuration will be active. Each AZ in a regional NAT gateway has its own configuration to handle outbound NAT traffic from that AZ. Use this instead of AvailabilityZone for consistent identification of AZs across AWS Regions. 
    *  A regional NAT gateway is a single NAT Gateway that works across multiple availability zones (AZs) in your VPC, providing redundancy, scalability and availability across all the AZs in a Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#availability_zone_id CcNatGateway#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
}
export class AvailabilityZoneAddressPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AvailabilityZoneAddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allocationIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.allocationIds = this._allocationIds;
        }
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._availabilityZoneId !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZoneId = this._availabilityZoneId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AvailabilityZoneAddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allocationIds = undefined;
            this._availabilityZone = undefined;
            this._availabilityZoneId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allocationIds = value.allocationIds;
            this._availabilityZone = value.availabilityZone;
            this._availabilityZoneId = value.availabilityZoneId;
        }
    }

    // allocation_ids - computed: true, optional: true, required: false
    private _allocationIds?: string[]; 
    public get allocationIds() {
        return cdktn.Fn.tolist(this.getListAttribute('allocation_ids'));
    }
    public set allocationIds(value: string[]) {
        this._allocationIds = value;
    }
    public resetAllocationIds() {
        this._allocationIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocationIdsInput() {
        return this._allocationIds;
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
}

export class AvailabilityZoneAddressPropertyList extends cdktn.ComplexList {
    public internalValue? : AvailabilityZoneAddressProperty[] | cdktn.IResolvable

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
    public get(index: number): AvailabilityZoneAddressPropertyOutputReference {
        return new AvailabilityZoneAddressPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#key CcNatGateway#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_nat_gateway#value CcNatGateway#value}
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
