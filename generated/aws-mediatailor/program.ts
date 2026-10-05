// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProgramProps extends cdktn.TerraformMetaArguments {
    /**
    * The ad break configuration settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#ad_breaks CcProgram#ad_breaks}
    */
    readonly adBreaks?: CcProgram.AdBreaksProperty[] | cdktn.IResolvable;
    /**
    * The list of AudienceMedia defined in program.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#audience_media CcProgram#audience_media}
    */
    readonly audienceMedia?: CcProgram.AudienceMediaProperty[] | cdktn.IResolvable;
    /**
    * The name of the channel for this Program.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#channel_name CcProgram#channel_name}
    */
    readonly channelName: string;
    /**
    * The name of the LiveSource for this Program.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#live_source_name CcProgram#live_source_name}
    */
    readonly liveSourceName?: string;
    /**
    * The name of the Program.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#program_name CcProgram#program_name}
    */
    readonly programName: string;
    /**
    * The schedule configuration settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#schedule_configuration CcProgram#schedule_configuration}
    */
    readonly scheduleConfiguration?: CcProgram.ScheduleConfigurationProperty;
    /**
    * The name of the source location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#source_location_name CcProgram#source_location_name}
    */
    readonly sourceLocationName: string;
    /**
    * The name that's used to refer to a VOD source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#vod_source_name CcProgram#vod_source_name}
    */
    readonly vodSourceName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program awscc_mediatailor_program}
*/
export class CcProgram extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediatailor_program";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProgram resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProgram to import
    * @param importFromId The id of the existing CcProgram that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProgram to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_program", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program awscc_mediatailor_program} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProgramProps
    */
    public constructor(scope: Construct, id: string, config: CcProgramProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediatailor_program',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._adBreaks.internalValue = config.adBreaks;
        this._audienceMedia.internalValue = config.audienceMedia;
        this._channelName = config.channelName;
        this._liveSourceName = config.liveSourceName;
        this._programName = config.programName;
        this._scheduleConfiguration.internalValue = config.scheduleConfiguration;
        this._sourceLocationName = config.sourceLocationName;
        this._vodSourceName = config.vodSourceName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ad_breaks - computed: true, optional: true, required: false
    private _adBreaks = new CcProgram.AdBreaksPropertyList(this, "ad_breaks", false);
    public get adBreaks() {
        return this._adBreaks;
    }
    public putAdBreaks(value: CcProgram.AdBreaksProperty[] | cdktn.IResolvable) {
        this._adBreaks.internalValue = value;
    }
    public resetAdBreaks() {
        this._adBreaks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adBreaksInput() {
        return this._adBreaks.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // audience_media - computed: true, optional: true, required: false
    private _audienceMedia = new CcProgram.AudienceMediaPropertyList(this, "audience_media", false);
    public get audienceMedia() {
        return this._audienceMedia;
    }
    public putAudienceMedia(value: CcProgram.AudienceMediaProperty[] | cdktn.IResolvable) {
        this._audienceMedia.internalValue = value;
    }
    public resetAudienceMedia() {
        this._audienceMedia.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audienceMediaInput() {
        return this._audienceMedia.internalValue;
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

    // clip_range - computed: true, optional: false, required: false
    private _clipRange = new CcProgram.ClipRangePropertyOutputReference(this, "clip_range");
    public get clipRange() {
        return this._clipRange;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // duration_millis - computed: true, optional: false, required: false
    public get durationMillis() {
        return this.getNumberAttribute('duration_millis');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // live_source_name - computed: true, optional: true, required: false
    private _liveSourceName?: string; 
    public get liveSourceName() {
        return this.getStringAttribute('live_source_name');
    }
    public set liveSourceName(value: string) {
        this._liveSourceName = value;
    }
    public resetLiveSourceName() {
        this._liveSourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get liveSourceNameInput() {
        return this._liveSourceName;
    }

    // program_name - computed: false, optional: false, required: true
    private _programName?: string; 
    public get programName() {
        return this.getStringAttribute('program_name');
    }
    public set programName(value: string) {
        this._programName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get programNameInput() {
        return this._programName;
    }

    // schedule_configuration - computed: true, optional: true, required: false
    private _scheduleConfiguration = new CcProgram.ScheduleConfigurationPropertyOutputReference(this, "schedule_configuration");
    public get scheduleConfiguration() {
        return this._scheduleConfiguration;
    }
    public putScheduleConfiguration(value: CcProgram.ScheduleConfigurationProperty) {
        this._scheduleConfiguration.internalValue = value;
    }
    public resetScheduleConfiguration() {
        this._scheduleConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleConfigurationInput() {
        return this._scheduleConfiguration.internalValue;
    }

    // scheduled_start_time - computed: true, optional: false, required: false
    public get scheduledStartTime() {
        return this.getStringAttribute('scheduled_start_time');
    }

    // source_location_name - computed: false, optional: false, required: true
    private _sourceLocationName?: string; 
    public get sourceLocationName() {
        return this.getStringAttribute('source_location_name');
    }
    public set sourceLocationName(value: string) {
        this._sourceLocationName = value;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            ad_breaks: cdktn.listMapper(ccProgramAdBreaksPropertyToTerraform, false)(this._adBreaks.internalValue),
            audience_media: cdktn.listMapper(ccProgramAudienceMediaPropertyToTerraform, false)(this._audienceMedia.internalValue),
            channel_name: cdktn.stringToTerraform(this._channelName),
            live_source_name: cdktn.stringToTerraform(this._liveSourceName),
            program_name: cdktn.stringToTerraform(this._programName),
            schedule_configuration: ccProgramScheduleConfigurationPropertyToTerraform(this._scheduleConfiguration.internalValue),
            source_location_name: cdktn.stringToTerraform(this._sourceLocationName),
            vod_source_name: cdktn.stringToTerraform(this._vodSourceName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ad_breaks: {
                value: cdktn.listMapperHcl(ccProgramAdBreaksPropertyToHclTerraform, false)(this._adBreaks.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProgram.AdBreaksPropertyList",
            },
            audience_media: {
                value: cdktn.listMapperHcl(ccProgramAudienceMediaPropertyToHclTerraform, false)(this._audienceMedia.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProgram.AudienceMediaPropertyList",
            },
            channel_name: {
                value: cdktn.stringToHclTerraform(this._channelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            live_source_name: {
                value: cdktn.stringToHclTerraform(this._liveSourceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            program_name: {
                value: cdktn.stringToHclTerraform(this._programName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule_configuration: {
                value: ccProgramScheduleConfigurationPropertyToHclTerraform(this._scheduleConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcProgram.ScheduleConfigurationProperty",
            },
            source_location_name: {
                value: cdktn.stringToHclTerraform(this._sourceLocationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vod_source_name: {
                value: cdktn.stringToHclTerraform(this._vodSourceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProgramAdBreaksAdBreakMetadataPropertyToTerraform(struct?: CcProgram.AdBreaksAdBreakMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProgramAdBreaksAdBreakMetadataPropertyToHclTerraform(struct?: CcProgram.AdBreaksAdBreakMetadataProperty | cdktn.IResolvable): any {
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


export function ccProgramAdBreaksSlatePropertyToTerraform(struct?: CcProgram.AdBreaksSlateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_location_name: cdktn.stringToTerraform(struct!.sourceLocationName),
        vod_source_name: cdktn.stringToTerraform(struct!.vodSourceName),
    }
}


export function ccProgramAdBreaksSlatePropertyToHclTerraform(struct?: CcProgram.AdBreaksSlateProperty | cdktn.IResolvable): any {
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


export function ccProgramAdBreaksSpliceInsertMessagePropertyToTerraform(struct?: CcProgram.AdBreaksSpliceInsertMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        avail_num: cdktn.numberToTerraform(struct!.availNum),
        avails_expected: cdktn.numberToTerraform(struct!.availsExpected),
        splice_event_id: cdktn.numberToTerraform(struct!.spliceEventId),
        unique_program_id: cdktn.numberToTerraform(struct!.uniqueProgramId),
    }
}


export function ccProgramAdBreaksSpliceInsertMessagePropertyToHclTerraform(struct?: CcProgram.AdBreaksSpliceInsertMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        avail_num: {
            value: cdktn.numberToHclTerraform(struct!.availNum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        avails_expected: {
            value: cdktn.numberToHclTerraform(struct!.availsExpected),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        splice_event_id: {
            value: cdktn.numberToHclTerraform(struct!.spliceEventId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unique_program_id: {
            value: cdktn.numberToHclTerraform(struct!.uniqueProgramId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyToTerraform(struct?: CcProgram.AdBreaksTimeSignalMessageSegmentationDescriptorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        segment_num: cdktn.numberToTerraform(struct!.segmentNum),
        segmentation_event_id: cdktn.numberToTerraform(struct!.segmentationEventId),
        segmentation_type_id: cdktn.numberToTerraform(struct!.segmentationTypeId),
        segmentation_upid: cdktn.stringToTerraform(struct!.segmentationUpid),
        segmentation_upid_type: cdktn.numberToTerraform(struct!.segmentationUpidType),
        segments_expected: cdktn.numberToTerraform(struct!.segmentsExpected),
        sub_segment_num: cdktn.numberToTerraform(struct!.subSegmentNum),
        sub_segments_expected: cdktn.numberToTerraform(struct!.subSegmentsExpected),
    }
}


export function ccProgramAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyToHclTerraform(struct?: CcProgram.AdBreaksTimeSignalMessageSegmentationDescriptorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        segment_num: {
            value: cdktn.numberToHclTerraform(struct!.segmentNum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        segmentation_event_id: {
            value: cdktn.numberToHclTerraform(struct!.segmentationEventId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        segmentation_type_id: {
            value: cdktn.numberToHclTerraform(struct!.segmentationTypeId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        segmentation_upid: {
            value: cdktn.stringToHclTerraform(struct!.segmentationUpid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        segmentation_upid_type: {
            value: cdktn.numberToHclTerraform(struct!.segmentationUpidType),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        segments_expected: {
            value: cdktn.numberToHclTerraform(struct!.segmentsExpected),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sub_segment_num: {
            value: cdktn.numberToHclTerraform(struct!.subSegmentNum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sub_segments_expected: {
            value: cdktn.numberToHclTerraform(struct!.subSegmentsExpected),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramAdBreaksTimeSignalMessagePropertyToTerraform(struct?: CcProgram.AdBreaksTimeSignalMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        segmentation_descriptors: cdktn.listMapper(ccProgramAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyToTerraform, false)(struct!.segmentationDescriptors),
    }
}


export function ccProgramAdBreaksTimeSignalMessagePropertyToHclTerraform(struct?: CcProgram.AdBreaksTimeSignalMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        segmentation_descriptors: {
            value: cdktn.listMapperHcl(ccProgramAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyToHclTerraform, false)(struct!.segmentationDescriptors),
            isBlock: true,
            type: "list",
            storageClassType: "AdBreaksTimeSignalMessageSegmentationDescriptorsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramAdBreaksPropertyToTerraform(struct?: CcProgram.AdBreaksProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ad_break_metadata: cdktn.listMapper(ccProgramAdBreaksAdBreakMetadataPropertyToTerraform, false)(struct!.adBreakMetadata),
        message_type: cdktn.stringToTerraform(struct!.messageType),
        offset_millis: cdktn.numberToTerraform(struct!.offsetMillis),
        slate: ccProgramAdBreaksSlatePropertyToTerraform(struct!.slate),
        splice_insert_message: ccProgramAdBreaksSpliceInsertMessagePropertyToTerraform(struct!.spliceInsertMessage),
        time_signal_message: ccProgramAdBreaksTimeSignalMessagePropertyToTerraform(struct!.timeSignalMessage),
    }
}


export function ccProgramAdBreaksPropertyToHclTerraform(struct?: CcProgram.AdBreaksProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ad_break_metadata: {
            value: cdktn.listMapperHcl(ccProgramAdBreaksAdBreakMetadataPropertyToHclTerraform, false)(struct!.adBreakMetadata),
            isBlock: true,
            type: "list",
            storageClassType: "AdBreaksAdBreakMetadataPropertyList",
        },
        message_type: {
            value: cdktn.stringToHclTerraform(struct!.messageType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        offset_millis: {
            value: cdktn.numberToHclTerraform(struct!.offsetMillis),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        slate: {
            value: ccProgramAdBreaksSlatePropertyToHclTerraform(struct!.slate),
            isBlock: true,
            type: "struct",
            storageClassType: "AdBreaksSlateProperty",
        },
        splice_insert_message: {
            value: ccProgramAdBreaksSpliceInsertMessagePropertyToHclTerraform(struct!.spliceInsertMessage),
            isBlock: true,
            type: "struct",
            storageClassType: "AdBreaksSpliceInsertMessageProperty",
        },
        time_signal_message: {
            value: ccProgramAdBreaksTimeSignalMessagePropertyToHclTerraform(struct!.timeSignalMessage),
            isBlock: true,
            type: "struct",
            storageClassType: "AdBreaksTimeSignalMessageProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataPropertyToTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksAdBreakMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataPropertyToHclTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksAdBreakMetadataProperty | cdktn.IResolvable): any {
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


export function ccProgramAudienceMediaAlternateMediaAdBreaksSlatePropertyToTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksSlateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_location_name: cdktn.stringToTerraform(struct!.sourceLocationName),
        vod_source_name: cdktn.stringToTerraform(struct!.vodSourceName),
    }
}


export function ccProgramAudienceMediaAlternateMediaAdBreaksSlatePropertyToHclTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksSlateProperty | cdktn.IResolvable): any {
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


export function ccProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessagePropertyToTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksSpliceInsertMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        avail_num: cdktn.numberToTerraform(struct!.availNum),
        avails_expected: cdktn.numberToTerraform(struct!.availsExpected),
        splice_event_id: cdktn.numberToTerraform(struct!.spliceEventId),
        unique_program_id: cdktn.numberToTerraform(struct!.uniqueProgramId),
    }
}


export function ccProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessagePropertyToHclTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksSpliceInsertMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        avail_num: {
            value: cdktn.numberToHclTerraform(struct!.availNum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        avails_expected: {
            value: cdktn.numberToHclTerraform(struct!.availsExpected),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        splice_event_id: {
            value: cdktn.numberToHclTerraform(struct!.spliceEventId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unique_program_id: {
            value: cdktn.numberToHclTerraform(struct!.uniqueProgramId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyToTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        segment_num: cdktn.numberToTerraform(struct!.segmentNum),
        segmentation_event_id: cdktn.numberToTerraform(struct!.segmentationEventId),
        segmentation_type_id: cdktn.numberToTerraform(struct!.segmentationTypeId),
        segmentation_upid: cdktn.stringToTerraform(struct!.segmentationUpid),
        segmentation_upid_type: cdktn.numberToTerraform(struct!.segmentationUpidType),
        segments_expected: cdktn.numberToTerraform(struct!.segmentsExpected),
        sub_segment_num: cdktn.numberToTerraform(struct!.subSegmentNum),
        sub_segments_expected: cdktn.numberToTerraform(struct!.subSegmentsExpected),
    }
}


export function ccProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyToHclTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        segment_num: {
            value: cdktn.numberToHclTerraform(struct!.segmentNum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        segmentation_event_id: {
            value: cdktn.numberToHclTerraform(struct!.segmentationEventId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        segmentation_type_id: {
            value: cdktn.numberToHclTerraform(struct!.segmentationTypeId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        segmentation_upid: {
            value: cdktn.stringToHclTerraform(struct!.segmentationUpid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        segmentation_upid_type: {
            value: cdktn.numberToHclTerraform(struct!.segmentationUpidType),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        segments_expected: {
            value: cdktn.numberToHclTerraform(struct!.segmentsExpected),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sub_segment_num: {
            value: cdktn.numberToHclTerraform(struct!.subSegmentNum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sub_segments_expected: {
            value: cdktn.numberToHclTerraform(struct!.subSegmentsExpected),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessagePropertyToTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksTimeSignalMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        segmentation_descriptors: cdktn.listMapper(ccProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyToTerraform, false)(struct!.segmentationDescriptors),
    }
}


export function ccProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessagePropertyToHclTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksTimeSignalMessageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        segmentation_descriptors: {
            value: cdktn.listMapperHcl(ccProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyToHclTerraform, false)(struct!.segmentationDescriptors),
            isBlock: true,
            type: "list",
            storageClassType: "AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramAudienceMediaAlternateMediaAdBreaksPropertyToTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ad_break_metadata: cdktn.listMapper(ccProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataPropertyToTerraform, false)(struct!.adBreakMetadata),
        message_type: cdktn.stringToTerraform(struct!.messageType),
        offset_millis: cdktn.numberToTerraform(struct!.offsetMillis),
        slate: ccProgramAudienceMediaAlternateMediaAdBreaksSlatePropertyToTerraform(struct!.slate),
        splice_insert_message: ccProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessagePropertyToTerraform(struct!.spliceInsertMessage),
        time_signal_message: ccProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessagePropertyToTerraform(struct!.timeSignalMessage),
    }
}


export function ccProgramAudienceMediaAlternateMediaAdBreaksPropertyToHclTerraform(struct?: CcProgram.AudienceMediaAlternateMediaAdBreaksProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ad_break_metadata: {
            value: cdktn.listMapperHcl(ccProgramAudienceMediaAlternateMediaAdBreaksAdBreakMetadataPropertyToHclTerraform, false)(struct!.adBreakMetadata),
            isBlock: true,
            type: "list",
            storageClassType: "AudienceMediaAlternateMediaAdBreaksAdBreakMetadataPropertyList",
        },
        message_type: {
            value: cdktn.stringToHclTerraform(struct!.messageType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        offset_millis: {
            value: cdktn.numberToHclTerraform(struct!.offsetMillis),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        slate: {
            value: ccProgramAudienceMediaAlternateMediaAdBreaksSlatePropertyToHclTerraform(struct!.slate),
            isBlock: true,
            type: "struct",
            storageClassType: "AudienceMediaAlternateMediaAdBreaksSlateProperty",
        },
        splice_insert_message: {
            value: ccProgramAudienceMediaAlternateMediaAdBreaksSpliceInsertMessagePropertyToHclTerraform(struct!.spliceInsertMessage),
            isBlock: true,
            type: "struct",
            storageClassType: "AudienceMediaAlternateMediaAdBreaksSpliceInsertMessageProperty",
        },
        time_signal_message: {
            value: ccProgramAudienceMediaAlternateMediaAdBreaksTimeSignalMessagePropertyToHclTerraform(struct!.timeSignalMessage),
            isBlock: true,
            type: "struct",
            storageClassType: "AudienceMediaAlternateMediaAdBreaksTimeSignalMessageProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramAudienceMediaAlternateMediaClipRangePropertyToTerraform(struct?: CcProgram.AudienceMediaAlternateMediaClipRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_offset_millis: cdktn.numberToTerraform(struct!.endOffsetMillis),
        start_offset_millis: cdktn.numberToTerraform(struct!.startOffsetMillis),
    }
}


export function ccProgramAudienceMediaAlternateMediaClipRangePropertyToHclTerraform(struct?: CcProgram.AudienceMediaAlternateMediaClipRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_offset_millis: {
            value: cdktn.numberToHclTerraform(struct!.endOffsetMillis),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_offset_millis: {
            value: cdktn.numberToHclTerraform(struct!.startOffsetMillis),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramAlternateMediaPropertyToTerraform(struct?: CcProgram.AlternateMediaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ad_breaks: cdktn.listMapper(ccProgramAudienceMediaAlternateMediaAdBreaksPropertyToTerraform, false)(struct!.adBreaks),
        clip_range: ccProgramAudienceMediaAlternateMediaClipRangePropertyToTerraform(struct!.clipRange),
        duration_millis: cdktn.numberToTerraform(struct!.durationMillis),
        live_source_name: cdktn.stringToTerraform(struct!.liveSourceName),
        scheduled_start_time_millis: cdktn.numberToTerraform(struct!.scheduledStartTimeMillis),
        source_location_name: cdktn.stringToTerraform(struct!.sourceLocationName),
        vod_source_name: cdktn.stringToTerraform(struct!.vodSourceName),
    }
}


export function ccProgramAlternateMediaPropertyToHclTerraform(struct?: CcProgram.AlternateMediaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ad_breaks: {
            value: cdktn.listMapperHcl(ccProgramAudienceMediaAlternateMediaAdBreaksPropertyToHclTerraform, false)(struct!.adBreaks),
            isBlock: true,
            type: "list",
            storageClassType: "AudienceMediaAlternateMediaAdBreaksPropertyList",
        },
        clip_range: {
            value: ccProgramAudienceMediaAlternateMediaClipRangePropertyToHclTerraform(struct!.clipRange),
            isBlock: true,
            type: "struct",
            storageClassType: "AudienceMediaAlternateMediaClipRangeProperty",
        },
        duration_millis: {
            value: cdktn.numberToHclTerraform(struct!.durationMillis),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        live_source_name: {
            value: cdktn.stringToHclTerraform(struct!.liveSourceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheduled_start_time_millis: {
            value: cdktn.numberToHclTerraform(struct!.scheduledStartTimeMillis),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
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


export function ccProgramAudienceMediaPropertyToTerraform(struct?: CcProgram.AudienceMediaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alternate_media: cdktn.listMapper(ccProgramAlternateMediaPropertyToTerraform, false)(struct!.alternateMedia),
        audience: cdktn.stringToTerraform(struct!.audience),
    }
}


export function ccProgramAudienceMediaPropertyToHclTerraform(struct?: CcProgram.AudienceMediaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alternate_media: {
            value: cdktn.listMapperHcl(ccProgramAlternateMediaPropertyToHclTerraform, false)(struct!.alternateMedia),
            isBlock: true,
            type: "list",
            storageClassType: "AlternateMediaPropertyList",
        },
        audience: {
            value: cdktn.stringToHclTerraform(struct!.audience),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramClipRangePropertyToTerraform(struct?: CcProgram.ClipRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccProgramClipRangePropertyToHclTerraform(struct?: CcProgram.ClipRangeProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccProgramScheduleConfigurationClipRangePropertyToTerraform(struct?: CcProgram.ScheduleConfigurationClipRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_offset_millis: cdktn.numberToTerraform(struct!.endOffsetMillis),
        start_offset_millis: cdktn.numberToTerraform(struct!.startOffsetMillis),
    }
}


export function ccProgramScheduleConfigurationClipRangePropertyToHclTerraform(struct?: CcProgram.ScheduleConfigurationClipRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_offset_millis: {
            value: cdktn.numberToHclTerraform(struct!.endOffsetMillis),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_offset_millis: {
            value: cdktn.numberToHclTerraform(struct!.startOffsetMillis),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramTransitionPropertyToTerraform(struct?: CcProgram.TransitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_millis: cdktn.numberToTerraform(struct!.durationMillis),
        relative_position: cdktn.stringToTerraform(struct!.relativePosition),
        relative_program: cdktn.stringToTerraform(struct!.relativeProgram),
        scheduled_start_time_millis: cdktn.numberToTerraform(struct!.scheduledStartTimeMillis),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccProgramTransitionPropertyToHclTerraform(struct?: CcProgram.TransitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration_millis: {
            value: cdktn.numberToHclTerraform(struct!.durationMillis),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        relative_position: {
            value: cdktn.stringToHclTerraform(struct!.relativePosition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        relative_program: {
            value: cdktn.stringToHclTerraform(struct!.relativeProgram),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheduled_start_time_millis: {
            value: cdktn.numberToHclTerraform(struct!.scheduledStartTimeMillis),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProgramScheduleConfigurationPropertyToTerraform(struct?: CcProgram.ScheduleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clip_range: ccProgramScheduleConfigurationClipRangePropertyToTerraform(struct!.clipRange),
        transition: ccProgramTransitionPropertyToTerraform(struct!.transition),
    }
}


export function ccProgramScheduleConfigurationPropertyToHclTerraform(struct?: CcProgram.ScheduleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clip_range: {
            value: ccProgramScheduleConfigurationClipRangePropertyToHclTerraform(struct!.clipRange),
            isBlock: true,
            type: "struct",
            storageClassType: "ScheduleConfigurationClipRangeProperty",
        },
        transition: {
            value: ccProgramTransitionPropertyToHclTerraform(struct!.transition),
            isBlock: true,
            type: "struct",
            storageClassType: "TransitionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcProgram {
export interface AdBreaksAdBreakMetadataProperty {
    /**
    * The key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#key CcProgram#key}
    */
    readonly key?: string;
    /**
    * The value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#value CcProgram#value}
    */
    readonly value?: string;
}
export class AdBreaksAdBreakMetadataPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AdBreaksAdBreakMetadataProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AdBreaksAdBreakMetadataProperty | cdktn.IResolvable | undefined) {
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

export class AdBreaksAdBreakMetadataPropertyList extends cdktn.ComplexList {
    public internalValue? : AdBreaksAdBreakMetadataProperty[] | cdktn.IResolvable

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
    public get(index: number): AdBreaksAdBreakMetadataPropertyOutputReference {
        return new AdBreaksAdBreakMetadataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AdBreaksSlateProperty {
    /**
    * The name of the source location where the slate VOD source is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#source_location_name CcProgram#source_location_name}
    */
    readonly sourceLocationName?: string;
    /**
    * The slate VOD source name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#vod_source_name CcProgram#vod_source_name}
    */
    readonly vodSourceName?: string;
}
export class AdBreaksSlatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdBreaksSlateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AdBreaksSlateProperty | cdktn.IResolvable | undefined) {
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
export interface AdBreaksSpliceInsertMessageProperty {
    /**
    * This is written to splice_insert.avail_num.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#avail_num CcProgram#avail_num}
    */
    readonly availNum?: number;
    /**
    * This is written to splice_insert.avails_expected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#avails_expected CcProgram#avails_expected}
    */
    readonly availsExpected?: number;
    /**
    * This is written to splice_insert.splice_event_id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#splice_event_id CcProgram#splice_event_id}
    */
    readonly spliceEventId?: number;
    /**
    * This is written to splice_insert.unique_program_id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#unique_program_id CcProgram#unique_program_id}
    */
    readonly uniqueProgramId?: number;
}
export class AdBreaksSpliceInsertMessagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdBreaksSpliceInsertMessageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availNum !== undefined) {
            hasAnyValues = true;
            internalValueResult.availNum = this._availNum;
        }
        if (this._availsExpected !== undefined) {
            hasAnyValues = true;
            internalValueResult.availsExpected = this._availsExpected;
        }
        if (this._spliceEventId !== undefined) {
            hasAnyValues = true;
            internalValueResult.spliceEventId = this._spliceEventId;
        }
        if (this._uniqueProgramId !== undefined) {
            hasAnyValues = true;
            internalValueResult.uniqueProgramId = this._uniqueProgramId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdBreaksSpliceInsertMessageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availNum = undefined;
            this._availsExpected = undefined;
            this._spliceEventId = undefined;
            this._uniqueProgramId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availNum = value.availNum;
            this._availsExpected = value.availsExpected;
            this._spliceEventId = value.spliceEventId;
            this._uniqueProgramId = value.uniqueProgramId;
        }
    }

    // avail_num - computed: true, optional: true, required: false
    private _availNum?: number; 
    public get availNum() {
        return this.getNumberAttribute('avail_num');
    }
    public set availNum(value: number) {
        this._availNum = value;
    }
    public resetAvailNum() {
        this._availNum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availNumInput() {
        return this._availNum;
    }

    // avails_expected - computed: true, optional: true, required: false
    private _availsExpected?: number; 
    public get availsExpected() {
        return this.getNumberAttribute('avails_expected');
    }
    public set availsExpected(value: number) {
        this._availsExpected = value;
    }
    public resetAvailsExpected() {
        this._availsExpected = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availsExpectedInput() {
        return this._availsExpected;
    }

    // splice_event_id - computed: true, optional: true, required: false
    private _spliceEventId?: number; 
    public get spliceEventId() {
        return this.getNumberAttribute('splice_event_id');
    }
    public set spliceEventId(value: number) {
        this._spliceEventId = value;
    }
    public resetSpliceEventId() {
        this._spliceEventId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spliceEventIdInput() {
        return this._spliceEventId;
    }

    // unique_program_id - computed: true, optional: true, required: false
    private _uniqueProgramId?: number; 
    public get uniqueProgramId() {
        return this.getNumberAttribute('unique_program_id');
    }
    public set uniqueProgramId(value: number) {
        this._uniqueProgramId = value;
    }
    public resetUniqueProgramId() {
        this._uniqueProgramId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uniqueProgramIdInput() {
        return this._uniqueProgramId;
    }
}
export interface AdBreaksTimeSignalMessageSegmentationDescriptorsProperty {
    /**
    * The segment number to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segment_num CcProgram#segment_num}
    */
    readonly segmentNum?: number;
    /**
    * The Event Identifier to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_event_id CcProgram#segmentation_event_id}
    */
    readonly segmentationEventId?: number;
    /**
    * The Type Identifier to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_type_id CcProgram#segmentation_type_id}
    */
    readonly segmentationTypeId?: number;
    /**
    * The Upid to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_upid CcProgram#segmentation_upid}
    */
    readonly segmentationUpid?: string;
    /**
    * The Upid Type to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_upid_type CcProgram#segmentation_upid_type}
    */
    readonly segmentationUpidType?: number;
    /**
    * The number of segments expected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segments_expected CcProgram#segments_expected}
    */
    readonly segmentsExpected?: number;
    /**
    * The sub-segment number to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#sub_segment_num CcProgram#sub_segment_num}
    */
    readonly subSegmentNum?: number;
    /**
    * The number of sub-segments expected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#sub_segments_expected CcProgram#sub_segments_expected}
    */
    readonly subSegmentsExpected?: number;
}
export class AdBreaksTimeSignalMessageSegmentationDescriptorsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AdBreaksTimeSignalMessageSegmentationDescriptorsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._segmentNum !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentNum = this._segmentNum;
        }
        if (this._segmentationEventId !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationEventId = this._segmentationEventId;
        }
        if (this._segmentationTypeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationTypeId = this._segmentationTypeId;
        }
        if (this._segmentationUpid !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationUpid = this._segmentationUpid;
        }
        if (this._segmentationUpidType !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationUpidType = this._segmentationUpidType;
        }
        if (this._segmentsExpected !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentsExpected = this._segmentsExpected;
        }
        if (this._subSegmentNum !== undefined) {
            hasAnyValues = true;
            internalValueResult.subSegmentNum = this._subSegmentNum;
        }
        if (this._subSegmentsExpected !== undefined) {
            hasAnyValues = true;
            internalValueResult.subSegmentsExpected = this._subSegmentsExpected;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdBreaksTimeSignalMessageSegmentationDescriptorsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._segmentNum = undefined;
            this._segmentationEventId = undefined;
            this._segmentationTypeId = undefined;
            this._segmentationUpid = undefined;
            this._segmentationUpidType = undefined;
            this._segmentsExpected = undefined;
            this._subSegmentNum = undefined;
            this._subSegmentsExpected = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._segmentNum = value.segmentNum;
            this._segmentationEventId = value.segmentationEventId;
            this._segmentationTypeId = value.segmentationTypeId;
            this._segmentationUpid = value.segmentationUpid;
            this._segmentationUpidType = value.segmentationUpidType;
            this._segmentsExpected = value.segmentsExpected;
            this._subSegmentNum = value.subSegmentNum;
            this._subSegmentsExpected = value.subSegmentsExpected;
        }
    }

    // segment_num - computed: true, optional: true, required: false
    private _segmentNum?: number; 
    public get segmentNum() {
        return this.getNumberAttribute('segment_num');
    }
    public set segmentNum(value: number) {
        this._segmentNum = value;
    }
    public resetSegmentNum() {
        this._segmentNum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentNumInput() {
        return this._segmentNum;
    }

    // segmentation_event_id - computed: true, optional: true, required: false
    private _segmentationEventId?: number; 
    public get segmentationEventId() {
        return this.getNumberAttribute('segmentation_event_id');
    }
    public set segmentationEventId(value: number) {
        this._segmentationEventId = value;
    }
    public resetSegmentationEventId() {
        this._segmentationEventId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationEventIdInput() {
        return this._segmentationEventId;
    }

    // segmentation_type_id - computed: true, optional: true, required: false
    private _segmentationTypeId?: number; 
    public get segmentationTypeId() {
        return this.getNumberAttribute('segmentation_type_id');
    }
    public set segmentationTypeId(value: number) {
        this._segmentationTypeId = value;
    }
    public resetSegmentationTypeId() {
        this._segmentationTypeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationTypeIdInput() {
        return this._segmentationTypeId;
    }

    // segmentation_upid - computed: true, optional: true, required: false
    private _segmentationUpid?: string; 
    public get segmentationUpid() {
        return this.getStringAttribute('segmentation_upid');
    }
    public set segmentationUpid(value: string) {
        this._segmentationUpid = value;
    }
    public resetSegmentationUpid() {
        this._segmentationUpid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationUpidInput() {
        return this._segmentationUpid;
    }

    // segmentation_upid_type - computed: true, optional: true, required: false
    private _segmentationUpidType?: number; 
    public get segmentationUpidType() {
        return this.getNumberAttribute('segmentation_upid_type');
    }
    public set segmentationUpidType(value: number) {
        this._segmentationUpidType = value;
    }
    public resetSegmentationUpidType() {
        this._segmentationUpidType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationUpidTypeInput() {
        return this._segmentationUpidType;
    }

    // segments_expected - computed: true, optional: true, required: false
    private _segmentsExpected?: number; 
    public get segmentsExpected() {
        return this.getNumberAttribute('segments_expected');
    }
    public set segmentsExpected(value: number) {
        this._segmentsExpected = value;
    }
    public resetSegmentsExpected() {
        this._segmentsExpected = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentsExpectedInput() {
        return this._segmentsExpected;
    }

    // sub_segment_num - computed: true, optional: true, required: false
    private _subSegmentNum?: number; 
    public get subSegmentNum() {
        return this.getNumberAttribute('sub_segment_num');
    }
    public set subSegmentNum(value: number) {
        this._subSegmentNum = value;
    }
    public resetSubSegmentNum() {
        this._subSegmentNum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subSegmentNumInput() {
        return this._subSegmentNum;
    }

    // sub_segments_expected - computed: true, optional: true, required: false
    private _subSegmentsExpected?: number; 
    public get subSegmentsExpected() {
        return this.getNumberAttribute('sub_segments_expected');
    }
    public set subSegmentsExpected(value: number) {
        this._subSegmentsExpected = value;
    }
    public resetSubSegmentsExpected() {
        this._subSegmentsExpected = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subSegmentsExpectedInput() {
        return this._subSegmentsExpected;
    }
}

export class AdBreaksTimeSignalMessageSegmentationDescriptorsPropertyList extends cdktn.ComplexList {
    public internalValue? : AdBreaksTimeSignalMessageSegmentationDescriptorsProperty[] | cdktn.IResolvable

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
    public get(index: number): AdBreaksTimeSignalMessageSegmentationDescriptorsPropertyOutputReference {
        return new AdBreaksTimeSignalMessageSegmentationDescriptorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AdBreaksTimeSignalMessageProperty {
    /**
    * The configurations for the SCTE-35 segmentation_descriptor message(s).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_descriptors CcProgram#segmentation_descriptors}
    */
    readonly segmentationDescriptors?: AdBreaksTimeSignalMessageSegmentationDescriptorsProperty[] | cdktn.IResolvable;
}
export class AdBreaksTimeSignalMessagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdBreaksTimeSignalMessageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._segmentationDescriptors?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationDescriptors = this._segmentationDescriptors?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdBreaksTimeSignalMessageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._segmentationDescriptors.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._segmentationDescriptors.internalValue = value.segmentationDescriptors;
        }
    }

    // segmentation_descriptors - computed: true, optional: true, required: false
    private _segmentationDescriptors = new AdBreaksTimeSignalMessageSegmentationDescriptorsPropertyList(this, "segmentation_descriptors", false);
    public get segmentationDescriptors() {
        return this._segmentationDescriptors;
    }
    public putSegmentationDescriptors(value: AdBreaksTimeSignalMessageSegmentationDescriptorsProperty[] | cdktn.IResolvable) {
        this._segmentationDescriptors.internalValue = value;
    }
    public resetSegmentationDescriptors() {
        this._segmentationDescriptors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationDescriptorsInput() {
        return this._segmentationDescriptors.internalValue;
    }
}
export interface AdBreaksProperty {
    /**
    * Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#ad_break_metadata CcProgram#ad_break_metadata}
    */
    readonly adBreakMetadata?: AdBreaksAdBreakMetadataProperty[] | cdktn.IResolvable;
    /**
    * The SCTE-35 ad insertion type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#message_type CcProgram#message_type}
    */
    readonly messageType?: string;
    /**
    * How long (in milliseconds) after the beginning of the program that an ad starts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#offset_millis CcProgram#offset_millis}
    */
    readonly offsetMillis?: number;
    /**
    * Slate VOD source configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#slate CcProgram#slate}
    */
    readonly slate?: AdBreaksSlateProperty;
    /**
    * Splice insert message configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#splice_insert_message CcProgram#splice_insert_message}
    */
    readonly spliceInsertMessage?: AdBreaksSpliceInsertMessageProperty;
    /**
    * The SCTE-35 time_signal message configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#time_signal_message CcProgram#time_signal_message}
    */
    readonly timeSignalMessage?: AdBreaksTimeSignalMessageProperty;
}
export class AdBreaksPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AdBreaksProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._adBreakMetadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.adBreakMetadata = this._adBreakMetadata?.internalValue;
        }
        if (this._messageType !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageType = this._messageType;
        }
        if (this._offsetMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetMillis = this._offsetMillis;
        }
        if (this._slate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slate = this._slate?.internalValue;
        }
        if (this._spliceInsertMessage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spliceInsertMessage = this._spliceInsertMessage?.internalValue;
        }
        if (this._timeSignalMessage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeSignalMessage = this._timeSignalMessage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdBreaksProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._adBreakMetadata.internalValue = undefined;
            this._messageType = undefined;
            this._offsetMillis = undefined;
            this._slate.internalValue = undefined;
            this._spliceInsertMessage.internalValue = undefined;
            this._timeSignalMessage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._adBreakMetadata.internalValue = value.adBreakMetadata;
            this._messageType = value.messageType;
            this._offsetMillis = value.offsetMillis;
            this._slate.internalValue = value.slate;
            this._spliceInsertMessage.internalValue = value.spliceInsertMessage;
            this._timeSignalMessage.internalValue = value.timeSignalMessage;
        }
    }

    // ad_break_metadata - computed: true, optional: true, required: false
    private _adBreakMetadata = new AdBreaksAdBreakMetadataPropertyList(this, "ad_break_metadata", false);
    public get adBreakMetadata() {
        return this._adBreakMetadata;
    }
    public putAdBreakMetadata(value: AdBreaksAdBreakMetadataProperty[] | cdktn.IResolvable) {
        this._adBreakMetadata.internalValue = value;
    }
    public resetAdBreakMetadata() {
        this._adBreakMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adBreakMetadataInput() {
        return this._adBreakMetadata.internalValue;
    }

    // message_type - computed: true, optional: true, required: false
    private _messageType?: string; 
    public get messageType() {
        return this.getStringAttribute('message_type');
    }
    public set messageType(value: string) {
        this._messageType = value;
    }
    public resetMessageType() {
        this._messageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageTypeInput() {
        return this._messageType;
    }

    // offset_millis - computed: true, optional: true, required: false
    private _offsetMillis?: number; 
    public get offsetMillis() {
        return this.getNumberAttribute('offset_millis');
    }
    public set offsetMillis(value: number) {
        this._offsetMillis = value;
    }
    public resetOffsetMillis() {
        this._offsetMillis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetMillisInput() {
        return this._offsetMillis;
    }

    // slate - computed: true, optional: true, required: false
    private _slate = new AdBreaksSlatePropertyOutputReference(this, "slate");
    public get slate() {
        return this._slate;
    }
    public putSlate(value: AdBreaksSlateProperty) {
        this._slate.internalValue = value;
    }
    public resetSlate() {
        this._slate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slateInput() {
        return this._slate.internalValue;
    }

    // splice_insert_message - computed: true, optional: true, required: false
    private _spliceInsertMessage = new AdBreaksSpliceInsertMessagePropertyOutputReference(this, "splice_insert_message");
    public get spliceInsertMessage() {
        return this._spliceInsertMessage;
    }
    public putSpliceInsertMessage(value: AdBreaksSpliceInsertMessageProperty) {
        this._spliceInsertMessage.internalValue = value;
    }
    public resetSpliceInsertMessage() {
        this._spliceInsertMessage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spliceInsertMessageInput() {
        return this._spliceInsertMessage.internalValue;
    }

    // time_signal_message - computed: true, optional: true, required: false
    private _timeSignalMessage = new AdBreaksTimeSignalMessagePropertyOutputReference(this, "time_signal_message");
    public get timeSignalMessage() {
        return this._timeSignalMessage;
    }
    public putTimeSignalMessage(value: AdBreaksTimeSignalMessageProperty) {
        this._timeSignalMessage.internalValue = value;
    }
    public resetTimeSignalMessage() {
        this._timeSignalMessage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeSignalMessageInput() {
        return this._timeSignalMessage.internalValue;
    }
}

export class AdBreaksPropertyList extends cdktn.ComplexList {
    public internalValue? : AdBreaksProperty[] | cdktn.IResolvable

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
    public get(index: number): AdBreaksPropertyOutputReference {
        return new AdBreaksPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AudienceMediaAlternateMediaAdBreaksAdBreakMetadataProperty {
    /**
    * The key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#key CcProgram#key}
    */
    readonly key?: string;
    /**
    * The value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#value CcProgram#value}
    */
    readonly value?: string;
}
export class AudienceMediaAlternateMediaAdBreaksAdBreakMetadataPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AudienceMediaAlternateMediaAdBreaksAdBreakMetadataProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AudienceMediaAlternateMediaAdBreaksAdBreakMetadataProperty | cdktn.IResolvable | undefined) {
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

export class AudienceMediaAlternateMediaAdBreaksAdBreakMetadataPropertyList extends cdktn.ComplexList {
    public internalValue? : AudienceMediaAlternateMediaAdBreaksAdBreakMetadataProperty[] | cdktn.IResolvable

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
    public get(index: number): AudienceMediaAlternateMediaAdBreaksAdBreakMetadataPropertyOutputReference {
        return new AudienceMediaAlternateMediaAdBreaksAdBreakMetadataPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AudienceMediaAlternateMediaAdBreaksSlateProperty {
    /**
    * The name of the source location where the slate VOD source is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#source_location_name CcProgram#source_location_name}
    */
    readonly sourceLocationName?: string;
    /**
    * The slate VOD source name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#vod_source_name CcProgram#vod_source_name}
    */
    readonly vodSourceName?: string;
}
export class AudienceMediaAlternateMediaAdBreaksSlatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudienceMediaAlternateMediaAdBreaksSlateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AudienceMediaAlternateMediaAdBreaksSlateProperty | cdktn.IResolvable | undefined) {
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
export interface AudienceMediaAlternateMediaAdBreaksSpliceInsertMessageProperty {
    /**
    * This is written to splice_insert.avail_num.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#avail_num CcProgram#avail_num}
    */
    readonly availNum?: number;
    /**
    * This is written to splice_insert.avails_expected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#avails_expected CcProgram#avails_expected}
    */
    readonly availsExpected?: number;
    /**
    * This is written to splice_insert.splice_event_id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#splice_event_id CcProgram#splice_event_id}
    */
    readonly spliceEventId?: number;
    /**
    * This is written to splice_insert.unique_program_id.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#unique_program_id CcProgram#unique_program_id}
    */
    readonly uniqueProgramId?: number;
}
export class AudienceMediaAlternateMediaAdBreaksSpliceInsertMessagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudienceMediaAlternateMediaAdBreaksSpliceInsertMessageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availNum !== undefined) {
            hasAnyValues = true;
            internalValueResult.availNum = this._availNum;
        }
        if (this._availsExpected !== undefined) {
            hasAnyValues = true;
            internalValueResult.availsExpected = this._availsExpected;
        }
        if (this._spliceEventId !== undefined) {
            hasAnyValues = true;
            internalValueResult.spliceEventId = this._spliceEventId;
        }
        if (this._uniqueProgramId !== undefined) {
            hasAnyValues = true;
            internalValueResult.uniqueProgramId = this._uniqueProgramId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudienceMediaAlternateMediaAdBreaksSpliceInsertMessageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availNum = undefined;
            this._availsExpected = undefined;
            this._spliceEventId = undefined;
            this._uniqueProgramId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availNum = value.availNum;
            this._availsExpected = value.availsExpected;
            this._spliceEventId = value.spliceEventId;
            this._uniqueProgramId = value.uniqueProgramId;
        }
    }

    // avail_num - computed: true, optional: true, required: false
    private _availNum?: number; 
    public get availNum() {
        return this.getNumberAttribute('avail_num');
    }
    public set availNum(value: number) {
        this._availNum = value;
    }
    public resetAvailNum() {
        this._availNum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availNumInput() {
        return this._availNum;
    }

    // avails_expected - computed: true, optional: true, required: false
    private _availsExpected?: number; 
    public get availsExpected() {
        return this.getNumberAttribute('avails_expected');
    }
    public set availsExpected(value: number) {
        this._availsExpected = value;
    }
    public resetAvailsExpected() {
        this._availsExpected = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availsExpectedInput() {
        return this._availsExpected;
    }

    // splice_event_id - computed: true, optional: true, required: false
    private _spliceEventId?: number; 
    public get spliceEventId() {
        return this.getNumberAttribute('splice_event_id');
    }
    public set spliceEventId(value: number) {
        this._spliceEventId = value;
    }
    public resetSpliceEventId() {
        this._spliceEventId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spliceEventIdInput() {
        return this._spliceEventId;
    }

    // unique_program_id - computed: true, optional: true, required: false
    private _uniqueProgramId?: number; 
    public get uniqueProgramId() {
        return this.getNumberAttribute('unique_program_id');
    }
    public set uniqueProgramId(value: number) {
        this._uniqueProgramId = value;
    }
    public resetUniqueProgramId() {
        this._uniqueProgramId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uniqueProgramIdInput() {
        return this._uniqueProgramId;
    }
}
export interface AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsProperty {
    /**
    * The segment number to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segment_num CcProgram#segment_num}
    */
    readonly segmentNum?: number;
    /**
    * The Event Identifier to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_event_id CcProgram#segmentation_event_id}
    */
    readonly segmentationEventId?: number;
    /**
    * The Type Identifier to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_type_id CcProgram#segmentation_type_id}
    */
    readonly segmentationTypeId?: number;
    /**
    * The Upid to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_upid CcProgram#segmentation_upid}
    */
    readonly segmentationUpid?: string;
    /**
    * The Upid Type to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_upid_type CcProgram#segmentation_upid_type}
    */
    readonly segmentationUpidType?: number;
    /**
    * The number of segments expected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segments_expected CcProgram#segments_expected}
    */
    readonly segmentsExpected?: number;
    /**
    * The sub-segment number to assign.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#sub_segment_num CcProgram#sub_segment_num}
    */
    readonly subSegmentNum?: number;
    /**
    * The number of sub-segments expected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#sub_segments_expected CcProgram#sub_segments_expected}
    */
    readonly subSegmentsExpected?: number;
}
export class AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._segmentNum !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentNum = this._segmentNum;
        }
        if (this._segmentationEventId !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationEventId = this._segmentationEventId;
        }
        if (this._segmentationTypeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationTypeId = this._segmentationTypeId;
        }
        if (this._segmentationUpid !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationUpid = this._segmentationUpid;
        }
        if (this._segmentationUpidType !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationUpidType = this._segmentationUpidType;
        }
        if (this._segmentsExpected !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentsExpected = this._segmentsExpected;
        }
        if (this._subSegmentNum !== undefined) {
            hasAnyValues = true;
            internalValueResult.subSegmentNum = this._subSegmentNum;
        }
        if (this._subSegmentsExpected !== undefined) {
            hasAnyValues = true;
            internalValueResult.subSegmentsExpected = this._subSegmentsExpected;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._segmentNum = undefined;
            this._segmentationEventId = undefined;
            this._segmentationTypeId = undefined;
            this._segmentationUpid = undefined;
            this._segmentationUpidType = undefined;
            this._segmentsExpected = undefined;
            this._subSegmentNum = undefined;
            this._subSegmentsExpected = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._segmentNum = value.segmentNum;
            this._segmentationEventId = value.segmentationEventId;
            this._segmentationTypeId = value.segmentationTypeId;
            this._segmentationUpid = value.segmentationUpid;
            this._segmentationUpidType = value.segmentationUpidType;
            this._segmentsExpected = value.segmentsExpected;
            this._subSegmentNum = value.subSegmentNum;
            this._subSegmentsExpected = value.subSegmentsExpected;
        }
    }

    // segment_num - computed: true, optional: true, required: false
    private _segmentNum?: number; 
    public get segmentNum() {
        return this.getNumberAttribute('segment_num');
    }
    public set segmentNum(value: number) {
        this._segmentNum = value;
    }
    public resetSegmentNum() {
        this._segmentNum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentNumInput() {
        return this._segmentNum;
    }

    // segmentation_event_id - computed: true, optional: true, required: false
    private _segmentationEventId?: number; 
    public get segmentationEventId() {
        return this.getNumberAttribute('segmentation_event_id');
    }
    public set segmentationEventId(value: number) {
        this._segmentationEventId = value;
    }
    public resetSegmentationEventId() {
        this._segmentationEventId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationEventIdInput() {
        return this._segmentationEventId;
    }

    // segmentation_type_id - computed: true, optional: true, required: false
    private _segmentationTypeId?: number; 
    public get segmentationTypeId() {
        return this.getNumberAttribute('segmentation_type_id');
    }
    public set segmentationTypeId(value: number) {
        this._segmentationTypeId = value;
    }
    public resetSegmentationTypeId() {
        this._segmentationTypeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationTypeIdInput() {
        return this._segmentationTypeId;
    }

    // segmentation_upid - computed: true, optional: true, required: false
    private _segmentationUpid?: string; 
    public get segmentationUpid() {
        return this.getStringAttribute('segmentation_upid');
    }
    public set segmentationUpid(value: string) {
        this._segmentationUpid = value;
    }
    public resetSegmentationUpid() {
        this._segmentationUpid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationUpidInput() {
        return this._segmentationUpid;
    }

    // segmentation_upid_type - computed: true, optional: true, required: false
    private _segmentationUpidType?: number; 
    public get segmentationUpidType() {
        return this.getNumberAttribute('segmentation_upid_type');
    }
    public set segmentationUpidType(value: number) {
        this._segmentationUpidType = value;
    }
    public resetSegmentationUpidType() {
        this._segmentationUpidType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationUpidTypeInput() {
        return this._segmentationUpidType;
    }

    // segments_expected - computed: true, optional: true, required: false
    private _segmentsExpected?: number; 
    public get segmentsExpected() {
        return this.getNumberAttribute('segments_expected');
    }
    public set segmentsExpected(value: number) {
        this._segmentsExpected = value;
    }
    public resetSegmentsExpected() {
        this._segmentsExpected = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentsExpectedInput() {
        return this._segmentsExpected;
    }

    // sub_segment_num - computed: true, optional: true, required: false
    private _subSegmentNum?: number; 
    public get subSegmentNum() {
        return this.getNumberAttribute('sub_segment_num');
    }
    public set subSegmentNum(value: number) {
        this._subSegmentNum = value;
    }
    public resetSubSegmentNum() {
        this._subSegmentNum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subSegmentNumInput() {
        return this._subSegmentNum;
    }

    // sub_segments_expected - computed: true, optional: true, required: false
    private _subSegmentsExpected?: number; 
    public get subSegmentsExpected() {
        return this.getNumberAttribute('sub_segments_expected');
    }
    public set subSegmentsExpected(value: number) {
        this._subSegmentsExpected = value;
    }
    public resetSubSegmentsExpected() {
        this._subSegmentsExpected = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subSegmentsExpectedInput() {
        return this._subSegmentsExpected;
    }
}

export class AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyList extends cdktn.ComplexList {
    public internalValue? : AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsProperty[] | cdktn.IResolvable

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
    public get(index: number): AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyOutputReference {
        return new AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AudienceMediaAlternateMediaAdBreaksTimeSignalMessageProperty {
    /**
    * The configurations for the SCTE-35 segmentation_descriptor message(s).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#segmentation_descriptors CcProgram#segmentation_descriptors}
    */
    readonly segmentationDescriptors?: AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsProperty[] | cdktn.IResolvable;
}
export class AudienceMediaAlternateMediaAdBreaksTimeSignalMessagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudienceMediaAlternateMediaAdBreaksTimeSignalMessageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._segmentationDescriptors?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentationDescriptors = this._segmentationDescriptors?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudienceMediaAlternateMediaAdBreaksTimeSignalMessageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._segmentationDescriptors.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._segmentationDescriptors.internalValue = value.segmentationDescriptors;
        }
    }

    // segmentation_descriptors - computed: true, optional: true, required: false
    private _segmentationDescriptors = new AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsPropertyList(this, "segmentation_descriptors", false);
    public get segmentationDescriptors() {
        return this._segmentationDescriptors;
    }
    public putSegmentationDescriptors(value: AudienceMediaAlternateMediaAdBreaksTimeSignalMessageSegmentationDescriptorsProperty[] | cdktn.IResolvable) {
        this._segmentationDescriptors.internalValue = value;
    }
    public resetSegmentationDescriptors() {
        this._segmentationDescriptors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentationDescriptorsInput() {
        return this._segmentationDescriptors.internalValue;
    }
}
export interface AudienceMediaAlternateMediaAdBreaksProperty {
    /**
    * Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#ad_break_metadata CcProgram#ad_break_metadata}
    */
    readonly adBreakMetadata?: AudienceMediaAlternateMediaAdBreaksAdBreakMetadataProperty[] | cdktn.IResolvable;
    /**
    * The SCTE-35 ad insertion type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#message_type CcProgram#message_type}
    */
    readonly messageType?: string;
    /**
    * How long (in milliseconds) after the beginning of the program that an ad starts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#offset_millis CcProgram#offset_millis}
    */
    readonly offsetMillis?: number;
    /**
    * Slate VOD source configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#slate CcProgram#slate}
    */
    readonly slate?: AudienceMediaAlternateMediaAdBreaksSlateProperty;
    /**
    * Splice insert message configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#splice_insert_message CcProgram#splice_insert_message}
    */
    readonly spliceInsertMessage?: AudienceMediaAlternateMediaAdBreaksSpliceInsertMessageProperty;
    /**
    * The SCTE-35 time_signal message configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#time_signal_message CcProgram#time_signal_message}
    */
    readonly timeSignalMessage?: AudienceMediaAlternateMediaAdBreaksTimeSignalMessageProperty;
}
export class AudienceMediaAlternateMediaAdBreaksPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AudienceMediaAlternateMediaAdBreaksProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._adBreakMetadata?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.adBreakMetadata = this._adBreakMetadata?.internalValue;
        }
        if (this._messageType !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageType = this._messageType;
        }
        if (this._offsetMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetMillis = this._offsetMillis;
        }
        if (this._slate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.slate = this._slate?.internalValue;
        }
        if (this._spliceInsertMessage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spliceInsertMessage = this._spliceInsertMessage?.internalValue;
        }
        if (this._timeSignalMessage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeSignalMessage = this._timeSignalMessage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudienceMediaAlternateMediaAdBreaksProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._adBreakMetadata.internalValue = undefined;
            this._messageType = undefined;
            this._offsetMillis = undefined;
            this._slate.internalValue = undefined;
            this._spliceInsertMessage.internalValue = undefined;
            this._timeSignalMessage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._adBreakMetadata.internalValue = value.adBreakMetadata;
            this._messageType = value.messageType;
            this._offsetMillis = value.offsetMillis;
            this._slate.internalValue = value.slate;
            this._spliceInsertMessage.internalValue = value.spliceInsertMessage;
            this._timeSignalMessage.internalValue = value.timeSignalMessage;
        }
    }

    // ad_break_metadata - computed: true, optional: true, required: false
    private _adBreakMetadata = new AudienceMediaAlternateMediaAdBreaksAdBreakMetadataPropertyList(this, "ad_break_metadata", false);
    public get adBreakMetadata() {
        return this._adBreakMetadata;
    }
    public putAdBreakMetadata(value: AudienceMediaAlternateMediaAdBreaksAdBreakMetadataProperty[] | cdktn.IResolvable) {
        this._adBreakMetadata.internalValue = value;
    }
    public resetAdBreakMetadata() {
        this._adBreakMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adBreakMetadataInput() {
        return this._adBreakMetadata.internalValue;
    }

    // message_type - computed: true, optional: true, required: false
    private _messageType?: string; 
    public get messageType() {
        return this.getStringAttribute('message_type');
    }
    public set messageType(value: string) {
        this._messageType = value;
    }
    public resetMessageType() {
        this._messageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageTypeInput() {
        return this._messageType;
    }

    // offset_millis - computed: true, optional: true, required: false
    private _offsetMillis?: number; 
    public get offsetMillis() {
        return this.getNumberAttribute('offset_millis');
    }
    public set offsetMillis(value: number) {
        this._offsetMillis = value;
    }
    public resetOffsetMillis() {
        this._offsetMillis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetMillisInput() {
        return this._offsetMillis;
    }

    // slate - computed: true, optional: true, required: false
    private _slate = new AudienceMediaAlternateMediaAdBreaksSlatePropertyOutputReference(this, "slate");
    public get slate() {
        return this._slate;
    }
    public putSlate(value: AudienceMediaAlternateMediaAdBreaksSlateProperty) {
        this._slate.internalValue = value;
    }
    public resetSlate() {
        this._slate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slateInput() {
        return this._slate.internalValue;
    }

    // splice_insert_message - computed: true, optional: true, required: false
    private _spliceInsertMessage = new AudienceMediaAlternateMediaAdBreaksSpliceInsertMessagePropertyOutputReference(this, "splice_insert_message");
    public get spliceInsertMessage() {
        return this._spliceInsertMessage;
    }
    public putSpliceInsertMessage(value: AudienceMediaAlternateMediaAdBreaksSpliceInsertMessageProperty) {
        this._spliceInsertMessage.internalValue = value;
    }
    public resetSpliceInsertMessage() {
        this._spliceInsertMessage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spliceInsertMessageInput() {
        return this._spliceInsertMessage.internalValue;
    }

    // time_signal_message - computed: true, optional: true, required: false
    private _timeSignalMessage = new AudienceMediaAlternateMediaAdBreaksTimeSignalMessagePropertyOutputReference(this, "time_signal_message");
    public get timeSignalMessage() {
        return this._timeSignalMessage;
    }
    public putTimeSignalMessage(value: AudienceMediaAlternateMediaAdBreaksTimeSignalMessageProperty) {
        this._timeSignalMessage.internalValue = value;
    }
    public resetTimeSignalMessage() {
        this._timeSignalMessage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeSignalMessageInput() {
        return this._timeSignalMessage.internalValue;
    }
}

export class AudienceMediaAlternateMediaAdBreaksPropertyList extends cdktn.ComplexList {
    public internalValue? : AudienceMediaAlternateMediaAdBreaksProperty[] | cdktn.IResolvable

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
    public get(index: number): AudienceMediaAlternateMediaAdBreaksPropertyOutputReference {
        return new AudienceMediaAlternateMediaAdBreaksPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AudienceMediaAlternateMediaClipRangeProperty {
    /**
    * The end offset of the clip range, in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#end_offset_millis CcProgram#end_offset_millis}
    */
    readonly endOffsetMillis?: number;
    /**
    * The start offset of the clip range, in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#start_offset_millis CcProgram#start_offset_millis}
    */
    readonly startOffsetMillis?: number;
}
export class AudienceMediaAlternateMediaClipRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AudienceMediaAlternateMediaClipRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endOffsetMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.endOffsetMillis = this._endOffsetMillis;
        }
        if (this._startOffsetMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.startOffsetMillis = this._startOffsetMillis;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudienceMediaAlternateMediaClipRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endOffsetMillis = undefined;
            this._startOffsetMillis = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endOffsetMillis = value.endOffsetMillis;
            this._startOffsetMillis = value.startOffsetMillis;
        }
    }

    // end_offset_millis - computed: true, optional: true, required: false
    private _endOffsetMillis?: number; 
    public get endOffsetMillis() {
        return this.getNumberAttribute('end_offset_millis');
    }
    public set endOffsetMillis(value: number) {
        this._endOffsetMillis = value;
    }
    public resetEndOffsetMillis() {
        this._endOffsetMillis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endOffsetMillisInput() {
        return this._endOffsetMillis;
    }

    // start_offset_millis - computed: true, optional: true, required: false
    private _startOffsetMillis?: number; 
    public get startOffsetMillis() {
        return this.getNumberAttribute('start_offset_millis');
    }
    public set startOffsetMillis(value: number) {
        this._startOffsetMillis = value;
    }
    public resetStartOffsetMillis() {
        this._startOffsetMillis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startOffsetMillisInput() {
        return this._startOffsetMillis;
    }
}
export interface AlternateMediaProperty {
    /**
    * Ad break configuration parameters defined in AlternateMedia.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#ad_breaks CcProgram#ad_breaks}
    */
    readonly adBreaks?: AudienceMediaAlternateMediaAdBreaksProperty[] | cdktn.IResolvable;
    /**
    * Clip range configuration for the VOD source associated with the program.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#clip_range CcProgram#clip_range}
    */
    readonly clipRange?: AudienceMediaAlternateMediaClipRangeProperty;
    /**
    * The duration of the alternateMedia in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#duration_millis CcProgram#duration_millis}
    */
    readonly durationMillis?: number;
    /**
    * The name of the live source for alternateMedia.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#live_source_name CcProgram#live_source_name}
    */
    readonly liveSourceName?: string;
    /**
    * The date and time that the alternateMedia is scheduled to start, in epoch milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#scheduled_start_time_millis CcProgram#scheduled_start_time_millis}
    */
    readonly scheduledStartTimeMillis?: number;
    /**
    * The name of the source location for alternateMedia.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#source_location_name CcProgram#source_location_name}
    */
    readonly sourceLocationName?: string;
    /**
    * The name of the VOD source for alternateMedia.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#vod_source_name CcProgram#vod_source_name}
    */
    readonly vodSourceName?: string;
}
export class AlternateMediaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AlternateMediaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._adBreaks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.adBreaks = this._adBreaks?.internalValue;
        }
        if (this._clipRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clipRange = this._clipRange?.internalValue;
        }
        if (this._durationMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationMillis = this._durationMillis;
        }
        if (this._liveSourceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.liveSourceName = this._liveSourceName;
        }
        if (this._scheduledStartTimeMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduledStartTimeMillis = this._scheduledStartTimeMillis;
        }
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

    public set internalValue(value: AlternateMediaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._adBreaks.internalValue = undefined;
            this._clipRange.internalValue = undefined;
            this._durationMillis = undefined;
            this._liveSourceName = undefined;
            this._scheduledStartTimeMillis = undefined;
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
            this._adBreaks.internalValue = value.adBreaks;
            this._clipRange.internalValue = value.clipRange;
            this._durationMillis = value.durationMillis;
            this._liveSourceName = value.liveSourceName;
            this._scheduledStartTimeMillis = value.scheduledStartTimeMillis;
            this._sourceLocationName = value.sourceLocationName;
            this._vodSourceName = value.vodSourceName;
        }
    }

    // ad_breaks - computed: true, optional: true, required: false
    private _adBreaks = new AudienceMediaAlternateMediaAdBreaksPropertyList(this, "ad_breaks", false);
    public get adBreaks() {
        return this._adBreaks;
    }
    public putAdBreaks(value: AudienceMediaAlternateMediaAdBreaksProperty[] | cdktn.IResolvable) {
        this._adBreaks.internalValue = value;
    }
    public resetAdBreaks() {
        this._adBreaks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adBreaksInput() {
        return this._adBreaks.internalValue;
    }

    // clip_range - computed: true, optional: true, required: false
    private _clipRange = new AudienceMediaAlternateMediaClipRangePropertyOutputReference(this, "clip_range");
    public get clipRange() {
        return this._clipRange;
    }
    public putClipRange(value: AudienceMediaAlternateMediaClipRangeProperty) {
        this._clipRange.internalValue = value;
    }
    public resetClipRange() {
        this._clipRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clipRangeInput() {
        return this._clipRange.internalValue;
    }

    // duration_millis - computed: true, optional: true, required: false
    private _durationMillis?: number; 
    public get durationMillis() {
        return this.getNumberAttribute('duration_millis');
    }
    public set durationMillis(value: number) {
        this._durationMillis = value;
    }
    public resetDurationMillis() {
        this._durationMillis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationMillisInput() {
        return this._durationMillis;
    }

    // live_source_name - computed: true, optional: true, required: false
    private _liveSourceName?: string; 
    public get liveSourceName() {
        return this.getStringAttribute('live_source_name');
    }
    public set liveSourceName(value: string) {
        this._liveSourceName = value;
    }
    public resetLiveSourceName() {
        this._liveSourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get liveSourceNameInput() {
        return this._liveSourceName;
    }

    // scheduled_start_time_millis - computed: true, optional: true, required: false
    private _scheduledStartTimeMillis?: number; 
    public get scheduledStartTimeMillis() {
        return this.getNumberAttribute('scheduled_start_time_millis');
    }
    public set scheduledStartTimeMillis(value: number) {
        this._scheduledStartTimeMillis = value;
    }
    public resetScheduledStartTimeMillis() {
        this._scheduledStartTimeMillis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledStartTimeMillisInput() {
        return this._scheduledStartTimeMillis;
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

export class AlternateMediaPropertyList extends cdktn.ComplexList {
    public internalValue? : AlternateMediaProperty[] | cdktn.IResolvable

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
    public get(index: number): AlternateMediaPropertyOutputReference {
        return new AlternateMediaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AudienceMediaProperty {
    /**
    * The list of AlternateMedia defined in AudienceMedia.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#alternate_media CcProgram#alternate_media}
    */
    readonly alternateMedia?: AlternateMediaProperty[] | cdktn.IResolvable;
    /**
    * The Audience defined in AudienceMedia.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#audience CcProgram#audience}
    */
    readonly audience?: string;
}
export class AudienceMediaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AudienceMediaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alternateMedia?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alternateMedia = this._alternateMedia?.internalValue;
        }
        if (this._audience !== undefined) {
            hasAnyValues = true;
            internalValueResult.audience = this._audience;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudienceMediaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alternateMedia.internalValue = undefined;
            this._audience = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alternateMedia.internalValue = value.alternateMedia;
            this._audience = value.audience;
        }
    }

    // alternate_media - computed: true, optional: true, required: false
    private _alternateMedia = new AlternateMediaPropertyList(this, "alternate_media", false);
    public get alternateMedia() {
        return this._alternateMedia;
    }
    public putAlternateMedia(value: AlternateMediaProperty[] | cdktn.IResolvable) {
        this._alternateMedia.internalValue = value;
    }
    public resetAlternateMedia() {
        this._alternateMedia.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alternateMediaInput() {
        return this._alternateMedia.internalValue;
    }

    // audience - computed: true, optional: true, required: false
    private _audience?: string; 
    public get audience() {
        return this.getStringAttribute('audience');
    }
    public set audience(value: string) {
        this._audience = value;
    }
    public resetAudience() {
        this._audience = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audienceInput() {
        return this._audience;
    }
}

export class AudienceMediaPropertyList extends cdktn.ComplexList {
    public internalValue? : AudienceMediaProperty[] | cdktn.IResolvable

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
    public get(index: number): AudienceMediaPropertyOutputReference {
        return new AudienceMediaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ClipRangeProperty {
}
export class ClipRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClipRangeProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClipRangeProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // end_offset_millis - computed: true, optional: false, required: false
    public get endOffsetMillis() {
        return this.getNumberAttribute('end_offset_millis');
    }

    // start_offset_millis - computed: true, optional: false, required: false
    public get startOffsetMillis() {
        return this.getNumberAttribute('start_offset_millis');
    }
}
export interface ScheduleConfigurationClipRangeProperty {
    /**
    * The end offset of the clip range, in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#end_offset_millis CcProgram#end_offset_millis}
    */
    readonly endOffsetMillis?: number;
    /**
    * The start offset of the clip range, in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#start_offset_millis CcProgram#start_offset_millis}
    */
    readonly startOffsetMillis?: number;
}
export class ScheduleConfigurationClipRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleConfigurationClipRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endOffsetMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.endOffsetMillis = this._endOffsetMillis;
        }
        if (this._startOffsetMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.startOffsetMillis = this._startOffsetMillis;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleConfigurationClipRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endOffsetMillis = undefined;
            this._startOffsetMillis = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endOffsetMillis = value.endOffsetMillis;
            this._startOffsetMillis = value.startOffsetMillis;
        }
    }

    // end_offset_millis - computed: true, optional: true, required: false
    private _endOffsetMillis?: number; 
    public get endOffsetMillis() {
        return this.getNumberAttribute('end_offset_millis');
    }
    public set endOffsetMillis(value: number) {
        this._endOffsetMillis = value;
    }
    public resetEndOffsetMillis() {
        this._endOffsetMillis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endOffsetMillisInput() {
        return this._endOffsetMillis;
    }

    // start_offset_millis - computed: true, optional: true, required: false
    private _startOffsetMillis?: number; 
    public get startOffsetMillis() {
        return this.getNumberAttribute('start_offset_millis');
    }
    public set startOffsetMillis(value: number) {
        this._startOffsetMillis = value;
    }
    public resetStartOffsetMillis() {
        this._startOffsetMillis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startOffsetMillisInput() {
        return this._startOffsetMillis;
    }
}
export interface TransitionProperty {
    /**
    * The duration of the live program in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#duration_millis CcProgram#duration_millis}
    */
    readonly durationMillis?: number;
    /**
    * The position where this program will be inserted relative to the RelativePosition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#relative_position CcProgram#relative_position}
    */
    readonly relativePosition?: string;
    /**
    * The name of the program that this program will be inserted next to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#relative_program CcProgram#relative_program}
    */
    readonly relativeProgram?: string;
    /**
    * The date and time that the program is scheduled to start, in epoch milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#scheduled_start_time_millis CcProgram#scheduled_start_time_millis}
    */
    readonly scheduledStartTimeMillis?: number;
    /**
    * Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#type CcProgram#type}
    */
    readonly type?: string;
}
export class TransitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durationMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationMillis = this._durationMillis;
        }
        if (this._relativePosition !== undefined) {
            hasAnyValues = true;
            internalValueResult.relativePosition = this._relativePosition;
        }
        if (this._relativeProgram !== undefined) {
            hasAnyValues = true;
            internalValueResult.relativeProgram = this._relativeProgram;
        }
        if (this._scheduledStartTimeMillis !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduledStartTimeMillis = this._scheduledStartTimeMillis;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durationMillis = undefined;
            this._relativePosition = undefined;
            this._relativeProgram = undefined;
            this._scheduledStartTimeMillis = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durationMillis = value.durationMillis;
            this._relativePosition = value.relativePosition;
            this._relativeProgram = value.relativeProgram;
            this._scheduledStartTimeMillis = value.scheduledStartTimeMillis;
            this._type = value.type;
        }
    }

    // duration_millis - computed: true, optional: true, required: false
    private _durationMillis?: number; 
    public get durationMillis() {
        return this.getNumberAttribute('duration_millis');
    }
    public set durationMillis(value: number) {
        this._durationMillis = value;
    }
    public resetDurationMillis() {
        this._durationMillis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationMillisInput() {
        return this._durationMillis;
    }

    // relative_position - computed: true, optional: true, required: false
    private _relativePosition?: string; 
    public get relativePosition() {
        return this.getStringAttribute('relative_position');
    }
    public set relativePosition(value: string) {
        this._relativePosition = value;
    }
    public resetRelativePosition() {
        this._relativePosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relativePositionInput() {
        return this._relativePosition;
    }

    // relative_program - computed: true, optional: true, required: false
    private _relativeProgram?: string; 
    public get relativeProgram() {
        return this.getStringAttribute('relative_program');
    }
    public set relativeProgram(value: string) {
        this._relativeProgram = value;
    }
    public resetRelativeProgram() {
        this._relativeProgram = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relativeProgramInput() {
        return this._relativeProgram;
    }

    // scheduled_start_time_millis - computed: true, optional: true, required: false
    private _scheduledStartTimeMillis?: number; 
    public get scheduledStartTimeMillis() {
        return this.getNumberAttribute('scheduled_start_time_millis');
    }
    public set scheduledStartTimeMillis(value: number) {
        this._scheduledStartTimeMillis = value;
    }
    public resetScheduledStartTimeMillis() {
        this._scheduledStartTimeMillis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledStartTimeMillisInput() {
        return this._scheduledStartTimeMillis;
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
}
export interface ScheduleConfigurationProperty {
    /**
    * Clip range configuration for the VOD source associated with the program.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#clip_range CcProgram#clip_range}
    */
    readonly clipRange?: ScheduleConfigurationClipRangeProperty;
    /**
    * Program transition configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_program#transition CcProgram#transition}
    */
    readonly transition?: TransitionProperty;
}
export class ScheduleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clipRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clipRange = this._clipRange?.internalValue;
        }
        if (this._transition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transition = this._transition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clipRange.internalValue = undefined;
            this._transition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clipRange.internalValue = value.clipRange;
            this._transition.internalValue = value.transition;
        }
    }

    // clip_range - computed: true, optional: true, required: false
    private _clipRange = new ScheduleConfigurationClipRangePropertyOutputReference(this, "clip_range");
    public get clipRange() {
        return this._clipRange;
    }
    public putClipRange(value: ScheduleConfigurationClipRangeProperty) {
        this._clipRange.internalValue = value;
    }
    public resetClipRange() {
        this._clipRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clipRangeInput() {
        return this._clipRange.internalValue;
    }

    // transition - computed: true, optional: true, required: false
    private _transition = new TransitionPropertyOutputReference(this, "transition");
    public get transition() {
        return this._transition;
    }
    public putTransition(value: TransitionProperty) {
        this._transition.internalValue = value;
    }
    public resetTransition() {
        this._transition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionInput() {
        return this._transition.internalValue;
    }
}
}
