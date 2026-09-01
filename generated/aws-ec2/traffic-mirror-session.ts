// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTrafficMirrorSessionProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the Traffic Mirror session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#description CcTrafficMirrorSession#description}
    */
    readonly description?: string;
    /**
    * The ID of the source network interface.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#network_interface_id CcTrafficMirrorSession#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * The ID of the account that owns the Traffic Mirror session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#owner_id CcTrafficMirrorSession#owner_id}
    */
    readonly ownerId?: string;
    /**
    * The number of bytes in each packet to mirror.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#packet_length CcTrafficMirrorSession#packet_length}
    */
    readonly packetLength?: number;
    /**
    * The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#session_number CcTrafficMirrorSession#session_number}
    */
    readonly sessionNumber: number;
    /**
    * The tags assigned to the Traffic Mirror session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#tags CcTrafficMirrorSession#tags}
    */
    readonly tags?: CcTrafficMirrorSession.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of a Traffic Mirror filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#traffic_mirror_filter_id CcTrafficMirrorSession#traffic_mirror_filter_id}
    */
    readonly trafficMirrorFilterId: string;
    /**
    * The ID of a Traffic Mirror target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#traffic_mirror_target_id CcTrafficMirrorSession#traffic_mirror_target_id}
    */
    readonly trafficMirrorTargetId: string;
    /**
    * The VXLAN ID for the Traffic Mirror session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#virtual_network_id CcTrafficMirrorSession#virtual_network_id}
    */
    readonly virtualNetworkId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session awscc_ec2_traffic_mirror_session}
*/
export class CcTrafficMirrorSession extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_traffic_mirror_session";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTrafficMirrorSession resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTrafficMirrorSession to import
    * @param importFromId The id of the existing CcTrafficMirrorSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTrafficMirrorSession to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_traffic_mirror_session", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session awscc_ec2_traffic_mirror_session} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTrafficMirrorSessionProps
    */
    public constructor(scope: Construct, id: string, config: CcTrafficMirrorSessionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_traffic_mirror_session',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
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
        this._networkInterfaceId = config.networkInterfaceId;
        this._ownerId = config.ownerId;
        this._packetLength = config.packetLength;
        this._sessionNumber = config.sessionNumber;
        this._tags.internalValue = config.tags;
        this._trafficMirrorFilterId = config.trafficMirrorFilterId;
        this._trafficMirrorTargetId = config.trafficMirrorTargetId;
        this._virtualNetworkId = config.virtualNetworkId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // network_interface_id - computed: false, optional: false, required: true
    private _networkInterfaceId?: string; 
    public get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    public set networkInterfaceId(value: string) {
        this._networkInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }

    // owner_id - computed: true, optional: true, required: false
    private _ownerId?: string; 
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    public set ownerId(value: string) {
        this._ownerId = value;
    }
    public resetOwnerId() {
        this._ownerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerIdInput() {
        return this._ownerId;
    }

    // packet_length - computed: true, optional: true, required: false
    private _packetLength?: number; 
    public get packetLength() {
        return this.getNumberAttribute('packet_length');
    }
    public set packetLength(value: number) {
        this._packetLength = value;
    }
    public resetPacketLength() {
        this._packetLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packetLengthInput() {
        return this._packetLength;
    }

    // session_number - computed: false, optional: false, required: true
    private _sessionNumber?: number; 
    public get sessionNumber() {
        return this.getNumberAttribute('session_number');
    }
    public set sessionNumber(value: number) {
        this._sessionNumber = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionNumberInput() {
        return this._sessionNumber;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTrafficMirrorSession.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTrafficMirrorSession.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // traffic_mirror_filter_id - computed: false, optional: false, required: true
    private _trafficMirrorFilterId?: string; 
    public get trafficMirrorFilterId() {
        return this.getStringAttribute('traffic_mirror_filter_id');
    }
    public set trafficMirrorFilterId(value: string) {
        this._trafficMirrorFilterId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficMirrorFilterIdInput() {
        return this._trafficMirrorFilterId;
    }

    // traffic_mirror_session_id - computed: true, optional: false, required: false
    public get trafficMirrorSessionId() {
        return this.getStringAttribute('traffic_mirror_session_id');
    }

    // traffic_mirror_target_id - computed: false, optional: false, required: true
    private _trafficMirrorTargetId?: string; 
    public get trafficMirrorTargetId() {
        return this.getStringAttribute('traffic_mirror_target_id');
    }
    public set trafficMirrorTargetId(value: string) {
        this._trafficMirrorTargetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficMirrorTargetIdInput() {
        return this._trafficMirrorTargetId;
    }

    // virtual_network_id - computed: true, optional: true, required: false
    private _virtualNetworkId?: number; 
    public get virtualNetworkId() {
        return this.getNumberAttribute('virtual_network_id');
    }
    public set virtualNetworkId(value: number) {
        this._virtualNetworkId = value;
    }
    public resetVirtualNetworkId() {
        this._virtualNetworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualNetworkIdInput() {
        return this._virtualNetworkId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            network_interface_id: cdktn.stringToTerraform(this._networkInterfaceId),
            owner_id: cdktn.stringToTerraform(this._ownerId),
            packet_length: cdktn.numberToTerraform(this._packetLength),
            session_number: cdktn.numberToTerraform(this._sessionNumber),
            tags: cdktn.listMapper(ccTrafficMirrorSessionTagPropertyToTerraform, false)(this._tags.internalValue),
            traffic_mirror_filter_id: cdktn.stringToTerraform(this._trafficMirrorFilterId),
            traffic_mirror_target_id: cdktn.stringToTerraform(this._trafficMirrorTargetId),
            virtual_network_id: cdktn.numberToTerraform(this._virtualNetworkId),
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
            network_interface_id: {
                value: cdktn.stringToHclTerraform(this._networkInterfaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            owner_id: {
                value: cdktn.stringToHclTerraform(this._ownerId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            packet_length: {
                value: cdktn.numberToHclTerraform(this._packetLength),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            session_number: {
                value: cdktn.numberToHclTerraform(this._sessionNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTrafficMirrorSessionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTrafficMirrorSession.TagPropertyList",
            },
            traffic_mirror_filter_id: {
                value: cdktn.stringToHclTerraform(this._trafficMirrorFilterId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            traffic_mirror_target_id: {
                value: cdktn.stringToHclTerraform(this._trafficMirrorTargetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            virtual_network_id: {
                value: cdktn.numberToHclTerraform(this._virtualNetworkId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTrafficMirrorSessionTagPropertyToTerraform(struct?: CcTrafficMirrorSession.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTrafficMirrorSessionTagPropertyToHclTerraform(struct?: CcTrafficMirrorSession.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTrafficMirrorSession {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#key CcTrafficMirrorSession#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_traffic_mirror_session#value CcTrafficMirrorSession#value}
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
