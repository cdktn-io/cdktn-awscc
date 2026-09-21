// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTaskProps extends cdktn.TerraformMetaArguments {
    /**
    * A description of the task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#description CcTask#description}
    */
    readonly description?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#tags CcTask#tags}
    */
    readonly tags?: CcTask.TagsProperty[] | cdktn.IResolvable;
    /**
    * The task execution configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#task_configuration CcTask#task_configuration}
    */
    readonly taskConfiguration: CcTask.TaskConfigurationProperty;
    /**
    * The name of the task. Must be unique within the workspace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#task_name CcTask#task_name}
    */
    readonly taskName: string;
    /**
    * The name of the workspace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#workspace_name CcTask#workspace_name}
    */
    readonly workspaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task awscc_iotsitewise_task}
*/
export class CcTask extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotsitewise_task";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTask resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTask to import
    * @param importFromId The id of the existing CcTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTask to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_task", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task awscc_iotsitewise_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTaskProps
    */
    public constructor(scope: Construct, id: string, config: CcTaskProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotsitewise_task',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
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
        this._tags.internalValue = config.tags;
        this._taskConfiguration.internalValue = config.taskConfiguration;
        this._taskName = config.taskName;
        this._workspaceName = config.workspaceName;
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTask.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTask.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // task_arn - computed: true, optional: false, required: false
    public get taskArn() {
        return this.getStringAttribute('task_arn');
    }

    // task_configuration - computed: false, optional: false, required: true
    private _taskConfiguration = new CcTask.TaskConfigurationPropertyOutputReference(this, "task_configuration");
    public get taskConfiguration() {
        return this._taskConfiguration;
    }
    public putTaskConfiguration(value: CcTask.TaskConfigurationProperty) {
        this._taskConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskConfigurationInput() {
        return this._taskConfiguration.internalValue;
    }

    // task_name - computed: false, optional: false, required: true
    private _taskName?: string; 
    public get taskName() {
        return this.getStringAttribute('task_name');
    }
    public set taskName(value: string) {
        this._taskName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskNameInput() {
        return this._taskName;
    }

    // workspace_name - computed: false, optional: false, required: true
    private _workspaceName?: string; 
    public get workspaceName() {
        return this.getStringAttribute('workspace_name');
    }
    public set workspaceName(value: string) {
        this._workspaceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceNameInput() {
        return this._workspaceName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            tags: cdktn.listMapper(ccTaskTagsPropertyToTerraform, false)(this._tags.internalValue),
            task_configuration: ccTaskTaskConfigurationPropertyToTerraform(this._taskConfiguration.internalValue),
            task_name: cdktn.stringToTerraform(this._taskName),
            workspace_name: cdktn.stringToTerraform(this._workspaceName),
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
            tags: {
                value: cdktn.listMapperHcl(ccTaskTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTask.TagsPropertyList",
            },
            task_configuration: {
                value: ccTaskTaskConfigurationPropertyToHclTerraform(this._taskConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTask.TaskConfigurationProperty",
            },
            task_name: {
                value: cdktn.stringToHclTerraform(this._taskName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workspace_name: {
                value: cdktn.stringToHclTerraform(this._workspaceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTaskTagsPropertyToTerraform(struct?: CcTask.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskTagsPropertyToHclTerraform(struct?: CcTask.TagsProperty | cdktn.IResolvable): any {
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


export function ccTaskEphemeralStorageConfigurationPropertyToTerraform(struct?: CcTask.EphemeralStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        storage_class: cdktn.stringToTerraform(struct!.storageClass),
        storage_size_in_gi_b: cdktn.numberToTerraform(struct!.storageSizeInGiB),
    }
}


export function ccTaskEphemeralStorageConfigurationPropertyToHclTerraform(struct?: CcTask.EphemeralStorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        storage_class: {
            value: cdktn.stringToHclTerraform(struct!.storageClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_size_in_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.storageSizeInGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskS3AccessPointPropertyToTerraform(struct?: CcTask.S3AccessPointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccTaskS3AccessPointPropertyToHclTerraform(struct?: CcTask.S3AccessPointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_point_arn: {
            value: cdktn.stringToHclTerraform(struct!.accessPointArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskSourcePropertyToTerraform(struct?: CcTask.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_access_point: ccTaskS3AccessPointPropertyToTerraform(struct!.s3AccessPoint),
    }
}


export function ccTaskSourcePropertyToHclTerraform(struct?: CcTask.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_access_point: {
            value: ccTaskS3AccessPointPropertyToHclTerraform(struct!.s3AccessPoint),
            isBlock: true,
            type: "struct",
            storageClassType: "S3AccessPointProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskMountsPropertyToTerraform(struct?: CcTask.MountsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        relative_path: cdktn.stringToTerraform(struct!.relativePath),
        source: ccTaskSourcePropertyToTerraform(struct!.source),
        storage_type: cdktn.stringToTerraform(struct!.storageType),
    }
}


export function ccTaskMountsPropertyToHclTerraform(struct?: CcTask.MountsProperty | cdktn.IResolvable): any {
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
        relative_path: {
            value: cdktn.stringToHclTerraform(struct!.relativePath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: ccTaskSourcePropertyToHclTerraform(struct!.source),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceProperty",
        },
        storage_type: {
            value: cdktn.stringToHclTerraform(struct!.storageType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskContainerTaskConfigurationPropertyToTerraform(struct?: CcTask.ContainerTaskConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
        ecr_uri: cdktn.stringToTerraform(struct!.ecrUri),
        environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environmentVariables),
        ephemeral_storage_configuration: ccTaskEphemeralStorageConfigurationPropertyToTerraform(struct!.ephemeralStorageConfiguration),
        mounts: cdktn.listMapper(ccTaskMountsPropertyToTerraform, false)(struct!.mounts),
        processing_type: cdktn.stringToTerraform(struct!.processingType),
        processing_unit: cdktn.stringToTerraform(struct!.processingUnit),
        task_execution_role: cdktn.stringToTerraform(struct!.taskExecutionRole),
        timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    }
}


export function ccTaskContainerTaskConfigurationPropertyToHclTerraform(struct?: CcTask.ContainerTaskConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        command: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        ecr_uri: {
            value: cdktn.stringToHclTerraform(struct!.ecrUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment_variables: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environmentVariables),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        ephemeral_storage_configuration: {
            value: ccTaskEphemeralStorageConfigurationPropertyToHclTerraform(struct!.ephemeralStorageConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EphemeralStorageConfigurationProperty",
        },
        mounts: {
            value: cdktn.listMapperHcl(ccTaskMountsPropertyToHclTerraform, false)(struct!.mounts),
            isBlock: true,
            type: "list",
            storageClassType: "MountsPropertyList",
        },
        processing_type: {
            value: cdktn.stringToHclTerraform(struct!.processingType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        processing_unit: {
            value: cdktn.stringToHclTerraform(struct!.processingUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        task_execution_role: {
            value: cdktn.stringToHclTerraform(struct!.taskExecutionRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskTaskConfigurationPropertyToTerraform(struct?: CcTask.TaskConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_task_configuration: ccTaskContainerTaskConfigurationPropertyToTerraform(struct!.containerTaskConfiguration),
    }
}


export function ccTaskTaskConfigurationPropertyToHclTerraform(struct?: CcTask.TaskConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_task_configuration: {
            value: ccTaskContainerTaskConfigurationPropertyToHclTerraform(struct!.containerTaskConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ContainerTaskConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTask {
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#key CcTask#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#value CcTask#value}
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
export interface EphemeralStorageConfigurationProperty {
    /**
    * The storage type that determines I/O performance characteristics. Family name indicates workload pattern, level number indicates performance within that family.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#storage_class CcTask#storage_class}
    */
    readonly storageClass?: string;
    /**
    * Storage volume size in GiB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#storage_size_in_gi_b CcTask#storage_size_in_gi_b}
    */
    readonly storageSizeInGiB?: number;
}
export class EphemeralStorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EphemeralStorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        if (this._storageSizeInGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageSizeInGiB = this._storageSizeInGiB;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EphemeralStorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._storageClass = undefined;
            this._storageSizeInGiB = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._storageClass = value.storageClass;
            this._storageSizeInGiB = value.storageSizeInGiB;
        }
    }

    // storage_class - computed: true, optional: true, required: false
    private _storageClass?: string; 
    public get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    public set storageClass(value: string) {
        this._storageClass = value;
    }
    public resetStorageClass() {
        this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageClassInput() {
        return this._storageClass;
    }

    // storage_size_in_gi_b - computed: true, optional: true, required: false
    private _storageSizeInGiB?: number; 
    public get storageSizeInGiB() {
        return this.getNumberAttribute('storage_size_in_gi_b');
    }
    public set storageSizeInGiB(value: number) {
        this._storageSizeInGiB = value;
    }
    public resetStorageSizeInGiB() {
        this._storageSizeInGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageSizeInGiBInput() {
        return this._storageSizeInGiB;
    }
}
export interface S3AccessPointProperty {
    /**
    * The Amazon Resource Name (ARN) of the Amazon S3 access point. The mount reads objects from the bucket associated with this access point. Access is governed by the access point policy and the task execution role's IAM permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#access_point_arn CcTask#access_point_arn}
    */
    readonly accessPointArn?: string;
    /**
    * An object key name prefix. If specified, the mount includes only objects whose keys begin with this prefix. To include all objects at the access point, omit this field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#prefix CcTask#prefix}
    */
    readonly prefix?: string;
}
export class S3AccessPointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3AccessPointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessPointArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessPointArn = this._accessPointArn;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3AccessPointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessPointArn = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessPointArn = value.accessPointArn;
            this._prefix = value.prefix;
        }
    }

    // access_point_arn - computed: true, optional: true, required: false
    private _accessPointArn?: string; 
    public get accessPointArn() {
        return this.getStringAttribute('access_point_arn');
    }
    public set accessPointArn(value: string) {
        this._accessPointArn = value;
    }
    public resetAccessPointArn() {
        this._accessPointArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPointArnInput() {
        return this._accessPointArn;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface SourceProperty {
    /**
    * Configures a mount that reads from an Amazon S3 access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#s3_access_point CcTask#s3_access_point}
    */
    readonly s3AccessPoint?: S3AccessPointProperty;
}
export class SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3AccessPoint?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3AccessPoint = this._s3AccessPoint?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3AccessPoint.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3AccessPoint.internalValue = value.s3AccessPoint;
        }
    }

    // s3_access_point - computed: true, optional: true, required: false
    private _s3AccessPoint = new S3AccessPointPropertyOutputReference(this, "s3_access_point");
    public get s3AccessPoint() {
        return this._s3AccessPoint;
    }
    public putS3AccessPoint(value: S3AccessPointProperty) {
        this._s3AccessPoint.internalValue = value;
    }
    public resetS3AccessPoint() {
        this._s3AccessPoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3AccessPointInput() {
        return this._s3AccessPoint.internalValue;
    }
}
export interface MountsProperty {
    /**
    * A unique name for the mount within the task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#name CcTask#name}
    */
    readonly name?: string;
    /**
    * The relative path under the service-owned mount root where this mount is attached inside the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#relative_path CcTask#relative_path}
    */
    readonly relativePath?: string;
    /**
    * The data source configuration for a mount.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#source CcTask#source}
    */
    readonly source?: SourceProperty;
    /**
    * The type of storage used for the mount inside the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#storage_type CcTask#storage_type}
    */
    readonly storageType?: string;
}
export class MountsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MountsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._relativePath !== undefined) {
            hasAnyValues = true;
            internalValueResult.relativePath = this._relativePath;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        if (this._storageType !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageType = this._storageType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MountsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._relativePath = undefined;
            this._source.internalValue = undefined;
            this._storageType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._relativePath = value.relativePath;
            this._source.internalValue = value.source;
            this._storageType = value.storageType;
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

    // relative_path - computed: true, optional: true, required: false
    private _relativePath?: string; 
    public get relativePath() {
        return this.getStringAttribute('relative_path');
    }
    public set relativePath(value: string) {
        this._relativePath = value;
    }
    public resetRelativePath() {
        this._relativePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relativePathInput() {
        return this._relativePath;
    }

    // source - computed: true, optional: true, required: false
    private _source = new SourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: SourceProperty) {
        this._source.internalValue = value;
    }
    public resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }

    // storage_type - computed: true, optional: true, required: false
    private _storageType?: string; 
    public get storageType() {
        return this.getStringAttribute('storage_type');
    }
    public set storageType(value: string) {
        this._storageType = value;
    }
    public resetStorageType() {
        this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageTypeInput() {
        return this._storageType;
    }
}

export class MountsPropertyList extends cdktn.ComplexList {
    public internalValue? : MountsProperty[] | cdktn.IResolvable

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
    public get(index: number): MountsPropertyOutputReference {
        return new MountsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ContainerTaskConfigurationProperty {
    /**
    * The command to execute in the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#command CcTask#command}
    */
    readonly command?: string[];
    /**
    * The Amazon ECR image URI for the task container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#ecr_uri CcTask#ecr_uri}
    */
    readonly ecrUri: string;
    /**
    * A map of environment variable key-value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#environment_variables CcTask#environment_variables}
    */
    readonly environmentVariables?: { [key: string]: string };
    /**
    * Configuration for ephemeral storage attached to the container task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#ephemeral_storage_configuration CcTask#ephemeral_storage_configuration}
    */
    readonly ephemeralStorageConfiguration?: EphemeralStorageConfigurationProperty;
    /**
    * Mounts attached to the container filesystem. Each mount exposes an external data source as a local directory inside the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#mounts CcTask#mounts}
    */
    readonly mounts?: MountsProperty[] | cdktn.IResolvable;
    /**
    * The processing type for compute resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#processing_type CcTask#processing_type}
    */
    readonly processingType: string;
    /**
    * The processing unit allocation that determines vCPU, memory, and GPU resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#processing_unit CcTask#processing_unit}
    */
    readonly processingUnit: string;
    /**
    * The ARN of the IAM role that grants the containerized workload permissions to access AWS resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#task_execution_role CcTask#task_execution_role}
    */
    readonly taskExecutionRole: string;
    /**
    * The timeout in seconds for task execution. Default: 3600 (1 hour).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#timeout_seconds CcTask#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
}
export class ContainerTaskConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContainerTaskConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._command !== undefined) {
            hasAnyValues = true;
            internalValueResult.command = this._command;
        }
        if (this._ecrUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecrUri = this._ecrUri;
        }
        if (this._environmentVariables !== undefined) {
            hasAnyValues = true;
            internalValueResult.environmentVariables = this._environmentVariables;
        }
        if (this._ephemeralStorageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ephemeralStorageConfiguration = this._ephemeralStorageConfiguration?.internalValue;
        }
        if (this._mounts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mounts = this._mounts?.internalValue;
        }
        if (this._processingType !== undefined) {
            hasAnyValues = true;
            internalValueResult.processingType = this._processingType;
        }
        if (this._processingUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.processingUnit = this._processingUnit;
        }
        if (this._taskExecutionRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskExecutionRole = this._taskExecutionRole;
        }
        if (this._timeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutSeconds = this._timeoutSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContainerTaskConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._command = undefined;
            this._ecrUri = undefined;
            this._environmentVariables = undefined;
            this._ephemeralStorageConfiguration.internalValue = undefined;
            this._mounts.internalValue = undefined;
            this._processingType = undefined;
            this._processingUnit = undefined;
            this._taskExecutionRole = undefined;
            this._timeoutSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._command = value.command;
            this._ecrUri = value.ecrUri;
            this._environmentVariables = value.environmentVariables;
            this._ephemeralStorageConfiguration.internalValue = value.ephemeralStorageConfiguration;
            this._mounts.internalValue = value.mounts;
            this._processingType = value.processingType;
            this._processingUnit = value.processingUnit;
            this._taskExecutionRole = value.taskExecutionRole;
            this._timeoutSeconds = value.timeoutSeconds;
        }
    }

    // command - computed: true, optional: true, required: false
    private _command?: string[]; 
    public get command() {
        return this.getListAttribute('command');
    }
    public set command(value: string[]) {
        this._command = value;
    }
    public resetCommand() {
        this._command = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commandInput() {
        return this._command;
    }

    // ecr_uri - computed: false, optional: false, required: true
    private _ecrUri?: string; 
    public get ecrUri() {
        return this.getStringAttribute('ecr_uri');
    }
    public set ecrUri(value: string) {
        this._ecrUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ecrUriInput() {
        return this._ecrUri;
    }

    // environment_variables - computed: true, optional: true, required: false
    private _environmentVariables?: { [key: string]: string }; 
    public get environmentVariables() {
        return this.getStringMapAttribute('environment_variables');
    }
    public set environmentVariables(value: { [key: string]: string }) {
        this._environmentVariables = value;
    }
    public resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
        return this._environmentVariables;
    }

    // ephemeral_storage_configuration - computed: true, optional: true, required: false
    private _ephemeralStorageConfiguration = new EphemeralStorageConfigurationPropertyOutputReference(this, "ephemeral_storage_configuration");
    public get ephemeralStorageConfiguration() {
        return this._ephemeralStorageConfiguration;
    }
    public putEphemeralStorageConfiguration(value: EphemeralStorageConfigurationProperty) {
        this._ephemeralStorageConfiguration.internalValue = value;
    }
    public resetEphemeralStorageConfiguration() {
        this._ephemeralStorageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralStorageConfigurationInput() {
        return this._ephemeralStorageConfiguration.internalValue;
    }

    // mounts - computed: true, optional: true, required: false
    private _mounts = new MountsPropertyList(this, "mounts", false);
    public get mounts() {
        return this._mounts;
    }
    public putMounts(value: MountsProperty[] | cdktn.IResolvable) {
        this._mounts.internalValue = value;
    }
    public resetMounts() {
        this._mounts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountsInput() {
        return this._mounts.internalValue;
    }

    // processing_type - computed: false, optional: false, required: true
    private _processingType?: string; 
    public get processingType() {
        return this.getStringAttribute('processing_type');
    }
    public set processingType(value: string) {
        this._processingType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get processingTypeInput() {
        return this._processingType;
    }

    // processing_unit - computed: false, optional: false, required: true
    private _processingUnit?: string; 
    public get processingUnit() {
        return this.getStringAttribute('processing_unit');
    }
    public set processingUnit(value: string) {
        this._processingUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get processingUnitInput() {
        return this._processingUnit;
    }

    // task_execution_role - computed: false, optional: false, required: true
    private _taskExecutionRole?: string; 
    public get taskExecutionRole() {
        return this.getStringAttribute('task_execution_role');
    }
    public set taskExecutionRole(value: string) {
        this._taskExecutionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskExecutionRoleInput() {
        return this._taskExecutionRole;
    }

    // timeout_seconds - computed: true, optional: true, required: false
    private _timeoutSeconds?: number; 
    public get timeoutSeconds() {
        return this.getNumberAttribute('timeout_seconds');
    }
    public set timeoutSeconds(value: number) {
        this._timeoutSeconds = value;
    }
    public resetTimeoutSeconds() {
        this._timeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutSecondsInput() {
        return this._timeoutSeconds;
    }
}
export interface TaskConfigurationProperty {
    /**
    * Configuration for running a custom container image on managed compute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/iotsitewise_task#container_task_configuration CcTask#container_task_configuration}
    */
    readonly containerTaskConfiguration: ContainerTaskConfigurationProperty;
}
export class TaskConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TaskConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerTaskConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerTaskConfiguration = this._containerTaskConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TaskConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerTaskConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerTaskConfiguration.internalValue = value.containerTaskConfiguration;
        }
    }

    // container_task_configuration - computed: false, optional: false, required: true
    private _containerTaskConfiguration = new ContainerTaskConfigurationPropertyOutputReference(this, "container_task_configuration");
    public get containerTaskConfiguration() {
        return this._containerTaskConfiguration;
    }
    public putContainerTaskConfiguration(value: ContainerTaskConfigurationProperty) {
        this._containerTaskConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get containerTaskConfigurationInput() {
        return this._containerTaskConfiguration.internalValue;
    }
}
}
