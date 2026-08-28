// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTopicProps extends cdktn.TerraformMetaArguments {
    /**
    * The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics. You can set a retention period ranging from 1 to 365 days. This property is only applicable to FIFO topics; attempting to use it with standard topics will result in a creation failure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#archive_policy CcTopic#archive_policy}
    */
    readonly archivePolicy?: string;
    /**
    * ``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics. By default, this property is set to false. If you create a FIFO topic with ``ContentBasedDeduplication`` set to false, you must provide a ``MessageDeduplicationId`` for each ``Publish`` action. When set to true, SNS automatically generates a ``MessageDeduplicationId`` using a SHA-256 hash of the message body (excluding message attributes). You can optionally override this generated value by specifying a ``MessageDeduplicationId`` in the ``Publish`` action. Note that this property only applies to FIFO topics; using it with standard topics will cause the creation to fail.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#content_based_deduplication CcTopic#content_based_deduplication}
    */
    readonly contentBasedDeduplication?: boolean | cdktn.IResolvable;
    /**
    * The body of the policy document you want to use for this topic.
    *  You can only add one policy per topic.
    *  The policy must be in JSON string format.
    *  Length Constraints: Maximum length of 30,720.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#data_protection_policy CcTopic#data_protection_policy}
    */
    readonly dataProtectionPolicy?: string;
    /**
    * The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:
    *   +  HTTP 
    *   +  Amazon Kinesis Data Firehose
    *   +  AWS Lambda
    *   +  Platform application endpoint
    *   +  Amazon Simple Queue Service
    *   
    *  Once configured, log entries are sent to Amazon CloudWatch Logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#delivery_status_logging CcTopic#delivery_status_logging}
    */
    readonly deliveryStatusLogging?: CcTopic.LoggingConfigProperty[] | cdktn.IResolvable;
    /**
    * The display name to use for an SNS topic with SMS subscriptions. The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#display_name CcTopic#display_name}
    */
    readonly displayName?: string;
    /**
    * Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#fifo_throughput_scope CcTopic#fifo_throughput_scope}
    */
    readonly fifoThroughputScope?: string;
    /**
    * Set to true to create a FIFO topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#fifo_topic CcTopic#fifo_topic}
    */
    readonly fifoTopic?: boolean | cdktn.IResolvable;
    /**
    * The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK. For more information, see [Key terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see ``KeyId`` in the *API Reference*.
    *  This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#kms_master_key_id CcTopic#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, ``SignatureVersion`` is set to ``1``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#signature_version CcTopic#signature_version}
    */
    readonly signatureVersion?: string;
    /**
    * The SNS subscriptions (endpoints) for this topic.
    *   If you specify the ``Subscription`` property in the ``AWS::SNS::Topic`` resource and it creates an associated subscription resource, the associated subscription is not deleted when the ``AWS::SNS::Topic`` resource is deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#subscription CcTopic#subscription}
    */
    readonly subscription?: CcTopic.SubscriptionProperty[] | cdktn.IResolvable;
    /**
    * The list of tags to add to a new topic.
    *   To be able to tag a topic on creation, you must have the ``sns:CreateTopic`` and ``sns:TagResource`` permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#tags CcTopic#tags}
    */
    readonly tags?: CcTopic.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the topic you want to create. Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with ``.fifo``.
    *  If you don't specify a name, CFN generates a unique physical ID and uses that ID for the topic name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
    *   If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#topic_name CcTopic#topic_name}
    */
    readonly topicName?: string;
    /**
    * Tracing mode of an SNS topic. By default ``TracingConfig`` is set to ``PassThrough``, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to ``Active``, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#tracing_config CcTopic#tracing_config}
    */
    readonly tracingConfig?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic awscc_sns_topic}
*/
export class CcTopic extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sns_topic";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTopic resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTopic to import
    * @param importFromId The id of the existing CcTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTopic to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sns_topic", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic awscc_sns_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTopicProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcTopicProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_sns_topic',
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
        this._archivePolicy = config.archivePolicy;
        this._contentBasedDeduplication = config.contentBasedDeduplication;
        this._dataProtectionPolicy = config.dataProtectionPolicy;
        this._deliveryStatusLogging.internalValue = config.deliveryStatusLogging;
        this._displayName = config.displayName;
        this._fifoThroughputScope = config.fifoThroughputScope;
        this._fifoTopic = config.fifoTopic;
        this._kmsMasterKeyId = config.kmsMasterKeyId;
        this._signatureVersion = config.signatureVersion;
        this._subscription.internalValue = config.subscription;
        this._tags.internalValue = config.tags;
        this._topicName = config.topicName;
        this._tracingConfig = config.tracingConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // archive_policy - computed: true, optional: true, required: false
    private _archivePolicy?: string; 
    public get archivePolicy() {
        return this.getStringAttribute('archive_policy');
    }
    public set archivePolicy(value: string) {
        this._archivePolicy = value;
    }
    public resetArchivePolicy() {
        this._archivePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get archivePolicyInput() {
        return this._archivePolicy;
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

    // data_protection_policy - computed: true, optional: true, required: false
    private _dataProtectionPolicy?: string; 
    public get dataProtectionPolicy() {
        return this.getStringAttribute('data_protection_policy');
    }
    public set dataProtectionPolicy(value: string) {
        this._dataProtectionPolicy = value;
    }
    public resetDataProtectionPolicy() {
        this._dataProtectionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataProtectionPolicyInput() {
        return this._dataProtectionPolicy;
    }

    // delivery_status_logging - computed: true, optional: true, required: false
    private _deliveryStatusLogging = new CcTopic.LoggingConfigPropertyList(this, "delivery_status_logging", true);
    public get deliveryStatusLogging() {
        return this._deliveryStatusLogging;
    }
    public putDeliveryStatusLogging(value: CcTopic.LoggingConfigProperty[] | cdktn.IResolvable) {
        this._deliveryStatusLogging.internalValue = value;
    }
    public resetDeliveryStatusLogging() {
        this._deliveryStatusLogging.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStatusLoggingInput() {
        return this._deliveryStatusLogging.internalValue;
    }

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // fifo_throughput_scope - computed: true, optional: true, required: false
    private _fifoThroughputScope?: string; 
    public get fifoThroughputScope() {
        return this.getStringAttribute('fifo_throughput_scope');
    }
    public set fifoThroughputScope(value: string) {
        this._fifoThroughputScope = value;
    }
    public resetFifoThroughputScope() {
        this._fifoThroughputScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fifoThroughputScopeInput() {
        return this._fifoThroughputScope;
    }

    // fifo_topic - computed: true, optional: true, required: false
    private _fifoTopic?: boolean | cdktn.IResolvable; 
    public get fifoTopic() {
        return this.getBooleanAttribute('fifo_topic');
    }
    public set fifoTopic(value: boolean | cdktn.IResolvable) {
        this._fifoTopic = value;
    }
    public resetFifoTopic() {
        this._fifoTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fifoTopicInput() {
        return this._fifoTopic;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // signature_version - computed: true, optional: true, required: false
    private _signatureVersion?: string; 
    public get signatureVersion() {
        return this.getStringAttribute('signature_version');
    }
    public set signatureVersion(value: string) {
        this._signatureVersion = value;
    }
    public resetSignatureVersion() {
        this._signatureVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signatureVersionInput() {
        return this._signatureVersion;
    }

    // subscription - computed: true, optional: true, required: false
    private _subscription = new CcTopic.SubscriptionPropertyList(this, "subscription", false);
    public get subscription() {
        return this._subscription;
    }
    public putSubscription(value: CcTopic.SubscriptionProperty[] | cdktn.IResolvable) {
        this._subscription.internalValue = value;
    }
    public resetSubscription() {
        this._subscription.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subscriptionInput() {
        return this._subscription.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTopic.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTopic.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // topic_arn - computed: true, optional: false, required: false
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }

    // topic_name - computed: true, optional: true, required: false
    private _topicName?: string; 
    public get topicName() {
        return this.getStringAttribute('topic_name');
    }
    public set topicName(value: string) {
        this._topicName = value;
    }
    public resetTopicName() {
        this._topicName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicNameInput() {
        return this._topicName;
    }

    // tracing_config - computed: true, optional: true, required: false
    private _tracingConfig?: string; 
    public get tracingConfig() {
        return this.getStringAttribute('tracing_config');
    }
    public set tracingConfig(value: string) {
        this._tracingConfig = value;
    }
    public resetTracingConfig() {
        this._tracingConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tracingConfigInput() {
        return this._tracingConfig;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            archive_policy: cdktn.stringToTerraform(this._archivePolicy),
            content_based_deduplication: cdktn.booleanToTerraform(this._contentBasedDeduplication),
            data_protection_policy: cdktn.stringToTerraform(this._dataProtectionPolicy),
            delivery_status_logging: cdktn.listMapper(ccTopicLoggingConfigPropertyToTerraform, false)(this._deliveryStatusLogging.internalValue),
            display_name: cdktn.stringToTerraform(this._displayName),
            fifo_throughput_scope: cdktn.stringToTerraform(this._fifoThroughputScope),
            fifo_topic: cdktn.booleanToTerraform(this._fifoTopic),
            kms_master_key_id: cdktn.stringToTerraform(this._kmsMasterKeyId),
            signature_version: cdktn.stringToTerraform(this._signatureVersion),
            subscription: cdktn.listMapper(ccTopicSubscriptionPropertyToTerraform, false)(this._subscription.internalValue),
            tags: cdktn.listMapper(ccTopicTagPropertyToTerraform, false)(this._tags.internalValue),
            topic_name: cdktn.stringToTerraform(this._topicName),
            tracing_config: cdktn.stringToTerraform(this._tracingConfig),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            archive_policy: {
                value: cdktn.stringToHclTerraform(this._archivePolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_based_deduplication: {
                value: cdktn.booleanToHclTerraform(this._contentBasedDeduplication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            data_protection_policy: {
                value: cdktn.stringToHclTerraform(this._dataProtectionPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            delivery_status_logging: {
                value: cdktn.listMapperHcl(ccTopicLoggingConfigPropertyToHclTerraform, false)(this._deliveryStatusLogging.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTopic.LoggingConfigPropertyList",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fifo_throughput_scope: {
                value: cdktn.stringToHclTerraform(this._fifoThroughputScope),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fifo_topic: {
                value: cdktn.booleanToHclTerraform(this._fifoTopic),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            kms_master_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsMasterKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            signature_version: {
                value: cdktn.stringToHclTerraform(this._signatureVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subscription: {
                value: cdktn.listMapperHcl(ccTopicSubscriptionPropertyToHclTerraform, false)(this._subscription.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTopic.SubscriptionPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTopicTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTopic.TagPropertyList",
            },
            topic_name: {
                value: cdktn.stringToHclTerraform(this._topicName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tracing_config: {
                value: cdktn.stringToHclTerraform(this._tracingConfig),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTopicLoggingConfigPropertyToTerraform(struct?: CcTopic.LoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        failure_feedback_role_arn: cdktn.stringToTerraform(struct!.failureFeedbackRoleArn),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        success_feedback_role_arn: cdktn.stringToTerraform(struct!.successFeedbackRoleArn),
        success_feedback_sample_rate: cdktn.stringToTerraform(struct!.successFeedbackSampleRate),
    }
}


export function ccTopicLoggingConfigPropertyToHclTerraform(struct?: CcTopic.LoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        failure_feedback_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.failureFeedbackRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        success_feedback_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.successFeedbackRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        success_feedback_sample_rate: {
            value: cdktn.stringToHclTerraform(struct!.successFeedbackSampleRate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicSubscriptionPropertyToTerraform(struct?: CcTopic.SubscriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        protocol: cdktn.stringToTerraform(struct!.protocol),
    }
}


export function ccTopicSubscriptionPropertyToHclTerraform(struct?: CcTopic.SubscriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicTagPropertyToTerraform(struct?: CcTopic.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicTagPropertyToHclTerraform(struct?: CcTopic.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTopic {
export interface LoggingConfigProperty {
    /**
    * The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#failure_feedback_role_arn CcTopic#failure_feedback_role_arn}
    */
    readonly failureFeedbackRoleArn?: string;
    /**
    * Indicates one of the supported protocols for the Amazon SNS topic.
    *   At least one of the other three ``LoggingConfig`` properties is recommend along with ``Protocol``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#protocol CcTopic#protocol}
    */
    readonly protocol?: string;
    /**
    * The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#success_feedback_role_arn CcTopic#success_feedback_role_arn}
    */
    readonly successFeedbackRoleArn?: string;
    /**
    * The percentage of successful message deliveries to be logged in Amazon CloudWatch. Valid percentage values range from 0 to 100.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#success_feedback_sample_rate CcTopic#success_feedback_sample_rate}
    */
    readonly successFeedbackSampleRate?: string;
}
export class LoggingConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LoggingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._failureFeedbackRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureFeedbackRoleArn = this._failureFeedbackRoleArn;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._successFeedbackRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.successFeedbackRoleArn = this._successFeedbackRoleArn;
        }
        if (this._successFeedbackSampleRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.successFeedbackSampleRate = this._successFeedbackSampleRate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failureFeedbackRoleArn = undefined;
            this._protocol = undefined;
            this._successFeedbackRoleArn = undefined;
            this._successFeedbackSampleRate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failureFeedbackRoleArn = value.failureFeedbackRoleArn;
            this._protocol = value.protocol;
            this._successFeedbackRoleArn = value.successFeedbackRoleArn;
            this._successFeedbackSampleRate = value.successFeedbackSampleRate;
        }
    }

    // failure_feedback_role_arn - computed: true, optional: true, required: false
    private _failureFeedbackRoleArn?: string; 
    public get failureFeedbackRoleArn() {
        return this.getStringAttribute('failure_feedback_role_arn');
    }
    public set failureFeedbackRoleArn(value: string) {
        this._failureFeedbackRoleArn = value;
    }
    public resetFailureFeedbackRoleArn() {
        this._failureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureFeedbackRoleArnInput() {
        return this._failureFeedbackRoleArn;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // success_feedback_role_arn - computed: true, optional: true, required: false
    private _successFeedbackRoleArn?: string; 
    public get successFeedbackRoleArn() {
        return this.getStringAttribute('success_feedback_role_arn');
    }
    public set successFeedbackRoleArn(value: string) {
        this._successFeedbackRoleArn = value;
    }
    public resetSuccessFeedbackRoleArn() {
        this._successFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successFeedbackRoleArnInput() {
        return this._successFeedbackRoleArn;
    }

    // success_feedback_sample_rate - computed: true, optional: true, required: false
    private _successFeedbackSampleRate?: string; 
    public get successFeedbackSampleRate() {
        return this.getStringAttribute('success_feedback_sample_rate');
    }
    public set successFeedbackSampleRate(value: string) {
        this._successFeedbackSampleRate = value;
    }
    public resetSuccessFeedbackSampleRate() {
        this._successFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get successFeedbackSampleRateInput() {
        return this._successFeedbackSampleRate;
    }
}

export class LoggingConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : LoggingConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): LoggingConfigPropertyOutputReference {
        return new LoggingConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SubscriptionProperty {
    /**
    * The endpoint that receives notifications from the SNS topic. The endpoint value depends on the protocol that you specify. For more information, see the ``Endpoint`` parameter of the ``Subscribe`` action in the *API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#endpoint CcTopic#endpoint}
    */
    readonly endpoint?: string;
    /**
    * The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#protocol CcTopic#protocol}
    */
    readonly protocol?: string;
}
export class SubscriptionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SubscriptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubscriptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpoint = undefined;
            this._protocol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpoint = value.endpoint;
            this._protocol = value.protocol;
        }
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }
}

export class SubscriptionPropertyList extends cdktn.ComplexList {
    public internalValue? : SubscriptionProperty[] | cdktn.IResolvable

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
    public get(index: number): SubscriptionPropertyOutputReference {
        return new SubscriptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The required key portion of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#key CcTopic#key}
    */
    readonly key?: string;
    /**
    * The optional value portion of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sns_topic#value CcTopic#value}
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
