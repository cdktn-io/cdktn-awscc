// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRouteServerPeerProps extends cdktn.TerraformMetaArguments {
    /**
    * BGP Options
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer#bgp_options CcRouteServerPeer#bgp_options}
    */
    readonly bgpOptions: CcRouteServerPeer.BgpOptionsProperty;
    /**
    * IP address of the Route Server Peer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer#peer_address CcRouteServerPeer#peer_address}
    */
    readonly peerAddress: string;
    /**
    * Route Server Endpoint ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer#route_server_endpoint_id CcRouteServerPeer#route_server_endpoint_id}
    */
    readonly routeServerEndpointId: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer#tags CcRouteServerPeer#tags}
    */
    readonly tags?: CcRouteServerPeer.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer awscc_ec2_route_server_peer}
*/
export class CcRouteServerPeer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_route_server_peer";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRouteServerPeer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRouteServerPeer to import
    * @param importFromId The id of the existing CcRouteServerPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRouteServerPeer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_route_server_peer", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer awscc_ec2_route_server_peer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRouteServerPeerProps
    */
    public constructor(scope: Construct, id: string, config: CcRouteServerPeerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_route_server_peer',
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
        this._bgpOptions.internalValue = config.bgpOptions;
        this._peerAddress = config.peerAddress;
        this._routeServerEndpointId = config.routeServerEndpointId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // bgp_options - computed: false, optional: false, required: true
    private _bgpOptions = new CcRouteServerPeer.BgpOptionsPropertyOutputReference(this, "bgp_options");
    public get bgpOptions() {
        return this._bgpOptions;
    }
    public putBgpOptions(value: CcRouteServerPeer.BgpOptionsProperty) {
        this._bgpOptions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bgpOptionsInput() {
        return this._bgpOptions.internalValue;
    }

    // endpoint_eni_address - computed: true, optional: false, required: false
    public get endpointEniAddress() {
        return this.getStringAttribute('endpoint_eni_address');
    }

    // endpoint_eni_id - computed: true, optional: false, required: false
    public get endpointEniId() {
        return this.getStringAttribute('endpoint_eni_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // route_server_endpoint_id - computed: false, optional: false, required: true
    private _routeServerEndpointId?: string; 
    public get routeServerEndpointId() {
        return this.getStringAttribute('route_server_endpoint_id');
    }
    public set routeServerEndpointId(value: string) {
        this._routeServerEndpointId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeServerEndpointIdInput() {
        return this._routeServerEndpointId;
    }

    // route_server_id - computed: true, optional: false, required: false
    public get routeServerId() {
        return this.getStringAttribute('route_server_id');
    }

    // route_server_peer_id - computed: true, optional: false, required: false
    public get routeServerPeerId() {
        return this.getStringAttribute('route_server_peer_id');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRouteServerPeer.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRouteServerPeer.TagProperty[] | cdktn.IResolvable) {
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
            bgp_options: ccRouteServerPeerBgpOptionsPropertyToTerraform(this._bgpOptions.internalValue),
            peer_address: cdktn.stringToTerraform(this._peerAddress),
            route_server_endpoint_id: cdktn.stringToTerraform(this._routeServerEndpointId),
            tags: cdktn.listMapper(ccRouteServerPeerTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bgp_options: {
                value: ccRouteServerPeerBgpOptionsPropertyToHclTerraform(this._bgpOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRouteServerPeer.BgpOptionsProperty",
            },
            peer_address: {
                value: cdktn.stringToHclTerraform(this._peerAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            route_server_endpoint_id: {
                value: cdktn.stringToHclTerraform(this._routeServerEndpointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRouteServerPeerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRouteServerPeer.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRouteServerPeerBgpOptionsPropertyToTerraform(struct?: CcRouteServerPeer.BgpOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        peer_asn: cdktn.numberToTerraform(struct!.peerAsn),
        peer_liveness_detection: cdktn.stringToTerraform(struct!.peerLivenessDetection),
    }
}


export function ccRouteServerPeerBgpOptionsPropertyToHclTerraform(struct?: CcRouteServerPeer.BgpOptionsProperty | cdktn.IResolvable): any {
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
        peer_liveness_detection: {
            value: cdktn.stringToHclTerraform(struct!.peerLivenessDetection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRouteServerPeerTagPropertyToTerraform(struct?: CcRouteServerPeer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRouteServerPeerTagPropertyToHclTerraform(struct?: CcRouteServerPeer.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRouteServerPeer {
export interface BgpOptionsProperty {
    /**
    * BGP ASN of the Route Server Peer
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer#peer_asn CcRouteServerPeer#peer_asn}
    */
    readonly peerAsn?: number;
    /**
    * BGP Liveness Detection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer#peer_liveness_detection CcRouteServerPeer#peer_liveness_detection}
    */
    readonly peerLivenessDetection?: string;
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
        if (this._peerLivenessDetection !== undefined) {
            hasAnyValues = true;
            internalValueResult.peerLivenessDetection = this._peerLivenessDetection;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BgpOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._peerAsn = undefined;
            this._peerLivenessDetection = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._peerAsn = value.peerAsn;
            this._peerLivenessDetection = value.peerLivenessDetection;
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

    // peer_liveness_detection - computed: true, optional: true, required: false
    private _peerLivenessDetection?: string; 
    public get peerLivenessDetection() {
        return this.getStringAttribute('peer_liveness_detection');
    }
    public set peerLivenessDetection(value: string) {
        this._peerLivenessDetection = value;
    }
    public resetPeerLivenessDetection() {
        this._peerLivenessDetection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerLivenessDetectionInput() {
        return this._peerLivenessDetection;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer#key CcRouteServerPeer#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_peer#value CcRouteServerPeer#value}
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
