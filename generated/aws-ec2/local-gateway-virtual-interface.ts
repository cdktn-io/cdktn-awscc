// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLocalGatewayVirtualInterfaceProps extends cdktn.TerraformMetaArguments {
    /**
    * The local address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface#local_address CcLocalGatewayVirtualInterface#local_address}
    */
    readonly localAddress: string;
    /**
    * The ID of the virtual interface group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface#local_gateway_virtual_interface_group_id CcLocalGatewayVirtualInterface#local_gateway_virtual_interface_group_id}
    */
    readonly localGatewayVirtualInterfaceGroupId: string;
    /**
    * The Outpost LAG ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface#outpost_lag_id CcLocalGatewayVirtualInterface#outpost_lag_id}
    */
    readonly outpostLagId: string;
    /**
    * The peer address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface#peer_address CcLocalGatewayVirtualInterface#peer_address}
    */
    readonly peerAddress: string;
    /**
    * The peer BGP ASN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn CcLocalGatewayVirtualInterface#peer_bgp_asn}
    */
    readonly peerBgpAsn?: number;
    /**
    * The extended 32-bit ASN of the BGP peer for use with larger ASN values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn_extended CcLocalGatewayVirtualInterface#peer_bgp_asn_extended}
    */
    readonly peerBgpAsnExtended?: number;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface#tags CcLocalGatewayVirtualInterface#tags}
    */
    readonly tags?: CcLocalGatewayVirtualInterface.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the VLAN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface#vlan CcLocalGatewayVirtualInterface#vlan}
    */
    readonly vlan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface awscc_ec2_local_gateway_virtual_interface}
*/
export class CcLocalGatewayVirtualInterface extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_local_gateway_virtual_interface";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLocalGatewayVirtualInterface to import
    * @param importFromId The id of the existing CcLocalGatewayVirtualInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLocalGatewayVirtualInterface to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_local_gateway_virtual_interface", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface awscc_ec2_local_gateway_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLocalGatewayVirtualInterfaceProps
    */
    public constructor(scope: Construct, id: string, config: CcLocalGatewayVirtualInterfaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_local_gateway_virtual_interface',
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
        this._localAddress = config.localAddress;
        this._localGatewayVirtualInterfaceGroupId = config.localGatewayVirtualInterfaceGroupId;
        this._outpostLagId = config.outpostLagId;
        this._peerAddress = config.peerAddress;
        this._peerBgpAsn = config.peerBgpAsn;
        this._peerBgpAsnExtended = config.peerBgpAsnExtended;
        this._tags.internalValue = config.tags;
        this._vlan = config.vlan;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // configuration_state - computed: true, optional: false, required: false
    public get configurationState() {
        return this.getStringAttribute('configuration_state');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // local_address - computed: false, optional: false, required: true
    private _localAddress?: string; 
    public get localAddress() {
        return this.getStringAttribute('local_address');
    }
    public set localAddress(value: string) {
        this._localAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localAddressInput() {
        return this._localAddress;
    }

    // local_bgp_asn - computed: true, optional: false, required: false
    public get localBgpAsn() {
        return this.getNumberAttribute('local_bgp_asn');
    }

    // local_gateway_id - computed: true, optional: false, required: false
    public get localGatewayId() {
        return this.getStringAttribute('local_gateway_id');
    }

    // local_gateway_virtual_interface_group_id - computed: false, optional: false, required: true
    private _localGatewayVirtualInterfaceGroupId?: string; 
    public get localGatewayVirtualInterfaceGroupId() {
        return this.getStringAttribute('local_gateway_virtual_interface_group_id');
    }
    public set localGatewayVirtualInterfaceGroupId(value: string) {
        this._localGatewayVirtualInterfaceGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localGatewayVirtualInterfaceGroupIdInput() {
        return this._localGatewayVirtualInterfaceGroupId;
    }

    // local_gateway_virtual_interface_id - computed: true, optional: false, required: false
    public get localGatewayVirtualInterfaceId() {
        return this.getStringAttribute('local_gateway_virtual_interface_id');
    }

    // outpost_lag_id - computed: false, optional: false, required: true
    private _outpostLagId?: string; 
    public get outpostLagId() {
        return this.getStringAttribute('outpost_lag_id');
    }
    public set outpostLagId(value: string) {
        this._outpostLagId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outpostLagIdInput() {
        return this._outpostLagId;
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // peer_address - computed: false, optional: false, required: true
    private _peerAddress?: string; 
    public get peerAddress() {
        return this.getStringAttribute('peer_address');
    }
    public set peerAddress(value: string) {
        this._peerAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get peerAddressInput() {
        return this._peerAddress;
    }

    // peer_bgp_asn - computed: true, optional: true, required: false
    private _peerBgpAsn?: number; 
    public get peerBgpAsn() {
        return this.getNumberAttribute('peer_bgp_asn');
    }
    public set peerBgpAsn(value: number) {
        this._peerBgpAsn = value;
    }
    public resetPeerBgpAsn() {
        this._peerBgpAsn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerBgpAsnInput() {
        return this._peerBgpAsn;
    }

    // peer_bgp_asn_extended - computed: true, optional: true, required: false
    private _peerBgpAsnExtended?: number; 
    public get peerBgpAsnExtended() {
        return this.getNumberAttribute('peer_bgp_asn_extended');
    }
    public set peerBgpAsnExtended(value: number) {
        this._peerBgpAsnExtended = value;
    }
    public resetPeerBgpAsnExtended() {
        this._peerBgpAsnExtended = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerBgpAsnExtendedInput() {
        return this._peerBgpAsnExtended;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcLocalGatewayVirtualInterface.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcLocalGatewayVirtualInterface.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vlan - computed: false, optional: false, required: true
    private _vlan?: number; 
    public get vlan() {
        return this.getNumberAttribute('vlan');
    }
    public set vlan(value: number) {
        this._vlan = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vlanInput() {
        return this._vlan;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            local_address: cdktn.stringToTerraform(this._localAddress),
            local_gateway_virtual_interface_group_id: cdktn.stringToTerraform(this._localGatewayVirtualInterfaceGroupId),
            outpost_lag_id: cdktn.stringToTerraform(this._outpostLagId),
            peer_address: cdktn.stringToTerraform(this._peerAddress),
            peer_bgp_asn: cdktn.numberToTerraform(this._peerBgpAsn),
            peer_bgp_asn_extended: cdktn.numberToTerraform(this._peerBgpAsnExtended),
            tags: cdktn.listMapper(ccLocalGatewayVirtualInterfaceTagPropertyToTerraform, false)(this._tags.internalValue),
            vlan: cdktn.numberToTerraform(this._vlan),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            local_address: {
                value: cdktn.stringToHclTerraform(this._localAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            local_gateway_virtual_interface_group_id: {
                value: cdktn.stringToHclTerraform(this._localGatewayVirtualInterfaceGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            outpost_lag_id: {
                value: cdktn.stringToHclTerraform(this._outpostLagId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_address: {
                value: cdktn.stringToHclTerraform(this._peerAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_bgp_asn: {
                value: cdktn.numberToHclTerraform(this._peerBgpAsn),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            peer_bgp_asn_extended: {
                value: cdktn.numberToHclTerraform(this._peerBgpAsnExtended),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccLocalGatewayVirtualInterfaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcLocalGatewayVirtualInterface.TagPropertyList",
            },
            vlan: {
                value: cdktn.numberToHclTerraform(this._vlan),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccLocalGatewayVirtualInterfaceTagPropertyToTerraform(struct?: CcLocalGatewayVirtualInterface.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccLocalGatewayVirtualInterfaceTagPropertyToHclTerraform(struct?: CcLocalGatewayVirtualInterface.TagProperty | cdktn.IResolvable): any {
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


export namespace CcLocalGatewayVirtualInterface {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface#key CcLocalGatewayVirtualInterface#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_local_gateway_virtual_interface#value CcLocalGatewayVirtualInterface#value}
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
