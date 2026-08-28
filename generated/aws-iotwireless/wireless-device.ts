// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWirelessDeviceProps extends cdktn.TerraformMetaArguments {
    /**
    * Wireless device description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#description CcWirelessDevice#description}
    */
    readonly description?: string;
    /**
    * Wireless device destination name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#destination_name CcWirelessDevice#destination_name}
    */
    readonly destinationName: string;
    /**
    * The date and time when the most recent uplink was received.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#last_uplink_received_at CcWirelessDevice#last_uplink_received_at}
    */
    readonly lastUplinkReceivedAt?: string;
    /**
    * The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#lo_ra_wan CcWirelessDevice#lo_ra_wan}
    */
    readonly loRaWan?: CcWirelessDevice.LoRaWANDeviceProperty;
    /**
    * Wireless device name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#name CcWirelessDevice#name}
    */
    readonly name?: string;
    /**
    * FPort values for the GNSS, stream, and ClockSync functions of the positioning information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#positioning CcWirelessDevice#positioning}
    */
    readonly positioning?: string;
    /**
    * A list of key-value pairs that contain metadata for the device. Currently not supported, will not create if tags are passed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#tags CcWirelessDevice#tags}
    */
    readonly tags?: CcWirelessDevice.TagProperty[] | cdktn.IResolvable;
    /**
    * Thing arn. Passed into update to associate Thing with Wireless device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#thing_arn CcWirelessDevice#thing_arn}
    */
    readonly thingArn?: string;
    /**
    * Wireless device type, currently only Sidewalk and LoRa
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#type CcWirelessDevice#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device awscc_iotwireless_wireless_device}
*/
export class CcWirelessDevice extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotwireless_wireless_device";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWirelessDevice resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWirelessDevice to import
    * @param importFromId The id of the existing CcWirelessDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWirelessDevice to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_wireless_device", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device awscc_iotwireless_wireless_device} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWirelessDeviceProps
    */
    public constructor(scope: Construct, id: string, config: CcWirelessDeviceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotwireless_wireless_device',
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
        this._description = config.description;
        this._destinationName = config.destinationName;
        this._lastUplinkReceivedAt = config.lastUplinkReceivedAt;
        this._loRaWan.internalValue = config.loRaWan;
        this._name = config.name;
        this._positioning = config.positioning;
        this._tags.internalValue = config.tags;
        this._thingArn = config.thingArn;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // destination_name - computed: false, optional: false, required: true
    private _destinationName?: string; 
    public get destinationName() {
        return this.getStringAttribute('destination_name');
    }
    public set destinationName(value: string) {
        this._destinationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationNameInput() {
        return this._destinationName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_uplink_received_at - computed: true, optional: true, required: false
    private _lastUplinkReceivedAt?: string; 
    public get lastUplinkReceivedAt() {
        return this.getStringAttribute('last_uplink_received_at');
    }
    public set lastUplinkReceivedAt(value: string) {
        this._lastUplinkReceivedAt = value;
    }
    public resetLastUplinkReceivedAt() {
        this._lastUplinkReceivedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastUplinkReceivedAtInput() {
        return this._lastUplinkReceivedAt;
    }

    // lo_ra_wan - computed: true, optional: true, required: false
    private _loRaWan = new CcWirelessDevice.LoRaWANDevicePropertyOutputReference(this, "lo_ra_wan");
    public get loRaWan() {
        return this._loRaWan;
    }
    public putLoRaWan(value: CcWirelessDevice.LoRaWANDeviceProperty) {
        this._loRaWan.internalValue = value;
    }
    public resetLoRaWan() {
        this._loRaWan.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loRaWanInput() {
        return this._loRaWan.internalValue;
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

    // positioning - computed: true, optional: true, required: false
    private _positioning?: string; 
    public get positioning() {
        return this.getStringAttribute('positioning');
    }
    public set positioning(value: string) {
        this._positioning = value;
    }
    public resetPositioning() {
        this._positioning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get positioningInput() {
        return this._positioning;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWirelessDevice.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWirelessDevice.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // thing_arn - computed: true, optional: true, required: false
    private _thingArn?: string; 
    public get thingArn() {
        return this.getStringAttribute('thing_arn');
    }
    public set thingArn(value: string) {
        this._thingArn = value;
    }
    public resetThingArn() {
        this._thingArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingArnInput() {
        return this._thingArn;
    }

    // thing_name - computed: true, optional: false, required: false
    public get thingName() {
        return this.getStringAttribute('thing_name');
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // wireless_device_id - computed: true, optional: false, required: false
    public get wirelessDeviceId() {
        return this.getStringAttribute('wireless_device_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            destination_name: cdktn.stringToTerraform(this._destinationName),
            last_uplink_received_at: cdktn.stringToTerraform(this._lastUplinkReceivedAt),
            lo_ra_wan: ccWirelessDeviceLoRaWANDevicePropertyToTerraform(this._loRaWan.internalValue),
            name: cdktn.stringToTerraform(this._name),
            positioning: cdktn.stringToTerraform(this._positioning),
            tags: cdktn.listMapper(ccWirelessDeviceTagPropertyToTerraform, false)(this._tags.internalValue),
            thing_arn: cdktn.stringToTerraform(this._thingArn),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_name: {
                value: cdktn.stringToHclTerraform(this._destinationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            last_uplink_received_at: {
                value: cdktn.stringToHclTerraform(this._lastUplinkReceivedAt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lo_ra_wan: {
                value: ccWirelessDeviceLoRaWANDevicePropertyToHclTerraform(this._loRaWan.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWirelessDevice.LoRaWANDeviceProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            positioning: {
                value: cdktn.stringToHclTerraform(this._positioning),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWirelessDeviceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcWirelessDevice.TagPropertyList",
            },
            thing_arn: {
                value: cdktn.stringToHclTerraform(this._thingArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export function ccWirelessDeviceSessionKeysAbpV10xPropertyToTerraform(struct?: CcWirelessDevice.SessionKeysAbpV10xProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_s_key: cdktn.stringToTerraform(struct!.appSKey),
        nwk_s_key: cdktn.stringToTerraform(struct!.nwkSKey),
    }
}


export function ccWirelessDeviceSessionKeysAbpV10xPropertyToHclTerraform(struct?: CcWirelessDevice.SessionKeysAbpV10xProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_s_key: {
            value: cdktn.stringToHclTerraform(struct!.appSKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nwk_s_key: {
            value: cdktn.stringToHclTerraform(struct!.nwkSKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWirelessDeviceAbpV10xPropertyToTerraform(struct?: CcWirelessDevice.AbpV10xProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dev_addr: cdktn.stringToTerraform(struct!.devAddr),
        session_keys: ccWirelessDeviceSessionKeysAbpV10xPropertyToTerraform(struct!.sessionKeys),
    }
}


export function ccWirelessDeviceAbpV10xPropertyToHclTerraform(struct?: CcWirelessDevice.AbpV10xProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dev_addr: {
            value: cdktn.stringToHclTerraform(struct!.devAddr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_keys: {
            value: ccWirelessDeviceSessionKeysAbpV10xPropertyToHclTerraform(struct!.sessionKeys),
            isBlock: true,
            type: "struct",
            storageClassType: "SessionKeysAbpV10xProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWirelessDeviceSessionKeysAbpV11PropertyToTerraform(struct?: CcWirelessDevice.SessionKeysAbpV11Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_s_key: cdktn.stringToTerraform(struct!.appSKey),
        f_nwk_s_int_key: cdktn.stringToTerraform(struct!.fNwkSIntKey),
        nwk_s_enc_key: cdktn.stringToTerraform(struct!.nwkSEncKey),
        s_nwk_s_int_key: cdktn.stringToTerraform(struct!.sNwkSIntKey),
    }
}


export function ccWirelessDeviceSessionKeysAbpV11PropertyToHclTerraform(struct?: CcWirelessDevice.SessionKeysAbpV11Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_s_key: {
            value: cdktn.stringToHclTerraform(struct!.appSKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        f_nwk_s_int_key: {
            value: cdktn.stringToHclTerraform(struct!.fNwkSIntKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nwk_s_enc_key: {
            value: cdktn.stringToHclTerraform(struct!.nwkSEncKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s_nwk_s_int_key: {
            value: cdktn.stringToHclTerraform(struct!.sNwkSIntKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWirelessDeviceAbpV11PropertyToTerraform(struct?: CcWirelessDevice.AbpV11Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dev_addr: cdktn.stringToTerraform(struct!.devAddr),
        session_keys: ccWirelessDeviceSessionKeysAbpV11PropertyToTerraform(struct!.sessionKeys),
    }
}


export function ccWirelessDeviceAbpV11PropertyToHclTerraform(struct?: CcWirelessDevice.AbpV11Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dev_addr: {
            value: cdktn.stringToHclTerraform(struct!.devAddr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        session_keys: {
            value: ccWirelessDeviceSessionKeysAbpV11PropertyToHclTerraform(struct!.sessionKeys),
            isBlock: true,
            type: "struct",
            storageClassType: "SessionKeysAbpV11Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWirelessDeviceApplicationPropertyToTerraform(struct?: CcWirelessDevice.ApplicationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_name: cdktn.stringToTerraform(struct!.destinationName),
        f_port: cdktn.numberToTerraform(struct!.fPort),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccWirelessDeviceApplicationPropertyToHclTerraform(struct?: CcWirelessDevice.ApplicationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_name: {
            value: cdktn.stringToHclTerraform(struct!.destinationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        f_port: {
            value: cdktn.numberToHclTerraform(struct!.fPort),
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


export function ccWirelessDeviceFPortsPropertyToTerraform(struct?: CcWirelessDevice.FPortsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        applications: cdktn.listMapper(ccWirelessDeviceApplicationPropertyToTerraform, false)(struct!.applications),
    }
}


export function ccWirelessDeviceFPortsPropertyToHclTerraform(struct?: CcWirelessDevice.FPortsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        applications: {
            value: cdktn.listMapperHcl(ccWirelessDeviceApplicationPropertyToHclTerraform, false)(struct!.applications),
            isBlock: true,
            type: "set",
            storageClassType: "ApplicationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWirelessDeviceOtaaV10xPropertyToTerraform(struct?: CcWirelessDevice.OtaaV10xProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_eui: cdktn.stringToTerraform(struct!.appEui),
        app_key: cdktn.stringToTerraform(struct!.appKey),
    }
}


export function ccWirelessDeviceOtaaV10xPropertyToHclTerraform(struct?: CcWirelessDevice.OtaaV10xProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_eui: {
            value: cdktn.stringToHclTerraform(struct!.appEui),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        app_key: {
            value: cdktn.stringToHclTerraform(struct!.appKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWirelessDeviceOtaaV11PropertyToTerraform(struct?: CcWirelessDevice.OtaaV11Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_key: cdktn.stringToTerraform(struct!.appKey),
        join_eui: cdktn.stringToTerraform(struct!.joinEui),
        nwk_key: cdktn.stringToTerraform(struct!.nwkKey),
    }
}


export function ccWirelessDeviceOtaaV11PropertyToHclTerraform(struct?: CcWirelessDevice.OtaaV11Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_key: {
            value: cdktn.stringToHclTerraform(struct!.appKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        join_eui: {
            value: cdktn.stringToHclTerraform(struct!.joinEui),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nwk_key: {
            value: cdktn.stringToHclTerraform(struct!.nwkKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWirelessDeviceLoRaWANDevicePropertyToTerraform(struct?: CcWirelessDevice.LoRaWANDeviceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        abp_v10_x: ccWirelessDeviceAbpV10xPropertyToTerraform(struct!.abpV10X),
        abp_v11: ccWirelessDeviceAbpV11PropertyToTerraform(struct!.abpV11),
        dev_eui: cdktn.stringToTerraform(struct!.devEui),
        device_profile_id: cdktn.stringToTerraform(struct!.deviceProfileId),
        f_ports: ccWirelessDeviceFPortsPropertyToTerraform(struct!.fPorts),
        otaa_v10_x: ccWirelessDeviceOtaaV10xPropertyToTerraform(struct!.otaaV10X),
        otaa_v11: ccWirelessDeviceOtaaV11PropertyToTerraform(struct!.otaaV11),
        service_profile_id: cdktn.stringToTerraform(struct!.serviceProfileId),
    }
}


export function ccWirelessDeviceLoRaWANDevicePropertyToHclTerraform(struct?: CcWirelessDevice.LoRaWANDeviceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        abp_v10_x: {
            value: ccWirelessDeviceAbpV10xPropertyToHclTerraform(struct!.abpV10X),
            isBlock: true,
            type: "struct",
            storageClassType: "AbpV10xProperty",
        },
        abp_v11: {
            value: ccWirelessDeviceAbpV11PropertyToHclTerraform(struct!.abpV11),
            isBlock: true,
            type: "struct",
            storageClassType: "AbpV11Property",
        },
        dev_eui: {
            value: cdktn.stringToHclTerraform(struct!.devEui),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_profile_id: {
            value: cdktn.stringToHclTerraform(struct!.deviceProfileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        f_ports: {
            value: ccWirelessDeviceFPortsPropertyToHclTerraform(struct!.fPorts),
            isBlock: true,
            type: "struct",
            storageClassType: "FPortsProperty",
        },
        otaa_v10_x: {
            value: ccWirelessDeviceOtaaV10xPropertyToHclTerraform(struct!.otaaV10X),
            isBlock: true,
            type: "struct",
            storageClassType: "OtaaV10xProperty",
        },
        otaa_v11: {
            value: ccWirelessDeviceOtaaV11PropertyToHclTerraform(struct!.otaaV11),
            isBlock: true,
            type: "struct",
            storageClassType: "OtaaV11Property",
        },
        service_profile_id: {
            value: cdktn.stringToHclTerraform(struct!.serviceProfileId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWirelessDeviceTagPropertyToTerraform(struct?: CcWirelessDevice.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWirelessDeviceTagPropertyToHclTerraform(struct?: CcWirelessDevice.TagProperty | cdktn.IResolvable): any {
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


export namespace CcWirelessDevice {
export interface SessionKeysAbpV10xProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#app_s_key CcWirelessDevice#app_s_key}
    */
    readonly appSKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#nwk_s_key CcWirelessDevice#nwk_s_key}
    */
    readonly nwkSKey?: string;
}
export class SessionKeysAbpV10xPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SessionKeysAbpV10xProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appSKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.appSKey = this._appSKey;
        }
        if (this._nwkSKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.nwkSKey = this._nwkSKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SessionKeysAbpV10xProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appSKey = undefined;
            this._nwkSKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appSKey = value.appSKey;
            this._nwkSKey = value.nwkSKey;
        }
    }

    // app_s_key - computed: true, optional: true, required: false
    private _appSKey?: string; 
    public get appSKey() {
        return this.getStringAttribute('app_s_key');
    }
    public set appSKey(value: string) {
        this._appSKey = value;
    }
    public resetAppSKey() {
        this._appSKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appSKeyInput() {
        return this._appSKey;
    }

    // nwk_s_key - computed: true, optional: true, required: false
    private _nwkSKey?: string; 
    public get nwkSKey() {
        return this.getStringAttribute('nwk_s_key');
    }
    public set nwkSKey(value: string) {
        this._nwkSKey = value;
    }
    public resetNwkSKey() {
        this._nwkSKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nwkSKeyInput() {
        return this._nwkSKey;
    }
}
export interface AbpV10xProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#dev_addr CcWirelessDevice#dev_addr}
    */
    readonly devAddr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#session_keys CcWirelessDevice#session_keys}
    */
    readonly sessionKeys?: SessionKeysAbpV10xProperty;
}
export class AbpV10xPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AbpV10xProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._devAddr !== undefined) {
            hasAnyValues = true;
            internalValueResult.devAddr = this._devAddr;
        }
        if (this._sessionKeys?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionKeys = this._sessionKeys?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AbpV10xProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._devAddr = undefined;
            this._sessionKeys.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._devAddr = value.devAddr;
            this._sessionKeys.internalValue = value.sessionKeys;
        }
    }

    // dev_addr - computed: true, optional: true, required: false
    private _devAddr?: string; 
    public get devAddr() {
        return this.getStringAttribute('dev_addr');
    }
    public set devAddr(value: string) {
        this._devAddr = value;
    }
    public resetDevAddr() {
        this._devAddr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get devAddrInput() {
        return this._devAddr;
    }

    // session_keys - computed: true, optional: true, required: false
    private _sessionKeys = new SessionKeysAbpV10xPropertyOutputReference(this, "session_keys");
    public get sessionKeys() {
        return this._sessionKeys;
    }
    public putSessionKeys(value: SessionKeysAbpV10xProperty) {
        this._sessionKeys.internalValue = value;
    }
    public resetSessionKeys() {
        this._sessionKeys.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionKeysInput() {
        return this._sessionKeys.internalValue;
    }
}
export interface SessionKeysAbpV11Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#app_s_key CcWirelessDevice#app_s_key}
    */
    readonly appSKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key CcWirelessDevice#f_nwk_s_int_key}
    */
    readonly fNwkSIntKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#nwk_s_enc_key CcWirelessDevice#nwk_s_enc_key}
    */
    readonly nwkSEncKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key CcWirelessDevice#s_nwk_s_int_key}
    */
    readonly sNwkSIntKey?: string;
}
export class SessionKeysAbpV11PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SessionKeysAbpV11Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appSKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.appSKey = this._appSKey;
        }
        if (this._fNwkSIntKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.fNwkSIntKey = this._fNwkSIntKey;
        }
        if (this._nwkSEncKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.nwkSEncKey = this._nwkSEncKey;
        }
        if (this._sNwkSIntKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.sNwkSIntKey = this._sNwkSIntKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SessionKeysAbpV11Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appSKey = undefined;
            this._fNwkSIntKey = undefined;
            this._nwkSEncKey = undefined;
            this._sNwkSIntKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appSKey = value.appSKey;
            this._fNwkSIntKey = value.fNwkSIntKey;
            this._nwkSEncKey = value.nwkSEncKey;
            this._sNwkSIntKey = value.sNwkSIntKey;
        }
    }

    // app_s_key - computed: true, optional: true, required: false
    private _appSKey?: string; 
    public get appSKey() {
        return this.getStringAttribute('app_s_key');
    }
    public set appSKey(value: string) {
        this._appSKey = value;
    }
    public resetAppSKey() {
        this._appSKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appSKeyInput() {
        return this._appSKey;
    }

    // f_nwk_s_int_key - computed: true, optional: true, required: false
    private _fNwkSIntKey?: string; 
    public get fNwkSIntKey() {
        return this.getStringAttribute('f_nwk_s_int_key');
    }
    public set fNwkSIntKey(value: string) {
        this._fNwkSIntKey = value;
    }
    public resetFNwkSIntKey() {
        this._fNwkSIntKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fNwkSIntKeyInput() {
        return this._fNwkSIntKey;
    }

    // nwk_s_enc_key - computed: true, optional: true, required: false
    private _nwkSEncKey?: string; 
    public get nwkSEncKey() {
        return this.getStringAttribute('nwk_s_enc_key');
    }
    public set nwkSEncKey(value: string) {
        this._nwkSEncKey = value;
    }
    public resetNwkSEncKey() {
        this._nwkSEncKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nwkSEncKeyInput() {
        return this._nwkSEncKey;
    }

    // s_nwk_s_int_key - computed: true, optional: true, required: false
    private _sNwkSIntKey?: string; 
    public get sNwkSIntKey() {
        return this.getStringAttribute('s_nwk_s_int_key');
    }
    public set sNwkSIntKey(value: string) {
        this._sNwkSIntKey = value;
    }
    public resetSNwkSIntKey() {
        this._sNwkSIntKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sNwkSIntKeyInput() {
        return this._sNwkSIntKey;
    }
}
export interface AbpV11Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#dev_addr CcWirelessDevice#dev_addr}
    */
    readonly devAddr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#session_keys CcWirelessDevice#session_keys}
    */
    readonly sessionKeys?: SessionKeysAbpV11Property;
}
export class AbpV11PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AbpV11Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._devAddr !== undefined) {
            hasAnyValues = true;
            internalValueResult.devAddr = this._devAddr;
        }
        if (this._sessionKeys?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionKeys = this._sessionKeys?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AbpV11Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._devAddr = undefined;
            this._sessionKeys.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._devAddr = value.devAddr;
            this._sessionKeys.internalValue = value.sessionKeys;
        }
    }

    // dev_addr - computed: true, optional: true, required: false
    private _devAddr?: string; 
    public get devAddr() {
        return this.getStringAttribute('dev_addr');
    }
    public set devAddr(value: string) {
        this._devAddr = value;
    }
    public resetDevAddr() {
        this._devAddr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get devAddrInput() {
        return this._devAddr;
    }

    // session_keys - computed: true, optional: true, required: false
    private _sessionKeys = new SessionKeysAbpV11PropertyOutputReference(this, "session_keys");
    public get sessionKeys() {
        return this._sessionKeys;
    }
    public putSessionKeys(value: SessionKeysAbpV11Property) {
        this._sessionKeys.internalValue = value;
    }
    public resetSessionKeys() {
        this._sessionKeys.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionKeysInput() {
        return this._sessionKeys.internalValue;
    }
}
export interface ApplicationProperty {
    /**
    * The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#destination_name CcWirelessDevice#destination_name}
    */
    readonly destinationName?: string;
    /**
    * The Fport value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#f_port CcWirelessDevice#f_port}
    */
    readonly fPort?: number;
    /**
    * Application type, which can be specified to obtain real-time position information of your LoRaWAN device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#type CcWirelessDevice#type}
    */
    readonly type?: string;
}
export class ApplicationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ApplicationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationName = this._destinationName;
        }
        if (this._fPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fPort = this._fPort;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationName = undefined;
            this._fPort = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationName = value.destinationName;
            this._fPort = value.fPort;
            this._type = value.type;
        }
    }

    // destination_name - computed: true, optional: true, required: false
    private _destinationName?: string; 
    public get destinationName() {
        return this.getStringAttribute('destination_name');
    }
    public set destinationName(value: string) {
        this._destinationName = value;
    }
    public resetDestinationName() {
        this._destinationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationNameInput() {
        return this._destinationName;
    }

    // f_port - computed: true, optional: true, required: false
    private _fPort?: number; 
    public get fPort() {
        return this.getNumberAttribute('f_port');
    }
    public set fPort(value: number) {
        this._fPort = value;
    }
    public resetFPort() {
        this._fPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fPortInput() {
        return this._fPort;
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

export class ApplicationPropertyList extends cdktn.ComplexList {
    public internalValue? : ApplicationProperty[] | cdktn.IResolvable

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
    public get(index: number): ApplicationPropertyOutputReference {
        return new ApplicationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FPortsProperty {
    /**
    * A list of optional LoRaWAN application information, which can be used for geolocation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#applications CcWirelessDevice#applications}
    */
    readonly applications?: ApplicationProperty[] | cdktn.IResolvable;
}
export class FPortsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FPortsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.applications = this._applications?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FPortsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applications.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applications.internalValue = value.applications;
        }
    }

    // applications - computed: true, optional: true, required: false
    private _applications = new ApplicationPropertyList(this, "applications", true);
    public get applications() {
        return this._applications;
    }
    public putApplications(value: ApplicationProperty[] | cdktn.IResolvable) {
        this._applications.internalValue = value;
    }
    public resetApplications() {
        this._applications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationsInput() {
        return this._applications.internalValue;
    }
}
export interface OtaaV10xProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#app_eui CcWirelessDevice#app_eui}
    */
    readonly appEui?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#app_key CcWirelessDevice#app_key}
    */
    readonly appKey?: string;
}
export class OtaaV10xPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OtaaV10xProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appEui !== undefined) {
            hasAnyValues = true;
            internalValueResult.appEui = this._appEui;
        }
        if (this._appKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.appKey = this._appKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OtaaV10xProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appEui = undefined;
            this._appKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appEui = value.appEui;
            this._appKey = value.appKey;
        }
    }

    // app_eui - computed: true, optional: true, required: false
    private _appEui?: string; 
    public get appEui() {
        return this.getStringAttribute('app_eui');
    }
    public set appEui(value: string) {
        this._appEui = value;
    }
    public resetAppEui() {
        this._appEui = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appEuiInput() {
        return this._appEui;
    }

    // app_key - computed: true, optional: true, required: false
    private _appKey?: string; 
    public get appKey() {
        return this.getStringAttribute('app_key');
    }
    public set appKey(value: string) {
        this._appKey = value;
    }
    public resetAppKey() {
        this._appKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appKeyInput() {
        return this._appKey;
    }
}
export interface OtaaV11Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#app_key CcWirelessDevice#app_key}
    */
    readonly appKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#join_eui CcWirelessDevice#join_eui}
    */
    readonly joinEui?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#nwk_key CcWirelessDevice#nwk_key}
    */
    readonly nwkKey?: string;
}
export class OtaaV11PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OtaaV11Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.appKey = this._appKey;
        }
        if (this._joinEui !== undefined) {
            hasAnyValues = true;
            internalValueResult.joinEui = this._joinEui;
        }
        if (this._nwkKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.nwkKey = this._nwkKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OtaaV11Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appKey = undefined;
            this._joinEui = undefined;
            this._nwkKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appKey = value.appKey;
            this._joinEui = value.joinEui;
            this._nwkKey = value.nwkKey;
        }
    }

    // app_key - computed: true, optional: true, required: false
    private _appKey?: string; 
    public get appKey() {
        return this.getStringAttribute('app_key');
    }
    public set appKey(value: string) {
        this._appKey = value;
    }
    public resetAppKey() {
        this._appKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appKeyInput() {
        return this._appKey;
    }

    // join_eui - computed: true, optional: true, required: false
    private _joinEui?: string; 
    public get joinEui() {
        return this.getStringAttribute('join_eui');
    }
    public set joinEui(value: string) {
        this._joinEui = value;
    }
    public resetJoinEui() {
        this._joinEui = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get joinEuiInput() {
        return this._joinEui;
    }

    // nwk_key - computed: true, optional: true, required: false
    private _nwkKey?: string; 
    public get nwkKey() {
        return this.getStringAttribute('nwk_key');
    }
    public set nwkKey(value: string) {
        this._nwkKey = value;
    }
    public resetNwkKey() {
        this._nwkKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nwkKeyInput() {
        return this._nwkKey;
    }
}
export interface LoRaWANDeviceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#abp_v10_x CcWirelessDevice#abp_v10_x}
    */
    readonly abpV10X?: AbpV10xProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#abp_v11 CcWirelessDevice#abp_v11}
    */
    readonly abpV11?: AbpV11Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#dev_eui CcWirelessDevice#dev_eui}
    */
    readonly devEui?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#device_profile_id CcWirelessDevice#device_profile_id}
    */
    readonly deviceProfileId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#f_ports CcWirelessDevice#f_ports}
    */
    readonly fPorts?: FPortsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#otaa_v10_x CcWirelessDevice#otaa_v10_x}
    */
    readonly otaaV10X?: OtaaV10xProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#otaa_v11 CcWirelessDevice#otaa_v11}
    */
    readonly otaaV11?: OtaaV11Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#service_profile_id CcWirelessDevice#service_profile_id}
    */
    readonly serviceProfileId?: string;
}
export class LoRaWANDevicePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoRaWANDeviceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._abpV10X?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.abpV10X = this._abpV10X?.internalValue;
        }
        if (this._abpV11?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.abpV11 = this._abpV11?.internalValue;
        }
        if (this._devEui !== undefined) {
            hasAnyValues = true;
            internalValueResult.devEui = this._devEui;
        }
        if (this._deviceProfileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceProfileId = this._deviceProfileId;
        }
        if (this._fPorts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fPorts = this._fPorts?.internalValue;
        }
        if (this._otaaV10X?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.otaaV10X = this._otaaV10X?.internalValue;
        }
        if (this._otaaV11?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.otaaV11 = this._otaaV11?.internalValue;
        }
        if (this._serviceProfileId !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceProfileId = this._serviceProfileId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoRaWANDeviceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._abpV10X.internalValue = undefined;
            this._abpV11.internalValue = undefined;
            this._devEui = undefined;
            this._deviceProfileId = undefined;
            this._fPorts.internalValue = undefined;
            this._otaaV10X.internalValue = undefined;
            this._otaaV11.internalValue = undefined;
            this._serviceProfileId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._abpV10X.internalValue = value.abpV10X;
            this._abpV11.internalValue = value.abpV11;
            this._devEui = value.devEui;
            this._deviceProfileId = value.deviceProfileId;
            this._fPorts.internalValue = value.fPorts;
            this._otaaV10X.internalValue = value.otaaV10X;
            this._otaaV11.internalValue = value.otaaV11;
            this._serviceProfileId = value.serviceProfileId;
        }
    }

    // abp_v10_x - computed: true, optional: true, required: false
    private _abpV10X = new AbpV10xPropertyOutputReference(this, "abp_v10_x");
    public get abpV10X() {
        return this._abpV10X;
    }
    public putAbpV10X(value: AbpV10xProperty) {
        this._abpV10X.internalValue = value;
    }
    public resetAbpV10X() {
        this._abpV10X.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get abpV10XInput() {
        return this._abpV10X.internalValue;
    }

    // abp_v11 - computed: true, optional: true, required: false
    private _abpV11 = new AbpV11PropertyOutputReference(this, "abp_v11");
    public get abpV11() {
        return this._abpV11;
    }
    public putAbpV11(value: AbpV11Property) {
        this._abpV11.internalValue = value;
    }
    public resetAbpV11() {
        this._abpV11.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get abpV11Input() {
        return this._abpV11.internalValue;
    }

    // dev_eui - computed: true, optional: true, required: false
    private _devEui?: string; 
    public get devEui() {
        return this.getStringAttribute('dev_eui');
    }
    public set devEui(value: string) {
        this._devEui = value;
    }
    public resetDevEui() {
        this._devEui = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get devEuiInput() {
        return this._devEui;
    }

    // device_profile_id - computed: true, optional: true, required: false
    private _deviceProfileId?: string; 
    public get deviceProfileId() {
        return this.getStringAttribute('device_profile_id');
    }
    public set deviceProfileId(value: string) {
        this._deviceProfileId = value;
    }
    public resetDeviceProfileId() {
        this._deviceProfileId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceProfileIdInput() {
        return this._deviceProfileId;
    }

    // f_ports - computed: true, optional: true, required: false
    private _fPorts = new FPortsPropertyOutputReference(this, "f_ports");
    public get fPorts() {
        return this._fPorts;
    }
    public putFPorts(value: FPortsProperty) {
        this._fPorts.internalValue = value;
    }
    public resetFPorts() {
        this._fPorts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fPortsInput() {
        return this._fPorts.internalValue;
    }

    // otaa_v10_x - computed: true, optional: true, required: false
    private _otaaV10X = new OtaaV10xPropertyOutputReference(this, "otaa_v10_x");
    public get otaaV10X() {
        return this._otaaV10X;
    }
    public putOtaaV10X(value: OtaaV10xProperty) {
        this._otaaV10X.internalValue = value;
    }
    public resetOtaaV10X() {
        this._otaaV10X.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get otaaV10XInput() {
        return this._otaaV10X.internalValue;
    }

    // otaa_v11 - computed: true, optional: true, required: false
    private _otaaV11 = new OtaaV11PropertyOutputReference(this, "otaa_v11");
    public get otaaV11() {
        return this._otaaV11;
    }
    public putOtaaV11(value: OtaaV11Property) {
        this._otaaV11.internalValue = value;
    }
    public resetOtaaV11() {
        this._otaaV11.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get otaaV11Input() {
        return this._otaaV11.internalValue;
    }

    // service_profile_id - computed: true, optional: true, required: false
    private _serviceProfileId?: string; 
    public get serviceProfileId() {
        return this.getStringAttribute('service_profile_id');
    }
    public set serviceProfileId(value: string) {
        this._serviceProfileId = value;
    }
    public resetServiceProfileId() {
        this._serviceProfileId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceProfileIdInput() {
        return this._serviceProfileId;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#key CcWirelessDevice#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device#value CcWirelessDevice#value}
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
