// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The workgroup description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#description CcWorkGroup#description}
    */
    readonly description?: string;
    /**
    * The workGroup name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#name CcWorkGroup#name}
    */
    readonly name: string;
    /**
    * The option to delete the workgroup and its contents even if the workgroup contains any named queries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#recursive_delete_option CcWorkGroup#recursive_delete_option}
    */
    readonly recursiveDeleteOption?: boolean | cdktn.IResolvable;
    /**
    * The state of the workgroup: ENABLED or DISABLED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#state CcWorkGroup#state}
    */
    readonly state?: string;
    /**
    * One or more tags, separated by commas, that you want to attach to the workgroup as you create it
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#tags CcWorkGroup#tags}
    */
    readonly tags?: CcWorkGroup.TagProperty[] | cdktn.IResolvable;
    /**
    * The workgroup configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#work_group_configuration CcWorkGroup#work_group_configuration}
    */
    readonly workGroupConfiguration?: CcWorkGroup.WorkGroupConfigurationProperty;
    /**
    * The workgroup configuration update object
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#work_group_configuration_updates CcWorkGroup#work_group_configuration_updates}
    */
    readonly workGroupConfigurationUpdates?: CcWorkGroup.WorkGroupConfigurationUpdatesProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group awscc_athena_work_group}
*/
export class CcWorkGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_athena_work_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkGroup to import
    * @param importFromId The id of the existing CcWorkGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_athena_work_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group awscc_athena_work_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcWorkGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_athena_work_group',
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
        this._name = config.name;
        this._recursiveDeleteOption = config.recursiveDeleteOption;
        this._state = config.state;
        this._tags.internalValue = config.tags;
        this._workGroupConfiguration.internalValue = config.workGroupConfiguration;
        this._workGroupConfigurationUpdates.internalValue = config.workGroupConfigurationUpdates;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
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

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // recursive_delete_option - computed: true, optional: true, required: false
    private _recursiveDeleteOption?: boolean | cdktn.IResolvable; 
    public get recursiveDeleteOption() {
        return this.getBooleanAttribute('recursive_delete_option');
    }
    public set recursiveDeleteOption(value: boolean | cdktn.IResolvable) {
        this._recursiveDeleteOption = value;
    }
    public resetRecursiveDeleteOption() {
        this._recursiveDeleteOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recursiveDeleteOptionInput() {
        return this._recursiveDeleteOption;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWorkGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWorkGroup.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // work_group_configuration - computed: true, optional: true, required: false
    private _workGroupConfiguration = new CcWorkGroup.WorkGroupConfigurationPropertyOutputReference(this, "work_group_configuration");
    public get workGroupConfiguration() {
        return this._workGroupConfiguration;
    }
    public putWorkGroupConfiguration(value: CcWorkGroup.WorkGroupConfigurationProperty) {
        this._workGroupConfiguration.internalValue = value;
    }
    public resetWorkGroupConfiguration() {
        this._workGroupConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workGroupConfigurationInput() {
        return this._workGroupConfiguration.internalValue;
    }

    // work_group_configuration_updates - computed: true, optional: true, required: false
    private _workGroupConfigurationUpdates = new CcWorkGroup.WorkGroupConfigurationUpdatesPropertyOutputReference(this, "work_group_configuration_updates");
    public get workGroupConfigurationUpdates() {
        return this._workGroupConfigurationUpdates;
    }
    public putWorkGroupConfigurationUpdates(value: CcWorkGroup.WorkGroupConfigurationUpdatesProperty) {
        this._workGroupConfigurationUpdates.internalValue = value;
    }
    public resetWorkGroupConfigurationUpdates() {
        this._workGroupConfigurationUpdates.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workGroupConfigurationUpdatesInput() {
        return this._workGroupConfigurationUpdates.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            recursive_delete_option: cdktn.booleanToTerraform(this._recursiveDeleteOption),
            state: cdktn.stringToTerraform(this._state),
            tags: cdktn.listMapper(ccWorkGroupTagPropertyToTerraform, false)(this._tags.internalValue),
            work_group_configuration: ccWorkGroupWorkGroupConfigurationPropertyToTerraform(this._workGroupConfiguration.internalValue),
            work_group_configuration_updates: ccWorkGroupWorkGroupConfigurationUpdatesPropertyToTerraform(this._workGroupConfigurationUpdates.internalValue),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recursive_delete_option: {
                value: cdktn.booleanToHclTerraform(this._recursiveDeleteOption),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            state: {
                value: cdktn.stringToHclTerraform(this._state),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWorkGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcWorkGroup.TagPropertyList",
            },
            work_group_configuration: {
                value: ccWorkGroupWorkGroupConfigurationPropertyToHclTerraform(this._workGroupConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkGroup.WorkGroupConfigurationProperty",
            },
            work_group_configuration_updates: {
                value: ccWorkGroupWorkGroupConfigurationUpdatesPropertyToHclTerraform(this._workGroupConfigurationUpdates.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkGroup.WorkGroupConfigurationUpdatesProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWorkGroupTagPropertyToTerraform(struct?: CcWorkGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkGroupTagPropertyToHclTerraform(struct?: CcWorkGroup.TagProperty | cdktn.IResolvable): any {
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


export function ccWorkGroupCustomerContentEncryptionConfigurationPropertyToTerraform(struct?: CcWorkGroup.CustomerContentEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccWorkGroupCustomerContentEncryptionConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.CustomerContentEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupClassificationPropertyToTerraform(struct?: CcWorkGroup.ClassificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
    }
}


export function ccWorkGroupClassificationPropertyToHclTerraform(struct?: CcWorkGroup.ClassificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupEngineConfigurationPropertyToTerraform(struct?: CcWorkGroup.EngineConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_configs: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.additionalConfigs),
        classifications: cdktn.listMapper(ccWorkGroupClassificationPropertyToTerraform, false)(struct!.classifications),
        coordinator_dpu_size: cdktn.numberToTerraform(struct!.coordinatorDpuSize),
        default_executor_dpu_size: cdktn.numberToTerraform(struct!.defaultExecutorDpuSize),
        max_concurrent_dpus: cdktn.numberToTerraform(struct!.maxConcurrentDpus),
        spark_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkProperties),
    }
}


export function ccWorkGroupEngineConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.EngineConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_configs: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.additionalConfigs),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        classifications: {
            value: cdktn.listMapperHcl(ccWorkGroupClassificationPropertyToHclTerraform, false)(struct!.classifications),
            isBlock: true,
            type: "list",
            storageClassType: "ClassificationPropertyList",
        },
        coordinator_dpu_size: {
            value: cdktn.numberToHclTerraform(struct!.coordinatorDpuSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        default_executor_dpu_size: {
            value: cdktn.numberToHclTerraform(struct!.defaultExecutorDpuSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_concurrent_dpus: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrentDpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        spark_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupEngineVersionPropertyToTerraform(struct?: CcWorkGroup.EngineVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        selected_engine_version: cdktn.stringToTerraform(struct!.selectedEngineVersion),
    }
}


export function ccWorkGroupEngineVersionPropertyToHclTerraform(struct?: CcWorkGroup.EngineVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        selected_engine_version: {
            value: cdktn.stringToHclTerraform(struct!.selectedEngineVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupManagedStorageEncryptionConfigurationPropertyToTerraform(struct?: CcWorkGroup.ManagedStorageEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccWorkGroupManagedStorageEncryptionConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.ManagedStorageEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupManagedQueryResultsConfigurationPropertyToTerraform(struct?: CcWorkGroup.ManagedQueryResultsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        encryption_configuration: ccWorkGroupManagedStorageEncryptionConfigurationPropertyToTerraform(struct!.encryptionConfiguration),
    }
}


export function ccWorkGroupManagedQueryResultsConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.ManagedQueryResultsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        encryption_configuration: {
            value: ccWorkGroupManagedStorageEncryptionConfigurationPropertyToHclTerraform(struct!.encryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedStorageEncryptionConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupCloudWatchLoggingConfigurationPropertyToTerraform(struct?: CcWorkGroup.CloudWatchLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_group: cdktn.stringToTerraform(struct!.logGroup),
        log_stream_name_prefix: cdktn.stringToTerraform(struct!.logStreamNamePrefix),
        log_types: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(struct!.logTypes),
    }
}


export function ccWorkGroupCloudWatchLoggingConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.CloudWatchLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_group: {
            value: cdktn.stringToHclTerraform(struct!.logGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_stream_name_prefix: {
            value: cdktn.stringToHclTerraform(struct!.logStreamNamePrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_types: {
            value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(struct!.logTypes),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupManagedLoggingConfigurationPropertyToTerraform(struct?: CcWorkGroup.ManagedLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccWorkGroupManagedLoggingConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.ManagedLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupS3LoggingConfigurationPropertyToTerraform(struct?: CcWorkGroup.S3LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
        log_location: cdktn.stringToTerraform(struct!.logLocation),
    }
}


export function ccWorkGroupS3LoggingConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.S3LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_location: {
            value: cdktn.stringToHclTerraform(struct!.logLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupMonitoringConfigurationPropertyToTerraform(struct?: CcWorkGroup.MonitoringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logging_configuration: ccWorkGroupCloudWatchLoggingConfigurationPropertyToTerraform(struct!.cloudwatchLoggingConfiguration),
        managed_logging_configuration: ccWorkGroupManagedLoggingConfigurationPropertyToTerraform(struct!.managedLoggingConfiguration),
        s3_logging_configuration: ccWorkGroupS3LoggingConfigurationPropertyToTerraform(struct!.s3LoggingConfiguration),
    }
}


export function ccWorkGroupMonitoringConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.MonitoringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logging_configuration: {
            value: ccWorkGroupCloudWatchLoggingConfigurationPropertyToHclTerraform(struct!.cloudwatchLoggingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLoggingConfigurationProperty",
        },
        managed_logging_configuration: {
            value: ccWorkGroupManagedLoggingConfigurationPropertyToHclTerraform(struct!.managedLoggingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedLoggingConfigurationProperty",
        },
        s3_logging_configuration: {
            value: ccWorkGroupS3LoggingConfigurationPropertyToHclTerraform(struct!.s3LoggingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LoggingConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupAclConfigurationPropertyToTerraform(struct?: CcWorkGroup.AclConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_acl_option: cdktn.stringToTerraform(struct!.s3AclOption),
    }
}


export function ccWorkGroupAclConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.AclConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_acl_option: {
            value: cdktn.stringToHclTerraform(struct!.s3AclOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupEncryptionConfigurationPropertyToTerraform(struct?: CcWorkGroup.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_option: cdktn.stringToTerraform(struct!.encryptionOption),
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccWorkGroupEncryptionConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_option: {
            value: cdktn.stringToHclTerraform(struct!.encryptionOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupResultConfigurationPropertyToTerraform(struct?: CcWorkGroup.ResultConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        acl_configuration: ccWorkGroupAclConfigurationPropertyToTerraform(struct!.aclConfiguration),
        encryption_configuration: ccWorkGroupEncryptionConfigurationPropertyToTerraform(struct!.encryptionConfiguration),
        expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
        output_location: cdktn.stringToTerraform(struct!.outputLocation),
    }
}


export function ccWorkGroupResultConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.ResultConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        acl_configuration: {
            value: ccWorkGroupAclConfigurationPropertyToHclTerraform(struct!.aclConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AclConfigurationProperty",
        },
        encryption_configuration: {
            value: ccWorkGroupEncryptionConfigurationPropertyToHclTerraform(struct!.encryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionConfigurationProperty",
        },
        expected_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_location: {
            value: cdktn.stringToHclTerraform(struct!.outputLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_configuration: cdktn.stringToTerraform(struct!.additionalConfiguration),
        bytes_scanned_cutoff_per_query: cdktn.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
        customer_content_encryption_configuration: ccWorkGroupCustomerContentEncryptionConfigurationPropertyToTerraform(struct!.customerContentEncryptionConfiguration),
        enforce_work_group_configuration: cdktn.booleanToTerraform(struct!.enforceWorkGroupConfiguration),
        engine_configuration: ccWorkGroupEngineConfigurationPropertyToTerraform(struct!.engineConfiguration),
        engine_version: ccWorkGroupEngineVersionPropertyToTerraform(struct!.engineVersion),
        execution_role: cdktn.stringToTerraform(struct!.executionRole),
        managed_query_results_configuration: ccWorkGroupManagedQueryResultsConfigurationPropertyToTerraform(struct!.managedQueryResultsConfiguration),
        monitoring_configuration: ccWorkGroupMonitoringConfigurationPropertyToTerraform(struct!.monitoringConfiguration),
        publish_cloudwatch_metrics_enabled: cdktn.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
        requester_pays_enabled: cdktn.booleanToTerraform(struct!.requesterPaysEnabled),
        result_configuration: ccWorkGroupResultConfigurationPropertyToTerraform(struct!.resultConfiguration),
    }
}


export function ccWorkGroupWorkGroupConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_configuration: {
            value: cdktn.stringToHclTerraform(struct!.additionalConfiguration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bytes_scanned_cutoff_per_query: {
            value: cdktn.numberToHclTerraform(struct!.bytesScannedCutoffPerQuery),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        customer_content_encryption_configuration: {
            value: ccWorkGroupCustomerContentEncryptionConfigurationPropertyToHclTerraform(struct!.customerContentEncryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomerContentEncryptionConfigurationProperty",
        },
        enforce_work_group_configuration: {
            value: cdktn.booleanToHclTerraform(struct!.enforceWorkGroupConfiguration),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        engine_configuration: {
            value: ccWorkGroupEngineConfigurationPropertyToHclTerraform(struct!.engineConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EngineConfigurationProperty",
        },
        engine_version: {
            value: ccWorkGroupEngineVersionPropertyToHclTerraform(struct!.engineVersion),
            isBlock: true,
            type: "struct",
            storageClassType: "EngineVersionProperty",
        },
        execution_role: {
            value: cdktn.stringToHclTerraform(struct!.executionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        managed_query_results_configuration: {
            value: ccWorkGroupManagedQueryResultsConfigurationPropertyToHclTerraform(struct!.managedQueryResultsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ManagedQueryResultsConfigurationProperty",
        },
        monitoring_configuration: {
            value: ccWorkGroupMonitoringConfigurationPropertyToHclTerraform(struct!.monitoringConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "MonitoringConfigurationProperty",
        },
        publish_cloudwatch_metrics_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.publishCloudwatchMetricsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        requester_pays_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.requesterPaysEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        result_configuration: {
            value: ccWorkGroupResultConfigurationPropertyToHclTerraform(struct!.resultConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ResultConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupClassificationsPropertyToTerraform(struct?: CcWorkGroup.ClassificationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
    }
}


export function ccWorkGroupClassificationsPropertyToHclTerraform(struct?: CcWorkGroup.ClassificationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesEngineConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_configs: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.additionalConfigs),
        classifications: cdktn.listMapper(ccWorkGroupClassificationsPropertyToTerraform, false)(struct!.classifications),
        coordinator_dpu_size: cdktn.numberToTerraform(struct!.coordinatorDpuSize),
        default_executor_dpu_size: cdktn.numberToTerraform(struct!.defaultExecutorDpuSize),
        max_concurrent_dpus: cdktn.numberToTerraform(struct!.maxConcurrentDpus),
        spark_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkProperties),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesEngineConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_configs: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.additionalConfigs),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        classifications: {
            value: cdktn.listMapperHcl(ccWorkGroupClassificationsPropertyToHclTerraform, false)(struct!.classifications),
            isBlock: true,
            type: "list",
            storageClassType: "ClassificationsPropertyList",
        },
        coordinator_dpu_size: {
            value: cdktn.numberToHclTerraform(struct!.coordinatorDpuSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        default_executor_dpu_size: {
            value: cdktn.numberToHclTerraform(struct!.defaultExecutorDpuSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_concurrent_dpus: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrentDpus),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        spark_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesEngineVersionPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesEngineVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        selected_engine_version: cdktn.stringToTerraform(struct!.selectedEngineVersion),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesEngineVersionPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesEngineVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        selected_engine_version: {
            value: cdktn.stringToHclTerraform(struct!.selectedEngineVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        encryption_configuration: ccWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationPropertyToTerraform(struct!.encryptionConfiguration),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        encryption_configuration: {
            value: ccWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationPropertyToHclTerraform(struct!.encryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_group: cdktn.stringToTerraform(struct!.logGroup),
        log_stream_name_prefix: cdktn.stringToTerraform(struct!.logStreamNamePrefix),
        log_types: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(struct!.logTypes),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        log_group: {
            value: cdktn.stringToHclTerraform(struct!.logGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_stream_name_prefix: {
            value: cdktn.stringToHclTerraform(struct!.logStreamNamePrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_types: {
            value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(struct!.logTypes),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
        log_location: cdktn.stringToTerraform(struct!.logLocation),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_location: {
            value: cdktn.stringToHclTerraform(struct!.logLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesMonitoringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logging_configuration: ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationPropertyToTerraform(struct!.cloudwatchLoggingConfiguration),
        managed_logging_configuration: ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationPropertyToTerraform(struct!.managedLoggingConfiguration),
        s3_logging_configuration: ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationPropertyToTerraform(struct!.s3LoggingConfiguration),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesMonitoringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logging_configuration: {
            value: ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationPropertyToHclTerraform(struct!.cloudwatchLoggingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationProperty",
        },
        managed_logging_configuration: {
            value: ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationPropertyToHclTerraform(struct!.managedLoggingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationProperty",
        },
        s3_logging_configuration: {
            value: ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationPropertyToHclTerraform(struct!.s3LoggingConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_acl_option: cdktn.stringToTerraform(struct!.s3AclOption),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_acl_option: {
            value: cdktn.stringToHclTerraform(struct!.s3AclOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_option: cdktn.stringToTerraform(struct!.encryptionOption),
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_option: {
            value: cdktn.stringToHclTerraform(struct!.encryptionOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupResultConfigurationUpdatesPropertyToTerraform(struct?: CcWorkGroup.ResultConfigurationUpdatesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        acl_configuration: ccWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationPropertyToTerraform(struct!.aclConfiguration),
        encryption_configuration: ccWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationPropertyToTerraform(struct!.encryptionConfiguration),
        expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
        output_location: cdktn.stringToTerraform(struct!.outputLocation),
        remove_acl_configuration: cdktn.booleanToTerraform(struct!.removeAclConfiguration),
        remove_encryption_configuration: cdktn.booleanToTerraform(struct!.removeEncryptionConfiguration),
        remove_expected_bucket_owner: cdktn.booleanToTerraform(struct!.removeExpectedBucketOwner),
        remove_output_location: cdktn.booleanToTerraform(struct!.removeOutputLocation),
    }
}


export function ccWorkGroupResultConfigurationUpdatesPropertyToHclTerraform(struct?: CcWorkGroup.ResultConfigurationUpdatesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        acl_configuration: {
            value: ccWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationPropertyToHclTerraform(struct!.aclConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationProperty",
        },
        encryption_configuration: {
            value: ccWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationPropertyToHclTerraform(struct!.encryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationProperty",
        },
        expected_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_location: {
            value: cdktn.stringToHclTerraform(struct!.outputLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        remove_acl_configuration: {
            value: cdktn.booleanToHclTerraform(struct!.removeAclConfiguration),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remove_encryption_configuration: {
            value: cdktn.booleanToHclTerraform(struct!.removeEncryptionConfiguration),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remove_expected_bucket_owner: {
            value: cdktn.booleanToHclTerraform(struct!.removeExpectedBucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remove_output_location: {
            value: cdktn.booleanToHclTerraform(struct!.removeOutputLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkGroupWorkGroupConfigurationUpdatesPropertyToTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_configuration: cdktn.stringToTerraform(struct!.additionalConfiguration),
        bytes_scanned_cutoff_per_query: cdktn.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
        customer_content_encryption_configuration: ccWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationPropertyToTerraform(struct!.customerContentEncryptionConfiguration),
        enforce_work_group_configuration: cdktn.booleanToTerraform(struct!.enforceWorkGroupConfiguration),
        engine_configuration: ccWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationPropertyToTerraform(struct!.engineConfiguration),
        engine_version: ccWorkGroupWorkGroupConfigurationUpdatesEngineVersionPropertyToTerraform(struct!.engineVersion),
        execution_role: cdktn.stringToTerraform(struct!.executionRole),
        managed_query_results_configuration: ccWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationPropertyToTerraform(struct!.managedQueryResultsConfiguration),
        monitoring_configuration: ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationPropertyToTerraform(struct!.monitoringConfiguration),
        publish_cloudwatch_metrics_enabled: cdktn.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
        remove_bytes_scanned_cutoff_per_query: cdktn.booleanToTerraform(struct!.removeBytesScannedCutoffPerQuery),
        remove_customer_content_encryption_configuration: cdktn.booleanToTerraform(struct!.removeCustomerContentEncryptionConfiguration),
        requester_pays_enabled: cdktn.booleanToTerraform(struct!.requesterPaysEnabled),
        result_configuration_updates: ccWorkGroupResultConfigurationUpdatesPropertyToTerraform(struct!.resultConfigurationUpdates),
    }
}


export function ccWorkGroupWorkGroupConfigurationUpdatesPropertyToHclTerraform(struct?: CcWorkGroup.WorkGroupConfigurationUpdatesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_configuration: {
            value: cdktn.stringToHclTerraform(struct!.additionalConfiguration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bytes_scanned_cutoff_per_query: {
            value: cdktn.numberToHclTerraform(struct!.bytesScannedCutoffPerQuery),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        customer_content_encryption_configuration: {
            value: ccWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationPropertyToHclTerraform(struct!.customerContentEncryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationProperty",
        },
        enforce_work_group_configuration: {
            value: cdktn.booleanToHclTerraform(struct!.enforceWorkGroupConfiguration),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        engine_configuration: {
            value: ccWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationPropertyToHclTerraform(struct!.engineConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkGroupConfigurationUpdatesEngineConfigurationProperty",
        },
        engine_version: {
            value: ccWorkGroupWorkGroupConfigurationUpdatesEngineVersionPropertyToHclTerraform(struct!.engineVersion),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkGroupConfigurationUpdatesEngineVersionProperty",
        },
        execution_role: {
            value: cdktn.stringToHclTerraform(struct!.executionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        managed_query_results_configuration: {
            value: ccWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationPropertyToHclTerraform(struct!.managedQueryResultsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationProperty",
        },
        monitoring_configuration: {
            value: ccWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationPropertyToHclTerraform(struct!.monitoringConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkGroupConfigurationUpdatesMonitoringConfigurationProperty",
        },
        publish_cloudwatch_metrics_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.publishCloudwatchMetricsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remove_bytes_scanned_cutoff_per_query: {
            value: cdktn.booleanToHclTerraform(struct!.removeBytesScannedCutoffPerQuery),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remove_customer_content_encryption_configuration: {
            value: cdktn.booleanToHclTerraform(struct!.removeCustomerContentEncryptionConfiguration),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        requester_pays_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.requesterPaysEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        result_configuration_updates: {
            value: ccWorkGroupResultConfigurationUpdatesPropertyToHclTerraform(struct!.resultConfigurationUpdates),
            isBlock: true,
            type: "struct",
            storageClassType: "ResultConfigurationUpdatesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcWorkGroup {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#key CcWorkGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#value CcWorkGroup#value}
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
export interface CustomerContentEncryptionConfigurationProperty {
    /**
    * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#kms_key CcWorkGroup#kms_key}
    */
    readonly kmsKey?: string;
}
export class CustomerContentEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomerContentEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomerContentEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKey = value.kmsKey;
        }
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface ClassificationProperty {
    /**
    * The name of the configuration classification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#name CcWorkGroup#name}
    */
    readonly name?: string;
    /**
    * A set of properties specified within a configuration classification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#properties CcWorkGroup#properties}
    */
    readonly properties?: { [key: string]: string };
}
export class ClassificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ClassificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._properties !== undefined) {
            hasAnyValues = true;
            internalValueResult.properties = this._properties;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClassificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._properties = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._properties = value.properties;
        }
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

    // properties - computed: true, optional: true, required: false
    private _properties?: { [key: string]: string }; 
    public get properties() {
        return this.getStringMapAttribute('properties');
    }
    public set properties(value: { [key: string]: string }) {
        this._properties = value;
    }
    public resetProperties() {
        this._properties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertiesInput() {
        return this._properties;
    }
}

export class ClassificationPropertyList extends cdktn.ComplexList {
    public internalValue? : ClassificationProperty[] | cdktn.IResolvable

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
    public get(index: number): ClassificationPropertyOutputReference {
        return new ClassificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EngineConfigurationProperty {
    /**
    * Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#additional_configs CcWorkGroup#additional_configs}
    */
    readonly additionalConfigs?: { [key: string]: string };
    /**
    * The configuration classifications that can be specified for the engine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#classifications CcWorkGroup#classifications}
    */
    readonly classifications?: ClassificationProperty[] | cdktn.IResolvable;
    /**
    * The number of DPUs to use for the coordinator. A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#coordinator_dpu_size CcWorkGroup#coordinator_dpu_size}
    */
    readonly coordinatorDpuSize?: number;
    /**
    * The default number of DPUs to use for executors. An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#default_executor_dpu_size CcWorkGroup#default_executor_dpu_size}
    */
    readonly defaultExecutorDpuSize?: number;
    /**
    * The maximum number of DPUs that can run concurrently.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#max_concurrent_dpus CcWorkGroup#max_concurrent_dpus}
    */
    readonly maxConcurrentDpus?: number;
    /**
    * Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#spark_properties CcWorkGroup#spark_properties}
    */
    readonly sparkProperties?: { [key: string]: string };
}
export class EngineConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EngineConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalConfigs !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalConfigs = this._additionalConfigs;
        }
        if (this._classifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.classifications = this._classifications?.internalValue;
        }
        if (this._coordinatorDpuSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.coordinatorDpuSize = this._coordinatorDpuSize;
        }
        if (this._defaultExecutorDpuSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultExecutorDpuSize = this._defaultExecutorDpuSize;
        }
        if (this._maxConcurrentDpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentDpus = this._maxConcurrentDpus;
        }
        if (this._sparkProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.sparkProperties = this._sparkProperties;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EngineConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalConfigs = undefined;
            this._classifications.internalValue = undefined;
            this._coordinatorDpuSize = undefined;
            this._defaultExecutorDpuSize = undefined;
            this._maxConcurrentDpus = undefined;
            this._sparkProperties = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalConfigs = value.additionalConfigs;
            this._classifications.internalValue = value.classifications;
            this._coordinatorDpuSize = value.coordinatorDpuSize;
            this._defaultExecutorDpuSize = value.defaultExecutorDpuSize;
            this._maxConcurrentDpus = value.maxConcurrentDpus;
            this._sparkProperties = value.sparkProperties;
        }
    }

    // additional_configs - computed: true, optional: true, required: false
    private _additionalConfigs?: { [key: string]: string }; 
    public get additionalConfigs() {
        return this.getStringMapAttribute('additional_configs');
    }
    public set additionalConfigs(value: { [key: string]: string }) {
        this._additionalConfigs = value;
    }
    public resetAdditionalConfigs() {
        this._additionalConfigs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalConfigsInput() {
        return this._additionalConfigs;
    }

    // classifications - computed: true, optional: true, required: false
    private _classifications = new ClassificationPropertyList(this, "classifications", false);
    public get classifications() {
        return this._classifications;
    }
    public putClassifications(value: ClassificationProperty[] | cdktn.IResolvable) {
        this._classifications.internalValue = value;
    }
    public resetClassifications() {
        this._classifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classificationsInput() {
        return this._classifications.internalValue;
    }

    // coordinator_dpu_size - computed: true, optional: true, required: false
    private _coordinatorDpuSize?: number; 
    public get coordinatorDpuSize() {
        return this.getNumberAttribute('coordinator_dpu_size');
    }
    public set coordinatorDpuSize(value: number) {
        this._coordinatorDpuSize = value;
    }
    public resetCoordinatorDpuSize() {
        this._coordinatorDpuSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coordinatorDpuSizeInput() {
        return this._coordinatorDpuSize;
    }

    // default_executor_dpu_size - computed: true, optional: true, required: false
    private _defaultExecutorDpuSize?: number; 
    public get defaultExecutorDpuSize() {
        return this.getNumberAttribute('default_executor_dpu_size');
    }
    public set defaultExecutorDpuSize(value: number) {
        this._defaultExecutorDpuSize = value;
    }
    public resetDefaultExecutorDpuSize() {
        this._defaultExecutorDpuSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultExecutorDpuSizeInput() {
        return this._defaultExecutorDpuSize;
    }

    // max_concurrent_dpus - computed: true, optional: true, required: false
    private _maxConcurrentDpus?: number; 
    public get maxConcurrentDpus() {
        return this.getNumberAttribute('max_concurrent_dpus');
    }
    public set maxConcurrentDpus(value: number) {
        this._maxConcurrentDpus = value;
    }
    public resetMaxConcurrentDpus() {
        this._maxConcurrentDpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentDpusInput() {
        return this._maxConcurrentDpus;
    }

    // spark_properties - computed: true, optional: true, required: false
    private _sparkProperties?: { [key: string]: string }; 
    public get sparkProperties() {
        return this.getStringMapAttribute('spark_properties');
    }
    public set sparkProperties(value: { [key: string]: string }) {
        this._sparkProperties = value;
    }
    public resetSparkProperties() {
        this._sparkProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sparkPropertiesInput() {
        return this._sparkProperties;
    }
}
export interface EngineVersionProperty {
    /**
    * The engine version requested by the user. Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#selected_engine_version CcWorkGroup#selected_engine_version}
    */
    readonly selectedEngineVersion?: string;
}
export class EngineVersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EngineVersionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._selectedEngineVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectedEngineVersion = this._selectedEngineVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EngineVersionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._selectedEngineVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._selectedEngineVersion = value.selectedEngineVersion;
        }
    }

    // effective_engine_version - computed: true, optional: false, required: false
    public get effectiveEngineVersion() {
        return this.getStringAttribute('effective_engine_version');
    }

    // selected_engine_version - computed: true, optional: true, required: false
    private _selectedEngineVersion?: string; 
    public get selectedEngineVersion() {
        return this.getStringAttribute('selected_engine_version');
    }
    public set selectedEngineVersion(value: string) {
        this._selectedEngineVersion = value;
    }
    public resetSelectedEngineVersion() {
        this._selectedEngineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectedEngineVersionInput() {
        return this._selectedEngineVersion;
    }
}
export interface ManagedStorageEncryptionConfigurationProperty {
    /**
    * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#kms_key CcWorkGroup#kms_key}
    */
    readonly kmsKey?: string;
}
export class ManagedStorageEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedStorageEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedStorageEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKey = value.kmsKey;
        }
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface ManagedQueryResultsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#enabled CcWorkGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Indicates the encryption configuration for Athena Managed Storage. If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#encryption_configuration CcWorkGroup#encryption_configuration}
    */
    readonly encryptionConfiguration?: ManagedStorageEncryptionConfigurationProperty;
}
export class ManagedQueryResultsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedQueryResultsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._encryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedQueryResultsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._encryptionConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new ManagedStorageEncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: ManagedStorageEncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }
}
export interface CloudWatchLoggingConfigurationProperty {
    /**
    * Enables CloudWatch logging.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#enabled CcWorkGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#log_group CcWorkGroup#log_group}
    */
    readonly logGroup?: string;
    /**
    * Prefix for the CloudWatch log stream name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#log_stream_name_prefix CcWorkGroup#log_stream_name_prefix}
    */
    readonly logStreamNamePrefix?: string;
    /**
    * The types of logs that you want to publish to CloudWatch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#log_types CcWorkGroup#log_types}
    */
    readonly logTypes?: { [key: string]: string[] } | cdktn.IResolvable;
}
export class CloudWatchLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroup = this._logGroup;
        }
        if (this._logStreamNamePrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.logStreamNamePrefix = this._logStreamNamePrefix;
        }
        if (this._logTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.logTypes = this._logTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchLoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._logGroup = undefined;
            this._logStreamNamePrefix = undefined;
            this._logTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._logGroup = value.logGroup;
            this._logStreamNamePrefix = value.logStreamNamePrefix;
            this._logTypes = value.logTypes;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // log_group - computed: true, optional: true, required: false
    private _logGroup?: string; 
    public get logGroup() {
        return this.getStringAttribute('log_group');
    }
    public set logGroup(value: string) {
        this._logGroup = value;
    }
    public resetLogGroup() {
        this._logGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupInput() {
        return this._logGroup;
    }

    // log_stream_name_prefix - computed: true, optional: true, required: false
    private _logStreamNamePrefix?: string; 
    public get logStreamNamePrefix() {
        return this.getStringAttribute('log_stream_name_prefix');
    }
    public set logStreamNamePrefix(value: string) {
        this._logStreamNamePrefix = value;
    }
    public resetLogStreamNamePrefix() {
        this._logStreamNamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNamePrefixInput() {
        return this._logStreamNamePrefix;
    }

    // log_types - computed: true, optional: true, required: false
    private _logTypes?: { [key: string]: string[] } | cdktn.IResolvable; 
    public get logTypes() {
        return this.interpolationForAttribute('log_types');
    }
    public set logTypes(value: { [key: string]: string[] } | cdktn.IResolvable) {
        this._logTypes = value;
    }
    public resetLogTypes() {
        this._logTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypesInput() {
        return this._logTypes;
    }
}
export interface ManagedLoggingConfigurationProperty {
    /**
    * Enables managed log persistence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#enabled CcWorkGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The KMS key ARN to encrypt the logs stored in managed log persistence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#kms_key CcWorkGroup#kms_key}
    */
    readonly kmsKey?: string;
}
export class ManagedLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedLoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedLoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._kmsKey = value.kmsKey;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface S3LoggingConfigurationProperty {
    /**
    * Enables S3 log delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#enabled CcWorkGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#kms_key CcWorkGroup#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * The Amazon S3 destination URI for log publishing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#log_location CcWorkGroup#log_location}
    */
    readonly logLocation?: string;
}
export class S3LoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        if (this._logLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLocation = this._logLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._kmsKey = undefined;
            this._logLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._kmsKey = value.kmsKey;
            this._logLocation = value.logLocation;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }

    // log_location - computed: true, optional: true, required: false
    private _logLocation?: string; 
    public get logLocation() {
        return this.getStringAttribute('log_location');
    }
    public set logLocation(value: string) {
        this._logLocation = value;
    }
    public resetLogLocation() {
        this._logLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLocationInput() {
        return this._logLocation;
    }
}
export interface MonitoringConfigurationProperty {
    /**
    * Configuration settings for delivering logs to Amazon CloudWatch log groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#cloudwatch_logging_configuration CcWorkGroup#cloudwatch_logging_configuration}
    */
    readonly cloudwatchLoggingConfiguration?: CloudWatchLoggingConfigurationProperty;
    /**
    * Configuration settings for managed log persistence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#managed_logging_configuration CcWorkGroup#managed_logging_configuration}
    */
    readonly managedLoggingConfiguration?: ManagedLoggingConfigurationProperty;
    /**
    * Configuration settings for delivering logs to Amazon S3 buckets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#s3_logging_configuration CcWorkGroup#s3_logging_configuration}
    */
    readonly s3LoggingConfiguration?: S3LoggingConfigurationProperty;
}
export class MonitoringConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLoggingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingConfiguration = this._cloudwatchLoggingConfiguration?.internalValue;
        }
        if (this._managedLoggingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedLoggingConfiguration = this._managedLoggingConfiguration?.internalValue;
        }
        if (this._s3LoggingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3LoggingConfiguration = this._s3LoggingConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLoggingConfiguration.internalValue = undefined;
            this._managedLoggingConfiguration.internalValue = undefined;
            this._s3LoggingConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLoggingConfiguration.internalValue = value.cloudwatchLoggingConfiguration;
            this._managedLoggingConfiguration.internalValue = value.managedLoggingConfiguration;
            this._s3LoggingConfiguration.internalValue = value.s3LoggingConfiguration;
        }
    }

    // cloudwatch_logging_configuration - computed: true, optional: true, required: false
    private _cloudwatchLoggingConfiguration = new CloudWatchLoggingConfigurationPropertyOutputReference(this, "cloudwatch_logging_configuration");
    public get cloudwatchLoggingConfiguration() {
        return this._cloudwatchLoggingConfiguration;
    }
    public putCloudwatchLoggingConfiguration(value: CloudWatchLoggingConfigurationProperty) {
        this._cloudwatchLoggingConfiguration.internalValue = value;
    }
    public resetCloudwatchLoggingConfiguration() {
        this._cloudwatchLoggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLoggingConfigurationInput() {
        return this._cloudwatchLoggingConfiguration.internalValue;
    }

    // managed_logging_configuration - computed: true, optional: true, required: false
    private _managedLoggingConfiguration = new ManagedLoggingConfigurationPropertyOutputReference(this, "managed_logging_configuration");
    public get managedLoggingConfiguration() {
        return this._managedLoggingConfiguration;
    }
    public putManagedLoggingConfiguration(value: ManagedLoggingConfigurationProperty) {
        this._managedLoggingConfiguration.internalValue = value;
    }
    public resetManagedLoggingConfiguration() {
        this._managedLoggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedLoggingConfigurationInput() {
        return this._managedLoggingConfiguration.internalValue;
    }

    // s3_logging_configuration - computed: true, optional: true, required: false
    private _s3LoggingConfiguration = new S3LoggingConfigurationPropertyOutputReference(this, "s3_logging_configuration");
    public get s3LoggingConfiguration() {
        return this._s3LoggingConfiguration;
    }
    public putS3LoggingConfiguration(value: S3LoggingConfigurationProperty) {
        this._s3LoggingConfiguration.internalValue = value;
    }
    public resetS3LoggingConfiguration() {
        this._s3LoggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LoggingConfigurationInput() {
        return this._s3LoggingConfiguration.internalValue;
    }
}
export interface AclConfigurationProperty {
    /**
    * The Amazon S3 canned ACL that Athena should specify when storing query results. Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#s3_acl_option CcWorkGroup#s3_acl_option}
    */
    readonly s3AclOption?: string;
}
export class AclConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AclConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3AclOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3AclOption = this._s3AclOption;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AclConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3AclOption = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3AclOption = value.s3AclOption;
        }
    }

    // s3_acl_option - computed: true, optional: true, required: false
    private _s3AclOption?: string; 
    public get s3AclOption() {
        return this.getStringAttribute('s3_acl_option');
    }
    public set s3AclOption(value: string) {
        this._s3AclOption = value;
    }
    public resetS3AclOption() {
        this._s3AclOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3AclOptionInput() {
        return this._s3AclOption;
    }
}
export interface EncryptionConfigurationProperty {
    /**
    * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#encryption_option CcWorkGroup#encryption_option}
    */
    readonly encryptionOption?: string;
    /**
    * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#kms_key CcWorkGroup#kms_key}
    */
    readonly kmsKey?: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionOption = this._encryptionOption;
        }
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionOption = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionOption = value.encryptionOption;
            this._kmsKey = value.kmsKey;
        }
    }

    // encryption_option - computed: true, optional: true, required: false
    private _encryptionOption?: string; 
    public get encryptionOption() {
        return this.getStringAttribute('encryption_option');
    }
    public set encryptionOption(value: string) {
        this._encryptionOption = value;
    }
    public resetEncryptionOption() {
        this._encryptionOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionOptionInput() {
        return this._encryptionOption;
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface ResultConfigurationProperty {
    /**
    * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#acl_configuration CcWorkGroup#acl_configuration}
    */
    readonly aclConfiguration?: AclConfigurationProperty;
    /**
    * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#encryption_configuration CcWorkGroup#encryption_configuration}
    */
    readonly encryptionConfiguration?: EncryptionConfigurationProperty;
    /**
    * The AWS account ID of the owner of S3 bucket where query results are stored
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#expected_bucket_owner CcWorkGroup#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#output_location CcWorkGroup#output_location}
    */
    readonly outputLocation?: string;
}
export class ResultConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResultConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aclConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aclConfiguration = this._aclConfiguration?.internalValue;
        }
        if (this._encryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
        }
        if (this._expectedBucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
        }
        if (this._outputLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputLocation = this._outputLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResultConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aclConfiguration.internalValue = undefined;
            this._encryptionConfiguration.internalValue = undefined;
            this._expectedBucketOwner = undefined;
            this._outputLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aclConfiguration.internalValue = value.aclConfiguration;
            this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
            this._expectedBucketOwner = value.expectedBucketOwner;
            this._outputLocation = value.outputLocation;
        }
    }

    // acl_configuration - computed: true, optional: true, required: false
    private _aclConfiguration = new AclConfigurationPropertyOutputReference(this, "acl_configuration");
    public get aclConfiguration() {
        return this._aclConfiguration;
    }
    public putAclConfiguration(value: AclConfigurationProperty) {
        this._aclConfiguration.internalValue = value;
    }
    public resetAclConfiguration() {
        this._aclConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aclConfigurationInput() {
        return this._aclConfiguration.internalValue;
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // expected_bucket_owner - computed: true, optional: true, required: false
    private _expectedBucketOwner?: string; 
    public get expectedBucketOwner() {
        return this.getStringAttribute('expected_bucket_owner');
    }
    public set expectedBucketOwner(value: string) {
        this._expectedBucketOwner = value;
    }
    public resetExpectedBucketOwner() {
        this._expectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expectedBucketOwnerInput() {
        return this._expectedBucketOwner;
    }

    // output_location - computed: true, optional: true, required: false
    private _outputLocation?: string; 
    public get outputLocation() {
        return this.getStringAttribute('output_location');
    }
    public set outputLocation(value: string) {
        this._outputLocation = value;
    }
    public resetOutputLocation() {
        this._outputLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputLocationInput() {
        return this._outputLocation;
    }
}
export interface WorkGroupConfigurationProperty {
    /**
    * Additional Configuration that are passed to Athena Spark Calculations running in this workgroup
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#additional_configuration CcWorkGroup#additional_configuration}
    */
    readonly additionalConfiguration?: string;
    /**
    * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query CcWorkGroup#bytes_scanned_cutoff_per_query}
    */
    readonly bytesScannedCutoffPerQuery?: number;
    /**
    * Indicates the KMS key for encrypting notebook content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#customer_content_encryption_configuration CcWorkGroup#customer_content_encryption_configuration}
    */
    readonly customerContentEncryptionConfiguration?: CustomerContentEncryptionConfigurationProperty;
    /**
    * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#enforce_work_group_configuration CcWorkGroup#enforce_work_group_configuration}
    */
    readonly enforceWorkGroupConfiguration?: boolean | cdktn.IResolvable;
    /**
    * The engine configuration for running queries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#engine_configuration CcWorkGroup#engine_configuration}
    */
    readonly engineConfiguration?: EngineConfigurationProperty;
    /**
    * The Athena engine version for running queries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#engine_version CcWorkGroup#engine_version}
    */
    readonly engineVersion?: EngineVersionProperty;
    /**
    * The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#execution_role CcWorkGroup#execution_role}
    */
    readonly executionRole?: string;
    /**
    * The configuration for the managed query results and encryption option. ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#managed_query_results_configuration CcWorkGroup#managed_query_results_configuration}
    */
    readonly managedQueryResultsConfiguration?: ManagedQueryResultsConfigurationProperty;
    /**
    * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#monitoring_configuration CcWorkGroup#monitoring_configuration}
    */
    readonly monitoringConfiguration?: MonitoringConfigurationProperty;
    /**
    * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled CcWorkGroup#publish_cloudwatch_metrics_enabled}
    */
    readonly publishCloudwatchMetricsEnabled?: boolean | cdktn.IResolvable;
    /**
    * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#requester_pays_enabled CcWorkGroup#requester_pays_enabled}
    */
    readonly requesterPaysEnabled?: boolean | cdktn.IResolvable;
    /**
    * The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#result_configuration CcWorkGroup#result_configuration}
    */
    readonly resultConfiguration?: ResultConfigurationProperty;
}
export class WorkGroupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalConfiguration !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalConfiguration = this._additionalConfiguration;
        }
        if (this._bytesScannedCutoffPerQuery !== undefined) {
            hasAnyValues = true;
            internalValueResult.bytesScannedCutoffPerQuery = this._bytesScannedCutoffPerQuery;
        }
        if (this._customerContentEncryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerContentEncryptionConfiguration = this._customerContentEncryptionConfiguration?.internalValue;
        }
        if (this._enforceWorkGroupConfiguration !== undefined) {
            hasAnyValues = true;
            internalValueResult.enforceWorkGroupConfiguration = this._enforceWorkGroupConfiguration;
        }
        if (this._engineConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.engineConfiguration = this._engineConfiguration?.internalValue;
        }
        if (this._engineVersion?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.engineVersion = this._engineVersion?.internalValue;
        }
        if (this._executionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        if (this._managedQueryResultsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedQueryResultsConfiguration = this._managedQueryResultsConfiguration?.internalValue;
        }
        if (this._monitoringConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringConfiguration = this._monitoringConfiguration?.internalValue;
        }
        if (this._publishCloudwatchMetricsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.publishCloudwatchMetricsEnabled = this._publishCloudwatchMetricsEnabled;
        }
        if (this._requesterPaysEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.requesterPaysEnabled = this._requesterPaysEnabled;
        }
        if (this._resultConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resultConfiguration = this._resultConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalConfiguration = undefined;
            this._bytesScannedCutoffPerQuery = undefined;
            this._customerContentEncryptionConfiguration.internalValue = undefined;
            this._enforceWorkGroupConfiguration = undefined;
            this._engineConfiguration.internalValue = undefined;
            this._engineVersion.internalValue = undefined;
            this._executionRole = undefined;
            this._managedQueryResultsConfiguration.internalValue = undefined;
            this._monitoringConfiguration.internalValue = undefined;
            this._publishCloudwatchMetricsEnabled = undefined;
            this._requesterPaysEnabled = undefined;
            this._resultConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalConfiguration = value.additionalConfiguration;
            this._bytesScannedCutoffPerQuery = value.bytesScannedCutoffPerQuery;
            this._customerContentEncryptionConfiguration.internalValue = value.customerContentEncryptionConfiguration;
            this._enforceWorkGroupConfiguration = value.enforceWorkGroupConfiguration;
            this._engineConfiguration.internalValue = value.engineConfiguration;
            this._engineVersion.internalValue = value.engineVersion;
            this._executionRole = value.executionRole;
            this._managedQueryResultsConfiguration.internalValue = value.managedQueryResultsConfiguration;
            this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
            this._publishCloudwatchMetricsEnabled = value.publishCloudwatchMetricsEnabled;
            this._requesterPaysEnabled = value.requesterPaysEnabled;
            this._resultConfiguration.internalValue = value.resultConfiguration;
        }
    }

    // additional_configuration - computed: true, optional: true, required: false
    private _additionalConfiguration?: string; 
    public get additionalConfiguration() {
        return this.getStringAttribute('additional_configuration');
    }
    public set additionalConfiguration(value: string) {
        this._additionalConfiguration = value;
    }
    public resetAdditionalConfiguration() {
        this._additionalConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalConfigurationInput() {
        return this._additionalConfiguration;
    }

    // bytes_scanned_cutoff_per_query - computed: true, optional: true, required: false
    private _bytesScannedCutoffPerQuery?: number; 
    public get bytesScannedCutoffPerQuery() {
        return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
    }
    public set bytesScannedCutoffPerQuery(value: number) {
        this._bytesScannedCutoffPerQuery = value;
    }
    public resetBytesScannedCutoffPerQuery() {
        this._bytesScannedCutoffPerQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bytesScannedCutoffPerQueryInput() {
        return this._bytesScannedCutoffPerQuery;
    }

    // customer_content_encryption_configuration - computed: true, optional: true, required: false
    private _customerContentEncryptionConfiguration = new CustomerContentEncryptionConfigurationPropertyOutputReference(this, "customer_content_encryption_configuration");
    public get customerContentEncryptionConfiguration() {
        return this._customerContentEncryptionConfiguration;
    }
    public putCustomerContentEncryptionConfiguration(value: CustomerContentEncryptionConfigurationProperty) {
        this._customerContentEncryptionConfiguration.internalValue = value;
    }
    public resetCustomerContentEncryptionConfiguration() {
        this._customerContentEncryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerContentEncryptionConfigurationInput() {
        return this._customerContentEncryptionConfiguration.internalValue;
    }

    // enforce_work_group_configuration - computed: true, optional: true, required: false
    private _enforceWorkGroupConfiguration?: boolean | cdktn.IResolvable; 
    public get enforceWorkGroupConfiguration() {
        return this.getBooleanAttribute('enforce_work_group_configuration');
    }
    public set enforceWorkGroupConfiguration(value: boolean | cdktn.IResolvable) {
        this._enforceWorkGroupConfiguration = value;
    }
    public resetEnforceWorkGroupConfiguration() {
        this._enforceWorkGroupConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceWorkGroupConfigurationInput() {
        return this._enforceWorkGroupConfiguration;
    }

    // engine_configuration - computed: true, optional: true, required: false
    private _engineConfiguration = new EngineConfigurationPropertyOutputReference(this, "engine_configuration");
    public get engineConfiguration() {
        return this._engineConfiguration;
    }
    public putEngineConfiguration(value: EngineConfigurationProperty) {
        this._engineConfiguration.internalValue = value;
    }
    public resetEngineConfiguration() {
        this._engineConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineConfigurationInput() {
        return this._engineConfiguration.internalValue;
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion = new EngineVersionPropertyOutputReference(this, "engine_version");
    public get engineVersion() {
        return this._engineVersion;
    }
    public putEngineVersion(value: EngineVersionProperty) {
        this._engineVersion.internalValue = value;
    }
    public resetEngineVersion() {
        this._engineVersion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
        return this._engineVersion.internalValue;
    }

    // execution_role - computed: true, optional: true, required: false
    private _executionRole?: string; 
    public get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
        this._executionRole = value;
    }
    public resetExecutionRole() {
        this._executionRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
        return this._executionRole;
    }

    // managed_query_results_configuration - computed: true, optional: true, required: false
    private _managedQueryResultsConfiguration = new ManagedQueryResultsConfigurationPropertyOutputReference(this, "managed_query_results_configuration");
    public get managedQueryResultsConfiguration() {
        return this._managedQueryResultsConfiguration;
    }
    public putManagedQueryResultsConfiguration(value: ManagedQueryResultsConfigurationProperty) {
        this._managedQueryResultsConfiguration.internalValue = value;
    }
    public resetManagedQueryResultsConfiguration() {
        this._managedQueryResultsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedQueryResultsConfigurationInput() {
        return this._managedQueryResultsConfiguration.internalValue;
    }

    // monitoring_configuration - computed: true, optional: true, required: false
    private _monitoringConfiguration = new MonitoringConfigurationPropertyOutputReference(this, "monitoring_configuration");
    public get monitoringConfiguration() {
        return this._monitoringConfiguration;
    }
    public putMonitoringConfiguration(value: MonitoringConfigurationProperty) {
        this._monitoringConfiguration.internalValue = value;
    }
    public resetMonitoringConfiguration() {
        this._monitoringConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringConfigurationInput() {
        return this._monitoringConfiguration.internalValue;
    }

    // publish_cloudwatch_metrics_enabled - computed: true, optional: true, required: false
    private _publishCloudwatchMetricsEnabled?: boolean | cdktn.IResolvable; 
    public get publishCloudwatchMetricsEnabled() {
        return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled');
    }
    public set publishCloudwatchMetricsEnabled(value: boolean | cdktn.IResolvable) {
        this._publishCloudwatchMetricsEnabled = value;
    }
    public resetPublishCloudwatchMetricsEnabled() {
        this._publishCloudwatchMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishCloudwatchMetricsEnabledInput() {
        return this._publishCloudwatchMetricsEnabled;
    }

    // requester_pays_enabled - computed: true, optional: true, required: false
    private _requesterPaysEnabled?: boolean | cdktn.IResolvable; 
    public get requesterPaysEnabled() {
        return this.getBooleanAttribute('requester_pays_enabled');
    }
    public set requesterPaysEnabled(value: boolean | cdktn.IResolvable) {
        this._requesterPaysEnabled = value;
    }
    public resetRequesterPaysEnabled() {
        this._requesterPaysEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requesterPaysEnabledInput() {
        return this._requesterPaysEnabled;
    }

    // result_configuration - computed: true, optional: true, required: false
    private _resultConfiguration = new ResultConfigurationPropertyOutputReference(this, "result_configuration");
    public get resultConfiguration() {
        return this._resultConfiguration;
    }
    public putResultConfiguration(value: ResultConfigurationProperty) {
        this._resultConfiguration.internalValue = value;
    }
    public resetResultConfiguration() {
        this._resultConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultConfigurationInput() {
        return this._resultConfiguration.internalValue;
    }
}
export interface WorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationProperty {
    /**
    * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#kms_key CcWorkGroup#kms_key}
    */
    readonly kmsKey?: string;
}
export class WorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKey = value.kmsKey;
        }
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface ClassificationsProperty {
    /**
    * The name of the configuration classification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#name CcWorkGroup#name}
    */
    readonly name?: string;
    /**
    * A set of properties specified within a configuration classification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#properties CcWorkGroup#properties}
    */
    readonly properties?: { [key: string]: string };
}
export class ClassificationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ClassificationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._properties !== undefined) {
            hasAnyValues = true;
            internalValueResult.properties = this._properties;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClassificationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._properties = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._properties = value.properties;
        }
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

    // properties - computed: true, optional: true, required: false
    private _properties?: { [key: string]: string }; 
    public get properties() {
        return this.getStringMapAttribute('properties');
    }
    public set properties(value: { [key: string]: string }) {
        this._properties = value;
    }
    public resetProperties() {
        this._properties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertiesInput() {
        return this._properties;
    }
}

export class ClassificationsPropertyList extends cdktn.ComplexList {
    public internalValue? : ClassificationsProperty[] | cdktn.IResolvable

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
    public get(index: number): ClassificationsPropertyOutputReference {
        return new ClassificationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WorkGroupConfigurationUpdatesEngineConfigurationProperty {
    /**
    * Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#additional_configs CcWorkGroup#additional_configs}
    */
    readonly additionalConfigs?: { [key: string]: string };
    /**
    * The configuration classifications that can be specified for the engine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#classifications CcWorkGroup#classifications}
    */
    readonly classifications?: ClassificationsProperty[] | cdktn.IResolvable;
    /**
    * The number of DPUs to use for the coordinator. A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#coordinator_dpu_size CcWorkGroup#coordinator_dpu_size}
    */
    readonly coordinatorDpuSize?: number;
    /**
    * The default number of DPUs to use for executors. An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#default_executor_dpu_size CcWorkGroup#default_executor_dpu_size}
    */
    readonly defaultExecutorDpuSize?: number;
    /**
    * The maximum number of DPUs that can run concurrently.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#max_concurrent_dpus CcWorkGroup#max_concurrent_dpus}
    */
    readonly maxConcurrentDpus?: number;
    /**
    * Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#spark_properties CcWorkGroup#spark_properties}
    */
    readonly sparkProperties?: { [key: string]: string };
}
export class WorkGroupConfigurationUpdatesEngineConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesEngineConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalConfigs !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalConfigs = this._additionalConfigs;
        }
        if (this._classifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.classifications = this._classifications?.internalValue;
        }
        if (this._coordinatorDpuSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.coordinatorDpuSize = this._coordinatorDpuSize;
        }
        if (this._defaultExecutorDpuSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultExecutorDpuSize = this._defaultExecutorDpuSize;
        }
        if (this._maxConcurrentDpus !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentDpus = this._maxConcurrentDpus;
        }
        if (this._sparkProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.sparkProperties = this._sparkProperties;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesEngineConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalConfigs = undefined;
            this._classifications.internalValue = undefined;
            this._coordinatorDpuSize = undefined;
            this._defaultExecutorDpuSize = undefined;
            this._maxConcurrentDpus = undefined;
            this._sparkProperties = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalConfigs = value.additionalConfigs;
            this._classifications.internalValue = value.classifications;
            this._coordinatorDpuSize = value.coordinatorDpuSize;
            this._defaultExecutorDpuSize = value.defaultExecutorDpuSize;
            this._maxConcurrentDpus = value.maxConcurrentDpus;
            this._sparkProperties = value.sparkProperties;
        }
    }

    // additional_configs - computed: true, optional: true, required: false
    private _additionalConfigs?: { [key: string]: string }; 
    public get additionalConfigs() {
        return this.getStringMapAttribute('additional_configs');
    }
    public set additionalConfigs(value: { [key: string]: string }) {
        this._additionalConfigs = value;
    }
    public resetAdditionalConfigs() {
        this._additionalConfigs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalConfigsInput() {
        return this._additionalConfigs;
    }

    // classifications - computed: true, optional: true, required: false
    private _classifications = new ClassificationsPropertyList(this, "classifications", false);
    public get classifications() {
        return this._classifications;
    }
    public putClassifications(value: ClassificationsProperty[] | cdktn.IResolvable) {
        this._classifications.internalValue = value;
    }
    public resetClassifications() {
        this._classifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classificationsInput() {
        return this._classifications.internalValue;
    }

    // coordinator_dpu_size - computed: true, optional: true, required: false
    private _coordinatorDpuSize?: number; 
    public get coordinatorDpuSize() {
        return this.getNumberAttribute('coordinator_dpu_size');
    }
    public set coordinatorDpuSize(value: number) {
        this._coordinatorDpuSize = value;
    }
    public resetCoordinatorDpuSize() {
        this._coordinatorDpuSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get coordinatorDpuSizeInput() {
        return this._coordinatorDpuSize;
    }

    // default_executor_dpu_size - computed: true, optional: true, required: false
    private _defaultExecutorDpuSize?: number; 
    public get defaultExecutorDpuSize() {
        return this.getNumberAttribute('default_executor_dpu_size');
    }
    public set defaultExecutorDpuSize(value: number) {
        this._defaultExecutorDpuSize = value;
    }
    public resetDefaultExecutorDpuSize() {
        this._defaultExecutorDpuSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultExecutorDpuSizeInput() {
        return this._defaultExecutorDpuSize;
    }

    // max_concurrent_dpus - computed: true, optional: true, required: false
    private _maxConcurrentDpus?: number; 
    public get maxConcurrentDpus() {
        return this.getNumberAttribute('max_concurrent_dpus');
    }
    public set maxConcurrentDpus(value: number) {
        this._maxConcurrentDpus = value;
    }
    public resetMaxConcurrentDpus() {
        this._maxConcurrentDpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentDpusInput() {
        return this._maxConcurrentDpus;
    }

    // spark_properties - computed: true, optional: true, required: false
    private _sparkProperties?: { [key: string]: string }; 
    public get sparkProperties() {
        return this.getStringMapAttribute('spark_properties');
    }
    public set sparkProperties(value: { [key: string]: string }) {
        this._sparkProperties = value;
    }
    public resetSparkProperties() {
        this._sparkProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sparkPropertiesInput() {
        return this._sparkProperties;
    }
}
export interface WorkGroupConfigurationUpdatesEngineVersionProperty {
    /**
    * The engine version requested by the user. Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#selected_engine_version CcWorkGroup#selected_engine_version}
    */
    readonly selectedEngineVersion?: string;
}
export class WorkGroupConfigurationUpdatesEngineVersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesEngineVersionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._selectedEngineVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectedEngineVersion = this._selectedEngineVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesEngineVersionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._selectedEngineVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._selectedEngineVersion = value.selectedEngineVersion;
        }
    }

    // effective_engine_version - computed: true, optional: false, required: false
    public get effectiveEngineVersion() {
        return this.getStringAttribute('effective_engine_version');
    }

    // selected_engine_version - computed: true, optional: true, required: false
    private _selectedEngineVersion?: string; 
    public get selectedEngineVersion() {
        return this.getStringAttribute('selected_engine_version');
    }
    public set selectedEngineVersion(value: string) {
        this._selectedEngineVersion = value;
    }
    public resetSelectedEngineVersion() {
        this._selectedEngineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectedEngineVersionInput() {
        return this._selectedEngineVersion;
    }
}
export interface WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationProperty {
    /**
    * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#kms_key CcWorkGroup#kms_key}
    */
    readonly kmsKey?: string;
}
export class WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKey = value.kmsKey;
        }
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#enabled CcWorkGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Indicates the encryption configuration for Athena Managed Storage. If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#encryption_configuration CcWorkGroup#encryption_configuration}
    */
    readonly encryptionConfiguration?: WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationProperty;
}
export class WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._encryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._encryptionConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }
}
export interface WorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationProperty {
    /**
    * Enables CloudWatch logging.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#enabled CcWorkGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#log_group CcWorkGroup#log_group}
    */
    readonly logGroup?: string;
    /**
    * Prefix for the CloudWatch log stream name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#log_stream_name_prefix CcWorkGroup#log_stream_name_prefix}
    */
    readonly logStreamNamePrefix?: string;
    /**
    * The types of logs that you want to publish to CloudWatch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#log_types CcWorkGroup#log_types}
    */
    readonly logTypes?: { [key: string]: string[] } | cdktn.IResolvable;
}
export class WorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroup = this._logGroup;
        }
        if (this._logStreamNamePrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.logStreamNamePrefix = this._logStreamNamePrefix;
        }
        if (this._logTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.logTypes = this._logTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._logGroup = undefined;
            this._logStreamNamePrefix = undefined;
            this._logTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._logGroup = value.logGroup;
            this._logStreamNamePrefix = value.logStreamNamePrefix;
            this._logTypes = value.logTypes;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // log_group - computed: true, optional: true, required: false
    private _logGroup?: string; 
    public get logGroup() {
        return this.getStringAttribute('log_group');
    }
    public set logGroup(value: string) {
        this._logGroup = value;
    }
    public resetLogGroup() {
        this._logGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupInput() {
        return this._logGroup;
    }

    // log_stream_name_prefix - computed: true, optional: true, required: false
    private _logStreamNamePrefix?: string; 
    public get logStreamNamePrefix() {
        return this.getStringAttribute('log_stream_name_prefix');
    }
    public set logStreamNamePrefix(value: string) {
        this._logStreamNamePrefix = value;
    }
    public resetLogStreamNamePrefix() {
        this._logStreamNamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNamePrefixInput() {
        return this._logStreamNamePrefix;
    }

    // log_types - computed: true, optional: true, required: false
    private _logTypes?: { [key: string]: string[] } | cdktn.IResolvable; 
    public get logTypes() {
        return this.interpolationForAttribute('log_types');
    }
    public set logTypes(value: { [key: string]: string[] } | cdktn.IResolvable) {
        this._logTypes = value;
    }
    public resetLogTypes() {
        this._logTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypesInput() {
        return this._logTypes;
    }
}
export interface WorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationProperty {
    /**
    * Enables managed log persistence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#enabled CcWorkGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The KMS key ARN to encrypt the logs stored in managed log persistence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#kms_key CcWorkGroup#kms_key}
    */
    readonly kmsKey?: string;
}
export class WorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._kmsKey = value.kmsKey;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface WorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationProperty {
    /**
    * Enables S3 log delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#enabled CcWorkGroup#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#kms_key CcWorkGroup#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * The Amazon S3 destination URI for log publishing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#log_location CcWorkGroup#log_location}
    */
    readonly logLocation?: string;
}
export class WorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        if (this._logLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLocation = this._logLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._kmsKey = undefined;
            this._logLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._kmsKey = value.kmsKey;
            this._logLocation = value.logLocation;
        }
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }

    // log_location - computed: true, optional: true, required: false
    private _logLocation?: string; 
    public get logLocation() {
        return this.getStringAttribute('log_location');
    }
    public set logLocation(value: string) {
        this._logLocation = value;
    }
    public resetLogLocation() {
        this._logLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLocationInput() {
        return this._logLocation;
    }
}
export interface WorkGroupConfigurationUpdatesMonitoringConfigurationProperty {
    /**
    * Configuration settings for delivering logs to Amazon CloudWatch log groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#cloudwatch_logging_configuration CcWorkGroup#cloudwatch_logging_configuration}
    */
    readonly cloudwatchLoggingConfiguration?: WorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationProperty;
    /**
    * Configuration settings for managed log persistence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#managed_logging_configuration CcWorkGroup#managed_logging_configuration}
    */
    readonly managedLoggingConfiguration?: WorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationProperty;
    /**
    * Configuration settings for delivering logs to Amazon S3 buckets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#s3_logging_configuration CcWorkGroup#s3_logging_configuration}
    */
    readonly s3LoggingConfiguration?: WorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationProperty;
}
export class WorkGroupConfigurationUpdatesMonitoringConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesMonitoringConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLoggingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingConfiguration = this._cloudwatchLoggingConfiguration?.internalValue;
        }
        if (this._managedLoggingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedLoggingConfiguration = this._managedLoggingConfiguration?.internalValue;
        }
        if (this._s3LoggingConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3LoggingConfiguration = this._s3LoggingConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesMonitoringConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLoggingConfiguration.internalValue = undefined;
            this._managedLoggingConfiguration.internalValue = undefined;
            this._s3LoggingConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLoggingConfiguration.internalValue = value.cloudwatchLoggingConfiguration;
            this._managedLoggingConfiguration.internalValue = value.managedLoggingConfiguration;
            this._s3LoggingConfiguration.internalValue = value.s3LoggingConfiguration;
        }
    }

    // cloudwatch_logging_configuration - computed: true, optional: true, required: false
    private _cloudwatchLoggingConfiguration = new WorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationPropertyOutputReference(this, "cloudwatch_logging_configuration");
    public get cloudwatchLoggingConfiguration() {
        return this._cloudwatchLoggingConfiguration;
    }
    public putCloudwatchLoggingConfiguration(value: WorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationProperty) {
        this._cloudwatchLoggingConfiguration.internalValue = value;
    }
    public resetCloudwatchLoggingConfiguration() {
        this._cloudwatchLoggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLoggingConfigurationInput() {
        return this._cloudwatchLoggingConfiguration.internalValue;
    }

    // managed_logging_configuration - computed: true, optional: true, required: false
    private _managedLoggingConfiguration = new WorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationPropertyOutputReference(this, "managed_logging_configuration");
    public get managedLoggingConfiguration() {
        return this._managedLoggingConfiguration;
    }
    public putManagedLoggingConfiguration(value: WorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationProperty) {
        this._managedLoggingConfiguration.internalValue = value;
    }
    public resetManagedLoggingConfiguration() {
        this._managedLoggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedLoggingConfigurationInput() {
        return this._managedLoggingConfiguration.internalValue;
    }

    // s3_logging_configuration - computed: true, optional: true, required: false
    private _s3LoggingConfiguration = new WorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationPropertyOutputReference(this, "s3_logging_configuration");
    public get s3LoggingConfiguration() {
        return this._s3LoggingConfiguration;
    }
    public putS3LoggingConfiguration(value: WorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationProperty) {
        this._s3LoggingConfiguration.internalValue = value;
    }
    public resetS3LoggingConfiguration() {
        this._s3LoggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LoggingConfigurationInput() {
        return this._s3LoggingConfiguration.internalValue;
    }
}
export interface WorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationProperty {
    /**
    * The Amazon S3 canned ACL that Athena should specify when storing query results. Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#s3_acl_option CcWorkGroup#s3_acl_option}
    */
    readonly s3AclOption?: string;
}
export class WorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3AclOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3AclOption = this._s3AclOption;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3AclOption = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3AclOption = value.s3AclOption;
        }
    }

    // s3_acl_option - computed: true, optional: true, required: false
    private _s3AclOption?: string; 
    public get s3AclOption() {
        return this.getStringAttribute('s3_acl_option');
    }
    public set s3AclOption(value: string) {
        this._s3AclOption = value;
    }
    public resetS3AclOption() {
        this._s3AclOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3AclOptionInput() {
        return this._s3AclOption;
    }
}
export interface WorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationProperty {
    /**
    * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#encryption_option CcWorkGroup#encryption_option}
    */
    readonly encryptionOption?: string;
    /**
    * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#kms_key CcWorkGroup#kms_key}
    */
    readonly kmsKey?: string;
}
export class WorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionOption = this._encryptionOption;
        }
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionOption = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionOption = value.encryptionOption;
            this._kmsKey = value.kmsKey;
        }
    }

    // encryption_option - computed: true, optional: true, required: false
    private _encryptionOption?: string; 
    public get encryptionOption() {
        return this.getStringAttribute('encryption_option');
    }
    public set encryptionOption(value: string) {
        this._encryptionOption = value;
    }
    public resetEncryptionOption() {
        this._encryptionOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionOptionInput() {
        return this._encryptionOption;
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface ResultConfigurationUpdatesProperty {
    /**
    * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#acl_configuration CcWorkGroup#acl_configuration}
    */
    readonly aclConfiguration?: WorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationProperty;
    /**
    * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#encryption_configuration CcWorkGroup#encryption_configuration}
    */
    readonly encryptionConfiguration?: WorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationProperty;
    /**
    * The AWS account ID of the owner of S3 bucket where query results are stored
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#expected_bucket_owner CcWorkGroup#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#output_location CcWorkGroup#output_location}
    */
    readonly outputLocation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#remove_acl_configuration CcWorkGroup#remove_acl_configuration}
    */
    readonly removeAclConfiguration?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#remove_encryption_configuration CcWorkGroup#remove_encryption_configuration}
    */
    readonly removeEncryptionConfiguration?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#remove_expected_bucket_owner CcWorkGroup#remove_expected_bucket_owner}
    */
    readonly removeExpectedBucketOwner?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#remove_output_location CcWorkGroup#remove_output_location}
    */
    readonly removeOutputLocation?: boolean | cdktn.IResolvable;
}
export class ResultConfigurationUpdatesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResultConfigurationUpdatesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aclConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aclConfiguration = this._aclConfiguration?.internalValue;
        }
        if (this._encryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
        }
        if (this._expectedBucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
        }
        if (this._outputLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputLocation = this._outputLocation;
        }
        if (this._removeAclConfiguration !== undefined) {
            hasAnyValues = true;
            internalValueResult.removeAclConfiguration = this._removeAclConfiguration;
        }
        if (this._removeEncryptionConfiguration !== undefined) {
            hasAnyValues = true;
            internalValueResult.removeEncryptionConfiguration = this._removeEncryptionConfiguration;
        }
        if (this._removeExpectedBucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.removeExpectedBucketOwner = this._removeExpectedBucketOwner;
        }
        if (this._removeOutputLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.removeOutputLocation = this._removeOutputLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResultConfigurationUpdatesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aclConfiguration.internalValue = undefined;
            this._encryptionConfiguration.internalValue = undefined;
            this._expectedBucketOwner = undefined;
            this._outputLocation = undefined;
            this._removeAclConfiguration = undefined;
            this._removeEncryptionConfiguration = undefined;
            this._removeExpectedBucketOwner = undefined;
            this._removeOutputLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aclConfiguration.internalValue = value.aclConfiguration;
            this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
            this._expectedBucketOwner = value.expectedBucketOwner;
            this._outputLocation = value.outputLocation;
            this._removeAclConfiguration = value.removeAclConfiguration;
            this._removeEncryptionConfiguration = value.removeEncryptionConfiguration;
            this._removeExpectedBucketOwner = value.removeExpectedBucketOwner;
            this._removeOutputLocation = value.removeOutputLocation;
        }
    }

    // acl_configuration - computed: true, optional: true, required: false
    private _aclConfiguration = new WorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationPropertyOutputReference(this, "acl_configuration");
    public get aclConfiguration() {
        return this._aclConfiguration;
    }
    public putAclConfiguration(value: WorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationProperty) {
        this._aclConfiguration.internalValue = value;
    }
    public resetAclConfiguration() {
        this._aclConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aclConfigurationInput() {
        return this._aclConfiguration.internalValue;
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new WorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: WorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // expected_bucket_owner - computed: true, optional: true, required: false
    private _expectedBucketOwner?: string; 
    public get expectedBucketOwner() {
        return this.getStringAttribute('expected_bucket_owner');
    }
    public set expectedBucketOwner(value: string) {
        this._expectedBucketOwner = value;
    }
    public resetExpectedBucketOwner() {
        this._expectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expectedBucketOwnerInput() {
        return this._expectedBucketOwner;
    }

    // output_location - computed: true, optional: true, required: false
    private _outputLocation?: string; 
    public get outputLocation() {
        return this.getStringAttribute('output_location');
    }
    public set outputLocation(value: string) {
        this._outputLocation = value;
    }
    public resetOutputLocation() {
        this._outputLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputLocationInput() {
        return this._outputLocation;
    }

    // remove_acl_configuration - computed: true, optional: true, required: false
    private _removeAclConfiguration?: boolean | cdktn.IResolvable; 
    public get removeAclConfiguration() {
        return this.getBooleanAttribute('remove_acl_configuration');
    }
    public set removeAclConfiguration(value: boolean | cdktn.IResolvable) {
        this._removeAclConfiguration = value;
    }
    public resetRemoveAclConfiguration() {
        this._removeAclConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeAclConfigurationInput() {
        return this._removeAclConfiguration;
    }

    // remove_encryption_configuration - computed: true, optional: true, required: false
    private _removeEncryptionConfiguration?: boolean | cdktn.IResolvable; 
    public get removeEncryptionConfiguration() {
        return this.getBooleanAttribute('remove_encryption_configuration');
    }
    public set removeEncryptionConfiguration(value: boolean | cdktn.IResolvable) {
        this._removeEncryptionConfiguration = value;
    }
    public resetRemoveEncryptionConfiguration() {
        this._removeEncryptionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeEncryptionConfigurationInput() {
        return this._removeEncryptionConfiguration;
    }

    // remove_expected_bucket_owner - computed: true, optional: true, required: false
    private _removeExpectedBucketOwner?: boolean | cdktn.IResolvable; 
    public get removeExpectedBucketOwner() {
        return this.getBooleanAttribute('remove_expected_bucket_owner');
    }
    public set removeExpectedBucketOwner(value: boolean | cdktn.IResolvable) {
        this._removeExpectedBucketOwner = value;
    }
    public resetRemoveExpectedBucketOwner() {
        this._removeExpectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeExpectedBucketOwnerInput() {
        return this._removeExpectedBucketOwner;
    }

    // remove_output_location - computed: true, optional: true, required: false
    private _removeOutputLocation?: boolean | cdktn.IResolvable; 
    public get removeOutputLocation() {
        return this.getBooleanAttribute('remove_output_location');
    }
    public set removeOutputLocation(value: boolean | cdktn.IResolvable) {
        this._removeOutputLocation = value;
    }
    public resetRemoveOutputLocation() {
        this._removeOutputLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeOutputLocationInput() {
        return this._removeOutputLocation;
    }
}
export interface WorkGroupConfigurationUpdatesProperty {
    /**
    * Additional Configuration that are passed to Athena Spark Calculations running in this workgroup
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#additional_configuration CcWorkGroup#additional_configuration}
    */
    readonly additionalConfiguration?: string;
    /**
    * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query CcWorkGroup#bytes_scanned_cutoff_per_query}
    */
    readonly bytesScannedCutoffPerQuery?: number;
    /**
    * Indicates the KMS key for encrypting notebook content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#customer_content_encryption_configuration CcWorkGroup#customer_content_encryption_configuration}
    */
    readonly customerContentEncryptionConfiguration?: WorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationProperty;
    /**
    * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#enforce_work_group_configuration CcWorkGroup#enforce_work_group_configuration}
    */
    readonly enforceWorkGroupConfiguration?: boolean | cdktn.IResolvable;
    /**
    * The engine configuration for running queries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#engine_configuration CcWorkGroup#engine_configuration}
    */
    readonly engineConfiguration?: WorkGroupConfigurationUpdatesEngineConfigurationProperty;
    /**
    * The Athena engine version for running queries.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#engine_version CcWorkGroup#engine_version}
    */
    readonly engineVersion?: WorkGroupConfigurationUpdatesEngineVersionProperty;
    /**
    * The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#execution_role CcWorkGroup#execution_role}
    */
    readonly executionRole?: string;
    /**
    * The configuration for the managed query results and encryption option. ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#managed_query_results_configuration CcWorkGroup#managed_query_results_configuration}
    */
    readonly managedQueryResultsConfiguration?: WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationProperty;
    /**
    * Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#monitoring_configuration CcWorkGroup#monitoring_configuration}
    */
    readonly monitoringConfiguration?: WorkGroupConfigurationUpdatesMonitoringConfigurationProperty;
    /**
    * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled CcWorkGroup#publish_cloudwatch_metrics_enabled}
    */
    readonly publishCloudwatchMetricsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Indicates that the data usage control limit per query is removed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#remove_bytes_scanned_cutoff_per_query CcWorkGroup#remove_bytes_scanned_cutoff_per_query}
    */
    readonly removeBytesScannedCutoffPerQuery?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#remove_customer_content_encryption_configuration CcWorkGroup#remove_customer_content_encryption_configuration}
    */
    readonly removeCustomerContentEncryptionConfiguration?: boolean | cdktn.IResolvable;
    /**
    * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#requester_pays_enabled CcWorkGroup#requester_pays_enabled}
    */
    readonly requesterPaysEnabled?: boolean | cdktn.IResolvable;
    /**
    * The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_work_group#result_configuration_updates CcWorkGroup#result_configuration_updates}
    */
    readonly resultConfigurationUpdates?: ResultConfigurationUpdatesProperty;
}
export class WorkGroupConfigurationUpdatesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkGroupConfigurationUpdatesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalConfiguration !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalConfiguration = this._additionalConfiguration;
        }
        if (this._bytesScannedCutoffPerQuery !== undefined) {
            hasAnyValues = true;
            internalValueResult.bytesScannedCutoffPerQuery = this._bytesScannedCutoffPerQuery;
        }
        if (this._customerContentEncryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerContentEncryptionConfiguration = this._customerContentEncryptionConfiguration?.internalValue;
        }
        if (this._enforceWorkGroupConfiguration !== undefined) {
            hasAnyValues = true;
            internalValueResult.enforceWorkGroupConfiguration = this._enforceWorkGroupConfiguration;
        }
        if (this._engineConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.engineConfiguration = this._engineConfiguration?.internalValue;
        }
        if (this._engineVersion?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.engineVersion = this._engineVersion?.internalValue;
        }
        if (this._executionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        if (this._managedQueryResultsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedQueryResultsConfiguration = this._managedQueryResultsConfiguration?.internalValue;
        }
        if (this._monitoringConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringConfiguration = this._monitoringConfiguration?.internalValue;
        }
        if (this._publishCloudwatchMetricsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.publishCloudwatchMetricsEnabled = this._publishCloudwatchMetricsEnabled;
        }
        if (this._removeBytesScannedCutoffPerQuery !== undefined) {
            hasAnyValues = true;
            internalValueResult.removeBytesScannedCutoffPerQuery = this._removeBytesScannedCutoffPerQuery;
        }
        if (this._removeCustomerContentEncryptionConfiguration !== undefined) {
            hasAnyValues = true;
            internalValueResult.removeCustomerContentEncryptionConfiguration = this._removeCustomerContentEncryptionConfiguration;
        }
        if (this._requesterPaysEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.requesterPaysEnabled = this._requesterPaysEnabled;
        }
        if (this._resultConfigurationUpdates?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resultConfigurationUpdates = this._resultConfigurationUpdates?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkGroupConfigurationUpdatesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalConfiguration = undefined;
            this._bytesScannedCutoffPerQuery = undefined;
            this._customerContentEncryptionConfiguration.internalValue = undefined;
            this._enforceWorkGroupConfiguration = undefined;
            this._engineConfiguration.internalValue = undefined;
            this._engineVersion.internalValue = undefined;
            this._executionRole = undefined;
            this._managedQueryResultsConfiguration.internalValue = undefined;
            this._monitoringConfiguration.internalValue = undefined;
            this._publishCloudwatchMetricsEnabled = undefined;
            this._removeBytesScannedCutoffPerQuery = undefined;
            this._removeCustomerContentEncryptionConfiguration = undefined;
            this._requesterPaysEnabled = undefined;
            this._resultConfigurationUpdates.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalConfiguration = value.additionalConfiguration;
            this._bytesScannedCutoffPerQuery = value.bytesScannedCutoffPerQuery;
            this._customerContentEncryptionConfiguration.internalValue = value.customerContentEncryptionConfiguration;
            this._enforceWorkGroupConfiguration = value.enforceWorkGroupConfiguration;
            this._engineConfiguration.internalValue = value.engineConfiguration;
            this._engineVersion.internalValue = value.engineVersion;
            this._executionRole = value.executionRole;
            this._managedQueryResultsConfiguration.internalValue = value.managedQueryResultsConfiguration;
            this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
            this._publishCloudwatchMetricsEnabled = value.publishCloudwatchMetricsEnabled;
            this._removeBytesScannedCutoffPerQuery = value.removeBytesScannedCutoffPerQuery;
            this._removeCustomerContentEncryptionConfiguration = value.removeCustomerContentEncryptionConfiguration;
            this._requesterPaysEnabled = value.requesterPaysEnabled;
            this._resultConfigurationUpdates.internalValue = value.resultConfigurationUpdates;
        }
    }

    // additional_configuration - computed: true, optional: true, required: false
    private _additionalConfiguration?: string; 
    public get additionalConfiguration() {
        return this.getStringAttribute('additional_configuration');
    }
    public set additionalConfiguration(value: string) {
        this._additionalConfiguration = value;
    }
    public resetAdditionalConfiguration() {
        this._additionalConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalConfigurationInput() {
        return this._additionalConfiguration;
    }

    // bytes_scanned_cutoff_per_query - computed: true, optional: true, required: false
    private _bytesScannedCutoffPerQuery?: number; 
    public get bytesScannedCutoffPerQuery() {
        return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
    }
    public set bytesScannedCutoffPerQuery(value: number) {
        this._bytesScannedCutoffPerQuery = value;
    }
    public resetBytesScannedCutoffPerQuery() {
        this._bytesScannedCutoffPerQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bytesScannedCutoffPerQueryInput() {
        return this._bytesScannedCutoffPerQuery;
    }

    // customer_content_encryption_configuration - computed: true, optional: true, required: false
    private _customerContentEncryptionConfiguration = new WorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationPropertyOutputReference(this, "customer_content_encryption_configuration");
    public get customerContentEncryptionConfiguration() {
        return this._customerContentEncryptionConfiguration;
    }
    public putCustomerContentEncryptionConfiguration(value: WorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationProperty) {
        this._customerContentEncryptionConfiguration.internalValue = value;
    }
    public resetCustomerContentEncryptionConfiguration() {
        this._customerContentEncryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerContentEncryptionConfigurationInput() {
        return this._customerContentEncryptionConfiguration.internalValue;
    }

    // enforce_work_group_configuration - computed: true, optional: true, required: false
    private _enforceWorkGroupConfiguration?: boolean | cdktn.IResolvable; 
    public get enforceWorkGroupConfiguration() {
        return this.getBooleanAttribute('enforce_work_group_configuration');
    }
    public set enforceWorkGroupConfiguration(value: boolean | cdktn.IResolvable) {
        this._enforceWorkGroupConfiguration = value;
    }
    public resetEnforceWorkGroupConfiguration() {
        this._enforceWorkGroupConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceWorkGroupConfigurationInput() {
        return this._enforceWorkGroupConfiguration;
    }

    // engine_configuration - computed: true, optional: true, required: false
    private _engineConfiguration = new WorkGroupConfigurationUpdatesEngineConfigurationPropertyOutputReference(this, "engine_configuration");
    public get engineConfiguration() {
        return this._engineConfiguration;
    }
    public putEngineConfiguration(value: WorkGroupConfigurationUpdatesEngineConfigurationProperty) {
        this._engineConfiguration.internalValue = value;
    }
    public resetEngineConfiguration() {
        this._engineConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineConfigurationInput() {
        return this._engineConfiguration.internalValue;
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion = new WorkGroupConfigurationUpdatesEngineVersionPropertyOutputReference(this, "engine_version");
    public get engineVersion() {
        return this._engineVersion;
    }
    public putEngineVersion(value: WorkGroupConfigurationUpdatesEngineVersionProperty) {
        this._engineVersion.internalValue = value;
    }
    public resetEngineVersion() {
        this._engineVersion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
        return this._engineVersion.internalValue;
    }

    // execution_role - computed: true, optional: true, required: false
    private _executionRole?: string; 
    public get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    public set executionRole(value: string) {
        this._executionRole = value;
    }
    public resetExecutionRole() {
        this._executionRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleInput() {
        return this._executionRole;
    }

    // managed_query_results_configuration - computed: true, optional: true, required: false
    private _managedQueryResultsConfiguration = new WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationPropertyOutputReference(this, "managed_query_results_configuration");
    public get managedQueryResultsConfiguration() {
        return this._managedQueryResultsConfiguration;
    }
    public putManagedQueryResultsConfiguration(value: WorkGroupConfigurationUpdatesManagedQueryResultsConfigurationProperty) {
        this._managedQueryResultsConfiguration.internalValue = value;
    }
    public resetManagedQueryResultsConfiguration() {
        this._managedQueryResultsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedQueryResultsConfigurationInput() {
        return this._managedQueryResultsConfiguration.internalValue;
    }

    // monitoring_configuration - computed: true, optional: true, required: false
    private _monitoringConfiguration = new WorkGroupConfigurationUpdatesMonitoringConfigurationPropertyOutputReference(this, "monitoring_configuration");
    public get monitoringConfiguration() {
        return this._monitoringConfiguration;
    }
    public putMonitoringConfiguration(value: WorkGroupConfigurationUpdatesMonitoringConfigurationProperty) {
        this._monitoringConfiguration.internalValue = value;
    }
    public resetMonitoringConfiguration() {
        this._monitoringConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringConfigurationInput() {
        return this._monitoringConfiguration.internalValue;
    }

    // publish_cloudwatch_metrics_enabled - computed: true, optional: true, required: false
    private _publishCloudwatchMetricsEnabled?: boolean | cdktn.IResolvable; 
    public get publishCloudwatchMetricsEnabled() {
        return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled');
    }
    public set publishCloudwatchMetricsEnabled(value: boolean | cdktn.IResolvable) {
        this._publishCloudwatchMetricsEnabled = value;
    }
    public resetPublishCloudwatchMetricsEnabled() {
        this._publishCloudwatchMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishCloudwatchMetricsEnabledInput() {
        return this._publishCloudwatchMetricsEnabled;
    }

    // remove_bytes_scanned_cutoff_per_query - computed: true, optional: true, required: false
    private _removeBytesScannedCutoffPerQuery?: boolean | cdktn.IResolvable; 
    public get removeBytesScannedCutoffPerQuery() {
        return this.getBooleanAttribute('remove_bytes_scanned_cutoff_per_query');
    }
    public set removeBytesScannedCutoffPerQuery(value: boolean | cdktn.IResolvable) {
        this._removeBytesScannedCutoffPerQuery = value;
    }
    public resetRemoveBytesScannedCutoffPerQuery() {
        this._removeBytesScannedCutoffPerQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeBytesScannedCutoffPerQueryInput() {
        return this._removeBytesScannedCutoffPerQuery;
    }

    // remove_customer_content_encryption_configuration - computed: true, optional: true, required: false
    private _removeCustomerContentEncryptionConfiguration?: boolean | cdktn.IResolvable; 
    public get removeCustomerContentEncryptionConfiguration() {
        return this.getBooleanAttribute('remove_customer_content_encryption_configuration');
    }
    public set removeCustomerContentEncryptionConfiguration(value: boolean | cdktn.IResolvable) {
        this._removeCustomerContentEncryptionConfiguration = value;
    }
    public resetRemoveCustomerContentEncryptionConfiguration() {
        this._removeCustomerContentEncryptionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeCustomerContentEncryptionConfigurationInput() {
        return this._removeCustomerContentEncryptionConfiguration;
    }

    // requester_pays_enabled - computed: true, optional: true, required: false
    private _requesterPaysEnabled?: boolean | cdktn.IResolvable; 
    public get requesterPaysEnabled() {
        return this.getBooleanAttribute('requester_pays_enabled');
    }
    public set requesterPaysEnabled(value: boolean | cdktn.IResolvable) {
        this._requesterPaysEnabled = value;
    }
    public resetRequesterPaysEnabled() {
        this._requesterPaysEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requesterPaysEnabledInput() {
        return this._requesterPaysEnabled;
    }

    // result_configuration_updates - computed: true, optional: true, required: false
    private _resultConfigurationUpdates = new ResultConfigurationUpdatesPropertyOutputReference(this, "result_configuration_updates");
    public get resultConfigurationUpdates() {
        return this._resultConfigurationUpdates;
    }
    public putResultConfigurationUpdates(value: ResultConfigurationUpdatesProperty) {
        this._resultConfigurationUpdates.internalValue = value;
    }
    public resetResultConfigurationUpdates() {
        this._resultConfigurationUpdates.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultConfigurationUpdatesInput() {
        return this._resultConfigurationUpdates.internalValue;
    }
}
}
