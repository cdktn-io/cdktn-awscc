// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the software set to apply.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desired_software_set_id CcEnvironment#desired_software_set_id}
    */
    readonly desiredSoftwareSetId?: string;
    /**
    * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desktop_arn CcEnvironment#desktop_arn}
    */
    readonly desktopArn: string;
    /**
    * The URL for the identity provider login (only for environments that use AppStream 2.0).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#desktop_endpoint CcEnvironment#desktop_endpoint}
    */
    readonly desktopEndpoint?: string;
    /**
    * An array of key-value pairs to apply to the newly created devices for this environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#device_creation_tags CcEnvironment#device_creation_tags}
    */
    readonly deviceCreationTags?: CcEnvironment.TagProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#kms_key_arn CcEnvironment#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * A specification for a time window to apply software updates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#maintenance_window CcEnvironment#maintenance_window}
    */
    readonly maintenanceWindow?: CcEnvironment.MaintenanceWindowProperty;
    /**
    * The name of the environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#name CcEnvironment#name}
    */
    readonly name?: string;
    /**
    * An option to define which software updates to apply.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#software_set_update_mode CcEnvironment#software_set_update_mode}
    */
    readonly softwareSetUpdateMode?: string;
    /**
    * An option to define if software updates should be applied within a maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#software_set_update_schedule CcEnvironment#software_set_update_schedule}
    */
    readonly softwareSetUpdateSchedule?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#tags CcEnvironment#tags}
    */
    readonly tags?: CcEnvironment.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment awscc_workspacesthinclient_environment}
*/
export class CcEnvironment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_workspacesthinclient_environment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironment to import
    * @param importFromId The id of the existing CcEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesthinclient_environment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment awscc_workspacesthinclient_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentProps
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_workspacesthinclient_environment',
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
        this._desiredSoftwareSetId = config.desiredSoftwareSetId;
        this._desktopArn = config.desktopArn;
        this._desktopEndpoint = config.desktopEndpoint;
        this._deviceCreationTags.internalValue = config.deviceCreationTags;
        this._kmsKeyArn = config.kmsKeyArn;
        this._maintenanceWindow.internalValue = config.maintenanceWindow;
        this._name = config.name;
        this._softwareSetUpdateMode = config.softwareSetUpdateMode;
        this._softwareSetUpdateSchedule = config.softwareSetUpdateSchedule;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activation_code - computed: true, optional: false, required: false
    public get activationCode() {
        return this.getStringAttribute('activation_code');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // desired_software_set_id - computed: true, optional: true, required: false
    private _desiredSoftwareSetId?: string; 
    public get desiredSoftwareSetId() {
        return this.getStringAttribute('desired_software_set_id');
    }
    public set desiredSoftwareSetId(value: string) {
        this._desiredSoftwareSetId = value;
    }
    public resetDesiredSoftwareSetId() {
        this._desiredSoftwareSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredSoftwareSetIdInput() {
        return this._desiredSoftwareSetId;
    }

    // desktop_arn - computed: false, optional: false, required: true
    private _desktopArn?: string; 
    public get desktopArn() {
        return this.getStringAttribute('desktop_arn');
    }
    public set desktopArn(value: string) {
        this._desktopArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get desktopArnInput() {
        return this._desktopArn;
    }

    // desktop_endpoint - computed: true, optional: true, required: false
    private _desktopEndpoint?: string; 
    public get desktopEndpoint() {
        return this.getStringAttribute('desktop_endpoint');
    }
    public set desktopEndpoint(value: string) {
        this._desktopEndpoint = value;
    }
    public resetDesktopEndpoint() {
        this._desktopEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desktopEndpointInput() {
        return this._desktopEndpoint;
    }

    // desktop_type - computed: true, optional: false, required: false
    public get desktopType() {
        return this.getStringAttribute('desktop_type');
    }

    // device_creation_tags - computed: true, optional: true, required: false
    private _deviceCreationTags = new CcEnvironment.TagPropertyList(this, "device_creation_tags", true);
    public get deviceCreationTags() {
        return this._deviceCreationTags;
    }
    public putDeviceCreationTags(value: CcEnvironment.TagProperty[] | cdktn.IResolvable) {
        this._deviceCreationTags.internalValue = value;
    }
    public resetDeviceCreationTags() {
        this._deviceCreationTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceCreationTagsInput() {
        return this._deviceCreationTags.internalValue;
    }

    // environment_id - computed: true, optional: false, required: false
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // maintenance_window - computed: true, optional: true, required: false
    private _maintenanceWindow = new CcEnvironment.MaintenanceWindowPropertyOutputReference(this, "maintenance_window");
    public get maintenanceWindow() {
        return this._maintenanceWindow;
    }
    public putMaintenanceWindow(value: CcEnvironment.MaintenanceWindowProperty) {
        this._maintenanceWindow.internalValue = value;
    }
    public resetMaintenanceWindow() {
        this._maintenanceWindow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceWindowInput() {
        return this._maintenanceWindow.internalValue;
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

    // pending_software_set_id - computed: true, optional: false, required: false
    public get pendingSoftwareSetId() {
        return this.getStringAttribute('pending_software_set_id');
    }

    // pending_software_set_version - computed: true, optional: false, required: false
    public get pendingSoftwareSetVersion() {
        return this.getStringAttribute('pending_software_set_version');
    }

    // registered_devices_count - computed: true, optional: false, required: false
    public get registeredDevicesCount() {
        return this.getNumberAttribute('registered_devices_count');
    }

    // software_set_compliance_status - computed: true, optional: false, required: false
    public get softwareSetComplianceStatus() {
        return this.getStringAttribute('software_set_compliance_status');
    }

    // software_set_update_mode - computed: true, optional: true, required: false
    private _softwareSetUpdateMode?: string; 
    public get softwareSetUpdateMode() {
        return this.getStringAttribute('software_set_update_mode');
    }
    public set softwareSetUpdateMode(value: string) {
        this._softwareSetUpdateMode = value;
    }
    public resetSoftwareSetUpdateMode() {
        this._softwareSetUpdateMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get softwareSetUpdateModeInput() {
        return this._softwareSetUpdateMode;
    }

    // software_set_update_schedule - computed: true, optional: true, required: false
    private _softwareSetUpdateSchedule?: string; 
    public get softwareSetUpdateSchedule() {
        return this.getStringAttribute('software_set_update_schedule');
    }
    public set softwareSetUpdateSchedule(value: string) {
        this._softwareSetUpdateSchedule = value;
    }
    public resetSoftwareSetUpdateSchedule() {
        this._softwareSetUpdateSchedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get softwareSetUpdateScheduleInput() {
        return this._softwareSetUpdateSchedule;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEnvironment.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEnvironment.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            desired_software_set_id: cdktn.stringToTerraform(this._desiredSoftwareSetId),
            desktop_arn: cdktn.stringToTerraform(this._desktopArn),
            desktop_endpoint: cdktn.stringToTerraform(this._desktopEndpoint),
            device_creation_tags: cdktn.listMapper(ccEnvironmentTagPropertyToTerraform, false)(this._deviceCreationTags.internalValue),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            maintenance_window: ccEnvironmentMaintenanceWindowPropertyToTerraform(this._maintenanceWindow.internalValue),
            name: cdktn.stringToTerraform(this._name),
            software_set_update_mode: cdktn.stringToTerraform(this._softwareSetUpdateMode),
            software_set_update_schedule: cdktn.stringToTerraform(this._softwareSetUpdateSchedule),
            tags: cdktn.listMapper(ccEnvironmentTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            desired_software_set_id: {
                value: cdktn.stringToHclTerraform(this._desiredSoftwareSetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            desktop_arn: {
                value: cdktn.stringToHclTerraform(this._desktopArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            desktop_endpoint: {
                value: cdktn.stringToHclTerraform(this._desktopEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            device_creation_tags: {
                value: cdktn.listMapperHcl(ccEnvironmentTagPropertyToHclTerraform, false)(this._deviceCreationTags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEnvironment.TagPropertyList",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            maintenance_window: {
                value: ccEnvironmentMaintenanceWindowPropertyToHclTerraform(this._maintenanceWindow.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironment.MaintenanceWindowProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            software_set_update_mode: {
                value: cdktn.stringToHclTerraform(this._softwareSetUpdateMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            software_set_update_schedule: {
                value: cdktn.stringToHclTerraform(this._softwareSetUpdateSchedule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEnvironmentTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEnvironment.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentTagPropertyToTerraform(struct?: CcEnvironment.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEnvironmentTagPropertyToHclTerraform(struct?: CcEnvironment.TagProperty | cdktn.IResolvable): any {
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


export function ccEnvironmentMaintenanceWindowPropertyToTerraform(struct?: CcEnvironment.MaintenanceWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        apply_time_of: cdktn.stringToTerraform(struct!.applyTimeOf),
        days_of_the_week: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.daysOfTheWeek),
        end_time_hour: cdktn.numberToTerraform(struct!.endTimeHour),
        end_time_minute: cdktn.numberToTerraform(struct!.endTimeMinute),
        start_time_hour: cdktn.numberToTerraform(struct!.startTimeHour),
        start_time_minute: cdktn.numberToTerraform(struct!.startTimeMinute),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccEnvironmentMaintenanceWindowPropertyToHclTerraform(struct?: CcEnvironment.MaintenanceWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        apply_time_of: {
            value: cdktn.stringToHclTerraform(struct!.applyTimeOf),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        days_of_the_week: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.daysOfTheWeek),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        end_time_hour: {
            value: cdktn.numberToHclTerraform(struct!.endTimeHour),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        end_time_minute: {
            value: cdktn.numberToHclTerraform(struct!.endTimeMinute),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_time_hour: {
            value: cdktn.numberToHclTerraform(struct!.startTimeHour),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_time_minute: {
            value: cdktn.numberToHclTerraform(struct!.startTimeMinute),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEnvironmentTagsPropertyToTerraform(struct?: CcEnvironment.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEnvironmentTagsPropertyToHclTerraform(struct?: CcEnvironment.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcEnvironment {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#key CcEnvironment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#value CcEnvironment#value}
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
export interface MaintenanceWindowProperty {
    /**
    * The desired time zone maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#apply_time_of CcEnvironment#apply_time_of}
    */
    readonly applyTimeOf?: string;
    /**
    * The date of maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#days_of_the_week CcEnvironment#days_of_the_week}
    */
    readonly daysOfTheWeek?: string[];
    /**
    * The hour end time of maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#end_time_hour CcEnvironment#end_time_hour}
    */
    readonly endTimeHour?: number;
    /**
    * The minute end time of maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#end_time_minute CcEnvironment#end_time_minute}
    */
    readonly endTimeMinute?: number;
    /**
    * The hour start time of maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#start_time_hour CcEnvironment#start_time_hour}
    */
    readonly startTimeHour?: number;
    /**
    * The minute start time of maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#start_time_minute CcEnvironment#start_time_minute}
    */
    readonly startTimeMinute?: number;
    /**
    * The type of maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#type CcEnvironment#type}
    */
    readonly type?: string;
}
export class MaintenanceWindowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaintenanceWindowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applyTimeOf !== undefined) {
            hasAnyValues = true;
            internalValueResult.applyTimeOf = this._applyTimeOf;
        }
        if (this._daysOfTheWeek !== undefined) {
            hasAnyValues = true;
            internalValueResult.daysOfTheWeek = this._daysOfTheWeek;
        }
        if (this._endTimeHour !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTimeHour = this._endTimeHour;
        }
        if (this._endTimeMinute !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTimeMinute = this._endTimeMinute;
        }
        if (this._startTimeHour !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTimeHour = this._startTimeHour;
        }
        if (this._startTimeMinute !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTimeMinute = this._startTimeMinute;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MaintenanceWindowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applyTimeOf = undefined;
            this._daysOfTheWeek = undefined;
            this._endTimeHour = undefined;
            this._endTimeMinute = undefined;
            this._startTimeHour = undefined;
            this._startTimeMinute = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applyTimeOf = value.applyTimeOf;
            this._daysOfTheWeek = value.daysOfTheWeek;
            this._endTimeHour = value.endTimeHour;
            this._endTimeMinute = value.endTimeMinute;
            this._startTimeHour = value.startTimeHour;
            this._startTimeMinute = value.startTimeMinute;
            this._type = value.type;
        }
    }

    // apply_time_of - computed: true, optional: true, required: false
    private _applyTimeOf?: string; 
    public get applyTimeOf() {
        return this.getStringAttribute('apply_time_of');
    }
    public set applyTimeOf(value: string) {
        this._applyTimeOf = value;
    }
    public resetApplyTimeOf() {
        this._applyTimeOf = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyTimeOfInput() {
        return this._applyTimeOf;
    }

    // days_of_the_week - computed: true, optional: true, required: false
    private _daysOfTheWeek?: string[]; 
    public get daysOfTheWeek() {
        return cdktn.Fn.tolist(this.getListAttribute('days_of_the_week'));
    }
    public set daysOfTheWeek(value: string[]) {
        this._daysOfTheWeek = value;
    }
    public resetDaysOfTheWeek() {
        this._daysOfTheWeek = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysOfTheWeekInput() {
        return this._daysOfTheWeek;
    }

    // end_time_hour - computed: true, optional: true, required: false
    private _endTimeHour?: number; 
    public get endTimeHour() {
        return this.getNumberAttribute('end_time_hour');
    }
    public set endTimeHour(value: number) {
        this._endTimeHour = value;
    }
    public resetEndTimeHour() {
        this._endTimeHour = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeHourInput() {
        return this._endTimeHour;
    }

    // end_time_minute - computed: true, optional: true, required: false
    private _endTimeMinute?: number; 
    public get endTimeMinute() {
        return this.getNumberAttribute('end_time_minute');
    }
    public set endTimeMinute(value: number) {
        this._endTimeMinute = value;
    }
    public resetEndTimeMinute() {
        this._endTimeMinute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeMinuteInput() {
        return this._endTimeMinute;
    }

    // start_time_hour - computed: true, optional: true, required: false
    private _startTimeHour?: number; 
    public get startTimeHour() {
        return this.getNumberAttribute('start_time_hour');
    }
    public set startTimeHour(value: number) {
        this._startTimeHour = value;
    }
    public resetStartTimeHour() {
        this._startTimeHour = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeHourInput() {
        return this._startTimeHour;
    }

    // start_time_minute - computed: true, optional: true, required: false
    private _startTimeMinute?: number; 
    public get startTimeMinute() {
        return this.getNumberAttribute('start_time_minute');
    }
    public set startTimeMinute(value: number) {
        this._startTimeMinute = value;
    }
    public resetStartTimeMinute() {
        this._startTimeMinute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeMinuteInput() {
        return this._startTimeMinute;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#key CcEnvironment#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspacesthinclient_environment#value CcEnvironment#value}
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
