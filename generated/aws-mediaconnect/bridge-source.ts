// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBridgeSourceProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Number (ARN) of the bridge.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#bridge_arn CcBridgeSource#bridge_arn}
    */
    readonly bridgeArn: string;
    /**
    * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#flow_source CcBridgeSource#flow_source}
    */
    readonly flowSource?: CcBridgeSource.BridgeFlowSourceProperty;
    /**
    * The name of the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#name CcBridgeSource#name}
    */
    readonly name: string;
    /**
    * The source of the bridge. A network source originates at your premises.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#network_source CcBridgeSource#network_source}
    */
    readonly networkSource?: CcBridgeSource.BridgeNetworkSourceProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source awscc_mediaconnect_bridge_source}
*/
export class CcBridgeSource extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconnect_bridge_source";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBridgeSource resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBridgeSource to import
    * @param importFromId The id of the existing CcBridgeSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBridgeSource to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_bridge_source", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source awscc_mediaconnect_bridge_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBridgeSourceProps
    */
    public constructor(scope: Construct, id: string, config: CcBridgeSourceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconnect_bridge_source',
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
        this._bridgeArn = config.bridgeArn;
        this._flowSource.internalValue = config.flowSource;
        this._name = config.name;
        this._networkSource.internalValue = config.networkSource;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bridge_arn - computed: false, optional: false, required: true
    private _bridgeArn?: string; 
    public get bridgeArn() {
        return this.getStringAttribute('bridge_arn');
    }
    public set bridgeArn(value: string) {
        this._bridgeArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bridgeArnInput() {
        return this._bridgeArn;
    }

    // flow_source - computed: true, optional: true, required: false
    private _flowSource = new CcBridgeSource.BridgeFlowSourcePropertyOutputReference(this, "flow_source");
    public get flowSource() {
        return this._flowSource;
    }
    public putFlowSource(value: CcBridgeSource.BridgeFlowSourceProperty) {
        this._flowSource.internalValue = value;
    }
    public resetFlowSource() {
        this._flowSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowSourceInput() {
        return this._flowSource.internalValue;
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

    // network_source - computed: true, optional: true, required: false
    private _networkSource = new CcBridgeSource.BridgeNetworkSourcePropertyOutputReference(this, "network_source");
    public get networkSource() {
        return this._networkSource;
    }
    public putNetworkSource(value: CcBridgeSource.BridgeNetworkSourceProperty) {
        this._networkSource.internalValue = value;
    }
    public resetNetworkSource() {
        this._networkSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkSourceInput() {
        return this._networkSource.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            bridge_arn: cdktn.stringToTerraform(this._bridgeArn),
            flow_source: ccBridgeSourceBridgeFlowSourcePropertyToTerraform(this._flowSource.internalValue),
            name: cdktn.stringToTerraform(this._name),
            network_source: ccBridgeSourceBridgeNetworkSourcePropertyToTerraform(this._networkSource.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bridge_arn: {
                value: cdktn.stringToHclTerraform(this._bridgeArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            flow_source: {
                value: ccBridgeSourceBridgeFlowSourcePropertyToHclTerraform(this._flowSource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBridgeSource.BridgeFlowSourceProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_source: {
                value: ccBridgeSourceBridgeNetworkSourcePropertyToHclTerraform(this._networkSource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBridgeSource.BridgeNetworkSourceProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBridgeSourceVpcInterfaceAttachmentPropertyToTerraform(struct?: CcBridgeSource.VpcInterfaceAttachmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_interface_name: cdktn.stringToTerraform(struct!.vpcInterfaceName),
    }
}


export function ccBridgeSourceVpcInterfaceAttachmentPropertyToHclTerraform(struct?: CcBridgeSource.VpcInterfaceAttachmentProperty | cdktn.IResolvable): any {
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


export function ccBridgeSourceBridgeFlowSourcePropertyToTerraform(struct?: CcBridgeSource.BridgeFlowSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        flow_arn: cdktn.stringToTerraform(struct!.flowArn),
        flow_vpc_interface_attachment: ccBridgeSourceVpcInterfaceAttachmentPropertyToTerraform(struct!.flowVpcInterfaceAttachment),
    }
}


export function ccBridgeSourceBridgeFlowSourcePropertyToHclTerraform(struct?: CcBridgeSource.BridgeFlowSourceProperty | cdktn.IResolvable): any {
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
        flow_vpc_interface_attachment: {
            value: ccBridgeSourceVpcInterfaceAttachmentPropertyToHclTerraform(struct!.flowVpcInterfaceAttachment),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcInterfaceAttachmentProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBridgeSourceMulticastSourceSettingsPropertyToTerraform(struct?: CcBridgeSource.MulticastSourceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        multicast_source_ip: cdktn.stringToTerraform(struct!.multicastSourceIp),
    }
}


export function ccBridgeSourceMulticastSourceSettingsPropertyToHclTerraform(struct?: CcBridgeSource.MulticastSourceSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        multicast_source_ip: {
            value: cdktn.stringToHclTerraform(struct!.multicastSourceIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBridgeSourceBridgeNetworkSourcePropertyToTerraform(struct?: CcBridgeSource.BridgeNetworkSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        multicast_ip: cdktn.stringToTerraform(struct!.multicastIp),
        multicast_source_settings: ccBridgeSourceMulticastSourceSettingsPropertyToTerraform(struct!.multicastSourceSettings),
        network_name: cdktn.stringToTerraform(struct!.networkName),
        port: cdktn.numberToTerraform(struct!.port),
        protocol: cdktn.stringToTerraform(struct!.protocol),
    }
}


export function ccBridgeSourceBridgeNetworkSourcePropertyToHclTerraform(struct?: CcBridgeSource.BridgeNetworkSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        multicast_ip: {
            value: cdktn.stringToHclTerraform(struct!.multicastIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        multicast_source_settings: {
            value: ccBridgeSourceMulticastSourceSettingsPropertyToHclTerraform(struct!.multicastSourceSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "MulticastSourceSettingsProperty",
        },
        network_name: {
            value: cdktn.stringToHclTerraform(struct!.networkName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcBridgeSource {
export interface VpcInterfaceAttachmentProperty {
    /**
    * The name of the VPC interface to use for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#vpc_interface_name CcBridgeSource#vpc_interface_name}
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
export interface BridgeFlowSourceProperty {
    /**
    * The ARN of the cloud flow used as a source of this bridge.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#flow_arn CcBridgeSource#flow_arn}
    */
    readonly flowArn?: string;
    /**
    * The name of the VPC interface attachment to use for this source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#flow_vpc_interface_attachment CcBridgeSource#flow_vpc_interface_attachment}
    */
    readonly flowVpcInterfaceAttachment?: VpcInterfaceAttachmentProperty;
}
export class BridgeFlowSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BridgeFlowSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._flowArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowArn = this._flowArn;
        }
        if (this._flowVpcInterfaceAttachment?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowVpcInterfaceAttachment = this._flowVpcInterfaceAttachment?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BridgeFlowSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flowArn = undefined;
            this._flowVpcInterfaceAttachment.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flowArn = value.flowArn;
            this._flowVpcInterfaceAttachment.internalValue = value.flowVpcInterfaceAttachment;
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

    // flow_vpc_interface_attachment - computed: true, optional: true, required: false
    private _flowVpcInterfaceAttachment = new VpcInterfaceAttachmentPropertyOutputReference(this, "flow_vpc_interface_attachment");
    public get flowVpcInterfaceAttachment() {
        return this._flowVpcInterfaceAttachment;
    }
    public putFlowVpcInterfaceAttachment(value: VpcInterfaceAttachmentProperty) {
        this._flowVpcInterfaceAttachment.internalValue = value;
    }
    public resetFlowVpcInterfaceAttachment() {
        this._flowVpcInterfaceAttachment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowVpcInterfaceAttachmentInput() {
        return this._flowVpcInterfaceAttachment.internalValue;
    }
}
export interface MulticastSourceSettingsProperty {
    /**
    * The IP address of the source for source-specific multicast (SSM).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#multicast_source_ip CcBridgeSource#multicast_source_ip}
    */
    readonly multicastSourceIp?: string;
}
export class MulticastSourceSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MulticastSourceSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._multicastSourceIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.multicastSourceIp = this._multicastSourceIp;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MulticastSourceSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._multicastSourceIp = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._multicastSourceIp = value.multicastSourceIp;
        }
    }

    // multicast_source_ip - computed: true, optional: true, required: false
    private _multicastSourceIp?: string; 
    public get multicastSourceIp() {
        return this.getStringAttribute('multicast_source_ip');
    }
    public set multicastSourceIp(value: string) {
        this._multicastSourceIp = value;
    }
    public resetMulticastSourceIp() {
        this._multicastSourceIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multicastSourceIpInput() {
        return this._multicastSourceIp;
    }
}
export interface BridgeNetworkSourceProperty {
    /**
    * The network source multicast IP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#multicast_ip CcBridgeSource#multicast_ip}
    */
    readonly multicastIp?: string;
    /**
    * The settings related to the multicast source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#multicast_source_settings CcBridgeSource#multicast_source_settings}
    */
    readonly multicastSourceSettings?: MulticastSourceSettingsProperty;
    /**
    * The network source's gateway network name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#network_name CcBridgeSource#network_name}
    */
    readonly networkName?: string;
    /**
    * The network source port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#port CcBridgeSource#port}
    */
    readonly port?: number;
    /**
    * The network source protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_bridge_source#protocol CcBridgeSource#protocol}
    */
    readonly protocol?: string;
}
export class BridgeNetworkSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BridgeNetworkSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._multicastIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.multicastIp = this._multicastIp;
        }
        if (this._multicastSourceSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.multicastSourceSettings = this._multicastSourceSettings?.internalValue;
        }
        if (this._networkName !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkName = this._networkName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BridgeNetworkSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._multicastIp = undefined;
            this._multicastSourceSettings.internalValue = undefined;
            this._networkName = undefined;
            this._port = undefined;
            this._protocol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._multicastIp = value.multicastIp;
            this._multicastSourceSettings.internalValue = value.multicastSourceSettings;
            this._networkName = value.networkName;
            this._port = value.port;
            this._protocol = value.protocol;
        }
    }

    // multicast_ip - computed: true, optional: true, required: false
    private _multicastIp?: string; 
    public get multicastIp() {
        return this.getStringAttribute('multicast_ip');
    }
    public set multicastIp(value: string) {
        this._multicastIp = value;
    }
    public resetMulticastIp() {
        this._multicastIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multicastIpInput() {
        return this._multicastIp;
    }

    // multicast_source_settings - computed: true, optional: true, required: false
    private _multicastSourceSettings = new MulticastSourceSettingsPropertyOutputReference(this, "multicast_source_settings");
    public get multicastSourceSettings() {
        return this._multicastSourceSettings;
    }
    public putMulticastSourceSettings(value: MulticastSourceSettingsProperty) {
        this._multicastSourceSettings.internalValue = value;
    }
    public resetMulticastSourceSettings() {
        this._multicastSourceSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multicastSourceSettingsInput() {
        return this._multicastSourceSettings.internalValue;
    }

    // network_name - computed: true, optional: true, required: false
    private _networkName?: string; 
    public get networkName() {
        return this.getStringAttribute('network_name');
    }
    public set networkName(value: string) {
        this._networkName = value;
    }
    public resetNetworkName() {
        this._networkName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkNameInput() {
        return this._networkName;
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
}
}
