// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFlowMediaStreamProps extends cdktn.TerraformMetaArguments {
    /**
    * Attributes that are related to the media stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#attributes CcFlowMediaStream#attributes}
    */
    readonly attributes?: CcFlowMediaStream.AttributesProperty;
    /**
    * The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#clock_rate CcFlowMediaStream#clock_rate}
    */
    readonly clockRate?: number;
    /**
    * A description that can help you quickly identify what your media stream is used for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#description CcFlowMediaStream#description}
    */
    readonly description?: string;
    /**
    * The Amazon Resource Name (ARN) of the flow that the media stream belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#flow_arn CcFlowMediaStream#flow_arn}
    */
    readonly flowArn: string;
    /**
    * A unique identifier for the media stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_id CcFlowMediaStream#media_stream_id}
    */
    readonly mediaStreamId: number;
    /**
    * A name that helps you distinguish one media stream from another.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_name CcFlowMediaStream#media_stream_name}
    */
    readonly mediaStreamName: string;
    /**
    * The type of media stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_type CcFlowMediaStream#media_stream_type}
    */
    readonly mediaStreamType: string;
    /**
    * The key-value pairs that can be used to tag and organize the media stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#tags CcFlowMediaStream#tags}
    */
    readonly tags?: CcFlowMediaStream.TagsProperty[] | cdktn.IResolvable;
    /**
    * The resolution of the video. Required for a video media stream and rejected for other media stream types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#video_format CcFlowMediaStream#video_format}
    */
    readonly videoFormat?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream awscc_mediaconnect_flow_media_stream}
*/
export class CcFlowMediaStream extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconnect_flow_media_stream";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFlowMediaStream resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFlowMediaStream to import
    * @param importFromId The id of the existing CcFlowMediaStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFlowMediaStream to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_flow_media_stream", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream awscc_mediaconnect_flow_media_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFlowMediaStreamProps
    */
    public constructor(scope: Construct, id: string, config: CcFlowMediaStreamProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconnect_flow_media_stream',
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
        this._attributes.internalValue = config.attributes;
        this._clockRate = config.clockRate;
        this._description = config.description;
        this._flowArn = config.flowArn;
        this._mediaStreamId = config.mediaStreamId;
        this._mediaStreamName = config.mediaStreamName;
        this._mediaStreamType = config.mediaStreamType;
        this._tags.internalValue = config.tags;
        this._videoFormat = config.videoFormat;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes = new CcFlowMediaStream.AttributesPropertyOutputReference(this, "attributes");
    public get attributes() {
        return this._attributes;
    }
    public putAttributes(value: CcFlowMediaStream.AttributesProperty) {
        this._attributes.internalValue = value;
    }
    public resetAttributes() {
        this._attributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes.internalValue;
    }

    // clock_rate - computed: true, optional: true, required: false
    private _clockRate?: number; 
    public get clockRate() {
        return this.getNumberAttribute('clock_rate');
    }
    public set clockRate(value: number) {
        this._clockRate = value;
    }
    public resetClockRate() {
        this._clockRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clockRateInput() {
        return this._clockRate;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // flow_arn - computed: false, optional: false, required: true
    private _flowArn?: string; 
    public get flowArn() {
        return this.getStringAttribute('flow_arn');
    }
    public set flowArn(value: string) {
        this._flowArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get flowArnInput() {
        return this._flowArn;
    }

    // fmt - computed: true, optional: false, required: false
    public get fmt() {
        return this.getNumberAttribute('fmt');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // media_stream_id - computed: false, optional: false, required: true
    private _mediaStreamId?: number; 
    public get mediaStreamId() {
        return this.getNumberAttribute('media_stream_id');
    }
    public set mediaStreamId(value: number) {
        this._mediaStreamId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaStreamIdInput() {
        return this._mediaStreamId;
    }

    // media_stream_name - computed: false, optional: false, required: true
    private _mediaStreamName?: string; 
    public get mediaStreamName() {
        return this.getStringAttribute('media_stream_name');
    }
    public set mediaStreamName(value: string) {
        this._mediaStreamName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaStreamNameInput() {
        return this._mediaStreamName;
    }

    // media_stream_type - computed: false, optional: false, required: true
    private _mediaStreamType?: string; 
    public get mediaStreamType() {
        return this.getStringAttribute('media_stream_type');
    }
    public set mediaStreamType(value: string) {
        this._mediaStreamType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaStreamTypeInput() {
        return this._mediaStreamType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFlowMediaStream.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFlowMediaStream.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // video_format - computed: true, optional: true, required: false
    private _videoFormat?: string; 
    public get videoFormat() {
        return this.getStringAttribute('video_format');
    }
    public set videoFormat(value: string) {
        this._videoFormat = value;
    }
    public resetVideoFormat() {
        this._videoFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoFormatInput() {
        return this._videoFormat;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            attributes: ccFlowMediaStreamAttributesPropertyToTerraform(this._attributes.internalValue),
            clock_rate: cdktn.numberToTerraform(this._clockRate),
            description: cdktn.stringToTerraform(this._description),
            flow_arn: cdktn.stringToTerraform(this._flowArn),
            media_stream_id: cdktn.numberToTerraform(this._mediaStreamId),
            media_stream_name: cdktn.stringToTerraform(this._mediaStreamName),
            media_stream_type: cdktn.stringToTerraform(this._mediaStreamType),
            tags: cdktn.listMapper(ccFlowMediaStreamTagsPropertyToTerraform, false)(this._tags.internalValue),
            video_format: cdktn.stringToTerraform(this._videoFormat),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            attributes: {
                value: ccFlowMediaStreamAttributesPropertyToHclTerraform(this._attributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlowMediaStream.AttributesProperty",
            },
            clock_rate: {
                value: cdktn.numberToHclTerraform(this._clockRate),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            flow_arn: {
                value: cdktn.stringToHclTerraform(this._flowArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            media_stream_id: {
                value: cdktn.numberToHclTerraform(this._mediaStreamId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            media_stream_name: {
                value: cdktn.stringToHclTerraform(this._mediaStreamName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            media_stream_type: {
                value: cdktn.stringToHclTerraform(this._mediaStreamType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFlowMediaStreamTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFlowMediaStream.TagsPropertyList",
            },
            video_format: {
                value: cdktn.stringToHclTerraform(this._videoFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFlowMediaStreamFmtpPropertyToTerraform(struct?: CcFlowMediaStream.FmtpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        channel_order: cdktn.stringToTerraform(struct!.channelOrder),
        colorimetry: cdktn.stringToTerraform(struct!.colorimetry),
        exact_framerate: cdktn.stringToTerraform(struct!.exactFramerate),
        par: cdktn.stringToTerraform(struct!.par),
        range: cdktn.stringToTerraform(struct!.range),
        scan_mode: cdktn.stringToTerraform(struct!.scanMode),
        tcs: cdktn.stringToTerraform(struct!.tcs),
    }
}


export function ccFlowMediaStreamFmtpPropertyToHclTerraform(struct?: CcFlowMediaStream.FmtpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        channel_order: {
            value: cdktn.stringToHclTerraform(struct!.channelOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        colorimetry: {
            value: cdktn.stringToHclTerraform(struct!.colorimetry),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact_framerate: {
            value: cdktn.stringToHclTerraform(struct!.exactFramerate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        par: {
            value: cdktn.stringToHclTerraform(struct!.par),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range: {
            value: cdktn.stringToHclTerraform(struct!.range),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scan_mode: {
            value: cdktn.stringToHclTerraform(struct!.scanMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tcs: {
            value: cdktn.stringToHclTerraform(struct!.tcs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowMediaStreamAttributesPropertyToTerraform(struct?: CcFlowMediaStream.AttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fmtp: ccFlowMediaStreamFmtpPropertyToTerraform(struct!.fmtp),
        lang: cdktn.stringToTerraform(struct!.lang),
    }
}


export function ccFlowMediaStreamAttributesPropertyToHclTerraform(struct?: CcFlowMediaStream.AttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fmtp: {
            value: ccFlowMediaStreamFmtpPropertyToHclTerraform(struct!.fmtp),
            isBlock: true,
            type: "struct",
            storageClassType: "FmtpProperty",
        },
        lang: {
            value: cdktn.stringToHclTerraform(struct!.lang),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowMediaStreamTagsPropertyToTerraform(struct?: CcFlowMediaStream.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFlowMediaStreamTagsPropertyToHclTerraform(struct?: CcFlowMediaStream.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcFlowMediaStream {
export interface FmtpProperty {
    /**
    * The format of the audio channel. Can only be specified for an audio media stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#channel_order CcFlowMediaStream#channel_order}
    */
    readonly channelOrder?: string;
    /**
    * The format used for the representation of color.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#colorimetry CcFlowMediaStream#colorimetry}
    */
    readonly colorimetry?: string;
    /**
    * The frame rate for the video stream, in frames/second. For example: 60000/1001.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#exact_framerate CcFlowMediaStream#exact_framerate}
    */
    readonly exactFramerate?: string;
    /**
    * The pixel aspect ratio (PAR) of the video.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#par CcFlowMediaStream#par}
    */
    readonly par?: string;
    /**
    * The encoding range of the video.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#range CcFlowMediaStream#range}
    */
    readonly range?: string;
    /**
    * The type of compression that was used to smooth the video's appearance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#scan_mode CcFlowMediaStream#scan_mode}
    */
    readonly scanMode?: string;
    /**
    * The transfer characteristic system (TCS) that is used in the video.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#tcs CcFlowMediaStream#tcs}
    */
    readonly tcs?: string;
}
export class FmtpPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FmtpProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._channelOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelOrder = this._channelOrder;
        }
        if (this._colorimetry !== undefined) {
            hasAnyValues = true;
            internalValueResult.colorimetry = this._colorimetry;
        }
        if (this._exactFramerate !== undefined) {
            hasAnyValues = true;
            internalValueResult.exactFramerate = this._exactFramerate;
        }
        if (this._par !== undefined) {
            hasAnyValues = true;
            internalValueResult.par = this._par;
        }
        if (this._range !== undefined) {
            hasAnyValues = true;
            internalValueResult.range = this._range;
        }
        if (this._scanMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.scanMode = this._scanMode;
        }
        if (this._tcs !== undefined) {
            hasAnyValues = true;
            internalValueResult.tcs = this._tcs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FmtpProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._channelOrder = undefined;
            this._colorimetry = undefined;
            this._exactFramerate = undefined;
            this._par = undefined;
            this._range = undefined;
            this._scanMode = undefined;
            this._tcs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._channelOrder = value.channelOrder;
            this._colorimetry = value.colorimetry;
            this._exactFramerate = value.exactFramerate;
            this._par = value.par;
            this._range = value.range;
            this._scanMode = value.scanMode;
            this._tcs = value.tcs;
        }
    }

    // channel_order - computed: true, optional: true, required: false
    private _channelOrder?: string; 
    public get channelOrder() {
        return this.getStringAttribute('channel_order');
    }
    public set channelOrder(value: string) {
        this._channelOrder = value;
    }
    public resetChannelOrder() {
        this._channelOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelOrderInput() {
        return this._channelOrder;
    }

    // colorimetry - computed: true, optional: true, required: false
    private _colorimetry?: string; 
    public get colorimetry() {
        return this.getStringAttribute('colorimetry');
    }
    public set colorimetry(value: string) {
        this._colorimetry = value;
    }
    public resetColorimetry() {
        this._colorimetry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get colorimetryInput() {
        return this._colorimetry;
    }

    // exact_framerate - computed: true, optional: true, required: false
    private _exactFramerate?: string; 
    public get exactFramerate() {
        return this.getStringAttribute('exact_framerate');
    }
    public set exactFramerate(value: string) {
        this._exactFramerate = value;
    }
    public resetExactFramerate() {
        this._exactFramerate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exactFramerateInput() {
        return this._exactFramerate;
    }

    // par - computed: true, optional: true, required: false
    private _par?: string; 
    public get par() {
        return this.getStringAttribute('par');
    }
    public set par(value: string) {
        this._par = value;
    }
    public resetPar() {
        this._par = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parInput() {
        return this._par;
    }

    // range - computed: true, optional: true, required: false
    private _range?: string; 
    public get range() {
        return this.getStringAttribute('range');
    }
    public set range(value: string) {
        this._range = value;
    }
    public resetRange() {
        this._range = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeInput() {
        return this._range;
    }

    // scan_mode - computed: true, optional: true, required: false
    private _scanMode?: string; 
    public get scanMode() {
        return this.getStringAttribute('scan_mode');
    }
    public set scanMode(value: string) {
        this._scanMode = value;
    }
    public resetScanMode() {
        this._scanMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scanModeInput() {
        return this._scanMode;
    }

    // tcs - computed: true, optional: true, required: false
    private _tcs?: string; 
    public get tcs() {
        return this.getStringAttribute('tcs');
    }
    public set tcs(value: string) {
        this._tcs = value;
    }
    public resetTcs() {
        this._tcs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcsInput() {
        return this._tcs;
    }
}
export interface AttributesProperty {
    /**
    * A set of parameters that define the media stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#fmtp CcFlowMediaStream#fmtp}
    */
    readonly fmtp?: FmtpProperty;
    /**
    * The audio language, in a format that is recognized by the receiver. Can only be specified for an audio media stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#lang CcFlowMediaStream#lang}
    */
    readonly lang?: string;
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
        if (this._fmtp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fmtp = this._fmtp?.internalValue;
        }
        if (this._lang !== undefined) {
            hasAnyValues = true;
            internalValueResult.lang = this._lang;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fmtp.internalValue = undefined;
            this._lang = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fmtp.internalValue = value.fmtp;
            this._lang = value.lang;
        }
    }

    // fmtp - computed: true, optional: true, required: false
    private _fmtp = new FmtpPropertyOutputReference(this, "fmtp");
    public get fmtp() {
        return this._fmtp;
    }
    public putFmtp(value: FmtpProperty) {
        this._fmtp.internalValue = value;
    }
    public resetFmtp() {
        this._fmtp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fmtpInput() {
        return this._fmtp.internalValue;
    }

    // lang - computed: true, optional: true, required: false
    private _lang?: string; 
    public get lang() {
        return this.getStringAttribute('lang');
    }
    public set lang(value: string) {
        this._lang = value;
    }
    public resetLang() {
        this._lang = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get langInput() {
        return this._lang;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#key CcFlowMediaStream#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#value CcFlowMediaStream#value}
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
