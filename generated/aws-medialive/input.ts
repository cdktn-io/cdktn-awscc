// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInputProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of the destinations of the input (PUSH-type).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#destinations CcInput#destinations}
    */
    readonly destinations?: CcInput.InputDestinationRequestProperty[] | cdktn.IResolvable;
    /**
    * Settings for the input devices.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_devices CcInput#input_devices}
    */
    readonly inputDevices?: CcInput.InputDeviceSettingsProperty[] | cdktn.IResolvable;
    /**
    * The location of this input. AWS, for an input existing in the AWS Cloud, On-Prem for
    * an input in a customer network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_network_location CcInput#input_network_location}
    */
    readonly inputNetworkLocation?: string;
    /**
    * A list of security groups referenced by IDs to attach to the input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_security_groups CcInput#input_security_groups}
    */
    readonly inputSecurityGroups?: string[];
    /**
    * A list of MediaConnect Flows for this input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_connect_flows CcInput#media_connect_flows}
    */
    readonly mediaConnectFlows?: CcInput.MediaConnectFlowRequestProperty[] | cdktn.IResolvable;
    /**
    * Multicast Input settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#multicast_settings CcInput#multicast_settings}
    */
    readonly multicastSettings?: CcInput.MulticastSettingsCreateRequestProperty;
    /**
    * The user-assigned name (This is a mutable value).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#name CcInput#name}
    */
    readonly name?: string;
    /**
    * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#role_arn CcInput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Information about the MediaConnect Router association for this input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#router_settings CcInput#router_settings}
    */
    readonly routerSettings?: CcInput.RouterSettingsProperty;
    /**
    * SDI Sources for this Input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdi_sources CcInput#sdi_sources}
    */
    readonly sdiSources?: string[];
    /**
    * Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#smpte_2110_receiver_group_settings CcInput#smpte_2110_receiver_group_settings}
    */
    readonly smpte2110ReceiverGroupSettings?: CcInput.Smpte2110ReceiverGroupSettingsProperty;
    /**
    * A list of the sources of the input (PULL-type).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sources CcInput#sources}
    */
    readonly sources?: CcInput.InputSourceRequestProperty[] | cdktn.IResolvable;
    /**
    * The settings associated with an SRT input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_settings CcInput#srt_settings}
    */
    readonly srtSettings?: CcInput.SrtSettingsRequestProperty;
    /**
    * A collection of key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#tags CcInput#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The different types of inputs that AWS Elemental MediaLive supports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#type CcInput#type}
    */
    readonly type?: string;
    /**
    * Settings for a private VPC Input.
    * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
    * This property requires setting the roleArn property on Input creation.
    * Not compatible with the inputSecurityGroups property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#vpc CcInput#vpc}
    */
    readonly vpc?: CcInput.InputVpcRequestProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input awscc_medialive_input}
*/
export class CcInput extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_medialive_input";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInput resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInput to import
    * @param importFromId The id of the existing CcInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInput to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_input", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input awscc_medialive_input} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInputProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcInputProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_medialive_input',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._destinations.internalValue = config.destinations;
        this._inputDevices.internalValue = config.inputDevices;
        this._inputNetworkLocation = config.inputNetworkLocation;
        this._inputSecurityGroups = config.inputSecurityGroups;
        this._mediaConnectFlows.internalValue = config.mediaConnectFlows;
        this._multicastSettings.internalValue = config.multicastSettings;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._routerSettings.internalValue = config.routerSettings;
        this._sdiSources = config.sdiSources;
        this._smpte2110ReceiverGroupSettings.internalValue = config.smpte2110ReceiverGroupSettings;
        this._sources.internalValue = config.sources;
        this._srtSettings.internalValue = config.srtSettings;
        this._tags = config.tags;
        this._type = config.type;
        this._vpc.internalValue = config.vpc;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // attached_channels - computed: true, optional: false, required: false
    public get attachedChannels() {
        return this.getListAttribute('attached_channels');
    }

    // destination_urls - computed: true, optional: false, required: false
    public get destinationUrls() {
        return this.getListAttribute('destination_urls');
    }

    // destinations - computed: true, optional: true, required: false
    private _destinations = new CcInput.InputDestinationRequestPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: CcInput.InputDestinationRequestProperty[] | cdktn.IResolvable) {
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

    // input_class - computed: true, optional: false, required: false
    public get inputClass() {
        return this.getStringAttribute('input_class');
    }

    // input_devices - computed: true, optional: true, required: false
    private _inputDevices = new CcInput.InputDeviceSettingsPropertyList(this, "input_devices", false);
    public get inputDevices() {
        return this._inputDevices;
    }
    public putInputDevices(value: CcInput.InputDeviceSettingsProperty[] | cdktn.IResolvable) {
        this._inputDevices.internalValue = value;
    }
    public resetInputDevices() {
        this._inputDevices.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputDevicesInput() {
        return this._inputDevices.internalValue;
    }

    // input_id - computed: true, optional: false, required: false
    public get inputId() {
        return this.getStringAttribute('input_id');
    }

    // input_network_location - computed: true, optional: true, required: false
    private _inputNetworkLocation?: string; 
    public get inputNetworkLocation() {
        return this.getStringAttribute('input_network_location');
    }
    public set inputNetworkLocation(value: string) {
        this._inputNetworkLocation = value;
    }
    public resetInputNetworkLocation() {
        this._inputNetworkLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputNetworkLocationInput() {
        return this._inputNetworkLocation;
    }

    // input_partner_ids - computed: true, optional: false, required: false
    public get inputPartnerIds() {
        return this.getListAttribute('input_partner_ids');
    }

    // input_security_groups - computed: true, optional: true, required: false
    private _inputSecurityGroups?: string[]; 
    public get inputSecurityGroups() {
        return this.getListAttribute('input_security_groups');
    }
    public set inputSecurityGroups(value: string[]) {
        this._inputSecurityGroups = value;
    }
    public resetInputSecurityGroups() {
        this._inputSecurityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputSecurityGroupsInput() {
        return this._inputSecurityGroups;
    }

    // input_source_type - computed: true, optional: false, required: false
    public get inputSourceType() {
        return this.getStringAttribute('input_source_type');
    }

    // media_connect_flows - computed: true, optional: true, required: false
    private _mediaConnectFlows = new CcInput.MediaConnectFlowRequestPropertyList(this, "media_connect_flows", false);
    public get mediaConnectFlows() {
        return this._mediaConnectFlows;
    }
    public putMediaConnectFlows(value: CcInput.MediaConnectFlowRequestProperty[] | cdktn.IResolvable) {
        this._mediaConnectFlows.internalValue = value;
    }
    public resetMediaConnectFlows() {
        this._mediaConnectFlows.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaConnectFlowsInput() {
        return this._mediaConnectFlows.internalValue;
    }

    // multicast_settings - computed: true, optional: true, required: false
    private _multicastSettings = new CcInput.MulticastSettingsCreateRequestPropertyOutputReference(this, "multicast_settings");
    public get multicastSettings() {
        return this._multicastSettings;
    }
    public putMulticastSettings(value: CcInput.MulticastSettingsCreateRequestProperty) {
        this._multicastSettings.internalValue = value;
    }
    public resetMulticastSettings() {
        this._multicastSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multicastSettingsInput() {
        return this._multicastSettings.internalValue;
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

    // router_settings - computed: true, optional: true, required: false
    private _routerSettings = new CcInput.RouterSettingsPropertyOutputReference(this, "router_settings");
    public get routerSettings() {
        return this._routerSettings;
    }
    public putRouterSettings(value: CcInput.RouterSettingsProperty) {
        this._routerSettings.internalValue = value;
    }
    public resetRouterSettings() {
        this._routerSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routerSettingsInput() {
        return this._routerSettings.internalValue;
    }

    // sdi_sources - computed: true, optional: true, required: false
    private _sdiSources?: string[]; 
    public get sdiSources() {
        return this.getListAttribute('sdi_sources');
    }
    public set sdiSources(value: string[]) {
        this._sdiSources = value;
    }
    public resetSdiSources() {
        this._sdiSources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdiSourcesInput() {
        return this._sdiSources;
    }

    // security_groups - computed: true, optional: false, required: false
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }

    // smpte_2110_receiver_group_settings - computed: true, optional: true, required: false
    private _smpte2110ReceiverGroupSettings = new CcInput.Smpte2110ReceiverGroupSettingsPropertyOutputReference(this, "smpte_2110_receiver_group_settings");
    public get smpte2110ReceiverGroupSettings() {
        return this._smpte2110ReceiverGroupSettings;
    }
    public putSmpte2110ReceiverGroupSettings(value: CcInput.Smpte2110ReceiverGroupSettingsProperty) {
        this._smpte2110ReceiverGroupSettings.internalValue = value;
    }
    public resetSmpte2110ReceiverGroupSettings() {
        this._smpte2110ReceiverGroupSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smpte2110ReceiverGroupSettingsInput() {
        return this._smpte2110ReceiverGroupSettings.internalValue;
    }

    // source_urls - computed: true, optional: false, required: false
    public get sourceUrls() {
        return this.getListAttribute('source_urls');
    }

    // sources - computed: true, optional: true, required: false
    private _sources = new CcInput.InputSourceRequestPropertyList(this, "sources", false);
    public get sources() {
        return this._sources;
    }
    public putSources(value: CcInput.InputSourceRequestProperty[] | cdktn.IResolvable) {
        this._sources.internalValue = value;
    }
    public resetSources() {
        this._sources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcesInput() {
        return this._sources.internalValue;
    }

    // srt_settings - computed: true, optional: true, required: false
    private _srtSettings = new CcInput.SrtSettingsRequestPropertyOutputReference(this, "srt_settings");
    public get srtSettings() {
        return this._srtSettings;
    }
    public putSrtSettings(value: CcInput.SrtSettingsRequestProperty) {
        this._srtSettings.internalValue = value;
    }
    public resetSrtSettings() {
        this._srtSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get srtSettingsInput() {
        return this._srtSettings.internalValue;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
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

    // vpc - computed: true, optional: true, required: false
    private _vpc = new CcInput.InputVpcRequestPropertyOutputReference(this, "vpc");
    public get vpc() {
        return this._vpc;
    }
    public putVpc(value: CcInput.InputVpcRequestProperty) {
        this._vpc.internalValue = value;
    }
    public resetVpc() {
        this._vpc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
        return this._vpc.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            destinations: cdktn.listMapper(ccInputInputDestinationRequestPropertyToTerraform, false)(this._destinations.internalValue),
            input_devices: cdktn.listMapper(ccInputInputDeviceSettingsPropertyToTerraform, false)(this._inputDevices.internalValue),
            input_network_location: cdktn.stringToTerraform(this._inputNetworkLocation),
            input_security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._inputSecurityGroups),
            media_connect_flows: cdktn.listMapper(ccInputMediaConnectFlowRequestPropertyToTerraform, false)(this._mediaConnectFlows.internalValue),
            multicast_settings: ccInputMulticastSettingsCreateRequestPropertyToTerraform(this._multicastSettings.internalValue),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            router_settings: ccInputRouterSettingsPropertyToTerraform(this._routerSettings.internalValue),
            sdi_sources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sdiSources),
            smpte_2110_receiver_group_settings: ccInputSmpte2110ReceiverGroupSettingsPropertyToTerraform(this._smpte2110ReceiverGroupSettings.internalValue),
            sources: cdktn.listMapper(ccInputInputSourceRequestPropertyToTerraform, false)(this._sources.internalValue),
            srt_settings: ccInputSrtSettingsRequestPropertyToTerraform(this._srtSettings.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            type: cdktn.stringToTerraform(this._type),
            vpc: ccInputInputVpcRequestPropertyToTerraform(this._vpc.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            destinations: {
                value: cdktn.listMapperHcl(ccInputInputDestinationRequestPropertyToHclTerraform, false)(this._destinations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInput.InputDestinationRequestPropertyList",
            },
            input_devices: {
                value: cdktn.listMapperHcl(ccInputInputDeviceSettingsPropertyToHclTerraform, false)(this._inputDevices.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInput.InputDeviceSettingsPropertyList",
            },
            input_network_location: {
                value: cdktn.stringToHclTerraform(this._inputNetworkLocation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            input_security_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._inputSecurityGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            media_connect_flows: {
                value: cdktn.listMapperHcl(ccInputMediaConnectFlowRequestPropertyToHclTerraform, false)(this._mediaConnectFlows.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInput.MediaConnectFlowRequestPropertyList",
            },
            multicast_settings: {
                value: ccInputMulticastSettingsCreateRequestPropertyToHclTerraform(this._multicastSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInput.MulticastSettingsCreateRequestProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            router_settings: {
                value: ccInputRouterSettingsPropertyToHclTerraform(this._routerSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInput.RouterSettingsProperty",
            },
            sdi_sources: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sdiSources),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            smpte_2110_receiver_group_settings: {
                value: ccInputSmpte2110ReceiverGroupSettingsPropertyToHclTerraform(this._smpte2110ReceiverGroupSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInput.Smpte2110ReceiverGroupSettingsProperty",
            },
            sources: {
                value: cdktn.listMapperHcl(ccInputInputSourceRequestPropertyToHclTerraform, false)(this._sources.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInput.InputSourceRequestPropertyList",
            },
            srt_settings: {
                value: ccInputSrtSettingsRequestPropertyToHclTerraform(this._srtSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInput.SrtSettingsRequestProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc: {
                value: ccInputInputVpcRequestPropertyToHclTerraform(this._vpc.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInput.InputVpcRequestProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInputInputRequestDestinationRoutePropertyToTerraform(struct?: CcInput.InputRequestDestinationRouteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
        gateway: cdktn.stringToTerraform(struct!.gateway),
    }
}


export function ccInputInputRequestDestinationRoutePropertyToHclTerraform(struct?: CcInput.InputRequestDestinationRouteProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        gateway: {
            value: cdktn.stringToHclTerraform(struct!.gateway),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputVpcPropertyToTerraform(struct?: CcInput.VpcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        network_interface_id: cdktn.stringToTerraform(struct!.networkInterfaceId),
    }
}


export function ccInputVpcPropertyToHclTerraform(struct?: CcInput.VpcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_interface_id: {
            value: cdktn.stringToHclTerraform(struct!.networkInterfaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputInputDestinationRequestPropertyToTerraform(struct?: CcInput.InputDestinationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip: cdktn.stringToTerraform(struct!.ip),
        network: cdktn.stringToTerraform(struct!.network),
        network_routes: cdktn.listMapper(ccInputInputRequestDestinationRoutePropertyToTerraform, false)(struct!.networkRoutes),
        port: cdktn.stringToTerraform(struct!.port),
        static_ip_address: cdktn.stringToTerraform(struct!.staticIpAddress),
        stream_name: cdktn.stringToTerraform(struct!.streamName),
        url: cdktn.stringToTerraform(struct!.url),
        vpc: ccInputVpcPropertyToTerraform(struct!.vpc),
    }
}


export function ccInputInputDestinationRequestPropertyToHclTerraform(struct?: CcInput.InputDestinationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip: {
            value: cdktn.stringToHclTerraform(struct!.ip),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network: {
            value: cdktn.stringToHclTerraform(struct!.network),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_routes: {
            value: cdktn.listMapperHcl(ccInputInputRequestDestinationRoutePropertyToHclTerraform, false)(struct!.networkRoutes),
            isBlock: true,
            type: "list",
            storageClassType: "InputRequestDestinationRoutePropertyList",
        },
        port: {
            value: cdktn.stringToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        static_ip_address: {
            value: cdktn.stringToHclTerraform(struct!.staticIpAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stream_name: {
            value: cdktn.stringToHclTerraform(struct!.streamName),
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
        vpc: {
            value: ccInputVpcPropertyToHclTerraform(struct!.vpc),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputInputDeviceSettingsPropertyToTerraform(struct?: CcInput.InputDeviceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.stringToTerraform(struct!.id),
    }
}


export function ccInputInputDeviceSettingsPropertyToHclTerraform(struct?: CcInput.InputDeviceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputMediaConnectFlowRequestPropertyToTerraform(struct?: CcInput.MediaConnectFlowRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        flow_arn: cdktn.stringToTerraform(struct!.flowArn),
    }
}


export function ccInputMediaConnectFlowRequestPropertyToHclTerraform(struct?: CcInput.MediaConnectFlowRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        flow_arn: {
            value: cdktn.stringToHclTerraform(struct!.flowArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputMulticastSourceCreateRequestPropertyToTerraform(struct?: CcInput.MulticastSourceCreateRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_ip: cdktn.stringToTerraform(struct!.sourceIp),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccInputMulticastSourceCreateRequestPropertyToHclTerraform(struct?: CcInput.MulticastSourceCreateRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_ip: {
            value: cdktn.stringToHclTerraform(struct!.sourceIp),
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


export function ccInputMulticastSettingsCreateRequestPropertyToTerraform(struct?: CcInput.MulticastSettingsCreateRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sources: cdktn.listMapper(ccInputMulticastSourceCreateRequestPropertyToTerraform, false)(struct!.sources),
    }
}


export function ccInputMulticastSettingsCreateRequestPropertyToHclTerraform(struct?: CcInput.MulticastSettingsCreateRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sources: {
            value: cdktn.listMapperHcl(ccInputMulticastSourceCreateRequestPropertyToHclTerraform, false)(struct!.sources),
            isBlock: true,
            type: "list",
            storageClassType: "MulticastSourceCreateRequestPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputRouterDestinationSettingsPropertyToTerraform(struct?: CcInput.RouterDestinationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone_name: cdktn.stringToTerraform(struct!.availabilityZoneName),
        router_output_arn: cdktn.stringToTerraform(struct!.routerOutputArn),
    }
}


export function ccInputRouterDestinationSettingsPropertyToHclTerraform(struct?: CcInput.RouterDestinationSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone_name: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZoneName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        router_output_arn: {
            value: cdktn.stringToHclTerraform(struct!.routerOutputArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputRouterSettingsPropertyToTerraform(struct?: CcInput.RouterSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destinations: cdktn.listMapper(ccInputRouterDestinationSettingsPropertyToTerraform, false)(struct!.destinations),
        encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccInputRouterSettingsPropertyToHclTerraform(struct?: CcInput.RouterSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destinations: {
            value: cdktn.listMapperHcl(ccInputRouterDestinationSettingsPropertyToHclTerraform, false)(struct!.destinations),
            isBlock: true,
            type: "list",
            storageClassType: "RouterDestinationSettingsPropertyList",
        },
        encryption_type: {
            value: cdktn.stringToHclTerraform(struct!.encryptionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputInputSdpLocationPropertyToTerraform(struct?: CcInput.InputSdpLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        media_index: cdktn.numberToTerraform(struct!.mediaIndex),
        sdp_url: cdktn.stringToTerraform(struct!.sdpUrl),
    }
}


export function ccInputInputSdpLocationPropertyToHclTerraform(struct?: CcInput.InputSdpLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        media_index: {
            value: cdktn.numberToHclTerraform(struct!.mediaIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sdp_url: {
            value: cdktn.stringToHclTerraform(struct!.sdpUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputAudioSdpsPropertyToTerraform(struct?: CcInput.AudioSdpsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        media_index: cdktn.numberToTerraform(struct!.mediaIndex),
        sdp_url: cdktn.stringToTerraform(struct!.sdpUrl),
    }
}


export function ccInputAudioSdpsPropertyToHclTerraform(struct?: CcInput.AudioSdpsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        media_index: {
            value: cdktn.numberToHclTerraform(struct!.mediaIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sdp_url: {
            value: cdktn.stringToHclTerraform(struct!.sdpUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputVideoSdpPropertyToTerraform(struct?: CcInput.VideoSdpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        media_index: cdktn.numberToTerraform(struct!.mediaIndex),
        sdp_url: cdktn.stringToTerraform(struct!.sdpUrl),
    }
}


export function ccInputVideoSdpPropertyToHclTerraform(struct?: CcInput.VideoSdpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        media_index: {
            value: cdktn.numberToHclTerraform(struct!.mediaIndex),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        sdp_url: {
            value: cdktn.stringToHclTerraform(struct!.sdpUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputSmpte2110ReceiverGroupSdpSettingsPropertyToTerraform(struct?: CcInput.Smpte2110ReceiverGroupSdpSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ancillary_sdps: cdktn.listMapper(ccInputInputSdpLocationPropertyToTerraform, false)(struct!.ancillarySdps),
        audio_sdps: cdktn.listMapper(ccInputAudioSdpsPropertyToTerraform, false)(struct!.audioSdps),
        video_sdp: ccInputVideoSdpPropertyToTerraform(struct!.videoSdp),
    }
}


export function ccInputSmpte2110ReceiverGroupSdpSettingsPropertyToHclTerraform(struct?: CcInput.Smpte2110ReceiverGroupSdpSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ancillary_sdps: {
            value: cdktn.listMapperHcl(ccInputInputSdpLocationPropertyToHclTerraform, false)(struct!.ancillarySdps),
            isBlock: true,
            type: "list",
            storageClassType: "InputSdpLocationPropertyList",
        },
        audio_sdps: {
            value: cdktn.listMapperHcl(ccInputAudioSdpsPropertyToHclTerraform, false)(struct!.audioSdps),
            isBlock: true,
            type: "list",
            storageClassType: "AudioSdpsPropertyList",
        },
        video_sdp: {
            value: ccInputVideoSdpPropertyToHclTerraform(struct!.videoSdp),
            isBlock: true,
            type: "struct",
            storageClassType: "VideoSdpProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputSmpte2110ReceiverGroupPropertyToTerraform(struct?: CcInput.Smpte2110ReceiverGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sdp_settings: ccInputSmpte2110ReceiverGroupSdpSettingsPropertyToTerraform(struct!.sdpSettings),
    }
}


export function ccInputSmpte2110ReceiverGroupPropertyToHclTerraform(struct?: CcInput.Smpte2110ReceiverGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sdp_settings: {
            value: ccInputSmpte2110ReceiverGroupSdpSettingsPropertyToHclTerraform(struct!.sdpSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "Smpte2110ReceiverGroupSdpSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputSmpte2110ReceiverGroupSettingsPropertyToTerraform(struct?: CcInput.Smpte2110ReceiverGroupSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        smpte_2110_receiver_groups: cdktn.listMapper(ccInputSmpte2110ReceiverGroupPropertyToTerraform, false)(struct!.smpte2110ReceiverGroups),
    }
}


export function ccInputSmpte2110ReceiverGroupSettingsPropertyToHclTerraform(struct?: CcInput.Smpte2110ReceiverGroupSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        smpte_2110_receiver_groups: {
            value: cdktn.listMapperHcl(ccInputSmpte2110ReceiverGroupPropertyToHclTerraform, false)(struct!.smpte2110ReceiverGroups),
            isBlock: true,
            type: "list",
            storageClassType: "Smpte2110ReceiverGroupPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputInputSourceRequestPropertyToTerraform(struct?: CcInput.InputSourceRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password_param: cdktn.stringToTerraform(struct!.passwordParam),
        url: cdktn.stringToTerraform(struct!.url),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccInputInputSourceRequestPropertyToHclTerraform(struct?: CcInput.InputSourceRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password_param: {
            value: cdktn.stringToHclTerraform(struct!.passwordParam),
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
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputSrtCallerDecryptionRequestPropertyToTerraform(struct?: CcInput.SrtCallerDecryptionRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        algorithm: cdktn.stringToTerraform(struct!.algorithm),
        passphrase_secret_arn: cdktn.stringToTerraform(struct!.passphraseSecretArn),
    }
}


export function ccInputSrtCallerDecryptionRequestPropertyToHclTerraform(struct?: CcInput.SrtCallerDecryptionRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        algorithm: {
            value: cdktn.stringToHclTerraform(struct!.algorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        passphrase_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.passphraseSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputSrtCallerSourceRequestPropertyToTerraform(struct?: CcInput.SrtCallerSourceRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        decryption: ccInputSrtCallerDecryptionRequestPropertyToTerraform(struct!.decryption),
        minimum_latency: cdktn.numberToTerraform(struct!.minimumLatency),
        srt_listener_address: cdktn.stringToTerraform(struct!.srtListenerAddress),
        srt_listener_port: cdktn.stringToTerraform(struct!.srtListenerPort),
        stream_id: cdktn.stringToTerraform(struct!.streamId),
    }
}


export function ccInputSrtCallerSourceRequestPropertyToHclTerraform(struct?: CcInput.SrtCallerSourceRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        decryption: {
            value: ccInputSrtCallerDecryptionRequestPropertyToHclTerraform(struct!.decryption),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtCallerDecryptionRequestProperty",
        },
        minimum_latency: {
            value: cdktn.numberToHclTerraform(struct!.minimumLatency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        srt_listener_address: {
            value: cdktn.stringToHclTerraform(struct!.srtListenerAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        srt_listener_port: {
            value: cdktn.stringToHclTerraform(struct!.srtListenerPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stream_id: {
            value: cdktn.stringToHclTerraform(struct!.streamId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputSrtListenerDecryptionRequestPropertyToTerraform(struct?: CcInput.SrtListenerDecryptionRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        algorithm: cdktn.stringToTerraform(struct!.algorithm),
        passphrase_secret_arn: cdktn.stringToTerraform(struct!.passphraseSecretArn),
    }
}


export function ccInputSrtListenerDecryptionRequestPropertyToHclTerraform(struct?: CcInput.SrtListenerDecryptionRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        algorithm: {
            value: cdktn.stringToHclTerraform(struct!.algorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        passphrase_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.passphraseSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputSrtListenerSettingsRequestPropertyToTerraform(struct?: CcInput.SrtListenerSettingsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        decryption: ccInputSrtListenerDecryptionRequestPropertyToTerraform(struct!.decryption),
        minimum_latency: cdktn.numberToTerraform(struct!.minimumLatency),
        stream_id: cdktn.stringToTerraform(struct!.streamId),
    }
}


export function ccInputSrtListenerSettingsRequestPropertyToHclTerraform(struct?: CcInput.SrtListenerSettingsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        decryption: {
            value: ccInputSrtListenerDecryptionRequestPropertyToHclTerraform(struct!.decryption),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtListenerDecryptionRequestProperty",
        },
        minimum_latency: {
            value: cdktn.numberToHclTerraform(struct!.minimumLatency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stream_id: {
            value: cdktn.stringToHclTerraform(struct!.streamId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputSrtSettingsRequestPropertyToTerraform(struct?: CcInput.SrtSettingsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        srt_caller_sources: cdktn.listMapper(ccInputSrtCallerSourceRequestPropertyToTerraform, false)(struct!.srtCallerSources),
        srt_listener_settings: ccInputSrtListenerSettingsRequestPropertyToTerraform(struct!.srtListenerSettings),
    }
}


export function ccInputSrtSettingsRequestPropertyToHclTerraform(struct?: CcInput.SrtSettingsRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        srt_caller_sources: {
            value: cdktn.listMapperHcl(ccInputSrtCallerSourceRequestPropertyToHclTerraform, false)(struct!.srtCallerSources),
            isBlock: true,
            type: "list",
            storageClassType: "SrtCallerSourceRequestPropertyList",
        },
        srt_listener_settings: {
            value: ccInputSrtListenerSettingsRequestPropertyToHclTerraform(struct!.srtListenerSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "SrtListenerSettingsRequestProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInputInputVpcRequestPropertyToTerraform(struct?: CcInput.InputVpcRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccInputInputVpcRequestPropertyToHclTerraform(struct?: CcInput.InputVpcRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcInput {
export interface InputRequestDestinationRouteProperty {
    /**
    * The CIDR of the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#cidr CcInput#cidr}
    */
    readonly cidr?: string;
    /**
    * An optional gateway for the route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#gateway CcInput#gateway}
    */
    readonly gateway?: string;
}
export class InputRequestDestinationRoutePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InputRequestDestinationRouteProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        if (this._gateway !== undefined) {
            hasAnyValues = true;
            internalValueResult.gateway = this._gateway;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputRequestDestinationRouteProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
            this._gateway = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
            this._gateway = value.gateway;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }

    // gateway - computed: true, optional: true, required: false
    private _gateway?: string; 
    public get gateway() {
        return this.getStringAttribute('gateway');
    }
    public set gateway(value: string) {
        this._gateway = value;
    }
    public resetGateway() {
        this._gateway = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayInput() {
        return this._gateway;
    }
}

export class InputRequestDestinationRoutePropertyList extends cdktn.ComplexList {
    public internalValue? : InputRequestDestinationRouteProperty[] | cdktn.IResolvable

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
    public get(index: number): InputRequestDestinationRoutePropertyOutputReference {
        return new InputRequestDestinationRoutePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VpcProperty {
    /**
    * The availability zone of the Input destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#availability_zone CcInput#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The network interface ID of the Input destination in the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network_interface_id CcInput#network_interface_id}
    */
    readonly networkInterfaceId?: string;
}
export class VpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._networkInterfaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkInterfaceId = this._networkInterfaceId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._networkInterfaceId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZone = value.availabilityZone;
            this._networkInterfaceId = value.networkInterfaceId;
        }
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // network_interface_id - computed: true, optional: true, required: false
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
        this._networkInterfaceId = value;
    }
    public resetNetworkInterfaceId() {
        this._networkInterfaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }
}
export interface InputDestinationRequestProperty {
    /**
    * The system-generated static IP address of endpoint.
    * It remains fixed for the lifetime of the input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#ip CcInput#ip}
    */
    readonly ip?: string;
    /**
    * The ID of the attached network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network CcInput#network}
    */
    readonly network?: string;
    /**
    * If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input
    * is going to be on the customer local network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network_routes CcInput#network_routes}
    */
    readonly networkRoutes?: InputRequestDestinationRouteProperty[] | cdktn.IResolvable;
    /**
    * The port number for the input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#port CcInput#port}
    */
    readonly port?: string;
    /**
    * The static IP address for the input destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#static_ip_address CcInput#static_ip_address}
    */
    readonly staticIpAddress?: string;
    /**
    * The stream name for the input destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_name CcInput#stream_name}
    */
    readonly streamName?: string;
    /**
    * This represents the endpoint that the customer stream will be
    * pushed to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url CcInput#url}
    */
    readonly url?: string;
    /**
    * The properties for a VPC type input destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#vpc CcInput#vpc}
    */
    readonly vpc?: VpcProperty;
}
export class InputDestinationRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InputDestinationRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ip !== undefined) {
            hasAnyValues = true;
            internalValueResult.ip = this._ip;
        }
        if (this._network !== undefined) {
            hasAnyValues = true;
            internalValueResult.network = this._network;
        }
        if (this._networkRoutes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkRoutes = this._networkRoutes?.internalValue;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._staticIpAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.staticIpAddress = this._staticIpAddress;
        }
        if (this._streamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamName = this._streamName;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        if (this._vpc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpc = this._vpc?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputDestinationRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ip = undefined;
            this._network = undefined;
            this._networkRoutes.internalValue = undefined;
            this._port = undefined;
            this._staticIpAddress = undefined;
            this._streamName = undefined;
            this._url = undefined;
            this._vpc.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ip = value.ip;
            this._network = value.network;
            this._networkRoutes.internalValue = value.networkRoutes;
            this._port = value.port;
            this._staticIpAddress = value.staticIpAddress;
            this._streamName = value.streamName;
            this._url = value.url;
            this._vpc.internalValue = value.vpc;
        }
    }

    // ip - computed: true, optional: true, required: false
    private _ip?: string; 
    public get ip() {
        return this.getStringAttribute('ip');
    }
    public set ip(value: string) {
        this._ip = value;
    }
    public resetIp() {
        this._ip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipInput() {
        return this._ip;
    }

    // network - computed: true, optional: true, required: false
    private _network?: string; 
    public get network() {
        return this.getStringAttribute('network');
    }
    public set network(value: string) {
        this._network = value;
    }
    public resetNetwork() {
        this._network = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInput() {
        return this._network;
    }

    // network_routes - computed: true, optional: true, required: false
    private _networkRoutes = new InputRequestDestinationRoutePropertyList(this, "network_routes", false);
    public get networkRoutes() {
        return this._networkRoutes;
    }
    public putNetworkRoutes(value: InputRequestDestinationRouteProperty[] | cdktn.IResolvable) {
        this._networkRoutes.internalValue = value;
    }
    public resetNetworkRoutes() {
        this._networkRoutes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkRoutesInput() {
        return this._networkRoutes.internalValue;
    }

    // port - computed: true, optional: true, required: false
    private _port?: string; 
    public get port() {
        return this.getStringAttribute('port');
    }
    public set port(value: string) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // static_ip_address - computed: true, optional: true, required: false
    private _staticIpAddress?: string; 
    public get staticIpAddress() {
        return this.getStringAttribute('static_ip_address');
    }
    public set staticIpAddress(value: string) {
        this._staticIpAddress = value;
    }
    public resetStaticIpAddress() {
        this._staticIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get staticIpAddressInput() {
        return this._staticIpAddress;
    }

    // stream_name - computed: true, optional: true, required: false
    private _streamName?: string; 
    public get streamName() {
        return this.getStringAttribute('stream_name');
    }
    public set streamName(value: string) {
        this._streamName = value;
    }
    public resetStreamName() {
        this._streamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamNameInput() {
        return this._streamName;
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

    // vpc - computed: true, optional: true, required: false
    private _vpc = new VpcPropertyOutputReference(this, "vpc");
    public get vpc() {
        return this._vpc;
    }
    public putVpc(value: VpcProperty) {
        this._vpc.internalValue = value;
    }
    public resetVpc() {
        this._vpc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
        return this._vpc.internalValue;
    }
}

export class InputDestinationRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : InputDestinationRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): InputDestinationRequestPropertyOutputReference {
        return new InputDestinationRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InputDeviceSettingsProperty {
    /**
    * The unique ID for the device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#id CcInput#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export class InputDeviceSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InputDeviceSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputDeviceSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
        }
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }
}

export class InputDeviceSettingsPropertyList extends cdktn.ComplexList {
    public internalValue? : InputDeviceSettingsProperty[] | cdktn.IResolvable

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
    public get(index: number): InputDeviceSettingsPropertyOutputReference {
        return new InputDeviceSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MediaConnectFlowRequestProperty {
    /**
    * The unique ARN of the MediaConnect Flow being used as a source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#flow_arn CcInput#flow_arn}
    */
    readonly flowArn?: string;
}
export class MediaConnectFlowRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MediaConnectFlowRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._flowArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowArn = this._flowArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaConnectFlowRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flowArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flowArn = value.flowArn;
        }
    }

    // flow_arn - computed: true, optional: true, required: false
    private _flowArn?: string; 
    public get flowArn() {
        return this.getStringAttribute('flow_arn');
    }
    public set flowArn(value: string) {
        this._flowArn = value;
    }
    public resetFlowArn() {
        this._flowArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowArnInput() {
        return this._flowArn;
    }
}

export class MediaConnectFlowRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : MediaConnectFlowRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): MediaConnectFlowRequestPropertyOutputReference {
        return new MediaConnectFlowRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MulticastSourceCreateRequestProperty {
    /**
    * This represents the ip address of the device sending the multicast stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#source_ip CcInput#source_ip}
    */
    readonly sourceIp?: string;
    /**
    * This represents the customer's source URL where multicast stream is pulled from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url CcInput#url}
    */
    readonly url?: string;
}
export class MulticastSourceCreateRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MulticastSourceCreateRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceIp = this._sourceIp;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MulticastSourceCreateRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceIp = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceIp = value.sourceIp;
            this._url = value.url;
        }
    }

    // source_ip - computed: true, optional: true, required: false
    private _sourceIp?: string; 
    public get sourceIp() {
        return this.getStringAttribute('source_ip');
    }
    public set sourceIp(value: string) {
        this._sourceIp = value;
    }
    public resetSourceIp() {
        this._sourceIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceIpInput() {
        return this._sourceIp;
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

export class MulticastSourceCreateRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : MulticastSourceCreateRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): MulticastSourceCreateRequestPropertyOutputReference {
        return new MulticastSourceCreateRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MulticastSettingsCreateRequestProperty {
    /**
    * Placeholder documentation for __listOfMulticastSource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sources CcInput#sources}
    */
    readonly sources?: MulticastSourceCreateRequestProperty[] | cdktn.IResolvable;
}
export class MulticastSettingsCreateRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MulticastSettingsCreateRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sources = this._sources?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MulticastSettingsCreateRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sources.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sources.internalValue = value.sources;
        }
    }

    // sources - computed: true, optional: true, required: false
    private _sources = new MulticastSourceCreateRequestPropertyList(this, "sources", false);
    public get sources() {
        return this._sources;
    }
    public putSources(value: MulticastSourceCreateRequestProperty[] | cdktn.IResolvable) {
        this._sources.internalValue = value;
    }
    public resetSources() {
        this._sources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcesInput() {
        return this._sources.internalValue;
    }
}
export interface RouterDestinationSettingsProperty {
    /**
    * The Availability Zone (AZ) name this destination is created in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#availability_zone_name CcInput#availability_zone_name}
    */
    readonly availabilityZoneName?: string;
    /**
    * The ARN of the MediaConnect Router output currently connected to this input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#router_output_arn CcInput#router_output_arn}
    */
    readonly routerOutputArn?: string;
}
export class RouterDestinationSettingsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RouterDestinationSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZoneName !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZoneName = this._availabilityZoneName;
        }
        if (this._routerOutputArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.routerOutputArn = this._routerOutputArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouterDestinationSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZoneName = undefined;
            this._routerOutputArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZoneName = value.availabilityZoneName;
            this._routerOutputArn = value.routerOutputArn;
        }
    }

    // availability_zone_name - computed: true, optional: true, required: false
    private _availabilityZoneName?: string; 
    public get availabilityZoneName() {
        return this.getStringAttribute('availability_zone_name');
    }
    public set availabilityZoneName(value: string) {
        this._availabilityZoneName = value;
    }
    public resetAvailabilityZoneName() {
        this._availabilityZoneName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneNameInput() {
        return this._availabilityZoneName;
    }

    // router_output_arn - computed: true, optional: true, required: false
    private _routerOutputArn?: string; 
    public get routerOutputArn() {
        return this.getStringAttribute('router_output_arn');
    }
    public set routerOutputArn(value: string) {
        this._routerOutputArn = value;
    }
    public resetRouterOutputArn() {
        this._routerOutputArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routerOutputArnInput() {
        return this._routerOutputArn;
    }
}

export class RouterDestinationSettingsPropertyList extends cdktn.ComplexList {
    public internalValue? : RouterDestinationSettingsProperty[] | cdktn.IResolvable

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
    public get(index: number): RouterDestinationSettingsPropertyOutputReference {
        return new RouterDestinationSettingsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RouterSettingsProperty {
    /**
    * MediaConnect Router destinations associated with this input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#destinations CcInput#destinations}
    */
    readonly destinations?: RouterDestinationSettingsProperty[] | cdktn.IResolvable;
    /**
    * Encryption configuration for the MediaConnect Router association. AUTOMATIC uses a service-managed secret; SECRETS_MANAGER requires SecretArn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#encryption_type CcInput#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * The ARN of the Secrets Manager secret used to encrypt this input. Required when EncryptionType is SECRETS_MANAGER.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#secret_arn CcInput#secret_arn}
    */
    readonly secretArn?: string;
}
export class RouterSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RouterSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinations = this._destinations?.internalValue;
        }
        if (this._encryptionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionType = this._encryptionType;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RouterSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinations.internalValue = undefined;
            this._encryptionType = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinations.internalValue = value.destinations;
            this._encryptionType = value.encryptionType;
            this._secretArn = value.secretArn;
        }
    }

    // destinations - computed: true, optional: true, required: false
    private _destinations = new RouterDestinationSettingsPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: RouterDestinationSettingsProperty[] | cdktn.IResolvable) {
        this._destinations.internalValue = value;
    }
    public resetDestinations() {
        this._destinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
        return this._destinations.internalValue;
    }

    // encryption_type - computed: true, optional: true, required: false
    private _encryptionType?: string; 
    public get encryptionType() {
        return this.getStringAttribute('encryption_type');
    }
    public set encryptionType(value: string) {
        this._encryptionType = value;
    }
    public resetEncryptionType() {
        this._encryptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionTypeInput() {
        return this._encryptionType;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }
}
export interface InputSdpLocationProperty {
    /**
    * The index of the media stream in the SDP file for one SMPTE 2110 stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index CcInput#media_index}
    */
    readonly mediaIndex?: number;
    /**
    * The URL of the SDP file for one SMPTE 2110 stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url CcInput#sdp_url}
    */
    readonly sdpUrl?: string;
}
export class InputSdpLocationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InputSdpLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mediaIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaIndex = this._mediaIndex;
        }
        if (this._sdpUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.sdpUrl = this._sdpUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputSdpLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mediaIndex = undefined;
            this._sdpUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mediaIndex = value.mediaIndex;
            this._sdpUrl = value.sdpUrl;
        }
    }

    // media_index - computed: true, optional: true, required: false
    private _mediaIndex?: number; 
    public get mediaIndex() {
        return this.getNumberAttribute('media_index');
    }
    public set mediaIndex(value: number) {
        this._mediaIndex = value;
    }
    public resetMediaIndex() {
        this._mediaIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaIndexInput() {
        return this._mediaIndex;
    }

    // sdp_url - computed: true, optional: true, required: false
    private _sdpUrl?: string; 
    public get sdpUrl() {
        return this.getStringAttribute('sdp_url');
    }
    public set sdpUrl(value: string) {
        this._sdpUrl = value;
    }
    public resetSdpUrl() {
        this._sdpUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdpUrlInput() {
        return this._sdpUrl;
    }
}

export class InputSdpLocationPropertyList extends cdktn.ComplexList {
    public internalValue? : InputSdpLocationProperty[] | cdktn.IResolvable

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
    public get(index: number): InputSdpLocationPropertyOutputReference {
        return new InputSdpLocationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AudioSdpsProperty {
    /**
    * The index of the media stream in the SDP file for one SMPTE 2110 stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index CcInput#media_index}
    */
    readonly mediaIndex?: number;
    /**
    * The URL of the SDP file for one SMPTE 2110 stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url CcInput#sdp_url}
    */
    readonly sdpUrl?: string;
}
export class AudioSdpsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AudioSdpsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mediaIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaIndex = this._mediaIndex;
        }
        if (this._sdpUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.sdpUrl = this._sdpUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AudioSdpsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mediaIndex = undefined;
            this._sdpUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mediaIndex = value.mediaIndex;
            this._sdpUrl = value.sdpUrl;
        }
    }

    // media_index - computed: true, optional: true, required: false
    private _mediaIndex?: number; 
    public get mediaIndex() {
        return this.getNumberAttribute('media_index');
    }
    public set mediaIndex(value: number) {
        this._mediaIndex = value;
    }
    public resetMediaIndex() {
        this._mediaIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaIndexInput() {
        return this._mediaIndex;
    }

    // sdp_url - computed: true, optional: true, required: false
    private _sdpUrl?: string; 
    public get sdpUrl() {
        return this.getStringAttribute('sdp_url');
    }
    public set sdpUrl(value: string) {
        this._sdpUrl = value;
    }
    public resetSdpUrl() {
        this._sdpUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdpUrlInput() {
        return this._sdpUrl;
    }
}

export class AudioSdpsPropertyList extends cdktn.ComplexList {
    public internalValue? : AudioSdpsProperty[] | cdktn.IResolvable

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
    public get(index: number): AudioSdpsPropertyOutputReference {
        return new AudioSdpsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VideoSdpProperty {
    /**
    * The index of the media stream in the SDP file for one SMPTE 2110 stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index CcInput#media_index}
    */
    readonly mediaIndex?: number;
    /**
    * The URL of the SDP file for one SMPTE 2110 stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url CcInput#sdp_url}
    */
    readonly sdpUrl?: string;
}
export class VideoSdpPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VideoSdpProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mediaIndex !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaIndex = this._mediaIndex;
        }
        if (this._sdpUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.sdpUrl = this._sdpUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VideoSdpProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mediaIndex = undefined;
            this._sdpUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mediaIndex = value.mediaIndex;
            this._sdpUrl = value.sdpUrl;
        }
    }

    // media_index - computed: true, optional: true, required: false
    private _mediaIndex?: number; 
    public get mediaIndex() {
        return this.getNumberAttribute('media_index');
    }
    public set mediaIndex(value: number) {
        this._mediaIndex = value;
    }
    public resetMediaIndex() {
        this._mediaIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaIndexInput() {
        return this._mediaIndex;
    }

    // sdp_url - computed: true, optional: true, required: false
    private _sdpUrl?: string; 
    public get sdpUrl() {
        return this.getStringAttribute('sdp_url');
    }
    public set sdpUrl(value: string) {
        this._sdpUrl = value;
    }
    public resetSdpUrl() {
        this._sdpUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdpUrlInput() {
        return this._sdpUrl;
    }
}
export interface Smpte2110ReceiverGroupSdpSettingsProperty {
    /**
    * A list of InputSdpLocations. Each item in the list specifies the SDP file and index for one ancillary SMPTE 2110 stream.
    * Each stream encapsulates one captions stream (out of any number you can include) or the single SCTE 35 stream that you can include.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#ancillary_sdps CcInput#ancillary_sdps}
    */
    readonly ancillarySdps?: InputSdpLocationProperty[] | cdktn.IResolvable;
    /**
    * A list of InputSdpLocations. Each item in the list specifies the SDP file and index for one audio SMPTE 2110 stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#audio_sdps CcInput#audio_sdps}
    */
    readonly audioSdps?: AudioSdpsProperty[] | cdktn.IResolvable;
    /**
    * The InputSdpLocation that specifies the SDP file and index for the single video SMPTE 2110 stream for this 2110 input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#video_sdp CcInput#video_sdp}
    */
    readonly videoSdp?: VideoSdpProperty;
}
export class Smpte2110ReceiverGroupSdpSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Smpte2110ReceiverGroupSdpSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ancillarySdps?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ancillarySdps = this._ancillarySdps?.internalValue;
        }
        if (this._audioSdps?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.audioSdps = this._audioSdps?.internalValue;
        }
        if (this._videoSdp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.videoSdp = this._videoSdp?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Smpte2110ReceiverGroupSdpSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ancillarySdps.internalValue = undefined;
            this._audioSdps.internalValue = undefined;
            this._videoSdp.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ancillarySdps.internalValue = value.ancillarySdps;
            this._audioSdps.internalValue = value.audioSdps;
            this._videoSdp.internalValue = value.videoSdp;
        }
    }

    // ancillary_sdps - computed: true, optional: true, required: false
    private _ancillarySdps = new InputSdpLocationPropertyList(this, "ancillary_sdps", false);
    public get ancillarySdps() {
        return this._ancillarySdps;
    }
    public putAncillarySdps(value: InputSdpLocationProperty[] | cdktn.IResolvable) {
        this._ancillarySdps.internalValue = value;
    }
    public resetAncillarySdps() {
        this._ancillarySdps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ancillarySdpsInput() {
        return this._ancillarySdps.internalValue;
    }

    // audio_sdps - computed: true, optional: true, required: false
    private _audioSdps = new AudioSdpsPropertyList(this, "audio_sdps", false);
    public get audioSdps() {
        return this._audioSdps;
    }
    public putAudioSdps(value: AudioSdpsProperty[] | cdktn.IResolvable) {
        this._audioSdps.internalValue = value;
    }
    public resetAudioSdps() {
        this._audioSdps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get audioSdpsInput() {
        return this._audioSdps.internalValue;
    }

    // video_sdp - computed: true, optional: true, required: false
    private _videoSdp = new VideoSdpPropertyOutputReference(this, "video_sdp");
    public get videoSdp() {
        return this._videoSdp;
    }
    public putVideoSdp(value: VideoSdpProperty) {
        this._videoSdp.internalValue = value;
    }
    public resetVideoSdp() {
        this._videoSdp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get videoSdpInput() {
        return this._videoSdp.internalValue;
    }
}
export interface Smpte2110ReceiverGroupProperty {
    /**
    * The single Smpte2110ReceiverGroupSdpSettings that identify the video, audio, and ancillary streams for this receiver group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_settings CcInput#sdp_settings}
    */
    readonly sdpSettings?: Smpte2110ReceiverGroupSdpSettingsProperty;
}
export class Smpte2110ReceiverGroupPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): Smpte2110ReceiverGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sdpSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sdpSettings = this._sdpSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Smpte2110ReceiverGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sdpSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sdpSettings.internalValue = value.sdpSettings;
        }
    }

    // sdp_settings - computed: true, optional: true, required: false
    private _sdpSettings = new Smpte2110ReceiverGroupSdpSettingsPropertyOutputReference(this, "sdp_settings");
    public get sdpSettings() {
        return this._sdpSettings;
    }
    public putSdpSettings(value: Smpte2110ReceiverGroupSdpSettingsProperty) {
        this._sdpSettings.internalValue = value;
    }
    public resetSdpSettings() {
        this._sdpSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdpSettingsInput() {
        return this._sdpSettings.internalValue;
    }
}

export class Smpte2110ReceiverGroupPropertyList extends cdktn.ComplexList {
    public internalValue? : Smpte2110ReceiverGroupProperty[] | cdktn.IResolvable

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
    public get(index: number): Smpte2110ReceiverGroupPropertyOutputReference {
        return new Smpte2110ReceiverGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface Smpte2110ReceiverGroupSettingsProperty {
    /**
    * Placeholder documentation for __listOfSmpte2110ReceiverGroup
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#smpte_2110_receiver_groups CcInput#smpte_2110_receiver_groups}
    */
    readonly smpte2110ReceiverGroups?: Smpte2110ReceiverGroupProperty[] | cdktn.IResolvable;
}
export class Smpte2110ReceiverGroupSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Smpte2110ReceiverGroupSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._smpte2110ReceiverGroups?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.smpte2110ReceiverGroups = this._smpte2110ReceiverGroups?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Smpte2110ReceiverGroupSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._smpte2110ReceiverGroups.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._smpte2110ReceiverGroups.internalValue = value.smpte2110ReceiverGroups;
        }
    }

    // smpte_2110_receiver_groups - computed: true, optional: true, required: false
    private _smpte2110ReceiverGroups = new Smpte2110ReceiverGroupPropertyList(this, "smpte_2110_receiver_groups", false);
    public get smpte2110ReceiverGroups() {
        return this._smpte2110ReceiverGroups;
    }
    public putSmpte2110ReceiverGroups(value: Smpte2110ReceiverGroupProperty[] | cdktn.IResolvable) {
        this._smpte2110ReceiverGroups.internalValue = value;
    }
    public resetSmpte2110ReceiverGroups() {
        this._smpte2110ReceiverGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smpte2110ReceiverGroupsInput() {
        return this._smpte2110ReceiverGroups.internalValue;
    }
}
export interface InputSourceRequestProperty {
    /**
    * The key used to extract the password from EC2 Parameter store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#password_param CcInput#password_param}
    */
    readonly passwordParam?: string;
    /**
    * This represents the customer's source URL where stream is
    * pulled from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url CcInput#url}
    */
    readonly url?: string;
    /**
    * The username for the input source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#username CcInput#username}
    */
    readonly username?: string;
}
export class InputSourceRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InputSourceRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._passwordParam !== undefined) {
            hasAnyValues = true;
            internalValueResult.passwordParam = this._passwordParam;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputSourceRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._passwordParam = undefined;
            this._url = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._passwordParam = value.passwordParam;
            this._url = value.url;
            this._username = value.username;
        }
    }

    // password_param - computed: true, optional: true, required: false
    private _passwordParam?: string; 
    public get passwordParam() {
        return this.getStringAttribute('password_param');
    }
    public set passwordParam(value: string) {
        this._passwordParam = value;
    }
    public resetPasswordParam() {
        this._passwordParam = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordParamInput() {
        return this._passwordParam;
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

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}

export class InputSourceRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : InputSourceRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): InputSourceRequestPropertyOutputReference {
        return new InputSourceRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SrtCallerDecryptionRequestProperty {
    /**
    * The algorithm used to encrypt content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#algorithm CcInput#algorithm}
    */
    readonly algorithm?: string;
    /**
    * The ARN for the secret in Secrets Manager. Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#passphrase_secret_arn CcInput#passphrase_secret_arn}
    */
    readonly passphraseSecretArn?: string;
}
export class SrtCallerDecryptionRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtCallerDecryptionRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._algorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithm = this._algorithm;
        }
        if (this._passphraseSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.passphraseSecretArn = this._passphraseSecretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtCallerDecryptionRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithm = undefined;
            this._passphraseSecretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithm = value.algorithm;
            this._passphraseSecretArn = value.passphraseSecretArn;
        }
    }

    // algorithm - computed: true, optional: true, required: false
    private _algorithm?: string; 
    public get algorithm() {
        return this.getStringAttribute('algorithm');
    }
    public set algorithm(value: string) {
        this._algorithm = value;
    }
    public resetAlgorithm() {
        this._algorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get algorithmInput() {
        return this._algorithm;
    }

    // passphrase_secret_arn - computed: true, optional: true, required: false
    private _passphraseSecretArn?: string; 
    public get passphraseSecretArn() {
        return this.getStringAttribute('passphrase_secret_arn');
    }
    public set passphraseSecretArn(value: string) {
        this._passphraseSecretArn = value;
    }
    public resetPassphraseSecretArn() {
        this._passphraseSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passphraseSecretArnInput() {
        return this._passphraseSecretArn;
    }
}
export interface SrtCallerSourceRequestProperty {
    /**
    * The decryption settings for the SRT caller source. Present only if the source has decryption enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#decryption CcInput#decryption}
    */
    readonly decryption?: SrtCallerDecryptionRequestProperty;
    /**
    * The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#minimum_latency CcInput#minimum_latency}
    */
    readonly minimumLatency?: number;
    /**
    * The IP address at the upstream system (the listener) that MediaLive (the caller) connects to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_address CcInput#srt_listener_address}
    */
    readonly srtListenerAddress?: string;
    /**
    * The port at the upstream system (the listener) that MediaLive (the caller) connects to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_port CcInput#srt_listener_port}
    */
    readonly srtListenerPort?: string;
    /**
    * The stream ID, if the upstream system uses this identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_id CcInput#stream_id}
    */
    readonly streamId?: string;
}
export class SrtCallerSourceRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SrtCallerSourceRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._decryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.decryption = this._decryption?.internalValue;
        }
        if (this._minimumLatency !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumLatency = this._minimumLatency;
        }
        if (this._srtListenerAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.srtListenerAddress = this._srtListenerAddress;
        }
        if (this._srtListenerPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.srtListenerPort = this._srtListenerPort;
        }
        if (this._streamId !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamId = this._streamId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtCallerSourceRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._decryption.internalValue = undefined;
            this._minimumLatency = undefined;
            this._srtListenerAddress = undefined;
            this._srtListenerPort = undefined;
            this._streamId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._decryption.internalValue = value.decryption;
            this._minimumLatency = value.minimumLatency;
            this._srtListenerAddress = value.srtListenerAddress;
            this._srtListenerPort = value.srtListenerPort;
            this._streamId = value.streamId;
        }
    }

    // decryption - computed: true, optional: true, required: false
    private _decryption = new SrtCallerDecryptionRequestPropertyOutputReference(this, "decryption");
    public get decryption() {
        return this._decryption;
    }
    public putDecryption(value: SrtCallerDecryptionRequestProperty) {
        this._decryption.internalValue = value;
    }
    public resetDecryption() {
        this._decryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptionInput() {
        return this._decryption.internalValue;
    }

    // minimum_latency - computed: true, optional: true, required: false
    private _minimumLatency?: number; 
    public get minimumLatency() {
        return this.getNumberAttribute('minimum_latency');
    }
    public set minimumLatency(value: number) {
        this._minimumLatency = value;
    }
    public resetMinimumLatency() {
        this._minimumLatency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumLatencyInput() {
        return this._minimumLatency;
    }

    // srt_listener_address - computed: true, optional: true, required: false
    private _srtListenerAddress?: string; 
    public get srtListenerAddress() {
        return this.getStringAttribute('srt_listener_address');
    }
    public set srtListenerAddress(value: string) {
        this._srtListenerAddress = value;
    }
    public resetSrtListenerAddress() {
        this._srtListenerAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get srtListenerAddressInput() {
        return this._srtListenerAddress;
    }

    // srt_listener_port - computed: true, optional: true, required: false
    private _srtListenerPort?: string; 
    public get srtListenerPort() {
        return this.getStringAttribute('srt_listener_port');
    }
    public set srtListenerPort(value: string) {
        this._srtListenerPort = value;
    }
    public resetSrtListenerPort() {
        this._srtListenerPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get srtListenerPortInput() {
        return this._srtListenerPort;
    }

    // stream_id - computed: true, optional: true, required: false
    private _streamId?: string; 
    public get streamId() {
        return this.getStringAttribute('stream_id');
    }
    public set streamId(value: string) {
        this._streamId = value;
    }
    public resetStreamId() {
        this._streamId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamIdInput() {
        return this._streamId;
    }
}

export class SrtCallerSourceRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : SrtCallerSourceRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): SrtCallerSourceRequestPropertyOutputReference {
        return new SrtCallerSourceRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SrtListenerDecryptionRequestProperty {
    /**
    * The algorithm used to encrypt content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#algorithm CcInput#algorithm}
    */
    readonly algorithm?: string;
    /**
    * The ARN for the secret in Secrets Manager. Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#passphrase_secret_arn CcInput#passphrase_secret_arn}
    */
    readonly passphraseSecretArn?: string;
}
export class SrtListenerDecryptionRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtListenerDecryptionRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._algorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithm = this._algorithm;
        }
        if (this._passphraseSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.passphraseSecretArn = this._passphraseSecretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtListenerDecryptionRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithm = undefined;
            this._passphraseSecretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithm = value.algorithm;
            this._passphraseSecretArn = value.passphraseSecretArn;
        }
    }

    // algorithm - computed: true, optional: true, required: false
    private _algorithm?: string; 
    public get algorithm() {
        return this.getStringAttribute('algorithm');
    }
    public set algorithm(value: string) {
        this._algorithm = value;
    }
    public resetAlgorithm() {
        this._algorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get algorithmInput() {
        return this._algorithm;
    }

    // passphrase_secret_arn - computed: true, optional: true, required: false
    private _passphraseSecretArn?: string; 
    public get passphraseSecretArn() {
        return this.getStringAttribute('passphrase_secret_arn');
    }
    public set passphraseSecretArn(value: string) {
        this._passphraseSecretArn = value;
    }
    public resetPassphraseSecretArn() {
        this._passphraseSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passphraseSecretArnInput() {
        return this._passphraseSecretArn;
    }
}
export interface SrtListenerSettingsRequestProperty {
    /**
    * The decryption settings for the SRT listener source. Present only if the source has decryption enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#decryption CcInput#decryption}
    */
    readonly decryption?: SrtListenerDecryptionRequestProperty;
    /**
    * The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#minimum_latency CcInput#minimum_latency}
    */
    readonly minimumLatency?: number;
    /**
    * The stream ID, if the upstream system uses this identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_id CcInput#stream_id}
    */
    readonly streamId?: string;
}
export class SrtListenerSettingsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtListenerSettingsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._decryption?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.decryption = this._decryption?.internalValue;
        }
        if (this._minimumLatency !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumLatency = this._minimumLatency;
        }
        if (this._streamId !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamId = this._streamId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtListenerSettingsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._decryption.internalValue = undefined;
            this._minimumLatency = undefined;
            this._streamId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._decryption.internalValue = value.decryption;
            this._minimumLatency = value.minimumLatency;
            this._streamId = value.streamId;
        }
    }

    // decryption - computed: true, optional: true, required: false
    private _decryption = new SrtListenerDecryptionRequestPropertyOutputReference(this, "decryption");
    public get decryption() {
        return this._decryption;
    }
    public putDecryption(value: SrtListenerDecryptionRequestProperty) {
        this._decryption.internalValue = value;
    }
    public resetDecryption() {
        this._decryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptionInput() {
        return this._decryption.internalValue;
    }

    // minimum_latency - computed: true, optional: true, required: false
    private _minimumLatency?: number; 
    public get minimumLatency() {
        return this.getNumberAttribute('minimum_latency');
    }
    public set minimumLatency(value: number) {
        this._minimumLatency = value;
    }
    public resetMinimumLatency() {
        this._minimumLatency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumLatencyInput() {
        return this._minimumLatency;
    }

    // stream_id - computed: true, optional: true, required: false
    private _streamId?: string; 
    public get streamId() {
        return this.getStringAttribute('stream_id');
    }
    public set streamId(value: string) {
        this._streamId = value;
    }
    public resetStreamId() {
        this._streamId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamIdInput() {
        return this._streamId;
    }
}
export interface SrtSettingsRequestProperty {
    /**
    * Placeholder documentation for __listOfSrtCallerSource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_caller_sources CcInput#srt_caller_sources}
    */
    readonly srtCallerSources?: SrtCallerSourceRequestProperty[] | cdktn.IResolvable;
    /**
    * Settings for an SRT listener input. Configured only when the input uses the SRT_LISTENER input type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_settings CcInput#srt_listener_settings}
    */
    readonly srtListenerSettings?: SrtListenerSettingsRequestProperty;
}
export class SrtSettingsRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SrtSettingsRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._srtCallerSources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.srtCallerSources = this._srtCallerSources?.internalValue;
        }
        if (this._srtListenerSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.srtListenerSettings = this._srtListenerSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SrtSettingsRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._srtCallerSources.internalValue = undefined;
            this._srtListenerSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._srtCallerSources.internalValue = value.srtCallerSources;
            this._srtListenerSettings.internalValue = value.srtListenerSettings;
        }
    }

    // srt_caller_sources - computed: true, optional: true, required: false
    private _srtCallerSources = new SrtCallerSourceRequestPropertyList(this, "srt_caller_sources", false);
    public get srtCallerSources() {
        return this._srtCallerSources;
    }
    public putSrtCallerSources(value: SrtCallerSourceRequestProperty[] | cdktn.IResolvable) {
        this._srtCallerSources.internalValue = value;
    }
    public resetSrtCallerSources() {
        this._srtCallerSources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get srtCallerSourcesInput() {
        return this._srtCallerSources.internalValue;
    }

    // srt_listener_settings - computed: true, optional: true, required: false
    private _srtListenerSettings = new SrtListenerSettingsRequestPropertyOutputReference(this, "srt_listener_settings");
    public get srtListenerSettings() {
        return this._srtListenerSettings;
    }
    public putSrtListenerSettings(value: SrtListenerSettingsRequestProperty) {
        this._srtListenerSettings.internalValue = value;
    }
    public resetSrtListenerSettings() {
        this._srtListenerSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get srtListenerSettingsInput() {
        return this._srtListenerSettings.internalValue;
    }
}
export interface InputVpcRequestProperty {
    /**
    * A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.
    * Requires subnetIds. If none are specified then the VPC default security group will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#security_group_ids CcInput#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * A list of 2 VPC subnet IDs from the same VPC.
    * Subnet IDs must be mapped to two unique availability zones (AZ).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#subnet_ids CcInput#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class InputVpcRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputVpcRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputVpcRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
}
