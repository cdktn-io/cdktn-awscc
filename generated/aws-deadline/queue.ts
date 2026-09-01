// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQueueProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#allowed_storage_profile_ids CcQueue#allowed_storage_profile_ids}
    */
    readonly allowedStorageProfileIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#default_budget_action CcQueue#default_budget_action}
    */
    readonly defaultBudgetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#description CcQueue#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#display_name CcQueue#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#farm_id CcQueue#farm_id}
    */
    readonly farmId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#job_attachment_settings CcQueue#job_attachment_settings}
    */
    readonly jobAttachmentSettings?: CcQueue.JobAttachmentSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#job_run_as_user CcQueue#job_run_as_user}
    */
    readonly jobRunAsUser?: CcQueue.JobRunAsUserProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#required_file_system_location_names CcQueue#required_file_system_location_names}
    */
    readonly requiredFileSystemLocationNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#role_arn CcQueue#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#scheduling_configuration CcQueue#scheduling_configuration}
    */
    readonly schedulingConfiguration?: CcQueue.SchedulingConfigurationProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#tags CcQueue#tags}
    */
    readonly tags?: CcQueue.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue awscc_deadline_queue}
*/
export class CcQueue extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_deadline_queue";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQueue resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQueue to import
    * @param importFromId The id of the existing CcQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQueue to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_deadline_queue", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue awscc_deadline_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQueueProps
    */
    public constructor(scope: Construct, id: string, config: CcQueueProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_deadline_queue',
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
        this._allowedStorageProfileIds = config.allowedStorageProfileIds;
        this._defaultBudgetAction = config.defaultBudgetAction;
        this._description = config.description;
        this._displayName = config.displayName;
        this._farmId = config.farmId;
        this._jobAttachmentSettings.internalValue = config.jobAttachmentSettings;
        this._jobRunAsUser.internalValue = config.jobRunAsUser;
        this._requiredFileSystemLocationNames = config.requiredFileSystemLocationNames;
        this._roleArn = config.roleArn;
        this._schedulingConfiguration.internalValue = config.schedulingConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_storage_profile_ids - computed: true, optional: true, required: false
    private _allowedStorageProfileIds?: string[]; 
    public get allowedStorageProfileIds() {
        return this.getListAttribute('allowed_storage_profile_ids');
    }
    public set allowedStorageProfileIds(value: string[]) {
        this._allowedStorageProfileIds = value;
    }
    public resetAllowedStorageProfileIds() {
        this._allowedStorageProfileIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedStorageProfileIdsInput() {
        return this._allowedStorageProfileIds;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // default_budget_action - computed: true, optional: true, required: false
    private _defaultBudgetAction?: string; 
    public get defaultBudgetAction() {
        return this.getStringAttribute('default_budget_action');
    }
    public set defaultBudgetAction(value: string) {
        this._defaultBudgetAction = value;
    }
    public resetDefaultBudgetAction() {
        this._defaultBudgetAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultBudgetActionInput() {
        return this._defaultBudgetAction;
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

    // display_name - computed: false, optional: false, required: true
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // job_attachment_settings - computed: true, optional: true, required: false
    private _jobAttachmentSettings = new CcQueue.JobAttachmentSettingsPropertyOutputReference(this, "job_attachment_settings");
    public get jobAttachmentSettings() {
        return this._jobAttachmentSettings;
    }
    public putJobAttachmentSettings(value: CcQueue.JobAttachmentSettingsProperty) {
        this._jobAttachmentSettings.internalValue = value;
    }
    public resetJobAttachmentSettings() {
        this._jobAttachmentSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobAttachmentSettingsInput() {
        return this._jobAttachmentSettings.internalValue;
    }

    // job_run_as_user - computed: true, optional: true, required: false
    private _jobRunAsUser = new CcQueue.JobRunAsUserPropertyOutputReference(this, "job_run_as_user");
    public get jobRunAsUser() {
        return this._jobRunAsUser;
    }
    public putJobRunAsUser(value: CcQueue.JobRunAsUserProperty) {
        this._jobRunAsUser.internalValue = value;
    }
    public resetJobRunAsUser() {
        this._jobRunAsUser.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobRunAsUserInput() {
        return this._jobRunAsUser.internalValue;
    }

    // queue_id - computed: true, optional: false, required: false
    public get queueId() {
        return this.getStringAttribute('queue_id');
    }

    // required_file_system_location_names - computed: true, optional: true, required: false
    private _requiredFileSystemLocationNames?: string[]; 
    public get requiredFileSystemLocationNames() {
        return this.getListAttribute('required_file_system_location_names');
    }
    public set requiredFileSystemLocationNames(value: string[]) {
        this._requiredFileSystemLocationNames = value;
    }
    public resetRequiredFileSystemLocationNames() {
        this._requiredFileSystemLocationNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredFileSystemLocationNamesInput() {
        return this._requiredFileSystemLocationNames;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // scheduling_configuration - computed: true, optional: true, required: false
    private _schedulingConfiguration = new CcQueue.SchedulingConfigurationPropertyOutputReference(this, "scheduling_configuration");
    public get schedulingConfiguration() {
        return this._schedulingConfiguration;
    }
    public putSchedulingConfiguration(value: CcQueue.SchedulingConfigurationProperty) {
        this._schedulingConfiguration.internalValue = value;
    }
    public resetSchedulingConfiguration() {
        this._schedulingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulingConfigurationInput() {
        return this._schedulingConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcQueue.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcQueue.TagProperty[] | cdktn.IResolvable) {
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
            allowed_storage_profile_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedStorageProfileIds),
            default_budget_action: cdktn.stringToTerraform(this._defaultBudgetAction),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            farm_id: cdktn.stringToTerraform(this._farmId),
            job_attachment_settings: ccQueueJobAttachmentSettingsPropertyToTerraform(this._jobAttachmentSettings.internalValue),
            job_run_as_user: ccQueueJobRunAsUserPropertyToTerraform(this._jobRunAsUser.internalValue),
            required_file_system_location_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._requiredFileSystemLocationNames),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            scheduling_configuration: ccQueueSchedulingConfigurationPropertyToTerraform(this._schedulingConfiguration.internalValue),
            tags: cdktn.listMapper(ccQueueTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allowed_storage_profile_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedStorageProfileIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            default_budget_action: {
                value: cdktn.stringToHclTerraform(this._defaultBudgetAction),
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
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            farm_id: {
                value: cdktn.stringToHclTerraform(this._farmId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_attachment_settings: {
                value: ccQueueJobAttachmentSettingsPropertyToHclTerraform(this._jobAttachmentSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcQueue.JobAttachmentSettingsProperty",
            },
            job_run_as_user: {
                value: ccQueueJobRunAsUserPropertyToHclTerraform(this._jobRunAsUser.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcQueue.JobRunAsUserProperty",
            },
            required_file_system_location_names: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._requiredFileSystemLocationNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scheduling_configuration: {
                value: ccQueueSchedulingConfigurationPropertyToHclTerraform(this._schedulingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcQueue.SchedulingConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccQueueTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcQueue.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccQueueJobAttachmentSettingsPropertyToTerraform(struct?: CcQueue.JobAttachmentSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        root_prefix: cdktn.stringToTerraform(struct!.rootPrefix),
        s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
    }
}


export function ccQueueJobAttachmentSettingsPropertyToHclTerraform(struct?: CcQueue.JobAttachmentSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        root_prefix: {
            value: cdktn.stringToHclTerraform(struct!.rootPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueuePosixUserPropertyToTerraform(struct?: CcQueue.PosixUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group: cdktn.stringToTerraform(struct!.group),
        user: cdktn.stringToTerraform(struct!.user),
    }
}


export function ccQueuePosixUserPropertyToHclTerraform(struct?: CcQueue.PosixUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group: {
            value: cdktn.stringToHclTerraform(struct!.group),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user: {
            value: cdktn.stringToHclTerraform(struct!.user),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueWindowsUserPropertyToTerraform(struct?: CcQueue.WindowsUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        password_arn: cdktn.stringToTerraform(struct!.passwordArn),
        user: cdktn.stringToTerraform(struct!.user),
    }
}


export function ccQueueWindowsUserPropertyToHclTerraform(struct?: CcQueue.WindowsUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        password_arn: {
            value: cdktn.stringToHclTerraform(struct!.passwordArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user: {
            value: cdktn.stringToHclTerraform(struct!.user),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueJobRunAsUserPropertyToTerraform(struct?: CcQueue.JobRunAsUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        posix: ccQueuePosixUserPropertyToTerraform(struct!.posix),
        run_as: cdktn.stringToTerraform(struct!.runAs),
        windows: ccQueueWindowsUserPropertyToTerraform(struct!.windows),
    }
}


export function ccQueueJobRunAsUserPropertyToHclTerraform(struct?: CcQueue.JobRunAsUserProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        posix: {
            value: ccQueuePosixUserPropertyToHclTerraform(struct!.posix),
            isBlock: true,
            type: "struct",
            storageClassType: "PosixUserProperty",
        },
        run_as: {
            value: cdktn.stringToHclTerraform(struct!.runAs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        windows: {
            value: ccQueueWindowsUserPropertyToHclTerraform(struct!.windows),
            isBlock: true,
            type: "struct",
            storageClassType: "WindowsUserProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueuePriorityBalancedSchedulingConfigurationPropertyToTerraform(struct?: CcQueue.PriorityBalancedSchedulingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rendering_task_buffer: cdktn.numberToTerraform(struct!.renderingTaskBuffer),
    }
}


export function ccQueuePriorityBalancedSchedulingConfigurationPropertyToHclTerraform(struct?: CcQueue.PriorityBalancedSchedulingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rendering_task_buffer: {
            value: cdktn.numberToHclTerraform(struct!.renderingTaskBuffer),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueSchedulingMaxPriorityOverridePropertyToTerraform(struct?: CcQueue.SchedulingMaxPriorityOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        always_schedule_first: cdktn.stringToTerraform(struct!.alwaysScheduleFirst),
    }
}


export function ccQueueSchedulingMaxPriorityOverridePropertyToHclTerraform(struct?: CcQueue.SchedulingMaxPriorityOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        always_schedule_first: {
            value: cdktn.stringToHclTerraform(struct!.alwaysScheduleFirst),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueSchedulingMinPriorityOverridePropertyToTerraform(struct?: CcQueue.SchedulingMinPriorityOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        always_schedule_last: cdktn.stringToTerraform(struct!.alwaysScheduleLast),
    }
}


export function ccQueueSchedulingMinPriorityOverridePropertyToHclTerraform(struct?: CcQueue.SchedulingMinPriorityOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        always_schedule_last: {
            value: cdktn.stringToHclTerraform(struct!.alwaysScheduleLast),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueWeightedBalancedSchedulingConfigurationPropertyToTerraform(struct?: CcQueue.WeightedBalancedSchedulingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_weight: cdktn.numberToTerraform(struct!.errorWeight),
        max_priority_override: ccQueueSchedulingMaxPriorityOverridePropertyToTerraform(struct!.maxPriorityOverride),
        min_priority_override: ccQueueSchedulingMinPriorityOverridePropertyToTerraform(struct!.minPriorityOverride),
        priority_weight: cdktn.numberToTerraform(struct!.priorityWeight),
        rendering_task_buffer: cdktn.numberToTerraform(struct!.renderingTaskBuffer),
        rendering_task_weight: cdktn.numberToTerraform(struct!.renderingTaskWeight),
        submission_time_weight: cdktn.numberToTerraform(struct!.submissionTimeWeight),
    }
}


export function ccQueueWeightedBalancedSchedulingConfigurationPropertyToHclTerraform(struct?: CcQueue.WeightedBalancedSchedulingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_weight: {
            value: cdktn.numberToHclTerraform(struct!.errorWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_priority_override: {
            value: ccQueueSchedulingMaxPriorityOverridePropertyToHclTerraform(struct!.maxPriorityOverride),
            isBlock: true,
            type: "struct",
            storageClassType: "SchedulingMaxPriorityOverrideProperty",
        },
        min_priority_override: {
            value: ccQueueSchedulingMinPriorityOverridePropertyToHclTerraform(struct!.minPriorityOverride),
            isBlock: true,
            type: "struct",
            storageClassType: "SchedulingMinPriorityOverrideProperty",
        },
        priority_weight: {
            value: cdktn.numberToHclTerraform(struct!.priorityWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rendering_task_buffer: {
            value: cdktn.numberToHclTerraform(struct!.renderingTaskBuffer),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rendering_task_weight: {
            value: cdktn.numberToHclTerraform(struct!.renderingTaskWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        submission_time_weight: {
            value: cdktn.numberToHclTerraform(struct!.submissionTimeWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueSchedulingConfigurationPropertyToTerraform(struct?: CcQueue.SchedulingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        priority_balanced: ccQueuePriorityBalancedSchedulingConfigurationPropertyToTerraform(struct!.priorityBalanced),
        priority_fifo: cdktn.stringToTerraform(struct!.priorityFifo),
        weighted_balanced: ccQueueWeightedBalancedSchedulingConfigurationPropertyToTerraform(struct!.weightedBalanced),
    }
}


export function ccQueueSchedulingConfigurationPropertyToHclTerraform(struct?: CcQueue.SchedulingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        priority_balanced: {
            value: ccQueuePriorityBalancedSchedulingConfigurationPropertyToHclTerraform(struct!.priorityBalanced),
            isBlock: true,
            type: "struct",
            storageClassType: "PriorityBalancedSchedulingConfigurationProperty",
        },
        priority_fifo: {
            value: cdktn.stringToHclTerraform(struct!.priorityFifo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weighted_balanced: {
            value: ccQueueWeightedBalancedSchedulingConfigurationPropertyToHclTerraform(struct!.weightedBalanced),
            isBlock: true,
            type: "struct",
            storageClassType: "WeightedBalancedSchedulingConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccQueueTagPropertyToTerraform(struct?: CcQueue.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccQueueTagPropertyToHclTerraform(struct?: CcQueue.TagProperty | cdktn.IResolvable): any {
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


export namespace CcQueue {
export interface JobAttachmentSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#root_prefix CcQueue#root_prefix}
    */
    readonly rootPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#s3_bucket_name CcQueue#s3_bucket_name}
    */
    readonly s3BucketName?: string;
}
export class JobAttachmentSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JobAttachmentSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rootPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.rootPrefix = this._rootPrefix;
        }
        if (this._s3BucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketName = this._s3BucketName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JobAttachmentSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rootPrefix = undefined;
            this._s3BucketName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rootPrefix = value.rootPrefix;
            this._s3BucketName = value.s3BucketName;
        }
    }

    // root_prefix - computed: true, optional: true, required: false
    private _rootPrefix?: string; 
    public get rootPrefix() {
        return this.getStringAttribute('root_prefix');
    }
    public set rootPrefix(value: string) {
        this._rootPrefix = value;
    }
    public resetRootPrefix() {
        this._rootPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootPrefixInput() {
        return this._rootPrefix;
    }

    // s3_bucket_name - computed: true, optional: true, required: false
    private _s3BucketName?: string; 
    public get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
        this._s3BucketName = value;
    }
    public resetS3BucketName() {
        this._s3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
        return this._s3BucketName;
    }
}
export interface PosixUserProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#group CcQueue#group}
    */
    readonly group?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#user CcQueue#user}
    */
    readonly user?: string;
}
export class PosixUserPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PosixUserProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._group !== undefined) {
            hasAnyValues = true;
            internalValueResult.group = this._group;
        }
        if (this._user !== undefined) {
            hasAnyValues = true;
            internalValueResult.user = this._user;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PosixUserProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._group = undefined;
            this._user = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._group = value.group;
            this._user = value.user;
        }
    }

    // group - computed: true, optional: true, required: false
    private _group?: string; 
    public get group() {
        return this.getStringAttribute('group');
    }
    public set group(value: string) {
        this._group = value;
    }
    public resetGroup() {
        this._group = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupInput() {
        return this._group;
    }

    // user - computed: true, optional: true, required: false
    private _user?: string; 
    public get user() {
        return this.getStringAttribute('user');
    }
    public set user(value: string) {
        this._user = value;
    }
    public resetUser() {
        this._user = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
        return this._user;
    }
}
export interface WindowsUserProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#password_arn CcQueue#password_arn}
    */
    readonly passwordArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#user CcQueue#user}
    */
    readonly user?: string;
}
export class WindowsUserPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WindowsUserProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._passwordArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.passwordArn = this._passwordArn;
        }
        if (this._user !== undefined) {
            hasAnyValues = true;
            internalValueResult.user = this._user;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WindowsUserProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._passwordArn = undefined;
            this._user = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._passwordArn = value.passwordArn;
            this._user = value.user;
        }
    }

    // password_arn - computed: true, optional: true, required: false
    private _passwordArn?: string; 
    public get passwordArn() {
        return this.getStringAttribute('password_arn');
    }
    public set passwordArn(value: string) {
        this._passwordArn = value;
    }
    public resetPasswordArn() {
        this._passwordArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordArnInput() {
        return this._passwordArn;
    }

    // user - computed: true, optional: true, required: false
    private _user?: string; 
    public get user() {
        return this.getStringAttribute('user');
    }
    public set user(value: string) {
        this._user = value;
    }
    public resetUser() {
        this._user = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
        return this._user;
    }
}
export interface JobRunAsUserProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#posix CcQueue#posix}
    */
    readonly posix?: PosixUserProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#run_as CcQueue#run_as}
    */
    readonly runAs?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#windows CcQueue#windows}
    */
    readonly windows?: WindowsUserProperty;
}
export class JobRunAsUserPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JobRunAsUserProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._posix?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.posix = this._posix?.internalValue;
        }
        if (this._runAs !== undefined) {
            hasAnyValues = true;
            internalValueResult.runAs = this._runAs;
        }
        if (this._windows?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.windows = this._windows?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JobRunAsUserProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._posix.internalValue = undefined;
            this._runAs = undefined;
            this._windows.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._posix.internalValue = value.posix;
            this._runAs = value.runAs;
            this._windows.internalValue = value.windows;
        }
    }

    // posix - computed: true, optional: true, required: false
    private _posix = new PosixUserPropertyOutputReference(this, "posix");
    public get posix() {
        return this._posix;
    }
    public putPosix(value: PosixUserProperty) {
        this._posix.internalValue = value;
    }
    public resetPosix() {
        this._posix.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get posixInput() {
        return this._posix.internalValue;
    }

    // run_as - computed: true, optional: true, required: false
    private _runAs?: string; 
    public get runAs() {
        return this.getStringAttribute('run_as');
    }
    public set runAs(value: string) {
        this._runAs = value;
    }
    public resetRunAs() {
        this._runAs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runAsInput() {
        return this._runAs;
    }

    // windows - computed: true, optional: true, required: false
    private _windows = new WindowsUserPropertyOutputReference(this, "windows");
    public get windows() {
        return this._windows;
    }
    public putWindows(value: WindowsUserProperty) {
        this._windows.internalValue = value;
    }
    public resetWindows() {
        this._windows.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowsInput() {
        return this._windows.internalValue;
    }
}
export interface PriorityBalancedSchedulingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#rendering_task_buffer CcQueue#rendering_task_buffer}
    */
    readonly renderingTaskBuffer?: number;
}
export class PriorityBalancedSchedulingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PriorityBalancedSchedulingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._renderingTaskBuffer !== undefined) {
            hasAnyValues = true;
            internalValueResult.renderingTaskBuffer = this._renderingTaskBuffer;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PriorityBalancedSchedulingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._renderingTaskBuffer = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._renderingTaskBuffer = value.renderingTaskBuffer;
        }
    }

    // rendering_task_buffer - computed: true, optional: true, required: false
    private _renderingTaskBuffer?: number; 
    public get renderingTaskBuffer() {
        return this.getNumberAttribute('rendering_task_buffer');
    }
    public set renderingTaskBuffer(value: number) {
        this._renderingTaskBuffer = value;
    }
    public resetRenderingTaskBuffer() {
        this._renderingTaskBuffer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renderingTaskBufferInput() {
        return this._renderingTaskBuffer;
    }
}
export interface SchedulingMaxPriorityOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#always_schedule_first CcQueue#always_schedule_first}
    */
    readonly alwaysScheduleFirst?: string;
}
export class SchedulingMaxPriorityOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchedulingMaxPriorityOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alwaysScheduleFirst !== undefined) {
            hasAnyValues = true;
            internalValueResult.alwaysScheduleFirst = this._alwaysScheduleFirst;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchedulingMaxPriorityOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alwaysScheduleFirst = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alwaysScheduleFirst = value.alwaysScheduleFirst;
        }
    }

    // always_schedule_first - computed: true, optional: true, required: false
    private _alwaysScheduleFirst?: string; 
    public get alwaysScheduleFirst() {
        return this.getStringAttribute('always_schedule_first');
    }
    public set alwaysScheduleFirst(value: string) {
        this._alwaysScheduleFirst = value;
    }
    public resetAlwaysScheduleFirst() {
        this._alwaysScheduleFirst = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alwaysScheduleFirstInput() {
        return this._alwaysScheduleFirst;
    }
}
export interface SchedulingMinPriorityOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#always_schedule_last CcQueue#always_schedule_last}
    */
    readonly alwaysScheduleLast?: string;
}
export class SchedulingMinPriorityOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchedulingMinPriorityOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alwaysScheduleLast !== undefined) {
            hasAnyValues = true;
            internalValueResult.alwaysScheduleLast = this._alwaysScheduleLast;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchedulingMinPriorityOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alwaysScheduleLast = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alwaysScheduleLast = value.alwaysScheduleLast;
        }
    }

    // always_schedule_last - computed: true, optional: true, required: false
    private _alwaysScheduleLast?: string; 
    public get alwaysScheduleLast() {
        return this.getStringAttribute('always_schedule_last');
    }
    public set alwaysScheduleLast(value: string) {
        this._alwaysScheduleLast = value;
    }
    public resetAlwaysScheduleLast() {
        this._alwaysScheduleLast = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alwaysScheduleLastInput() {
        return this._alwaysScheduleLast;
    }
}
export interface WeightedBalancedSchedulingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#error_weight CcQueue#error_weight}
    */
    readonly errorWeight?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#max_priority_override CcQueue#max_priority_override}
    */
    readonly maxPriorityOverride?: SchedulingMaxPriorityOverrideProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#min_priority_override CcQueue#min_priority_override}
    */
    readonly minPriorityOverride?: SchedulingMinPriorityOverrideProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#priority_weight CcQueue#priority_weight}
    */
    readonly priorityWeight?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#rendering_task_buffer CcQueue#rendering_task_buffer}
    */
    readonly renderingTaskBuffer?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#rendering_task_weight CcQueue#rendering_task_weight}
    */
    readonly renderingTaskWeight?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#submission_time_weight CcQueue#submission_time_weight}
    */
    readonly submissionTimeWeight?: number;
}
export class WeightedBalancedSchedulingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WeightedBalancedSchedulingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorWeight = this._errorWeight;
        }
        if (this._maxPriorityOverride?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxPriorityOverride = this._maxPriorityOverride?.internalValue;
        }
        if (this._minPriorityOverride?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.minPriorityOverride = this._minPriorityOverride?.internalValue;
        }
        if (this._priorityWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.priorityWeight = this._priorityWeight;
        }
        if (this._renderingTaskBuffer !== undefined) {
            hasAnyValues = true;
            internalValueResult.renderingTaskBuffer = this._renderingTaskBuffer;
        }
        if (this._renderingTaskWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.renderingTaskWeight = this._renderingTaskWeight;
        }
        if (this._submissionTimeWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.submissionTimeWeight = this._submissionTimeWeight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WeightedBalancedSchedulingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorWeight = undefined;
            this._maxPriorityOverride.internalValue = undefined;
            this._minPriorityOverride.internalValue = undefined;
            this._priorityWeight = undefined;
            this._renderingTaskBuffer = undefined;
            this._renderingTaskWeight = undefined;
            this._submissionTimeWeight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorWeight = value.errorWeight;
            this._maxPriorityOverride.internalValue = value.maxPriorityOverride;
            this._minPriorityOverride.internalValue = value.minPriorityOverride;
            this._priorityWeight = value.priorityWeight;
            this._renderingTaskBuffer = value.renderingTaskBuffer;
            this._renderingTaskWeight = value.renderingTaskWeight;
            this._submissionTimeWeight = value.submissionTimeWeight;
        }
    }

    // error_weight - computed: true, optional: true, required: false
    private _errorWeight?: number; 
    public get errorWeight() {
        return this.getNumberAttribute('error_weight');
    }
    public set errorWeight(value: number) {
        this._errorWeight = value;
    }
    public resetErrorWeight() {
        this._errorWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorWeightInput() {
        return this._errorWeight;
    }

    // max_priority_override - computed: true, optional: true, required: false
    private _maxPriorityOverride = new SchedulingMaxPriorityOverridePropertyOutputReference(this, "max_priority_override");
    public get maxPriorityOverride() {
        return this._maxPriorityOverride;
    }
    public putMaxPriorityOverride(value: SchedulingMaxPriorityOverrideProperty) {
        this._maxPriorityOverride.internalValue = value;
    }
    public resetMaxPriorityOverride() {
        this._maxPriorityOverride.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPriorityOverrideInput() {
        return this._maxPriorityOverride.internalValue;
    }

    // min_priority_override - computed: true, optional: true, required: false
    private _minPriorityOverride = new SchedulingMinPriorityOverridePropertyOutputReference(this, "min_priority_override");
    public get minPriorityOverride() {
        return this._minPriorityOverride;
    }
    public putMinPriorityOverride(value: SchedulingMinPriorityOverrideProperty) {
        this._minPriorityOverride.internalValue = value;
    }
    public resetMinPriorityOverride() {
        this._minPriorityOverride.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minPriorityOverrideInput() {
        return this._minPriorityOverride.internalValue;
    }

    // priority_weight - computed: true, optional: true, required: false
    private _priorityWeight?: number; 
    public get priorityWeight() {
        return this.getNumberAttribute('priority_weight');
    }
    public set priorityWeight(value: number) {
        this._priorityWeight = value;
    }
    public resetPriorityWeight() {
        this._priorityWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityWeightInput() {
        return this._priorityWeight;
    }

    // rendering_task_buffer - computed: true, optional: true, required: false
    private _renderingTaskBuffer?: number; 
    public get renderingTaskBuffer() {
        return this.getNumberAttribute('rendering_task_buffer');
    }
    public set renderingTaskBuffer(value: number) {
        this._renderingTaskBuffer = value;
    }
    public resetRenderingTaskBuffer() {
        this._renderingTaskBuffer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renderingTaskBufferInput() {
        return this._renderingTaskBuffer;
    }

    // rendering_task_weight - computed: true, optional: true, required: false
    private _renderingTaskWeight?: number; 
    public get renderingTaskWeight() {
        return this.getNumberAttribute('rendering_task_weight');
    }
    public set renderingTaskWeight(value: number) {
        this._renderingTaskWeight = value;
    }
    public resetRenderingTaskWeight() {
        this._renderingTaskWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renderingTaskWeightInput() {
        return this._renderingTaskWeight;
    }

    // submission_time_weight - computed: true, optional: true, required: false
    private _submissionTimeWeight?: number; 
    public get submissionTimeWeight() {
        return this.getNumberAttribute('submission_time_weight');
    }
    public set submissionTimeWeight(value: number) {
        this._submissionTimeWeight = value;
    }
    public resetSubmissionTimeWeight() {
        this._submissionTimeWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get submissionTimeWeightInput() {
        return this._submissionTimeWeight;
    }
}
export interface SchedulingConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#priority_balanced CcQueue#priority_balanced}
    */
    readonly priorityBalanced?: PriorityBalancedSchedulingConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#priority_fifo CcQueue#priority_fifo}
    */
    readonly priorityFifo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#weighted_balanced CcQueue#weighted_balanced}
    */
    readonly weightedBalanced?: WeightedBalancedSchedulingConfigurationProperty;
}
export class SchedulingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchedulingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._priorityBalanced?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.priorityBalanced = this._priorityBalanced?.internalValue;
        }
        if (this._priorityFifo !== undefined) {
            hasAnyValues = true;
            internalValueResult.priorityFifo = this._priorityFifo;
        }
        if (this._weightedBalanced?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.weightedBalanced = this._weightedBalanced?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchedulingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._priorityBalanced.internalValue = undefined;
            this._priorityFifo = undefined;
            this._weightedBalanced.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._priorityBalanced.internalValue = value.priorityBalanced;
            this._priorityFifo = value.priorityFifo;
            this._weightedBalanced.internalValue = value.weightedBalanced;
        }
    }

    // priority_balanced - computed: true, optional: true, required: false
    private _priorityBalanced = new PriorityBalancedSchedulingConfigurationPropertyOutputReference(this, "priority_balanced");
    public get priorityBalanced() {
        return this._priorityBalanced;
    }
    public putPriorityBalanced(value: PriorityBalancedSchedulingConfigurationProperty) {
        this._priorityBalanced.internalValue = value;
    }
    public resetPriorityBalanced() {
        this._priorityBalanced.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityBalancedInput() {
        return this._priorityBalanced.internalValue;
    }

    // priority_fifo - computed: true, optional: true, required: false
    private _priorityFifo?: string; 
    public get priorityFifo() {
        return this.getStringAttribute('priority_fifo');
    }
    public set priorityFifo(value: string) {
        this._priorityFifo = value;
    }
    public resetPriorityFifo() {
        this._priorityFifo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityFifoInput() {
        return this._priorityFifo;
    }

    // weighted_balanced - computed: true, optional: true, required: false
    private _weightedBalanced = new WeightedBalancedSchedulingConfigurationPropertyOutputReference(this, "weighted_balanced");
    public get weightedBalanced() {
        return this._weightedBalanced;
    }
    public putWeightedBalanced(value: WeightedBalancedSchedulingConfigurationProperty) {
        this._weightedBalanced.internalValue = value;
    }
    public resetWeightedBalanced() {
        this._weightedBalanced.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightedBalancedInput() {
        return this._weightedBalanced.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#key CcQueue#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_queue#value CcQueue#value}
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
