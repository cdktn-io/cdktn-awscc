// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcJobTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * The criteria that determine when and how a job abort takes place.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#abort_config CcJobTemplate#abort_config}
    */
    readonly abortConfig?: CcJobTemplate.AbortConfigProperty;
    /**
    * A description of the Job Template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#description CcJobTemplate#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#destination_package_versions CcJobTemplate#destination_package_versions}
    */
    readonly destinationPackageVersions?: string[];
    /**
    * The job document. Required if you don't specify a value for documentSource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#document CcJobTemplate#document}
    */
    readonly document?: string;
    /**
    * An S3 link to the job document to use in the template. Required if you don't specify a value for document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#document_source CcJobTemplate#document_source}
    */
    readonly documentSource?: string;
    /**
    * Optional for copying a JobTemplate from a pre-existing Job configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#job_arn CcJobTemplate#job_arn}
    */
    readonly jobArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#job_executions_retry_config CcJobTemplate#job_executions_retry_config}
    */
    readonly jobExecutionsRetryConfig?: CcJobTemplate.JobExecutionsRetryConfigProperty;
    /**
    * Allows you to create a staged rollout of a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#job_executions_rollout_config CcJobTemplate#job_executions_rollout_config}
    */
    readonly jobExecutionsRolloutConfig?: CcJobTemplate.JobExecutionsRolloutConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#job_template_id CcJobTemplate#job_template_id}
    */
    readonly jobTemplateId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#maintenance_windows CcJobTemplate#maintenance_windows}
    */
    readonly maintenanceWindows?: CcJobTemplate.MaintenanceWindowProperty[] | cdktn.IResolvable;
    /**
    * Configuration for pre-signed S3 URLs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#presigned_url_config CcJobTemplate#presigned_url_config}
    */
    readonly presignedUrlConfig?: CcJobTemplate.PresignedUrlConfigProperty;
    /**
    * Metadata that can be used to manage the JobTemplate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#tags CcJobTemplate#tags}
    */
    readonly tags?: CcJobTemplate.TagProperty[] | cdktn.IResolvable;
    /**
    * Specifies the amount of time each device has to finish its execution of the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#timeout_config CcJobTemplate#timeout_config}
    */
    readonly timeoutConfig?: CcJobTemplate.TimeoutConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template awscc_iot_job_template}
*/
export class CcJobTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_job_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcJobTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcJobTemplate to import
    * @param importFromId The id of the existing CcJobTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcJobTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_job_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template awscc_iot_job_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcJobTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcJobTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_job_template',
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
        this._abortConfig.internalValue = config.abortConfig;
        this._description = config.description;
        this._destinationPackageVersions = config.destinationPackageVersions;
        this._document = config.document;
        this._documentSource = config.documentSource;
        this._jobArn = config.jobArn;
        this._jobExecutionsRetryConfig.internalValue = config.jobExecutionsRetryConfig;
        this._jobExecutionsRolloutConfig.internalValue = config.jobExecutionsRolloutConfig;
        this._jobTemplateId = config.jobTemplateId;
        this._maintenanceWindows.internalValue = config.maintenanceWindows;
        this._presignedUrlConfig.internalValue = config.presignedUrlConfig;
        this._tags.internalValue = config.tags;
        this._timeoutConfig.internalValue = config.timeoutConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // abort_config - computed: true, optional: true, required: false
    private _abortConfig = new CcJobTemplate.AbortConfigPropertyOutputReference(this, "abort_config");
    public get abortConfig() {
        return this._abortConfig;
    }
    public putAbortConfig(value: CcJobTemplate.AbortConfigProperty) {
        this._abortConfig.internalValue = value;
    }
    public resetAbortConfig() {
        this._abortConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get abortConfigInput() {
        return this._abortConfig.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // destination_package_versions - computed: true, optional: true, required: false
    private _destinationPackageVersions?: string[]; 
    public get destinationPackageVersions() {
        return this.getListAttribute('destination_package_versions');
    }
    public set destinationPackageVersions(value: string[]) {
        this._destinationPackageVersions = value;
    }
    public resetDestinationPackageVersions() {
        this._destinationPackageVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPackageVersionsInput() {
        return this._destinationPackageVersions;
    }

    // document - computed: true, optional: true, required: false
    private _document?: string; 
    public get document() {
        return this.getStringAttribute('document');
    }
    public set document(value: string) {
        this._document = value;
    }
    public resetDocument() {
        this._document = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentInput() {
        return this._document;
    }

    // document_source - computed: true, optional: true, required: false
    private _documentSource?: string; 
    public get documentSource() {
        return this.getStringAttribute('document_source');
    }
    public set documentSource(value: string) {
        this._documentSource = value;
    }
    public resetDocumentSource() {
        this._documentSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentSourceInput() {
        return this._documentSource;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // job_arn - computed: true, optional: true, required: false
    private _jobArn?: string; 
    public get jobArn() {
        return this.getStringAttribute('job_arn');
    }
    public set jobArn(value: string) {
        this._jobArn = value;
    }
    public resetJobArn() {
        this._jobArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobArnInput() {
        return this._jobArn;
    }

    // job_executions_retry_config - computed: true, optional: true, required: false
    private _jobExecutionsRetryConfig = new CcJobTemplate.JobExecutionsRetryConfigPropertyOutputReference(this, "job_executions_retry_config");
    public get jobExecutionsRetryConfig() {
        return this._jobExecutionsRetryConfig;
    }
    public putJobExecutionsRetryConfig(value: CcJobTemplate.JobExecutionsRetryConfigProperty) {
        this._jobExecutionsRetryConfig.internalValue = value;
    }
    public resetJobExecutionsRetryConfig() {
        this._jobExecutionsRetryConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobExecutionsRetryConfigInput() {
        return this._jobExecutionsRetryConfig.internalValue;
    }

    // job_executions_rollout_config - computed: true, optional: true, required: false
    private _jobExecutionsRolloutConfig = new CcJobTemplate.JobExecutionsRolloutConfigPropertyOutputReference(this, "job_executions_rollout_config");
    public get jobExecutionsRolloutConfig() {
        return this._jobExecutionsRolloutConfig;
    }
    public putJobExecutionsRolloutConfig(value: CcJobTemplate.JobExecutionsRolloutConfigProperty) {
        this._jobExecutionsRolloutConfig.internalValue = value;
    }
    public resetJobExecutionsRolloutConfig() {
        this._jobExecutionsRolloutConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobExecutionsRolloutConfigInput() {
        return this._jobExecutionsRolloutConfig.internalValue;
    }

    // job_template_id - computed: false, optional: false, required: true
    private _jobTemplateId?: string; 
    public get jobTemplateId() {
        return this.getStringAttribute('job_template_id');
    }
    public set jobTemplateId(value: string) {
        this._jobTemplateId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jobTemplateIdInput() {
        return this._jobTemplateId;
    }

    // maintenance_windows - computed: true, optional: true, required: false
    private _maintenanceWindows = new CcJobTemplate.MaintenanceWindowPropertyList(this, "maintenance_windows", false);
    public get maintenanceWindows() {
        return this._maintenanceWindows;
    }
    public putMaintenanceWindows(value: CcJobTemplate.MaintenanceWindowProperty[] | cdktn.IResolvable) {
        this._maintenanceWindows.internalValue = value;
    }
    public resetMaintenanceWindows() {
        this._maintenanceWindows.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceWindowsInput() {
        return this._maintenanceWindows.internalValue;
    }

    // presigned_url_config - computed: true, optional: true, required: false
    private _presignedUrlConfig = new CcJobTemplate.PresignedUrlConfigPropertyOutputReference(this, "presigned_url_config");
    public get presignedUrlConfig() {
        return this._presignedUrlConfig;
    }
    public putPresignedUrlConfig(value: CcJobTemplate.PresignedUrlConfigProperty) {
        this._presignedUrlConfig.internalValue = value;
    }
    public resetPresignedUrlConfig() {
        this._presignedUrlConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get presignedUrlConfigInput() {
        return this._presignedUrlConfig.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcJobTemplate.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcJobTemplate.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // timeout_config - computed: true, optional: true, required: false
    private _timeoutConfig = new CcJobTemplate.TimeoutConfigPropertyOutputReference(this, "timeout_config");
    public get timeoutConfig() {
        return this._timeoutConfig;
    }
    public putTimeoutConfig(value: CcJobTemplate.TimeoutConfigProperty) {
        this._timeoutConfig.internalValue = value;
    }
    public resetTimeoutConfig() {
        this._timeoutConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutConfigInput() {
        return this._timeoutConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            abort_config: ccJobTemplateAbortConfigPropertyToTerraform(this._abortConfig.internalValue),
            description: cdktn.stringToTerraform(this._description),
            destination_package_versions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._destinationPackageVersions),
            document: cdktn.stringToTerraform(this._document),
            document_source: cdktn.stringToTerraform(this._documentSource),
            job_arn: cdktn.stringToTerraform(this._jobArn),
            job_executions_retry_config: ccJobTemplateJobExecutionsRetryConfigPropertyToTerraform(this._jobExecutionsRetryConfig.internalValue),
            job_executions_rollout_config: ccJobTemplateJobExecutionsRolloutConfigPropertyToTerraform(this._jobExecutionsRolloutConfig.internalValue),
            job_template_id: cdktn.stringToTerraform(this._jobTemplateId),
            maintenance_windows: cdktn.listMapper(ccJobTemplateMaintenanceWindowPropertyToTerraform, false)(this._maintenanceWindows.internalValue),
            presigned_url_config: ccJobTemplatePresignedUrlConfigPropertyToTerraform(this._presignedUrlConfig.internalValue),
            tags: cdktn.listMapper(ccJobTemplateTagPropertyToTerraform, false)(this._tags.internalValue),
            timeout_config: ccJobTemplateTimeoutConfigPropertyToTerraform(this._timeoutConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            abort_config: {
                value: ccJobTemplateAbortConfigPropertyToHclTerraform(this._abortConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJobTemplate.AbortConfigProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_package_versions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._destinationPackageVersions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            document: {
                value: cdktn.stringToHclTerraform(this._document),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            document_source: {
                value: cdktn.stringToHclTerraform(this._documentSource),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_arn: {
                value: cdktn.stringToHclTerraform(this._jobArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_executions_retry_config: {
                value: ccJobTemplateJobExecutionsRetryConfigPropertyToHclTerraform(this._jobExecutionsRetryConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJobTemplate.JobExecutionsRetryConfigProperty",
            },
            job_executions_rollout_config: {
                value: ccJobTemplateJobExecutionsRolloutConfigPropertyToHclTerraform(this._jobExecutionsRolloutConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJobTemplate.JobExecutionsRolloutConfigProperty",
            },
            job_template_id: {
                value: cdktn.stringToHclTerraform(this._jobTemplateId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            maintenance_windows: {
                value: cdktn.listMapperHcl(ccJobTemplateMaintenanceWindowPropertyToHclTerraform, false)(this._maintenanceWindows.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcJobTemplate.MaintenanceWindowPropertyList",
            },
            presigned_url_config: {
                value: ccJobTemplatePresignedUrlConfigPropertyToHclTerraform(this._presignedUrlConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJobTemplate.PresignedUrlConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccJobTemplateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcJobTemplate.TagPropertyList",
            },
            timeout_config: {
                value: ccJobTemplateTimeoutConfigPropertyToHclTerraform(this._timeoutConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJobTemplate.TimeoutConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccJobTemplateAbortCriteriaPropertyToTerraform(struct?: CcJobTemplate.AbortCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        failure_type: cdktn.stringToTerraform(struct!.failureType),
        min_number_of_executed_things: cdktn.numberToTerraform(struct!.minNumberOfExecutedThings),
        threshold_percentage: cdktn.numberToTerraform(struct!.thresholdPercentage),
    }
}


export function ccJobTemplateAbortCriteriaPropertyToHclTerraform(struct?: CcJobTemplate.AbortCriteriaProperty | cdktn.IResolvable): any {
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
        failure_type: {
            value: cdktn.stringToHclTerraform(struct!.failureType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_number_of_executed_things: {
            value: cdktn.numberToHclTerraform(struct!.minNumberOfExecutedThings),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        threshold_percentage: {
            value: cdktn.numberToHclTerraform(struct!.thresholdPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobTemplateAbortConfigPropertyToTerraform(struct?: CcJobTemplate.AbortConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        criteria_list: cdktn.listMapper(ccJobTemplateAbortCriteriaPropertyToTerraform, false)(struct!.criteriaList),
    }
}


export function ccJobTemplateAbortConfigPropertyToHclTerraform(struct?: CcJobTemplate.AbortConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        criteria_list: {
            value: cdktn.listMapperHcl(ccJobTemplateAbortCriteriaPropertyToHclTerraform, false)(struct!.criteriaList),
            isBlock: true,
            type: "list",
            storageClassType: "AbortCriteriaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobTemplateRetryCriteriaPropertyToTerraform(struct?: CcJobTemplate.RetryCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        failure_type: cdktn.stringToTerraform(struct!.failureType),
        number_of_retries: cdktn.numberToTerraform(struct!.numberOfRetries),
    }
}


export function ccJobTemplateRetryCriteriaPropertyToHclTerraform(struct?: CcJobTemplate.RetryCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        failure_type: {
            value: cdktn.stringToHclTerraform(struct!.failureType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        number_of_retries: {
            value: cdktn.numberToHclTerraform(struct!.numberOfRetries),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobTemplateJobExecutionsRetryConfigPropertyToTerraform(struct?: CcJobTemplate.JobExecutionsRetryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        retry_criteria_list: cdktn.listMapper(ccJobTemplateRetryCriteriaPropertyToTerraform, false)(struct!.retryCriteriaList),
    }
}


export function ccJobTemplateJobExecutionsRetryConfigPropertyToHclTerraform(struct?: CcJobTemplate.JobExecutionsRetryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        retry_criteria_list: {
            value: cdktn.listMapperHcl(ccJobTemplateRetryCriteriaPropertyToHclTerraform, false)(struct!.retryCriteriaList),
            isBlock: true,
            type: "list",
            storageClassType: "RetryCriteriaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobTemplateRateIncreaseCriteriaPropertyToTerraform(struct?: CcJobTemplate.RateIncreaseCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_of_notified_things: cdktn.numberToTerraform(struct!.numberOfNotifiedThings),
        number_of_succeeded_things: cdktn.numberToTerraform(struct!.numberOfSucceededThings),
    }
}


export function ccJobTemplateRateIncreaseCriteriaPropertyToHclTerraform(struct?: CcJobTemplate.RateIncreaseCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        number_of_notified_things: {
            value: cdktn.numberToHclTerraform(struct!.numberOfNotifiedThings),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        number_of_succeeded_things: {
            value: cdktn.numberToHclTerraform(struct!.numberOfSucceededThings),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobTemplateExponentialRolloutRatePropertyToTerraform(struct?: CcJobTemplate.ExponentialRolloutRateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base_rate_per_minute: cdktn.numberToTerraform(struct!.baseRatePerMinute),
        increment_factor: cdktn.numberToTerraform(struct!.incrementFactor),
        rate_increase_criteria: ccJobTemplateRateIncreaseCriteriaPropertyToTerraform(struct!.rateIncreaseCriteria),
    }
}


export function ccJobTemplateExponentialRolloutRatePropertyToHclTerraform(struct?: CcJobTemplate.ExponentialRolloutRateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base_rate_per_minute: {
            value: cdktn.numberToHclTerraform(struct!.baseRatePerMinute),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        increment_factor: {
            value: cdktn.numberToHclTerraform(struct!.incrementFactor),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rate_increase_criteria: {
            value: ccJobTemplateRateIncreaseCriteriaPropertyToHclTerraform(struct!.rateIncreaseCriteria),
            isBlock: true,
            type: "struct",
            storageClassType: "RateIncreaseCriteriaProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobTemplateJobExecutionsRolloutConfigPropertyToTerraform(struct?: CcJobTemplate.JobExecutionsRolloutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exponential_rollout_rate: ccJobTemplateExponentialRolloutRatePropertyToTerraform(struct!.exponentialRolloutRate),
        maximum_per_minute: cdktn.numberToTerraform(struct!.maximumPerMinute),
    }
}


export function ccJobTemplateJobExecutionsRolloutConfigPropertyToHclTerraform(struct?: CcJobTemplate.JobExecutionsRolloutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exponential_rollout_rate: {
            value: ccJobTemplateExponentialRolloutRatePropertyToHclTerraform(struct!.exponentialRolloutRate),
            isBlock: true,
            type: "struct",
            storageClassType: "ExponentialRolloutRateProperty",
        },
        maximum_per_minute: {
            value: cdktn.numberToHclTerraform(struct!.maximumPerMinute),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobTemplateMaintenanceWindowPropertyToTerraform(struct?: CcJobTemplate.MaintenanceWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_in_minutes: cdktn.numberToTerraform(struct!.durationInMinutes),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccJobTemplateMaintenanceWindowPropertyToHclTerraform(struct?: CcJobTemplate.MaintenanceWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.durationInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start_time: {
            value: cdktn.stringToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobTemplatePresignedUrlConfigPropertyToTerraform(struct?: CcJobTemplate.PresignedUrlConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expires_in_sec: cdktn.numberToTerraform(struct!.expiresInSec),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccJobTemplatePresignedUrlConfigPropertyToHclTerraform(struct?: CcJobTemplate.PresignedUrlConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expires_in_sec: {
            value: cdktn.numberToHclTerraform(struct!.expiresInSec),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobTemplateTagPropertyToTerraform(struct?: CcJobTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccJobTemplateTagPropertyToHclTerraform(struct?: CcJobTemplate.TagProperty | cdktn.IResolvable): any {
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


export function ccJobTemplateTimeoutConfigPropertyToTerraform(struct?: CcJobTemplate.TimeoutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        in_progress_timeout_in_minutes: cdktn.numberToTerraform(struct!.inProgressTimeoutInMinutes),
    }
}


export function ccJobTemplateTimeoutConfigPropertyToHclTerraform(struct?: CcJobTemplate.TimeoutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        in_progress_timeout_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.inProgressTimeoutInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcJobTemplate {
export interface AbortCriteriaProperty {
    /**
    * The type of job action to take to initiate the job abort.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#action CcJobTemplate#action}
    */
    readonly action?: string;
    /**
    * The type of job execution failures that can initiate a job abort.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#failure_type CcJobTemplate#failure_type}
    */
    readonly failureType?: string;
    /**
    * The minimum number of things which must receive job execution notifications before the job can be aborted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#min_number_of_executed_things CcJobTemplate#min_number_of_executed_things}
    */
    readonly minNumberOfExecutedThings?: number;
    /**
    * The minimum percentage of job execution failures that must occur to initiate the job abort.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#threshold_percentage CcJobTemplate#threshold_percentage}
    */
    readonly thresholdPercentage?: number;
}
export class AbortCriteriaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AbortCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._failureType !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureType = this._failureType;
        }
        if (this._minNumberOfExecutedThings !== undefined) {
            hasAnyValues = true;
            internalValueResult.minNumberOfExecutedThings = this._minNumberOfExecutedThings;
        }
        if (this._thresholdPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.thresholdPercentage = this._thresholdPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AbortCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._failureType = undefined;
            this._minNumberOfExecutedThings = undefined;
            this._thresholdPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._failureType = value.failureType;
            this._minNumberOfExecutedThings = value.minNumberOfExecutedThings;
            this._thresholdPercentage = value.thresholdPercentage;
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

    // failure_type - computed: true, optional: true, required: false
    private _failureType?: string; 
    public get failureType() {
        return this.getStringAttribute('failure_type');
    }
    public set failureType(value: string) {
        this._failureType = value;
    }
    public resetFailureType() {
        this._failureType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureTypeInput() {
        return this._failureType;
    }

    // min_number_of_executed_things - computed: true, optional: true, required: false
    private _minNumberOfExecutedThings?: number; 
    public get minNumberOfExecutedThings() {
        return this.getNumberAttribute('min_number_of_executed_things');
    }
    public set minNumberOfExecutedThings(value: number) {
        this._minNumberOfExecutedThings = value;
    }
    public resetMinNumberOfExecutedThings() {
        this._minNumberOfExecutedThings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minNumberOfExecutedThingsInput() {
        return this._minNumberOfExecutedThings;
    }

    // threshold_percentage - computed: true, optional: true, required: false
    private _thresholdPercentage?: number; 
    public get thresholdPercentage() {
        return this.getNumberAttribute('threshold_percentage');
    }
    public set thresholdPercentage(value: number) {
        this._thresholdPercentage = value;
    }
    public resetThresholdPercentage() {
        this._thresholdPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdPercentageInput() {
        return this._thresholdPercentage;
    }
}

export class AbortCriteriaPropertyList extends cdktn.ComplexList {
    public internalValue? : AbortCriteriaProperty[] | cdktn.IResolvable

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
    public get(index: number): AbortCriteriaPropertyOutputReference {
        return new AbortCriteriaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AbortConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#criteria_list CcJobTemplate#criteria_list}
    */
    readonly criteriaList?: AbortCriteriaProperty[] | cdktn.IResolvable;
}
export class AbortConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AbortConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._criteriaList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.criteriaList = this._criteriaList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AbortConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._criteriaList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._criteriaList.internalValue = value.criteriaList;
        }
    }

    // criteria_list - computed: true, optional: true, required: false
    private _criteriaList = new AbortCriteriaPropertyList(this, "criteria_list", false);
    public get criteriaList() {
        return this._criteriaList;
    }
    public putCriteriaList(value: AbortCriteriaProperty[] | cdktn.IResolvable) {
        this._criteriaList.internalValue = value;
    }
    public resetCriteriaList() {
        this._criteriaList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get criteriaListInput() {
        return this._criteriaList.internalValue;
    }
}
export interface RetryCriteriaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#failure_type CcJobTemplate#failure_type}
    */
    readonly failureType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#number_of_retries CcJobTemplate#number_of_retries}
    */
    readonly numberOfRetries?: number;
}
export class RetryCriteriaPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RetryCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._failureType !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureType = this._failureType;
        }
        if (this._numberOfRetries !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfRetries = this._numberOfRetries;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RetryCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failureType = undefined;
            this._numberOfRetries = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failureType = value.failureType;
            this._numberOfRetries = value.numberOfRetries;
        }
    }

    // failure_type - computed: true, optional: true, required: false
    private _failureType?: string; 
    public get failureType() {
        return this.getStringAttribute('failure_type');
    }
    public set failureType(value: string) {
        this._failureType = value;
    }
    public resetFailureType() {
        this._failureType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureTypeInput() {
        return this._failureType;
    }

    // number_of_retries - computed: true, optional: true, required: false
    private _numberOfRetries?: number; 
    public get numberOfRetries() {
        return this.getNumberAttribute('number_of_retries');
    }
    public set numberOfRetries(value: number) {
        this._numberOfRetries = value;
    }
    public resetNumberOfRetries() {
        this._numberOfRetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfRetriesInput() {
        return this._numberOfRetries;
    }
}

export class RetryCriteriaPropertyList extends cdktn.ComplexList {
    public internalValue? : RetryCriteriaProperty[] | cdktn.IResolvable

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
    public get(index: number): RetryCriteriaPropertyOutputReference {
        return new RetryCriteriaPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface JobExecutionsRetryConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#retry_criteria_list CcJobTemplate#retry_criteria_list}
    */
    readonly retryCriteriaList?: RetryCriteriaProperty[] | cdktn.IResolvable;
}
export class JobExecutionsRetryConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JobExecutionsRetryConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._retryCriteriaList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryCriteriaList = this._retryCriteriaList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JobExecutionsRetryConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._retryCriteriaList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._retryCriteriaList.internalValue = value.retryCriteriaList;
        }
    }

    // retry_criteria_list - computed: true, optional: true, required: false
    private _retryCriteriaList = new RetryCriteriaPropertyList(this, "retry_criteria_list", false);
    public get retryCriteriaList() {
        return this._retryCriteriaList;
    }
    public putRetryCriteriaList(value: RetryCriteriaProperty[] | cdktn.IResolvable) {
        this._retryCriteriaList.internalValue = value;
    }
    public resetRetryCriteriaList() {
        this._retryCriteriaList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryCriteriaListInput() {
        return this._retryCriteriaList.internalValue;
    }
}
export interface RateIncreaseCriteriaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#number_of_notified_things CcJobTemplate#number_of_notified_things}
    */
    readonly numberOfNotifiedThings?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#number_of_succeeded_things CcJobTemplate#number_of_succeeded_things}
    */
    readonly numberOfSucceededThings?: number;
}
export class RateIncreaseCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RateIncreaseCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._numberOfNotifiedThings !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfNotifiedThings = this._numberOfNotifiedThings;
        }
        if (this._numberOfSucceededThings !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberOfSucceededThings = this._numberOfSucceededThings;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RateIncreaseCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._numberOfNotifiedThings = undefined;
            this._numberOfSucceededThings = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._numberOfNotifiedThings = value.numberOfNotifiedThings;
            this._numberOfSucceededThings = value.numberOfSucceededThings;
        }
    }

    // number_of_notified_things - computed: true, optional: true, required: false
    private _numberOfNotifiedThings?: number; 
    public get numberOfNotifiedThings() {
        return this.getNumberAttribute('number_of_notified_things');
    }
    public set numberOfNotifiedThings(value: number) {
        this._numberOfNotifiedThings = value;
    }
    public resetNumberOfNotifiedThings() {
        this._numberOfNotifiedThings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfNotifiedThingsInput() {
        return this._numberOfNotifiedThings;
    }

    // number_of_succeeded_things - computed: true, optional: true, required: false
    private _numberOfSucceededThings?: number; 
    public get numberOfSucceededThings() {
        return this.getNumberAttribute('number_of_succeeded_things');
    }
    public set numberOfSucceededThings(value: number) {
        this._numberOfSucceededThings = value;
    }
    public resetNumberOfSucceededThings() {
        this._numberOfSucceededThings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfSucceededThingsInput() {
        return this._numberOfSucceededThings;
    }
}
export interface ExponentialRolloutRateProperty {
    /**
    * The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. This parameter allows you to define the initial rate of rollout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#base_rate_per_minute CcJobTemplate#base_rate_per_minute}
    */
    readonly baseRatePerMinute?: number;
    /**
    * The exponential factor to increase the rate of rollout for a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#increment_factor CcJobTemplate#increment_factor}
    */
    readonly incrementFactor?: number;
    /**
    * The criteria to initiate the increase in rate of rollout for a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#rate_increase_criteria CcJobTemplate#rate_increase_criteria}
    */
    readonly rateIncreaseCriteria?: RateIncreaseCriteriaProperty;
}
export class ExponentialRolloutRatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExponentialRolloutRateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baseRatePerMinute !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseRatePerMinute = this._baseRatePerMinute;
        }
        if (this._incrementFactor !== undefined) {
            hasAnyValues = true;
            internalValueResult.incrementFactor = this._incrementFactor;
        }
        if (this._rateIncreaseCriteria?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rateIncreaseCriteria = this._rateIncreaseCriteria?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExponentialRolloutRateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baseRatePerMinute = undefined;
            this._incrementFactor = undefined;
            this._rateIncreaseCriteria.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._baseRatePerMinute = value.baseRatePerMinute;
            this._incrementFactor = value.incrementFactor;
            this._rateIncreaseCriteria.internalValue = value.rateIncreaseCriteria;
        }
    }

    // base_rate_per_minute - computed: true, optional: true, required: false
    private _baseRatePerMinute?: number; 
    public get baseRatePerMinute() {
        return this.getNumberAttribute('base_rate_per_minute');
    }
    public set baseRatePerMinute(value: number) {
        this._baseRatePerMinute = value;
    }
    public resetBaseRatePerMinute() {
        this._baseRatePerMinute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseRatePerMinuteInput() {
        return this._baseRatePerMinute;
    }

    // increment_factor - computed: true, optional: true, required: false
    private _incrementFactor?: number; 
    public get incrementFactor() {
        return this.getNumberAttribute('increment_factor');
    }
    public set incrementFactor(value: number) {
        this._incrementFactor = value;
    }
    public resetIncrementFactor() {
        this._incrementFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get incrementFactorInput() {
        return this._incrementFactor;
    }

    // rate_increase_criteria - computed: true, optional: true, required: false
    private _rateIncreaseCriteria = new RateIncreaseCriteriaPropertyOutputReference(this, "rate_increase_criteria");
    public get rateIncreaseCriteria() {
        return this._rateIncreaseCriteria;
    }
    public putRateIncreaseCriteria(value: RateIncreaseCriteriaProperty) {
        this._rateIncreaseCriteria.internalValue = value;
    }
    public resetRateIncreaseCriteria() {
        this._rateIncreaseCriteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rateIncreaseCriteriaInput() {
        return this._rateIncreaseCriteria.internalValue;
    }
}
export interface JobExecutionsRolloutConfigProperty {
    /**
    * The rate of increase for a job rollout. This parameter allows you to define an exponential rate for a job rollout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#exponential_rollout_rate CcJobTemplate#exponential_rollout_rate}
    */
    readonly exponentialRolloutRate?: ExponentialRolloutRateProperty;
    /**
    * The maximum number of things that will be notified of a pending job, per minute. This parameter allows you to create a staged rollout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#maximum_per_minute CcJobTemplate#maximum_per_minute}
    */
    readonly maximumPerMinute?: number;
}
export class JobExecutionsRolloutConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JobExecutionsRolloutConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exponentialRolloutRate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exponentialRolloutRate = this._exponentialRolloutRate?.internalValue;
        }
        if (this._maximumPerMinute !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumPerMinute = this._maximumPerMinute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JobExecutionsRolloutConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exponentialRolloutRate.internalValue = undefined;
            this._maximumPerMinute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exponentialRolloutRate.internalValue = value.exponentialRolloutRate;
            this._maximumPerMinute = value.maximumPerMinute;
        }
    }

    // exponential_rollout_rate - computed: true, optional: true, required: false
    private _exponentialRolloutRate = new ExponentialRolloutRatePropertyOutputReference(this, "exponential_rollout_rate");
    public get exponentialRolloutRate() {
        return this._exponentialRolloutRate;
    }
    public putExponentialRolloutRate(value: ExponentialRolloutRateProperty) {
        this._exponentialRolloutRate.internalValue = value;
    }
    public resetExponentialRolloutRate() {
        this._exponentialRolloutRate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exponentialRolloutRateInput() {
        return this._exponentialRolloutRate.internalValue;
    }

    // maximum_per_minute - computed: true, optional: true, required: false
    private _maximumPerMinute?: number; 
    public get maximumPerMinute() {
        return this.getNumberAttribute('maximum_per_minute');
    }
    public set maximumPerMinute(value: number) {
        this._maximumPerMinute = value;
    }
    public resetMaximumPerMinute() {
        this._maximumPerMinute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumPerMinuteInput() {
        return this._maximumPerMinute;
    }
}
export interface MaintenanceWindowProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#duration_in_minutes CcJobTemplate#duration_in_minutes}
    */
    readonly durationInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#start_time CcJobTemplate#start_time}
    */
    readonly startTime?: string;
}
export class MaintenanceWindowPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MaintenanceWindowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._durationInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.durationInMinutes = this._durationInMinutes;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MaintenanceWindowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._durationInMinutes = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._durationInMinutes = value.durationInMinutes;
            this._startTime = value.startTime;
        }
    }

    // duration_in_minutes - computed: true, optional: true, required: false
    private _durationInMinutes?: number; 
    public get durationInMinutes() {
        return this.getNumberAttribute('duration_in_minutes');
    }
    public set durationInMinutes(value: number) {
        this._durationInMinutes = value;
    }
    public resetDurationInMinutes() {
        this._durationInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInMinutesInput() {
        return this._durationInMinutes;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}

export class MaintenanceWindowPropertyList extends cdktn.ComplexList {
    public internalValue? : MaintenanceWindowProperty[] | cdktn.IResolvable

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
    public get(index: number): MaintenanceWindowPropertyOutputReference {
        return new MaintenanceWindowPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PresignedUrlConfigProperty {
    /**
    * How number (in seconds) pre-signed URLs are valid.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#expires_in_sec CcJobTemplate#expires_in_sec}
    */
    readonly expiresInSec?: number;
    /**
    * The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. The role must also grant permission for IoT to download the files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#role_arn CcJobTemplate#role_arn}
    */
    readonly roleArn?: string;
}
export class PresignedUrlConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PresignedUrlConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expiresInSec !== undefined) {
            hasAnyValues = true;
            internalValueResult.expiresInSec = this._expiresInSec;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PresignedUrlConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expiresInSec = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expiresInSec = value.expiresInSec;
            this._roleArn = value.roleArn;
        }
    }

    // expires_in_sec - computed: true, optional: true, required: false
    private _expiresInSec?: number; 
    public get expiresInSec() {
        return this.getNumberAttribute('expires_in_sec');
    }
    public set expiresInSec(value: number) {
        this._expiresInSec = value;
    }
    public resetExpiresInSec() {
        this._expiresInSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expiresInSecInput() {
        return this._expiresInSec;
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
}
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#key CcJobTemplate#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#value CcJobTemplate#value}
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
export interface TimeoutConfigProperty {
    /**
    * Specifies the amount of time, in minutes, this device has to finish execution of this job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job_template#in_progress_timeout_in_minutes CcJobTemplate#in_progress_timeout_in_minutes}
    */
    readonly inProgressTimeoutInMinutes?: number;
}
export class TimeoutConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeoutConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inProgressTimeoutInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.inProgressTimeoutInMinutes = this._inProgressTimeoutInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeoutConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inProgressTimeoutInMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inProgressTimeoutInMinutes = value.inProgressTimeoutInMinutes;
        }
    }

    // in_progress_timeout_in_minutes - computed: true, optional: true, required: false
    private _inProgressTimeoutInMinutes?: number; 
    public get inProgressTimeoutInMinutes() {
        return this.getNumberAttribute('in_progress_timeout_in_minutes');
    }
    public set inProgressTimeoutInMinutes(value: number) {
        this._inProgressTimeoutInMinutes = value;
    }
    public resetInProgressTimeoutInMinutes() {
        this._inProgressTimeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inProgressTimeoutInMinutesInput() {
        return this._inProgressTimeoutInMinutes;
    }
}
}
