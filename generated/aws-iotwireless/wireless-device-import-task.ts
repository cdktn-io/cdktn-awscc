// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWirelessDeviceImportTaskProps extends cdktn.TerraformMetaArguments {
    /**
    * Destination Name for import task
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task#destination_name CcWirelessDeviceImportTask#destination_name}
    */
    readonly destinationName: string;
    /**
    * sidewalk contain file for created device and role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task#sidewalk CcWirelessDeviceImportTask#sidewalk}
    */
    readonly sidewalk: CcWirelessDeviceImportTask.SidewalkProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task#tags CcWirelessDeviceImportTask#tags}
    */
    readonly tags?: CcWirelessDeviceImportTask.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task awscc_iotwireless_wireless_device_import_task}
*/
export class CcWirelessDeviceImportTask extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotwireless_wireless_device_import_task";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWirelessDeviceImportTask to import
    * @param importFromId The id of the existing CcWirelessDeviceImportTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWirelessDeviceImportTask to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_wireless_device_import_task", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task awscc_iotwireless_wireless_device_import_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWirelessDeviceImportTaskProps
    */
    public constructor(scope: Construct, id: string, config: CcWirelessDeviceImportTaskProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotwireless_wireless_device_import_task',
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
        this._destinationName = config.destinationName;
        this._sidewalk.internalValue = config.sidewalk;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
        return this.getStringAttribute('creation_date');
    }

    // destination_name - computed: false, optional: false, required: true
    private _destinationName?: string; 
    public get destinationName() {
        return this.getStringAttribute('destination_name');
    }
    public set destinationName(value: string) {
        this._destinationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationNameInput() {
        return this._destinationName;
    }

    // failed_imported_devices_count - computed: true, optional: false, required: false
    public get failedImportedDevicesCount() {
        return this.getNumberAttribute('failed_imported_devices_count');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // initialized_imported_devices_count - computed: true, optional: false, required: false
    public get initializedImportedDevicesCount() {
        return this.getNumberAttribute('initialized_imported_devices_count');
    }

    // onboarded_imported_devices_count - computed: true, optional: false, required: false
    public get onboardedImportedDevicesCount() {
        return this.getNumberAttribute('onboarded_imported_devices_count');
    }

    // pending_imported_devices_count - computed: true, optional: false, required: false
    public get pendingImportedDevicesCount() {
        return this.getNumberAttribute('pending_imported_devices_count');
    }

    // sidewalk - computed: false, optional: false, required: true
    private _sidewalk = new CcWirelessDeviceImportTask.SidewalkPropertyOutputReference(this, "sidewalk");
    public get sidewalk() {
        return this._sidewalk;
    }
    public putSidewalk(value: CcWirelessDeviceImportTask.SidewalkProperty) {
        this._sidewalk.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sidewalkInput() {
        return this._sidewalk.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_reason - computed: true, optional: false, required: false
    public get statusReason() {
        return this.getStringAttribute('status_reason');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWirelessDeviceImportTask.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWirelessDeviceImportTask.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // wireless_device_import_task_id - computed: true, optional: false, required: false
    public get wirelessDeviceImportTaskId() {
        return this.getStringAttribute('wireless_device_import_task_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            destination_name: cdktn.stringToTerraform(this._destinationName),
            sidewalk: ccWirelessDeviceImportTaskSidewalkPropertyToTerraform(this._sidewalk.internalValue),
            tags: cdktn.listMapper(ccWirelessDeviceImportTaskTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            destination_name: {
                value: cdktn.stringToHclTerraform(this._destinationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sidewalk: {
                value: ccWirelessDeviceImportTaskSidewalkPropertyToHclTerraform(this._sidewalk.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWirelessDeviceImportTask.SidewalkProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWirelessDeviceImportTaskTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcWirelessDeviceImportTask.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWirelessDeviceImportTaskSidewalkPropertyToTerraform(struct?: CcWirelessDeviceImportTask.SidewalkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_creation_file: cdktn.stringToTerraform(struct!.deviceCreationFile),
        role: cdktn.stringToTerraform(struct!.role),
        sidewalk_manufacturing_sn: cdktn.stringToTerraform(struct!.sidewalkManufacturingSn),
    }
}


export function ccWirelessDeviceImportTaskSidewalkPropertyToHclTerraform(struct?: CcWirelessDeviceImportTask.SidewalkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        device_creation_file: {
            value: cdktn.stringToHclTerraform(struct!.deviceCreationFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role: {
            value: cdktn.stringToHclTerraform(struct!.role),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sidewalk_manufacturing_sn: {
            value: cdktn.stringToHclTerraform(struct!.sidewalkManufacturingSn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWirelessDeviceImportTaskTagPropertyToTerraform(struct?: CcWirelessDeviceImportTask.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWirelessDeviceImportTaskTagPropertyToHclTerraform(struct?: CcWirelessDeviceImportTask.TagProperty | cdktn.IResolvable): any {
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


export namespace CcWirelessDeviceImportTask {
export interface SidewalkProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task#device_creation_file CcWirelessDeviceImportTask#device_creation_file}
    */
    readonly deviceCreationFile?: string;
    /**
    * sidewalk role
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task#role CcWirelessDeviceImportTask#role}
    */
    readonly role?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task#sidewalk_manufacturing_sn CcWirelessDeviceImportTask#sidewalk_manufacturing_sn}
    */
    readonly sidewalkManufacturingSn?: string;
}
export class SidewalkPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SidewalkProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deviceCreationFile !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceCreationFile = this._deviceCreationFile;
        }
        if (this._role !== undefined) {
            hasAnyValues = true;
            internalValueResult.role = this._role;
        }
        if (this._sidewalkManufacturingSn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sidewalkManufacturingSn = this._sidewalkManufacturingSn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SidewalkProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceCreationFile = undefined;
            this._role = undefined;
            this._sidewalkManufacturingSn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deviceCreationFile = value.deviceCreationFile;
            this._role = value.role;
            this._sidewalkManufacturingSn = value.sidewalkManufacturingSn;
        }
    }

    // device_creation_file - computed: true, optional: true, required: false
    private _deviceCreationFile?: string; 
    public get deviceCreationFile() {
        return this.getStringAttribute('device_creation_file');
    }
    public set deviceCreationFile(value: string) {
        this._deviceCreationFile = value;
    }
    public resetDeviceCreationFile() {
        this._deviceCreationFile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceCreationFileInput() {
        return this._deviceCreationFile;
    }

    // device_creation_file_list - computed: true, optional: false, required: false
    public get deviceCreationFileList() {
        return this.getListAttribute('device_creation_file_list');
    }

    // role - computed: true, optional: true, required: false
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    public resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }

    // sidewalk_manufacturing_sn - computed: true, optional: true, required: false
    private _sidewalkManufacturingSn?: string; 
    public get sidewalkManufacturingSn() {
        return this.getStringAttribute('sidewalk_manufacturing_sn');
    }
    public set sidewalkManufacturingSn(value: string) {
        this._sidewalkManufacturingSn = value;
    }
    public resetSidewalkManufacturingSn() {
        this._sidewalkManufacturingSn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sidewalkManufacturingSnInput() {
        return this._sidewalkManufacturingSn;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task#key CcWirelessDeviceImportTask#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotwireless_wireless_device_import_task#value CcWirelessDeviceImportTask#value}
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
