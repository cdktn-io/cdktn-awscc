// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFlowOutputProps extends cdktn.TerraformMetaArguments {
    /**
    * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#cidr_allow_list CcFlowOutput#cidr_allow_list}
    */
    readonly cidrAllowList?: string[];
    /**
    * A description of the output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#description CcFlowOutput#description}
    */
    readonly description?: string;
    /**
    * The address where you want to send the output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#destination CcFlowOutput#destination}
    */
    readonly destination?: string;
    /**
    * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#encryption CcFlowOutput#encryption}
    */
    readonly encryption?: CcFlowOutput.EncryptionProperty;
    /**
    * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#flow_arn CcFlowOutput#flow_arn}
    */
    readonly flowArn: string;
    /**
    * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#max_latency CcFlowOutput#max_latency}
    */
    readonly maxLatency?: number;
    /**
    * The definition for each media stream that is associated with the output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#media_stream_output_configurations CcFlowOutput#media_stream_output_configurations}
    */
    readonly mediaStreamOutputConfigurations?: CcFlowOutput.MediaStreamOutputConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The minimum latency in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#min_latency CcFlowOutput#min_latency}
    */
    readonly minLatency?: number;
    /**
    * The name of the output. This value must be unique within the current flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#name CcFlowOutput#name}
    */
    readonly name?: string;
    /**
    * The timecode source for the NDI output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#ndi_output_timecode_source CcFlowOutput#ndi_output_timecode_source}
    */
    readonly ndiOutputTimecodeSource?: string;
    /**
    * A suffix for the names of the NDI sources that the flow creates. If a custom name isn't specified, MediaConnect uses the output name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#ndi_program_name CcFlowOutput#ndi_program_name}
    */
    readonly ndiProgramName?: string;
    /**
    * A quality setting for the NDI Speed HQ encoder.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#ndi_speed_hq_quality CcFlowOutput#ndi_speed_hq_quality}
    */
    readonly ndiSpeedHqQuality?: number;
    /**
    * An indication of whether the output should transmit data or not.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#output_status CcFlowOutput#output_status}
    */
    readonly outputStatus?: string;
    /**
    * The port to use when content is distributed to this output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#port CcFlowOutput#port}
    */
    readonly port?: number;
    /**
    * The protocol that is used by the source or output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#protocol CcFlowOutput#protocol}
    */
    readonly protocol?: string;
    /**
    * The remote ID for the Zixi-pull stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#remote_id CcFlowOutput#remote_id}
    */
    readonly remoteId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#router_integration_state CcFlowOutput#router_integration_state}
    */
    readonly routerIntegrationState?: string;
    /**
    * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#router_integration_transit_encryption CcFlowOutput#router_integration_transit_encryption}
    */
    readonly routerIntegrationTransitEncryption?: CcFlowOutput.FlowTransitEncryptionProperty;
    /**
    * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#smoothing_latency CcFlowOutput#smoothing_latency}
    */
    readonly smoothingLatency?: number;
    /**
    * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#stream_id CcFlowOutput#stream_id}
    */
    readonly streamId?: string;
    /**
    * Key-value pairs that can be used to tag and organize this flow output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#tags CcFlowOutput#tags}
    */
    readonly tags?: CcFlowOutput.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the VPC interface attachment to use for this output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#vpc_interface_attachment CcFlowOutput#vpc_interface_attachment}
    */
    readonly vpcInterfaceAttachment?: CcFlowOutput.VpcInterfaceAttachmentProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output awscc_mediaconnect_flow_output}
*/
export class CcFlowOutput extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconnect_flow_output";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFlowOutput resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFlowOutput to import
    * @param importFromId The id of the existing CcFlowOutput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFlowOutput to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_flow_output", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output awscc_mediaconnect_flow_output} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFlowOutputProps
    */
    public constructor(scope: Construct, id: string, config: CcFlowOutputProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconnect_flow_output',
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
        this._cidrAllowList = config.cidrAllowList;
        this._description = config.description;
        this._destination = config.destination;
        this._encryption.internalValue = config.encryption;
        this._flowArn = config.flowArn;
        this._maxLatency = config.maxLatency;
        this._mediaStreamOutputConfigurations.internalValue = config.mediaStreamOutputConfigurations;
        this._minLatency = config.minLatency;
        this._name = config.name;
        this._ndiOutputTimecodeSource = config.ndiOutputTimecodeSource;
        this._ndiProgramName = config.ndiProgramName;
        this._ndiSpeedHqQuality = config.ndiSpeedHqQuality;
        this._outputStatus = config.outputStatus;
        this._port = config.port;
        this._protocol = config.protocol;
        this._remoteId = config.remoteId;
        this._routerIntegrationState = config.routerIntegrationState;
        this._routerIntegrationTransitEncryption.internalValue = config.routerIntegrationTransitEncryption;
        this._smoothingLatency = config.smoothingLatency;
        this._streamId = config.streamId;
        this._tags.internalValue = config.tags;
        this._vpcInterfaceAttachment.internalValue = config.vpcInterfaceAttachment;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cidr_allow_list - computed: true, optional: true, required: false
    private _cidrAllowList?: string[]; 
    public get cidrAllowList() {
        return this.getListAttribute('cidr_allow_list');
    }
    public set cidrAllowList(value: string[]) {
        this._cidrAllowList = value;
    }
    public resetCidrAllowList() {
        this._cidrAllowList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrAllowListInput() {
        return this._cidrAllowList;
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

    // destination - computed: true, optional: true, required: false
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    public resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
    }

    // encryption - computed: true, optional: true, required: false
    private _encryption = new CcFlowOutput.EncryptionPropertyOutputReference(this, "encryption");
    public get encryption() {
        return this._encryption;
    }
    public putEncryption(value: CcFlowOutput.EncryptionProperty) {
        this._encryption.internalValue = value;
    }
    public resetEncryption() {
        this._encryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInput() {
        return this._encryption.internalValue;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_latency - computed: true, optional: true, required: false
    private _maxLatency?: number; 
    public get maxLatency() {
        return this.getNumberAttribute('max_latency');
    }
    public set maxLatency(value: number) {
        this._maxLatency = value;
    }
    public resetMaxLatency() {
        this._maxLatency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxLatencyInput() {
        return this._maxLatency;
    }

    // media_stream_output_configurations - computed: true, optional: true, required: false
    private _mediaStreamOutputConfigurations = new CcFlowOutput.MediaStreamOutputConfigurationPropertyList(this, "media_stream_output_configurations", false);
    public get mediaStreamOutputConfigurations() {
        return this._mediaStreamOutputConfigurations;
    }
    public putMediaStreamOutputConfigurations(value: CcFlowOutput.MediaStreamOutputConfigurationProperty[] | cdktn.IResolvable) {
        this._mediaStreamOutputConfigurations.internalValue = value;
    }
    public resetMediaStreamOutputConfigurations() {
        this._mediaStreamOutputConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaStreamOutputConfigurationsInput() {
        return this._mediaStreamOutputConfigurations.internalValue;
    }

    // min_latency - computed: true, optional: true, required: false
    private _minLatency?: number; 
    public get minLatency() {
        return this.getNumberAttribute('min_latency');
    }
    public set minLatency(value: number) {
        this._minLatency = value;
    }
    public resetMinLatency() {
        this._minLatency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minLatencyInput() {
        return this._minLatency;
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

    // ndi_output_timecode_source - computed: true, optional: true, required: false
    private _ndiOutputTimecodeSource?: string; 
    public get ndiOutputTimecodeSource() {
        return this.getStringAttribute('ndi_output_timecode_source');
    }
    public set ndiOutputTimecodeSource(value: string) {
        this._ndiOutputTimecodeSource = value;
    }
    public resetNdiOutputTimecodeSource() {
        this._ndiOutputTimecodeSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ndiOutputTimecodeSourceInput() {
        return this._ndiOutputTimecodeSource;
    }

    // ndi_program_name - computed: true, optional: true, required: false
    private _ndiProgramName?: string; 
    public get ndiProgramName() {
        return this.getStringAttribute('ndi_program_name');
    }
    public set ndiProgramName(value: string) {
        this._ndiProgramName = value;
    }
    public resetNdiProgramName() {
        this._ndiProgramName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ndiProgramNameInput() {
        return this._ndiProgramName;
    }

    // ndi_speed_hq_quality - computed: true, optional: true, required: false
    private _ndiSpeedHqQuality?: number; 
    public get ndiSpeedHqQuality() {
        return this.getNumberAttribute('ndi_speed_hq_quality');
    }
    public set ndiSpeedHqQuality(value: number) {
        this._ndiSpeedHqQuality = value;
    }
    public resetNdiSpeedHqQuality() {
        this._ndiSpeedHqQuality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ndiSpeedHqQualityInput() {
        return this._ndiSpeedHqQuality;
    }

    // output_arn - computed: true, optional: false, required: false
    public get outputArn() {
        return this.getStringAttribute('output_arn');
    }

    // output_status - computed: true, optional: true, required: false
    private _outputStatus?: string; 
    public get outputStatus() {
        return this.getStringAttribute('output_status');
    }
    public set outputStatus(value: string) {
        this._outputStatus = value;
    }
    public resetOutputStatus() {
        this._outputStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputStatusInput() {
        return this._outputStatus;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // remote_id - computed: true, optional: true, required: false
    private _remoteId?: string; 
    public get remoteId() {
        return this.getStringAttribute('remote_id');
    }
    public set remoteId(value: string) {
        this._remoteId = value;
    }
    public resetRemoteId() {
        this._remoteId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteIdInput() {
        return this._remoteId;
    }

    // router_integration_state - computed: true, optional: true, required: false
    private _routerIntegrationState?: string; 
    public get routerIntegrationState() {
        return this.getStringAttribute('router_integration_state');
    }
    public set routerIntegrationState(value: string) {
        this._routerIntegrationState = value;
    }
    public resetRouterIntegrationState() {
        this._routerIntegrationState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routerIntegrationStateInput() {
        return this._routerIntegrationState;
    }

    // router_integration_transit_encryption - computed: true, optional: true, required: false
    private _routerIntegrationTransitEncryption = new CcFlowOutput.FlowTransitEncryptionPropertyOutputReference(this, "router_integration_transit_encryption");
    public get routerIntegrationTransitEncryption() {
        return this._routerIntegrationTransitEncryption;
    }
    public putRouterIntegrationTransitEncryption(value: CcFlowOutput.FlowTransitEncryptionProperty) {
        this._routerIntegrationTransitEncryption.internalValue = value;
    }
    public resetRouterIntegrationTransitEncryption() {
        this._routerIntegrationTransitEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routerIntegrationTransitEncryptionInput() {
        return this._routerIntegrationTransitEncryption.internalValue;
    }

    // smoothing_latency - computed: true, optional: true, required: false
    private _smoothingLatency?: number; 
    public get smoothingLatency() {
        return this.getNumberAttribute('smoothing_latency');
    }
    public set smoothingLatency(value: number) {
        this._smoothingLatency = value;
    }
    public resetSmoothingLatency() {
        this._smoothingLatency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smoothingLatencyInput() {
        return this._smoothingLatency;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFlowOutput.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFlowOutput.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_interface_attachment - computed: true, optional: true, required: false
    private _vpcInterfaceAttachment = new CcFlowOutput.VpcInterfaceAttachmentPropertyOutputReference(this, "vpc_interface_attachment");
    public get vpcInterfaceAttachment() {
        return this._vpcInterfaceAttachment;
    }
    public putVpcInterfaceAttachment(value: CcFlowOutput.VpcInterfaceAttachmentProperty) {
        this._vpcInterfaceAttachment.internalValue = value;
    }
    public resetVpcInterfaceAttachment() {
        this._vpcInterfaceAttachment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInterfaceAttachmentInput() {
        return this._vpcInterfaceAttachment.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cidr_allow_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._cidrAllowList),
            description: cdktn.stringToTerraform(this._description),
            destination: cdktn.stringToTerraform(this._destination),
            encryption: ccFlowOutputEncryptionPropertyToTerraform(this._encryption.internalValue),
            flow_arn: cdktn.stringToTerraform(this._flowArn),
            max_latency: cdktn.numberToTerraform(this._maxLatency),
            media_stream_output_configurations: cdktn.listMapper(ccFlowOutputMediaStreamOutputConfigurationPropertyToTerraform, false)(this._mediaStreamOutputConfigurations.internalValue),
            min_latency: cdktn.numberToTerraform(this._minLatency),
            name: cdktn.stringToTerraform(this._name),
            ndi_output_timecode_source: cdktn.stringToTerraform(this._ndiOutputTimecodeSource),
            ndi_program_name: cdktn.stringToTerraform(this._ndiProgramName),
            ndi_speed_hq_quality: cdktn.numberToTerraform(this._ndiSpeedHqQuality),
            output_status: cdktn.stringToTerraform(this._outputStatus),
            port: cdktn.numberToTerraform(this._port),
            protocol: cdktn.stringToTerraform(this._protocol),
            remote_id: cdktn.stringToTerraform(this._remoteId),
            router_integration_state: cdktn.stringToTerraform(this._routerIntegrationState),
            router_integration_transit_encryption: ccFlowOutputFlowTransitEncryptionPropertyToTerraform(this._routerIntegrationTransitEncryption.internalValue),
            smoothing_latency: cdktn.numberToTerraform(this._smoothingLatency),
            stream_id: cdktn.stringToTerraform(this._streamId),
            tags: cdktn.listMapper(ccFlowOutputTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_interface_attachment: ccFlowOutputVpcInterfaceAttachmentPropertyToTerraform(this._vpcInterfaceAttachment.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cidr_allow_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._cidrAllowList),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination: {
                value: cdktn.stringToHclTerraform(this._destination),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption: {
                value: ccFlowOutputEncryptionPropertyToHclTerraform(this._encryption.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlowOutput.EncryptionProperty",
            },
            flow_arn: {
                value: cdktn.stringToHclTerraform(this._flowArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_latency: {
                value: cdktn.numberToHclTerraform(this._maxLatency),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            media_stream_output_configurations: {
                value: cdktn.listMapperHcl(ccFlowOutputMediaStreamOutputConfigurationPropertyToHclTerraform, false)(this._mediaStreamOutputConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFlowOutput.MediaStreamOutputConfigurationPropertyList",
            },
            min_latency: {
                value: cdktn.numberToHclTerraform(this._minLatency),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ndi_output_timecode_source: {
                value: cdktn.stringToHclTerraform(this._ndiOutputTimecodeSource),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ndi_program_name: {
                value: cdktn.stringToHclTerraform(this._ndiProgramName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ndi_speed_hq_quality: {
                value: cdktn.numberToHclTerraform(this._ndiSpeedHqQuality),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            output_status: {
                value: cdktn.stringToHclTerraform(this._outputStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port: {
                value: cdktn.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            protocol: {
                value: cdktn.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            remote_id: {
                value: cdktn.stringToHclTerraform(this._remoteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            router_integration_state: {
                value: cdktn.stringToHclTerraform(this._routerIntegrationState),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            router_integration_transit_encryption: {
                value: ccFlowOutputFlowTransitEncryptionPropertyToHclTerraform(this._routerIntegrationTransitEncryption.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlowOutput.FlowTransitEncryptionProperty",
            },
            smoothing_latency: {
                value: cdktn.numberToHclTerraform(this._smoothingLatency),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            stream_id: {
                value: cdktn.stringToHclTerraform(this._streamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFlowOutputTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFlowOutput.TagPropertyList",
            },
            vpc_interface_attachment: {
                value: ccFlowOutputVpcInterfaceAttachmentPropertyToHclTerraform(this._vpcInterfaceAttachment.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlowOutput.VpcInterfaceAttachmentProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFlowOutputEncryptionPropertyToTerraform(struct?: CcFlowOutput.EncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        algorithm: cdktn.stringToTerraform(struct!.algorithm),
        key_type: cdktn.stringToTerraform(struct!.keyType),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccFlowOutputEncryptionPropertyToHclTerraform(struct?: CcFlowOutput.EncryptionProperty | cdktn.IResolvable): any {
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
        key_type: {
            value: cdktn.stringToHclTerraform(struct!.keyType),
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


export function ccFlowOutputInterfacePropertyToTerraform(struct?: CcFlowOutput.InterfaceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccFlowOutputInterfacePropertyToHclTerraform(struct?: CcFlowOutput.InterfaceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowOutputDestinationConfigurationPropertyToTerraform(struct?: CcFlowOutput.DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_ip: cdktn.stringToTerraform(struct!.destinationIp),
        destination_port: cdktn.numberToTerraform(struct!.destinationPort),
        interface: ccFlowOutputInterfacePropertyToTerraform(struct!.interface),
    }
}


export function ccFlowOutputDestinationConfigurationPropertyToHclTerraform(struct?: CcFlowOutput.DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_ip: {
            value: cdktn.stringToHclTerraform(struct!.destinationIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_port: {
            value: cdktn.numberToHclTerraform(struct!.destinationPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interface: {
            value: ccFlowOutputInterfacePropertyToHclTerraform(struct!.interface),
            isBlock: true,
            type: "struct",
            storageClassType: "InterfaceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowOutputEncodingParametersPropertyToTerraform(struct?: CcFlowOutput.EncodingParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compression_factor: cdktn.numberToTerraform(struct!.compressionFactor),
        encoder_profile: cdktn.stringToTerraform(struct!.encoderProfile),
    }
}


export function ccFlowOutputEncodingParametersPropertyToHclTerraform(struct?: CcFlowOutput.EncodingParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compression_factor: {
            value: cdktn.numberToHclTerraform(struct!.compressionFactor),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        encoder_profile: {
            value: cdktn.stringToHclTerraform(struct!.encoderProfile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowOutputMediaStreamOutputConfigurationPropertyToTerraform(struct?: CcFlowOutput.MediaStreamOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_configurations: cdktn.listMapper(ccFlowOutputDestinationConfigurationPropertyToTerraform, false)(struct!.destinationConfigurations),
        encoding_name: cdktn.stringToTerraform(struct!.encodingName),
        encoding_parameters: ccFlowOutputEncodingParametersPropertyToTerraform(struct!.encodingParameters),
        media_stream_name: cdktn.stringToTerraform(struct!.mediaStreamName),
    }
}


export function ccFlowOutputMediaStreamOutputConfigurationPropertyToHclTerraform(struct?: CcFlowOutput.MediaStreamOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_configurations: {
            value: cdktn.listMapperHcl(ccFlowOutputDestinationConfigurationPropertyToHclTerraform, false)(struct!.destinationConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "DestinationConfigurationPropertyList",
        },
        encoding_name: {
            value: cdktn.stringToHclTerraform(struct!.encodingName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encoding_parameters: {
            value: ccFlowOutputEncodingParametersPropertyToHclTerraform(struct!.encodingParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "EncodingParametersProperty",
        },
        media_stream_name: {
            value: cdktn.stringToHclTerraform(struct!.mediaStreamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowOutputSecretsManagerEncryptionKeyConfigurationPropertyToTerraform(struct?: CcFlowOutput.SecretsManagerEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    }
}


export function ccFlowOutputSecretsManagerEncryptionKeyConfigurationPropertyToHclTerraform(struct?: CcFlowOutput.SecretsManagerEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
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


export function ccFlowOutputFlowTransitEncryptionKeyConfigurationPropertyToTerraform(struct?: CcFlowOutput.FlowTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        automatic: cdktn.stringToTerraform(struct!.automatic),
        secrets_manager: ccFlowOutputSecretsManagerEncryptionKeyConfigurationPropertyToTerraform(struct!.secretsManager),
    }
}


export function ccFlowOutputFlowTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct?: CcFlowOutput.FlowTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        automatic: {
            value: cdktn.stringToHclTerraform(struct!.automatic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager: {
            value: ccFlowOutputSecretsManagerEncryptionKeyConfigurationPropertyToHclTerraform(struct!.secretsManager),
            isBlock: true,
            type: "struct",
            storageClassType: "SecretsManagerEncryptionKeyConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowOutputFlowTransitEncryptionPropertyToTerraform(struct?: CcFlowOutput.FlowTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_key_configuration: ccFlowOutputFlowTransitEncryptionKeyConfigurationPropertyToTerraform(struct!.encryptionKeyConfiguration),
        encryption_key_type: cdktn.stringToTerraform(struct!.encryptionKeyType),
    }
}


export function ccFlowOutputFlowTransitEncryptionPropertyToHclTerraform(struct?: CcFlowOutput.FlowTransitEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_key_configuration: {
            value: ccFlowOutputFlowTransitEncryptionKeyConfigurationPropertyToHclTerraform(struct!.encryptionKeyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "FlowTransitEncryptionKeyConfigurationProperty",
        },
        encryption_key_type: {
            value: cdktn.stringToHclTerraform(struct!.encryptionKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowOutputTagPropertyToTerraform(struct?: CcFlowOutput.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFlowOutputTagPropertyToHclTerraform(struct?: CcFlowOutput.TagProperty | cdktn.IResolvable): any {
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


export function ccFlowOutputVpcInterfaceAttachmentPropertyToTerraform(struct?: CcFlowOutput.VpcInterfaceAttachmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_interface_name: cdktn.stringToTerraform(struct!.vpcInterfaceName),
    }
}


export function ccFlowOutputVpcInterfaceAttachmentPropertyToHclTerraform(struct?: CcFlowOutput.VpcInterfaceAttachmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_interface_name: {
            value: cdktn.stringToHclTerraform(struct!.vpcInterfaceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFlowOutput {
export interface EncryptionProperty {
    /**
    * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#algorithm CcFlowOutput#algorithm}
    */
    readonly algorithm?: string;
    /**
    * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#key_type CcFlowOutput#key_type}
    */
    readonly keyType?: string;
    /**
    * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#role_arn CcFlowOutput#role_arn}
    */
    readonly roleArn?: string;
    /**
    *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#secret_arn CcFlowOutput#secret_arn}
    */
    readonly secretArn?: string;
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
        if (this._algorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithm = this._algorithm;
        }
        if (this._keyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyType = this._keyType;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithm = undefined;
            this._keyType = undefined;
            this._roleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithm = value.algorithm;
            this._keyType = value.keyType;
            this._roleArn = value.roleArn;
            this._secretArn = value.secretArn;
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

    // key_type - computed: true, optional: true, required: false
    private _keyType?: string; 
    public get keyType() {
        return this.getStringAttribute('key_type');
    }
    public set keyType(value: string) {
        this._keyType = value;
    }
    public resetKeyType() {
        this._keyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyTypeInput() {
        return this._keyType;
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
export interface InterfaceProperty {
    /**
    * The name of the VPC interface that you want to use for the media stream associated with the output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#name CcFlowOutput#name}
    */
    readonly name?: string;
}
export class InterfacePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InterfaceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InterfaceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
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
}
export interface DestinationConfigurationProperty {
    /**
    * The IP address where contents of the media stream will be sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#destination_ip CcFlowOutput#destination_ip}
    */
    readonly destinationIp?: string;
    /**
    * The port to use when the content of the media stream is distributed to the output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#destination_port CcFlowOutput#destination_port}
    */
    readonly destinationPort?: number;
    /**
    * The VPC interface that is used for the media stream associated with the output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#interface CcFlowOutput#interface}
    */
    readonly interface?: InterfaceProperty;
}
export class DestinationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DestinationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationIp = this._destinationIp;
        }
        if (this._destinationPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPort = this._destinationPort;
        }
        if (this._interface?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.interface = this._interface?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationIp = undefined;
            this._destinationPort = undefined;
            this._interface.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationIp = value.destinationIp;
            this._destinationPort = value.destinationPort;
            this._interface.internalValue = value.interface;
        }
    }

    // destination_ip - computed: true, optional: true, required: false
    private _destinationIp?: string; 
    public get destinationIp() {
        return this.getStringAttribute('destination_ip');
    }
    public set destinationIp(value: string) {
        this._destinationIp = value;
    }
    public resetDestinationIp() {
        this._destinationIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationIpInput() {
        return this._destinationIp;
    }

    // destination_port - computed: true, optional: true, required: false
    private _destinationPort?: number; 
    public get destinationPort() {
        return this.getNumberAttribute('destination_port');
    }
    public set destinationPort(value: number) {
        this._destinationPort = value;
    }
    public resetDestinationPort() {
        this._destinationPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortInput() {
        return this._destinationPort;
    }

    // interface - computed: true, optional: true, required: false
    private _interface = new InterfacePropertyOutputReference(this, "interface");
    public get interface() {
        return this._interface;
    }
    public putInterface(value: InterfaceProperty) {
        this._interface.internalValue = value;
    }
    public resetInterface() {
        this._interface.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get interfaceInput() {
        return this._interface.internalValue;
    }
}

export class DestinationConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : DestinationConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): DestinationConfigurationPropertyOutputReference {
        return new DestinationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EncodingParametersProperty {
    /**
    * A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are in the range of 3.0 to 10.0, inclusive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#compression_factor CcFlowOutput#compression_factor}
    */
    readonly compressionFactor?: number;
    /**
    * A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#encoder_profile CcFlowOutput#encoder_profile}
    */
    readonly encoderProfile?: string;
}
export class EncodingParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncodingParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compressionFactor !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionFactor = this._compressionFactor;
        }
        if (this._encoderProfile !== undefined) {
            hasAnyValues = true;
            internalValueResult.encoderProfile = this._encoderProfile;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncodingParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compressionFactor = undefined;
            this._encoderProfile = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compressionFactor = value.compressionFactor;
            this._encoderProfile = value.encoderProfile;
        }
    }

    // compression_factor - computed: true, optional: true, required: false
    private _compressionFactor?: number; 
    public get compressionFactor() {
        return this.getNumberAttribute('compression_factor');
    }
    public set compressionFactor(value: number) {
        this._compressionFactor = value;
    }
    public resetCompressionFactor() {
        this._compressionFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionFactorInput() {
        return this._compressionFactor;
    }

    // encoder_profile - computed: true, optional: true, required: false
    private _encoderProfile?: string; 
    public get encoderProfile() {
        return this.getStringAttribute('encoder_profile');
    }
    public set encoderProfile(value: string) {
        this._encoderProfile = value;
    }
    public resetEncoderProfile() {
        this._encoderProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encoderProfileInput() {
        return this._encoderProfile;
    }
}
export interface MediaStreamOutputConfigurationProperty {
    /**
    * The media streams that you want to associate with the output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#destination_configurations CcFlowOutput#destination_configurations}
    */
    readonly destinationConfigurations?: DestinationConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The format that will be used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video streams on sources or outputs that use the CDI protocol, set the encoding name to raw. For video streams on sources or outputs that use the ST 2110 JPEG XS protocol, set the encoding name to jxsv.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#encoding_name CcFlowOutput#encoding_name}
    */
    readonly encodingName?: string;
    /**
    * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#encoding_parameters CcFlowOutput#encoding_parameters}
    */
    readonly encodingParameters?: EncodingParametersProperty;
    /**
    * A name that helps you distinguish one media stream from another.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#media_stream_name CcFlowOutput#media_stream_name}
    */
    readonly mediaStreamName?: string;
}
export class MediaStreamOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MediaStreamOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationConfigurations = this._destinationConfigurations?.internalValue;
        }
        if (this._encodingName !== undefined) {
            hasAnyValues = true;
            internalValueResult.encodingName = this._encodingName;
        }
        if (this._encodingParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encodingParameters = this._encodingParameters?.internalValue;
        }
        if (this._mediaStreamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.mediaStreamName = this._mediaStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MediaStreamOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationConfigurations.internalValue = undefined;
            this._encodingName = undefined;
            this._encodingParameters.internalValue = undefined;
            this._mediaStreamName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationConfigurations.internalValue = value.destinationConfigurations;
            this._encodingName = value.encodingName;
            this._encodingParameters.internalValue = value.encodingParameters;
            this._mediaStreamName = value.mediaStreamName;
        }
    }

    // destination_configurations - computed: true, optional: true, required: false
    private _destinationConfigurations = new DestinationConfigurationPropertyList(this, "destination_configurations", false);
    public get destinationConfigurations() {
        return this._destinationConfigurations;
    }
    public putDestinationConfigurations(value: DestinationConfigurationProperty[] | cdktn.IResolvable) {
        this._destinationConfigurations.internalValue = value;
    }
    public resetDestinationConfigurations() {
        this._destinationConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationConfigurationsInput() {
        return this._destinationConfigurations.internalValue;
    }

    // encoding_name - computed: true, optional: true, required: false
    private _encodingName?: string; 
    public get encodingName() {
        return this.getStringAttribute('encoding_name');
    }
    public set encodingName(value: string) {
        this._encodingName = value;
    }
    public resetEncodingName() {
        this._encodingName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encodingNameInput() {
        return this._encodingName;
    }

    // encoding_parameters - computed: true, optional: true, required: false
    private _encodingParameters = new EncodingParametersPropertyOutputReference(this, "encoding_parameters");
    public get encodingParameters() {
        return this._encodingParameters;
    }
    public putEncodingParameters(value: EncodingParametersProperty) {
        this._encodingParameters.internalValue = value;
    }
    public resetEncodingParameters() {
        this._encodingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encodingParametersInput() {
        return this._encodingParameters.internalValue;
    }

    // media_stream_name - computed: true, optional: true, required: false
    private _mediaStreamName?: string; 
    public get mediaStreamName() {
        return this.getStringAttribute('media_stream_name');
    }
    public set mediaStreamName(value: string) {
        this._mediaStreamName = value;
    }
    public resetMediaStreamName() {
        this._mediaStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaStreamNameInput() {
        return this._mediaStreamName;
    }
}

export class MediaStreamOutputConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : MediaStreamOutputConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): MediaStreamOutputConfigurationPropertyOutputReference {
        return new MediaStreamOutputConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SecretsManagerEncryptionKeyConfigurationProperty {
    /**
    * The ARN of the IAM role used for transit encryption to the router input using AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#role_arn CcFlowOutput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The ARN of the AWS Secrets Manager secret used for transit encryption to the router input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#secret_arn CcFlowOutput#secret_arn}
    */
    readonly secretArn?: string;
}
export class SecretsManagerEncryptionKeyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecretsManagerEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecretsManagerEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._secretArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._secretArn = value.secretArn;
        }
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
export interface FlowTransitEncryptionKeyConfigurationProperty {
    /**
    * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#automatic CcFlowOutput#automatic}
    */
    readonly automatic?: string;
    /**
    * The configuration settings for transit encryption of a flow output using AWS Secrets Manager, including the secret ARN and role ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#secrets_manager CcFlowOutput#secrets_manager}
    */
    readonly secretsManager?: SecretsManagerEncryptionKeyConfigurationProperty;
}
export class FlowTransitEncryptionKeyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FlowTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._automatic !== undefined) {
            hasAnyValues = true;
            internalValueResult.automatic = this._automatic;
        }
        if (this._secretsManager?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManager = this._secretsManager?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FlowTransitEncryptionKeyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._automatic = undefined;
            this._secretsManager.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._automatic = value.automatic;
            this._secretsManager.internalValue = value.secretsManager;
        }
    }

    // automatic - computed: true, optional: true, required: false
    private _automatic?: string; 
    public get automatic() {
        return this.getStringAttribute('automatic');
    }
    public set automatic(value: string) {
        this._automatic = value;
    }
    public resetAutomatic() {
        this._automatic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticInput() {
        return this._automatic;
    }

    // secrets_manager - computed: true, optional: true, required: false
    private _secretsManager = new SecretsManagerEncryptionKeyConfigurationPropertyOutputReference(this, "secrets_manager");
    public get secretsManager() {
        return this._secretsManager;
    }
    public putSecretsManager(value: SecretsManagerEncryptionKeyConfigurationProperty) {
        this._secretsManager.internalValue = value;
    }
    public resetSecretsManager() {
        this._secretsManager.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerInput() {
        return this._secretsManager.internalValue;
    }
}
export interface FlowTransitEncryptionProperty {
    /**
    * Configuration settings for flow transit encryption keys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#encryption_key_configuration CcFlowOutput#encryption_key_configuration}
    */
    readonly encryptionKeyConfiguration?: FlowTransitEncryptionKeyConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#encryption_key_type CcFlowOutput#encryption_key_type}
    */
    readonly encryptionKeyType?: string;
}
export class FlowTransitEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FlowTransitEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionKeyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKeyConfiguration = this._encryptionKeyConfiguration?.internalValue;
        }
        if (this._encryptionKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionKeyType = this._encryptionKeyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FlowTransitEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionKeyConfiguration.internalValue = undefined;
            this._encryptionKeyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionKeyConfiguration.internalValue = value.encryptionKeyConfiguration;
            this._encryptionKeyType = value.encryptionKeyType;
        }
    }

    // encryption_key_configuration - computed: true, optional: true, required: false
    private _encryptionKeyConfiguration = new FlowTransitEncryptionKeyConfigurationPropertyOutputReference(this, "encryption_key_configuration");
    public get encryptionKeyConfiguration() {
        return this._encryptionKeyConfiguration;
    }
    public putEncryptionKeyConfiguration(value: FlowTransitEncryptionKeyConfigurationProperty) {
        this._encryptionKeyConfiguration.internalValue = value;
    }
    public resetEncryptionKeyConfiguration() {
        this._encryptionKeyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyConfigurationInput() {
        return this._encryptionKeyConfiguration.internalValue;
    }

    // encryption_key_type - computed: true, optional: true, required: false
    private _encryptionKeyType?: string; 
    public get encryptionKeyType() {
        return this.getStringAttribute('encryption_key_type');
    }
    public set encryptionKeyType(value: string) {
        this._encryptionKeyType = value;
    }
    public resetEncryptionKeyType() {
        this._encryptionKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyTypeInput() {
        return this._encryptionKeyType;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#key CcFlowOutput#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#value CcFlowOutput#value}
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
export interface VpcInterfaceAttachmentProperty {
    /**
    * The name of the VPC interface to use for this output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_output#vpc_interface_name CcFlowOutput#vpc_interface_name}
    */
    readonly vpcInterfaceName?: string;
}
export class VpcInterfaceAttachmentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcInterfaceAttachmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcInterfaceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcInterfaceName = this._vpcInterfaceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcInterfaceAttachmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcInterfaceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcInterfaceName = value.vpcInterfaceName;
        }
    }

    // vpc_interface_name - computed: true, optional: true, required: false
    private _vpcInterfaceName?: string; 
    public get vpcInterfaceName() {
        return this.getStringAttribute('vpc_interface_name');
    }
    public set vpcInterfaceName(value: string) {
        this._vpcInterfaceName = value;
    }
    public resetVpcInterfaceName() {
        this._vpcInterfaceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInterfaceNameInput() {
        return this._vpcInterfaceName;
    }
}
}
