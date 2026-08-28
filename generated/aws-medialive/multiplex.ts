// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMultiplexProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of availability zones for the multiplex.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#availability_zones CcMultiplex#availability_zones}
    */
    readonly availabilityZones: string[];
    /**
    * A list of the multiplex output destinations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#destinations CcMultiplex#destinations}
    */
    readonly destinations?: CcMultiplex.MultiplexOutputDestinationProperty[] | cdktn.IResolvable;
    /**
    * Configuration for a multiplex event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#multiplex_settings CcMultiplex#multiplex_settings}
    */
    readonly multiplexSettings: CcMultiplex.MultiplexSettingsProperty;
    /**
    * Name of multiplex.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#name CcMultiplex#name}
    */
    readonly name: string;
    /**
    * A collection of key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#tags CcMultiplex#tags}
    */
    readonly tags?: CcMultiplex.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex awscc_medialive_multiplex}
*/
export class CcMultiplex extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_medialive_multiplex";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMultiplex resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMultiplex to import
    * @param importFromId The id of the existing CcMultiplex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMultiplex to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_multiplex", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex awscc_medialive_multiplex} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMultiplexProps
    */
    public constructor(scope: Construct, id: string, config: CcMultiplexProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_medialive_multiplex',
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
        this._availabilityZones = config.availabilityZones;
        this._destinations.internalValue = config.destinations;
        this._multiplexSettings.internalValue = config.multiplexSettings;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // availability_zones - computed: false, optional: false, required: true
    private _availabilityZones?: string[]; 
    public get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    public set availabilityZones(value: string[]) {
        this._availabilityZones = value;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZonesInput() {
        return this._availabilityZones;
    }

    // destinations - computed: true, optional: true, required: false
    private _destinations = new CcMultiplex.MultiplexOutputDestinationPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: CcMultiplex.MultiplexOutputDestinationProperty[] | cdktn.IResolvable) {
        this._destinations.internalValue = value;
    }
    public resetDestinations() {
        this._destinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
        return this._destinations.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // multiplex_id - computed: true, optional: false, required: false
    public get multiplexId() {
        return this.getStringAttribute('multiplex_id');
    }

    // multiplex_settings - computed: false, optional: false, required: true
    private _multiplexSettings = new CcMultiplex.MultiplexSettingsPropertyOutputReference(this, "multiplex_settings");
    public get multiplexSettings() {
        return this._multiplexSettings;
    }
    public putMultiplexSettings(value: CcMultiplex.MultiplexSettingsProperty) {
        this._multiplexSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get multiplexSettingsInput() {
        return this._multiplexSettings.internalValue;
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

    // pipelines_running_count - computed: true, optional: false, required: false
    public get pipelinesRunningCount() {
        return this.getNumberAttribute('pipelines_running_count');
    }

    // program_count - computed: true, optional: false, required: false
    public get programCount() {
        return this.getNumberAttribute('program_count');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMultiplex.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMultiplex.TagProperty[] | cdktn.IResolvable) {
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
            availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._availabilityZones),
            destinations: cdktn.listMapper(ccMultiplexMultiplexOutputDestinationPropertyToTerraform, false)(this._destinations.internalValue),
            multiplex_settings: ccMultiplexMultiplexSettingsPropertyToTerraform(this._multiplexSettings.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccMultiplexTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            availability_zones: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._availabilityZones),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            destinations: {
                value: cdktn.listMapperHcl(ccMultiplexMultiplexOutputDestinationPropertyToHclTerraform, false)(this._destinations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMultiplex.MultiplexOutputDestinationPropertyList",
            },
            multiplex_settings: {
                value: ccMultiplexMultiplexSettingsPropertyToHclTerraform(this._multiplexSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMultiplex.MultiplexSettingsProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMultiplexTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMultiplex.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMultiplexMultiplexMediaConnectOutputDestinationSettingsPropertyToTerraform(struct?: CcMultiplex.MultiplexMediaConnectOutputDestinationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        entitlement_arn: cdktn.stringToTerraform(struct!.entitlementArn),
    }
}


export function ccMultiplexMultiplexMediaConnectOutputDestinationSettingsPropertyToHclTerraform(struct?: CcMultiplex.MultiplexMediaConnectOutputDestinationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        entitlement_arn: {
            value: cdktn.stringToHclTerraform(struct!.entitlementArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMultiplexMultiplexOutputDestinationPropertyToTerraform(struct?: CcMultiplex.MultiplexOutputDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        multiplex_media_connect_output_destination_settings: ccMultiplexMultiplexMediaConnectOutputDestinationSettingsPropertyToTerraform(struct!.multiplexMediaConnectOutputDestinationSettings),
    }
}


export function ccMultiplexMultiplexOutputDestinationPropertyToHclTerraform(struct?: CcMultiplex.MultiplexOutputDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        multiplex_media_connect_output_destination_settings: {
            value: ccMultiplexMultiplexMediaConnectOutputDestinationSettingsPropertyToHclTerraform(struct!.multiplexMediaConnectOutputDestinationSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "MultiplexMediaConnectOutputDestinationSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMultiplexMultiplexSettingsPropertyToTerraform(struct?: CcMultiplex.MultiplexSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_video_buffer_delay_milliseconds: cdktn.numberToTerraform(struct!.maximumVideoBufferDelayMilliseconds),
        transport_stream_bitrate: cdktn.numberToTerraform(struct!.transportStreamBitrate),
        transport_stream_id: cdktn.numberToTerraform(struct!.transportStreamId),
        transport_stream_reserved_bitrate: cdktn.numberToTerraform(struct!.transportStreamReservedBitrate),
    }
}


export function ccMultiplexMultiplexSettingsPropertyToHclTerraform(struct?: CcMultiplex.MultiplexSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_video_buffer_delay_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumVideoBufferDelayMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        transport_stream_bitrate: {
            value: cdktn.numberToHclTerraform(struct!.transportStreamBitrate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        transport_stream_id: {
            value: cdktn.numberToHclTerraform(struct!.transportStreamId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        transport_stream_reserved_bitrate: {
            value: cdktn.numberToHclTerraform(struct!.transportStreamReservedBitrate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMultiplexTagPropertyToTerraform(struct?: CcMultiplex.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMultiplexTagPropertyToHclTerraform(struct?: CcMultiplex.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMultiplex {
export interface MultiplexMediaConnectOutputDestinationSettingsProperty {
    /**
    * The MediaConnect entitlement ARN available as a Flow source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#entitlement_arn CcMultiplex#entitlement_arn}
    */
    readonly entitlementArn?: string;
}
export class MultiplexMediaConnectOutputDestinationSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiplexMediaConnectOutputDestinationSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._entitlementArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.entitlementArn = this._entitlementArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiplexMediaConnectOutputDestinationSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._entitlementArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._entitlementArn = value.entitlementArn;
        }
    }

    // entitlement_arn - computed: true, optional: true, required: false
    private _entitlementArn?: string; 
    public get entitlementArn() {
        return this.getStringAttribute('entitlement_arn');
    }
    public set entitlementArn(value: string) {
        this._entitlementArn = value;
    }
    public resetEntitlementArn() {
        this._entitlementArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entitlementArnInput() {
        return this._entitlementArn;
    }
}
export interface MultiplexOutputDestinationProperty {
    /**
    * Multiplex MediaConnect output destination settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#multiplex_media_connect_output_destination_settings CcMultiplex#multiplex_media_connect_output_destination_settings}
    */
    readonly multiplexMediaConnectOutputDestinationSettings?: MultiplexMediaConnectOutputDestinationSettingsProperty;
}
export class MultiplexOutputDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MultiplexOutputDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._multiplexMediaConnectOutputDestinationSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiplexMediaConnectOutputDestinationSettings = this._multiplexMediaConnectOutputDestinationSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiplexOutputDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._multiplexMediaConnectOutputDestinationSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._multiplexMediaConnectOutputDestinationSettings.internalValue = value.multiplexMediaConnectOutputDestinationSettings;
        }
    }

    // multiplex_media_connect_output_destination_settings - computed: true, optional: true, required: false
    private _multiplexMediaConnectOutputDestinationSettings = new MultiplexMediaConnectOutputDestinationSettingsPropertyOutputReference(this, "multiplex_media_connect_output_destination_settings");
    public get multiplexMediaConnectOutputDestinationSettings() {
        return this._multiplexMediaConnectOutputDestinationSettings;
    }
    public putMultiplexMediaConnectOutputDestinationSettings(value: MultiplexMediaConnectOutputDestinationSettingsProperty) {
        this._multiplexMediaConnectOutputDestinationSettings.internalValue = value;
    }
    public resetMultiplexMediaConnectOutputDestinationSettings() {
        this._multiplexMediaConnectOutputDestinationSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiplexMediaConnectOutputDestinationSettingsInput() {
        return this._multiplexMediaConnectOutputDestinationSettings.internalValue;
    }
}

export class MultiplexOutputDestinationPropertyList extends cdktn.ComplexList {
    public internalValue? : MultiplexOutputDestinationProperty[] | cdktn.IResolvable

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
    public get(index: number): MultiplexOutputDestinationPropertyOutputReference {
        return new MultiplexOutputDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MultiplexSettingsProperty {
    /**
    * Maximum video buffer delay in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#maximum_video_buffer_delay_milliseconds CcMultiplex#maximum_video_buffer_delay_milliseconds}
    */
    readonly maximumVideoBufferDelayMilliseconds?: number;
    /**
    * Transport stream bit rate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#transport_stream_bitrate CcMultiplex#transport_stream_bitrate}
    */
    readonly transportStreamBitrate: number;
    /**
    * Transport stream ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#transport_stream_id CcMultiplex#transport_stream_id}
    */
    readonly transportStreamId: number;
    /**
    * Transport stream reserved bit rate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#transport_stream_reserved_bitrate CcMultiplex#transport_stream_reserved_bitrate}
    */
    readonly transportStreamReservedBitrate?: number;
}
export class MultiplexSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MultiplexSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumVideoBufferDelayMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumVideoBufferDelayMilliseconds = this._maximumVideoBufferDelayMilliseconds;
        }
        if (this._transportStreamBitrate !== undefined) {
            hasAnyValues = true;
            internalValueResult.transportStreamBitrate = this._transportStreamBitrate;
        }
        if (this._transportStreamId !== undefined) {
            hasAnyValues = true;
            internalValueResult.transportStreamId = this._transportStreamId;
        }
        if (this._transportStreamReservedBitrate !== undefined) {
            hasAnyValues = true;
            internalValueResult.transportStreamReservedBitrate = this._transportStreamReservedBitrate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiplexSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumVideoBufferDelayMilliseconds = undefined;
            this._transportStreamBitrate = undefined;
            this._transportStreamId = undefined;
            this._transportStreamReservedBitrate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumVideoBufferDelayMilliseconds = value.maximumVideoBufferDelayMilliseconds;
            this._transportStreamBitrate = value.transportStreamBitrate;
            this._transportStreamId = value.transportStreamId;
            this._transportStreamReservedBitrate = value.transportStreamReservedBitrate;
        }
    }

    // maximum_video_buffer_delay_milliseconds - computed: true, optional: true, required: false
    private _maximumVideoBufferDelayMilliseconds?: number; 
    public get maximumVideoBufferDelayMilliseconds() {
        return this.getNumberAttribute('maximum_video_buffer_delay_milliseconds');
    }
    public set maximumVideoBufferDelayMilliseconds(value: number) {
        this._maximumVideoBufferDelayMilliseconds = value;
    }
    public resetMaximumVideoBufferDelayMilliseconds() {
        this._maximumVideoBufferDelayMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumVideoBufferDelayMillisecondsInput() {
        return this._maximumVideoBufferDelayMilliseconds;
    }

    // transport_stream_bitrate - computed: false, optional: false, required: true
    private _transportStreamBitrate?: number; 
    public get transportStreamBitrate() {
        return this.getNumberAttribute('transport_stream_bitrate');
    }
    public set transportStreamBitrate(value: number) {
        this._transportStreamBitrate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transportStreamBitrateInput() {
        return this._transportStreamBitrate;
    }

    // transport_stream_id - computed: false, optional: false, required: true
    private _transportStreamId?: number; 
    public get transportStreamId() {
        return this.getNumberAttribute('transport_stream_id');
    }
    public set transportStreamId(value: number) {
        this._transportStreamId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transportStreamIdInput() {
        return this._transportStreamId;
    }

    // transport_stream_reserved_bitrate - computed: true, optional: true, required: false
    private _transportStreamReservedBitrate?: number; 
    public get transportStreamReservedBitrate() {
        return this.getNumberAttribute('transport_stream_reserved_bitrate');
    }
    public set transportStreamReservedBitrate(value: number) {
        this._transportStreamReservedBitrate = value;
    }
    public resetTransportStreamReservedBitrate() {
        this._transportStreamReservedBitrate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transportStreamReservedBitrateInput() {
        return this._transportStreamReservedBitrate;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#key CcMultiplex#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_multiplex#value CcMultiplex#value}
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
