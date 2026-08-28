// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectPeerProps extends cdktn.TerraformMetaArguments {
    /**
    * Bgp options for connect peer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer#bgp_options CcConnectPeer#bgp_options}
    */
    readonly bgpOptions?: CcConnectPeer.BgpOptionsProperty;
    /**
    * The ID of the attachment to connect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer#connect_attachment_id CcConnectPeer#connect_attachment_id}
    */
    readonly connectAttachmentId: string;
    /**
    * The IP address of a core network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer#core_network_address CcConnectPeer#core_network_address}
    */
    readonly coreNetworkAddress?: string;
    /**
    * The inside IP addresses used for a Connect peer configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer#inside_cidr_blocks CcConnectPeer#inside_cidr_blocks}
    */
    readonly insideCidrBlocks?: string[];
    /**
    * The IP address of the Connect peer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer#peer_address CcConnectPeer#peer_address}
    */
    readonly peerAddress: string;
    /**
    * The subnet ARN for the connect peer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer#subnet_arn CcConnectPeer#subnet_arn}
    */
    readonly subnetArn?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer#tags CcConnectPeer#tags}
    */
    readonly tags?: CcConnectPeer.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer awscc_networkmanager_connect_peer}
*/
export class CcConnectPeer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkmanager_connect_peer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnectPeer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnectPeer to import
    * @param importFromId The id of the existing CcConnectPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnectPeer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_connect_peer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer awscc_networkmanager_connect_peer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectPeerProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectPeerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkmanager_connect_peer',
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
        this._bgpOptions.internalValue = config.bgpOptions;
        this._connectAttachmentId = config.connectAttachmentId;
        this._coreNetworkAddress = config.coreNetworkAddress;
        this._insideCidrBlocks = config.insideCidrBlocks;
        this._peerAddress = config.peerAddress;
        this._subnetArn = config.subnetArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bgp_options - computed: true, optional: true, required: false
    private _bgpOptions = new CcConnectPeer.BgpOptionsPropertyOutputReference(this, "bgp_options");
    public get bgpOptions() {
        return this._bgpOptions;
    }
    public putBgpOptions(value: CcConnectPeer.BgpOptionsProperty) {
        this._bgpOptions.internalValue = value;
    }
    public resetBgpOptions() {
        this._bgpOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpOptionsInput() {
        return this._bgpOptions.internalValue;
    }

    // configuration - computed: true, optional: false, required: false
    private _configuration = new CcConnectPeer.ConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }

    // connect_attachment_id - computed: false, optional: false, required: true
    private _connectAttachmentId?: string; 
    public get connectAttachmentId() {
        return this.getStringAttribute('connect_attachment_id');
    }
    public set connectAttachmentId(value: string) {
        this._connectAttachmentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectAttachmentIdInput() {
        return this._connectAttachmentId;
    }

    // connect_peer_id - computed: true, optional: false, required: false
    public get connectPeerId() {
        return this.getStringAttribute('connect_peer_id');
    }

    // core_network_address - computed: true, optional: true, required: false
    private _coreNetworkAddress?: string; 
    public get coreNetworkAddress() {
        return this.getStringAttribute('core_network_address');
    }
    public set coreNetworkAddress(value: string) {
        this._coreNetworkAddress = value;
    }
    public resetCoreNetworkAddress() {
        this._coreNetworkAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coreNetworkAddressInput() {
        return this._coreNetworkAddress;
    }

    // core_network_id - computed: true, optional: false, required: false
    public get coreNetworkId() {
        return this.getStringAttribute('core_network_id');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // edge_location - computed: true, optional: false, required: false
    public get edgeLocation() {
        return this.getStringAttribute('edge_location');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // inside_cidr_blocks - computed: true, optional: true, required: false
    private _insideCidrBlocks?: string[]; 
    public get insideCidrBlocks() {
        return this.getListAttribute('inside_cidr_blocks');
    }
    public set insideCidrBlocks(value: string[]) {
        this._insideCidrBlocks = value;
    }
    public resetInsideCidrBlocks() {
        this._insideCidrBlocks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insideCidrBlocksInput() {
        return this._insideCidrBlocks;
    }

    // last_modification_errors - computed: true, optional: false, required: false
    public get lastModificationErrors() {
        return this.getListAttribute('last_modification_errors');
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

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // subnet_arn - computed: true, optional: true, required: false
    private _subnetArn?: string; 
    public get subnetArn() {
        return this.getStringAttribute('subnet_arn');
    }
    public set subnetArn(value: string) {
        this._subnetArn = value;
    }
    public resetSubnetArn() {
        this._subnetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetArnInput() {
        return this._subnetArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConnectPeer.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConnectPeer.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            bgp_options: ccConnectPeerBgpOptionsPropertyToTerraform(this._bgpOptions.internalValue),
            connect_attachment_id: cdktn.stringToTerraform(this._connectAttachmentId),
            core_network_address: cdktn.stringToTerraform(this._coreNetworkAddress),
            inside_cidr_blocks: cdktn.listMapper(cdktn.stringToTerraform, false)(this._insideCidrBlocks),
            peer_address: cdktn.stringToTerraform(this._peerAddress),
            subnet_arn: cdktn.stringToTerraform(this._subnetArn),
            tags: cdktn.listMapper(ccConnectPeerTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bgp_options: {
                value: ccConnectPeerBgpOptionsPropertyToHclTerraform(this._bgpOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnectPeer.BgpOptionsProperty",
            },
            connect_attachment_id: {
                value: cdktn.stringToHclTerraform(this._connectAttachmentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            core_network_address: {
                value: cdktn.stringToHclTerraform(this._coreNetworkAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            inside_cidr_blocks: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._insideCidrBlocks),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            peer_address: {
                value: cdktn.stringToHclTerraform(this._peerAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subnet_arn: {
                value: cdktn.stringToHclTerraform(this._subnetArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConnectPeerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcConnectPeer.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectPeerBgpOptionsPropertyToTerraform(struct?: CcConnectPeer.BgpOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        peer_asn: cdktn.numberToTerraform(struct!.peerAsn),
    }
}


export function ccConnectPeerBgpOptionsPropertyToHclTerraform(struct?: CcConnectPeer.BgpOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        peer_asn: {
            value: cdktn.numberToHclTerraform(struct!.peerAsn),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectPeerBgpConfigurationsPropertyToTerraform(struct?: CcConnectPeer.BgpConfigurationsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConnectPeerBgpConfigurationsPropertyToHclTerraform(struct?: CcConnectPeer.BgpConfigurationsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConnectPeerConfigurationPropertyToTerraform(struct?: CcConnectPeer.ConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConnectPeerConfigurationPropertyToHclTerraform(struct?: CcConnectPeer.ConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConnectPeerTagPropertyToTerraform(struct?: CcConnectPeer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectPeerTagPropertyToHclTerraform(struct?: CcConnectPeer.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConnectPeer {
export interface BgpOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer#peer_asn CcConnectPeer#peer_asn}
    */
    readonly peerAsn?: number;
}
export class BgpOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BgpOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._peerAsn !== undefined) {
            hasAnyValues = true;
            internalValueResult.peerAsn = this._peerAsn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BgpOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._peerAsn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._peerAsn = value.peerAsn;
        }
    }

    // peer_asn - computed: true, optional: true, required: false
    private _peerAsn?: number; 
    public get peerAsn() {
        return this.getNumberAttribute('peer_asn');
    }
    public set peerAsn(value: number) {
        this._peerAsn = value;
    }
    public resetPeerAsn() {
        this._peerAsn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerAsnInput() {
        return this._peerAsn;
    }
}
export interface BgpConfigurationsProperty {
}
export class BgpConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): BgpConfigurationsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BgpConfigurationsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // core_network_address - computed: true, optional: false, required: false
    public get coreNetworkAddress() {
        return this.getStringAttribute('core_network_address');
    }

    // core_network_asn - computed: true, optional: false, required: false
    public get coreNetworkAsn() {
        return this.getNumberAttribute('core_network_asn');
    }

    // peer_address - computed: true, optional: false, required: false
    public get peerAddress() {
        return this.getStringAttribute('peer_address');
    }

    // peer_asn - computed: true, optional: false, required: false
    public get peerAsn() {
        return this.getNumberAttribute('peer_asn');
    }
}

export class BgpConfigurationsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): BgpConfigurationsPropertyOutputReference {
        return new BgpConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationProperty {
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // bgp_configurations - computed: true, optional: false, required: false
    private _bgpConfigurations = new BgpConfigurationsPropertyList(this, "bgp_configurations", false);
    public get bgpConfigurations() {
        return this._bgpConfigurations;
    }

    // core_network_address - computed: true, optional: false, required: false
    public get coreNetworkAddress() {
        return this.getStringAttribute('core_network_address');
    }

    // inside_cidr_blocks - computed: true, optional: false, required: false
    public get insideCidrBlocks() {
        return this.getListAttribute('inside_cidr_blocks');
    }

    // peer_address - computed: true, optional: false, required: false
    public get peerAddress() {
        return this.getStringAttribute('peer_address');
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer#key CcConnectPeer#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_connect_peer#value CcConnectPeer#value}
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
