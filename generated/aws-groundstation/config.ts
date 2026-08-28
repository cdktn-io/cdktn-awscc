// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#config_data CcConfig#config_data}
    */
    readonly configData: CcConfig.ConfigDataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#name CcConfig#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#tags CcConfig#tags}
    */
    readonly tags?: CcConfig.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config awscc_groundstation_config}
*/
export class CcConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_groundstation_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfig to import
    * @param importFromId The id of the existing CcConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_groundstation_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config awscc_groundstation_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_groundstation_config',
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
        this._configData.internalValue = config.configData;
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

    // config_data - computed: false, optional: false, required: true
    private _configData = new CcConfig.ConfigDataPropertyOutputReference(this, "config_data");
    public get configData() {
        return this._configData;
    }
    public putConfigData(value: CcConfig.ConfigDataProperty) {
        this._configData.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configDataInput() {
        return this._configData.internalValue;
    }

    // config_id - computed: true, optional: false, required: false
    public get configId() {
        return this.getStringAttribute('config_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConfig.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConfig.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            config_data: ccConfigConfigDataPropertyToTerraform(this._configData.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccConfigTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            config_data: {
                value: ccConfigConfigDataPropertyToHclTerraform(this._configData.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfig.ConfigDataProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConfigTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfig.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfigFrequencyBandwidthPropertyToTerraform(struct?: CcConfig.FrequencyBandwidthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        units: cdktn.stringToTerraform(struct!.units),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccConfigFrequencyBandwidthPropertyToHclTerraform(struct?: CcConfig.FrequencyBandwidthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        units: {
            value: cdktn.stringToHclTerraform(struct!.units),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigFrequencyPropertyToTerraform(struct?: CcConfig.FrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        units: cdktn.stringToTerraform(struct!.units),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccConfigFrequencyPropertyToHclTerraform(struct?: CcConfig.FrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        units: {
            value: cdktn.stringToHclTerraform(struct!.units),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigSpectrumConfigPropertyToTerraform(struct?: CcConfig.SpectrumConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bandwidth: ccConfigFrequencyBandwidthPropertyToTerraform(struct!.bandwidth),
        center_frequency: ccConfigFrequencyPropertyToTerraform(struct!.centerFrequency),
        polarization: cdktn.stringToTerraform(struct!.polarization),
    }
}


export function ccConfigSpectrumConfigPropertyToHclTerraform(struct?: CcConfig.SpectrumConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bandwidth: {
            value: ccConfigFrequencyBandwidthPropertyToHclTerraform(struct!.bandwidth),
            isBlock: true,
            type: "struct",
            storageClassType: "FrequencyBandwidthProperty",
        },
        center_frequency: {
            value: ccConfigFrequencyPropertyToHclTerraform(struct!.centerFrequency),
            isBlock: true,
            type: "struct",
            storageClassType: "FrequencyProperty",
        },
        polarization: {
            value: cdktn.stringToHclTerraform(struct!.polarization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigAntennaDownlinkConfigPropertyToTerraform(struct?: CcConfig.AntennaDownlinkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        spectrum_config: ccConfigSpectrumConfigPropertyToTerraform(struct!.spectrumConfig),
    }
}


export function ccConfigAntennaDownlinkConfigPropertyToHclTerraform(struct?: CcConfig.AntennaDownlinkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        spectrum_config: {
            value: ccConfigSpectrumConfigPropertyToHclTerraform(struct!.spectrumConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SpectrumConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigDecodeConfigPropertyToTerraform(struct?: CcConfig.DecodeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unvalidated_json: cdktn.stringToTerraform(struct!.unvalidatedJson),
    }
}


export function ccConfigDecodeConfigPropertyToHclTerraform(struct?: CcConfig.DecodeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unvalidated_json: {
            value: cdktn.stringToHclTerraform(struct!.unvalidatedJson),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigDemodulationConfigPropertyToTerraform(struct?: CcConfig.DemodulationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unvalidated_json: cdktn.stringToTerraform(struct!.unvalidatedJson),
    }
}


export function ccConfigDemodulationConfigPropertyToHclTerraform(struct?: CcConfig.DemodulationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unvalidated_json: {
            value: cdktn.stringToHclTerraform(struct!.unvalidatedJson),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigBandwidthPropertyToTerraform(struct?: CcConfig.BandwidthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        units: cdktn.stringToTerraform(struct!.units),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccConfigBandwidthPropertyToHclTerraform(struct?: CcConfig.BandwidthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        units: {
            value: cdktn.stringToHclTerraform(struct!.units),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyPropertyToTerraform(struct?: CcConfig.ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        units: cdktn.stringToTerraform(struct!.units),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyPropertyToHclTerraform(struct?: CcConfig.ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        units: {
            value: cdktn.stringToHclTerraform(struct!.units),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigPropertyToTerraform(struct?: CcConfig.ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bandwidth: ccConfigBandwidthPropertyToTerraform(struct!.bandwidth),
        center_frequency: ccConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyPropertyToTerraform(struct!.centerFrequency),
        polarization: cdktn.stringToTerraform(struct!.polarization),
    }
}


export function ccConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigPropertyToHclTerraform(struct?: CcConfig.ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bandwidth: {
            value: ccConfigBandwidthPropertyToHclTerraform(struct!.bandwidth),
            isBlock: true,
            type: "struct",
            storageClassType: "BandwidthProperty",
        },
        center_frequency: {
            value: ccConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyPropertyToHclTerraform(struct!.centerFrequency),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyProperty",
        },
        polarization: {
            value: cdktn.stringToHclTerraform(struct!.polarization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigAntennaDownlinkDemodDecodeConfigPropertyToTerraform(struct?: CcConfig.AntennaDownlinkDemodDecodeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        decode_config: ccConfigDecodeConfigPropertyToTerraform(struct!.decodeConfig),
        demodulation_config: ccConfigDemodulationConfigPropertyToTerraform(struct!.demodulationConfig),
        spectrum_config: ccConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigPropertyToTerraform(struct!.spectrumConfig),
    }
}


export function ccConfigAntennaDownlinkDemodDecodeConfigPropertyToHclTerraform(struct?: CcConfig.AntennaDownlinkDemodDecodeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        decode_config: {
            value: ccConfigDecodeConfigPropertyToHclTerraform(struct!.decodeConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DecodeConfigProperty",
        },
        demodulation_config: {
            value: ccConfigDemodulationConfigPropertyToHclTerraform(struct!.demodulationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DemodulationConfigProperty",
        },
        spectrum_config: {
            value: ccConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigPropertyToHclTerraform(struct!.spectrumConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyPropertyToTerraform(struct?: CcConfig.ConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        units: cdktn.stringToTerraform(struct!.units),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyPropertyToHclTerraform(struct?: CcConfig.ConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        units: {
            value: cdktn.stringToHclTerraform(struct!.units),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigUplinkSpectrumConfigPropertyToTerraform(struct?: CcConfig.UplinkSpectrumConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        center_frequency: ccConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyPropertyToTerraform(struct!.centerFrequency),
        polarization: cdktn.stringToTerraform(struct!.polarization),
    }
}


export function ccConfigUplinkSpectrumConfigPropertyToHclTerraform(struct?: CcConfig.UplinkSpectrumConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        center_frequency: {
            value: ccConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyPropertyToHclTerraform(struct!.centerFrequency),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyProperty",
        },
        polarization: {
            value: cdktn.stringToHclTerraform(struct!.polarization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigEirpPropertyToTerraform(struct?: CcConfig.EirpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        units: cdktn.stringToTerraform(struct!.units),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccConfigEirpPropertyToHclTerraform(struct?: CcConfig.EirpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        units: {
            value: cdktn.stringToHclTerraform(struct!.units),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigAntennaUplinkConfigPropertyToTerraform(struct?: CcConfig.AntennaUplinkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        spectrum_config: ccConfigUplinkSpectrumConfigPropertyToTerraform(struct!.spectrumConfig),
        target_eirp: ccConfigEirpPropertyToTerraform(struct!.targetEirp),
        transmit_disabled: cdktn.booleanToTerraform(struct!.transmitDisabled),
    }
}


export function ccConfigAntennaUplinkConfigPropertyToHclTerraform(struct?: CcConfig.AntennaUplinkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        spectrum_config: {
            value: ccConfigUplinkSpectrumConfigPropertyToHclTerraform(struct!.spectrumConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "UplinkSpectrumConfigProperty",
        },
        target_eirp: {
            value: ccConfigEirpPropertyToHclTerraform(struct!.targetEirp),
            isBlock: true,
            type: "struct",
            storageClassType: "EirpProperty",
        },
        transmit_disabled: {
            value: cdktn.booleanToHclTerraform(struct!.transmitDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigDataflowEndpointConfigPropertyToTerraform(struct?: CcConfig.DataflowEndpointConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dataflow_endpoint_name: cdktn.stringToTerraform(struct!.dataflowEndpointName),
        dataflow_endpoint_region: cdktn.stringToTerraform(struct!.dataflowEndpointRegion),
    }
}


export function ccConfigDataflowEndpointConfigPropertyToHclTerraform(struct?: CcConfig.DataflowEndpointConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dataflow_endpoint_name: {
            value: cdktn.stringToHclTerraform(struct!.dataflowEndpointName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dataflow_endpoint_region: {
            value: cdktn.stringToHclTerraform(struct!.dataflowEndpointRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigS3RecordingConfigPropertyToTerraform(struct?: CcConfig.S3RecordingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccConfigS3RecordingConfigPropertyToHclTerraform(struct?: CcConfig.S3RecordingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigKinesisDataStreamDataPropertyToTerraform(struct?: CcConfig.KinesisDataStreamDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kinesis_data_stream_arn: cdktn.stringToTerraform(struct!.kinesisDataStreamArn),
        kinesis_role_arn: cdktn.stringToTerraform(struct!.kinesisRoleArn),
    }
}


export function ccConfigKinesisDataStreamDataPropertyToHclTerraform(struct?: CcConfig.KinesisDataStreamDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kinesis_data_stream_arn: {
            value: cdktn.stringToHclTerraform(struct!.kinesisDataStreamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesis_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.kinesisRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigTelemetrySinkDataPropertyToTerraform(struct?: CcConfig.TelemetrySinkDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kinesis_data_stream_data: ccConfigKinesisDataStreamDataPropertyToTerraform(struct!.kinesisDataStreamData),
    }
}


export function ccConfigTelemetrySinkDataPropertyToHclTerraform(struct?: CcConfig.TelemetrySinkDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kinesis_data_stream_data: {
            value: ccConfigKinesisDataStreamDataPropertyToHclTerraform(struct!.kinesisDataStreamData),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisDataStreamDataProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigTelemetrySinkConfigPropertyToTerraform(struct?: CcConfig.TelemetrySinkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        telemetry_sink_data: ccConfigTelemetrySinkDataPropertyToTerraform(struct!.telemetrySinkData),
        telemetry_sink_type: cdktn.stringToTerraform(struct!.telemetrySinkType),
    }
}


export function ccConfigTelemetrySinkConfigPropertyToHclTerraform(struct?: CcConfig.TelemetrySinkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        telemetry_sink_data: {
            value: ccConfigTelemetrySinkDataPropertyToHclTerraform(struct!.telemetrySinkData),
            isBlock: true,
            type: "struct",
            storageClassType: "TelemetrySinkDataProperty",
        },
        telemetry_sink_type: {
            value: cdktn.stringToHclTerraform(struct!.telemetrySinkType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigTrackingConfigPropertyToTerraform(struct?: CcConfig.TrackingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        autotrack: cdktn.stringToTerraform(struct!.autotrack),
    }
}


export function ccConfigTrackingConfigPropertyToHclTerraform(struct?: CcConfig.TrackingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        autotrack: {
            value: cdktn.stringToHclTerraform(struct!.autotrack),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigUplinkEchoConfigPropertyToTerraform(struct?: CcConfig.UplinkEchoConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        antenna_uplink_config_arn: cdktn.stringToTerraform(struct!.antennaUplinkConfigArn),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccConfigUplinkEchoConfigPropertyToHclTerraform(struct?: CcConfig.UplinkEchoConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        antenna_uplink_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.antennaUplinkConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigConfigDataPropertyToTerraform(struct?: CcConfig.ConfigDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        antenna_downlink_config: ccConfigAntennaDownlinkConfigPropertyToTerraform(struct!.antennaDownlinkConfig),
        antenna_downlink_demod_decode_config: ccConfigAntennaDownlinkDemodDecodeConfigPropertyToTerraform(struct!.antennaDownlinkDemodDecodeConfig),
        antenna_uplink_config: ccConfigAntennaUplinkConfigPropertyToTerraform(struct!.antennaUplinkConfig),
        dataflow_endpoint_config: ccConfigDataflowEndpointConfigPropertyToTerraform(struct!.dataflowEndpointConfig),
        s3_recording_config: ccConfigS3RecordingConfigPropertyToTerraform(struct!.s3RecordingConfig),
        telemetry_sink_config: ccConfigTelemetrySinkConfigPropertyToTerraform(struct!.telemetrySinkConfig),
        tracking_config: ccConfigTrackingConfigPropertyToTerraform(struct!.trackingConfig),
        uplink_echo_config: ccConfigUplinkEchoConfigPropertyToTerraform(struct!.uplinkEchoConfig),
    }
}


export function ccConfigConfigDataPropertyToHclTerraform(struct?: CcConfig.ConfigDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        antenna_downlink_config: {
            value: ccConfigAntennaDownlinkConfigPropertyToHclTerraform(struct!.antennaDownlinkConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AntennaDownlinkConfigProperty",
        },
        antenna_downlink_demod_decode_config: {
            value: ccConfigAntennaDownlinkDemodDecodeConfigPropertyToHclTerraform(struct!.antennaDownlinkDemodDecodeConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AntennaDownlinkDemodDecodeConfigProperty",
        },
        antenna_uplink_config: {
            value: ccConfigAntennaUplinkConfigPropertyToHclTerraform(struct!.antennaUplinkConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AntennaUplinkConfigProperty",
        },
        dataflow_endpoint_config: {
            value: ccConfigDataflowEndpointConfigPropertyToHclTerraform(struct!.dataflowEndpointConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DataflowEndpointConfigProperty",
        },
        s3_recording_config: {
            value: ccConfigS3RecordingConfigPropertyToHclTerraform(struct!.s3RecordingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "S3RecordingConfigProperty",
        },
        telemetry_sink_config: {
            value: ccConfigTelemetrySinkConfigPropertyToHclTerraform(struct!.telemetrySinkConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TelemetrySinkConfigProperty",
        },
        tracking_config: {
            value: ccConfigTrackingConfigPropertyToHclTerraform(struct!.trackingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TrackingConfigProperty",
        },
        uplink_echo_config: {
            value: ccConfigUplinkEchoConfigPropertyToHclTerraform(struct!.uplinkEchoConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "UplinkEchoConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigTagPropertyToTerraform(struct?: CcConfig.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfigTagPropertyToHclTerraform(struct?: CcConfig.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConfig {
export interface FrequencyBandwidthProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#units CcConfig#units}
    */
    readonly units?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#value CcConfig#value}
    */
    readonly value?: number;
}
export class FrequencyBandwidthPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FrequencyBandwidthProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._units !== undefined) {
            hasAnyValues = true;
            internalValueResult.units = this._units;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FrequencyBandwidthProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._units = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._units = value.units;
            this._value = value.value;
        }
    }

    // units - computed: true, optional: true, required: false
    private _units?: string; 
    public get units() {
        return this.getStringAttribute('units');
    }
    public set units(value: string) {
        this._units = value;
    }
    public resetUnits() {
        this._units = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitsInput() {
        return this._units;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface FrequencyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#units CcConfig#units}
    */
    readonly units?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#value CcConfig#value}
    */
    readonly value?: number;
}
export class FrequencyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FrequencyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._units !== undefined) {
            hasAnyValues = true;
            internalValueResult.units = this._units;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FrequencyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._units = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._units = value.units;
            this._value = value.value;
        }
    }

    // units - computed: true, optional: true, required: false
    private _units?: string; 
    public get units() {
        return this.getStringAttribute('units');
    }
    public set units(value: string) {
        this._units = value;
    }
    public resetUnits() {
        this._units = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitsInput() {
        return this._units;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface SpectrumConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#bandwidth CcConfig#bandwidth}
    */
    readonly bandwidth?: FrequencyBandwidthProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#center_frequency CcConfig#center_frequency}
    */
    readonly centerFrequency?: FrequencyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#polarization CcConfig#polarization}
    */
    readonly polarization?: string;
}
export class SpectrumConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SpectrumConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bandwidth?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bandwidth = this._bandwidth?.internalValue;
        }
        if (this._centerFrequency?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.centerFrequency = this._centerFrequency?.internalValue;
        }
        if (this._polarization !== undefined) {
            hasAnyValues = true;
            internalValueResult.polarization = this._polarization;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SpectrumConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bandwidth.internalValue = undefined;
            this._centerFrequency.internalValue = undefined;
            this._polarization = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bandwidth.internalValue = value.bandwidth;
            this._centerFrequency.internalValue = value.centerFrequency;
            this._polarization = value.polarization;
        }
    }

    // bandwidth - computed: true, optional: true, required: false
    private _bandwidth = new FrequencyBandwidthPropertyOutputReference(this, "bandwidth");
    public get bandwidth() {
        return this._bandwidth;
    }
    public putBandwidth(value: FrequencyBandwidthProperty) {
        this._bandwidth.internalValue = value;
    }
    public resetBandwidth() {
        this._bandwidth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthInput() {
        return this._bandwidth.internalValue;
    }

    // center_frequency - computed: true, optional: true, required: false
    private _centerFrequency = new FrequencyPropertyOutputReference(this, "center_frequency");
    public get centerFrequency() {
        return this._centerFrequency;
    }
    public putCenterFrequency(value: FrequencyProperty) {
        this._centerFrequency.internalValue = value;
    }
    public resetCenterFrequency() {
        this._centerFrequency.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get centerFrequencyInput() {
        return this._centerFrequency.internalValue;
    }

    // polarization - computed: true, optional: true, required: false
    private _polarization?: string; 
    public get polarization() {
        return this.getStringAttribute('polarization');
    }
    public set polarization(value: string) {
        this._polarization = value;
    }
    public resetPolarization() {
        this._polarization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get polarizationInput() {
        return this._polarization;
    }
}
export interface AntennaDownlinkConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#spectrum_config CcConfig#spectrum_config}
    */
    readonly spectrumConfig?: SpectrumConfigProperty;
}
export class AntennaDownlinkConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AntennaDownlinkConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._spectrumConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spectrumConfig = this._spectrumConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AntennaDownlinkConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._spectrumConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._spectrumConfig.internalValue = value.spectrumConfig;
        }
    }

    // spectrum_config - computed: true, optional: true, required: false
    private _spectrumConfig = new SpectrumConfigPropertyOutputReference(this, "spectrum_config");
    public get spectrumConfig() {
        return this._spectrumConfig;
    }
    public putSpectrumConfig(value: SpectrumConfigProperty) {
        this._spectrumConfig.internalValue = value;
    }
    public resetSpectrumConfig() {
        this._spectrumConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spectrumConfigInput() {
        return this._spectrumConfig.internalValue;
    }
}
export interface DecodeConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#unvalidated_json CcConfig#unvalidated_json}
    */
    readonly unvalidatedJson?: string;
}
export class DecodeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DecodeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unvalidatedJson !== undefined) {
            hasAnyValues = true;
            internalValueResult.unvalidatedJson = this._unvalidatedJson;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DecodeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unvalidatedJson = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unvalidatedJson = value.unvalidatedJson;
        }
    }

    // unvalidated_json - computed: true, optional: true, required: false
    private _unvalidatedJson?: string; 
    public get unvalidatedJson() {
        return this.getStringAttribute('unvalidated_json');
    }
    public set unvalidatedJson(value: string) {
        this._unvalidatedJson = value;
    }
    public resetUnvalidatedJson() {
        this._unvalidatedJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unvalidatedJsonInput() {
        return this._unvalidatedJson;
    }
}
export interface DemodulationConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#unvalidated_json CcConfig#unvalidated_json}
    */
    readonly unvalidatedJson?: string;
}
export class DemodulationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DemodulationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unvalidatedJson !== undefined) {
            hasAnyValues = true;
            internalValueResult.unvalidatedJson = this._unvalidatedJson;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DemodulationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unvalidatedJson = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unvalidatedJson = value.unvalidatedJson;
        }
    }

    // unvalidated_json - computed: true, optional: true, required: false
    private _unvalidatedJson?: string; 
    public get unvalidatedJson() {
        return this.getStringAttribute('unvalidated_json');
    }
    public set unvalidatedJson(value: string) {
        this._unvalidatedJson = value;
    }
    public resetUnvalidatedJson() {
        this._unvalidatedJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unvalidatedJsonInput() {
        return this._unvalidatedJson;
    }
}
export interface BandwidthProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#units CcConfig#units}
    */
    readonly units?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#value CcConfig#value}
    */
    readonly value?: number;
}
export class BandwidthPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BandwidthProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._units !== undefined) {
            hasAnyValues = true;
            internalValueResult.units = this._units;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BandwidthProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._units = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._units = value.units;
            this._value = value.value;
        }
    }

    // units - computed: true, optional: true, required: false
    private _units?: string; 
    public get units() {
        return this.getStringAttribute('units');
    }
    public set units(value: string) {
        this._units = value;
    }
    public resetUnits() {
        this._units = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitsInput() {
        return this._units;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#units CcConfig#units}
    */
    readonly units?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#value CcConfig#value}
    */
    readonly value?: number;
}
export class ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._units !== undefined) {
            hasAnyValues = true;
            internalValueResult.units = this._units;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._units = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._units = value.units;
            this._value = value.value;
        }
    }

    // units - computed: true, optional: true, required: false
    private _units?: string; 
    public get units() {
        return this.getStringAttribute('units');
    }
    public set units(value: string) {
        this._units = value;
    }
    public resetUnits() {
        this._units = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitsInput() {
        return this._units;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#bandwidth CcConfig#bandwidth}
    */
    readonly bandwidth?: BandwidthProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#center_frequency CcConfig#center_frequency}
    */
    readonly centerFrequency?: ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#polarization CcConfig#polarization}
    */
    readonly polarization?: string;
}
export class ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bandwidth?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bandwidth = this._bandwidth?.internalValue;
        }
        if (this._centerFrequency?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.centerFrequency = this._centerFrequency?.internalValue;
        }
        if (this._polarization !== undefined) {
            hasAnyValues = true;
            internalValueResult.polarization = this._polarization;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bandwidth.internalValue = undefined;
            this._centerFrequency.internalValue = undefined;
            this._polarization = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bandwidth.internalValue = value.bandwidth;
            this._centerFrequency.internalValue = value.centerFrequency;
            this._polarization = value.polarization;
        }
    }

    // bandwidth - computed: true, optional: true, required: false
    private _bandwidth = new BandwidthPropertyOutputReference(this, "bandwidth");
    public get bandwidth() {
        return this._bandwidth;
    }
    public putBandwidth(value: BandwidthProperty) {
        this._bandwidth.internalValue = value;
    }
    public resetBandwidth() {
        this._bandwidth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bandwidthInput() {
        return this._bandwidth.internalValue;
    }

    // center_frequency - computed: true, optional: true, required: false
    private _centerFrequency = new ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyPropertyOutputReference(this, "center_frequency");
    public get centerFrequency() {
        return this._centerFrequency;
    }
    public putCenterFrequency(value: ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyProperty) {
        this._centerFrequency.internalValue = value;
    }
    public resetCenterFrequency() {
        this._centerFrequency.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get centerFrequencyInput() {
        return this._centerFrequency.internalValue;
    }

    // polarization - computed: true, optional: true, required: false
    private _polarization?: string; 
    public get polarization() {
        return this.getStringAttribute('polarization');
    }
    public set polarization(value: string) {
        this._polarization = value;
    }
    public resetPolarization() {
        this._polarization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get polarizationInput() {
        return this._polarization;
    }
}
export interface AntennaDownlinkDemodDecodeConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#decode_config CcConfig#decode_config}
    */
    readonly decodeConfig?: DecodeConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#demodulation_config CcConfig#demodulation_config}
    */
    readonly demodulationConfig?: DemodulationConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#spectrum_config CcConfig#spectrum_config}
    */
    readonly spectrumConfig?: ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigProperty;
}
export class AntennaDownlinkDemodDecodeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AntennaDownlinkDemodDecodeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._decodeConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.decodeConfig = this._decodeConfig?.internalValue;
        }
        if (this._demodulationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.demodulationConfig = this._demodulationConfig?.internalValue;
        }
        if (this._spectrumConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spectrumConfig = this._spectrumConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AntennaDownlinkDemodDecodeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._decodeConfig.internalValue = undefined;
            this._demodulationConfig.internalValue = undefined;
            this._spectrumConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._decodeConfig.internalValue = value.decodeConfig;
            this._demodulationConfig.internalValue = value.demodulationConfig;
            this._spectrumConfig.internalValue = value.spectrumConfig;
        }
    }

    // decode_config - computed: true, optional: true, required: false
    private _decodeConfig = new DecodeConfigPropertyOutputReference(this, "decode_config");
    public get decodeConfig() {
        return this._decodeConfig;
    }
    public putDecodeConfig(value: DecodeConfigProperty) {
        this._decodeConfig.internalValue = value;
    }
    public resetDecodeConfig() {
        this._decodeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decodeConfigInput() {
        return this._decodeConfig.internalValue;
    }

    // demodulation_config - computed: true, optional: true, required: false
    private _demodulationConfig = new DemodulationConfigPropertyOutputReference(this, "demodulation_config");
    public get demodulationConfig() {
        return this._demodulationConfig;
    }
    public putDemodulationConfig(value: DemodulationConfigProperty) {
        this._demodulationConfig.internalValue = value;
    }
    public resetDemodulationConfig() {
        this._demodulationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get demodulationConfigInput() {
        return this._demodulationConfig.internalValue;
    }

    // spectrum_config - computed: true, optional: true, required: false
    private _spectrumConfig = new ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigPropertyOutputReference(this, "spectrum_config");
    public get spectrumConfig() {
        return this._spectrumConfig;
    }
    public putSpectrumConfig(value: ConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigProperty) {
        this._spectrumConfig.internalValue = value;
    }
    public resetSpectrumConfig() {
        this._spectrumConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spectrumConfigInput() {
        return this._spectrumConfig.internalValue;
    }
}
export interface ConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#units CcConfig#units}
    */
    readonly units?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#value CcConfig#value}
    */
    readonly value?: number;
}
export class ConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._units !== undefined) {
            hasAnyValues = true;
            internalValueResult.units = this._units;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._units = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._units = value.units;
            this._value = value.value;
        }
    }

    // units - computed: true, optional: true, required: false
    private _units?: string; 
    public get units() {
        return this.getStringAttribute('units');
    }
    public set units(value: string) {
        this._units = value;
    }
    public resetUnits() {
        this._units = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitsInput() {
        return this._units;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface UplinkSpectrumConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#center_frequency CcConfig#center_frequency}
    */
    readonly centerFrequency?: ConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#polarization CcConfig#polarization}
    */
    readonly polarization?: string;
}
export class UplinkSpectrumConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UplinkSpectrumConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._centerFrequency?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.centerFrequency = this._centerFrequency?.internalValue;
        }
        if (this._polarization !== undefined) {
            hasAnyValues = true;
            internalValueResult.polarization = this._polarization;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UplinkSpectrumConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._centerFrequency.internalValue = undefined;
            this._polarization = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._centerFrequency.internalValue = value.centerFrequency;
            this._polarization = value.polarization;
        }
    }

    // center_frequency - computed: true, optional: true, required: false
    private _centerFrequency = new ConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyPropertyOutputReference(this, "center_frequency");
    public get centerFrequency() {
        return this._centerFrequency;
    }
    public putCenterFrequency(value: ConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyProperty) {
        this._centerFrequency.internalValue = value;
    }
    public resetCenterFrequency() {
        this._centerFrequency.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get centerFrequencyInput() {
        return this._centerFrequency.internalValue;
    }

    // polarization - computed: true, optional: true, required: false
    private _polarization?: string; 
    public get polarization() {
        return this.getStringAttribute('polarization');
    }
    public set polarization(value: string) {
        this._polarization = value;
    }
    public resetPolarization() {
        this._polarization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get polarizationInput() {
        return this._polarization;
    }
}
export interface EirpProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#units CcConfig#units}
    */
    readonly units?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#value CcConfig#value}
    */
    readonly value?: number;
}
export class EirpPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EirpProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._units !== undefined) {
            hasAnyValues = true;
            internalValueResult.units = this._units;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EirpProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._units = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._units = value.units;
            this._value = value.value;
        }
    }

    // units - computed: true, optional: true, required: false
    private _units?: string; 
    public get units() {
        return this.getStringAttribute('units');
    }
    public set units(value: string) {
        this._units = value;
    }
    public resetUnits() {
        this._units = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitsInput() {
        return this._units;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface AntennaUplinkConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#spectrum_config CcConfig#spectrum_config}
    */
    readonly spectrumConfig?: UplinkSpectrumConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#target_eirp CcConfig#target_eirp}
    */
    readonly targetEirp?: EirpProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#transmit_disabled CcConfig#transmit_disabled}
    */
    readonly transmitDisabled?: boolean | cdktn.IResolvable;
}
export class AntennaUplinkConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AntennaUplinkConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._spectrumConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.spectrumConfig = this._spectrumConfig?.internalValue;
        }
        if (this._targetEirp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetEirp = this._targetEirp?.internalValue;
        }
        if (this._transmitDisabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.transmitDisabled = this._transmitDisabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AntennaUplinkConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._spectrumConfig.internalValue = undefined;
            this._targetEirp.internalValue = undefined;
            this._transmitDisabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._spectrumConfig.internalValue = value.spectrumConfig;
            this._targetEirp.internalValue = value.targetEirp;
            this._transmitDisabled = value.transmitDisabled;
        }
    }

    // spectrum_config - computed: true, optional: true, required: false
    private _spectrumConfig = new UplinkSpectrumConfigPropertyOutputReference(this, "spectrum_config");
    public get spectrumConfig() {
        return this._spectrumConfig;
    }
    public putSpectrumConfig(value: UplinkSpectrumConfigProperty) {
        this._spectrumConfig.internalValue = value;
    }
    public resetSpectrumConfig() {
        this._spectrumConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spectrumConfigInput() {
        return this._spectrumConfig.internalValue;
    }

    // target_eirp - computed: true, optional: true, required: false
    private _targetEirp = new EirpPropertyOutputReference(this, "target_eirp");
    public get targetEirp() {
        return this._targetEirp;
    }
    public putTargetEirp(value: EirpProperty) {
        this._targetEirp.internalValue = value;
    }
    public resetTargetEirp() {
        this._targetEirp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetEirpInput() {
        return this._targetEirp.internalValue;
    }

    // transmit_disabled - computed: true, optional: true, required: false
    private _transmitDisabled?: boolean | cdktn.IResolvable; 
    public get transmitDisabled() {
        return this.getBooleanAttribute('transmit_disabled');
    }
    public set transmitDisabled(value: boolean | cdktn.IResolvable) {
        this._transmitDisabled = value;
    }
    public resetTransmitDisabled() {
        this._transmitDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transmitDisabledInput() {
        return this._transmitDisabled;
    }
}
export interface DataflowEndpointConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#dataflow_endpoint_name CcConfig#dataflow_endpoint_name}
    */
    readonly dataflowEndpointName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#dataflow_endpoint_region CcConfig#dataflow_endpoint_region}
    */
    readonly dataflowEndpointRegion?: string;
}
export class DataflowEndpointConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataflowEndpointConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataflowEndpointName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataflowEndpointName = this._dataflowEndpointName;
        }
        if (this._dataflowEndpointRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataflowEndpointRegion = this._dataflowEndpointRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataflowEndpointConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataflowEndpointName = undefined;
            this._dataflowEndpointRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataflowEndpointName = value.dataflowEndpointName;
            this._dataflowEndpointRegion = value.dataflowEndpointRegion;
        }
    }

    // dataflow_endpoint_name - computed: true, optional: true, required: false
    private _dataflowEndpointName?: string; 
    public get dataflowEndpointName() {
        return this.getStringAttribute('dataflow_endpoint_name');
    }
    public set dataflowEndpointName(value: string) {
        this._dataflowEndpointName = value;
    }
    public resetDataflowEndpointName() {
        this._dataflowEndpointName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataflowEndpointNameInput() {
        return this._dataflowEndpointName;
    }

    // dataflow_endpoint_region - computed: true, optional: true, required: false
    private _dataflowEndpointRegion?: string; 
    public get dataflowEndpointRegion() {
        return this.getStringAttribute('dataflow_endpoint_region');
    }
    public set dataflowEndpointRegion(value: string) {
        this._dataflowEndpointRegion = value;
    }
    public resetDataflowEndpointRegion() {
        this._dataflowEndpointRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataflowEndpointRegionInput() {
        return this._dataflowEndpointRegion;
    }
}
export interface S3RecordingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#bucket_arn CcConfig#bucket_arn}
    */
    readonly bucketArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#prefix CcConfig#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#role_arn CcConfig#role_arn}
    */
    readonly roleArn?: string;
}
export class S3RecordingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3RecordingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3RecordingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketArn = undefined;
            this._prefix = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketArn = value.bucketArn;
            this._prefix = value.prefix;
            this._roleArn = value.roleArn;
        }
    }

    // bucket_arn - computed: true, optional: true, required: false
    private _bucketArn?: string; 
    public get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
        this._bucketArn = value;
    }
    public resetBucketArn() {
        this._bucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
        return this._bucketArn;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
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
}
export interface KinesisDataStreamDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#kinesis_data_stream_arn CcConfig#kinesis_data_stream_arn}
    */
    readonly kinesisDataStreamArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#kinesis_role_arn CcConfig#kinesis_role_arn}
    */
    readonly kinesisRoleArn?: string;
}
export class KinesisDataStreamDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisDataStreamDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kinesisDataStreamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisDataStreamArn = this._kinesisDataStreamArn;
        }
        if (this._kinesisRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisRoleArn = this._kinesisRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisDataStreamDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kinesisDataStreamArn = undefined;
            this._kinesisRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kinesisDataStreamArn = value.kinesisDataStreamArn;
            this._kinesisRoleArn = value.kinesisRoleArn;
        }
    }

    // kinesis_data_stream_arn - computed: true, optional: true, required: false
    private _kinesisDataStreamArn?: string; 
    public get kinesisDataStreamArn() {
        return this.getStringAttribute('kinesis_data_stream_arn');
    }
    public set kinesisDataStreamArn(value: string) {
        this._kinesisDataStreamArn = value;
    }
    public resetKinesisDataStreamArn() {
        this._kinesisDataStreamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisDataStreamArnInput() {
        return this._kinesisDataStreamArn;
    }

    // kinesis_role_arn - computed: true, optional: true, required: false
    private _kinesisRoleArn?: string; 
    public get kinesisRoleArn() {
        return this.getStringAttribute('kinesis_role_arn');
    }
    public set kinesisRoleArn(value: string) {
        this._kinesisRoleArn = value;
    }
    public resetKinesisRoleArn() {
        this._kinesisRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisRoleArnInput() {
        return this._kinesisRoleArn;
    }
}
export interface TelemetrySinkDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#kinesis_data_stream_data CcConfig#kinesis_data_stream_data}
    */
    readonly kinesisDataStreamData?: KinesisDataStreamDataProperty;
}
export class TelemetrySinkDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TelemetrySinkDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kinesisDataStreamData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisDataStreamData = this._kinesisDataStreamData?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TelemetrySinkDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kinesisDataStreamData.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kinesisDataStreamData.internalValue = value.kinesisDataStreamData;
        }
    }

    // kinesis_data_stream_data - computed: true, optional: true, required: false
    private _kinesisDataStreamData = new KinesisDataStreamDataPropertyOutputReference(this, "kinesis_data_stream_data");
    public get kinesisDataStreamData() {
        return this._kinesisDataStreamData;
    }
    public putKinesisDataStreamData(value: KinesisDataStreamDataProperty) {
        this._kinesisDataStreamData.internalValue = value;
    }
    public resetKinesisDataStreamData() {
        this._kinesisDataStreamData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisDataStreamDataInput() {
        return this._kinesisDataStreamData.internalValue;
    }
}
export interface TelemetrySinkConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#telemetry_sink_data CcConfig#telemetry_sink_data}
    */
    readonly telemetrySinkData?: TelemetrySinkDataProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#telemetry_sink_type CcConfig#telemetry_sink_type}
    */
    readonly telemetrySinkType?: string;
}
export class TelemetrySinkConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TelemetrySinkConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._telemetrySinkData?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.telemetrySinkData = this._telemetrySinkData?.internalValue;
        }
        if (this._telemetrySinkType !== undefined) {
            hasAnyValues = true;
            internalValueResult.telemetrySinkType = this._telemetrySinkType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TelemetrySinkConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._telemetrySinkData.internalValue = undefined;
            this._telemetrySinkType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._telemetrySinkData.internalValue = value.telemetrySinkData;
            this._telemetrySinkType = value.telemetrySinkType;
        }
    }

    // telemetry_sink_data - computed: true, optional: true, required: false
    private _telemetrySinkData = new TelemetrySinkDataPropertyOutputReference(this, "telemetry_sink_data");
    public get telemetrySinkData() {
        return this._telemetrySinkData;
    }
    public putTelemetrySinkData(value: TelemetrySinkDataProperty) {
        this._telemetrySinkData.internalValue = value;
    }
    public resetTelemetrySinkData() {
        this._telemetrySinkData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get telemetrySinkDataInput() {
        return this._telemetrySinkData.internalValue;
    }

    // telemetry_sink_type - computed: true, optional: true, required: false
    private _telemetrySinkType?: string; 
    public get telemetrySinkType() {
        return this.getStringAttribute('telemetry_sink_type');
    }
    public set telemetrySinkType(value: string) {
        this._telemetrySinkType = value;
    }
    public resetTelemetrySinkType() {
        this._telemetrySinkType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get telemetrySinkTypeInput() {
        return this._telemetrySinkType;
    }
}
export interface TrackingConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#autotrack CcConfig#autotrack}
    */
    readonly autotrack?: string;
}
export class TrackingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TrackingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autotrack !== undefined) {
            hasAnyValues = true;
            internalValueResult.autotrack = this._autotrack;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TrackingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autotrack = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autotrack = value.autotrack;
        }
    }

    // autotrack - computed: true, optional: true, required: false
    private _autotrack?: string; 
    public get autotrack() {
        return this.getStringAttribute('autotrack');
    }
    public set autotrack(value: string) {
        this._autotrack = value;
    }
    public resetAutotrack() {
        this._autotrack = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autotrackInput() {
        return this._autotrack;
    }
}
export interface UplinkEchoConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#antenna_uplink_config_arn CcConfig#antenna_uplink_config_arn}
    */
    readonly antennaUplinkConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#enabled CcConfig#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class UplinkEchoConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UplinkEchoConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._antennaUplinkConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.antennaUplinkConfigArn = this._antennaUplinkConfigArn;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UplinkEchoConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._antennaUplinkConfigArn = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._antennaUplinkConfigArn = value.antennaUplinkConfigArn;
            this._enabled = value.enabled;
        }
    }

    // antenna_uplink_config_arn - computed: true, optional: true, required: false
    private _antennaUplinkConfigArn?: string; 
    public get antennaUplinkConfigArn() {
        return this.getStringAttribute('antenna_uplink_config_arn');
    }
    public set antennaUplinkConfigArn(value: string) {
        this._antennaUplinkConfigArn = value;
    }
    public resetAntennaUplinkConfigArn() {
        this._antennaUplinkConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get antennaUplinkConfigArnInput() {
        return this._antennaUplinkConfigArn;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }
}
export interface ConfigDataProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#antenna_downlink_config CcConfig#antenna_downlink_config}
    */
    readonly antennaDownlinkConfig?: AntennaDownlinkConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#antenna_downlink_demod_decode_config CcConfig#antenna_downlink_demod_decode_config}
    */
    readonly antennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#antenna_uplink_config CcConfig#antenna_uplink_config}
    */
    readonly antennaUplinkConfig?: AntennaUplinkConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#dataflow_endpoint_config CcConfig#dataflow_endpoint_config}
    */
    readonly dataflowEndpointConfig?: DataflowEndpointConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#s3_recording_config CcConfig#s3_recording_config}
    */
    readonly s3RecordingConfig?: S3RecordingConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#telemetry_sink_config CcConfig#telemetry_sink_config}
    */
    readonly telemetrySinkConfig?: TelemetrySinkConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#tracking_config CcConfig#tracking_config}
    */
    readonly trackingConfig?: TrackingConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#uplink_echo_config CcConfig#uplink_echo_config}
    */
    readonly uplinkEchoConfig?: UplinkEchoConfigProperty;
}
export class ConfigDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._antennaDownlinkConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.antennaDownlinkConfig = this._antennaDownlinkConfig?.internalValue;
        }
        if (this._antennaDownlinkDemodDecodeConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.antennaDownlinkDemodDecodeConfig = this._antennaDownlinkDemodDecodeConfig?.internalValue;
        }
        if (this._antennaUplinkConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.antennaUplinkConfig = this._antennaUplinkConfig?.internalValue;
        }
        if (this._dataflowEndpointConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataflowEndpointConfig = this._dataflowEndpointConfig?.internalValue;
        }
        if (this._s3RecordingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3RecordingConfig = this._s3RecordingConfig?.internalValue;
        }
        if (this._telemetrySinkConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.telemetrySinkConfig = this._telemetrySinkConfig?.internalValue;
        }
        if (this._trackingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.trackingConfig = this._trackingConfig?.internalValue;
        }
        if (this._uplinkEchoConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.uplinkEchoConfig = this._uplinkEchoConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._antennaDownlinkConfig.internalValue = undefined;
            this._antennaDownlinkDemodDecodeConfig.internalValue = undefined;
            this._antennaUplinkConfig.internalValue = undefined;
            this._dataflowEndpointConfig.internalValue = undefined;
            this._s3RecordingConfig.internalValue = undefined;
            this._telemetrySinkConfig.internalValue = undefined;
            this._trackingConfig.internalValue = undefined;
            this._uplinkEchoConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._antennaDownlinkConfig.internalValue = value.antennaDownlinkConfig;
            this._antennaDownlinkDemodDecodeConfig.internalValue = value.antennaDownlinkDemodDecodeConfig;
            this._antennaUplinkConfig.internalValue = value.antennaUplinkConfig;
            this._dataflowEndpointConfig.internalValue = value.dataflowEndpointConfig;
            this._s3RecordingConfig.internalValue = value.s3RecordingConfig;
            this._telemetrySinkConfig.internalValue = value.telemetrySinkConfig;
            this._trackingConfig.internalValue = value.trackingConfig;
            this._uplinkEchoConfig.internalValue = value.uplinkEchoConfig;
        }
    }

    // antenna_downlink_config - computed: true, optional: true, required: false
    private _antennaDownlinkConfig = new AntennaDownlinkConfigPropertyOutputReference(this, "antenna_downlink_config");
    public get antennaDownlinkConfig() {
        return this._antennaDownlinkConfig;
    }
    public putAntennaDownlinkConfig(value: AntennaDownlinkConfigProperty) {
        this._antennaDownlinkConfig.internalValue = value;
    }
    public resetAntennaDownlinkConfig() {
        this._antennaDownlinkConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get antennaDownlinkConfigInput() {
        return this._antennaDownlinkConfig.internalValue;
    }

    // antenna_downlink_demod_decode_config - computed: true, optional: true, required: false
    private _antennaDownlinkDemodDecodeConfig = new AntennaDownlinkDemodDecodeConfigPropertyOutputReference(this, "antenna_downlink_demod_decode_config");
    public get antennaDownlinkDemodDecodeConfig() {
        return this._antennaDownlinkDemodDecodeConfig;
    }
    public putAntennaDownlinkDemodDecodeConfig(value: AntennaDownlinkDemodDecodeConfigProperty) {
        this._antennaDownlinkDemodDecodeConfig.internalValue = value;
    }
    public resetAntennaDownlinkDemodDecodeConfig() {
        this._antennaDownlinkDemodDecodeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get antennaDownlinkDemodDecodeConfigInput() {
        return this._antennaDownlinkDemodDecodeConfig.internalValue;
    }

    // antenna_uplink_config - computed: true, optional: true, required: false
    private _antennaUplinkConfig = new AntennaUplinkConfigPropertyOutputReference(this, "antenna_uplink_config");
    public get antennaUplinkConfig() {
        return this._antennaUplinkConfig;
    }
    public putAntennaUplinkConfig(value: AntennaUplinkConfigProperty) {
        this._antennaUplinkConfig.internalValue = value;
    }
    public resetAntennaUplinkConfig() {
        this._antennaUplinkConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get antennaUplinkConfigInput() {
        return this._antennaUplinkConfig.internalValue;
    }

    // dataflow_endpoint_config - computed: true, optional: true, required: false
    private _dataflowEndpointConfig = new DataflowEndpointConfigPropertyOutputReference(this, "dataflow_endpoint_config");
    public get dataflowEndpointConfig() {
        return this._dataflowEndpointConfig;
    }
    public putDataflowEndpointConfig(value: DataflowEndpointConfigProperty) {
        this._dataflowEndpointConfig.internalValue = value;
    }
    public resetDataflowEndpointConfig() {
        this._dataflowEndpointConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataflowEndpointConfigInput() {
        return this._dataflowEndpointConfig.internalValue;
    }

    // s3_recording_config - computed: true, optional: true, required: false
    private _s3RecordingConfig = new S3RecordingConfigPropertyOutputReference(this, "s3_recording_config");
    public get s3RecordingConfig() {
        return this._s3RecordingConfig;
    }
    public putS3RecordingConfig(value: S3RecordingConfigProperty) {
        this._s3RecordingConfig.internalValue = value;
    }
    public resetS3RecordingConfig() {
        this._s3RecordingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3RecordingConfigInput() {
        return this._s3RecordingConfig.internalValue;
    }

    // telemetry_sink_config - computed: true, optional: true, required: false
    private _telemetrySinkConfig = new TelemetrySinkConfigPropertyOutputReference(this, "telemetry_sink_config");
    public get telemetrySinkConfig() {
        return this._telemetrySinkConfig;
    }
    public putTelemetrySinkConfig(value: TelemetrySinkConfigProperty) {
        this._telemetrySinkConfig.internalValue = value;
    }
    public resetTelemetrySinkConfig() {
        this._telemetrySinkConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get telemetrySinkConfigInput() {
        return this._telemetrySinkConfig.internalValue;
    }

    // tracking_config - computed: true, optional: true, required: false
    private _trackingConfig = new TrackingConfigPropertyOutputReference(this, "tracking_config");
    public get trackingConfig() {
        return this._trackingConfig;
    }
    public putTrackingConfig(value: TrackingConfigProperty) {
        this._trackingConfig.internalValue = value;
    }
    public resetTrackingConfig() {
        this._trackingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trackingConfigInput() {
        return this._trackingConfig.internalValue;
    }

    // uplink_echo_config - computed: true, optional: true, required: false
    private _uplinkEchoConfig = new UplinkEchoConfigPropertyOutputReference(this, "uplink_echo_config");
    public get uplinkEchoConfig() {
        return this._uplinkEchoConfig;
    }
    public putUplinkEchoConfig(value: UplinkEchoConfigProperty) {
        this._uplinkEchoConfig.internalValue = value;
    }
    public resetUplinkEchoConfig() {
        this._uplinkEchoConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uplinkEchoConfigInput() {
        return this._uplinkEchoConfig.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#key CcConfig#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/groundstation_config#value CcConfig#value}
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
