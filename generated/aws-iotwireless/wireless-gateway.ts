// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWirelessGatewayProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of Wireless Gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#description CcWirelessGateway#description}
    */
    readonly description?: string;
    /**
    * The date and time when the most recent uplink was received.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#last_uplink_received_at CcWirelessGateway#last_uplink_received_at}
    */
    readonly lastUplinkReceivedAt?: string;
    /**
    * The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#lo_ra_wan CcWirelessGateway#lo_ra_wan}
    */
    readonly loRaWan: CcWirelessGateway.LoRaWANGatewayProperty;
    /**
    * Name of Wireless Gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#name CcWirelessGateway#name}
    */
    readonly name?: string;
    /**
    * A list of key-value pairs that contain metadata for the gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#tags CcWirelessGateway#tags}
    */
    readonly tags?: CcWirelessGateway.TagProperty[] | cdktn.IResolvable;
    /**
    * Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#thing_arn CcWirelessGateway#thing_arn}
    */
    readonly thingArn?: string;
    /**
    * Thing Name. If there is a Thing created, this can be returned with a Get call.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#thing_name CcWirelessGateway#thing_name}
    */
    readonly thingName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway awscc_iotwireless_wireless_gateway}
*/
export class CcWirelessGateway extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotwireless_wireless_gateway";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWirelessGateway resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWirelessGateway to import
    * @param importFromId The id of the existing CcWirelessGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWirelessGateway to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_wireless_gateway", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway awscc_iotwireless_wireless_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWirelessGatewayProps
    */
    public constructor(scope: Construct, id: string, config: CcWirelessGatewayProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotwireless_wireless_gateway',
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
        this._description = config.description;
        this._lastUplinkReceivedAt = config.lastUplinkReceivedAt;
        this._loRaWan.internalValue = config.loRaWan;
        this._name = config.name;
        this._tags.internalValue = config.tags;
        this._thingArn = config.thingArn;
        this._thingName = config.thingName;
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

    // lo_ra_wan - computed: false, optional: false, required: true
    private _loRaWan = new CcWirelessGateway.LoRaWANGatewayPropertyOutputReference(this, "lo_ra_wan");
    public get loRaWan() {
        return this._loRaWan;
    }
    public putLoRaWan(value: CcWirelessGateway.LoRaWANGatewayProperty) {
        this._loRaWan.internalValue = value;
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
    private _tags = new CcWirelessGateway.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWirelessGateway.TagProperty[] | cdktn.IResolvable) {
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

    // thing_name - computed: true, optional: true, required: false
    private _thingName?: string; 
    public get thingName() {
        return this.getStringAttribute('thing_name');
    }
    public set thingName(value: string) {
        this._thingName = value;
    }
    public resetThingName() {
        this._thingName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingNameInput() {
        return this._thingName;
    }

    // wireless_gateway_id - computed: true, optional: false, required: false
    public get wirelessGatewayId() {
        return this.getStringAttribute('wireless_gateway_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            last_uplink_received_at: cdktn.stringToTerraform(this._lastUplinkReceivedAt),
            lo_ra_wan: ccWirelessGatewayLoRaWANGatewayPropertyToTerraform(this._loRaWan.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccWirelessGatewayTagPropertyToTerraform, false)(this._tags.internalValue),
            thing_arn: cdktn.stringToTerraform(this._thingArn),
            thing_name: cdktn.stringToTerraform(this._thingName),
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
            last_uplink_received_at: {
                value: cdktn.stringToHclTerraform(this._lastUplinkReceivedAt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lo_ra_wan: {
                value: ccWirelessGatewayLoRaWANGatewayPropertyToHclTerraform(this._loRaWan.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWirelessGateway.LoRaWANGatewayProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWirelessGatewayTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcWirelessGateway.TagPropertyList",
            },
            thing_arn: {
                value: cdktn.stringToHclTerraform(this._thingArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            thing_name: {
                value: cdktn.stringToHclTerraform(this._thingName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWirelessGatewayLoRaWANGatewayPropertyToTerraform(struct?: CcWirelessGateway.LoRaWANGatewayProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gateway_eui: cdktn.stringToTerraform(struct!.gatewayEui),
        rf_region: cdktn.stringToTerraform(struct!.rfRegion),
    }
}


export function ccWirelessGatewayLoRaWANGatewayPropertyToHclTerraform(struct?: CcWirelessGateway.LoRaWANGatewayProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        gateway_eui: {
            value: cdktn.stringToHclTerraform(struct!.gatewayEui),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWirelessGatewayTagPropertyToTerraform(struct?: CcWirelessGateway.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWirelessGatewayTagPropertyToHclTerraform(struct?: CcWirelessGateway.TagProperty | cdktn.IResolvable): any {
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


export namespace CcWirelessGateway {
export interface LoRaWANGatewayProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#gateway_eui CcWirelessGateway#gateway_eui}
    */
    readonly gatewayEui: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#rf_region CcWirelessGateway#rf_region}
    */
    readonly rfRegion: string;
}
export class LoRaWANGatewayPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoRaWANGatewayProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gatewayEui !== undefined) {
            hasAnyValues = true;
            internalValueResult.gatewayEui = this._gatewayEui;
        }
        if (this._rfRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.rfRegion = this._rfRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoRaWANGatewayProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gatewayEui = undefined;
            this._rfRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gatewayEui = value.gatewayEui;
            this._rfRegion = value.rfRegion;
        }
    }

    // gateway_eui - computed: false, optional: false, required: true
    private _gatewayEui?: string; 
    public get gatewayEui() {
        return this.getStringAttribute('gateway_eui');
    }
    public set gatewayEui(value: string) {
        this._gatewayEui = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayEuiInput() {
        return this._gatewayEui;
    }

    // rf_region - computed: false, optional: false, required: true
    private _rfRegion?: string; 
    public get rfRegion() {
        return this.getStringAttribute('rf_region');
    }
    public set rfRegion(value: string) {
        this._rfRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rfRegionInput() {
        return this._rfRegion;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#key CcWirelessGateway#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_gateway#value CcWirelessGateway#value}
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
