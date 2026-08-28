// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMonitoringScheduleProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the endpoint used to run the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#endpoint_name CcMonitoringSchedule#endpoint_name}
    */
    readonly endpointName?: string;
    /**
    * Contains the reason a monitoring job failed, if it failed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#failure_reason CcMonitoringSchedule#failure_reason}
    */
    readonly failureReason?: string;
    /**
    * Describes metadata on the last execution to run, if there was one.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#last_monitoring_execution_summary CcMonitoringSchedule#last_monitoring_execution_summary}
    */
    readonly lastMonitoringExecutionSummary?: CcMonitoringSchedule.MonitoringExecutionSummaryProperty;
    /**
    * The configuration object that specifies the monitoring schedule and defines the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_schedule_config CcMonitoringSchedule#monitoring_schedule_config}
    */
    readonly monitoringScheduleConfig: CcMonitoringSchedule.MonitoringScheduleConfigProperty;
    /**
    * The name of the monitoring schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_schedule_name CcMonitoringSchedule#monitoring_schedule_name}
    */
    readonly monitoringScheduleName: string;
    /**
    * The status of a schedule job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_schedule_status CcMonitoringSchedule#monitoring_schedule_status}
    */
    readonly monitoringScheduleStatus?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#tags CcMonitoringSchedule#tags}
    */
    readonly tags?: CcMonitoringSchedule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule awscc_sagemaker_monitoring_schedule}
*/
export class CcMonitoringSchedule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_monitoring_schedule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMonitoringSchedule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMonitoringSchedule to import
    * @param importFromId The id of the existing CcMonitoringSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMonitoringSchedule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_monitoring_schedule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule awscc_sagemaker_monitoring_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMonitoringScheduleProps
    */
    public constructor(scope: Construct, id: string, config: CcMonitoringScheduleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_monitoring_schedule',
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
        this._endpointName = config.endpointName;
        this._failureReason = config.failureReason;
        this._lastMonitoringExecutionSummary.internalValue = config.lastMonitoringExecutionSummary;
        this._monitoringScheduleConfig.internalValue = config.monitoringScheduleConfig;
        this._monitoringScheduleName = config.monitoringScheduleName;
        this._monitoringScheduleStatus = config.monitoringScheduleStatus;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // endpoint_name - computed: true, optional: true, required: false
    private _endpointName?: string; 
    public get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    public set endpointName(value: string) {
        this._endpointName = value;
    }
    public resetEndpointName() {
        this._endpointName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointNameInput() {
        return this._endpointName;
    }

    // failure_reason - computed: true, optional: true, required: false
    private _failureReason?: string; 
    public get failureReason() {
        return this.getStringAttribute('failure_reason');
    }
    public set failureReason(value: string) {
        this._failureReason = value;
    }
    public resetFailureReason() {
        this._failureReason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureReasonInput() {
        return this._failureReason;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // last_monitoring_execution_summary - computed: true, optional: true, required: false
    private _lastMonitoringExecutionSummary = new CcMonitoringSchedule.MonitoringExecutionSummaryPropertyOutputReference(this, "last_monitoring_execution_summary");
    public get lastMonitoringExecutionSummary() {
        return this._lastMonitoringExecutionSummary;
    }
    public putLastMonitoringExecutionSummary(value: CcMonitoringSchedule.MonitoringExecutionSummaryProperty) {
        this._lastMonitoringExecutionSummary.internalValue = value;
    }
    public resetLastMonitoringExecutionSummary() {
        this._lastMonitoringExecutionSummary.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastMonitoringExecutionSummaryInput() {
        return this._lastMonitoringExecutionSummary.internalValue;
    }

    // monitoring_schedule_arn - computed: true, optional: false, required: false
    public get monitoringScheduleArn() {
        return this.getStringAttribute('monitoring_schedule_arn');
    }

    // monitoring_schedule_config - computed: false, optional: false, required: true
    private _monitoringScheduleConfig = new CcMonitoringSchedule.MonitoringScheduleConfigPropertyOutputReference(this, "monitoring_schedule_config");
    public get monitoringScheduleConfig() {
        return this._monitoringScheduleConfig;
    }
    public putMonitoringScheduleConfig(value: CcMonitoringSchedule.MonitoringScheduleConfigProperty) {
        this._monitoringScheduleConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringScheduleConfigInput() {
        return this._monitoringScheduleConfig.internalValue;
    }

    // monitoring_schedule_name - computed: false, optional: false, required: true
    private _monitoringScheduleName?: string; 
    public get monitoringScheduleName() {
        return this.getStringAttribute('monitoring_schedule_name');
    }
    public set monitoringScheduleName(value: string) {
        this._monitoringScheduleName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringScheduleNameInput() {
        return this._monitoringScheduleName;
    }

    // monitoring_schedule_status - computed: true, optional: true, required: false
    private _monitoringScheduleStatus?: string; 
    public get monitoringScheduleStatus() {
        return this.getStringAttribute('monitoring_schedule_status');
    }
    public set monitoringScheduleStatus(value: string) {
        this._monitoringScheduleStatus = value;
    }
    public resetMonitoringScheduleStatus() {
        this._monitoringScheduleStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringScheduleStatusInput() {
        return this._monitoringScheduleStatus;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMonitoringSchedule.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMonitoringSchedule.TagProperty[] | cdktn.IResolvable) {
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
            endpoint_name: cdktn.stringToTerraform(this._endpointName),
            failure_reason: cdktn.stringToTerraform(this._failureReason),
            last_monitoring_execution_summary: ccMonitoringScheduleMonitoringExecutionSummaryPropertyToTerraform(this._lastMonitoringExecutionSummary.internalValue),
            monitoring_schedule_config: ccMonitoringScheduleMonitoringScheduleConfigPropertyToTerraform(this._monitoringScheduleConfig.internalValue),
            monitoring_schedule_name: cdktn.stringToTerraform(this._monitoringScheduleName),
            monitoring_schedule_status: cdktn.stringToTerraform(this._monitoringScheduleStatus),
            tags: cdktn.listMapper(ccMonitoringScheduleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            endpoint_name: {
                value: cdktn.stringToHclTerraform(this._endpointName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            failure_reason: {
                value: cdktn.stringToHclTerraform(this._failureReason),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            last_monitoring_execution_summary: {
                value: ccMonitoringScheduleMonitoringExecutionSummaryPropertyToHclTerraform(this._lastMonitoringExecutionSummary.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMonitoringSchedule.MonitoringExecutionSummaryProperty",
            },
            monitoring_schedule_config: {
                value: ccMonitoringScheduleMonitoringScheduleConfigPropertyToHclTerraform(this._monitoringScheduleConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMonitoringSchedule.MonitoringScheduleConfigProperty",
            },
            monitoring_schedule_name: {
                value: cdktn.stringToHclTerraform(this._monitoringScheduleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            monitoring_schedule_status: {
                value: cdktn.stringToHclTerraform(this._monitoringScheduleStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMonitoringScheduleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMonitoringSchedule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMonitoringScheduleMonitoringExecutionSummaryPropertyToTerraform(struct?: CcMonitoringSchedule.MonitoringExecutionSummaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        creation_time: cdktn.stringToTerraform(struct!.creationTime),
        endpoint_name: cdktn.stringToTerraform(struct!.endpointName),
        failure_reason: cdktn.stringToTerraform(struct!.failureReason),
        last_modified_time: cdktn.stringToTerraform(struct!.lastModifiedTime),
        monitoring_execution_status: cdktn.stringToTerraform(struct!.monitoringExecutionStatus),
        monitoring_schedule_name: cdktn.stringToTerraform(struct!.monitoringScheduleName),
        processing_job_arn: cdktn.stringToTerraform(struct!.processingJobArn),
        scheduled_time: cdktn.stringToTerraform(struct!.scheduledTime),
    }
}


export function ccMonitoringScheduleMonitoringExecutionSummaryPropertyToHclTerraform(struct?: CcMonitoringSchedule.MonitoringExecutionSummaryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        creation_time: {
            value: cdktn.stringToHclTerraform(struct!.creationTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint_name: {
            value: cdktn.stringToHclTerraform(struct!.endpointName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        failure_reason: {
            value: cdktn.stringToHclTerraform(struct!.failureReason),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        last_modified_time: {
            value: cdktn.stringToHclTerraform(struct!.lastModifiedTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monitoring_execution_status: {
            value: cdktn.stringToHclTerraform(struct!.monitoringExecutionStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monitoring_schedule_name: {
            value: cdktn.stringToHclTerraform(struct!.monitoringScheduleName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        processing_job_arn: {
            value: cdktn.stringToHclTerraform(struct!.processingJobArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheduled_time: {
            value: cdktn.stringToHclTerraform(struct!.scheduledTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleConstraintsResourcePropertyToTerraform(struct?: CcMonitoringSchedule.ConstraintsResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccMonitoringScheduleConstraintsResourcePropertyToHclTerraform(struct?: CcMonitoringSchedule.ConstraintsResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleStatisticsResourcePropertyToTerraform(struct?: CcMonitoringSchedule.StatisticsResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccMonitoringScheduleStatisticsResourcePropertyToHclTerraform(struct?: CcMonitoringSchedule.StatisticsResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleBaselineConfigPropertyToTerraform(struct?: CcMonitoringSchedule.BaselineConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraints_resource: ccMonitoringScheduleConstraintsResourcePropertyToTerraform(struct!.constraintsResource),
        statistics_resource: ccMonitoringScheduleStatisticsResourcePropertyToTerraform(struct!.statisticsResource),
    }
}


export function ccMonitoringScheduleBaselineConfigPropertyToHclTerraform(struct?: CcMonitoringSchedule.BaselineConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraints_resource: {
            value: ccMonitoringScheduleConstraintsResourcePropertyToHclTerraform(struct!.constraintsResource),
            isBlock: true,
            type: "struct",
            storageClassType: "ConstraintsResourceProperty",
        },
        statistics_resource: {
            value: ccMonitoringScheduleStatisticsResourcePropertyToHclTerraform(struct!.statisticsResource),
            isBlock: true,
            type: "struct",
            storageClassType: "StatisticsResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleMonitoringAppSpecificationPropertyToTerraform(struct?: CcMonitoringSchedule.MonitoringAppSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_arguments: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerArguments),
        container_entrypoint: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.containerEntrypoint),
        image_uri: cdktn.stringToTerraform(struct!.imageUri),
        post_analytics_processor_source_uri: cdktn.stringToTerraform(struct!.postAnalyticsProcessorSourceUri),
        record_preprocessor_source_uri: cdktn.stringToTerraform(struct!.recordPreprocessorSourceUri),
    }
}


export function ccMonitoringScheduleMonitoringAppSpecificationPropertyToHclTerraform(struct?: CcMonitoringSchedule.MonitoringAppSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_arguments: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerArguments),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        container_entrypoint: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.containerEntrypoint),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        image_uri: {
            value: cdktn.stringToHclTerraform(struct!.imageUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        post_analytics_processor_source_uri: {
            value: cdktn.stringToHclTerraform(struct!.postAnalyticsProcessorSourceUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        record_preprocessor_source_uri: {
            value: cdktn.stringToHclTerraform(struct!.recordPreprocessorSourceUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleCsvPropertyToTerraform(struct?: CcMonitoringSchedule.CsvProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header: cdktn.booleanToTerraform(struct!.header),
    }
}


export function ccMonitoringScheduleCsvPropertyToHclTerraform(struct?: CcMonitoringSchedule.CsvProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header: {
            value: cdktn.booleanToHclTerraform(struct!.header),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleJsonPropertyToTerraform(struct?: CcMonitoringSchedule.JsonProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        line: cdktn.booleanToTerraform(struct!.line),
    }
}


export function ccMonitoringScheduleJsonPropertyToHclTerraform(struct?: CcMonitoringSchedule.JsonProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        line: {
            value: cdktn.booleanToHclTerraform(struct!.line),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleDatasetFormatPropertyToTerraform(struct?: CcMonitoringSchedule.DatasetFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        csv: ccMonitoringScheduleCsvPropertyToTerraform(struct!.csv),
        json: ccMonitoringScheduleJsonPropertyToTerraform(struct!.json),
        parquet: cdktn.booleanToTerraform(struct!.parquet),
    }
}


export function ccMonitoringScheduleDatasetFormatPropertyToHclTerraform(struct?: CcMonitoringSchedule.DatasetFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        csv: {
            value: ccMonitoringScheduleCsvPropertyToHclTerraform(struct!.csv),
            isBlock: true,
            type: "struct",
            storageClassType: "CsvProperty",
        },
        json: {
            value: ccMonitoringScheduleJsonPropertyToHclTerraform(struct!.json),
            isBlock: true,
            type: "struct",
            storageClassType: "JsonProperty",
        },
        parquet: {
            value: cdktn.booleanToHclTerraform(struct!.parquet),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleBatchTransformInputPropertyToTerraform(struct?: CcMonitoringSchedule.BatchTransformInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_captured_destination_s3_uri: cdktn.stringToTerraform(struct!.dataCapturedDestinationS3Uri),
        dataset_format: ccMonitoringScheduleDatasetFormatPropertyToTerraform(struct!.datasetFormat),
        exclude_features_attribute: cdktn.stringToTerraform(struct!.excludeFeaturesAttribute),
        local_path: cdktn.stringToTerraform(struct!.localPath),
        s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
        s3_input_mode: cdktn.stringToTerraform(struct!.s3InputMode),
    }
}


export function ccMonitoringScheduleBatchTransformInputPropertyToHclTerraform(struct?: CcMonitoringSchedule.BatchTransformInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_captured_destination_s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.dataCapturedDestinationS3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dataset_format: {
            value: ccMonitoringScheduleDatasetFormatPropertyToHclTerraform(struct!.datasetFormat),
            isBlock: true,
            type: "struct",
            storageClassType: "DatasetFormatProperty",
        },
        exclude_features_attribute: {
            value: cdktn.stringToHclTerraform(struct!.excludeFeaturesAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_path: {
            value: cdktn.stringToHclTerraform(struct!.localPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_data_distribution_type: {
            value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_input_mode: {
            value: cdktn.stringToHclTerraform(struct!.s3InputMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleEndpointInputPropertyToTerraform(struct?: CcMonitoringSchedule.EndpointInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_name: cdktn.stringToTerraform(struct!.endpointName),
        exclude_features_attribute: cdktn.stringToTerraform(struct!.excludeFeaturesAttribute),
        local_path: cdktn.stringToTerraform(struct!.localPath),
        s3_data_distribution_type: cdktn.stringToTerraform(struct!.s3DataDistributionType),
        s3_input_mode: cdktn.stringToTerraform(struct!.s3InputMode),
    }
}


export function ccMonitoringScheduleEndpointInputPropertyToHclTerraform(struct?: CcMonitoringSchedule.EndpointInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_name: {
            value: cdktn.stringToHclTerraform(struct!.endpointName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exclude_features_attribute: {
            value: cdktn.stringToHclTerraform(struct!.excludeFeaturesAttribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_path: {
            value: cdktn.stringToHclTerraform(struct!.localPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_data_distribution_type: {
            value: cdktn.stringToHclTerraform(struct!.s3DataDistributionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_input_mode: {
            value: cdktn.stringToHclTerraform(struct!.s3InputMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleMonitoringInputPropertyToTerraform(struct?: CcMonitoringSchedule.MonitoringInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_transform_input: ccMonitoringScheduleBatchTransformInputPropertyToTerraform(struct!.batchTransformInput),
        endpoint_input: ccMonitoringScheduleEndpointInputPropertyToTerraform(struct!.endpointInput),
    }
}


export function ccMonitoringScheduleMonitoringInputPropertyToHclTerraform(struct?: CcMonitoringSchedule.MonitoringInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_transform_input: {
            value: ccMonitoringScheduleBatchTransformInputPropertyToHclTerraform(struct!.batchTransformInput),
            isBlock: true,
            type: "struct",
            storageClassType: "BatchTransformInputProperty",
        },
        endpoint_input: {
            value: ccMonitoringScheduleEndpointInputPropertyToHclTerraform(struct!.endpointInput),
            isBlock: true,
            type: "struct",
            storageClassType: "EndpointInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleS3OutputPropertyToTerraform(struct?: CcMonitoringSchedule.S3OutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        local_path: cdktn.stringToTerraform(struct!.localPath),
        s3_upload_mode: cdktn.stringToTerraform(struct!.s3UploadMode),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccMonitoringScheduleS3OutputPropertyToHclTerraform(struct?: CcMonitoringSchedule.S3OutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        local_path: {
            value: cdktn.stringToHclTerraform(struct!.localPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_upload_mode: {
            value: cdktn.stringToHclTerraform(struct!.s3UploadMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleMonitoringOutputPropertyToTerraform(struct?: CcMonitoringSchedule.MonitoringOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_output: ccMonitoringScheduleS3OutputPropertyToTerraform(struct!.s3Output),
    }
}


export function ccMonitoringScheduleMonitoringOutputPropertyToHclTerraform(struct?: CcMonitoringSchedule.MonitoringOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_output: {
            value: ccMonitoringScheduleS3OutputPropertyToHclTerraform(struct!.s3Output),
            isBlock: true,
            type: "struct",
            storageClassType: "S3OutputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleMonitoringOutputConfigPropertyToTerraform(struct?: CcMonitoringSchedule.MonitoringOutputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        monitoring_outputs: cdktn.listMapper(ccMonitoringScheduleMonitoringOutputPropertyToTerraform, false)(struct!.monitoringOutputs),
    }
}


export function ccMonitoringScheduleMonitoringOutputConfigPropertyToHclTerraform(struct?: CcMonitoringSchedule.MonitoringOutputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monitoring_outputs: {
            value: cdktn.listMapperHcl(ccMonitoringScheduleMonitoringOutputPropertyToHclTerraform, false)(struct!.monitoringOutputs),
            isBlock: true,
            type: "list",
            storageClassType: "MonitoringOutputPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleClusterConfigPropertyToTerraform(struct?: CcMonitoringSchedule.ClusterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_count: cdktn.numberToTerraform(struct!.instanceCount),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
        volume_size_in_gb: cdktn.numberToTerraform(struct!.volumeSizeInGb),
    }
}


export function ccMonitoringScheduleClusterConfigPropertyToHclTerraform(struct?: CcMonitoringSchedule.ClusterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_count: {
            value: cdktn.numberToHclTerraform(struct!.instanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_size_in_gb: {
            value: cdktn.numberToHclTerraform(struct!.volumeSizeInGb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleMonitoringResourcesPropertyToTerraform(struct?: CcMonitoringSchedule.MonitoringResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_config: ccMonitoringScheduleClusterConfigPropertyToTerraform(struct!.clusterConfig),
    }
}


export function ccMonitoringScheduleMonitoringResourcesPropertyToHclTerraform(struct?: CcMonitoringSchedule.MonitoringResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_config: {
            value: ccMonitoringScheduleClusterConfigPropertyToHclTerraform(struct!.clusterConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ClusterConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleVpcConfigPropertyToTerraform(struct?: CcMonitoringSchedule.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccMonitoringScheduleVpcConfigPropertyToHclTerraform(struct?: CcMonitoringSchedule.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleNetworkConfigPropertyToTerraform(struct?: CcMonitoringSchedule.NetworkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_inter_container_traffic_encryption: cdktn.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
        enable_network_isolation: cdktn.booleanToTerraform(struct!.enableNetworkIsolation),
        vpc_config: ccMonitoringScheduleVpcConfigPropertyToTerraform(struct!.vpcConfig),
    }
}


export function ccMonitoringScheduleNetworkConfigPropertyToHclTerraform(struct?: CcMonitoringSchedule.NetworkConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_inter_container_traffic_encryption: {
            value: cdktn.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_network_isolation: {
            value: cdktn.booleanToHclTerraform(struct!.enableNetworkIsolation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        vpc_config: {
            value: ccMonitoringScheduleVpcConfigPropertyToHclTerraform(struct!.vpcConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleStoppingConditionPropertyToTerraform(struct?: CcMonitoringSchedule.StoppingConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_runtime_in_seconds: cdktn.numberToTerraform(struct!.maxRuntimeInSeconds),
    }
}


export function ccMonitoringScheduleStoppingConditionPropertyToHclTerraform(struct?: CcMonitoringSchedule.StoppingConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_runtime_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maxRuntimeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleMonitoringJobDefinitionPropertyToTerraform(struct?: CcMonitoringSchedule.MonitoringJobDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        baseline_config: ccMonitoringScheduleBaselineConfigPropertyToTerraform(struct!.baselineConfig),
        environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
        monitoring_app_specification: ccMonitoringScheduleMonitoringAppSpecificationPropertyToTerraform(struct!.monitoringAppSpecification),
        monitoring_inputs: cdktn.listMapper(ccMonitoringScheduleMonitoringInputPropertyToTerraform, false)(struct!.monitoringInputs),
        monitoring_output_config: ccMonitoringScheduleMonitoringOutputConfigPropertyToTerraform(struct!.monitoringOutputConfig),
        monitoring_resources: ccMonitoringScheduleMonitoringResourcesPropertyToTerraform(struct!.monitoringResources),
        network_config: ccMonitoringScheduleNetworkConfigPropertyToTerraform(struct!.networkConfig),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        stopping_condition: ccMonitoringScheduleStoppingConditionPropertyToTerraform(struct!.stoppingCondition),
    }
}


export function ccMonitoringScheduleMonitoringJobDefinitionPropertyToHclTerraform(struct?: CcMonitoringSchedule.MonitoringJobDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        baseline_config: {
            value: ccMonitoringScheduleBaselineConfigPropertyToHclTerraform(struct!.baselineConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "BaselineConfigProperty",
        },
        environment: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        monitoring_app_specification: {
            value: ccMonitoringScheduleMonitoringAppSpecificationPropertyToHclTerraform(struct!.monitoringAppSpecification),
            isBlock: true,
            type: "struct",
            storageClassType: "MonitoringAppSpecificationProperty",
        },
        monitoring_inputs: {
            value: cdktn.listMapperHcl(ccMonitoringScheduleMonitoringInputPropertyToHclTerraform, false)(struct!.monitoringInputs),
            isBlock: true,
            type: "list",
            storageClassType: "MonitoringInputPropertyList",
        },
        monitoring_output_config: {
            value: ccMonitoringScheduleMonitoringOutputConfigPropertyToHclTerraform(struct!.monitoringOutputConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "MonitoringOutputConfigProperty",
        },
        monitoring_resources: {
            value: ccMonitoringScheduleMonitoringResourcesPropertyToHclTerraform(struct!.monitoringResources),
            isBlock: true,
            type: "struct",
            storageClassType: "MonitoringResourcesProperty",
        },
        network_config: {
            value: ccMonitoringScheduleNetworkConfigPropertyToHclTerraform(struct!.networkConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkConfigProperty",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stopping_condition: {
            value: ccMonitoringScheduleStoppingConditionPropertyToHclTerraform(struct!.stoppingCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "StoppingConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleScheduleConfigPropertyToTerraform(struct?: CcMonitoringSchedule.ScheduleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_analysis_end_time: cdktn.stringToTerraform(struct!.dataAnalysisEndTime),
        data_analysis_start_time: cdktn.stringToTerraform(struct!.dataAnalysisStartTime),
        schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
    }
}


export function ccMonitoringScheduleScheduleConfigPropertyToHclTerraform(struct?: CcMonitoringSchedule.ScheduleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_analysis_end_time: {
            value: cdktn.stringToHclTerraform(struct!.dataAnalysisEndTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_analysis_start_time: {
            value: cdktn.stringToHclTerraform(struct!.dataAnalysisStartTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_expression: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleMonitoringScheduleConfigPropertyToTerraform(struct?: CcMonitoringSchedule.MonitoringScheduleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        monitoring_job_definition: ccMonitoringScheduleMonitoringJobDefinitionPropertyToTerraform(struct!.monitoringJobDefinition),
        monitoring_job_definition_name: cdktn.stringToTerraform(struct!.monitoringJobDefinitionName),
        monitoring_type: cdktn.stringToTerraform(struct!.monitoringType),
        schedule_config: ccMonitoringScheduleScheduleConfigPropertyToTerraform(struct!.scheduleConfig),
    }
}


export function ccMonitoringScheduleMonitoringScheduleConfigPropertyToHclTerraform(struct?: CcMonitoringSchedule.MonitoringScheduleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        monitoring_job_definition: {
            value: ccMonitoringScheduleMonitoringJobDefinitionPropertyToHclTerraform(struct!.monitoringJobDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "MonitoringJobDefinitionProperty",
        },
        monitoring_job_definition_name: {
            value: cdktn.stringToHclTerraform(struct!.monitoringJobDefinitionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monitoring_type: {
            value: cdktn.stringToHclTerraform(struct!.monitoringType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_config: {
            value: ccMonitoringScheduleScheduleConfigPropertyToHclTerraform(struct!.scheduleConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ScheduleConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMonitoringScheduleTagPropertyToTerraform(struct?: CcMonitoringSchedule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMonitoringScheduleTagPropertyToHclTerraform(struct?: CcMonitoringSchedule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMonitoringSchedule {
export interface MonitoringExecutionSummaryProperty {
    /**
    * The time at which the monitoring job was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#creation_time CcMonitoringSchedule#creation_time}
    */
    readonly creationTime?: string;
    /**
    * The name of the endpoint used to run the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#endpoint_name CcMonitoringSchedule#endpoint_name}
    */
    readonly endpointName?: string;
    /**
    * Contains the reason a monitoring job failed, if it failed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#failure_reason CcMonitoringSchedule#failure_reason}
    */
    readonly failureReason?: string;
    /**
    * A timestamp that indicates the last time the monitoring job was modified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#last_modified_time CcMonitoringSchedule#last_modified_time}
    */
    readonly lastModifiedTime?: string;
    /**
    * The status of the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_execution_status CcMonitoringSchedule#monitoring_execution_status}
    */
    readonly monitoringExecutionStatus?: string;
    /**
    * The name of the monitoring schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_schedule_name CcMonitoringSchedule#monitoring_schedule_name}
    */
    readonly monitoringScheduleName?: string;
    /**
    * The Amazon Resource Name (ARN) of the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#processing_job_arn CcMonitoringSchedule#processing_job_arn}
    */
    readonly processingJobArn?: string;
    /**
    * The time the monitoring job was scheduled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#scheduled_time CcMonitoringSchedule#scheduled_time}
    */
    readonly scheduledTime?: string;
}
export class MonitoringExecutionSummaryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringExecutionSummaryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._creationTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.creationTime = this._creationTime;
        }
        if (this._endpointName !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointName = this._endpointName;
        }
        if (this._failureReason !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureReason = this._failureReason;
        }
        if (this._lastModifiedTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastModifiedTime = this._lastModifiedTime;
        }
        if (this._monitoringExecutionStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringExecutionStatus = this._monitoringExecutionStatus;
        }
        if (this._monitoringScheduleName !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringScheduleName = this._monitoringScheduleName;
        }
        if (this._processingJobArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.processingJobArn = this._processingJobArn;
        }
        if (this._scheduledTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduledTime = this._scheduledTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringExecutionSummaryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._creationTime = undefined;
            this._endpointName = undefined;
            this._failureReason = undefined;
            this._lastModifiedTime = undefined;
            this._monitoringExecutionStatus = undefined;
            this._monitoringScheduleName = undefined;
            this._processingJobArn = undefined;
            this._scheduledTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._creationTime = value.creationTime;
            this._endpointName = value.endpointName;
            this._failureReason = value.failureReason;
            this._lastModifiedTime = value.lastModifiedTime;
            this._monitoringExecutionStatus = value.monitoringExecutionStatus;
            this._monitoringScheduleName = value.monitoringScheduleName;
            this._processingJobArn = value.processingJobArn;
            this._scheduledTime = value.scheduledTime;
        }
    }

    // creation_time - computed: true, optional: true, required: false
    private _creationTime?: string; 
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }
    public set creationTime(value: string) {
        this._creationTime = value;
    }
    public resetCreationTime() {
        this._creationTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get creationTimeInput() {
        return this._creationTime;
    }

    // endpoint_name - computed: true, optional: true, required: false
    private _endpointName?: string; 
    public get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    public set endpointName(value: string) {
        this._endpointName = value;
    }
    public resetEndpointName() {
        this._endpointName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointNameInput() {
        return this._endpointName;
    }

    // failure_reason - computed: true, optional: true, required: false
    private _failureReason?: string; 
    public get failureReason() {
        return this.getStringAttribute('failure_reason');
    }
    public set failureReason(value: string) {
        this._failureReason = value;
    }
    public resetFailureReason() {
        this._failureReason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureReasonInput() {
        return this._failureReason;
    }

    // last_modified_time - computed: true, optional: true, required: false
    private _lastModifiedTime?: string; 
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }
    public set lastModifiedTime(value: string) {
        this._lastModifiedTime = value;
    }
    public resetLastModifiedTime() {
        this._lastModifiedTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastModifiedTimeInput() {
        return this._lastModifiedTime;
    }

    // monitoring_execution_status - computed: true, optional: true, required: false
    private _monitoringExecutionStatus?: string; 
    public get monitoringExecutionStatus() {
        return this.getStringAttribute('monitoring_execution_status');
    }
    public set monitoringExecutionStatus(value: string) {
        this._monitoringExecutionStatus = value;
    }
    public resetMonitoringExecutionStatus() {
        this._monitoringExecutionStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringExecutionStatusInput() {
        return this._monitoringExecutionStatus;
    }

    // monitoring_schedule_name - computed: true, optional: true, required: false
    private _monitoringScheduleName?: string; 
    public get monitoringScheduleName() {
        return this.getStringAttribute('monitoring_schedule_name');
    }
    public set monitoringScheduleName(value: string) {
        this._monitoringScheduleName = value;
    }
    public resetMonitoringScheduleName() {
        this._monitoringScheduleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringScheduleNameInput() {
        return this._monitoringScheduleName;
    }

    // processing_job_arn - computed: true, optional: true, required: false
    private _processingJobArn?: string; 
    public get processingJobArn() {
        return this.getStringAttribute('processing_job_arn');
    }
    public set processingJobArn(value: string) {
        this._processingJobArn = value;
    }
    public resetProcessingJobArn() {
        this._processingJobArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processingJobArnInput() {
        return this._processingJobArn;
    }

    // scheduled_time - computed: true, optional: true, required: false
    private _scheduledTime?: string; 
    public get scheduledTime() {
        return this.getStringAttribute('scheduled_time');
    }
    public set scheduledTime(value: string) {
        this._scheduledTime = value;
    }
    public resetScheduledTime() {
        this._scheduledTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledTimeInput() {
        return this._scheduledTime;
    }
}
export interface ConstraintsResourceProperty {
    /**
    * The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#s3_uri CcMonitoringSchedule#s3_uri}
    */
    readonly s3Uri?: string;
}
export class ConstraintsResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConstraintsResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConstraintsResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Uri = value.s3Uri;
        }
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface StatisticsResourceProperty {
    /**
    * The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#s3_uri CcMonitoringSchedule#s3_uri}
    */
    readonly s3Uri?: string;
}
export class StatisticsResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StatisticsResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatisticsResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Uri = value.s3Uri;
        }
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface BaselineConfigProperty {
    /**
    * The baseline constraints resource for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#constraints_resource CcMonitoringSchedule#constraints_resource}
    */
    readonly constraintsResource?: ConstraintsResourceProperty;
    /**
    * The baseline statistics resource for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#statistics_resource CcMonitoringSchedule#statistics_resource}
    */
    readonly statisticsResource?: StatisticsResourceProperty;
}
export class BaselineConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BaselineConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraintsResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraintsResource = this._constraintsResource?.internalValue;
        }
        if (this._statisticsResource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statisticsResource = this._statisticsResource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BaselineConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraintsResource.internalValue = undefined;
            this._statisticsResource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraintsResource.internalValue = value.constraintsResource;
            this._statisticsResource.internalValue = value.statisticsResource;
        }
    }

    // constraints_resource - computed: true, optional: true, required: false
    private _constraintsResource = new ConstraintsResourcePropertyOutputReference(this, "constraints_resource");
    public get constraintsResource() {
        return this._constraintsResource;
    }
    public putConstraintsResource(value: ConstraintsResourceProperty) {
        this._constraintsResource.internalValue = value;
    }
    public resetConstraintsResource() {
        this._constraintsResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintsResourceInput() {
        return this._constraintsResource.internalValue;
    }

    // statistics_resource - computed: true, optional: true, required: false
    private _statisticsResource = new StatisticsResourcePropertyOutputReference(this, "statistics_resource");
    public get statisticsResource() {
        return this._statisticsResource;
    }
    public putStatisticsResource(value: StatisticsResourceProperty) {
        this._statisticsResource.internalValue = value;
    }
    public resetStatisticsResource() {
        this._statisticsResource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticsResourceInput() {
        return this._statisticsResource.internalValue;
    }
}
export interface MonitoringAppSpecificationProperty {
    /**
    * An array of arguments for the container used to run the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#container_arguments CcMonitoringSchedule#container_arguments}
    */
    readonly containerArguments?: string[];
    /**
    * Specifies the entrypoint for a container used to run the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#container_entrypoint CcMonitoringSchedule#container_entrypoint}
    */
    readonly containerEntrypoint?: string[];
    /**
    * The container image to be run by the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#image_uri CcMonitoringSchedule#image_uri}
    */
    readonly imageUri?: string;
    /**
    * An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#post_analytics_processor_source_uri CcMonitoringSchedule#post_analytics_processor_source_uri}
    */
    readonly postAnalyticsProcessorSourceUri?: string;
    /**
    * An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#record_preprocessor_source_uri CcMonitoringSchedule#record_preprocessor_source_uri}
    */
    readonly recordPreprocessorSourceUri?: string;
}
export class MonitoringAppSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringAppSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerArguments !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerArguments = this._containerArguments;
        }
        if (this._containerEntrypoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerEntrypoint = this._containerEntrypoint;
        }
        if (this._imageUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageUri = this._imageUri;
        }
        if (this._postAnalyticsProcessorSourceUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.postAnalyticsProcessorSourceUri = this._postAnalyticsProcessorSourceUri;
        }
        if (this._recordPreprocessorSourceUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordPreprocessorSourceUri = this._recordPreprocessorSourceUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringAppSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerArguments = undefined;
            this._containerEntrypoint = undefined;
            this._imageUri = undefined;
            this._postAnalyticsProcessorSourceUri = undefined;
            this._recordPreprocessorSourceUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerArguments = value.containerArguments;
            this._containerEntrypoint = value.containerEntrypoint;
            this._imageUri = value.imageUri;
            this._postAnalyticsProcessorSourceUri = value.postAnalyticsProcessorSourceUri;
            this._recordPreprocessorSourceUri = value.recordPreprocessorSourceUri;
        }
    }

    // container_arguments - computed: true, optional: true, required: false
    private _containerArguments?: string[]; 
    public get containerArguments() {
        return this.getListAttribute('container_arguments');
    }
    public set containerArguments(value: string[]) {
        this._containerArguments = value;
    }
    public resetContainerArguments() {
        this._containerArguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerArgumentsInput() {
        return this._containerArguments;
    }

    // container_entrypoint - computed: true, optional: true, required: false
    private _containerEntrypoint?: string[]; 
    public get containerEntrypoint() {
        return this.getListAttribute('container_entrypoint');
    }
    public set containerEntrypoint(value: string[]) {
        this._containerEntrypoint = value;
    }
    public resetContainerEntrypoint() {
        this._containerEntrypoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerEntrypointInput() {
        return this._containerEntrypoint;
    }

    // image_uri - computed: true, optional: true, required: false
    private _imageUri?: string; 
    public get imageUri() {
        return this.getStringAttribute('image_uri');
    }
    public set imageUri(value: string) {
        this._imageUri = value;
    }
    public resetImageUri() {
        this._imageUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageUriInput() {
        return this._imageUri;
    }

    // post_analytics_processor_source_uri - computed: true, optional: true, required: false
    private _postAnalyticsProcessorSourceUri?: string; 
    public get postAnalyticsProcessorSourceUri() {
        return this.getStringAttribute('post_analytics_processor_source_uri');
    }
    public set postAnalyticsProcessorSourceUri(value: string) {
        this._postAnalyticsProcessorSourceUri = value;
    }
    public resetPostAnalyticsProcessorSourceUri() {
        this._postAnalyticsProcessorSourceUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postAnalyticsProcessorSourceUriInput() {
        return this._postAnalyticsProcessorSourceUri;
    }

    // record_preprocessor_source_uri - computed: true, optional: true, required: false
    private _recordPreprocessorSourceUri?: string; 
    public get recordPreprocessorSourceUri() {
        return this.getStringAttribute('record_preprocessor_source_uri');
    }
    public set recordPreprocessorSourceUri(value: string) {
        this._recordPreprocessorSourceUri = value;
    }
    public resetRecordPreprocessorSourceUri() {
        this._recordPreprocessorSourceUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordPreprocessorSourceUriInput() {
        return this._recordPreprocessorSourceUri;
    }
}
export interface CsvProperty {
    /**
    * A boolean flag indicating if given CSV has header
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#header CcMonitoringSchedule#header}
    */
    readonly header?: boolean | cdktn.IResolvable;
}
export class CsvPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CsvProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._header !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CsvProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._header = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._header = value.header;
        }
    }

    // header - computed: true, optional: true, required: false
    private _header?: boolean | cdktn.IResolvable; 
    public get header() {
        return this.getBooleanAttribute('header');
    }
    public set header(value: boolean | cdktn.IResolvable) {
        this._header = value;
    }
    public resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header;
    }
}
export interface JsonProperty {
    /**
    * A boolean flag indicating if it is JSON line format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#line CcMonitoringSchedule#line}
    */
    readonly line?: boolean | cdktn.IResolvable;
}
export class JsonPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JsonProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._line !== undefined) {
            hasAnyValues = true;
            internalValueResult.line = this._line;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JsonProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._line = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._line = value.line;
        }
    }

    // line - computed: true, optional: true, required: false
    private _line?: boolean | cdktn.IResolvable; 
    public get line() {
        return this.getBooleanAttribute('line');
    }
    public set line(value: boolean | cdktn.IResolvable) {
        this._line = value;
    }
    public resetLine() {
        this._line = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lineInput() {
        return this._line;
    }
}
export interface DatasetFormatProperty {
    /**
    * The CSV format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#csv CcMonitoringSchedule#csv}
    */
    readonly csv?: CsvProperty;
    /**
    * The Json format
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#json CcMonitoringSchedule#json}
    */
    readonly json?: JsonProperty;
    /**
    * A flag indicating if the dataset format is Parquet
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#parquet CcMonitoringSchedule#parquet}
    */
    readonly parquet?: boolean | cdktn.IResolvable;
}
export class DatasetFormatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatasetFormatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._csv?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.csv = this._csv?.internalValue;
        }
        if (this._json?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.json = this._json?.internalValue;
        }
        if (this._parquet !== undefined) {
            hasAnyValues = true;
            internalValueResult.parquet = this._parquet;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatasetFormatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._csv.internalValue = undefined;
            this._json.internalValue = undefined;
            this._parquet = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._csv.internalValue = value.csv;
            this._json.internalValue = value.json;
            this._parquet = value.parquet;
        }
    }

    // csv - computed: true, optional: true, required: false
    private _csv = new CsvPropertyOutputReference(this, "csv");
    public get csv() {
        return this._csv;
    }
    public putCsv(value: CsvProperty) {
        this._csv.internalValue = value;
    }
    public resetCsv() {
        this._csv.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvInput() {
        return this._csv.internalValue;
    }

    // json - computed: true, optional: true, required: false
    private _json = new JsonPropertyOutputReference(this, "json");
    public get json() {
        return this._json;
    }
    public putJson(value: JsonProperty) {
        this._json.internalValue = value;
    }
    public resetJson() {
        this._json.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jsonInput() {
        return this._json.internalValue;
    }

    // parquet - computed: true, optional: true, required: false
    private _parquet?: boolean | cdktn.IResolvable; 
    public get parquet() {
        return this.getBooleanAttribute('parquet');
    }
    public set parquet(value: boolean | cdktn.IResolvable) {
        this._parquet = value;
    }
    public resetParquet() {
        this._parquet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parquetInput() {
        return this._parquet;
    }
}
export interface BatchTransformInputProperty {
    /**
    * A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#data_captured_destination_s3_uri CcMonitoringSchedule#data_captured_destination_s3_uri}
    */
    readonly dataCapturedDestinationS3Uri?: string;
    /**
    * The dataset format of the data to monitor
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#dataset_format CcMonitoringSchedule#dataset_format}
    */
    readonly datasetFormat?: DatasetFormatProperty;
    /**
    * Indexes or names of the features to be excluded from analysis
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#exclude_features_attribute CcMonitoringSchedule#exclude_features_attribute}
    */
    readonly excludeFeaturesAttribute?: string;
    /**
    * Path to the filesystem where the endpoint data is available to the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#local_path CcMonitoringSchedule#local_path}
    */
    readonly localPath?: string;
    /**
    * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#s3_data_distribution_type CcMonitoringSchedule#s3_data_distribution_type}
    */
    readonly s3DataDistributionType?: string;
    /**
    * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#s3_input_mode CcMonitoringSchedule#s3_input_mode}
    */
    readonly s3InputMode?: string;
}
export class BatchTransformInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BatchTransformInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataCapturedDestinationS3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataCapturedDestinationS3Uri = this._dataCapturedDestinationS3Uri;
        }
        if (this._datasetFormat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.datasetFormat = this._datasetFormat?.internalValue;
        }
        if (this._excludeFeaturesAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeFeaturesAttribute = this._excludeFeaturesAttribute;
        }
        if (this._localPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.localPath = this._localPath;
        }
        if (this._s3DataDistributionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
        }
        if (this._s3InputMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3InputMode = this._s3InputMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchTransformInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataCapturedDestinationS3Uri = undefined;
            this._datasetFormat.internalValue = undefined;
            this._excludeFeaturesAttribute = undefined;
            this._localPath = undefined;
            this._s3DataDistributionType = undefined;
            this._s3InputMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataCapturedDestinationS3Uri = value.dataCapturedDestinationS3Uri;
            this._datasetFormat.internalValue = value.datasetFormat;
            this._excludeFeaturesAttribute = value.excludeFeaturesAttribute;
            this._localPath = value.localPath;
            this._s3DataDistributionType = value.s3DataDistributionType;
            this._s3InputMode = value.s3InputMode;
        }
    }

    // data_captured_destination_s3_uri - computed: true, optional: true, required: false
    private _dataCapturedDestinationS3Uri?: string; 
    public get dataCapturedDestinationS3Uri() {
        return this.getStringAttribute('data_captured_destination_s3_uri');
    }
    public set dataCapturedDestinationS3Uri(value: string) {
        this._dataCapturedDestinationS3Uri = value;
    }
    public resetDataCapturedDestinationS3Uri() {
        this._dataCapturedDestinationS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCapturedDestinationS3UriInput() {
        return this._dataCapturedDestinationS3Uri;
    }

    // dataset_format - computed: true, optional: true, required: false
    private _datasetFormat = new DatasetFormatPropertyOutputReference(this, "dataset_format");
    public get datasetFormat() {
        return this._datasetFormat;
    }
    public putDatasetFormat(value: DatasetFormatProperty) {
        this._datasetFormat.internalValue = value;
    }
    public resetDatasetFormat() {
        this._datasetFormat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetFormatInput() {
        return this._datasetFormat.internalValue;
    }

    // exclude_features_attribute - computed: true, optional: true, required: false
    private _excludeFeaturesAttribute?: string; 
    public get excludeFeaturesAttribute() {
        return this.getStringAttribute('exclude_features_attribute');
    }
    public set excludeFeaturesAttribute(value: string) {
        this._excludeFeaturesAttribute = value;
    }
    public resetExcludeFeaturesAttribute() {
        this._excludeFeaturesAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeFeaturesAttributeInput() {
        return this._excludeFeaturesAttribute;
    }

    // local_path - computed: true, optional: true, required: false
    private _localPath?: string; 
    public get localPath() {
        return this.getStringAttribute('local_path');
    }
    public set localPath(value: string) {
        this._localPath = value;
    }
    public resetLocalPath() {
        this._localPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localPathInput() {
        return this._localPath;
    }

    // s3_data_distribution_type - computed: true, optional: true, required: false
    private _s3DataDistributionType?: string; 
    public get s3DataDistributionType() {
        return this.getStringAttribute('s3_data_distribution_type');
    }
    public set s3DataDistributionType(value: string) {
        this._s3DataDistributionType = value;
    }
    public resetS3DataDistributionType() {
        this._s3DataDistributionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataDistributionTypeInput() {
        return this._s3DataDistributionType;
    }

    // s3_input_mode - computed: true, optional: true, required: false
    private _s3InputMode?: string; 
    public get s3InputMode() {
        return this.getStringAttribute('s3_input_mode');
    }
    public set s3InputMode(value: string) {
        this._s3InputMode = value;
    }
    public resetS3InputMode() {
        this._s3InputMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3InputModeInput() {
        return this._s3InputMode;
    }
}
export interface EndpointInputProperty {
    /**
    * The name of the endpoint used to run the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#endpoint_name CcMonitoringSchedule#endpoint_name}
    */
    readonly endpointName?: string;
    /**
    * Indexes or names of the features to be excluded from analysis
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#exclude_features_attribute CcMonitoringSchedule#exclude_features_attribute}
    */
    readonly excludeFeaturesAttribute?: string;
    /**
    * Path to the filesystem where the endpoint data is available to the container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#local_path CcMonitoringSchedule#local_path}
    */
    readonly localPath?: string;
    /**
    * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#s3_data_distribution_type CcMonitoringSchedule#s3_data_distribution_type}
    */
    readonly s3DataDistributionType?: string;
    /**
    * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#s3_input_mode CcMonitoringSchedule#s3_input_mode}
    */
    readonly s3InputMode?: string;
}
export class EndpointInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointName !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointName = this._endpointName;
        }
        if (this._excludeFeaturesAttribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeFeaturesAttribute = this._excludeFeaturesAttribute;
        }
        if (this._localPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.localPath = this._localPath;
        }
        if (this._s3DataDistributionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
        }
        if (this._s3InputMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3InputMode = this._s3InputMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointName = undefined;
            this._excludeFeaturesAttribute = undefined;
            this._localPath = undefined;
            this._s3DataDistributionType = undefined;
            this._s3InputMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointName = value.endpointName;
            this._excludeFeaturesAttribute = value.excludeFeaturesAttribute;
            this._localPath = value.localPath;
            this._s3DataDistributionType = value.s3DataDistributionType;
            this._s3InputMode = value.s3InputMode;
        }
    }

    // endpoint_name - computed: true, optional: true, required: false
    private _endpointName?: string; 
    public get endpointName() {
        return this.getStringAttribute('endpoint_name');
    }
    public set endpointName(value: string) {
        this._endpointName = value;
    }
    public resetEndpointName() {
        this._endpointName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointNameInput() {
        return this._endpointName;
    }

    // exclude_features_attribute - computed: true, optional: true, required: false
    private _excludeFeaturesAttribute?: string; 
    public get excludeFeaturesAttribute() {
        return this.getStringAttribute('exclude_features_attribute');
    }
    public set excludeFeaturesAttribute(value: string) {
        this._excludeFeaturesAttribute = value;
    }
    public resetExcludeFeaturesAttribute() {
        this._excludeFeaturesAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeFeaturesAttributeInput() {
        return this._excludeFeaturesAttribute;
    }

    // local_path - computed: true, optional: true, required: false
    private _localPath?: string; 
    public get localPath() {
        return this.getStringAttribute('local_path');
    }
    public set localPath(value: string) {
        this._localPath = value;
    }
    public resetLocalPath() {
        this._localPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localPathInput() {
        return this._localPath;
    }

    // s3_data_distribution_type - computed: true, optional: true, required: false
    private _s3DataDistributionType?: string; 
    public get s3DataDistributionType() {
        return this.getStringAttribute('s3_data_distribution_type');
    }
    public set s3DataDistributionType(value: string) {
        this._s3DataDistributionType = value;
    }
    public resetS3DataDistributionType() {
        this._s3DataDistributionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataDistributionTypeInput() {
        return this._s3DataDistributionType;
    }

    // s3_input_mode - computed: true, optional: true, required: false
    private _s3InputMode?: string; 
    public get s3InputMode() {
        return this.getStringAttribute('s3_input_mode');
    }
    public set s3InputMode(value: string) {
        this._s3InputMode = value;
    }
    public resetS3InputMode() {
        this._s3InputMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3InputModeInput() {
        return this._s3InputMode;
    }
}
export interface MonitoringInputProperty {
    /**
    * The batch transform input for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#batch_transform_input CcMonitoringSchedule#batch_transform_input}
    */
    readonly batchTransformInput?: BatchTransformInputProperty;
    /**
    * The endpoint for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#endpoint_input CcMonitoringSchedule#endpoint_input}
    */
    readonly endpointInput?: EndpointInputProperty;
}
export class MonitoringInputPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MonitoringInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchTransformInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchTransformInput = this._batchTransformInput?.internalValue;
        }
        if (this._endpointInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointInput = this._endpointInput?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchTransformInput.internalValue = undefined;
            this._endpointInput.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchTransformInput.internalValue = value.batchTransformInput;
            this._endpointInput.internalValue = value.endpointInput;
        }
    }

    // batch_transform_input - computed: true, optional: true, required: false
    private _batchTransformInput = new BatchTransformInputPropertyOutputReference(this, "batch_transform_input");
    public get batchTransformInput() {
        return this._batchTransformInput;
    }
    public putBatchTransformInput(value: BatchTransformInputProperty) {
        this._batchTransformInput.internalValue = value;
    }
    public resetBatchTransformInput() {
        this._batchTransformInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchTransformInputInput() {
        return this._batchTransformInput.internalValue;
    }

    // endpoint_input - computed: true, optional: true, required: false
    private _endpointInput = new EndpointInputPropertyOutputReference(this, "endpoint_input");
    public get endpointInput() {
        return this._endpointInput;
    }
    public putEndpointInput(value: EndpointInputProperty) {
        this._endpointInput.internalValue = value;
    }
    public resetEndpointInput() {
        this._endpointInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInputInput() {
        return this._endpointInput.internalValue;
    }
}

export class MonitoringInputPropertyList extends cdktn.ComplexList {
    public internalValue? : MonitoringInputProperty[] | cdktn.IResolvable

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
    public get(index: number): MonitoringInputPropertyOutputReference {
        return new MonitoringInputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface S3OutputProperty {
    /**
    * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#local_path CcMonitoringSchedule#local_path}
    */
    readonly localPath?: string;
    /**
    * Whether to upload the results of the monitoring job continuously or after the job completes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#s3_upload_mode CcMonitoringSchedule#s3_upload_mode}
    */
    readonly s3UploadMode?: string;
    /**
    * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#s3_uri CcMonitoringSchedule#s3_uri}
    */
    readonly s3Uri?: string;
}
export class S3OutputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3OutputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._localPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.localPath = this._localPath;
        }
        if (this._s3UploadMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3UploadMode = this._s3UploadMode;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3OutputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._localPath = undefined;
            this._s3UploadMode = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._localPath = value.localPath;
            this._s3UploadMode = value.s3UploadMode;
            this._s3Uri = value.s3Uri;
        }
    }

    // local_path - computed: true, optional: true, required: false
    private _localPath?: string; 
    public get localPath() {
        return this.getStringAttribute('local_path');
    }
    public set localPath(value: string) {
        this._localPath = value;
    }
    public resetLocalPath() {
        this._localPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localPathInput() {
        return this._localPath;
    }

    // s3_upload_mode - computed: true, optional: true, required: false
    private _s3UploadMode?: string; 
    public get s3UploadMode() {
        return this.getStringAttribute('s3_upload_mode');
    }
    public set s3UploadMode(value: string) {
        this._s3UploadMode = value;
    }
    public resetS3UploadMode() {
        this._s3UploadMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UploadModeInput() {
        return this._s3UploadMode;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface MonitoringOutputProperty {
    /**
    * Information about where and how to store the results of a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#s3_output CcMonitoringSchedule#s3_output}
    */
    readonly s3Output?: S3OutputProperty;
}
export class MonitoringOutputPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MonitoringOutputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Output?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Output = this._s3Output?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringOutputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Output.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Output.internalValue = value.s3Output;
        }
    }

    // s3_output - computed: true, optional: true, required: false
    private _s3Output = new S3OutputPropertyOutputReference(this, "s3_output");
    public get s3Output() {
        return this._s3Output;
    }
    public putS3Output(value: S3OutputProperty) {
        this._s3Output.internalValue = value;
    }
    public resetS3Output() {
        this._s3Output.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputInput() {
        return this._s3Output.internalValue;
    }
}

export class MonitoringOutputPropertyList extends cdktn.ComplexList {
    public internalValue? : MonitoringOutputProperty[] | cdktn.IResolvable

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
    public get(index: number): MonitoringOutputPropertyOutputReference {
        return new MonitoringOutputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MonitoringOutputConfigProperty {
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#kms_key_id CcMonitoringSchedule#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_outputs CcMonitoringSchedule#monitoring_outputs}
    */
    readonly monitoringOutputs?: MonitoringOutputProperty[] | cdktn.IResolvable;
}
export class MonitoringOutputConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringOutputConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._monitoringOutputs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringOutputs = this._monitoringOutputs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringOutputConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
            this._monitoringOutputs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
            this._monitoringOutputs.internalValue = value.monitoringOutputs;
        }
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // monitoring_outputs - computed: true, optional: true, required: false
    private _monitoringOutputs = new MonitoringOutputPropertyList(this, "monitoring_outputs", false);
    public get monitoringOutputs() {
        return this._monitoringOutputs;
    }
    public putMonitoringOutputs(value: MonitoringOutputProperty[] | cdktn.IResolvable) {
        this._monitoringOutputs.internalValue = value;
    }
    public resetMonitoringOutputs() {
        this._monitoringOutputs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringOutputsInput() {
        return this._monitoringOutputs.internalValue;
    }
}
export interface ClusterConfigProperty {
    /**
    * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#instance_count CcMonitoringSchedule#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * The ML compute instance type for the processing job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#instance_type CcMonitoringSchedule#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#volume_kms_key_id CcMonitoringSchedule#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#volume_size_in_gb CcMonitoringSchedule#volume_size_in_gb}
    */
    readonly volumeSizeInGb?: number;
}
export class ClusterConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusterConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceCount = this._instanceCount;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._volumeKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
        }
        if (this._volumeSizeInGb !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceCount = undefined;
            this._instanceType = undefined;
            this._volumeKmsKeyId = undefined;
            this._volumeSizeInGb = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceCount = value.instanceCount;
            this._instanceType = value.instanceType;
            this._volumeKmsKeyId = value.volumeKmsKeyId;
            this._volumeSizeInGb = value.volumeSizeInGb;
        }
    }

    // instance_count - computed: true, optional: true, required: false
    private _instanceCount?: number; 
    public get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    public set instanceCount(value: number) {
        this._instanceCount = value;
    }
    public resetInstanceCount() {
        this._instanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceCountInput() {
        return this._instanceCount;
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // volume_kms_key_id - computed: true, optional: true, required: false
    private _volumeKmsKeyId?: string; 
    public get volumeKmsKeyId() {
        return this.getStringAttribute('volume_kms_key_id');
    }
    public set volumeKmsKeyId(value: string) {
        this._volumeKmsKeyId = value;
    }
    public resetVolumeKmsKeyId() {
        this._volumeKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeKmsKeyIdInput() {
        return this._volumeKmsKeyId;
    }

    // volume_size_in_gb - computed: true, optional: true, required: false
    private _volumeSizeInGb?: number; 
    public get volumeSizeInGb() {
        return this.getNumberAttribute('volume_size_in_gb');
    }
    public set volumeSizeInGb(value: number) {
        this._volumeSizeInGb = value;
    }
    public resetVolumeSizeInGb() {
        this._volumeSizeInGb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInGbInput() {
        return this._volumeSizeInGb;
    }
}
export interface MonitoringResourcesProperty {
    /**
    * Configuration for the cluster used to run model monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#cluster_config CcMonitoringSchedule#cluster_config}
    */
    readonly clusterConfig?: ClusterConfigProperty;
}
export class MonitoringResourcesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterConfig.internalValue = value.clusterConfig;
        }
    }

    // cluster_config - computed: true, optional: true, required: false
    private _clusterConfig = new ClusterConfigPropertyOutputReference(this, "cluster_config");
    public get clusterConfig() {
        return this._clusterConfig;
    }
    public putClusterConfig(value: ClusterConfigProperty) {
        this._clusterConfig.internalValue = value;
    }
    public resetClusterConfig() {
        this._clusterConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterConfigInput() {
        return this._clusterConfig.internalValue;
    }
}
export interface VpcConfigProperty {
    /**
    * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#security_group_ids CcMonitoringSchedule#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#subnets CcMonitoringSchedule#subnets}
    */
    readonly subnets?: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnets = value.subnets;
        }
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface NetworkConfigProperty {
    /**
    * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#enable_inter_container_traffic_encryption CcMonitoringSchedule#enable_inter_container_traffic_encryption}
    */
    readonly enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable;
    /**
    * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#enable_network_isolation CcMonitoringSchedule#enable_network_isolation}
    */
    readonly enableNetworkIsolation?: boolean | cdktn.IResolvable;
    /**
    * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#vpc_config CcMonitoringSchedule#vpc_config}
    */
    readonly vpcConfig?: VpcConfigProperty;
}
export class NetworkConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableInterContainerTrafficEncryption !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
        }
        if (this._enableNetworkIsolation !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
        }
        if (this._vpcConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableInterContainerTrafficEncryption = undefined;
            this._enableNetworkIsolation = undefined;
            this._vpcConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
            this._enableNetworkIsolation = value.enableNetworkIsolation;
            this._vpcConfig.internalValue = value.vpcConfig;
        }
    }

    // enable_inter_container_traffic_encryption - computed: true, optional: true, required: false
    private _enableInterContainerTrafficEncryption?: boolean | cdktn.IResolvable; 
    public get enableInterContainerTrafficEncryption() {
        return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
    }
    public set enableInterContainerTrafficEncryption(value: boolean | cdktn.IResolvable) {
        this._enableInterContainerTrafficEncryption = value;
    }
    public resetEnableInterContainerTrafficEncryption() {
        this._enableInterContainerTrafficEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableInterContainerTrafficEncryptionInput() {
        return this._enableInterContainerTrafficEncryption;
    }

    // enable_network_isolation - computed: true, optional: true, required: false
    private _enableNetworkIsolation?: boolean | cdktn.IResolvable; 
    public get enableNetworkIsolation() {
        return this.getBooleanAttribute('enable_network_isolation');
    }
    public set enableNetworkIsolation(value: boolean | cdktn.IResolvable) {
        this._enableNetworkIsolation = value;
    }
    public resetEnableNetworkIsolation() {
        this._enableNetworkIsolation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableNetworkIsolationInput() {
        return this._enableNetworkIsolation;
    }

    // vpc_config - computed: true, optional: true, required: false
    private _vpcConfig = new VpcConfigPropertyOutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: VpcConfigProperty) {
        this._vpcConfig.internalValue = value;
    }
    public resetVpcConfig() {
        this._vpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigInput() {
        return this._vpcConfig.internalValue;
    }
}
export interface StoppingConditionProperty {
    /**
    * The maximum runtime allowed in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#max_runtime_in_seconds CcMonitoringSchedule#max_runtime_in_seconds}
    */
    readonly maxRuntimeInSeconds?: number;
}
export class StoppingConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StoppingConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxRuntimeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StoppingConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxRuntimeInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
        }
    }

    // max_runtime_in_seconds - computed: true, optional: true, required: false
    private _maxRuntimeInSeconds?: number; 
    public get maxRuntimeInSeconds() {
        return this.getNumberAttribute('max_runtime_in_seconds');
    }
    public set maxRuntimeInSeconds(value: number) {
        this._maxRuntimeInSeconds = value;
    }
    public resetMaxRuntimeInSeconds() {
        this._maxRuntimeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRuntimeInSecondsInput() {
        return this._maxRuntimeInSeconds;
    }
}
export interface MonitoringJobDefinitionProperty {
    /**
    * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#baseline_config CcMonitoringSchedule#baseline_config}
    */
    readonly baselineConfig?: BaselineConfigProperty;
    /**
    * Sets the environment variables in the Docker container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#environment CcMonitoringSchedule#environment}
    */
    readonly environment?: { [key: string]: string };
    /**
    * Container image configuration object for the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_app_specification CcMonitoringSchedule#monitoring_app_specification}
    */
    readonly monitoringAppSpecification?: MonitoringAppSpecificationProperty;
    /**
    * The array of inputs for the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_inputs CcMonitoringSchedule#monitoring_inputs}
    */
    readonly monitoringInputs?: MonitoringInputProperty[] | cdktn.IResolvable;
    /**
    * The output configuration for monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_output_config CcMonitoringSchedule#monitoring_output_config}
    */
    readonly monitoringOutputConfig?: MonitoringOutputConfigProperty;
    /**
    * Identifies the resources to deploy for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_resources CcMonitoringSchedule#monitoring_resources}
    */
    readonly monitoringResources?: MonitoringResourcesProperty;
    /**
    * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#network_config CcMonitoringSchedule#network_config}
    */
    readonly networkConfig?: NetworkConfigProperty;
    /**
    * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#role_arn CcMonitoringSchedule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Specifies a time limit for how long the monitoring job is allowed to run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#stopping_condition CcMonitoringSchedule#stopping_condition}
    */
    readonly stoppingCondition?: StoppingConditionProperty;
}
export class MonitoringJobDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringJobDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baselineConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.baselineConfig = this._baselineConfig?.internalValue;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._monitoringAppSpecification?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringAppSpecification = this._monitoringAppSpecification?.internalValue;
        }
        if (this._monitoringInputs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringInputs = this._monitoringInputs?.internalValue;
        }
        if (this._monitoringOutputConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringOutputConfig = this._monitoringOutputConfig?.internalValue;
        }
        if (this._monitoringResources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringResources = this._monitoringResources?.internalValue;
        }
        if (this._networkConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkConfig = this._networkConfig?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._stoppingCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stoppingCondition = this._stoppingCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringJobDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baselineConfig.internalValue = undefined;
            this._environment = undefined;
            this._monitoringAppSpecification.internalValue = undefined;
            this._monitoringInputs.internalValue = undefined;
            this._monitoringOutputConfig.internalValue = undefined;
            this._monitoringResources.internalValue = undefined;
            this._networkConfig.internalValue = undefined;
            this._roleArn = undefined;
            this._stoppingCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._baselineConfig.internalValue = value.baselineConfig;
            this._environment = value.environment;
            this._monitoringAppSpecification.internalValue = value.monitoringAppSpecification;
            this._monitoringInputs.internalValue = value.monitoringInputs;
            this._monitoringOutputConfig.internalValue = value.monitoringOutputConfig;
            this._monitoringResources.internalValue = value.monitoringResources;
            this._networkConfig.internalValue = value.networkConfig;
            this._roleArn = value.roleArn;
            this._stoppingCondition.internalValue = value.stoppingCondition;
        }
    }

    // baseline_config - computed: true, optional: true, required: false
    private _baselineConfig = new BaselineConfigPropertyOutputReference(this, "baseline_config");
    public get baselineConfig() {
        return this._baselineConfig;
    }
    public putBaselineConfig(value: BaselineConfigProperty) {
        this._baselineConfig.internalValue = value;
    }
    public resetBaselineConfig() {
        this._baselineConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baselineConfigInput() {
        return this._baselineConfig.internalValue;
    }

    // environment - computed: true, optional: true, required: false
    private _environment?: { [key: string]: string }; 
    public get environment() {
        return this.getStringMapAttribute('environment');
    }
    public set environment(value: { [key: string]: string }) {
        this._environment = value;
    }
    public resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment;
    }

    // monitoring_app_specification - computed: true, optional: true, required: false
    private _monitoringAppSpecification = new MonitoringAppSpecificationPropertyOutputReference(this, "monitoring_app_specification");
    public get monitoringAppSpecification() {
        return this._monitoringAppSpecification;
    }
    public putMonitoringAppSpecification(value: MonitoringAppSpecificationProperty) {
        this._monitoringAppSpecification.internalValue = value;
    }
    public resetMonitoringAppSpecification() {
        this._monitoringAppSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringAppSpecificationInput() {
        return this._monitoringAppSpecification.internalValue;
    }

    // monitoring_inputs - computed: true, optional: true, required: false
    private _monitoringInputs = new MonitoringInputPropertyList(this, "monitoring_inputs", false);
    public get monitoringInputs() {
        return this._monitoringInputs;
    }
    public putMonitoringInputs(value: MonitoringInputProperty[] | cdktn.IResolvable) {
        this._monitoringInputs.internalValue = value;
    }
    public resetMonitoringInputs() {
        this._monitoringInputs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringInputsInput() {
        return this._monitoringInputs.internalValue;
    }

    // monitoring_output_config - computed: true, optional: true, required: false
    private _monitoringOutputConfig = new MonitoringOutputConfigPropertyOutputReference(this, "monitoring_output_config");
    public get monitoringOutputConfig() {
        return this._monitoringOutputConfig;
    }
    public putMonitoringOutputConfig(value: MonitoringOutputConfigProperty) {
        this._monitoringOutputConfig.internalValue = value;
    }
    public resetMonitoringOutputConfig() {
        this._monitoringOutputConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringOutputConfigInput() {
        return this._monitoringOutputConfig.internalValue;
    }

    // monitoring_resources - computed: true, optional: true, required: false
    private _monitoringResources = new MonitoringResourcesPropertyOutputReference(this, "monitoring_resources");
    public get monitoringResources() {
        return this._monitoringResources;
    }
    public putMonitoringResources(value: MonitoringResourcesProperty) {
        this._monitoringResources.internalValue = value;
    }
    public resetMonitoringResources() {
        this._monitoringResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringResourcesInput() {
        return this._monitoringResources.internalValue;
    }

    // network_config - computed: true, optional: true, required: false
    private _networkConfig = new NetworkConfigPropertyOutputReference(this, "network_config");
    public get networkConfig() {
        return this._networkConfig;
    }
    public putNetworkConfig(value: NetworkConfigProperty) {
        this._networkConfig.internalValue = value;
    }
    public resetNetworkConfig() {
        this._networkConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigInput() {
        return this._networkConfig.internalValue;
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

    // stopping_condition - computed: true, optional: true, required: false
    private _stoppingCondition = new StoppingConditionPropertyOutputReference(this, "stopping_condition");
    public get stoppingCondition() {
        return this._stoppingCondition;
    }
    public putStoppingCondition(value: StoppingConditionProperty) {
        this._stoppingCondition.internalValue = value;
    }
    public resetStoppingCondition() {
        this._stoppingCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stoppingConditionInput() {
        return this._stoppingCondition.internalValue;
    }
}
export interface ScheduleConfigProperty {
    /**
    * Data Analysis end time, e.g. PT0H
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#data_analysis_end_time CcMonitoringSchedule#data_analysis_end_time}
    */
    readonly dataAnalysisEndTime?: string;
    /**
    * Data Analysis start time, e.g. -PT1H
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#data_analysis_start_time CcMonitoringSchedule#data_analysis_start_time}
    */
    readonly dataAnalysisStartTime?: string;
    /**
    * A cron expression or 'NOW' that describes details about the monitoring schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#schedule_expression CcMonitoringSchedule#schedule_expression}
    */
    readonly scheduleExpression?: string;
}
export class ScheduleConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataAnalysisEndTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataAnalysisEndTime = this._dataAnalysisEndTime;
        }
        if (this._dataAnalysisStartTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataAnalysisStartTime = this._dataAnalysisStartTime;
        }
        if (this._scheduleExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataAnalysisEndTime = undefined;
            this._dataAnalysisStartTime = undefined;
            this._scheduleExpression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataAnalysisEndTime = value.dataAnalysisEndTime;
            this._dataAnalysisStartTime = value.dataAnalysisStartTime;
            this._scheduleExpression = value.scheduleExpression;
        }
    }

    // data_analysis_end_time - computed: true, optional: true, required: false
    private _dataAnalysisEndTime?: string; 
    public get dataAnalysisEndTime() {
        return this.getStringAttribute('data_analysis_end_time');
    }
    public set dataAnalysisEndTime(value: string) {
        this._dataAnalysisEndTime = value;
    }
    public resetDataAnalysisEndTime() {
        this._dataAnalysisEndTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataAnalysisEndTimeInput() {
        return this._dataAnalysisEndTime;
    }

    // data_analysis_start_time - computed: true, optional: true, required: false
    private _dataAnalysisStartTime?: string; 
    public get dataAnalysisStartTime() {
        return this.getStringAttribute('data_analysis_start_time');
    }
    public set dataAnalysisStartTime(value: string) {
        this._dataAnalysisStartTime = value;
    }
    public resetDataAnalysisStartTime() {
        this._dataAnalysisStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataAnalysisStartTimeInput() {
        return this._dataAnalysisStartTime;
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
}
export interface MonitoringScheduleConfigProperty {
    /**
    * Defines the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_job_definition CcMonitoringSchedule#monitoring_job_definition}
    */
    readonly monitoringJobDefinition?: MonitoringJobDefinitionProperty;
    /**
    * Name of the job definition
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_job_definition_name CcMonitoringSchedule#monitoring_job_definition_name}
    */
    readonly monitoringJobDefinitionName?: string;
    /**
    * The type of monitoring job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#monitoring_type CcMonitoringSchedule#monitoring_type}
    */
    readonly monitoringType?: string;
    /**
    * Configuration details about the monitoring schedule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#schedule_config CcMonitoringSchedule#schedule_config}
    */
    readonly scheduleConfig?: ScheduleConfigProperty;
}
export class MonitoringScheduleConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MonitoringScheduleConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._monitoringJobDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringJobDefinition = this._monitoringJobDefinition?.internalValue;
        }
        if (this._monitoringJobDefinitionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringJobDefinitionName = this._monitoringJobDefinitionName;
        }
        if (this._monitoringType !== undefined) {
            hasAnyValues = true;
            internalValueResult.monitoringType = this._monitoringType;
        }
        if (this._scheduleConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleConfig = this._scheduleConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MonitoringScheduleConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._monitoringJobDefinition.internalValue = undefined;
            this._monitoringJobDefinitionName = undefined;
            this._monitoringType = undefined;
            this._scheduleConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._monitoringJobDefinition.internalValue = value.monitoringJobDefinition;
            this._monitoringJobDefinitionName = value.monitoringJobDefinitionName;
            this._monitoringType = value.monitoringType;
            this._scheduleConfig.internalValue = value.scheduleConfig;
        }
    }

    // monitoring_job_definition - computed: true, optional: true, required: false
    private _monitoringJobDefinition = new MonitoringJobDefinitionPropertyOutputReference(this, "monitoring_job_definition");
    public get monitoringJobDefinition() {
        return this._monitoringJobDefinition;
    }
    public putMonitoringJobDefinition(value: MonitoringJobDefinitionProperty) {
        this._monitoringJobDefinition.internalValue = value;
    }
    public resetMonitoringJobDefinition() {
        this._monitoringJobDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringJobDefinitionInput() {
        return this._monitoringJobDefinition.internalValue;
    }

    // monitoring_job_definition_name - computed: true, optional: true, required: false
    private _monitoringJobDefinitionName?: string; 
    public get monitoringJobDefinitionName() {
        return this.getStringAttribute('monitoring_job_definition_name');
    }
    public set monitoringJobDefinitionName(value: string) {
        this._monitoringJobDefinitionName = value;
    }
    public resetMonitoringJobDefinitionName() {
        this._monitoringJobDefinitionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringJobDefinitionNameInput() {
        return this._monitoringJobDefinitionName;
    }

    // monitoring_type - computed: true, optional: true, required: false
    private _monitoringType?: string; 
    public get monitoringType() {
        return this.getStringAttribute('monitoring_type');
    }
    public set monitoringType(value: string) {
        this._monitoringType = value;
    }
    public resetMonitoringType() {
        this._monitoringType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringTypeInput() {
        return this._monitoringType;
    }

    // schedule_config - computed: true, optional: true, required: false
    private _scheduleConfig = new ScheduleConfigPropertyOutputReference(this, "schedule_config");
    public get scheduleConfig() {
        return this._scheduleConfig;
    }
    public putScheduleConfig(value: ScheduleConfigProperty) {
        this._scheduleConfig.internalValue = value;
    }
    public resetScheduleConfig() {
        this._scheduleConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleConfigInput() {
        return this._scheduleConfig.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#key CcMonitoringSchedule#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_monitoring_schedule#value CcMonitoringSchedule#value}
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
