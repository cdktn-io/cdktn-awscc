// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStageProps extends cdktn.TerraformMetaArguments {
    /**
    * Configuration object for individual participant recording, to attach to the new stage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#auto_participant_recording_configuration CcStage#auto_participant_recording_configuration}
    */
    readonly autoParticipantRecordingConfiguration?: CcStage.AutoParticipantRecordingConfigurationProperty;
    /**
    * Stage name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#name CcStage#name}
    */
    readonly name?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#tags CcStage#tags}
    */
    readonly tags?: CcStage.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage awscc_ivs_stage}
*/
export class CcStage extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ivs_stage";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStage resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStage to import
    * @param importFromId The id of the existing CcStage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStage to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ivs_stage", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage awscc_ivs_stage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStageProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcStageProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ivs_stage',
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
        this._autoParticipantRecordingConfiguration.internalValue = config.autoParticipantRecordingConfiguration;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // active_session_id - computed: true, optional: false, required: false
    public get activeSessionId() {
        return this.getStringAttribute('active_session_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auto_participant_recording_configuration - computed: true, optional: true, required: false
    private _autoParticipantRecordingConfiguration = new CcStage.AutoParticipantRecordingConfigurationPropertyOutputReference(this, "auto_participant_recording_configuration");
    public get autoParticipantRecordingConfiguration() {
        return this._autoParticipantRecordingConfiguration;
    }
    public putAutoParticipantRecordingConfiguration(value: CcStage.AutoParticipantRecordingConfigurationProperty) {
        this._autoParticipantRecordingConfiguration.internalValue = value;
    }
    public resetAutoParticipantRecordingConfiguration() {
        this._autoParticipantRecordingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoParticipantRecordingConfigurationInput() {
        return this._autoParticipantRecordingConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStage.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStage.TagProperty[] | cdktn.IResolvable) {
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
            auto_participant_recording_configuration: ccStageAutoParticipantRecordingConfigurationPropertyToTerraform(this._autoParticipantRecordingConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccStageTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_participant_recording_configuration: {
                value: ccStageAutoParticipantRecordingConfigurationPropertyToHclTerraform(this._autoParticipantRecordingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStage.AutoParticipantRecordingConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStageTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcStage.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStageParticipantRecordingHlsConfigurationPropertyToTerraform(struct?: CcStage.ParticipantRecordingHlsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_segment_duration_seconds: cdktn.numberToTerraform(struct!.targetSegmentDurationSeconds),
    }
}


export function ccStageParticipantRecordingHlsConfigurationPropertyToHclTerraform(struct?: CcStage.ParticipantRecordingHlsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_segment_duration_seconds: {
            value: cdktn.numberToHclTerraform(struct!.targetSegmentDurationSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStageHlsConfigurationPropertyToTerraform(struct?: CcStage.HlsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        participant_recording_hls_configuration: ccStageParticipantRecordingHlsConfigurationPropertyToTerraform(struct!.participantRecordingHlsConfiguration),
    }
}


export function ccStageHlsConfigurationPropertyToHclTerraform(struct?: CcStage.HlsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        participant_recording_hls_configuration: {
            value: ccStageParticipantRecordingHlsConfigurationPropertyToHclTerraform(struct!.participantRecordingHlsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ParticipantRecordingHlsConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStageParticipantThumbnailConfigurationPropertyToTerraform(struct?: CcStage.ParticipantThumbnailConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        recording_mode: cdktn.stringToTerraform(struct!.recordingMode),
        storage: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.storage),
        target_interval_seconds: cdktn.numberToTerraform(struct!.targetIntervalSeconds),
    }
}


export function ccStageParticipantThumbnailConfigurationPropertyToHclTerraform(struct?: CcStage.ParticipantThumbnailConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        recording_mode: {
            value: cdktn.stringToHclTerraform(struct!.recordingMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.storage),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        target_interval_seconds: {
            value: cdktn.numberToHclTerraform(struct!.targetIntervalSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStageThumbnailConfigurationPropertyToTerraform(struct?: CcStage.ThumbnailConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        participant_thumbnail_configuration: ccStageParticipantThumbnailConfigurationPropertyToTerraform(struct!.participantThumbnailConfiguration),
    }
}


export function ccStageThumbnailConfigurationPropertyToHclTerraform(struct?: CcStage.ThumbnailConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        participant_thumbnail_configuration: {
            value: ccStageParticipantThumbnailConfigurationPropertyToHclTerraform(struct!.participantThumbnailConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ParticipantThumbnailConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStageAutoParticipantRecordingConfigurationPropertyToTerraform(struct?: CcStage.AutoParticipantRecordingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hls_configuration: ccStageHlsConfigurationPropertyToTerraform(struct!.hlsConfiguration),
        media_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.mediaTypes),
        recording_reconnect_window_seconds: cdktn.numberToTerraform(struct!.recordingReconnectWindowSeconds),
        storage_configuration_arn: cdktn.stringToTerraform(struct!.storageConfigurationArn),
        thumbnail_configuration: ccStageThumbnailConfigurationPropertyToTerraform(struct!.thumbnailConfiguration),
    }
}


export function ccStageAutoParticipantRecordingConfigurationPropertyToHclTerraform(struct?: CcStage.AutoParticipantRecordingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hls_configuration: {
            value: ccStageHlsConfigurationPropertyToHclTerraform(struct!.hlsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "HlsConfigurationProperty",
        },
        media_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.mediaTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        recording_reconnect_window_seconds: {
            value: cdktn.numberToHclTerraform(struct!.recordingReconnectWindowSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        storage_configuration_arn: {
            value: cdktn.stringToHclTerraform(struct!.storageConfigurationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        thumbnail_configuration: {
            value: ccStageThumbnailConfigurationPropertyToHclTerraform(struct!.thumbnailConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ThumbnailConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStageTagPropertyToTerraform(struct?: CcStage.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStageTagPropertyToHclTerraform(struct?: CcStage.TagProperty | cdktn.IResolvable): any {
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


export namespace CcStage {
export interface ParticipantRecordingHlsConfigurationProperty {
    /**
    * Defines the target duration for recorded segments generated when recording a stage participant. Segments may have durations longer than the specified value when needed to ensure each segment begins with a keyframe. Default: 6.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#target_segment_duration_seconds CcStage#target_segment_duration_seconds}
    */
    readonly targetSegmentDurationSeconds?: number;
}
export class ParticipantRecordingHlsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ParticipantRecordingHlsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetSegmentDurationSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetSegmentDurationSeconds = this._targetSegmentDurationSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParticipantRecordingHlsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetSegmentDurationSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetSegmentDurationSeconds = value.targetSegmentDurationSeconds;
        }
    }

    // target_segment_duration_seconds - computed: true, optional: true, required: false
    private _targetSegmentDurationSeconds?: number; 
    public get targetSegmentDurationSeconds() {
        return this.getNumberAttribute('target_segment_duration_seconds');
    }
    public set targetSegmentDurationSeconds(value: number) {
        this._targetSegmentDurationSeconds = value;
    }
    public resetTargetSegmentDurationSeconds() {
        this._targetSegmentDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetSegmentDurationSecondsInput() {
        return this._targetSegmentDurationSeconds;
    }
}
export interface HlsConfigurationProperty {
    /**
    * An object representing a configuration of participant HLS recordings for individual participant recording.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#participant_recording_hls_configuration CcStage#participant_recording_hls_configuration}
    */
    readonly participantRecordingHlsConfiguration?: ParticipantRecordingHlsConfigurationProperty;
}
export class HlsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HlsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._participantRecordingHlsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.participantRecordingHlsConfiguration = this._participantRecordingHlsConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HlsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._participantRecordingHlsConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._participantRecordingHlsConfiguration.internalValue = value.participantRecordingHlsConfiguration;
        }
    }

    // participant_recording_hls_configuration - computed: true, optional: true, required: false
    private _participantRecordingHlsConfiguration = new ParticipantRecordingHlsConfigurationPropertyOutputReference(this, "participant_recording_hls_configuration");
    public get participantRecordingHlsConfiguration() {
        return this._participantRecordingHlsConfiguration;
    }
    public putParticipantRecordingHlsConfiguration(value: ParticipantRecordingHlsConfigurationProperty) {
        this._participantRecordingHlsConfiguration.internalValue = value;
    }
    public resetParticipantRecordingHlsConfiguration() {
        this._participantRecordingHlsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get participantRecordingHlsConfigurationInput() {
        return this._participantRecordingHlsConfiguration.internalValue;
    }
}
export interface ParticipantThumbnailConfigurationProperty {
    /**
    * Thumbnail recording mode. Default: DISABLED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#recording_mode CcStage#recording_mode}
    */
    readonly recordingMode?: string;
    /**
    * Indicates the format in which thumbnails are recorded. SEQUENTIAL records all generated thumbnails in a serial manner, to the media/thumbnails/high directory. LATEST saves the latest thumbnail in media/latest_thumbnail/high/thumb.jpg and overwrites it at the interval specified by targetIntervalSeconds. You can enable both SEQUENTIAL and LATEST. Default: SEQUENTIAL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#storage CcStage#storage}
    */
    readonly storage?: string[];
    /**
    * The targeted thumbnail-generation interval in seconds. This is configurable only if recordingMode is INTERVAL. Default: 60.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#target_interval_seconds CcStage#target_interval_seconds}
    */
    readonly targetIntervalSeconds?: number;
}
export class ParticipantThumbnailConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ParticipantThumbnailConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._recordingMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordingMode = this._recordingMode;
        }
        if (this._storage !== undefined) {
            hasAnyValues = true;
            internalValueResult.storage = this._storage;
        }
        if (this._targetIntervalSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetIntervalSeconds = this._targetIntervalSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParticipantThumbnailConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._recordingMode = undefined;
            this._storage = undefined;
            this._targetIntervalSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._recordingMode = value.recordingMode;
            this._storage = value.storage;
            this._targetIntervalSeconds = value.targetIntervalSeconds;
        }
    }

    // recording_mode - computed: true, optional: true, required: false
    private _recordingMode?: string; 
    public get recordingMode() {
        return this.getStringAttribute('recording_mode');
    }
    public set recordingMode(value: string) {
        this._recordingMode = value;
    }
    public resetRecordingMode() {
        this._recordingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordingModeInput() {
        return this._recordingMode;
    }

    // storage - computed: true, optional: true, required: false
    private _storage?: string[]; 
    public get storage() {
        return cdktn.Fn.tolist(this.getListAttribute('storage'));
    }
    public set storage(value: string[]) {
        this._storage = value;
    }
    public resetStorage() {
        this._storage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageInput() {
        return this._storage;
    }

    // target_interval_seconds - computed: true, optional: true, required: false
    private _targetIntervalSeconds?: number; 
    public get targetIntervalSeconds() {
        return this.getNumberAttribute('target_interval_seconds');
    }
    public set targetIntervalSeconds(value: number) {
        this._targetIntervalSeconds = value;
    }
    public resetTargetIntervalSeconds() {
        this._targetIntervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIntervalSecondsInput() {
        return this._targetIntervalSeconds;
    }
}
export interface ThumbnailConfigurationProperty {
    /**
    * An object representing a configuration of thumbnails for recorded video from an individual participant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#participant_thumbnail_configuration CcStage#participant_thumbnail_configuration}
    */
    readonly participantThumbnailConfiguration?: ParticipantThumbnailConfigurationProperty;
}
export class ThumbnailConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ThumbnailConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._participantThumbnailConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.participantThumbnailConfiguration = this._participantThumbnailConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThumbnailConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._participantThumbnailConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._participantThumbnailConfiguration.internalValue = value.participantThumbnailConfiguration;
        }
    }

    // participant_thumbnail_configuration - computed: true, optional: true, required: false
    private _participantThumbnailConfiguration = new ParticipantThumbnailConfigurationPropertyOutputReference(this, "participant_thumbnail_configuration");
    public get participantThumbnailConfiguration() {
        return this._participantThumbnailConfiguration;
    }
    public putParticipantThumbnailConfiguration(value: ParticipantThumbnailConfigurationProperty) {
        this._participantThumbnailConfiguration.internalValue = value;
    }
    public resetParticipantThumbnailConfiguration() {
        this._participantThumbnailConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get participantThumbnailConfigurationInput() {
        return this._participantThumbnailConfiguration.internalValue;
    }
}
export interface AutoParticipantRecordingConfigurationProperty {
    /**
    * HLS configuration object for individual participant recording.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#hls_configuration CcStage#hls_configuration}
    */
    readonly hlsConfiguration?: HlsConfigurationProperty;
    /**
    * Types of media to be recorded. Default: AUDIO_VIDEO.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#media_types CcStage#media_types}
    */
    readonly mediaTypes?: string[];
    /**
    * If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together. The default value is 0, which disables merging.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#recording_reconnect_window_seconds CcStage#recording_reconnect_window_seconds}
    */
    readonly recordingReconnectWindowSeconds?: number;
    /**
    * ARN of the StorageConfiguration resource to use for individual participant recording.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#storage_configuration_arn CcStage#storage_configuration_arn}
    */
    readonly storageConfigurationArn?: string;
    /**
    * A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording and modify the interval at which thumbnails are generated for the live session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#thumbnail_configuration CcStage#thumbnail_configuration}
    */
    readonly thumbnailConfiguration?: ThumbnailConfigurationProperty;
}
export class AutoParticipantRecordingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoParticipantRecordingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hlsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hlsConfiguration = this._hlsConfiguration?.internalValue;
        }
        if (this._mediaTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaTypes = this._mediaTypes;
        }
        if (this._recordingReconnectWindowSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordingReconnectWindowSeconds = this._recordingReconnectWindowSeconds;
        }
        if (this._storageConfigurationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageConfigurationArn = this._storageConfigurationArn;
        }
        if (this._thumbnailConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.thumbnailConfiguration = this._thumbnailConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoParticipantRecordingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hlsConfiguration.internalValue = undefined;
            this._mediaTypes = undefined;
            this._recordingReconnectWindowSeconds = undefined;
            this._storageConfigurationArn = undefined;
            this._thumbnailConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hlsConfiguration.internalValue = value.hlsConfiguration;
            this._mediaTypes = value.mediaTypes;
            this._recordingReconnectWindowSeconds = value.recordingReconnectWindowSeconds;
            this._storageConfigurationArn = value.storageConfigurationArn;
            this._thumbnailConfiguration.internalValue = value.thumbnailConfiguration;
        }
    }

    // hls_configuration - computed: true, optional: true, required: false
    private _hlsConfiguration = new HlsConfigurationPropertyOutputReference(this, "hls_configuration");
    public get hlsConfiguration() {
        return this._hlsConfiguration;
    }
    public putHlsConfiguration(value: HlsConfigurationProperty) {
        this._hlsConfiguration.internalValue = value;
    }
    public resetHlsConfiguration() {
        this._hlsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hlsConfigurationInput() {
        return this._hlsConfiguration.internalValue;
    }

    // media_types - computed: true, optional: true, required: false
    private _mediaTypes?: string[]; 
    public get mediaTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('media_types'));
    }
    public set mediaTypes(value: string[]) {
        this._mediaTypes = value;
    }
    public resetMediaTypes() {
        this._mediaTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaTypesInput() {
        return this._mediaTypes;
    }

    // recording_reconnect_window_seconds - computed: true, optional: true, required: false
    private _recordingReconnectWindowSeconds?: number; 
    public get recordingReconnectWindowSeconds() {
        return this.getNumberAttribute('recording_reconnect_window_seconds');
    }
    public set recordingReconnectWindowSeconds(value: number) {
        this._recordingReconnectWindowSeconds = value;
    }
    public resetRecordingReconnectWindowSeconds() {
        this._recordingReconnectWindowSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordingReconnectWindowSecondsInput() {
        return this._recordingReconnectWindowSeconds;
    }

    // storage_configuration_arn - computed: true, optional: true, required: false
    private _storageConfigurationArn?: string; 
    public get storageConfigurationArn() {
        return this.getStringAttribute('storage_configuration_arn');
    }
    public set storageConfigurationArn(value: string) {
        this._storageConfigurationArn = value;
    }
    public resetStorageConfigurationArn() {
        this._storageConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConfigurationArnInput() {
        return this._storageConfigurationArn;
    }

    // thumbnail_configuration - computed: true, optional: true, required: false
    private _thumbnailConfiguration = new ThumbnailConfigurationPropertyOutputReference(this, "thumbnail_configuration");
    public get thumbnailConfiguration() {
        return this._thumbnailConfiguration;
    }
    public putThumbnailConfiguration(value: ThumbnailConfigurationProperty) {
        this._thumbnailConfiguration.internalValue = value;
    }
    public resetThumbnailConfiguration() {
        this._thumbnailConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thumbnailConfigurationInput() {
        return this._thumbnailConfiguration.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#key CcStage#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_stage#value CcStage#value}
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
