// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCampaignProps extends cdktn.TerraformMetaArguments {
    /**
    * The possible types of channel subtype config parameters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#channel_subtype_config CcCampaign#channel_subtype_config}
    */
    readonly channelSubtypeConfig?: CcCampaign.ChannelSubtypeConfigProperty;
    /**
    * Communication limits config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#communication_limits_override CcCampaign#communication_limits_override}
    */
    readonly communicationLimitsOverride?: CcCampaign.CommunicationLimitsConfigProperty;
    /**
    * Campaign communication time config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#communication_time_config CcCampaign#communication_time_config}
    */
    readonly communicationTimeConfig?: CcCampaign.CommunicationTimeConfigProperty;
    /**
    * Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#connect_campaign_flow_arn CcCampaign#connect_campaign_flow_arn}
    */
    readonly connectCampaignFlowArn?: string;
    /**
    * Amazon Connect Instance Id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#connect_instance_id CcCampaign#connect_instance_id}
    */
    readonly connectInstanceId: string;
    /**
    * Entry limits config for a campaign
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#entry_limits_config CcCampaign#entry_limits_config}
    */
    readonly entryLimitsConfig?: CcCampaign.EntryLimitsConfigProperty;
    /**
    * Campaign name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#name CcCampaign#name}
    */
    readonly name: string;
    /**
    * Campaign schedule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#schedule CcCampaign#schedule}
    */
    readonly schedule?: CcCampaign.ScheduleProperty;
    /**
    * The possible source of the campaign
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#source CcCampaign#source}
    */
    readonly source?: CcCampaign.SourceProperty;
    /**
    * One or more tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#tags CcCampaign#tags}
    */
    readonly tags?: CcCampaign.TagProperty[] | cdktn.IResolvable;
    /**
    * Campaign type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#type CcCampaign#type}
    */
    readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign awscc_connectcampaignsv2_campaign}
*/
export class CcCampaign extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connectcampaignsv2_campaign";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCampaign resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCampaign to import
    * @param importFromId The id of the existing CcCampaign that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCampaign to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connectcampaignsv2_campaign", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign awscc_connectcampaignsv2_campaign} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCampaignProps
    */
    public constructor(scope: Construct, id: string, config: CcCampaignProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connectcampaignsv2_campaign',
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
        this._channelSubtypeConfig.internalValue = config.channelSubtypeConfig;
        this._communicationLimitsOverride.internalValue = config.communicationLimitsOverride;
        this._communicationTimeConfig.internalValue = config.communicationTimeConfig;
        this._connectCampaignFlowArn = config.connectCampaignFlowArn;
        this._connectInstanceId = config.connectInstanceId;
        this._entryLimitsConfig.internalValue = config.entryLimitsConfig;
        this._name = config.name;
        this._schedule.internalValue = config.schedule;
        this._source.internalValue = config.source;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // channel_subtype_config - computed: true, optional: true, required: false
    private _channelSubtypeConfig = new CcCampaign.ChannelSubtypeConfigPropertyOutputReference(this, "channel_subtype_config");
    public get channelSubtypeConfig() {
        return this._channelSubtypeConfig;
    }
    public putChannelSubtypeConfig(value: CcCampaign.ChannelSubtypeConfigProperty) {
        this._channelSubtypeConfig.internalValue = value;
    }
    public resetChannelSubtypeConfig() {
        this._channelSubtypeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelSubtypeConfigInput() {
        return this._channelSubtypeConfig.internalValue;
    }

    // communication_limits_override - computed: true, optional: true, required: false
    private _communicationLimitsOverride = new CcCampaign.CommunicationLimitsConfigPropertyOutputReference(this, "communication_limits_override");
    public get communicationLimitsOverride() {
        return this._communicationLimitsOverride;
    }
    public putCommunicationLimitsOverride(value: CcCampaign.CommunicationLimitsConfigProperty) {
        this._communicationLimitsOverride.internalValue = value;
    }
    public resetCommunicationLimitsOverride() {
        this._communicationLimitsOverride.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get communicationLimitsOverrideInput() {
        return this._communicationLimitsOverride.internalValue;
    }

    // communication_time_config - computed: true, optional: true, required: false
    private _communicationTimeConfig = new CcCampaign.CommunicationTimeConfigPropertyOutputReference(this, "communication_time_config");
    public get communicationTimeConfig() {
        return this._communicationTimeConfig;
    }
    public putCommunicationTimeConfig(value: CcCampaign.CommunicationTimeConfigProperty) {
        this._communicationTimeConfig.internalValue = value;
    }
    public resetCommunicationTimeConfig() {
        this._communicationTimeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get communicationTimeConfigInput() {
        return this._communicationTimeConfig.internalValue;
    }

    // connect_campaign_flow_arn - computed: true, optional: true, required: false
    private _connectCampaignFlowArn?: string; 
    public get connectCampaignFlowArn() {
        return this.getStringAttribute('connect_campaign_flow_arn');
    }
    public set connectCampaignFlowArn(value: string) {
        this._connectCampaignFlowArn = value;
    }
    public resetConnectCampaignFlowArn() {
        this._connectCampaignFlowArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectCampaignFlowArnInput() {
        return this._connectCampaignFlowArn;
    }

    // connect_instance_id - computed: false, optional: false, required: true
    private _connectInstanceId?: string; 
    public get connectInstanceId() {
        return this.getStringAttribute('connect_instance_id');
    }
    public set connectInstanceId(value: string) {
        this._connectInstanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectInstanceIdInput() {
        return this._connectInstanceId;
    }

    // entry_limits_config - computed: true, optional: true, required: false
    private _entryLimitsConfig = new CcCampaign.EntryLimitsConfigPropertyOutputReference(this, "entry_limits_config");
    public get entryLimitsConfig() {
        return this._entryLimitsConfig;
    }
    public putEntryLimitsConfig(value: CcCampaign.EntryLimitsConfigProperty) {
        this._entryLimitsConfig.internalValue = value;
    }
    public resetEntryLimitsConfig() {
        this._entryLimitsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entryLimitsConfigInput() {
        return this._entryLimitsConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // schedule - computed: true, optional: true, required: false
    private _schedule = new CcCampaign.SchedulePropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: CcCampaign.ScheduleProperty) {
        this._schedule.internalValue = value;
    }
    public resetSchedule() {
        this._schedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }

    // source - computed: true, optional: true, required: false
    private _source = new CcCampaign.SourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: CcCampaign.SourceProperty) {
        this._source.internalValue = value;
    }
    public resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCampaign.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCampaign.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            channel_subtype_config: ccCampaignChannelSubtypeConfigPropertyToTerraform(this._channelSubtypeConfig.internalValue),
            communication_limits_override: ccCampaignCommunicationLimitsConfigPropertyToTerraform(this._communicationLimitsOverride.internalValue),
            communication_time_config: ccCampaignCommunicationTimeConfigPropertyToTerraform(this._communicationTimeConfig.internalValue),
            connect_campaign_flow_arn: cdktn.stringToTerraform(this._connectCampaignFlowArn),
            connect_instance_id: cdktn.stringToTerraform(this._connectInstanceId),
            entry_limits_config: ccCampaignEntryLimitsConfigPropertyToTerraform(this._entryLimitsConfig.internalValue),
            name: cdktn.stringToTerraform(this._name),
            schedule: ccCampaignSchedulePropertyToTerraform(this._schedule.internalValue),
            source: ccCampaignSourcePropertyToTerraform(this._source.internalValue),
            tags: cdktn.listMapper(ccCampaignTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channel_subtype_config: {
                value: ccCampaignChannelSubtypeConfigPropertyToHclTerraform(this._channelSubtypeConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCampaign.ChannelSubtypeConfigProperty",
            },
            communication_limits_override: {
                value: ccCampaignCommunicationLimitsConfigPropertyToHclTerraform(this._communicationLimitsOverride.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCampaign.CommunicationLimitsConfigProperty",
            },
            communication_time_config: {
                value: ccCampaignCommunicationTimeConfigPropertyToHclTerraform(this._communicationTimeConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCampaign.CommunicationTimeConfigProperty",
            },
            connect_campaign_flow_arn: {
                value: cdktn.stringToHclTerraform(this._connectCampaignFlowArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            connect_instance_id: {
                value: cdktn.stringToHclTerraform(this._connectInstanceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entry_limits_config: {
                value: ccCampaignEntryLimitsConfigPropertyToHclTerraform(this._entryLimitsConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCampaign.EntryLimitsConfigProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule: {
                value: ccCampaignSchedulePropertyToHclTerraform(this._schedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCampaign.ScheduleProperty",
            },
            source: {
                value: ccCampaignSourcePropertyToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCampaign.SourceProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCampaignTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCampaign.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCampaignEmailOutboundConfigPropertyToTerraform(struct?: CcCampaign.EmailOutboundConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connect_source_email_address: cdktn.stringToTerraform(struct!.connectSourceEmailAddress),
        source_email_address_display_name: cdktn.stringToTerraform(struct!.sourceEmailAddressDisplayName),
        wisdom_template_arn: cdktn.stringToTerraform(struct!.wisdomTemplateArn),
    }
}


export function ccCampaignEmailOutboundConfigPropertyToHclTerraform(struct?: CcCampaign.EmailOutboundConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connect_source_email_address: {
            value: cdktn.stringToHclTerraform(struct!.connectSourceEmailAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_email_address_display_name: {
            value: cdktn.stringToHclTerraform(struct!.sourceEmailAddressDisplayName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wisdom_template_arn: {
            value: cdktn.stringToHclTerraform(struct!.wisdomTemplateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignEmailOutboundModePropertyToTerraform(struct?: CcCampaign.EmailOutboundModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agentless_config: cdktn.stringToTerraform(struct!.agentlessConfig),
    }
}


export function ccCampaignEmailOutboundModePropertyToHclTerraform(struct?: CcCampaign.EmailOutboundModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agentless_config: {
            value: cdktn.stringToHclTerraform(struct!.agentlessConfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignEmailChannelSubtypeConfigPropertyToTerraform(struct?: CcCampaign.EmailChannelSubtypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity: cdktn.numberToTerraform(struct!.capacity),
        default_outbound_config: ccCampaignEmailOutboundConfigPropertyToTerraform(struct!.defaultOutboundConfig),
        outbound_mode: ccCampaignEmailOutboundModePropertyToTerraform(struct!.outboundMode),
    }
}


export function ccCampaignEmailChannelSubtypeConfigPropertyToHclTerraform(struct?: CcCampaign.EmailChannelSubtypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity: {
            value: cdktn.numberToHclTerraform(struct!.capacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        default_outbound_config: {
            value: ccCampaignEmailOutboundConfigPropertyToHclTerraform(struct!.defaultOutboundConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "EmailOutboundConfigProperty",
        },
        outbound_mode: {
            value: ccCampaignEmailOutboundModePropertyToHclTerraform(struct!.outboundMode),
            isBlock: true,
            type: "struct",
            storageClassType: "EmailOutboundModeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignSmsOutboundConfigPropertyToTerraform(struct?: CcCampaign.SmsOutboundConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connect_source_phone_number_arn: cdktn.stringToTerraform(struct!.connectSourcePhoneNumberArn),
        wisdom_template_arn: cdktn.stringToTerraform(struct!.wisdomTemplateArn),
    }
}


export function ccCampaignSmsOutboundConfigPropertyToHclTerraform(struct?: CcCampaign.SmsOutboundConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connect_source_phone_number_arn: {
            value: cdktn.stringToHclTerraform(struct!.connectSourcePhoneNumberArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wisdom_template_arn: {
            value: cdktn.stringToHclTerraform(struct!.wisdomTemplateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignSmsOutboundModePropertyToTerraform(struct?: CcCampaign.SmsOutboundModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agentless_config: cdktn.stringToTerraform(struct!.agentlessConfig),
    }
}


export function ccCampaignSmsOutboundModePropertyToHclTerraform(struct?: CcCampaign.SmsOutboundModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agentless_config: {
            value: cdktn.stringToHclTerraform(struct!.agentlessConfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignSmsChannelSubtypeConfigPropertyToTerraform(struct?: CcCampaign.SmsChannelSubtypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity: cdktn.numberToTerraform(struct!.capacity),
        default_outbound_config: ccCampaignSmsOutboundConfigPropertyToTerraform(struct!.defaultOutboundConfig),
        outbound_mode: ccCampaignSmsOutboundModePropertyToTerraform(struct!.outboundMode),
    }
}


export function ccCampaignSmsChannelSubtypeConfigPropertyToHclTerraform(struct?: CcCampaign.SmsChannelSubtypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity: {
            value: cdktn.numberToHclTerraform(struct!.capacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        default_outbound_config: {
            value: ccCampaignSmsOutboundConfigPropertyToHclTerraform(struct!.defaultOutboundConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SmsOutboundConfigProperty",
        },
        outbound_mode: {
            value: ccCampaignSmsOutboundModePropertyToHclTerraform(struct!.outboundMode),
            isBlock: true,
            type: "struct",
            storageClassType: "SmsOutboundModeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignAnswerMachineDetectionConfigPropertyToTerraform(struct?: CcCampaign.AnswerMachineDetectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        await_answer_machine_prompt: cdktn.booleanToTerraform(struct!.awaitAnswerMachinePrompt),
        enable_answer_machine_detection: cdktn.booleanToTerraform(struct!.enableAnswerMachineDetection),
    }
}


export function ccCampaignAnswerMachineDetectionConfigPropertyToHclTerraform(struct?: CcCampaign.AnswerMachineDetectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        await_answer_machine_prompt: {
            value: cdktn.booleanToHclTerraform(struct!.awaitAnswerMachinePrompt),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_answer_machine_detection: {
            value: cdktn.booleanToHclTerraform(struct!.enableAnswerMachineDetection),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignTelephonyOutboundConfigPropertyToTerraform(struct?: CcCampaign.TelephonyOutboundConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        answer_machine_detection_config: ccCampaignAnswerMachineDetectionConfigPropertyToTerraform(struct!.answerMachineDetectionConfig),
        connect_contact_flow_id: cdktn.stringToTerraform(struct!.connectContactFlowId),
        connect_source_phone_number: cdktn.stringToTerraform(struct!.connectSourcePhoneNumber),
        ring_timeout: cdktn.numberToTerraform(struct!.ringTimeout),
    }
}


export function ccCampaignTelephonyOutboundConfigPropertyToHclTerraform(struct?: CcCampaign.TelephonyOutboundConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        answer_machine_detection_config: {
            value: ccCampaignAnswerMachineDetectionConfigPropertyToHclTerraform(struct!.answerMachineDetectionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AnswerMachineDetectionConfigProperty",
        },
        connect_contact_flow_id: {
            value: cdktn.stringToHclTerraform(struct!.connectContactFlowId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connect_source_phone_number: {
            value: cdktn.stringToHclTerraform(struct!.connectSourcePhoneNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ring_timeout: {
            value: cdktn.numberToHclTerraform(struct!.ringTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignPredictiveConfigPropertyToTerraform(struct?: CcCampaign.PredictiveConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bandwidth_allocation: cdktn.numberToTerraform(struct!.bandwidthAllocation),
    }
}


export function ccCampaignPredictiveConfigPropertyToHclTerraform(struct?: CcCampaign.PredictiveConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bandwidth_allocation: {
            value: cdktn.numberToHclTerraform(struct!.bandwidthAllocation),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignTimeoutConfigPropertyToTerraform(struct?: CcCampaign.TimeoutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_in_seconds: cdktn.numberToTerraform(struct!.durationInSeconds),
    }
}


export function ccCampaignTimeoutConfigPropertyToHclTerraform(struct?: CcCampaign.TimeoutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.durationInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignPreviewConfigPropertyToTerraform(struct?: CcCampaign.PreviewConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agent_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.agentActions),
        bandwidth_allocation: cdktn.numberToTerraform(struct!.bandwidthAllocation),
        timeout_config: ccCampaignTimeoutConfigPropertyToTerraform(struct!.timeoutConfig),
    }
}


export function ccCampaignPreviewConfigPropertyToHclTerraform(struct?: CcCampaign.PreviewConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agent_actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.agentActions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        bandwidth_allocation: {
            value: cdktn.numberToHclTerraform(struct!.bandwidthAllocation),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timeout_config: {
            value: ccCampaignTimeoutConfigPropertyToHclTerraform(struct!.timeoutConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TimeoutConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignProgressiveConfigPropertyToTerraform(struct?: CcCampaign.ProgressiveConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bandwidth_allocation: cdktn.numberToTerraform(struct!.bandwidthAllocation),
    }
}


export function ccCampaignProgressiveConfigPropertyToHclTerraform(struct?: CcCampaign.ProgressiveConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bandwidth_allocation: {
            value: cdktn.numberToHclTerraform(struct!.bandwidthAllocation),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignTelephonyOutboundModePropertyToTerraform(struct?: CcCampaign.TelephonyOutboundModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agentless_config: cdktn.stringToTerraform(struct!.agentlessConfig),
        predictive_config: ccCampaignPredictiveConfigPropertyToTerraform(struct!.predictiveConfig),
        preview_config: ccCampaignPreviewConfigPropertyToTerraform(struct!.previewConfig),
        progressive_config: ccCampaignProgressiveConfigPropertyToTerraform(struct!.progressiveConfig),
    }
}


export function ccCampaignTelephonyOutboundModePropertyToHclTerraform(struct?: CcCampaign.TelephonyOutboundModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agentless_config: {
            value: cdktn.stringToHclTerraform(struct!.agentlessConfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        predictive_config: {
            value: ccCampaignPredictiveConfigPropertyToHclTerraform(struct!.predictiveConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PredictiveConfigProperty",
        },
        preview_config: {
            value: ccCampaignPreviewConfigPropertyToHclTerraform(struct!.previewConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "PreviewConfigProperty",
        },
        progressive_config: {
            value: ccCampaignProgressiveConfigPropertyToHclTerraform(struct!.progressiveConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ProgressiveConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignTelephonyChannelSubtypeConfigPropertyToTerraform(struct?: CcCampaign.TelephonyChannelSubtypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity: cdktn.numberToTerraform(struct!.capacity),
        connect_queue_id: cdktn.stringToTerraform(struct!.connectQueueId),
        default_outbound_config: ccCampaignTelephonyOutboundConfigPropertyToTerraform(struct!.defaultOutboundConfig),
        outbound_mode: ccCampaignTelephonyOutboundModePropertyToTerraform(struct!.outboundMode),
    }
}


export function ccCampaignTelephonyChannelSubtypeConfigPropertyToHclTerraform(struct?: CcCampaign.TelephonyChannelSubtypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity: {
            value: cdktn.numberToHclTerraform(struct!.capacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        connect_queue_id: {
            value: cdktn.stringToHclTerraform(struct!.connectQueueId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_outbound_config: {
            value: ccCampaignTelephonyOutboundConfigPropertyToHclTerraform(struct!.defaultOutboundConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TelephonyOutboundConfigProperty",
        },
        outbound_mode: {
            value: ccCampaignTelephonyOutboundModePropertyToHclTerraform(struct!.outboundMode),
            isBlock: true,
            type: "struct",
            storageClassType: "TelephonyOutboundModeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignWhatsAppOutboundConfigPropertyToTerraform(struct?: CcCampaign.WhatsAppOutboundConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connect_source_phone_number_arn: cdktn.stringToTerraform(struct!.connectSourcePhoneNumberArn),
        wisdom_template_arn: cdktn.stringToTerraform(struct!.wisdomTemplateArn),
    }
}


export function ccCampaignWhatsAppOutboundConfigPropertyToHclTerraform(struct?: CcCampaign.WhatsAppOutboundConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connect_source_phone_number_arn: {
            value: cdktn.stringToHclTerraform(struct!.connectSourcePhoneNumberArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wisdom_template_arn: {
            value: cdktn.stringToHclTerraform(struct!.wisdomTemplateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignWhatsAppOutboundModePropertyToTerraform(struct?: CcCampaign.WhatsAppOutboundModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agentless_config: cdktn.stringToTerraform(struct!.agentlessConfig),
    }
}


export function ccCampaignWhatsAppOutboundModePropertyToHclTerraform(struct?: CcCampaign.WhatsAppOutboundModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agentless_config: {
            value: cdktn.stringToHclTerraform(struct!.agentlessConfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignWhatsAppChannelSubtypeConfigPropertyToTerraform(struct?: CcCampaign.WhatsAppChannelSubtypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity: cdktn.numberToTerraform(struct!.capacity),
        default_outbound_config: ccCampaignWhatsAppOutboundConfigPropertyToTerraform(struct!.defaultOutboundConfig),
        outbound_mode: ccCampaignWhatsAppOutboundModePropertyToTerraform(struct!.outboundMode),
    }
}


export function ccCampaignWhatsAppChannelSubtypeConfigPropertyToHclTerraform(struct?: CcCampaign.WhatsAppChannelSubtypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity: {
            value: cdktn.numberToHclTerraform(struct!.capacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        default_outbound_config: {
            value: ccCampaignWhatsAppOutboundConfigPropertyToHclTerraform(struct!.defaultOutboundConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "WhatsAppOutboundConfigProperty",
        },
        outbound_mode: {
            value: ccCampaignWhatsAppOutboundModePropertyToHclTerraform(struct!.outboundMode),
            isBlock: true,
            type: "struct",
            storageClassType: "WhatsAppOutboundModeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignChannelSubtypeConfigPropertyToTerraform(struct?: CcCampaign.ChannelSubtypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email: ccCampaignEmailChannelSubtypeConfigPropertyToTerraform(struct!.email),
        sms: ccCampaignSmsChannelSubtypeConfigPropertyToTerraform(struct!.sms),
        telephony: ccCampaignTelephonyChannelSubtypeConfigPropertyToTerraform(struct!.telephony),
        whats_app: ccCampaignWhatsAppChannelSubtypeConfigPropertyToTerraform(struct!.whatsApp),
    }
}


export function ccCampaignChannelSubtypeConfigPropertyToHclTerraform(struct?: CcCampaign.ChannelSubtypeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email: {
            value: ccCampaignEmailChannelSubtypeConfigPropertyToHclTerraform(struct!.email),
            isBlock: true,
            type: "struct",
            storageClassType: "EmailChannelSubtypeConfigProperty",
        },
        sms: {
            value: ccCampaignSmsChannelSubtypeConfigPropertyToHclTerraform(struct!.sms),
            isBlock: true,
            type: "struct",
            storageClassType: "SmsChannelSubtypeConfigProperty",
        },
        telephony: {
            value: ccCampaignTelephonyChannelSubtypeConfigPropertyToHclTerraform(struct!.telephony),
            isBlock: true,
            type: "struct",
            storageClassType: "TelephonyChannelSubtypeConfigProperty",
        },
        whats_app: {
            value: ccCampaignWhatsAppChannelSubtypeConfigPropertyToHclTerraform(struct!.whatsApp),
            isBlock: true,
            type: "struct",
            storageClassType: "WhatsAppChannelSubtypeConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationLimitPropertyToTerraform(struct?: CcCampaign.CommunicationLimitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        frequency: cdktn.numberToTerraform(struct!.frequency),
        max_count_per_recipient: cdktn.numberToTerraform(struct!.maxCountPerRecipient),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccCampaignCommunicationLimitPropertyToHclTerraform(struct?: CcCampaign.CommunicationLimitProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        frequency: {
            value: cdktn.numberToHclTerraform(struct!.frequency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_count_per_recipient: {
            value: cdktn.numberToHclTerraform(struct!.maxCountPerRecipient),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationLimitsPropertyToTerraform(struct?: CcCampaign.CommunicationLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        communication_limit_list: cdktn.listMapper(ccCampaignCommunicationLimitPropertyToTerraform, false)(struct!.communicationLimitList),
    }
}


export function ccCampaignCommunicationLimitsPropertyToHclTerraform(struct?: CcCampaign.CommunicationLimitsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        communication_limit_list: {
            value: cdktn.listMapperHcl(ccCampaignCommunicationLimitPropertyToHclTerraform, false)(struct!.communicationLimitList),
            isBlock: true,
            type: "list",
            storageClassType: "CommunicationLimitPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationLimitsConfigPropertyToTerraform(struct?: CcCampaign.CommunicationLimitsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        all_channels_subtypes: ccCampaignCommunicationLimitsPropertyToTerraform(struct!.allChannelsSubtypes),
        instance_limits_handling: cdktn.stringToTerraform(struct!.instanceLimitsHandling),
    }
}


export function ccCampaignCommunicationLimitsConfigPropertyToHclTerraform(struct?: CcCampaign.CommunicationLimitsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        all_channels_subtypes: {
            value: ccCampaignCommunicationLimitsPropertyToHclTerraform(struct!.allChannelsSubtypes),
            isBlock: true,
            type: "struct",
            storageClassType: "CommunicationLimitsProperty",
        },
        instance_limits_handling: {
            value: cdktn.stringToHclTerraform(struct!.instanceLimitsHandling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignTimeRangePropertyToTerraform(struct?: CcCampaign.TimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.stringToTerraform(struct!.endTime),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccCampaignTimeRangePropertyToHclTerraform(struct?: CcCampaign.TimeRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.stringToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_time: {
            value: cdktn.stringToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignDailyHourPropertyToTerraform(struct?: CcCampaign.DailyHourProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.listMapper(ccCampaignTimeRangePropertyToTerraform, false)(struct!.value),
    }
}


export function ccCampaignDailyHourPropertyToHclTerraform(struct?: CcCampaign.DailyHourProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccCampaignTimeRangePropertyToHclTerraform, false)(struct!.value),
            isBlock: true,
            type: "list",
            storageClassType: "TimeRangePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignOpenHoursPropertyToTerraform(struct?: CcCampaign.OpenHoursProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        daily_hours: cdktn.listMapper(ccCampaignDailyHourPropertyToTerraform, false)(struct!.dailyHours),
    }
}


export function ccCampaignOpenHoursPropertyToHclTerraform(struct?: CcCampaign.OpenHoursProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        daily_hours: {
            value: cdktn.listMapperHcl(ccCampaignDailyHourPropertyToHclTerraform, false)(struct!.dailyHours),
            isBlock: true,
            type: "set",
            storageClassType: "DailyHourPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignRestrictedPeriodPropertyToTerraform(struct?: CcCampaign.RestrictedPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_date: cdktn.stringToTerraform(struct!.endDate),
        name: cdktn.stringToTerraform(struct!.name),
        start_date: cdktn.stringToTerraform(struct!.startDate),
    }
}


export function ccCampaignRestrictedPeriodPropertyToHclTerraform(struct?: CcCampaign.RestrictedPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_date: {
            value: cdktn.stringToHclTerraform(struct!.endDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_date: {
            value: cdktn.stringToHclTerraform(struct!.startDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignRestrictedPeriodsPropertyToTerraform(struct?: CcCampaign.RestrictedPeriodsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        restricted_period_list: cdktn.listMapper(ccCampaignRestrictedPeriodPropertyToTerraform, false)(struct!.restrictedPeriodList),
    }
}


export function ccCampaignRestrictedPeriodsPropertyToHclTerraform(struct?: CcCampaign.RestrictedPeriodsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        restricted_period_list: {
            value: cdktn.listMapperHcl(ccCampaignRestrictedPeriodPropertyToHclTerraform, false)(struct!.restrictedPeriodList),
            isBlock: true,
            type: "list",
            storageClassType: "RestrictedPeriodPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignTimeWindowPropertyToTerraform(struct?: CcCampaign.TimeWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        open_hours: ccCampaignOpenHoursPropertyToTerraform(struct!.openHours),
        restricted_periods: ccCampaignRestrictedPeriodsPropertyToTerraform(struct!.restrictedPeriods),
    }
}


export function ccCampaignTimeWindowPropertyToHclTerraform(struct?: CcCampaign.TimeWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        open_hours: {
            value: ccCampaignOpenHoursPropertyToHclTerraform(struct!.openHours),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenHoursProperty",
        },
        restricted_periods: {
            value: ccCampaignRestrictedPeriodsPropertyToHclTerraform(struct!.restrictedPeriods),
            isBlock: true,
            type: "struct",
            storageClassType: "RestrictedPeriodsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignLocalTimeZoneConfigPropertyToTerraform(struct?: CcCampaign.LocalTimeZoneConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_time_zone: cdktn.stringToTerraform(struct!.defaultTimeZone),
        local_time_zone_detection: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.localTimeZoneDetection),
        local_time_zone_detection_scope: cdktn.stringToTerraform(struct!.localTimeZoneDetectionScope),
    }
}


export function ccCampaignLocalTimeZoneConfigPropertyToHclTerraform(struct?: CcCampaign.LocalTimeZoneConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_time_zone: {
            value: cdktn.stringToHclTerraform(struct!.defaultTimeZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_time_zone_detection: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.localTimeZoneDetection),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        local_time_zone_detection_scope: {
            value: cdktn.stringToHclTerraform(struct!.localTimeZoneDetectionScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValuePropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigSmsOpenHoursDailyHoursValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.stringToTerraform(struct!.endTime),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccCampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValuePropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigSmsOpenHoursDailyHoursValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.stringToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_time: {
            value: cdktn.stringToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigSmsOpenHoursDailyHoursPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigSmsOpenHoursDailyHoursProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.listMapper(ccCampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValuePropertyToTerraform, false)(struct!.value),
    }
}


export function ccCampaignCommunicationTimeConfigSmsOpenHoursDailyHoursPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigSmsOpenHoursDailyHoursProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccCampaignCommunicationTimeConfigSmsOpenHoursDailyHoursValuePropertyToHclTerraform, false)(struct!.value),
            isBlock: true,
            type: "list",
            storageClassType: "CommunicationTimeConfigSmsOpenHoursDailyHoursValuePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigSmsOpenHoursPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigSmsOpenHoursProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        daily_hours: cdktn.listMapper(ccCampaignCommunicationTimeConfigSmsOpenHoursDailyHoursPropertyToTerraform, false)(struct!.dailyHours),
    }
}


export function ccCampaignCommunicationTimeConfigSmsOpenHoursPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigSmsOpenHoursProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        daily_hours: {
            value: cdktn.listMapperHcl(ccCampaignCommunicationTimeConfigSmsOpenHoursDailyHoursPropertyToHclTerraform, false)(struct!.dailyHours),
            isBlock: true,
            type: "set",
            storageClassType: "CommunicationTimeConfigSmsOpenHoursDailyHoursPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_date: cdktn.stringToTerraform(struct!.endDate),
        name: cdktn.stringToTerraform(struct!.name),
        start_date: cdktn.stringToTerraform(struct!.startDate),
    }
}


export function ccCampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_date: {
            value: cdktn.stringToHclTerraform(struct!.endDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_date: {
            value: cdktn.stringToHclTerraform(struct!.startDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigSmsRestrictedPeriodsPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigSmsRestrictedPeriodsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        restricted_period_list: cdktn.listMapper(ccCampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListPropertyToTerraform, false)(struct!.restrictedPeriodList),
    }
}


export function ccCampaignCommunicationTimeConfigSmsRestrictedPeriodsPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigSmsRestrictedPeriodsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        restricted_period_list: {
            value: cdktn.listMapperHcl(ccCampaignCommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListPropertyToHclTerraform, false)(struct!.restrictedPeriodList),
            isBlock: true,
            type: "list",
            storageClassType: "CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignSmsPropertyToTerraform(struct?: CcCampaign.SmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        open_hours: ccCampaignCommunicationTimeConfigSmsOpenHoursPropertyToTerraform(struct!.openHours),
        restricted_periods: ccCampaignCommunicationTimeConfigSmsRestrictedPeriodsPropertyToTerraform(struct!.restrictedPeriods),
    }
}


export function ccCampaignSmsPropertyToHclTerraform(struct?: CcCampaign.SmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        open_hours: {
            value: ccCampaignCommunicationTimeConfigSmsOpenHoursPropertyToHclTerraform(struct!.openHours),
            isBlock: true,
            type: "struct",
            storageClassType: "CommunicationTimeConfigSmsOpenHoursProperty",
        },
        restricted_periods: {
            value: ccCampaignCommunicationTimeConfigSmsRestrictedPeriodsPropertyToHclTerraform(struct!.restrictedPeriods),
            isBlock: true,
            type: "struct",
            storageClassType: "CommunicationTimeConfigSmsRestrictedPeriodsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValuePropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigTelephonyOpenHoursDailyHoursValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.stringToTerraform(struct!.endTime),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccCampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValuePropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigTelephonyOpenHoursDailyHoursValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.stringToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_time: {
            value: cdktn.stringToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigTelephonyOpenHoursDailyHoursProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.listMapper(ccCampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValuePropertyToTerraform, false)(struct!.value),
    }
}


export function ccCampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigTelephonyOpenHoursDailyHoursProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccCampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursValuePropertyToHclTerraform, false)(struct!.value),
            isBlock: true,
            type: "list",
            storageClassType: "CommunicationTimeConfigTelephonyOpenHoursDailyHoursValuePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigTelephonyOpenHoursPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigTelephonyOpenHoursProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        daily_hours: cdktn.listMapper(ccCampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursPropertyToTerraform, false)(struct!.dailyHours),
    }
}


export function ccCampaignCommunicationTimeConfigTelephonyOpenHoursPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigTelephonyOpenHoursProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        daily_hours: {
            value: cdktn.listMapperHcl(ccCampaignCommunicationTimeConfigTelephonyOpenHoursDailyHoursPropertyToHclTerraform, false)(struct!.dailyHours),
            isBlock: true,
            type: "set",
            storageClassType: "CommunicationTimeConfigTelephonyOpenHoursDailyHoursPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_date: cdktn.stringToTerraform(struct!.endDate),
        name: cdktn.stringToTerraform(struct!.name),
        start_date: cdktn.stringToTerraform(struct!.startDate),
    }
}


export function ccCampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_date: {
            value: cdktn.stringToHclTerraform(struct!.endDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_date: {
            value: cdktn.stringToHclTerraform(struct!.startDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigTelephonyRestrictedPeriodsPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigTelephonyRestrictedPeriodsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        restricted_period_list: cdktn.listMapper(ccCampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListPropertyToTerraform, false)(struct!.restrictedPeriodList),
    }
}


export function ccCampaignCommunicationTimeConfigTelephonyRestrictedPeriodsPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigTelephonyRestrictedPeriodsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        restricted_period_list: {
            value: cdktn.listMapperHcl(ccCampaignCommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListPropertyToHclTerraform, false)(struct!.restrictedPeriodList),
            isBlock: true,
            type: "list",
            storageClassType: "CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignTelephonyPropertyToTerraform(struct?: CcCampaign.TelephonyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        open_hours: ccCampaignCommunicationTimeConfigTelephonyOpenHoursPropertyToTerraform(struct!.openHours),
        restricted_periods: ccCampaignCommunicationTimeConfigTelephonyRestrictedPeriodsPropertyToTerraform(struct!.restrictedPeriods),
    }
}


export function ccCampaignTelephonyPropertyToHclTerraform(struct?: CcCampaign.TelephonyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        open_hours: {
            value: ccCampaignCommunicationTimeConfigTelephonyOpenHoursPropertyToHclTerraform(struct!.openHours),
            isBlock: true,
            type: "struct",
            storageClassType: "CommunicationTimeConfigTelephonyOpenHoursProperty",
        },
        restricted_periods: {
            value: ccCampaignCommunicationTimeConfigTelephonyRestrictedPeriodsPropertyToHclTerraform(struct!.restrictedPeriods),
            isBlock: true,
            type: "struct",
            storageClassType: "CommunicationTimeConfigTelephonyRestrictedPeriodsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValuePropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.stringToTerraform(struct!.endTime),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccCampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValuePropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.stringToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_time: {
            value: cdktn.stringToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigWhatsAppOpenHoursDailyHoursProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.listMapper(ccCampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValuePropertyToTerraform, false)(struct!.value),
    }
}


export function ccCampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigWhatsAppOpenHoursDailyHoursProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccCampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursValuePropertyToHclTerraform, false)(struct!.value),
            isBlock: true,
            type: "list",
            storageClassType: "CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValuePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigWhatsAppOpenHoursPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigWhatsAppOpenHoursProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        daily_hours: cdktn.listMapper(ccCampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursPropertyToTerraform, false)(struct!.dailyHours),
    }
}


export function ccCampaignCommunicationTimeConfigWhatsAppOpenHoursPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigWhatsAppOpenHoursProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        daily_hours: {
            value: cdktn.listMapperHcl(ccCampaignCommunicationTimeConfigWhatsAppOpenHoursDailyHoursPropertyToHclTerraform, false)(struct!.dailyHours),
            isBlock: true,
            type: "set",
            storageClassType: "CommunicationTimeConfigWhatsAppOpenHoursDailyHoursPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_date: cdktn.stringToTerraform(struct!.endDate),
        name: cdktn.stringToTerraform(struct!.name),
        start_date: cdktn.stringToTerraform(struct!.startDate),
    }
}


export function ccCampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_date: {
            value: cdktn.stringToHclTerraform(struct!.endDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_date: {
            value: cdktn.stringToHclTerraform(struct!.startDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigWhatsAppRestrictedPeriodsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        restricted_period_list: cdktn.listMapper(ccCampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListPropertyToTerraform, false)(struct!.restrictedPeriodList),
    }
}


export function ccCampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigWhatsAppRestrictedPeriodsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        restricted_period_list: {
            value: cdktn.listMapperHcl(ccCampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListPropertyToHclTerraform, false)(struct!.restrictedPeriodList),
            isBlock: true,
            type: "list",
            storageClassType: "CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignWhatsAppPropertyToTerraform(struct?: CcCampaign.WhatsAppProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        open_hours: ccCampaignCommunicationTimeConfigWhatsAppOpenHoursPropertyToTerraform(struct!.openHours),
        restricted_periods: ccCampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsPropertyToTerraform(struct!.restrictedPeriods),
    }
}


export function ccCampaignWhatsAppPropertyToHclTerraform(struct?: CcCampaign.WhatsAppProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        open_hours: {
            value: ccCampaignCommunicationTimeConfigWhatsAppOpenHoursPropertyToHclTerraform(struct!.openHours),
            isBlock: true,
            type: "struct",
            storageClassType: "CommunicationTimeConfigWhatsAppOpenHoursProperty",
        },
        restricted_periods: {
            value: ccCampaignCommunicationTimeConfigWhatsAppRestrictedPeriodsPropertyToHclTerraform(struct!.restrictedPeriods),
            isBlock: true,
            type: "struct",
            storageClassType: "CommunicationTimeConfigWhatsAppRestrictedPeriodsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignCommunicationTimeConfigPropertyToTerraform(struct?: CcCampaign.CommunicationTimeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email: ccCampaignTimeWindowPropertyToTerraform(struct!.email),
        local_time_zone_config: ccCampaignLocalTimeZoneConfigPropertyToTerraform(struct!.localTimeZoneConfig),
        sms: ccCampaignSmsPropertyToTerraform(struct!.sms),
        telephony: ccCampaignTelephonyPropertyToTerraform(struct!.telephony),
        whats_app: ccCampaignWhatsAppPropertyToTerraform(struct!.whatsApp),
    }
}


export function ccCampaignCommunicationTimeConfigPropertyToHclTerraform(struct?: CcCampaign.CommunicationTimeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email: {
            value: ccCampaignTimeWindowPropertyToHclTerraform(struct!.email),
            isBlock: true,
            type: "struct",
            storageClassType: "TimeWindowProperty",
        },
        local_time_zone_config: {
            value: ccCampaignLocalTimeZoneConfigPropertyToHclTerraform(struct!.localTimeZoneConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LocalTimeZoneConfigProperty",
        },
        sms: {
            value: ccCampaignSmsPropertyToHclTerraform(struct!.sms),
            isBlock: true,
            type: "struct",
            storageClassType: "SmsProperty",
        },
        telephony: {
            value: ccCampaignTelephonyPropertyToHclTerraform(struct!.telephony),
            isBlock: true,
            type: "struct",
            storageClassType: "TelephonyProperty",
        },
        whats_app: {
            value: ccCampaignWhatsAppPropertyToHclTerraform(struct!.whatsApp),
            isBlock: true,
            type: "struct",
            storageClassType: "WhatsAppProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignEntryLimitsConfigPropertyToTerraform(struct?: CcCampaign.EntryLimitsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_entry_count: cdktn.numberToTerraform(struct!.maxEntryCount),
        min_entry_interval: cdktn.stringToTerraform(struct!.minEntryInterval),
    }
}


export function ccCampaignEntryLimitsConfigPropertyToHclTerraform(struct?: CcCampaign.EntryLimitsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_entry_count: {
            value: cdktn.numberToHclTerraform(struct!.maxEntryCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_entry_interval: {
            value: cdktn.stringToHclTerraform(struct!.minEntryInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignSchedulePropertyToTerraform(struct?: CcCampaign.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.stringToTerraform(struct!.endTime),
        refresh_frequency: cdktn.stringToTerraform(struct!.refreshFrequency),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccCampaignSchedulePropertyToHclTerraform(struct?: CcCampaign.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.stringToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        refresh_frequency: {
            value: cdktn.stringToHclTerraform(struct!.refreshFrequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_time: {
            value: cdktn.stringToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignEventTriggerPropertyToTerraform(struct?: CcCampaign.EventTriggerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customer_profiles_domain_arn: cdktn.stringToTerraform(struct!.customerProfilesDomainArn),
    }
}


export function ccCampaignEventTriggerPropertyToHclTerraform(struct?: CcCampaign.EventTriggerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customer_profiles_domain_arn: {
            value: cdktn.stringToHclTerraform(struct!.customerProfilesDomainArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignSourcePropertyToTerraform(struct?: CcCampaign.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customer_profiles_segment_arn: cdktn.stringToTerraform(struct!.customerProfilesSegmentArn),
        event_trigger: ccCampaignEventTriggerPropertyToTerraform(struct!.eventTrigger),
    }
}


export function ccCampaignSourcePropertyToHclTerraform(struct?: CcCampaign.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customer_profiles_segment_arn: {
            value: cdktn.stringToHclTerraform(struct!.customerProfilesSegmentArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        event_trigger: {
            value: ccCampaignEventTriggerPropertyToHclTerraform(struct!.eventTrigger),
            isBlock: true,
            type: "struct",
            storageClassType: "EventTriggerProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCampaignTagPropertyToTerraform(struct?: CcCampaign.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCampaignTagPropertyToHclTerraform(struct?: CcCampaign.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCampaign {
export interface EmailOutboundConfigProperty {
    /**
    * Email address used for Email messages
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#connect_source_email_address CcCampaign#connect_source_email_address}
    */
    readonly connectSourceEmailAddress?: string;
    /**
    * The name of the source email address display name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#source_email_address_display_name CcCampaign#source_email_address_display_name}
    */
    readonly sourceEmailAddressDisplayName?: string;
    /**
    * Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#wisdom_template_arn CcCampaign#wisdom_template_arn}
    */
    readonly wisdomTemplateArn?: string;
}
export class EmailOutboundConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmailOutboundConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectSourceEmailAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectSourceEmailAddress = this._connectSourceEmailAddress;
        }
        if (this._sourceEmailAddressDisplayName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceEmailAddressDisplayName = this._sourceEmailAddressDisplayName;
        }
        if (this._wisdomTemplateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.wisdomTemplateArn = this._wisdomTemplateArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailOutboundConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectSourceEmailAddress = undefined;
            this._sourceEmailAddressDisplayName = undefined;
            this._wisdomTemplateArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectSourceEmailAddress = value.connectSourceEmailAddress;
            this._sourceEmailAddressDisplayName = value.sourceEmailAddressDisplayName;
            this._wisdomTemplateArn = value.wisdomTemplateArn;
        }
    }

    // connect_source_email_address - computed: true, optional: true, required: false
    private _connectSourceEmailAddress?: string; 
    public get connectSourceEmailAddress() {
        return this.getStringAttribute('connect_source_email_address');
    }
    public set connectSourceEmailAddress(value: string) {
        this._connectSourceEmailAddress = value;
    }
    public resetConnectSourceEmailAddress() {
        this._connectSourceEmailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectSourceEmailAddressInput() {
        return this._connectSourceEmailAddress;
    }

    // source_email_address_display_name - computed: true, optional: true, required: false
    private _sourceEmailAddressDisplayName?: string; 
    public get sourceEmailAddressDisplayName() {
        return this.getStringAttribute('source_email_address_display_name');
    }
    public set sourceEmailAddressDisplayName(value: string) {
        this._sourceEmailAddressDisplayName = value;
    }
    public resetSourceEmailAddressDisplayName() {
        this._sourceEmailAddressDisplayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceEmailAddressDisplayNameInput() {
        return this._sourceEmailAddressDisplayName;
    }

    // wisdom_template_arn - computed: true, optional: true, required: false
    private _wisdomTemplateArn?: string; 
    public get wisdomTemplateArn() {
        return this.getStringAttribute('wisdom_template_arn');
    }
    public set wisdomTemplateArn(value: string) {
        this._wisdomTemplateArn = value;
    }
    public resetWisdomTemplateArn() {
        this._wisdomTemplateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wisdomTemplateArnInput() {
        return this._wisdomTemplateArn;
    }
}
export interface EmailOutboundModeProperty {
    /**
    * Agentless config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#agentless_config CcCampaign#agentless_config}
    */
    readonly agentlessConfig?: string;
}
export class EmailOutboundModePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmailOutboundModeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentlessConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentlessConfig = this._agentlessConfig;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailOutboundModeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentlessConfig = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentlessConfig = value.agentlessConfig;
        }
    }

    // agentless_config - computed: true, optional: true, required: false
    private _agentlessConfig?: string; 
    public get agentlessConfig() {
        return this.getStringAttribute('agentless_config');
    }
    public set agentlessConfig(value: string) {
        this._agentlessConfig = value;
    }
    public resetAgentlessConfig() {
        this._agentlessConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentlessConfigInput() {
        return this._agentlessConfig;
    }
}
export interface EmailChannelSubtypeConfigProperty {
    /**
    * Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#capacity CcCampaign#capacity}
    */
    readonly capacity?: number;
    /**
    * Default Email outbound config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#default_outbound_config CcCampaign#default_outbound_config}
    */
    readonly defaultOutboundConfig?: EmailOutboundConfigProperty;
    /**
    * Email Outbound Mode
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#outbound_mode CcCampaign#outbound_mode}
    */
    readonly outboundMode?: EmailOutboundModeProperty;
}
export class EmailChannelSubtypeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmailChannelSubtypeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacity = this._capacity;
        }
        if (this._defaultOutboundConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultOutboundConfig = this._defaultOutboundConfig?.internalValue;
        }
        if (this._outboundMode?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outboundMode = this._outboundMode?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmailChannelSubtypeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacity = undefined;
            this._defaultOutboundConfig.internalValue = undefined;
            this._outboundMode.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacity = value.capacity;
            this._defaultOutboundConfig.internalValue = value.defaultOutboundConfig;
            this._outboundMode.internalValue = value.outboundMode;
        }
    }

    // capacity - computed: true, optional: true, required: false
    private _capacity?: number; 
    public get capacity() {
        return this.getNumberAttribute('capacity');
    }
    public set capacity(value: number) {
        this._capacity = value;
    }
    public resetCapacity() {
        this._capacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityInput() {
        return this._capacity;
    }

    // default_outbound_config - computed: true, optional: true, required: false
    private _defaultOutboundConfig = new EmailOutboundConfigPropertyOutputReference(this, "default_outbound_config");
    public get defaultOutboundConfig() {
        return this._defaultOutboundConfig;
    }
    public putDefaultOutboundConfig(value: EmailOutboundConfigProperty) {
        this._defaultOutboundConfig.internalValue = value;
    }
    public resetDefaultOutboundConfig() {
        this._defaultOutboundConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultOutboundConfigInput() {
        return this._defaultOutboundConfig.internalValue;
    }

    // outbound_mode - computed: true, optional: true, required: false
    private _outboundMode = new EmailOutboundModePropertyOutputReference(this, "outbound_mode");
    public get outboundMode() {
        return this._outboundMode;
    }
    public putOutboundMode(value: EmailOutboundModeProperty) {
        this._outboundMode.internalValue = value;
    }
    public resetOutboundMode() {
        this._outboundMode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundModeInput() {
        return this._outboundMode.internalValue;
    }
}
export interface SmsOutboundConfigProperty {
    /**
    * Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#connect_source_phone_number_arn CcCampaign#connect_source_phone_number_arn}
    */
    readonly connectSourcePhoneNumberArn?: string;
    /**
    * Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#wisdom_template_arn CcCampaign#wisdom_template_arn}
    */
    readonly wisdomTemplateArn?: string;
}
export class SmsOutboundConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SmsOutboundConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectSourcePhoneNumberArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectSourcePhoneNumberArn = this._connectSourcePhoneNumberArn;
        }
        if (this._wisdomTemplateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.wisdomTemplateArn = this._wisdomTemplateArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SmsOutboundConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectSourcePhoneNumberArn = undefined;
            this._wisdomTemplateArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectSourcePhoneNumberArn = value.connectSourcePhoneNumberArn;
            this._wisdomTemplateArn = value.wisdomTemplateArn;
        }
    }

    // connect_source_phone_number_arn - computed: true, optional: true, required: false
    private _connectSourcePhoneNumberArn?: string; 
    public get connectSourcePhoneNumberArn() {
        return this.getStringAttribute('connect_source_phone_number_arn');
    }
    public set connectSourcePhoneNumberArn(value: string) {
        this._connectSourcePhoneNumberArn = value;
    }
    public resetConnectSourcePhoneNumberArn() {
        this._connectSourcePhoneNumberArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectSourcePhoneNumberArnInput() {
        return this._connectSourcePhoneNumberArn;
    }

    // wisdom_template_arn - computed: true, optional: true, required: false
    private _wisdomTemplateArn?: string; 
    public get wisdomTemplateArn() {
        return this.getStringAttribute('wisdom_template_arn');
    }
    public set wisdomTemplateArn(value: string) {
        this._wisdomTemplateArn = value;
    }
    public resetWisdomTemplateArn() {
        this._wisdomTemplateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wisdomTemplateArnInput() {
        return this._wisdomTemplateArn;
    }
}
export interface SmsOutboundModeProperty {
    /**
    * Agentless config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#agentless_config CcCampaign#agentless_config}
    */
    readonly agentlessConfig?: string;
}
export class SmsOutboundModePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SmsOutboundModeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentlessConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentlessConfig = this._agentlessConfig;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SmsOutboundModeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentlessConfig = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentlessConfig = value.agentlessConfig;
        }
    }

    // agentless_config - computed: true, optional: true, required: false
    private _agentlessConfig?: string; 
    public get agentlessConfig() {
        return this.getStringAttribute('agentless_config');
    }
    public set agentlessConfig(value: string) {
        this._agentlessConfig = value;
    }
    public resetAgentlessConfig() {
        this._agentlessConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentlessConfigInput() {
        return this._agentlessConfig;
    }
}
export interface SmsChannelSubtypeConfigProperty {
    /**
    * Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#capacity CcCampaign#capacity}
    */
    readonly capacity?: number;
    /**
    * Default SMS outbound config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#default_outbound_config CcCampaign#default_outbound_config}
    */
    readonly defaultOutboundConfig?: SmsOutboundConfigProperty;
    /**
    * SMS Outbound Mode
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#outbound_mode CcCampaign#outbound_mode}
    */
    readonly outboundMode?: SmsOutboundModeProperty;
}
export class SmsChannelSubtypeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SmsChannelSubtypeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacity = this._capacity;
        }
        if (this._defaultOutboundConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultOutboundConfig = this._defaultOutboundConfig?.internalValue;
        }
        if (this._outboundMode?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outboundMode = this._outboundMode?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SmsChannelSubtypeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacity = undefined;
            this._defaultOutboundConfig.internalValue = undefined;
            this._outboundMode.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacity = value.capacity;
            this._defaultOutboundConfig.internalValue = value.defaultOutboundConfig;
            this._outboundMode.internalValue = value.outboundMode;
        }
    }

    // capacity - computed: true, optional: true, required: false
    private _capacity?: number; 
    public get capacity() {
        return this.getNumberAttribute('capacity');
    }
    public set capacity(value: number) {
        this._capacity = value;
    }
    public resetCapacity() {
        this._capacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityInput() {
        return this._capacity;
    }

    // default_outbound_config - computed: true, optional: true, required: false
    private _defaultOutboundConfig = new SmsOutboundConfigPropertyOutputReference(this, "default_outbound_config");
    public get defaultOutboundConfig() {
        return this._defaultOutboundConfig;
    }
    public putDefaultOutboundConfig(value: SmsOutboundConfigProperty) {
        this._defaultOutboundConfig.internalValue = value;
    }
    public resetDefaultOutboundConfig() {
        this._defaultOutboundConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultOutboundConfigInput() {
        return this._defaultOutboundConfig.internalValue;
    }

    // outbound_mode - computed: true, optional: true, required: false
    private _outboundMode = new SmsOutboundModePropertyOutputReference(this, "outbound_mode");
    public get outboundMode() {
        return this._outboundMode;
    }
    public putOutboundMode(value: SmsOutboundModeProperty) {
        this._outboundMode.internalValue = value;
    }
    public resetOutboundMode() {
        this._outboundMode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundModeInput() {
        return this._outboundMode.internalValue;
    }
}
export interface AnswerMachineDetectionConfigProperty {
    /**
    * Enables detection of prompts (e.g., beep after after a voicemail greeting)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#await_answer_machine_prompt CcCampaign#await_answer_machine_prompt}
    */
    readonly awaitAnswerMachinePrompt?: boolean | cdktn.IResolvable;
    /**
    * Flag to decided whether outbound calls should have answering machine detection enabled or not
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#enable_answer_machine_detection CcCampaign#enable_answer_machine_detection}
    */
    readonly enableAnswerMachineDetection?: boolean | cdktn.IResolvable;
}
export class AnswerMachineDetectionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnswerMachineDetectionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awaitAnswerMachinePrompt !== undefined) {
            hasAnyValues = true;
            internalValueResult.awaitAnswerMachinePrompt = this._awaitAnswerMachinePrompt;
        }
        if (this._enableAnswerMachineDetection !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableAnswerMachineDetection = this._enableAnswerMachineDetection;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnswerMachineDetectionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awaitAnswerMachinePrompt = undefined;
            this._enableAnswerMachineDetection = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awaitAnswerMachinePrompt = value.awaitAnswerMachinePrompt;
            this._enableAnswerMachineDetection = value.enableAnswerMachineDetection;
        }
    }

    // await_answer_machine_prompt - computed: true, optional: true, required: false
    private _awaitAnswerMachinePrompt?: boolean | cdktn.IResolvable; 
    public get awaitAnswerMachinePrompt() {
        return this.getBooleanAttribute('await_answer_machine_prompt');
    }
    public set awaitAnswerMachinePrompt(value: boolean | cdktn.IResolvable) {
        this._awaitAnswerMachinePrompt = value;
    }
    public resetAwaitAnswerMachinePrompt() {
        this._awaitAnswerMachinePrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awaitAnswerMachinePromptInput() {
        return this._awaitAnswerMachinePrompt;
    }

    // enable_answer_machine_detection - computed: true, optional: true, required: false
    private _enableAnswerMachineDetection?: boolean | cdktn.IResolvable; 
    public get enableAnswerMachineDetection() {
        return this.getBooleanAttribute('enable_answer_machine_detection');
    }
    public set enableAnswerMachineDetection(value: boolean | cdktn.IResolvable) {
        this._enableAnswerMachineDetection = value;
    }
    public resetEnableAnswerMachineDetection() {
        this._enableAnswerMachineDetection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAnswerMachineDetectionInput() {
        return this._enableAnswerMachineDetection;
    }
}
export interface TelephonyOutboundConfigProperty {
    /**
    * The configuration used for answering machine detection during outbound calls
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#answer_machine_detection_config CcCampaign#answer_machine_detection_config}
    */
    readonly answerMachineDetectionConfig?: AnswerMachineDetectionConfigProperty;
    /**
    * The identifier of the contact flow for the outbound call
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#connect_contact_flow_id CcCampaign#connect_contact_flow_id}
    */
    readonly connectContactFlowId?: string;
    /**
    * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#connect_source_phone_number CcCampaign#connect_source_phone_number}
    */
    readonly connectSourcePhoneNumber?: string;
    /**
    * Maximum ring time for outbound calls in seconds
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#ring_timeout CcCampaign#ring_timeout}
    */
    readonly ringTimeout?: number;
}
export class TelephonyOutboundConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TelephonyOutboundConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._answerMachineDetectionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.answerMachineDetectionConfig = this._answerMachineDetectionConfig?.internalValue;
        }
        if (this._connectContactFlowId !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectContactFlowId = this._connectContactFlowId;
        }
        if (this._connectSourcePhoneNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectSourcePhoneNumber = this._connectSourcePhoneNumber;
        }
        if (this._ringTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.ringTimeout = this._ringTimeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TelephonyOutboundConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._answerMachineDetectionConfig.internalValue = undefined;
            this._connectContactFlowId = undefined;
            this._connectSourcePhoneNumber = undefined;
            this._ringTimeout = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._answerMachineDetectionConfig.internalValue = value.answerMachineDetectionConfig;
            this._connectContactFlowId = value.connectContactFlowId;
            this._connectSourcePhoneNumber = value.connectSourcePhoneNumber;
            this._ringTimeout = value.ringTimeout;
        }
    }

    // answer_machine_detection_config - computed: true, optional: true, required: false
    private _answerMachineDetectionConfig = new AnswerMachineDetectionConfigPropertyOutputReference(this, "answer_machine_detection_config");
    public get answerMachineDetectionConfig() {
        return this._answerMachineDetectionConfig;
    }
    public putAnswerMachineDetectionConfig(value: AnswerMachineDetectionConfigProperty) {
        this._answerMachineDetectionConfig.internalValue = value;
    }
    public resetAnswerMachineDetectionConfig() {
        this._answerMachineDetectionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get answerMachineDetectionConfigInput() {
        return this._answerMachineDetectionConfig.internalValue;
    }

    // connect_contact_flow_id - computed: true, optional: true, required: false
    private _connectContactFlowId?: string; 
    public get connectContactFlowId() {
        return this.getStringAttribute('connect_contact_flow_id');
    }
    public set connectContactFlowId(value: string) {
        this._connectContactFlowId = value;
    }
    public resetConnectContactFlowId() {
        this._connectContactFlowId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectContactFlowIdInput() {
        return this._connectContactFlowId;
    }

    // connect_source_phone_number - computed: true, optional: true, required: false
    private _connectSourcePhoneNumber?: string; 
    public get connectSourcePhoneNumber() {
        return this.getStringAttribute('connect_source_phone_number');
    }
    public set connectSourcePhoneNumber(value: string) {
        this._connectSourcePhoneNumber = value;
    }
    public resetConnectSourcePhoneNumber() {
        this._connectSourcePhoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectSourcePhoneNumberInput() {
        return this._connectSourcePhoneNumber;
    }

    // ring_timeout - computed: true, optional: true, required: false
    private _ringTimeout?: number; 
    public get ringTimeout() {
        return this.getNumberAttribute('ring_timeout');
    }
    public set ringTimeout(value: number) {
        this._ringTimeout = value;
    }
    public resetRingTimeout() {
        this._ringTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ringTimeoutInput() {
        return this._ringTimeout;
    }
}
export interface PredictiveConfigProperty {
    /**
    * The bandwidth allocation of a queue resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#bandwidth_allocation CcCampaign#bandwidth_allocation}
    */
    readonly bandwidthAllocation?: number;
}
export class PredictiveConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PredictiveConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bandwidthAllocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.bandwidthAllocation = this._bandwidthAllocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PredictiveConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bandwidthAllocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bandwidthAllocation = value.bandwidthAllocation;
        }
    }

    // bandwidth_allocation - computed: true, optional: true, required: false
    private _bandwidthAllocation?: number; 
    public get bandwidthAllocation() {
        return this.getNumberAttribute('bandwidth_allocation');
    }
    public set bandwidthAllocation(value: number) {
        this._bandwidthAllocation = value;
    }
    public resetBandwidthAllocation() {
        this._bandwidthAllocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthAllocationInput() {
        return this._bandwidthAllocation;
    }
}
export interface TimeoutConfigProperty {
    /**
    * Timeout duration for a preview contact in seconds
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#duration_in_seconds CcCampaign#duration_in_seconds}
    */
    readonly durationInSeconds?: number;
}
export class TimeoutConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeoutConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durationInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationInSeconds = this._durationInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeoutConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durationInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durationInSeconds = value.durationInSeconds;
        }
    }

    // duration_in_seconds - computed: true, optional: true, required: false
    private _durationInSeconds?: number; 
    public get durationInSeconds() {
        return this.getNumberAttribute('duration_in_seconds');
    }
    public set durationInSeconds(value: number) {
        this._durationInSeconds = value;
    }
    public resetDurationInSeconds() {
        this._durationInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInSecondsInput() {
        return this._durationInSeconds;
    }
}
export interface PreviewConfigProperty {
    /**
    * Actions that can be performed by agent during preview phase
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#agent_actions CcCampaign#agent_actions}
    */
    readonly agentActions?: string[];
    /**
    * The bandwidth allocation of a queue resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#bandwidth_allocation CcCampaign#bandwidth_allocation}
    */
    readonly bandwidthAllocation?: number;
    /**
    * Timeout Config for preview contacts
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#timeout_config CcCampaign#timeout_config}
    */
    readonly timeoutConfig?: TimeoutConfigProperty;
}
export class PreviewConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PreviewConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentActions !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentActions = this._agentActions;
        }
        if (this._bandwidthAllocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.bandwidthAllocation = this._bandwidthAllocation;
        }
        if (this._timeoutConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutConfig = this._timeoutConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PreviewConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentActions = undefined;
            this._bandwidthAllocation = undefined;
            this._timeoutConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentActions = value.agentActions;
            this._bandwidthAllocation = value.bandwidthAllocation;
            this._timeoutConfig.internalValue = value.timeoutConfig;
        }
    }

    // agent_actions - computed: true, optional: true, required: false
    private _agentActions?: string[]; 
    public get agentActions() {
        return this.getListAttribute('agent_actions');
    }
    public set agentActions(value: string[]) {
        this._agentActions = value;
    }
    public resetAgentActions() {
        this._agentActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentActionsInput() {
        return this._agentActions;
    }

    // bandwidth_allocation - computed: true, optional: true, required: false
    private _bandwidthAllocation?: number; 
    public get bandwidthAllocation() {
        return this.getNumberAttribute('bandwidth_allocation');
    }
    public set bandwidthAllocation(value: number) {
        this._bandwidthAllocation = value;
    }
    public resetBandwidthAllocation() {
        this._bandwidthAllocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthAllocationInput() {
        return this._bandwidthAllocation;
    }

    // timeout_config - computed: true, optional: true, required: false
    private _timeoutConfig = new TimeoutConfigPropertyOutputReference(this, "timeout_config");
    public get timeoutConfig() {
        return this._timeoutConfig;
    }
    public putTimeoutConfig(value: TimeoutConfigProperty) {
        this._timeoutConfig.internalValue = value;
    }
    public resetTimeoutConfig() {
        this._timeoutConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutConfigInput() {
        return this._timeoutConfig.internalValue;
    }
}
export interface ProgressiveConfigProperty {
    /**
    * The bandwidth allocation of a queue resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#bandwidth_allocation CcCampaign#bandwidth_allocation}
    */
    readonly bandwidthAllocation?: number;
}
export class ProgressiveConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProgressiveConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bandwidthAllocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.bandwidthAllocation = this._bandwidthAllocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProgressiveConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bandwidthAllocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bandwidthAllocation = value.bandwidthAllocation;
        }
    }

    // bandwidth_allocation - computed: true, optional: true, required: false
    private _bandwidthAllocation?: number; 
    public get bandwidthAllocation() {
        return this.getNumberAttribute('bandwidth_allocation');
    }
    public set bandwidthAllocation(value: number) {
        this._bandwidthAllocation = value;
    }
    public resetBandwidthAllocation() {
        this._bandwidthAllocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthAllocationInput() {
        return this._bandwidthAllocation;
    }
}
export interface TelephonyOutboundModeProperty {
    /**
    * Agentless config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#agentless_config CcCampaign#agentless_config}
    */
    readonly agentlessConfig?: string;
    /**
    * Predictive config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#predictive_config CcCampaign#predictive_config}
    */
    readonly predictiveConfig?: PredictiveConfigProperty;
    /**
    * Preview config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#preview_config CcCampaign#preview_config}
    */
    readonly previewConfig?: PreviewConfigProperty;
    /**
    * Progressive config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#progressive_config CcCampaign#progressive_config}
    */
    readonly progressiveConfig?: ProgressiveConfigProperty;
}
export class TelephonyOutboundModePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TelephonyOutboundModeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentlessConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentlessConfig = this._agentlessConfig;
        }
        if (this._predictiveConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.predictiveConfig = this._predictiveConfig?.internalValue;
        }
        if (this._previewConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.previewConfig = this._previewConfig?.internalValue;
        }
        if (this._progressiveConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.progressiveConfig = this._progressiveConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TelephonyOutboundModeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentlessConfig = undefined;
            this._predictiveConfig.internalValue = undefined;
            this._previewConfig.internalValue = undefined;
            this._progressiveConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentlessConfig = value.agentlessConfig;
            this._predictiveConfig.internalValue = value.predictiveConfig;
            this._previewConfig.internalValue = value.previewConfig;
            this._progressiveConfig.internalValue = value.progressiveConfig;
        }
    }

    // agentless_config - computed: true, optional: true, required: false
    private _agentlessConfig?: string; 
    public get agentlessConfig() {
        return this.getStringAttribute('agentless_config');
    }
    public set agentlessConfig(value: string) {
        this._agentlessConfig = value;
    }
    public resetAgentlessConfig() {
        this._agentlessConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentlessConfigInput() {
        return this._agentlessConfig;
    }

    // predictive_config - computed: true, optional: true, required: false
    private _predictiveConfig = new PredictiveConfigPropertyOutputReference(this, "predictive_config");
    public get predictiveConfig() {
        return this._predictiveConfig;
    }
    public putPredictiveConfig(value: PredictiveConfigProperty) {
        this._predictiveConfig.internalValue = value;
    }
    public resetPredictiveConfig() {
        this._predictiveConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predictiveConfigInput() {
        return this._predictiveConfig.internalValue;
    }

    // preview_config - computed: true, optional: true, required: false
    private _previewConfig = new PreviewConfigPropertyOutputReference(this, "preview_config");
    public get previewConfig() {
        return this._previewConfig;
    }
    public putPreviewConfig(value: PreviewConfigProperty) {
        this._previewConfig.internalValue = value;
    }
    public resetPreviewConfig() {
        this._previewConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get previewConfigInput() {
        return this._previewConfig.internalValue;
    }

    // progressive_config - computed: true, optional: true, required: false
    private _progressiveConfig = new ProgressiveConfigPropertyOutputReference(this, "progressive_config");
    public get progressiveConfig() {
        return this._progressiveConfig;
    }
    public putProgressiveConfig(value: ProgressiveConfigProperty) {
        this._progressiveConfig.internalValue = value;
    }
    public resetProgressiveConfig() {
        this._progressiveConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get progressiveConfigInput() {
        return this._progressiveConfig.internalValue;
    }
}
export interface TelephonyChannelSubtypeConfigProperty {
    /**
    * Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#capacity CcCampaign#capacity}
    */
    readonly capacity?: number;
    /**
    * The queue for the call
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#connect_queue_id CcCampaign#connect_queue_id}
    */
    readonly connectQueueId?: string;
    /**
    * Default Telephone Outbound config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#default_outbound_config CcCampaign#default_outbound_config}
    */
    readonly defaultOutboundConfig?: TelephonyOutboundConfigProperty;
    /**
    * Telephony Outbound Mode
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#outbound_mode CcCampaign#outbound_mode}
    */
    readonly outboundMode?: TelephonyOutboundModeProperty;
}
export class TelephonyChannelSubtypeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TelephonyChannelSubtypeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacity = this._capacity;
        }
        if (this._connectQueueId !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectQueueId = this._connectQueueId;
        }
        if (this._defaultOutboundConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultOutboundConfig = this._defaultOutboundConfig?.internalValue;
        }
        if (this._outboundMode?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outboundMode = this._outboundMode?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TelephonyChannelSubtypeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacity = undefined;
            this._connectQueueId = undefined;
            this._defaultOutboundConfig.internalValue = undefined;
            this._outboundMode.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacity = value.capacity;
            this._connectQueueId = value.connectQueueId;
            this._defaultOutboundConfig.internalValue = value.defaultOutboundConfig;
            this._outboundMode.internalValue = value.outboundMode;
        }
    }

    // capacity - computed: true, optional: true, required: false
    private _capacity?: number; 
    public get capacity() {
        return this.getNumberAttribute('capacity');
    }
    public set capacity(value: number) {
        this._capacity = value;
    }
    public resetCapacity() {
        this._capacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityInput() {
        return this._capacity;
    }

    // connect_queue_id - computed: true, optional: true, required: false
    private _connectQueueId?: string; 
    public get connectQueueId() {
        return this.getStringAttribute('connect_queue_id');
    }
    public set connectQueueId(value: string) {
        this._connectQueueId = value;
    }
    public resetConnectQueueId() {
        this._connectQueueId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectQueueIdInput() {
        return this._connectQueueId;
    }

    // default_outbound_config - computed: true, optional: true, required: false
    private _defaultOutboundConfig = new TelephonyOutboundConfigPropertyOutputReference(this, "default_outbound_config");
    public get defaultOutboundConfig() {
        return this._defaultOutboundConfig;
    }
    public putDefaultOutboundConfig(value: TelephonyOutboundConfigProperty) {
        this._defaultOutboundConfig.internalValue = value;
    }
    public resetDefaultOutboundConfig() {
        this._defaultOutboundConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultOutboundConfigInput() {
        return this._defaultOutboundConfig.internalValue;
    }

    // outbound_mode - computed: true, optional: true, required: false
    private _outboundMode = new TelephonyOutboundModePropertyOutputReference(this, "outbound_mode");
    public get outboundMode() {
        return this._outboundMode;
    }
    public putOutboundMode(value: TelephonyOutboundModeProperty) {
        this._outboundMode.internalValue = value;
    }
    public resetOutboundMode() {
        this._outboundMode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundModeInput() {
        return this._outboundMode.internalValue;
    }
}
export interface WhatsAppOutboundConfigProperty {
    /**
    * Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#connect_source_phone_number_arn CcCampaign#connect_source_phone_number_arn}
    */
    readonly connectSourcePhoneNumberArn?: string;
    /**
    * Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#wisdom_template_arn CcCampaign#wisdom_template_arn}
    */
    readonly wisdomTemplateArn?: string;
}
export class WhatsAppOutboundConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WhatsAppOutboundConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectSourcePhoneNumberArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectSourcePhoneNumberArn = this._connectSourcePhoneNumberArn;
        }
        if (this._wisdomTemplateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.wisdomTemplateArn = this._wisdomTemplateArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WhatsAppOutboundConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectSourcePhoneNumberArn = undefined;
            this._wisdomTemplateArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectSourcePhoneNumberArn = value.connectSourcePhoneNumberArn;
            this._wisdomTemplateArn = value.wisdomTemplateArn;
        }
    }

    // connect_source_phone_number_arn - computed: true, optional: true, required: false
    private _connectSourcePhoneNumberArn?: string; 
    public get connectSourcePhoneNumberArn() {
        return this.getStringAttribute('connect_source_phone_number_arn');
    }
    public set connectSourcePhoneNumberArn(value: string) {
        this._connectSourcePhoneNumberArn = value;
    }
    public resetConnectSourcePhoneNumberArn() {
        this._connectSourcePhoneNumberArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectSourcePhoneNumberArnInput() {
        return this._connectSourcePhoneNumberArn;
    }

    // wisdom_template_arn - computed: true, optional: true, required: false
    private _wisdomTemplateArn?: string; 
    public get wisdomTemplateArn() {
        return this.getStringAttribute('wisdom_template_arn');
    }
    public set wisdomTemplateArn(value: string) {
        this._wisdomTemplateArn = value;
    }
    public resetWisdomTemplateArn() {
        this._wisdomTemplateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wisdomTemplateArnInput() {
        return this._wisdomTemplateArn;
    }
}
export interface WhatsAppOutboundModeProperty {
    /**
    * Agentless config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#agentless_config CcCampaign#agentless_config}
    */
    readonly agentlessConfig?: string;
}
export class WhatsAppOutboundModePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WhatsAppOutboundModeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agentlessConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.agentlessConfig = this._agentlessConfig;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WhatsAppOutboundModeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agentlessConfig = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agentlessConfig = value.agentlessConfig;
        }
    }

    // agentless_config - computed: true, optional: true, required: false
    private _agentlessConfig?: string; 
    public get agentlessConfig() {
        return this.getStringAttribute('agentless_config');
    }
    public set agentlessConfig(value: string) {
        this._agentlessConfig = value;
    }
    public resetAgentlessConfig() {
        this._agentlessConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentlessConfigInput() {
        return this._agentlessConfig;
    }
}
export interface WhatsAppChannelSubtypeConfigProperty {
    /**
    * Allocates outbound capacity for the specific channel of this campaign between multiple active campaigns
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#capacity CcCampaign#capacity}
    */
    readonly capacity?: number;
    /**
    * Default WhatsApp outbound config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#default_outbound_config CcCampaign#default_outbound_config}
    */
    readonly defaultOutboundConfig?: WhatsAppOutboundConfigProperty;
    /**
    * WhatsApp Outbound Mode
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#outbound_mode CcCampaign#outbound_mode}
    */
    readonly outboundMode?: WhatsAppOutboundModeProperty;
}
export class WhatsAppChannelSubtypeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WhatsAppChannelSubtypeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacity = this._capacity;
        }
        if (this._defaultOutboundConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultOutboundConfig = this._defaultOutboundConfig?.internalValue;
        }
        if (this._outboundMode?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outboundMode = this._outboundMode?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WhatsAppChannelSubtypeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacity = undefined;
            this._defaultOutboundConfig.internalValue = undefined;
            this._outboundMode.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacity = value.capacity;
            this._defaultOutboundConfig.internalValue = value.defaultOutboundConfig;
            this._outboundMode.internalValue = value.outboundMode;
        }
    }

    // capacity - computed: true, optional: true, required: false
    private _capacity?: number; 
    public get capacity() {
        return this.getNumberAttribute('capacity');
    }
    public set capacity(value: number) {
        this._capacity = value;
    }
    public resetCapacity() {
        this._capacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityInput() {
        return this._capacity;
    }

    // default_outbound_config - computed: true, optional: true, required: false
    private _defaultOutboundConfig = new WhatsAppOutboundConfigPropertyOutputReference(this, "default_outbound_config");
    public get defaultOutboundConfig() {
        return this._defaultOutboundConfig;
    }
    public putDefaultOutboundConfig(value: WhatsAppOutboundConfigProperty) {
        this._defaultOutboundConfig.internalValue = value;
    }
    public resetDefaultOutboundConfig() {
        this._defaultOutboundConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultOutboundConfigInput() {
        return this._defaultOutboundConfig.internalValue;
    }

    // outbound_mode - computed: true, optional: true, required: false
    private _outboundMode = new WhatsAppOutboundModePropertyOutputReference(this, "outbound_mode");
    public get outboundMode() {
        return this._outboundMode;
    }
    public putOutboundMode(value: WhatsAppOutboundModeProperty) {
        this._outboundMode.internalValue = value;
    }
    public resetOutboundMode() {
        this._outboundMode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundModeInput() {
        return this._outboundMode.internalValue;
    }
}
export interface ChannelSubtypeConfigProperty {
    /**
    * Email Channel Subtype config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#email CcCampaign#email}
    */
    readonly email?: EmailChannelSubtypeConfigProperty;
    /**
    * SMS Channel Subtype config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#sms CcCampaign#sms}
    */
    readonly sms?: SmsChannelSubtypeConfigProperty;
    /**
    * Telephony Channel Subtype config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#telephony CcCampaign#telephony}
    */
    readonly telephony?: TelephonyChannelSubtypeConfigProperty;
    /**
    * WhatsApp Channel Subtype config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#whats_app CcCampaign#whats_app}
    */
    readonly whatsApp?: WhatsAppChannelSubtypeConfigProperty;
}
export class ChannelSubtypeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ChannelSubtypeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._email?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email?.internalValue;
        }
        if (this._sms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sms = this._sms?.internalValue;
        }
        if (this._telephony?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.telephony = this._telephony?.internalValue;
        }
        if (this._whatsApp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.whatsApp = this._whatsApp?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ChannelSubtypeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email.internalValue = undefined;
            this._sms.internalValue = undefined;
            this._telephony.internalValue = undefined;
            this._whatsApp.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email.internalValue = value.email;
            this._sms.internalValue = value.sms;
            this._telephony.internalValue = value.telephony;
            this._whatsApp.internalValue = value.whatsApp;
        }
    }

    // email - computed: true, optional: true, required: false
    private _email = new EmailChannelSubtypeConfigPropertyOutputReference(this, "email");
    public get email() {
        return this._email;
    }
    public putEmail(value: EmailChannelSubtypeConfigProperty) {
        this._email.internalValue = value;
    }
    public resetEmail() {
        this._email.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
        return this._email.internalValue;
    }

    // sms - computed: true, optional: true, required: false
    private _sms = new SmsChannelSubtypeConfigPropertyOutputReference(this, "sms");
    public get sms() {
        return this._sms;
    }
    public putSms(value: SmsChannelSubtypeConfigProperty) {
        this._sms.internalValue = value;
    }
    public resetSms() {
        this._sms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smsInput() {
        return this._sms.internalValue;
    }

    // telephony - computed: true, optional: true, required: false
    private _telephony = new TelephonyChannelSubtypeConfigPropertyOutputReference(this, "telephony");
    public get telephony() {
        return this._telephony;
    }
    public putTelephony(value: TelephonyChannelSubtypeConfigProperty) {
        this._telephony.internalValue = value;
    }
    public resetTelephony() {
        this._telephony.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get telephonyInput() {
        return this._telephony.internalValue;
    }

    // whats_app - computed: true, optional: true, required: false
    private _whatsApp = new WhatsAppChannelSubtypeConfigPropertyOutputReference(this, "whats_app");
    public get whatsApp() {
        return this._whatsApp;
    }
    public putWhatsApp(value: WhatsAppChannelSubtypeConfigProperty) {
        this._whatsApp.internalValue = value;
    }
    public resetWhatsApp() {
        this._whatsApp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get whatsAppInput() {
        return this._whatsApp.internalValue;
    }
}
export interface CommunicationLimitProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#frequency CcCampaign#frequency}
    */
    readonly frequency?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#max_count_per_recipient CcCampaign#max_count_per_recipient}
    */
    readonly maxCountPerRecipient?: number;
    /**
    * The communication limit time unit
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#unit CcCampaign#unit}
    */
    readonly unit?: string;
}
export class CommunicationLimitPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CommunicationLimitProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._frequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.frequency = this._frequency;
        }
        if (this._maxCountPerRecipient !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCountPerRecipient = this._maxCountPerRecipient;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationLimitProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._frequency = undefined;
            this._maxCountPerRecipient = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._frequency = value.frequency;
            this._maxCountPerRecipient = value.maxCountPerRecipient;
            this._unit = value.unit;
        }
    }

    // frequency - computed: true, optional: true, required: false
    private _frequency?: number; 
    public get frequency() {
        return this.getNumberAttribute('frequency');
    }
    public set frequency(value: number) {
        this._frequency = value;
    }
    public resetFrequency() {
        this._frequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frequencyInput() {
        return this._frequency;
    }

    // max_count_per_recipient - computed: true, optional: true, required: false
    private _maxCountPerRecipient?: number; 
    public get maxCountPerRecipient() {
        return this.getNumberAttribute('max_count_per_recipient');
    }
    public set maxCountPerRecipient(value: number) {
        this._maxCountPerRecipient = value;
    }
    public resetMaxCountPerRecipient() {
        this._maxCountPerRecipient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCountPerRecipientInput() {
        return this._maxCountPerRecipient;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}

export class CommunicationLimitPropertyList extends cdktn.ComplexList {
    public internalValue? : CommunicationLimitProperty[] | cdktn.IResolvable

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
    public get(index: number): CommunicationLimitPropertyOutputReference {
        return new CommunicationLimitPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CommunicationLimitsProperty {
    /**
    * List of communication limit
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#communication_limit_list CcCampaign#communication_limit_list}
    */
    readonly communicationLimitList?: CommunicationLimitProperty[] | cdktn.IResolvable;
}
export class CommunicationLimitsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CommunicationLimitsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._communicationLimitList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.communicationLimitList = this._communicationLimitList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationLimitsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._communicationLimitList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._communicationLimitList.internalValue = value.communicationLimitList;
        }
    }

    // communication_limit_list - computed: true, optional: true, required: false
    private _communicationLimitList = new CommunicationLimitPropertyList(this, "communication_limit_list", false);
    public get communicationLimitList() {
        return this._communicationLimitList;
    }
    public putCommunicationLimitList(value: CommunicationLimitProperty[] | cdktn.IResolvable) {
        this._communicationLimitList.internalValue = value;
    }
    public resetCommunicationLimitList() {
        this._communicationLimitList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get communicationLimitListInput() {
        return this._communicationLimitList.internalValue;
    }
}
export interface CommunicationLimitsConfigProperty {
    /**
    * Communication limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#all_channels_subtypes CcCampaign#all_channels_subtypes}
    */
    readonly allChannelsSubtypes?: CommunicationLimitsProperty;
    /**
    * Enumeration of Instance Limits handling in a Campaign
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#instance_limits_handling CcCampaign#instance_limits_handling}
    */
    readonly instanceLimitsHandling?: string;
}
export class CommunicationLimitsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CommunicationLimitsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allChannelsSubtypes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.allChannelsSubtypes = this._allChannelsSubtypes?.internalValue;
        }
        if (this._instanceLimitsHandling !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceLimitsHandling = this._instanceLimitsHandling;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationLimitsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allChannelsSubtypes.internalValue = undefined;
            this._instanceLimitsHandling = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allChannelsSubtypes.internalValue = value.allChannelsSubtypes;
            this._instanceLimitsHandling = value.instanceLimitsHandling;
        }
    }

    // all_channels_subtypes - computed: true, optional: true, required: false
    private _allChannelsSubtypes = new CommunicationLimitsPropertyOutputReference(this, "all_channels_subtypes");
    public get allChannelsSubtypes() {
        return this._allChannelsSubtypes;
    }
    public putAllChannelsSubtypes(value: CommunicationLimitsProperty) {
        this._allChannelsSubtypes.internalValue = value;
    }
    public resetAllChannelsSubtypes() {
        this._allChannelsSubtypes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allChannelsSubtypesInput() {
        return this._allChannelsSubtypes.internalValue;
    }

    // instance_limits_handling - computed: true, optional: true, required: false
    private _instanceLimitsHandling?: string; 
    public get instanceLimitsHandling() {
        return this.getStringAttribute('instance_limits_handling');
    }
    public set instanceLimitsHandling(value: string) {
        this._instanceLimitsHandling = value;
    }
    public resetInstanceLimitsHandling() {
        this._instanceLimitsHandling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceLimitsHandlingInput() {
        return this._instanceLimitsHandling;
    }
}
export interface TimeRangeProperty {
    /**
    * Time in ISO 8601 format, e.g. T23:11
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#end_time CcCampaign#end_time}
    */
    readonly endTime?: string;
    /**
    * Time in ISO 8601 format, e.g. T23:11
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#start_time CcCampaign#start_time}
    */
    readonly startTime?: string;
}
export class TimeRangePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TimeRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._startTime = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string; 
    public get endTime() {
        return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}

export class TimeRangePropertyList extends cdktn.ComplexList {
    public internalValue? : TimeRangeProperty[] | cdktn.IResolvable

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
    public get(index: number): TimeRangePropertyOutputReference {
        return new TimeRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DailyHourProperty {
    /**
    * Day of week
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#key CcCampaign#key}
    */
    readonly key?: string;
    /**
    * List of time range
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#value CcCampaign#value}
    */
    readonly value?: TimeRangeProperty[] | cdktn.IResolvable;
}
export class DailyHourPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DailyHourProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DailyHourProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value.internalValue = value.value;
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
    private _value = new TimeRangePropertyList(this, "value", false);
    public get value() {
        return this._value;
    }
    public putValue(value: TimeRangeProperty[] | cdktn.IResolvable) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class DailyHourPropertyList extends cdktn.ComplexList {
    public internalValue? : DailyHourProperty[] | cdktn.IResolvable

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
    public get(index: number): DailyHourPropertyOutputReference {
        return new DailyHourPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OpenHoursProperty {
    /**
    * Daily Hours map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#daily_hours CcCampaign#daily_hours}
    */
    readonly dailyHours?: DailyHourProperty[] | cdktn.IResolvable;
}
export class OpenHoursPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenHoursProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dailyHours?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dailyHours = this._dailyHours?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenHoursProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dailyHours.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dailyHours.internalValue = value.dailyHours;
        }
    }

    // daily_hours - computed: true, optional: true, required: false
    private _dailyHours = new DailyHourPropertyList(this, "daily_hours", true);
    public get dailyHours() {
        return this._dailyHours;
    }
    public putDailyHours(value: DailyHourProperty[] | cdktn.IResolvable) {
        this._dailyHours.internalValue = value;
    }
    public resetDailyHours() {
        this._dailyHours.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dailyHoursInput() {
        return this._dailyHours.internalValue;
    }
}
export interface RestrictedPeriodProperty {
    /**
    * Date in ISO 8601 format, e.g. 2024-01-01
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#end_date CcCampaign#end_date}
    */
    readonly endDate?: string;
    /**
    * The name of a restricted period
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#name CcCampaign#name}
    */
    readonly name?: string;
    /**
    * Date in ISO 8601 format, e.g. 2024-01-01
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#start_date CcCampaign#start_date}
    */
    readonly startDate?: string;
}
export class RestrictedPeriodPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RestrictedPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.endDate = this._endDate;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._startDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.startDate = this._startDate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestrictedPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endDate = undefined;
            this._name = undefined;
            this._startDate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endDate = value.endDate;
            this._name = value.name;
            this._startDate = value.startDate;
        }
    }

    // end_date - computed: true, optional: true, required: false
    private _endDate?: string; 
    public get endDate() {
        return this.getStringAttribute('end_date');
    }
    public set endDate(value: string) {
        this._endDate = value;
    }
    public resetEndDate() {
        this._endDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endDateInput() {
        return this._endDate;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // start_date - computed: true, optional: true, required: false
    private _startDate?: string; 
    public get startDate() {
        return this.getStringAttribute('start_date');
    }
    public set startDate(value: string) {
        this._startDate = value;
    }
    public resetStartDate() {
        this._startDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startDateInput() {
        return this._startDate;
    }
}

export class RestrictedPeriodPropertyList extends cdktn.ComplexList {
    public internalValue? : RestrictedPeriodProperty[] | cdktn.IResolvable

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
    public get(index: number): RestrictedPeriodPropertyOutputReference {
        return new RestrictedPeriodPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RestrictedPeriodsProperty {
    /**
    * List of restricted period
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#restricted_period_list CcCampaign#restricted_period_list}
    */
    readonly restrictedPeriodList?: RestrictedPeriodProperty[] | cdktn.IResolvable;
}
export class RestrictedPeriodsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestrictedPeriodsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._restrictedPeriodList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictedPeriodList = this._restrictedPeriodList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestrictedPeriodsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._restrictedPeriodList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._restrictedPeriodList.internalValue = value.restrictedPeriodList;
        }
    }

    // restricted_period_list - computed: true, optional: true, required: false
    private _restrictedPeriodList = new RestrictedPeriodPropertyList(this, "restricted_period_list", false);
    public get restrictedPeriodList() {
        return this._restrictedPeriodList;
    }
    public putRestrictedPeriodList(value: RestrictedPeriodProperty[] | cdktn.IResolvable) {
        this._restrictedPeriodList.internalValue = value;
    }
    public resetRestrictedPeriodList() {
        this._restrictedPeriodList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictedPeriodListInput() {
        return this._restrictedPeriodList.internalValue;
    }
}
export interface TimeWindowProperty {
    /**
    * Open Hours config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#open_hours CcCampaign#open_hours}
    */
    readonly openHours?: OpenHoursProperty;
    /**
    * Restricted period config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#restricted_periods CcCampaign#restricted_periods}
    */
    readonly restrictedPeriods?: RestrictedPeriodsProperty;
}
export class TimeWindowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeWindowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._openHours?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openHours = this._openHours?.internalValue;
        }
        if (this._restrictedPeriods?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictedPeriods = this._restrictedPeriods?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeWindowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._openHours.internalValue = undefined;
            this._restrictedPeriods.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._openHours.internalValue = value.openHours;
            this._restrictedPeriods.internalValue = value.restrictedPeriods;
        }
    }

    // open_hours - computed: true, optional: true, required: false
    private _openHours = new OpenHoursPropertyOutputReference(this, "open_hours");
    public get openHours() {
        return this._openHours;
    }
    public putOpenHours(value: OpenHoursProperty) {
        this._openHours.internalValue = value;
    }
    public resetOpenHours() {
        this._openHours.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openHoursInput() {
        return this._openHours.internalValue;
    }

    // restricted_periods - computed: true, optional: true, required: false
    private _restrictedPeriods = new RestrictedPeriodsPropertyOutputReference(this, "restricted_periods");
    public get restrictedPeriods() {
        return this._restrictedPeriods;
    }
    public putRestrictedPeriods(value: RestrictedPeriodsProperty) {
        this._restrictedPeriods.internalValue = value;
    }
    public resetRestrictedPeriods() {
        this._restrictedPeriods.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictedPeriodsInput() {
        return this._restrictedPeriods.internalValue;
    }
}
export interface LocalTimeZoneConfigProperty {
    /**
    * Time Zone Id in the IANA format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#default_time_zone CcCampaign#default_time_zone}
    */
    readonly defaultTimeZone?: string;
    /**
    * Local TimeZone Detection method list
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#local_time_zone_detection CcCampaign#local_time_zone_detection}
    */
    readonly localTimeZoneDetection?: string[];
    /**
    * Local TimeZone Detection scope
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#local_time_zone_detection_scope CcCampaign#local_time_zone_detection_scope}
    */
    readonly localTimeZoneDetectionScope?: string;
}
export class LocalTimeZoneConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LocalTimeZoneConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultTimeZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultTimeZone = this._defaultTimeZone;
        }
        if (this._localTimeZoneDetection !== undefined) {
            hasAnyValues = true;
            internalValueResult.localTimeZoneDetection = this._localTimeZoneDetection;
        }
        if (this._localTimeZoneDetectionScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.localTimeZoneDetectionScope = this._localTimeZoneDetectionScope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocalTimeZoneConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultTimeZone = undefined;
            this._localTimeZoneDetection = undefined;
            this._localTimeZoneDetectionScope = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultTimeZone = value.defaultTimeZone;
            this._localTimeZoneDetection = value.localTimeZoneDetection;
            this._localTimeZoneDetectionScope = value.localTimeZoneDetectionScope;
        }
    }

    // default_time_zone - computed: true, optional: true, required: false
    private _defaultTimeZone?: string; 
    public get defaultTimeZone() {
        return this.getStringAttribute('default_time_zone');
    }
    public set defaultTimeZone(value: string) {
        this._defaultTimeZone = value;
    }
    public resetDefaultTimeZone() {
        this._defaultTimeZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultTimeZoneInput() {
        return this._defaultTimeZone;
    }

    // local_time_zone_detection - computed: true, optional: true, required: false
    private _localTimeZoneDetection?: string[]; 
    public get localTimeZoneDetection() {
        return this.getListAttribute('local_time_zone_detection');
    }
    public set localTimeZoneDetection(value: string[]) {
        this._localTimeZoneDetection = value;
    }
    public resetLocalTimeZoneDetection() {
        this._localTimeZoneDetection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localTimeZoneDetectionInput() {
        return this._localTimeZoneDetection;
    }

    // local_time_zone_detection_scope - computed: true, optional: true, required: false
    private _localTimeZoneDetectionScope?: string; 
    public get localTimeZoneDetectionScope() {
        return this.getStringAttribute('local_time_zone_detection_scope');
    }
    public set localTimeZoneDetectionScope(value: string) {
        this._localTimeZoneDetectionScope = value;
    }
    public resetLocalTimeZoneDetectionScope() {
        this._localTimeZoneDetectionScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localTimeZoneDetectionScopeInput() {
        return this._localTimeZoneDetectionScope;
    }
}
export interface CommunicationTimeConfigSmsOpenHoursDailyHoursValueProperty {
    /**
    * Time in ISO 8601 format, e.g. T23:11
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#end_time CcCampaign#end_time}
    */
    readonly endTime?: string;
    /**
    * Time in ISO 8601 format, e.g. T23:11
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#start_time CcCampaign#start_time}
    */
    readonly startTime?: string;
}
export class CommunicationTimeConfigSmsOpenHoursDailyHoursValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CommunicationTimeConfigSmsOpenHoursDailyHoursValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigSmsOpenHoursDailyHoursValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._startTime = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string; 
    public get endTime() {
        return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}

export class CommunicationTimeConfigSmsOpenHoursDailyHoursValuePropertyList extends cdktn.ComplexList {
    public internalValue? : CommunicationTimeConfigSmsOpenHoursDailyHoursValueProperty[] | cdktn.IResolvable

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
    public get(index: number): CommunicationTimeConfigSmsOpenHoursDailyHoursValuePropertyOutputReference {
        return new CommunicationTimeConfigSmsOpenHoursDailyHoursValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CommunicationTimeConfigSmsOpenHoursDailyHoursProperty {
    /**
    * Day of week
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#key CcCampaign#key}
    */
    readonly key?: string;
    /**
    * List of time range
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#value CcCampaign#value}
    */
    readonly value?: CommunicationTimeConfigSmsOpenHoursDailyHoursValueProperty[] | cdktn.IResolvable;
}
export class CommunicationTimeConfigSmsOpenHoursDailyHoursPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CommunicationTimeConfigSmsOpenHoursDailyHoursProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigSmsOpenHoursDailyHoursProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value.internalValue = value.value;
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
    private _value = new CommunicationTimeConfigSmsOpenHoursDailyHoursValuePropertyList(this, "value", false);
    public get value() {
        return this._value;
    }
    public putValue(value: CommunicationTimeConfigSmsOpenHoursDailyHoursValueProperty[] | cdktn.IResolvable) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class CommunicationTimeConfigSmsOpenHoursDailyHoursPropertyList extends cdktn.ComplexList {
    public internalValue? : CommunicationTimeConfigSmsOpenHoursDailyHoursProperty[] | cdktn.IResolvable

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
    public get(index: number): CommunicationTimeConfigSmsOpenHoursDailyHoursPropertyOutputReference {
        return new CommunicationTimeConfigSmsOpenHoursDailyHoursPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CommunicationTimeConfigSmsOpenHoursProperty {
    /**
    * Daily Hours map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#daily_hours CcCampaign#daily_hours}
    */
    readonly dailyHours?: CommunicationTimeConfigSmsOpenHoursDailyHoursProperty[] | cdktn.IResolvable;
}
export class CommunicationTimeConfigSmsOpenHoursPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CommunicationTimeConfigSmsOpenHoursProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dailyHours?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dailyHours = this._dailyHours?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigSmsOpenHoursProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dailyHours.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dailyHours.internalValue = value.dailyHours;
        }
    }

    // daily_hours - computed: true, optional: true, required: false
    private _dailyHours = new CommunicationTimeConfigSmsOpenHoursDailyHoursPropertyList(this, "daily_hours", true);
    public get dailyHours() {
        return this._dailyHours;
    }
    public putDailyHours(value: CommunicationTimeConfigSmsOpenHoursDailyHoursProperty[] | cdktn.IResolvable) {
        this._dailyHours.internalValue = value;
    }
    public resetDailyHours() {
        this._dailyHours.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dailyHoursInput() {
        return this._dailyHours.internalValue;
    }
}
export interface CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListProperty {
    /**
    * Date in ISO 8601 format, e.g. 2024-01-01
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#end_date CcCampaign#end_date}
    */
    readonly endDate?: string;
    /**
    * The name of a restricted period
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#name CcCampaign#name}
    */
    readonly name?: string;
    /**
    * Date in ISO 8601 format, e.g. 2024-01-01
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#start_date CcCampaign#start_date}
    */
    readonly startDate?: string;
}
export class CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.endDate = this._endDate;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._startDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.startDate = this._startDate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endDate = undefined;
            this._name = undefined;
            this._startDate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endDate = value.endDate;
            this._name = value.name;
            this._startDate = value.startDate;
        }
    }

    // end_date - computed: true, optional: true, required: false
    private _endDate?: string; 
    public get endDate() {
        return this.getStringAttribute('end_date');
    }
    public set endDate(value: string) {
        this._endDate = value;
    }
    public resetEndDate() {
        this._endDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endDateInput() {
        return this._endDate;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // start_date - computed: true, optional: true, required: false
    private _startDate?: string; 
    public get startDate() {
        return this.getStringAttribute('start_date');
    }
    public set startDate(value: string) {
        this._startDate = value;
    }
    public resetStartDate() {
        this._startDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startDateInput() {
        return this._startDate;
    }
}

export class CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListPropertyList extends cdktn.ComplexList {
    public internalValue? : CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListProperty[] | cdktn.IResolvable

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
    public get(index: number): CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListPropertyOutputReference {
        return new CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CommunicationTimeConfigSmsRestrictedPeriodsProperty {
    /**
    * List of restricted period
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#restricted_period_list CcCampaign#restricted_period_list}
    */
    readonly restrictedPeriodList?: CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListProperty[] | cdktn.IResolvable;
}
export class CommunicationTimeConfigSmsRestrictedPeriodsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CommunicationTimeConfigSmsRestrictedPeriodsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._restrictedPeriodList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictedPeriodList = this._restrictedPeriodList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigSmsRestrictedPeriodsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._restrictedPeriodList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._restrictedPeriodList.internalValue = value.restrictedPeriodList;
        }
    }

    // restricted_period_list - computed: true, optional: true, required: false
    private _restrictedPeriodList = new CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListPropertyList(this, "restricted_period_list", false);
    public get restrictedPeriodList() {
        return this._restrictedPeriodList;
    }
    public putRestrictedPeriodList(value: CommunicationTimeConfigSmsRestrictedPeriodsRestrictedPeriodListProperty[] | cdktn.IResolvable) {
        this._restrictedPeriodList.internalValue = value;
    }
    public resetRestrictedPeriodList() {
        this._restrictedPeriodList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictedPeriodListInput() {
        return this._restrictedPeriodList.internalValue;
    }
}
export interface SmsProperty {
    /**
    * Open Hours config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#open_hours CcCampaign#open_hours}
    */
    readonly openHours?: CommunicationTimeConfigSmsOpenHoursProperty;
    /**
    * Restricted period config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#restricted_periods CcCampaign#restricted_periods}
    */
    readonly restrictedPeriods?: CommunicationTimeConfigSmsRestrictedPeriodsProperty;
}
export class SmsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SmsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._openHours?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openHours = this._openHours?.internalValue;
        }
        if (this._restrictedPeriods?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictedPeriods = this._restrictedPeriods?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SmsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._openHours.internalValue = undefined;
            this._restrictedPeriods.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._openHours.internalValue = value.openHours;
            this._restrictedPeriods.internalValue = value.restrictedPeriods;
        }
    }

    // open_hours - computed: true, optional: true, required: false
    private _openHours = new CommunicationTimeConfigSmsOpenHoursPropertyOutputReference(this, "open_hours");
    public get openHours() {
        return this._openHours;
    }
    public putOpenHours(value: CommunicationTimeConfigSmsOpenHoursProperty) {
        this._openHours.internalValue = value;
    }
    public resetOpenHours() {
        this._openHours.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openHoursInput() {
        return this._openHours.internalValue;
    }

    // restricted_periods - computed: true, optional: true, required: false
    private _restrictedPeriods = new CommunicationTimeConfigSmsRestrictedPeriodsPropertyOutputReference(this, "restricted_periods");
    public get restrictedPeriods() {
        return this._restrictedPeriods;
    }
    public putRestrictedPeriods(value: CommunicationTimeConfigSmsRestrictedPeriodsProperty) {
        this._restrictedPeriods.internalValue = value;
    }
    public resetRestrictedPeriods() {
        this._restrictedPeriods.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictedPeriodsInput() {
        return this._restrictedPeriods.internalValue;
    }
}
export interface CommunicationTimeConfigTelephonyOpenHoursDailyHoursValueProperty {
    /**
    * Time in ISO 8601 format, e.g. T23:11
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#end_time CcCampaign#end_time}
    */
    readonly endTime?: string;
    /**
    * Time in ISO 8601 format, e.g. T23:11
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#start_time CcCampaign#start_time}
    */
    readonly startTime?: string;
}
export class CommunicationTimeConfigTelephonyOpenHoursDailyHoursValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CommunicationTimeConfigTelephonyOpenHoursDailyHoursValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigTelephonyOpenHoursDailyHoursValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._startTime = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string; 
    public get endTime() {
        return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}

export class CommunicationTimeConfigTelephonyOpenHoursDailyHoursValuePropertyList extends cdktn.ComplexList {
    public internalValue? : CommunicationTimeConfigTelephonyOpenHoursDailyHoursValueProperty[] | cdktn.IResolvable

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
    public get(index: number): CommunicationTimeConfigTelephonyOpenHoursDailyHoursValuePropertyOutputReference {
        return new CommunicationTimeConfigTelephonyOpenHoursDailyHoursValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CommunicationTimeConfigTelephonyOpenHoursDailyHoursProperty {
    /**
    * Day of week
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#key CcCampaign#key}
    */
    readonly key?: string;
    /**
    * List of time range
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#value CcCampaign#value}
    */
    readonly value?: CommunicationTimeConfigTelephonyOpenHoursDailyHoursValueProperty[] | cdktn.IResolvable;
}
export class CommunicationTimeConfigTelephonyOpenHoursDailyHoursPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CommunicationTimeConfigTelephonyOpenHoursDailyHoursProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigTelephonyOpenHoursDailyHoursProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value.internalValue = value.value;
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
    private _value = new CommunicationTimeConfigTelephonyOpenHoursDailyHoursValuePropertyList(this, "value", false);
    public get value() {
        return this._value;
    }
    public putValue(value: CommunicationTimeConfigTelephonyOpenHoursDailyHoursValueProperty[] | cdktn.IResolvable) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class CommunicationTimeConfigTelephonyOpenHoursDailyHoursPropertyList extends cdktn.ComplexList {
    public internalValue? : CommunicationTimeConfigTelephonyOpenHoursDailyHoursProperty[] | cdktn.IResolvable

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
    public get(index: number): CommunicationTimeConfigTelephonyOpenHoursDailyHoursPropertyOutputReference {
        return new CommunicationTimeConfigTelephonyOpenHoursDailyHoursPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CommunicationTimeConfigTelephonyOpenHoursProperty {
    /**
    * Daily Hours map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#daily_hours CcCampaign#daily_hours}
    */
    readonly dailyHours?: CommunicationTimeConfigTelephonyOpenHoursDailyHoursProperty[] | cdktn.IResolvable;
}
export class CommunicationTimeConfigTelephonyOpenHoursPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CommunicationTimeConfigTelephonyOpenHoursProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dailyHours?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dailyHours = this._dailyHours?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigTelephonyOpenHoursProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dailyHours.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dailyHours.internalValue = value.dailyHours;
        }
    }

    // daily_hours - computed: true, optional: true, required: false
    private _dailyHours = new CommunicationTimeConfigTelephonyOpenHoursDailyHoursPropertyList(this, "daily_hours", true);
    public get dailyHours() {
        return this._dailyHours;
    }
    public putDailyHours(value: CommunicationTimeConfigTelephonyOpenHoursDailyHoursProperty[] | cdktn.IResolvable) {
        this._dailyHours.internalValue = value;
    }
    public resetDailyHours() {
        this._dailyHours.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dailyHoursInput() {
        return this._dailyHours.internalValue;
    }
}
export interface CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListProperty {
    /**
    * Date in ISO 8601 format, e.g. 2024-01-01
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#end_date CcCampaign#end_date}
    */
    readonly endDate?: string;
    /**
    * The name of a restricted period
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#name CcCampaign#name}
    */
    readonly name?: string;
    /**
    * Date in ISO 8601 format, e.g. 2024-01-01
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#start_date CcCampaign#start_date}
    */
    readonly startDate?: string;
}
export class CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.endDate = this._endDate;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._startDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.startDate = this._startDate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endDate = undefined;
            this._name = undefined;
            this._startDate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endDate = value.endDate;
            this._name = value.name;
            this._startDate = value.startDate;
        }
    }

    // end_date - computed: true, optional: true, required: false
    private _endDate?: string; 
    public get endDate() {
        return this.getStringAttribute('end_date');
    }
    public set endDate(value: string) {
        this._endDate = value;
    }
    public resetEndDate() {
        this._endDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endDateInput() {
        return this._endDate;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // start_date - computed: true, optional: true, required: false
    private _startDate?: string; 
    public get startDate() {
        return this.getStringAttribute('start_date');
    }
    public set startDate(value: string) {
        this._startDate = value;
    }
    public resetStartDate() {
        this._startDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startDateInput() {
        return this._startDate;
    }
}

export class CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListPropertyList extends cdktn.ComplexList {
    public internalValue? : CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListProperty[] | cdktn.IResolvable

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
    public get(index: number): CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListPropertyOutputReference {
        return new CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CommunicationTimeConfigTelephonyRestrictedPeriodsProperty {
    /**
    * List of restricted period
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#restricted_period_list CcCampaign#restricted_period_list}
    */
    readonly restrictedPeriodList?: CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListProperty[] | cdktn.IResolvable;
}
export class CommunicationTimeConfigTelephonyRestrictedPeriodsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CommunicationTimeConfigTelephonyRestrictedPeriodsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._restrictedPeriodList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictedPeriodList = this._restrictedPeriodList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigTelephonyRestrictedPeriodsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._restrictedPeriodList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._restrictedPeriodList.internalValue = value.restrictedPeriodList;
        }
    }

    // restricted_period_list - computed: true, optional: true, required: false
    private _restrictedPeriodList = new CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListPropertyList(this, "restricted_period_list", false);
    public get restrictedPeriodList() {
        return this._restrictedPeriodList;
    }
    public putRestrictedPeriodList(value: CommunicationTimeConfigTelephonyRestrictedPeriodsRestrictedPeriodListProperty[] | cdktn.IResolvable) {
        this._restrictedPeriodList.internalValue = value;
    }
    public resetRestrictedPeriodList() {
        this._restrictedPeriodList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictedPeriodListInput() {
        return this._restrictedPeriodList.internalValue;
    }
}
export interface TelephonyProperty {
    /**
    * Open Hours config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#open_hours CcCampaign#open_hours}
    */
    readonly openHours?: CommunicationTimeConfigTelephonyOpenHoursProperty;
    /**
    * Restricted period config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#restricted_periods CcCampaign#restricted_periods}
    */
    readonly restrictedPeriods?: CommunicationTimeConfigTelephonyRestrictedPeriodsProperty;
}
export class TelephonyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TelephonyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._openHours?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openHours = this._openHours?.internalValue;
        }
        if (this._restrictedPeriods?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictedPeriods = this._restrictedPeriods?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TelephonyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._openHours.internalValue = undefined;
            this._restrictedPeriods.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._openHours.internalValue = value.openHours;
            this._restrictedPeriods.internalValue = value.restrictedPeriods;
        }
    }

    // open_hours - computed: true, optional: true, required: false
    private _openHours = new CommunicationTimeConfigTelephonyOpenHoursPropertyOutputReference(this, "open_hours");
    public get openHours() {
        return this._openHours;
    }
    public putOpenHours(value: CommunicationTimeConfigTelephonyOpenHoursProperty) {
        this._openHours.internalValue = value;
    }
    public resetOpenHours() {
        this._openHours.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openHoursInput() {
        return this._openHours.internalValue;
    }

    // restricted_periods - computed: true, optional: true, required: false
    private _restrictedPeriods = new CommunicationTimeConfigTelephonyRestrictedPeriodsPropertyOutputReference(this, "restricted_periods");
    public get restrictedPeriods() {
        return this._restrictedPeriods;
    }
    public putRestrictedPeriods(value: CommunicationTimeConfigTelephonyRestrictedPeriodsProperty) {
        this._restrictedPeriods.internalValue = value;
    }
    public resetRestrictedPeriods() {
        this._restrictedPeriods.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictedPeriodsInput() {
        return this._restrictedPeriods.internalValue;
    }
}
export interface CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueProperty {
    /**
    * Time in ISO 8601 format, e.g. T23:11
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#end_time CcCampaign#end_time}
    */
    readonly endTime?: string;
    /**
    * Time in ISO 8601 format, e.g. T23:11
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#start_time CcCampaign#start_time}
    */
    readonly startTime?: string;
}
export class CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._startTime = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string; 
    public get endTime() {
        return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}

export class CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValuePropertyList extends cdktn.ComplexList {
    public internalValue? : CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueProperty[] | cdktn.IResolvable

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
    public get(index: number): CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValuePropertyOutputReference {
        return new CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CommunicationTimeConfigWhatsAppOpenHoursDailyHoursProperty {
    /**
    * Day of week
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#key CcCampaign#key}
    */
    readonly key?: string;
    /**
    * List of time range
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#value CcCampaign#value}
    */
    readonly value?: CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueProperty[] | cdktn.IResolvable;
}
export class CommunicationTimeConfigWhatsAppOpenHoursDailyHoursPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CommunicationTimeConfigWhatsAppOpenHoursDailyHoursProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigWhatsAppOpenHoursDailyHoursProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value.internalValue = value.value;
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
    private _value = new CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValuePropertyList(this, "value", false);
    public get value() {
        return this._value;
    }
    public putValue(value: CommunicationTimeConfigWhatsAppOpenHoursDailyHoursValueProperty[] | cdktn.IResolvable) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class CommunicationTimeConfigWhatsAppOpenHoursDailyHoursPropertyList extends cdktn.ComplexList {
    public internalValue? : CommunicationTimeConfigWhatsAppOpenHoursDailyHoursProperty[] | cdktn.IResolvable

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
    public get(index: number): CommunicationTimeConfigWhatsAppOpenHoursDailyHoursPropertyOutputReference {
        return new CommunicationTimeConfigWhatsAppOpenHoursDailyHoursPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CommunicationTimeConfigWhatsAppOpenHoursProperty {
    /**
    * Daily Hours map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#daily_hours CcCampaign#daily_hours}
    */
    readonly dailyHours?: CommunicationTimeConfigWhatsAppOpenHoursDailyHoursProperty[] | cdktn.IResolvable;
}
export class CommunicationTimeConfigWhatsAppOpenHoursPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CommunicationTimeConfigWhatsAppOpenHoursProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dailyHours?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dailyHours = this._dailyHours?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigWhatsAppOpenHoursProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dailyHours.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dailyHours.internalValue = value.dailyHours;
        }
    }

    // daily_hours - computed: true, optional: true, required: false
    private _dailyHours = new CommunicationTimeConfigWhatsAppOpenHoursDailyHoursPropertyList(this, "daily_hours", true);
    public get dailyHours() {
        return this._dailyHours;
    }
    public putDailyHours(value: CommunicationTimeConfigWhatsAppOpenHoursDailyHoursProperty[] | cdktn.IResolvable) {
        this._dailyHours.internalValue = value;
    }
    public resetDailyHours() {
        this._dailyHours.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dailyHoursInput() {
        return this._dailyHours.internalValue;
    }
}
export interface CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListProperty {
    /**
    * Date in ISO 8601 format, e.g. 2024-01-01
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#end_date CcCampaign#end_date}
    */
    readonly endDate?: string;
    /**
    * The name of a restricted period
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#name CcCampaign#name}
    */
    readonly name?: string;
    /**
    * Date in ISO 8601 format, e.g. 2024-01-01
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#start_date CcCampaign#start_date}
    */
    readonly startDate?: string;
}
export class CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.endDate = this._endDate;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._startDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.startDate = this._startDate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endDate = undefined;
            this._name = undefined;
            this._startDate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endDate = value.endDate;
            this._name = value.name;
            this._startDate = value.startDate;
        }
    }

    // end_date - computed: true, optional: true, required: false
    private _endDate?: string; 
    public get endDate() {
        return this.getStringAttribute('end_date');
    }
    public set endDate(value: string) {
        this._endDate = value;
    }
    public resetEndDate() {
        this._endDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endDateInput() {
        return this._endDate;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // start_date - computed: true, optional: true, required: false
    private _startDate?: string; 
    public get startDate() {
        return this.getStringAttribute('start_date');
    }
    public set startDate(value: string) {
        this._startDate = value;
    }
    public resetStartDate() {
        this._startDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startDateInput() {
        return this._startDate;
    }
}

export class CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListPropertyList extends cdktn.ComplexList {
    public internalValue? : CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListProperty[] | cdktn.IResolvable

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
    public get(index: number): CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListPropertyOutputReference {
        return new CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CommunicationTimeConfigWhatsAppRestrictedPeriodsProperty {
    /**
    * List of restricted period
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#restricted_period_list CcCampaign#restricted_period_list}
    */
    readonly restrictedPeriodList?: CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListProperty[] | cdktn.IResolvable;
}
export class CommunicationTimeConfigWhatsAppRestrictedPeriodsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CommunicationTimeConfigWhatsAppRestrictedPeriodsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._restrictedPeriodList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictedPeriodList = this._restrictedPeriodList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigWhatsAppRestrictedPeriodsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._restrictedPeriodList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._restrictedPeriodList.internalValue = value.restrictedPeriodList;
        }
    }

    // restricted_period_list - computed: true, optional: true, required: false
    private _restrictedPeriodList = new CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListPropertyList(this, "restricted_period_list", false);
    public get restrictedPeriodList() {
        return this._restrictedPeriodList;
    }
    public putRestrictedPeriodList(value: CommunicationTimeConfigWhatsAppRestrictedPeriodsRestrictedPeriodListProperty[] | cdktn.IResolvable) {
        this._restrictedPeriodList.internalValue = value;
    }
    public resetRestrictedPeriodList() {
        this._restrictedPeriodList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictedPeriodListInput() {
        return this._restrictedPeriodList.internalValue;
    }
}
export interface WhatsAppProperty {
    /**
    * Open Hours config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#open_hours CcCampaign#open_hours}
    */
    readonly openHours?: CommunicationTimeConfigWhatsAppOpenHoursProperty;
    /**
    * Restricted period config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#restricted_periods CcCampaign#restricted_periods}
    */
    readonly restrictedPeriods?: CommunicationTimeConfigWhatsAppRestrictedPeriodsProperty;
}
export class WhatsAppPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WhatsAppProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._openHours?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openHours = this._openHours?.internalValue;
        }
        if (this._restrictedPeriods?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictedPeriods = this._restrictedPeriods?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WhatsAppProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._openHours.internalValue = undefined;
            this._restrictedPeriods.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._openHours.internalValue = value.openHours;
            this._restrictedPeriods.internalValue = value.restrictedPeriods;
        }
    }

    // open_hours - computed: true, optional: true, required: false
    private _openHours = new CommunicationTimeConfigWhatsAppOpenHoursPropertyOutputReference(this, "open_hours");
    public get openHours() {
        return this._openHours;
    }
    public putOpenHours(value: CommunicationTimeConfigWhatsAppOpenHoursProperty) {
        this._openHours.internalValue = value;
    }
    public resetOpenHours() {
        this._openHours.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openHoursInput() {
        return this._openHours.internalValue;
    }

    // restricted_periods - computed: true, optional: true, required: false
    private _restrictedPeriods = new CommunicationTimeConfigWhatsAppRestrictedPeriodsPropertyOutputReference(this, "restricted_periods");
    public get restrictedPeriods() {
        return this._restrictedPeriods;
    }
    public putRestrictedPeriods(value: CommunicationTimeConfigWhatsAppRestrictedPeriodsProperty) {
        this._restrictedPeriods.internalValue = value;
    }
    public resetRestrictedPeriods() {
        this._restrictedPeriods.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictedPeriodsInput() {
        return this._restrictedPeriods.internalValue;
    }
}
export interface CommunicationTimeConfigProperty {
    /**
    * Time window config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#email CcCampaign#email}
    */
    readonly email?: TimeWindowProperty;
    /**
    * Local time zone config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#local_time_zone_config CcCampaign#local_time_zone_config}
    */
    readonly localTimeZoneConfig?: LocalTimeZoneConfigProperty;
    /**
    * Time window config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#sms CcCampaign#sms}
    */
    readonly sms?: SmsProperty;
    /**
    * Time window config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#telephony CcCampaign#telephony}
    */
    readonly telephony?: TelephonyProperty;
    /**
    * Time window config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#whats_app CcCampaign#whats_app}
    */
    readonly whatsApp?: WhatsAppProperty;
}
export class CommunicationTimeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CommunicationTimeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._email?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email?.internalValue;
        }
        if (this._localTimeZoneConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.localTimeZoneConfig = this._localTimeZoneConfig?.internalValue;
        }
        if (this._sms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sms = this._sms?.internalValue;
        }
        if (this._telephony?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.telephony = this._telephony?.internalValue;
        }
        if (this._whatsApp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.whatsApp = this._whatsApp?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CommunicationTimeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email.internalValue = undefined;
            this._localTimeZoneConfig.internalValue = undefined;
            this._sms.internalValue = undefined;
            this._telephony.internalValue = undefined;
            this._whatsApp.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email.internalValue = value.email;
            this._localTimeZoneConfig.internalValue = value.localTimeZoneConfig;
            this._sms.internalValue = value.sms;
            this._telephony.internalValue = value.telephony;
            this._whatsApp.internalValue = value.whatsApp;
        }
    }

    // email - computed: true, optional: true, required: false
    private _email = new TimeWindowPropertyOutputReference(this, "email");
    public get email() {
        return this._email;
    }
    public putEmail(value: TimeWindowProperty) {
        this._email.internalValue = value;
    }
    public resetEmail() {
        this._email.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
        return this._email.internalValue;
    }

    // local_time_zone_config - computed: true, optional: true, required: false
    private _localTimeZoneConfig = new LocalTimeZoneConfigPropertyOutputReference(this, "local_time_zone_config");
    public get localTimeZoneConfig() {
        return this._localTimeZoneConfig;
    }
    public putLocalTimeZoneConfig(value: LocalTimeZoneConfigProperty) {
        this._localTimeZoneConfig.internalValue = value;
    }
    public resetLocalTimeZoneConfig() {
        this._localTimeZoneConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localTimeZoneConfigInput() {
        return this._localTimeZoneConfig.internalValue;
    }

    // sms - computed: true, optional: true, required: false
    private _sms = new SmsPropertyOutputReference(this, "sms");
    public get sms() {
        return this._sms;
    }
    public putSms(value: SmsProperty) {
        this._sms.internalValue = value;
    }
    public resetSms() {
        this._sms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smsInput() {
        return this._sms.internalValue;
    }

    // telephony - computed: true, optional: true, required: false
    private _telephony = new TelephonyPropertyOutputReference(this, "telephony");
    public get telephony() {
        return this._telephony;
    }
    public putTelephony(value: TelephonyProperty) {
        this._telephony.internalValue = value;
    }
    public resetTelephony() {
        this._telephony.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get telephonyInput() {
        return this._telephony.internalValue;
    }

    // whats_app - computed: true, optional: true, required: false
    private _whatsApp = new WhatsAppPropertyOutputReference(this, "whats_app");
    public get whatsApp() {
        return this._whatsApp;
    }
    public putWhatsApp(value: WhatsAppProperty) {
        this._whatsApp.internalValue = value;
    }
    public resetWhatsApp() {
        this._whatsApp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get whatsAppInput() {
        return this._whatsApp.internalValue;
    }
}
export interface EntryLimitsConfigProperty {
    /**
    * Maximum number of entries per participant. 0 indicates unlimited entries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#max_entry_count CcCampaign#max_entry_count}
    */
    readonly maxEntryCount?: number;
    /**
    * Minimum time interval between entries for the same participant in ISO 8601 duration format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#min_entry_interval CcCampaign#min_entry_interval}
    */
    readonly minEntryInterval?: string;
}
export class EntryLimitsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EntryLimitsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxEntryCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxEntryCount = this._maxEntryCount;
        }
        if (this._minEntryInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.minEntryInterval = this._minEntryInterval;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EntryLimitsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxEntryCount = undefined;
            this._minEntryInterval = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxEntryCount = value.maxEntryCount;
            this._minEntryInterval = value.minEntryInterval;
        }
    }

    // max_entry_count - computed: true, optional: true, required: false
    private _maxEntryCount?: number; 
    public get maxEntryCount() {
        return this.getNumberAttribute('max_entry_count');
    }
    public set maxEntryCount(value: number) {
        this._maxEntryCount = value;
    }
    public resetMaxEntryCount() {
        this._maxEntryCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxEntryCountInput() {
        return this._maxEntryCount;
    }

    // min_entry_interval - computed: true, optional: true, required: false
    private _minEntryInterval?: string; 
    public get minEntryInterval() {
        return this.getStringAttribute('min_entry_interval');
    }
    public set minEntryInterval(value: string) {
        this._minEntryInterval = value;
    }
    public resetMinEntryInterval() {
        this._minEntryInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minEntryIntervalInput() {
        return this._minEntryInterval;
    }
}
export interface ScheduleProperty {
    /**
    * Timestamp with no UTC offset or timezone
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#end_time CcCampaign#end_time}
    */
    readonly endTime?: string;
    /**
    * Time duration in ISO 8601 format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#refresh_frequency CcCampaign#refresh_frequency}
    */
    readonly refreshFrequency?: string;
    /**
    * Timestamp with no UTC offset or timezone
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#start_time CcCampaign#start_time}
    */
    readonly startTime?: string;
}
export class SchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._refreshFrequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.refreshFrequency = this._refreshFrequency;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._refreshFrequency = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._refreshFrequency = value.refreshFrequency;
            this._startTime = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string; 
    public get endTime() {
        return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // refresh_frequency - computed: true, optional: true, required: false
    private _refreshFrequency?: string; 
    public get refreshFrequency() {
        return this.getStringAttribute('refresh_frequency');
    }
    public set refreshFrequency(value: string) {
        this._refreshFrequency = value;
    }
    public resetRefreshFrequency() {
        this._refreshFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get refreshFrequencyInput() {
        return this._refreshFrequency;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}
export interface EventTriggerProperty {
    /**
    * Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#customer_profiles_domain_arn CcCampaign#customer_profiles_domain_arn}
    */
    readonly customerProfilesDomainArn?: string;
}
export class EventTriggerPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventTriggerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customerProfilesDomainArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerProfilesDomainArn = this._customerProfilesDomainArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventTriggerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customerProfilesDomainArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customerProfilesDomainArn = value.customerProfilesDomainArn;
        }
    }

    // customer_profiles_domain_arn - computed: true, optional: true, required: false
    private _customerProfilesDomainArn?: string; 
    public get customerProfilesDomainArn() {
        return this.getStringAttribute('customer_profiles_domain_arn');
    }
    public set customerProfilesDomainArn(value: string) {
        this._customerProfilesDomainArn = value;
    }
    public resetCustomerProfilesDomainArn() {
        this._customerProfilesDomainArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerProfilesDomainArnInput() {
        return this._customerProfilesDomainArn;
    }
}
export interface SourceProperty {
    /**
    * Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#customer_profiles_segment_arn CcCampaign#customer_profiles_segment_arn}
    */
    readonly customerProfilesSegmentArn?: string;
    /**
    * The event trigger of the campaign
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#event_trigger CcCampaign#event_trigger}
    */
    readonly eventTrigger?: EventTriggerProperty;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customerProfilesSegmentArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerProfilesSegmentArn = this._customerProfilesSegmentArn;
        }
        if (this._eventTrigger?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventTrigger = this._eventTrigger?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customerProfilesSegmentArn = undefined;
            this._eventTrigger.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customerProfilesSegmentArn = value.customerProfilesSegmentArn;
            this._eventTrigger.internalValue = value.eventTrigger;
        }
    }

    // customer_profiles_segment_arn - computed: true, optional: true, required: false
    private _customerProfilesSegmentArn?: string; 
    public get customerProfilesSegmentArn() {
        return this.getStringAttribute('customer_profiles_segment_arn');
    }
    public set customerProfilesSegmentArn(value: string) {
        this._customerProfilesSegmentArn = value;
    }
    public resetCustomerProfilesSegmentArn() {
        this._customerProfilesSegmentArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerProfilesSegmentArnInput() {
        return this._customerProfilesSegmentArn;
    }

    // event_trigger - computed: true, optional: true, required: false
    private _eventTrigger = new EventTriggerPropertyOutputReference(this, "event_trigger");
    public get eventTrigger() {
        return this._eventTrigger;
    }
    public putEventTrigger(value: EventTriggerProperty) {
        this._eventTrigger.internalValue = value;
    }
    public resetEventTrigger() {
        this._eventTrigger.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTriggerInput() {
        return this._eventTrigger.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#key CcCampaign#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connectcampaignsv2_campaign#value CcCampaign#value}
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
