// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCustomerGatewayProps extends cdktn.TerraformMetaArguments {
    /**
    * For customer gateway devices that support BGP, specify the device's ASN. You must specify either ``BgpAsn`` or ``BgpAsnExtended`` when creating the customer gateway. If the ASN is larger than ``2,147,483,647``, you must use ``BgpAsnExtended``.
    *  Default: 65000
    *  Valid values: ``1`` to ``2,147,483,647``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway#bgp_asn CcCustomerGateway#bgp_asn}
    */
    readonly bgpAsn?: number;
    /**
    * For customer gateway devices that support BGP, specify the device's ASN. You must specify either ``BgpAsn`` or ``BgpAsnExtended`` when creating the customer gateway. If the ASN is larger than ``2,147,483,647``, you must use ``BgpAsnExtended``.
    *  Valid values: ``2,147,483,648`` to ``4,294,967,295``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway#bgp_asn_extended CcCustomerGateway#bgp_asn_extended}
    */
    readonly bgpAsnExtended?: number;
    /**
    * The Amazon Resource Name (ARN) for the customer gateway certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway#certificate_arn CcCustomerGateway#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * The name of customer gateway device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway#device_name CcCustomerGateway#device_name}
    */
    readonly deviceName?: string;
    /**
    * The IP address for the customer gateway device's outside interface. The address must be static. If ``OutsideIpAddressType`` in your VPN connection options is set to ``PrivateIpv4``, you can use an RFC6598 or RFC1918 private IPv4 address. If ``OutsideIpAddressType`` is set to ``Ipv6``, you can use an IPv6 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway#ip_address CcCustomerGateway#ip_address}
    */
    readonly ipAddress: string;
    /**
    * One or more tags for the customer gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway#tags CcCustomerGateway#tags}
    */
    readonly tags?: CcCustomerGateway.TagProperty[] | cdktn.IResolvable;
    /**
    * The type of VPN connection that this customer gateway supports (``ipsec.1``).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway#type CcCustomerGateway#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway awscc_ec2_customer_gateway}
*/
export class CcCustomerGateway extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_customer_gateway";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCustomerGateway resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCustomerGateway to import
    * @param importFromId The id of the existing CcCustomerGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCustomerGateway to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_customer_gateway", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway awscc_ec2_customer_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCustomerGatewayProps
    */
    public constructor(scope: Construct, id: string, config: CcCustomerGatewayProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_customer_gateway',
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
        this._bgpAsn = config.bgpAsn;
        this._bgpAsnExtended = config.bgpAsnExtended;
        this._certificateArn = config.certificateArn;
        this._deviceName = config.deviceName;
        this._ipAddress = config.ipAddress;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bgp_asn - computed: true, optional: true, required: false
    private _bgpAsn?: number; 
    public get bgpAsn() {
        return this.getNumberAttribute('bgp_asn');
    }
    public set bgpAsn(value: number) {
        this._bgpAsn = value;
    }
    public resetBgpAsn() {
        this._bgpAsn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAsnInput() {
        return this._bgpAsn;
    }

    // bgp_asn_extended - computed: true, optional: true, required: false
    private _bgpAsnExtended?: number; 
    public get bgpAsnExtended() {
        return this.getNumberAttribute('bgp_asn_extended');
    }
    public set bgpAsnExtended(value: number) {
        this._bgpAsnExtended = value;
    }
    public resetBgpAsnExtended() {
        this._bgpAsnExtended = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpAsnExtendedInput() {
        return this._bgpAsnExtended;
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
    }

    // customer_gateway_id - computed: true, optional: false, required: false
    public get customerGatewayId() {
        return this.getStringAttribute('customer_gateway_id');
    }

    // device_name - computed: true, optional: true, required: false
    private _deviceName?: string; 
    public get deviceName() {
        return this.getStringAttribute('device_name');
    }
    public set deviceName(value: string) {
        this._deviceName = value;
    }
    public resetDeviceName() {
        this._deviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceNameInput() {
        return this._deviceName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_address - computed: false, optional: false, required: true
    private _ipAddress?: string; 
    public get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    public set ipAddress(value: string) {
        this._ipAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressInput() {
        return this._ipAddress;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCustomerGateway.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCustomerGateway.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            bgp_asn: cdktn.numberToTerraform(this._bgpAsn),
            bgp_asn_extended: cdktn.numberToTerraform(this._bgpAsnExtended),
            certificate_arn: cdktn.stringToTerraform(this._certificateArn),
            device_name: cdktn.stringToTerraform(this._deviceName),
            ip_address: cdktn.stringToTerraform(this._ipAddress),
            tags: cdktn.listMapper(ccCustomerGatewayTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bgp_asn: {
                value: cdktn.numberToHclTerraform(this._bgpAsn),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            bgp_asn_extended: {
                value: cdktn.numberToHclTerraform(this._bgpAsnExtended),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            certificate_arn: {
                value: cdktn.stringToHclTerraform(this._certificateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            device_name: {
                value: cdktn.stringToHclTerraform(this._deviceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_address: {
                value: cdktn.stringToHclTerraform(this._ipAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCustomerGatewayTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCustomerGateway.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCustomerGatewayTagPropertyToTerraform(struct?: CcCustomerGateway.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCustomerGatewayTagPropertyToHclTerraform(struct?: CcCustomerGateway.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCustomerGateway {
export interface TagProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway#key CcCustomerGateway#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_customer_gateway#value CcCustomerGateway#value}
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
