// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * The attributes for the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#attributes CcInstance#attributes}
    */
    readonly attributes: CcInstance.AttributesProperty;
    /**
    * Existing directoryId user wants to map to the new Connect instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#directory_id CcInstance#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Specifies the type of directory integration for new instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#identity_management_type CcInstance#identity_management_type}
    */
    readonly identityManagementType: string;
    /**
    * Alias of the new directory created as part of new instance creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#instance_alias CcInstance#instance_alias}
    */
    readonly instanceAlias?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#tags CcInstance#tags}
    */
    readonly tags?: CcInstance.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance awscc_connect_instance}
*/
export class CcInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInstance to import
    * @param importFromId The id of the existing CcInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance awscc_connect_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInstanceProps
    */
    public constructor(scope: Construct, id: string, config: CcInstanceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_instance',
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
        this._attributes.internalValue = config.attributes;
        this._directoryId = config.directoryId;
        this._identityManagementType = config.identityManagementType;
        this._instanceAlias = config.instanceAlias;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // attributes - computed: false, optional: false, required: true
    private _attributes = new CcInstance.AttributesPropertyOutputReference(this, "attributes");
    public get attributes() {
        return this._attributes;
    }
    public putAttributes(value: CcInstance.AttributesProperty) {
        this._attributes.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes.internalValue;
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // directory_id - computed: true, optional: true, required: false
    private _directoryId?: string; 
    public get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
        this._directoryId = value;
    }
    public resetDirectoryId() {
        this._directoryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
        return this._directoryId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_management_type - computed: false, optional: false, required: true
    private _identityManagementType?: string; 
    public get identityManagementType() {
        return this.getStringAttribute('identity_management_type');
    }
    public set identityManagementType(value: string) {
        this._identityManagementType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityManagementTypeInput() {
        return this._identityManagementType;
    }

    // instance_alias - computed: true, optional: true, required: false
    private _instanceAlias?: string; 
    public get instanceAlias() {
        return this.getStringAttribute('instance_alias');
    }
    public set instanceAlias(value: string) {
        this._instanceAlias = value;
    }
    public resetInstanceAlias() {
        this._instanceAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceAliasInput() {
        return this._instanceAlias;
    }

    // instance_id - computed: true, optional: false, required: false
    public get instanceId() {
        return this.getStringAttribute('instance_id');
    }

    // instance_status - computed: true, optional: false, required: false
    public get instanceStatus() {
        return this.getStringAttribute('instance_status');
    }

    // service_role - computed: true, optional: false, required: false
    public get serviceRole() {
        return this.getStringAttribute('service_role');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInstance.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInstance.TagProperty[] | cdktn.IResolvable) {
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
            attributes: ccInstanceAttributesPropertyToTerraform(this._attributes.internalValue),
            directory_id: cdktn.stringToTerraform(this._directoryId),
            identity_management_type: cdktn.stringToTerraform(this._identityManagementType),
            instance_alias: cdktn.stringToTerraform(this._instanceAlias),
            tags: cdktn.listMapper(ccInstanceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            attributes: {
                value: ccInstanceAttributesPropertyToHclTerraform(this._attributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.AttributesProperty",
            },
            directory_id: {
                value: cdktn.stringToHclTerraform(this._directoryId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_management_type: {
                value: cdktn.stringToHclTerraform(this._identityManagementType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_alias: {
                value: cdktn.stringToHclTerraform(this._instanceAlias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccInstanceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcInstance.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInstanceAttributesPropertyToTerraform(struct?: CcInstance.AttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_resolve_best_voices: cdktn.booleanToTerraform(struct!.autoResolveBestVoices),
        contact_lens: cdktn.booleanToTerraform(struct!.contactLens),
        contactflow_logs: cdktn.booleanToTerraform(struct!.contactflowLogs),
        early_media: cdktn.booleanToTerraform(struct!.earlyMedia),
        enhanced_chat_monitoring: cdktn.booleanToTerraform(struct!.enhancedChatMonitoring),
        enhanced_contact_monitoring: cdktn.booleanToTerraform(struct!.enhancedContactMonitoring),
        high_volume_out_bound: cdktn.booleanToTerraform(struct!.highVolumeOutBound),
        inbound_calls: cdktn.booleanToTerraform(struct!.inboundCalls),
        message_streaming: cdktn.booleanToTerraform(struct!.messageStreaming),
        multi_party_chat_conference: cdktn.booleanToTerraform(struct!.multiPartyChatConference),
        multi_party_conference: cdktn.booleanToTerraform(struct!.multiPartyConference),
        outbound_calls: cdktn.booleanToTerraform(struct!.outboundCalls),
        use_custom_tts_voices: cdktn.booleanToTerraform(struct!.useCustomTtsVoices),
    }
}


export function ccInstanceAttributesPropertyToHclTerraform(struct?: CcInstance.AttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_resolve_best_voices: {
            value: cdktn.booleanToHclTerraform(struct!.autoResolveBestVoices),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        contact_lens: {
            value: cdktn.booleanToHclTerraform(struct!.contactLens),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        contactflow_logs: {
            value: cdktn.booleanToHclTerraform(struct!.contactflowLogs),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        early_media: {
            value: cdktn.booleanToHclTerraform(struct!.earlyMedia),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enhanced_chat_monitoring: {
            value: cdktn.booleanToHclTerraform(struct!.enhancedChatMonitoring),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enhanced_contact_monitoring: {
            value: cdktn.booleanToHclTerraform(struct!.enhancedContactMonitoring),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        high_volume_out_bound: {
            value: cdktn.booleanToHclTerraform(struct!.highVolumeOutBound),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        inbound_calls: {
            value: cdktn.booleanToHclTerraform(struct!.inboundCalls),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        message_streaming: {
            value: cdktn.booleanToHclTerraform(struct!.messageStreaming),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        multi_party_chat_conference: {
            value: cdktn.booleanToHclTerraform(struct!.multiPartyChatConference),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        multi_party_conference: {
            value: cdktn.booleanToHclTerraform(struct!.multiPartyConference),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        outbound_calls: {
            value: cdktn.booleanToHclTerraform(struct!.outboundCalls),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_custom_tts_voices: {
            value: cdktn.booleanToHclTerraform(struct!.useCustomTtsVoices),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceTagPropertyToTerraform(struct?: CcInstance.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInstanceTagPropertyToHclTerraform(struct?: CcInstance.TagProperty | cdktn.IResolvable): any {
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


export namespace CcInstance {
export interface AttributesProperty {
    /**
    * Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#auto_resolve_best_voices CcInstance#auto_resolve_best_voices}
    */
    readonly autoResolveBestVoices?: boolean | cdktn.IResolvable;
    /**
    * Boolean flag which enables CONTACT_LENS on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#contact_lens CcInstance#contact_lens}
    */
    readonly contactLens?: boolean | cdktn.IResolvable;
    /**
    * Boolean flag which enables CONTACTFLOW_LOGS on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#contactflow_logs CcInstance#contactflow_logs}
    */
    readonly contactflowLogs?: boolean | cdktn.IResolvable;
    /**
    * Boolean flag which enables EARLY_MEDIA on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#early_media CcInstance#early_media}
    */
    readonly earlyMedia?: boolean | cdktn.IResolvable;
    /**
    * Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#enhanced_chat_monitoring CcInstance#enhanced_chat_monitoring}
    */
    readonly enhancedChatMonitoring?: boolean | cdktn.IResolvable;
    /**
    * Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#enhanced_contact_monitoring CcInstance#enhanced_contact_monitoring}
    */
    readonly enhancedContactMonitoring?: boolean | cdktn.IResolvable;
    /**
    * Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#high_volume_out_bound CcInstance#high_volume_out_bound}
    */
    readonly highVolumeOutBound?: boolean | cdktn.IResolvable;
    /**
    * Mandatory element which enables inbound calls on new instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#inbound_calls CcInstance#inbound_calls}
    */
    readonly inboundCalls: boolean | cdktn.IResolvable;
    /**
    * Boolean flag which enables MESSAGE_STREAMING on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#message_streaming CcInstance#message_streaming}
    */
    readonly messageStreaming?: boolean | cdktn.IResolvable;
    /**
    * Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#multi_party_chat_conference CcInstance#multi_party_chat_conference}
    */
    readonly multiPartyChatConference?: boolean | cdktn.IResolvable;
    /**
    * Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#multi_party_conference CcInstance#multi_party_conference}
    */
    readonly multiPartyConference?: boolean | cdktn.IResolvable;
    /**
    * Mandatory element which enables outbound calls on new instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#outbound_calls CcInstance#outbound_calls}
    */
    readonly outboundCalls: boolean | cdktn.IResolvable;
    /**
    * Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#use_custom_tts_voices CcInstance#use_custom_tts_voices}
    */
    readonly useCustomTtsVoices?: boolean | cdktn.IResolvable;
}
export class AttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoResolveBestVoices !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoResolveBestVoices = this._autoResolveBestVoices;
        }
        if (this._contactLens !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactLens = this._contactLens;
        }
        if (this._contactflowLogs !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactflowLogs = this._contactflowLogs;
        }
        if (this._earlyMedia !== undefined) {
            hasAnyValues = true;
            internalValueResult.earlyMedia = this._earlyMedia;
        }
        if (this._enhancedChatMonitoring !== undefined) {
            hasAnyValues = true;
            internalValueResult.enhancedChatMonitoring = this._enhancedChatMonitoring;
        }
        if (this._enhancedContactMonitoring !== undefined) {
            hasAnyValues = true;
            internalValueResult.enhancedContactMonitoring = this._enhancedContactMonitoring;
        }
        if (this._highVolumeOutBound !== undefined) {
            hasAnyValues = true;
            internalValueResult.highVolumeOutBound = this._highVolumeOutBound;
        }
        if (this._inboundCalls !== undefined) {
            hasAnyValues = true;
            internalValueResult.inboundCalls = this._inboundCalls;
        }
        if (this._messageStreaming !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageStreaming = this._messageStreaming;
        }
        if (this._multiPartyChatConference !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiPartyChatConference = this._multiPartyChatConference;
        }
        if (this._multiPartyConference !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiPartyConference = this._multiPartyConference;
        }
        if (this._outboundCalls !== undefined) {
            hasAnyValues = true;
            internalValueResult.outboundCalls = this._outboundCalls;
        }
        if (this._useCustomTtsVoices !== undefined) {
            hasAnyValues = true;
            internalValueResult.useCustomTtsVoices = this._useCustomTtsVoices;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoResolveBestVoices = undefined;
            this._contactLens = undefined;
            this._contactflowLogs = undefined;
            this._earlyMedia = undefined;
            this._enhancedChatMonitoring = undefined;
            this._enhancedContactMonitoring = undefined;
            this._highVolumeOutBound = undefined;
            this._inboundCalls = undefined;
            this._messageStreaming = undefined;
            this._multiPartyChatConference = undefined;
            this._multiPartyConference = undefined;
            this._outboundCalls = undefined;
            this._useCustomTtsVoices = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoResolveBestVoices = value.autoResolveBestVoices;
            this._contactLens = value.contactLens;
            this._contactflowLogs = value.contactflowLogs;
            this._earlyMedia = value.earlyMedia;
            this._enhancedChatMonitoring = value.enhancedChatMonitoring;
            this._enhancedContactMonitoring = value.enhancedContactMonitoring;
            this._highVolumeOutBound = value.highVolumeOutBound;
            this._inboundCalls = value.inboundCalls;
            this._messageStreaming = value.messageStreaming;
            this._multiPartyChatConference = value.multiPartyChatConference;
            this._multiPartyConference = value.multiPartyConference;
            this._outboundCalls = value.outboundCalls;
            this._useCustomTtsVoices = value.useCustomTtsVoices;
        }
    }

    // auto_resolve_best_voices - computed: true, optional: true, required: false
    private _autoResolveBestVoices?: boolean | cdktn.IResolvable; 
    public get autoResolveBestVoices() {
        return this.getBooleanAttribute('auto_resolve_best_voices');
    }
    public set autoResolveBestVoices(value: boolean | cdktn.IResolvable) {
        this._autoResolveBestVoices = value;
    }
    public resetAutoResolveBestVoices() {
        this._autoResolveBestVoices = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoResolveBestVoicesInput() {
        return this._autoResolveBestVoices;
    }

    // contact_lens - computed: true, optional: true, required: false
    private _contactLens?: boolean | cdktn.IResolvable; 
    public get contactLens() {
        return this.getBooleanAttribute('contact_lens');
    }
    public set contactLens(value: boolean | cdktn.IResolvable) {
        this._contactLens = value;
    }
    public resetContactLens() {
        this._contactLens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactLensInput() {
        return this._contactLens;
    }

    // contactflow_logs - computed: true, optional: true, required: false
    private _contactflowLogs?: boolean | cdktn.IResolvable; 
    public get contactflowLogs() {
        return this.getBooleanAttribute('contactflow_logs');
    }
    public set contactflowLogs(value: boolean | cdktn.IResolvable) {
        this._contactflowLogs = value;
    }
    public resetContactflowLogs() {
        this._contactflowLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactflowLogsInput() {
        return this._contactflowLogs;
    }

    // early_media - computed: true, optional: true, required: false
    private _earlyMedia?: boolean | cdktn.IResolvable; 
    public get earlyMedia() {
        return this.getBooleanAttribute('early_media');
    }
    public set earlyMedia(value: boolean | cdktn.IResolvable) {
        this._earlyMedia = value;
    }
    public resetEarlyMedia() {
        this._earlyMedia = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get earlyMediaInput() {
        return this._earlyMedia;
    }

    // enhanced_chat_monitoring - computed: true, optional: true, required: false
    private _enhancedChatMonitoring?: boolean | cdktn.IResolvable; 
    public get enhancedChatMonitoring() {
        return this.getBooleanAttribute('enhanced_chat_monitoring');
    }
    public set enhancedChatMonitoring(value: boolean | cdktn.IResolvable) {
        this._enhancedChatMonitoring = value;
    }
    public resetEnhancedChatMonitoring() {
        this._enhancedChatMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enhancedChatMonitoringInput() {
        return this._enhancedChatMonitoring;
    }

    // enhanced_contact_monitoring - computed: true, optional: true, required: false
    private _enhancedContactMonitoring?: boolean | cdktn.IResolvable; 
    public get enhancedContactMonitoring() {
        return this.getBooleanAttribute('enhanced_contact_monitoring');
    }
    public set enhancedContactMonitoring(value: boolean | cdktn.IResolvable) {
        this._enhancedContactMonitoring = value;
    }
    public resetEnhancedContactMonitoring() {
        this._enhancedContactMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enhancedContactMonitoringInput() {
        return this._enhancedContactMonitoring;
    }

    // high_volume_out_bound - computed: true, optional: true, required: false
    private _highVolumeOutBound?: boolean | cdktn.IResolvable; 
    public get highVolumeOutBound() {
        return this.getBooleanAttribute('high_volume_out_bound');
    }
    public set highVolumeOutBound(value: boolean | cdktn.IResolvable) {
        this._highVolumeOutBound = value;
    }
    public resetHighVolumeOutBound() {
        this._highVolumeOutBound = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get highVolumeOutBoundInput() {
        return this._highVolumeOutBound;
    }

    // inbound_calls - computed: false, optional: false, required: true
    private _inboundCalls?: boolean | cdktn.IResolvable; 
    public get inboundCalls() {
        return this.getBooleanAttribute('inbound_calls');
    }
    public set inboundCalls(value: boolean | cdktn.IResolvable) {
        this._inboundCalls = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inboundCallsInput() {
        return this._inboundCalls;
    }

    // message_streaming - computed: true, optional: true, required: false
    private _messageStreaming?: boolean | cdktn.IResolvable; 
    public get messageStreaming() {
        return this.getBooleanAttribute('message_streaming');
    }
    public set messageStreaming(value: boolean | cdktn.IResolvable) {
        this._messageStreaming = value;
    }
    public resetMessageStreaming() {
        this._messageStreaming = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageStreamingInput() {
        return this._messageStreaming;
    }

    // multi_party_chat_conference - computed: true, optional: true, required: false
    private _multiPartyChatConference?: boolean | cdktn.IResolvable; 
    public get multiPartyChatConference() {
        return this.getBooleanAttribute('multi_party_chat_conference');
    }
    public set multiPartyChatConference(value: boolean | cdktn.IResolvable) {
        this._multiPartyChatConference = value;
    }
    public resetMultiPartyChatConference() {
        this._multiPartyChatConference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiPartyChatConferenceInput() {
        return this._multiPartyChatConference;
    }

    // multi_party_conference - computed: true, optional: true, required: false
    private _multiPartyConference?: boolean | cdktn.IResolvable; 
    public get multiPartyConference() {
        return this.getBooleanAttribute('multi_party_conference');
    }
    public set multiPartyConference(value: boolean | cdktn.IResolvable) {
        this._multiPartyConference = value;
    }
    public resetMultiPartyConference() {
        this._multiPartyConference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiPartyConferenceInput() {
        return this._multiPartyConference;
    }

    // outbound_calls - computed: false, optional: false, required: true
    private _outboundCalls?: boolean | cdktn.IResolvable; 
    public get outboundCalls() {
        return this.getBooleanAttribute('outbound_calls');
    }
    public set outboundCalls(value: boolean | cdktn.IResolvable) {
        this._outboundCalls = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundCallsInput() {
        return this._outboundCalls;
    }

    // use_custom_tts_voices - computed: true, optional: true, required: false
    private _useCustomTtsVoices?: boolean | cdktn.IResolvable; 
    public get useCustomTtsVoices() {
        return this.getBooleanAttribute('use_custom_tts_voices');
    }
    public set useCustomTtsVoices(value: boolean | cdktn.IResolvable) {
        this._useCustomTtsVoices = value;
    }
    public resetUseCustomTtsVoices() {
        this._useCustomTtsVoices = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useCustomTtsVoicesInput() {
        return this._useCustomTtsVoices;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#key CcInstance#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#value CcInstance#value}
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
