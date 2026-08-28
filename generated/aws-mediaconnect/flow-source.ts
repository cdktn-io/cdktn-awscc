// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFlowSourceProps extends cdktn.TerraformMetaArguments {
    /**
    * The type of encryption that is used on the content ingested from this source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#decryption CcFlowSource#decryption}
    */
    readonly decryption?: CcFlowSource.EncryptionProperty;
    /**
    * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#description CcFlowSource#description}
    */
    readonly description: string;
    /**
    * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#entitlement_arn CcFlowSource#entitlement_arn}
    */
    readonly entitlementArn?: string;
    /**
    * The ARN of the flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#flow_arn CcFlowSource#flow_arn}
    */
    readonly flowArn: string;
    /**
    * The source configuration for cloud flows receiving a stream from a bridge.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#gateway_bridge_source CcFlowSource#gateway_bridge_source}
    */
    readonly gatewayBridgeSource?: CcFlowSource.GatewayBridgeSourceProperty;
    /**
    * The port that the flow will be listening on for incoming content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#ingest_port CcFlowSource#ingest_port}
    */
    readonly ingestPort?: number;
    /**
    * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#max_bitrate CcFlowSource#max_bitrate}
    */
    readonly maxBitrate?: number;
    /**
    * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#max_latency CcFlowSource#max_latency}
    */
    readonly maxLatency?: number;
    /**
    * The minimum latency in milliseconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#min_latency CcFlowSource#min_latency}
    */
    readonly minLatency?: number;
    /**
    * The name of the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#name CcFlowSource#name}
    */
    readonly name: string;
    /**
    * The protocol that is used by the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#protocol CcFlowSource#protocol}
    */
    readonly protocol?: string;
    /**
    * The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#sender_control_port CcFlowSource#sender_control_port}
    */
    readonly senderControlPort?: number;
    /**
    * The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#sender_ip_address CcFlowSource#sender_ip_address}
    */
    readonly senderIpAddress?: string;
    /**
    * Source IP or domain name for SRT-caller protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#source_listener_address CcFlowSource#source_listener_address}
    */
    readonly sourceListenerAddress?: string;
    /**
    * Source port for SRT-caller protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#source_listener_port CcFlowSource#source_listener_port}
    */
    readonly sourceListenerPort?: number;
    /**
    * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#stream_id CcFlowSource#stream_id}
    */
    readonly streamId?: string;
    /**
    * Key-value pairs that can be used to tag and organize this flow source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#tags CcFlowSource#tags}
    */
    readonly tags?: CcFlowSource.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the VPC Interface this Source is configured with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#vpc_interface_name CcFlowSource#vpc_interface_name}
    */
    readonly vpcInterfaceName?: string;
    /**
    * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#whitelist_cidr CcFlowSource#whitelist_cidr}
    */
    readonly whitelistCidr?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source awscc_mediaconnect_flow_source}
*/
export class CcFlowSource extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconnect_flow_source";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFlowSource resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFlowSource to import
    * @param importFromId The id of the existing CcFlowSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFlowSource to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_flow_source", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source awscc_mediaconnect_flow_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFlowSourceProps
    */
    public constructor(scope: Construct, id: string, config: CcFlowSourceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconnect_flow_source',
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
        this._decryption.internalValue = config.decryption;
        this._description = config.description;
        this._entitlementArn = config.entitlementArn;
        this._flowArn = config.flowArn;
        this._gatewayBridgeSource.internalValue = config.gatewayBridgeSource;
        this._ingestPort = config.ingestPort;
        this._maxBitrate = config.maxBitrate;
        this._maxLatency = config.maxLatency;
        this._minLatency = config.minLatency;
        this._name = config.name;
        this._protocol = config.protocol;
        this._senderControlPort = config.senderControlPort;
        this._senderIpAddress = config.senderIpAddress;
        this._sourceListenerAddress = config.sourceListenerAddress;
        this._sourceListenerPort = config.sourceListenerPort;
        this._streamId = config.streamId;
        this._tags.internalValue = config.tags;
        this._vpcInterfaceName = config.vpcInterfaceName;
        this._whitelistCidr = config.whitelistCidr;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // decryption - computed: true, optional: true, required: false
    private _decryption = new CcFlowSource.EncryptionPropertyOutputReference(this, "decryption");
    public get decryption() {
        return this._decryption;
    }
    public putDecryption(value: CcFlowSource.EncryptionProperty) {
        this._decryption.internalValue = value;
    }
    public resetDecryption() {
        this._decryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptionInput() {
        return this._decryption.internalValue;
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
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

    // gateway_bridge_source - computed: true, optional: true, required: false
    private _gatewayBridgeSource = new CcFlowSource.GatewayBridgeSourcePropertyOutputReference(this, "gateway_bridge_source");
    public get gatewayBridgeSource() {
        return this._gatewayBridgeSource;
    }
    public putGatewayBridgeSource(value: CcFlowSource.GatewayBridgeSourceProperty) {
        this._gatewayBridgeSource.internalValue = value;
    }
    public resetGatewayBridgeSource() {
        this._gatewayBridgeSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayBridgeSourceInput() {
        return this._gatewayBridgeSource.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ingest_ip - computed: true, optional: false, required: false
    public get ingestIp() {
        return this.getStringAttribute('ingest_ip');
    }

    // ingest_port - computed: true, optional: true, required: false
    private _ingestPort?: number; 
    public get ingestPort() {
        return this.getNumberAttribute('ingest_port');
    }
    public set ingestPort(value: number) {
        this._ingestPort = value;
    }
    public resetIngestPort() {
        this._ingestPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingestPortInput() {
        return this._ingestPort;
    }

    // max_bitrate - computed: true, optional: true, required: false
    private _maxBitrate?: number; 
    public get maxBitrate() {
        return this.getNumberAttribute('max_bitrate');
    }
    public set maxBitrate(value: number) {
        this._maxBitrate = value;
    }
    public resetMaxBitrate() {
        this._maxBitrate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxBitrateInput() {
        return this._maxBitrate;
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

    // sender_control_port - computed: true, optional: true, required: false
    private _senderControlPort?: number; 
    public get senderControlPort() {
        return this.getNumberAttribute('sender_control_port');
    }
    public set senderControlPort(value: number) {
        this._senderControlPort = value;
    }
    public resetSenderControlPort() {
        this._senderControlPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get senderControlPortInput() {
        return this._senderControlPort;
    }

    // sender_ip_address - computed: true, optional: true, required: false
    private _senderIpAddress?: string; 
    public get senderIpAddress() {
        return this.getStringAttribute('sender_ip_address');
    }
    public set senderIpAddress(value: string) {
        this._senderIpAddress = value;
    }
    public resetSenderIpAddress() {
        this._senderIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get senderIpAddressInput() {
        return this._senderIpAddress;
    }

    // source_arn - computed: true, optional: false, required: false
    public get sourceArn() {
        return this.getStringAttribute('source_arn');
    }

    // source_ingest_port - computed: true, optional: false, required: false
    public get sourceIngestPort() {
        return this.getStringAttribute('source_ingest_port');
    }

    // source_listener_address - computed: true, optional: true, required: false
    private _sourceListenerAddress?: string; 
    public get sourceListenerAddress() {
        return this.getStringAttribute('source_listener_address');
    }
    public set sourceListenerAddress(value: string) {
        this._sourceListenerAddress = value;
    }
    public resetSourceListenerAddress() {
        this._sourceListenerAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceListenerAddressInput() {
        return this._sourceListenerAddress;
    }

    // source_listener_port - computed: true, optional: true, required: false
    private _sourceListenerPort?: number; 
    public get sourceListenerPort() {
        return this.getNumberAttribute('source_listener_port');
    }
    public set sourceListenerPort(value: number) {
        this._sourceListenerPort = value;
    }
    public resetSourceListenerPort() {
        this._sourceListenerPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceListenerPortInput() {
        return this._sourceListenerPort;
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
    private _tags = new CcFlowSource.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFlowSource.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // whitelist_cidr - computed: true, optional: true, required: false
    private _whitelistCidr?: string; 
    public get whitelistCidr() {
        return this.getStringAttribute('whitelist_cidr');
    }
    public set whitelistCidr(value: string) {
        this._whitelistCidr = value;
    }
    public resetWhitelistCidr() {
        this._whitelistCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get whitelistCidrInput() {
        return this._whitelistCidr;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            decryption: ccFlowSourceEncryptionPropertyToTerraform(this._decryption.internalValue),
            description: cdktn.stringToTerraform(this._description),
            entitlement_arn: cdktn.stringToTerraform(this._entitlementArn),
            flow_arn: cdktn.stringToTerraform(this._flowArn),
            gateway_bridge_source: ccFlowSourceGatewayBridgeSourcePropertyToTerraform(this._gatewayBridgeSource.internalValue),
            ingest_port: cdktn.numberToTerraform(this._ingestPort),
            max_bitrate: cdktn.numberToTerraform(this._maxBitrate),
            max_latency: cdktn.numberToTerraform(this._maxLatency),
            min_latency: cdktn.numberToTerraform(this._minLatency),
            name: cdktn.stringToTerraform(this._name),
            protocol: cdktn.stringToTerraform(this._protocol),
            sender_control_port: cdktn.numberToTerraform(this._senderControlPort),
            sender_ip_address: cdktn.stringToTerraform(this._senderIpAddress),
            source_listener_address: cdktn.stringToTerraform(this._sourceListenerAddress),
            source_listener_port: cdktn.numberToTerraform(this._sourceListenerPort),
            stream_id: cdktn.stringToTerraform(this._streamId),
            tags: cdktn.listMapper(ccFlowSourceTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_interface_name: cdktn.stringToTerraform(this._vpcInterfaceName),
            whitelist_cidr: cdktn.stringToTerraform(this._whitelistCidr),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            decryption: {
                value: ccFlowSourceEncryptionPropertyToHclTerraform(this._decryption.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlowSource.EncryptionProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            entitlement_arn: {
                value: cdktn.stringToHclTerraform(this._entitlementArn),
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
            gateway_bridge_source: {
                value: ccFlowSourceGatewayBridgeSourcePropertyToHclTerraform(this._gatewayBridgeSource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlowSource.GatewayBridgeSourceProperty",
            },
            ingest_port: {
                value: cdktn.numberToHclTerraform(this._ingestPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_bitrate: {
                value: cdktn.numberToHclTerraform(this._maxBitrate),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_latency: {
                value: cdktn.numberToHclTerraform(this._maxLatency),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
            protocol: {
                value: cdktn.stringToHclTerraform(this._protocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sender_control_port: {
                value: cdktn.numberToHclTerraform(this._senderControlPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            sender_ip_address: {
                value: cdktn.stringToHclTerraform(this._senderIpAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_listener_address: {
                value: cdktn.stringToHclTerraform(this._sourceListenerAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_listener_port: {
                value: cdktn.numberToHclTerraform(this._sourceListenerPort),
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
                value: cdktn.listMapperHcl(ccFlowSourceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFlowSource.TagPropertyList",
            },
            vpc_interface_name: {
                value: cdktn.stringToHclTerraform(this._vpcInterfaceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            whitelist_cidr: {
                value: cdktn.stringToHclTerraform(this._whitelistCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFlowSourceEncryptionPropertyToTerraform(struct?: CcFlowSource.EncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        algorithm: cdktn.stringToTerraform(struct!.algorithm),
        constant_initialization_vector: cdktn.stringToTerraform(struct!.constantInitializationVector),
        device_id: cdktn.stringToTerraform(struct!.deviceId),
        key_type: cdktn.stringToTerraform(struct!.keyType),
        region: cdktn.stringToTerraform(struct!.region),
        resource_id: cdktn.stringToTerraform(struct!.resourceId),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccFlowSourceEncryptionPropertyToHclTerraform(struct?: CcFlowSource.EncryptionProperty | cdktn.IResolvable): any {
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
        constant_initialization_vector: {
            value: cdktn.stringToHclTerraform(struct!.constantInitializationVector),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_id: {
            value: cdktn.stringToHclTerraform(struct!.deviceId),
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
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
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


export function ccFlowSourceVpcInterfaceAttachmentPropertyToTerraform(struct?: CcFlowSource.VpcInterfaceAttachmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_interface_name: cdktn.stringToTerraform(struct!.vpcInterfaceName),
    }
}


export function ccFlowSourceVpcInterfaceAttachmentPropertyToHclTerraform(struct?: CcFlowSource.VpcInterfaceAttachmentProperty | cdktn.IResolvable): any {
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


export function ccFlowSourceGatewayBridgeSourcePropertyToTerraform(struct?: CcFlowSource.GatewayBridgeSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bridge_arn: cdktn.stringToTerraform(struct!.bridgeArn),
        vpc_interface_attachment: ccFlowSourceVpcInterfaceAttachmentPropertyToTerraform(struct!.vpcInterfaceAttachment),
    }
}


export function ccFlowSourceGatewayBridgeSourcePropertyToHclTerraform(struct?: CcFlowSource.GatewayBridgeSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bridge_arn: {
            value: cdktn.stringToHclTerraform(struct!.bridgeArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_interface_attachment: {
            value: ccFlowSourceVpcInterfaceAttachmentPropertyToHclTerraform(struct!.vpcInterfaceAttachment),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcInterfaceAttachmentProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowSourceTagPropertyToTerraform(struct?: CcFlowSource.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFlowSourceTagPropertyToHclTerraform(struct?: CcFlowSource.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFlowSource {
export interface EncryptionProperty {
    /**
    * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#algorithm CcFlowSource#algorithm}
    */
    readonly algorithm?: string;
    /**
    * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#constant_initialization_vector CcFlowSource#constant_initialization_vector}
    */
    readonly constantInitializationVector?: string;
    /**
    * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#device_id CcFlowSource#device_id}
    */
    readonly deviceId?: string;
    /**
    * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#key_type CcFlowSource#key_type}
    */
    readonly keyType?: string;
    /**
    * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#region CcFlowSource#region}
    */
    readonly region?: string;
    /**
    * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#resource_id CcFlowSource#resource_id}
    */
    readonly resourceId?: string;
    /**
    * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#role_arn CcFlowSource#role_arn}
    */
    readonly roleArn?: string;
    /**
    *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#secret_arn CcFlowSource#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#url CcFlowSource#url}
    */
    readonly url?: string;
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
        if (this._constantInitializationVector !== undefined) {
            hasAnyValues = true;
            internalValueResult.constantInitializationVector = this._constantInitializationVector;
        }
        if (this._deviceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceId = this._deviceId;
        }
        if (this._keyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyType = this._keyType;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._resourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithm = undefined;
            this._constantInitializationVector = undefined;
            this._deviceId = undefined;
            this._keyType = undefined;
            this._region = undefined;
            this._resourceId = undefined;
            this._roleArn = undefined;
            this._secretArn = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithm = value.algorithm;
            this._constantInitializationVector = value.constantInitializationVector;
            this._deviceId = value.deviceId;
            this._keyType = value.keyType;
            this._region = value.region;
            this._resourceId = value.resourceId;
            this._roleArn = value.roleArn;
            this._secretArn = value.secretArn;
            this._url = value.url;
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

    // device_id - computed: true, optional: true, required: false
    private _deviceId?: string; 
    public get deviceId() {
        return this.getStringAttribute('device_id');
    }
    public set deviceId(value: string) {
        this._deviceId = value;
    }
    public resetDeviceId() {
        this._deviceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceIdInput() {
        return this._deviceId;
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

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
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
export interface VpcInterfaceAttachmentProperty {
    /**
    * The name of the VPC interface to use for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#vpc_interface_name CcFlowSource#vpc_interface_name}
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
export interface GatewayBridgeSourceProperty {
    /**
    * The ARN of the bridge feeding this flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#bridge_arn CcFlowSource#bridge_arn}
    */
    readonly bridgeArn?: string;
    /**
    * The name of the VPC interface attachment to use for this bridge source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#vpc_interface_attachment CcFlowSource#vpc_interface_attachment}
    */
    readonly vpcInterfaceAttachment?: VpcInterfaceAttachmentProperty;
}
export class GatewayBridgeSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GatewayBridgeSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bridgeArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bridgeArn = this._bridgeArn;
        }
        if (this._vpcInterfaceAttachment?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcInterfaceAttachment = this._vpcInterfaceAttachment?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GatewayBridgeSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bridgeArn = undefined;
            this._vpcInterfaceAttachment.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bridgeArn = value.bridgeArn;
            this._vpcInterfaceAttachment.internalValue = value.vpcInterfaceAttachment;
        }
    }

    // bridge_arn - computed: true, optional: true, required: false
    private _bridgeArn?: string; 
    public get bridgeArn() {
        return this.getStringAttribute('bridge_arn');
    }
    public set bridgeArn(value: string) {
        this._bridgeArn = value;
    }
    public resetBridgeArn() {
        this._bridgeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bridgeArnInput() {
        return this._bridgeArn;
    }

    // vpc_interface_attachment - computed: true, optional: true, required: false
    private _vpcInterfaceAttachment = new VpcInterfaceAttachmentPropertyOutputReference(this, "vpc_interface_attachment");
    public get vpcInterfaceAttachment() {
        return this._vpcInterfaceAttachment;
    }
    public putVpcInterfaceAttachment(value: VpcInterfaceAttachmentProperty) {
        this._vpcInterfaceAttachment.internalValue = value;
    }
    public resetVpcInterfaceAttachment() {
        this._vpcInterfaceAttachment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInterfaceAttachmentInput() {
        return this._vpcInterfaceAttachment.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#key CcFlowSource#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_flow_source#value CcFlowSource#value}
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
