// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVpcAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of a core network for the VPC attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#core_network_id CcVpcAttachment#core_network_id}
    */
    readonly coreNetworkId: string;
    /**
    * Vpc options of the attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#options CcVpcAttachment#options}
    */
    readonly options?: CcVpcAttachment.VpcOptionsProperty;
    /**
    * The attachment to move from one network function group to another.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#proposed_network_function_group_change CcVpcAttachment#proposed_network_function_group_change}
    */
    readonly proposedNetworkFunctionGroupChange?: CcVpcAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
    * The attachment to move from one segment to another.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#proposed_segment_change CcVpcAttachment#proposed_segment_change}
    */
    readonly proposedSegmentChange?: CcVpcAttachment.ProposedSegmentChangeProperty;
    /**
    * Routing policy label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#routing_policy_label CcVpcAttachment#routing_policy_label}
    */
    readonly routingPolicyLabel?: string;
    /**
    * Subnet Arn list
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#subnet_arns CcVpcAttachment#subnet_arns}
    */
    readonly subnetArns: string[];
    /**
    * Tags for the attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#tags CcVpcAttachment#tags}
    */
    readonly tags?: CcVpcAttachment.TagsProperty[] | cdktn.IResolvable;
    /**
    * The ARN of the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#vpc_arn CcVpcAttachment#vpc_arn}
    */
    readonly vpcArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment awscc_networkmanager_vpc_attachment}
*/
export class CcVpcAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkmanager_vpc_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVpcAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVpcAttachment to import
    * @param importFromId The id of the existing CcVpcAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVpcAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_vpc_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment awscc_networkmanager_vpc_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVpcAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcVpcAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkmanager_vpc_attachment',
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
        this._coreNetworkId = config.coreNetworkId;
        this._options.internalValue = config.options;
        this._proposedNetworkFunctionGroupChange.internalValue = config.proposedNetworkFunctionGroupChange;
        this._proposedSegmentChange.internalValue = config.proposedSegmentChange;
        this._routingPolicyLabel = config.routingPolicyLabel;
        this._subnetArns = config.subnetArns;
        this._tags.internalValue = config.tags;
        this._vpcArn = config.vpcArn;
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

    // network_function_group_name - computed: true, optional: false, required: false
    public get networkFunctionGroupName() {
        return this.getStringAttribute('network_function_group_name');
    }

    // options - computed: true, optional: true, required: false
    private _options = new CcVpcAttachment.VpcOptionsPropertyOutputReference(this, "options");
    public get options() {
        return this._options;
    }
    public putOptions(value: CcVpcAttachment.VpcOptionsProperty) {
        this._options.internalValue = value;
    }
    public resetOptions() {
        this._options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options.internalValue;
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
        return this.getStringAttribute('owner_account_id');
    }

    // proposed_network_function_group_change - computed: true, optional: true, required: false
    private _proposedNetworkFunctionGroupChange = new CcVpcAttachment.ProposedNetworkFunctionGroupChangePropertyOutputReference(this, "proposed_network_function_group_change");
    public get proposedNetworkFunctionGroupChange() {
        return this._proposedNetworkFunctionGroupChange;
    }
    public putProposedNetworkFunctionGroupChange(value: CcVpcAttachment.ProposedNetworkFunctionGroupChangeProperty) {
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
    private _proposedSegmentChange = new CcVpcAttachment.ProposedSegmentChangePropertyOutputReference(this, "proposed_segment_change");
    public get proposedSegmentChange() {
        return this._proposedSegmentChange;
    }
    public putProposedSegmentChange(value: CcVpcAttachment.ProposedSegmentChangeProperty) {
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

    // subnet_arns - computed: false, optional: false, required: true
    private _subnetArns?: string[]; 
    public get subnetArns() {
        return this.getListAttribute('subnet_arns');
    }
    public set subnetArns(value: string[]) {
        this._subnetArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetArnsInput() {
        return this._subnetArns;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVpcAttachment.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVpcAttachment.TagsProperty[] | cdktn.IResolvable) {
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

    // vpc_arn - computed: false, optional: false, required: true
    private _vpcArn?: string; 
    public get vpcArn() {
        return this.getStringAttribute('vpc_arn');
    }
    public set vpcArn(value: string) {
        this._vpcArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcArnInput() {
        return this._vpcArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            core_network_id: cdktn.stringToTerraform(this._coreNetworkId),
            options: ccVpcAttachmentVpcOptionsPropertyToTerraform(this._options.internalValue),
            proposed_network_function_group_change: ccVpcAttachmentProposedNetworkFunctionGroupChangePropertyToTerraform(this._proposedNetworkFunctionGroupChange.internalValue),
            proposed_segment_change: ccVpcAttachmentProposedSegmentChangePropertyToTerraform(this._proposedSegmentChange.internalValue),
            routing_policy_label: cdktn.stringToTerraform(this._routingPolicyLabel),
            subnet_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetArns),
            tags: cdktn.listMapper(ccVpcAttachmentTagsPropertyToTerraform, false)(this._tags.internalValue),
            vpc_arn: cdktn.stringToTerraform(this._vpcArn),
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
            options: {
                value: ccVpcAttachmentVpcOptionsPropertyToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVpcAttachment.VpcOptionsProperty",
            },
            proposed_network_function_group_change: {
                value: ccVpcAttachmentProposedNetworkFunctionGroupChangePropertyToHclTerraform(this._proposedNetworkFunctionGroupChange.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVpcAttachment.ProposedNetworkFunctionGroupChangeProperty",
            },
            proposed_segment_change: {
                value: ccVpcAttachmentProposedSegmentChangePropertyToHclTerraform(this._proposedSegmentChange.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVpcAttachment.ProposedSegmentChangeProperty",
            },
            routing_policy_label: {
                value: cdktn.stringToHclTerraform(this._routingPolicyLabel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subnet_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVpcAttachmentTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcVpcAttachment.TagsPropertyList",
            },
            vpc_arn: {
                value: cdktn.stringToHclTerraform(this._vpcArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVpcAttachmentVpcOptionsPropertyToTerraform(struct?: CcVpcAttachment.VpcOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        appliance_mode_support: cdktn.booleanToTerraform(struct!.applianceModeSupport),
        dns_support: cdktn.booleanToTerraform(struct!.dnsSupport),
        ipv_6_support: cdktn.booleanToTerraform(struct!.ipv6Support),
        security_group_referencing_support: cdktn.booleanToTerraform(struct!.securityGroupReferencingSupport),
    }
}


export function ccVpcAttachmentVpcOptionsPropertyToHclTerraform(struct?: CcVpcAttachment.VpcOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        appliance_mode_support: {
            value: cdktn.booleanToHclTerraform(struct!.applianceModeSupport),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        dns_support: {
            value: cdktn.booleanToHclTerraform(struct!.dnsSupport),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ipv_6_support: {
            value: cdktn.booleanToHclTerraform(struct!.ipv6Support),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        security_group_referencing_support: {
            value: cdktn.booleanToHclTerraform(struct!.securityGroupReferencingSupport),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVpcAttachmentTagPropertyToTerraform(struct?: CcVpcAttachment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVpcAttachmentTagPropertyToHclTerraform(struct?: CcVpcAttachment.TagProperty | cdktn.IResolvable): any {
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


export function ccVpcAttachmentProposedNetworkFunctionGroupChangePropertyToTerraform(struct?: CcVpcAttachment.ProposedNetworkFunctionGroupChangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attachment_policy_rule_number: cdktn.numberToTerraform(struct!.attachmentPolicyRuleNumber),
        network_function_group_name: cdktn.stringToTerraform(struct!.networkFunctionGroupName),
        tags: cdktn.listMapper(ccVpcAttachmentTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccVpcAttachmentProposedNetworkFunctionGroupChangePropertyToHclTerraform(struct?: CcVpcAttachment.ProposedNetworkFunctionGroupChangeProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccVpcAttachmentTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "set",
            storageClassType: "TagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVpcAttachmentProposedSegmentChangeTagsPropertyToTerraform(struct?: CcVpcAttachment.ProposedSegmentChangeTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVpcAttachmentProposedSegmentChangeTagsPropertyToHclTerraform(struct?: CcVpcAttachment.ProposedSegmentChangeTagsProperty | cdktn.IResolvable): any {
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


export function ccVpcAttachmentProposedSegmentChangePropertyToTerraform(struct?: CcVpcAttachment.ProposedSegmentChangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attachment_policy_rule_number: cdktn.numberToTerraform(struct!.attachmentPolicyRuleNumber),
        segment_name: cdktn.stringToTerraform(struct!.segmentName),
        tags: cdktn.listMapper(ccVpcAttachmentProposedSegmentChangeTagsPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccVpcAttachmentProposedSegmentChangePropertyToHclTerraform(struct?: CcVpcAttachment.ProposedSegmentChangeProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccVpcAttachmentProposedSegmentChangeTagsPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "set",
            storageClassType: "ProposedSegmentChangeTagsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVpcAttachmentTagsPropertyToTerraform(struct?: CcVpcAttachment.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVpcAttachmentTagsPropertyToHclTerraform(struct?: CcVpcAttachment.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcVpcAttachment {
export interface VpcOptionsProperty {
    /**
    * Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true | false
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#appliance_mode_support CcVpcAttachment#appliance_mode_support}
    */
    readonly applianceModeSupport?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether to enable private DNS Support for Vpc Attachment. Valid Values: true | false
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#dns_support CcVpcAttachment#dns_support}
    */
    readonly dnsSupport?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#ipv_6_support CcVpcAttachment#ipv_6_support}
    */
    readonly ipv6Support?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether to enable Security Group Referencing Support for Vpc Attachment. Valid Values: true | false
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#security_group_referencing_support CcVpcAttachment#security_group_referencing_support}
    */
    readonly securityGroupReferencingSupport?: boolean | cdktn.IResolvable;
}
export class VpcOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applianceModeSupport !== undefined) {
            hasAnyValues = true;
            internalValueResult.applianceModeSupport = this._applianceModeSupport;
        }
        if (this._dnsSupport !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsSupport = this._dnsSupport;
        }
        if (this._ipv6Support !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Support = this._ipv6Support;
        }
        if (this._securityGroupReferencingSupport !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupReferencingSupport = this._securityGroupReferencingSupport;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applianceModeSupport = undefined;
            this._dnsSupport = undefined;
            this._ipv6Support = undefined;
            this._securityGroupReferencingSupport = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applianceModeSupport = value.applianceModeSupport;
            this._dnsSupport = value.dnsSupport;
            this._ipv6Support = value.ipv6Support;
            this._securityGroupReferencingSupport = value.securityGroupReferencingSupport;
        }
    }

    // appliance_mode_support - computed: true, optional: true, required: false
    private _applianceModeSupport?: boolean | cdktn.IResolvable; 
    public get applianceModeSupport() {
        return this.getBooleanAttribute('appliance_mode_support');
    }
    public set applianceModeSupport(value: boolean | cdktn.IResolvable) {
        this._applianceModeSupport = value;
    }
    public resetApplianceModeSupport() {
        this._applianceModeSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applianceModeSupportInput() {
        return this._applianceModeSupport;
    }

    // dns_support - computed: true, optional: true, required: false
    private _dnsSupport?: boolean | cdktn.IResolvable; 
    public get dnsSupport() {
        return this.getBooleanAttribute('dns_support');
    }
    public set dnsSupport(value: boolean | cdktn.IResolvable) {
        this._dnsSupport = value;
    }
    public resetDnsSupport() {
        this._dnsSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsSupportInput() {
        return this._dnsSupport;
    }

    // ipv_6_support - computed: true, optional: true, required: false
    private _ipv6Support?: boolean | cdktn.IResolvable; 
    public get ipv6Support() {
        return this.getBooleanAttribute('ipv_6_support');
    }
    public set ipv6Support(value: boolean | cdktn.IResolvable) {
        this._ipv6Support = value;
    }
    public resetIpv6Support() {
        this._ipv6Support = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6SupportInput() {
        return this._ipv6Support;
    }

    // security_group_referencing_support - computed: true, optional: true, required: false
    private _securityGroupReferencingSupport?: boolean | cdktn.IResolvable; 
    public get securityGroupReferencingSupport() {
        return this.getBooleanAttribute('security_group_referencing_support');
    }
    public set securityGroupReferencingSupport(value: boolean | cdktn.IResolvable) {
        this._securityGroupReferencingSupport = value;
    }
    public resetSecurityGroupReferencingSupport() {
        this._securityGroupReferencingSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupReferencingSupportInput() {
        return this._securityGroupReferencingSupport;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#key CcVpcAttachment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#value CcVpcAttachment#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#attachment_policy_rule_number CcVpcAttachment#attachment_policy_rule_number}
    */
    readonly attachmentPolicyRuleNumber?: number;
    /**
    * The name of the network function group to change.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#network_function_group_name CcVpcAttachment#network_function_group_name}
    */
    readonly networkFunctionGroupName?: string;
    /**
    * The key-value tags that changed for the network function group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#tags CcVpcAttachment#tags}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#key CcVpcAttachment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#value CcVpcAttachment#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#attachment_policy_rule_number CcVpcAttachment#attachment_policy_rule_number}
    */
    readonly attachmentPolicyRuleNumber?: number;
    /**
    * The name of the segment to change.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#segment_name CcVpcAttachment#segment_name}
    */
    readonly segmentName?: string;
    /**
    * The key-value tags that changed for the segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#tags CcVpcAttachment#tags}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#key CcVpcAttachment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_vpc_attachment#value CcVpcAttachment#value}
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
