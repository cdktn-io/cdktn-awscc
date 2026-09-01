// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * An array of objects representing the add-ons to enable for the new instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#add_ons CcInstance#add_ons}
    */
    readonly addOns?: CcInstance.AddOnProperty[] | cdktn.IResolvable;
    /**
    * The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#availability_zone CcInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#blueprint_id CcInstance#blueprint_id}
    */
    readonly blueprintId: string;
    /**
    * The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#bundle_id CcInstance#bundle_id}
    */
    readonly bundleId: string;
    /**
    * Hardware of the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#hardware CcInstance#hardware}
    */
    readonly hardware?: CcInstance.HardwareProperty;
    /**
    * The names to use for your new Lightsail instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#instance_name CcInstance#instance_name}
    */
    readonly instanceName: string;
    /**
    * The name of your key pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#key_pair_name CcInstance#key_pair_name}
    */
    readonly keyPairName?: string;
    /**
    * Location of a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#location CcInstance#location}
    */
    readonly location?: CcInstance.LocationProperty;
    /**
    * Networking of the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#networking CcInstance#networking}
    */
    readonly networking?: CcInstance.NetworkingProperty;
    /**
    * Current State of the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#state CcInstance#state}
    */
    readonly state?: CcInstance.StateProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#tags CcInstance#tags}
    */
    readonly tags?: CcInstance.TagProperty[] | cdktn.IResolvable;
    /**
    * A launch script you can create that configures a server with additional user data. For example, you might want to run apt-get -y update.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#user_data CcInstance#user_data}
    */
    readonly userData?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance awscc_lightsail_instance}
*/
export class CcInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lightsail_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInstance to import
    * @param importFromId The id of the existing CcInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance awscc_lightsail_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInstanceProps
    */
    public constructor(scope: Construct, id: string, config: CcInstanceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lightsail_instance',
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
        this._addOns.internalValue = config.addOns;
        this._availabilityZone = config.availabilityZone;
        this._blueprintId = config.blueprintId;
        this._bundleId = config.bundleId;
        this._hardware.internalValue = config.hardware;
        this._instanceName = config.instanceName;
        this._keyPairName = config.keyPairName;
        this._location.internalValue = config.location;
        this._networking.internalValue = config.networking;
        this._state.internalValue = config.state;
        this._tags.internalValue = config.tags;
        this._userData = config.userData;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // add_ons - computed: true, optional: true, required: false
    private _addOns = new CcInstance.AddOnPropertyList(this, "add_ons", false);
    public get addOns() {
        return this._addOns;
    }
    public putAddOns(value: CcInstance.AddOnProperty[] | cdktn.IResolvable) {
        this._addOns.internalValue = value;
    }
    public resetAddOns() {
        this._addOns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addOnsInput() {
        return this._addOns.internalValue;
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

    // blueprint_id - computed: false, optional: false, required: true
    private _blueprintId?: string; 
    public get blueprintId() {
        return this.getStringAttribute('blueprint_id');
    }
    public set blueprintId(value: string) {
        this._blueprintId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get blueprintIdInput() {
        return this._blueprintId;
    }

    // bundle_id - computed: false, optional: false, required: true
    private _bundleId?: string; 
    public get bundleId() {
        return this.getStringAttribute('bundle_id');
    }
    public set bundleId(value: string) {
        this._bundleId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleIdInput() {
        return this._bundleId;
    }

    // hardware - computed: true, optional: true, required: false
    private _hardware = new CcInstance.HardwarePropertyOutputReference(this, "hardware");
    public get hardware() {
        return this._hardware;
    }
    public putHardware(value: CcInstance.HardwareProperty) {
        this._hardware.internalValue = value;
    }
    public resetHardware() {
        this._hardware.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hardwareInput() {
        return this._hardware.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: true, optional: false, required: false
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }

    // instance_name - computed: false, optional: false, required: true
    private _instanceName?: string; 
    public get instanceName() {
        return this.getStringAttribute('instance_name');
    }
    public set instanceName(value: string) {
        this._instanceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceNameInput() {
        return this._instanceName;
    }

    // ipv_6_addresses - computed: true, optional: false, required: false
    public get ipv6Addresses() {
        return this.getListAttribute('ipv_6_addresses');
    }

    // is_static_ip - computed: true, optional: false, required: false
    public get isStaticIp() {
        return this.getBooleanAttribute('is_static_ip');
    }

    // key_pair_name - computed: true, optional: true, required: false
    private _keyPairName?: string; 
    public get keyPairName() {
        return this.getStringAttribute('key_pair_name');
    }
    public set keyPairName(value: string) {
        this._keyPairName = value;
    }
    public resetKeyPairName() {
        this._keyPairName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPairNameInput() {
        return this._keyPairName;
    }

    // location - computed: true, optional: true, required: false
    private _location = new CcInstance.LocationPropertyOutputReference(this, "location");
    public get location() {
        return this._location;
    }
    public putLocation(value: CcInstance.LocationProperty) {
        this._location.internalValue = value;
    }
    public resetLocation() {
        this._location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location.internalValue;
    }

    // networking - computed: true, optional: true, required: false
    private _networking = new CcInstance.NetworkingPropertyOutputReference(this, "networking");
    public get networking() {
        return this._networking;
    }
    public putNetworking(value: CcInstance.NetworkingProperty) {
        this._networking.internalValue = value;
    }
    public resetNetworking() {
        this._networking.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkingInput() {
        return this._networking.internalValue;
    }

    // private_ip_address - computed: true, optional: false, required: false
    public get privateIpAddress() {
        return this.getStringAttribute('private_ip_address');
    }

    // public_ip_address - computed: true, optional: false, required: false
    public get publicIpAddress() {
        return this.getStringAttribute('public_ip_address');
    }

    // resource_type - computed: true, optional: false, required: false
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }

    // ssh_key_name - computed: true, optional: false, required: false
    public get sshKeyName() {
        return this.getStringAttribute('ssh_key_name');
    }

    // state - computed: true, optional: true, required: false
    private _state = new CcInstance.StatePropertyOutputReference(this, "state");
    public get state() {
        return this._state;
    }
    public putState(value: CcInstance.StateProperty) {
        this._state.internalValue = value;
    }
    public resetState() {
        this._state.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state.internalValue;
    }

    // support_code - computed: true, optional: false, required: false
    public get supportCode() {
        return this.getStringAttribute('support_code');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInstance.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInstance.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // user_data - computed: true, optional: true, required: false
    private _userData?: string; 
    public get userData() {
        return this.getStringAttribute('user_data');
    }
    public set userData(value: string) {
        this._userData = value;
    }
    public resetUserData() {
        this._userData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataInput() {
        return this._userData;
    }

    // user_name - computed: true, optional: false, required: false
    public get userName() {
        return this.getStringAttribute('user_name');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            add_ons: cdktn.listMapper(ccInstanceAddOnPropertyToTerraform, false)(this._addOns.internalValue),
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            blueprint_id: cdktn.stringToTerraform(this._blueprintId),
            bundle_id: cdktn.stringToTerraform(this._bundleId),
            hardware: ccInstanceHardwarePropertyToTerraform(this._hardware.internalValue),
            instance_name: cdktn.stringToTerraform(this._instanceName),
            key_pair_name: cdktn.stringToTerraform(this._keyPairName),
            location: ccInstanceLocationPropertyToTerraform(this._location.internalValue),
            networking: ccInstanceNetworkingPropertyToTerraform(this._networking.internalValue),
            state: ccInstanceStatePropertyToTerraform(this._state.internalValue),
            tags: cdktn.listMapper(ccInstanceTagPropertyToTerraform, false)(this._tags.internalValue),
            user_data: cdktn.stringToTerraform(this._userData),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            add_ons: {
                value: cdktn.listMapperHcl(ccInstanceAddOnPropertyToHclTerraform, false)(this._addOns.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcInstance.AddOnPropertyList",
            },
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            blueprint_id: {
                value: cdktn.stringToHclTerraform(this._blueprintId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bundle_id: {
                value: cdktn.stringToHclTerraform(this._bundleId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hardware: {
                value: ccInstanceHardwarePropertyToHclTerraform(this._hardware.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.HardwareProperty",
            },
            instance_name: {
                value: cdktn.stringToHclTerraform(this._instanceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_pair_name: {
                value: cdktn.stringToHclTerraform(this._keyPairName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            location: {
                value: ccInstanceLocationPropertyToHclTerraform(this._location.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.LocationProperty",
            },
            networking: {
                value: ccInstanceNetworkingPropertyToHclTerraform(this._networking.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.NetworkingProperty",
            },
            state: {
                value: ccInstanceStatePropertyToHclTerraform(this._state.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstance.StateProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccInstanceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcInstance.TagPropertyList",
            },
            user_data: {
                value: cdktn.stringToHclTerraform(this._userData),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInstanceAutoSnapshotAddOnPropertyToTerraform(struct?: CcInstance.AutoSnapshotAddOnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        snapshot_time_of_day: cdktn.stringToTerraform(struct!.snapshotTimeOfDay),
    }
}


export function ccInstanceAutoSnapshotAddOnPropertyToHclTerraform(struct?: CcInstance.AutoSnapshotAddOnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        snapshot_time_of_day: {
            value: cdktn.stringToHclTerraform(struct!.snapshotTimeOfDay),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceAddOnPropertyToTerraform(struct?: CcInstance.AddOnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        add_on_type: cdktn.stringToTerraform(struct!.addOnType),
        auto_snapshot_add_on_request: ccInstanceAutoSnapshotAddOnPropertyToTerraform(struct!.autoSnapshotAddOnRequest),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccInstanceAddOnPropertyToHclTerraform(struct?: CcInstance.AddOnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        add_on_type: {
            value: cdktn.stringToHclTerraform(struct!.addOnType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auto_snapshot_add_on_request: {
            value: ccInstanceAutoSnapshotAddOnPropertyToHclTerraform(struct!.autoSnapshotAddOnRequest),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoSnapshotAddOnProperty",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceDiskPropertyToTerraform(struct?: CcInstance.DiskProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attached_to: cdktn.stringToTerraform(struct!.attachedTo),
        attachment_state: cdktn.stringToTerraform(struct!.attachmentState),
        disk_name: cdktn.stringToTerraform(struct!.diskName),
        iops: cdktn.numberToTerraform(struct!.iops),
        is_system_disk: cdktn.booleanToTerraform(struct!.isSystemDisk),
        path: cdktn.stringToTerraform(struct!.path),
        size_in_gb: cdktn.stringToTerraform(struct!.sizeInGb),
    }
}


export function ccInstanceDiskPropertyToHclTerraform(struct?: CcInstance.DiskProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attached_to: {
            value: cdktn.stringToHclTerraform(struct!.attachedTo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attachment_state: {
            value: cdktn.stringToHclTerraform(struct!.attachmentState),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        disk_name: {
            value: cdktn.stringToHclTerraform(struct!.diskName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iops: {
            value: cdktn.numberToHclTerraform(struct!.iops),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        is_system_disk: {
            value: cdktn.booleanToHclTerraform(struct!.isSystemDisk),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        size_in_gb: {
            value: cdktn.stringToHclTerraform(struct!.sizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceHardwarePropertyToTerraform(struct?: CcInstance.HardwareProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disks: cdktn.listMapper(ccInstanceDiskPropertyToTerraform, false)(struct!.disks),
    }
}


export function ccInstanceHardwarePropertyToHclTerraform(struct?: CcInstance.HardwareProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disks: {
            value: cdktn.listMapperHcl(ccInstanceDiskPropertyToHclTerraform, false)(struct!.disks),
            isBlock: true,
            type: "set",
            storageClassType: "DiskPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceLocationPropertyToTerraform(struct?: CcInstance.LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInstanceLocationPropertyToHclTerraform(struct?: CcInstance.LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInstanceMonthlyTransferPropertyToTerraform(struct?: CcInstance.MonthlyTransferProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInstanceMonthlyTransferPropertyToHclTerraform(struct?: CcInstance.MonthlyTransferProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInstancePortPropertyToTerraform(struct?: CcInstance.PortProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_direction: cdktn.stringToTerraform(struct!.accessDirection),
        access_from: cdktn.stringToTerraform(struct!.accessFrom),
        access_type: cdktn.stringToTerraform(struct!.accessType),
        cidr_list_aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cidrListAliases),
        cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cidrs),
        common_name: cdktn.stringToTerraform(struct!.commonName),
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        ipv_6_cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipv6Cidrs),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccInstancePortPropertyToHclTerraform(struct?: CcInstance.PortProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_direction: {
            value: cdktn.stringToHclTerraform(struct!.accessDirection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        access_from: {
            value: cdktn.stringToHclTerraform(struct!.accessFrom),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        access_type: {
            value: cdktn.stringToHclTerraform(struct!.accessType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cidr_list_aliases: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cidrListAliases),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        cidrs: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cidrs),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        common_name: {
            value: cdktn.stringToHclTerraform(struct!.commonName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ipv_6_cidrs: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipv6Cidrs),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceNetworkingPropertyToTerraform(struct?: CcInstance.NetworkingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        monthly_transfer: ccInstanceMonthlyTransferPropertyToTerraform(struct!.monthlyTransfer),
        ports: cdktn.listMapper(ccInstancePortPropertyToTerraform, false)(struct!.ports),
    }
}


export function ccInstanceNetworkingPropertyToHclTerraform(struct?: CcInstance.NetworkingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        monthly_transfer: {
            value: ccInstanceMonthlyTransferPropertyToHclTerraform(struct!.monthlyTransfer),
            isBlock: true,
            type: "struct",
            storageClassType: "MonthlyTransferProperty",
        },
        ports: {
            value: cdktn.listMapperHcl(ccInstancePortPropertyToHclTerraform, false)(struct!.ports),
            isBlock: true,
            type: "set",
            storageClassType: "PortPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceStatePropertyToTerraform(struct?: CcInstance.StateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccInstanceStatePropertyToHclTerraform(struct?: CcInstance.StateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccInstanceTagPropertyToTerraform(struct?: CcInstance.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInstanceTagPropertyToHclTerraform(struct?: CcInstance.TagProperty | cdktn.IResolvable): any {
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


export namespace CcInstance {
export interface AutoSnapshotAddOnProperty {
    /**
    * The daily time when an automatic snapshot will be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#snapshot_time_of_day CcInstance#snapshot_time_of_day}
    */
    readonly snapshotTimeOfDay?: string;
}
export class AutoSnapshotAddOnPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoSnapshotAddOnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._snapshotTimeOfDay !== undefined) {
            hasAnyValues = true;
            internalValueResult.snapshotTimeOfDay = this._snapshotTimeOfDay;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoSnapshotAddOnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._snapshotTimeOfDay = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._snapshotTimeOfDay = value.snapshotTimeOfDay;
        }
    }

    // snapshot_time_of_day - computed: true, optional: true, required: false
    private _snapshotTimeOfDay?: string; 
    public get snapshotTimeOfDay() {
        return this.getStringAttribute('snapshot_time_of_day');
    }
    public set snapshotTimeOfDay(value: string) {
        this._snapshotTimeOfDay = value;
    }
    public resetSnapshotTimeOfDay() {
        this._snapshotTimeOfDay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotTimeOfDayInput() {
        return this._snapshotTimeOfDay;
    }
}
export interface AddOnProperty {
    /**
    * The add-on type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#add_on_type CcInstance#add_on_type}
    */
    readonly addOnType?: string;
    /**
    * An object that represents additional parameters when enabling or modifying the automatic snapshot add-on
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#auto_snapshot_add_on_request CcInstance#auto_snapshot_add_on_request}
    */
    readonly autoSnapshotAddOnRequest?: AutoSnapshotAddOnProperty;
    /**
    * Status of the Addon
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#status CcInstance#status}
    */
    readonly status?: string;
}
export class AddOnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AddOnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addOnType !== undefined) {
            hasAnyValues = true;
            internalValueResult.addOnType = this._addOnType;
        }
        if (this._autoSnapshotAddOnRequest?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoSnapshotAddOnRequest = this._autoSnapshotAddOnRequest?.internalValue;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AddOnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addOnType = undefined;
            this._autoSnapshotAddOnRequest.internalValue = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addOnType = value.addOnType;
            this._autoSnapshotAddOnRequest.internalValue = value.autoSnapshotAddOnRequest;
            this._status = value.status;
        }
    }

    // add_on_type - computed: true, optional: true, required: false
    private _addOnType?: string; 
    public get addOnType() {
        return this.getStringAttribute('add_on_type');
    }
    public set addOnType(value: string) {
        this._addOnType = value;
    }
    public resetAddOnType() {
        this._addOnType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addOnTypeInput() {
        return this._addOnType;
    }

    // auto_snapshot_add_on_request - computed: true, optional: true, required: false
    private _autoSnapshotAddOnRequest = new AutoSnapshotAddOnPropertyOutputReference(this, "auto_snapshot_add_on_request");
    public get autoSnapshotAddOnRequest() {
        return this._autoSnapshotAddOnRequest;
    }
    public putAutoSnapshotAddOnRequest(value: AutoSnapshotAddOnProperty) {
        this._autoSnapshotAddOnRequest.internalValue = value;
    }
    public resetAutoSnapshotAddOnRequest() {
        this._autoSnapshotAddOnRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoSnapshotAddOnRequestInput() {
        return this._autoSnapshotAddOnRequest.internalValue;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}

export class AddOnPropertyList extends cdktn.ComplexList {
    public internalValue? : AddOnProperty[] | cdktn.IResolvable

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
    public get(index: number): AddOnPropertyOutputReference {
        return new AddOnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DiskProperty {
    /**
    * Instance attached to the disk.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#attached_to CcInstance#attached_to}
    */
    readonly attachedTo?: string;
    /**
    * Attachment state of the disk.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#attachment_state CcInstance#attachment_state}
    */
    readonly attachmentState?: string;
    /**
    * The names to use for your new Lightsail disk.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#disk_name CcInstance#disk_name}
    */
    readonly diskName?: string;
    /**
    * IOPS of disk.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#iops CcInstance#iops}
    */
    readonly iops?: number;
    /**
    * Is the Attached disk is the system disk of the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#is_system_disk CcInstance#is_system_disk}
    */
    readonly isSystemDisk?: boolean | cdktn.IResolvable;
    /**
    * Path of the disk attached to the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#path CcInstance#path}
    */
    readonly path?: string;
    /**
    * Size of the disk attached to the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#size_in_gb CcInstance#size_in_gb}
    */
    readonly sizeInGb?: string;
}
export class DiskPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DiskProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attachedTo !== undefined) {
            hasAnyValues = true;
            internalValueResult.attachedTo = this._attachedTo;
        }
        if (this._attachmentState !== undefined) {
            hasAnyValues = true;
            internalValueResult.attachmentState = this._attachmentState;
        }
        if (this._diskName !== undefined) {
            hasAnyValues = true;
            internalValueResult.diskName = this._diskName;
        }
        if (this._iops !== undefined) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._isSystemDisk !== undefined) {
            hasAnyValues = true;
            internalValueResult.isSystemDisk = this._isSystemDisk;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._sizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeInGb = this._sizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DiskProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attachedTo = undefined;
            this._attachmentState = undefined;
            this._diskName = undefined;
            this._iops = undefined;
            this._isSystemDisk = undefined;
            this._path = undefined;
            this._sizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attachedTo = value.attachedTo;
            this._attachmentState = value.attachmentState;
            this._diskName = value.diskName;
            this._iops = value.iops;
            this._isSystemDisk = value.isSystemDisk;
            this._path = value.path;
            this._sizeInGb = value.sizeInGb;
        }
    }

    // attached_to - computed: true, optional: true, required: false
    private _attachedTo?: string; 
    public get attachedTo() {
        return this.getStringAttribute('attached_to');
    }
    public set attachedTo(value: string) {
        this._attachedTo = value;
    }
    public resetAttachedTo() {
        this._attachedTo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachedToInput() {
        return this._attachedTo;
    }

    // attachment_state - computed: true, optional: true, required: false
    private _attachmentState?: string; 
    public get attachmentState() {
        return this.getStringAttribute('attachment_state');
    }
    public set attachmentState(value: string) {
        this._attachmentState = value;
    }
    public resetAttachmentState() {
        this._attachmentState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachmentStateInput() {
        return this._attachmentState;
    }

    // disk_name - computed: true, optional: true, required: false
    private _diskName?: string; 
    public get diskName() {
        return this.getStringAttribute('disk_name');
    }
    public set diskName(value: string) {
        this._diskName = value;
    }
    public resetDiskName() {
        this._diskName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diskNameInput() {
        return this._diskName;
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number; 
    public get iops() {
        return this.getNumberAttribute('iops');
    }
    public set iops(value: number) {
        this._iops = value;
    }
    public resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
        return this._iops;
    }

    // is_system_disk - computed: true, optional: true, required: false
    private _isSystemDisk?: boolean | cdktn.IResolvable; 
    public get isSystemDisk() {
        return this.getBooleanAttribute('is_system_disk');
    }
    public set isSystemDisk(value: boolean | cdktn.IResolvable) {
        this._isSystemDisk = value;
    }
    public resetIsSystemDisk() {
        this._isSystemDisk = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isSystemDiskInput() {
        return this._isSystemDisk;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // size_in_gb - computed: true, optional: true, required: false
    private _sizeInGb?: string; 
    public get sizeInGb() {
        return this.getStringAttribute('size_in_gb');
    }
    public set sizeInGb(value: string) {
        this._sizeInGb = value;
    }
    public resetSizeInGb() {
        this._sizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInGbInput() {
        return this._sizeInGb;
    }
}

export class DiskPropertyList extends cdktn.ComplexList {
    public internalValue? : DiskProperty[] | cdktn.IResolvable

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
    public get(index: number): DiskPropertyOutputReference {
        return new DiskPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HardwareProperty {
    /**
    * Disks attached to the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#disks CcInstance#disks}
    */
    readonly disks?: DiskProperty[] | cdktn.IResolvable;
}
export class HardwarePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HardwareProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disks?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.disks = this._disks?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HardwareProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disks.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disks.internalValue = value.disks;
        }
    }

    // cpu_count - computed: true, optional: false, required: false
    public get cpuCount() {
        return this.getNumberAttribute('cpu_count');
    }

    // disks - computed: true, optional: true, required: false
    private _disks = new DiskPropertyList(this, "disks", true);
    public get disks() {
        return this._disks;
    }
    public putDisks(value: DiskProperty[] | cdktn.IResolvable) {
        this._disks.internalValue = value;
    }
    public resetDisks() {
        this._disks.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disksInput() {
        return this._disks.internalValue;
    }

    // ram_size_in_gb - computed: true, optional: false, required: false
    public get ramSizeInGb() {
        return this.getNumberAttribute('ram_size_in_gb');
    }
}
export interface LocationProperty {
}
export class LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }

    // region_name - computed: true, optional: false, required: false
    public get regionName() {
        return this.getStringAttribute('region_name');
    }
}
export interface MonthlyTransferProperty {
}
export class MonthlyTransferPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonthlyTransferProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonthlyTransferProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }

    // gb_per_month_allocated - computed: true, optional: false, required: false
    public get gbPerMonthAllocated() {
        return this.getStringAttribute('gb_per_month_allocated');
    }
}
export interface PortProperty {
    /**
    * Access Direction for Protocol of the Instance(inbound/outbound).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#access_direction CcInstance#access_direction}
    */
    readonly accessDirection?: string;
    /**
    * Access From Protocol of the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#access_from CcInstance#access_from}
    */
    readonly accessFrom?: string;
    /**
    * Access Type Protocol of the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#access_type CcInstance#access_type}
    */
    readonly accessType?: string;
    /**
    * cidr List Aliases
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#cidr_list_aliases CcInstance#cidr_list_aliases}
    */
    readonly cidrListAliases?: string[];
    /**
    * cidrs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#cidrs CcInstance#cidrs}
    */
    readonly cidrs?: string[];
    /**
    * CommonName for Protocol of the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#common_name CcInstance#common_name}
    */
    readonly commonName?: string;
    /**
    * From Port of the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#from_port CcInstance#from_port}
    */
    readonly fromPort?: number;
    /**
    * IPv6 Cidrs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#ipv_6_cidrs CcInstance#ipv_6_cidrs}
    */
    readonly ipv6Cidrs?: string[];
    /**
    * Port Protocol of the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#protocol CcInstance#protocol}
    */
    readonly protocol?: string;
    /**
    * To Port of the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#to_port CcInstance#to_port}
    */
    readonly toPort?: number;
}
export class PortPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PortProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessDirection !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessDirection = this._accessDirection;
        }
        if (this._accessFrom !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessFrom = this._accessFrom;
        }
        if (this._accessType !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessType = this._accessType;
        }
        if (this._cidrListAliases !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrListAliases = this._cidrListAliases;
        }
        if (this._cidrs !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrs = this._cidrs;
        }
        if (this._commonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName;
        }
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._ipv6Cidrs !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6Cidrs = this._ipv6Cidrs;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessDirection = undefined;
            this._accessFrom = undefined;
            this._accessType = undefined;
            this._cidrListAliases = undefined;
            this._cidrs = undefined;
            this._commonName = undefined;
            this._fromPort = undefined;
            this._ipv6Cidrs = undefined;
            this._protocol = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessDirection = value.accessDirection;
            this._accessFrom = value.accessFrom;
            this._accessType = value.accessType;
            this._cidrListAliases = value.cidrListAliases;
            this._cidrs = value.cidrs;
            this._commonName = value.commonName;
            this._fromPort = value.fromPort;
            this._ipv6Cidrs = value.ipv6Cidrs;
            this._protocol = value.protocol;
            this._toPort = value.toPort;
        }
    }

    // access_direction - computed: true, optional: true, required: false
    private _accessDirection?: string; 
    public get accessDirection() {
        return this.getStringAttribute('access_direction');
    }
    public set accessDirection(value: string) {
        this._accessDirection = value;
    }
    public resetAccessDirection() {
        this._accessDirection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessDirectionInput() {
        return this._accessDirection;
    }

    // access_from - computed: true, optional: true, required: false
    private _accessFrom?: string; 
    public get accessFrom() {
        return this.getStringAttribute('access_from');
    }
    public set accessFrom(value: string) {
        this._accessFrom = value;
    }
    public resetAccessFrom() {
        this._accessFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessFromInput() {
        return this._accessFrom;
    }

    // access_type - computed: true, optional: true, required: false
    private _accessType?: string; 
    public get accessType() {
        return this.getStringAttribute('access_type');
    }
    public set accessType(value: string) {
        this._accessType = value;
    }
    public resetAccessType() {
        this._accessType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTypeInput() {
        return this._accessType;
    }

    // cidr_list_aliases - computed: true, optional: true, required: false
    private _cidrListAliases?: string[]; 
    public get cidrListAliases() {
        return this.getListAttribute('cidr_list_aliases');
    }
    public set cidrListAliases(value: string[]) {
        this._cidrListAliases = value;
    }
    public resetCidrListAliases() {
        this._cidrListAliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrListAliasesInput() {
        return this._cidrListAliases;
    }

    // cidrs - computed: true, optional: true, required: false
    private _cidrs?: string[]; 
    public get cidrs() {
        return this.getListAttribute('cidrs');
    }
    public set cidrs(value: string[]) {
        this._cidrs = value;
    }
    public resetCidrs() {
        this._cidrs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrsInput() {
        return this._cidrs;
    }

    // common_name - computed: true, optional: true, required: false
    private _commonName?: string; 
    public get commonName() {
        return this.getStringAttribute('common_name');
    }
    public set commonName(value: string) {
        this._commonName = value;
    }
    public resetCommonName() {
        this._commonName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commonNameInput() {
        return this._commonName;
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // ipv_6_cidrs - computed: true, optional: true, required: false
    private _ipv6Cidrs?: string[]; 
    public get ipv6Cidrs() {
        return this.getListAttribute('ipv_6_cidrs');
    }
    public set ipv6Cidrs(value: string[]) {
        this._ipv6Cidrs = value;
    }
    public resetIpv6Cidrs() {
        this._ipv6Cidrs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6CidrsInput() {
        return this._ipv6Cidrs;
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

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}

export class PortPropertyList extends cdktn.ComplexList {
    public internalValue? : PortProperty[] | cdktn.IResolvable

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
    public get(index: number): PortPropertyOutputReference {
        return new PortPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkingProperty {
    /**
    * Monthly Transfer of the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#monthly_transfer CcInstance#monthly_transfer}
    */
    readonly monthlyTransfer?: MonthlyTransferProperty;
    /**
    * Ports to the Instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#ports CcInstance#ports}
    */
    readonly ports?: PortProperty[] | cdktn.IResolvable;
}
export class NetworkingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._monthlyTransfer?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monthlyTransfer = this._monthlyTransfer?.internalValue;
        }
        if (this._ports?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ports = this._ports?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._monthlyTransfer.internalValue = undefined;
            this._ports.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._monthlyTransfer.internalValue = value.monthlyTransfer;
            this._ports.internalValue = value.ports;
        }
    }

    // monthly_transfer - computed: true, optional: true, required: false
    private _monthlyTransfer = new MonthlyTransferPropertyOutputReference(this, "monthly_transfer");
    public get monthlyTransfer() {
        return this._monthlyTransfer;
    }
    public putMonthlyTransfer(value: MonthlyTransferProperty) {
        this._monthlyTransfer.internalValue = value;
    }
    public resetMonthlyTransfer() {
        this._monthlyTransfer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monthlyTransferInput() {
        return this._monthlyTransfer.internalValue;
    }

    // ports - computed: true, optional: true, required: false
    private _ports = new PortPropertyList(this, "ports", true);
    public get ports() {
        return this._ports;
    }
    public putPorts(value: PortProperty[] | cdktn.IResolvable) {
        this._ports.internalValue = value;
    }
    public resetPorts() {
        this._ports.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portsInput() {
        return this._ports.internalValue;
    }
}
export interface StateProperty {
}
export class StatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
        }
    }

    // code - computed: true, optional: false, required: false
    public get code() {
        return this.getNumberAttribute('code');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#key CcInstance#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#value CcInstance#value}
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
