// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChannelProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the channel. The name's uniqueness is scoped per AWS account and region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#channel_name CcChannel#channel_name}
    */
    readonly channelName: string;
    /**
    * Server-side encryption configuration for data at rest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#encryption_configuration CcChannel#encryption_configuration}
    */
    readonly encryptionConfiguration?: CcChannel.EncryptionConfigurationProperty;
    /**
    * Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#logging_configuration CcChannel#logging_configuration}
    */
    readonly loggingConfiguration?: CcChannel.LoggingConfigurationProperty;
    /**
    * Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#s3_destination_configuration CcChannel#s3_destination_configuration}
    */
    readonly s3DestinationConfiguration?: CcChannel.S3DestinationConfigurationProperty;
    /**
    * Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#s3_tables_destination_configuration CcChannel#s3_tables_destination_configuration}
    */
    readonly s3TablesDestinationConfiguration?: CcChannel.S3TablesDestinationConfigurationProperty;
    /**
    * The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#service_execution_role_arn CcChannel#service_execution_role_arn}
    */
    readonly serviceExecutionRoleArn: string;
    /**
    * List of stream configurations associated with the channel. v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#stream_configuration_list CcChannel#stream_configuration_list}
    */
    readonly streamConfigurationList: CcChannel.StreamConfigurationListProperty[] | cdktn.IResolvable;
    /**
    * An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#tags CcChannel#tags}
    */
    readonly tags?: CcChannel.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel awscc_kinesis_channel}
*/
export class CcChannel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_kinesis_channel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChannel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChannel to import
    * @param importFromId The id of the existing CcChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChannel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kinesis_channel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel awscc_kinesis_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChannelProps
    */
    public constructor(scope: Construct, id: string, config: CcChannelProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_kinesis_channel',
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
        this._channelName = config.channelName;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._loggingConfiguration.internalValue = config.loggingConfiguration;
        this._s3DestinationConfiguration.internalValue = config.s3DestinationConfiguration;
        this._s3TablesDestinationConfiguration.internalValue = config.s3TablesDestinationConfiguration;
        this._serviceExecutionRoleArn = config.serviceExecutionRoleArn;
        this._streamConfigurationList.internalValue = config.streamConfigurationList;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // channel_arn - computed: true, optional: false, required: false
    public get channelArn() {
        return this.getStringAttribute('channel_arn');
    }

    // channel_creation_timestamp - computed: true, optional: false, required: false
    public get channelCreationTimestamp() {
        return this.getStringAttribute('channel_creation_timestamp');
    }

    // channel_id - computed: true, optional: false, required: false
    public get channelId() {
        return this.getStringAttribute('channel_id');
    }

    // channel_name - computed: false, optional: false, required: true
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
    }

    // channel_status - computed: true, optional: false, required: false
    public get channelStatus() {
        return this.getStringAttribute('channel_status');
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new CcChannel.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: CcChannel.EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // logging_configuration - computed: true, optional: true, required: false
    private _loggingConfiguration = new CcChannel.LoggingConfigurationPropertyOutputReference(this, "logging_configuration");
    public get loggingConfiguration() {
        return this._loggingConfiguration;
    }
    public putLoggingConfiguration(value: CcChannel.LoggingConfigurationProperty) {
        this._loggingConfiguration.internalValue = value;
    }
    public resetLoggingConfiguration() {
        this._loggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
        return this._loggingConfiguration.internalValue;
    }

    // s3_destination_configuration - computed: true, optional: true, required: false
    private _s3DestinationConfiguration = new CcChannel.S3DestinationConfigurationPropertyOutputReference(this, "s3_destination_configuration");
    public get s3DestinationConfiguration() {
        return this._s3DestinationConfiguration;
    }
    public putS3DestinationConfiguration(value: CcChannel.S3DestinationConfigurationProperty) {
        this._s3DestinationConfiguration.internalValue = value;
    }
    public resetS3DestinationConfiguration() {
        this._s3DestinationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DestinationConfigurationInput() {
        return this._s3DestinationConfiguration.internalValue;
    }

    // s3_tables_destination_configuration - computed: true, optional: true, required: false
    private _s3TablesDestinationConfiguration = new CcChannel.S3TablesDestinationConfigurationPropertyOutputReference(this, "s3_tables_destination_configuration");
    public get s3TablesDestinationConfiguration() {
        return this._s3TablesDestinationConfiguration;
    }
    public putS3TablesDestinationConfiguration(value: CcChannel.S3TablesDestinationConfigurationProperty) {
        this._s3TablesDestinationConfiguration.internalValue = value;
    }
    public resetS3TablesDestinationConfiguration() {
        this._s3TablesDestinationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3TablesDestinationConfigurationInput() {
        return this._s3TablesDestinationConfiguration.internalValue;
    }

    // service_execution_role_arn - computed: false, optional: false, required: true
    private _serviceExecutionRoleArn?: string; 
    public get serviceExecutionRoleArn() {
        return this.getStringAttribute('service_execution_role_arn');
    }
    public set serviceExecutionRoleArn(value: string) {
        this._serviceExecutionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceExecutionRoleArnInput() {
        return this._serviceExecutionRoleArn;
    }

    // stream_configuration_list - computed: false, optional: false, required: true
    private _streamConfigurationList = new CcChannel.StreamConfigurationListPropertyList(this, "stream_configuration_list", false);
    public get streamConfigurationList() {
        return this._streamConfigurationList;
    }
    public putStreamConfigurationList(value: CcChannel.StreamConfigurationListProperty[] | cdktn.IResolvable) {
        this._streamConfigurationList.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamConfigurationListInput() {
        return this._streamConfigurationList.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcChannel.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcChannel.TagsProperty[] | cdktn.IResolvable) {
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
            channel_name: cdktn.stringToTerraform(this._channelName),
            encryption_configuration: ccChannelEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
            logging_configuration: ccChannelLoggingConfigurationPropertyToTerraform(this._loggingConfiguration.internalValue),
            s3_destination_configuration: ccChannelS3DestinationConfigurationPropertyToTerraform(this._s3DestinationConfiguration.internalValue),
            s3_tables_destination_configuration: ccChannelS3TablesDestinationConfigurationPropertyToTerraform(this._s3TablesDestinationConfiguration.internalValue),
            service_execution_role_arn: cdktn.stringToTerraform(this._serviceExecutionRoleArn),
            stream_configuration_list: cdktn.listMapper(ccChannelStreamConfigurationListPropertyToTerraform, false)(this._streamConfigurationList.internalValue),
            tags: cdktn.listMapper(ccChannelTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channel_name: {
                value: cdktn.stringToHclTerraform(this._channelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_configuration: {
                value: ccChannelEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.EncryptionConfigurationProperty",
            },
            logging_configuration: {
                value: ccChannelLoggingConfigurationPropertyToHclTerraform(this._loggingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.LoggingConfigurationProperty",
            },
            s3_destination_configuration: {
                value: ccChannelS3DestinationConfigurationPropertyToHclTerraform(this._s3DestinationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.S3DestinationConfigurationProperty",
            },
            s3_tables_destination_configuration: {
                value: ccChannelS3TablesDestinationConfigurationPropertyToHclTerraform(this._s3TablesDestinationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.S3TablesDestinationConfigurationProperty",
            },
            service_execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._serviceExecutionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stream_configuration_list: {
                value: cdktn.listMapperHcl(ccChannelStreamConfigurationListPropertyToHclTerraform, false)(this._streamConfigurationList.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcChannel.StreamConfigurationListPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccChannelTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcChannel.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccChannelEncryptionConfigurationPropertyToTerraform(struct?: CcChannel.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
        key_id: cdktn.stringToTerraform(struct!.keyId),
    }
}


export function ccChannelEncryptionConfigurationPropertyToHclTerraform(struct?: CcChannel.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_type: {
            value: cdktn.stringToHclTerraform(struct!.encryptionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_id: {
            value: cdktn.stringToHclTerraform(struct!.keyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelCloudwatchLogsPropertyToTerraform(struct?: CcChannel.CloudwatchLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
    }
}


export function ccChannelCloudwatchLogsPropertyToHclTerraform(struct?: CcChannel.CloudwatchLogsProperty | cdktn.IResolvable): any {
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
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_stream_name: {
            value: cdktn.stringToHclTerraform(struct!.logStreamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelLoggingConfigurationPropertyToTerraform(struct?: CcChannel.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs: ccChannelCloudwatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
    }
}


export function ccChannelLoggingConfigurationPropertyToHclTerraform(struct?: CcChannel.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs: {
            value: ccChannelCloudwatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudwatchLogsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationPropertyToTerraform(struct?: CcChannel.S3DestinationConfigurationDeadLetterQueueS3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
        error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
        expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
    }
}


export function ccChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationPropertyToHclTerraform(struct?: CcChannel.S3DestinationConfigurationDeadLetterQueueS3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error_output_prefix: {
            value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expected_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelStorageConfigurationPropertyToTerraform(struct?: CcChannel.StorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
        compression_type: cdktn.stringToTerraform(struct!.compressionType),
        expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
        output_key_template: cdktn.stringToTerraform(struct!.outputKeyTemplate),
        storage_class: cdktn.stringToTerraform(struct!.storageClass),
    }
}


export function ccChannelStorageConfigurationPropertyToHclTerraform(struct?: CcChannel.StorageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compression_type: {
            value: cdktn.stringToHclTerraform(struct!.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expected_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_key_template: {
            value: cdktn.stringToHclTerraform(struct!.outputKeyTemplate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage_class: {
            value: cdktn.stringToHclTerraform(struct!.storageClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelS3DestinationConfigurationPropertyToTerraform(struct?: CcChannel.S3DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_freshness_in_seconds: cdktn.numberToTerraform(struct!.dataFreshnessInSeconds),
        dead_letter_queue_s3_configuration: ccChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationPropertyToTerraform(struct!.deadLetterQueueS3Configuration),
        storage_configuration: ccChannelStorageConfigurationPropertyToTerraform(struct!.storageConfiguration),
    }
}


export function ccChannelS3DestinationConfigurationPropertyToHclTerraform(struct?: CcChannel.S3DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_freshness_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.dataFreshnessInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dead_letter_queue_s3_configuration: {
            value: ccChannelS3DestinationConfigurationDeadLetterQueueS3ConfigurationPropertyToHclTerraform(struct!.deadLetterQueueS3Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3DestinationConfigurationDeadLetterQueueS3ConfigurationProperty",
        },
        storage_configuration: {
            value: ccChannelStorageConfigurationPropertyToHclTerraform(struct!.storageConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationPropertyToTerraform(struct?: CcChannel.S3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
        error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
        expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
    }
}


export function ccChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationPropertyToHclTerraform(struct?: CcChannel.S3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error_output_prefix: {
            value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expected_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelPartitionFieldsPropertyToTerraform(struct?: CcChannel.PartitionFieldsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_name: cdktn.stringToTerraform(struct!.sourceName),
        transform: cdktn.stringToTerraform(struct!.transform),
    }
}


export function ccChannelPartitionFieldsPropertyToHclTerraform(struct?: CcChannel.PartitionFieldsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_name: {
            value: cdktn.stringToHclTerraform(struct!.sourceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transform: {
            value: cdktn.stringToHclTerraform(struct!.transform),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelPartitionSpecPropertyToTerraform(struct?: CcChannel.PartitionSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        partition_fields: cdktn.listMapper(ccChannelPartitionFieldsPropertyToTerraform, false)(struct!.partitionFields),
    }
}


export function ccChannelPartitionSpecPropertyToHclTerraform(struct?: CcChannel.PartitionSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        partition_fields: {
            value: cdktn.listMapperHcl(ccChannelPartitionFieldsPropertyToHclTerraform, false)(struct!.partitionFields),
            isBlock: true,
            type: "list",
            storageClassType: "PartitionFieldsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelS3TablesConfigurationListPropertyToTerraform(struct?: CcChannel.S3TablesConfigurationListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compression_type: cdktn.stringToTerraform(struct!.compressionType),
        namespace: cdktn.stringToTerraform(struct!.namespace),
        partition_spec: ccChannelPartitionSpecPropertyToTerraform(struct!.partitionSpec),
        table_bucket_arn: cdktn.stringToTerraform(struct!.tableBucketArn),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccChannelS3TablesConfigurationListPropertyToHclTerraform(struct?: CcChannel.S3TablesConfigurationListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compression_type: {
            value: cdktn.stringToHclTerraform(struct!.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partition_spec: {
            value: ccChannelPartitionSpecPropertyToHclTerraform(struct!.partitionSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "PartitionSpecProperty",
        },
        table_bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.tableBucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelS3TablesDestinationConfigurationPropertyToTerraform(struct?: CcChannel.S3TablesDestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_freshness_in_seconds: cdktn.numberToTerraform(struct!.dataFreshnessInSeconds),
        dead_letter_queue_s3_configuration: ccChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationPropertyToTerraform(struct!.deadLetterQueueS3Configuration),
        s3_tables_configuration_list: cdktn.listMapper(ccChannelS3TablesConfigurationListPropertyToTerraform, false)(struct!.s3TablesConfigurationList),
    }
}


export function ccChannelS3TablesDestinationConfigurationPropertyToHclTerraform(struct?: CcChannel.S3TablesDestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_freshness_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.dataFreshnessInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dead_letter_queue_s3_configuration: {
            value: ccChannelS3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationPropertyToHclTerraform(struct!.deadLetterQueueS3Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationProperty",
        },
        s3_tables_configuration_list: {
            value: cdktn.listMapperHcl(ccChannelS3TablesConfigurationListPropertyToHclTerraform, false)(struct!.s3TablesConfigurationList),
            isBlock: true,
            type: "list",
            storageClassType: "S3TablesConfigurationListPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelRecordConfigurationPropertyToTerraform(struct?: CcChannel.RecordConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gsr_schema_arn: cdktn.stringToTerraform(struct!.gsrSchemaArn),
        record_format_type: cdktn.stringToTerraform(struct!.recordFormatType),
    }
}


export function ccChannelRecordConfigurationPropertyToHclTerraform(struct?: CcChannel.RecordConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        gsr_schema_arn: {
            value: cdktn.stringToHclTerraform(struct!.gsrSchemaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        record_format_type: {
            value: cdktn.stringToHclTerraform(struct!.recordFormatType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelStreamConfigurationListPropertyToTerraform(struct?: CcChannel.StreamConfigurationListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        record_configuration: ccChannelRecordConfigurationPropertyToTerraform(struct!.recordConfiguration),
        stream_arn: cdktn.stringToTerraform(struct!.streamArn),
    }
}


export function ccChannelStreamConfigurationListPropertyToHclTerraform(struct?: CcChannel.StreamConfigurationListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        record_configuration: {
            value: ccChannelRecordConfigurationPropertyToHclTerraform(struct!.recordConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RecordConfigurationProperty",
        },
        stream_arn: {
            value: cdktn.stringToHclTerraform(struct!.streamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelTagsPropertyToTerraform(struct?: CcChannel.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccChannelTagsPropertyToHclTerraform(struct?: CcChannel.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcChannel {
export interface EncryptionConfigurationProperty {
    /**
    * The encryption type. KMS is the only supported value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#encryption_type CcChannel#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * The customer-managed AWS KMS key. Accepts a key GUID, key ARN, alias ARN, or alias name prefixed by 'alias/'. The Kinesis Data Streams managed alias 'aws/kinesis' is not accepted - the key must be customer-owned so it can also be used by readers of the destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#key_id CcChannel#key_id}
    */
    readonly keyId?: string;
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
        if (this._encryptionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionType = this._encryptionType;
        }
        if (this._keyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyId = this._keyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionType = undefined;
            this._keyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionType = value.encryptionType;
            this._keyId = value.keyId;
        }
    }

    // encryption_type - computed: true, optional: true, required: false
    private _encryptionType?: string; 
    public get encryptionType() {
        return this.getStringAttribute('encryption_type');
    }
    public set encryptionType(value: string) {
        this._encryptionType = value;
    }
    public resetEncryptionType() {
        this._encryptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionTypeInput() {
        return this._encryptionType;
    }

    // key_id - computed: true, optional: true, required: false
    private _keyId?: string; 
    public get keyId() {
        return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
        this._keyId = value;
    }
    public resetKeyId() {
        this._keyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
        return this._keyId;
    }
}
export interface CloudwatchLogsProperty {
    /**
    * Whether CloudWatch Logs delivery is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#enabled CcChannel#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The CloudWatch log group name. When Enabled is true and LogGroupName is omitted, the service uses the default '/aws/kinesis/<channelName>/<channelId>'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#log_group_name CcChannel#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The CloudWatch log stream name. Defaults to the literal string 'DestinationDelivery' when omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#log_stream_name CcChannel#log_stream_name}
    */
    readonly logStreamName?: string;
}
export class CloudwatchLogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudwatchLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudwatchLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
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

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // log_stream_name - computed: true, optional: true, required: false
    private _logStreamName?: string; 
    public get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    public set logStreamName(value: string) {
        this._logStreamName = value;
    }
    public resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNameInput() {
        return this._logStreamName;
    }
}
export interface LoggingConfigurationProperty {
    /**
    * CloudWatch Logs configuration block. When provided, controls whether and where the channel writes operational logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#cloudwatch_logs CcChannel#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CloudwatchLogsProperty;
}
export class LoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
        }
    }

    // cloudwatch_logs - computed: true, optional: true, required: false
    private _cloudwatchLogs = new CloudwatchLogsPropertyOutputReference(this, "cloudwatch_logs");
    public get cloudwatchLogs() {
        return this._cloudwatchLogs;
    }
    public putCloudwatchLogs(value: CloudwatchLogsProperty) {
        this._cloudwatchLogs.internalValue = value;
    }
    public resetCloudwatchLogs() {
        this._cloudwatchLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsInput() {
        return this._cloudwatchLogs.internalValue;
    }
}
export interface S3DestinationConfigurationDeadLetterQueueS3ConfigurationProperty {
    /**
    * The ARN of the S3 bucket for storing failed records.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#bucket_arn CcChannel#bucket_arn}
    */
    readonly bucketArn?: string;
    /**
    * Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#error_output_prefix CcChannel#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * The AWS account ID of the expected owner of the dead-letter queue S3 bucket. Used to verify bucket ownership before delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#expected_bucket_owner CcChannel#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
}
export class S3DestinationConfigurationDeadLetterQueueS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DestinationConfigurationDeadLetterQueueS3ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._errorOutputPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
        }
        if (this._expectedBucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DestinationConfigurationDeadLetterQueueS3ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketArn = undefined;
            this._errorOutputPrefix = undefined;
            this._expectedBucketOwner = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketArn = value.bucketArn;
            this._errorOutputPrefix = value.errorOutputPrefix;
            this._expectedBucketOwner = value.expectedBucketOwner;
        }
    }

    // bucket_arn - computed: true, optional: true, required: false
    private _bucketArn?: string; 
    public get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
        this._bucketArn = value;
    }
    public resetBucketArn() {
        this._bucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
        return this._bucketArn;
    }

    // error_output_prefix - computed: true, optional: true, required: false
    private _errorOutputPrefix?: string; 
    public get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    public set errorOutputPrefix(value: string) {
        this._errorOutputPrefix = value;
    }
    public resetErrorOutputPrefix() {
        this._errorOutputPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorOutputPrefixInput() {
        return this._errorOutputPrefix;
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
}
export interface StorageConfigurationProperty {
    /**
    * The ARN of the S3 bucket for record delivery. Different channels can deliver to the same bucket. Buckets can be cross-account but must be in the same region as the channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#bucket_arn CcChannel#bucket_arn}
    */
    readonly bucketArn?: string;
    /**
    * The compression algorithm applied to delivered objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#compression_type CcChannel#compression_type}
    */
    readonly compressionType?: string;
    /**
    * The AWS account ID of the expected owner of the destination S3 bucket. Used to verify bucket ownership before delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#expected_bucket_owner CcChannel#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Optional template for the S3 object key path. Supports placeholders in the form !{name}: !{channel-name}, !{channel-id}, !{stream-name}, !{yyyy}, !{yy}, !{MM}, !{dd}, !{HH}, !{mm}, and !{extension} (a literal file extension can be supplied as !{extension:.json.gz}). When omitted, the service uses the default 'kinesis-channel/!{channel-name}/!{channel-id}/!{yyyy}/!{MM}/!{dd}/!{HH}/!{channel-name}-!{channel-id}-!{yyyy}-!{MM}-!{dd}-!{HH}-!{mm}!{extension}'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#output_key_template CcChannel#output_key_template}
    */
    readonly outputKeyTemplate?: string;
    /**
    * The S3 storage class for delivered objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#storage_class CcChannel#storage_class}
    */
    readonly storageClass?: string;
}
export class StorageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._expectedBucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
        }
        if (this._outputKeyTemplate !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputKeyTemplate = this._outputKeyTemplate;
        }
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketArn = undefined;
            this._compressionType = undefined;
            this._expectedBucketOwner = undefined;
            this._outputKeyTemplate = undefined;
            this._storageClass = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketArn = value.bucketArn;
            this._compressionType = value.compressionType;
            this._expectedBucketOwner = value.expectedBucketOwner;
            this._outputKeyTemplate = value.outputKeyTemplate;
            this._storageClass = value.storageClass;
        }
    }

    // bucket_arn - computed: true, optional: true, required: false
    private _bucketArn?: string; 
    public get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
        this._bucketArn = value;
    }
    public resetBucketArn() {
        this._bucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
        return this._bucketArn;
    }

    // compression_type - computed: true, optional: true, required: false
    private _compressionType?: string; 
    public get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string) {
        this._compressionType = value;
    }
    public resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
        return this._compressionType;
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

    // output_key_template - computed: true, optional: true, required: false
    private _outputKeyTemplate?: string; 
    public get outputKeyTemplate() {
        return this.getStringAttribute('output_key_template');
    }
    public set outputKeyTemplate(value: string) {
        this._outputKeyTemplate = value;
    }
    public resetOutputKeyTemplate() {
        this._outputKeyTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputKeyTemplateInput() {
        return this._outputKeyTemplate;
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
}
export interface S3DestinationConfigurationProperty {
    /**
    * The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#data_freshness_in_seconds CcChannel#data_freshness_in_seconds}
    */
    readonly dataFreshnessInSeconds?: number;
    /**
    * Optional dead-letter queue (DLQ) configuration for records that cannot be delivered to the destination. When omitted, the service auto-fills using the storage BucketARN with an error prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#dead_letter_queue_s3_configuration CcChannel#dead_letter_queue_s3_configuration}
    */
    readonly deadLetterQueueS3Configuration?: S3DestinationConfigurationDeadLetterQueueS3ConfigurationProperty;
    /**
    * S3 storage configuration including the destination bucket, output key template, storage class, and compression type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#storage_configuration CcChannel#storage_configuration}
    */
    readonly storageConfiguration?: StorageConfigurationProperty;
}
export class S3DestinationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DestinationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataFreshnessInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataFreshnessInSeconds = this._dataFreshnessInSeconds;
        }
        if (this._deadLetterQueueS3Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deadLetterQueueS3Configuration = this._deadLetterQueueS3Configuration?.internalValue;
        }
        if (this._storageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageConfiguration = this._storageConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DestinationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataFreshnessInSeconds = undefined;
            this._deadLetterQueueS3Configuration.internalValue = undefined;
            this._storageConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataFreshnessInSeconds = value.dataFreshnessInSeconds;
            this._deadLetterQueueS3Configuration.internalValue = value.deadLetterQueueS3Configuration;
            this._storageConfiguration.internalValue = value.storageConfiguration;
        }
    }

    // data_freshness_in_seconds - computed: true, optional: true, required: false
    private _dataFreshnessInSeconds?: number; 
    public get dataFreshnessInSeconds() {
        return this.getNumberAttribute('data_freshness_in_seconds');
    }
    public set dataFreshnessInSeconds(value: number) {
        this._dataFreshnessInSeconds = value;
    }
    public resetDataFreshnessInSeconds() {
        this._dataFreshnessInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataFreshnessInSecondsInput() {
        return this._dataFreshnessInSeconds;
    }

    // dead_letter_queue_s3_configuration - computed: true, optional: true, required: false
    private _deadLetterQueueS3Configuration = new S3DestinationConfigurationDeadLetterQueueS3ConfigurationPropertyOutputReference(this, "dead_letter_queue_s3_configuration");
    public get deadLetterQueueS3Configuration() {
        return this._deadLetterQueueS3Configuration;
    }
    public putDeadLetterQueueS3Configuration(value: S3DestinationConfigurationDeadLetterQueueS3ConfigurationProperty) {
        this._deadLetterQueueS3Configuration.internalValue = value;
    }
    public resetDeadLetterQueueS3Configuration() {
        this._deadLetterQueueS3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterQueueS3ConfigurationInput() {
        return this._deadLetterQueueS3Configuration.internalValue;
    }

    // storage_configuration - computed: true, optional: true, required: false
    private _storageConfiguration = new StorageConfigurationPropertyOutputReference(this, "storage_configuration");
    public get storageConfiguration() {
        return this._storageConfiguration;
    }
    public putStorageConfiguration(value: StorageConfigurationProperty) {
        this._storageConfiguration.internalValue = value;
    }
    public resetStorageConfiguration() {
        this._storageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConfigurationInput() {
        return this._storageConfiguration.internalValue;
    }
}
export interface S3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationProperty {
    /**
    * The ARN of the S3 bucket for storing failed records.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#bucket_arn CcChannel#bucket_arn}
    */
    readonly bucketArn?: string;
    /**
    * Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#error_output_prefix CcChannel#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * The AWS account ID of the expected owner of the dead-letter queue S3 bucket. Used to verify bucket ownership before delivery.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#expected_bucket_owner CcChannel#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
}
export class S3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._errorOutputPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
        }
        if (this._expectedBucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketArn = undefined;
            this._errorOutputPrefix = undefined;
            this._expectedBucketOwner = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketArn = value.bucketArn;
            this._errorOutputPrefix = value.errorOutputPrefix;
            this._expectedBucketOwner = value.expectedBucketOwner;
        }
    }

    // bucket_arn - computed: true, optional: true, required: false
    private _bucketArn?: string; 
    public get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
        this._bucketArn = value;
    }
    public resetBucketArn() {
        this._bucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
        return this._bucketArn;
    }

    // error_output_prefix - computed: true, optional: true, required: false
    private _errorOutputPrefix?: string; 
    public get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    public set errorOutputPrefix(value: string) {
        this._errorOutputPrefix = value;
    }
    public resetErrorOutputPrefix() {
        this._errorOutputPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorOutputPrefixInput() {
        return this._errorOutputPrefix;
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
}
export interface PartitionFieldsProperty {
    /**
    * The name of the source column on which the transform is applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#source_name CcChannel#source_name}
    */
    readonly sourceName?: string;
    /**
    * The partitioning transform applied to the SourceName column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#transform CcChannel#transform}
    */
    readonly transform?: string;
}
export class PartitionFieldsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PartitionFieldsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceName = this._sourceName;
        }
        if (this._transform !== undefined) {
            hasAnyValues = true;
            internalValueResult.transform = this._transform;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PartitionFieldsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceName = undefined;
            this._transform = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceName = value.sourceName;
            this._transform = value.transform;
        }
    }

    // source_name - computed: true, optional: true, required: false
    private _sourceName?: string; 
    public get sourceName() {
        return this.getStringAttribute('source_name');
    }
    public set sourceName(value: string) {
        this._sourceName = value;
    }
    public resetSourceName() {
        this._sourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceNameInput() {
        return this._sourceName;
    }

    // transform - computed: true, optional: true, required: false
    private _transform?: string; 
    public get transform() {
        return this.getStringAttribute('transform');
    }
    public set transform(value: string) {
        this._transform = value;
    }
    public resetTransform() {
        this._transform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformInput() {
        return this._transform;
    }
}

export class PartitionFieldsPropertyList extends cdktn.ComplexList {
    public internalValue? : PartitionFieldsProperty[] | cdktn.IResolvable

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
    public get(index: number): PartitionFieldsPropertyOutputReference {
        return new PartitionFieldsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PartitionSpecProperty {
    /**
    * List of partition fields that define how records are partitioned when written to the destination table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#partition_fields CcChannel#partition_fields}
    */
    readonly partitionFields?: PartitionFieldsProperty[] | cdktn.IResolvable;
}
export class PartitionSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PartitionSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._partitionFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionFields = this._partitionFields?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PartitionSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._partitionFields.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._partitionFields.internalValue = value.partitionFields;
        }
    }

    // partition_fields - computed: true, optional: true, required: false
    private _partitionFields = new PartitionFieldsPropertyList(this, "partition_fields", false);
    public get partitionFields() {
        return this._partitionFields;
    }
    public putPartitionFields(value: PartitionFieldsProperty[] | cdktn.IResolvable) {
        this._partitionFields.internalValue = value;
    }
    public resetPartitionFields() {
        this._partitionFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionFieldsInput() {
        return this._partitionFields.internalValue;
    }
}
export interface S3TablesConfigurationListProperty {
    /**
    * The compression algorithm applied to objects delivered to the S3 Tables destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#compression_type CcChannel#compression_type}
    */
    readonly compressionType?: string;
    /**
    * The name of the S3 Tables namespace that contains the destination table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#namespace CcChannel#namespace}
    */
    readonly namespace?: string;
    /**
    * The partition specification used by the destination Iceberg table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#partition_spec CcChannel#partition_spec}
    */
    readonly partitionSpec?: PartitionSpecProperty;
    /**
    * The ARN of the S3 Tables table bucket for record delivery. Buckets can be cross-account but must be in the same region as the channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#table_bucket_arn CcChannel#table_bucket_arn}
    */
    readonly tableBucketArn?: string;
    /**
    * The name of the destination S3 Tables table. The table is created for the customer if it does not yet exist.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#table_name CcChannel#table_name}
    */
    readonly tableName?: string;
}
export class S3TablesConfigurationListPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): S3TablesConfigurationListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._partitionSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionSpec = this._partitionSpec?.internalValue;
        }
        if (this._tableBucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableBucketArn = this._tableBucketArn;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3TablesConfigurationListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compressionType = undefined;
            this._namespace = undefined;
            this._partitionSpec.internalValue = undefined;
            this._tableBucketArn = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compressionType = value.compressionType;
            this._namespace = value.namespace;
            this._partitionSpec.internalValue = value.partitionSpec;
            this._tableBucketArn = value.tableBucketArn;
            this._tableName = value.tableName;
        }
    }

    // compression_type - computed: true, optional: true, required: false
    private _compressionType?: string; 
    public get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string) {
        this._compressionType = value;
    }
    public resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
        return this._compressionType;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // partition_spec - computed: true, optional: true, required: false
    private _partitionSpec = new PartitionSpecPropertyOutputReference(this, "partition_spec");
    public get partitionSpec() {
        return this._partitionSpec;
    }
    public putPartitionSpec(value: PartitionSpecProperty) {
        this._partitionSpec.internalValue = value;
    }
    public resetPartitionSpec() {
        this._partitionSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionSpecInput() {
        return this._partitionSpec.internalValue;
    }

    // table_bucket_arn - computed: true, optional: true, required: false
    private _tableBucketArn?: string; 
    public get tableBucketArn() {
        return this.getStringAttribute('table_bucket_arn');
    }
    public set tableBucketArn(value: string) {
        this._tableBucketArn = value;
    }
    public resetTableBucketArn() {
        this._tableBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableBucketArnInput() {
        return this._tableBucketArn;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}

export class S3TablesConfigurationListPropertyList extends cdktn.ComplexList {
    public internalValue? : S3TablesConfigurationListProperty[] | cdktn.IResolvable

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
    public get(index: number): S3TablesConfigurationListPropertyOutputReference {
        return new S3TablesConfigurationListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface S3TablesDestinationConfigurationProperty {
    /**
    * The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#data_freshness_in_seconds CcChannel#data_freshness_in_seconds}
    */
    readonly dataFreshnessInSeconds?: number;
    /**
    * The dead-letter queue (DLQ) configuration for records that cannot be delivered to the S3 Tables destination. Required for S3 Tables: there is no safe fallback because S3 Tables metadata writes are critical-path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#dead_letter_queue_s3_configuration CcChannel#dead_letter_queue_s3_configuration}
    */
    readonly deadLetterQueueS3Configuration?: S3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationProperty;
    /**
    * The list of S3 Tables destinations. v1 supports a single element; the list shape allows future extensibility to fan out to multiple tables.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#s3_tables_configuration_list CcChannel#s3_tables_configuration_list}
    */
    readonly s3TablesConfigurationList?: S3TablesConfigurationListProperty[] | cdktn.IResolvable;
}
export class S3TablesDestinationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3TablesDestinationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataFreshnessInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataFreshnessInSeconds = this._dataFreshnessInSeconds;
        }
        if (this._deadLetterQueueS3Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deadLetterQueueS3Configuration = this._deadLetterQueueS3Configuration?.internalValue;
        }
        if (this._s3TablesConfigurationList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3TablesConfigurationList = this._s3TablesConfigurationList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3TablesDestinationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataFreshnessInSeconds = undefined;
            this._deadLetterQueueS3Configuration.internalValue = undefined;
            this._s3TablesConfigurationList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataFreshnessInSeconds = value.dataFreshnessInSeconds;
            this._deadLetterQueueS3Configuration.internalValue = value.deadLetterQueueS3Configuration;
            this._s3TablesConfigurationList.internalValue = value.s3TablesConfigurationList;
        }
    }

    // data_freshness_in_seconds - computed: true, optional: true, required: false
    private _dataFreshnessInSeconds?: number; 
    public get dataFreshnessInSeconds() {
        return this.getNumberAttribute('data_freshness_in_seconds');
    }
    public set dataFreshnessInSeconds(value: number) {
        this._dataFreshnessInSeconds = value;
    }
    public resetDataFreshnessInSeconds() {
        this._dataFreshnessInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataFreshnessInSecondsInput() {
        return this._dataFreshnessInSeconds;
    }

    // dead_letter_queue_s3_configuration - computed: true, optional: true, required: false
    private _deadLetterQueueS3Configuration = new S3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationPropertyOutputReference(this, "dead_letter_queue_s3_configuration");
    public get deadLetterQueueS3Configuration() {
        return this._deadLetterQueueS3Configuration;
    }
    public putDeadLetterQueueS3Configuration(value: S3TablesDestinationConfigurationDeadLetterQueueS3ConfigurationProperty) {
        this._deadLetterQueueS3Configuration.internalValue = value;
    }
    public resetDeadLetterQueueS3Configuration() {
        this._deadLetterQueueS3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterQueueS3ConfigurationInput() {
        return this._deadLetterQueueS3Configuration.internalValue;
    }

    // s3_tables_configuration_list - computed: true, optional: true, required: false
    private _s3TablesConfigurationList = new S3TablesConfigurationListPropertyList(this, "s3_tables_configuration_list", false);
    public get s3TablesConfigurationList() {
        return this._s3TablesConfigurationList;
    }
    public putS3TablesConfigurationList(value: S3TablesConfigurationListProperty[] | cdktn.IResolvable) {
        this._s3TablesConfigurationList.internalValue = value;
    }
    public resetS3TablesConfigurationList() {
        this._s3TablesConfigurationList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3TablesConfigurationListInput() {
        return this._s3TablesConfigurationList.internalValue;
    }
}
export interface RecordConfigurationProperty {
    /**
    * The ARN of the AWS Glue Schema Registry (GSR) schema. Required for the S3 Tables destination, where it is used to create the S3 Table and to validate that the record format matches the table schema. Also used when RecordFormatType is GSR_JSON to interpret records read from the source stream. Vanilla S3 delivery writes records as S3 objects and does not need a schema. The schema must be in the same account and region as the channel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#gsr_schema_arn CcChannel#gsr_schema_arn}
    */
    readonly gsrSchemaArn?: string;
    /**
    * The format used to interpret records read from the source stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#record_format_type CcChannel#record_format_type}
    */
    readonly recordFormatType: string;
}
export class RecordConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecordConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gsrSchemaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.gsrSchemaArn = this._gsrSchemaArn;
        }
        if (this._recordFormatType !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordFormatType = this._recordFormatType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecordConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gsrSchemaArn = undefined;
            this._recordFormatType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gsrSchemaArn = value.gsrSchemaArn;
            this._recordFormatType = value.recordFormatType;
        }
    }

    // gsr_schema_arn - computed: true, optional: true, required: false
    private _gsrSchemaArn?: string; 
    public get gsrSchemaArn() {
        return this.getStringAttribute('gsr_schema_arn');
    }
    public set gsrSchemaArn(value: string) {
        this._gsrSchemaArn = value;
    }
    public resetGsrSchemaArn() {
        this._gsrSchemaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gsrSchemaArnInput() {
        return this._gsrSchemaArn;
    }

    // record_format_type - computed: false, optional: false, required: true
    private _recordFormatType?: string; 
    public get recordFormatType() {
        return this.getStringAttribute('record_format_type');
    }
    public set recordFormatType(value: string) {
        this._recordFormatType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordFormatTypeInput() {
        return this._recordFormatType;
    }
}
export interface StreamConfigurationListProperty {
    /**
    * The configuration that describes how records on the source stream are encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#record_configuration CcChannel#record_configuration}
    */
    readonly recordConfiguration: RecordConfigurationProperty;
    /**
    * The Amazon resource name (ARN) of the Kinesis data stream that the channel reads from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#stream_arn CcChannel#stream_arn}
    */
    readonly streamArn: string;
}
export class StreamConfigurationListPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StreamConfigurationListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._recordConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordConfiguration = this._recordConfiguration?.internalValue;
        }
        if (this._streamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamArn = this._streamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StreamConfigurationListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._recordConfiguration.internalValue = undefined;
            this._streamArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._recordConfiguration.internalValue = value.recordConfiguration;
            this._streamArn = value.streamArn;
        }
    }

    // record_configuration - computed: false, optional: false, required: true
    private _recordConfiguration = new RecordConfigurationPropertyOutputReference(this, "record_configuration");
    public get recordConfiguration() {
        return this._recordConfiguration;
    }
    public putRecordConfiguration(value: RecordConfigurationProperty) {
        this._recordConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordConfigurationInput() {
        return this._recordConfiguration.internalValue;
    }

    // stream_arn - computed: false, optional: false, required: true
    private _streamArn?: string; 
    public get streamArn() {
        return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
        this._streamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
        return this._streamArn;
    }
}

export class StreamConfigurationListPropertyList extends cdktn.ComplexList {
    public internalValue? : StreamConfigurationListProperty[] | cdktn.IResolvable

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
    public get(index: number): StreamConfigurationListPropertyOutputReference {
        return new StreamConfigurationListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#key CcChannel#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kinesis_channel#value CcChannel#value}
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
