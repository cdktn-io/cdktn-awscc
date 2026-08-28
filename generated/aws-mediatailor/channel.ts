// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChannelProps extends cdktn.TerraformMetaArguments {
    /**
    * <p>The list of audiences defined in channel.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#audiences CcChannel#audiences}
    */
    readonly audiences?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#channel_name CcChannel#channel_name}
    */
    readonly channelName: string;
    /**
    * <p>Slate VOD source configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#filler_slate CcChannel#filler_slate}
    */
    readonly fillerSlate?: CcChannel.SlateSourceProperty;
    /**
    * <p>The log configuration for the channel.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#log_configuration CcChannel#log_configuration}
    */
    readonly logConfiguration?: CcChannel.LogConfigurationForChannelProperty;
    /**
    * <p>The channel's output properties.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#outputs CcChannel#outputs}
    */
    readonly outputs: CcChannel.RequestOutputItemProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#playback_mode CcChannel#playback_mode}
    */
    readonly playbackMode: string;
    /**
    * The tags to assign to the channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#tags CcChannel#tags}
    */
    readonly tags?: CcChannel.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#tier CcChannel#tier}
    */
    readonly tier?: string;
    /**
    * <p>The configuration for time-shifted viewing.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#time_shift_configuration CcChannel#time_shift_configuration}
    */
    readonly timeShiftConfiguration?: CcChannel.TimeShiftConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel awscc_mediatailor_channel}
*/
export class CcChannel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediatailor_channel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChannel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChannel to import
    * @param importFromId The id of the existing CcChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChannel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_channel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel awscc_mediatailor_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChannelProps
    */
    public constructor(scope: Construct, id: string, config: CcChannelProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediatailor_channel',
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
        this._audiences = config.audiences;
        this._channelName = config.channelName;
        this._fillerSlate.internalValue = config.fillerSlate;
        this._logConfiguration.internalValue = config.logConfiguration;
        this._outputs.internalValue = config.outputs;
        this._playbackMode = config.playbackMode;
        this._tags.internalValue = config.tags;
        this._tier = config.tier;
        this._timeShiftConfiguration.internalValue = config.timeShiftConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // audiences - computed: true, optional: true, required: false
    private _audiences?: string[]; 
    public get audiences() {
        return this.getListAttribute('audiences');
    }
    public set audiences(value: string[]) {
        this._audiences = value;
    }
    public resetAudiences() {
        this._audiences = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audiencesInput() {
        return this._audiences;
    }

    // channel_name - computed: false, optional: false, required: true
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
    }

    // filler_slate - computed: true, optional: true, required: false
    private _fillerSlate = new CcChannel.SlateSourcePropertyOutputReference(this, "filler_slate");
    public get fillerSlate() {
        return this._fillerSlate;
    }
    public putFillerSlate(value: CcChannel.SlateSourceProperty) {
        this._fillerSlate.internalValue = value;
    }
    public resetFillerSlate() {
        this._fillerSlate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fillerSlateInput() {
        return this._fillerSlate.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_configuration - computed: true, optional: true, required: false
    private _logConfiguration = new CcChannel.LogConfigurationForChannelPropertyOutputReference(this, "log_configuration");
    public get logConfiguration() {
        return this._logConfiguration;
    }
    public putLogConfiguration(value: CcChannel.LogConfigurationForChannelProperty) {
        this._logConfiguration.internalValue = value;
    }
    public resetLogConfiguration() {
        this._logConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigurationInput() {
        return this._logConfiguration.internalValue;
    }

    // outputs - computed: false, optional: false, required: true
    private _outputs = new CcChannel.RequestOutputItemPropertyList(this, "outputs", false);
    public get outputs() {
        return this._outputs;
    }
    public putOutputs(value: CcChannel.RequestOutputItemProperty[] | cdktn.IResolvable) {
        this._outputs.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get outputsInput() {
        return this._outputs.internalValue;
    }

    // playback_mode - computed: false, optional: false, required: true
    private _playbackMode?: string; 
    public get playbackMode() {
        return this.getStringAttribute('playback_mode');
    }
    public set playbackMode(value: string) {
        this._playbackMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get playbackModeInput() {
        return this._playbackMode;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcChannel.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcChannel.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tier - computed: true, optional: true, required: false
    private _tier?: string; 
    public get tier() {
        return this.getStringAttribute('tier');
    }
    public set tier(value: string) {
        this._tier = value;
    }
    public resetTier() {
        this._tier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tierInput() {
        return this._tier;
    }

    // time_shift_configuration - computed: true, optional: true, required: false
    private _timeShiftConfiguration = new CcChannel.TimeShiftConfigurationPropertyOutputReference(this, "time_shift_configuration");
    public get timeShiftConfiguration() {
        return this._timeShiftConfiguration;
    }
    public putTimeShiftConfiguration(value: CcChannel.TimeShiftConfigurationProperty) {
        this._timeShiftConfiguration.internalValue = value;
    }
    public resetTimeShiftConfiguration() {
        this._timeShiftConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeShiftConfigurationInput() {
        return this._timeShiftConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            audiences: cdktn.listMapper(cdktn.stringToTerraform, false)(this._audiences),
            channel_name: cdktn.stringToTerraform(this._channelName),
            filler_slate: ccChannelSlateSourcePropertyToTerraform(this._fillerSlate.internalValue),
            log_configuration: ccChannelLogConfigurationForChannelPropertyToTerraform(this._logConfiguration.internalValue),
            outputs: cdktn.listMapper(ccChannelRequestOutputItemPropertyToTerraform, false)(this._outputs.internalValue),
            playback_mode: cdktn.stringToTerraform(this._playbackMode),
            tags: cdktn.listMapper(ccChannelTagPropertyToTerraform, false)(this._tags.internalValue),
            tier: cdktn.stringToTerraform(this._tier),
            time_shift_configuration: ccChannelTimeShiftConfigurationPropertyToTerraform(this._timeShiftConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            audiences: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._audiences),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            channel_name: {
                value: cdktn.stringToHclTerraform(this._channelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filler_slate: {
                value: ccChannelSlateSourcePropertyToHclTerraform(this._fillerSlate.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.SlateSourceProperty",
            },
            log_configuration: {
                value: ccChannelLogConfigurationForChannelPropertyToHclTerraform(this._logConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.LogConfigurationForChannelProperty",
            },
            outputs: {
                value: cdktn.listMapperHcl(ccChannelRequestOutputItemPropertyToHclTerraform, false)(this._outputs.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcChannel.RequestOutputItemPropertyList",
            },
            playback_mode: {
                value: cdktn.stringToHclTerraform(this._playbackMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccChannelTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcChannel.TagPropertyList",
            },
            tier: {
                value: cdktn.stringToHclTerraform(this._tier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            time_shift_configuration: {
                value: ccChannelTimeShiftConfigurationPropertyToHclTerraform(this._timeShiftConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.TimeShiftConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccChannelSlateSourcePropertyToTerraform(struct?: CcChannel.SlateSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_location_name: cdktn.stringToTerraform(struct!.sourceLocationName),
        vod_source_name: cdktn.stringToTerraform(struct!.vodSourceName),
    }
}


export function ccChannelSlateSourcePropertyToHclTerraform(struct?: CcChannel.SlateSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_location_name: {
            value: cdktn.stringToHclTerraform(struct!.sourceLocationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vod_source_name: {
            value: cdktn.stringToHclTerraform(struct!.vodSourceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelLogConfigurationForChannelPropertyToTerraform(struct?: CcChannel.LogConfigurationForChannelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.logTypes),
    }
}


export function ccChannelLogConfigurationForChannelPropertyToHclTerraform(struct?: CcChannel.LogConfigurationForChannelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.logTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelDashPlaylistSettingsPropertyToTerraform(struct?: CcChannel.DashPlaylistSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        manifest_window_seconds: cdktn.numberToTerraform(struct!.manifestWindowSeconds),
        min_buffer_time_seconds: cdktn.numberToTerraform(struct!.minBufferTimeSeconds),
        min_update_period_seconds: cdktn.numberToTerraform(struct!.minUpdatePeriodSeconds),
        suggested_presentation_delay_seconds: cdktn.numberToTerraform(struct!.suggestedPresentationDelaySeconds),
    }
}


export function ccChannelDashPlaylistSettingsPropertyToHclTerraform(struct?: CcChannel.DashPlaylistSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        manifest_window_seconds: {
            value: cdktn.numberToHclTerraform(struct!.manifestWindowSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_buffer_time_seconds: {
            value: cdktn.numberToHclTerraform(struct!.minBufferTimeSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_update_period_seconds: {
            value: cdktn.numberToHclTerraform(struct!.minUpdatePeriodSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        suggested_presentation_delay_seconds: {
            value: cdktn.numberToHclTerraform(struct!.suggestedPresentationDelaySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelHlsPlaylistSettingsPropertyToTerraform(struct?: CcChannel.HlsPlaylistSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ad_markup_type: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.adMarkupType),
        manifest_window_seconds: cdktn.numberToTerraform(struct!.manifestWindowSeconds),
    }
}


export function ccChannelHlsPlaylistSettingsPropertyToHclTerraform(struct?: CcChannel.HlsPlaylistSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ad_markup_type: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.adMarkupType),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        manifest_window_seconds: {
            value: cdktn.numberToHclTerraform(struct!.manifestWindowSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelRequestOutputItemPropertyToTerraform(struct?: CcChannel.RequestOutputItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dash_playlist_settings: ccChannelDashPlaylistSettingsPropertyToTerraform(struct!.dashPlaylistSettings),
        hls_playlist_settings: ccChannelHlsPlaylistSettingsPropertyToTerraform(struct!.hlsPlaylistSettings),
        manifest_name: cdktn.stringToTerraform(struct!.manifestName),
        source_group: cdktn.stringToTerraform(struct!.sourceGroup),
    }
}


export function ccChannelRequestOutputItemPropertyToHclTerraform(struct?: CcChannel.RequestOutputItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dash_playlist_settings: {
            value: ccChannelDashPlaylistSettingsPropertyToHclTerraform(struct!.dashPlaylistSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DashPlaylistSettingsProperty",
        },
        hls_playlist_settings: {
            value: ccChannelHlsPlaylistSettingsPropertyToHclTerraform(struct!.hlsPlaylistSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "HlsPlaylistSettingsProperty",
        },
        manifest_name: {
            value: cdktn.stringToHclTerraform(struct!.manifestName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_group: {
            value: cdktn.stringToHclTerraform(struct!.sourceGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelTagPropertyToTerraform(struct?: CcChannel.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccChannelTagPropertyToHclTerraform(struct?: CcChannel.TagProperty | cdktn.IResolvable): any {
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


export function ccChannelTimeShiftConfigurationPropertyToTerraform(struct?: CcChannel.TimeShiftConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_time_delay_seconds: cdktn.numberToTerraform(struct!.maxTimeDelaySeconds),
    }
}


export function ccChannelTimeShiftConfigurationPropertyToHclTerraform(struct?: CcChannel.TimeShiftConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_time_delay_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maxTimeDelaySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcChannel {
export interface SlateSourceProperty {
    /**
    * <p>The name of the source location where the slate VOD source is stored.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#source_location_name CcChannel#source_location_name}
    */
    readonly sourceLocationName?: string;
    /**
    * <p>The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#vod_source_name CcChannel#vod_source_name}
    */
    readonly vodSourceName?: string;
}
export class SlateSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SlateSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceLocationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceLocationName = this._sourceLocationName;
        }
        if (this._vodSourceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.vodSourceName = this._vodSourceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SlateSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceLocationName = undefined;
            this._vodSourceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceLocationName = value.sourceLocationName;
            this._vodSourceName = value.vodSourceName;
        }
    }

    // source_location_name - computed: true, optional: true, required: false
    private _sourceLocationName?: string; 
    public get sourceLocationName() {
        return this.getStringAttribute('source_location_name');
    }
    public set sourceLocationName(value: string) {
        this._sourceLocationName = value;
    }
    public resetSourceLocationName() {
        this._sourceLocationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceLocationNameInput() {
        return this._sourceLocationName;
    }

    // vod_source_name - computed: true, optional: true, required: false
    private _vodSourceName?: string; 
    public get vodSourceName() {
        return this.getStringAttribute('vod_source_name');
    }
    public set vodSourceName(value: string) {
        this._vodSourceName = value;
    }
    public resetVodSourceName() {
        this._vodSourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vodSourceNameInput() {
        return this._vodSourceName;
    }
}
export interface LogConfigurationForChannelProperty {
    /**
    * <p>The log types.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#log_types CcChannel#log_types}
    */
    readonly logTypes?: string[];
}
export class LogConfigurationForChannelPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogConfigurationForChannelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.logTypes = this._logTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogConfigurationForChannelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logTypes = value.logTypes;
        }
    }

    // log_types - computed: true, optional: true, required: false
    private _logTypes?: string[]; 
    public get logTypes() {
        return this.getListAttribute('log_types');
    }
    public set logTypes(value: string[]) {
        this._logTypes = value;
    }
    public resetLogTypes() {
        this._logTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypesInput() {
        return this._logTypes;
    }
}
export interface DashPlaylistSettingsProperty {
    /**
    * <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#manifest_window_seconds CcChannel#manifest_window_seconds}
    */
    readonly manifestWindowSeconds?: number;
    /**
    * <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#min_buffer_time_seconds CcChannel#min_buffer_time_seconds}
    */
    readonly minBufferTimeSeconds?: number;
    /**
    * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#min_update_period_seconds CcChannel#min_update_period_seconds}
    */
    readonly minUpdatePeriodSeconds?: number;
    /**
    * <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#suggested_presentation_delay_seconds CcChannel#suggested_presentation_delay_seconds}
    */
    readonly suggestedPresentationDelaySeconds?: number;
}
export class DashPlaylistSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashPlaylistSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._manifestWindowSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestWindowSeconds = this._manifestWindowSeconds;
        }
        if (this._minBufferTimeSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.minBufferTimeSeconds = this._minBufferTimeSeconds;
        }
        if (this._minUpdatePeriodSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.minUpdatePeriodSeconds = this._minUpdatePeriodSeconds;
        }
        if (this._suggestedPresentationDelaySeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.suggestedPresentationDelaySeconds = this._suggestedPresentationDelaySeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashPlaylistSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._manifestWindowSeconds = undefined;
            this._minBufferTimeSeconds = undefined;
            this._minUpdatePeriodSeconds = undefined;
            this._suggestedPresentationDelaySeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._manifestWindowSeconds = value.manifestWindowSeconds;
            this._minBufferTimeSeconds = value.minBufferTimeSeconds;
            this._minUpdatePeriodSeconds = value.minUpdatePeriodSeconds;
            this._suggestedPresentationDelaySeconds = value.suggestedPresentationDelaySeconds;
        }
    }

    // manifest_window_seconds - computed: true, optional: true, required: false
    private _manifestWindowSeconds?: number; 
    public get manifestWindowSeconds() {
        return this.getNumberAttribute('manifest_window_seconds');
    }
    public set manifestWindowSeconds(value: number) {
        this._manifestWindowSeconds = value;
    }
    public resetManifestWindowSeconds() {
        this._manifestWindowSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestWindowSecondsInput() {
        return this._manifestWindowSeconds;
    }

    // min_buffer_time_seconds - computed: true, optional: true, required: false
    private _minBufferTimeSeconds?: number; 
    public get minBufferTimeSeconds() {
        return this.getNumberAttribute('min_buffer_time_seconds');
    }
    public set minBufferTimeSeconds(value: number) {
        this._minBufferTimeSeconds = value;
    }
    public resetMinBufferTimeSeconds() {
        this._minBufferTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minBufferTimeSecondsInput() {
        return this._minBufferTimeSeconds;
    }

    // min_update_period_seconds - computed: true, optional: true, required: false
    private _minUpdatePeriodSeconds?: number; 
    public get minUpdatePeriodSeconds() {
        return this.getNumberAttribute('min_update_period_seconds');
    }
    public set minUpdatePeriodSeconds(value: number) {
        this._minUpdatePeriodSeconds = value;
    }
    public resetMinUpdatePeriodSeconds() {
        this._minUpdatePeriodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minUpdatePeriodSecondsInput() {
        return this._minUpdatePeriodSeconds;
    }

    // suggested_presentation_delay_seconds - computed: true, optional: true, required: false
    private _suggestedPresentationDelaySeconds?: number; 
    public get suggestedPresentationDelaySeconds() {
        return this.getNumberAttribute('suggested_presentation_delay_seconds');
    }
    public set suggestedPresentationDelaySeconds(value: number) {
        this._suggestedPresentationDelaySeconds = value;
    }
    public resetSuggestedPresentationDelaySeconds() {
        this._suggestedPresentationDelaySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suggestedPresentationDelaySecondsInput() {
        return this._suggestedPresentationDelaySeconds;
    }
}
export interface HlsPlaylistSettingsProperty {
    /**
    * <p>Determines the type of SCTE 35 tags to use in ad markup. Specify <code>DATERANGE</code> to use <code>DATERANGE</code> tags (for live or VOD content). Specify <code>SCTE35_ENHANCED</code> to use <code>EXT-X-CUE-OUT</code> and <code>EXT-X-CUE-IN</code> tags (for VOD content only).</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#ad_markup_type CcChannel#ad_markup_type}
    */
    readonly adMarkupType?: string[];
    /**
    * <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#manifest_window_seconds CcChannel#manifest_window_seconds}
    */
    readonly manifestWindowSeconds?: number;
}
export class HlsPlaylistSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HlsPlaylistSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._adMarkupType !== undefined) {
            hasAnyValues = true;
            internalValueResult.adMarkupType = this._adMarkupType;
        }
        if (this._manifestWindowSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestWindowSeconds = this._manifestWindowSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HlsPlaylistSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._adMarkupType = undefined;
            this._manifestWindowSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._adMarkupType = value.adMarkupType;
            this._manifestWindowSeconds = value.manifestWindowSeconds;
        }
    }

    // ad_markup_type - computed: true, optional: true, required: false
    private _adMarkupType?: string[]; 
    public get adMarkupType() {
        return this.getListAttribute('ad_markup_type');
    }
    public set adMarkupType(value: string[]) {
        this._adMarkupType = value;
    }
    public resetAdMarkupType() {
        this._adMarkupType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adMarkupTypeInput() {
        return this._adMarkupType;
    }

    // manifest_window_seconds - computed: true, optional: true, required: false
    private _manifestWindowSeconds?: number; 
    public get manifestWindowSeconds() {
        return this.getNumberAttribute('manifest_window_seconds');
    }
    public set manifestWindowSeconds(value: number) {
        this._manifestWindowSeconds = value;
    }
    public resetManifestWindowSeconds() {
        this._manifestWindowSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestWindowSecondsInput() {
        return this._manifestWindowSeconds;
    }
}
export interface RequestOutputItemProperty {
    /**
    * <p>Dash manifest configuration parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#dash_playlist_settings CcChannel#dash_playlist_settings}
    */
    readonly dashPlaylistSettings?: DashPlaylistSettingsProperty;
    /**
    * <p>HLS playlist configuration parameters.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#hls_playlist_settings CcChannel#hls_playlist_settings}
    */
    readonly hlsPlaylistSettings?: HlsPlaylistSettingsProperty;
    /**
    * <p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#manifest_name CcChannel#manifest_name}
    */
    readonly manifestName: string;
    /**
    * <p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#source_group CcChannel#source_group}
    */
    readonly sourceGroup: string;
}
export class RequestOutputItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RequestOutputItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dashPlaylistSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dashPlaylistSettings = this._dashPlaylistSettings?.internalValue;
        }
        if (this._hlsPlaylistSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hlsPlaylistSettings = this._hlsPlaylistSettings?.internalValue;
        }
        if (this._manifestName !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestName = this._manifestName;
        }
        if (this._sourceGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceGroup = this._sourceGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RequestOutputItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dashPlaylistSettings.internalValue = undefined;
            this._hlsPlaylistSettings.internalValue = undefined;
            this._manifestName = undefined;
            this._sourceGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dashPlaylistSettings.internalValue = value.dashPlaylistSettings;
            this._hlsPlaylistSettings.internalValue = value.hlsPlaylistSettings;
            this._manifestName = value.manifestName;
            this._sourceGroup = value.sourceGroup;
        }
    }

    // dash_playlist_settings - computed: true, optional: true, required: false
    private _dashPlaylistSettings = new DashPlaylistSettingsPropertyOutputReference(this, "dash_playlist_settings");
    public get dashPlaylistSettings() {
        return this._dashPlaylistSettings;
    }
    public putDashPlaylistSettings(value: DashPlaylistSettingsProperty) {
        this._dashPlaylistSettings.internalValue = value;
    }
    public resetDashPlaylistSettings() {
        this._dashPlaylistSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dashPlaylistSettingsInput() {
        return this._dashPlaylistSettings.internalValue;
    }

    // hls_playlist_settings - computed: true, optional: true, required: false
    private _hlsPlaylistSettings = new HlsPlaylistSettingsPropertyOutputReference(this, "hls_playlist_settings");
    public get hlsPlaylistSettings() {
        return this._hlsPlaylistSettings;
    }
    public putHlsPlaylistSettings(value: HlsPlaylistSettingsProperty) {
        this._hlsPlaylistSettings.internalValue = value;
    }
    public resetHlsPlaylistSettings() {
        this._hlsPlaylistSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hlsPlaylistSettingsInput() {
        return this._hlsPlaylistSettings.internalValue;
    }

    // manifest_name - computed: false, optional: false, required: true
    private _manifestName?: string; 
    public get manifestName() {
        return this.getStringAttribute('manifest_name');
    }
    public set manifestName(value: string) {
        this._manifestName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestNameInput() {
        return this._manifestName;
    }

    // source_group - computed: false, optional: false, required: true
    private _sourceGroup?: string; 
    public get sourceGroup() {
        return this.getStringAttribute('source_group');
    }
    public set sourceGroup(value: string) {
        this._sourceGroup = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceGroupInput() {
        return this._sourceGroup;
    }
}

export class RequestOutputItemPropertyList extends cdktn.ComplexList {
    public internalValue? : RequestOutputItemProperty[] | cdktn.IResolvable

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
    public get(index: number): RequestOutputItemPropertyOutputReference {
        return new RequestOutputItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#key CcChannel#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#value CcChannel#value}
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
export interface TimeShiftConfigurationProperty {
    /**
    * <p>The maximum time delay for time-shifted viewing. The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_channel#max_time_delay_seconds CcChannel#max_time_delay_seconds}
    */
    readonly maxTimeDelaySeconds?: number;
}
export class TimeShiftConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeShiftConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxTimeDelaySeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTimeDelaySeconds = this._maxTimeDelaySeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeShiftConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxTimeDelaySeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxTimeDelaySeconds = value.maxTimeDelaySeconds;
        }
    }

    // max_time_delay_seconds - computed: true, optional: true, required: false
    private _maxTimeDelaySeconds?: number; 
    public get maxTimeDelaySeconds() {
        return this.getNumberAttribute('max_time_delay_seconds');
    }
    public set maxTimeDelaySeconds(value: number) {
        this._maxTimeDelaySeconds = value;
    }
    public resetMaxTimeDelaySeconds() {
        this._maxTimeDelaySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTimeDelaySecondsInput() {
        return this._maxTimeDelaySeconds;
    }
}
}
