// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOriginEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#channel_group_name CcOriginEndpoint#channel_group_name}
    */
    readonly channelGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#channel_name CcOriginEndpoint#channel_name}
    */
    readonly channelName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#container_type CcOriginEndpoint#container_type}
    */
    readonly containerType: string;
    /**
    * <p>A DASH manifest configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#dash_manifests CcOriginEndpoint#dash_manifests}
    */
    readonly dashManifests?: CcOriginEndpoint.DashManifestConfigurationProperty[] | cdktn.IResolvable;
    /**
    * <p>Enter any descriptive text that helps you to identify the origin endpoint.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#description CcOriginEndpoint#description}
    */
    readonly description?: string;
    /**
    * <p>The failover settings for the endpoint.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#force_endpoint_error_configuration CcOriginEndpoint#force_endpoint_error_configuration}
    */
    readonly forceEndpointErrorConfiguration?: CcOriginEndpoint.ForceEndpointErrorConfigurationProperty;
    /**
    * <p>An HTTP live streaming (HLS) manifest configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#hls_manifests CcOriginEndpoint#hls_manifests}
    */
    readonly hlsManifests?: CcOriginEndpoint.HlsManifestConfigurationProperty[] | cdktn.IResolvable;
    /**
    * <p>A low-latency HLS manifest configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#low_latency_hls_manifests CcOriginEndpoint#low_latency_hls_manifests}
    */
    readonly lowLatencyHlsManifests?: CcOriginEndpoint.LowLatencyHlsManifestConfigurationProperty[] | cdktn.IResolvable;
    /**
    * <p>The Microsoft Smooth Streaming (MSS) manifest configurations associated with this origin endpoint.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#mss_manifests CcOriginEndpoint#mss_manifests}
    */
    readonly mssManifests?: CcOriginEndpoint.MssManifestConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#origin_endpoint_name CcOriginEndpoint#origin_endpoint_name}
    */
    readonly originEndpointName: string;
    /**
    * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#segment CcOriginEndpoint#segment}
    */
    readonly segment?: CcOriginEndpoint.SegmentProperty;
    /**
    * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#startover_window_seconds CcOriginEndpoint#startover_window_seconds}
    */
    readonly startoverWindowSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#tags CcOriginEndpoint#tags}
    */
    readonly tags?: CcOriginEndpoint.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#uri_separator CcOriginEndpoint#uri_separator}
    */
    readonly uriSeparator?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint awscc_mediapackagev2_origin_endpoint}
*/
export class CcOriginEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediapackagev2_origin_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOriginEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOriginEndpoint to import
    * @param importFromId The id of the existing CcOriginEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOriginEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediapackagev2_origin_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint awscc_mediapackagev2_origin_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOriginEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcOriginEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediapackagev2_origin_endpoint',
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
        this._channelGroupName = config.channelGroupName;
        this._channelName = config.channelName;
        this._containerType = config.containerType;
        this._dashManifests.internalValue = config.dashManifests;
        this._description = config.description;
        this._forceEndpointErrorConfiguration.internalValue = config.forceEndpointErrorConfiguration;
        this._hlsManifests.internalValue = config.hlsManifests;
        this._lowLatencyHlsManifests.internalValue = config.lowLatencyHlsManifests;
        this._mssManifests.internalValue = config.mssManifests;
        this._originEndpointName = config.originEndpointName;
        this._segment.internalValue = config.segment;
        this._startoverWindowSeconds = config.startoverWindowSeconds;
        this._tags.internalValue = config.tags;
        this._uriSeparator = config.uriSeparator;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // channel_group_name - computed: false, optional: false, required: true
    private _channelGroupName?: string; 
    public get channelGroupName() {
        return this.getStringAttribute('channel_group_name');
    }
    public set channelGroupName(value: string) {
        this._channelGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelGroupNameInput() {
        return this._channelGroupName;
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

    // container_type - computed: false, optional: false, required: true
    private _containerType?: string; 
    public get containerType() {
        return this.getStringAttribute('container_type');
    }
    public set containerType(value: string) {
        this._containerType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get containerTypeInput() {
        return this._containerType;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // dash_manifest_urls - computed: true, optional: false, required: false
    public get dashManifestUrls() {
        return this.getListAttribute('dash_manifest_urls');
    }

    // dash_manifests - computed: true, optional: true, required: false
    private _dashManifests = new CcOriginEndpoint.DashManifestConfigurationPropertyList(this, "dash_manifests", false);
    public get dashManifests() {
        return this._dashManifests;
    }
    public putDashManifests(value: CcOriginEndpoint.DashManifestConfigurationProperty[] | cdktn.IResolvable) {
        this._dashManifests.internalValue = value;
    }
    public resetDashManifests() {
        this._dashManifests.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dashManifestsInput() {
        return this._dashManifests.internalValue;
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

    // force_endpoint_error_configuration - computed: true, optional: true, required: false
    private _forceEndpointErrorConfiguration = new CcOriginEndpoint.ForceEndpointErrorConfigurationPropertyOutputReference(this, "force_endpoint_error_configuration");
    public get forceEndpointErrorConfiguration() {
        return this._forceEndpointErrorConfiguration;
    }
    public putForceEndpointErrorConfiguration(value: CcOriginEndpoint.ForceEndpointErrorConfigurationProperty) {
        this._forceEndpointErrorConfiguration.internalValue = value;
    }
    public resetForceEndpointErrorConfiguration() {
        this._forceEndpointErrorConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceEndpointErrorConfigurationInput() {
        return this._forceEndpointErrorConfiguration.internalValue;
    }

    // hls_manifest_urls - computed: true, optional: false, required: false
    public get hlsManifestUrls() {
        return this.getListAttribute('hls_manifest_urls');
    }

    // hls_manifests - computed: true, optional: true, required: false
    private _hlsManifests = new CcOriginEndpoint.HlsManifestConfigurationPropertyList(this, "hls_manifests", false);
    public get hlsManifests() {
        return this._hlsManifests;
    }
    public putHlsManifests(value: CcOriginEndpoint.HlsManifestConfigurationProperty[] | cdktn.IResolvable) {
        this._hlsManifests.internalValue = value;
    }
    public resetHlsManifests() {
        this._hlsManifests.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hlsManifestsInput() {
        return this._hlsManifests.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // low_latency_hls_manifest_urls - computed: true, optional: false, required: false
    public get lowLatencyHlsManifestUrls() {
        return this.getListAttribute('low_latency_hls_manifest_urls');
    }

    // low_latency_hls_manifests - computed: true, optional: true, required: false
    private _lowLatencyHlsManifests = new CcOriginEndpoint.LowLatencyHlsManifestConfigurationPropertyList(this, "low_latency_hls_manifests", false);
    public get lowLatencyHlsManifests() {
        return this._lowLatencyHlsManifests;
    }
    public putLowLatencyHlsManifests(value: CcOriginEndpoint.LowLatencyHlsManifestConfigurationProperty[] | cdktn.IResolvable) {
        this._lowLatencyHlsManifests.internalValue = value;
    }
    public resetLowLatencyHlsManifests() {
        this._lowLatencyHlsManifests.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lowLatencyHlsManifestsInput() {
        return this._lowLatencyHlsManifests.internalValue;
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }

    // mss_manifest_urls - computed: true, optional: false, required: false
    public get mssManifestUrls() {
        return this.getListAttribute('mss_manifest_urls');
    }

    // mss_manifests - computed: true, optional: true, required: false
    private _mssManifests = new CcOriginEndpoint.MssManifestConfigurationPropertyList(this, "mss_manifests", false);
    public get mssManifests() {
        return this._mssManifests;
    }
    public putMssManifests(value: CcOriginEndpoint.MssManifestConfigurationProperty[] | cdktn.IResolvable) {
        this._mssManifests.internalValue = value;
    }
    public resetMssManifests() {
        this._mssManifests.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mssManifestsInput() {
        return this._mssManifests.internalValue;
    }

    // origin_endpoint_name - computed: false, optional: false, required: true
    private _originEndpointName?: string; 
    public get originEndpointName() {
        return this.getStringAttribute('origin_endpoint_name');
    }
    public set originEndpointName(value: string) {
        this._originEndpointName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get originEndpointNameInput() {
        return this._originEndpointName;
    }

    // segment - computed: true, optional: true, required: false
    private _segment = new CcOriginEndpoint.SegmentPropertyOutputReference(this, "segment");
    public get segment() {
        return this._segment;
    }
    public putSegment(value: CcOriginEndpoint.SegmentProperty) {
        this._segment.internalValue = value;
    }
    public resetSegment() {
        this._segment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentInput() {
        return this._segment.internalValue;
    }

    // startover_window_seconds - computed: true, optional: true, required: false
    private _startoverWindowSeconds?: number; 
    public get startoverWindowSeconds() {
        return this.getNumberAttribute('startover_window_seconds');
    }
    public set startoverWindowSeconds(value: number) {
        this._startoverWindowSeconds = value;
    }
    public resetStartoverWindowSeconds() {
        this._startoverWindowSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startoverWindowSecondsInput() {
        return this._startoverWindowSeconds;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcOriginEndpoint.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcOriginEndpoint.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // uri_separator - computed: true, optional: true, required: false
    private _uriSeparator?: string; 
    public get uriSeparator() {
        return this.getStringAttribute('uri_separator');
    }
    public set uriSeparator(value: string) {
        this._uriSeparator = value;
    }
    public resetUriSeparator() {
        this._uriSeparator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriSeparatorInput() {
        return this._uriSeparator;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            channel_group_name: cdktn.stringToTerraform(this._channelGroupName),
            channel_name: cdktn.stringToTerraform(this._channelName),
            container_type: cdktn.stringToTerraform(this._containerType),
            dash_manifests: cdktn.listMapper(ccOriginEndpointDashManifestConfigurationPropertyToTerraform, false)(this._dashManifests.internalValue),
            description: cdktn.stringToTerraform(this._description),
            force_endpoint_error_configuration: ccOriginEndpointForceEndpointErrorConfigurationPropertyToTerraform(this._forceEndpointErrorConfiguration.internalValue),
            hls_manifests: cdktn.listMapper(ccOriginEndpointHlsManifestConfigurationPropertyToTerraform, false)(this._hlsManifests.internalValue),
            low_latency_hls_manifests: cdktn.listMapper(ccOriginEndpointLowLatencyHlsManifestConfigurationPropertyToTerraform, false)(this._lowLatencyHlsManifests.internalValue),
            mss_manifests: cdktn.listMapper(ccOriginEndpointMssManifestConfigurationPropertyToTerraform, false)(this._mssManifests.internalValue),
            origin_endpoint_name: cdktn.stringToTerraform(this._originEndpointName),
            segment: ccOriginEndpointSegmentPropertyToTerraform(this._segment.internalValue),
            startover_window_seconds: cdktn.numberToTerraform(this._startoverWindowSeconds),
            tags: cdktn.listMapper(ccOriginEndpointTagPropertyToTerraform, false)(this._tags.internalValue),
            uri_separator: cdktn.stringToTerraform(this._uriSeparator),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channel_group_name: {
                value: cdktn.stringToHclTerraform(this._channelGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            channel_name: {
                value: cdktn.stringToHclTerraform(this._channelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            container_type: {
                value: cdktn.stringToHclTerraform(this._containerType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dash_manifests: {
                value: cdktn.listMapperHcl(ccOriginEndpointDashManifestConfigurationPropertyToHclTerraform, false)(this._dashManifests.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOriginEndpoint.DashManifestConfigurationPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            force_endpoint_error_configuration: {
                value: ccOriginEndpointForceEndpointErrorConfigurationPropertyToHclTerraform(this._forceEndpointErrorConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOriginEndpoint.ForceEndpointErrorConfigurationProperty",
            },
            hls_manifests: {
                value: cdktn.listMapperHcl(ccOriginEndpointHlsManifestConfigurationPropertyToHclTerraform, false)(this._hlsManifests.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOriginEndpoint.HlsManifestConfigurationPropertyList",
            },
            low_latency_hls_manifests: {
                value: cdktn.listMapperHcl(ccOriginEndpointLowLatencyHlsManifestConfigurationPropertyToHclTerraform, false)(this._lowLatencyHlsManifests.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOriginEndpoint.LowLatencyHlsManifestConfigurationPropertyList",
            },
            mss_manifests: {
                value: cdktn.listMapperHcl(ccOriginEndpointMssManifestConfigurationPropertyToHclTerraform, false)(this._mssManifests.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOriginEndpoint.MssManifestConfigurationPropertyList",
            },
            origin_endpoint_name: {
                value: cdktn.stringToHclTerraform(this._originEndpointName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            segment: {
                value: ccOriginEndpointSegmentPropertyToHclTerraform(this._segment.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOriginEndpoint.SegmentProperty",
            },
            startover_window_seconds: {
                value: cdktn.numberToHclTerraform(this._startoverWindowSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccOriginEndpointTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOriginEndpoint.TagPropertyList",
            },
            uri_separator: {
                value: cdktn.stringToHclTerraform(this._uriSeparator),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOriginEndpointDashAvailabilityStartTimeConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.DashAvailabilityStartTimeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        fixed_availability_start_time: cdktn.stringToTerraform(struct!.fixedAvailabilityStartTime),
    }
}


export function ccOriginEndpointDashAvailabilityStartTimeConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.DashAvailabilityStartTimeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        fixed_availability_start_time: {
            value: cdktn.stringToHclTerraform(struct!.fixedAvailabilityStartTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointDashBaseUrlPropertyToTerraform(struct?: CcOriginEndpoint.DashBaseUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dvb_priority: cdktn.numberToTerraform(struct!.dvbPriority),
        dvb_weight: cdktn.numberToTerraform(struct!.dvbWeight),
        service_location: cdktn.stringToTerraform(struct!.serviceLocation),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccOriginEndpointDashBaseUrlPropertyToHclTerraform(struct?: CcOriginEndpoint.DashBaseUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dvb_priority: {
            value: cdktn.numberToHclTerraform(struct!.dvbPriority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dvb_weight: {
            value: cdktn.numberToHclTerraform(struct!.dvbWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        service_location: {
            value: cdktn.stringToHclTerraform(struct!.serviceLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointDashDvbMetricsReportingPropertyToTerraform(struct?: CcOriginEndpoint.DashDvbMetricsReportingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        probability: cdktn.numberToTerraform(struct!.probability),
        reporting_url: cdktn.stringToTerraform(struct!.reportingUrl),
    }
}


export function ccOriginEndpointDashDvbMetricsReportingPropertyToHclTerraform(struct?: CcOriginEndpoint.DashDvbMetricsReportingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        probability: {
            value: cdktn.numberToHclTerraform(struct!.probability),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        reporting_url: {
            value: cdktn.stringToHclTerraform(struct!.reportingUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointDashDvbFontDownloadPropertyToTerraform(struct?: CcOriginEndpoint.DashDvbFontDownloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        font_family: cdktn.stringToTerraform(struct!.fontFamily),
        mime_type: cdktn.stringToTerraform(struct!.mimeType),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccOriginEndpointDashDvbFontDownloadPropertyToHclTerraform(struct?: CcOriginEndpoint.DashDvbFontDownloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        font_family: {
            value: cdktn.stringToHclTerraform(struct!.fontFamily),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mime_type: {
            value: cdktn.stringToHclTerraform(struct!.mimeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointDashDvbSettingsPropertyToTerraform(struct?: CcOriginEndpoint.DashDvbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_metrics: cdktn.listMapper(ccOriginEndpointDashDvbMetricsReportingPropertyToTerraform, false)(struct!.errorMetrics),
        font_download: ccOriginEndpointDashDvbFontDownloadPropertyToTerraform(struct!.fontDownload),
    }
}


export function ccOriginEndpointDashDvbSettingsPropertyToHclTerraform(struct?: CcOriginEndpoint.DashDvbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_metrics: {
            value: cdktn.listMapperHcl(ccOriginEndpointDashDvbMetricsReportingPropertyToHclTerraform, false)(struct!.errorMetrics),
            isBlock: true,
            type: "list",
            storageClassType: "DashDvbMetricsReportingPropertyList",
        },
        font_download: {
            value: ccOriginEndpointDashDvbFontDownloadPropertyToHclTerraform(struct!.fontDownload),
            isBlock: true,
            type: "struct",
            storageClassType: "DashDvbFontDownloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointFilterConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.FilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clip_start_time: cdktn.stringToTerraform(struct!.clipStartTime),
        drm_settings: cdktn.stringToTerraform(struct!.drmSettings),
        end: cdktn.stringToTerraform(struct!.end),
        manifest_filter: cdktn.stringToTerraform(struct!.manifestFilter),
        start: cdktn.stringToTerraform(struct!.start),
        time_delay_seconds: cdktn.numberToTerraform(struct!.timeDelaySeconds),
    }
}


export function ccOriginEndpointFilterConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.FilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clip_start_time: {
            value: cdktn.stringToHclTerraform(struct!.clipStartTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        drm_settings: {
            value: cdktn.stringToHclTerraform(struct!.drmSettings),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        manifest_filter: {
            value: cdktn.stringToHclTerraform(struct!.manifestFilter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_delay_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeDelaySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointDashProgramInformationPropertyToTerraform(struct?: CcOriginEndpoint.DashProgramInformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        copyright: cdktn.stringToTerraform(struct!.copyright),
        language_code: cdktn.stringToTerraform(struct!.languageCode),
        more_information_url: cdktn.stringToTerraform(struct!.moreInformationUrl),
        source: cdktn.stringToTerraform(struct!.source),
        title: cdktn.stringToTerraform(struct!.title),
    }
}


export function ccOriginEndpointDashProgramInformationPropertyToHclTerraform(struct?: CcOriginEndpoint.DashProgramInformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        copyright: {
            value: cdktn.stringToHclTerraform(struct!.copyright),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        language_code: {
            value: cdktn.stringToHclTerraform(struct!.languageCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        more_information_url: {
            value: cdktn.stringToHclTerraform(struct!.moreInformationUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: cdktn.stringToHclTerraform(struct!.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        title: {
            value: cdktn.stringToHclTerraform(struct!.title),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointScteDashPropertyToTerraform(struct?: CcOriginEndpoint.ScteDashProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ad_marker_dash: cdktn.stringToTerraform(struct!.adMarkerDash),
        scte_in_manifests: cdktn.stringToTerraform(struct!.scteInManifests),
    }
}


export function ccOriginEndpointScteDashPropertyToHclTerraform(struct?: CcOriginEndpoint.ScteDashProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ad_marker_dash: {
            value: cdktn.stringToHclTerraform(struct!.adMarkerDash),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scte_in_manifests: {
            value: cdktn.stringToHclTerraform(struct!.scteInManifests),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointDashTtmlConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.DashTtmlConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ttml_profile: cdktn.stringToTerraform(struct!.ttmlProfile),
    }
}


export function ccOriginEndpointDashTtmlConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.DashTtmlConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ttml_profile: {
            value: cdktn.stringToHclTerraform(struct!.ttmlProfile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointDashSubtitleConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.DashSubtitleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ttml_configuration: ccOriginEndpointDashTtmlConfigurationPropertyToTerraform(struct!.ttmlConfiguration),
    }
}


export function ccOriginEndpointDashSubtitleConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.DashSubtitleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ttml_configuration: {
            value: ccOriginEndpointDashTtmlConfigurationPropertyToHclTerraform(struct!.ttmlConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DashTtmlConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointDashUtcTimingPropertyToTerraform(struct?: CcOriginEndpoint.DashUtcTimingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timing_mode: cdktn.stringToTerraform(struct!.timingMode),
        timing_source: cdktn.stringToTerraform(struct!.timingSource),
    }
}


export function ccOriginEndpointDashUtcTimingPropertyToHclTerraform(struct?: CcOriginEndpoint.DashUtcTimingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        timing_mode: {
            value: cdktn.stringToHclTerraform(struct!.timingMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timing_source: {
            value: cdktn.stringToHclTerraform(struct!.timingSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointDashManifestConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.DashManifestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        audio_timeline_pattern: cdktn.stringToTerraform(struct!.audioTimelinePattern),
        availability_start_time_configuration: ccOriginEndpointDashAvailabilityStartTimeConfigurationPropertyToTerraform(struct!.availabilityStartTimeConfiguration),
        base_urls: cdktn.listMapper(ccOriginEndpointDashBaseUrlPropertyToTerraform, false)(struct!.baseUrls),
        compactness: cdktn.stringToTerraform(struct!.compactness),
        drm_signaling: cdktn.stringToTerraform(struct!.drmSignaling),
        dvb_settings: ccOriginEndpointDashDvbSettingsPropertyToTerraform(struct!.dvbSettings),
        filter_configuration: ccOriginEndpointFilterConfigurationPropertyToTerraform(struct!.filterConfiguration),
        manifest_name: cdktn.stringToTerraform(struct!.manifestName),
        manifest_window_seconds: cdktn.numberToTerraform(struct!.manifestWindowSeconds),
        min_buffer_time_seconds: cdktn.numberToTerraform(struct!.minBufferTimeSeconds),
        min_update_period_seconds: cdktn.numberToTerraform(struct!.minUpdatePeriodSeconds),
        period_triggers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.periodTriggers),
        profiles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.profiles),
        program_information: ccOriginEndpointDashProgramInformationPropertyToTerraform(struct!.programInformation),
        scte_dash: ccOriginEndpointScteDashPropertyToTerraform(struct!.scteDash),
        segment_template_format: cdktn.stringToTerraform(struct!.segmentTemplateFormat),
        subtitle_configuration: ccOriginEndpointDashSubtitleConfigurationPropertyToTerraform(struct!.subtitleConfiguration),
        suggested_presentation_delay_seconds: cdktn.numberToTerraform(struct!.suggestedPresentationDelaySeconds),
        uri_path_type: cdktn.stringToTerraform(struct!.uriPathType),
        utc_timing: ccOriginEndpointDashUtcTimingPropertyToTerraform(struct!.utcTiming),
    }
}


export function ccOriginEndpointDashManifestConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.DashManifestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        audio_timeline_pattern: {
            value: cdktn.stringToHclTerraform(struct!.audioTimelinePattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        availability_start_time_configuration: {
            value: ccOriginEndpointDashAvailabilityStartTimeConfigurationPropertyToHclTerraform(struct!.availabilityStartTimeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DashAvailabilityStartTimeConfigurationProperty",
        },
        base_urls: {
            value: cdktn.listMapperHcl(ccOriginEndpointDashBaseUrlPropertyToHclTerraform, false)(struct!.baseUrls),
            isBlock: true,
            type: "list",
            storageClassType: "DashBaseUrlPropertyList",
        },
        compactness: {
            value: cdktn.stringToHclTerraform(struct!.compactness),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        drm_signaling: {
            value: cdktn.stringToHclTerraform(struct!.drmSignaling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dvb_settings: {
            value: ccOriginEndpointDashDvbSettingsPropertyToHclTerraform(struct!.dvbSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "DashDvbSettingsProperty",
        },
        filter_configuration: {
            value: ccOriginEndpointFilterConfigurationPropertyToHclTerraform(struct!.filterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterConfigurationProperty",
        },
        manifest_name: {
            value: cdktn.stringToHclTerraform(struct!.manifestName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
        period_triggers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.periodTriggers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        profiles: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.profiles),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        program_information: {
            value: ccOriginEndpointDashProgramInformationPropertyToHclTerraform(struct!.programInformation),
            isBlock: true,
            type: "struct",
            storageClassType: "DashProgramInformationProperty",
        },
        scte_dash: {
            value: ccOriginEndpointScteDashPropertyToHclTerraform(struct!.scteDash),
            isBlock: true,
            type: "struct",
            storageClassType: "ScteDashProperty",
        },
        segment_template_format: {
            value: cdktn.stringToHclTerraform(struct!.segmentTemplateFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subtitle_configuration: {
            value: ccOriginEndpointDashSubtitleConfigurationPropertyToHclTerraform(struct!.subtitleConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DashSubtitleConfigurationProperty",
        },
        suggested_presentation_delay_seconds: {
            value: cdktn.numberToHclTerraform(struct!.suggestedPresentationDelaySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        uri_path_type: {
            value: cdktn.stringToHclTerraform(struct!.uriPathType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        utc_timing: {
            value: ccOriginEndpointDashUtcTimingPropertyToHclTerraform(struct!.utcTiming),
            isBlock: true,
            type: "struct",
            storageClassType: "DashUtcTimingProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointForceEndpointErrorConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.ForceEndpointErrorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_error_conditions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointErrorConditions),
    }
}


export function ccOriginEndpointForceEndpointErrorConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.ForceEndpointErrorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_error_conditions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endpointErrorConditions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointHlsManifestsFilterConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.HlsManifestsFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clip_start_time: cdktn.stringToTerraform(struct!.clipStartTime),
        drm_settings: cdktn.stringToTerraform(struct!.drmSettings),
        end: cdktn.stringToTerraform(struct!.end),
        manifest_filter: cdktn.stringToTerraform(struct!.manifestFilter),
        start: cdktn.stringToTerraform(struct!.start),
        time_delay_seconds: cdktn.numberToTerraform(struct!.timeDelaySeconds),
    }
}


export function ccOriginEndpointHlsManifestsFilterConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.HlsManifestsFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clip_start_time: {
            value: cdktn.stringToHclTerraform(struct!.clipStartTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        drm_settings: {
            value: cdktn.stringToHclTerraform(struct!.drmSettings),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        manifest_filter: {
            value: cdktn.stringToHclTerraform(struct!.manifestFilter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_delay_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeDelaySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointScteHlsPropertyToTerraform(struct?: CcOriginEndpoint.ScteHlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ad_marker_hls: cdktn.stringToTerraform(struct!.adMarkerHls),
        scte_in_manifests: cdktn.stringToTerraform(struct!.scteInManifests),
    }
}


export function ccOriginEndpointScteHlsPropertyToHclTerraform(struct?: CcOriginEndpoint.ScteHlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ad_marker_hls: {
            value: cdktn.stringToHclTerraform(struct!.adMarkerHls),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scte_in_manifests: {
            value: cdktn.stringToHclTerraform(struct!.scteInManifests),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointStartTagPropertyToTerraform(struct?: CcOriginEndpoint.StartTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        precise: cdktn.booleanToTerraform(struct!.precise),
        time_offset: cdktn.numberToTerraform(struct!.timeOffset),
    }
}


export function ccOriginEndpointStartTagPropertyToHclTerraform(struct?: CcOriginEndpoint.StartTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        precise: {
            value: cdktn.booleanToHclTerraform(struct!.precise),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        time_offset: {
            value: cdktn.numberToHclTerraform(struct!.timeOffset),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointHlsManifestConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.HlsManifestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        child_manifest_name: cdktn.stringToTerraform(struct!.childManifestName),
        filter_configuration: ccOriginEndpointHlsManifestsFilterConfigurationPropertyToTerraform(struct!.filterConfiguration),
        manifest_name: cdktn.stringToTerraform(struct!.manifestName),
        manifest_window_seconds: cdktn.numberToTerraform(struct!.manifestWindowSeconds),
        program_date_time_interval_seconds: cdktn.numberToTerraform(struct!.programDateTimeIntervalSeconds),
        scte_hls: ccOriginEndpointScteHlsPropertyToTerraform(struct!.scteHls),
        start_tag: ccOriginEndpointStartTagPropertyToTerraform(struct!.startTag),
        uri_path_type: cdktn.stringToTerraform(struct!.uriPathType),
        url: cdktn.stringToTerraform(struct!.url),
        url_encode_child_manifest: cdktn.booleanToTerraform(struct!.urlEncodeChildManifest),
    }
}


export function ccOriginEndpointHlsManifestConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.HlsManifestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        child_manifest_name: {
            value: cdktn.stringToHclTerraform(struct!.childManifestName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_configuration: {
            value: ccOriginEndpointHlsManifestsFilterConfigurationPropertyToHclTerraform(struct!.filterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "HlsManifestsFilterConfigurationProperty",
        },
        manifest_name: {
            value: cdktn.stringToHclTerraform(struct!.manifestName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        manifest_window_seconds: {
            value: cdktn.numberToHclTerraform(struct!.manifestWindowSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        program_date_time_interval_seconds: {
            value: cdktn.numberToHclTerraform(struct!.programDateTimeIntervalSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scte_hls: {
            value: ccOriginEndpointScteHlsPropertyToHclTerraform(struct!.scteHls),
            isBlock: true,
            type: "struct",
            storageClassType: "ScteHlsProperty",
        },
        start_tag: {
            value: ccOriginEndpointStartTagPropertyToHclTerraform(struct!.startTag),
            isBlock: true,
            type: "struct",
            storageClassType: "StartTagProperty",
        },
        uri_path_type: {
            value: cdktn.stringToHclTerraform(struct!.uriPathType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url_encode_child_manifest: {
            value: cdktn.booleanToHclTerraform(struct!.urlEncodeChildManifest),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointLowLatencyHlsManifestsFilterConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.LowLatencyHlsManifestsFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clip_start_time: cdktn.stringToTerraform(struct!.clipStartTime),
        drm_settings: cdktn.stringToTerraform(struct!.drmSettings),
        end: cdktn.stringToTerraform(struct!.end),
        manifest_filter: cdktn.stringToTerraform(struct!.manifestFilter),
        start: cdktn.stringToTerraform(struct!.start),
        time_delay_seconds: cdktn.numberToTerraform(struct!.timeDelaySeconds),
    }
}


export function ccOriginEndpointLowLatencyHlsManifestsFilterConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.LowLatencyHlsManifestsFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clip_start_time: {
            value: cdktn.stringToHclTerraform(struct!.clipStartTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        drm_settings: {
            value: cdktn.stringToHclTerraform(struct!.drmSettings),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        manifest_filter: {
            value: cdktn.stringToHclTerraform(struct!.manifestFilter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_delay_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeDelaySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointLowLatencyHlsManifestsScteHlsPropertyToTerraform(struct?: CcOriginEndpoint.LowLatencyHlsManifestsScteHlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ad_marker_hls: cdktn.stringToTerraform(struct!.adMarkerHls),
        scte_in_manifests: cdktn.stringToTerraform(struct!.scteInManifests),
    }
}


export function ccOriginEndpointLowLatencyHlsManifestsScteHlsPropertyToHclTerraform(struct?: CcOriginEndpoint.LowLatencyHlsManifestsScteHlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ad_marker_hls: {
            value: cdktn.stringToHclTerraform(struct!.adMarkerHls),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scte_in_manifests: {
            value: cdktn.stringToHclTerraform(struct!.scteInManifests),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointLowLatencyHlsManifestsStartTagPropertyToTerraform(struct?: CcOriginEndpoint.LowLatencyHlsManifestsStartTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        precise: cdktn.booleanToTerraform(struct!.precise),
        time_offset: cdktn.numberToTerraform(struct!.timeOffset),
    }
}


export function ccOriginEndpointLowLatencyHlsManifestsStartTagPropertyToHclTerraform(struct?: CcOriginEndpoint.LowLatencyHlsManifestsStartTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        precise: {
            value: cdktn.booleanToHclTerraform(struct!.precise),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        time_offset: {
            value: cdktn.numberToHclTerraform(struct!.timeOffset),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointLowLatencyHlsManifestConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.LowLatencyHlsManifestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        child_manifest_name: cdktn.stringToTerraform(struct!.childManifestName),
        filter_configuration: ccOriginEndpointLowLatencyHlsManifestsFilterConfigurationPropertyToTerraform(struct!.filterConfiguration),
        manifest_name: cdktn.stringToTerraform(struct!.manifestName),
        manifest_window_seconds: cdktn.numberToTerraform(struct!.manifestWindowSeconds),
        program_date_time_interval_seconds: cdktn.numberToTerraform(struct!.programDateTimeIntervalSeconds),
        scte_hls: ccOriginEndpointLowLatencyHlsManifestsScteHlsPropertyToTerraform(struct!.scteHls),
        start_tag: ccOriginEndpointLowLatencyHlsManifestsStartTagPropertyToTerraform(struct!.startTag),
        uri_path_type: cdktn.stringToTerraform(struct!.uriPathType),
        url: cdktn.stringToTerraform(struct!.url),
        url_encode_child_manifest: cdktn.booleanToTerraform(struct!.urlEncodeChildManifest),
    }
}


export function ccOriginEndpointLowLatencyHlsManifestConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.LowLatencyHlsManifestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        child_manifest_name: {
            value: cdktn.stringToHclTerraform(struct!.childManifestName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_configuration: {
            value: ccOriginEndpointLowLatencyHlsManifestsFilterConfigurationPropertyToHclTerraform(struct!.filterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LowLatencyHlsManifestsFilterConfigurationProperty",
        },
        manifest_name: {
            value: cdktn.stringToHclTerraform(struct!.manifestName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        manifest_window_seconds: {
            value: cdktn.numberToHclTerraform(struct!.manifestWindowSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        program_date_time_interval_seconds: {
            value: cdktn.numberToHclTerraform(struct!.programDateTimeIntervalSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scte_hls: {
            value: ccOriginEndpointLowLatencyHlsManifestsScteHlsPropertyToHclTerraform(struct!.scteHls),
            isBlock: true,
            type: "struct",
            storageClassType: "LowLatencyHlsManifestsScteHlsProperty",
        },
        start_tag: {
            value: ccOriginEndpointLowLatencyHlsManifestsStartTagPropertyToHclTerraform(struct!.startTag),
            isBlock: true,
            type: "struct",
            storageClassType: "LowLatencyHlsManifestsStartTagProperty",
        },
        uri_path_type: {
            value: cdktn.stringToHclTerraform(struct!.uriPathType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url_encode_child_manifest: {
            value: cdktn.booleanToHclTerraform(struct!.urlEncodeChildManifest),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointMssManifestsFilterConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.MssManifestsFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        clip_start_time: cdktn.stringToTerraform(struct!.clipStartTime),
        drm_settings: cdktn.stringToTerraform(struct!.drmSettings),
        end: cdktn.stringToTerraform(struct!.end),
        manifest_filter: cdktn.stringToTerraform(struct!.manifestFilter),
        start: cdktn.stringToTerraform(struct!.start),
        time_delay_seconds: cdktn.numberToTerraform(struct!.timeDelaySeconds),
    }
}


export function ccOriginEndpointMssManifestsFilterConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.MssManifestsFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        clip_start_time: {
            value: cdktn.stringToHclTerraform(struct!.clipStartTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        drm_settings: {
            value: cdktn.stringToHclTerraform(struct!.drmSettings),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        manifest_filter: {
            value: cdktn.stringToHclTerraform(struct!.manifestFilter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_delay_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeDelaySeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointMssManifestConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.MssManifestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter_configuration: ccOriginEndpointMssManifestsFilterConfigurationPropertyToTerraform(struct!.filterConfiguration),
        manifest_layout: cdktn.stringToTerraform(struct!.manifestLayout),
        manifest_name: cdktn.stringToTerraform(struct!.manifestName),
        manifest_window_seconds: cdktn.numberToTerraform(struct!.manifestWindowSeconds),
    }
}


export function ccOriginEndpointMssManifestConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.MssManifestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter_configuration: {
            value: ccOriginEndpointMssManifestsFilterConfigurationPropertyToHclTerraform(struct!.filterConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "MssManifestsFilterConfigurationProperty",
        },
        manifest_layout: {
            value: cdktn.stringToHclTerraform(struct!.manifestLayout),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        manifest_name: {
            value: cdktn.stringToHclTerraform(struct!.manifestName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccOriginEndpointEncryptionMethodPropertyToTerraform(struct?: CcOriginEndpoint.EncryptionMethodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cmaf_encryption_method: cdktn.stringToTerraform(struct!.cmafEncryptionMethod),
        ism_encryption_method: cdktn.stringToTerraform(struct!.ismEncryptionMethod),
        ts_encryption_method: cdktn.stringToTerraform(struct!.tsEncryptionMethod),
    }
}


export function ccOriginEndpointEncryptionMethodPropertyToHclTerraform(struct?: CcOriginEndpoint.EncryptionMethodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cmaf_encryption_method: {
            value: cdktn.stringToHclTerraform(struct!.cmafEncryptionMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ism_encryption_method: {
            value: cdktn.stringToHclTerraform(struct!.ismEncryptionMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ts_encryption_method: {
            value: cdktn.stringToHclTerraform(struct!.tsEncryptionMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointEncryptionContractConfigurationPropertyToTerraform(struct?: CcOriginEndpoint.EncryptionContractConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        preset_speke_20_audio: cdktn.stringToTerraform(struct!.presetSpeke20Audio),
        preset_speke_20_video: cdktn.stringToTerraform(struct!.presetSpeke20Video),
    }
}


export function ccOriginEndpointEncryptionContractConfigurationPropertyToHclTerraform(struct?: CcOriginEndpoint.EncryptionContractConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        preset_speke_20_audio: {
            value: cdktn.stringToHclTerraform(struct!.presetSpeke20Audio),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        preset_speke_20_video: {
            value: cdktn.stringToHclTerraform(struct!.presetSpeke20Video),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointSpekeKeyProviderPropertyToTerraform(struct?: CcOriginEndpoint.SpekeKeyProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
        drm_systems: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.drmSystems),
        encryption_contract_configuration: ccOriginEndpointEncryptionContractConfigurationPropertyToTerraform(struct!.encryptionContractConfiguration),
        resource_id: cdktn.stringToTerraform(struct!.resourceId),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccOriginEndpointSpekeKeyProviderPropertyToHclTerraform(struct?: CcOriginEndpoint.SpekeKeyProviderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        drm_systems: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.drmSystems),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        encryption_contract_configuration: {
            value: ccOriginEndpointEncryptionContractConfigurationPropertyToHclTerraform(struct!.encryptionContractConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionContractConfigurationProperty",
        },
        resource_id: {
            value: cdktn.stringToHclTerraform(struct!.resourceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointEncryptionPropertyToTerraform(struct?: CcOriginEndpoint.EncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cmaf_exclude_segment_drm_metadata: cdktn.booleanToTerraform(struct!.cmafExcludeSegmentDrmMetadata),
        constant_initialization_vector: cdktn.stringToTerraform(struct!.constantInitializationVector),
        encryption_method: ccOriginEndpointEncryptionMethodPropertyToTerraform(struct!.encryptionMethod),
        key_rotation_interval_seconds: cdktn.numberToTerraform(struct!.keyRotationIntervalSeconds),
        speke_key_provider: ccOriginEndpointSpekeKeyProviderPropertyToTerraform(struct!.spekeKeyProvider),
    }
}


export function ccOriginEndpointEncryptionPropertyToHclTerraform(struct?: CcOriginEndpoint.EncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cmaf_exclude_segment_drm_metadata: {
            value: cdktn.booleanToHclTerraform(struct!.cmafExcludeSegmentDrmMetadata),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        constant_initialization_vector: {
            value: cdktn.stringToHclTerraform(struct!.constantInitializationVector),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encryption_method: {
            value: ccOriginEndpointEncryptionMethodPropertyToHclTerraform(struct!.encryptionMethod),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionMethodProperty",
        },
        key_rotation_interval_seconds: {
            value: cdktn.numberToHclTerraform(struct!.keyRotationIntervalSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        speke_key_provider: {
            value: ccOriginEndpointSpekeKeyProviderPropertyToHclTerraform(struct!.spekeKeyProvider),
            isBlock: true,
            type: "struct",
            storageClassType: "SpekeKeyProviderProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointSctePropertyToTerraform(struct?: CcOriginEndpoint.ScteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_ad_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.customAdTypes),
        scte_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scteFilter),
        scte_in_segments: cdktn.stringToTerraform(struct!.scteInSegments),
    }
}


export function ccOriginEndpointSctePropertyToHclTerraform(struct?: CcOriginEndpoint.ScteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_ad_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.customAdTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        scte_filter: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scteFilter),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        scte_in_segments: {
            value: cdktn.stringToHclTerraform(struct!.scteInSegments),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointSegmentPropertyToTerraform(struct?: CcOriginEndpoint.SegmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption: ccOriginEndpointEncryptionPropertyToTerraform(struct!.encryption),
        include_iframe_only_streams: cdktn.booleanToTerraform(struct!.includeIframeOnlyStreams),
        output_timestamp_mode: cdktn.stringToTerraform(struct!.outputTimestampMode),
        scte: ccOriginEndpointSctePropertyToTerraform(struct!.scte),
        segment_duration_seconds: cdktn.numberToTerraform(struct!.segmentDurationSeconds),
        segment_name: cdktn.stringToTerraform(struct!.segmentName),
        ts_include_dvb_subtitles: cdktn.booleanToTerraform(struct!.tsIncludeDvbSubtitles),
        ts_use_audio_rendition_group: cdktn.booleanToTerraform(struct!.tsUseAudioRenditionGroup),
    }
}


export function ccOriginEndpointSegmentPropertyToHclTerraform(struct?: CcOriginEndpoint.SegmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption: {
            value: ccOriginEndpointEncryptionPropertyToHclTerraform(struct!.encryption),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionProperty",
        },
        include_iframe_only_streams: {
            value: cdktn.booleanToHclTerraform(struct!.includeIframeOnlyStreams),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        output_timestamp_mode: {
            value: cdktn.stringToHclTerraform(struct!.outputTimestampMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scte: {
            value: ccOriginEndpointSctePropertyToHclTerraform(struct!.scte),
            isBlock: true,
            type: "struct",
            storageClassType: "ScteProperty",
        },
        segment_duration_seconds: {
            value: cdktn.numberToHclTerraform(struct!.segmentDurationSeconds),
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
        ts_include_dvb_subtitles: {
            value: cdktn.booleanToHclTerraform(struct!.tsIncludeDvbSubtitles),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ts_use_audio_rendition_group: {
            value: cdktn.booleanToHclTerraform(struct!.tsUseAudioRenditionGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOriginEndpointTagPropertyToTerraform(struct?: CcOriginEndpoint.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccOriginEndpointTagPropertyToHclTerraform(struct?: CcOriginEndpoint.TagProperty | cdktn.IResolvable): any {
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


export namespace CcOriginEndpoint {
export interface DashAvailabilityStartTimeConfigurationProperty {
    /**
    * <p>The fixed availability start time for the DASH manifest, in ISO 8601 date-time format. The value must have hourly granularity, meaning that the minutes, seconds, and fractional seconds must be zero. The value must be on or after <code>2024-01-01T00:00:00Z</code> and must be at least 14 days before the current time.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#fixed_availability_start_time CcOriginEndpoint#fixed_availability_start_time}
    */
    readonly fixedAvailabilityStartTime?: string;
}
export class DashAvailabilityStartTimeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashAvailabilityStartTimeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fixedAvailabilityStartTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.fixedAvailabilityStartTime = this._fixedAvailabilityStartTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashAvailabilityStartTimeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fixedAvailabilityStartTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fixedAvailabilityStartTime = value.fixedAvailabilityStartTime;
        }
    }

    // fixed_availability_start_time - computed: true, optional: true, required: false
    private _fixedAvailabilityStartTime?: string; 
    public get fixedAvailabilityStartTime() {
        return this.getStringAttribute('fixed_availability_start_time');
    }
    public set fixedAvailabilityStartTime(value: string) {
        this._fixedAvailabilityStartTime = value;
    }
    public resetFixedAvailabilityStartTime() {
        this._fixedAvailabilityStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fixedAvailabilityStartTimeInput() {
        return this._fixedAvailabilityStartTime;
    }
}
export interface DashBaseUrlProperty {
    /**
    * <p>For use with DVB-DASH profiles only. The priority of this location for servings segments. The lower the number, the higher the priority.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#dvb_priority CcOriginEndpoint#dvb_priority}
    */
    readonly dvbPriority?: number;
    /**
    * <p>For use with DVB-DASH profiles only. The weighting for source locations that have the same priority. </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#dvb_weight CcOriginEndpoint#dvb_weight}
    */
    readonly dvbWeight?: number;
    /**
    * <p>The name of the source location.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#service_location CcOriginEndpoint#service_location}
    */
    readonly serviceLocation?: string;
    /**
    * <p>A source location for segments.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#url CcOriginEndpoint#url}
    */
    readonly url?: string;
}
export class DashBaseUrlPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DashBaseUrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dvbPriority !== undefined) {
            hasAnyValues = true;
            internalValueResult.dvbPriority = this._dvbPriority;
        }
        if (this._dvbWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.dvbWeight = this._dvbWeight;
        }
        if (this._serviceLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceLocation = this._serviceLocation;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashBaseUrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dvbPriority = undefined;
            this._dvbWeight = undefined;
            this._serviceLocation = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dvbPriority = value.dvbPriority;
            this._dvbWeight = value.dvbWeight;
            this._serviceLocation = value.serviceLocation;
            this._url = value.url;
        }
    }

    // dvb_priority - computed: true, optional: true, required: false
    private _dvbPriority?: number; 
    public get dvbPriority() {
        return this.getNumberAttribute('dvb_priority');
    }
    public set dvbPriority(value: number) {
        this._dvbPriority = value;
    }
    public resetDvbPriority() {
        this._dvbPriority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dvbPriorityInput() {
        return this._dvbPriority;
    }

    // dvb_weight - computed: true, optional: true, required: false
    private _dvbWeight?: number; 
    public get dvbWeight() {
        return this.getNumberAttribute('dvb_weight');
    }
    public set dvbWeight(value: number) {
        this._dvbWeight = value;
    }
    public resetDvbWeight() {
        this._dvbWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dvbWeightInput() {
        return this._dvbWeight;
    }

    // service_location - computed: true, optional: true, required: false
    private _serviceLocation?: string; 
    public get serviceLocation() {
        return this.getStringAttribute('service_location');
    }
    public set serviceLocation(value: string) {
        this._serviceLocation = value;
    }
    public resetServiceLocation() {
        this._serviceLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceLocationInput() {
        return this._serviceLocation;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}

export class DashBaseUrlPropertyList extends cdktn.ComplexList {
    public internalValue? : DashBaseUrlProperty[] | cdktn.IResolvable

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
    public get(index: number): DashBaseUrlPropertyOutputReference {
        return new DashBaseUrlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DashDvbMetricsReportingProperty {
    /**
    * <p>The number of playback devices per 1000 that will send error reports to the reporting URL. This represents the probability that a playback device will be a reporting player for this session.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#probability CcOriginEndpoint#probability}
    */
    readonly probability?: number;
    /**
    * <p>The URL where playback devices send error reports.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#reporting_url CcOriginEndpoint#reporting_url}
    */
    readonly reportingUrl?: string;
}
export class DashDvbMetricsReportingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DashDvbMetricsReportingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._probability !== undefined) {
            hasAnyValues = true;
            internalValueResult.probability = this._probability;
        }
        if (this._reportingUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportingUrl = this._reportingUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashDvbMetricsReportingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._probability = undefined;
            this._reportingUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._probability = value.probability;
            this._reportingUrl = value.reportingUrl;
        }
    }

    // probability - computed: true, optional: true, required: false
    private _probability?: number; 
    public get probability() {
        return this.getNumberAttribute('probability');
    }
    public set probability(value: number) {
        this._probability = value;
    }
    public resetProbability() {
        this._probability = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get probabilityInput() {
        return this._probability;
    }

    // reporting_url - computed: true, optional: true, required: false
    private _reportingUrl?: string; 
    public get reportingUrl() {
        return this.getStringAttribute('reporting_url');
    }
    public set reportingUrl(value: string) {
        this._reportingUrl = value;
    }
    public resetReportingUrl() {
        this._reportingUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportingUrlInput() {
        return this._reportingUrl;
    }
}

export class DashDvbMetricsReportingPropertyList extends cdktn.ComplexList {
    public internalValue? : DashDvbMetricsReportingProperty[] | cdktn.IResolvable

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
    public get(index: number): DashDvbMetricsReportingPropertyOutputReference {
        return new DashDvbMetricsReportingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DashDvbFontDownloadProperty {
    /**
    * <p>The <code>fontFamily</code> name for subtitles, as described in <a href="https://tech.ebu.ch/publications/tech3380">EBU-TT-D Subtitling Distribution Format</a>. </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#font_family CcOriginEndpoint#font_family}
    */
    readonly fontFamily?: string;
    /**
    * <p>The <code>mimeType</code> of the resource that's at the font download URL.</p> <p>For information about font MIME types, see the <a href="https://dvb.org/wp-content/uploads/2021/06/A168r4_MPEG-DASH-Profile-for-Transport-of-ISO-BMFF-Based-DVB-Services_Draft-ts_103-285-v140_November_2021.pdf">MPEG-DASH Profile for Transport of ISO BMFF Based DVB Services over IP Based Networks</a> document. </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#mime_type CcOriginEndpoint#mime_type}
    */
    readonly mimeType?: string;
    /**
    * <p>The URL for downloading fonts for subtitles.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#url CcOriginEndpoint#url}
    */
    readonly url?: string;
}
export class DashDvbFontDownloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashDvbFontDownloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fontFamily !== undefined) {
            hasAnyValues = true;
            internalValueResult.fontFamily = this._fontFamily;
        }
        if (this._mimeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.mimeType = this._mimeType;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashDvbFontDownloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fontFamily = undefined;
            this._mimeType = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fontFamily = value.fontFamily;
            this._mimeType = value.mimeType;
            this._url = value.url;
        }
    }

    // font_family - computed: true, optional: true, required: false
    private _fontFamily?: string; 
    public get fontFamily() {
        return this.getStringAttribute('font_family');
    }
    public set fontFamily(value: string) {
        this._fontFamily = value;
    }
    public resetFontFamily() {
        this._fontFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fontFamilyInput() {
        return this._fontFamily;
    }

    // mime_type - computed: true, optional: true, required: false
    private _mimeType?: string; 
    public get mimeType() {
        return this.getStringAttribute('mime_type');
    }
    public set mimeType(value: string) {
        this._mimeType = value;
    }
    public resetMimeType() {
        this._mimeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mimeTypeInput() {
        return this._mimeType;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}
export interface DashDvbSettingsProperty {
    /**
    * <p>Playback device error reporting settings.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#error_metrics CcOriginEndpoint#error_metrics}
    */
    readonly errorMetrics?: DashDvbMetricsReportingProperty[] | cdktn.IResolvable;
    /**
    * <p>For use with DVB-DASH profiles only. The settings for font downloads that you want Elemental MediaPackage to pass through to the manifest.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#font_download CcOriginEndpoint#font_download}
    */
    readonly fontDownload?: DashDvbFontDownloadProperty;
}
export class DashDvbSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashDvbSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorMetrics = this._errorMetrics?.internalValue;
        }
        if (this._fontDownload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fontDownload = this._fontDownload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashDvbSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorMetrics.internalValue = undefined;
            this._fontDownload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorMetrics.internalValue = value.errorMetrics;
            this._fontDownload.internalValue = value.fontDownload;
        }
    }

    // error_metrics - computed: true, optional: true, required: false
    private _errorMetrics = new DashDvbMetricsReportingPropertyList(this, "error_metrics", false);
    public get errorMetrics() {
        return this._errorMetrics;
    }
    public putErrorMetrics(value: DashDvbMetricsReportingProperty[] | cdktn.IResolvable) {
        this._errorMetrics.internalValue = value;
    }
    public resetErrorMetrics() {
        this._errorMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorMetricsInput() {
        return this._errorMetrics.internalValue;
    }

    // font_download - computed: true, optional: true, required: false
    private _fontDownload = new DashDvbFontDownloadPropertyOutputReference(this, "font_download");
    public get fontDownload() {
        return this._fontDownload;
    }
    public putFontDownload(value: DashDvbFontDownloadProperty) {
        this._fontDownload.internalValue = value;
    }
    public resetFontDownload() {
        this._fontDownload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fontDownloadInput() {
        return this._fontDownload.internalValue;
    }
}
export interface FilterConfigurationProperty {
    /**
    * <p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time CcOriginEndpoint#clip_start_time}
    */
    readonly clipStartTime?: string;
    /**
    * <p>Optionally specify one or more DRM settings for all of your manifest egress requests. When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings CcOriginEndpoint#drm_settings}
    */
    readonly drmSettings?: string;
    /**
    * <p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#end CcOriginEndpoint#end}
    */
    readonly end?: string;
    /**
    * <p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter CcOriginEndpoint#manifest_filter}
    */
    readonly manifestFilter?: string;
    /**
    * <p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#start CcOriginEndpoint#start}
    */
    readonly start?: string;
    /**
    * <p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds CcOriginEndpoint#time_delay_seconds}
    */
    readonly timeDelaySeconds?: number;
}
export class FilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clipStartTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.clipStartTime = this._clipStartTime;
        }
        if (this._drmSettings !== undefined) {
            hasAnyValues = true;
            internalValueResult.drmSettings = this._drmSettings;
        }
        if (this._end !== undefined) {
            hasAnyValues = true;
            internalValueResult.end = this._end;
        }
        if (this._manifestFilter !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestFilter = this._manifestFilter;
        }
        if (this._start !== undefined) {
            hasAnyValues = true;
            internalValueResult.start = this._start;
        }
        if (this._timeDelaySeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeDelaySeconds = this._timeDelaySeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clipStartTime = undefined;
            this._drmSettings = undefined;
            this._end = undefined;
            this._manifestFilter = undefined;
            this._start = undefined;
            this._timeDelaySeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clipStartTime = value.clipStartTime;
            this._drmSettings = value.drmSettings;
            this._end = value.end;
            this._manifestFilter = value.manifestFilter;
            this._start = value.start;
            this._timeDelaySeconds = value.timeDelaySeconds;
        }
    }

    // clip_start_time - computed: true, optional: true, required: false
    private _clipStartTime?: string; 
    public get clipStartTime() {
        return this.getStringAttribute('clip_start_time');
    }
    public set clipStartTime(value: string) {
        this._clipStartTime = value;
    }
    public resetClipStartTime() {
        this._clipStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clipStartTimeInput() {
        return this._clipStartTime;
    }

    // drm_settings - computed: true, optional: true, required: false
    private _drmSettings?: string; 
    public get drmSettings() {
        return this.getStringAttribute('drm_settings');
    }
    public set drmSettings(value: string) {
        this._drmSettings = value;
    }
    public resetDrmSettings() {
        this._drmSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drmSettingsInput() {
        return this._drmSettings;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
        this._end = value;
    }
    public resetEnd() {
        this._end = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInput() {
        return this._end;
    }

    // manifest_filter - computed: true, optional: true, required: false
    private _manifestFilter?: string; 
    public get manifestFilter() {
        return this.getStringAttribute('manifest_filter');
    }
    public set manifestFilter(value: string) {
        this._manifestFilter = value;
    }
    public resetManifestFilter() {
        this._manifestFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestFilterInput() {
        return this._manifestFilter;
    }

    // start - computed: true, optional: true, required: false
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
        this._start = value;
    }
    public resetStart() {
        this._start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInput() {
        return this._start;
    }

    // time_delay_seconds - computed: true, optional: true, required: false
    private _timeDelaySeconds?: number; 
    public get timeDelaySeconds() {
        return this.getNumberAttribute('time_delay_seconds');
    }
    public set timeDelaySeconds(value: number) {
        this._timeDelaySeconds = value;
    }
    public resetTimeDelaySeconds() {
        this._timeDelaySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeDelaySecondsInput() {
        return this._timeDelaySeconds;
    }
}
export interface DashProgramInformationProperty {
    /**
    * <p>A copyright statement about the content.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#copyright CcOriginEndpoint#copyright}
    */
    readonly copyright?: string;
    /**
    * <p>The language code for this manifest.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#language_code CcOriginEndpoint#language_code}
    */
    readonly languageCode?: string;
    /**
    * <p>An absolute URL that contains more information about this content.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#more_information_url CcOriginEndpoint#more_information_url}
    */
    readonly moreInformationUrl?: string;
    /**
    * <p>Information about the content provider.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#source CcOriginEndpoint#source}
    */
    readonly source?: string;
    /**
    * <p>The title for the manifest.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#title CcOriginEndpoint#title}
    */
    readonly title?: string;
}
export class DashProgramInformationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashProgramInformationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._copyright !== undefined) {
            hasAnyValues = true;
            internalValueResult.copyright = this._copyright;
        }
        if (this._languageCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.languageCode = this._languageCode;
        }
        if (this._moreInformationUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.moreInformationUrl = this._moreInformationUrl;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._title !== undefined) {
            hasAnyValues = true;
            internalValueResult.title = this._title;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashProgramInformationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._copyright = undefined;
            this._languageCode = undefined;
            this._moreInformationUrl = undefined;
            this._source = undefined;
            this._title = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._copyright = value.copyright;
            this._languageCode = value.languageCode;
            this._moreInformationUrl = value.moreInformationUrl;
            this._source = value.source;
            this._title = value.title;
        }
    }

    // copyright - computed: true, optional: true, required: false
    private _copyright?: string; 
    public get copyright() {
        return this.getStringAttribute('copyright');
    }
    public set copyright(value: string) {
        this._copyright = value;
    }
    public resetCopyright() {
        this._copyright = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyrightInput() {
        return this._copyright;
    }

    // language_code - computed: true, optional: true, required: false
    private _languageCode?: string; 
    public get languageCode() {
        return this.getStringAttribute('language_code');
    }
    public set languageCode(value: string) {
        this._languageCode = value;
    }
    public resetLanguageCode() {
        this._languageCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get languageCodeInput() {
        return this._languageCode;
    }

    // more_information_url - computed: true, optional: true, required: false
    private _moreInformationUrl?: string; 
    public get moreInformationUrl() {
        return this.getStringAttribute('more_information_url');
    }
    public set moreInformationUrl(value: string) {
        this._moreInformationUrl = value;
    }
    public resetMoreInformationUrl() {
        this._moreInformationUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get moreInformationUrlInput() {
        return this._moreInformationUrl;
    }

    // source - computed: true, optional: true, required: false
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    public resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // title - computed: true, optional: true, required: false
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    public resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }
}
export interface ScteDashProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_dash CcOriginEndpoint#ad_marker_dash}
    */
    readonly adMarkerDash?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests CcOriginEndpoint#scte_in_manifests}
    */
    readonly scteInManifests?: string;
}
export class ScteDashPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScteDashProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._adMarkerDash !== undefined) {
            hasAnyValues = true;
            internalValueResult.adMarkerDash = this._adMarkerDash;
        }
        if (this._scteInManifests !== undefined) {
            hasAnyValues = true;
            internalValueResult.scteInManifests = this._scteInManifests;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScteDashProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._adMarkerDash = undefined;
            this._scteInManifests = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._adMarkerDash = value.adMarkerDash;
            this._scteInManifests = value.scteInManifests;
        }
    }

    // ad_marker_dash - computed: true, optional: true, required: false
    private _adMarkerDash?: string; 
    public get adMarkerDash() {
        return this.getStringAttribute('ad_marker_dash');
    }
    public set adMarkerDash(value: string) {
        this._adMarkerDash = value;
    }
    public resetAdMarkerDash() {
        this._adMarkerDash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adMarkerDashInput() {
        return this._adMarkerDash;
    }

    // scte_in_manifests - computed: true, optional: true, required: false
    private _scteInManifests?: string; 
    public get scteInManifests() {
        return this.getStringAttribute('scte_in_manifests');
    }
    public set scteInManifests(value: string) {
        this._scteInManifests = value;
    }
    public resetScteInManifests() {
        this._scteInManifests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scteInManifestsInput() {
        return this._scteInManifests;
    }
}
export interface DashTtmlConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#ttml_profile CcOriginEndpoint#ttml_profile}
    */
    readonly ttmlProfile?: string;
}
export class DashTtmlConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashTtmlConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ttmlProfile !== undefined) {
            hasAnyValues = true;
            internalValueResult.ttmlProfile = this._ttmlProfile;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashTtmlConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ttmlProfile = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ttmlProfile = value.ttmlProfile;
        }
    }

    // ttml_profile - computed: true, optional: true, required: false
    private _ttmlProfile?: string; 
    public get ttmlProfile() {
        return this.getStringAttribute('ttml_profile');
    }
    public set ttmlProfile(value: string) {
        this._ttmlProfile = value;
    }
    public resetTtmlProfile() {
        this._ttmlProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ttmlProfileInput() {
        return this._ttmlProfile;
    }
}
export interface DashSubtitleConfigurationProperty {
    /**
    * <p>The settings for TTML subtitles.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#ttml_configuration CcOriginEndpoint#ttml_configuration}
    */
    readonly ttmlConfiguration?: DashTtmlConfigurationProperty;
}
export class DashSubtitleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashSubtitleConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ttmlConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ttmlConfiguration = this._ttmlConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashSubtitleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ttmlConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ttmlConfiguration.internalValue = value.ttmlConfiguration;
        }
    }

    // ttml_configuration - computed: true, optional: true, required: false
    private _ttmlConfiguration = new DashTtmlConfigurationPropertyOutputReference(this, "ttml_configuration");
    public get ttmlConfiguration() {
        return this._ttmlConfiguration;
    }
    public putTtmlConfiguration(value: DashTtmlConfigurationProperty) {
        this._ttmlConfiguration.internalValue = value;
    }
    public resetTtmlConfiguration() {
        this._ttmlConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ttmlConfigurationInput() {
        return this._ttmlConfiguration.internalValue;
    }
}
export interface DashUtcTimingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#timing_mode CcOriginEndpoint#timing_mode}
    */
    readonly timingMode?: string;
    /**
    * <p>The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#timing_source CcOriginEndpoint#timing_source}
    */
    readonly timingSource?: string;
}
export class DashUtcTimingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DashUtcTimingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timingMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.timingMode = this._timingMode;
        }
        if (this._timingSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.timingSource = this._timingSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashUtcTimingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timingMode = undefined;
            this._timingSource = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timingMode = value.timingMode;
            this._timingSource = value.timingSource;
        }
    }

    // timing_mode - computed: true, optional: true, required: false
    private _timingMode?: string; 
    public get timingMode() {
        return this.getStringAttribute('timing_mode');
    }
    public set timingMode(value: string) {
        this._timingMode = value;
    }
    public resetTimingMode() {
        this._timingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timingModeInput() {
        return this._timingMode;
    }

    // timing_source - computed: true, optional: true, required: false
    private _timingSource?: string; 
    public get timingSource() {
        return this.getStringAttribute('timing_source');
    }
    public set timingSource(value: string) {
        this._timingSource = value;
    }
    public resetTimingSource() {
        this._timingSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timingSourceInput() {
        return this._timingSource;
    }
}
export interface DashManifestConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#audio_timeline_pattern CcOriginEndpoint#audio_timeline_pattern}
    */
    readonly audioTimelinePattern?: string;
    /**
    * <p>The configuration for the DASH <code>availabilityStartTime</code> attribute of the Media Presentation Description (MPD). Use this configuration to set a custom availability start time for your DASH manifest.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#availability_start_time_configuration CcOriginEndpoint#availability_start_time_configuration}
    */
    readonly availabilityStartTimeConfiguration?: DashAvailabilityStartTimeConfigurationProperty;
    /**
    * <p>The base URL to use for retrieving segments.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#base_urls CcOriginEndpoint#base_urls}
    */
    readonly baseUrls?: DashBaseUrlProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#compactness CcOriginEndpoint#compactness}
    */
    readonly compactness?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#drm_signaling CcOriginEndpoint#drm_signaling}
    */
    readonly drmSignaling?: string;
    /**
    * <p>For endpoints that use the DVB-DASH profile only. The font download and error reporting information that you want MediaPackage to pass through to the manifest.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#dvb_settings CcOriginEndpoint#dvb_settings}
    */
    readonly dvbSettings?: DashDvbSettingsProperty;
    /**
    * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration CcOriginEndpoint#filter_configuration}
    */
    readonly filterConfiguration?: FilterConfigurationProperty;
    /**
    * <p>A short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name CcOriginEndpoint#manifest_name}
    */
    readonly manifestName?: string;
    /**
    * <p>The total duration (in seconds) of the manifest's content.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds CcOriginEndpoint#manifest_window_seconds}
    */
    readonly manifestWindowSeconds?: number;
    /**
    * <p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#min_buffer_time_seconds CcOriginEndpoint#min_buffer_time_seconds}
    */
    readonly minBufferTimeSeconds?: number;
    /**
    * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#min_update_period_seconds CcOriginEndpoint#min_update_period_seconds}
    */
    readonly minUpdatePeriodSeconds?: number;
    /**
    * <p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. Leave this value empty to indicate that the manifest is contained all in one period. For more information about periods in the DASH manifest, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html">Multi-period DASH in AWS Elemental MediaPackage</a>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#period_triggers CcOriginEndpoint#period_triggers}
    */
    readonly periodTriggers?: string[];
    /**
    * <p>The profile that the output is compliant with.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#profiles CcOriginEndpoint#profiles}
    */
    readonly profiles?: string[];
    /**
    * <p>Details about the content that you want MediaPackage to pass through in the manifest to the playback device.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#program_information CcOriginEndpoint#program_information}
    */
    readonly programInformation?: DashProgramInformationProperty;
    /**
    * <p>The SCTE configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#scte_dash CcOriginEndpoint#scte_dash}
    */
    readonly scteDash?: ScteDashProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#segment_template_format CcOriginEndpoint#segment_template_format}
    */
    readonly segmentTemplateFormat?: string;
    /**
    * <p>The configuration for DASH subtitles.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#subtitle_configuration CcOriginEndpoint#subtitle_configuration}
    */
    readonly subtitleConfiguration?: DashSubtitleConfigurationProperty;
    /**
    * <p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#suggested_presentation_delay_seconds CcOriginEndpoint#suggested_presentation_delay_seconds}
    */
    readonly suggestedPresentationDelaySeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type CcOriginEndpoint#uri_path_type}
    */
    readonly uriPathType?: string;
    /**
    * <p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#utc_timing CcOriginEndpoint#utc_timing}
    */
    readonly utcTiming?: DashUtcTimingProperty;
}
export class DashManifestConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DashManifestConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._audioTimelinePattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.audioTimelinePattern = this._audioTimelinePattern;
        }
        if (this._availabilityStartTimeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityStartTimeConfiguration = this._availabilityStartTimeConfiguration?.internalValue;
        }
        if (this._baseUrls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseUrls = this._baseUrls?.internalValue;
        }
        if (this._compactness !== undefined) {
            hasAnyValues = true;
            internalValueResult.compactness = this._compactness;
        }
        if (this._drmSignaling !== undefined) {
            hasAnyValues = true;
            internalValueResult.drmSignaling = this._drmSignaling;
        }
        if (this._dvbSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dvbSettings = this._dvbSettings?.internalValue;
        }
        if (this._filterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
        }
        if (this._manifestName !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestName = this._manifestName;
        }
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
        if (this._periodTriggers !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodTriggers = this._periodTriggers;
        }
        if (this._profiles !== undefined) {
            hasAnyValues = true;
            internalValueResult.profiles = this._profiles;
        }
        if (this._programInformation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.programInformation = this._programInformation?.internalValue;
        }
        if (this._scteDash?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scteDash = this._scteDash?.internalValue;
        }
        if (this._segmentTemplateFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentTemplateFormat = this._segmentTemplateFormat;
        }
        if (this._subtitleConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subtitleConfiguration = this._subtitleConfiguration?.internalValue;
        }
        if (this._suggestedPresentationDelaySeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.suggestedPresentationDelaySeconds = this._suggestedPresentationDelaySeconds;
        }
        if (this._uriPathType !== undefined) {
            hasAnyValues = true;
            internalValueResult.uriPathType = this._uriPathType;
        }
        if (this._utcTiming?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.utcTiming = this._utcTiming?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DashManifestConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._audioTimelinePattern = undefined;
            this._availabilityStartTimeConfiguration.internalValue = undefined;
            this._baseUrls.internalValue = undefined;
            this._compactness = undefined;
            this._drmSignaling = undefined;
            this._dvbSettings.internalValue = undefined;
            this._filterConfiguration.internalValue = undefined;
            this._manifestName = undefined;
            this._manifestWindowSeconds = undefined;
            this._minBufferTimeSeconds = undefined;
            this._minUpdatePeriodSeconds = undefined;
            this._periodTriggers = undefined;
            this._profiles = undefined;
            this._programInformation.internalValue = undefined;
            this._scteDash.internalValue = undefined;
            this._segmentTemplateFormat = undefined;
            this._subtitleConfiguration.internalValue = undefined;
            this._suggestedPresentationDelaySeconds = undefined;
            this._uriPathType = undefined;
            this._utcTiming.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._audioTimelinePattern = value.audioTimelinePattern;
            this._availabilityStartTimeConfiguration.internalValue = value.availabilityStartTimeConfiguration;
            this._baseUrls.internalValue = value.baseUrls;
            this._compactness = value.compactness;
            this._drmSignaling = value.drmSignaling;
            this._dvbSettings.internalValue = value.dvbSettings;
            this._filterConfiguration.internalValue = value.filterConfiguration;
            this._manifestName = value.manifestName;
            this._manifestWindowSeconds = value.manifestWindowSeconds;
            this._minBufferTimeSeconds = value.minBufferTimeSeconds;
            this._minUpdatePeriodSeconds = value.minUpdatePeriodSeconds;
            this._periodTriggers = value.periodTriggers;
            this._profiles = value.profiles;
            this._programInformation.internalValue = value.programInformation;
            this._scteDash.internalValue = value.scteDash;
            this._segmentTemplateFormat = value.segmentTemplateFormat;
            this._subtitleConfiguration.internalValue = value.subtitleConfiguration;
            this._suggestedPresentationDelaySeconds = value.suggestedPresentationDelaySeconds;
            this._uriPathType = value.uriPathType;
            this._utcTiming.internalValue = value.utcTiming;
        }
    }

    // audio_timeline_pattern - computed: true, optional: true, required: false
    private _audioTimelinePattern?: string; 
    public get audioTimelinePattern() {
        return this.getStringAttribute('audio_timeline_pattern');
    }
    public set audioTimelinePattern(value: string) {
        this._audioTimelinePattern = value;
    }
    public resetAudioTimelinePattern() {
        this._audioTimelinePattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioTimelinePatternInput() {
        return this._audioTimelinePattern;
    }

    // availability_start_time_configuration - computed: true, optional: true, required: false
    private _availabilityStartTimeConfiguration = new DashAvailabilityStartTimeConfigurationPropertyOutputReference(this, "availability_start_time_configuration");
    public get availabilityStartTimeConfiguration() {
        return this._availabilityStartTimeConfiguration;
    }
    public putAvailabilityStartTimeConfiguration(value: DashAvailabilityStartTimeConfigurationProperty) {
        this._availabilityStartTimeConfiguration.internalValue = value;
    }
    public resetAvailabilityStartTimeConfiguration() {
        this._availabilityStartTimeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityStartTimeConfigurationInput() {
        return this._availabilityStartTimeConfiguration.internalValue;
    }

    // base_urls - computed: true, optional: true, required: false
    private _baseUrls = new DashBaseUrlPropertyList(this, "base_urls", false);
    public get baseUrls() {
        return this._baseUrls;
    }
    public putBaseUrls(value: DashBaseUrlProperty[] | cdktn.IResolvable) {
        this._baseUrls.internalValue = value;
    }
    public resetBaseUrls() {
        this._baseUrls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseUrlsInput() {
        return this._baseUrls.internalValue;
    }

    // compactness - computed: true, optional: true, required: false
    private _compactness?: string; 
    public get compactness() {
        return this.getStringAttribute('compactness');
    }
    public set compactness(value: string) {
        this._compactness = value;
    }
    public resetCompactness() {
        this._compactness = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compactnessInput() {
        return this._compactness;
    }

    // drm_signaling - computed: true, optional: true, required: false
    private _drmSignaling?: string; 
    public get drmSignaling() {
        return this.getStringAttribute('drm_signaling');
    }
    public set drmSignaling(value: string) {
        this._drmSignaling = value;
    }
    public resetDrmSignaling() {
        this._drmSignaling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drmSignalingInput() {
        return this._drmSignaling;
    }

    // dvb_settings - computed: true, optional: true, required: false
    private _dvbSettings = new DashDvbSettingsPropertyOutputReference(this, "dvb_settings");
    public get dvbSettings() {
        return this._dvbSettings;
    }
    public putDvbSettings(value: DashDvbSettingsProperty) {
        this._dvbSettings.internalValue = value;
    }
    public resetDvbSettings() {
        this._dvbSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dvbSettingsInput() {
        return this._dvbSettings.internalValue;
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new FilterConfigurationPropertyOutputReference(this, "filter_configuration");
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: FilterConfigurationProperty) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
    }

    // manifest_name - computed: true, optional: true, required: false
    private _manifestName?: string; 
    public get manifestName() {
        return this.getStringAttribute('manifest_name');
    }
    public set manifestName(value: string) {
        this._manifestName = value;
    }
    public resetManifestName() {
        this._manifestName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestNameInput() {
        return this._manifestName;
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

    // period_triggers - computed: true, optional: true, required: false
    private _periodTriggers?: string[]; 
    public get periodTriggers() {
        return this.getListAttribute('period_triggers');
    }
    public set periodTriggers(value: string[]) {
        this._periodTriggers = value;
    }
    public resetPeriodTriggers() {
        this._periodTriggers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodTriggersInput() {
        return this._periodTriggers;
    }

    // profiles - computed: true, optional: true, required: false
    private _profiles?: string[]; 
    public get profiles() {
        return this.getListAttribute('profiles');
    }
    public set profiles(value: string[]) {
        this._profiles = value;
    }
    public resetProfiles() {
        this._profiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profilesInput() {
        return this._profiles;
    }

    // program_information - computed: true, optional: true, required: false
    private _programInformation = new DashProgramInformationPropertyOutputReference(this, "program_information");
    public get programInformation() {
        return this._programInformation;
    }
    public putProgramInformation(value: DashProgramInformationProperty) {
        this._programInformation.internalValue = value;
    }
    public resetProgramInformation() {
        this._programInformation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get programInformationInput() {
        return this._programInformation.internalValue;
    }

    // scte_dash - computed: true, optional: true, required: false
    private _scteDash = new ScteDashPropertyOutputReference(this, "scte_dash");
    public get scteDash() {
        return this._scteDash;
    }
    public putScteDash(value: ScteDashProperty) {
        this._scteDash.internalValue = value;
    }
    public resetScteDash() {
        this._scteDash.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scteDashInput() {
        return this._scteDash.internalValue;
    }

    // segment_template_format - computed: true, optional: true, required: false
    private _segmentTemplateFormat?: string; 
    public get segmentTemplateFormat() {
        return this.getStringAttribute('segment_template_format');
    }
    public set segmentTemplateFormat(value: string) {
        this._segmentTemplateFormat = value;
    }
    public resetSegmentTemplateFormat() {
        this._segmentTemplateFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentTemplateFormatInput() {
        return this._segmentTemplateFormat;
    }

    // subtitle_configuration - computed: true, optional: true, required: false
    private _subtitleConfiguration = new DashSubtitleConfigurationPropertyOutputReference(this, "subtitle_configuration");
    public get subtitleConfiguration() {
        return this._subtitleConfiguration;
    }
    public putSubtitleConfiguration(value: DashSubtitleConfigurationProperty) {
        this._subtitleConfiguration.internalValue = value;
    }
    public resetSubtitleConfiguration() {
        this._subtitleConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subtitleConfigurationInput() {
        return this._subtitleConfiguration.internalValue;
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

    // uri_path_type - computed: true, optional: true, required: false
    private _uriPathType?: string; 
    public get uriPathType() {
        return this.getStringAttribute('uri_path_type');
    }
    public set uriPathType(value: string) {
        this._uriPathType = value;
    }
    public resetUriPathType() {
        this._uriPathType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriPathTypeInput() {
        return this._uriPathType;
    }

    // utc_timing - computed: true, optional: true, required: false
    private _utcTiming = new DashUtcTimingPropertyOutputReference(this, "utc_timing");
    public get utcTiming() {
        return this._utcTiming;
    }
    public putUtcTiming(value: DashUtcTimingProperty) {
        this._utcTiming.internalValue = value;
    }
    public resetUtcTiming() {
        this._utcTiming.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get utcTimingInput() {
        return this._utcTiming.internalValue;
    }
}

export class DashManifestConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : DashManifestConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): DashManifestConfigurationPropertyOutputReference {
        return new DashManifestConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ForceEndpointErrorConfigurationProperty {
    /**
    * <p>The failover conditions for the endpoint. The options are:</p> <ul> <li> <p> <code>STALE_MANIFEST</code> - The manifest stalled and there are no new segments or parts.</p> </li> <li> <p> <code>INCOMPLETE_MANIFEST</code> - There is a gap in the manifest.</p> </li> <li> <p> <code>MISSING_DRM_KEY</code> - Key rotation is enabled but we're unable to fetch the key for the current key period.</p> </li> <li> <p> <code>SLATE_INPUT</code> - The segments which contain slate content are considered to be missing content.</p> </li> </ul>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#endpoint_error_conditions CcOriginEndpoint#endpoint_error_conditions}
    */
    readonly endpointErrorConditions?: string[];
}
export class ForceEndpointErrorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ForceEndpointErrorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointErrorConditions !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointErrorConditions = this._endpointErrorConditions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ForceEndpointErrorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointErrorConditions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointErrorConditions = value.endpointErrorConditions;
        }
    }

    // endpoint_error_conditions - computed: true, optional: true, required: false
    private _endpointErrorConditions?: string[]; 
    public get endpointErrorConditions() {
        return this.getListAttribute('endpoint_error_conditions');
    }
    public set endpointErrorConditions(value: string[]) {
        this._endpointErrorConditions = value;
    }
    public resetEndpointErrorConditions() {
        this._endpointErrorConditions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointErrorConditionsInput() {
        return this._endpointErrorConditions;
    }
}
export interface HlsManifestsFilterConfigurationProperty {
    /**
    * <p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time CcOriginEndpoint#clip_start_time}
    */
    readonly clipStartTime?: string;
    /**
    * <p>Optionally specify one or more DRM settings for all of your manifest egress requests. When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings CcOriginEndpoint#drm_settings}
    */
    readonly drmSettings?: string;
    /**
    * <p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#end CcOriginEndpoint#end}
    */
    readonly end?: string;
    /**
    * <p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter CcOriginEndpoint#manifest_filter}
    */
    readonly manifestFilter?: string;
    /**
    * <p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#start CcOriginEndpoint#start}
    */
    readonly start?: string;
    /**
    * <p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds CcOriginEndpoint#time_delay_seconds}
    */
    readonly timeDelaySeconds?: number;
}
export class HlsManifestsFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HlsManifestsFilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clipStartTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.clipStartTime = this._clipStartTime;
        }
        if (this._drmSettings !== undefined) {
            hasAnyValues = true;
            internalValueResult.drmSettings = this._drmSettings;
        }
        if (this._end !== undefined) {
            hasAnyValues = true;
            internalValueResult.end = this._end;
        }
        if (this._manifestFilter !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestFilter = this._manifestFilter;
        }
        if (this._start !== undefined) {
            hasAnyValues = true;
            internalValueResult.start = this._start;
        }
        if (this._timeDelaySeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeDelaySeconds = this._timeDelaySeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HlsManifestsFilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clipStartTime = undefined;
            this._drmSettings = undefined;
            this._end = undefined;
            this._manifestFilter = undefined;
            this._start = undefined;
            this._timeDelaySeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clipStartTime = value.clipStartTime;
            this._drmSettings = value.drmSettings;
            this._end = value.end;
            this._manifestFilter = value.manifestFilter;
            this._start = value.start;
            this._timeDelaySeconds = value.timeDelaySeconds;
        }
    }

    // clip_start_time - computed: true, optional: true, required: false
    private _clipStartTime?: string; 
    public get clipStartTime() {
        return this.getStringAttribute('clip_start_time');
    }
    public set clipStartTime(value: string) {
        this._clipStartTime = value;
    }
    public resetClipStartTime() {
        this._clipStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clipStartTimeInput() {
        return this._clipStartTime;
    }

    // drm_settings - computed: true, optional: true, required: false
    private _drmSettings?: string; 
    public get drmSettings() {
        return this.getStringAttribute('drm_settings');
    }
    public set drmSettings(value: string) {
        this._drmSettings = value;
    }
    public resetDrmSettings() {
        this._drmSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drmSettingsInput() {
        return this._drmSettings;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
        this._end = value;
    }
    public resetEnd() {
        this._end = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInput() {
        return this._end;
    }

    // manifest_filter - computed: true, optional: true, required: false
    private _manifestFilter?: string; 
    public get manifestFilter() {
        return this.getStringAttribute('manifest_filter');
    }
    public set manifestFilter(value: string) {
        this._manifestFilter = value;
    }
    public resetManifestFilter() {
        this._manifestFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestFilterInput() {
        return this._manifestFilter;
    }

    // start - computed: true, optional: true, required: false
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
        this._start = value;
    }
    public resetStart() {
        this._start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInput() {
        return this._start;
    }

    // time_delay_seconds - computed: true, optional: true, required: false
    private _timeDelaySeconds?: number; 
    public get timeDelaySeconds() {
        return this.getNumberAttribute('time_delay_seconds');
    }
    public set timeDelaySeconds(value: number) {
        this._timeDelaySeconds = value;
    }
    public resetTimeDelaySeconds() {
        this._timeDelaySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeDelaySecondsInput() {
        return this._timeDelaySeconds;
    }
}
export interface ScteHlsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_hls CcOriginEndpoint#ad_marker_hls}
    */
    readonly adMarkerHls?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests CcOriginEndpoint#scte_in_manifests}
    */
    readonly scteInManifests?: string;
}
export class ScteHlsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScteHlsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._adMarkerHls !== undefined) {
            hasAnyValues = true;
            internalValueResult.adMarkerHls = this._adMarkerHls;
        }
        if (this._scteInManifests !== undefined) {
            hasAnyValues = true;
            internalValueResult.scteInManifests = this._scteInManifests;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScteHlsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._adMarkerHls = undefined;
            this._scteInManifests = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._adMarkerHls = value.adMarkerHls;
            this._scteInManifests = value.scteInManifests;
        }
    }

    // ad_marker_hls - computed: true, optional: true, required: false
    private _adMarkerHls?: string; 
    public get adMarkerHls() {
        return this.getStringAttribute('ad_marker_hls');
    }
    public set adMarkerHls(value: string) {
        this._adMarkerHls = value;
    }
    public resetAdMarkerHls() {
        this._adMarkerHls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adMarkerHlsInput() {
        return this._adMarkerHls;
    }

    // scte_in_manifests - computed: true, optional: true, required: false
    private _scteInManifests?: string; 
    public get scteInManifests() {
        return this.getStringAttribute('scte_in_manifests');
    }
    public set scteInManifests(value: string) {
        this._scteInManifests = value;
    }
    public resetScteInManifests() {
        this._scteInManifests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scteInManifestsInput() {
        return this._scteInManifests;
    }
}
export interface StartTagProperty {
    /**
    * <p>Specify the value for PRECISE within your EXT-X-START tag. Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#precise CcOriginEndpoint#precise}
    */
    readonly precise?: boolean | cdktn.IResolvable;
    /**
    * <p>Specify the value for TIME-OFFSET within your EXT-X-START tag. Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#time_offset CcOriginEndpoint#time_offset}
    */
    readonly timeOffset?: number;
}
export class StartTagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StartTagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._precise !== undefined) {
            hasAnyValues = true;
            internalValueResult.precise = this._precise;
        }
        if (this._timeOffset !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeOffset = this._timeOffset;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StartTagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._precise = undefined;
            this._timeOffset = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._precise = value.precise;
            this._timeOffset = value.timeOffset;
        }
    }

    // precise - computed: true, optional: true, required: false
    private _precise?: boolean | cdktn.IResolvable; 
    public get precise() {
        return this.getBooleanAttribute('precise');
    }
    public set precise(value: boolean | cdktn.IResolvable) {
        this._precise = value;
    }
    public resetPrecise() {
        this._precise = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preciseInput() {
        return this._precise;
    }

    // time_offset - computed: true, optional: true, required: false
    private _timeOffset?: number; 
    public get timeOffset() {
        return this.getNumberAttribute('time_offset');
    }
    public set timeOffset(value: number) {
        this._timeOffset = value;
    }
    public resetTimeOffset() {
        this._timeOffset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeOffsetInput() {
        return this._timeOffset;
    }
}
export interface HlsManifestConfigurationProperty {
    /**
    * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#child_manifest_name CcOriginEndpoint#child_manifest_name}
    */
    readonly childManifestName?: string;
    /**
    * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration CcOriginEndpoint#filter_configuration}
    */
    readonly filterConfiguration?: HlsManifestsFilterConfigurationProperty;
    /**
    * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name CcOriginEndpoint#manifest_name}
    */
    readonly manifestName?: string;
    /**
    * <p>The total duration (in seconds) of the manifest's content.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds CcOriginEndpoint#manifest_window_seconds}
    */
    readonly manifestWindowSeconds?: number;
    /**
    * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#program_date_time_interval_seconds CcOriginEndpoint#program_date_time_interval_seconds}
    */
    readonly programDateTimeIntervalSeconds?: number;
    /**
    * <p>The SCTE configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#scte_hls CcOriginEndpoint#scte_hls}
    */
    readonly scteHls?: ScteHlsProperty;
    /**
    * <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#start_tag CcOriginEndpoint#start_tag}
    */
    readonly startTag?: StartTagProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type CcOriginEndpoint#uri_path_type}
    */
    readonly uriPathType?: string;
    /**
    * <p>The egress domain URL for stream delivery from MediaPackage.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#url CcOriginEndpoint#url}
    */
    readonly url?: string;
    /**
    * <p>When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#url_encode_child_manifest CcOriginEndpoint#url_encode_child_manifest}
    */
    readonly urlEncodeChildManifest?: boolean | cdktn.IResolvable;
}
export class HlsManifestConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HlsManifestConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._childManifestName !== undefined) {
            hasAnyValues = true;
            internalValueResult.childManifestName = this._childManifestName;
        }
        if (this._filterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
        }
        if (this._manifestName !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestName = this._manifestName;
        }
        if (this._manifestWindowSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestWindowSeconds = this._manifestWindowSeconds;
        }
        if (this._programDateTimeIntervalSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.programDateTimeIntervalSeconds = this._programDateTimeIntervalSeconds;
        }
        if (this._scteHls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scteHls = this._scteHls?.internalValue;
        }
        if (this._startTag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTag = this._startTag?.internalValue;
        }
        if (this._uriPathType !== undefined) {
            hasAnyValues = true;
            internalValueResult.uriPathType = this._uriPathType;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        if (this._urlEncodeChildManifest !== undefined) {
            hasAnyValues = true;
            internalValueResult.urlEncodeChildManifest = this._urlEncodeChildManifest;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HlsManifestConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._childManifestName = undefined;
            this._filterConfiguration.internalValue = undefined;
            this._manifestName = undefined;
            this._manifestWindowSeconds = undefined;
            this._programDateTimeIntervalSeconds = undefined;
            this._scteHls.internalValue = undefined;
            this._startTag.internalValue = undefined;
            this._uriPathType = undefined;
            this._url = undefined;
            this._urlEncodeChildManifest = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._childManifestName = value.childManifestName;
            this._filterConfiguration.internalValue = value.filterConfiguration;
            this._manifestName = value.manifestName;
            this._manifestWindowSeconds = value.manifestWindowSeconds;
            this._programDateTimeIntervalSeconds = value.programDateTimeIntervalSeconds;
            this._scteHls.internalValue = value.scteHls;
            this._startTag.internalValue = value.startTag;
            this._uriPathType = value.uriPathType;
            this._url = value.url;
            this._urlEncodeChildManifest = value.urlEncodeChildManifest;
        }
    }

    // child_manifest_name - computed: true, optional: true, required: false
    private _childManifestName?: string; 
    public get childManifestName() {
        return this.getStringAttribute('child_manifest_name');
    }
    public set childManifestName(value: string) {
        this._childManifestName = value;
    }
    public resetChildManifestName() {
        this._childManifestName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get childManifestNameInput() {
        return this._childManifestName;
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new HlsManifestsFilterConfigurationPropertyOutputReference(this, "filter_configuration");
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: HlsManifestsFilterConfigurationProperty) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
    }

    // manifest_name - computed: true, optional: true, required: false
    private _manifestName?: string; 
    public get manifestName() {
        return this.getStringAttribute('manifest_name');
    }
    public set manifestName(value: string) {
        this._manifestName = value;
    }
    public resetManifestName() {
        this._manifestName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestNameInput() {
        return this._manifestName;
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

    // program_date_time_interval_seconds - computed: true, optional: true, required: false
    private _programDateTimeIntervalSeconds?: number; 
    public get programDateTimeIntervalSeconds() {
        return this.getNumberAttribute('program_date_time_interval_seconds');
    }
    public set programDateTimeIntervalSeconds(value: number) {
        this._programDateTimeIntervalSeconds = value;
    }
    public resetProgramDateTimeIntervalSeconds() {
        this._programDateTimeIntervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get programDateTimeIntervalSecondsInput() {
        return this._programDateTimeIntervalSeconds;
    }

    // scte_hls - computed: true, optional: true, required: false
    private _scteHls = new ScteHlsPropertyOutputReference(this, "scte_hls");
    public get scteHls() {
        return this._scteHls;
    }
    public putScteHls(value: ScteHlsProperty) {
        this._scteHls.internalValue = value;
    }
    public resetScteHls() {
        this._scteHls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scteHlsInput() {
        return this._scteHls.internalValue;
    }

    // start_tag - computed: true, optional: true, required: false
    private _startTag = new StartTagPropertyOutputReference(this, "start_tag");
    public get startTag() {
        return this._startTag;
    }
    public putStartTag(value: StartTagProperty) {
        this._startTag.internalValue = value;
    }
    public resetStartTag() {
        this._startTag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTagInput() {
        return this._startTag.internalValue;
    }

    // uri_path_type - computed: true, optional: true, required: false
    private _uriPathType?: string; 
    public get uriPathType() {
        return this.getStringAttribute('uri_path_type');
    }
    public set uriPathType(value: string) {
        this._uriPathType = value;
    }
    public resetUriPathType() {
        this._uriPathType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriPathTypeInput() {
        return this._uriPathType;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }

    // url_encode_child_manifest - computed: true, optional: true, required: false
    private _urlEncodeChildManifest?: boolean | cdktn.IResolvable; 
    public get urlEncodeChildManifest() {
        return this.getBooleanAttribute('url_encode_child_manifest');
    }
    public set urlEncodeChildManifest(value: boolean | cdktn.IResolvable) {
        this._urlEncodeChildManifest = value;
    }
    public resetUrlEncodeChildManifest() {
        this._urlEncodeChildManifest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlEncodeChildManifestInput() {
        return this._urlEncodeChildManifest;
    }
}

export class HlsManifestConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : HlsManifestConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): HlsManifestConfigurationPropertyOutputReference {
        return new HlsManifestConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LowLatencyHlsManifestsFilterConfigurationProperty {
    /**
    * <p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time CcOriginEndpoint#clip_start_time}
    */
    readonly clipStartTime?: string;
    /**
    * <p>Optionally specify one or more DRM settings for all of your manifest egress requests. When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings CcOriginEndpoint#drm_settings}
    */
    readonly drmSettings?: string;
    /**
    * <p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#end CcOriginEndpoint#end}
    */
    readonly end?: string;
    /**
    * <p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter CcOriginEndpoint#manifest_filter}
    */
    readonly manifestFilter?: string;
    /**
    * <p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#start CcOriginEndpoint#start}
    */
    readonly start?: string;
    /**
    * <p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds CcOriginEndpoint#time_delay_seconds}
    */
    readonly timeDelaySeconds?: number;
}
export class LowLatencyHlsManifestsFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LowLatencyHlsManifestsFilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clipStartTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.clipStartTime = this._clipStartTime;
        }
        if (this._drmSettings !== undefined) {
            hasAnyValues = true;
            internalValueResult.drmSettings = this._drmSettings;
        }
        if (this._end !== undefined) {
            hasAnyValues = true;
            internalValueResult.end = this._end;
        }
        if (this._manifestFilter !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestFilter = this._manifestFilter;
        }
        if (this._start !== undefined) {
            hasAnyValues = true;
            internalValueResult.start = this._start;
        }
        if (this._timeDelaySeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeDelaySeconds = this._timeDelaySeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LowLatencyHlsManifestsFilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clipStartTime = undefined;
            this._drmSettings = undefined;
            this._end = undefined;
            this._manifestFilter = undefined;
            this._start = undefined;
            this._timeDelaySeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clipStartTime = value.clipStartTime;
            this._drmSettings = value.drmSettings;
            this._end = value.end;
            this._manifestFilter = value.manifestFilter;
            this._start = value.start;
            this._timeDelaySeconds = value.timeDelaySeconds;
        }
    }

    // clip_start_time - computed: true, optional: true, required: false
    private _clipStartTime?: string; 
    public get clipStartTime() {
        return this.getStringAttribute('clip_start_time');
    }
    public set clipStartTime(value: string) {
        this._clipStartTime = value;
    }
    public resetClipStartTime() {
        this._clipStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clipStartTimeInput() {
        return this._clipStartTime;
    }

    // drm_settings - computed: true, optional: true, required: false
    private _drmSettings?: string; 
    public get drmSettings() {
        return this.getStringAttribute('drm_settings');
    }
    public set drmSettings(value: string) {
        this._drmSettings = value;
    }
    public resetDrmSettings() {
        this._drmSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drmSettingsInput() {
        return this._drmSettings;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
        this._end = value;
    }
    public resetEnd() {
        this._end = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInput() {
        return this._end;
    }

    // manifest_filter - computed: true, optional: true, required: false
    private _manifestFilter?: string; 
    public get manifestFilter() {
        return this.getStringAttribute('manifest_filter');
    }
    public set manifestFilter(value: string) {
        this._manifestFilter = value;
    }
    public resetManifestFilter() {
        this._manifestFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestFilterInput() {
        return this._manifestFilter;
    }

    // start - computed: true, optional: true, required: false
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
        this._start = value;
    }
    public resetStart() {
        this._start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInput() {
        return this._start;
    }

    // time_delay_seconds - computed: true, optional: true, required: false
    private _timeDelaySeconds?: number; 
    public get timeDelaySeconds() {
        return this.getNumberAttribute('time_delay_seconds');
    }
    public set timeDelaySeconds(value: number) {
        this._timeDelaySeconds = value;
    }
    public resetTimeDelaySeconds() {
        this._timeDelaySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeDelaySecondsInput() {
        return this._timeDelaySeconds;
    }
}
export interface LowLatencyHlsManifestsScteHlsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_hls CcOriginEndpoint#ad_marker_hls}
    */
    readonly adMarkerHls?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests CcOriginEndpoint#scte_in_manifests}
    */
    readonly scteInManifests?: string;
}
export class LowLatencyHlsManifestsScteHlsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LowLatencyHlsManifestsScteHlsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._adMarkerHls !== undefined) {
            hasAnyValues = true;
            internalValueResult.adMarkerHls = this._adMarkerHls;
        }
        if (this._scteInManifests !== undefined) {
            hasAnyValues = true;
            internalValueResult.scteInManifests = this._scteInManifests;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LowLatencyHlsManifestsScteHlsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._adMarkerHls = undefined;
            this._scteInManifests = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._adMarkerHls = value.adMarkerHls;
            this._scteInManifests = value.scteInManifests;
        }
    }

    // ad_marker_hls - computed: true, optional: true, required: false
    private _adMarkerHls?: string; 
    public get adMarkerHls() {
        return this.getStringAttribute('ad_marker_hls');
    }
    public set adMarkerHls(value: string) {
        this._adMarkerHls = value;
    }
    public resetAdMarkerHls() {
        this._adMarkerHls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adMarkerHlsInput() {
        return this._adMarkerHls;
    }

    // scte_in_manifests - computed: true, optional: true, required: false
    private _scteInManifests?: string; 
    public get scteInManifests() {
        return this.getStringAttribute('scte_in_manifests');
    }
    public set scteInManifests(value: string) {
        this._scteInManifests = value;
    }
    public resetScteInManifests() {
        this._scteInManifests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scteInManifestsInput() {
        return this._scteInManifests;
    }
}
export interface LowLatencyHlsManifestsStartTagProperty {
    /**
    * <p>Specify the value for PRECISE within your EXT-X-START tag. Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#precise CcOriginEndpoint#precise}
    */
    readonly precise?: boolean | cdktn.IResolvable;
    /**
    * <p>Specify the value for TIME-OFFSET within your EXT-X-START tag. Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#time_offset CcOriginEndpoint#time_offset}
    */
    readonly timeOffset?: number;
}
export class LowLatencyHlsManifestsStartTagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LowLatencyHlsManifestsStartTagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._precise !== undefined) {
            hasAnyValues = true;
            internalValueResult.precise = this._precise;
        }
        if (this._timeOffset !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeOffset = this._timeOffset;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LowLatencyHlsManifestsStartTagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._precise = undefined;
            this._timeOffset = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._precise = value.precise;
            this._timeOffset = value.timeOffset;
        }
    }

    // precise - computed: true, optional: true, required: false
    private _precise?: boolean | cdktn.IResolvable; 
    public get precise() {
        return this.getBooleanAttribute('precise');
    }
    public set precise(value: boolean | cdktn.IResolvable) {
        this._precise = value;
    }
    public resetPrecise() {
        this._precise = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preciseInput() {
        return this._precise;
    }

    // time_offset - computed: true, optional: true, required: false
    private _timeOffset?: number; 
    public get timeOffset() {
        return this.getNumberAttribute('time_offset');
    }
    public set timeOffset(value: number) {
        this._timeOffset = value;
    }
    public resetTimeOffset() {
        this._timeOffset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeOffsetInput() {
        return this._timeOffset;
    }
}
export interface LowLatencyHlsManifestConfigurationProperty {
    /**
    * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#child_manifest_name CcOriginEndpoint#child_manifest_name}
    */
    readonly childManifestName?: string;
    /**
    * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration CcOriginEndpoint#filter_configuration}
    */
    readonly filterConfiguration?: LowLatencyHlsManifestsFilterConfigurationProperty;
    /**
    * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name CcOriginEndpoint#manifest_name}
    */
    readonly manifestName?: string;
    /**
    * <p>The total duration (in seconds) of the manifest's content.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds CcOriginEndpoint#manifest_window_seconds}
    */
    readonly manifestWindowSeconds?: number;
    /**
    * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#program_date_time_interval_seconds CcOriginEndpoint#program_date_time_interval_seconds}
    */
    readonly programDateTimeIntervalSeconds?: number;
    /**
    * <p>The SCTE configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#scte_hls CcOriginEndpoint#scte_hls}
    */
    readonly scteHls?: LowLatencyHlsManifestsScteHlsProperty;
    /**
    * <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#start_tag CcOriginEndpoint#start_tag}
    */
    readonly startTag?: LowLatencyHlsManifestsStartTagProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type CcOriginEndpoint#uri_path_type}
    */
    readonly uriPathType?: string;
    /**
    * <p>The egress domain URL for stream delivery from MediaPackage.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#url CcOriginEndpoint#url}
    */
    readonly url?: string;
    /**
    * <p>When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#url_encode_child_manifest CcOriginEndpoint#url_encode_child_manifest}
    */
    readonly urlEncodeChildManifest?: boolean | cdktn.IResolvable;
}
export class LowLatencyHlsManifestConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LowLatencyHlsManifestConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._childManifestName !== undefined) {
            hasAnyValues = true;
            internalValueResult.childManifestName = this._childManifestName;
        }
        if (this._filterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
        }
        if (this._manifestName !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestName = this._manifestName;
        }
        if (this._manifestWindowSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestWindowSeconds = this._manifestWindowSeconds;
        }
        if (this._programDateTimeIntervalSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.programDateTimeIntervalSeconds = this._programDateTimeIntervalSeconds;
        }
        if (this._scteHls?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scteHls = this._scteHls?.internalValue;
        }
        if (this._startTag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTag = this._startTag?.internalValue;
        }
        if (this._uriPathType !== undefined) {
            hasAnyValues = true;
            internalValueResult.uriPathType = this._uriPathType;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        if (this._urlEncodeChildManifest !== undefined) {
            hasAnyValues = true;
            internalValueResult.urlEncodeChildManifest = this._urlEncodeChildManifest;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LowLatencyHlsManifestConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._childManifestName = undefined;
            this._filterConfiguration.internalValue = undefined;
            this._manifestName = undefined;
            this._manifestWindowSeconds = undefined;
            this._programDateTimeIntervalSeconds = undefined;
            this._scteHls.internalValue = undefined;
            this._startTag.internalValue = undefined;
            this._uriPathType = undefined;
            this._url = undefined;
            this._urlEncodeChildManifest = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._childManifestName = value.childManifestName;
            this._filterConfiguration.internalValue = value.filterConfiguration;
            this._manifestName = value.manifestName;
            this._manifestWindowSeconds = value.manifestWindowSeconds;
            this._programDateTimeIntervalSeconds = value.programDateTimeIntervalSeconds;
            this._scteHls.internalValue = value.scteHls;
            this._startTag.internalValue = value.startTag;
            this._uriPathType = value.uriPathType;
            this._url = value.url;
            this._urlEncodeChildManifest = value.urlEncodeChildManifest;
        }
    }

    // child_manifest_name - computed: true, optional: true, required: false
    private _childManifestName?: string; 
    public get childManifestName() {
        return this.getStringAttribute('child_manifest_name');
    }
    public set childManifestName(value: string) {
        this._childManifestName = value;
    }
    public resetChildManifestName() {
        this._childManifestName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get childManifestNameInput() {
        return this._childManifestName;
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new LowLatencyHlsManifestsFilterConfigurationPropertyOutputReference(this, "filter_configuration");
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: LowLatencyHlsManifestsFilterConfigurationProperty) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
    }

    // manifest_name - computed: true, optional: true, required: false
    private _manifestName?: string; 
    public get manifestName() {
        return this.getStringAttribute('manifest_name');
    }
    public set manifestName(value: string) {
        this._manifestName = value;
    }
    public resetManifestName() {
        this._manifestName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestNameInput() {
        return this._manifestName;
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

    // program_date_time_interval_seconds - computed: true, optional: true, required: false
    private _programDateTimeIntervalSeconds?: number; 
    public get programDateTimeIntervalSeconds() {
        return this.getNumberAttribute('program_date_time_interval_seconds');
    }
    public set programDateTimeIntervalSeconds(value: number) {
        this._programDateTimeIntervalSeconds = value;
    }
    public resetProgramDateTimeIntervalSeconds() {
        this._programDateTimeIntervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get programDateTimeIntervalSecondsInput() {
        return this._programDateTimeIntervalSeconds;
    }

    // scte_hls - computed: true, optional: true, required: false
    private _scteHls = new LowLatencyHlsManifestsScteHlsPropertyOutputReference(this, "scte_hls");
    public get scteHls() {
        return this._scteHls;
    }
    public putScteHls(value: LowLatencyHlsManifestsScteHlsProperty) {
        this._scteHls.internalValue = value;
    }
    public resetScteHls() {
        this._scteHls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scteHlsInput() {
        return this._scteHls.internalValue;
    }

    // start_tag - computed: true, optional: true, required: false
    private _startTag = new LowLatencyHlsManifestsStartTagPropertyOutputReference(this, "start_tag");
    public get startTag() {
        return this._startTag;
    }
    public putStartTag(value: LowLatencyHlsManifestsStartTagProperty) {
        this._startTag.internalValue = value;
    }
    public resetStartTag() {
        this._startTag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTagInput() {
        return this._startTag.internalValue;
    }

    // uri_path_type - computed: true, optional: true, required: false
    private _uriPathType?: string; 
    public get uriPathType() {
        return this.getStringAttribute('uri_path_type');
    }
    public set uriPathType(value: string) {
        this._uriPathType = value;
    }
    public resetUriPathType() {
        this._uriPathType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriPathTypeInput() {
        return this._uriPathType;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }

    // url_encode_child_manifest - computed: true, optional: true, required: false
    private _urlEncodeChildManifest?: boolean | cdktn.IResolvable; 
    public get urlEncodeChildManifest() {
        return this.getBooleanAttribute('url_encode_child_manifest');
    }
    public set urlEncodeChildManifest(value: boolean | cdktn.IResolvable) {
        this._urlEncodeChildManifest = value;
    }
    public resetUrlEncodeChildManifest() {
        this._urlEncodeChildManifest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlEncodeChildManifestInput() {
        return this._urlEncodeChildManifest;
    }
}

export class LowLatencyHlsManifestConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : LowLatencyHlsManifestConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): LowLatencyHlsManifestConfigurationPropertyOutputReference {
        return new LowLatencyHlsManifestConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MssManifestsFilterConfigurationProperty {
    /**
    * <p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time CcOriginEndpoint#clip_start_time}
    */
    readonly clipStartTime?: string;
    /**
    * <p>Optionally specify one or more DRM settings for all of your manifest egress requests. When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings CcOriginEndpoint#drm_settings}
    */
    readonly drmSettings?: string;
    /**
    * <p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#end CcOriginEndpoint#end}
    */
    readonly end?: string;
    /**
    * <p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter CcOriginEndpoint#manifest_filter}
    */
    readonly manifestFilter?: string;
    /**
    * <p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#start CcOriginEndpoint#start}
    */
    readonly start?: string;
    /**
    * <p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds CcOriginEndpoint#time_delay_seconds}
    */
    readonly timeDelaySeconds?: number;
}
export class MssManifestsFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MssManifestsFilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clipStartTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.clipStartTime = this._clipStartTime;
        }
        if (this._drmSettings !== undefined) {
            hasAnyValues = true;
            internalValueResult.drmSettings = this._drmSettings;
        }
        if (this._end !== undefined) {
            hasAnyValues = true;
            internalValueResult.end = this._end;
        }
        if (this._manifestFilter !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestFilter = this._manifestFilter;
        }
        if (this._start !== undefined) {
            hasAnyValues = true;
            internalValueResult.start = this._start;
        }
        if (this._timeDelaySeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeDelaySeconds = this._timeDelaySeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MssManifestsFilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clipStartTime = undefined;
            this._drmSettings = undefined;
            this._end = undefined;
            this._manifestFilter = undefined;
            this._start = undefined;
            this._timeDelaySeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clipStartTime = value.clipStartTime;
            this._drmSettings = value.drmSettings;
            this._end = value.end;
            this._manifestFilter = value.manifestFilter;
            this._start = value.start;
            this._timeDelaySeconds = value.timeDelaySeconds;
        }
    }

    // clip_start_time - computed: true, optional: true, required: false
    private _clipStartTime?: string; 
    public get clipStartTime() {
        return this.getStringAttribute('clip_start_time');
    }
    public set clipStartTime(value: string) {
        this._clipStartTime = value;
    }
    public resetClipStartTime() {
        this._clipStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clipStartTimeInput() {
        return this._clipStartTime;
    }

    // drm_settings - computed: true, optional: true, required: false
    private _drmSettings?: string; 
    public get drmSettings() {
        return this.getStringAttribute('drm_settings');
    }
    public set drmSettings(value: string) {
        this._drmSettings = value;
    }
    public resetDrmSettings() {
        this._drmSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drmSettingsInput() {
        return this._drmSettings;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
        this._end = value;
    }
    public resetEnd() {
        this._end = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInput() {
        return this._end;
    }

    // manifest_filter - computed: true, optional: true, required: false
    private _manifestFilter?: string; 
    public get manifestFilter() {
        return this.getStringAttribute('manifest_filter');
    }
    public set manifestFilter(value: string) {
        this._manifestFilter = value;
    }
    public resetManifestFilter() {
        this._manifestFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestFilterInput() {
        return this._manifestFilter;
    }

    // start - computed: true, optional: true, required: false
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
        this._start = value;
    }
    public resetStart() {
        this._start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInput() {
        return this._start;
    }

    // time_delay_seconds - computed: true, optional: true, required: false
    private _timeDelaySeconds?: number; 
    public get timeDelaySeconds() {
        return this.getNumberAttribute('time_delay_seconds');
    }
    public set timeDelaySeconds(value: number) {
        this._timeDelaySeconds = value;
    }
    public resetTimeDelaySeconds() {
        this._timeDelaySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeDelaySecondsInput() {
        return this._timeDelaySeconds;
    }
}
export interface MssManifestConfigurationProperty {
    /**
    * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration CcOriginEndpoint#filter_configuration}
    */
    readonly filterConfiguration?: MssManifestsFilterConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_layout CcOriginEndpoint#manifest_layout}
    */
    readonly manifestLayout?: string;
    /**
    * <p>The name of the MSS manifest. This name is appended to the origin endpoint URL to create the unique path for accessing this specific MSS manifest.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name CcOriginEndpoint#manifest_name}
    */
    readonly manifestName?: string;
    /**
    * <p>The duration (in seconds) of the manifest window. This represents the total amount of content available in the manifest at any given time.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds CcOriginEndpoint#manifest_window_seconds}
    */
    readonly manifestWindowSeconds?: number;
}
export class MssManifestConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MssManifestConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filterConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
        }
        if (this._manifestLayout !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestLayout = this._manifestLayout;
        }
        if (this._manifestName !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestName = this._manifestName;
        }
        if (this._manifestWindowSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestWindowSeconds = this._manifestWindowSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MssManifestConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = undefined;
            this._manifestLayout = undefined;
            this._manifestName = undefined;
            this._manifestWindowSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filterConfiguration.internalValue = value.filterConfiguration;
            this._manifestLayout = value.manifestLayout;
            this._manifestName = value.manifestName;
            this._manifestWindowSeconds = value.manifestWindowSeconds;
        }
    }

    // filter_configuration - computed: true, optional: true, required: false
    private _filterConfiguration = new MssManifestsFilterConfigurationPropertyOutputReference(this, "filter_configuration");
    public get filterConfiguration() {
        return this._filterConfiguration;
    }
    public putFilterConfiguration(value: MssManifestsFilterConfigurationProperty) {
        this._filterConfiguration.internalValue = value;
    }
    public resetFilterConfiguration() {
        this._filterConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterConfigurationInput() {
        return this._filterConfiguration.internalValue;
    }

    // manifest_layout - computed: true, optional: true, required: false
    private _manifestLayout?: string; 
    public get manifestLayout() {
        return this.getStringAttribute('manifest_layout');
    }
    public set manifestLayout(value: string) {
        this._manifestLayout = value;
    }
    public resetManifestLayout() {
        this._manifestLayout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestLayoutInput() {
        return this._manifestLayout;
    }

    // manifest_name - computed: true, optional: true, required: false
    private _manifestName?: string; 
    public get manifestName() {
        return this.getStringAttribute('manifest_name');
    }
    public set manifestName(value: string) {
        this._manifestName = value;
    }
    public resetManifestName() {
        this._manifestName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestNameInput() {
        return this._manifestName;
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

export class MssManifestConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : MssManifestConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): MssManifestConfigurationPropertyOutputReference {
        return new MssManifestConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EncryptionMethodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#cmaf_encryption_method CcOriginEndpoint#cmaf_encryption_method}
    */
    readonly cmafEncryptionMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#ism_encryption_method CcOriginEndpoint#ism_encryption_method}
    */
    readonly ismEncryptionMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#ts_encryption_method CcOriginEndpoint#ts_encryption_method}
    */
    readonly tsEncryptionMethod?: string;
}
export class EncryptionMethodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionMethodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cmafEncryptionMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.cmafEncryptionMethod = this._cmafEncryptionMethod;
        }
        if (this._ismEncryptionMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.ismEncryptionMethod = this._ismEncryptionMethod;
        }
        if (this._tsEncryptionMethod !== undefined) {
            hasAnyValues = true;
            internalValueResult.tsEncryptionMethod = this._tsEncryptionMethod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionMethodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cmafEncryptionMethod = undefined;
            this._ismEncryptionMethod = undefined;
            this._tsEncryptionMethod = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cmafEncryptionMethod = value.cmafEncryptionMethod;
            this._ismEncryptionMethod = value.ismEncryptionMethod;
            this._tsEncryptionMethod = value.tsEncryptionMethod;
        }
    }

    // cmaf_encryption_method - computed: true, optional: true, required: false
    private _cmafEncryptionMethod?: string; 
    public get cmafEncryptionMethod() {
        return this.getStringAttribute('cmaf_encryption_method');
    }
    public set cmafEncryptionMethod(value: string) {
        this._cmafEncryptionMethod = value;
    }
    public resetCmafEncryptionMethod() {
        this._cmafEncryptionMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cmafEncryptionMethodInput() {
        return this._cmafEncryptionMethod;
    }

    // ism_encryption_method - computed: true, optional: true, required: false
    private _ismEncryptionMethod?: string; 
    public get ismEncryptionMethod() {
        return this.getStringAttribute('ism_encryption_method');
    }
    public set ismEncryptionMethod(value: string) {
        this._ismEncryptionMethod = value;
    }
    public resetIsmEncryptionMethod() {
        this._ismEncryptionMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ismEncryptionMethodInput() {
        return this._ismEncryptionMethod;
    }

    // ts_encryption_method - computed: true, optional: true, required: false
    private _tsEncryptionMethod?: string; 
    public get tsEncryptionMethod() {
        return this.getStringAttribute('ts_encryption_method');
    }
    public set tsEncryptionMethod(value: string) {
        this._tsEncryptionMethod = value;
    }
    public resetTsEncryptionMethod() {
        this._tsEncryptionMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tsEncryptionMethodInput() {
        return this._tsEncryptionMethod;
    }
}
export interface EncryptionContractConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#preset_speke_20_audio CcOriginEndpoint#preset_speke_20_audio}
    */
    readonly presetSpeke20Audio?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#preset_speke_20_video CcOriginEndpoint#preset_speke_20_video}
    */
    readonly presetSpeke20Video?: string;
}
export class EncryptionContractConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionContractConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._presetSpeke20Audio !== undefined) {
            hasAnyValues = true;
            internalValueResult.presetSpeke20Audio = this._presetSpeke20Audio;
        }
        if (this._presetSpeke20Video !== undefined) {
            hasAnyValues = true;
            internalValueResult.presetSpeke20Video = this._presetSpeke20Video;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionContractConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._presetSpeke20Audio = undefined;
            this._presetSpeke20Video = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._presetSpeke20Audio = value.presetSpeke20Audio;
            this._presetSpeke20Video = value.presetSpeke20Video;
        }
    }

    // preset_speke_20_audio - computed: true, optional: true, required: false
    private _presetSpeke20Audio?: string; 
    public get presetSpeke20Audio() {
        return this.getStringAttribute('preset_speke_20_audio');
    }
    public set presetSpeke20Audio(value: string) {
        this._presetSpeke20Audio = value;
    }
    public resetPresetSpeke20Audio() {
        this._presetSpeke20Audio = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get presetSpeke20AudioInput() {
        return this._presetSpeke20Audio;
    }

    // preset_speke_20_video - computed: true, optional: true, required: false
    private _presetSpeke20Video?: string; 
    public get presetSpeke20Video() {
        return this.getStringAttribute('preset_speke_20_video');
    }
    public set presetSpeke20Video(value: string) {
        this._presetSpeke20Video = value;
    }
    public resetPresetSpeke20Video() {
        this._presetSpeke20Video = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get presetSpeke20VideoInput() {
        return this._presetSpeke20Video;
    }
}
export interface SpekeKeyProviderProperty {
    /**
    * <p>The ARN for the certificate that you imported to Amazon Web Services Certificate Manager to add content key encryption to this endpoint. For this feature to work, your DRM key provider must support content key encryption.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#certificate_arn CcOriginEndpoint#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * <p>The DRM solution provider you're using to protect your content during distribution.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#drm_systems CcOriginEndpoint#drm_systems}
    */
    readonly drmSystems?: string[];
    /**
    * <p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#encryption_contract_configuration CcOriginEndpoint#encryption_contract_configuration}
    */
    readonly encryptionContractConfiguration?: EncryptionContractConfigurationProperty;
    /**
    * <p>The unique identifier for the content. The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.</p> <p>The following example shows a resource ID: <code>MovieNight20171126093045</code> </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#resource_id CcOriginEndpoint#resource_id}
    */
    readonly resourceId?: string;
    /**
    * <p>The ARN for the IAM role granted by the key provider that provides access to the key provider API. This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.</p> <p>Valid format: <code>arn:aws:iam::{accountID}:role/{name}</code>. The following example shows a role ARN: <code>arn:aws:iam::444455556666:role/SpekeAccess</code> </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#role_arn CcOriginEndpoint#role_arn}
    */
    readonly roleArn?: string;
    /**
    * <p>The URL of the API Gateway proxy that you set up to talk to your key server. The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.</p> <p>The following example shows a URL: <code>https://1wm2dx1f33.execute-api.us-west-2.amazonaws.com/SpekeSample/copyProtection</code> </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#url CcOriginEndpoint#url}
    */
    readonly url?: string;
}
export class SpekeKeyProviderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpekeKeyProviderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateArn = this._certificateArn;
        }
        if (this._drmSystems !== undefined) {
            hasAnyValues = true;
            internalValueResult.drmSystems = this._drmSystems;
        }
        if (this._encryptionContractConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionContractConfiguration = this._encryptionContractConfiguration?.internalValue;
        }
        if (this._resourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpekeKeyProviderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateArn = undefined;
            this._drmSystems = undefined;
            this._encryptionContractConfiguration.internalValue = undefined;
            this._resourceId = undefined;
            this._roleArn = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateArn = value.certificateArn;
            this._drmSystems = value.drmSystems;
            this._encryptionContractConfiguration.internalValue = value.encryptionContractConfiguration;
            this._resourceId = value.resourceId;
            this._roleArn = value.roleArn;
            this._url = value.url;
        }
    }

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
    }

    // drm_systems - computed: true, optional: true, required: false
    private _drmSystems?: string[]; 
    public get drmSystems() {
        return this.getListAttribute('drm_systems');
    }
    public set drmSystems(value: string[]) {
        this._drmSystems = value;
    }
    public resetDrmSystems() {
        this._drmSystems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get drmSystemsInput() {
        return this._drmSystems;
    }

    // encryption_contract_configuration - computed: true, optional: true, required: false
    private _encryptionContractConfiguration = new EncryptionContractConfigurationPropertyOutputReference(this, "encryption_contract_configuration");
    public get encryptionContractConfiguration() {
        return this._encryptionContractConfiguration;
    }
    public putEncryptionContractConfiguration(value: EncryptionContractConfigurationProperty) {
        this._encryptionContractConfiguration.internalValue = value;
    }
    public resetEncryptionContractConfiguration() {
        this._encryptionContractConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionContractConfigurationInput() {
        return this._encryptionContractConfiguration.internalValue;
    }

    // resource_id - computed: true, optional: true, required: false
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    public resetResourceId() {
        this._resourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}
export interface EncryptionProperty {
    /**
    * <p>Excludes SEIG and SGPD boxes from segment metadata in CMAF containers.</p> <p>When set to <code>true</code>, MediaPackage omits these DRM metadata boxes from CMAF segments, which can improve compatibility with certain devices and players that don't support these boxes.</p> <p>Important considerations:</p> <ul> <li> <p>This setting only affects CMAF container formats</p> </li> <li> <p>Key rotation can still be handled through media playlist signaling</p> </li> <li> <p>PSSH and TENC boxes remain unaffected</p> </li> <li> <p>Default behavior is preserved when this setting is disabled</p> </li> </ul> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default: <code>false</code> </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#cmaf_exclude_segment_drm_metadata CcOriginEndpoint#cmaf_exclude_segment_drm_metadata}
    */
    readonly cmafExcludeSegmentDrmMetadata?: boolean | cdktn.IResolvable;
    /**
    * <p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#constant_initialization_vector CcOriginEndpoint#constant_initialization_vector}
    */
    readonly constantInitializationVector?: string;
    /**
    * <p>The encryption type.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#encryption_method CcOriginEndpoint#encryption_method}
    */
    readonly encryptionMethod?: EncryptionMethodProperty;
    /**
    * <p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.</p> <p>The following example setting causes the service to rotate keys every thirty minutes: <code>1800</code> </p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#key_rotation_interval_seconds CcOriginEndpoint#key_rotation_interval_seconds}
    */
    readonly keyRotationIntervalSeconds?: number;
    /**
    * <p>The parameters for the SPEKE key provider.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#speke_key_provider CcOriginEndpoint#speke_key_provider}
    */
    readonly spekeKeyProvider?: SpekeKeyProviderProperty;
}
export class EncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cmafExcludeSegmentDrmMetadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.cmafExcludeSegmentDrmMetadata = this._cmafExcludeSegmentDrmMetadata;
        }
        if (this._constantInitializationVector !== undefined) {
            hasAnyValues = true;
            internalValueResult.constantInitializationVector = this._constantInitializationVector;
        }
        if (this._encryptionMethod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionMethod = this._encryptionMethod?.internalValue;
        }
        if (this._keyRotationIntervalSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyRotationIntervalSeconds = this._keyRotationIntervalSeconds;
        }
        if (this._spekeKeyProvider?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spekeKeyProvider = this._spekeKeyProvider?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cmafExcludeSegmentDrmMetadata = undefined;
            this._constantInitializationVector = undefined;
            this._encryptionMethod.internalValue = undefined;
            this._keyRotationIntervalSeconds = undefined;
            this._spekeKeyProvider.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cmafExcludeSegmentDrmMetadata = value.cmafExcludeSegmentDrmMetadata;
            this._constantInitializationVector = value.constantInitializationVector;
            this._encryptionMethod.internalValue = value.encryptionMethod;
            this._keyRotationIntervalSeconds = value.keyRotationIntervalSeconds;
            this._spekeKeyProvider.internalValue = value.spekeKeyProvider;
        }
    }

    // cmaf_exclude_segment_drm_metadata - computed: true, optional: true, required: false
    private _cmafExcludeSegmentDrmMetadata?: boolean | cdktn.IResolvable; 
    public get cmafExcludeSegmentDrmMetadata() {
        return this.getBooleanAttribute('cmaf_exclude_segment_drm_metadata');
    }
    public set cmafExcludeSegmentDrmMetadata(value: boolean | cdktn.IResolvable) {
        this._cmafExcludeSegmentDrmMetadata = value;
    }
    public resetCmafExcludeSegmentDrmMetadata() {
        this._cmafExcludeSegmentDrmMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cmafExcludeSegmentDrmMetadataInput() {
        return this._cmafExcludeSegmentDrmMetadata;
    }

    // constant_initialization_vector - computed: true, optional: true, required: false
    private _constantInitializationVector?: string; 
    public get constantInitializationVector() {
        return this.getStringAttribute('constant_initialization_vector');
    }
    public set constantInitializationVector(value: string) {
        this._constantInitializationVector = value;
    }
    public resetConstantInitializationVector() {
        this._constantInitializationVector = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constantInitializationVectorInput() {
        return this._constantInitializationVector;
    }

    // encryption_method - computed: true, optional: true, required: false
    private _encryptionMethod = new EncryptionMethodPropertyOutputReference(this, "encryption_method");
    public get encryptionMethod() {
        return this._encryptionMethod;
    }
    public putEncryptionMethod(value: EncryptionMethodProperty) {
        this._encryptionMethod.internalValue = value;
    }
    public resetEncryptionMethod() {
        this._encryptionMethod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionMethodInput() {
        return this._encryptionMethod.internalValue;
    }

    // key_rotation_interval_seconds - computed: true, optional: true, required: false
    private _keyRotationIntervalSeconds?: number; 
    public get keyRotationIntervalSeconds() {
        return this.getNumberAttribute('key_rotation_interval_seconds');
    }
    public set keyRotationIntervalSeconds(value: number) {
        this._keyRotationIntervalSeconds = value;
    }
    public resetKeyRotationIntervalSeconds() {
        this._keyRotationIntervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyRotationIntervalSecondsInput() {
        return this._keyRotationIntervalSeconds;
    }

    // speke_key_provider - computed: true, optional: true, required: false
    private _spekeKeyProvider = new SpekeKeyProviderPropertyOutputReference(this, "speke_key_provider");
    public get spekeKeyProvider() {
        return this._spekeKeyProvider;
    }
    public putSpekeKeyProvider(value: SpekeKeyProviderProperty) {
        this._spekeKeyProvider.internalValue = value;
    }
    public resetSpekeKeyProvider() {
        this._spekeKeyProvider.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spekeKeyProviderInput() {
        return this._spekeKeyProvider.internalValue;
    }
}
export interface ScteProperty {
    /**
    * <p>A list of additional non-Ad SCTE-35 event types to treat as advertisements. When configured, events matching these types produce ad markers (such as <code>SCTE35-OUT</code> and <code>SCTE35-IN</code> in HLS DATERANGE tags) in manifests.</p> <p>Valid values: <code>PROGRAM</code> | <code>CHAPTER</code> | <code>UNSCHEDULED_EVENT</code> | <code>ALTERNATE_CONTENT_OPPORTUNITY</code> | <code>NETWORK</code> </p> <p>If you don't specify any values, the default is empty (only default ad types are used).</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#custom_ad_types CcOriginEndpoint#custom_ad_types}
    */
    readonly customAdTypes?: string[];
    /**
    * <p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#scte_filter CcOriginEndpoint#scte_filter}
    */
    readonly scteFilter?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_segments CcOriginEndpoint#scte_in_segments}
    */
    readonly scteInSegments?: string;
}
export class SctePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customAdTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAdTypes = this._customAdTypes;
        }
        if (this._scteFilter !== undefined) {
            hasAnyValues = true;
            internalValueResult.scteFilter = this._scteFilter;
        }
        if (this._scteInSegments !== undefined) {
            hasAnyValues = true;
            internalValueResult.scteInSegments = this._scteInSegments;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customAdTypes = undefined;
            this._scteFilter = undefined;
            this._scteInSegments = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customAdTypes = value.customAdTypes;
            this._scteFilter = value.scteFilter;
            this._scteInSegments = value.scteInSegments;
        }
    }

    // custom_ad_types - computed: true, optional: true, required: false
    private _customAdTypes?: string[]; 
    public get customAdTypes() {
        return this.getListAttribute('custom_ad_types');
    }
    public set customAdTypes(value: string[]) {
        this._customAdTypes = value;
    }
    public resetCustomAdTypes() {
        this._customAdTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAdTypesInput() {
        return this._customAdTypes;
    }

    // scte_filter - computed: true, optional: true, required: false
    private _scteFilter?: string[]; 
    public get scteFilter() {
        return this.getListAttribute('scte_filter');
    }
    public set scteFilter(value: string[]) {
        this._scteFilter = value;
    }
    public resetScteFilter() {
        this._scteFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scteFilterInput() {
        return this._scteFilter;
    }

    // scte_in_segments - computed: true, optional: true, required: false
    private _scteInSegments?: string; 
    public get scteInSegments() {
        return this.getStringAttribute('scte_in_segments');
    }
    public set scteInSegments(value: string) {
        this._scteInSegments = value;
    }
    public resetScteInSegments() {
        this._scteInSegments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scteInSegmentsInput() {
        return this._scteInSegments;
    }
}
export interface SegmentProperty {
    /**
    * <p>The parameters for encrypting content.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#encryption CcOriginEndpoint#encryption}
    */
    readonly encryption?: EncryptionProperty;
    /**
    * <p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included. MediaPackage generates an I-frame only stream from the first rendition in the manifest. The service inserts EXT-I-FRAMES-ONLY tags in the output manifest, and then generates and includes an I-frames only playlist in the stream. This playlist permits player functionality like fast forward and rewind.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#include_iframe_only_streams CcOriginEndpoint#include_iframe_only_streams}
    */
    readonly includeIframeOnlyStreams?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#output_timestamp_mode CcOriginEndpoint#output_timestamp_mode}
    */
    readonly outputTimestampMode?: string;
    /**
    * <p>The SCTE configuration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#scte CcOriginEndpoint#scte}
    */
    readonly scte?: ScteProperty;
    /**
    * <p>The duration (in seconds) of each segment. Enter a value equal to, or a multiple of, the input segment duration. If the value that you enter is different from the input segment duration, MediaPackage rounds segments to the nearest multiple of the input segment duration.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#segment_duration_seconds CcOriginEndpoint#segment_duration_seconds}
    */
    readonly segmentDurationSeconds?: number;
    /**
    * <p>The name that describes the segment. The name is the base name of the segment used in all content manifests inside of the endpoint. You can't use spaces in the name.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#segment_name CcOriginEndpoint#segment_name}
    */
    readonly segmentName?: string;
    /**
    * <p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output. When selected, MediaPackage passes through DVB subtitles into the output.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#ts_include_dvb_subtitles CcOriginEndpoint#ts_include_dvb_subtitles}
    */
    readonly tsIncludeDvbSubtitles?: boolean | cdktn.IResolvable;
    /**
    * <p>When selected, MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#ts_use_audio_rendition_group CcOriginEndpoint#ts_use_audio_rendition_group}
    */
    readonly tsUseAudioRenditionGroup?: boolean | cdktn.IResolvable;
}
export class SegmentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryption = this._encryption?.internalValue;
        }
        if (this._includeIframeOnlyStreams !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeIframeOnlyStreams = this._includeIframeOnlyStreams;
        }
        if (this._outputTimestampMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputTimestampMode = this._outputTimestampMode;
        }
        if (this._scte?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scte = this._scte?.internalValue;
        }
        if (this._segmentDurationSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentDurationSeconds = this._segmentDurationSeconds;
        }
        if (this._segmentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentName = this._segmentName;
        }
        if (this._tsIncludeDvbSubtitles !== undefined) {
            hasAnyValues = true;
            internalValueResult.tsIncludeDvbSubtitles = this._tsIncludeDvbSubtitles;
        }
        if (this._tsUseAudioRenditionGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.tsUseAudioRenditionGroup = this._tsUseAudioRenditionGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SegmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryption.internalValue = undefined;
            this._includeIframeOnlyStreams = undefined;
            this._outputTimestampMode = undefined;
            this._scte.internalValue = undefined;
            this._segmentDurationSeconds = undefined;
            this._segmentName = undefined;
            this._tsIncludeDvbSubtitles = undefined;
            this._tsUseAudioRenditionGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryption.internalValue = value.encryption;
            this._includeIframeOnlyStreams = value.includeIframeOnlyStreams;
            this._outputTimestampMode = value.outputTimestampMode;
            this._scte.internalValue = value.scte;
            this._segmentDurationSeconds = value.segmentDurationSeconds;
            this._segmentName = value.segmentName;
            this._tsIncludeDvbSubtitles = value.tsIncludeDvbSubtitles;
            this._tsUseAudioRenditionGroup = value.tsUseAudioRenditionGroup;
        }
    }

    // encryption - computed: true, optional: true, required: false
    private _encryption = new EncryptionPropertyOutputReference(this, "encryption");
    public get encryption() {
        return this._encryption;
    }
    public putEncryption(value: EncryptionProperty) {
        this._encryption.internalValue = value;
    }
    public resetEncryption() {
        this._encryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInput() {
        return this._encryption.internalValue;
    }

    // include_iframe_only_streams - computed: true, optional: true, required: false
    private _includeIframeOnlyStreams?: boolean | cdktn.IResolvable; 
    public get includeIframeOnlyStreams() {
        return this.getBooleanAttribute('include_iframe_only_streams');
    }
    public set includeIframeOnlyStreams(value: boolean | cdktn.IResolvable) {
        this._includeIframeOnlyStreams = value;
    }
    public resetIncludeIframeOnlyStreams() {
        this._includeIframeOnlyStreams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeIframeOnlyStreamsInput() {
        return this._includeIframeOnlyStreams;
    }

    // output_timestamp_mode - computed: true, optional: true, required: false
    private _outputTimestampMode?: string; 
    public get outputTimestampMode() {
        return this.getStringAttribute('output_timestamp_mode');
    }
    public set outputTimestampMode(value: string) {
        this._outputTimestampMode = value;
    }
    public resetOutputTimestampMode() {
        this._outputTimestampMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputTimestampModeInput() {
        return this._outputTimestampMode;
    }

    // scte - computed: true, optional: true, required: false
    private _scte = new SctePropertyOutputReference(this, "scte");
    public get scte() {
        return this._scte;
    }
    public putScte(value: ScteProperty) {
        this._scte.internalValue = value;
    }
    public resetScte() {
        this._scte.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scteInput() {
        return this._scte.internalValue;
    }

    // segment_duration_seconds - computed: true, optional: true, required: false
    private _segmentDurationSeconds?: number; 
    public get segmentDurationSeconds() {
        return this.getNumberAttribute('segment_duration_seconds');
    }
    public set segmentDurationSeconds(value: number) {
        this._segmentDurationSeconds = value;
    }
    public resetSegmentDurationSeconds() {
        this._segmentDurationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentDurationSecondsInput() {
        return this._segmentDurationSeconds;
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

    // ts_include_dvb_subtitles - computed: true, optional: true, required: false
    private _tsIncludeDvbSubtitles?: boolean | cdktn.IResolvable; 
    public get tsIncludeDvbSubtitles() {
        return this.getBooleanAttribute('ts_include_dvb_subtitles');
    }
    public set tsIncludeDvbSubtitles(value: boolean | cdktn.IResolvable) {
        this._tsIncludeDvbSubtitles = value;
    }
    public resetTsIncludeDvbSubtitles() {
        this._tsIncludeDvbSubtitles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tsIncludeDvbSubtitlesInput() {
        return this._tsIncludeDvbSubtitles;
    }

    // ts_use_audio_rendition_group - computed: true, optional: true, required: false
    private _tsUseAudioRenditionGroup?: boolean | cdktn.IResolvable; 
    public get tsUseAudioRenditionGroup() {
        return this.getBooleanAttribute('ts_use_audio_rendition_group');
    }
    public set tsUseAudioRenditionGroup(value: boolean | cdktn.IResolvable) {
        this._tsUseAudioRenditionGroup = value;
    }
    public resetTsUseAudioRenditionGroup() {
        this._tsUseAudioRenditionGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tsUseAudioRenditionGroupInput() {
        return this._tsUseAudioRenditionGroup;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#key CcOriginEndpoint#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackagev2_origin_endpoint#value CcOriginEndpoint#value}
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
