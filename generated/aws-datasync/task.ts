// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTaskProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#cloudwatch_log_group_arn CcTask#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn?: string;
    /**
    * The ARN of an AWS storage resource's location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#destination_location_arn CcTask#destination_location_arn}
    */
    readonly destinationLocationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#excludes CcTask#excludes}
    */
    readonly excludes?: CcTask.FilterRuleProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#includes CcTask#includes}
    */
    readonly includes?: CcTask.IncludesProperty[] | cdktn.IResolvable;
    /**
    * Configures a manifest, which is a list of files or objects that you want DataSync to transfer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#manifest_config CcTask#manifest_config}
    */
    readonly manifestConfig?: CcTask.ManifestConfigProperty;
    /**
    * The name of a task. This value is a text reference that is used to identify the task in the console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#name CcTask#name}
    */
    readonly name?: string;
    /**
    * Represents the options that are available to control the behavior of a StartTaskExecution operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#options CcTask#options}
    */
    readonly options?: CcTask.OptionsProperty;
    /**
    * Specifies the schedule you want your task to use for repeated executions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#schedule CcTask#schedule}
    */
    readonly schedule?: CcTask.TaskScheduleProperty;
    /**
    * The ARN of the source location for the task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#source_location_arn CcTask#source_location_arn}
    */
    readonly sourceLocationArn: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#tags CcTask#tags}
    */
    readonly tags?: CcTask.TagProperty[] | cdktn.IResolvable;
    /**
    * Specifies the task mode for the task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#task_mode CcTask#task_mode}
    */
    readonly taskMode?: string;
    /**
    * Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#task_report_config CcTask#task_report_config}
    */
    readonly taskReportConfig?: CcTask.TaskReportConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task awscc_datasync_task}
*/
export class CcTask extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datasync_task";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTask resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTask to import
    * @param importFromId The id of the existing CcTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTask to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datasync_task", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task awscc_datasync_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTaskProps
    */
    public constructor(scope: Construct, id: string, config: CcTaskProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datasync_task',
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
        this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
        this._destinationLocationArn = config.destinationLocationArn;
        this._excludes.internalValue = config.excludes;
        this._includes.internalValue = config.includes;
        this._manifestConfig.internalValue = config.manifestConfig;
        this._name = config.name;
        this._options.internalValue = config.options;
        this._schedule.internalValue = config.schedule;
        this._sourceLocationArn = config.sourceLocationArn;
        this._tags.internalValue = config.tags;
        this._taskMode = config.taskMode;
        this._taskReportConfig.internalValue = config.taskReportConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cloudwatch_log_group_arn - computed: true, optional: true, required: false
    private _cloudwatchLogGroupArn?: string; 
    public get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    public set cloudwatchLogGroupArn(value: string) {
        this._cloudwatchLogGroupArn = value;
    }
    public resetCloudwatchLogGroupArn() {
        this._cloudwatchLogGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogGroupArnInput() {
        return this._cloudwatchLogGroupArn;
    }

    // destination_location_arn - computed: false, optional: false, required: true
    private _destinationLocationArn?: string; 
    public get destinationLocationArn() {
        return this.getStringAttribute('destination_location_arn');
    }
    public set destinationLocationArn(value: string) {
        this._destinationLocationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationLocationArnInput() {
        return this._destinationLocationArn;
    }

    // destination_network_interface_arns - computed: true, optional: false, required: false
    public get destinationNetworkInterfaceArns() {
        return this.getListAttribute('destination_network_interface_arns');
    }

    // excludes - computed: true, optional: true, required: false
    private _excludes = new CcTask.FilterRulePropertyList(this, "excludes", false);
    public get excludes() {
        return this._excludes;
    }
    public putExcludes(value: CcTask.FilterRuleProperty[] | cdktn.IResolvable) {
        this._excludes.internalValue = value;
    }
    public resetExcludes() {
        this._excludes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludesInput() {
        return this._excludes.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // includes - computed: true, optional: true, required: false
    private _includes = new CcTask.IncludesPropertyList(this, "includes", false);
    public get includes() {
        return this._includes;
    }
    public putIncludes(value: CcTask.IncludesProperty[] | cdktn.IResolvable) {
        this._includes.internalValue = value;
    }
    public resetIncludes() {
        this._includes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includesInput() {
        return this._includes.internalValue;
    }

    // manifest_config - computed: true, optional: true, required: false
    private _manifestConfig = new CcTask.ManifestConfigPropertyOutputReference(this, "manifest_config");
    public get manifestConfig() {
        return this._manifestConfig;
    }
    public putManifestConfig(value: CcTask.ManifestConfigProperty) {
        this._manifestConfig.internalValue = value;
    }
    public resetManifestConfig() {
        this._manifestConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestConfigInput() {
        return this._manifestConfig.internalValue;
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

    // options - computed: true, optional: true, required: false
    private _options = new CcTask.OptionsPropertyOutputReference(this, "options");
    public get options() {
        return this._options;
    }
    public putOptions(value: CcTask.OptionsProperty) {
        this._options.internalValue = value;
    }
    public resetOptions() {
        this._options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
        return this._options.internalValue;
    }

    // schedule - computed: true, optional: true, required: false
    private _schedule = new CcTask.TaskSchedulePropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: CcTask.TaskScheduleProperty) {
        this._schedule.internalValue = value;
    }
    public resetSchedule() {
        this._schedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }

    // source_location_arn - computed: false, optional: false, required: true
    private _sourceLocationArn?: string; 
    public get sourceLocationArn() {
        return this.getStringAttribute('source_location_arn');
    }
    public set sourceLocationArn(value: string) {
        this._sourceLocationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceLocationArnInput() {
        return this._sourceLocationArn;
    }

    // source_network_interface_arns - computed: true, optional: false, required: false
    public get sourceNetworkInterfaceArns() {
        return this.getListAttribute('source_network_interface_arns');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTask.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTask.TagProperty[] | cdktn.IResolvable) {
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

    // task_mode - computed: true, optional: true, required: false
    private _taskMode?: string; 
    public get taskMode() {
        return this.getStringAttribute('task_mode');
    }
    public set taskMode(value: string) {
        this._taskMode = value;
    }
    public resetTaskMode() {
        this._taskMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskModeInput() {
        return this._taskMode;
    }

    // task_report_config - computed: true, optional: true, required: false
    private _taskReportConfig = new CcTask.TaskReportConfigPropertyOutputReference(this, "task_report_config");
    public get taskReportConfig() {
        return this._taskReportConfig;
    }
    public putTaskReportConfig(value: CcTask.TaskReportConfigProperty) {
        this._taskReportConfig.internalValue = value;
    }
    public resetTaskReportConfig() {
        this._taskReportConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskReportConfigInput() {
        return this._taskReportConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cloudwatch_log_group_arn: cdktn.stringToTerraform(this._cloudwatchLogGroupArn),
            destination_location_arn: cdktn.stringToTerraform(this._destinationLocationArn),
            excludes: cdktn.listMapper(ccTaskFilterRulePropertyToTerraform, false)(this._excludes.internalValue),
            includes: cdktn.listMapper(ccTaskIncludesPropertyToTerraform, false)(this._includes.internalValue),
            manifest_config: ccTaskManifestConfigPropertyToTerraform(this._manifestConfig.internalValue),
            name: cdktn.stringToTerraform(this._name),
            options: ccTaskOptionsPropertyToTerraform(this._options.internalValue),
            schedule: ccTaskTaskSchedulePropertyToTerraform(this._schedule.internalValue),
            source_location_arn: cdktn.stringToTerraform(this._sourceLocationArn),
            tags: cdktn.listMapper(ccTaskTagPropertyToTerraform, false)(this._tags.internalValue),
            task_mode: cdktn.stringToTerraform(this._taskMode),
            task_report_config: ccTaskTaskReportConfigPropertyToTerraform(this._taskReportConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cloudwatch_log_group_arn: {
                value: cdktn.stringToHclTerraform(this._cloudwatchLogGroupArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_location_arn: {
                value: cdktn.stringToHclTerraform(this._destinationLocationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            excludes: {
                value: cdktn.listMapperHcl(ccTaskFilterRulePropertyToHclTerraform, false)(this._excludes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTask.FilterRulePropertyList",
            },
            includes: {
                value: cdktn.listMapperHcl(ccTaskIncludesPropertyToHclTerraform, false)(this._includes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTask.IncludesPropertyList",
            },
            manifest_config: {
                value: ccTaskManifestConfigPropertyToHclTerraform(this._manifestConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTask.ManifestConfigProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            options: {
                value: ccTaskOptionsPropertyToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTask.OptionsProperty",
            },
            schedule: {
                value: ccTaskTaskSchedulePropertyToHclTerraform(this._schedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTask.TaskScheduleProperty",
            },
            source_location_arn: {
                value: cdktn.stringToHclTerraform(this._sourceLocationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTaskTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTask.TagPropertyList",
            },
            task_mode: {
                value: cdktn.stringToHclTerraform(this._taskMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            task_report_config: {
                value: ccTaskTaskReportConfigPropertyToHclTerraform(this._taskReportConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTask.TaskReportConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTaskFilterRulePropertyToTerraform(struct?: CcTask.FilterRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter_type: cdktn.stringToTerraform(struct!.filterType),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskFilterRulePropertyToHclTerraform(struct?: CcTask.FilterRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter_type: {
            value: cdktn.stringToHclTerraform(struct!.filterType),
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


export function ccTaskIncludesPropertyToTerraform(struct?: CcTask.IncludesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filter_type: cdktn.stringToTerraform(struct!.filterType),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskIncludesPropertyToHclTerraform(struct?: CcTask.IncludesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filter_type: {
            value: cdktn.stringToHclTerraform(struct!.filterType),
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


export function ccTaskManifestConfigSourceS3PropertyToTerraform(struct?: CcTask.ManifestConfigSourceS3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_access_role_arn: cdktn.stringToTerraform(struct!.bucketAccessRoleArn),
        manifest_object_path: cdktn.stringToTerraform(struct!.manifestObjectPath),
        manifest_object_version_id: cdktn.stringToTerraform(struct!.manifestObjectVersionId),
        s3_bucket_arn: cdktn.stringToTerraform(struct!.s3BucketArn),
    }
}


export function ccTaskManifestConfigSourceS3PropertyToHclTerraform(struct?: CcTask.ManifestConfigSourceS3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        manifest_object_path: {
            value: cdktn.stringToHclTerraform(struct!.manifestObjectPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        manifest_object_version_id: {
            value: cdktn.stringToHclTerraform(struct!.manifestObjectVersionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketArn),
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
        s3: ccTaskManifestConfigSourceS3PropertyToTerraform(struct!.s3),
    }
}


export function ccTaskSourcePropertyToHclTerraform(struct?: CcTask.SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3: {
            value: ccTaskManifestConfigSourceS3PropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "ManifestConfigSourceS3Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskManifestConfigPropertyToTerraform(struct?: CcTask.ManifestConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        format: cdktn.stringToTerraform(struct!.format),
        source: ccTaskSourcePropertyToTerraform(struct!.source),
    }
}


export function ccTaskManifestConfigPropertyToHclTerraform(struct?: CcTask.ManifestConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskOptionsPropertyToTerraform(struct?: CcTask.OptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        atime: cdktn.stringToTerraform(struct!.atime),
        bytes_per_second: cdktn.numberToTerraform(struct!.bytesPerSecond),
        gid: cdktn.stringToTerraform(struct!.gid),
        log_level: cdktn.stringToTerraform(struct!.logLevel),
        mtime: cdktn.stringToTerraform(struct!.mtime),
        object_tags: cdktn.stringToTerraform(struct!.objectTags),
        overwrite_mode: cdktn.stringToTerraform(struct!.overwriteMode),
        posix_permissions: cdktn.stringToTerraform(struct!.posixPermissions),
        preserve_deleted_files: cdktn.stringToTerraform(struct!.preserveDeletedFiles),
        preserve_devices: cdktn.stringToTerraform(struct!.preserveDevices),
        security_descriptor_copy_flags: cdktn.stringToTerraform(struct!.securityDescriptorCopyFlags),
        task_queueing: cdktn.stringToTerraform(struct!.taskQueueing),
        transfer_mode: cdktn.stringToTerraform(struct!.transferMode),
        uid: cdktn.stringToTerraform(struct!.uid),
        verify_mode: cdktn.stringToTerraform(struct!.verifyMode),
    }
}


export function ccTaskOptionsPropertyToHclTerraform(struct?: CcTask.OptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        atime: {
            value: cdktn.stringToHclTerraform(struct!.atime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bytes_per_second: {
            value: cdktn.numberToHclTerraform(struct!.bytesPerSecond),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gid: {
            value: cdktn.stringToHclTerraform(struct!.gid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_level: {
            value: cdktn.stringToHclTerraform(struct!.logLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mtime: {
            value: cdktn.stringToHclTerraform(struct!.mtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_tags: {
            value: cdktn.stringToHclTerraform(struct!.objectTags),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overwrite_mode: {
            value: cdktn.stringToHclTerraform(struct!.overwriteMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        posix_permissions: {
            value: cdktn.stringToHclTerraform(struct!.posixPermissions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        preserve_deleted_files: {
            value: cdktn.stringToHclTerraform(struct!.preserveDeletedFiles),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        preserve_devices: {
            value: cdktn.stringToHclTerraform(struct!.preserveDevices),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_descriptor_copy_flags: {
            value: cdktn.stringToHclTerraform(struct!.securityDescriptorCopyFlags),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        task_queueing: {
            value: cdktn.stringToHclTerraform(struct!.taskQueueing),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transfer_mode: {
            value: cdktn.stringToHclTerraform(struct!.transferMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uid: {
            value: cdktn.stringToHclTerraform(struct!.uid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        verify_mode: {
            value: cdktn.stringToHclTerraform(struct!.verifyMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskTaskSchedulePropertyToTerraform(struct?: CcTask.TaskScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccTaskTaskSchedulePropertyToHclTerraform(struct?: CcTask.TaskScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        schedule_expression: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccTaskTagPropertyToTerraform(struct?: CcTask.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTaskTagPropertyToHclTerraform(struct?: CcTask.TagProperty | cdktn.IResolvable): any {
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


export function ccTaskTaskReportConfigDestinationS3PropertyToTerraform(struct?: CcTask.TaskReportConfigDestinationS3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_access_role_arn: cdktn.stringToTerraform(struct!.bucketAccessRoleArn),
        s3_bucket_arn: cdktn.stringToTerraform(struct!.s3BucketArn),
        subdirectory: cdktn.stringToTerraform(struct!.subdirectory),
    }
}


export function ccTaskTaskReportConfigDestinationS3PropertyToHclTerraform(struct?: CcTask.TaskReportConfigDestinationS3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subdirectory: {
            value: cdktn.stringToHclTerraform(struct!.subdirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDestinationPropertyToTerraform(struct?: CcTask.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3: ccTaskTaskReportConfigDestinationS3PropertyToTerraform(struct!.s3),
    }
}


export function ccTaskDestinationPropertyToHclTerraform(struct?: CcTask.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3: {
            value: ccTaskTaskReportConfigDestinationS3PropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "TaskReportConfigDestinationS3Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskDeletedPropertyToTerraform(struct?: CcTask.DeletedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        report_level: cdktn.stringToTerraform(struct!.reportLevel),
    }
}


export function ccTaskDeletedPropertyToHclTerraform(struct?: CcTask.DeletedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        report_level: {
            value: cdktn.stringToHclTerraform(struct!.reportLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskSkippedPropertyToTerraform(struct?: CcTask.SkippedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        report_level: cdktn.stringToTerraform(struct!.reportLevel),
    }
}


export function ccTaskSkippedPropertyToHclTerraform(struct?: CcTask.SkippedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        report_level: {
            value: cdktn.stringToHclTerraform(struct!.reportLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskTransferredPropertyToTerraform(struct?: CcTask.TransferredProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        report_level: cdktn.stringToTerraform(struct!.reportLevel),
    }
}


export function ccTaskTransferredPropertyToHclTerraform(struct?: CcTask.TransferredProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        report_level: {
            value: cdktn.stringToHclTerraform(struct!.reportLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskVerifiedPropertyToTerraform(struct?: CcTask.VerifiedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        report_level: cdktn.stringToTerraform(struct!.reportLevel),
    }
}


export function ccTaskVerifiedPropertyToHclTerraform(struct?: CcTask.VerifiedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        report_level: {
            value: cdktn.stringToHclTerraform(struct!.reportLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskOverridesPropertyToTerraform(struct?: CcTask.OverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deleted: ccTaskDeletedPropertyToTerraform(struct!.deleted),
        skipped: ccTaskSkippedPropertyToTerraform(struct!.skipped),
        transferred: ccTaskTransferredPropertyToTerraform(struct!.transferred),
        verified: ccTaskVerifiedPropertyToTerraform(struct!.verified),
    }
}


export function ccTaskOverridesPropertyToHclTerraform(struct?: CcTask.OverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deleted: {
            value: ccTaskDeletedPropertyToHclTerraform(struct!.deleted),
            isBlock: true,
            type: "struct",
            storageClassType: "DeletedProperty",
        },
        skipped: {
            value: ccTaskSkippedPropertyToHclTerraform(struct!.skipped),
            isBlock: true,
            type: "struct",
            storageClassType: "SkippedProperty",
        },
        transferred: {
            value: ccTaskTransferredPropertyToHclTerraform(struct!.transferred),
            isBlock: true,
            type: "struct",
            storageClassType: "TransferredProperty",
        },
        verified: {
            value: ccTaskVerifiedPropertyToHclTerraform(struct!.verified),
            isBlock: true,
            type: "struct",
            storageClassType: "VerifiedProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTaskTaskReportConfigPropertyToTerraform(struct?: CcTask.TaskReportConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: ccTaskDestinationPropertyToTerraform(struct!.destination),
        object_version_ids: cdktn.stringToTerraform(struct!.objectVersionIds),
        output_type: cdktn.stringToTerraform(struct!.outputType),
        overrides: ccTaskOverridesPropertyToTerraform(struct!.overrides),
        report_level: cdktn.stringToTerraform(struct!.reportLevel),
    }
}


export function ccTaskTaskReportConfigPropertyToHclTerraform(struct?: CcTask.TaskReportConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: ccTaskDestinationPropertyToHclTerraform(struct!.destination),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationProperty",
        },
        object_version_ids: {
            value: cdktn.stringToHclTerraform(struct!.objectVersionIds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_type: {
            value: cdktn.stringToHclTerraform(struct!.outputType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        overrides: {
            value: ccTaskOverridesPropertyToHclTerraform(struct!.overrides),
            isBlock: true,
            type: "struct",
            storageClassType: "OverridesProperty",
        },
        report_level: {
            value: cdktn.stringToHclTerraform(struct!.reportLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTask {
export interface FilterRuleProperty {
    /**
    * The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#filter_type CcTask#filter_type}
    */
    readonly filterType?: string;
    /**
    * A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#value CcTask#value}
    */
    readonly value?: string;
}
export class FilterRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filterType !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterType = this._filterType;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filterType = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filterType = value.filterType;
            this._value = value.value;
        }
    }

    // filter_type - computed: true, optional: true, required: false
    private _filterType?: string; 
    public get filterType() {
        return this.getStringAttribute('filter_type');
    }
    public set filterType(value: string) {
        this._filterType = value;
    }
    public resetFilterType() {
        this._filterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterTypeInput() {
        return this._filterType;
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

export class FilterRulePropertyList extends cdktn.ComplexList {
    public internalValue? : FilterRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterRulePropertyOutputReference {
        return new FilterRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IncludesProperty {
    /**
    * The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#filter_type CcTask#filter_type}
    */
    readonly filterType?: string;
    /**
    * A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#value CcTask#value}
    */
    readonly value?: string;
}
export class IncludesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IncludesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filterType !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterType = this._filterType;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IncludesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filterType = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filterType = value.filterType;
            this._value = value.value;
        }
    }

    // filter_type - computed: true, optional: true, required: false
    private _filterType?: string; 
    public get filterType() {
        return this.getStringAttribute('filter_type');
    }
    public set filterType(value: string) {
        this._filterType = value;
    }
    public resetFilterType() {
        this._filterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterTypeInput() {
        return this._filterType;
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

export class IncludesPropertyList extends cdktn.ComplexList {
    public internalValue? : IncludesProperty[] | cdktn.IResolvable

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
    public get(index: number): IncludesPropertyOutputReference {
        return new IncludesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ManifestConfigSourceS3Property {
    /**
    * Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#bucket_access_role_arn CcTask#bucket_access_role_arn}
    */
    readonly bucketAccessRoleArn?: string;
    /**
    * Specifies the Amazon S3 object key of your manifest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#manifest_object_path CcTask#manifest_object_path}
    */
    readonly manifestObjectPath?: string;
    /**
    * Specifies the object version ID of the manifest that you want DataSync to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#manifest_object_version_id CcTask#manifest_object_version_id}
    */
    readonly manifestObjectVersionId?: string;
    /**
    * Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#s3_bucket_arn CcTask#s3_bucket_arn}
    */
    readonly s3BucketArn?: string;
}
export class ManifestConfigSourceS3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManifestConfigSourceS3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketAccessRoleArn = this._bucketAccessRoleArn;
        }
        if (this._manifestObjectPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestObjectPath = this._manifestObjectPath;
        }
        if (this._manifestObjectVersionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.manifestObjectVersionId = this._manifestObjectVersionId;
        }
        if (this._s3BucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketArn = this._s3BucketArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManifestConfigSourceS3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketAccessRoleArn = undefined;
            this._manifestObjectPath = undefined;
            this._manifestObjectVersionId = undefined;
            this._s3BucketArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketAccessRoleArn = value.bucketAccessRoleArn;
            this._manifestObjectPath = value.manifestObjectPath;
            this._manifestObjectVersionId = value.manifestObjectVersionId;
            this._s3BucketArn = value.s3BucketArn;
        }
    }

    // bucket_access_role_arn - computed: true, optional: true, required: false
    private _bucketAccessRoleArn?: string; 
    public get bucketAccessRoleArn() {
        return this.getStringAttribute('bucket_access_role_arn');
    }
    public set bucketAccessRoleArn(value: string) {
        this._bucketAccessRoleArn = value;
    }
    public resetBucketAccessRoleArn() {
        this._bucketAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketAccessRoleArnInput() {
        return this._bucketAccessRoleArn;
    }

    // manifest_object_path - computed: true, optional: true, required: false
    private _manifestObjectPath?: string; 
    public get manifestObjectPath() {
        return this.getStringAttribute('manifest_object_path');
    }
    public set manifestObjectPath(value: string) {
        this._manifestObjectPath = value;
    }
    public resetManifestObjectPath() {
        this._manifestObjectPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestObjectPathInput() {
        return this._manifestObjectPath;
    }

    // manifest_object_version_id - computed: true, optional: true, required: false
    private _manifestObjectVersionId?: string; 
    public get manifestObjectVersionId() {
        return this.getStringAttribute('manifest_object_version_id');
    }
    public set manifestObjectVersionId(value: string) {
        this._manifestObjectVersionId = value;
    }
    public resetManifestObjectVersionId() {
        this._manifestObjectVersionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestObjectVersionIdInput() {
        return this._manifestObjectVersionId;
    }

    // s3_bucket_arn - computed: true, optional: true, required: false
    private _s3BucketArn?: string; 
    public get s3BucketArn() {
        return this.getStringAttribute('s3_bucket_arn');
    }
    public set s3BucketArn(value: string) {
        this._s3BucketArn = value;
    }
    public resetS3BucketArn() {
        this._s3BucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketArnInput() {
        return this._s3BucketArn;
    }
}
export interface SourceProperty {
    /**
    * Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#s3 CcTask#s3}
    */
    readonly s3?: ManifestConfigSourceS3Property;
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
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3.internalValue = value.s3;
        }
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new ManifestConfigSourceS3PropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: ManifestConfigSourceS3Property) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}
export interface ManifestConfigProperty {
    /**
    * Specifies what DataSync uses the manifest for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#action CcTask#action}
    */
    readonly action?: string;
    /**
    * Specifies the file format of your manifest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#format CcTask#format}
    */
    readonly format?: string;
    /**
    * Specifies the manifest that you want DataSync to use and where it's hosted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#source CcTask#source}
    */
    readonly source?: SourceProperty;
}
export class ManifestConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManifestConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManifestConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._format = undefined;
            this._source.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._format = value.format;
            this._source.internalValue = value.source;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
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
}
export interface OptionsProperty {
    /**
    * A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#atime CcTask#atime}
    */
    readonly atime?: string;
    /**
    * A value that limits the bandwidth used by AWS DataSync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#bytes_per_second CcTask#bytes_per_second}
    */
    readonly bytesPerSecond?: number;
    /**
    * The group ID (GID) of the file's owners.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#gid CcTask#gid}
    */
    readonly gid?: string;
    /**
    * A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#log_level CcTask#log_level}
    */
    readonly logLevel?: string;
    /**
    * A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#mtime CcTask#mtime}
    */
    readonly mtime?: string;
    /**
    * A value that determines whether object tags should be read from the source object store and written to the destination object store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#object_tags CcTask#object_tags}
    */
    readonly objectTags?: string;
    /**
    * A value that determines whether files at the destination should be overwritten or preserved when copying files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#overwrite_mode CcTask#overwrite_mode}
    */
    readonly overwriteMode?: string;
    /**
    * A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#posix_permissions CcTask#posix_permissions}
    */
    readonly posixPermissions?: string;
    /**
    * A value that specifies whether files in the destination that don't exist in the source file system should be preserved.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#preserve_deleted_files CcTask#preserve_deleted_files}
    */
    readonly preserveDeletedFiles?: string;
    /**
    * A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#preserve_devices CcTask#preserve_devices}
    */
    readonly preserveDevices?: string;
    /**
    * A value that determines which components of the SMB security descriptor are copied during transfer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#security_descriptor_copy_flags CcTask#security_descriptor_copy_flags}
    */
    readonly securityDescriptorCopyFlags?: string;
    /**
    * A value that determines whether tasks should be queued before executing the tasks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#task_queueing CcTask#task_queueing}
    */
    readonly taskQueueing?: string;
    /**
    * A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#transfer_mode CcTask#transfer_mode}
    */
    readonly transferMode?: string;
    /**
    * The user ID (UID) of the file's owner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#uid CcTask#uid}
    */
    readonly uid?: string;
    /**
    * A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#verify_mode CcTask#verify_mode}
    */
    readonly verifyMode?: string;
}
export class OptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._atime !== undefined) {
            hasAnyValues = true;
            internalValueResult.atime = this._atime;
        }
        if (this._bytesPerSecond !== undefined) {
            hasAnyValues = true;
            internalValueResult.bytesPerSecond = this._bytesPerSecond;
        }
        if (this._gid !== undefined) {
            hasAnyValues = true;
            internalValueResult.gid = this._gid;
        }
        if (this._logLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        if (this._mtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.mtime = this._mtime;
        }
        if (this._objectTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectTags = this._objectTags;
        }
        if (this._overwriteMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.overwriteMode = this._overwriteMode;
        }
        if (this._posixPermissions !== undefined) {
            hasAnyValues = true;
            internalValueResult.posixPermissions = this._posixPermissions;
        }
        if (this._preserveDeletedFiles !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveDeletedFiles = this._preserveDeletedFiles;
        }
        if (this._preserveDevices !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveDevices = this._preserveDevices;
        }
        if (this._securityDescriptorCopyFlags !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityDescriptorCopyFlags = this._securityDescriptorCopyFlags;
        }
        if (this._taskQueueing !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskQueueing = this._taskQueueing;
        }
        if (this._transferMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.transferMode = this._transferMode;
        }
        if (this._uid !== undefined) {
            hasAnyValues = true;
            internalValueResult.uid = this._uid;
        }
        if (this._verifyMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.verifyMode = this._verifyMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._atime = undefined;
            this._bytesPerSecond = undefined;
            this._gid = undefined;
            this._logLevel = undefined;
            this._mtime = undefined;
            this._objectTags = undefined;
            this._overwriteMode = undefined;
            this._posixPermissions = undefined;
            this._preserveDeletedFiles = undefined;
            this._preserveDevices = undefined;
            this._securityDescriptorCopyFlags = undefined;
            this._taskQueueing = undefined;
            this._transferMode = undefined;
            this._uid = undefined;
            this._verifyMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._atime = value.atime;
            this._bytesPerSecond = value.bytesPerSecond;
            this._gid = value.gid;
            this._logLevel = value.logLevel;
            this._mtime = value.mtime;
            this._objectTags = value.objectTags;
            this._overwriteMode = value.overwriteMode;
            this._posixPermissions = value.posixPermissions;
            this._preserveDeletedFiles = value.preserveDeletedFiles;
            this._preserveDevices = value.preserveDevices;
            this._securityDescriptorCopyFlags = value.securityDescriptorCopyFlags;
            this._taskQueueing = value.taskQueueing;
            this._transferMode = value.transferMode;
            this._uid = value.uid;
            this._verifyMode = value.verifyMode;
        }
    }

    // atime - computed: true, optional: true, required: false
    private _atime?: string; 
    public get atime() {
        return this.getStringAttribute('atime');
    }
    public set atime(value: string) {
        this._atime = value;
    }
    public resetAtime() {
        this._atime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get atimeInput() {
        return this._atime;
    }

    // bytes_per_second - computed: true, optional: true, required: false
    private _bytesPerSecond?: number; 
    public get bytesPerSecond() {
        return this.getNumberAttribute('bytes_per_second');
    }
    public set bytesPerSecond(value: number) {
        this._bytesPerSecond = value;
    }
    public resetBytesPerSecond() {
        this._bytesPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bytesPerSecondInput() {
        return this._bytesPerSecond;
    }

    // gid - computed: true, optional: true, required: false
    private _gid?: string; 
    public get gid() {
        return this.getStringAttribute('gid');
    }
    public set gid(value: string) {
        this._gid = value;
    }
    public resetGid() {
        this._gid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gidInput() {
        return this._gid;
    }

    // log_level - computed: true, optional: true, required: false
    private _logLevel?: string; 
    public get logLevel() {
        return this.getStringAttribute('log_level');
    }
    public set logLevel(value: string) {
        this._logLevel = value;
    }
    public resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logLevelInput() {
        return this._logLevel;
    }

    // mtime - computed: true, optional: true, required: false
    private _mtime?: string; 
    public get mtime() {
        return this.getStringAttribute('mtime');
    }
    public set mtime(value: string) {
        this._mtime = value;
    }
    public resetMtime() {
        this._mtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mtimeInput() {
        return this._mtime;
    }

    // object_tags - computed: true, optional: true, required: false
    private _objectTags?: string; 
    public get objectTags() {
        return this.getStringAttribute('object_tags');
    }
    public set objectTags(value: string) {
        this._objectTags = value;
    }
    public resetObjectTags() {
        this._objectTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectTagsInput() {
        return this._objectTags;
    }

    // overwrite_mode - computed: true, optional: true, required: false
    private _overwriteMode?: string; 
    public get overwriteMode() {
        return this.getStringAttribute('overwrite_mode');
    }
    public set overwriteMode(value: string) {
        this._overwriteMode = value;
    }
    public resetOverwriteMode() {
        this._overwriteMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overwriteModeInput() {
        return this._overwriteMode;
    }

    // posix_permissions - computed: true, optional: true, required: false
    private _posixPermissions?: string; 
    public get posixPermissions() {
        return this.getStringAttribute('posix_permissions');
    }
    public set posixPermissions(value: string) {
        this._posixPermissions = value;
    }
    public resetPosixPermissions() {
        this._posixPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get posixPermissionsInput() {
        return this._posixPermissions;
    }

    // preserve_deleted_files - computed: true, optional: true, required: false
    private _preserveDeletedFiles?: string; 
    public get preserveDeletedFiles() {
        return this.getStringAttribute('preserve_deleted_files');
    }
    public set preserveDeletedFiles(value: string) {
        this._preserveDeletedFiles = value;
    }
    public resetPreserveDeletedFiles() {
        this._preserveDeletedFiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveDeletedFilesInput() {
        return this._preserveDeletedFiles;
    }

    // preserve_devices - computed: true, optional: true, required: false
    private _preserveDevices?: string; 
    public get preserveDevices() {
        return this.getStringAttribute('preserve_devices');
    }
    public set preserveDevices(value: string) {
        this._preserveDevices = value;
    }
    public resetPreserveDevices() {
        this._preserveDevices = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveDevicesInput() {
        return this._preserveDevices;
    }

    // security_descriptor_copy_flags - computed: true, optional: true, required: false
    private _securityDescriptorCopyFlags?: string; 
    public get securityDescriptorCopyFlags() {
        return this.getStringAttribute('security_descriptor_copy_flags');
    }
    public set securityDescriptorCopyFlags(value: string) {
        this._securityDescriptorCopyFlags = value;
    }
    public resetSecurityDescriptorCopyFlags() {
        this._securityDescriptorCopyFlags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityDescriptorCopyFlagsInput() {
        return this._securityDescriptorCopyFlags;
    }

    // task_queueing - computed: true, optional: true, required: false
    private _taskQueueing?: string; 
    public get taskQueueing() {
        return this.getStringAttribute('task_queueing');
    }
    public set taskQueueing(value: string) {
        this._taskQueueing = value;
    }
    public resetTaskQueueing() {
        this._taskQueueing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskQueueingInput() {
        return this._taskQueueing;
    }

    // transfer_mode - computed: true, optional: true, required: false
    private _transferMode?: string; 
    public get transferMode() {
        return this.getStringAttribute('transfer_mode');
    }
    public set transferMode(value: string) {
        this._transferMode = value;
    }
    public resetTransferMode() {
        this._transferMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transferModeInput() {
        return this._transferMode;
    }

    // uid - computed: true, optional: true, required: false
    private _uid?: string; 
    public get uid() {
        return this.getStringAttribute('uid');
    }
    public set uid(value: string) {
        this._uid = value;
    }
    public resetUid() {
        this._uid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uidInput() {
        return this._uid;
    }

    // verify_mode - computed: true, optional: true, required: false
    private _verifyMode?: string; 
    public get verifyMode() {
        return this.getStringAttribute('verify_mode');
    }
    public set verifyMode(value: string) {
        this._verifyMode = value;
    }
    public resetVerifyMode() {
        this._verifyMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verifyModeInput() {
        return this._verifyMode;
    }
}
export interface TaskScheduleProperty {
    /**
    * A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#schedule_expression CcTask#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * Specifies status of a schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#status CcTask#status}
    */
    readonly status?: string;
}
export class TaskSchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TaskScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scheduleExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TaskScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scheduleExpression = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scheduleExpression = value.scheduleExpression;
            this._status = value.status;
        }
    }

    // schedule_expression - computed: true, optional: true, required: false
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
        this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
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
export interface TagProperty {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#key CcTask#key}
    */
    readonly key?: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#value CcTask#value}
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
export interface TaskReportConfigDestinationS3Property {
    /**
    * Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#bucket_access_role_arn CcTask#bucket_access_role_arn}
    */
    readonly bucketAccessRoleArn?: string;
    /**
    * Specifies the ARN of the S3 bucket where Datasync uploads your report.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#s3_bucket_arn CcTask#s3_bucket_arn}
    */
    readonly s3BucketArn?: string;
    /**
    * Specifies a bucket prefix for your report.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#subdirectory CcTask#subdirectory}
    */
    readonly subdirectory?: string;
}
export class TaskReportConfigDestinationS3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TaskReportConfigDestinationS3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketAccessRoleArn = this._bucketAccessRoleArn;
        }
        if (this._s3BucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketArn = this._s3BucketArn;
        }
        if (this._subdirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.subdirectory = this._subdirectory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TaskReportConfigDestinationS3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketAccessRoleArn = undefined;
            this._s3BucketArn = undefined;
            this._subdirectory = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketAccessRoleArn = value.bucketAccessRoleArn;
            this._s3BucketArn = value.s3BucketArn;
            this._subdirectory = value.subdirectory;
        }
    }

    // bucket_access_role_arn - computed: true, optional: true, required: false
    private _bucketAccessRoleArn?: string; 
    public get bucketAccessRoleArn() {
        return this.getStringAttribute('bucket_access_role_arn');
    }
    public set bucketAccessRoleArn(value: string) {
        this._bucketAccessRoleArn = value;
    }
    public resetBucketAccessRoleArn() {
        this._bucketAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketAccessRoleArnInput() {
        return this._bucketAccessRoleArn;
    }

    // s3_bucket_arn - computed: true, optional: true, required: false
    private _s3BucketArn?: string; 
    public get s3BucketArn() {
        return this.getStringAttribute('s3_bucket_arn');
    }
    public set s3BucketArn(value: string) {
        this._s3BucketArn = value;
    }
    public resetS3BucketArn() {
        this._s3BucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketArnInput() {
        return this._s3BucketArn;
    }

    // subdirectory - computed: true, optional: true, required: false
    private _subdirectory?: string; 
    public get subdirectory() {
        return this.getStringAttribute('subdirectory');
    }
    public set subdirectory(value: string) {
        this._subdirectory = value;
    }
    public resetSubdirectory() {
        this._subdirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subdirectoryInput() {
        return this._subdirectory;
    }
}
export interface DestinationProperty {
    /**
    * Specifies the Amazon S3 bucket where DataSync uploads your task report.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#s3 CcTask#s3}
    */
    readonly s3?: TaskReportConfigDestinationS3Property;
}
export class DestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3.internalValue = value.s3;
        }
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new TaskReportConfigDestinationS3PropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: TaskReportConfigDestinationS3Property) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}
export interface DeletedProperty {
    /**
    * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#report_level CcTask#report_level}
    */
    readonly reportLevel?: string;
}
export class DeletedPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeletedProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reportLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportLevel = this._reportLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeletedProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reportLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reportLevel = value.reportLevel;
        }
    }

    // report_level - computed: true, optional: true, required: false
    private _reportLevel?: string; 
    public get reportLevel() {
        return this.getStringAttribute('report_level');
    }
    public set reportLevel(value: string) {
        this._reportLevel = value;
    }
    public resetReportLevel() {
        this._reportLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportLevelInput() {
        return this._reportLevel;
    }
}
export interface SkippedProperty {
    /**
    * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#report_level CcTask#report_level}
    */
    readonly reportLevel?: string;
}
export class SkippedPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SkippedProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reportLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportLevel = this._reportLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SkippedProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reportLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reportLevel = value.reportLevel;
        }
    }

    // report_level - computed: true, optional: true, required: false
    private _reportLevel?: string; 
    public get reportLevel() {
        return this.getStringAttribute('report_level');
    }
    public set reportLevel(value: string) {
        this._reportLevel = value;
    }
    public resetReportLevel() {
        this._reportLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportLevelInput() {
        return this._reportLevel;
    }
}
export interface TransferredProperty {
    /**
    * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#report_level CcTask#report_level}
    */
    readonly reportLevel?: string;
}
export class TransferredPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransferredProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reportLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportLevel = this._reportLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransferredProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reportLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reportLevel = value.reportLevel;
        }
    }

    // report_level - computed: true, optional: true, required: false
    private _reportLevel?: string; 
    public get reportLevel() {
        return this.getStringAttribute('report_level');
    }
    public set reportLevel(value: string) {
        this._reportLevel = value;
    }
    public resetReportLevel() {
        this._reportLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportLevelInput() {
        return this._reportLevel;
    }
}
export interface VerifiedProperty {
    /**
    * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#report_level CcTask#report_level}
    */
    readonly reportLevel?: string;
}
export class VerifiedPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VerifiedProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reportLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportLevel = this._reportLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VerifiedProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reportLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reportLevel = value.reportLevel;
        }
    }

    // report_level - computed: true, optional: true, required: false
    private _reportLevel?: string; 
    public get reportLevel() {
        return this.getStringAttribute('report_level');
    }
    public set reportLevel(value: string) {
        this._reportLevel = value;
    }
    public resetReportLevel() {
        this._reportLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportLevelInput() {
        return this._reportLevel;
    }
}
export interface OverridesProperty {
    /**
    * Specifies the level of reporting for the files, objects, and directories that Datasync attempted to delete in your destination location. This only applies if you configure your task to delete data in the destination that isn't in the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#deleted CcTask#deleted}
    */
    readonly deleted?: DeletedProperty;
    /**
    * Specifies the level of reporting for the files, objects, and directories that Datasync attempted to skip during your transfer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#skipped CcTask#skipped}
    */
    readonly skipped?: SkippedProperty;
    /**
    * Specifies the level of reporting for the files, objects, and directories that Datasync attempted to transfer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#transferred CcTask#transferred}
    */
    readonly transferred?: TransferredProperty;
    /**
    * Specifies the level of reporting for the files, objects, and directories that Datasync attempted to verify at the end of your transfer. This only applies if you configure your task to verify data during and after the transfer (which Datasync does by default)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#verified CcTask#verified}
    */
    readonly verified?: VerifiedProperty;
}
export class OverridesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OverridesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deleted?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleted = this._deleted?.internalValue;
        }
        if (this._skipped?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.skipped = this._skipped?.internalValue;
        }
        if (this._transferred?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transferred = this._transferred?.internalValue;
        }
        if (this._verified?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.verified = this._verified?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverridesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deleted.internalValue = undefined;
            this._skipped.internalValue = undefined;
            this._transferred.internalValue = undefined;
            this._verified.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deleted.internalValue = value.deleted;
            this._skipped.internalValue = value.skipped;
            this._transferred.internalValue = value.transferred;
            this._verified.internalValue = value.verified;
        }
    }

    // deleted - computed: true, optional: true, required: false
    private _deleted = new DeletedPropertyOutputReference(this, "deleted");
    public get deleted() {
        return this._deleted;
    }
    public putDeleted(value: DeletedProperty) {
        this._deleted.internalValue = value;
    }
    public resetDeleted() {
        this._deleted.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletedInput() {
        return this._deleted.internalValue;
    }

    // skipped - computed: true, optional: true, required: false
    private _skipped = new SkippedPropertyOutputReference(this, "skipped");
    public get skipped() {
        return this._skipped;
    }
    public putSkipped(value: SkippedProperty) {
        this._skipped.internalValue = value;
    }
    public resetSkipped() {
        this._skipped.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skippedInput() {
        return this._skipped.internalValue;
    }

    // transferred - computed: true, optional: true, required: false
    private _transferred = new TransferredPropertyOutputReference(this, "transferred");
    public get transferred() {
        return this._transferred;
    }
    public putTransferred(value: TransferredProperty) {
        this._transferred.internalValue = value;
    }
    public resetTransferred() {
        this._transferred.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transferredInput() {
        return this._transferred.internalValue;
    }

    // verified - computed: true, optional: true, required: false
    private _verified = new VerifiedPropertyOutputReference(this, "verified");
    public get verified() {
        return this._verified;
    }
    public putVerified(value: VerifiedProperty) {
        this._verified.internalValue = value;
    }
    public resetVerified() {
        this._verified.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verifiedInput() {
        return this._verified.internalValue;
    }
}
export interface TaskReportConfigProperty {
    /**
    * Specifies where DataSync uploads your task report.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#destination CcTask#destination}
    */
    readonly destination?: DestinationProperty;
    /**
    * Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#object_version_ids CcTask#object_version_ids}
    */
    readonly objectVersionIds?: string;
    /**
    * Specifies the type of task report that you want.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#output_type CcTask#output_type}
    */
    readonly outputType?: string;
    /**
    * Customizes the reporting level for aspects of your task report. For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that Datasync attempted to delete in your destination location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#overrides CcTask#overrides}
    */
    readonly overrides?: OverridesProperty;
    /**
    * Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datasync_task#report_level CcTask#report_level}
    */
    readonly reportLevel?: string;
}
export class TaskReportConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TaskReportConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        if (this._objectVersionIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectVersionIds = this._objectVersionIds;
        }
        if (this._outputType !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputType = this._outputType;
        }
        if (this._overrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrides = this._overrides?.internalValue;
        }
        if (this._reportLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportLevel = this._reportLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TaskReportConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination.internalValue = undefined;
            this._objectVersionIds = undefined;
            this._outputType = undefined;
            this._overrides.internalValue = undefined;
            this._reportLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination.internalValue = value.destination;
            this._objectVersionIds = value.objectVersionIds;
            this._outputType = value.outputType;
            this._overrides.internalValue = value.overrides;
            this._reportLevel = value.reportLevel;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination = new DestinationPropertyOutputReference(this, "destination");
    public get destination() {
        return this._destination;
    }
    public putDestination(value: DestinationProperty) {
        this._destination.internalValue = value;
    }
    public resetDestination() {
        this._destination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination.internalValue;
    }

    // object_version_ids - computed: true, optional: true, required: false
    private _objectVersionIds?: string; 
    public get objectVersionIds() {
        return this.getStringAttribute('object_version_ids');
    }
    public set objectVersionIds(value: string) {
        this._objectVersionIds = value;
    }
    public resetObjectVersionIds() {
        this._objectVersionIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectVersionIdsInput() {
        return this._objectVersionIds;
    }

    // output_type - computed: true, optional: true, required: false
    private _outputType?: string; 
    public get outputType() {
        return this.getStringAttribute('output_type');
    }
    public set outputType(value: string) {
        this._outputType = value;
    }
    public resetOutputType() {
        this._outputType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputTypeInput() {
        return this._outputType;
    }

    // overrides - computed: true, optional: true, required: false
    private _overrides = new OverridesPropertyOutputReference(this, "overrides");
    public get overrides() {
        return this._overrides;
    }
    public putOverrides(value: OverridesProperty) {
        this._overrides.internalValue = value;
    }
    public resetOverrides() {
        this._overrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overridesInput() {
        return this._overrides.internalValue;
    }

    // report_level - computed: true, optional: true, required: false
    private _reportLevel?: string; 
    public get reportLevel() {
        return this.getStringAttribute('report_level');
    }
    public set reportLevel(value: string) {
        this._reportLevel = value;
    }
    public resetReportLevel() {
        this._reportLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportLevelInput() {
        return this._reportLevel;
    }
}
}
