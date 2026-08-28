// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcJobProps extends cdktn.TerraformMetaArguments {
    /**
    * The criteria that determine when and how a job abort takes place.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#abort_config CcJob#abort_config}
    */
    readonly abortConfig?: CcJob.AbortConfigProperty;
    /**
    * A short text description of the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#description CcJob#description}
    */
    readonly description?: string;
    /**
    * The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#destination_package_versions CcJob#destination_package_versions}
    */
    readonly destinationPackageVersions?: string[];
    /**
    * The job document. Required if you don't specify a value for documentSource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#document CcJob#document}
    */
    readonly document?: string;
    /**
    * Parameters of an Amazon Web Services managed template that you can specify to create the job document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#document_parameters CcJob#document_parameters}
    */
    readonly documentParameters?: { [key: string]: string };
    /**
    * An S3 link, or S3 object URL, to the job document. The link is an Amazon S3 object URL and is required if you don't specify a value for document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#document_source CcJob#document_source}
    */
    readonly documentSource?: string;
    /**
    * The configuration that determines how many retries are allowed for each failure type for a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#job_executions_retry_config CcJob#job_executions_retry_config}
    */
    readonly jobExecutionsRetryConfig?: CcJob.JobExecutionsRetryConfigProperty;
    /**
    * Allows you to create a staged rollout of a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#job_executions_rollout_config CcJob#job_executions_rollout_config}
    */
    readonly jobExecutionsRolloutConfig?: CcJob.JobExecutionsRolloutConfigProperty;
    /**
    * A job identifier which must be unique for your AWS account. We recommend using a UUID. Alpha-numeric characters, '-' and '_' are valid for use here.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#job_id CcJob#job_id}
    */
    readonly jobId: string;
    /**
    * The ARN of the job template used to create the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#job_template_arn CcJob#job_template_arn}
    */
    readonly jobTemplateArn?: string;
    /**
    * Configuration for pre-signed S3 URLs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#presigned_url_config CcJob#presigned_url_config}
    */
    readonly presignedUrlConfig?: CcJob.PresignedUrlConfigProperty;
    /**
    * Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#scheduling_config CcJob#scheduling_config}
    */
    readonly schedulingConfig?: CcJob.SchedulingConfigProperty;
    /**
    * Metadata which can be used to manage the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#tags CcJob#tags}
    */
    readonly tags?: CcJob.TagProperty[] | cdktn.IResolvable;
    /**
    * Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#target_selection CcJob#target_selection}
    */
    readonly targetSelection?: string;
    /**
    * A list of things and thing groups to which the job should be sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#targets CcJob#targets}
    */
    readonly targets: string[];
    /**
    * Specifies the amount of time each device has to finish its execution of the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#timeout_config CcJob#timeout_config}
    */
    readonly timeoutConfig?: CcJob.TimeoutConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job awscc_iot_job}
*/
export class CcJob extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_job";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcJob resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcJob to import
    * @param importFromId The id of the existing CcJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcJob to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_job", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job awscc_iot_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcJobProps
    */
    public constructor(scope: Construct, id: string, config: CcJobProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_job',
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
        this._documentParameters = config.documentParameters;
        this._documentSource = config.documentSource;
        this._jobExecutionsRetryConfig.internalValue = config.jobExecutionsRetryConfig;
        this._jobExecutionsRolloutConfig.internalValue = config.jobExecutionsRolloutConfig;
        this._jobId = config.jobId;
        this._jobTemplateArn = config.jobTemplateArn;
        this._presignedUrlConfig.internalValue = config.presignedUrlConfig;
        this._schedulingConfig.internalValue = config.schedulingConfig;
        this._tags.internalValue = config.tags;
        this._targetSelection = config.targetSelection;
        this._targets = config.targets;
        this._timeoutConfig.internalValue = config.timeoutConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // abort_config - computed: true, optional: true, required: false
    private _abortConfig = new CcJob.AbortConfigPropertyOutputReference(this, "abort_config");
    public get abortConfig() {
        return this._abortConfig;
    }
    public putAbortConfig(value: CcJob.AbortConfigProperty) {
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

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // document_parameters - computed: true, optional: true, required: false
    private _documentParameters?: { [key: string]: string }; 
    public get documentParameters() {
        return this.getStringMapAttribute('document_parameters');
    }
    public set documentParameters(value: { [key: string]: string }) {
        this._documentParameters = value;
    }
    public resetDocumentParameters() {
        this._documentParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentParametersInput() {
        return this._documentParameters;
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

    // job_executions_retry_config - computed: true, optional: true, required: false
    private _jobExecutionsRetryConfig = new CcJob.JobExecutionsRetryConfigPropertyOutputReference(this, "job_executions_retry_config");
    public get jobExecutionsRetryConfig() {
        return this._jobExecutionsRetryConfig;
    }
    public putJobExecutionsRetryConfig(value: CcJob.JobExecutionsRetryConfigProperty) {
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
    private _jobExecutionsRolloutConfig = new CcJob.JobExecutionsRolloutConfigPropertyOutputReference(this, "job_executions_rollout_config");
    public get jobExecutionsRolloutConfig() {
        return this._jobExecutionsRolloutConfig;
    }
    public putJobExecutionsRolloutConfig(value: CcJob.JobExecutionsRolloutConfigProperty) {
        this._jobExecutionsRolloutConfig.internalValue = value;
    }
    public resetJobExecutionsRolloutConfig() {
        this._jobExecutionsRolloutConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobExecutionsRolloutConfigInput() {
        return this._jobExecutionsRolloutConfig.internalValue;
    }

    // job_id - computed: false, optional: false, required: true
    private _jobId?: string; 
    public get jobId() {
        return this.getStringAttribute('job_id');
    }
    public set jobId(value: string) {
        this._jobId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jobIdInput() {
        return this._jobId;
    }

    // job_template_arn - computed: true, optional: true, required: false
    private _jobTemplateArn?: string; 
    public get jobTemplateArn() {
        return this.getStringAttribute('job_template_arn');
    }
    public set jobTemplateArn(value: string) {
        this._jobTemplateArn = value;
    }
    public resetJobTemplateArn() {
        this._jobTemplateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobTemplateArnInput() {
        return this._jobTemplateArn;
    }

    // presigned_url_config - computed: true, optional: true, required: false
    private _presignedUrlConfig = new CcJob.PresignedUrlConfigPropertyOutputReference(this, "presigned_url_config");
    public get presignedUrlConfig() {
        return this._presignedUrlConfig;
    }
    public putPresignedUrlConfig(value: CcJob.PresignedUrlConfigProperty) {
        this._presignedUrlConfig.internalValue = value;
    }
    public resetPresignedUrlConfig() {
        this._presignedUrlConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get presignedUrlConfigInput() {
        return this._presignedUrlConfig.internalValue;
    }

    // scheduling_config - computed: true, optional: true, required: false
    private _schedulingConfig = new CcJob.SchedulingConfigPropertyOutputReference(this, "scheduling_config");
    public get schedulingConfig() {
        return this._schedulingConfig;
    }
    public putSchedulingConfig(value: CcJob.SchedulingConfigProperty) {
        this._schedulingConfig.internalValue = value;
    }
    public resetSchedulingConfig() {
        this._schedulingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulingConfigInput() {
        return this._schedulingConfig.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcJob.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcJob.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_selection - computed: true, optional: true, required: false
    private _targetSelection?: string; 
    public get targetSelection() {
        return this.getStringAttribute('target_selection');
    }
    public set targetSelection(value: string) {
        this._targetSelection = value;
    }
    public resetTargetSelection() {
        this._targetSelection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetSelectionInput() {
        return this._targetSelection;
    }

    // targets - computed: false, optional: false, required: true
    private _targets?: string[]; 
    public get targets() {
        return this.getListAttribute('targets');
    }
    public set targets(value: string[]) {
        this._targets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets;
    }

    // timeout_config - computed: true, optional: true, required: false
    private _timeoutConfig = new CcJob.TimeoutConfigPropertyOutputReference(this, "timeout_config");
    public get timeoutConfig() {
        return this._timeoutConfig;
    }
    public putTimeoutConfig(value: CcJob.TimeoutConfigProperty) {
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
            abort_config: ccJobAbortConfigPropertyToTerraform(this._abortConfig.internalValue),
            description: cdktn.stringToTerraform(this._description),
            destination_package_versions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._destinationPackageVersions),
            document: cdktn.stringToTerraform(this._document),
            document_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._documentParameters),
            document_source: cdktn.stringToTerraform(this._documentSource),
            job_executions_retry_config: ccJobJobExecutionsRetryConfigPropertyToTerraform(this._jobExecutionsRetryConfig.internalValue),
            job_executions_rollout_config: ccJobJobExecutionsRolloutConfigPropertyToTerraform(this._jobExecutionsRolloutConfig.internalValue),
            job_id: cdktn.stringToTerraform(this._jobId),
            job_template_arn: cdktn.stringToTerraform(this._jobTemplateArn),
            presigned_url_config: ccJobPresignedUrlConfigPropertyToTerraform(this._presignedUrlConfig.internalValue),
            scheduling_config: ccJobSchedulingConfigPropertyToTerraform(this._schedulingConfig.internalValue),
            tags: cdktn.listMapper(ccJobTagPropertyToTerraform, false)(this._tags.internalValue),
            target_selection: cdktn.stringToTerraform(this._targetSelection),
            targets: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targets),
            timeout_config: ccJobTimeoutConfigPropertyToTerraform(this._timeoutConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            abort_config: {
                value: ccJobAbortConfigPropertyToHclTerraform(this._abortConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.AbortConfigProperty",
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
            document_parameters: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._documentParameters),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            document_source: {
                value: cdktn.stringToHclTerraform(this._documentSource),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_executions_retry_config: {
                value: ccJobJobExecutionsRetryConfigPropertyToHclTerraform(this._jobExecutionsRetryConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.JobExecutionsRetryConfigProperty",
            },
            job_executions_rollout_config: {
                value: ccJobJobExecutionsRolloutConfigPropertyToHclTerraform(this._jobExecutionsRolloutConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.JobExecutionsRolloutConfigProperty",
            },
            job_id: {
                value: cdktn.stringToHclTerraform(this._jobId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_template_arn: {
                value: cdktn.stringToHclTerraform(this._jobTemplateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            presigned_url_config: {
                value: ccJobPresignedUrlConfigPropertyToHclTerraform(this._presignedUrlConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.PresignedUrlConfigProperty",
            },
            scheduling_config: {
                value: ccJobSchedulingConfigPropertyToHclTerraform(this._schedulingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.SchedulingConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccJobTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcJob.TagPropertyList",
            },
            target_selection: {
                value: cdktn.stringToHclTerraform(this._targetSelection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            targets: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targets),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            timeout_config: {
                value: ccJobTimeoutConfigPropertyToHclTerraform(this._timeoutConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.TimeoutConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccJobAbortCriteriaPropertyToTerraform(struct?: CcJob.AbortCriteriaProperty | cdktn.IResolvable): any {
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


export function ccJobAbortCriteriaPropertyToHclTerraform(struct?: CcJob.AbortCriteriaProperty | cdktn.IResolvable): any {
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


export function ccJobAbortConfigPropertyToTerraform(struct?: CcJob.AbortConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        criteria_list: cdktn.listMapper(ccJobAbortCriteriaPropertyToTerraform, false)(struct!.criteriaList),
    }
}


export function ccJobAbortConfigPropertyToHclTerraform(struct?: CcJob.AbortConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        criteria_list: {
            value: cdktn.listMapperHcl(ccJobAbortCriteriaPropertyToHclTerraform, false)(struct!.criteriaList),
            isBlock: true,
            type: "list",
            storageClassType: "AbortCriteriaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobRetryCriteriaPropertyToTerraform(struct?: CcJob.RetryCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        failure_type: cdktn.stringToTerraform(struct!.failureType),
        number_of_retries: cdktn.numberToTerraform(struct!.numberOfRetries),
    }
}


export function ccJobRetryCriteriaPropertyToHclTerraform(struct?: CcJob.RetryCriteriaProperty | cdktn.IResolvable): any {
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


export function ccJobJobExecutionsRetryConfigPropertyToTerraform(struct?: CcJob.JobExecutionsRetryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        criteria_list: cdktn.listMapper(ccJobRetryCriteriaPropertyToTerraform, false)(struct!.criteriaList),
    }
}


export function ccJobJobExecutionsRetryConfigPropertyToHclTerraform(struct?: CcJob.JobExecutionsRetryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        criteria_list: {
            value: cdktn.listMapperHcl(ccJobRetryCriteriaPropertyToHclTerraform, false)(struct!.criteriaList),
            isBlock: true,
            type: "list",
            storageClassType: "RetryCriteriaPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobRateIncreaseCriteriaPropertyToTerraform(struct?: CcJob.RateIncreaseCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        number_of_notified_things: cdktn.numberToTerraform(struct!.numberOfNotifiedThings),
        number_of_succeeded_things: cdktn.numberToTerraform(struct!.numberOfSucceededThings),
    }
}


export function ccJobRateIncreaseCriteriaPropertyToHclTerraform(struct?: CcJob.RateIncreaseCriteriaProperty | cdktn.IResolvable): any {
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


export function ccJobExponentialRolloutRatePropertyToTerraform(struct?: CcJob.ExponentialRolloutRateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base_rate_per_minute: cdktn.numberToTerraform(struct!.baseRatePerMinute),
        increment_factor: cdktn.numberToTerraform(struct!.incrementFactor),
        rate_increase_criteria: ccJobRateIncreaseCriteriaPropertyToTerraform(struct!.rateIncreaseCriteria),
    }
}


export function ccJobExponentialRolloutRatePropertyToHclTerraform(struct?: CcJob.ExponentialRolloutRateProperty | cdktn.IResolvable): any {
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
            value: ccJobRateIncreaseCriteriaPropertyToHclTerraform(struct!.rateIncreaseCriteria),
            isBlock: true,
            type: "struct",
            storageClassType: "RateIncreaseCriteriaProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobJobExecutionsRolloutConfigPropertyToTerraform(struct?: CcJob.JobExecutionsRolloutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exponential_rate: ccJobExponentialRolloutRatePropertyToTerraform(struct!.exponentialRate),
        maximum_per_minute: cdktn.numberToTerraform(struct!.maximumPerMinute),
    }
}


export function ccJobJobExecutionsRolloutConfigPropertyToHclTerraform(struct?: CcJob.JobExecutionsRolloutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exponential_rate: {
            value: ccJobExponentialRolloutRatePropertyToHclTerraform(struct!.exponentialRate),
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


export function ccJobPresignedUrlConfigPropertyToTerraform(struct?: CcJob.PresignedUrlConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expires_in_sec: cdktn.numberToTerraform(struct!.expiresInSec),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccJobPresignedUrlConfigPropertyToHclTerraform(struct?: CcJob.PresignedUrlConfigProperty | cdktn.IResolvable): any {
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


export function ccJobMaintenanceWindowPropertyToTerraform(struct?: CcJob.MaintenanceWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration_in_minutes: cdktn.numberToTerraform(struct!.durationInMinutes),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccJobMaintenanceWindowPropertyToHclTerraform(struct?: CcJob.MaintenanceWindowProperty | cdktn.IResolvable): any {
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


export function ccJobSchedulingConfigPropertyToTerraform(struct?: CcJob.SchedulingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_behavior: cdktn.stringToTerraform(struct!.endBehavior),
        end_time: cdktn.stringToTerraform(struct!.endTime),
        maintenance_windows: cdktn.listMapper(ccJobMaintenanceWindowPropertyToTerraform, false)(struct!.maintenanceWindows),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccJobSchedulingConfigPropertyToHclTerraform(struct?: CcJob.SchedulingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_behavior: {
            value: cdktn.stringToHclTerraform(struct!.endBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        end_time: {
            value: cdktn.stringToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        maintenance_windows: {
            value: cdktn.listMapperHcl(ccJobMaintenanceWindowPropertyToHclTerraform, false)(struct!.maintenanceWindows),
            isBlock: true,
            type: "list",
            storageClassType: "MaintenanceWindowPropertyList",
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


export function ccJobTagPropertyToTerraform(struct?: CcJob.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccJobTagPropertyToHclTerraform(struct?: CcJob.TagProperty | cdktn.IResolvable): any {
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


export function ccJobTimeoutConfigPropertyToTerraform(struct?: CcJob.TimeoutConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        in_progress_timeout_in_minutes: cdktn.numberToTerraform(struct!.inProgressTimeoutInMinutes),
    }
}


export function ccJobTimeoutConfigPropertyToHclTerraform(struct?: CcJob.TimeoutConfigProperty | cdktn.IResolvable): any {
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


export namespace CcJob {
export interface AbortCriteriaProperty {
    /**
    * The type of job action to take to initiate the job abort.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#action CcJob#action}
    */
    readonly action?: string;
    /**
    * The type of job execution failures that can initiate a job abort.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#failure_type CcJob#failure_type}
    */
    readonly failureType?: string;
    /**
    * The minimum number of things which must receive job execution notifications before the job can be aborted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#min_number_of_executed_things CcJob#min_number_of_executed_things}
    */
    readonly minNumberOfExecutedThings?: number;
    /**
    * The minimum percentage of job execution failures that must occur to initiate the job abort.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#threshold_percentage CcJob#threshold_percentage}
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
    * The list of criteria that determine when and how to abort the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#criteria_list CcJob#criteria_list}
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
    * The type of job execution failures that can initiate a job retry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#failure_type CcJob#failure_type}
    */
    readonly failureType?: string;
    /**
    * The number of retries allowed for a failure type for the job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#number_of_retries CcJob#number_of_retries}
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
    * The list of criteria that determines how many retries are allowed for each failure type for a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#criteria_list CcJob#criteria_list}
    */
    readonly criteriaList?: RetryCriteriaProperty[] | cdktn.IResolvable;
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
        if (this._criteriaList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.criteriaList = this._criteriaList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JobExecutionsRetryConfigProperty | cdktn.IResolvable | undefined) {
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
    private _criteriaList = new RetryCriteriaPropertyList(this, "criteria_list", false);
    public get criteriaList() {
        return this._criteriaList;
    }
    public putCriteriaList(value: RetryCriteriaProperty[] | cdktn.IResolvable) {
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
export interface RateIncreaseCriteriaProperty {
    /**
    * The threshold for number of notified things that will initiate the increase in rate of rollout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#number_of_notified_things CcJob#number_of_notified_things}
    */
    readonly numberOfNotifiedThings?: number;
    /**
    * The threshold for number of succeeded things that will initiate the increase in rate of rollout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#number_of_succeeded_things CcJob#number_of_succeeded_things}
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
    * The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#base_rate_per_minute CcJob#base_rate_per_minute}
    */
    readonly baseRatePerMinute?: number;
    /**
    * The exponential factor to increase the rate of rollout for a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#increment_factor CcJob#increment_factor}
    */
    readonly incrementFactor?: number;
    /**
    * Allows you to define a criteria to initiate the increase in rate of rollout for a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#rate_increase_criteria CcJob#rate_increase_criteria}
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
    * Allows you to create an exponential rate of rollout for a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#exponential_rate CcJob#exponential_rate}
    */
    readonly exponentialRate?: ExponentialRolloutRateProperty;
    /**
    * The maximum number of things that will be notified of a pending job, per minute. This parameter allows you to create a staged rollout.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#maximum_per_minute CcJob#maximum_per_minute}
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
        if (this._exponentialRate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.exponentialRate = this._exponentialRate?.internalValue;
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
            this._exponentialRate.internalValue = undefined;
            this._maximumPerMinute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exponentialRate.internalValue = value.exponentialRate;
            this._maximumPerMinute = value.maximumPerMinute;
        }
    }

    // exponential_rate - computed: true, optional: true, required: false
    private _exponentialRate = new ExponentialRolloutRatePropertyOutputReference(this, "exponential_rate");
    public get exponentialRate() {
        return this._exponentialRate;
    }
    public putExponentialRate(value: ExponentialRolloutRateProperty) {
        this._exponentialRate.internalValue = value;
    }
    public resetExponentialRate() {
        this._exponentialRate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exponentialRateInput() {
        return this._exponentialRate.internalValue;
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
export interface PresignedUrlConfigProperty {
    /**
    * How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 3600 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#expires_in_sec CcJob#expires_in_sec}
    */
    readonly expiresInSec?: number;
    /**
    * The ARN of an IAM role that grants permission to download files from the S3 bucket where the job data/updates are stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#role_arn CcJob#role_arn}
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
export interface MaintenanceWindowProperty {
    /**
    * Displays the duration of the next maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#duration_in_minutes CcJob#duration_in_minutes}
    */
    readonly durationInMinutes?: number;
    /**
    * Displays the start time of the next maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#start_time CcJob#start_time}
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
export interface SchedulingConfigProperty {
    /**
    * Specifies the end behavior for all job executions after a job reaches the selected endTime.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#end_behavior CcJob#end_behavior}
    */
    readonly endBehavior?: string;
    /**
    * The time a job will stop rollout of the job document to all devices in the target group for a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#end_time CcJob#end_time}
    */
    readonly endTime?: string;
    /**
    * An optional configuration within the SchedulingConfig to setup a recurring maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#maintenance_windows CcJob#maintenance_windows}
    */
    readonly maintenanceWindows?: MaintenanceWindowProperty[] | cdktn.IResolvable;
    /**
    * The time a job will begin rollout of the job document to all devices in the target group for a job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#start_time CcJob#start_time}
    */
    readonly startTime?: string;
}
export class SchedulingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchedulingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.endBehavior = this._endBehavior;
        }
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._maintenanceWindows?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.maintenanceWindows = this._maintenanceWindows?.internalValue;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchedulingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endBehavior = undefined;
            this._endTime = undefined;
            this._maintenanceWindows.internalValue = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endBehavior = value.endBehavior;
            this._endTime = value.endTime;
            this._maintenanceWindows.internalValue = value.maintenanceWindows;
            this._startTime = value.startTime;
        }
    }

    // end_behavior - computed: true, optional: true, required: false
    private _endBehavior?: string; 
    public get endBehavior() {
        return this.getStringAttribute('end_behavior');
    }
    public set endBehavior(value: string) {
        this._endBehavior = value;
    }
    public resetEndBehavior() {
        this._endBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endBehaviorInput() {
        return this._endBehavior;
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string; 
    public get endTime() {
        return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // maintenance_windows - computed: true, optional: true, required: false
    private _maintenanceWindows = new MaintenanceWindowPropertyList(this, "maintenance_windows", false);
    public get maintenanceWindows() {
        return this._maintenanceWindows;
    }
    public putMaintenanceWindows(value: MaintenanceWindowProperty[] | cdktn.IResolvable) {
        this._maintenanceWindows.internalValue = value;
    }
    public resetMaintenanceWindows() {
        this._maintenanceWindows.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceWindowsInput() {
        return this._maintenanceWindows.internalValue;
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
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#key CcJob#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#value CcJob#value}
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
    * Specifies the amount of time, in minutes, this device has to finish execution of this job. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_job#in_progress_timeout_in_minutes CcJob#in_progress_timeout_in_minutes}
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
