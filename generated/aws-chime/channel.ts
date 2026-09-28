// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChannelProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the AppInstance that contains the channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#app_instance_arn CcChannel#app_instance_arn}
    */
    readonly appInstanceArn: string;
    /**
    * The ID of the channel. When omitted, the service generates a UUID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#channel_id CcChannel#channel_id}
    */
    readonly channelId?: string;
    /**
    * The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel. Whichever of the two creates a channel automatically becomes one of its moderators, so the same ARN can subsequently read, update and delete the channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#chime_bearer CcChannel#chime_bearer}
    */
    readonly chimeBearer: string;
    /**
    * The attributes required to configure and create an elastic channel. An elastic channel must use RESTRICTED mode, cannot be created with MemberArns, and is available only in some regions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#elastic_channel_configuration CcChannel#elastic_channel_configuration}
    */
    readonly elasticChannelConfiguration?: CcChannel.ElasticChannelConfigurationProperty;
    /**
    * Settings that control the interval after which the channel is automatically deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_settings CcChannel#expiration_settings}
    */
    readonly expirationSettings?: CcChannel.ExpirationSettingsProperty;
    /**
    * The ARNs of the AppInstanceUsers to add to the channel as members when it is created. Cannot be combined with ElasticChannelConfiguration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#member_arns CcChannel#member_arns}
    */
    readonly memberArns?: string[];
    /**
    * The metadata of the channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#metadata CcChannel#metadata}
    */
    readonly metadata?: string;
    /**
    * The channel mode. In an UNRESTRICTED channel, members can add themselves and other members; in a RESTRICTED channel, only administrators and moderators can add members. An elastic channel must be RESTRICTED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#mode CcChannel#mode}
    */
    readonly mode?: string;
    /**
    * The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#moderator_arns CcChannel#moderator_arns}
    */
    readonly moderatorArns?: string[];
    /**
    * The name of the channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#name CcChannel#name}
    */
    readonly name: string;
    /**
    * The channel's privacy level. A PUBLIC channel is discoverable by anyone in the AppInstance; a PRIVATE channel is not. Privacy cannot be changed after creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#privacy CcChannel#privacy}
    */
    readonly privacy?: string;
    /**
    * The tags for the channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#tags CcChannel#tags}
    */
    readonly tags?: CcChannel.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel awscc_chime_channel}
*/
export class CcChannel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_chime_channel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChannel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChannel to import
    * @param importFromId The id of the existing CcChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChannel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_chime_channel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel awscc_chime_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChannelProps
    */
    public constructor(scope: Construct, id: string, config: CcChannelProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_chime_channel',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.103.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._appInstanceArn = config.appInstanceArn;
        this._channelId = config.channelId;
        this._chimeBearer = config.chimeBearer;
        this._elasticChannelConfiguration.internalValue = config.elasticChannelConfiguration;
        this._expirationSettings.internalValue = config.expirationSettings;
        this._memberArns = config.memberArns;
        this._metadata = config.metadata;
        this._mode = config.mode;
        this._moderatorArns = config.moderatorArns;
        this._name = config.name;
        this._privacy = config.privacy;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_instance_arn - computed: false, optional: false, required: true
    private _appInstanceArn?: string; 
    public get appInstanceArn() {
        return this.getStringAttribute('app_instance_arn');
    }
    public set appInstanceArn(value: string) {
        this._appInstanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appInstanceArnInput() {
        return this._appInstanceArn;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // channel_flow_arn - computed: true, optional: false, required: false
    public get channelFlowArn() {
        return this.getStringAttribute('channel_flow_arn');
    }

    // channel_id - computed: true, optional: true, required: false
    private _channelId?: string; 
    public get channelId() {
        return this.getStringAttribute('channel_id');
    }
    public set channelId(value: string) {
        this._channelId = value;
    }
    public resetChannelId() {
        this._channelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelIdInput() {
        return this._channelId;
    }

    // chime_bearer - computed: false, optional: false, required: true
    private _chimeBearer?: string; 
    public get chimeBearer() {
        return this.getStringAttribute('chime_bearer');
    }
    public set chimeBearer(value: string) {
        this._chimeBearer = value;
    }
    // Temporarily expose input value. Use with caution.
    public get chimeBearerInput() {
        return this._chimeBearer;
    }

    // created_by - computed: true, optional: false, required: false
    private _createdBy = new CcChannel.CreatedByPropertyOutputReference(this, "created_by");
    public get createdBy() {
        return this._createdBy;
    }

    // created_timestamp - computed: true, optional: false, required: false
    public get createdTimestamp() {
        return this.getStringAttribute('created_timestamp');
    }

    // elastic_channel_configuration - computed: true, optional: true, required: false
    private _elasticChannelConfiguration = new CcChannel.ElasticChannelConfigurationPropertyOutputReference(this, "elastic_channel_configuration");
    public get elasticChannelConfiguration() {
        return this._elasticChannelConfiguration;
    }
    public putElasticChannelConfiguration(value: CcChannel.ElasticChannelConfigurationProperty) {
        this._elasticChannelConfiguration.internalValue = value;
    }
    public resetElasticChannelConfiguration() {
        this._elasticChannelConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticChannelConfigurationInput() {
        return this._elasticChannelConfiguration.internalValue;
    }

    // expiration_settings - computed: true, optional: true, required: false
    private _expirationSettings = new CcChannel.ExpirationSettingsPropertyOutputReference(this, "expiration_settings");
    public get expirationSettings() {
        return this._expirationSettings;
    }
    public putExpirationSettings(value: CcChannel.ExpirationSettingsProperty) {
        this._expirationSettings.internalValue = value;
    }
    public resetExpirationSettings() {
        this._expirationSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expirationSettingsInput() {
        return this._expirationSettings.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_message_timestamp - computed: true, optional: false, required: false
    public get lastMessageTimestamp() {
        return this.getStringAttribute('last_message_timestamp');
    }

    // last_updated_timestamp - computed: true, optional: false, required: false
    public get lastUpdatedTimestamp() {
        return this.getStringAttribute('last_updated_timestamp');
    }

    // member_arns - computed: true, optional: true, required: false
    private _memberArns?: string[]; 
    public get memberArns() {
        return this.getListAttribute('member_arns');
    }
    public set memberArns(value: string[]) {
        this._memberArns = value;
    }
    public resetMemberArns() {
        this._memberArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memberArnsInput() {
        return this._memberArns;
    }

    // metadata - computed: true, optional: true, required: false
    private _metadata?: string; 
    public get metadata() {
        return this.getStringAttribute('metadata');
    }
    public set metadata(value: string) {
        this._metadata = value;
    }
    public resetMetadata() {
        this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
        return this._metadata;
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }

    // moderator_arns - computed: true, optional: true, required: false
    private _moderatorArns?: string[]; 
    public get moderatorArns() {
        return this.getListAttribute('moderator_arns');
    }
    public set moderatorArns(value: string[]) {
        this._moderatorArns = value;
    }
    public resetModeratorArns() {
        this._moderatorArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get moderatorArnsInput() {
        return this._moderatorArns;
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

    // privacy - computed: true, optional: true, required: false
    private _privacy?: string; 
    public get privacy() {
        return this.getStringAttribute('privacy');
    }
    public set privacy(value: string) {
        this._privacy = value;
    }
    public resetPrivacy() {
        this._privacy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privacyInput() {
        return this._privacy;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcChannel.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcChannel.TagsProperty[] | cdktn.IResolvable) {
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
            app_instance_arn: cdktn.stringToTerraform(this._appInstanceArn),
            channel_id: cdktn.stringToTerraform(this._channelId),
            chime_bearer: cdktn.stringToTerraform(this._chimeBearer),
            elastic_channel_configuration: ccChannelElasticChannelConfigurationPropertyToTerraform(this._elasticChannelConfiguration.internalValue),
            expiration_settings: ccChannelExpirationSettingsPropertyToTerraform(this._expirationSettings.internalValue),
            member_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._memberArns),
            metadata: cdktn.stringToTerraform(this._metadata),
            mode: cdktn.stringToTerraform(this._mode),
            moderator_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._moderatorArns),
            name: cdktn.stringToTerraform(this._name),
            privacy: cdktn.stringToTerraform(this._privacy),
            tags: cdktn.listMapper(ccChannelTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app_instance_arn: {
                value: cdktn.stringToHclTerraform(this._appInstanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            channel_id: {
                value: cdktn.stringToHclTerraform(this._channelId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            chime_bearer: {
                value: cdktn.stringToHclTerraform(this._chimeBearer),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            elastic_channel_configuration: {
                value: ccChannelElasticChannelConfigurationPropertyToHclTerraform(this._elasticChannelConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.ElasticChannelConfigurationProperty",
            },
            expiration_settings: {
                value: ccChannelExpirationSettingsPropertyToHclTerraform(this._expirationSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.ExpirationSettingsProperty",
            },
            member_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._memberArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            metadata: {
                value: cdktn.stringToHclTerraform(this._metadata),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mode: {
                value: cdktn.stringToHclTerraform(this._mode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            moderator_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._moderatorArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            privacy: {
                value: cdktn.stringToHclTerraform(this._privacy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccChannelTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcChannel.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccChannelCreatedByPropertyToTerraform(struct?: CcChannel.CreatedByProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccChannelCreatedByPropertyToHclTerraform(struct?: CcChannel.CreatedByProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccChannelElasticChannelConfigurationPropertyToTerraform(struct?: CcChannel.ElasticChannelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_sub_channels: cdktn.numberToTerraform(struct!.maximumSubChannels),
        minimum_membership_percentage: cdktn.numberToTerraform(struct!.minimumMembershipPercentage),
        target_memberships_per_sub_channel: cdktn.numberToTerraform(struct!.targetMembershipsPerSubChannel),
    }
}


export function ccChannelElasticChannelConfigurationPropertyToHclTerraform(struct?: CcChannel.ElasticChannelConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_sub_channels: {
            value: cdktn.numberToHclTerraform(struct!.maximumSubChannels),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum_membership_percentage: {
            value: cdktn.numberToHclTerraform(struct!.minimumMembershipPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_memberships_per_sub_channel: {
            value: cdktn.numberToHclTerraform(struct!.targetMembershipsPerSubChannel),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelExpirationSettingsPropertyToTerraform(struct?: CcChannel.ExpirationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expiration_criterion: cdktn.stringToTerraform(struct!.expirationCriterion),
        expiration_days: cdktn.numberToTerraform(struct!.expirationDays),
    }
}


export function ccChannelExpirationSettingsPropertyToHclTerraform(struct?: CcChannel.ExpirationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expiration_criterion: {
            value: cdktn.stringToHclTerraform(struct!.expirationCriterion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expiration_days: {
            value: cdktn.numberToHclTerraform(struct!.expirationDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelTagsPropertyToTerraform(struct?: CcChannel.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccChannelTagsPropertyToHclTerraform(struct?: CcChannel.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcChannel {
export interface CreatedByProperty {
}
export class CreatedByPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreatedByProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreatedByProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }
}
export interface ElasticChannelConfigurationProperty {
    /**
    * The maximum number of SubChannels allowed in the elastic channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#maximum_sub_channels CcChannel#maximum_sub_channels}
    */
    readonly maximumSubChannels?: number;
    /**
    * The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#minimum_membership_percentage CcChannel#minimum_membership_percentage}
    */
    readonly minimumMembershipPercentage?: number;
    /**
    * The maximum number of members allowed in a SubChannel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#target_memberships_per_sub_channel CcChannel#target_memberships_per_sub_channel}
    */
    readonly targetMembershipsPerSubChannel?: number;
}
export class ElasticChannelConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ElasticChannelConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumSubChannels !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumSubChannels = this._maximumSubChannels;
        }
        if (this._minimumMembershipPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumMembershipPercentage = this._minimumMembershipPercentage;
        }
        if (this._targetMembershipsPerSubChannel !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetMembershipsPerSubChannel = this._targetMembershipsPerSubChannel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElasticChannelConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumSubChannels = undefined;
            this._minimumMembershipPercentage = undefined;
            this._targetMembershipsPerSubChannel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumSubChannels = value.maximumSubChannels;
            this._minimumMembershipPercentage = value.minimumMembershipPercentage;
            this._targetMembershipsPerSubChannel = value.targetMembershipsPerSubChannel;
        }
    }

    // maximum_sub_channels - computed: true, optional: true, required: false
    private _maximumSubChannels?: number; 
    public get maximumSubChannels() {
        return this.getNumberAttribute('maximum_sub_channels');
    }
    public set maximumSubChannels(value: number) {
        this._maximumSubChannels = value;
    }
    public resetMaximumSubChannels() {
        this._maximumSubChannels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumSubChannelsInput() {
        return this._maximumSubChannels;
    }

    // minimum_membership_percentage - computed: true, optional: true, required: false
    private _minimumMembershipPercentage?: number; 
    public get minimumMembershipPercentage() {
        return this.getNumberAttribute('minimum_membership_percentage');
    }
    public set minimumMembershipPercentage(value: number) {
        this._minimumMembershipPercentage = value;
    }
    public resetMinimumMembershipPercentage() {
        this._minimumMembershipPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumMembershipPercentageInput() {
        return this._minimumMembershipPercentage;
    }

    // target_memberships_per_sub_channel - computed: true, optional: true, required: false
    private _targetMembershipsPerSubChannel?: number; 
    public get targetMembershipsPerSubChannel() {
        return this.getNumberAttribute('target_memberships_per_sub_channel');
    }
    public set targetMembershipsPerSubChannel(value: number) {
        this._targetMembershipsPerSubChannel = value;
    }
    public resetTargetMembershipsPerSubChannel() {
        this._targetMembershipsPerSubChannel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetMembershipsPerSubChannelInput() {
        return this._targetMembershipsPerSubChannel;
    }
}
export interface ExpirationSettingsProperty {
    /**
    * The condition the expiration period is measured from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_criterion CcChannel#expiration_criterion}
    */
    readonly expirationCriterion?: string;
    /**
    * The period in days after which the system automatically deletes the channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_days CcChannel#expiration_days}
    */
    readonly expirationDays?: number;
}
export class ExpirationSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExpirationSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expirationCriterion !== undefined) {
            hasAnyValues = true;
            internalValueResult.expirationCriterion = this._expirationCriterion;
        }
        if (this._expirationDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.expirationDays = this._expirationDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExpirationSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expirationCriterion = undefined;
            this._expirationDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expirationCriterion = value.expirationCriterion;
            this._expirationDays = value.expirationDays;
        }
    }

    // expiration_criterion - computed: true, optional: true, required: false
    private _expirationCriterion?: string; 
    public get expirationCriterion() {
        return this.getStringAttribute('expiration_criterion');
    }
    public set expirationCriterion(value: string) {
        this._expirationCriterion = value;
    }
    public resetExpirationCriterion() {
        this._expirationCriterion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expirationCriterionInput() {
        return this._expirationCriterion;
    }

    // expiration_days - computed: true, optional: true, required: false
    private _expirationDays?: number; 
    public get expirationDays() {
        return this.getNumberAttribute('expiration_days');
    }
    public set expirationDays(value: number) {
        this._expirationDays = value;
    }
    public resetExpirationDays() {
        this._expirationDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expirationDaysInput() {
        return this._expirationDays;
    }
}
export interface TagsProperty {
    /**
    * The key in a tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#key CcChannel#key}
    */
    readonly key?: string;
    /**
    * The value in a tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#value CcChannel#value}
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
