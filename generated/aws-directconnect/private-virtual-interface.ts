// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPrivateVirtualInterfaceProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the role to allocate the private virtual interface. Needs directconnect:AllocatePrivateVirtualInterface permissions and tag permissions if applicable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#allocate_private_virtual_interface_role_arn CcPrivateVirtualInterface#allocate_private_virtual_interface_role_arn}
    */
    readonly allocatePrivateVirtualInterfaceRoleArn?: string;
    /**
    * The BGP peers configured on this virtual interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#bgp_peers CcPrivateVirtualInterface#bgp_peers}
    */
    readonly bgpPeers: CcPrivateVirtualInterface.BgpPeerProperty[] | cdktn.IResolvable;
    /**
    * The ID or ARN of the connection or LAG.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#connection_id CcPrivateVirtualInterface#connection_id}
    */
    readonly connectionId: string;
    /**
    * The ID or ARN of the Direct Connect gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#direct_connect_gateway_id CcPrivateVirtualInterface#direct_connect_gateway_id}
    */
    readonly directConnectGatewayId?: string;
    /**
    * Indicates whether to enable or disable SiteLink.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#enable_site_link CcPrivateVirtualInterface#enable_site_link}
    */
    readonly enableSiteLink?: boolean | cdktn.IResolvable;
    /**
    * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#mtu CcPrivateVirtualInterface#mtu}
    */
    readonly mtu?: number;
    /**
    * The rate limit (bandwidth allocation) for the virtual interface. The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#rate_limit CcPrivateVirtualInterface#rate_limit}
    */
    readonly rateLimit?: string;
    /**
    * The tags associated with the private virtual interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#tags CcPrivateVirtualInterface#tags}
    */
    readonly tags?: CcPrivateVirtualInterface.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID or ARN of the virtual private gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#virtual_gateway_id CcPrivateVirtualInterface#virtual_gateway_id}
    */
    readonly virtualGatewayId?: string;
    /**
    * The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#virtual_interface_name CcPrivateVirtualInterface#virtual_interface_name}
    */
    readonly virtualInterfaceName: string;
    /**
    * The ID of the VLAN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#vlan CcPrivateVirtualInterface#vlan}
    */
    readonly vlan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface awscc_directconnect_private_virtual_interface}
*/
export class CcPrivateVirtualInterface extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_directconnect_private_virtual_interface";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPrivateVirtualInterface resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPrivateVirtualInterface to import
    * @param importFromId The id of the existing CcPrivateVirtualInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPrivateVirtualInterface to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_directconnect_private_virtual_interface", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface awscc_directconnect_private_virtual_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPrivateVirtualInterfaceProps
    */
    public constructor(scope: Construct, id: string, config: CcPrivateVirtualInterfaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_directconnect_private_virtual_interface',
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
        this._allocatePrivateVirtualInterfaceRoleArn = config.allocatePrivateVirtualInterfaceRoleArn;
        this._bgpPeers.internalValue = config.bgpPeers;
        this._connectionId = config.connectionId;
        this._directConnectGatewayId = config.directConnectGatewayId;
        this._enableSiteLink = config.enableSiteLink;
        this._mtu = config.mtu;
        this._rateLimit = config.rateLimit;
        this._tags.internalValue = config.tags;
        this._virtualGatewayId = config.virtualGatewayId;
        this._virtualInterfaceName = config.virtualInterfaceName;
        this._vlan = config.vlan;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocate_private_virtual_interface_role_arn - computed: true, optional: true, required: false
    private _allocatePrivateVirtualInterfaceRoleArn?: string; 
    public get allocatePrivateVirtualInterfaceRoleArn() {
        return this.getStringAttribute('allocate_private_virtual_interface_role_arn');
    }
    public set allocatePrivateVirtualInterfaceRoleArn(value: string) {
        this._allocatePrivateVirtualInterfaceRoleArn = value;
    }
    public resetAllocatePrivateVirtualInterfaceRoleArn() {
        this._allocatePrivateVirtualInterfaceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocatePrivateVirtualInterfaceRoleArnInput() {
        return this._allocatePrivateVirtualInterfaceRoleArn;
    }

    // bgp_peers - computed: false, optional: false, required: true
    private _bgpPeers = new CcPrivateVirtualInterface.BgpPeerPropertyList(this, "bgp_peers", true);
    public get bgpPeers() {
        return this._bgpPeers;
    }
    public putBgpPeers(value: CcPrivateVirtualInterface.BgpPeerProperty[] | cdktn.IResolvable) {
        this._bgpPeers.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpPeersInput() {
        return this._bgpPeers.internalValue;
    }

    // connection_id - computed: false, optional: false, required: true
    private _connectionId?: string; 
    public get connectionId() {
        return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string) {
        this._connectionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
        return this._connectionId;
    }

    // direct_connect_gateway_id - computed: true, optional: true, required: false
    private _directConnectGatewayId?: string; 
    public get directConnectGatewayId() {
        return this.getStringAttribute('direct_connect_gateway_id');
    }
    public set directConnectGatewayId(value: string) {
        this._directConnectGatewayId = value;
    }
    public resetDirectConnectGatewayId() {
        this._directConnectGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directConnectGatewayIdInput() {
        return this._directConnectGatewayId;
    }

    // enable_site_link - computed: true, optional: true, required: false
    private _enableSiteLink?: boolean | cdktn.IResolvable; 
    public get enableSiteLink() {
        return this.getBooleanAttribute('enable_site_link');
    }
    public set enableSiteLink(value: boolean | cdktn.IResolvable) {
        this._enableSiteLink = value;
    }
    public resetEnableSiteLink() {
        this._enableSiteLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSiteLinkInput() {
        return this._enableSiteLink;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // mtu - computed: true, optional: true, required: false
    private _mtu?: number; 
    public get mtu() {
        return this.getNumberAttribute('mtu');
    }
    public set mtu(value: number) {
        this._mtu = value;
    }
    public resetMtu() {
        this._mtu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mtuInput() {
        return this._mtu;
    }

    // rate_limit - computed: true, optional: true, required: false
    private _rateLimit?: string; 
    public get rateLimit() {
        return this.getStringAttribute('rate_limit');
    }
    public set rateLimit(value: string) {
        this._rateLimit = value;
    }
    public resetRateLimit() {
        this._rateLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rateLimitInput() {
        return this._rateLimit;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPrivateVirtualInterface.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPrivateVirtualInterface.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // virtual_gateway_id - computed: true, optional: true, required: false
    private _virtualGatewayId?: string; 
    public get virtualGatewayId() {
        return this.getStringAttribute('virtual_gateway_id');
    }
    public set virtualGatewayId(value: string) {
        this._virtualGatewayId = value;
    }
    public resetVirtualGatewayId() {
        this._virtualGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualGatewayIdInput() {
        return this._virtualGatewayId;
    }

    // virtual_interface_arn - computed: true, optional: false, required: false
    public get virtualInterfaceArn() {
        return this.getStringAttribute('virtual_interface_arn');
    }

    // virtual_interface_id - computed: true, optional: false, required: false
    public get virtualInterfaceId() {
        return this.getStringAttribute('virtual_interface_id');
    }

    // virtual_interface_name - computed: false, optional: false, required: true
    private _virtualInterfaceName?: string; 
    public get virtualInterfaceName() {
        return this.getStringAttribute('virtual_interface_name');
    }
    public set virtualInterfaceName(value: string) {
        this._virtualInterfaceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualInterfaceNameInput() {
        return this._virtualInterfaceName;
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
            allocate_private_virtual_interface_role_arn: cdktn.stringToTerraform(this._allocatePrivateVirtualInterfaceRoleArn),
            bgp_peers: cdktn.listMapper(ccPrivateVirtualInterfaceBgpPeerPropertyToTerraform, false)(this._bgpPeers.internalValue),
            connection_id: cdktn.stringToTerraform(this._connectionId),
            direct_connect_gateway_id: cdktn.stringToTerraform(this._directConnectGatewayId),
            enable_site_link: cdktn.booleanToTerraform(this._enableSiteLink),
            mtu: cdktn.numberToTerraform(this._mtu),
            rate_limit: cdktn.stringToTerraform(this._rateLimit),
            tags: cdktn.listMapper(ccPrivateVirtualInterfaceTagPropertyToTerraform, false)(this._tags.internalValue),
            virtual_gateway_id: cdktn.stringToTerraform(this._virtualGatewayId),
            virtual_interface_name: cdktn.stringToTerraform(this._virtualInterfaceName),
            vlan: cdktn.numberToTerraform(this._vlan),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allocate_private_virtual_interface_role_arn: {
                value: cdktn.stringToHclTerraform(this._allocatePrivateVirtualInterfaceRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bgp_peers: {
                value: cdktn.listMapperHcl(ccPrivateVirtualInterfaceBgpPeerPropertyToHclTerraform, false)(this._bgpPeers.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcPrivateVirtualInterface.BgpPeerPropertyList",
            },
            connection_id: {
                value: cdktn.stringToHclTerraform(this._connectionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            direct_connect_gateway_id: {
                value: cdktn.stringToHclTerraform(this._directConnectGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_site_link: {
                value: cdktn.booleanToHclTerraform(this._enableSiteLink),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            mtu: {
                value: cdktn.numberToHclTerraform(this._mtu),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rate_limit: {
                value: cdktn.stringToHclTerraform(this._rateLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPrivateVirtualInterfaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcPrivateVirtualInterface.TagPropertyList",
            },
            virtual_gateway_id: {
                value: cdktn.stringToHclTerraform(this._virtualGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            virtual_interface_name: {
                value: cdktn.stringToHclTerraform(this._virtualInterfaceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export function ccPrivateVirtualInterfaceBgpPeerPropertyToTerraform(struct?: CcPrivateVirtualInterface.BgpPeerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address_family: cdktn.stringToTerraform(struct!.addressFamily),
        amazon_address: cdktn.stringToTerraform(struct!.amazonAddress),
        asn: cdktn.stringToTerraform(struct!.asn),
        auth_key: cdktn.stringToTerraform(struct!.authKey),
        bgp_peer_id: cdktn.stringToTerraform(struct!.bgpPeerId),
        customer_address: cdktn.stringToTerraform(struct!.customerAddress),
    }
}


export function ccPrivateVirtualInterfaceBgpPeerPropertyToHclTerraform(struct?: CcPrivateVirtualInterface.BgpPeerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address_family: {
            value: cdktn.stringToHclTerraform(struct!.addressFamily),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        amazon_address: {
            value: cdktn.stringToHclTerraform(struct!.amazonAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        asn: {
            value: cdktn.stringToHclTerraform(struct!.asn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_key: {
            value: cdktn.stringToHclTerraform(struct!.authKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bgp_peer_id: {
            value: cdktn.stringToHclTerraform(struct!.bgpPeerId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        customer_address: {
            value: cdktn.stringToHclTerraform(struct!.customerAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPrivateVirtualInterfaceTagPropertyToTerraform(struct?: CcPrivateVirtualInterface.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPrivateVirtualInterfaceTagPropertyToHclTerraform(struct?: CcPrivateVirtualInterface.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPrivateVirtualInterface {
export interface BgpPeerProperty {
    /**
    * The address family for the BGP peer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#address_family CcPrivateVirtualInterface#address_family}
    */
    readonly addressFamily: string;
    /**
    * The IP address assigned to the Amazon interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#amazon_address CcPrivateVirtualInterface#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#asn CcPrivateVirtualInterface#asn}
    */
    readonly asn: string;
    /**
    * The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximum length of 80 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#auth_key CcPrivateVirtualInterface#auth_key}
    */
    readonly authKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#bgp_peer_id CcPrivateVirtualInterface#bgp_peer_id}
    */
    readonly bgpPeerId?: string;
    /**
    * The IP address assigned to the customer interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#customer_address CcPrivateVirtualInterface#customer_address}
    */
    readonly customerAddress?: string;
}
export class BgpPeerPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BgpPeerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addressFamily !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressFamily = this._addressFamily;
        }
        if (this._amazonAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonAddress = this._amazonAddress;
        }
        if (this._asn !== undefined) {
            hasAnyValues = true;
            internalValueResult.asn = this._asn;
        }
        if (this._authKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.authKey = this._authKey;
        }
        if (this._bgpPeerId !== undefined) {
            hasAnyValues = true;
            internalValueResult.bgpPeerId = this._bgpPeerId;
        }
        if (this._customerAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerAddress = this._customerAddress;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BgpPeerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addressFamily = undefined;
            this._amazonAddress = undefined;
            this._asn = undefined;
            this._authKey = undefined;
            this._bgpPeerId = undefined;
            this._customerAddress = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addressFamily = value.addressFamily;
            this._amazonAddress = value.amazonAddress;
            this._asn = value.asn;
            this._authKey = value.authKey;
            this._bgpPeerId = value.bgpPeerId;
            this._customerAddress = value.customerAddress;
        }
    }

    // address_family - computed: false, optional: false, required: true
    private _addressFamily?: string; 
    public get addressFamily() {
        return this.getStringAttribute('address_family');
    }
    public set addressFamily(value: string) {
        this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addressFamilyInput() {
        return this._addressFamily;
    }

    // amazon_address - computed: true, optional: true, required: false
    private _amazonAddress?: string; 
    public get amazonAddress() {
        return this.getStringAttribute('amazon_address');
    }
    public set amazonAddress(value: string) {
        this._amazonAddress = value;
    }
    public resetAmazonAddress() {
        this._amazonAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonAddressInput() {
        return this._amazonAddress;
    }

    // asn - computed: false, optional: false, required: true
    private _asn?: string; 
    public get asn() {
        return this.getStringAttribute('asn');
    }
    public set asn(value: string) {
        this._asn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get asnInput() {
        return this._asn;
    }

    // auth_key - computed: true, optional: true, required: false
    private _authKey?: string; 
    public get authKey() {
        return this.getStringAttribute('auth_key');
    }
    public set authKey(value: string) {
        this._authKey = value;
    }
    public resetAuthKey() {
        this._authKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authKeyInput() {
        return this._authKey;
    }

    // bgp_peer_id - computed: true, optional: true, required: false
    private _bgpPeerId?: string; 
    public get bgpPeerId() {
        return this.getStringAttribute('bgp_peer_id');
    }
    public set bgpPeerId(value: string) {
        this._bgpPeerId = value;
    }
    public resetBgpPeerId() {
        this._bgpPeerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpPeerIdInput() {
        return this._bgpPeerId;
    }

    // customer_address - computed: true, optional: true, required: false
    private _customerAddress?: string; 
    public get customerAddress() {
        return this.getStringAttribute('customer_address');
    }
    public set customerAddress(value: string) {
        this._customerAddress = value;
    }
    public resetCustomerAddress() {
        this._customerAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerAddressInput() {
        return this._customerAddress;
    }
}

export class BgpPeerPropertyList extends cdktn.ComplexList {
    public internalValue? : BgpPeerProperty[] | cdktn.IResolvable

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
    public get(index: number): BgpPeerPropertyOutputReference {
        return new BgpPeerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#key CcPrivateVirtualInterface#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#value CcPrivateVirtualInterface#value}
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
