// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProbeProps extends cdktn.TerraformMetaArguments {
    /**
    * The literal IPv4 or IPv6 address the probe sends traffic to. The service rejects a domain name and a CIDR block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe#destination CcProbe#destination}
    */
    readonly destination: string;
    /**
    * The port the probe sends traffic to. Applies to the TCP protocol only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe#destination_port CcProbe#destination_port}
    */
    readonly destinationPort?: number;
    /**
    * The name of the monitor the probe belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe#monitor_name CcProbe#monitor_name}
    */
    readonly monitorName: string;
    /**
    * The size, in bytes, of the packets the probe sends.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe#packet_size CcProbe#packet_size}
    */
    readonly packetSize?: number;
    /**
    * The protocol the probe uses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe#protocol CcProbe#protocol}
    */
    readonly protocol: string;
    /**
    * The ARN of the subnet the probe sends traffic from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe#source_arn CcProbe#source_arn}
    */
    readonly sourceArn: string;
    /**
    * The tags for the probe.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe#tags CcProbe#tags}
    */
    readonly tags?: CcProbe.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe awscc_networkmonitor_probe}
*/
export class CcProbe extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkmonitor_probe";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProbe resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProbe to import
    * @param importFromId The id of the existing CcProbe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProbe to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmonitor_probe", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe awscc_networkmonitor_probe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProbeProps
    */
    public constructor(scope: Construct, id: string, config: CcProbeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkmonitor_probe',
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
        this._destination = config.destination;
        this._destinationPort = config.destinationPort;
        this._monitorName = config.monitorName;
        this._packetSize = config.packetSize;
        this._protocol = config.protocol;
        this._sourceArn = config.sourceArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // address_family - computed: true, optional: false, required: false
    public get addressFamily() {
        return this.getStringAttribute('address_family');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // destination - computed: false, optional: false, required: true
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }

    // monitor_name - computed: false, optional: false, required: true
    private _monitorName?: string; 
    public get monitorName() {
        return this.getStringAttribute('monitor_name');
    }
    public set monitorName(value: string) {
        this._monitorName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get monitorNameInput() {
        return this._monitorName;
    }

    // packet_size - computed: true, optional: true, required: false
    private _packetSize?: number; 
    public get packetSize() {
        return this.getNumberAttribute('packet_size');
    }
    public set packetSize(value: number) {
        this._packetSize = value;
    }
    public resetPacketSize() {
        this._packetSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packetSizeInput() {
        return this._packetSize;
    }

    // probe_arn - computed: true, optional: false, required: false
    public get probeArn() {
        return this.getStringAttribute('probe_arn');
    }

    // probe_id - computed: true, optional: false, required: false
    public get probeId() {
        return this.getStringAttribute('probe_id');
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // source_arn - computed: false, optional: false, required: true
    private _sourceArn?: string; 
    public get sourceArn() {
        return this.getStringAttribute('source_arn');
    }
    public set sourceArn(value: string) {
        this._sourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceArnInput() {
        return this._sourceArn;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcProbe.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcProbe.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            destination: cdktn.stringToTerraform(this._destination),
            destination_port: cdktn.numberToTerraform(this._destinationPort),
            monitor_name: cdktn.stringToTerraform(this._monitorName),
            packet_size: cdktn.numberToTerraform(this._packetSize),
            protocol: cdktn.stringToTerraform(this._protocol),
            source_arn: cdktn.stringToTerraform(this._sourceArn),
            tags: cdktn.listMapper(ccProbeTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            destination: {
                value: cdktn.stringToHclTerraform(this._destination),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_port: {
                value: cdktn.numberToHclTerraform(this._destinationPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            monitor_name: {
                value: cdktn.stringToHclTerraform(this._monitorName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            packet_size: {
                value: cdktn.numberToHclTerraform(this._packetSize),
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
            source_arn: {
                value: cdktn.stringToHclTerraform(this._sourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccProbeTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProbe.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProbeTagsPropertyToTerraform(struct?: CcProbe.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProbeTagsPropertyToHclTerraform(struct?: CcProbe.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcProbe {
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe#key CcProbe#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/networkmonitor_probe#value CcProbe#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
