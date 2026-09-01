// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkerProps extends cdktn.TerraformMetaArguments {
    /**
    * The farm ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#farm_id CcWorker#farm_id}
    */
    readonly farmId: string;
    /**
    * The fleet ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#fleet_id CcWorker#fleet_id}
    */
    readonly fleetId: string;
    /**
    * The IP address and host name of the worker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#host_properties CcWorker#host_properties}
    */
    readonly hostProperties?: CcWorker.HostPropertiesRequestProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#tags CcWorker#tags}
    */
    readonly tags?: CcWorker.TagsItemsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker awscc_deadline_worker}
*/
export class CcWorker extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_deadline_worker";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorker resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorker to import
    * @param importFromId The id of the existing CcWorker that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorker to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_deadline_worker", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker awscc_deadline_worker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkerProps
    */
    public constructor(scope: Construct, id: string, config: CcWorkerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_deadline_worker',
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
        this._farmId = config.farmId;
        this._fleetId = config.fleetId;
        this._hostProperties.internalValue = config.hostProperties;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
    }

    // farm_id - computed: false, optional: false, required: true
    private _farmId?: string; 
    public get farmId() {
        return this.getStringAttribute('farm_id');
    }
    public set farmId(value: string) {
        this._farmId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get farmIdInput() {
        return this._farmId;
    }

    // fleet_id - computed: false, optional: false, required: true
    private _fleetId?: string; 
    public get fleetId() {
        return this.getStringAttribute('fleet_id');
    }
    public set fleetId(value: string) {
        this._fleetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetIdInput() {
        return this._fleetId;
    }

    // host_properties - computed: true, optional: true, required: false
    private _hostProperties = new CcWorker.HostPropertiesRequestPropertyOutputReference(this, "host_properties");
    public get hostProperties() {
        return this._hostProperties;
    }
    public putHostProperties(value: CcWorker.HostPropertiesRequestProperty) {
        this._hostProperties.internalValue = value;
    }
    public resetHostProperties() {
        this._hostProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostPropertiesInput() {
        return this._hostProperties.internalValue;
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
    private _tags = new CcWorker.TagsItemsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWorker.TagsItemsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // worker_id - computed: true, optional: false, required: false
    public get workerId() {
        return this.getStringAttribute('worker_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            farm_id: cdktn.stringToTerraform(this._farmId),
            fleet_id: cdktn.stringToTerraform(this._fleetId),
            host_properties: ccWorkerHostPropertiesRequestPropertyToTerraform(this._hostProperties.internalValue),
            tags: cdktn.listMapper(ccWorkerTagsItemsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            farm_id: {
                value: cdktn.stringToHclTerraform(this._farmId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fleet_id: {
                value: cdktn.stringToHclTerraform(this._fleetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host_properties: {
                value: ccWorkerHostPropertiesRequestPropertyToHclTerraform(this._hostProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorker.HostPropertiesRequestProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWorkerTagsItemsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWorker.TagsItemsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWorkerIpAddressesPropertyToTerraform(struct?: CcWorker.IpAddressesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip_v4_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipV4Addresses),
        ip_v6_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipV6Addresses),
    }
}


export function ccWorkerIpAddressesPropertyToHclTerraform(struct?: CcWorker.IpAddressesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip_v4_addresses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipV4Addresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        ip_v6_addresses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipV6Addresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkerHostPropertiesRequestPropertyToTerraform(struct?: CcWorker.HostPropertiesRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host_name: cdktn.stringToTerraform(struct!.hostName),
        ip_addresses: ccWorkerIpAddressesPropertyToTerraform(struct!.ipAddresses),
    }
}


export function ccWorkerHostPropertiesRequestPropertyToHclTerraform(struct?: CcWorker.HostPropertiesRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host_name: {
            value: cdktn.stringToHclTerraform(struct!.hostName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ip_addresses: {
            value: ccWorkerIpAddressesPropertyToHclTerraform(struct!.ipAddresses),
            isBlock: true,
            type: "struct",
            storageClassType: "IpAddressesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkerTagsItemsPropertyToTerraform(struct?: CcWorker.TagsItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkerTagsItemsPropertyToHclTerraform(struct?: CcWorker.TagsItemsProperty | cdktn.IResolvable): any {
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


export namespace CcWorker {
export interface IpAddressesProperty {
    /**
    * The IpV4 address of the network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#ip_v4_addresses CcWorker#ip_v4_addresses}
    */
    readonly ipV4Addresses?: string[];
    /**
    * The IpV6 address for the network and node component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#ip_v6_addresses CcWorker#ip_v6_addresses}
    */
    readonly ipV6Addresses?: string[];
}
export class IpAddressesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IpAddressesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipV4Addresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipV4Addresses = this._ipV4Addresses;
        }
        if (this._ipV6Addresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipV6Addresses = this._ipV6Addresses;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IpAddressesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipV4Addresses = undefined;
            this._ipV6Addresses = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipV4Addresses = value.ipV4Addresses;
            this._ipV6Addresses = value.ipV6Addresses;
        }
    }

    // ip_v4_addresses - computed: true, optional: true, required: false
    private _ipV4Addresses?: string[]; 
    public get ipV4Addresses() {
        return this.getListAttribute('ip_v4_addresses');
    }
    public set ipV4Addresses(value: string[]) {
        this._ipV4Addresses = value;
    }
    public resetIpV4Addresses() {
        this._ipV4Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipV4AddressesInput() {
        return this._ipV4Addresses;
    }

    // ip_v6_addresses - computed: true, optional: true, required: false
    private _ipV6Addresses?: string[]; 
    public get ipV6Addresses() {
        return this.getListAttribute('ip_v6_addresses');
    }
    public set ipV6Addresses(value: string[]) {
        this._ipV6Addresses = value;
    }
    public resetIpV6Addresses() {
        this._ipV6Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipV6AddressesInput() {
        return this._ipV6Addresses;
    }
}
export interface HostPropertiesRequestProperty {
    /**
    * The host name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#host_name CcWorker#host_name}
    */
    readonly hostName?: string;
    /**
    * The IP addresses for a host.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#ip_addresses CcWorker#ip_addresses}
    */
    readonly ipAddresses?: IpAddressesProperty;
}
export class HostPropertiesRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HostPropertiesRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostName !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostName = this._hostName;
        }
        if (this._ipAddresses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddresses = this._ipAddresses?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HostPropertiesRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostName = undefined;
            this._ipAddresses.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostName = value.hostName;
            this._ipAddresses.internalValue = value.ipAddresses;
        }
    }

    // host_name - computed: true, optional: true, required: false
    private _hostName?: string; 
    public get hostName() {
        return this.getStringAttribute('host_name');
    }
    public set hostName(value: string) {
        this._hostName = value;
    }
    public resetHostName() {
        this._hostName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostNameInput() {
        return this._hostName;
    }

    // ip_addresses - computed: true, optional: true, required: false
    private _ipAddresses = new IpAddressesPropertyOutputReference(this, "ip_addresses");
    public get ipAddresses() {
        return this._ipAddresses;
    }
    public putIpAddresses(value: IpAddressesProperty) {
        this._ipAddresses.internalValue = value;
    }
    public resetIpAddresses() {
        this._ipAddresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressesInput() {
        return this._ipAddresses.internalValue;
    }
}
export interface TagsItemsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#key CcWorker#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_worker#value CcWorker#value}
    */
    readonly value?: string;
}
export class TagsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsItemsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsItemsProperty | cdktn.IResolvable | undefined) {
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

export class TagsItemsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsItemsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsItemsPropertyOutputReference {
        return new TagsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
