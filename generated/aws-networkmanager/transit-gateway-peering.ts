// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_peering

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayPeeringProps extends cdktn.TerraformMetaArguments {
    /**
    * The Id of the core network that you want to peer a transit gateway to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_peering#core_network_id CcTransitGatewayPeering#core_network_id}
    */
    readonly coreNetworkId: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_peering#tags CcTransitGatewayPeering#tags}
    */
    readonly tags?: CcTransitGatewayPeering.TagProperty[] | cdktn.IResolvable;
    /**
    * The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_peering#transit_gateway_arn CcTransitGatewayPeering#transit_gateway_arn}
    */
    readonly transitGatewayArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_peering awscc_networkmanager_transit_gateway_peering}
*/
export class CcTransitGatewayPeering extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkmanager_transit_gateway_peering";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayPeering resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayPeering to import
    * @param importFromId The id of the existing CcTransitGatewayPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_peering#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayPeering to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_transit_gateway_peering", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_peering awscc_networkmanager_transit_gateway_peering} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayPeeringProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayPeeringProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkmanager_transit_gateway_peering',
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
        this._coreNetworkId = config.coreNetworkId;
        this._tags.internalValue = config.tags;
        this._transitGatewayArn = config.transitGatewayArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // core_network_arn - computed: true, optional: false, required: false
    public get coreNetworkArn() {
        return this.getStringAttribute('core_network_arn');
    }

    // core_network_id - computed: false, optional: false, required: true
    private _coreNetworkId?: string; 
    public get coreNetworkId() {
        return this.getStringAttribute('core_network_id');
    }
    public set coreNetworkId(value: string) {
        this._coreNetworkId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get coreNetworkIdInput() {
        return this._coreNetworkId;
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

    // last_modification_errors - computed: true, optional: false, required: false
    public get lastModificationErrors() {
        return this.getListAttribute('last_modification_errors');
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
        return this.getStringAttribute('owner_account_id');
    }

    // peering_id - computed: true, optional: false, required: false
    public get peeringId() {
        return this.getStringAttribute('peering_id');
    }

    // peering_type - computed: true, optional: false, required: false
    public get peeringType() {
        return this.getStringAttribute('peering_type');
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTransitGatewayPeering.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTransitGatewayPeering.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transit_gateway_arn - computed: false, optional: false, required: true
    private _transitGatewayArn?: string; 
    public get transitGatewayArn() {
        return this.getStringAttribute('transit_gateway_arn');
    }
    public set transitGatewayArn(value: string) {
        this._transitGatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayArnInput() {
        return this._transitGatewayArn;
    }

    // transit_gateway_peering_attachment_id - computed: true, optional: false, required: false
    public get transitGatewayPeeringAttachmentId() {
        return this.getStringAttribute('transit_gateway_peering_attachment_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            core_network_id: cdktn.stringToTerraform(this._coreNetworkId),
            tags: cdktn.listMapper(ccTransitGatewayPeeringTagPropertyToTerraform, false)(this._tags.internalValue),
            transit_gateway_arn: cdktn.stringToTerraform(this._transitGatewayArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            core_network_id: {
                value: cdktn.stringToHclTerraform(this._coreNetworkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTransitGatewayPeeringTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTransitGatewayPeering.TagPropertyList",
            },
            transit_gateway_arn: {
                value: cdktn.stringToHclTerraform(this._transitGatewayArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTransitGatewayPeeringTagPropertyToTerraform(struct?: CcTransitGatewayPeering.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTransitGatewayPeeringTagPropertyToHclTerraform(struct?: CcTransitGatewayPeering.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTransitGatewayPeering {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_peering#key CcTransitGatewayPeering#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_peering#value CcTransitGatewayPeering#value}
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
