// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventSourceMappingProps extends cdktn.TerraformMetaArguments {
    /**
    * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#amazon_managed_kafka_event_source_config CcEventSourceMapping#amazon_managed_kafka_event_source_config}
    */
    readonly amazonManagedKafkaEventSourceConfig?: CcEventSourceMapping.AmazonManagedKafkaEventSourceConfigProperty;
    /**
    * The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).
    *   +  *Amazon Kinesis* – Default 100. Max 10,000.
    *   +  *Amazon DynamoDB Streams* – Default 100. Max 10,000.
    *   +  *Amazon Simple Queue Service* – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.
    *   +  *Amazon Managed Streaming for Apache Kafka* – Default 100. Max 10,000.
    *   +  *Self-managed Apache Kafka* – Default 100. Max 10,000.
    *   +  *Amazon MQ (ActiveMQ and RabbitMQ)* – Default 100. Max 10,000.
    *   +  *DocumentDB* – Default 100. Max 10,000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#batch_size CcEventSourceMapping#batch_size}
    */
    readonly batchSize?: number;
    /**
    * (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. The default value is false.
    *   When using ``BisectBatchOnFunctionError``, check the ``BatchSize`` parameter in the ``OnFailure`` destination message's metadata. The ``BatchSize`` could be greater than 1 since LAM consolidates failed messages metadata when writing to the ``OnFailure`` destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error CcEventSourceMapping#bisect_batch_on_function_error}
    */
    readonly bisectBatchOnFunctionError?: boolean | cdktn.IResolvable;
    /**
    * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#destination_config CcEventSourceMapping#destination_config}
    */
    readonly destinationConfig?: CcEventSourceMapping.DestinationConfigProperty;
    /**
    * Specific configuration settings for a DocumentDB event source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#document_db_event_source_config CcEventSourceMapping#document_db_event_source_config}
    */
    readonly documentDbEventSourceConfig?: CcEventSourceMapping.DocumentDBEventSourceConfigProperty;
    /**
    * When true, the event source mapping is active. When false, Lambda pauses polling and invocation.
    *  Default: True
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#enabled CcEventSourceMapping#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the event source.
    *   +  *Amazon Kinesis* – The ARN of the data stream or a stream consumer.
    *   +  *Amazon DynamoDB Streams* – The ARN of the stream.
    *   +  *Amazon Simple Queue Service* – The ARN of the queue.
    *   +  *Amazon Managed Streaming for Apache Kafka* – The ARN of the cluster or the ARN of the VPC connection (for [cross-account event source mappings](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc)).
    *   +  *Amazon MQ* – The ARN of the broker.
    *   +  *Amazon DocumentDB* – The ARN of the DocumentDB change stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#event_source_arn CcEventSourceMapping#event_source_arn}
    */
    readonly eventSourceArn?: string;
    /**
    * An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#filter_criteria CcEventSourceMapping#filter_criteria}
    */
    readonly filterCriteria?: CcEventSourceMapping.FilterCriteriaProperty;
    /**
    * The name or ARN of the Lambda function.
    *   **Name formats**
    *  +  *Function name* – ``MyFunction``.
    *   +  *Function ARN* – ``arn:aws:lambda:us-west-2:123456789012:function:MyFunction``.
    *   +  *Version or Alias ARN* – ``arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD``.
    *   +  *Partial ARN* – ``123456789012:function:MyFunction``.
    *   
    *  The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#function_name CcEventSourceMapping#function_name}
    */
    readonly functionName: string;
    /**
    * (Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping.
    *  Valid Values: ``ReportBatchItemFailures``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#function_response_types CcEventSourceMapping#function_response_types}
    */
    readonly functionResponseTypes?: string[];
    /**
    * The ARN of the KMSlong (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#kms_key_arn CcEventSourceMapping#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * (Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. For more information, see [Event source mapping logging](https://docs.aws.amazon.com/lambda/latest/dg/esm-logging.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#logging_config CcEventSourceMapping#logging_config}
    */
    readonly loggingConfig?: CcEventSourceMapping.LoggingConfigProperty;
    /**
    * The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
    *  *Default (, , event sources)*: 0
    *  *Default (, Kafka, , event sources)*: 500 ms
    *  *Related setting:* For SQS event sources, when you set ``BatchSize`` to a value greater than 10, you must set ``MaximumBatchingWindowInSeconds`` to at least 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds CcEventSourceMapping#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
    *   The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds CcEventSourceMapping#maximum_record_age_in_seconds}
    */
    readonly maximumRecordAgeInSeconds?: number;
    /**
    * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts CcEventSourceMapping#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#metrics_config CcEventSourceMapping#metrics_config}
    */
    readonly metricsConfig?: CcEventSourceMapping.MetricsConfigProperty;
    /**
    * (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#parallelization_factor CcEventSourceMapping#parallelization_factor}
    */
    readonly parallelizationFactor?: number;
    /**
    * (Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#provisioned_poller_config CcEventSourceMapping#provisioned_poller_config}
    */
    readonly provisionedPollerConfig?: CcEventSourceMapping.ProvisionedPollerConfigProperty;
    /**
    * (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#queues CcEventSourceMapping#queues}
    */
    readonly queues?: string[];
    /**
    * This property is for Amazon SQS event sources only. You cannot use ``ProvisionedPollerConfig`` while using ``ScalingConfig``. These options are mutually exclusive. To remove the scaling configuration, pass an empty value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#scaling_config CcEventSourceMapping#scaling_config}
    */
    readonly scalingConfig?: CcEventSourceMapping.ScalingConfigProperty;
    /**
    * The self-managed Apache Kafka cluster for your event source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#self_managed_event_source CcEventSourceMapping#self_managed_event_source}
    */
    readonly selfManagedEventSource?: CcEventSourceMapping.SelfManagedEventSourceProperty;
    /**
    * Specific configuration settings for a self-managed Apache Kafka event source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#self_managed_kafka_event_source_config CcEventSourceMapping#self_managed_kafka_event_source_config}
    */
    readonly selfManagedKafkaEventSourceConfig?: CcEventSourceMapping.SelfManagedKafkaEventSourceConfigProperty;
    /**
    * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#source_access_configurations CcEventSourceMapping#source_access_configurations}
    */
    readonly sourceAccessConfigurations?: CcEventSourceMapping.SourceAccessConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB.
    *   +  *LATEST* - Read only new records.
    *   +  *TRIM_HORIZON* - Process all available records.
    *   +  *AT_TIMESTAMP* - Specify a time from which to start reading records.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#starting_position CcEventSourceMapping#starting_position}
    */
    readonly startingPosition?: string;
    /**
    * With ``StartingPosition`` set to ``AT_TIMESTAMP``, the time from which to start reading, in Unix time seconds. ``StartingPositionTimestamp`` cannot be in the future.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp CcEventSourceMapping#starting_position_timestamp}
    */
    readonly startingPositionTimestamp?: number;
    /**
    * A list of tags to add to the event source mapping.
    *   You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#tags CcEventSourceMapping#tags}
    */
    readonly tags?: CcEventSourceMapping.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the Kafka topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#topics CcEventSourceMapping#topics}
    */
    readonly topics?: string[];
    /**
    * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds CcEventSourceMapping#tumbling_window_in_seconds}
    */
    readonly tumblingWindowInSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping awscc_lambda_event_source_mapping}
*/
export class CcEventSourceMapping extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_event_source_mapping";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventSourceMapping resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventSourceMapping to import
    * @param importFromId The id of the existing CcEventSourceMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventSourceMapping to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_event_source_mapping", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping awscc_lambda_event_source_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventSourceMappingProps
    */
    public constructor(scope: Construct, id: string, config: CcEventSourceMappingProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_event_source_mapping',
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
        this._amazonManagedKafkaEventSourceConfig.internalValue = config.amazonManagedKafkaEventSourceConfig;
        this._batchSize = config.batchSize;
        this._bisectBatchOnFunctionError = config.bisectBatchOnFunctionError;
        this._destinationConfig.internalValue = config.destinationConfig;
        this._documentDbEventSourceConfig.internalValue = config.documentDbEventSourceConfig;
        this._enabled = config.enabled;
        this._eventSourceArn = config.eventSourceArn;
        this._filterCriteria.internalValue = config.filterCriteria;
        this._functionName = config.functionName;
        this._functionResponseTypes = config.functionResponseTypes;
        this._kmsKeyArn = config.kmsKeyArn;
        this._loggingConfig.internalValue = config.loggingConfig;
        this._maximumBatchingWindowInSeconds = config.maximumBatchingWindowInSeconds;
        this._maximumRecordAgeInSeconds = config.maximumRecordAgeInSeconds;
        this._maximumRetryAttempts = config.maximumRetryAttempts;
        this._metricsConfig.internalValue = config.metricsConfig;
        this._parallelizationFactor = config.parallelizationFactor;
        this._provisionedPollerConfig.internalValue = config.provisionedPollerConfig;
        this._queues = config.queues;
        this._scalingConfig.internalValue = config.scalingConfig;
        this._selfManagedEventSource.internalValue = config.selfManagedEventSource;
        this._selfManagedKafkaEventSourceConfig.internalValue = config.selfManagedKafkaEventSourceConfig;
        this._sourceAccessConfigurations.internalValue = config.sourceAccessConfigurations;
        this._startingPosition = config.startingPosition;
        this._startingPositionTimestamp = config.startingPositionTimestamp;
        this._tags.internalValue = config.tags;
        this._topics = config.topics;
        this._tumblingWindowInSeconds = config.tumblingWindowInSeconds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // amazon_managed_kafka_event_source_config - computed: true, optional: true, required: false
    private _amazonManagedKafkaEventSourceConfig = new CcEventSourceMapping.AmazonManagedKafkaEventSourceConfigPropertyOutputReference(this, "amazon_managed_kafka_event_source_config");
    public get amazonManagedKafkaEventSourceConfig() {
        return this._amazonManagedKafkaEventSourceConfig;
    }
    public putAmazonManagedKafkaEventSourceConfig(value: CcEventSourceMapping.AmazonManagedKafkaEventSourceConfigProperty) {
        this._amazonManagedKafkaEventSourceConfig.internalValue = value;
    }
    public resetAmazonManagedKafkaEventSourceConfig() {
        this._amazonManagedKafkaEventSourceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonManagedKafkaEventSourceConfigInput() {
        return this._amazonManagedKafkaEventSourceConfig.internalValue;
    }

    // batch_size - computed: true, optional: true, required: false
    private _batchSize?: number; 
    public get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    public set batchSize(value: number) {
        this._batchSize = value;
    }
    public resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchSizeInput() {
        return this._batchSize;
    }

    // bisect_batch_on_function_error - computed: true, optional: true, required: false
    private _bisectBatchOnFunctionError?: boolean | cdktn.IResolvable; 
    public get bisectBatchOnFunctionError() {
        return this.getBooleanAttribute('bisect_batch_on_function_error');
    }
    public set bisectBatchOnFunctionError(value: boolean | cdktn.IResolvable) {
        this._bisectBatchOnFunctionError = value;
    }
    public resetBisectBatchOnFunctionError() {
        this._bisectBatchOnFunctionError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bisectBatchOnFunctionErrorInput() {
        return this._bisectBatchOnFunctionError;
    }

    // destination_config - computed: true, optional: true, required: false
    private _destinationConfig = new CcEventSourceMapping.DestinationConfigPropertyOutputReference(this, "destination_config");
    public get destinationConfig() {
        return this._destinationConfig;
    }
    public putDestinationConfig(value: CcEventSourceMapping.DestinationConfigProperty) {
        this._destinationConfig.internalValue = value;
    }
    public resetDestinationConfig() {
        this._destinationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationConfigInput() {
        return this._destinationConfig.internalValue;
    }

    // document_db_event_source_config - computed: true, optional: true, required: false
    private _documentDbEventSourceConfig = new CcEventSourceMapping.DocumentDBEventSourceConfigPropertyOutputReference(this, "document_db_event_source_config");
    public get documentDbEventSourceConfig() {
        return this._documentDbEventSourceConfig;
    }
    public putDocumentDbEventSourceConfig(value: CcEventSourceMapping.DocumentDBEventSourceConfigProperty) {
        this._documentDbEventSourceConfig.internalValue = value;
    }
    public resetDocumentDbEventSourceConfig() {
        this._documentDbEventSourceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentDbEventSourceConfigInput() {
        return this._documentDbEventSourceConfig.internalValue;
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

    // event_source_arn - computed: true, optional: true, required: false
    private _eventSourceArn?: string; 
    public get eventSourceArn() {
        return this.getStringAttribute('event_source_arn');
    }
    public set eventSourceArn(value: string) {
        this._eventSourceArn = value;
    }
    public resetEventSourceArn() {
        this._eventSourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceArnInput() {
        return this._eventSourceArn;
    }

    // event_source_mapping_arn - computed: true, optional: false, required: false
    public get eventSourceMappingArn() {
        return this.getStringAttribute('event_source_mapping_arn');
    }

    // event_source_mapping_id - computed: true, optional: false, required: false
    public get eventSourceMappingId() {
        return this.getStringAttribute('event_source_mapping_id');
    }

    // filter_criteria - computed: true, optional: true, required: false
    private _filterCriteria = new CcEventSourceMapping.FilterCriteriaPropertyOutputReference(this, "filter_criteria");
    public get filterCriteria() {
        return this._filterCriteria;
    }
    public putFilterCriteria(value: CcEventSourceMapping.FilterCriteriaProperty) {
        this._filterCriteria.internalValue = value;
    }
    public resetFilterCriteria() {
        this._filterCriteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterCriteriaInput() {
        return this._filterCriteria.internalValue;
    }

    // function_name - computed: false, optional: false, required: true
    private _functionName?: string; 
    public get functionName() {
        return this.getStringAttribute('function_name');
    }
    public set functionName(value: string) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionNameInput() {
        return this._functionName;
    }

    // function_response_types - computed: true, optional: true, required: false
    private _functionResponseTypes?: string[]; 
    public get functionResponseTypes() {
        return this.getListAttribute('function_response_types');
    }
    public set functionResponseTypes(value: string[]) {
        this._functionResponseTypes = value;
    }
    public resetFunctionResponseTypes() {
        this._functionResponseTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionResponseTypesInput() {
        return this._functionResponseTypes;
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

    // logging_config - computed: true, optional: true, required: false
    private _loggingConfig = new CcEventSourceMapping.LoggingConfigPropertyOutputReference(this, "logging_config");
    public get loggingConfig() {
        return this._loggingConfig;
    }
    public putLoggingConfig(value: CcEventSourceMapping.LoggingConfigProperty) {
        this._loggingConfig.internalValue = value;
    }
    public resetLoggingConfig() {
        this._loggingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigInput() {
        return this._loggingConfig.internalValue;
    }

    // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
    private _maximumBatchingWindowInSeconds?: number; 
    public get maximumBatchingWindowInSeconds() {
        return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    public set maximumBatchingWindowInSeconds(value: number) {
        this._maximumBatchingWindowInSeconds = value;
    }
    public resetMaximumBatchingWindowInSeconds() {
        this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchingWindowInSecondsInput() {
        return this._maximumBatchingWindowInSeconds;
    }

    // maximum_record_age_in_seconds - computed: true, optional: true, required: false
    private _maximumRecordAgeInSeconds?: number; 
    public get maximumRecordAgeInSeconds() {
        return this.getNumberAttribute('maximum_record_age_in_seconds');
    }
    public set maximumRecordAgeInSeconds(value: number) {
        this._maximumRecordAgeInSeconds = value;
    }
    public resetMaximumRecordAgeInSeconds() {
        this._maximumRecordAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRecordAgeInSecondsInput() {
        return this._maximumRecordAgeInSeconds;
    }

    // maximum_retry_attempts - computed: true, optional: true, required: false
    private _maximumRetryAttempts?: number; 
    public get maximumRetryAttempts() {
        return this.getNumberAttribute('maximum_retry_attempts');
    }
    public set maximumRetryAttempts(value: number) {
        this._maximumRetryAttempts = value;
    }
    public resetMaximumRetryAttempts() {
        this._maximumRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRetryAttemptsInput() {
        return this._maximumRetryAttempts;
    }

    // metrics_config - computed: true, optional: true, required: false
    private _metricsConfig = new CcEventSourceMapping.MetricsConfigPropertyOutputReference(this, "metrics_config");
    public get metricsConfig() {
        return this._metricsConfig;
    }
    public putMetricsConfig(value: CcEventSourceMapping.MetricsConfigProperty) {
        this._metricsConfig.internalValue = value;
    }
    public resetMetricsConfig() {
        this._metricsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsConfigInput() {
        return this._metricsConfig.internalValue;
    }

    // parallelization_factor - computed: true, optional: true, required: false
    private _parallelizationFactor?: number; 
    public get parallelizationFactor() {
        return this.getNumberAttribute('parallelization_factor');
    }
    public set parallelizationFactor(value: number) {
        this._parallelizationFactor = value;
    }
    public resetParallelizationFactor() {
        this._parallelizationFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelizationFactorInput() {
        return this._parallelizationFactor;
    }

    // provisioned_poller_config - computed: true, optional: true, required: false
    private _provisionedPollerConfig = new CcEventSourceMapping.ProvisionedPollerConfigPropertyOutputReference(this, "provisioned_poller_config");
    public get provisionedPollerConfig() {
        return this._provisionedPollerConfig;
    }
    public putProvisionedPollerConfig(value: CcEventSourceMapping.ProvisionedPollerConfigProperty) {
        this._provisionedPollerConfig.internalValue = value;
    }
    public resetProvisionedPollerConfig() {
        this._provisionedPollerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedPollerConfigInput() {
        return this._provisionedPollerConfig.internalValue;
    }

    // queues - computed: true, optional: true, required: false
    private _queues?: string[]; 
    public get queues() {
        return this.getListAttribute('queues');
    }
    public set queues(value: string[]) {
        this._queues = value;
    }
    public resetQueues() {
        this._queues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queuesInput() {
        return this._queues;
    }

    // scaling_config - computed: true, optional: true, required: false
    private _scalingConfig = new CcEventSourceMapping.ScalingConfigPropertyOutputReference(this, "scaling_config");
    public get scalingConfig() {
        return this._scalingConfig;
    }
    public putScalingConfig(value: CcEventSourceMapping.ScalingConfigProperty) {
        this._scalingConfig.internalValue = value;
    }
    public resetScalingConfig() {
        this._scalingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingConfigInput() {
        return this._scalingConfig.internalValue;
    }

    // self_managed_event_source - computed: true, optional: true, required: false
    private _selfManagedEventSource = new CcEventSourceMapping.SelfManagedEventSourcePropertyOutputReference(this, "self_managed_event_source");
    public get selfManagedEventSource() {
        return this._selfManagedEventSource;
    }
    public putSelfManagedEventSource(value: CcEventSourceMapping.SelfManagedEventSourceProperty) {
        this._selfManagedEventSource.internalValue = value;
    }
    public resetSelfManagedEventSource() {
        this._selfManagedEventSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedEventSourceInput() {
        return this._selfManagedEventSource.internalValue;
    }

    // self_managed_kafka_event_source_config - computed: true, optional: true, required: false
    private _selfManagedKafkaEventSourceConfig = new CcEventSourceMapping.SelfManagedKafkaEventSourceConfigPropertyOutputReference(this, "self_managed_kafka_event_source_config");
    public get selfManagedKafkaEventSourceConfig() {
        return this._selfManagedKafkaEventSourceConfig;
    }
    public putSelfManagedKafkaEventSourceConfig(value: CcEventSourceMapping.SelfManagedKafkaEventSourceConfigProperty) {
        this._selfManagedKafkaEventSourceConfig.internalValue = value;
    }
    public resetSelfManagedKafkaEventSourceConfig() {
        this._selfManagedKafkaEventSourceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedKafkaEventSourceConfigInput() {
        return this._selfManagedKafkaEventSourceConfig.internalValue;
    }

    // source_access_configurations - computed: true, optional: true, required: false
    private _sourceAccessConfigurations = new CcEventSourceMapping.SourceAccessConfigurationPropertyList(this, "source_access_configurations", false);
    public get sourceAccessConfigurations() {
        return this._sourceAccessConfigurations;
    }
    public putSourceAccessConfigurations(value: CcEventSourceMapping.SourceAccessConfigurationProperty[] | cdktn.IResolvable) {
        this._sourceAccessConfigurations.internalValue = value;
    }
    public resetSourceAccessConfigurations() {
        this._sourceAccessConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAccessConfigurationsInput() {
        return this._sourceAccessConfigurations.internalValue;
    }

    // starting_position - computed: true, optional: true, required: false
    private _startingPosition?: string; 
    public get startingPosition() {
        return this.getStringAttribute('starting_position');
    }
    public set startingPosition(value: string) {
        this._startingPosition = value;
    }
    public resetStartingPosition() {
        this._startingPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionInput() {
        return this._startingPosition;
    }

    // starting_position_timestamp - computed: true, optional: true, required: false
    private _startingPositionTimestamp?: number; 
    public get startingPositionTimestamp() {
        return this.getNumberAttribute('starting_position_timestamp');
    }
    public set startingPositionTimestamp(value: number) {
        this._startingPositionTimestamp = value;
    }
    public resetStartingPositionTimestamp() {
        this._startingPositionTimestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionTimestampInput() {
        return this._startingPositionTimestamp;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEventSourceMapping.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEventSourceMapping.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // topics - computed: true, optional: true, required: false
    private _topics?: string[]; 
    public get topics() {
        return this.getListAttribute('topics');
    }
    public set topics(value: string[]) {
        this._topics = value;
    }
    public resetTopics() {
        this._topics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicsInput() {
        return this._topics;
    }

    // tumbling_window_in_seconds - computed: true, optional: true, required: false
    private _tumblingWindowInSeconds?: number; 
    public get tumblingWindowInSeconds() {
        return this.getNumberAttribute('tumbling_window_in_seconds');
    }
    public set tumblingWindowInSeconds(value: number) {
        this._tumblingWindowInSeconds = value;
    }
    public resetTumblingWindowInSeconds() {
        this._tumblingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tumblingWindowInSecondsInput() {
        return this._tumblingWindowInSeconds;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            amazon_managed_kafka_event_source_config: ccEventSourceMappingAmazonManagedKafkaEventSourceConfigPropertyToTerraform(this._amazonManagedKafkaEventSourceConfig.internalValue),
            batch_size: cdktn.numberToTerraform(this._batchSize),
            bisect_batch_on_function_error: cdktn.booleanToTerraform(this._bisectBatchOnFunctionError),
            destination_config: ccEventSourceMappingDestinationConfigPropertyToTerraform(this._destinationConfig.internalValue),
            document_db_event_source_config: ccEventSourceMappingDocumentDBEventSourceConfigPropertyToTerraform(this._documentDbEventSourceConfig.internalValue),
            enabled: cdktn.booleanToTerraform(this._enabled),
            event_source_arn: cdktn.stringToTerraform(this._eventSourceArn),
            filter_criteria: ccEventSourceMappingFilterCriteriaPropertyToTerraform(this._filterCriteria.internalValue),
            function_name: cdktn.stringToTerraform(this._functionName),
            function_response_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._functionResponseTypes),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            logging_config: ccEventSourceMappingLoggingConfigPropertyToTerraform(this._loggingConfig.internalValue),
            maximum_batching_window_in_seconds: cdktn.numberToTerraform(this._maximumBatchingWindowInSeconds),
            maximum_record_age_in_seconds: cdktn.numberToTerraform(this._maximumRecordAgeInSeconds),
            maximum_retry_attempts: cdktn.numberToTerraform(this._maximumRetryAttempts),
            metrics_config: ccEventSourceMappingMetricsConfigPropertyToTerraform(this._metricsConfig.internalValue),
            parallelization_factor: cdktn.numberToTerraform(this._parallelizationFactor),
            provisioned_poller_config: ccEventSourceMappingProvisionedPollerConfigPropertyToTerraform(this._provisionedPollerConfig.internalValue),
            queues: cdktn.listMapper(cdktn.stringToTerraform, false)(this._queues),
            scaling_config: ccEventSourceMappingScalingConfigPropertyToTerraform(this._scalingConfig.internalValue),
            self_managed_event_source: ccEventSourceMappingSelfManagedEventSourcePropertyToTerraform(this._selfManagedEventSource.internalValue),
            self_managed_kafka_event_source_config: ccEventSourceMappingSelfManagedKafkaEventSourceConfigPropertyToTerraform(this._selfManagedKafkaEventSourceConfig.internalValue),
            source_access_configurations: cdktn.listMapper(ccEventSourceMappingSourceAccessConfigurationPropertyToTerraform, false)(this._sourceAccessConfigurations.internalValue),
            starting_position: cdktn.stringToTerraform(this._startingPosition),
            starting_position_timestamp: cdktn.numberToTerraform(this._startingPositionTimestamp),
            tags: cdktn.listMapper(ccEventSourceMappingTagPropertyToTerraform, false)(this._tags.internalValue),
            topics: cdktn.listMapper(cdktn.stringToTerraform, false)(this._topics),
            tumbling_window_in_seconds: cdktn.numberToTerraform(this._tumblingWindowInSeconds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            amazon_managed_kafka_event_source_config: {
                value: ccEventSourceMappingAmazonManagedKafkaEventSourceConfigPropertyToHclTerraform(this._amazonManagedKafkaEventSourceConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventSourceMapping.AmazonManagedKafkaEventSourceConfigProperty",
            },
            batch_size: {
                value: cdktn.numberToHclTerraform(this._batchSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            bisect_batch_on_function_error: {
                value: cdktn.booleanToHclTerraform(this._bisectBatchOnFunctionError),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            destination_config: {
                value: ccEventSourceMappingDestinationConfigPropertyToHclTerraform(this._destinationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventSourceMapping.DestinationConfigProperty",
            },
            document_db_event_source_config: {
                value: ccEventSourceMappingDocumentDBEventSourceConfigPropertyToHclTerraform(this._documentDbEventSourceConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventSourceMapping.DocumentDBEventSourceConfigProperty",
            },
            enabled: {
                value: cdktn.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            event_source_arn: {
                value: cdktn.stringToHclTerraform(this._eventSourceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter_criteria: {
                value: ccEventSourceMappingFilterCriteriaPropertyToHclTerraform(this._filterCriteria.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventSourceMapping.FilterCriteriaProperty",
            },
            function_name: {
                value: cdktn.stringToHclTerraform(this._functionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_response_types: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._functionResponseTypes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_config: {
                value: ccEventSourceMappingLoggingConfigPropertyToHclTerraform(this._loggingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventSourceMapping.LoggingConfigProperty",
            },
            maximum_batching_window_in_seconds: {
                value: cdktn.numberToHclTerraform(this._maximumBatchingWindowInSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            maximum_record_age_in_seconds: {
                value: cdktn.numberToHclTerraform(this._maximumRecordAgeInSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            maximum_retry_attempts: {
                value: cdktn.numberToHclTerraform(this._maximumRetryAttempts),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            metrics_config: {
                value: ccEventSourceMappingMetricsConfigPropertyToHclTerraform(this._metricsConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventSourceMapping.MetricsConfigProperty",
            },
            parallelization_factor: {
                value: cdktn.numberToHclTerraform(this._parallelizationFactor),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            provisioned_poller_config: {
                value: ccEventSourceMappingProvisionedPollerConfigPropertyToHclTerraform(this._provisionedPollerConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventSourceMapping.ProvisionedPollerConfigProperty",
            },
            queues: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._queues),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            scaling_config: {
                value: ccEventSourceMappingScalingConfigPropertyToHclTerraform(this._scalingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventSourceMapping.ScalingConfigProperty",
            },
            self_managed_event_source: {
                value: ccEventSourceMappingSelfManagedEventSourcePropertyToHclTerraform(this._selfManagedEventSource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventSourceMapping.SelfManagedEventSourceProperty",
            },
            self_managed_kafka_event_source_config: {
                value: ccEventSourceMappingSelfManagedKafkaEventSourceConfigPropertyToHclTerraform(this._selfManagedKafkaEventSourceConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEventSourceMapping.SelfManagedKafkaEventSourceConfigProperty",
            },
            source_access_configurations: {
                value: cdktn.listMapperHcl(ccEventSourceMappingSourceAccessConfigurationPropertyToHclTerraform, false)(this._sourceAccessConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEventSourceMapping.SourceAccessConfigurationPropertyList",
            },
            starting_position: {
                value: cdktn.stringToHclTerraform(this._startingPosition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            starting_position_timestamp: {
                value: cdktn.numberToHclTerraform(this._startingPositionTimestamp),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEventSourceMappingTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcEventSourceMapping.TagPropertyList",
            },
            topics: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._topics),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tumbling_window_in_seconds: {
                value: cdktn.numberToHclTerraform(this._tumblingWindowInSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventSourceMappingSchemaRegistryAccessConfigPropertyToTerraform(struct?: CcEventSourceMapping.SchemaRegistryAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        uri: cdktn.stringToTerraform(struct!.uri),
    }
}


export function ccEventSourceMappingSchemaRegistryAccessConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.SchemaRegistryAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uri: {
            value: cdktn.stringToHclTerraform(struct!.uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingSchemaValidationConfigPropertyToTerraform(struct?: CcEventSourceMapping.SchemaValidationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccEventSourceMappingSchemaValidationConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.SchemaValidationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute: {
            value: cdktn.stringToHclTerraform(struct!.attribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingSchemaRegistryConfigPropertyToTerraform(struct?: CcEventSourceMapping.SchemaRegistryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_configs: cdktn.listMapper(ccEventSourceMappingSchemaRegistryAccessConfigPropertyToTerraform, false)(struct!.accessConfigs),
        event_record_format: cdktn.stringToTerraform(struct!.eventRecordFormat),
        schema_registry_uri: cdktn.stringToTerraform(struct!.schemaRegistryUri),
        schema_validation_configs: cdktn.listMapper(ccEventSourceMappingSchemaValidationConfigPropertyToTerraform, false)(struct!.schemaValidationConfigs),
    }
}


export function ccEventSourceMappingSchemaRegistryConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.SchemaRegistryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_configs: {
            value: cdktn.listMapperHcl(ccEventSourceMappingSchemaRegistryAccessConfigPropertyToHclTerraform, false)(struct!.accessConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "SchemaRegistryAccessConfigPropertyList",
        },
        event_record_format: {
            value: cdktn.stringToHclTerraform(struct!.eventRecordFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_registry_uri: {
            value: cdktn.stringToHclTerraform(struct!.schemaRegistryUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_validation_configs: {
            value: cdktn.listMapperHcl(ccEventSourceMappingSchemaValidationConfigPropertyToHclTerraform, false)(struct!.schemaValidationConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "SchemaValidationConfigPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingAmazonManagedKafkaEventSourceConfigPropertyToTerraform(struct?: CcEventSourceMapping.AmazonManagedKafkaEventSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        consumer_group_id: cdktn.stringToTerraform(struct!.consumerGroupId),
        schema_registry_config: ccEventSourceMappingSchemaRegistryConfigPropertyToTerraform(struct!.schemaRegistryConfig),
    }
}


export function ccEventSourceMappingAmazonManagedKafkaEventSourceConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.AmazonManagedKafkaEventSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        consumer_group_id: {
            value: cdktn.stringToHclTerraform(struct!.consumerGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_registry_config: {
            value: ccEventSourceMappingSchemaRegistryConfigPropertyToHclTerraform(struct!.schemaRegistryConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SchemaRegistryConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingOnFailurePropertyToTerraform(struct?: CcEventSourceMapping.OnFailureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: cdktn.stringToTerraform(struct!.destination),
    }
}


export function ccEventSourceMappingOnFailurePropertyToHclTerraform(struct?: CcEventSourceMapping.OnFailureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: cdktn.stringToHclTerraform(struct!.destination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingDestinationConfigPropertyToTerraform(struct?: CcEventSourceMapping.DestinationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        on_failure: ccEventSourceMappingOnFailurePropertyToTerraform(struct!.onFailure),
    }
}


export function ccEventSourceMappingDestinationConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.DestinationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        on_failure: {
            value: ccEventSourceMappingOnFailurePropertyToHclTerraform(struct!.onFailure),
            isBlock: true,
            type: "struct",
            storageClassType: "OnFailureProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingDocumentDBEventSourceConfigPropertyToTerraform(struct?: CcEventSourceMapping.DocumentDBEventSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        collection_name: cdktn.stringToTerraform(struct!.collectionName),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        full_document: cdktn.stringToTerraform(struct!.fullDocument),
    }
}


export function ccEventSourceMappingDocumentDBEventSourceConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.DocumentDBEventSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        collection_name: {
            value: cdktn.stringToHclTerraform(struct!.collectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        full_document: {
            value: cdktn.stringToHclTerraform(struct!.fullDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingFilterPropertyToTerraform(struct?: CcEventSourceMapping.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pattern: cdktn.stringToTerraform(struct!.pattern),
    }
}


export function ccEventSourceMappingFilterPropertyToHclTerraform(struct?: CcEventSourceMapping.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pattern: {
            value: cdktn.stringToHclTerraform(struct!.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingFilterCriteriaPropertyToTerraform(struct?: CcEventSourceMapping.FilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filters: cdktn.listMapper(ccEventSourceMappingFilterPropertyToTerraform, false)(struct!.filters),
    }
}


export function ccEventSourceMappingFilterCriteriaPropertyToHclTerraform(struct?: CcEventSourceMapping.FilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filters: {
            value: cdktn.listMapperHcl(ccEventSourceMappingFilterPropertyToHclTerraform, false)(struct!.filters),
            isBlock: true,
            type: "list",
            storageClassType: "FilterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingLoggingConfigPropertyToTerraform(struct?: CcEventSourceMapping.LoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        system_log_level: cdktn.stringToTerraform(struct!.systemLogLevel),
    }
}


export function ccEventSourceMappingLoggingConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.LoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        system_log_level: {
            value: cdktn.stringToHclTerraform(struct!.systemLogLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingMetricsConfigPropertyToTerraform(struct?: CcEventSourceMapping.MetricsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metrics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metrics),
    }
}


export function ccEventSourceMappingMetricsConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.MetricsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metrics: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metrics),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingProvisionedPollerConfigPropertyToTerraform(struct?: CcEventSourceMapping.ProvisionedPollerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_pollers: cdktn.numberToTerraform(struct!.maximumPollers),
        minimum_pollers: cdktn.numberToTerraform(struct!.minimumPollers),
        poller_group_name: cdktn.stringToTerraform(struct!.pollerGroupName),
    }
}


export function ccEventSourceMappingProvisionedPollerConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.ProvisionedPollerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_pollers: {
            value: cdktn.numberToHclTerraform(struct!.maximumPollers),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum_pollers: {
            value: cdktn.numberToHclTerraform(struct!.minimumPollers),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        poller_group_name: {
            value: cdktn.stringToHclTerraform(struct!.pollerGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingScalingConfigPropertyToTerraform(struct?: CcEventSourceMapping.ScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        maximum_concurrency: cdktn.numberToTerraform(struct!.maximumConcurrency),
    }
}


export function ccEventSourceMappingScalingConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.ScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        maximum_concurrency: {
            value: cdktn.numberToHclTerraform(struct!.maximumConcurrency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingEndpointsPropertyToTerraform(struct?: CcEventSourceMapping.EndpointsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kafka_bootstrap_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.kafkaBootstrapServers),
    }
}


export function ccEventSourceMappingEndpointsPropertyToHclTerraform(struct?: CcEventSourceMapping.EndpointsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kafka_bootstrap_servers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.kafkaBootstrapServers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingSelfManagedEventSourcePropertyToTerraform(struct?: CcEventSourceMapping.SelfManagedEventSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoints: ccEventSourceMappingEndpointsPropertyToTerraform(struct!.endpoints),
    }
}


export function ccEventSourceMappingSelfManagedEventSourcePropertyToHclTerraform(struct?: CcEventSourceMapping.SelfManagedEventSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoints: {
            value: ccEventSourceMappingEndpointsPropertyToHclTerraform(struct!.endpoints),
            isBlock: true,
            type: "struct",
            storageClassType: "EndpointsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingAccessConfigsPropertyToTerraform(struct?: CcEventSourceMapping.AccessConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        uri: cdktn.stringToTerraform(struct!.uri),
    }
}


export function ccEventSourceMappingAccessConfigsPropertyToHclTerraform(struct?: CcEventSourceMapping.AccessConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uri: {
            value: cdktn.stringToHclTerraform(struct!.uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingSchemaValidationConfigsPropertyToTerraform(struct?: CcEventSourceMapping.SchemaValidationConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attribute: cdktn.stringToTerraform(struct!.attribute),
    }
}


export function ccEventSourceMappingSchemaValidationConfigsPropertyToHclTerraform(struct?: CcEventSourceMapping.SchemaValidationConfigsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attribute: {
            value: cdktn.stringToHclTerraform(struct!.attribute),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToTerraform(struct?: CcEventSourceMapping.SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_configs: cdktn.listMapper(ccEventSourceMappingAccessConfigsPropertyToTerraform, false)(struct!.accessConfigs),
        event_record_format: cdktn.stringToTerraform(struct!.eventRecordFormat),
        schema_registry_uri: cdktn.stringToTerraform(struct!.schemaRegistryUri),
        schema_validation_configs: cdktn.listMapper(ccEventSourceMappingSchemaValidationConfigsPropertyToTerraform, false)(struct!.schemaValidationConfigs),
    }
}


export function ccEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_configs: {
            value: cdktn.listMapperHcl(ccEventSourceMappingAccessConfigsPropertyToHclTerraform, false)(struct!.accessConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "AccessConfigsPropertyList",
        },
        event_record_format: {
            value: cdktn.stringToHclTerraform(struct!.eventRecordFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_registry_uri: {
            value: cdktn.stringToHclTerraform(struct!.schemaRegistryUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_validation_configs: {
            value: cdktn.listMapperHcl(ccEventSourceMappingSchemaValidationConfigsPropertyToHclTerraform, false)(struct!.schemaValidationConfigs),
            isBlock: true,
            type: "list",
            storageClassType: "SchemaValidationConfigsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingSelfManagedKafkaEventSourceConfigPropertyToTerraform(struct?: CcEventSourceMapping.SelfManagedKafkaEventSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        consumer_group_id: cdktn.stringToTerraform(struct!.consumerGroupId),
        schema_registry_config: ccEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToTerraform(struct!.schemaRegistryConfig),
    }
}


export function ccEventSourceMappingSelfManagedKafkaEventSourceConfigPropertyToHclTerraform(struct?: CcEventSourceMapping.SelfManagedKafkaEventSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        consumer_group_id: {
            value: cdktn.stringToHclTerraform(struct!.consumerGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_registry_config: {
            value: ccEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyToHclTerraform(struct!.schemaRegistryConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingSourceAccessConfigurationPropertyToTerraform(struct?: CcEventSourceMapping.SourceAccessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        uri: cdktn.stringToTerraform(struct!.uri),
    }
}


export function ccEventSourceMappingSourceAccessConfigurationPropertyToHclTerraform(struct?: CcEventSourceMapping.SourceAccessConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uri: {
            value: cdktn.stringToHclTerraform(struct!.uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEventSourceMappingTagPropertyToTerraform(struct?: CcEventSourceMapping.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEventSourceMappingTagPropertyToHclTerraform(struct?: CcEventSourceMapping.TagProperty | cdktn.IResolvable): any {
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


export namespace CcEventSourceMapping {
export interface SchemaRegistryAccessConfigProperty {
    /**
    * The type of authentication Lambda uses to access your schema registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#type CcEventSourceMapping#type}
    */
    readonly type?: string;
    /**
    * The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#uri CcEventSourceMapping#uri}
    */
    readonly uri?: string;
}
export class SchemaRegistryAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SchemaRegistryAccessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaRegistryAccessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._uri = value.uri;
        }
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

    // uri - computed: true, optional: true, required: false
    private _uri?: string; 
    public get uri() {
        return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
        this._uri = value;
    }
    public resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
        return this._uri;
    }
}

export class SchemaRegistryAccessConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : SchemaRegistryAccessConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): SchemaRegistryAccessConfigPropertyOutputReference {
        return new SchemaRegistryAccessConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SchemaValidationConfigProperty {
    /**
    * The attributes you want your schema registry to validate and filter for. If you selected ``JSON`` as the ``EventRecordFormat``, Lambda also deserializes the selected message attributes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#attribute CcEventSourceMapping#attribute}
    */
    readonly attribute?: string;
}
export class SchemaValidationConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SchemaValidationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.attribute = this._attribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaValidationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attribute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attribute = value.attribute;
        }
    }

    // attribute - computed: true, optional: true, required: false
    private _attribute?: string; 
    public get attribute() {
        return this.getStringAttribute('attribute');
    }
    public set attribute(value: string) {
        this._attribute = value;
    }
    public resetAttribute() {
        this._attribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
        return this._attribute;
    }
}

export class SchemaValidationConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : SchemaValidationConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): SchemaValidationConfigPropertyOutputReference {
        return new SchemaValidationConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SchemaRegistryConfigProperty {
    /**
    * An array of access configuration objects that tell Lambda how to authenticate with your schema registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#access_configs CcEventSourceMapping#access_configs}
    */
    readonly accessConfigs?: SchemaRegistryAccessConfigProperty[] | cdktn.IResolvable;
    /**
    * The record format that Lambda delivers to your function after schema validation.
    *   +  Choose ``JSON`` to have Lambda deliver the record to your function as a standard JSON object.
    *   +  Choose ``SOURCE`` to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#event_record_format CcEventSourceMapping#event_record_format}
    */
    readonly eventRecordFormat?: string;
    /**
    * The URI for your schema registry. The correct URI format depends on the type of schema registry you're using.
    *   +  For GLU schema registries, use the ARN of the registry.
    *   +  For Confluent schema registries, use the URL of the registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#schema_registry_uri CcEventSourceMapping#schema_registry_uri}
    */
    readonly schemaRegistryUri?: string;
    /**
    * An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#schema_validation_configs CcEventSourceMapping#schema_validation_configs}
    */
    readonly schemaValidationConfigs?: SchemaValidationConfigProperty[] | cdktn.IResolvable;
}
export class SchemaRegistryConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchemaRegistryConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessConfigs = this._accessConfigs?.internalValue;
        }
        if (this._eventRecordFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventRecordFormat = this._eventRecordFormat;
        }
        if (this._schemaRegistryUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaRegistryUri = this._schemaRegistryUri;
        }
        if (this._schemaValidationConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaValidationConfigs = this._schemaValidationConfigs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaRegistryConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessConfigs.internalValue = undefined;
            this._eventRecordFormat = undefined;
            this._schemaRegistryUri = undefined;
            this._schemaValidationConfigs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessConfigs.internalValue = value.accessConfigs;
            this._eventRecordFormat = value.eventRecordFormat;
            this._schemaRegistryUri = value.schemaRegistryUri;
            this._schemaValidationConfigs.internalValue = value.schemaValidationConfigs;
        }
    }

    // access_configs - computed: true, optional: true, required: false
    private _accessConfigs = new SchemaRegistryAccessConfigPropertyList(this, "access_configs", false);
    public get accessConfigs() {
        return this._accessConfigs;
    }
    public putAccessConfigs(value: SchemaRegistryAccessConfigProperty[] | cdktn.IResolvable) {
        this._accessConfigs.internalValue = value;
    }
    public resetAccessConfigs() {
        this._accessConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessConfigsInput() {
        return this._accessConfigs.internalValue;
    }

    // event_record_format - computed: true, optional: true, required: false
    private _eventRecordFormat?: string; 
    public get eventRecordFormat() {
        return this.getStringAttribute('event_record_format');
    }
    public set eventRecordFormat(value: string) {
        this._eventRecordFormat = value;
    }
    public resetEventRecordFormat() {
        this._eventRecordFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventRecordFormatInput() {
        return this._eventRecordFormat;
    }

    // schema_registry_uri - computed: true, optional: true, required: false
    private _schemaRegistryUri?: string; 
    public get schemaRegistryUri() {
        return this.getStringAttribute('schema_registry_uri');
    }
    public set schemaRegistryUri(value: string) {
        this._schemaRegistryUri = value;
    }
    public resetSchemaRegistryUri() {
        this._schemaRegistryUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaRegistryUriInput() {
        return this._schemaRegistryUri;
    }

    // schema_validation_configs - computed: true, optional: true, required: false
    private _schemaValidationConfigs = new SchemaValidationConfigPropertyList(this, "schema_validation_configs", false);
    public get schemaValidationConfigs() {
        return this._schemaValidationConfigs;
    }
    public putSchemaValidationConfigs(value: SchemaValidationConfigProperty[] | cdktn.IResolvable) {
        this._schemaValidationConfigs.internalValue = value;
    }
    public resetSchemaValidationConfigs() {
        this._schemaValidationConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaValidationConfigsInput() {
        return this._schemaValidationConfigs.internalValue;
    }
}
export interface AmazonManagedKafkaEventSourceConfigProperty {
    /**
    * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#consumer_group_id CcEventSourceMapping#consumer_group_id}
    */
    readonly consumerGroupId?: string;
    /**
    * Specific configuration settings for a Kafka schema registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#schema_registry_config CcEventSourceMapping#schema_registry_config}
    */
    readonly schemaRegistryConfig?: SchemaRegistryConfigProperty;
}
export class AmazonManagedKafkaEventSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AmazonManagedKafkaEventSourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._consumerGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.consumerGroupId = this._consumerGroupId;
        }
        if (this._schemaRegistryConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaRegistryConfig = this._schemaRegistryConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AmazonManagedKafkaEventSourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._consumerGroupId = undefined;
            this._schemaRegistryConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._consumerGroupId = value.consumerGroupId;
            this._schemaRegistryConfig.internalValue = value.schemaRegistryConfig;
        }
    }

    // consumer_group_id - computed: true, optional: true, required: false
    private _consumerGroupId?: string; 
    public get consumerGroupId() {
        return this.getStringAttribute('consumer_group_id');
    }
    public set consumerGroupId(value: string) {
        this._consumerGroupId = value;
    }
    public resetConsumerGroupId() {
        this._consumerGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consumerGroupIdInput() {
        return this._consumerGroupId;
    }

    // schema_registry_config - computed: true, optional: true, required: false
    private _schemaRegistryConfig = new SchemaRegistryConfigPropertyOutputReference(this, "schema_registry_config");
    public get schemaRegistryConfig() {
        return this._schemaRegistryConfig;
    }
    public putSchemaRegistryConfig(value: SchemaRegistryConfigProperty) {
        this._schemaRegistryConfig.internalValue = value;
    }
    public resetSchemaRegistryConfig() {
        this._schemaRegistryConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaRegistryConfigInput() {
        return this._schemaRegistryConfig.internalValue;
    }
}
export interface OnFailureProperty {
    /**
    * The Amazon Resource Name (ARN) of the destination resource.
    *  To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Apache Kafka](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, or Kafka topic as the destination.
    *   Amazon SNS destinations have a message size limit of 256 KB. If the combined size of the function request and response payload exceeds the limit, Lambda will drop the payload when sending ``OnFailure`` event to the destination. For details on this behavior, refer to [Retaining records of asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html).
    *   To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination), you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#destination CcEventSourceMapping#destination}
    */
    readonly destination?: string;
}
export class OnFailurePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OnFailureProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OnFailureProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination = value.destination;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    public resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
    }
}
export interface DestinationConfigProperty {
    /**
    * The destination configuration for failed invocations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#on_failure CcEventSourceMapping#on_failure}
    */
    readonly onFailure?: OnFailureProperty;
}
export class DestinationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._onFailure?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.onFailure = this._onFailure?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._onFailure.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._onFailure.internalValue = value.onFailure;
        }
    }

    // on_failure - computed: true, optional: true, required: false
    private _onFailure = new OnFailurePropertyOutputReference(this, "on_failure");
    public get onFailure() {
        return this._onFailure;
    }
    public putOnFailure(value: OnFailureProperty) {
        this._onFailure.internalValue = value;
    }
    public resetOnFailure() {
        this._onFailure.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onFailureInput() {
        return this._onFailure.internalValue;
    }
}
export interface DocumentDBEventSourceConfigProperty {
    /**
    * The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#collection_name CcEventSourceMapping#collection_name}
    */
    readonly collectionName?: string;
    /**
    * The name of the database to consume within the DocumentDB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#database_name CcEventSourceMapping#database_name}
    */
    readonly databaseName?: string;
    /**
    * Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#full_document CcEventSourceMapping#full_document}
    */
    readonly fullDocument?: string;
}
export class DocumentDBEventSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocumentDBEventSourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._collectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.collectionName = this._collectionName;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._fullDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.fullDocument = this._fullDocument;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocumentDBEventSourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._collectionName = undefined;
            this._databaseName = undefined;
            this._fullDocument = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._collectionName = value.collectionName;
            this._databaseName = value.databaseName;
            this._fullDocument = value.fullDocument;
        }
    }

    // collection_name - computed: true, optional: true, required: false
    private _collectionName?: string; 
    public get collectionName() {
        return this.getStringAttribute('collection_name');
    }
    public set collectionName(value: string) {
        this._collectionName = value;
    }
    public resetCollectionName() {
        this._collectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get collectionNameInput() {
        return this._collectionName;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // full_document - computed: true, optional: true, required: false
    private _fullDocument?: string; 
    public get fullDocument() {
        return this.getStringAttribute('full_document');
    }
    public set fullDocument(value: string) {
        this._fullDocument = value;
    }
    public resetFullDocument() {
        this._fullDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fullDocumentInput() {
        return this._fullDocument;
    }
}
export interface FilterProperty {
    /**
    * A filter pattern. For more information on the syntax of a filter pattern, see [Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#pattern CcEventSourceMapping#pattern}
    */
    readonly pattern?: string;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pattern = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pattern = value.pattern;
        }
    }

    // pattern - computed: true, optional: true, required: false
    private _pattern?: string; 
    public get pattern() {
        return this.getStringAttribute('pattern');
    }
    public set pattern(value: string) {
        this._pattern = value;
    }
    public resetPattern() {
        this._pattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternInput() {
        return this._pattern;
    }
}

export class FilterPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterPropertyOutputReference {
        return new FilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterCriteriaProperty {
    /**
    * A list of filters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#filters CcEventSourceMapping#filters}
    */
    readonly filters?: FilterProperty[] | cdktn.IResolvable;
}
export class FilterCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filters.internalValue = value.filters;
        }
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new FilterPropertyList(this, "filters", false);
    public get filters() {
        return this._filters;
    }
    public putFilters(value: FilterProperty[] | cdktn.IResolvable) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }
}
export interface LoggingConfigProperty {
    /**
    * Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where ``DEBUG`` is the highest level and ``WARN`` is the lowest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#system_log_level CcEventSourceMapping#system_log_level}
    */
    readonly systemLogLevel?: string;
}
export class LoggingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._systemLogLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.systemLogLevel = this._systemLogLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._systemLogLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._systemLogLevel = value.systemLogLevel;
        }
    }

    // system_log_level - computed: true, optional: true, required: false
    private _systemLogLevel?: string; 
    public get systemLogLevel() {
        return this.getStringAttribute('system_log_level');
    }
    public set systemLogLevel(value: string) {
        this._systemLogLevel = value;
    }
    public resetSystemLogLevel() {
        this._systemLogLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemLogLevelInput() {
        return this._systemLogLevel;
    }
}
export interface MetricsConfigProperty {
    /**
    * The metrics you want your event source mapping to produce, including ``EventCount``, ``ErrorCount``, ``KafkaMetrics``. 
    *   +  ``EventCount`` to receive metrics related to the number of events processed by your event source mapping.
    *   +  ``ErrorCount`` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the number of errors in your event source mapping processing.
    *   +  ``KafkaMetrics`` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the Kafka consumers from your event source mapping.
    *   
    *   For more information about these metrics, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#metrics CcEventSourceMapping#metrics}
    */
    readonly metrics?: string[];
}
export class MetricsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metrics !== undefined) {
            hasAnyValues = true;
            internalValueResult.metrics = this._metrics;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metrics = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metrics = value.metrics;
        }
    }

    // metrics - computed: true, optional: true, required: false
    private _metrics?: string[]; 
    public get metrics() {
        return this.getListAttribute('metrics');
    }
    public set metrics(value: string[]) {
        this._metrics = value;
    }
    public resetMetrics() {
        this._metrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsInput() {
        return this._metrics;
    }
}
export interface ProvisionedPollerConfigProperty {
    /**
    * The maximum number of event pollers this event source can scale up to. For Amazon SQS events source mappings, default is 200, and minimum value allowed is 2. For Amazon MSK and self-managed Apache Kafka event source mappings, default is 200, and minimum value allowed is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#maximum_pollers CcEventSourceMapping#maximum_pollers}
    */
    readonly maximumPollers?: number;
    /**
    * The minimum number of event pollers this event source can scale down to. For Amazon SQS events source mappings, default is 2, and minimum 2 required. For Amazon MSK and self-managed Apache Kafka event source mappings, default is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#minimum_pollers CcEventSourceMapping#minimum_pollers}
    */
    readonly minimumPollers?: number;
    /**
    * (Amazon MSK and self-managed Apache Kafka) The name of the provisioned poller group. Use this option to group multiple ESMs within the event source's VPC to share Event Poller Unit (EPU) capacity. You can use this option to optimize Provisioned mode costs for your ESMs. You can group up to 100 ESMs per poller group and aggregate maximum pollers across all ESMs in a group cannot exceed 2000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#poller_group_name CcEventSourceMapping#poller_group_name}
    */
    readonly pollerGroupName?: string;
}
export class ProvisionedPollerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProvisionedPollerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumPollers !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumPollers = this._maximumPollers;
        }
        if (this._minimumPollers !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumPollers = this._minimumPollers;
        }
        if (this._pollerGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.pollerGroupName = this._pollerGroupName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisionedPollerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumPollers = undefined;
            this._minimumPollers = undefined;
            this._pollerGroupName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumPollers = value.maximumPollers;
            this._minimumPollers = value.minimumPollers;
            this._pollerGroupName = value.pollerGroupName;
        }
    }

    // maximum_pollers - computed: true, optional: true, required: false
    private _maximumPollers?: number; 
    public get maximumPollers() {
        return this.getNumberAttribute('maximum_pollers');
    }
    public set maximumPollers(value: number) {
        this._maximumPollers = value;
    }
    public resetMaximumPollers() {
        this._maximumPollers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumPollersInput() {
        return this._maximumPollers;
    }

    // minimum_pollers - computed: true, optional: true, required: false
    private _minimumPollers?: number; 
    public get minimumPollers() {
        return this.getNumberAttribute('minimum_pollers');
    }
    public set minimumPollers(value: number) {
        this._minimumPollers = value;
    }
    public resetMinimumPollers() {
        this._minimumPollers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumPollersInput() {
        return this._minimumPollers;
    }

    // poller_group_name - computed: true, optional: true, required: false
    private _pollerGroupName?: string; 
    public get pollerGroupName() {
        return this.getStringAttribute('poller_group_name');
    }
    public set pollerGroupName(value: string) {
        this._pollerGroupName = value;
    }
    public resetPollerGroupName() {
        this._pollerGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pollerGroupNameInput() {
        return this._pollerGroupName;
    }
}
export interface ScalingConfigProperty {
    /**
    * Limits the number of concurrent instances that the SQS event source can invoke.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#maximum_concurrency CcEventSourceMapping#maximum_concurrency}
    */
    readonly maximumConcurrency?: number;
}
export class ScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScalingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maximumConcurrency !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumConcurrency = this._maximumConcurrency;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScalingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maximumConcurrency = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maximumConcurrency = value.maximumConcurrency;
        }
    }

    // maximum_concurrency - computed: true, optional: true, required: false
    private _maximumConcurrency?: number; 
    public get maximumConcurrency() {
        return this.getNumberAttribute('maximum_concurrency');
    }
    public set maximumConcurrency(value: number) {
        this._maximumConcurrency = value;
    }
    public resetMaximumConcurrency() {
        this._maximumConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumConcurrencyInput() {
        return this._maximumConcurrency;
    }
}
export interface EndpointsProperty {
    /**
    * The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#kafka_bootstrap_servers CcEventSourceMapping#kafka_bootstrap_servers}
    */
    readonly kafkaBootstrapServers?: string[];
}
export class EndpointsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kafkaBootstrapServers !== undefined) {
            hasAnyValues = true;
            internalValueResult.kafkaBootstrapServers = this._kafkaBootstrapServers;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kafkaBootstrapServers = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kafkaBootstrapServers = value.kafkaBootstrapServers;
        }
    }

    // kafka_bootstrap_servers - computed: true, optional: true, required: false
    private _kafkaBootstrapServers?: string[]; 
    public get kafkaBootstrapServers() {
        return this.getListAttribute('kafka_bootstrap_servers');
    }
    public set kafkaBootstrapServers(value: string[]) {
        this._kafkaBootstrapServers = value;
    }
    public resetKafkaBootstrapServers() {
        this._kafkaBootstrapServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaBootstrapServersInput() {
        return this._kafkaBootstrapServers;
    }
}
export interface SelfManagedEventSourceProperty {
    /**
    * The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#endpoints CcEventSourceMapping#endpoints}
    */
    readonly endpoints?: EndpointsProperty;
}
export class SelfManagedEventSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfManagedEventSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpoints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoints = this._endpoints?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfManagedEventSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpoints.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpoints.internalValue = value.endpoints;
        }
    }

    // endpoints - computed: true, optional: true, required: false
    private _endpoints = new EndpointsPropertyOutputReference(this, "endpoints");
    public get endpoints() {
        return this._endpoints;
    }
    public putEndpoints(value: EndpointsProperty) {
        this._endpoints.internalValue = value;
    }
    public resetEndpoints() {
        this._endpoints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointsInput() {
        return this._endpoints.internalValue;
    }
}
export interface AccessConfigsProperty {
    /**
    * The type of authentication Lambda uses to access your schema registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#type CcEventSourceMapping#type}
    */
    readonly type?: string;
    /**
    * The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#uri CcEventSourceMapping#uri}
    */
    readonly uri?: string;
}
export class AccessConfigsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AccessConfigsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessConfigsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._uri = value.uri;
        }
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

    // uri - computed: true, optional: true, required: false
    private _uri?: string; 
    public get uri() {
        return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
        this._uri = value;
    }
    public resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
        return this._uri;
    }
}

export class AccessConfigsPropertyList extends cdktn.ComplexList {
    public internalValue? : AccessConfigsProperty[] | cdktn.IResolvable

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
    public get(index: number): AccessConfigsPropertyOutputReference {
        return new AccessConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SchemaValidationConfigsProperty {
    /**
    * The attributes you want your schema registry to validate and filter for. If you selected ``JSON`` as the ``EventRecordFormat``, Lambda also deserializes the selected message attributes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#attribute CcEventSourceMapping#attribute}
    */
    readonly attribute?: string;
}
export class SchemaValidationConfigsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SchemaValidationConfigsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attribute !== undefined) {
            hasAnyValues = true;
            internalValueResult.attribute = this._attribute;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaValidationConfigsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attribute = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attribute = value.attribute;
        }
    }

    // attribute - computed: true, optional: true, required: false
    private _attribute?: string; 
    public get attribute() {
        return this.getStringAttribute('attribute');
    }
    public set attribute(value: string) {
        this._attribute = value;
    }
    public resetAttribute() {
        this._attribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
        return this._attribute;
    }
}

export class SchemaValidationConfigsPropertyList extends cdktn.ComplexList {
    public internalValue? : SchemaValidationConfigsProperty[] | cdktn.IResolvable

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
    public get(index: number): SchemaValidationConfigsPropertyOutputReference {
        return new SchemaValidationConfigsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty {
    /**
    * An array of access configuration objects that tell Lambda how to authenticate with your schema registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#access_configs CcEventSourceMapping#access_configs}
    */
    readonly accessConfigs?: AccessConfigsProperty[] | cdktn.IResolvable;
    /**
    * The record format that Lambda delivers to your function after schema validation.
    *   +  Choose ``JSON`` to have Lambda deliver the record to your function as a standard JSON object.
    *   +  Choose ``SOURCE`` to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#event_record_format CcEventSourceMapping#event_record_format}
    */
    readonly eventRecordFormat?: string;
    /**
    * The URI for your schema registry. The correct URI format depends on the type of schema registry you're using.
    *   +  For GLU schema registries, use the ARN of the registry.
    *   +  For Confluent schema registries, use the URL of the registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#schema_registry_uri CcEventSourceMapping#schema_registry_uri}
    */
    readonly schemaRegistryUri?: string;
    /**
    * An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#schema_validation_configs CcEventSourceMapping#schema_validation_configs}
    */
    readonly schemaValidationConfigs?: SchemaValidationConfigsProperty[] | cdktn.IResolvable;
}
export class SelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessConfigs = this._accessConfigs?.internalValue;
        }
        if (this._eventRecordFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventRecordFormat = this._eventRecordFormat;
        }
        if (this._schemaRegistryUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaRegistryUri = this._schemaRegistryUri;
        }
        if (this._schemaValidationConfigs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaValidationConfigs = this._schemaValidationConfigs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessConfigs.internalValue = undefined;
            this._eventRecordFormat = undefined;
            this._schemaRegistryUri = undefined;
            this._schemaValidationConfigs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessConfigs.internalValue = value.accessConfigs;
            this._eventRecordFormat = value.eventRecordFormat;
            this._schemaRegistryUri = value.schemaRegistryUri;
            this._schemaValidationConfigs.internalValue = value.schemaValidationConfigs;
        }
    }

    // access_configs - computed: true, optional: true, required: false
    private _accessConfigs = new AccessConfigsPropertyList(this, "access_configs", false);
    public get accessConfigs() {
        return this._accessConfigs;
    }
    public putAccessConfigs(value: AccessConfigsProperty[] | cdktn.IResolvable) {
        this._accessConfigs.internalValue = value;
    }
    public resetAccessConfigs() {
        this._accessConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessConfigsInput() {
        return this._accessConfigs.internalValue;
    }

    // event_record_format - computed: true, optional: true, required: false
    private _eventRecordFormat?: string; 
    public get eventRecordFormat() {
        return this.getStringAttribute('event_record_format');
    }
    public set eventRecordFormat(value: string) {
        this._eventRecordFormat = value;
    }
    public resetEventRecordFormat() {
        this._eventRecordFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventRecordFormatInput() {
        return this._eventRecordFormat;
    }

    // schema_registry_uri - computed: true, optional: true, required: false
    private _schemaRegistryUri?: string; 
    public get schemaRegistryUri() {
        return this.getStringAttribute('schema_registry_uri');
    }
    public set schemaRegistryUri(value: string) {
        this._schemaRegistryUri = value;
    }
    public resetSchemaRegistryUri() {
        this._schemaRegistryUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaRegistryUriInput() {
        return this._schemaRegistryUri;
    }

    // schema_validation_configs - computed: true, optional: true, required: false
    private _schemaValidationConfigs = new SchemaValidationConfigsPropertyList(this, "schema_validation_configs", false);
    public get schemaValidationConfigs() {
        return this._schemaValidationConfigs;
    }
    public putSchemaValidationConfigs(value: SchemaValidationConfigsProperty[] | cdktn.IResolvable) {
        this._schemaValidationConfigs.internalValue = value;
    }
    public resetSchemaValidationConfigs() {
        this._schemaValidationConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaValidationConfigsInput() {
        return this._schemaValidationConfigs.internalValue;
    }
}
export interface SelfManagedKafkaEventSourceConfigProperty {
    /**
    * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka-process.html#services-smaa-topic-add).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#consumer_group_id CcEventSourceMapping#consumer_group_id}
    */
    readonly consumerGroupId?: string;
    /**
    * Specific configuration settings for a Kafka schema registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#schema_registry_config CcEventSourceMapping#schema_registry_config}
    */
    readonly schemaRegistryConfig?: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty;
}
export class SelfManagedKafkaEventSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfManagedKafkaEventSourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._consumerGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.consumerGroupId = this._consumerGroupId;
        }
        if (this._schemaRegistryConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaRegistryConfig = this._schemaRegistryConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfManagedKafkaEventSourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._consumerGroupId = undefined;
            this._schemaRegistryConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._consumerGroupId = value.consumerGroupId;
            this._schemaRegistryConfig.internalValue = value.schemaRegistryConfig;
        }
    }

    // consumer_group_id - computed: true, optional: true, required: false
    private _consumerGroupId?: string; 
    public get consumerGroupId() {
        return this.getStringAttribute('consumer_group_id');
    }
    public set consumerGroupId(value: string) {
        this._consumerGroupId = value;
    }
    public resetConsumerGroupId() {
        this._consumerGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consumerGroupIdInput() {
        return this._consumerGroupId;
    }

    // schema_registry_config - computed: true, optional: true, required: false
    private _schemaRegistryConfig = new SelfManagedKafkaEventSourceConfigSchemaRegistryConfigPropertyOutputReference(this, "schema_registry_config");
    public get schemaRegistryConfig() {
        return this._schemaRegistryConfig;
    }
    public putSchemaRegistryConfig(value: SelfManagedKafkaEventSourceConfigSchemaRegistryConfigProperty) {
        this._schemaRegistryConfig.internalValue = value;
    }
    public resetSchemaRegistryConfig() {
        this._schemaRegistryConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaRegistryConfigInput() {
        return this._schemaRegistryConfig.internalValue;
    }
}
export interface SourceAccessConfigurationProperty {
    /**
    * The type of authentication protocol, VPC components, or virtual host for your event source. For example: ``"Type":"SASL_SCRAM_512_AUTH"``.
    *   +  ``BASIC_AUTH`` – (Amazon MQ) The ASMlong secret that stores your broker credentials.
    *   +  ``BASIC_AUTH`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.
    *   +  ``VPC_SUBNET`` – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.
    *   +  ``VPC_SECURITY_GROUP`` – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.
    *   +  ``SASL_SCRAM_256_AUTH`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.
    *   +  ``SASL_SCRAM_512_AUTH`` – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.
    *   +  ``VIRTUAL_HOST`` –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.
    *   +  ``CLIENT_CERTIFICATE_TLS_AUTH`` – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.
    *   +  ``SERVER_ROOT_CA_CERTIFICATE`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#type CcEventSourceMapping#type}
    */
    readonly type?: string;
    /**
    * The value for your chosen configuration in ``Type``. For example: ``"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#uri CcEventSourceMapping#uri}
    */
    readonly uri?: string;
}
export class SourceAccessConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourceAccessConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceAccessConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._uri = value.uri;
        }
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

    // uri - computed: true, optional: true, required: false
    private _uri?: string; 
    public get uri() {
        return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
        this._uri = value;
    }
    public resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
        return this._uri;
    }
}

export class SourceAccessConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : SourceAccessConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): SourceAccessConfigurationPropertyOutputReference {
        return new SourceAccessConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key for this tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#key CcEventSourceMapping#key}
    */
    readonly key?: string;
    /**
    * The value for this tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_source_mapping#value CcEventSourceMapping#value}
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
