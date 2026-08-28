// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeviceProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#lo_ra_wan CcDeviceProfile#lo_ra_wan}
    */
    readonly loRaWan?: CcDeviceProfile.LoRaWANDeviceProfileProperty;
    /**
    * Name of service profile
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#name CcDeviceProfile#name}
    */
    readonly name?: string;
    /**
    * A list of key-value pairs that contain metadata for the device profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#tags CcDeviceProfile#tags}
    */
    readonly tags?: CcDeviceProfile.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile awscc_iotwireless_device_profile}
*/
export class CcDeviceProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotwireless_device_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDeviceProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDeviceProfile to import
    * @param importFromId The id of the existing CcDeviceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDeviceProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_device_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile awscc_iotwireless_device_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeviceProfileProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDeviceProfileProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotwireless_device_profile',
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
        this._loRaWan.internalValue = config.loRaWan;
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

    // device_profile_id - computed: true, optional: false, required: false
    public get deviceProfileId() {
        return this.getStringAttribute('device_profile_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // lo_ra_wan - computed: true, optional: true, required: false
    private _loRaWan = new CcDeviceProfile.LoRaWANDeviceProfilePropertyOutputReference(this, "lo_ra_wan");
    public get loRaWan() {
        return this._loRaWan;
    }
    public putLoRaWan(value: CcDeviceProfile.LoRaWANDeviceProfileProperty) {
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDeviceProfile.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDeviceProfile.TagProperty[] | cdktn.IResolvable) {
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
            lo_ra_wan: ccDeviceProfileLoRaWANDeviceProfilePropertyToTerraform(this._loRaWan.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccDeviceProfileTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            lo_ra_wan: {
                value: ccDeviceProfileLoRaWANDeviceProfilePropertyToHclTerraform(this._loRaWan.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeviceProfile.LoRaWANDeviceProfileProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDeviceProfileTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDeviceProfile.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDeviceProfileLoRaWANDeviceProfilePropertyToTerraform(struct?: CcDeviceProfile.LoRaWANDeviceProfileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        class_b_timeout: cdktn.numberToTerraform(struct!.classBTimeout),
        class_c_timeout: cdktn.numberToTerraform(struct!.classCTimeout),
        factory_preset_freqs_list: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.factoryPresetFreqsList),
        mac_version: cdktn.stringToTerraform(struct!.macVersion),
        max_duty_cycle: cdktn.numberToTerraform(struct!.maxDutyCycle),
        max_eirp: cdktn.numberToTerraform(struct!.maxEirp),
        ping_slot_dr: cdktn.numberToTerraform(struct!.pingSlotDr),
        ping_slot_freq: cdktn.numberToTerraform(struct!.pingSlotFreq),
        ping_slot_period: cdktn.numberToTerraform(struct!.pingSlotPeriod),
        reg_params_revision: cdktn.stringToTerraform(struct!.regParamsRevision),
        rf_region: cdktn.stringToTerraform(struct!.rfRegion),
        rx_data_rate_2: cdktn.numberToTerraform(struct!.rxDataRate2),
        rx_delay_1: cdktn.numberToTerraform(struct!.rxDelay1),
        rx_dr_offset_1: cdktn.numberToTerraform(struct!.rxDrOffset1),
        rx_freq_2: cdktn.numberToTerraform(struct!.rxFreq2),
        supports_32_bit_f_cnt: cdktn.booleanToTerraform(struct!.supports32BitFCnt),
        supports_class_b: cdktn.booleanToTerraform(struct!.supportsClassB),
        supports_class_c: cdktn.booleanToTerraform(struct!.supportsClassC),
        supports_join: cdktn.booleanToTerraform(struct!.supportsJoin),
    }
}


export function ccDeviceProfileLoRaWANDeviceProfilePropertyToHclTerraform(struct?: CcDeviceProfile.LoRaWANDeviceProfileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        class_b_timeout: {
            value: cdktn.numberToHclTerraform(struct!.classBTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        class_c_timeout: {
            value: cdktn.numberToHclTerraform(struct!.classCTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        factory_preset_freqs_list: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.factoryPresetFreqsList),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        mac_version: {
            value: cdktn.stringToHclTerraform(struct!.macVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_duty_cycle: {
            value: cdktn.numberToHclTerraform(struct!.maxDutyCycle),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_eirp: {
            value: cdktn.numberToHclTerraform(struct!.maxEirp),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ping_slot_dr: {
            value: cdktn.numberToHclTerraform(struct!.pingSlotDr),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ping_slot_freq: {
            value: cdktn.numberToHclTerraform(struct!.pingSlotFreq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ping_slot_period: {
            value: cdktn.numberToHclTerraform(struct!.pingSlotPeriod),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        reg_params_revision: {
            value: cdktn.stringToHclTerraform(struct!.regParamsRevision),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rf_region: {
            value: cdktn.stringToHclTerraform(struct!.rfRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rx_data_rate_2: {
            value: cdktn.numberToHclTerraform(struct!.rxDataRate2),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rx_delay_1: {
            value: cdktn.numberToHclTerraform(struct!.rxDelay1),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rx_dr_offset_1: {
            value: cdktn.numberToHclTerraform(struct!.rxDrOffset1),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rx_freq_2: {
            value: cdktn.numberToHclTerraform(struct!.rxFreq2),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        supports_32_bit_f_cnt: {
            value: cdktn.booleanToHclTerraform(struct!.supports32BitFCnt),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        supports_class_b: {
            value: cdktn.booleanToHclTerraform(struct!.supportsClassB),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        supports_class_c: {
            value: cdktn.booleanToHclTerraform(struct!.supportsClassC),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        supports_join: {
            value: cdktn.booleanToHclTerraform(struct!.supportsJoin),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeviceProfileTagPropertyToTerraform(struct?: CcDeviceProfile.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeviceProfileTagPropertyToHclTerraform(struct?: CcDeviceProfile.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDeviceProfile {
export interface LoRaWANDeviceProfileProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#class_b_timeout CcDeviceProfile#class_b_timeout}
    */
    readonly classBTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#class_c_timeout CcDeviceProfile#class_c_timeout}
    */
    readonly classCTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#factory_preset_freqs_list CcDeviceProfile#factory_preset_freqs_list}
    */
    readonly factoryPresetFreqsList?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#mac_version CcDeviceProfile#mac_version}
    */
    readonly macVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#max_duty_cycle CcDeviceProfile#max_duty_cycle}
    */
    readonly maxDutyCycle?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#max_eirp CcDeviceProfile#max_eirp}
    */
    readonly maxEirp?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#ping_slot_dr CcDeviceProfile#ping_slot_dr}
    */
    readonly pingSlotDr?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#ping_slot_freq CcDeviceProfile#ping_slot_freq}
    */
    readonly pingSlotFreq?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#ping_slot_period CcDeviceProfile#ping_slot_period}
    */
    readonly pingSlotPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#reg_params_revision CcDeviceProfile#reg_params_revision}
    */
    readonly regParamsRevision?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#rf_region CcDeviceProfile#rf_region}
    */
    readonly rfRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#rx_data_rate_2 CcDeviceProfile#rx_data_rate_2}
    */
    readonly rxDataRate2?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#rx_delay_1 CcDeviceProfile#rx_delay_1}
    */
    readonly rxDelay1?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#rx_dr_offset_1 CcDeviceProfile#rx_dr_offset_1}
    */
    readonly rxDrOffset1?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#rx_freq_2 CcDeviceProfile#rx_freq_2}
    */
    readonly rxFreq2?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#supports_32_bit_f_cnt CcDeviceProfile#supports_32_bit_f_cnt}
    */
    readonly supports32BitFCnt?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#supports_class_b CcDeviceProfile#supports_class_b}
    */
    readonly supportsClassB?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#supports_class_c CcDeviceProfile#supports_class_c}
    */
    readonly supportsClassC?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#supports_join CcDeviceProfile#supports_join}
    */
    readonly supportsJoin?: boolean | cdktn.IResolvable;
}
export class LoRaWANDeviceProfilePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoRaWANDeviceProfileProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._classBTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.classBTimeout = this._classBTimeout;
        }
        if (this._classCTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.classCTimeout = this._classCTimeout;
        }
        if (this._factoryPresetFreqsList !== undefined) {
            hasAnyValues = true;
            internalValueResult.factoryPresetFreqsList = this._factoryPresetFreqsList;
        }
        if (this._macVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.macVersion = this._macVersion;
        }
        if (this._maxDutyCycle !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxDutyCycle = this._maxDutyCycle;
        }
        if (this._maxEirp !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxEirp = this._maxEirp;
        }
        if (this._pingSlotDr !== undefined) {
            hasAnyValues = true;
            internalValueResult.pingSlotDr = this._pingSlotDr;
        }
        if (this._pingSlotFreq !== undefined) {
            hasAnyValues = true;
            internalValueResult.pingSlotFreq = this._pingSlotFreq;
        }
        if (this._pingSlotPeriod !== undefined) {
            hasAnyValues = true;
            internalValueResult.pingSlotPeriod = this._pingSlotPeriod;
        }
        if (this._regParamsRevision !== undefined) {
            hasAnyValues = true;
            internalValueResult.regParamsRevision = this._regParamsRevision;
        }
        if (this._rfRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.rfRegion = this._rfRegion;
        }
        if (this._rxDataRate2 !== undefined) {
            hasAnyValues = true;
            internalValueResult.rxDataRate2 = this._rxDataRate2;
        }
        if (this._rxDelay1 !== undefined) {
            hasAnyValues = true;
            internalValueResult.rxDelay1 = this._rxDelay1;
        }
        if (this._rxDrOffset1 !== undefined) {
            hasAnyValues = true;
            internalValueResult.rxDrOffset1 = this._rxDrOffset1;
        }
        if (this._rxFreq2 !== undefined) {
            hasAnyValues = true;
            internalValueResult.rxFreq2 = this._rxFreq2;
        }
        if (this._supports32BitFCnt !== undefined) {
            hasAnyValues = true;
            internalValueResult.supports32BitFCnt = this._supports32BitFCnt;
        }
        if (this._supportsClassB !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportsClassB = this._supportsClassB;
        }
        if (this._supportsClassC !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportsClassC = this._supportsClassC;
        }
        if (this._supportsJoin !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportsJoin = this._supportsJoin;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoRaWANDeviceProfileProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._classBTimeout = undefined;
            this._classCTimeout = undefined;
            this._factoryPresetFreqsList = undefined;
            this._macVersion = undefined;
            this._maxDutyCycle = undefined;
            this._maxEirp = undefined;
            this._pingSlotDr = undefined;
            this._pingSlotFreq = undefined;
            this._pingSlotPeriod = undefined;
            this._regParamsRevision = undefined;
            this._rfRegion = undefined;
            this._rxDataRate2 = undefined;
            this._rxDelay1 = undefined;
            this._rxDrOffset1 = undefined;
            this._rxFreq2 = undefined;
            this._supports32BitFCnt = undefined;
            this._supportsClassB = undefined;
            this._supportsClassC = undefined;
            this._supportsJoin = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._classBTimeout = value.classBTimeout;
            this._classCTimeout = value.classCTimeout;
            this._factoryPresetFreqsList = value.factoryPresetFreqsList;
            this._macVersion = value.macVersion;
            this._maxDutyCycle = value.maxDutyCycle;
            this._maxEirp = value.maxEirp;
            this._pingSlotDr = value.pingSlotDr;
            this._pingSlotFreq = value.pingSlotFreq;
            this._pingSlotPeriod = value.pingSlotPeriod;
            this._regParamsRevision = value.regParamsRevision;
            this._rfRegion = value.rfRegion;
            this._rxDataRate2 = value.rxDataRate2;
            this._rxDelay1 = value.rxDelay1;
            this._rxDrOffset1 = value.rxDrOffset1;
            this._rxFreq2 = value.rxFreq2;
            this._supports32BitFCnt = value.supports32BitFCnt;
            this._supportsClassB = value.supportsClassB;
            this._supportsClassC = value.supportsClassC;
            this._supportsJoin = value.supportsJoin;
        }
    }

    // class_b_timeout - computed: true, optional: true, required: false
    private _classBTimeout?: number; 
    public get classBTimeout() {
        return this.getNumberAttribute('class_b_timeout');
    }
    public set classBTimeout(value: number) {
        this._classBTimeout = value;
    }
    public resetClassBTimeout() {
        this._classBTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classBTimeoutInput() {
        return this._classBTimeout;
    }

    // class_c_timeout - computed: true, optional: true, required: false
    private _classCTimeout?: number; 
    public get classCTimeout() {
        return this.getNumberAttribute('class_c_timeout');
    }
    public set classCTimeout(value: number) {
        this._classCTimeout = value;
    }
    public resetClassCTimeout() {
        this._classCTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classCTimeoutInput() {
        return this._classCTimeout;
    }

    // factory_preset_freqs_list - computed: true, optional: true, required: false
    private _factoryPresetFreqsList?: number[]; 
    public get factoryPresetFreqsList() {
        return this.getNumberListAttribute('factory_preset_freqs_list');
    }
    public set factoryPresetFreqsList(value: number[]) {
        this._factoryPresetFreqsList = value;
    }
    public resetFactoryPresetFreqsList() {
        this._factoryPresetFreqsList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get factoryPresetFreqsListInput() {
        return this._factoryPresetFreqsList;
    }

    // mac_version - computed: true, optional: true, required: false
    private _macVersion?: string; 
    public get macVersion() {
        return this.getStringAttribute('mac_version');
    }
    public set macVersion(value: string) {
        this._macVersion = value;
    }
    public resetMacVersion() {
        this._macVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get macVersionInput() {
        return this._macVersion;
    }

    // max_duty_cycle - computed: true, optional: true, required: false
    private _maxDutyCycle?: number; 
    public get maxDutyCycle() {
        return this.getNumberAttribute('max_duty_cycle');
    }
    public set maxDutyCycle(value: number) {
        this._maxDutyCycle = value;
    }
    public resetMaxDutyCycle() {
        this._maxDutyCycle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxDutyCycleInput() {
        return this._maxDutyCycle;
    }

    // max_eirp - computed: true, optional: true, required: false
    private _maxEirp?: number; 
    public get maxEirp() {
        return this.getNumberAttribute('max_eirp');
    }
    public set maxEirp(value: number) {
        this._maxEirp = value;
    }
    public resetMaxEirp() {
        this._maxEirp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxEirpInput() {
        return this._maxEirp;
    }

    // ping_slot_dr - computed: true, optional: true, required: false
    private _pingSlotDr?: number; 
    public get pingSlotDr() {
        return this.getNumberAttribute('ping_slot_dr');
    }
    public set pingSlotDr(value: number) {
        this._pingSlotDr = value;
    }
    public resetPingSlotDr() {
        this._pingSlotDr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pingSlotDrInput() {
        return this._pingSlotDr;
    }

    // ping_slot_freq - computed: true, optional: true, required: false
    private _pingSlotFreq?: number; 
    public get pingSlotFreq() {
        return this.getNumberAttribute('ping_slot_freq');
    }
    public set pingSlotFreq(value: number) {
        this._pingSlotFreq = value;
    }
    public resetPingSlotFreq() {
        this._pingSlotFreq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pingSlotFreqInput() {
        return this._pingSlotFreq;
    }

    // ping_slot_period - computed: true, optional: true, required: false
    private _pingSlotPeriod?: number; 
    public get pingSlotPeriod() {
        return this.getNumberAttribute('ping_slot_period');
    }
    public set pingSlotPeriod(value: number) {
        this._pingSlotPeriod = value;
    }
    public resetPingSlotPeriod() {
        this._pingSlotPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pingSlotPeriodInput() {
        return this._pingSlotPeriod;
    }

    // reg_params_revision - computed: true, optional: true, required: false
    private _regParamsRevision?: string; 
    public get regParamsRevision() {
        return this.getStringAttribute('reg_params_revision');
    }
    public set regParamsRevision(value: string) {
        this._regParamsRevision = value;
    }
    public resetRegParamsRevision() {
        this._regParamsRevision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regParamsRevisionInput() {
        return this._regParamsRevision;
    }

    // rf_region - computed: true, optional: true, required: false
    private _rfRegion?: string; 
    public get rfRegion() {
        return this.getStringAttribute('rf_region');
    }
    public set rfRegion(value: string) {
        this._rfRegion = value;
    }
    public resetRfRegion() {
        this._rfRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rfRegionInput() {
        return this._rfRegion;
    }

    // rx_data_rate_2 - computed: true, optional: true, required: false
    private _rxDataRate2?: number; 
    public get rxDataRate2() {
        return this.getNumberAttribute('rx_data_rate_2');
    }
    public set rxDataRate2(value: number) {
        this._rxDataRate2 = value;
    }
    public resetRxDataRate2() {
        this._rxDataRate2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rxDataRate2Input() {
        return this._rxDataRate2;
    }

    // rx_delay_1 - computed: true, optional: true, required: false
    private _rxDelay1?: number; 
    public get rxDelay1() {
        return this.getNumberAttribute('rx_delay_1');
    }
    public set rxDelay1(value: number) {
        this._rxDelay1 = value;
    }
    public resetRxDelay1() {
        this._rxDelay1 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rxDelay1Input() {
        return this._rxDelay1;
    }

    // rx_dr_offset_1 - computed: true, optional: true, required: false
    private _rxDrOffset1?: number; 
    public get rxDrOffset1() {
        return this.getNumberAttribute('rx_dr_offset_1');
    }
    public set rxDrOffset1(value: number) {
        this._rxDrOffset1 = value;
    }
    public resetRxDrOffset1() {
        this._rxDrOffset1 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rxDrOffset1Input() {
        return this._rxDrOffset1;
    }

    // rx_freq_2 - computed: true, optional: true, required: false
    private _rxFreq2?: number; 
    public get rxFreq2() {
        return this.getNumberAttribute('rx_freq_2');
    }
    public set rxFreq2(value: number) {
        this._rxFreq2 = value;
    }
    public resetRxFreq2() {
        this._rxFreq2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rxFreq2Input() {
        return this._rxFreq2;
    }

    // supports_32_bit_f_cnt - computed: true, optional: true, required: false
    private _supports32BitFCnt?: boolean | cdktn.IResolvable; 
    public get supports32BitFCnt() {
        return this.getBooleanAttribute('supports_32_bit_f_cnt');
    }
    public set supports32BitFCnt(value: boolean | cdktn.IResolvable) {
        this._supports32BitFCnt = value;
    }
    public resetSupports32BitFCnt() {
        this._supports32BitFCnt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supports32BitFCntInput() {
        return this._supports32BitFCnt;
    }

    // supports_class_b - computed: true, optional: true, required: false
    private _supportsClassB?: boolean | cdktn.IResolvable; 
    public get supportsClassB() {
        return this.getBooleanAttribute('supports_class_b');
    }
    public set supportsClassB(value: boolean | cdktn.IResolvable) {
        this._supportsClassB = value;
    }
    public resetSupportsClassB() {
        this._supportsClassB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsClassBInput() {
        return this._supportsClassB;
    }

    // supports_class_c - computed: true, optional: true, required: false
    private _supportsClassC?: boolean | cdktn.IResolvable; 
    public get supportsClassC() {
        return this.getBooleanAttribute('supports_class_c');
    }
    public set supportsClassC(value: boolean | cdktn.IResolvable) {
        this._supportsClassC = value;
    }
    public resetSupportsClassC() {
        this._supportsClassC = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsClassCInput() {
        return this._supportsClassC;
    }

    // supports_join - computed: true, optional: true, required: false
    private _supportsJoin?: boolean | cdktn.IResolvable; 
    public get supportsJoin() {
        return this.getBooleanAttribute('supports_join');
    }
    public set supportsJoin(value: boolean | cdktn.IResolvable) {
        this._supportsJoin = value;
    }
    public resetSupportsJoin() {
        this._supportsJoin = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportsJoinInput() {
        return this._supportsJoin;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#key CcDeviceProfile#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_device_profile#value CcDeviceProfile#value}
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
