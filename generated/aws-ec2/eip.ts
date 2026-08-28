// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEIPProps extends cdktn.TerraformMetaArguments {
    /**
    * An Elastic IP address or a carrier IP address in a Wavelength Zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip#address CcEIP#address}
    */
    readonly address?: string;
    /**
    * The network (``vpc``).
    *  If you define an Elastic IP address and associate it with a VPC that is defined in the same template, you must declare a dependency on the VPC-gateway attachment by using the [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) on this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip#domain CcEIP#domain}
    */
    readonly domain?: string;
    /**
    * The ID of the instance.
    *   Updates to the ``InstanceId`` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip#instance_id CcEIP#instance_id}
    */
    readonly instanceId?: string;
    /**
    * The ID of an IPAM pool which has an Amazon-provided or BYOIP public IPv4 CIDR provisioned to it. For more information, see [Allocate sequential Elastic IP addresses from an IPAM pool](https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-eip-pool.html) in the *Amazon VPC IPAM User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip#ipam_pool_id CcEIP#ipam_pool_id}
    */
    readonly ipamPoolId?: string;
    /**
    * A unique set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises IP addresses. Use this parameter to limit the IP address to this location. IP addresses cannot move between network border groups.
    *  Use [DescribeAvailabilityZones](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html) to view the network border groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip#network_border_group CcEIP#network_border_group}
    */
    readonly networkBorderGroup?: string;
    /**
    * The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool.
    *   Updates to the ``PublicIpv4Pool`` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip#public_ipv_4_pool CcEIP#public_ipv_4_pool}
    */
    readonly publicIpv4Pool?: string;
    /**
    * Any tags assigned to the Elastic IP address.
    *   Updates to the ``Tags`` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip#tags CcEIP#tags}
    */
    readonly tags?: CcEIP.TagProperty[] | cdktn.IResolvable;
    /**
    * The Elastic IP address you are accepting for transfer. You can only accept one transferred address. For more information on Elastic IP address transfers, see [Transfer Elastic IP addresses](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro) in the *Amazon Virtual Private Cloud User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip#transfer_address CcEIP#transfer_address}
    */
    readonly transferAddress?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip awscc_ec2_eip}
*/
export class CcEIP extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_eip";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEIP resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEIP to import
    * @param importFromId The id of the existing CcEIP that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEIP to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_eip", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip awscc_ec2_eip} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEIPProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcEIPProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_eip',
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
        this._address = config.address;
        this._domain = config.domain;
        this._instanceId = config.instanceId;
        this._ipamPoolId = config.ipamPoolId;
        this._networkBorderGroup = config.networkBorderGroup;
        this._publicIpv4Pool = config.publicIpv4Pool;
        this._tags.internalValue = config.tags;
        this._transferAddress = config.transferAddress;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address - computed: true, optional: true, required: false
    private _address?: string; 
    public get address() {
        return this.getStringAttribute('address');
    }
    public set address(value: string) {
        this._address = value;
    }
    public resetAddress() {
        this._address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressInput() {
        return this._address;
    }

    // allocation_id - computed: true, optional: false, required: false
    public get allocationId() {
        return this.getStringAttribute('allocation_id');
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
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

    // ipam_pool_id - computed: true, optional: true, required: false
    private _ipamPoolId?: string; 
    public get ipamPoolId() {
        return this.getStringAttribute('ipam_pool_id');
    }
    public set ipamPoolId(value: string) {
        this._ipamPoolId = value;
    }
    public resetIpamPoolId() {
        this._ipamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipamPoolIdInput() {
        return this._ipamPoolId;
    }

    // network_border_group - computed: true, optional: true, required: false
    private _networkBorderGroup?: string; 
    public get networkBorderGroup() {
        return this.getStringAttribute('network_border_group');
    }
    public set networkBorderGroup(value: string) {
        this._networkBorderGroup = value;
    }
    public resetNetworkBorderGroup() {
        this._networkBorderGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkBorderGroupInput() {
        return this._networkBorderGroup;
    }

    // public_ip - computed: true, optional: false, required: false
    public get publicIp() {
        return this.getStringAttribute('public_ip');
    }

    // public_ipv_4_pool - computed: true, optional: true, required: false
    private _publicIpv4Pool?: string; 
    public get publicIpv4Pool() {
        return this.getStringAttribute('public_ipv_4_pool');
    }
    public set publicIpv4Pool(value: string) {
        this._publicIpv4Pool = value;
    }
    public resetPublicIpv4Pool() {
        this._publicIpv4Pool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicIpv4PoolInput() {
        return this._publicIpv4Pool;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEIP.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEIP.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transfer_address - computed: true, optional: true, required: false
    private _transferAddress?: string; 
    public get transferAddress() {
        return this.getStringAttribute('transfer_address');
    }
    public set transferAddress(value: string) {
        this._transferAddress = value;
    }
    public resetTransferAddress() {
        this._transferAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transferAddressInput() {
        return this._transferAddress;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            address: cdktn.stringToTerraform(this._address),
            domain: cdktn.stringToTerraform(this._domain),
            instance_id: cdktn.stringToTerraform(this._instanceId),
            ipam_pool_id: cdktn.stringToTerraform(this._ipamPoolId),
            network_border_group: cdktn.stringToTerraform(this._networkBorderGroup),
            public_ipv_4_pool: cdktn.stringToTerraform(this._publicIpv4Pool),
            tags: cdktn.listMapper(ccEIPTagPropertyToTerraform, false)(this._tags.internalValue),
            transfer_address: cdktn.stringToTerraform(this._transferAddress),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            address: {
                value: cdktn.stringToHclTerraform(this._address),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain: {
                value: cdktn.stringToHclTerraform(this._domain),
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
            ipam_pool_id: {
                value: cdktn.stringToHclTerraform(this._ipamPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_border_group: {
                value: cdktn.stringToHclTerraform(this._networkBorderGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public_ipv_4_pool: {
                value: cdktn.stringToHclTerraform(this._publicIpv4Pool),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEIPTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEIP.TagPropertyList",
            },
            transfer_address: {
                value: cdktn.stringToHclTerraform(this._transferAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEIPTagPropertyToTerraform(struct?: CcEIP.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEIPTagPropertyToHclTerraform(struct?: CcEIP.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEIP {
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip#key CcEIP#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_eip#value CcEIP#value}
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
