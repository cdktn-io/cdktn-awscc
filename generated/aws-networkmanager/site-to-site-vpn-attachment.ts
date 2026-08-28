// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSiteToSiteVpnAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of a core network where you're creating a site-to-site VPN attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#core_network_id CcSiteToSiteVpnAttachment#core_network_id}
    */
    readonly coreNetworkId: string;
    /**
    * The name of the network function group attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#network_function_group_name CcSiteToSiteVpnAttachment#network_function_group_name}
    */
    readonly networkFunctionGroupName?: string;
    /**
    * The attachment to move from one network function group to another.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#proposed_network_function_group_change CcSiteToSiteVpnAttachment#proposed_network_function_group_change}
    */
    readonly proposedNetworkFunctionGroupChange?: CcSiteToSiteVpnAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
    * The attachment to move from one segment to another.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#proposed_segment_change CcSiteToSiteVpnAttachment#proposed_segment_change}
    */
    readonly proposedSegmentChange?: CcSiteToSiteVpnAttachment.ProposedSegmentChangeProperty;
    /**
    * Routing policy label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#routing_policy_label CcSiteToSiteVpnAttachment#routing_policy_label}
    */
    readonly routingPolicyLabel?: string;
    /**
    * Tags for the attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#tags CcSiteToSiteVpnAttachment#tags}
    */
    readonly tags?: CcSiteToSiteVpnAttachment.TagsProperty[] | cdktn.IResolvable;
    /**
    * The ARN of the site-to-site VPN attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#vpn_connection_arn CcSiteToSiteVpnAttachment#vpn_connection_arn}
    */
    readonly vpnConnectionArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment awscc_networkmanager_site_to_site_vpn_attachment}
*/
export class CcSiteToSiteVpnAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkmanager_site_to_site_vpn_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSiteToSiteVpnAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSiteToSiteVpnAttachment to import
    * @param importFromId The id of the existing CcSiteToSiteVpnAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSiteToSiteVpnAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_site_to_site_vpn_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment awscc_networkmanager_site_to_site_vpn_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSiteToSiteVpnAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcSiteToSiteVpnAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkmanager_site_to_site_vpn_attachment',
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
        this._networkFunctionGroupName = config.networkFunctionGroupName;
        this._proposedNetworkFunctionGroupChange.internalValue = config.proposedNetworkFunctionGroupChange;
        this._proposedSegmentChange.internalValue = config.proposedSegmentChange;
        this._routingPolicyLabel = config.routingPolicyLabel;
        this._tags.internalValue = config.tags;
        this._vpnConnectionArn = config.vpnConnectionArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attachment_id - computed: true, optional: false, required: false
    public get attachmentId() {
        return this.getStringAttribute('attachment_id');
    }

    // attachment_policy_rule_number - computed: true, optional: false, required: false
    public get attachmentPolicyRuleNumber() {
        return this.getNumberAttribute('attachment_policy_rule_number');
    }

    // attachment_type - computed: true, optional: false, required: false
    public get attachmentType() {
        return this.getStringAttribute('attachment_type');
    }

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

    // network_function_group_name - computed: true, optional: true, required: false
    private _networkFunctionGroupName?: string; 
    public get networkFunctionGroupName() {
        return this.getStringAttribute('network_function_group_name');
    }
    public set networkFunctionGroupName(value: string) {
        this._networkFunctionGroupName = value;
    }
    public resetNetworkFunctionGroupName() {
        this._networkFunctionGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkFunctionGroupNameInput() {
        return this._networkFunctionGroupName;
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
        return this.getStringAttribute('owner_account_id');
    }

    // proposed_network_function_group_change - computed: true, optional: true, required: false
    private _proposedNetworkFunctionGroupChange = new CcSiteToSiteVpnAttachment.ProposedNetworkFunctionGroupChangePropertyOutputReference(this, "proposed_network_function_group_change");
    public get proposedNetworkFunctionGroupChange() {
        return this._proposedNetworkFunctionGroupChange;
    }
    public putProposedNetworkFunctionGroupChange(value: CcSiteToSiteVpnAttachment.ProposedNetworkFunctionGroupChangeProperty) {
        this._proposedNetworkFunctionGroupChange.internalValue = value;
    }
    public resetProposedNetworkFunctionGroupChange() {
        this._proposedNetworkFunctionGroupChange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get proposedNetworkFunctionGroupChangeInput() {
        return this._proposedNetworkFunctionGroupChange.internalValue;
    }

    // proposed_segment_change - computed: true, optional: true, required: false
    private _proposedSegmentChange = new CcSiteToSiteVpnAttachment.ProposedSegmentChangePropertyOutputReference(this, "proposed_segment_change");
    public get proposedSegmentChange() {
        return this._proposedSegmentChange;
    }
    public putProposedSegmentChange(value: CcSiteToSiteVpnAttachment.ProposedSegmentChangeProperty) {
        this._proposedSegmentChange.internalValue = value;
    }
    public resetProposedSegmentChange() {
        this._proposedSegmentChange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get proposedSegmentChangeInput() {
        return this._proposedSegmentChange.internalValue;
    }

    // resource_arn - computed: true, optional: false, required: false
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }

    // routing_policy_label - computed: true, optional: true, required: false
    private _routingPolicyLabel?: string; 
    public get routingPolicyLabel() {
        return this.getStringAttribute('routing_policy_label');
    }
    public set routingPolicyLabel(value: string) {
        this._routingPolicyLabel = value;
    }
    public resetRoutingPolicyLabel() {
        this._routingPolicyLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingPolicyLabelInput() {
        return this._routingPolicyLabel;
    }

    // segment_name - computed: true, optional: false, required: false
    public get segmentName() {
        return this.getStringAttribute('segment_name');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSiteToSiteVpnAttachment.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSiteToSiteVpnAttachment.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // vpn_connection_arn - computed: false, optional: false, required: true
    private _vpnConnectionArn?: string; 
    public get vpnConnectionArn() {
        return this.getStringAttribute('vpn_connection_arn');
    }
    public set vpnConnectionArn(value: string) {
        this._vpnConnectionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnConnectionArnInput() {
        return this._vpnConnectionArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            core_network_id: cdktn.stringToTerraform(this._coreNetworkId),
            network_function_group_name: cdktn.stringToTerraform(this._networkFunctionGroupName),
            proposed_network_function_group_change: ccSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangePropertyToTerraform(this._proposedNetworkFunctionGroupChange.internalValue),
            proposed_segment_change: ccSiteToSiteVpnAttachmentProposedSegmentChangePropertyToTerraform(this._proposedSegmentChange.internalValue),
            routing_policy_label: cdktn.stringToTerraform(this._routingPolicyLabel),
            tags: cdktn.listMapper(ccSiteToSiteVpnAttachmentTagsPropertyToTerraform, false)(this._tags.internalValue),
            vpn_connection_arn: cdktn.stringToTerraform(this._vpnConnectionArn),
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
            network_function_group_name: {
                value: cdktn.stringToHclTerraform(this._networkFunctionGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            proposed_network_function_group_change: {
                value: ccSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangePropertyToHclTerraform(this._proposedNetworkFunctionGroupChange.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSiteToSiteVpnAttachment.ProposedNetworkFunctionGroupChangeProperty",
            },
            proposed_segment_change: {
                value: ccSiteToSiteVpnAttachmentProposedSegmentChangePropertyToHclTerraform(this._proposedSegmentChange.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSiteToSiteVpnAttachment.ProposedSegmentChangeProperty",
            },
            routing_policy_label: {
                value: cdktn.stringToHclTerraform(this._routingPolicyLabel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSiteToSiteVpnAttachmentTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSiteToSiteVpnAttachment.TagsPropertyList",
            },
            vpn_connection_arn: {
                value: cdktn.stringToHclTerraform(this._vpnConnectionArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSiteToSiteVpnAttachmentTagPropertyToTerraform(struct?: CcSiteToSiteVpnAttachment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSiteToSiteVpnAttachmentTagPropertyToHclTerraform(struct?: CcSiteToSiteVpnAttachment.TagProperty | cdktn.IResolvable): any {
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


export function ccSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangePropertyToTerraform(struct?: CcSiteToSiteVpnAttachment.ProposedNetworkFunctionGroupChangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attachment_policy_rule_number: cdktn.numberToTerraform(struct!.attachmentPolicyRuleNumber),
        network_function_group_name: cdktn.stringToTerraform(struct!.networkFunctionGroupName),
        tags: cdktn.listMapper(ccSiteToSiteVpnAttachmentTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangePropertyToHclTerraform(struct?: CcSiteToSiteVpnAttachment.ProposedNetworkFunctionGroupChangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attachment_policy_rule_number: {
            value: cdktn.numberToHclTerraform(struct!.attachmentPolicyRuleNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        network_function_group_name: {
            value: cdktn.stringToHclTerraform(struct!.networkFunctionGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccSiteToSiteVpnAttachmentTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "set",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSiteToSiteVpnAttachmentProposedSegmentChangeTagsPropertyToTerraform(struct?: CcSiteToSiteVpnAttachment.ProposedSegmentChangeTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSiteToSiteVpnAttachmentProposedSegmentChangeTagsPropertyToHclTerraform(struct?: CcSiteToSiteVpnAttachment.ProposedSegmentChangeTagsProperty | cdktn.IResolvable): any {
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


export function ccSiteToSiteVpnAttachmentProposedSegmentChangePropertyToTerraform(struct?: CcSiteToSiteVpnAttachment.ProposedSegmentChangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attachment_policy_rule_number: cdktn.numberToTerraform(struct!.attachmentPolicyRuleNumber),
        segment_name: cdktn.stringToTerraform(struct!.segmentName),
        tags: cdktn.listMapper(ccSiteToSiteVpnAttachmentProposedSegmentChangeTagsPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccSiteToSiteVpnAttachmentProposedSegmentChangePropertyToHclTerraform(struct?: CcSiteToSiteVpnAttachment.ProposedSegmentChangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attachment_policy_rule_number: {
            value: cdktn.numberToHclTerraform(struct!.attachmentPolicyRuleNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        segment_name: {
            value: cdktn.stringToHclTerraform(struct!.segmentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccSiteToSiteVpnAttachmentProposedSegmentChangeTagsPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "set",
            storageClassType: "ProposedSegmentChangeTagsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSiteToSiteVpnAttachmentTagsPropertyToTerraform(struct?: CcSiteToSiteVpnAttachment.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSiteToSiteVpnAttachmentTagsPropertyToHclTerraform(struct?: CcSiteToSiteVpnAttachment.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcSiteToSiteVpnAttachment {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#key CcSiteToSiteVpnAttachment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#value CcSiteToSiteVpnAttachment#value}
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
export interface ProposedNetworkFunctionGroupChangeProperty {
    /**
    * The rule number in the policy document that applies to this change.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#attachment_policy_rule_number CcSiteToSiteVpnAttachment#attachment_policy_rule_number}
    */
    readonly attachmentPolicyRuleNumber?: number;
    /**
    * The name of the network function group to change.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#network_function_group_name CcSiteToSiteVpnAttachment#network_function_group_name}
    */
    readonly networkFunctionGroupName?: string;
    /**
    * The key-value tags that changed for the network function group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#tags CcSiteToSiteVpnAttachment#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
}
export class ProposedNetworkFunctionGroupChangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProposedNetworkFunctionGroupChangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attachmentPolicyRuleNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.attachmentPolicyRuleNumber = this._attachmentPolicyRuleNumber;
        }
        if (this._networkFunctionGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkFunctionGroupName = this._networkFunctionGroupName;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProposedNetworkFunctionGroupChangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attachmentPolicyRuleNumber = undefined;
            this._networkFunctionGroupName = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attachmentPolicyRuleNumber = value.attachmentPolicyRuleNumber;
            this._networkFunctionGroupName = value.networkFunctionGroupName;
            this._tags.internalValue = value.tags;
        }
    }

    // attachment_policy_rule_number - computed: true, optional: true, required: false
    private _attachmentPolicyRuleNumber?: number; 
    public get attachmentPolicyRuleNumber() {
        return this.getNumberAttribute('attachment_policy_rule_number');
    }
    public set attachmentPolicyRuleNumber(value: number) {
        this._attachmentPolicyRuleNumber = value;
    }
    public resetAttachmentPolicyRuleNumber() {
        this._attachmentPolicyRuleNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentPolicyRuleNumberInput() {
        return this._attachmentPolicyRuleNumber;
    }

    // network_function_group_name - computed: true, optional: true, required: false
    private _networkFunctionGroupName?: string; 
    public get networkFunctionGroupName() {
        return this.getStringAttribute('network_function_group_name');
    }
    public set networkFunctionGroupName(value: string) {
        this._networkFunctionGroupName = value;
    }
    public resetNetworkFunctionGroupName() {
        this._networkFunctionGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkFunctionGroupNameInput() {
        return this._networkFunctionGroupName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}
export interface ProposedSegmentChangeTagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#key CcSiteToSiteVpnAttachment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#value CcSiteToSiteVpnAttachment#value}
    */
    readonly value?: string;
}
export class ProposedSegmentChangeTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProposedSegmentChangeTagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ProposedSegmentChangeTagsProperty | cdktn.IResolvable | undefined) {
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

export class ProposedSegmentChangeTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : ProposedSegmentChangeTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): ProposedSegmentChangeTagsPropertyOutputReference {
        return new ProposedSegmentChangeTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProposedSegmentChangeProperty {
    /**
    * The rule number in the policy document that applies to this change.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#attachment_policy_rule_number CcSiteToSiteVpnAttachment#attachment_policy_rule_number}
    */
    readonly attachmentPolicyRuleNumber?: number;
    /**
    * The name of the segment to change.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#segment_name CcSiteToSiteVpnAttachment#segment_name}
    */
    readonly segmentName?: string;
    /**
    * The key-value tags that changed for the segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#tags CcSiteToSiteVpnAttachment#tags}
    */
    readonly tags?: ProposedSegmentChangeTagsProperty[] | cdktn.IResolvable;
}
export class ProposedSegmentChangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProposedSegmentChangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attachmentPolicyRuleNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.attachmentPolicyRuleNumber = this._attachmentPolicyRuleNumber;
        }
        if (this._segmentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentName = this._segmentName;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProposedSegmentChangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attachmentPolicyRuleNumber = undefined;
            this._segmentName = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attachmentPolicyRuleNumber = value.attachmentPolicyRuleNumber;
            this._segmentName = value.segmentName;
            this._tags.internalValue = value.tags;
        }
    }

    // attachment_policy_rule_number - computed: true, optional: true, required: false
    private _attachmentPolicyRuleNumber?: number; 
    public get attachmentPolicyRuleNumber() {
        return this.getNumberAttribute('attachment_policy_rule_number');
    }
    public set attachmentPolicyRuleNumber(value: number) {
        this._attachmentPolicyRuleNumber = value;
    }
    public resetAttachmentPolicyRuleNumber() {
        this._attachmentPolicyRuleNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentPolicyRuleNumberInput() {
        return this._attachmentPolicyRuleNumber;
    }

    // segment_name - computed: true, optional: true, required: false
    private _segmentName?: string; 
    public get segmentName() {
        return this.getStringAttribute('segment_name');
    }
    public set segmentName(value: string) {
        this._segmentName = value;
    }
    public resetSegmentName() {
        this._segmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentNameInput() {
        return this._segmentName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new ProposedSegmentChangeTagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: ProposedSegmentChangeTagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#key CcSiteToSiteVpnAttachment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_site_to_site_vpn_attachment#value CcSiteToSiteVpnAttachment#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
