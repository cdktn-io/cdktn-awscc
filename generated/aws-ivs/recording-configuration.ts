// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRecordingConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Recording Destination Configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#destination_configuration CcRecordingConfiguration#destination_configuration}
    */
    readonly destinationConfiguration: CcRecordingConfiguration.DestinationConfigurationProperty;
    /**
    * Recording Configuration Name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#name CcRecordingConfiguration#name}
    */
    readonly name?: string;
    /**
    * Recording Reconnect Window Seconds. (0 means disabled)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#recording_reconnect_window_seconds CcRecordingConfiguration#recording_reconnect_window_seconds}
    */
    readonly recordingReconnectWindowSeconds?: number;
    /**
    * Rendition Configuration describes which renditions should be recorded for a stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#rendition_configuration CcRecordingConfiguration#rendition_configuration}
    */
    readonly renditionConfiguration?: CcRecordingConfiguration.RenditionConfigurationProperty;
    /**
    * A list of key-value pairs that contain metadata for the asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#tags CcRecordingConfiguration#tags}
    */
    readonly tags?: CcRecordingConfiguration.TagProperty[] | cdktn.IResolvable;
    /**
    * Recording Thumbnail Configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#thumbnail_configuration CcRecordingConfiguration#thumbnail_configuration}
    */
    readonly thumbnailConfiguration?: CcRecordingConfiguration.ThumbnailConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration awscc_ivs_recording_configuration}
*/
export class CcRecordingConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ivs_recording_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRecordingConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRecordingConfiguration to import
    * @param importFromId The id of the existing CcRecordingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRecordingConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ivs_recording_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration awscc_ivs_recording_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRecordingConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcRecordingConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ivs_recording_configuration',
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
        this._destinationConfiguration.internalValue = config.destinationConfiguration;
        this._name = config.name;
        this._recordingReconnectWindowSeconds = config.recordingReconnectWindowSeconds;
        this._renditionConfiguration.internalValue = config.renditionConfiguration;
        this._tags.internalValue = config.tags;
        this._thumbnailConfiguration.internalValue = config.thumbnailConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // destination_configuration - computed: false, optional: false, required: true
    private _destinationConfiguration = new CcRecordingConfiguration.DestinationConfigurationPropertyOutputReference(this, "destination_configuration");
    public get destinationConfiguration() {
        return this._destinationConfiguration;
    }
    public putDestinationConfiguration(value: CcRecordingConfiguration.DestinationConfigurationProperty) {
        this._destinationConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationConfigurationInput() {
        return this._destinationConfiguration.internalValue;
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

    // rendition_configuration - computed: true, optional: true, required: false
    private _renditionConfiguration = new CcRecordingConfiguration.RenditionConfigurationPropertyOutputReference(this, "rendition_configuration");
    public get renditionConfiguration() {
        return this._renditionConfiguration;
    }
    public putRenditionConfiguration(value: CcRecordingConfiguration.RenditionConfigurationProperty) {
        this._renditionConfiguration.internalValue = value;
    }
    public resetRenditionConfiguration() {
        this._renditionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renditionConfigurationInput() {
        return this._renditionConfiguration.internalValue;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRecordingConfiguration.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRecordingConfiguration.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // thumbnail_configuration - computed: true, optional: true, required: false
    private _thumbnailConfiguration = new CcRecordingConfiguration.ThumbnailConfigurationPropertyOutputReference(this, "thumbnail_configuration");
    public get thumbnailConfiguration() {
        return this._thumbnailConfiguration;
    }
    public putThumbnailConfiguration(value: CcRecordingConfiguration.ThumbnailConfigurationProperty) {
        this._thumbnailConfiguration.internalValue = value;
    }
    public resetThumbnailConfiguration() {
        this._thumbnailConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thumbnailConfigurationInput() {
        return this._thumbnailConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            destination_configuration: ccRecordingConfigurationDestinationConfigurationPropertyToTerraform(this._destinationConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            recording_reconnect_window_seconds: cdktn.numberToTerraform(this._recordingReconnectWindowSeconds),
            rendition_configuration: ccRecordingConfigurationRenditionConfigurationPropertyToTerraform(this._renditionConfiguration.internalValue),
            tags: cdktn.listMapper(ccRecordingConfigurationTagPropertyToTerraform, false)(this._tags.internalValue),
            thumbnail_configuration: ccRecordingConfigurationThumbnailConfigurationPropertyToTerraform(this._thumbnailConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            destination_configuration: {
                value: ccRecordingConfigurationDestinationConfigurationPropertyToHclTerraform(this._destinationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRecordingConfiguration.DestinationConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recording_reconnect_window_seconds: {
                value: cdktn.numberToHclTerraform(this._recordingReconnectWindowSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rendition_configuration: {
                value: ccRecordingConfigurationRenditionConfigurationPropertyToHclTerraform(this._renditionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRecordingConfiguration.RenditionConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRecordingConfigurationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRecordingConfiguration.TagPropertyList",
            },
            thumbnail_configuration: {
                value: ccRecordingConfigurationThumbnailConfigurationPropertyToHclTerraform(this._thumbnailConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRecordingConfiguration.ThumbnailConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRecordingConfigurationS3DestinationConfigurationPropertyToTerraform(struct?: CcRecordingConfiguration.S3DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    }
}


export function ccRecordingConfigurationS3DestinationConfigurationPropertyToHclTerraform(struct?: CcRecordingConfiguration.S3DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRecordingConfigurationDestinationConfigurationPropertyToTerraform(struct?: CcRecordingConfiguration.DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3: ccRecordingConfigurationS3DestinationConfigurationPropertyToTerraform(struct!.s3),
    }
}


export function ccRecordingConfigurationDestinationConfigurationPropertyToHclTerraform(struct?: CcRecordingConfiguration.DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3: {
            value: ccRecordingConfigurationS3DestinationConfigurationPropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3DestinationConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRecordingConfigurationRenditionConfigurationPropertyToTerraform(struct?: CcRecordingConfiguration.RenditionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rendition_selection: cdktn.stringToTerraform(struct!.renditionSelection),
        renditions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.renditions),
    }
}


export function ccRecordingConfigurationRenditionConfigurationPropertyToHclTerraform(struct?: CcRecordingConfiguration.RenditionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rendition_selection: {
            value: cdktn.stringToHclTerraform(struct!.renditionSelection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        renditions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.renditions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRecordingConfigurationTagPropertyToTerraform(struct?: CcRecordingConfiguration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRecordingConfigurationTagPropertyToHclTerraform(struct?: CcRecordingConfiguration.TagProperty | cdktn.IResolvable): any {
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


export function ccRecordingConfigurationThumbnailConfigurationPropertyToTerraform(struct?: CcRecordingConfiguration.ThumbnailConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        recording_mode: cdktn.stringToTerraform(struct!.recordingMode),
        resolution: cdktn.stringToTerraform(struct!.resolution),
        storage: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.storage),
        target_interval_seconds: cdktn.numberToTerraform(struct!.targetIntervalSeconds),
    }
}


export function ccRecordingConfigurationThumbnailConfigurationPropertyToHclTerraform(struct?: CcRecordingConfiguration.ThumbnailConfigurationProperty | cdktn.IResolvable): any {
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
        resolution: {
            value: cdktn.stringToHclTerraform(struct!.resolution),
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


export namespace CcRecordingConfiguration {
export interface S3DestinationConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#bucket_name CcRecordingConfiguration#bucket_name}
    */
    readonly bucketName?: string;
}
export class S3DestinationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DestinationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DestinationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }
}
export interface DestinationConfigurationProperty {
    /**
    * Recording S3 Destination Configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#s3 CcRecordingConfiguration#s3}
    */
    readonly s3?: S3DestinationConfigurationProperty;
}
export class DestinationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3.internalValue = value.s3;
        }
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3DestinationConfigurationPropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3DestinationConfigurationProperty) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}
export interface RenditionConfigurationProperty {
    /**
    * Resolution Selection indicates which set of renditions are recorded for a stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#rendition_selection CcRecordingConfiguration#rendition_selection}
    */
    readonly renditionSelection?: string;
    /**
    * Renditions indicates which renditions are recorded for a stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#renditions CcRecordingConfiguration#renditions}
    */
    readonly renditions?: string[];
}
export class RenditionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RenditionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._renditionSelection !== undefined) {
            hasAnyValues = true;
            internalValueResult.renditionSelection = this._renditionSelection;
        }
        if (this._renditions !== undefined) {
            hasAnyValues = true;
            internalValueResult.renditions = this._renditions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RenditionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._renditionSelection = undefined;
            this._renditions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._renditionSelection = value.renditionSelection;
            this._renditions = value.renditions;
        }
    }

    // rendition_selection - computed: true, optional: true, required: false
    private _renditionSelection?: string; 
    public get renditionSelection() {
        return this.getStringAttribute('rendition_selection');
    }
    public set renditionSelection(value: string) {
        this._renditionSelection = value;
    }
    public resetRenditionSelection() {
        this._renditionSelection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renditionSelectionInput() {
        return this._renditionSelection;
    }

    // renditions - computed: true, optional: true, required: false
    private _renditions?: string[]; 
    public get renditions() {
        return cdktn.Fn.tolist(this.getListAttribute('renditions'));
    }
    public set renditions(value: string[]) {
        this._renditions = value;
    }
    public resetRenditions() {
        this._renditions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renditionsInput() {
        return this._renditions;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#key CcRecordingConfiguration#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#value CcRecordingConfiguration#value}
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
export interface ThumbnailConfigurationProperty {
    /**
    * Thumbnail Recording Mode, which determines whether thumbnails are recorded at an interval or are disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#recording_mode CcRecordingConfiguration#recording_mode}
    */
    readonly recordingMode?: string;
    /**
    * Resolution indicates the desired resolution of recorded thumbnails.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#resolution CcRecordingConfiguration#resolution}
    */
    readonly resolution?: string;
    /**
    * Storage indicates the format in which thumbnails are recorded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#storage CcRecordingConfiguration#storage}
    */
    readonly storage?: string[];
    /**
    * Target Interval Seconds defines the interval at which thumbnails are recorded. This field is required if RecordingMode is INTERVAL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ivs_recording_configuration#target_interval_seconds CcRecordingConfiguration#target_interval_seconds}
    */
    readonly targetIntervalSeconds?: number;
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
        if (this._recordingMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordingMode = this._recordingMode;
        }
        if (this._resolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.resolution = this._resolution;
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

    public set internalValue(value: ThumbnailConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._recordingMode = undefined;
            this._resolution = undefined;
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
            this._resolution = value.resolution;
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

    // resolution - computed: true, optional: true, required: false
    private _resolution?: string; 
    public get resolution() {
        return this.getStringAttribute('resolution');
    }
    public set resolution(value: string) {
        this._resolution = value;
    }
    public resetResolution() {
        this._resolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolutionInput() {
        return this._resolution;
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
}
