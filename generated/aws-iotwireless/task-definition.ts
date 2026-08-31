// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTaskDefinitionProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#auto_create_tasks CcTaskDefinition#auto_create_tasks}
    */
    readonly autoCreateTasks: boolean | cdktn.IResolvable;
    /**
    * The list of task definitions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#lo_ra_wan_update_gateway_task_entry CcTaskDefinition#lo_ra_wan_update_gateway_task_entry}
    */
    readonly loRaWanUpdateGatewayTaskEntry?: CcTaskDefinition.LoRaWANUpdateGatewayTaskEntryProperty;
    /**
    * The name of the new resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#name CcTaskDefinition#name}
    */
    readonly name?: string;
    /**
    * A list of key-value pairs that contain metadata for the destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#tags CcTaskDefinition#tags}
    */
    readonly tags?: CcTaskDefinition.TagProperty[] | cdktn.IResolvable;
    /**
    * A filter to list only the wireless gateway task definitions that use this task definition type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#task_definition_type CcTaskDefinition#task_definition_type}
    */
    readonly taskDefinitionType?: string;
    /**
    * Information about the gateways to update.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update CcTaskDefinition#update}
    */
    readonly update?: CcTaskDefinition.UpdateWirelessGatewayTaskCreateProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition awscc_iotwireless_task_definition}
*/
export class CcTaskDefinition extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotwireless_task_definition";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTaskDefinition resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTaskDefinition to import
    * @param importFromId The id of the existing CcTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTaskDefinition to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_task_definition", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition awscc_iotwireless_task_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTaskDefinitionProps
    */
    public constructor(scope: Construct, id: string, config: CcTaskDefinitionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotwireless_task_definition',
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
        this._autoCreateTasks = config.autoCreateTasks;
        this._loRaWanUpdateGatewayTaskEntry.internalValue = config.loRaWanUpdateGatewayTaskEntry;
        this._name = config.name;
        this._tags.internalValue = config.tags;
        this._taskDefinitionType = config.taskDefinitionType;
        this._update.internalValue = config.update;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auto_create_tasks - computed: false, optional: false, required: true
    private _autoCreateTasks?: boolean | cdktn.IResolvable; 
    public get autoCreateTasks() {
        return this.getBooleanAttribute('auto_create_tasks');
    }
    public set autoCreateTasks(value: boolean | cdktn.IResolvable) {
        this._autoCreateTasks = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoCreateTasksInput() {
        return this._autoCreateTasks;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // lo_ra_wan_update_gateway_task_entry - computed: true, optional: true, required: false
    private _loRaWanUpdateGatewayTaskEntry = new CcTaskDefinition.LoRaWANUpdateGatewayTaskEntryPropertyOutputReference(this, "lo_ra_wan_update_gateway_task_entry");
    public get loRaWanUpdateGatewayTaskEntry() {
        return this._loRaWanUpdateGatewayTaskEntry;
    }
    public putLoRaWanUpdateGatewayTaskEntry(value: CcTaskDefinition.LoRaWANUpdateGatewayTaskEntryProperty) {
        this._loRaWanUpdateGatewayTaskEntry.internalValue = value;
    }
    public resetLoRaWanUpdateGatewayTaskEntry() {
        this._loRaWanUpdateGatewayTaskEntry.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loRaWanUpdateGatewayTaskEntryInput() {
        return this._loRaWanUpdateGatewayTaskEntry.internalValue;
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
    private _tags = new CcTaskDefinition.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTaskDefinition.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // task_definition_id - computed: true, optional: false, required: false
    public get taskDefinitionId() {
        return this.getStringAttribute('task_definition_id');
    }

    // task_definition_type - computed: true, optional: true, required: false
    private _taskDefinitionType?: string; 
    public get taskDefinitionType() {
        return this.getStringAttribute('task_definition_type');
    }
    public set taskDefinitionType(value: string) {
        this._taskDefinitionType = value;
    }
    public resetTaskDefinitionType() {
        this._taskDefinitionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionTypeInput() {
        return this._taskDefinitionType;
    }

    // update - computed: true, optional: true, required: false
    private _update = new CcTaskDefinition.UpdateWirelessGatewayTaskCreatePropertyOutputReference(this, "update");
    public get update() {
        return this._update;
    }
    public putUpdate(value: CcTaskDefinition.UpdateWirelessGatewayTaskCreateProperty) {
        this._update.internalValue = value;
    }
    public resetUpdate() {
        this._update.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
        return this._update.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_create_tasks: cdktn.booleanToTerraform(this._autoCreateTasks),
            lo_ra_wan_update_gateway_task_entry: ccTaskDefinitionLoRaWANUpdateGatewayTaskEntryPropertyToTerraform(this._loRaWanUpdateGatewayTaskEntry.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccTaskDefinitionTagPropertyToTerraform, false)(this._tags.internalValue),
            task_definition_type: cdktn.stringToTerraform(this._taskDefinitionType),
            update: ccTaskDefinitionUpdateWirelessGatewayTaskCreatePropertyToTerraform(this._update.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_create_tasks: {
                value: cdktn.booleanToHclTerraform(this._autoCreateTasks),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            lo_ra_wan_update_gateway_task_entry: {
                value: ccTaskDefinitionLoRaWANUpdateGatewayTaskEntryPropertyToHclTerraform(this._loRaWanUpdateGatewayTaskEntry.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTaskDefinition.LoRaWANUpdateGatewayTaskEntryProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTaskDefinitionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTaskDefinition.TagPropertyList",
            },
            task_definition_type: {
                value: cdktn.stringToHclTerraform(this._taskDefinitionType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            update: {
                value: ccTaskDefinitionUpdateWirelessGatewayTaskCreatePropertyToHclTerraform(this._update.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTaskDefinition.UpdateWirelessGatewayTaskCreateProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTaskDefinitionLoRaWANGatewayVersionPropertyToTerraform(struct?: CcTaskDefinition.LoRaWANGatewayVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model: cdktn.stringToTerraform(struct!.model),
        package_version: cdktn.stringToTerraform(struct!.packageVersion),
        station: cdktn.stringToTerraform(struct!.station),
    }
}


export function ccTaskDefinitionLoRaWANGatewayVersionPropertyToHclTerraform(struct?: CcTaskDefinition.LoRaWANGatewayVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model: {
            value: cdktn.stringToHclTerraform(struct!.model),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        package_version: {
            value: cdktn.stringToHclTerraform(struct!.packageVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        station: {
            value: cdktn.stringToHclTerraform(struct!.station),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionPropertyToTerraform(struct?: CcTaskDefinition.LoRaWanUpdateGatewayTaskEntryUpdateVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model: cdktn.stringToTerraform(struct!.model),
        package_version: cdktn.stringToTerraform(struct!.packageVersion),
        station: cdktn.stringToTerraform(struct!.station),
    }
}


export function ccTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionPropertyToHclTerraform(struct?: CcTaskDefinition.LoRaWanUpdateGatewayTaskEntryUpdateVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model: {
            value: cdktn.stringToHclTerraform(struct!.model),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        package_version: {
            value: cdktn.stringToHclTerraform(struct!.packageVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        station: {
            value: cdktn.stringToHclTerraform(struct!.station),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionLoRaWANUpdateGatewayTaskEntryPropertyToTerraform(struct?: CcTaskDefinition.LoRaWANUpdateGatewayTaskEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        current_version: ccTaskDefinitionLoRaWANGatewayVersionPropertyToTerraform(struct!.currentVersion),
        update_version: ccTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionPropertyToTerraform(struct!.updateVersion),
    }
}


export function ccTaskDefinitionLoRaWANUpdateGatewayTaskEntryPropertyToHclTerraform(struct?: CcTaskDefinition.LoRaWANUpdateGatewayTaskEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        current_version: {
            value: ccTaskDefinitionLoRaWANGatewayVersionPropertyToHclTerraform(struct!.currentVersion),
            isBlock: true,
            type: "struct",
            storageClassType: "LoRaWANGatewayVersionProperty",
        },
        update_version: {
            value: ccTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionPropertyToHclTerraform(struct!.updateVersion),
            isBlock: true,
            type: "struct",
            storageClassType: "LoRaWanUpdateGatewayTaskEntryUpdateVersionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionTagPropertyToTerraform(struct?: CcTaskDefinition.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskDefinitionTagPropertyToHclTerraform(struct?: CcTaskDefinition.TagProperty | cdktn.IResolvable): any {
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


export function ccTaskDefinitionCurrentVersionPropertyToTerraform(struct?: CcTaskDefinition.CurrentVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model: cdktn.stringToTerraform(struct!.model),
        package_version: cdktn.stringToTerraform(struct!.packageVersion),
        station: cdktn.stringToTerraform(struct!.station),
    }
}


export function ccTaskDefinitionCurrentVersionPropertyToHclTerraform(struct?: CcTaskDefinition.CurrentVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model: {
            value: cdktn.stringToHclTerraform(struct!.model),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        package_version: {
            value: cdktn.stringToHclTerraform(struct!.packageVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        station: {
            value: cdktn.stringToHclTerraform(struct!.station),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionUpdateLoRaWanUpdateVersionPropertyToTerraform(struct?: CcTaskDefinition.UpdateLoRaWanUpdateVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model: cdktn.stringToTerraform(struct!.model),
        package_version: cdktn.stringToTerraform(struct!.packageVersion),
        station: cdktn.stringToTerraform(struct!.station),
    }
}


export function ccTaskDefinitionUpdateLoRaWanUpdateVersionPropertyToHclTerraform(struct?: CcTaskDefinition.UpdateLoRaWanUpdateVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model: {
            value: cdktn.stringToHclTerraform(struct!.model),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        package_version: {
            value: cdktn.stringToHclTerraform(struct!.packageVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        station: {
            value: cdktn.stringToHclTerraform(struct!.station),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionLoRaWANUpdateGatewayTaskCreatePropertyToTerraform(struct?: CcTaskDefinition.LoRaWANUpdateGatewayTaskCreateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        current_version: ccTaskDefinitionCurrentVersionPropertyToTerraform(struct!.currentVersion),
        sig_key_crc: cdktn.numberToTerraform(struct!.sigKeyCrc),
        update_signature: cdktn.stringToTerraform(struct!.updateSignature),
        update_version: ccTaskDefinitionUpdateLoRaWanUpdateVersionPropertyToTerraform(struct!.updateVersion),
    }
}


export function ccTaskDefinitionLoRaWANUpdateGatewayTaskCreatePropertyToHclTerraform(struct?: CcTaskDefinition.LoRaWANUpdateGatewayTaskCreateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        current_version: {
            value: ccTaskDefinitionCurrentVersionPropertyToHclTerraform(struct!.currentVersion),
            isBlock: true,
            type: "struct",
            storageClassType: "CurrentVersionProperty",
        },
        sig_key_crc: {
            value: cdktn.numberToHclTerraform(struct!.sigKeyCrc),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        update_signature: {
            value: cdktn.stringToHclTerraform(struct!.updateSignature),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_version: {
            value: ccTaskDefinitionUpdateLoRaWanUpdateVersionPropertyToHclTerraform(struct!.updateVersion),
            isBlock: true,
            type: "struct",
            storageClassType: "UpdateLoRaWanUpdateVersionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDefinitionUpdateWirelessGatewayTaskCreatePropertyToTerraform(struct?: CcTaskDefinition.UpdateWirelessGatewayTaskCreateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lo_ra_wan: ccTaskDefinitionLoRaWANUpdateGatewayTaskCreatePropertyToTerraform(struct!.loRaWan),
        update_data_role: cdktn.stringToTerraform(struct!.updateDataRole),
        update_data_source: cdktn.stringToTerraform(struct!.updateDataSource),
    }
}


export function ccTaskDefinitionUpdateWirelessGatewayTaskCreatePropertyToHclTerraform(struct?: CcTaskDefinition.UpdateWirelessGatewayTaskCreateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lo_ra_wan: {
            value: ccTaskDefinitionLoRaWANUpdateGatewayTaskCreatePropertyToHclTerraform(struct!.loRaWan),
            isBlock: true,
            type: "struct",
            storageClassType: "LoRaWANUpdateGatewayTaskCreateProperty",
        },
        update_data_role: {
            value: cdktn.stringToHclTerraform(struct!.updateDataRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTaskDefinition {
export interface LoRaWANGatewayVersionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model CcTaskDefinition#model}
    */
    readonly model?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version CcTaskDefinition#package_version}
    */
    readonly packageVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station CcTaskDefinition#station}
    */
    readonly station?: string;
}
export class LoRaWANGatewayVersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoRaWANGatewayVersionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._model !== undefined) {
            hasAnyValues = true;
            internalValueResult.model = this._model;
        }
        if (this._packageVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.packageVersion = this._packageVersion;
        }
        if (this._station !== undefined) {
            hasAnyValues = true;
            internalValueResult.station = this._station;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoRaWANGatewayVersionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._model = undefined;
            this._packageVersion = undefined;
            this._station = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._model = value.model;
            this._packageVersion = value.packageVersion;
            this._station = value.station;
        }
    }

    // model - computed: true, optional: true, required: false
    private _model?: string; 
    public get model() {
        return this.getStringAttribute('model');
    }
    public set model(value: string) {
        this._model = value;
    }
    public resetModel() {
        this._model = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInput() {
        return this._model;
    }

    // package_version - computed: true, optional: true, required: false
    private _packageVersion?: string; 
    public get packageVersion() {
        return this.getStringAttribute('package_version');
    }
    public set packageVersion(value: string) {
        this._packageVersion = value;
    }
    public resetPackageVersion() {
        this._packageVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packageVersionInput() {
        return this._packageVersion;
    }

    // station - computed: true, optional: true, required: false
    private _station?: string; 
    public get station() {
        return this.getStringAttribute('station');
    }
    public set station(value: string) {
        this._station = value;
    }
    public resetStation() {
        this._station = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stationInput() {
        return this._station;
    }
}
export interface LoRaWanUpdateGatewayTaskEntryUpdateVersionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model CcTaskDefinition#model}
    */
    readonly model?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version CcTaskDefinition#package_version}
    */
    readonly packageVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station CcTaskDefinition#station}
    */
    readonly station?: string;
}
export class LoRaWanUpdateGatewayTaskEntryUpdateVersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoRaWanUpdateGatewayTaskEntryUpdateVersionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._model !== undefined) {
            hasAnyValues = true;
            internalValueResult.model = this._model;
        }
        if (this._packageVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.packageVersion = this._packageVersion;
        }
        if (this._station !== undefined) {
            hasAnyValues = true;
            internalValueResult.station = this._station;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoRaWanUpdateGatewayTaskEntryUpdateVersionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._model = undefined;
            this._packageVersion = undefined;
            this._station = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._model = value.model;
            this._packageVersion = value.packageVersion;
            this._station = value.station;
        }
    }

    // model - computed: true, optional: true, required: false
    private _model?: string; 
    public get model() {
        return this.getStringAttribute('model');
    }
    public set model(value: string) {
        this._model = value;
    }
    public resetModel() {
        this._model = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInput() {
        return this._model;
    }

    // package_version - computed: true, optional: true, required: false
    private _packageVersion?: string; 
    public get packageVersion() {
        return this.getStringAttribute('package_version');
    }
    public set packageVersion(value: string) {
        this._packageVersion = value;
    }
    public resetPackageVersion() {
        this._packageVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packageVersionInput() {
        return this._packageVersion;
    }

    // station - computed: true, optional: true, required: false
    private _station?: string; 
    public get station() {
        return this.getStringAttribute('station');
    }
    public set station(value: string) {
        this._station = value;
    }
    public resetStation() {
        this._station = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stationInput() {
        return this._station;
    }
}
export interface LoRaWANUpdateGatewayTaskEntryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#current_version CcTaskDefinition#current_version}
    */
    readonly currentVersion?: LoRaWANGatewayVersionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_version CcTaskDefinition#update_version}
    */
    readonly updateVersion?: LoRaWanUpdateGatewayTaskEntryUpdateVersionProperty;
}
export class LoRaWANUpdateGatewayTaskEntryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoRaWANUpdateGatewayTaskEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._currentVersion?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.currentVersion = this._currentVersion?.internalValue;
        }
        if (this._updateVersion?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateVersion = this._updateVersion?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoRaWANUpdateGatewayTaskEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._currentVersion.internalValue = undefined;
            this._updateVersion.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._currentVersion.internalValue = value.currentVersion;
            this._updateVersion.internalValue = value.updateVersion;
        }
    }

    // current_version - computed: true, optional: true, required: false
    private _currentVersion = new LoRaWANGatewayVersionPropertyOutputReference(this, "current_version");
    public get currentVersion() {
        return this._currentVersion;
    }
    public putCurrentVersion(value: LoRaWANGatewayVersionProperty) {
        this._currentVersion.internalValue = value;
    }
    public resetCurrentVersion() {
        this._currentVersion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get currentVersionInput() {
        return this._currentVersion.internalValue;
    }

    // update_version - computed: true, optional: true, required: false
    private _updateVersion = new LoRaWanUpdateGatewayTaskEntryUpdateVersionPropertyOutputReference(this, "update_version");
    public get updateVersion() {
        return this._updateVersion;
    }
    public putUpdateVersion(value: LoRaWanUpdateGatewayTaskEntryUpdateVersionProperty) {
        this._updateVersion.internalValue = value;
    }
    public resetUpdateVersion() {
        this._updateVersion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateVersionInput() {
        return this._updateVersion.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#key CcTaskDefinition#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#value CcTaskDefinition#value}
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
export interface CurrentVersionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model CcTaskDefinition#model}
    */
    readonly model?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version CcTaskDefinition#package_version}
    */
    readonly packageVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station CcTaskDefinition#station}
    */
    readonly station?: string;
}
export class CurrentVersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CurrentVersionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._model !== undefined) {
            hasAnyValues = true;
            internalValueResult.model = this._model;
        }
        if (this._packageVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.packageVersion = this._packageVersion;
        }
        if (this._station !== undefined) {
            hasAnyValues = true;
            internalValueResult.station = this._station;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CurrentVersionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._model = undefined;
            this._packageVersion = undefined;
            this._station = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._model = value.model;
            this._packageVersion = value.packageVersion;
            this._station = value.station;
        }
    }

    // model - computed: true, optional: true, required: false
    private _model?: string; 
    public get model() {
        return this.getStringAttribute('model');
    }
    public set model(value: string) {
        this._model = value;
    }
    public resetModel() {
        this._model = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInput() {
        return this._model;
    }

    // package_version - computed: true, optional: true, required: false
    private _packageVersion?: string; 
    public get packageVersion() {
        return this.getStringAttribute('package_version');
    }
    public set packageVersion(value: string) {
        this._packageVersion = value;
    }
    public resetPackageVersion() {
        this._packageVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packageVersionInput() {
        return this._packageVersion;
    }

    // station - computed: true, optional: true, required: false
    private _station?: string; 
    public get station() {
        return this.getStringAttribute('station');
    }
    public set station(value: string) {
        this._station = value;
    }
    public resetStation() {
        this._station = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stationInput() {
        return this._station;
    }
}
export interface UpdateLoRaWanUpdateVersionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#model CcTaskDefinition#model}
    */
    readonly model?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#package_version CcTaskDefinition#package_version}
    */
    readonly packageVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#station CcTaskDefinition#station}
    */
    readonly station?: string;
}
export class UpdateLoRaWanUpdateVersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UpdateLoRaWanUpdateVersionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._model !== undefined) {
            hasAnyValues = true;
            internalValueResult.model = this._model;
        }
        if (this._packageVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.packageVersion = this._packageVersion;
        }
        if (this._station !== undefined) {
            hasAnyValues = true;
            internalValueResult.station = this._station;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UpdateLoRaWanUpdateVersionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._model = undefined;
            this._packageVersion = undefined;
            this._station = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._model = value.model;
            this._packageVersion = value.packageVersion;
            this._station = value.station;
        }
    }

    // model - computed: true, optional: true, required: false
    private _model?: string; 
    public get model() {
        return this.getStringAttribute('model');
    }
    public set model(value: string) {
        this._model = value;
    }
    public resetModel() {
        this._model = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInput() {
        return this._model;
    }

    // package_version - computed: true, optional: true, required: false
    private _packageVersion?: string; 
    public get packageVersion() {
        return this.getStringAttribute('package_version');
    }
    public set packageVersion(value: string) {
        this._packageVersion = value;
    }
    public resetPackageVersion() {
        this._packageVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packageVersionInput() {
        return this._packageVersion;
    }

    // station - computed: true, optional: true, required: false
    private _station?: string; 
    public get station() {
        return this.getStringAttribute('station');
    }
    public set station(value: string) {
        this._station = value;
    }
    public resetStation() {
        this._station = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stationInput() {
        return this._station;
    }
}
export interface LoRaWANUpdateGatewayTaskCreateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#current_version CcTaskDefinition#current_version}
    */
    readonly currentVersion?: CurrentVersionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#sig_key_crc CcTaskDefinition#sig_key_crc}
    */
    readonly sigKeyCrc?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_signature CcTaskDefinition#update_signature}
    */
    readonly updateSignature?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_version CcTaskDefinition#update_version}
    */
    readonly updateVersion?: UpdateLoRaWanUpdateVersionProperty;
}
export class LoRaWANUpdateGatewayTaskCreatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoRaWANUpdateGatewayTaskCreateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._currentVersion?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.currentVersion = this._currentVersion?.internalValue;
        }
        if (this._sigKeyCrc !== undefined) {
            hasAnyValues = true;
            internalValueResult.sigKeyCrc = this._sigKeyCrc;
        }
        if (this._updateSignature !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateSignature = this._updateSignature;
        }
        if (this._updateVersion?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateVersion = this._updateVersion?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoRaWANUpdateGatewayTaskCreateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._currentVersion.internalValue = undefined;
            this._sigKeyCrc = undefined;
            this._updateSignature = undefined;
            this._updateVersion.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._currentVersion.internalValue = value.currentVersion;
            this._sigKeyCrc = value.sigKeyCrc;
            this._updateSignature = value.updateSignature;
            this._updateVersion.internalValue = value.updateVersion;
        }
    }

    // current_version - computed: true, optional: true, required: false
    private _currentVersion = new CurrentVersionPropertyOutputReference(this, "current_version");
    public get currentVersion() {
        return this._currentVersion;
    }
    public putCurrentVersion(value: CurrentVersionProperty) {
        this._currentVersion.internalValue = value;
    }
    public resetCurrentVersion() {
        this._currentVersion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get currentVersionInput() {
        return this._currentVersion.internalValue;
    }

    // sig_key_crc - computed: true, optional: true, required: false
    private _sigKeyCrc?: number; 
    public get sigKeyCrc() {
        return this.getNumberAttribute('sig_key_crc');
    }
    public set sigKeyCrc(value: number) {
        this._sigKeyCrc = value;
    }
    public resetSigKeyCrc() {
        this._sigKeyCrc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sigKeyCrcInput() {
        return this._sigKeyCrc;
    }

    // update_signature - computed: true, optional: true, required: false
    private _updateSignature?: string; 
    public get updateSignature() {
        return this.getStringAttribute('update_signature');
    }
    public set updateSignature(value: string) {
        this._updateSignature = value;
    }
    public resetUpdateSignature() {
        this._updateSignature = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateSignatureInput() {
        return this._updateSignature;
    }

    // update_version - computed: true, optional: true, required: false
    private _updateVersion = new UpdateLoRaWanUpdateVersionPropertyOutputReference(this, "update_version");
    public get updateVersion() {
        return this._updateVersion;
    }
    public putUpdateVersion(value: UpdateLoRaWanUpdateVersionProperty) {
        this._updateVersion.internalValue = value;
    }
    public resetUpdateVersion() {
        this._updateVersion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateVersionInput() {
        return this._updateVersion.internalValue;
    }
}
export interface UpdateWirelessGatewayTaskCreateProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#lo_ra_wan CcTaskDefinition#lo_ra_wan}
    */
    readonly loRaWan?: LoRaWANUpdateGatewayTaskCreateProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_data_role CcTaskDefinition#update_data_role}
    */
    readonly updateDataRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_task_definition#update_data_source CcTaskDefinition#update_data_source}
    */
    readonly updateDataSource?: string;
}
export class UpdateWirelessGatewayTaskCreatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UpdateWirelessGatewayTaskCreateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._loRaWan?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loRaWan = this._loRaWan?.internalValue;
        }
        if (this._updateDataRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateDataRole = this._updateDataRole;
        }
        if (this._updateDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateDataSource = this._updateDataSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UpdateWirelessGatewayTaskCreateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._loRaWan.internalValue = undefined;
            this._updateDataRole = undefined;
            this._updateDataSource = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._loRaWan.internalValue = value.loRaWan;
            this._updateDataRole = value.updateDataRole;
            this._updateDataSource = value.updateDataSource;
        }
    }

    // lo_ra_wan - computed: true, optional: true, required: false
    private _loRaWan = new LoRaWANUpdateGatewayTaskCreatePropertyOutputReference(this, "lo_ra_wan");
    public get loRaWan() {
        return this._loRaWan;
    }
    public putLoRaWan(value: LoRaWANUpdateGatewayTaskCreateProperty) {
        this._loRaWan.internalValue = value;
    }
    public resetLoRaWan() {
        this._loRaWan.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loRaWanInput() {
        return this._loRaWan.internalValue;
    }

    // update_data_role - computed: true, optional: true, required: false
    private _updateDataRole?: string; 
    public get updateDataRole() {
        return this.getStringAttribute('update_data_role');
    }
    public set updateDataRole(value: string) {
        this._updateDataRole = value;
    }
    public resetUpdateDataRole() {
        this._updateDataRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateDataRoleInput() {
        return this._updateDataRole;
    }

    // update_data_source - computed: true, optional: true, required: false
    private _updateDataSource?: string; 
    public get updateDataSource() {
        return this.getStringAttribute('update_data_source');
    }
    public set updateDataSource(value: string) {
        this._updateDataSource = value;
    }
    public resetUpdateDataSource() {
        this._updateDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateDataSourceInput() {
        return this._updateDataSource;
    }
}
}
