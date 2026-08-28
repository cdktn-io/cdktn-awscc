// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_peering_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayPeeringAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the peer account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_peering_attachment#peer_account_id CcTransitGatewayPeeringAttachment#peer_account_id}
    */
    readonly peerAccountId: string;
    /**
    * Peer Region
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_peering_attachment#peer_region CcTransitGatewayPeeringAttachment#peer_region}
    */
    readonly peerRegion: string;
    /**
    * The ID of the peer transit gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id CcTransitGatewayPeeringAttachment#peer_transit_gateway_id}
    */
    readonly peerTransitGatewayId: string;
    /**
    * The tags for the transit gateway peering attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_peering_attachment#tags CcTransitGatewayPeeringAttachment#tags}
    */
    readonly tags?: CcTransitGatewayPeeringAttachment.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the transit gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_peering_attachment#transit_gateway_id CcTransitGatewayPeeringAttachment#transit_gateway_id}
    */
    readonly transitGatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_peering_attachment awscc_ec2_transit_gateway_peering_attachment}
*/
export class CcTransitGatewayPeeringAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_transit_gateway_peering_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayPeeringAttachment to import
    * @param importFromId The id of the existing CcTransitGatewayPeeringAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_peering_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayPeeringAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_peering_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_peering_attachment awscc_ec2_transit_gateway_peering_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayPeeringAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayPeeringAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_transit_gateway_peering_attachment',
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
        this._peerAccountId = config.peerAccountId;
        this._peerRegion = config.peerRegion;
        this._peerTransitGatewayId = config.peerTransitGatewayId;
        this._tags.internalValue = config.tags;
        this._transitGatewayId = config.transitGatewayId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // peer_account_id - computed: false, optional: false, required: true
    private _peerAccountId?: string; 
    public get peerAccountId() {
        return this.getStringAttribute('peer_account_id');
    }
    public set peerAccountId(value: string) {
        this._peerAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get peerAccountIdInput() {
        return this._peerAccountId;
    }

    // peer_region - computed: false, optional: false, required: true
    private _peerRegion?: string; 
    public get peerRegion() {
        return this.getStringAttribute('peer_region');
    }
    public set peerRegion(value: string) {
        this._peerRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get peerRegionInput() {
        return this._peerRegion;
    }

    // peer_transit_gateway_id - computed: false, optional: false, required: true
    private _peerTransitGatewayId?: string; 
    public get peerTransitGatewayId() {
        return this.getStringAttribute('peer_transit_gateway_id');
    }
    public set peerTransitGatewayId(value: string) {
        this._peerTransitGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get peerTransitGatewayIdInput() {
        return this._peerTransitGatewayId;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // status - computed: true, optional: false, required: false
    private _status = new CcTransitGatewayPeeringAttachment.StatusPropertyOutputReference(this, "status");
    public get status() {
        return this._status;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTransitGatewayPeeringAttachment.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTransitGatewayPeeringAttachment.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transit_gateway_attachment_id - computed: true, optional: false, required: false
    public get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }

    // transit_gateway_id - computed: false, optional: false, required: true
    private _transitGatewayId?: string; 
    public get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    public set transitGatewayId(value: string) {
        this._transitGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayIdInput() {
        return this._transitGatewayId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            peer_account_id: cdktn.stringToTerraform(this._peerAccountId),
            peer_region: cdktn.stringToTerraform(this._peerRegion),
            peer_transit_gateway_id: cdktn.stringToTerraform(this._peerTransitGatewayId),
            tags: cdktn.listMapper(ccTransitGatewayPeeringAttachmentTagPropertyToTerraform, false)(this._tags.internalValue),
            transit_gateway_id: cdktn.stringToTerraform(this._transitGatewayId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            peer_account_id: {
                value: cdktn.stringToHclTerraform(this._peerAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_region: {
                value: cdktn.stringToHclTerraform(this._peerRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            peer_transit_gateway_id: {
                value: cdktn.stringToHclTerraform(this._peerTransitGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTransitGatewayPeeringAttachmentTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTransitGatewayPeeringAttachment.TagPropertyList",
            },
            transit_gateway_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTransitGatewayPeeringAttachmentStatusPropertyToTerraform(struct?: CcTransitGatewayPeeringAttachment.StatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccTransitGatewayPeeringAttachmentStatusPropertyToHclTerraform(struct?: CcTransitGatewayPeeringAttachment.StatusProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccTransitGatewayPeeringAttachmentTagPropertyToTerraform(struct?: CcTransitGatewayPeeringAttachment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTransitGatewayPeeringAttachmentTagPropertyToHclTerraform(struct?: CcTransitGatewayPeeringAttachment.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTransitGatewayPeeringAttachment {
export interface StatusProperty {
}
export class StatusPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StatusProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatusProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // code - computed: true, optional: false, required: false
    public get code() {
        return this.getStringAttribute('code');
    }

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
    }
}
export interface TagProperty {
    /**
    * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_peering_attachment#key CcTransitGatewayPeeringAttachment#key}
    */
    readonly key?: string;
    /**
    * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_peering_attachment#value CcTransitGatewayPeeringAttachment#value}
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
