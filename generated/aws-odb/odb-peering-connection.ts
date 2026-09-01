// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOdbPeeringConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The additional CIDR blocks for the ODB peering connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#additional_peer_network_cidrs CcOdbPeeringConnection#additional_peer_network_cidrs}
    */
    readonly additionalPeerNetworkCidrs?: string[];
    /**
    * The name of the ODB peering connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#display_name CcOdbPeeringConnection#display_name}
    */
    readonly displayName?: string;
    /**
    * The unique identifier of the ODB network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#odb_network_id CcOdbPeeringConnection#odb_network_id}
    */
    readonly odbNetworkId?: string;
    /**
    * The unique identifier of the peer network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#peer_network_id CcOdbPeeringConnection#peer_network_id}
    */
    readonly peerNetworkId?: string;
    /**
    * The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#peer_network_route_table_ids CcOdbPeeringConnection#peer_network_route_table_ids}
    */
    readonly peerNetworkRouteTableIds?: string[];
    /**
    * Tags to assign to the Odb peering connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#tags CcOdbPeeringConnection#tags}
    */
    readonly tags?: CcOdbPeeringConnection.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection awscc_odb_odb_peering_connection}
*/
export class CcOdbPeeringConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_odb_odb_peering_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOdbPeeringConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOdbPeeringConnection to import
    * @param importFromId The id of the existing CcOdbPeeringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOdbPeeringConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_odb_odb_peering_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection awscc_odb_odb_peering_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOdbPeeringConnectionProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcOdbPeeringConnectionProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_odb_odb_peering_connection',
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
        this._additionalPeerNetworkCidrs = config.additionalPeerNetworkCidrs;
        this._displayName = config.displayName;
        this._odbNetworkId = config.odbNetworkId;
        this._peerNetworkId = config.peerNetworkId;
        this._peerNetworkRouteTableIds = config.peerNetworkRouteTableIds;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_peer_network_cidrs - computed: true, optional: true, required: false
    private _additionalPeerNetworkCidrs?: string[]; 
    public get additionalPeerNetworkCidrs() {
        return this.getListAttribute('additional_peer_network_cidrs');
    }
    public set additionalPeerNetworkCidrs(value: string[]) {
        this._additionalPeerNetworkCidrs = value;
    }
    public resetAdditionalPeerNetworkCidrs() {
        this._additionalPeerNetworkCidrs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalPeerNetworkCidrsInput() {
        return this._additionalPeerNetworkCidrs;
    }

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // odb_network_arn - computed: true, optional: false, required: false
    public get odbNetworkArn() {
        return this.getStringAttribute('odb_network_arn');
    }

    // odb_network_id - computed: true, optional: true, required: false
    private _odbNetworkId?: string; 
    public get odbNetworkId() {
        return this.getStringAttribute('odb_network_id');
    }
    public set odbNetworkId(value: string) {
        this._odbNetworkId = value;
    }
    public resetOdbNetworkId() {
        this._odbNetworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get odbNetworkIdInput() {
        return this._odbNetworkId;
    }

    // odb_peering_connection_arn - computed: true, optional: false, required: false
    public get odbPeeringConnectionArn() {
        return this.getStringAttribute('odb_peering_connection_arn');
    }

    // odb_peering_connection_id - computed: true, optional: false, required: false
    public get odbPeeringConnectionId() {
        return this.getStringAttribute('odb_peering_connection_id');
    }

    // peer_network_arn - computed: true, optional: false, required: false
    public get peerNetworkArn() {
        return this.getStringAttribute('peer_network_arn');
    }

    // peer_network_cidrs - computed: true, optional: false, required: false
    public get peerNetworkCidrs() {
        return this.getListAttribute('peer_network_cidrs');
    }

    // peer_network_id - computed: true, optional: true, required: false
    private _peerNetworkId?: string; 
    public get peerNetworkId() {
        return this.getStringAttribute('peer_network_id');
    }
    public set peerNetworkId(value: string) {
        this._peerNetworkId = value;
    }
    public resetPeerNetworkId() {
        this._peerNetworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerNetworkIdInput() {
        return this._peerNetworkId;
    }

    // peer_network_route_table_ids - computed: true, optional: true, required: false
    private _peerNetworkRouteTableIds?: string[]; 
    public get peerNetworkRouteTableIds() {
        return this.getListAttribute('peer_network_route_table_ids');
    }
    public set peerNetworkRouteTableIds(value: string[]) {
        this._peerNetworkRouteTableIds = value;
    }
    public resetPeerNetworkRouteTableIds() {
        this._peerNetworkRouteTableIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get peerNetworkRouteTableIdsInput() {
        return this._peerNetworkRouteTableIds;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcOdbPeeringConnection.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcOdbPeeringConnection.TagProperty[] | cdktn.IResolvable) {
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
            additional_peer_network_cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._additionalPeerNetworkCidrs),
            display_name: cdktn.stringToTerraform(this._displayName),
            odb_network_id: cdktn.stringToTerraform(this._odbNetworkId),
            peer_network_id: cdktn.stringToTerraform(this._peerNetworkId),
            peer_network_route_table_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._peerNetworkRouteTableIds),
            tags: cdktn.listMapper(ccOdbPeeringConnectionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_peer_network_cidrs: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._additionalPeerNetworkCidrs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            odb_network_id: {
                value: cdktn.stringToHclTerraform(this._odbNetworkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_network_id: {
                value: cdktn.stringToHclTerraform(this._peerNetworkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_network_route_table_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._peerNetworkRouteTableIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccOdbPeeringConnectionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOdbPeeringConnection.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOdbPeeringConnectionTagPropertyToTerraform(struct?: CcOdbPeeringConnection.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccOdbPeeringConnectionTagPropertyToHclTerraform(struct?: CcOdbPeeringConnection.TagProperty | cdktn.IResolvable): any {
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


export namespace CcOdbPeeringConnection {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#key CcOdbPeeringConnection#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#value CcOdbPeeringConnection#value}
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
