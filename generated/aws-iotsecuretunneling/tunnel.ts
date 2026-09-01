// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTunnelProps extends cdktn.TerraformMetaArguments {
    /**
    * A short text description of the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#description CcTunnel#description}
    */
    readonly description?: string;
    /**
    * The destination configuration for the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#destination_config CcTunnel#destination_config}
    */
    readonly destinationConfig?: CcTunnel.DestinationConfigProperty;
    /**
    * A collection of tag metadata.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#tags CcTunnel#tags}
    */
    readonly tags?: CcTunnel.TagProperty[] | cdktn.IResolvable;
    /**
    * Timeout configuration for the tunnel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#timeout_config CcTunnel#timeout_config}
    */
    readonly timeoutConfig?: CcTunnel.TimeoutConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel awscc_iotsecuretunneling_tunnel}
*/
export class CcTunnel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotsecuretunneling_tunnel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTunnel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTunnel to import
    * @param importFromId The id of the existing CcTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTunnel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsecuretunneling_tunnel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel awscc_iotsecuretunneling_tunnel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTunnelProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTunnelProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotsecuretunneling_tunnel',
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
        this._destinationConfig.internalValue = config.destinationConfig;
        this._tags.internalValue = config.tags;
        this._timeoutConfig.internalValue = config.timeoutConfig;
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

    // destination_config - computed: true, optional: true, required: false
    private _destinationConfig = new CcTunnel.DestinationConfigPropertyOutputReference(this, "destination_config");
    public get destinationConfig() {
        return this._destinationConfig;
    }
    public putDestinationConfig(value: CcTunnel.DestinationConfigProperty) {
        this._destinationConfig.internalValue = value;
    }
    public resetDestinationConfig() {
        this._destinationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationConfigInput() {
        return this._destinationConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTunnel.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTunnel.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // timeout_config - computed: true, optional: true, required: false
    private _timeoutConfig = new CcTunnel.TimeoutConfigPropertyOutputReference(this, "timeout_config");
    public get timeoutConfig() {
        return this._timeoutConfig;
    }
    public putTimeoutConfig(value: CcTunnel.TimeoutConfigProperty) {
        this._timeoutConfig.internalValue = value;
    }
    public resetTimeoutConfig() {
        this._timeoutConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutConfigInput() {
        return this._timeoutConfig.internalValue;
    }

    // tunnel_arn - computed: true, optional: false, required: false
    public get tunnelArn() {
        return this.getStringAttribute('tunnel_arn');
    }

    // tunnel_id - computed: true, optional: false, required: false
    public get tunnelId() {
        return this.getStringAttribute('tunnel_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            destination_config: ccTunnelDestinationConfigPropertyToTerraform(this._destinationConfig.internalValue),
            tags: cdktn.listMapper(ccTunnelTagPropertyToTerraform, false)(this._tags.internalValue),
            timeout_config: ccTunnelTimeoutConfigPropertyToTerraform(this._timeoutConfig.internalValue),
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
            destination_config: {
                value: ccTunnelDestinationConfigPropertyToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTunnel.DestinationConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTunnelTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTunnel.TagPropertyList",
            },
            timeout_config: {
                value: ccTunnelTimeoutConfigPropertyToHclTerraform(this._timeoutConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTunnel.TimeoutConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTunnelDestinationConfigPropertyToTerraform(struct?: CcTunnel.DestinationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        services: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.services),
        thing_name: cdktn.stringToTerraform(struct!.thingName),
    }
}


export function ccTunnelDestinationConfigPropertyToHclTerraform(struct?: CcTunnel.DestinationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        services: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.services),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        thing_name: {
            value: cdktn.stringToHclTerraform(struct!.thingName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTunnelTagPropertyToTerraform(struct?: CcTunnel.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTunnelTagPropertyToHclTerraform(struct?: CcTunnel.TagProperty | cdktn.IResolvable): any {
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


export function ccTunnelTimeoutConfigPropertyToTerraform(struct?: CcTunnel.TimeoutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_lifetime_timeout_minutes: cdktn.numberToTerraform(struct!.maxLifetimeTimeoutMinutes),
    }
}


export function ccTunnelTimeoutConfigPropertyToHclTerraform(struct?: CcTunnel.TimeoutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_lifetime_timeout_minutes: {
            value: cdktn.numberToHclTerraform(struct!.maxLifetimeTimeoutMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTunnel {
export interface DestinationConfigProperty {
    /**
    * A list of service names that identify the target application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#services CcTunnel#services}
    */
    readonly services?: string[];
    /**
    * The name of the IoT thing to which you want to connect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#thing_name CcTunnel#thing_name}
    */
    readonly thingName?: string;
}
export class DestinationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._services !== undefined) {
            hasAnyValues = true;
            internalValueResult.services = this._services;
        }
        if (this._thingName !== undefined) {
            hasAnyValues = true;
            internalValueResult.thingName = this._thingName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._services = undefined;
            this._thingName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._services = value.services;
            this._thingName = value.thingName;
        }
    }

    // services - computed: true, optional: true, required: false
    private _services?: string[]; 
    public get services() {
        return this.getListAttribute('services');
    }
    public set services(value: string[]) {
        this._services = value;
    }
    public resetServices() {
        this._services = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get servicesInput() {
        return this._services;
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
}
export interface TagProperty {
    /**
    * The key of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#key CcTunnel#key}
    */
    readonly key?: string;
    /**
    * The value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#value CcTunnel#value}
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
export interface TimeoutConfigProperty {
    /**
    * The maximum amount of time (in minutes) a tunnel can remain open.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsecuretunneling_tunnel#max_lifetime_timeout_minutes CcTunnel#max_lifetime_timeout_minutes}
    */
    readonly maxLifetimeTimeoutMinutes?: number;
}
export class TimeoutConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeoutConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxLifetimeTimeoutMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxLifetimeTimeoutMinutes = this._maxLifetimeTimeoutMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeoutConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxLifetimeTimeoutMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxLifetimeTimeoutMinutes = value.maxLifetimeTimeoutMinutes;
        }
    }

    // max_lifetime_timeout_minutes - computed: true, optional: true, required: false
    private _maxLifetimeTimeoutMinutes?: number; 
    public get maxLifetimeTimeoutMinutes() {
        return this.getNumberAttribute('max_lifetime_timeout_minutes');
    }
    public set maxLifetimeTimeoutMinutes(value: number) {
        this._maxLifetimeTimeoutMinutes = value;
    }
    public resetMaxLifetimeTimeoutMinutes() {
        this._maxLifetimeTimeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxLifetimeTimeoutMinutesInput() {
        return this._maxLifetimeTimeoutMinutes;
    }
}
}
