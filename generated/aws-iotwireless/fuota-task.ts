// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFuotaTaskProps extends cdktn.TerraformMetaArguments {
    /**
    * Multicast group to associate. Only for update request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#associate_multicast_group CcFuotaTask#associate_multicast_group}
    */
    readonly associateMulticastGroup?: string;
    /**
    * Wireless device to associate. Only for update request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#associate_wireless_device CcFuotaTask#associate_wireless_device}
    */
    readonly associateWirelessDevice?: string;
    /**
    * FUOTA task description
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#description CcFuotaTask#description}
    */
    readonly description?: string;
    /**
    * Multicast group to disassociate. Only for update request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#disassociate_multicast_group CcFuotaTask#disassociate_multicast_group}
    */
    readonly disassociateMulticastGroup?: string;
    /**
    * Wireless device to disassociate. Only for update request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#disassociate_wireless_device CcFuotaTask#disassociate_wireless_device}
    */
    readonly disassociateWirelessDevice?: string;
    /**
    * FUOTA task firmware update image binary S3 link
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#firmware_update_image CcFuotaTask#firmware_update_image}
    */
    readonly firmwareUpdateImage: string;
    /**
    * FUOTA task firmware IAM role for reading S3
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#firmware_update_role CcFuotaTask#firmware_update_role}
    */
    readonly firmwareUpdateRole: string;
    /**
    * FUOTA task LoRaWAN
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#lo_ra_wan CcFuotaTask#lo_ra_wan}
    */
    readonly loRaWan: CcFuotaTask.LoRaWANProperty;
    /**
    * Name of FUOTA task
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#name CcFuotaTask#name}
    */
    readonly name?: string;
    /**
    * A list of key-value pairs that contain metadata for the FUOTA task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#tags CcFuotaTask#tags}
    */
    readonly tags?: CcFuotaTask.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task awscc_iotwireless_fuota_task}
*/
export class CcFuotaTask extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotwireless_fuota_task";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFuotaTask resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFuotaTask to import
    * @param importFromId The id of the existing CcFuotaTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFuotaTask to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_fuota_task", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task awscc_iotwireless_fuota_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFuotaTaskProps
    */
    public constructor(scope: Construct, id: string, config: CcFuotaTaskProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotwireless_fuota_task',
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
        this._associateMulticastGroup = config.associateMulticastGroup;
        this._associateWirelessDevice = config.associateWirelessDevice;
        this._description = config.description;
        this._disassociateMulticastGroup = config.disassociateMulticastGroup;
        this._disassociateWirelessDevice = config.disassociateWirelessDevice;
        this._firmwareUpdateImage = config.firmwareUpdateImage;
        this._firmwareUpdateRole = config.firmwareUpdateRole;
        this._loRaWan.internalValue = config.loRaWan;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // associate_multicast_group - computed: true, optional: true, required: false
    private _associateMulticastGroup?: string; 
    public get associateMulticastGroup() {
        return this.getStringAttribute('associate_multicast_group');
    }
    public set associateMulticastGroup(value: string) {
        this._associateMulticastGroup = value;
    }
    public resetAssociateMulticastGroup() {
        this._associateMulticastGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associateMulticastGroupInput() {
        return this._associateMulticastGroup;
    }

    // associate_wireless_device - computed: true, optional: true, required: false
    private _associateWirelessDevice?: string; 
    public get associateWirelessDevice() {
        return this.getStringAttribute('associate_wireless_device');
    }
    public set associateWirelessDevice(value: string) {
        this._associateWirelessDevice = value;
    }
    public resetAssociateWirelessDevice() {
        this._associateWirelessDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associateWirelessDeviceInput() {
        return this._associateWirelessDevice;
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

    // disassociate_multicast_group - computed: true, optional: true, required: false
    private _disassociateMulticastGroup?: string; 
    public get disassociateMulticastGroup() {
        return this.getStringAttribute('disassociate_multicast_group');
    }
    public set disassociateMulticastGroup(value: string) {
        this._disassociateMulticastGroup = value;
    }
    public resetDisassociateMulticastGroup() {
        this._disassociateMulticastGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disassociateMulticastGroupInput() {
        return this._disassociateMulticastGroup;
    }

    // disassociate_wireless_device - computed: true, optional: true, required: false
    private _disassociateWirelessDevice?: string; 
    public get disassociateWirelessDevice() {
        return this.getStringAttribute('disassociate_wireless_device');
    }
    public set disassociateWirelessDevice(value: string) {
        this._disassociateWirelessDevice = value;
    }
    public resetDisassociateWirelessDevice() {
        this._disassociateWirelessDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disassociateWirelessDeviceInput() {
        return this._disassociateWirelessDevice;
    }

    // firmware_update_image - computed: false, optional: false, required: true
    private _firmwareUpdateImage?: string; 
    public get firmwareUpdateImage() {
        return this.getStringAttribute('firmware_update_image');
    }
    public set firmwareUpdateImage(value: string) {
        this._firmwareUpdateImage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firmwareUpdateImageInput() {
        return this._firmwareUpdateImage;
    }

    // firmware_update_role - computed: false, optional: false, required: true
    private _firmwareUpdateRole?: string; 
    public get firmwareUpdateRole() {
        return this.getStringAttribute('firmware_update_role');
    }
    public set firmwareUpdateRole(value: string) {
        this._firmwareUpdateRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firmwareUpdateRoleInput() {
        return this._firmwareUpdateRole;
    }

    // fuota_task_id - computed: true, optional: false, required: false
    public get fuotaTaskId() {
        return this.getStringAttribute('fuota_task_id');
    }

    // fuota_task_status - computed: true, optional: false, required: false
    public get fuotaTaskStatus() {
        return this.getStringAttribute('fuota_task_status');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // lo_ra_wan - computed: false, optional: false, required: true
    private _loRaWan = new CcFuotaTask.LoRaWANPropertyOutputReference(this, "lo_ra_wan");
    public get loRaWan() {
        return this._loRaWan;
    }
    public putLoRaWan(value: CcFuotaTask.LoRaWANProperty) {
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
    private _tags = new CcFuotaTask.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFuotaTask.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            associate_multicast_group: cdktn.stringToTerraform(this._associateMulticastGroup),
            associate_wireless_device: cdktn.stringToTerraform(this._associateWirelessDevice),
            description: cdktn.stringToTerraform(this._description),
            disassociate_multicast_group: cdktn.stringToTerraform(this._disassociateMulticastGroup),
            disassociate_wireless_device: cdktn.stringToTerraform(this._disassociateWirelessDevice),
            firmware_update_image: cdktn.stringToTerraform(this._firmwareUpdateImage),
            firmware_update_role: cdktn.stringToTerraform(this._firmwareUpdateRole),
            lo_ra_wan: ccFuotaTaskLoRaWANPropertyToTerraform(this._loRaWan.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccFuotaTaskTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            associate_multicast_group: {
                value: cdktn.stringToHclTerraform(this._associateMulticastGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            associate_wireless_device: {
                value: cdktn.stringToHclTerraform(this._associateWirelessDevice),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disassociate_multicast_group: {
                value: cdktn.stringToHclTerraform(this._disassociateMulticastGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disassociate_wireless_device: {
                value: cdktn.stringToHclTerraform(this._disassociateWirelessDevice),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            firmware_update_image: {
                value: cdktn.stringToHclTerraform(this._firmwareUpdateImage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            firmware_update_role: {
                value: cdktn.stringToHclTerraform(this._firmwareUpdateRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            lo_ra_wan: {
                value: ccFuotaTaskLoRaWANPropertyToHclTerraform(this._loRaWan.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFuotaTask.LoRaWANProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFuotaTaskTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFuotaTask.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFuotaTaskLoRaWANPropertyToTerraform(struct?: CcFuotaTask.LoRaWANProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rf_region: cdktn.stringToTerraform(struct!.rfRegion),
    }
}


export function ccFuotaTaskLoRaWANPropertyToHclTerraform(struct?: CcFuotaTask.LoRaWANProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccFuotaTaskTagPropertyToTerraform(struct?: CcFuotaTask.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFuotaTaskTagPropertyToHclTerraform(struct?: CcFuotaTask.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFuotaTask {
export interface LoRaWANProperty {
    /**
    * FUOTA task LoRaWAN RF region
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#rf_region CcFuotaTask#rf_region}
    */
    readonly rfRegion: string;
}
export class LoRaWANPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoRaWANProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rfRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.rfRegion = this._rfRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoRaWANProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rfRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rfRegion = value.rfRegion;
        }
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

    // start_time - computed: true, optional: false, required: false
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#key CcFuotaTask#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_fuota_task#value CcFuotaTask#value}
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
