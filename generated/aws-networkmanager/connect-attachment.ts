// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConnectAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * ID of the CoreNetwork that the attachment will be attached to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#core_network_id CcConnectAttachment#core_network_id}
    */
    readonly coreNetworkId: string;
    /**
    * Edge location of the attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#edge_location CcConnectAttachment#edge_location}
    */
    readonly edgeLocation: string;
    /**
    * The complete set of NAT gateway rules on the attachment. Updating this property replaces the entire rule set, and rules left out of the new value are removed. To remove all rules, specify an empty list or remove this property. NAT gateway support can't be enabled without rules, so it is then disabled unless NatGatewaySupport is specified. Only the core network owner can configure NAT gateway rules. The rules aren't returned when the attachment is read, so drift detection doesn't check them. Not available in AWS GovCloud (US).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#nat_gateway_rules CcConnectAttachment#nat_gateway_rules}
    */
    readonly natGatewayRules?: CcConnectAttachment.NatGatewayRulesProperty[] | cdktn.IResolvable;
    /**
    * Whether NAT gateway support is enabled on the attachment. Required when NatGatewayRules lists rules. Set to DISABLE with NatGatewayRules to keep the rules on the attachment without translating traffic, and set it to ENABLE to activate them again. An attachment that is pending acceptance applies this setting once it is accepted. Only the core network owner can configure or read NAT gateway settings. Not available in AWS GovCloud (US).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#nat_gateway_support CcConnectAttachment#nat_gateway_support}
    */
    readonly natGatewaySupport?: string;
    /**
    * The name of the network function group attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#network_function_group_name CcConnectAttachment#network_function_group_name}
    */
    readonly networkFunctionGroupName?: string;
    /**
    * Protocol options for connect attachment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#options CcConnectAttachment#options}
    */
    readonly options: CcConnectAttachment.ConnectAttachmentOptionsProperty;
    /**
    * Routing policy label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#routing_policy_label CcConnectAttachment#routing_policy_label}
    */
    readonly routingPolicyLabel?: string;
    /**
    * Tags for the attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#tags CcConnectAttachment#tags}
    */
    readonly tags?: CcConnectAttachment.TagsProperty[] | cdktn.IResolvable;
    /**
    * Id of transport attachment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#transport_attachment_id CcConnectAttachment#transport_attachment_id}
    */
    readonly transportAttachmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment awscc_networkmanager_connect_attachment}
*/
export class CcConnectAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkmanager_connect_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConnectAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConnectAttachment to import
    * @param importFromId The id of the existing CcConnectAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConnectAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_connect_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment awscc_networkmanager_connect_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConnectAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcConnectAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkmanager_connect_attachment',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
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
        this._edgeLocation = config.edgeLocation;
        this._natGatewayRules.internalValue = config.natGatewayRules;
        this._natGatewaySupport = config.natGatewaySupport;
        this._networkFunctionGroupName = config.networkFunctionGroupName;
        this._options.internalValue = config.options;
        this._routingPolicyLabel = config.routingPolicyLabel;
        this._tags.internalValue = config.tags;
        this._transportAttachmentId = config.transportAttachmentId;
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

    // edge_location - computed: false, optional: false, required: true
    private _edgeLocation?: string; 
    public get edgeLocation() {
        return this.getStringAttribute('edge_location');
    }
    public set edgeLocation(value: string) {
        this._edgeLocation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get edgeLocationInput() {
        return this._edgeLocation;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modification_errors - computed: true, optional: false, required: false
    public get lastModificationErrors() {
        return this.getListAttribute('last_modification_errors');
    }

    // nat_gateway_rules - computed: true, optional: true, required: false
    private _natGatewayRules = new CcConnectAttachment.NatGatewayRulesPropertyList(this, "nat_gateway_rules", true);
    public get natGatewayRules() {
        return this._natGatewayRules;
    }
    public putNatGatewayRules(value: CcConnectAttachment.NatGatewayRulesProperty[] | cdktn.IResolvable) {
        this._natGatewayRules.internalValue = value;
    }
    public resetNatGatewayRules() {
        this._natGatewayRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get natGatewayRulesInput() {
        return this._natGatewayRules.internalValue;
    }

    // nat_gateway_support - computed: true, optional: true, required: false
    private _natGatewaySupport?: string; 
    public get natGatewaySupport() {
        return this.getStringAttribute('nat_gateway_support');
    }
    public set natGatewaySupport(value: string) {
        this._natGatewaySupport = value;
    }
    public resetNatGatewaySupport() {
        this._natGatewaySupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get natGatewaySupportInput() {
        return this._natGatewaySupport;
    }

    // nat_system_route_support - computed: true, optional: false, required: false
    public get natSystemRouteSupport() {
        return this.getBooleanAttribute('nat_system_route_support');
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

    // options - computed: false, optional: false, required: true
    private _options = new CcConnectAttachment.ConnectAttachmentOptionsPropertyOutputReference(this, "options");
    public get options() {
        return this._options;
    }
    public putOptions(value: CcConnectAttachment.ConnectAttachmentOptionsProperty) {
        this._options.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options.internalValue;
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
        return this.getStringAttribute('owner_account_id');
    }

    // proposed_network_function_group_change - computed: true, optional: false, required: false
    private _proposedNetworkFunctionGroupChange = new CcConnectAttachment.ProposedNetworkFunctionGroupChangePropertyOutputReference(this, "proposed_network_function_group_change");
    public get proposedNetworkFunctionGroupChange() {
        return this._proposedNetworkFunctionGroupChange;
    }

    // proposed_segment_change - computed: true, optional: false, required: false
    private _proposedSegmentChange = new CcConnectAttachment.ProposedSegmentChangePropertyOutputReference(this, "proposed_segment_change");
    public get proposedSegmentChange() {
        return this._proposedSegmentChange;
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
    private _tags = new CcConnectAttachment.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConnectAttachment.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transport_attachment_id - computed: false, optional: false, required: true
    private _transportAttachmentId?: string; 
    public get transportAttachmentId() {
        return this.getStringAttribute('transport_attachment_id');
    }
    public set transportAttachmentId(value: string) {
        this._transportAttachmentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transportAttachmentIdInput() {
        return this._transportAttachmentId;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            core_network_id: cdktn.stringToTerraform(this._coreNetworkId),
            edge_location: cdktn.stringToTerraform(this._edgeLocation),
            nat_gateway_rules: cdktn.listMapper(ccConnectAttachmentNatGatewayRulesPropertyToTerraform, false)(this._natGatewayRules.internalValue),
            nat_gateway_support: cdktn.stringToTerraform(this._natGatewaySupport),
            network_function_group_name: cdktn.stringToTerraform(this._networkFunctionGroupName),
            options: ccConnectAttachmentConnectAttachmentOptionsPropertyToTerraform(this._options.internalValue),
            routing_policy_label: cdktn.stringToTerraform(this._routingPolicyLabel),
            tags: cdktn.listMapper(ccConnectAttachmentTagsPropertyToTerraform, false)(this._tags.internalValue),
            transport_attachment_id: cdktn.stringToTerraform(this._transportAttachmentId),
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
            edge_location: {
                value: cdktn.stringToHclTerraform(this._edgeLocation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            nat_gateway_rules: {
                value: cdktn.listMapperHcl(ccConnectAttachmentNatGatewayRulesPropertyToHclTerraform, false)(this._natGatewayRules.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcConnectAttachment.NatGatewayRulesPropertyList",
            },
            nat_gateway_support: {
                value: cdktn.stringToHclTerraform(this._natGatewaySupport),
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
            options: {
                value: ccConnectAttachmentConnectAttachmentOptionsPropertyToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConnectAttachment.ConnectAttachmentOptionsProperty",
            },
            routing_policy_label: {
                value: cdktn.stringToHclTerraform(this._routingPolicyLabel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConnectAttachmentTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcConnectAttachment.TagsPropertyList",
            },
            transport_attachment_id: {
                value: cdktn.stringToHclTerraform(this._transportAttachmentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConnectAttachmentNatGatewayRulesPropertyToTerraform(struct?: CcConnectAttachment.NatGatewayRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        match_source_cidr: cdktn.stringToTerraform(struct!.matchSourceCidr),
        nat_cidr: cdktn.stringToTerraform(struct!.natCidr),
        rule_number: cdktn.numberToTerraform(struct!.ruleNumber),
    }
}


export function ccConnectAttachmentNatGatewayRulesPropertyToHclTerraform(struct?: CcConnectAttachment.NatGatewayRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        match_source_cidr: {
            value: cdktn.stringToHclTerraform(struct!.matchSourceCidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nat_cidr: {
            value: cdktn.stringToHclTerraform(struct!.natCidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule_number: {
            value: cdktn.numberToHclTerraform(struct!.ruleNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectAttachmentConnectAttachmentOptionsPropertyToTerraform(struct?: CcConnectAttachment.ConnectAttachmentOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        protocol: cdktn.stringToTerraform(struct!.protocol),
    }
}


export function ccConnectAttachmentConnectAttachmentOptionsPropertyToHclTerraform(struct?: CcConnectAttachment.ConnectAttachmentOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConnectAttachmentTagPropertyToTerraform(struct?: CcConnectAttachment.TagProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConnectAttachmentTagPropertyToHclTerraform(struct?: CcConnectAttachment.TagProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConnectAttachmentProposedNetworkFunctionGroupChangePropertyToTerraform(struct?: CcConnectAttachment.ProposedNetworkFunctionGroupChangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConnectAttachmentProposedNetworkFunctionGroupChangePropertyToHclTerraform(struct?: CcConnectAttachment.ProposedNetworkFunctionGroupChangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConnectAttachmentProposedSegmentChangeTagsPropertyToTerraform(struct?: CcConnectAttachment.ProposedSegmentChangeTagsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConnectAttachmentProposedSegmentChangeTagsPropertyToHclTerraform(struct?: CcConnectAttachment.ProposedSegmentChangeTagsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConnectAttachmentProposedSegmentChangePropertyToTerraform(struct?: CcConnectAttachment.ProposedSegmentChangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConnectAttachmentProposedSegmentChangePropertyToHclTerraform(struct?: CcConnectAttachment.ProposedSegmentChangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConnectAttachmentTagsPropertyToTerraform(struct?: CcConnectAttachment.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConnectAttachmentTagsPropertyToHclTerraform(struct?: CcConnectAttachment.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcConnectAttachment {
export interface NatGatewayRulesProperty {
    /**
    * The IPv4 CIDR that source traffic is matched against for translation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#match_source_cidr CcConnectAttachment#match_source_cidr}
    */
    readonly matchSourceCidr?: string;
    /**
    * The IPv4 CIDR that matched source traffic is translated into. Must have the same prefix length as MatchSourceCidr.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#nat_cidr CcConnectAttachment#nat_cidr}
    */
    readonly natCidr?: string;
    /**
    * The rule number that uniquely identifies the NAT rule on the attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#rule_number CcConnectAttachment#rule_number}
    */
    readonly ruleNumber?: number;
}
export class NatGatewayRulesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NatGatewayRulesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._matchSourceCidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchSourceCidr = this._matchSourceCidr;
        }
        if (this._natCidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.natCidr = this._natCidr;
        }
        if (this._ruleNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleNumber = this._ruleNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NatGatewayRulesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._matchSourceCidr = undefined;
            this._natCidr = undefined;
            this._ruleNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._matchSourceCidr = value.matchSourceCidr;
            this._natCidr = value.natCidr;
            this._ruleNumber = value.ruleNumber;
        }
    }

    // match_source_cidr - computed: true, optional: true, required: false
    private _matchSourceCidr?: string; 
    public get matchSourceCidr() {
        return this.getStringAttribute('match_source_cidr');
    }
    public set matchSourceCidr(value: string) {
        this._matchSourceCidr = value;
    }
    public resetMatchSourceCidr() {
        this._matchSourceCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchSourceCidrInput() {
        return this._matchSourceCidr;
    }

    // nat_cidr - computed: true, optional: true, required: false
    private _natCidr?: string; 
    public get natCidr() {
        return this.getStringAttribute('nat_cidr');
    }
    public set natCidr(value: string) {
        this._natCidr = value;
    }
    public resetNatCidr() {
        this._natCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get natCidrInput() {
        return this._natCidr;
    }

    // rule_number - computed: true, optional: true, required: false
    private _ruleNumber?: number; 
    public get ruleNumber() {
        return this.getNumberAttribute('rule_number');
    }
    public set ruleNumber(value: number) {
        this._ruleNumber = value;
    }
    public resetRuleNumber() {
        this._ruleNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNumberInput() {
        return this._ruleNumber;
    }
}

export class NatGatewayRulesPropertyList extends cdktn.ComplexList {
    public internalValue? : NatGatewayRulesProperty[] | cdktn.IResolvable

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
    public get(index: number): NatGatewayRulesPropertyOutputReference {
        return new NatGatewayRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConnectAttachmentOptionsProperty {
    /**
    * Tunnel protocol for connect attachment
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#protocol CcConnectAttachment#protocol}
    */
    readonly protocol?: string;
}
export class ConnectAttachmentOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConnectAttachmentOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConnectAttachmentOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._protocol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._protocol = value.protocol;
        }
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }
}
export interface TagProperty {
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // key - computed: true, optional: false, required: false
    public get key() {
        return this.getStringAttribute('key');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
        return this.getStringAttribute('value');
    }
}

export class TagPropertyList extends cdktn.ComplexList {

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
}
export class ProposedNetworkFunctionGroupChangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProposedNetworkFunctionGroupChangeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProposedNetworkFunctionGroupChangeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // attachment_policy_rule_number - computed: true, optional: false, required: false
    public get attachmentPolicyRuleNumber() {
        return this.getNumberAttribute('attachment_policy_rule_number');
    }

    // network_function_group_name - computed: true, optional: false, required: false
    public get networkFunctionGroupName() {
        return this.getStringAttribute('network_function_group_name');
    }

    // tags - computed: true, optional: false, required: false
    private _tags = new TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
}
export interface ProposedSegmentChangeTagsProperty {
}
export class ProposedSegmentChangeTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProposedSegmentChangeTagsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProposedSegmentChangeTagsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // key - computed: true, optional: false, required: false
    public get key() {
        return this.getStringAttribute('key');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
        return this.getStringAttribute('value');
    }
}

export class ProposedSegmentChangeTagsPropertyList extends cdktn.ComplexList {

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
}
export class ProposedSegmentChangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProposedSegmentChangeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProposedSegmentChangeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // attachment_policy_rule_number - computed: true, optional: false, required: false
    public get attachmentPolicyRuleNumber() {
        return this.getNumberAttribute('attachment_policy_rule_number');
    }

    // segment_name - computed: true, optional: false, required: false
    public get segmentName() {
        return this.getStringAttribute('segment_name');
    }

    // tags - computed: true, optional: false, required: false
    private _tags = new ProposedSegmentChangeTagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#key CcConnectAttachment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmanager_connect_attachment#value CcConnectAttachment#value}
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
