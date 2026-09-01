// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQueueProps extends cdktn.TerraformMetaArguments {
    /**
    * For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. During the deduplication interval, SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message. For more information, see the ``ContentBasedDeduplication`` attribute for the ``CreateQueue`` action in the *API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#content_based_deduplication CcQueue#content_based_deduplication}
    */
    readonly contentBasedDeduplication?: boolean | cdktn.IResolvable;
    /**
    * For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level. Valid values are ``messageGroup`` and ``queue``.
    *  To enable high throughput for a FIFO queue, set this attribute to ``messageGroup``*and* set the ``FifoThroughputLimit`` attribute to ``perMessageGroupId``. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#deduplication_scope CcQueue#deduplication_scope}
    */
    readonly deduplicationScope?: string;
    /**
    * The time in seconds for which the delivery of all messages in the queue is delayed. You can specify an integer value of ``0`` to ``900`` (15 minutes). The default value is ``0``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#delay_seconds CcQueue#delay_seconds}
    */
    readonly delaySeconds?: number;
    /**
    * If set to true, creates a FIFO queue. If you don't specify this property, SQS creates a standard queue. For more information, see [Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#fifo_queue CcQueue#fifo_queue}
    */
    readonly fifoQueue?: boolean | cdktn.IResolvable;
    /**
    * For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are ``perQueue`` and ``perMessageGroupId``.
    *  To enable high throughput for a FIFO queue, set this attribute to ``perMessageGroupId``*and* set the ``DeduplicationScope`` attribute to ``messageGroup``. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#fifo_throughput_limit CcQueue#fifo_throughput_limit}
    */
    readonly fifoThroughputLimit?: string;
    /**
    * The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes).
    *   A shorter time period provides better security, but results in more calls to KMS, which might incur charges after Free Tier. For more information, see [Encryption at rest](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds CcQueue#kms_data_key_reuse_period_seconds}
    */
    readonly kmsDataKeyReusePeriodSeconds?: number;
    /**
    * The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS. To use the AWS managed KMS for SQS, specify a (default) alias ARN, alias name (for example ``alias/aws/sqs``), key ARN, or key ID. For more information, see the following:
    *   +  [Encryption at rest](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html) in the *Developer Guide*
    *   +  [CreateQueue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html) in the *API Reference*
    *   +  [Request Parameters](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters) in the *Key Management Service API Reference*
    *   +   The Key Management Service (KMS) section of the [Security best practices for Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/best-practices.html) in the *Key Management Service Developer Guide*
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#kms_master_key_id CcQueue#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * The limit of how many bytes that a message can contain before SQS rejects it. You can specify an integer from 1,024 bytes (1 KiB) to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes (1 MiB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#maximum_message_size CcQueue#maximum_message_size}
    */
    readonly maximumMessageSize?: number;
    /**
    * The number of seconds that SQS retains a message. You can specify an integer value from ``60`` seconds (1 minute) to ``1,209,600`` seconds (14 days). The default value is ``345,600`` seconds (4 days).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#message_retention_period CcQueue#message_retention_period}
    */
    readonly messageRetentionPeriod?: number;
    /**
    * A name for the queue. To create a FIFO queue, the name of your FIFO queue must end with the ``.fifo`` suffix. For more information, see [Amazon SQS FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html) in the *Developer Guide*.
    *  If you don't specify a name, CFN generates a unique physical ID and uses that ID for the queue name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) in the *User Guide*. 
    *   If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#queue_name CcQueue#queue_name}
    */
    readonly queueName?: string;
    /**
    * Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available. You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property. For more information, see [Consuming messages using long polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html#sqs-long-polling) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#receive_message_wait_time_seconds CcQueue#receive_message_wait_time_seconds}
    */
    readonly receiveMessageWaitTimeSeconds?: number;
    /**
    * The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:
    *   +  ``redrivePermission``: The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:
    *   +  ``allowAll``: (Default) Any source queues in this AWS account in the same Region can specify this queue as the dead-letter queue.
    *   +  ``denyAll``: No source queues can specify this queue as the dead-letter queue.
    *   +  ``byQueue``: Only queues specified by the ``sourceQueueArns`` parameter can specify this queue as the dead-letter queue.
    *   
    *   +  ``sourceQueueArns``: The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the ``redrivePermission`` parameter is set to ``byQueue``. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the ``redrivePermission`` parameter to ``allowAll``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#redrive_allow_policy CcQueue#redrive_allow_policy}
    */
    readonly redriveAllowPolicy?: string;
    /**
    * The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:
    *   +  ``deadLetterTargetArn``: The Amazon Resource Name (ARN) of the dead-letter queue to which SQS moves messages after the value of ``maxReceiveCount`` is exceeded.
    *   +  ``maxReceiveCount``: The number of times a message is received by a consumer of the source queue before being moved to the dead-letter queue. When the ``ReceiveCount`` for a message exceeds the ``maxReceiveCount`` for a queue, SQS moves the message to the dead-letter-queue.
    *   
    *   The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.
    *    *JSON* 
    *   ``{ "deadLetterTargetArn" : String, "maxReceiveCount" : Integer }`` 
    *   *YAML* 
    *   ``deadLetterTargetArn : String`` 
    *   ``maxReceiveCount : Integer``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#redrive_policy CcQueue#redrive_policy}
    */
    readonly redrivePolicy?: string;
    /**
    * Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, [SSE-KMS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or [SSE-SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)). When ``SqsManagedSseEnabled`` is not defined, ``SSE-SQS`` encryption is enabled by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#sqs_managed_sse_enabled CcQueue#sqs_managed_sse_enabled}
    */
    readonly sqsManagedSseEnabled?: boolean | cdktn.IResolvable;
    /**
    * The tags that you attach to this queue. For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#tags CcQueue#tags}
    */
    readonly tags?: CcQueue.TagProperty[] | cdktn.IResolvable;
    /**
    * The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.
    *  Values must be from 0 to 43,200 seconds (12 hours). If you don't specify a value, AWS CloudFormation uses the default value of 30 seconds.
    *  For more information about SQS queue visibility timeouts, see [Visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#visibility_timeout CcQueue#visibility_timeout}
    */
    readonly visibilityTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue awscc_sqs_queue}
*/
export class CcQueue extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sqs_queue";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQueue resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQueue to import
    * @param importFromId The id of the existing CcQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQueue to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sqs_queue", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue awscc_sqs_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQueueProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcQueueProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_sqs_queue',
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
        this._contentBasedDeduplication = config.contentBasedDeduplication;
        this._deduplicationScope = config.deduplicationScope;
        this._delaySeconds = config.delaySeconds;
        this._fifoQueue = config.fifoQueue;
        this._fifoThroughputLimit = config.fifoThroughputLimit;
        this._kmsDataKeyReusePeriodSeconds = config.kmsDataKeyReusePeriodSeconds;
        this._kmsMasterKeyId = config.kmsMasterKeyId;
        this._maximumMessageSize = config.maximumMessageSize;
        this._messageRetentionPeriod = config.messageRetentionPeriod;
        this._queueName = config.queueName;
        this._receiveMessageWaitTimeSeconds = config.receiveMessageWaitTimeSeconds;
        this._redriveAllowPolicy = config.redriveAllowPolicy;
        this._redrivePolicy = config.redrivePolicy;
        this._sqsManagedSseEnabled = config.sqsManagedSseEnabled;
        this._tags.internalValue = config.tags;
        this._visibilityTimeout = config.visibilityTimeout;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // content_based_deduplication - computed: true, optional: true, required: false
    private _contentBasedDeduplication?: boolean | cdktn.IResolvable; 
    public get contentBasedDeduplication() {
        return this.getBooleanAttribute('content_based_deduplication');
    }
    public set contentBasedDeduplication(value: boolean | cdktn.IResolvable) {
        this._contentBasedDeduplication = value;
    }
    public resetContentBasedDeduplication() {
        this._contentBasedDeduplication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentBasedDeduplicationInput() {
        return this._contentBasedDeduplication;
    }

    // deduplication_scope - computed: true, optional: true, required: false
    private _deduplicationScope?: string; 
    public get deduplicationScope() {
        return this.getStringAttribute('deduplication_scope');
    }
    public set deduplicationScope(value: string) {
        this._deduplicationScope = value;
    }
    public resetDeduplicationScope() {
        this._deduplicationScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deduplicationScopeInput() {
        return this._deduplicationScope;
    }

    // delay_seconds - computed: true, optional: true, required: false
    private _delaySeconds?: number; 
    public get delaySeconds() {
        return this.getNumberAttribute('delay_seconds');
    }
    public set delaySeconds(value: number) {
        this._delaySeconds = value;
    }
    public resetDelaySeconds() {
        this._delaySeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delaySecondsInput() {
        return this._delaySeconds;
    }

    // fifo_queue - computed: true, optional: true, required: false
    private _fifoQueue?: boolean | cdktn.IResolvable; 
    public get fifoQueue() {
        return this.getBooleanAttribute('fifo_queue');
    }
    public set fifoQueue(value: boolean | cdktn.IResolvable) {
        this._fifoQueue = value;
    }
    public resetFifoQueue() {
        this._fifoQueue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fifoQueueInput() {
        return this._fifoQueue;
    }

    // fifo_throughput_limit - computed: true, optional: true, required: false
    private _fifoThroughputLimit?: string; 
    public get fifoThroughputLimit() {
        return this.getStringAttribute('fifo_throughput_limit');
    }
    public set fifoThroughputLimit(value: string) {
        this._fifoThroughputLimit = value;
    }
    public resetFifoThroughputLimit() {
        this._fifoThroughputLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fifoThroughputLimitInput() {
        return this._fifoThroughputLimit;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_data_key_reuse_period_seconds - computed: true, optional: true, required: false
    private _kmsDataKeyReusePeriodSeconds?: number; 
    public get kmsDataKeyReusePeriodSeconds() {
        return this.getNumberAttribute('kms_data_key_reuse_period_seconds');
    }
    public set kmsDataKeyReusePeriodSeconds(value: number) {
        this._kmsDataKeyReusePeriodSeconds = value;
    }
    public resetKmsDataKeyReusePeriodSeconds() {
        this._kmsDataKeyReusePeriodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsDataKeyReusePeriodSecondsInput() {
        return this._kmsDataKeyReusePeriodSeconds;
    }

    // kms_master_key_id - computed: true, optional: true, required: false
    private _kmsMasterKeyId?: string; 
    public get kmsMasterKeyId() {
        return this.getStringAttribute('kms_master_key_id');
    }
    public set kmsMasterKeyId(value: string) {
        this._kmsMasterKeyId = value;
    }
    public resetKmsMasterKeyId() {
        this._kmsMasterKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsMasterKeyIdInput() {
        return this._kmsMasterKeyId;
    }

    // maximum_message_size - computed: true, optional: true, required: false
    private _maximumMessageSize?: number; 
    public get maximumMessageSize() {
        return this.getNumberAttribute('maximum_message_size');
    }
    public set maximumMessageSize(value: number) {
        this._maximumMessageSize = value;
    }
    public resetMaximumMessageSize() {
        this._maximumMessageSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumMessageSizeInput() {
        return this._maximumMessageSize;
    }

    // message_retention_period - computed: true, optional: true, required: false
    private _messageRetentionPeriod?: number; 
    public get messageRetentionPeriod() {
        return this.getNumberAttribute('message_retention_period');
    }
    public set messageRetentionPeriod(value: number) {
        this._messageRetentionPeriod = value;
    }
    public resetMessageRetentionPeriod() {
        this._messageRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageRetentionPeriodInput() {
        return this._messageRetentionPeriod;
    }

    // queue_name - computed: true, optional: true, required: false
    private _queueName?: string; 
    public get queueName() {
        return this.getStringAttribute('queue_name');
    }
    public set queueName(value: string) {
        this._queueName = value;
    }
    public resetQueueName() {
        this._queueName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueNameInput() {
        return this._queueName;
    }

    // queue_url - computed: true, optional: false, required: false
    public get queueUrl() {
        return this.getStringAttribute('queue_url');
    }

    // receive_message_wait_time_seconds - computed: true, optional: true, required: false
    private _receiveMessageWaitTimeSeconds?: number; 
    public get receiveMessageWaitTimeSeconds() {
        return this.getNumberAttribute('receive_message_wait_time_seconds');
    }
    public set receiveMessageWaitTimeSeconds(value: number) {
        this._receiveMessageWaitTimeSeconds = value;
    }
    public resetReceiveMessageWaitTimeSeconds() {
        this._receiveMessageWaitTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get receiveMessageWaitTimeSecondsInput() {
        return this._receiveMessageWaitTimeSeconds;
    }

    // redrive_allow_policy - computed: true, optional: true, required: false
    private _redriveAllowPolicy?: string; 
    public get redriveAllowPolicy() {
        return this.getStringAttribute('redrive_allow_policy');
    }
    public set redriveAllowPolicy(value: string) {
        this._redriveAllowPolicy = value;
    }
    public resetRedriveAllowPolicy() {
        this._redriveAllowPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redriveAllowPolicyInput() {
        return this._redriveAllowPolicy;
    }

    // redrive_policy - computed: true, optional: true, required: false
    private _redrivePolicy?: string; 
    public get redrivePolicy() {
        return this.getStringAttribute('redrive_policy');
    }
    public set redrivePolicy(value: string) {
        this._redrivePolicy = value;
    }
    public resetRedrivePolicy() {
        this._redrivePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redrivePolicyInput() {
        return this._redrivePolicy;
    }

    // sqs_managed_sse_enabled - computed: true, optional: true, required: false
    private _sqsManagedSseEnabled?: boolean | cdktn.IResolvable; 
    public get sqsManagedSseEnabled() {
        return this.getBooleanAttribute('sqs_managed_sse_enabled');
    }
    public set sqsManagedSseEnabled(value: boolean | cdktn.IResolvable) {
        this._sqsManagedSseEnabled = value;
    }
    public resetSqsManagedSseEnabled() {
        this._sqsManagedSseEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsManagedSseEnabledInput() {
        return this._sqsManagedSseEnabled;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcQueue.TagPropertyList(this, "tags", false);
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

    // visibility_timeout - computed: true, optional: true, required: false
    private _visibilityTimeout?: number; 
    public get visibilityTimeout() {
        return this.getNumberAttribute('visibility_timeout');
    }
    public set visibilityTimeout(value: number) {
        this._visibilityTimeout = value;
    }
    public resetVisibilityTimeout() {
        this._visibilityTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get visibilityTimeoutInput() {
        return this._visibilityTimeout;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            content_based_deduplication: cdktn.booleanToTerraform(this._contentBasedDeduplication),
            deduplication_scope: cdktn.stringToTerraform(this._deduplicationScope),
            delay_seconds: cdktn.numberToTerraform(this._delaySeconds),
            fifo_queue: cdktn.booleanToTerraform(this._fifoQueue),
            fifo_throughput_limit: cdktn.stringToTerraform(this._fifoThroughputLimit),
            kms_data_key_reuse_period_seconds: cdktn.numberToTerraform(this._kmsDataKeyReusePeriodSeconds),
            kms_master_key_id: cdktn.stringToTerraform(this._kmsMasterKeyId),
            maximum_message_size: cdktn.numberToTerraform(this._maximumMessageSize),
            message_retention_period: cdktn.numberToTerraform(this._messageRetentionPeriod),
            queue_name: cdktn.stringToTerraform(this._queueName),
            receive_message_wait_time_seconds: cdktn.numberToTerraform(this._receiveMessageWaitTimeSeconds),
            redrive_allow_policy: cdktn.stringToTerraform(this._redriveAllowPolicy),
            redrive_policy: cdktn.stringToTerraform(this._redrivePolicy),
            sqs_managed_sse_enabled: cdktn.booleanToTerraform(this._sqsManagedSseEnabled),
            tags: cdktn.listMapper(ccQueueTagPropertyToTerraform, false)(this._tags.internalValue),
            visibility_timeout: cdktn.numberToTerraform(this._visibilityTimeout),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            content_based_deduplication: {
                value: cdktn.booleanToHclTerraform(this._contentBasedDeduplication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            deduplication_scope: {
                value: cdktn.stringToHclTerraform(this._deduplicationScope),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            delay_seconds: {
                value: cdktn.numberToHclTerraform(this._delaySeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            fifo_queue: {
                value: cdktn.booleanToHclTerraform(this._fifoQueue),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            fifo_throughput_limit: {
                value: cdktn.stringToHclTerraform(this._fifoThroughputLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_data_key_reuse_period_seconds: {
                value: cdktn.numberToHclTerraform(this._kmsDataKeyReusePeriodSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            kms_master_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsMasterKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            maximum_message_size: {
                value: cdktn.numberToHclTerraform(this._maximumMessageSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            message_retention_period: {
                value: cdktn.numberToHclTerraform(this._messageRetentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            queue_name: {
                value: cdktn.stringToHclTerraform(this._queueName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            receive_message_wait_time_seconds: {
                value: cdktn.numberToHclTerraform(this._receiveMessageWaitTimeSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            redrive_allow_policy: {
                value: cdktn.stringToHclTerraform(this._redriveAllowPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            redrive_policy: {
                value: cdktn.stringToHclTerraform(this._redrivePolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sqs_managed_sse_enabled: {
                value: cdktn.booleanToHclTerraform(this._sqsManagedSseEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccQueueTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcQueue.TagPropertyList",
            },
            visibility_timeout: {
                value: cdktn.numberToHclTerraform(this._visibilityTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
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
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#key CcQueue#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sqs_queue#value CcQueue#value}
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
