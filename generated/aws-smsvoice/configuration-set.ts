// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfigurationSetProps extends cdktn.TerraformMetaArguments {
    /**
    * The name to use for the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#configuration_set_name CcConfigurationSet#configuration_set_name}
    */
    readonly configurationSetName?: string;
    /**
    * The default sender ID to set for the ConfigurationSet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#default_sender_id CcConfigurationSet#default_sender_id}
    */
    readonly defaultSenderId?: string;
    /**
    * An event destination is a location where you send message events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#event_destinations CcConfigurationSet#event_destinations}
    */
    readonly eventDestinations?: CcConfigurationSet.EventDestinationProperty[] | cdktn.IResolvable;
    /**
    * Set to true to enable message feedback.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#message_feedback_enabled CcConfigurationSet#message_feedback_enabled}
    */
    readonly messageFeedbackEnabled?: boolean | cdktn.IResolvable;
    /**
    * The unique identifier for the protect configuration to be associated to the configuration set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#protect_configuration_id CcConfigurationSet#protect_configuration_id}
    */
    readonly protectConfigurationId?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#tags CcConfigurationSet#tags}
    */
    readonly tags?: CcConfigurationSet.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set awscc_smsvoice_configuration_set}
*/
export class CcConfigurationSet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_smsvoice_configuration_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfigurationSet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfigurationSet to import
    * @param importFromId The id of the existing CcConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfigurationSet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_smsvoice_configuration_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set awscc_smsvoice_configuration_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfigurationSetProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcConfigurationSetProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_smsvoice_configuration_set',
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
        this._configurationSetName = config.configurationSetName;
        this._defaultSenderId = config.defaultSenderId;
        this._eventDestinations.internalValue = config.eventDestinations;
        this._messageFeedbackEnabled = config.messageFeedbackEnabled;
        this._protectConfigurationId = config.protectConfigurationId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // configuration_set_name - computed: true, optional: true, required: false
    private _configurationSetName?: string; 
    public get configurationSetName() {
        return this.getStringAttribute('configuration_set_name');
    }
    public set configurationSetName(value: string) {
        this._configurationSetName = value;
    }
    public resetConfigurationSetName() {
        this._configurationSetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationSetNameInput() {
        return this._configurationSetName;
    }

    // default_sender_id - computed: true, optional: true, required: false
    private _defaultSenderId?: string; 
    public get defaultSenderId() {
        return this.getStringAttribute('default_sender_id');
    }
    public set defaultSenderId(value: string) {
        this._defaultSenderId = value;
    }
    public resetDefaultSenderId() {
        this._defaultSenderId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultSenderIdInput() {
        return this._defaultSenderId;
    }

    // event_destinations - computed: true, optional: true, required: false
    private _eventDestinations = new CcConfigurationSet.EventDestinationPropertyList(this, "event_destinations", false);
    public get eventDestinations() {
        return this._eventDestinations;
    }
    public putEventDestinations(value: CcConfigurationSet.EventDestinationProperty[] | cdktn.IResolvable) {
        this._eventDestinations.internalValue = value;
    }
    public resetEventDestinations() {
        this._eventDestinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventDestinationsInput() {
        return this._eventDestinations.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // message_feedback_enabled - computed: true, optional: true, required: false
    private _messageFeedbackEnabled?: boolean | cdktn.IResolvable; 
    public get messageFeedbackEnabled() {
        return this.getBooleanAttribute('message_feedback_enabled');
    }
    public set messageFeedbackEnabled(value: boolean | cdktn.IResolvable) {
        this._messageFeedbackEnabled = value;
    }
    public resetMessageFeedbackEnabled() {
        this._messageFeedbackEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageFeedbackEnabledInput() {
        return this._messageFeedbackEnabled;
    }

    // protect_configuration_id - computed: true, optional: true, required: false
    private _protectConfigurationId?: string; 
    public get protectConfigurationId() {
        return this.getStringAttribute('protect_configuration_id');
    }
    public set protectConfigurationId(value: string) {
        this._protectConfigurationId = value;
    }
    public resetProtectConfigurationId() {
        this._protectConfigurationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protectConfigurationIdInput() {
        return this._protectConfigurationId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConfigurationSet.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConfigurationSet.TagProperty[] | cdktn.IResolvable) {
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
            configuration_set_name: cdktn.stringToTerraform(this._configurationSetName),
            default_sender_id: cdktn.stringToTerraform(this._defaultSenderId),
            event_destinations: cdktn.listMapper(ccConfigurationSetEventDestinationPropertyToTerraform, false)(this._eventDestinations.internalValue),
            message_feedback_enabled: cdktn.booleanToTerraform(this._messageFeedbackEnabled),
            protect_configuration_id: cdktn.stringToTerraform(this._protectConfigurationId),
            tags: cdktn.listMapper(ccConfigurationSetTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration_set_name: {
                value: cdktn.stringToHclTerraform(this._configurationSetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_sender_id: {
                value: cdktn.stringToHclTerraform(this._defaultSenderId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_destinations: {
                value: cdktn.listMapperHcl(ccConfigurationSetEventDestinationPropertyToHclTerraform, false)(this._eventDestinations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfigurationSet.EventDestinationPropertyList",
            },
            message_feedback_enabled: {
                value: cdktn.booleanToHclTerraform(this._messageFeedbackEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            protect_configuration_id: {
                value: cdktn.stringToHclTerraform(this._protectConfigurationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConfigurationSetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcConfigurationSet.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfigurationSetCloudWatchLogsDestinationPropertyToTerraform(struct?: CcConfigurationSet.CloudWatchLogsDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
        log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
    }
}


export function ccConfigurationSetCloudWatchLogsDestinationPropertyToHclTerraform(struct?: CcConfigurationSet.CloudWatchLogsDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iam_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.logGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetKinesisFirehoseDestinationPropertyToTerraform(struct?: CcConfigurationSet.KinesisFirehoseDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream_arn: cdktn.stringToTerraform(struct!.deliveryStreamArn),
        iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
    }
}


export function ccConfigurationSetKinesisFirehoseDestinationPropertyToHclTerraform(struct?: CcConfigurationSet.KinesisFirehoseDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_stream_arn: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStreamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetSnsDestinationPropertyToTerraform(struct?: CcConfigurationSet.SnsDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        topic_arn: cdktn.stringToTerraform(struct!.topicArn),
    }
}


export function ccConfigurationSetSnsDestinationPropertyToHclTerraform(struct?: CcConfigurationSet.SnsDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.topicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetEventDestinationPropertyToTerraform(struct?: CcConfigurationSet.EventDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs_destination: ccConfigurationSetCloudWatchLogsDestinationPropertyToTerraform(struct!.cloudwatchLogsDestination),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        event_destination_name: cdktn.stringToTerraform(struct!.eventDestinationName),
        kinesis_firehose_destination: ccConfigurationSetKinesisFirehoseDestinationPropertyToTerraform(struct!.kinesisFirehoseDestination),
        matching_event_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchingEventTypes),
        sns_destination: ccConfigurationSetSnsDestinationPropertyToTerraform(struct!.snsDestination),
    }
}


export function ccConfigurationSetEventDestinationPropertyToHclTerraform(struct?: CcConfigurationSet.EventDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs_destination: {
            value: ccConfigurationSetCloudWatchLogsDestinationPropertyToHclTerraform(struct!.cloudwatchLogsDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogsDestinationProperty",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        event_destination_name: {
            value: cdktn.stringToHclTerraform(struct!.eventDestinationName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesis_firehose_destination: {
            value: ccConfigurationSetKinesisFirehoseDestinationPropertyToHclTerraform(struct!.kinesisFirehoseDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisFirehoseDestinationProperty",
        },
        matching_event_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchingEventTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        sns_destination: {
            value: ccConfigurationSetSnsDestinationPropertyToHclTerraform(struct!.snsDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "SnsDestinationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationSetTagPropertyToTerraform(struct?: CcConfigurationSet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfigurationSetTagPropertyToHclTerraform(struct?: CcConfigurationSet.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConfigurationSet {
export interface CloudWatchLogsDestinationProperty {
    /**
    * The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#iam_role_arn CcConfigurationSet#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * The name of the Amazon CloudWatch log group that you want to record events in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#log_group_arn CcConfigurationSet#log_group_arn}
    */
    readonly logGroupArn?: string;
}
export class CloudWatchLogsDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogsDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iamRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamRoleArn = this._iamRoleArn;
        }
        if (this._logGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupArn = this._logGroupArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchLogsDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iamRoleArn = undefined;
            this._logGroupArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iamRoleArn = value.iamRoleArn;
            this._logGroupArn = value.logGroupArn;
        }
    }

    // iam_role_arn - computed: true, optional: true, required: false
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
        return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
        this._iamRoleArn = value;
    }
    public resetIamRoleArn() {
        this._iamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
        return this._iamRoleArn;
    }

    // log_group_arn - computed: true, optional: true, required: false
    private _logGroupArn?: string; 
    public get logGroupArn() {
        return this.getStringAttribute('log_group_arn');
    }
    public set logGroupArn(value: string) {
        this._logGroupArn = value;
    }
    public resetLogGroupArn() {
        this._logGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupArnInput() {
        return this._logGroupArn;
    }
}
export interface KinesisFirehoseDestinationProperty {
    /**
    * The Amazon Resource Name (ARN) of the delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#delivery_stream_arn CcConfigurationSet#delivery_stream_arn}
    */
    readonly deliveryStreamArn?: string;
    /**
    * The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#iam_role_arn CcConfigurationSet#iam_role_arn}
    */
    readonly iamRoleArn?: string;
}
export class KinesisFirehoseDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisFirehoseDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryStreamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStreamArn = this._deliveryStreamArn;
        }
        if (this._iamRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamRoleArn = this._iamRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisFirehoseDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryStreamArn = undefined;
            this._iamRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStreamArn = value.deliveryStreamArn;
            this._iamRoleArn = value.iamRoleArn;
        }
    }

    // delivery_stream_arn - computed: true, optional: true, required: false
    private _deliveryStreamArn?: string; 
    public get deliveryStreamArn() {
        return this.getStringAttribute('delivery_stream_arn');
    }
    public set deliveryStreamArn(value: string) {
        this._deliveryStreamArn = value;
    }
    public resetDeliveryStreamArn() {
        this._deliveryStreamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamArnInput() {
        return this._deliveryStreamArn;
    }

    // iam_role_arn - computed: true, optional: true, required: false
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
        return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
        this._iamRoleArn = value;
    }
    public resetIamRoleArn() {
        this._iamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
        return this._iamRoleArn;
    }
}
export interface SnsDestinationProperty {
    /**
    * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#topic_arn CcConfigurationSet#topic_arn}
    */
    readonly topicArn?: string;
}
export class SnsDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnsDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._topicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicArn = this._topicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnsDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._topicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._topicArn = value.topicArn;
        }
    }

    // topic_arn - computed: true, optional: true, required: false
    private _topicArn?: string; 
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
        this._topicArn = value;
    }
    public resetTopicArn() {
        this._topicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
        return this._topicArn;
    }
}
export interface EventDestinationProperty {
    /**
    * An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#cloudwatch_logs_destination CcConfigurationSet#cloudwatch_logs_destination}
    */
    readonly cloudwatchLogsDestination?: CloudWatchLogsDestinationProperty;
    /**
    * When set to true events will be logged. By default this is set to true
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#enabled CcConfigurationSet#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The name that identifies the event destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#event_destination_name CcConfigurationSet#event_destination_name}
    */
    readonly eventDestinationName?: string;
    /**
    * An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#kinesis_firehose_destination CcConfigurationSet#kinesis_firehose_destination}
    */
    readonly kinesisFirehoseDestination?: KinesisFirehoseDestinationProperty;
    /**
    * An array of event types that determine which events to log. If 'ALL' is used, then AWS End User Messaging SMS and Voice logs every event type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#matching_event_types CcConfigurationSet#matching_event_types}
    */
    readonly matchingEventTypes?: string[];
    /**
    * An object that contains SNS TopicArn event destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#sns_destination CcConfigurationSet#sns_destination}
    */
    readonly snsDestination?: SnsDestinationProperty;
}
export class EventDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EventDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogsDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsDestination = this._cloudwatchLogsDestination?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._eventDestinationName !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventDestinationName = this._eventDestinationName;
        }
        if (this._kinesisFirehoseDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisFirehoseDestination = this._kinesisFirehoseDestination?.internalValue;
        }
        if (this._matchingEventTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchingEventTypes = this._matchingEventTypes;
        }
        if (this._snsDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snsDestination = this._snsDestination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogsDestination.internalValue = undefined;
            this._enabled = undefined;
            this._eventDestinationName = undefined;
            this._kinesisFirehoseDestination.internalValue = undefined;
            this._matchingEventTypes = undefined;
            this._snsDestination.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogsDestination.internalValue = value.cloudwatchLogsDestination;
            this._enabled = value.enabled;
            this._eventDestinationName = value.eventDestinationName;
            this._kinesisFirehoseDestination.internalValue = value.kinesisFirehoseDestination;
            this._matchingEventTypes = value.matchingEventTypes;
            this._snsDestination.internalValue = value.snsDestination;
        }
    }

    // cloudwatch_logs_destination - computed: true, optional: true, required: false
    private _cloudwatchLogsDestination = new CloudWatchLogsDestinationPropertyOutputReference(this, "cloudwatch_logs_destination");
    public get cloudwatchLogsDestination() {
        return this._cloudwatchLogsDestination;
    }
    public putCloudwatchLogsDestination(value: CloudWatchLogsDestinationProperty) {
        this._cloudwatchLogsDestination.internalValue = value;
    }
    public resetCloudwatchLogsDestination() {
        this._cloudwatchLogsDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsDestinationInput() {
        return this._cloudwatchLogsDestination.internalValue;
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

    // event_destination_name - computed: true, optional: true, required: false
    private _eventDestinationName?: string; 
    public get eventDestinationName() {
        return this.getStringAttribute('event_destination_name');
    }
    public set eventDestinationName(value: string) {
        this._eventDestinationName = value;
    }
    public resetEventDestinationName() {
        this._eventDestinationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventDestinationNameInput() {
        return this._eventDestinationName;
    }

    // kinesis_firehose_destination - computed: true, optional: true, required: false
    private _kinesisFirehoseDestination = new KinesisFirehoseDestinationPropertyOutputReference(this, "kinesis_firehose_destination");
    public get kinesisFirehoseDestination() {
        return this._kinesisFirehoseDestination;
    }
    public putKinesisFirehoseDestination(value: KinesisFirehoseDestinationProperty) {
        this._kinesisFirehoseDestination.internalValue = value;
    }
    public resetKinesisFirehoseDestination() {
        this._kinesisFirehoseDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisFirehoseDestinationInput() {
        return this._kinesisFirehoseDestination.internalValue;
    }

    // matching_event_types - computed: true, optional: true, required: false
    private _matchingEventTypes?: string[]; 
    public get matchingEventTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('matching_event_types'));
    }
    public set matchingEventTypes(value: string[]) {
        this._matchingEventTypes = value;
    }
    public resetMatchingEventTypes() {
        this._matchingEventTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchingEventTypesInput() {
        return this._matchingEventTypes;
    }

    // sns_destination - computed: true, optional: true, required: false
    private _snsDestination = new SnsDestinationPropertyOutputReference(this, "sns_destination");
    public get snsDestination() {
        return this._snsDestination;
    }
    public putSnsDestination(value: SnsDestinationProperty) {
        this._snsDestination.internalValue = value;
    }
    public resetSnsDestination() {
        this._snsDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsDestinationInput() {
        return this._snsDestination.internalValue;
    }
}

export class EventDestinationPropertyList extends cdktn.ComplexList {
    public internalValue? : EventDestinationProperty[] | cdktn.IResolvable

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
    public get(index: number): EventDestinationPropertyOutputReference {
        return new EventDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#key CcConfigurationSet#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/smsvoice_configuration_set#value CcConfigurationSet#value}
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
