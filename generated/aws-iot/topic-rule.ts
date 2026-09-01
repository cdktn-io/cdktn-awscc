// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTopicRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#rule_name CcTopicRule#rule_name}
    */
    readonly ruleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#tags CcTopicRule#tags}
    */
    readonly tags?: CcTopicRule.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#topic_rule_payload CcTopicRule#topic_rule_payload}
    */
    readonly topicRulePayload: CcTopicRule.TopicRulePayloadProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule awscc_iot_topic_rule}
*/
export class CcTopicRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_topic_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTopicRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTopicRule to import
    * @param importFromId The id of the existing CcTopicRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTopicRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_topic_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule awscc_iot_topic_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTopicRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcTopicRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_topic_rule',
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
        this._ruleName = config.ruleName;
        this._tags.internalValue = config.tags;
        this._topicRulePayload.internalValue = config.topicRulePayload;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // rule_name - computed: true, optional: true, required: false
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    public resetRuleName() {
        this._ruleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTopicRule.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTopicRule.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // topic_rule_payload - computed: false, optional: false, required: true
    private _topicRulePayload = new CcTopicRule.TopicRulePayloadPropertyOutputReference(this, "topic_rule_payload");
    public get topicRulePayload() {
        return this._topicRulePayload;
    }
    public putTopicRulePayload(value: CcTopicRule.TopicRulePayloadProperty) {
        this._topicRulePayload.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topicRulePayloadInput() {
        return this._topicRulePayload.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            rule_name: cdktn.stringToTerraform(this._ruleName),
            tags: cdktn.listMapper(ccTopicRuleTagPropertyToTerraform, false)(this._tags.internalValue),
            topic_rule_payload: ccTopicRuleTopicRulePayloadPropertyToTerraform(this._topicRulePayload.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            rule_name: {
                value: cdktn.stringToHclTerraform(this._ruleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTopicRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTopicRule.TagPropertyList",
            },
            topic_rule_payload: {
                value: ccTopicRuleTopicRulePayloadPropertyToHclTerraform(this._topicRulePayload.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTopicRule.TopicRulePayloadProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTopicRuleTagPropertyToTerraform(struct?: CcTopicRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleTagPropertyToHclTerraform(struct?: CcTopicRule.TagProperty | cdktn.IResolvable): any {
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


export function ccTopicRuleCloudwatchAlarmActionPropertyToTerraform(struct?: CcTopicRule.CloudwatchAlarmActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_name: cdktn.stringToTerraform(struct!.alarmName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        state_reason: cdktn.stringToTerraform(struct!.stateReason),
        state_value: cdktn.stringToTerraform(struct!.stateValue),
    }
}


export function ccTopicRuleCloudwatchAlarmActionPropertyToHclTerraform(struct?: CcTopicRule.CloudwatchAlarmActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state_reason: {
            value: cdktn.stringToHclTerraform(struct!.stateReason),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state_value: {
            value: cdktn.stringToHclTerraform(struct!.stateValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleCloudwatchLogsActionPropertyToTerraform(struct?: CcTopicRule.CloudwatchLogsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleCloudwatchLogsActionPropertyToHclTerraform(struct?: CcTopicRule.CloudwatchLogsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_mode: {
            value: cdktn.booleanToHclTerraform(struct!.batchMode),
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


export function ccTopicRuleCloudwatchMetricActionPropertyToTerraform(struct?: CcTopicRule.CloudwatchMetricActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        metric_namespace: cdktn.stringToTerraform(struct!.metricNamespace),
        metric_timestamp: cdktn.stringToTerraform(struct!.metricTimestamp),
        metric_unit: cdktn.stringToTerraform(struct!.metricUnit),
        metric_value: cdktn.stringToTerraform(struct!.metricValue),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleCloudwatchMetricActionPropertyToHclTerraform(struct?: CcTopicRule.CloudwatchMetricActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_namespace: {
            value: cdktn.stringToHclTerraform(struct!.metricNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_timestamp: {
            value: cdktn.stringToHclTerraform(struct!.metricTimestamp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_unit: {
            value: cdktn.stringToHclTerraform(struct!.metricUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_value: {
            value: cdktn.stringToHclTerraform(struct!.metricValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccTopicRulePutItemInputPropertyToTerraform(struct?: CcTopicRule.PutItemInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccTopicRulePutItemInputPropertyToHclTerraform(struct?: CcTopicRule.PutItemInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccTopicRuleDynamoDBv2ActionPropertyToTerraform(struct?: CcTopicRule.DynamoDBv2ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        put_item: ccTopicRulePutItemInputPropertyToTerraform(struct!.putItem),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleDynamoDBv2ActionPropertyToHclTerraform(struct?: CcTopicRule.DynamoDBv2ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        put_item: {
            value: ccTopicRulePutItemInputPropertyToHclTerraform(struct!.putItem),
            isBlock: true,
            type: "struct",
            storageClassType: "PutItemInputProperty",
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


export function ccTopicRuleDynamoDBActionPropertyToTerraform(struct?: CcTopicRule.DynamoDBActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
        hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
        hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
        payload_field: cdktn.stringToTerraform(struct!.payloadField),
        range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
        range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
        range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccTopicRuleDynamoDBActionPropertyToHclTerraform(struct?: CcTopicRule.DynamoDBActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hash_key_field: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_type: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_value: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload_field: {
            value: cdktn.stringToHclTerraform(struct!.payloadField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_field: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_type: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_value: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
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


export function ccTopicRuleElasticsearchActionPropertyToTerraform(struct?: CcTopicRule.ElasticsearchActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        id: cdktn.stringToTerraform(struct!.id),
        index: cdktn.stringToTerraform(struct!.index),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTopicRuleElasticsearchActionPropertyToHclTerraform(struct?: CcTopicRule.ElasticsearchActionProperty | cdktn.IResolvable): any {
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
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        index: {
            value: cdktn.stringToHclTerraform(struct!.index),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleFirehoseActionPropertyToTerraform(struct?: CcTopicRule.FirehoseActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
        delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        separator: cdktn.stringToTerraform(struct!.separator),
    }
}


export function ccTopicRuleFirehoseActionPropertyToHclTerraform(struct?: CcTopicRule.FirehoseActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_mode: {
            value: cdktn.booleanToHclTerraform(struct!.batchMode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        delivery_stream_name: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        separator: {
            value: cdktn.stringToHclTerraform(struct!.separator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleSigV4AuthorizationPropertyToTerraform(struct?: CcTopicRule.SigV4AuthorizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        service_name: cdktn.stringToTerraform(struct!.serviceName),
        signing_region: cdktn.stringToTerraform(struct!.signingRegion),
    }
}


export function ccTopicRuleSigV4AuthorizationPropertyToHclTerraform(struct?: CcTopicRule.SigV4AuthorizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_name: {
            value: cdktn.stringToHclTerraform(struct!.serviceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        signing_region: {
            value: cdktn.stringToHclTerraform(struct!.signingRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleHttpAuthorizationPropertyToTerraform(struct?: CcTopicRule.HttpAuthorizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sigv_4: ccTopicRuleSigV4AuthorizationPropertyToTerraform(struct!.sigv4),
    }
}


export function ccTopicRuleHttpAuthorizationPropertyToHclTerraform(struct?: CcTopicRule.HttpAuthorizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sigv_4: {
            value: ccTopicRuleSigV4AuthorizationPropertyToHclTerraform(struct!.sigv4),
            isBlock: true,
            type: "struct",
            storageClassType: "SigV4AuthorizationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleBatchConfigPropertyToTerraform(struct?: CcTopicRule.BatchConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_across_topics: cdktn.booleanToTerraform(struct!.batchAcrossTopics),
        max_batch_open_ms: cdktn.numberToTerraform(struct!.maxBatchOpenMs),
        max_batch_size: cdktn.numberToTerraform(struct!.maxBatchSize),
        max_batch_size_bytes: cdktn.numberToTerraform(struct!.maxBatchSizeBytes),
    }
}


export function ccTopicRuleBatchConfigPropertyToHclTerraform(struct?: CcTopicRule.BatchConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_across_topics: {
            value: cdktn.booleanToHclTerraform(struct!.batchAcrossTopics),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_batch_open_ms: {
            value: cdktn.numberToHclTerraform(struct!.maxBatchOpenMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_batch_size: {
            value: cdktn.numberToHclTerraform(struct!.maxBatchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_batch_size_bytes: {
            value: cdktn.numberToHclTerraform(struct!.maxBatchSizeBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleHttpActionHeaderPropertyToTerraform(struct?: CcTopicRule.HttpActionHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleHttpActionHeaderPropertyToHclTerraform(struct?: CcTopicRule.HttpActionHeaderProperty | cdktn.IResolvable): any {
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


export function ccTopicRuleHttpActionPropertyToTerraform(struct?: CcTopicRule.HttpActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth: ccTopicRuleHttpAuthorizationPropertyToTerraform(struct!.auth),
        batch_config: ccTopicRuleBatchConfigPropertyToTerraform(struct!.batchConfig),
        confirmation_url: cdktn.stringToTerraform(struct!.confirmationUrl),
        enable_batching: cdktn.booleanToTerraform(struct!.enableBatching),
        headers: cdktn.listMapper(ccTopicRuleHttpActionHeaderPropertyToTerraform, false)(struct!.headers),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccTopicRuleHttpActionPropertyToHclTerraform(struct?: CcTopicRule.HttpActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth: {
            value: ccTopicRuleHttpAuthorizationPropertyToHclTerraform(struct!.auth),
            isBlock: true,
            type: "struct",
            storageClassType: "HttpAuthorizationProperty",
        },
        batch_config: {
            value: ccTopicRuleBatchConfigPropertyToHclTerraform(struct!.batchConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "BatchConfigProperty",
        },
        confirmation_url: {
            value: cdktn.stringToHclTerraform(struct!.confirmationUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_batching: {
            value: cdktn.booleanToHclTerraform(struct!.enableBatching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        headers: {
            value: cdktn.listMapperHcl(ccTopicRuleHttpActionHeaderPropertyToHclTerraform, false)(struct!.headers),
            isBlock: true,
            type: "list",
            storageClassType: "HttpActionHeaderPropertyList",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleIotAnalyticsActionPropertyToTerraform(struct?: CcTopicRule.IotAnalyticsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
        channel_name: cdktn.stringToTerraform(struct!.channelName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleIotAnalyticsActionPropertyToHclTerraform(struct?: CcTopicRule.IotAnalyticsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_mode: {
            value: cdktn.booleanToHclTerraform(struct!.batchMode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        channel_name: {
            value: cdktn.stringToHclTerraform(struct!.channelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccTopicRuleIotEventsActionPropertyToTerraform(struct?: CcTopicRule.IotEventsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
        input_name: cdktn.stringToTerraform(struct!.inputName),
        message_id: cdktn.stringToTerraform(struct!.messageId),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleIotEventsActionPropertyToHclTerraform(struct?: CcTopicRule.IotEventsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_mode: {
            value: cdktn.booleanToHclTerraform(struct!.batchMode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        input_name: {
            value: cdktn.stringToHclTerraform(struct!.inputName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_id: {
            value: cdktn.stringToHclTerraform(struct!.messageId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccTopicRuleAssetPropertyTimestampPropertyToTerraform(struct?: CcTopicRule.AssetPropertyTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
        time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
    }
}


export function ccTopicRuleAssetPropertyTimestampPropertyToHclTerraform(struct?: CcTopicRule.AssetPropertyTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        offset_in_nanos: {
            value: cdktn.stringToHclTerraform(struct!.offsetInNanos),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_in_seconds: {
            value: cdktn.stringToHclTerraform(struct!.timeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleAssetPropertyVariantPropertyToTerraform(struct?: CcTopicRule.AssetPropertyVariantProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.stringToTerraform(struct!.booleanValue),
        double_value: cdktn.stringToTerraform(struct!.doubleValue),
        integer_value: cdktn.stringToTerraform(struct!.integerValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccTopicRuleAssetPropertyVariantPropertyToHclTerraform(struct?: CcTopicRule.AssetPropertyVariantProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.stringToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        double_value: {
            value: cdktn.stringToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integer_value: {
            value: cdktn.stringToHclTerraform(struct!.integerValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleAssetPropertyValuePropertyToTerraform(struct?: CcTopicRule.AssetPropertyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        quality: cdktn.stringToTerraform(struct!.quality),
        timestamp: ccTopicRuleAssetPropertyTimestampPropertyToTerraform(struct!.timestamp),
        value: ccTopicRuleAssetPropertyVariantPropertyToTerraform(struct!.value),
    }
}


export function ccTopicRuleAssetPropertyValuePropertyToHclTerraform(struct?: CcTopicRule.AssetPropertyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        quality: {
            value: cdktn.stringToHclTerraform(struct!.quality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp: {
            value: ccTopicRuleAssetPropertyTimestampPropertyToHclTerraform(struct!.timestamp),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetPropertyTimestampProperty",
        },
        value: {
            value: ccTopicRuleAssetPropertyVariantPropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetPropertyVariantProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRulePutAssetPropertyValueEntryPropertyToTerraform(struct?: CcTopicRule.PutAssetPropertyValueEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        asset_id: cdktn.stringToTerraform(struct!.assetId),
        entry_id: cdktn.stringToTerraform(struct!.entryId),
        property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
        property_id: cdktn.stringToTerraform(struct!.propertyId),
        property_values: cdktn.listMapper(ccTopicRuleAssetPropertyValuePropertyToTerraform, false)(struct!.propertyValues),
    }
}


export function ccTopicRulePutAssetPropertyValueEntryPropertyToHclTerraform(struct?: CcTopicRule.PutAssetPropertyValueEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        asset_id: {
            value: cdktn.stringToHclTerraform(struct!.assetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entry_id: {
            value: cdktn.stringToHclTerraform(struct!.entryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_alias: {
            value: cdktn.stringToHclTerraform(struct!.propertyAlias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_values: {
            value: cdktn.listMapperHcl(ccTopicRuleAssetPropertyValuePropertyToHclTerraform, false)(struct!.propertyValues),
            isBlock: true,
            type: "list",
            storageClassType: "AssetPropertyValuePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleIotSiteWiseActionPropertyToTerraform(struct?: CcTopicRule.IotSiteWiseActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        put_asset_property_value_entries: cdktn.listMapper(ccTopicRulePutAssetPropertyValueEntryPropertyToTerraform, false)(struct!.putAssetPropertyValueEntries),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleIotSiteWiseActionPropertyToHclTerraform(struct?: CcTopicRule.IotSiteWiseActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        put_asset_property_value_entries: {
            value: cdktn.listMapperHcl(ccTopicRulePutAssetPropertyValueEntryPropertyToHclTerraform, false)(struct!.putAssetPropertyValueEntries),
            isBlock: true,
            type: "list",
            storageClassType: "PutAssetPropertyValueEntryPropertyList",
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


export function ccTopicRuleKafkaActionHeaderPropertyToTerraform(struct?: CcTopicRule.KafkaActionHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleKafkaActionHeaderPropertyToHclTerraform(struct?: CcTopicRule.KafkaActionHeaderProperty | cdktn.IResolvable): any {
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


export function ccTopicRuleKafkaActionPropertyToTerraform(struct?: CcTopicRule.KafkaActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.clientProperties),
        destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
        headers: cdktn.listMapper(ccTopicRuleKafkaActionHeaderPropertyToTerraform, false)(struct!.headers),
        key: cdktn.stringToTerraform(struct!.key),
        partition: cdktn.stringToTerraform(struct!.partition),
        topic: cdktn.stringToTerraform(struct!.topic),
    }
}


export function ccTopicRuleKafkaActionPropertyToHclTerraform(struct?: CcTopicRule.KafkaActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.clientProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        destination_arn: {
            value: cdktn.stringToHclTerraform(struct!.destinationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        headers: {
            value: cdktn.listMapperHcl(ccTopicRuleKafkaActionHeaderPropertyToHclTerraform, false)(struct!.headers),
            isBlock: true,
            type: "list",
            storageClassType: "KafkaActionHeaderPropertyList",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partition: {
            value: cdktn.stringToHclTerraform(struct!.partition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topic: {
            value: cdktn.stringToHclTerraform(struct!.topic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleKinesisActionPropertyToTerraform(struct?: CcTopicRule.KinesisActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        partition_key: cdktn.stringToTerraform(struct!.partitionKey),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        stream_name: cdktn.stringToTerraform(struct!.streamName),
    }
}


export function ccTopicRuleKinesisActionPropertyToHclTerraform(struct?: CcTopicRule.KinesisActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        partition_key: {
            value: cdktn.stringToHclTerraform(struct!.partitionKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stream_name: {
            value: cdktn.stringToHclTerraform(struct!.streamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleLambdaActionPropertyToTerraform(struct?: CcTopicRule.LambdaActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_arn: cdktn.stringToTerraform(struct!.functionArn),
    }
}


export function ccTopicRuleLambdaActionPropertyToHclTerraform(struct?: CcTopicRule.LambdaActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        function_arn: {
            value: cdktn.stringToHclTerraform(struct!.functionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleTimestampPropertyToTerraform(struct?: CcTopicRule.TimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleTimestampPropertyToHclTerraform(struct?: CcTopicRule.TimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
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


export function ccTopicRuleLocationActionPropertyToTerraform(struct?: CcTopicRule.LocationActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_id: cdktn.stringToTerraform(struct!.deviceId),
        latitude: cdktn.stringToTerraform(struct!.latitude),
        longitude: cdktn.stringToTerraform(struct!.longitude),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        timestamp: ccTopicRuleTimestampPropertyToTerraform(struct!.timestamp),
        tracker_name: cdktn.stringToTerraform(struct!.trackerName),
    }
}


export function ccTopicRuleLocationActionPropertyToHclTerraform(struct?: CcTopicRule.LocationActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        device_id: {
            value: cdktn.stringToHclTerraform(struct!.deviceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        latitude: {
            value: cdktn.stringToHclTerraform(struct!.latitude),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        longitude: {
            value: cdktn.stringToHclTerraform(struct!.longitude),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp: {
            value: ccTopicRuleTimestampPropertyToHclTerraform(struct!.timestamp),
            isBlock: true,
            type: "struct",
            storageClassType: "TimestampProperty",
        },
        tracker_name: {
            value: cdktn.stringToHclTerraform(struct!.trackerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleOpenSearchActionPropertyToTerraform(struct?: CcTopicRule.OpenSearchActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        id: cdktn.stringToTerraform(struct!.id),
        index: cdktn.stringToTerraform(struct!.index),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTopicRuleOpenSearchActionPropertyToHclTerraform(struct?: CcTopicRule.OpenSearchActionProperty | cdktn.IResolvable): any {
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
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        index: {
            value: cdktn.stringToHclTerraform(struct!.index),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleUserPropertyPropertyToTerraform(struct?: CcTopicRule.UserPropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleUserPropertyPropertyToHclTerraform(struct?: CcTopicRule.UserPropertyProperty | cdktn.IResolvable): any {
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


export function ccTopicRuleRepublishActionHeadersPropertyToTerraform(struct?: CcTopicRule.RepublishActionHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_type: cdktn.stringToTerraform(struct!.contentType),
        correlation_data: cdktn.stringToTerraform(struct!.correlationData),
        message_expiry: cdktn.stringToTerraform(struct!.messageExpiry),
        payload_format_indicator: cdktn.stringToTerraform(struct!.payloadFormatIndicator),
        response_topic: cdktn.stringToTerraform(struct!.responseTopic),
        user_properties: cdktn.listMapper(ccTopicRuleUserPropertyPropertyToTerraform, false)(struct!.userProperties),
    }
}


export function ccTopicRuleRepublishActionHeadersPropertyToHclTerraform(struct?: CcTopicRule.RepublishActionHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        correlation_data: {
            value: cdktn.stringToHclTerraform(struct!.correlationData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_expiry: {
            value: cdktn.stringToHclTerraform(struct!.messageExpiry),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload_format_indicator: {
            value: cdktn.stringToHclTerraform(struct!.payloadFormatIndicator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_topic: {
            value: cdktn.stringToHclTerraform(struct!.responseTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_properties: {
            value: cdktn.listMapperHcl(ccTopicRuleUserPropertyPropertyToHclTerraform, false)(struct!.userProperties),
            isBlock: true,
            type: "list",
            storageClassType: "UserPropertyPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleRepublishActionPropertyToTerraform(struct?: CcTopicRule.RepublishActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        headers: ccTopicRuleRepublishActionHeadersPropertyToTerraform(struct!.headers),
        qos: cdktn.numberToTerraform(struct!.qos),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        topic: cdktn.stringToTerraform(struct!.topic),
    }
}


export function ccTopicRuleRepublishActionPropertyToHclTerraform(struct?: CcTopicRule.RepublishActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        headers: {
            value: ccTopicRuleRepublishActionHeadersPropertyToHclTerraform(struct!.headers),
            isBlock: true,
            type: "struct",
            storageClassType: "RepublishActionHeadersProperty",
        },
        qos: {
            value: cdktn.numberToHclTerraform(struct!.qos),
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
        topic: {
            value: cdktn.stringToHclTerraform(struct!.topic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleS3ActionPropertyToTerraform(struct?: CcTopicRule.S3ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
        key: cdktn.stringToTerraform(struct!.key),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleS3ActionPropertyToHclTerraform(struct?: CcTopicRule.S3ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        canned_acl: {
            value: cdktn.stringToHclTerraform(struct!.cannedAcl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccTopicRuleSnsActionPropertyToTerraform(struct?: CcTopicRule.SnsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message_format: cdktn.stringToTerraform(struct!.messageFormat),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        target_arn: cdktn.stringToTerraform(struct!.targetArn),
    }
}


export function ccTopicRuleSnsActionPropertyToHclTerraform(struct?: CcTopicRule.SnsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        message_format: {
            value: cdktn.stringToHclTerraform(struct!.messageFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleSqsActionPropertyToTerraform(struct?: CcTopicRule.SqsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        queue_url: cdktn.stringToTerraform(struct!.queueUrl),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
    }
}


export function ccTopicRuleSqsActionPropertyToHclTerraform(struct?: CcTopicRule.SqsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        queue_url: {
            value: cdktn.stringToHclTerraform(struct!.queueUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_base_64: {
            value: cdktn.booleanToHclTerraform(struct!.useBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleStepFunctionsActionPropertyToTerraform(struct?: CcTopicRule.StepFunctionsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        execution_name_prefix: cdktn.stringToTerraform(struct!.executionNamePrefix),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        state_machine_name: cdktn.stringToTerraform(struct!.stateMachineName),
    }
}


export function ccTopicRuleStepFunctionsActionPropertyToHclTerraform(struct?: CcTopicRule.StepFunctionsActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        execution_name_prefix: {
            value: cdktn.stringToHclTerraform(struct!.executionNamePrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state_machine_name: {
            value: cdktn.stringToHclTerraform(struct!.stateMachineName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleTimestreamDimensionPropertyToTerraform(struct?: CcTopicRule.TimestreamDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleTimestreamDimensionPropertyToHclTerraform(struct?: CcTopicRule.TimestreamDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccTopicRuleTimestreamTimestampPropertyToTerraform(struct?: CcTopicRule.TimestreamTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleTimestreamTimestampPropertyToHclTerraform(struct?: CcTopicRule.TimestreamTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
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


export function ccTopicRuleTimestreamActionPropertyToTerraform(struct?: CcTopicRule.TimestreamActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        dimensions: cdktn.listMapper(ccTopicRuleTimestreamDimensionPropertyToTerraform, false)(struct!.dimensions),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        table_name: cdktn.stringToTerraform(struct!.tableName),
        timestamp: ccTopicRuleTimestreamTimestampPropertyToTerraform(struct!.timestamp),
    }
}


export function ccTopicRuleTimestreamActionPropertyToHclTerraform(struct?: CcTopicRule.TimestreamActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dimensions: {
            value: cdktn.listMapperHcl(ccTopicRuleTimestreamDimensionPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "TimestreamDimensionPropertyList",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
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
        timestamp: {
            value: ccTopicRuleTimestreamTimestampPropertyToHclTerraform(struct!.timestamp),
            isBlock: true,
            type: "struct",
            storageClassType: "TimestreamTimestampProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleActionPropertyToTerraform(struct?: CcTopicRule.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_alarm: ccTopicRuleCloudwatchAlarmActionPropertyToTerraform(struct!.cloudwatchAlarm),
        cloudwatch_logs: ccTopicRuleCloudwatchLogsActionPropertyToTerraform(struct!.cloudwatchLogs),
        cloudwatch_metric: ccTopicRuleCloudwatchMetricActionPropertyToTerraform(struct!.cloudwatchMetric),
        dynamo_d_bv_2: ccTopicRuleDynamoDBv2ActionPropertyToTerraform(struct!.dynamoDBv2),
        dynamo_db: ccTopicRuleDynamoDBActionPropertyToTerraform(struct!.dynamoDb),
        elasticsearch: ccTopicRuleElasticsearchActionPropertyToTerraform(struct!.elasticsearch),
        firehose: ccTopicRuleFirehoseActionPropertyToTerraform(struct!.firehose),
        http: ccTopicRuleHttpActionPropertyToTerraform(struct!.http),
        iot_analytics: ccTopicRuleIotAnalyticsActionPropertyToTerraform(struct!.iotAnalytics),
        iot_events: ccTopicRuleIotEventsActionPropertyToTerraform(struct!.iotEvents),
        iot_site_wise: ccTopicRuleIotSiteWiseActionPropertyToTerraform(struct!.iotSiteWise),
        kafka: ccTopicRuleKafkaActionPropertyToTerraform(struct!.kafka),
        kinesis: ccTopicRuleKinesisActionPropertyToTerraform(struct!.kinesis),
        lambda: ccTopicRuleLambdaActionPropertyToTerraform(struct!.lambda),
        location: ccTopicRuleLocationActionPropertyToTerraform(struct!.location),
        open_search: ccTopicRuleOpenSearchActionPropertyToTerraform(struct!.openSearch),
        republish: ccTopicRuleRepublishActionPropertyToTerraform(struct!.republish),
        s3: ccTopicRuleS3ActionPropertyToTerraform(struct!.s3),
        sns: ccTopicRuleSnsActionPropertyToTerraform(struct!.sns),
        sqs: ccTopicRuleSqsActionPropertyToTerraform(struct!.sqs),
        step_functions: ccTopicRuleStepFunctionsActionPropertyToTerraform(struct!.stepFunctions),
        timestream: ccTopicRuleTimestreamActionPropertyToTerraform(struct!.timestream),
    }
}


export function ccTopicRuleActionPropertyToHclTerraform(struct?: CcTopicRule.ActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_alarm: {
            value: ccTopicRuleCloudwatchAlarmActionPropertyToHclTerraform(struct!.cloudwatchAlarm),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudwatchAlarmActionProperty",
        },
        cloudwatch_logs: {
            value: ccTopicRuleCloudwatchLogsActionPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudwatchLogsActionProperty",
        },
        cloudwatch_metric: {
            value: ccTopicRuleCloudwatchMetricActionPropertyToHclTerraform(struct!.cloudwatchMetric),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudwatchMetricActionProperty",
        },
        dynamo_d_bv_2: {
            value: ccTopicRuleDynamoDBv2ActionPropertyToHclTerraform(struct!.dynamoDBv2),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamoDBv2ActionProperty",
        },
        dynamo_db: {
            value: ccTopicRuleDynamoDBActionPropertyToHclTerraform(struct!.dynamoDb),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamoDBActionProperty",
        },
        elasticsearch: {
            value: ccTopicRuleElasticsearchActionPropertyToHclTerraform(struct!.elasticsearch),
            isBlock: true,
            type: "struct",
            storageClassType: "ElasticsearchActionProperty",
        },
        firehose: {
            value: ccTopicRuleFirehoseActionPropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "FirehoseActionProperty",
        },
        http: {
            value: ccTopicRuleHttpActionPropertyToHclTerraform(struct!.http),
            isBlock: true,
            type: "struct",
            storageClassType: "HttpActionProperty",
        },
        iot_analytics: {
            value: ccTopicRuleIotAnalyticsActionPropertyToHclTerraform(struct!.iotAnalytics),
            isBlock: true,
            type: "struct",
            storageClassType: "IotAnalyticsActionProperty",
        },
        iot_events: {
            value: ccTopicRuleIotEventsActionPropertyToHclTerraform(struct!.iotEvents),
            isBlock: true,
            type: "struct",
            storageClassType: "IotEventsActionProperty",
        },
        iot_site_wise: {
            value: ccTopicRuleIotSiteWiseActionPropertyToHclTerraform(struct!.iotSiteWise),
            isBlock: true,
            type: "struct",
            storageClassType: "IotSiteWiseActionProperty",
        },
        kafka: {
            value: ccTopicRuleKafkaActionPropertyToHclTerraform(struct!.kafka),
            isBlock: true,
            type: "struct",
            storageClassType: "KafkaActionProperty",
        },
        kinesis: {
            value: ccTopicRuleKinesisActionPropertyToHclTerraform(struct!.kinesis),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisActionProperty",
        },
        lambda: {
            value: ccTopicRuleLambdaActionPropertyToHclTerraform(struct!.lambda),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaActionProperty",
        },
        location: {
            value: ccTopicRuleLocationActionPropertyToHclTerraform(struct!.location),
            isBlock: true,
            type: "struct",
            storageClassType: "LocationActionProperty",
        },
        open_search: {
            value: ccTopicRuleOpenSearchActionPropertyToHclTerraform(struct!.openSearch),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenSearchActionProperty",
        },
        republish: {
            value: ccTopicRuleRepublishActionPropertyToHclTerraform(struct!.republish),
            isBlock: true,
            type: "struct",
            storageClassType: "RepublishActionProperty",
        },
        s3: {
            value: ccTopicRuleS3ActionPropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ActionProperty",
        },
        sns: {
            value: ccTopicRuleSnsActionPropertyToHclTerraform(struct!.sns),
            isBlock: true,
            type: "struct",
            storageClassType: "SnsActionProperty",
        },
        sqs: {
            value: ccTopicRuleSqsActionPropertyToHclTerraform(struct!.sqs),
            isBlock: true,
            type: "struct",
            storageClassType: "SqsActionProperty",
        },
        step_functions: {
            value: ccTopicRuleStepFunctionsActionPropertyToHclTerraform(struct!.stepFunctions),
            isBlock: true,
            type: "struct",
            storageClassType: "StepFunctionsActionProperty",
        },
        timestream: {
            value: ccTopicRuleTimestreamActionPropertyToHclTerraform(struct!.timestream),
            isBlock: true,
            type: "struct",
            storageClassType: "TimestreamActionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleCloudwatchAlarmPropertyToTerraform(struct?: CcTopicRule.CloudwatchAlarmProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_name: cdktn.stringToTerraform(struct!.alarmName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        state_reason: cdktn.stringToTerraform(struct!.stateReason),
        state_value: cdktn.stringToTerraform(struct!.stateValue),
    }
}


export function ccTopicRuleCloudwatchAlarmPropertyToHclTerraform(struct?: CcTopicRule.CloudwatchAlarmProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state_reason: {
            value: cdktn.stringToHclTerraform(struct!.stateReason),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state_value: {
            value: cdktn.stringToHclTerraform(struct!.stateValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleCloudwatchLogsPropertyToTerraform(struct?: CcTopicRule.CloudwatchLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleCloudwatchLogsPropertyToHclTerraform(struct?: CcTopicRule.CloudwatchLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_mode: {
            value: cdktn.booleanToHclTerraform(struct!.batchMode),
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


export function ccTopicRuleCloudwatchMetricPropertyToTerraform(struct?: CcTopicRule.CloudwatchMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        metric_namespace: cdktn.stringToTerraform(struct!.metricNamespace),
        metric_timestamp: cdktn.stringToTerraform(struct!.metricTimestamp),
        metric_unit: cdktn.stringToTerraform(struct!.metricUnit),
        metric_value: cdktn.stringToTerraform(struct!.metricValue),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleCloudwatchMetricPropertyToHclTerraform(struct?: CcTopicRule.CloudwatchMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_namespace: {
            value: cdktn.stringToHclTerraform(struct!.metricNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_timestamp: {
            value: cdktn.stringToHclTerraform(struct!.metricTimestamp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_unit: {
            value: cdktn.stringToHclTerraform(struct!.metricUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_value: {
            value: cdktn.stringToHclTerraform(struct!.metricValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccTopicRulePutItemPropertyToTerraform(struct?: CcTopicRule.PutItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccTopicRulePutItemPropertyToHclTerraform(struct?: CcTopicRule.PutItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccTopicRuleDynamoDBv2PropertyToTerraform(struct?: CcTopicRule.DynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        put_item: ccTopicRulePutItemPropertyToTerraform(struct!.putItem),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleDynamoDBv2PropertyToHclTerraform(struct?: CcTopicRule.DynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        put_item: {
            value: ccTopicRulePutItemPropertyToHclTerraform(struct!.putItem),
            isBlock: true,
            type: "struct",
            storageClassType: "PutItemProperty",
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


export function ccTopicRuleDynamoDbPropertyToTerraform(struct?: CcTopicRule.DynamoDbProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
        hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
        hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
        payload_field: cdktn.stringToTerraform(struct!.payloadField),
        range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
        range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
        range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccTopicRuleDynamoDbPropertyToHclTerraform(struct?: CcTopicRule.DynamoDbProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hash_key_field: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_type: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hash_key_value: {
            value: cdktn.stringToHclTerraform(struct!.hashKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload_field: {
            value: cdktn.stringToHclTerraform(struct!.payloadField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_field: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_type: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        range_key_value: {
            value: cdktn.stringToHclTerraform(struct!.rangeKeyValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
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


export function ccTopicRuleElasticsearchPropertyToTerraform(struct?: CcTopicRule.ElasticsearchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        id: cdktn.stringToTerraform(struct!.id),
        index: cdktn.stringToTerraform(struct!.index),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTopicRuleElasticsearchPropertyToHclTerraform(struct?: CcTopicRule.ElasticsearchProperty | cdktn.IResolvable): any {
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
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        index: {
            value: cdktn.stringToHclTerraform(struct!.index),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleFirehosePropertyToTerraform(struct?: CcTopicRule.FirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
        delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        separator: cdktn.stringToTerraform(struct!.separator),
    }
}


export function ccTopicRuleFirehosePropertyToHclTerraform(struct?: CcTopicRule.FirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_mode: {
            value: cdktn.booleanToHclTerraform(struct!.batchMode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        delivery_stream_name: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        separator: {
            value: cdktn.stringToHclTerraform(struct!.separator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleSigv4PropertyToTerraform(struct?: CcTopicRule.Sigv4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        service_name: cdktn.stringToTerraform(struct!.serviceName),
        signing_region: cdktn.stringToTerraform(struct!.signingRegion),
    }
}


export function ccTopicRuleSigv4PropertyToHclTerraform(struct?: CcTopicRule.Sigv4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_name: {
            value: cdktn.stringToHclTerraform(struct!.serviceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        signing_region: {
            value: cdktn.stringToHclTerraform(struct!.signingRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleAuthPropertyToTerraform(struct?: CcTopicRule.AuthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sigv_4: ccTopicRuleSigv4PropertyToTerraform(struct!.sigv4),
    }
}


export function ccTopicRuleAuthPropertyToHclTerraform(struct?: CcTopicRule.AuthProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sigv_4: {
            value: ccTopicRuleSigv4PropertyToHclTerraform(struct!.sigv4),
            isBlock: true,
            type: "struct",
            storageClassType: "Sigv4Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleTopicRulePayloadErrorActionHttpBatchConfigPropertyToTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionHttpBatchConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_across_topics: cdktn.booleanToTerraform(struct!.batchAcrossTopics),
        max_batch_open_ms: cdktn.numberToTerraform(struct!.maxBatchOpenMs),
        max_batch_size: cdktn.numberToTerraform(struct!.maxBatchSize),
        max_batch_size_bytes: cdktn.numberToTerraform(struct!.maxBatchSizeBytes),
    }
}


export function ccTopicRuleTopicRulePayloadErrorActionHttpBatchConfigPropertyToHclTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionHttpBatchConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_across_topics: {
            value: cdktn.booleanToHclTerraform(struct!.batchAcrossTopics),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_batch_open_ms: {
            value: cdktn.numberToHclTerraform(struct!.maxBatchOpenMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_batch_size: {
            value: cdktn.numberToHclTerraform(struct!.maxBatchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_batch_size_bytes: {
            value: cdktn.numberToHclTerraform(struct!.maxBatchSizeBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleTopicRulePayloadErrorActionHttpHeadersPropertyToTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionHttpHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleTopicRulePayloadErrorActionHttpHeadersPropertyToHclTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionHttpHeadersProperty | cdktn.IResolvable): any {
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


export function ccTopicRuleHttpPropertyToTerraform(struct?: CcTopicRule.HttpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth: ccTopicRuleAuthPropertyToTerraform(struct!.auth),
        batch_config: ccTopicRuleTopicRulePayloadErrorActionHttpBatchConfigPropertyToTerraform(struct!.batchConfig),
        confirmation_url: cdktn.stringToTerraform(struct!.confirmationUrl),
        enable_batching: cdktn.booleanToTerraform(struct!.enableBatching),
        headers: cdktn.listMapper(ccTopicRuleTopicRulePayloadErrorActionHttpHeadersPropertyToTerraform, false)(struct!.headers),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccTopicRuleHttpPropertyToHclTerraform(struct?: CcTopicRule.HttpProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth: {
            value: ccTopicRuleAuthPropertyToHclTerraform(struct!.auth),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthProperty",
        },
        batch_config: {
            value: ccTopicRuleTopicRulePayloadErrorActionHttpBatchConfigPropertyToHclTerraform(struct!.batchConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TopicRulePayloadErrorActionHttpBatchConfigProperty",
        },
        confirmation_url: {
            value: cdktn.stringToHclTerraform(struct!.confirmationUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enable_batching: {
            value: cdktn.booleanToHclTerraform(struct!.enableBatching),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        headers: {
            value: cdktn.listMapperHcl(ccTopicRuleTopicRulePayloadErrorActionHttpHeadersPropertyToHclTerraform, false)(struct!.headers),
            isBlock: true,
            type: "list",
            storageClassType: "TopicRulePayloadErrorActionHttpHeadersPropertyList",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleIotAnalyticsPropertyToTerraform(struct?: CcTopicRule.IotAnalyticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
        channel_name: cdktn.stringToTerraform(struct!.channelName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleIotAnalyticsPropertyToHclTerraform(struct?: CcTopicRule.IotAnalyticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_mode: {
            value: cdktn.booleanToHclTerraform(struct!.batchMode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        channel_name: {
            value: cdktn.stringToHclTerraform(struct!.channelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccTopicRuleIotEventsPropertyToTerraform(struct?: CcTopicRule.IotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_mode: cdktn.booleanToTerraform(struct!.batchMode),
        input_name: cdktn.stringToTerraform(struct!.inputName),
        message_id: cdktn.stringToTerraform(struct!.messageId),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleIotEventsPropertyToHclTerraform(struct?: CcTopicRule.IotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_mode: {
            value: cdktn.booleanToHclTerraform(struct!.batchMode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        input_name: {
            value: cdktn.stringToHclTerraform(struct!.inputName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_id: {
            value: cdktn.stringToHclTerraform(struct!.messageId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampPropertyToTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
        time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
    }
}


export function ccTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampPropertyToHclTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        offset_in_nanos: {
            value: cdktn.stringToHclTerraform(struct!.offsetInNanos),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_in_seconds: {
            value: cdktn.stringToHclTerraform(struct!.timeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleValuePropertyToTerraform(struct?: CcTopicRule.ValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.stringToTerraform(struct!.booleanValue),
        double_value: cdktn.stringToTerraform(struct!.doubleValue),
        integer_value: cdktn.stringToTerraform(struct!.integerValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccTopicRuleValuePropertyToHclTerraform(struct?: CcTopicRule.ValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.stringToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        double_value: {
            value: cdktn.stringToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integer_value: {
            value: cdktn.stringToHclTerraform(struct!.integerValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRulePropertyValuesPropertyToTerraform(struct?: CcTopicRule.PropertyValuesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        quality: cdktn.stringToTerraform(struct!.quality),
        timestamp: ccTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampPropertyToTerraform(struct!.timestamp),
        value: ccTopicRuleValuePropertyToTerraform(struct!.value),
    }
}


export function ccTopicRulePropertyValuesPropertyToHclTerraform(struct?: CcTopicRule.PropertyValuesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        quality: {
            value: cdktn.stringToHclTerraform(struct!.quality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp: {
            value: ccTopicRuleTopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampPropertyToHclTerraform(struct!.timestamp),
            isBlock: true,
            type: "struct",
            storageClassType: "TopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampProperty",
        },
        value: {
            value: ccTopicRuleValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "ValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRulePutAssetPropertyValueEntriesPropertyToTerraform(struct?: CcTopicRule.PutAssetPropertyValueEntriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        asset_id: cdktn.stringToTerraform(struct!.assetId),
        entry_id: cdktn.stringToTerraform(struct!.entryId),
        property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
        property_id: cdktn.stringToTerraform(struct!.propertyId),
        property_values: cdktn.listMapper(ccTopicRulePropertyValuesPropertyToTerraform, false)(struct!.propertyValues),
    }
}


export function ccTopicRulePutAssetPropertyValueEntriesPropertyToHclTerraform(struct?: CcTopicRule.PutAssetPropertyValueEntriesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        asset_id: {
            value: cdktn.stringToHclTerraform(struct!.assetId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entry_id: {
            value: cdktn.stringToHclTerraform(struct!.entryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_alias: {
            value: cdktn.stringToHclTerraform(struct!.propertyAlias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_id: {
            value: cdktn.stringToHclTerraform(struct!.propertyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_values: {
            value: cdktn.listMapperHcl(ccTopicRulePropertyValuesPropertyToHclTerraform, false)(struct!.propertyValues),
            isBlock: true,
            type: "list",
            storageClassType: "PropertyValuesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleIotSiteWisePropertyToTerraform(struct?: CcTopicRule.IotSiteWiseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        put_asset_property_value_entries: cdktn.listMapper(ccTopicRulePutAssetPropertyValueEntriesPropertyToTerraform, false)(struct!.putAssetPropertyValueEntries),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleIotSiteWisePropertyToHclTerraform(struct?: CcTopicRule.IotSiteWiseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        put_asset_property_value_entries: {
            value: cdktn.listMapperHcl(ccTopicRulePutAssetPropertyValueEntriesPropertyToHclTerraform, false)(struct!.putAssetPropertyValueEntries),
            isBlock: true,
            type: "list",
            storageClassType: "PutAssetPropertyValueEntriesPropertyList",
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


export function ccTopicRuleTopicRulePayloadErrorActionKafkaHeadersPropertyToTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionKafkaHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleTopicRulePayloadErrorActionKafkaHeadersPropertyToHclTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionKafkaHeadersProperty | cdktn.IResolvable): any {
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


export function ccTopicRuleKafkaPropertyToTerraform(struct?: CcTopicRule.KafkaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.clientProperties),
        destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
        headers: cdktn.listMapper(ccTopicRuleTopicRulePayloadErrorActionKafkaHeadersPropertyToTerraform, false)(struct!.headers),
        key: cdktn.stringToTerraform(struct!.key),
        partition: cdktn.stringToTerraform(struct!.partition),
        topic: cdktn.stringToTerraform(struct!.topic),
    }
}


export function ccTopicRuleKafkaPropertyToHclTerraform(struct?: CcTopicRule.KafkaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_properties: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.clientProperties),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        destination_arn: {
            value: cdktn.stringToHclTerraform(struct!.destinationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        headers: {
            value: cdktn.listMapperHcl(ccTopicRuleTopicRulePayloadErrorActionKafkaHeadersPropertyToHclTerraform, false)(struct!.headers),
            isBlock: true,
            type: "list",
            storageClassType: "TopicRulePayloadErrorActionKafkaHeadersPropertyList",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partition: {
            value: cdktn.stringToHclTerraform(struct!.partition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topic: {
            value: cdktn.stringToHclTerraform(struct!.topic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleKinesisPropertyToTerraform(struct?: CcTopicRule.KinesisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        partition_key: cdktn.stringToTerraform(struct!.partitionKey),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        stream_name: cdktn.stringToTerraform(struct!.streamName),
    }
}


export function ccTopicRuleKinesisPropertyToHclTerraform(struct?: CcTopicRule.KinesisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        partition_key: {
            value: cdktn.stringToHclTerraform(struct!.partitionKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stream_name: {
            value: cdktn.stringToHclTerraform(struct!.streamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleLambdaPropertyToTerraform(struct?: CcTopicRule.LambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_arn: cdktn.stringToTerraform(struct!.functionArn),
    }
}


export function ccTopicRuleLambdaPropertyToHclTerraform(struct?: CcTopicRule.LambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        function_arn: {
            value: cdktn.stringToHclTerraform(struct!.functionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleTopicRulePayloadErrorActionLocationTimestampPropertyToTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionLocationTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleTopicRulePayloadErrorActionLocationTimestampPropertyToHclTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionLocationTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
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


export function ccTopicRuleLocationPropertyToTerraform(struct?: CcTopicRule.LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_id: cdktn.stringToTerraform(struct!.deviceId),
        latitude: cdktn.stringToTerraform(struct!.latitude),
        longitude: cdktn.stringToTerraform(struct!.longitude),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        timestamp: ccTopicRuleTopicRulePayloadErrorActionLocationTimestampPropertyToTerraform(struct!.timestamp),
        tracker_name: cdktn.stringToTerraform(struct!.trackerName),
    }
}


export function ccTopicRuleLocationPropertyToHclTerraform(struct?: CcTopicRule.LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        device_id: {
            value: cdktn.stringToHclTerraform(struct!.deviceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        latitude: {
            value: cdktn.stringToHclTerraform(struct!.latitude),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        longitude: {
            value: cdktn.stringToHclTerraform(struct!.longitude),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp: {
            value: ccTopicRuleTopicRulePayloadErrorActionLocationTimestampPropertyToHclTerraform(struct!.timestamp),
            isBlock: true,
            type: "struct",
            storageClassType: "TopicRulePayloadErrorActionLocationTimestampProperty",
        },
        tracker_name: {
            value: cdktn.stringToHclTerraform(struct!.trackerName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleOpenSearchPropertyToTerraform(struct?: CcTopicRule.OpenSearchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
        id: cdktn.stringToTerraform(struct!.id),
        index: cdktn.stringToTerraform(struct!.index),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccTopicRuleOpenSearchPropertyToHclTerraform(struct?: CcTopicRule.OpenSearchProperty | cdktn.IResolvable): any {
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
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        index: {
            value: cdktn.stringToHclTerraform(struct!.index),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleUserPropertiesPropertyToTerraform(struct?: CcTopicRule.UserPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleUserPropertiesPropertyToHclTerraform(struct?: CcTopicRule.UserPropertiesProperty | cdktn.IResolvable): any {
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


export function ccTopicRuleTopicRulePayloadErrorActionRepublishHeadersPropertyToTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionRepublishHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_type: cdktn.stringToTerraform(struct!.contentType),
        correlation_data: cdktn.stringToTerraform(struct!.correlationData),
        message_expiry: cdktn.stringToTerraform(struct!.messageExpiry),
        payload_format_indicator: cdktn.stringToTerraform(struct!.payloadFormatIndicator),
        response_topic: cdktn.stringToTerraform(struct!.responseTopic),
        user_properties: cdktn.listMapper(ccTopicRuleUserPropertiesPropertyToTerraform, false)(struct!.userProperties),
    }
}


export function ccTopicRuleTopicRulePayloadErrorActionRepublishHeadersPropertyToHclTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionRepublishHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        correlation_data: {
            value: cdktn.stringToHclTerraform(struct!.correlationData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_expiry: {
            value: cdktn.stringToHclTerraform(struct!.messageExpiry),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload_format_indicator: {
            value: cdktn.stringToHclTerraform(struct!.payloadFormatIndicator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        response_topic: {
            value: cdktn.stringToHclTerraform(struct!.responseTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_properties: {
            value: cdktn.listMapperHcl(ccTopicRuleUserPropertiesPropertyToHclTerraform, false)(struct!.userProperties),
            isBlock: true,
            type: "list",
            storageClassType: "UserPropertiesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleRepublishPropertyToTerraform(struct?: CcTopicRule.RepublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        headers: ccTopicRuleTopicRulePayloadErrorActionRepublishHeadersPropertyToTerraform(struct!.headers),
        qos: cdktn.numberToTerraform(struct!.qos),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        topic: cdktn.stringToTerraform(struct!.topic),
    }
}


export function ccTopicRuleRepublishPropertyToHclTerraform(struct?: CcTopicRule.RepublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        headers: {
            value: ccTopicRuleTopicRulePayloadErrorActionRepublishHeadersPropertyToHclTerraform(struct!.headers),
            isBlock: true,
            type: "struct",
            storageClassType: "TopicRulePayloadErrorActionRepublishHeadersProperty",
        },
        qos: {
            value: cdktn.numberToHclTerraform(struct!.qos),
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
        topic: {
            value: cdktn.stringToHclTerraform(struct!.topic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleS3PropertyToTerraform(struct?: CcTopicRule.S3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
        key: cdktn.stringToTerraform(struct!.key),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccTopicRuleS3PropertyToHclTerraform(struct?: CcTopicRule.S3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        canned_acl: {
            value: cdktn.stringToHclTerraform(struct!.cannedAcl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccTopicRuleSnsPropertyToTerraform(struct?: CcTopicRule.SnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message_format: cdktn.stringToTerraform(struct!.messageFormat),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        target_arn: cdktn.stringToTerraform(struct!.targetArn),
    }
}


export function ccTopicRuleSnsPropertyToHclTerraform(struct?: CcTopicRule.SnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        message_format: {
            value: cdktn.stringToHclTerraform(struct!.messageFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleSqsPropertyToTerraform(struct?: CcTopicRule.SqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        queue_url: cdktn.stringToTerraform(struct!.queueUrl),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
    }
}


export function ccTopicRuleSqsPropertyToHclTerraform(struct?: CcTopicRule.SqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        queue_url: {
            value: cdktn.stringToHclTerraform(struct!.queueUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_base_64: {
            value: cdktn.booleanToHclTerraform(struct!.useBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleStepFunctionsPropertyToTerraform(struct?: CcTopicRule.StepFunctionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        execution_name_prefix: cdktn.stringToTerraform(struct!.executionNamePrefix),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        state_machine_name: cdktn.stringToTerraform(struct!.stateMachineName),
    }
}


export function ccTopicRuleStepFunctionsPropertyToHclTerraform(struct?: CcTopicRule.StepFunctionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        execution_name_prefix: {
            value: cdktn.stringToHclTerraform(struct!.executionNamePrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state_machine_name: {
            value: cdktn.stringToHclTerraform(struct!.stateMachineName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleDimensionsPropertyToTerraform(struct?: CcTopicRule.DimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleDimensionsPropertyToHclTerraform(struct?: CcTopicRule.DimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccTopicRuleTopicRulePayloadErrorActionTimestreamTimestampPropertyToTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionTimestreamTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTopicRuleTopicRulePayloadErrorActionTimestreamTimestampPropertyToHclTerraform(struct?: CcTopicRule.TopicRulePayloadErrorActionTimestreamTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
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


export function ccTopicRuleTimestreamPropertyToTerraform(struct?: CcTopicRule.TimestreamProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        dimensions: cdktn.listMapper(ccTopicRuleDimensionsPropertyToTerraform, false)(struct!.dimensions),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        table_name: cdktn.stringToTerraform(struct!.tableName),
        timestamp: ccTopicRuleTopicRulePayloadErrorActionTimestreamTimestampPropertyToTerraform(struct!.timestamp),
    }
}


export function ccTopicRuleTimestreamPropertyToHclTerraform(struct?: CcTopicRule.TimestreamProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dimensions: {
            value: cdktn.listMapperHcl(ccTopicRuleDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "DimensionsPropertyList",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
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
        timestamp: {
            value: ccTopicRuleTopicRulePayloadErrorActionTimestreamTimestampPropertyToHclTerraform(struct!.timestamp),
            isBlock: true,
            type: "struct",
            storageClassType: "TopicRulePayloadErrorActionTimestreamTimestampProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleErrorActionPropertyToTerraform(struct?: CcTopicRule.ErrorActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_alarm: ccTopicRuleCloudwatchAlarmPropertyToTerraform(struct!.cloudwatchAlarm),
        cloudwatch_logs: ccTopicRuleCloudwatchLogsPropertyToTerraform(struct!.cloudwatchLogs),
        cloudwatch_metric: ccTopicRuleCloudwatchMetricPropertyToTerraform(struct!.cloudwatchMetric),
        dynamo_d_bv_2: ccTopicRuleDynamoDBv2PropertyToTerraform(struct!.dynamoDBv2),
        dynamo_db: ccTopicRuleDynamoDbPropertyToTerraform(struct!.dynamoDb),
        elasticsearch: ccTopicRuleElasticsearchPropertyToTerraform(struct!.elasticsearch),
        firehose: ccTopicRuleFirehosePropertyToTerraform(struct!.firehose),
        http: ccTopicRuleHttpPropertyToTerraform(struct!.http),
        iot_analytics: ccTopicRuleIotAnalyticsPropertyToTerraform(struct!.iotAnalytics),
        iot_events: ccTopicRuleIotEventsPropertyToTerraform(struct!.iotEvents),
        iot_site_wise: ccTopicRuleIotSiteWisePropertyToTerraform(struct!.iotSiteWise),
        kafka: ccTopicRuleKafkaPropertyToTerraform(struct!.kafka),
        kinesis: ccTopicRuleKinesisPropertyToTerraform(struct!.kinesis),
        lambda: ccTopicRuleLambdaPropertyToTerraform(struct!.lambda),
        location: ccTopicRuleLocationPropertyToTerraform(struct!.location),
        open_search: ccTopicRuleOpenSearchPropertyToTerraform(struct!.openSearch),
        republish: ccTopicRuleRepublishPropertyToTerraform(struct!.republish),
        s3: ccTopicRuleS3PropertyToTerraform(struct!.s3),
        sns: ccTopicRuleSnsPropertyToTerraform(struct!.sns),
        sqs: ccTopicRuleSqsPropertyToTerraform(struct!.sqs),
        step_functions: ccTopicRuleStepFunctionsPropertyToTerraform(struct!.stepFunctions),
        timestream: ccTopicRuleTimestreamPropertyToTerraform(struct!.timestream),
    }
}


export function ccTopicRuleErrorActionPropertyToHclTerraform(struct?: CcTopicRule.ErrorActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_alarm: {
            value: ccTopicRuleCloudwatchAlarmPropertyToHclTerraform(struct!.cloudwatchAlarm),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudwatchAlarmProperty",
        },
        cloudwatch_logs: {
            value: ccTopicRuleCloudwatchLogsPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudwatchLogsProperty",
        },
        cloudwatch_metric: {
            value: ccTopicRuleCloudwatchMetricPropertyToHclTerraform(struct!.cloudwatchMetric),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudwatchMetricProperty",
        },
        dynamo_d_bv_2: {
            value: ccTopicRuleDynamoDBv2PropertyToHclTerraform(struct!.dynamoDBv2),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamoDBv2Property",
        },
        dynamo_db: {
            value: ccTopicRuleDynamoDbPropertyToHclTerraform(struct!.dynamoDb),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamoDbProperty",
        },
        elasticsearch: {
            value: ccTopicRuleElasticsearchPropertyToHclTerraform(struct!.elasticsearch),
            isBlock: true,
            type: "struct",
            storageClassType: "ElasticsearchProperty",
        },
        firehose: {
            value: ccTopicRuleFirehosePropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "FirehoseProperty",
        },
        http: {
            value: ccTopicRuleHttpPropertyToHclTerraform(struct!.http),
            isBlock: true,
            type: "struct",
            storageClassType: "HttpProperty",
        },
        iot_analytics: {
            value: ccTopicRuleIotAnalyticsPropertyToHclTerraform(struct!.iotAnalytics),
            isBlock: true,
            type: "struct",
            storageClassType: "IotAnalyticsProperty",
        },
        iot_events: {
            value: ccTopicRuleIotEventsPropertyToHclTerraform(struct!.iotEvents),
            isBlock: true,
            type: "struct",
            storageClassType: "IotEventsProperty",
        },
        iot_site_wise: {
            value: ccTopicRuleIotSiteWisePropertyToHclTerraform(struct!.iotSiteWise),
            isBlock: true,
            type: "struct",
            storageClassType: "IotSiteWiseProperty",
        },
        kafka: {
            value: ccTopicRuleKafkaPropertyToHclTerraform(struct!.kafka),
            isBlock: true,
            type: "struct",
            storageClassType: "KafkaProperty",
        },
        kinesis: {
            value: ccTopicRuleKinesisPropertyToHclTerraform(struct!.kinesis),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisProperty",
        },
        lambda: {
            value: ccTopicRuleLambdaPropertyToHclTerraform(struct!.lambda),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaProperty",
        },
        location: {
            value: ccTopicRuleLocationPropertyToHclTerraform(struct!.location),
            isBlock: true,
            type: "struct",
            storageClassType: "LocationProperty",
        },
        open_search: {
            value: ccTopicRuleOpenSearchPropertyToHclTerraform(struct!.openSearch),
            isBlock: true,
            type: "struct",
            storageClassType: "OpenSearchProperty",
        },
        republish: {
            value: ccTopicRuleRepublishPropertyToHclTerraform(struct!.republish),
            isBlock: true,
            type: "struct",
            storageClassType: "RepublishProperty",
        },
        s3: {
            value: ccTopicRuleS3PropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3Property",
        },
        sns: {
            value: ccTopicRuleSnsPropertyToHclTerraform(struct!.sns),
            isBlock: true,
            type: "struct",
            storageClassType: "SnsProperty",
        },
        sqs: {
            value: ccTopicRuleSqsPropertyToHclTerraform(struct!.sqs),
            isBlock: true,
            type: "struct",
            storageClassType: "SqsProperty",
        },
        step_functions: {
            value: ccTopicRuleStepFunctionsPropertyToHclTerraform(struct!.stepFunctions),
            isBlock: true,
            type: "struct",
            storageClassType: "StepFunctionsProperty",
        },
        timestream: {
            value: ccTopicRuleTimestreamPropertyToHclTerraform(struct!.timestream),
            isBlock: true,
            type: "struct",
            storageClassType: "TimestreamProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTopicRuleTopicRulePayloadPropertyToTerraform(struct?: CcTopicRule.TopicRulePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(ccTopicRuleActionPropertyToTerraform, false)(struct!.actions),
        aws_iot_sql_version: cdktn.stringToTerraform(struct!.awsIotSqlVersion),
        description: cdktn.stringToTerraform(struct!.description),
        error_action: ccTopicRuleErrorActionPropertyToTerraform(struct!.errorAction),
        rule_disabled: cdktn.booleanToTerraform(struct!.ruleDisabled),
        sql: cdktn.stringToTerraform(struct!.sql),
    }
}


export function ccTopicRuleTopicRulePayloadPropertyToHclTerraform(struct?: CcTopicRule.TopicRulePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(ccTopicRuleActionPropertyToHclTerraform, false)(struct!.actions),
            isBlock: true,
            type: "list",
            storageClassType: "ActionPropertyList",
        },
        aws_iot_sql_version: {
            value: cdktn.stringToHclTerraform(struct!.awsIotSqlVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error_action: {
            value: ccTopicRuleErrorActionPropertyToHclTerraform(struct!.errorAction),
            isBlock: true,
            type: "struct",
            storageClassType: "ErrorActionProperty",
        },
        rule_disabled: {
            value: cdktn.booleanToHclTerraform(struct!.ruleDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sql: {
            value: cdktn.stringToHclTerraform(struct!.sql),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTopicRule {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#key CcTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
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
export interface CloudwatchAlarmActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#alarm_name CcTopicRule#alarm_name}
    */
    readonly alarmName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#state_reason CcTopicRule#state_reason}
    */
    readonly stateReason?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#state_value CcTopicRule#state_value}
    */
    readonly stateValue?: string;
}
export class CloudwatchAlarmActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudwatchAlarmActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmName = this._alarmName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._stateReason !== undefined) {
            hasAnyValues = true;
            internalValueResult.stateReason = this._stateReason;
        }
        if (this._stateValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stateValue = this._stateValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudwatchAlarmActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmName = undefined;
            this._roleArn = undefined;
            this._stateReason = undefined;
            this._stateValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmName = value.alarmName;
            this._roleArn = value.roleArn;
            this._stateReason = value.stateReason;
            this._stateValue = value.stateValue;
        }
    }

    // alarm_name - computed: true, optional: true, required: false
    private _alarmName?: string; 
    public get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    public set alarmName(value: string) {
        this._alarmName = value;
    }
    public resetAlarmName() {
        this._alarmName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNameInput() {
        return this._alarmName;
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

    // state_reason - computed: true, optional: true, required: false
    private _stateReason?: string; 
    public get stateReason() {
        return this.getStringAttribute('state_reason');
    }
    public set stateReason(value: string) {
        this._stateReason = value;
    }
    public resetStateReason() {
        this._stateReason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateReasonInput() {
        return this._stateReason;
    }

    // state_value - computed: true, optional: true, required: false
    private _stateValue?: string; 
    public get stateValue() {
        return this.getStringAttribute('state_value');
    }
    public set stateValue(value: string) {
        this._stateValue = value;
    }
    public resetStateValue() {
        this._stateValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateValueInput() {
        return this._stateValue;
    }
}
export interface CloudwatchLogsActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_mode CcTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#log_group_name CcTopicRule#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class CloudwatchLogsActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudwatchLogsActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchMode = this._batchMode;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudwatchLogsActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchMode = undefined;
            this._logGroupName = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchMode = value.batchMode;
            this._logGroupName = value.logGroupName;
            this._roleArn = value.roleArn;
        }
    }

    // batch_mode - computed: true, optional: true, required: false
    private _batchMode?: boolean | cdktn.IResolvable; 
    public get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    public set batchMode(value: boolean | cdktn.IResolvable) {
        this._batchMode = value;
    }
    public resetBatchMode() {
        this._batchMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchModeInput() {
        return this._batchMode;
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
export interface CloudwatchMetricActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#metric_name CcTopicRule#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#metric_namespace CcTopicRule#metric_namespace}
    */
    readonly metricNamespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#metric_timestamp CcTopicRule#metric_timestamp}
    */
    readonly metricTimestamp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#metric_unit CcTopicRule#metric_unit}
    */
    readonly metricUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#metric_value CcTopicRule#metric_value}
    */
    readonly metricValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class CloudwatchMetricActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudwatchMetricActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._metricNamespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricNamespace = this._metricNamespace;
        }
        if (this._metricTimestamp !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricTimestamp = this._metricTimestamp;
        }
        if (this._metricUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricUnit = this._metricUnit;
        }
        if (this._metricValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricValue = this._metricValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudwatchMetricActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricName = undefined;
            this._metricNamespace = undefined;
            this._metricTimestamp = undefined;
            this._metricUnit = undefined;
            this._metricValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricName = value.metricName;
            this._metricNamespace = value.metricNamespace;
            this._metricTimestamp = value.metricTimestamp;
            this._metricUnit = value.metricUnit;
            this._metricValue = value.metricValue;
            this._roleArn = value.roleArn;
        }
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // metric_namespace - computed: true, optional: true, required: false
    private _metricNamespace?: string; 
    public get metricNamespace() {
        return this.getStringAttribute('metric_namespace');
    }
    public set metricNamespace(value: string) {
        this._metricNamespace = value;
    }
    public resetMetricNamespace() {
        this._metricNamespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNamespaceInput() {
        return this._metricNamespace;
    }

    // metric_timestamp - computed: true, optional: true, required: false
    private _metricTimestamp?: string; 
    public get metricTimestamp() {
        return this.getStringAttribute('metric_timestamp');
    }
    public set metricTimestamp(value: string) {
        this._metricTimestamp = value;
    }
    public resetMetricTimestamp() {
        this._metricTimestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricTimestampInput() {
        return this._metricTimestamp;
    }

    // metric_unit - computed: true, optional: true, required: false
    private _metricUnit?: string; 
    public get metricUnit() {
        return this.getStringAttribute('metric_unit');
    }
    public set metricUnit(value: string) {
        this._metricUnit = value;
    }
    public resetMetricUnit() {
        this._metricUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricUnitInput() {
        return this._metricUnit;
    }

    // metric_value - computed: true, optional: true, required: false
    private _metricValue?: string; 
    public get metricValue() {
        return this.getStringAttribute('metric_value');
    }
    public set metricValue(value: string) {
        this._metricValue = value;
    }
    public resetMetricValue() {
        this._metricValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricValueInput() {
        return this._metricValue;
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
export interface PutItemInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#table_name CcTopicRule#table_name}
    */
    readonly tableName?: string;
}
export class PutItemInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PutItemInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PutItemInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tableName = value.tableName;
        }
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
export interface DynamoDBv2ActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#put_item CcTopicRule#put_item}
    */
    readonly putItem?: PutItemInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class DynamoDBv2ActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynamoDBv2ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._putItem?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.putItem = this._putItem?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamoDBv2ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._putItem.internalValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._putItem.internalValue = value.putItem;
            this._roleArn = value.roleArn;
        }
    }

    // put_item - computed: true, optional: true, required: false
    private _putItem = new PutItemInputPropertyOutputReference(this, "put_item");
    public get putItem() {
        return this._putItem;
    }
    public putPutItem(value: PutItemInputProperty) {
        this._putItem.internalValue = value;
    }
    public resetPutItem() {
        this._putItem.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get putItemInput() {
        return this._putItem.internalValue;
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
export interface DynamoDBActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#hash_key_field CcTopicRule#hash_key_field}
    */
    readonly hashKeyField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#hash_key_type CcTopicRule#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#hash_key_value CcTopicRule#hash_key_value}
    */
    readonly hashKeyValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#payload_field CcTopicRule#payload_field}
    */
    readonly payloadField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#range_key_field CcTopicRule#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#range_key_type CcTopicRule#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#range_key_value CcTopicRule#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#table_name CcTopicRule#table_name}
    */
    readonly tableName?: string;
}
export class DynamoDBActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynamoDBActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hashKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyField = this._hashKeyField;
        }
        if (this._hashKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyType = this._hashKeyType;
        }
        if (this._hashKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyValue = this._hashKeyValue;
        }
        if (this._payloadField !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadField = this._payloadField;
        }
        if (this._rangeKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyField = this._rangeKeyField;
        }
        if (this._rangeKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyType = this._rangeKeyType;
        }
        if (this._rangeKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyValue = this._rangeKeyValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamoDBActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hashKeyField = undefined;
            this._hashKeyType = undefined;
            this._hashKeyValue = undefined;
            this._payloadField = undefined;
            this._rangeKeyField = undefined;
            this._rangeKeyType = undefined;
            this._rangeKeyValue = undefined;
            this._roleArn = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hashKeyField = value.hashKeyField;
            this._hashKeyType = value.hashKeyType;
            this._hashKeyValue = value.hashKeyValue;
            this._payloadField = value.payloadField;
            this._rangeKeyField = value.rangeKeyField;
            this._rangeKeyType = value.rangeKeyType;
            this._rangeKeyValue = value.rangeKeyValue;
            this._roleArn = value.roleArn;
            this._tableName = value.tableName;
        }
    }

    // hash_key_field - computed: true, optional: true, required: false
    private _hashKeyField?: string; 
    public get hashKeyField() {
        return this.getStringAttribute('hash_key_field');
    }
    public set hashKeyField(value: string) {
        this._hashKeyField = value;
    }
    public resetHashKeyField() {
        this._hashKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyFieldInput() {
        return this._hashKeyField;
    }

    // hash_key_type - computed: true, optional: true, required: false
    private _hashKeyType?: string; 
    public get hashKeyType() {
        return this.getStringAttribute('hash_key_type');
    }
    public set hashKeyType(value: string) {
        this._hashKeyType = value;
    }
    public resetHashKeyType() {
        this._hashKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyTypeInput() {
        return this._hashKeyType;
    }

    // hash_key_value - computed: true, optional: true, required: false
    private _hashKeyValue?: string; 
    public get hashKeyValue() {
        return this.getStringAttribute('hash_key_value');
    }
    public set hashKeyValue(value: string) {
        this._hashKeyValue = value;
    }
    public resetHashKeyValue() {
        this._hashKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyValueInput() {
        return this._hashKeyValue;
    }

    // payload_field - computed: true, optional: true, required: false
    private _payloadField?: string; 
    public get payloadField() {
        return this.getStringAttribute('payload_field');
    }
    public set payloadField(value: string) {
        this._payloadField = value;
    }
    public resetPayloadField() {
        this._payloadField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFieldInput() {
        return this._payloadField;
    }

    // range_key_field - computed: true, optional: true, required: false
    private _rangeKeyField?: string; 
    public get rangeKeyField() {
        return this.getStringAttribute('range_key_field');
    }
    public set rangeKeyField(value: string) {
        this._rangeKeyField = value;
    }
    public resetRangeKeyField() {
        this._rangeKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyFieldInput() {
        return this._rangeKeyField;
    }

    // range_key_type - computed: true, optional: true, required: false
    private _rangeKeyType?: string; 
    public get rangeKeyType() {
        return this.getStringAttribute('range_key_type');
    }
    public set rangeKeyType(value: string) {
        this._rangeKeyType = value;
    }
    public resetRangeKeyType() {
        this._rangeKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyTypeInput() {
        return this._rangeKeyType;
    }

    // range_key_value - computed: true, optional: true, required: false
    private _rangeKeyValue?: string; 
    public get rangeKeyValue() {
        return this.getStringAttribute('range_key_value');
    }
    public set rangeKeyValue(value: string) {
        this._rangeKeyValue = value;
    }
    public resetRangeKeyValue() {
        this._rangeKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyValueInput() {
        return this._rangeKeyValue;
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
export interface ElasticsearchActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#endpoint CcTopicRule#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#id CcTopicRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#index CcTopicRule#index}
    */
    readonly index?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#type CcTopicRule#type}
    */
    readonly type?: string;
}
export class ElasticsearchActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ElasticsearchActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._index !== undefined) {
            hasAnyValues = true;
            internalValueResult.index = this._index;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElasticsearchActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpoint = undefined;
            this._id = undefined;
            this._index = undefined;
            this._roleArn = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpoint = value.endpoint;
            this._id = value.id;
            this._index = value.index;
            this._roleArn = value.roleArn;
            this._type = value.type;
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

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // index - computed: true, optional: true, required: false
    private _index?: string; 
    public get index() {
        return this.getStringAttribute('index');
    }
    public set index(value: string) {
        this._index = value;
    }
    public resetIndex() {
        this._index = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexInput() {
        return this._index;
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
}
export interface FirehoseActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_mode CcTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#delivery_stream_name CcTopicRule#delivery_stream_name}
    */
    readonly deliveryStreamName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#separator CcTopicRule#separator}
    */
    readonly separator?: string;
}
export class FirehoseActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirehoseActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchMode = this._batchMode;
        }
        if (this._deliveryStreamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStreamName = this._deliveryStreamName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._separator !== undefined) {
            hasAnyValues = true;
            internalValueResult.separator = this._separator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirehoseActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchMode = undefined;
            this._deliveryStreamName = undefined;
            this._roleArn = undefined;
            this._separator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchMode = value.batchMode;
            this._deliveryStreamName = value.deliveryStreamName;
            this._roleArn = value.roleArn;
            this._separator = value.separator;
        }
    }

    // batch_mode - computed: true, optional: true, required: false
    private _batchMode?: boolean | cdktn.IResolvable; 
    public get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    public set batchMode(value: boolean | cdktn.IResolvable) {
        this._batchMode = value;
    }
    public resetBatchMode() {
        this._batchMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchModeInput() {
        return this._batchMode;
    }

    // delivery_stream_name - computed: true, optional: true, required: false
    private _deliveryStreamName?: string; 
    public get deliveryStreamName() {
        return this.getStringAttribute('delivery_stream_name');
    }
    public set deliveryStreamName(value: string) {
        this._deliveryStreamName = value;
    }
    public resetDeliveryStreamName() {
        this._deliveryStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamNameInput() {
        return this._deliveryStreamName;
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

    // separator - computed: true, optional: true, required: false
    private _separator?: string; 
    public get separator() {
        return this.getStringAttribute('separator');
    }
    public set separator(value: string) {
        this._separator = value;
    }
    public resetSeparator() {
        this._separator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get separatorInput() {
        return this._separator;
    }
}
export interface SigV4AuthorizationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#service_name CcTopicRule#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#signing_region CcTopicRule#signing_region}
    */
    readonly signingRegion?: string;
}
export class SigV4AuthorizationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SigV4AuthorizationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._serviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceName = this._serviceName;
        }
        if (this._signingRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.signingRegion = this._signingRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SigV4AuthorizationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._serviceName = undefined;
            this._signingRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._serviceName = value.serviceName;
            this._signingRegion = value.signingRegion;
        }
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

    // service_name - computed: true, optional: true, required: false
    private _serviceName?: string; 
    public get serviceName() {
        return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
        this._serviceName = value;
    }
    public resetServiceName() {
        this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
        return this._serviceName;
    }

    // signing_region - computed: true, optional: true, required: false
    private _signingRegion?: string; 
    public get signingRegion() {
        return this.getStringAttribute('signing_region');
    }
    public set signingRegion(value: string) {
        this._signingRegion = value;
    }
    public resetSigningRegion() {
        this._signingRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signingRegionInput() {
        return this._signingRegion;
    }
}
export interface HttpAuthorizationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#sigv_4 CcTopicRule#sigv_4}
    */
    readonly sigv4?: SigV4AuthorizationProperty;
}
export class HttpAuthorizationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpAuthorizationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sigv4?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sigv4 = this._sigv4?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpAuthorizationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sigv4.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sigv4.internalValue = value.sigv4;
        }
    }

    // sigv_4 - computed: true, optional: true, required: false
    private _sigv4 = new SigV4AuthorizationPropertyOutputReference(this, "sigv_4");
    public get sigv4() {
        return this._sigv4;
    }
    public putSigv4(value: SigV4AuthorizationProperty) {
        this._sigv4.internalValue = value;
    }
    public resetSigv4() {
        this._sigv4.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sigv4Input() {
        return this._sigv4.internalValue;
    }
}
export interface BatchConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_across_topics CcTopicRule#batch_across_topics}
    */
    readonly batchAcrossTopics?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#max_batch_open_ms CcTopicRule#max_batch_open_ms}
    */
    readonly maxBatchOpenMs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#max_batch_size CcTopicRule#max_batch_size}
    */
    readonly maxBatchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#max_batch_size_bytes CcTopicRule#max_batch_size_bytes}
    */
    readonly maxBatchSizeBytes?: number;
}
export class BatchConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BatchConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchAcrossTopics !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchAcrossTopics = this._batchAcrossTopics;
        }
        if (this._maxBatchOpenMs !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxBatchOpenMs = this._maxBatchOpenMs;
        }
        if (this._maxBatchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxBatchSize = this._maxBatchSize;
        }
        if (this._maxBatchSizeBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxBatchSizeBytes = this._maxBatchSizeBytes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchAcrossTopics = undefined;
            this._maxBatchOpenMs = undefined;
            this._maxBatchSize = undefined;
            this._maxBatchSizeBytes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchAcrossTopics = value.batchAcrossTopics;
            this._maxBatchOpenMs = value.maxBatchOpenMs;
            this._maxBatchSize = value.maxBatchSize;
            this._maxBatchSizeBytes = value.maxBatchSizeBytes;
        }
    }

    // batch_across_topics - computed: true, optional: true, required: false
    private _batchAcrossTopics?: boolean | cdktn.IResolvable; 
    public get batchAcrossTopics() {
        return this.getBooleanAttribute('batch_across_topics');
    }
    public set batchAcrossTopics(value: boolean | cdktn.IResolvable) {
        this._batchAcrossTopics = value;
    }
    public resetBatchAcrossTopics() {
        this._batchAcrossTopics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchAcrossTopicsInput() {
        return this._batchAcrossTopics;
    }

    // max_batch_open_ms - computed: true, optional: true, required: false
    private _maxBatchOpenMs?: number; 
    public get maxBatchOpenMs() {
        return this.getNumberAttribute('max_batch_open_ms');
    }
    public set maxBatchOpenMs(value: number) {
        this._maxBatchOpenMs = value;
    }
    public resetMaxBatchOpenMs() {
        this._maxBatchOpenMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxBatchOpenMsInput() {
        return this._maxBatchOpenMs;
    }

    // max_batch_size - computed: true, optional: true, required: false
    private _maxBatchSize?: number; 
    public get maxBatchSize() {
        return this.getNumberAttribute('max_batch_size');
    }
    public set maxBatchSize(value: number) {
        this._maxBatchSize = value;
    }
    public resetMaxBatchSize() {
        this._maxBatchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxBatchSizeInput() {
        return this._maxBatchSize;
    }

    // max_batch_size_bytes - computed: true, optional: true, required: false
    private _maxBatchSizeBytes?: number; 
    public get maxBatchSizeBytes() {
        return this.getNumberAttribute('max_batch_size_bytes');
    }
    public set maxBatchSizeBytes(value: number) {
        this._maxBatchSizeBytes = value;
    }
    public resetMaxBatchSizeBytes() {
        this._maxBatchSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxBatchSizeBytesInput() {
        return this._maxBatchSizeBytes;
    }
}
export interface HttpActionHeaderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#key CcTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class HttpActionHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): HttpActionHeaderProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: HttpActionHeaderProperty | cdktn.IResolvable | undefined) {
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

export class HttpActionHeaderPropertyList extends cdktn.ComplexList {
    public internalValue? : HttpActionHeaderProperty[] | cdktn.IResolvable

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
    public get(index: number): HttpActionHeaderPropertyOutputReference {
        return new HttpActionHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HttpActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#auth CcTopicRule#auth}
    */
    readonly auth?: HttpAuthorizationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_config CcTopicRule#batch_config}
    */
    readonly batchConfig?: BatchConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#confirmation_url CcTopicRule#confirmation_url}
    */
    readonly confirmationUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#enable_batching CcTopicRule#enable_batching}
    */
    readonly enableBatching?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#headers CcTopicRule#headers}
    */
    readonly headers?: HttpActionHeaderProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#url CcTopicRule#url}
    */
    readonly url?: string;
}
export class HttpActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._auth?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auth = this._auth?.internalValue;
        }
        if (this._batchConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchConfig = this._batchConfig?.internalValue;
        }
        if (this._confirmationUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.confirmationUrl = this._confirmationUrl;
        }
        if (this._enableBatching !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableBatching = this._enableBatching;
        }
        if (this._headers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers?.internalValue;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._auth.internalValue = undefined;
            this._batchConfig.internalValue = undefined;
            this._confirmationUrl = undefined;
            this._enableBatching = undefined;
            this._headers.internalValue = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._auth.internalValue = value.auth;
            this._batchConfig.internalValue = value.batchConfig;
            this._confirmationUrl = value.confirmationUrl;
            this._enableBatching = value.enableBatching;
            this._headers.internalValue = value.headers;
            this._url = value.url;
        }
    }

    // auth - computed: true, optional: true, required: false
    private _auth = new HttpAuthorizationPropertyOutputReference(this, "auth");
    public get auth() {
        return this._auth;
    }
    public putAuth(value: HttpAuthorizationProperty) {
        this._auth.internalValue = value;
    }
    public resetAuth() {
        this._auth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authInput() {
        return this._auth.internalValue;
    }

    // batch_config - computed: true, optional: true, required: false
    private _batchConfig = new BatchConfigPropertyOutputReference(this, "batch_config");
    public get batchConfig() {
        return this._batchConfig;
    }
    public putBatchConfig(value: BatchConfigProperty) {
        this._batchConfig.internalValue = value;
    }
    public resetBatchConfig() {
        this._batchConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchConfigInput() {
        return this._batchConfig.internalValue;
    }

    // confirmation_url - computed: true, optional: true, required: false
    private _confirmationUrl?: string; 
    public get confirmationUrl() {
        return this.getStringAttribute('confirmation_url');
    }
    public set confirmationUrl(value: string) {
        this._confirmationUrl = value;
    }
    public resetConfirmationUrl() {
        this._confirmationUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confirmationUrlInput() {
        return this._confirmationUrl;
    }

    // enable_batching - computed: true, optional: true, required: false
    private _enableBatching?: boolean | cdktn.IResolvable; 
    public get enableBatching() {
        return this.getBooleanAttribute('enable_batching');
    }
    public set enableBatching(value: boolean | cdktn.IResolvable) {
        this._enableBatching = value;
    }
    public resetEnableBatching() {
        this._enableBatching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableBatchingInput() {
        return this._enableBatching;
    }

    // headers - computed: true, optional: true, required: false
    private _headers = new HttpActionHeaderPropertyList(this, "headers", false);
    public get headers() {
        return this._headers;
    }
    public putHeaders(value: HttpActionHeaderProperty[] | cdktn.IResolvable) {
        this._headers.internalValue = value;
    }
    public resetHeaders() {
        this._headers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
        return this._headers.internalValue;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}
export interface IotAnalyticsActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_mode CcTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#channel_name CcTopicRule#channel_name}
    */
    readonly channelName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class IotAnalyticsActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotAnalyticsActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchMode = this._batchMode;
        }
        if (this._channelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelName = this._channelName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotAnalyticsActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchMode = undefined;
            this._channelName = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchMode = value.batchMode;
            this._channelName = value.channelName;
            this._roleArn = value.roleArn;
        }
    }

    // batch_mode - computed: true, optional: true, required: false
    private _batchMode?: boolean | cdktn.IResolvable; 
    public get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    public set batchMode(value: boolean | cdktn.IResolvable) {
        this._batchMode = value;
    }
    public resetBatchMode() {
        this._batchMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchModeInput() {
        return this._batchMode;
    }

    // channel_name - computed: true, optional: true, required: false
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    public resetChannelName() {
        this._channelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
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
export interface IotEventsActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_mode CcTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#input_name CcTopicRule#input_name}
    */
    readonly inputName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#message_id CcTopicRule#message_id}
    */
    readonly messageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class IotEventsActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotEventsActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchMode = this._batchMode;
        }
        if (this._inputName !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputName = this._inputName;
        }
        if (this._messageId !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageId = this._messageId;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotEventsActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchMode = undefined;
            this._inputName = undefined;
            this._messageId = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchMode = value.batchMode;
            this._inputName = value.inputName;
            this._messageId = value.messageId;
            this._roleArn = value.roleArn;
        }
    }

    // batch_mode - computed: true, optional: true, required: false
    private _batchMode?: boolean | cdktn.IResolvable; 
    public get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    public set batchMode(value: boolean | cdktn.IResolvable) {
        this._batchMode = value;
    }
    public resetBatchMode() {
        this._batchMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchModeInput() {
        return this._batchMode;
    }

    // input_name - computed: true, optional: true, required: false
    private _inputName?: string; 
    public get inputName() {
        return this.getStringAttribute('input_name');
    }
    public set inputName(value: string) {
        this._inputName = value;
    }
    public resetInputName() {
        this._inputName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputNameInput() {
        return this._inputName;
    }

    // message_id - computed: true, optional: true, required: false
    private _messageId?: string; 
    public get messageId() {
        return this.getStringAttribute('message_id');
    }
    public set messageId(value: string) {
        this._messageId = value;
    }
    public resetMessageId() {
        this._messageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageIdInput() {
        return this._messageId;
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
export interface AssetPropertyTimestampProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#offset_in_nanos CcTopicRule#offset_in_nanos}
    */
    readonly offsetInNanos?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#time_in_seconds CcTopicRule#time_in_seconds}
    */
    readonly timeInSeconds?: string;
}
export class AssetPropertyTimestampPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssetPropertyTimestampProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._offsetInNanos !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetInNanos = this._offsetInNanos;
        }
        if (this._timeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeInSeconds = this._timeInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetPropertyTimestampProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._offsetInNanos = undefined;
            this._timeInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._offsetInNanos = value.offsetInNanos;
            this._timeInSeconds = value.timeInSeconds;
        }
    }

    // offset_in_nanos - computed: true, optional: true, required: false
    private _offsetInNanos?: string; 
    public get offsetInNanos() {
        return this.getStringAttribute('offset_in_nanos');
    }
    public set offsetInNanos(value: string) {
        this._offsetInNanos = value;
    }
    public resetOffsetInNanos() {
        this._offsetInNanos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetInNanosInput() {
        return this._offsetInNanos;
    }

    // time_in_seconds - computed: true, optional: true, required: false
    private _timeInSeconds?: string; 
    public get timeInSeconds() {
        return this.getStringAttribute('time_in_seconds');
    }
    public set timeInSeconds(value: string) {
        this._timeInSeconds = value;
    }
    public resetTimeInSeconds() {
        this._timeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeInSecondsInput() {
        return this._timeInSeconds;
    }
}
export interface AssetPropertyVariantProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#boolean_value CcTopicRule#boolean_value}
    */
    readonly booleanValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#double_value CcTopicRule#double_value}
    */
    readonly doubleValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#integer_value CcTopicRule#integer_value}
    */
    readonly integerValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#string_value CcTopicRule#string_value}
    */
    readonly stringValue?: string;
}
export class AssetPropertyVariantPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssetPropertyVariantProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._booleanValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanValue = this._booleanValue;
        }
        if (this._doubleValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.doubleValue = this._doubleValue;
        }
        if (this._integerValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integerValue = this._integerValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetPropertyVariantProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._integerValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanValue = value.booleanValue;
            this._doubleValue = value.doubleValue;
            this._integerValue = value.integerValue;
            this._stringValue = value.stringValue;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: string; 
    public get booleanValue() {
        return this.getStringAttribute('boolean_value');
    }
    public set booleanValue(value: string) {
        this._booleanValue = value;
    }
    public resetBooleanValue() {
        this._booleanValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanValueInput() {
        return this._booleanValue;
    }

    // double_value - computed: true, optional: true, required: false
    private _doubleValue?: string; 
    public get doubleValue() {
        return this.getStringAttribute('double_value');
    }
    public set doubleValue(value: string) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // integer_value - computed: true, optional: true, required: false
    private _integerValue?: string; 
    public get integerValue() {
        return this.getStringAttribute('integer_value');
    }
    public set integerValue(value: string) {
        this._integerValue = value;
    }
    public resetIntegerValue() {
        this._integerValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integerValueInput() {
        return this._integerValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}
export interface AssetPropertyValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#quality CcTopicRule#quality}
    */
    readonly quality?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#timestamp CcTopicRule#timestamp}
    */
    readonly timestamp?: AssetPropertyTimestampProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: AssetPropertyVariantProperty;
}
export class AssetPropertyValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssetPropertyValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._quality !== undefined) {
            hasAnyValues = true;
            internalValueResult.quality = this._quality;
        }
        if (this._timestamp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp?.internalValue;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssetPropertyValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._quality = undefined;
            this._timestamp.internalValue = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._quality = value.quality;
            this._timestamp.internalValue = value.timestamp;
            this._value.internalValue = value.value;
        }
    }

    // quality - computed: true, optional: true, required: false
    private _quality?: string; 
    public get quality() {
        return this.getStringAttribute('quality');
    }
    public set quality(value: string) {
        this._quality = value;
    }
    public resetQuality() {
        this._quality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualityInput() {
        return this._quality;
    }

    // timestamp - computed: true, optional: true, required: false
    private _timestamp = new AssetPropertyTimestampPropertyOutputReference(this, "timestamp");
    public get timestamp() {
        return this._timestamp;
    }
    public putTimestamp(value: AssetPropertyTimestampProperty) {
        this._timestamp.internalValue = value;
    }
    public resetTimestamp() {
        this._timestamp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp.internalValue;
    }

    // value - computed: true, optional: true, required: false
    private _value = new AssetPropertyVariantPropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: AssetPropertyVariantProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class AssetPropertyValuePropertyList extends cdktn.ComplexList {
    public internalValue? : AssetPropertyValueProperty[] | cdktn.IResolvable

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
    public get(index: number): AssetPropertyValuePropertyOutputReference {
        return new AssetPropertyValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PutAssetPropertyValueEntryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#asset_id CcTopicRule#asset_id}
    */
    readonly assetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#entry_id CcTopicRule#entry_id}
    */
    readonly entryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#property_alias CcTopicRule#property_alias}
    */
    readonly propertyAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#property_id CcTopicRule#property_id}
    */
    readonly propertyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#property_values CcTopicRule#property_values}
    */
    readonly propertyValues?: AssetPropertyValueProperty[] | cdktn.IResolvable;
}
export class PutAssetPropertyValueEntryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PutAssetPropertyValueEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.assetId = this._assetId;
        }
        if (this._entryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryId = this._entryId;
        }
        if (this._propertyAlias !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyAlias = this._propertyAlias;
        }
        if (this._propertyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyId = this._propertyId;
        }
        if (this._propertyValues?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyValues = this._propertyValues?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PutAssetPropertyValueEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assetId = undefined;
            this._entryId = undefined;
            this._propertyAlias = undefined;
            this._propertyId = undefined;
            this._propertyValues.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assetId = value.assetId;
            this._entryId = value.entryId;
            this._propertyAlias = value.propertyAlias;
            this._propertyId = value.propertyId;
            this._propertyValues.internalValue = value.propertyValues;
        }
    }

    // asset_id - computed: true, optional: true, required: false
    private _assetId?: string; 
    public get assetId() {
        return this.getStringAttribute('asset_id');
    }
    public set assetId(value: string) {
        this._assetId = value;
    }
    public resetAssetId() {
        this._assetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetIdInput() {
        return this._assetId;
    }

    // entry_id - computed: true, optional: true, required: false
    private _entryId?: string; 
    public get entryId() {
        return this.getStringAttribute('entry_id');
    }
    public set entryId(value: string) {
        this._entryId = value;
    }
    public resetEntryId() {
        this._entryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entryIdInput() {
        return this._entryId;
    }

    // property_alias - computed: true, optional: true, required: false
    private _propertyAlias?: string; 
    public get propertyAlias() {
        return this.getStringAttribute('property_alias');
    }
    public set propertyAlias(value: string) {
        this._propertyAlias = value;
    }
    public resetPropertyAlias() {
        this._propertyAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyAliasInput() {
        return this._propertyAlias;
    }

    // property_id - computed: true, optional: true, required: false
    private _propertyId?: string; 
    public get propertyId() {
        return this.getStringAttribute('property_id');
    }
    public set propertyId(value: string) {
        this._propertyId = value;
    }
    public resetPropertyId() {
        this._propertyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyIdInput() {
        return this._propertyId;
    }

    // property_values - computed: true, optional: true, required: false
    private _propertyValues = new AssetPropertyValuePropertyList(this, "property_values", false);
    public get propertyValues() {
        return this._propertyValues;
    }
    public putPropertyValues(value: AssetPropertyValueProperty[] | cdktn.IResolvable) {
        this._propertyValues.internalValue = value;
    }
    public resetPropertyValues() {
        this._propertyValues.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyValuesInput() {
        return this._propertyValues.internalValue;
    }
}

export class PutAssetPropertyValueEntryPropertyList extends cdktn.ComplexList {
    public internalValue? : PutAssetPropertyValueEntryProperty[] | cdktn.IResolvable

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
    public get(index: number): PutAssetPropertyValueEntryPropertyOutputReference {
        return new PutAssetPropertyValueEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IotSiteWiseActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#put_asset_property_value_entries CcTopicRule#put_asset_property_value_entries}
    */
    readonly putAssetPropertyValueEntries?: PutAssetPropertyValueEntryProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class IotSiteWiseActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotSiteWiseActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._putAssetPropertyValueEntries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.putAssetPropertyValueEntries = this._putAssetPropertyValueEntries?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotSiteWiseActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._putAssetPropertyValueEntries.internalValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._putAssetPropertyValueEntries.internalValue = value.putAssetPropertyValueEntries;
            this._roleArn = value.roleArn;
        }
    }

    // put_asset_property_value_entries - computed: true, optional: true, required: false
    private _putAssetPropertyValueEntries = new PutAssetPropertyValueEntryPropertyList(this, "put_asset_property_value_entries", false);
    public get putAssetPropertyValueEntries() {
        return this._putAssetPropertyValueEntries;
    }
    public putPutAssetPropertyValueEntries(value: PutAssetPropertyValueEntryProperty[] | cdktn.IResolvable) {
        this._putAssetPropertyValueEntries.internalValue = value;
    }
    public resetPutAssetPropertyValueEntries() {
        this._putAssetPropertyValueEntries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get putAssetPropertyValueEntriesInput() {
        return this._putAssetPropertyValueEntries.internalValue;
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
export interface KafkaActionHeaderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#key CcTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class KafkaActionHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KafkaActionHeaderProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: KafkaActionHeaderProperty | cdktn.IResolvable | undefined) {
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

export class KafkaActionHeaderPropertyList extends cdktn.ComplexList {
    public internalValue? : KafkaActionHeaderProperty[] | cdktn.IResolvable

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
    public get(index: number): KafkaActionHeaderPropertyOutputReference {
        return new KafkaActionHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KafkaActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#client_properties CcTopicRule#client_properties}
    */
    readonly clientProperties?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#destination_arn CcTopicRule#destination_arn}
    */
    readonly destinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#headers CcTopicRule#headers}
    */
    readonly headers?: KafkaActionHeaderProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#key CcTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#partition CcTopicRule#partition}
    */
    readonly partition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#topic CcTopicRule#topic}
    */
    readonly topic?: string;
}
export class KafkaActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KafkaActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientProperties = this._clientProperties;
        }
        if (this._destinationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationArn = this._destinationArn;
        }
        if (this._headers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers?.internalValue;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._partition !== undefined) {
            hasAnyValues = true;
            internalValueResult.partition = this._partition;
        }
        if (this._topic !== undefined) {
            hasAnyValues = true;
            internalValueResult.topic = this._topic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KafkaActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientProperties = undefined;
            this._destinationArn = undefined;
            this._headers.internalValue = undefined;
            this._key = undefined;
            this._partition = undefined;
            this._topic = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientProperties = value.clientProperties;
            this._destinationArn = value.destinationArn;
            this._headers.internalValue = value.headers;
            this._key = value.key;
            this._partition = value.partition;
            this._topic = value.topic;
        }
    }

    // client_properties - computed: true, optional: true, required: false
    private _clientProperties?: { [key: string]: string }; 
    public get clientProperties() {
        return this.getStringMapAttribute('client_properties');
    }
    public set clientProperties(value: { [key: string]: string }) {
        this._clientProperties = value;
    }
    public resetClientProperties() {
        this._clientProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientPropertiesInput() {
        return this._clientProperties;
    }

    // destination_arn - computed: true, optional: true, required: false
    private _destinationArn?: string; 
    public get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    public set destinationArn(value: string) {
        this._destinationArn = value;
    }
    public resetDestinationArn() {
        this._destinationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationArnInput() {
        return this._destinationArn;
    }

    // headers - computed: true, optional: true, required: false
    private _headers = new KafkaActionHeaderPropertyList(this, "headers", false);
    public get headers() {
        return this._headers;
    }
    public putHeaders(value: KafkaActionHeaderProperty[] | cdktn.IResolvable) {
        this._headers.internalValue = value;
    }
    public resetHeaders() {
        this._headers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
        return this._headers.internalValue;
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

    // partition - computed: true, optional: true, required: false
    private _partition?: string; 
    public get partition() {
        return this.getStringAttribute('partition');
    }
    public set partition(value: string) {
        this._partition = value;
    }
    public resetPartition() {
        this._partition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionInput() {
        return this._partition;
    }

    // topic - computed: true, optional: true, required: false
    private _topic?: string; 
    public get topic() {
        return this.getStringAttribute('topic');
    }
    public set topic(value: string) {
        this._topic = value;
    }
    public resetTopic() {
        this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicInput() {
        return this._topic;
    }
}
export interface KinesisActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#partition_key CcTopicRule#partition_key}
    */
    readonly partitionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#stream_name CcTopicRule#stream_name}
    */
    readonly streamName?: string;
}
export class KinesisActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._partitionKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionKey = this._partitionKey;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._streamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamName = this._streamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._partitionKey = undefined;
            this._roleArn = undefined;
            this._streamName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._partitionKey = value.partitionKey;
            this._roleArn = value.roleArn;
            this._streamName = value.streamName;
        }
    }

    // partition_key - computed: true, optional: true, required: false
    private _partitionKey?: string; 
    public get partitionKey() {
        return this.getStringAttribute('partition_key');
    }
    public set partitionKey(value: string) {
        this._partitionKey = value;
    }
    public resetPartitionKey() {
        this._partitionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionKeyInput() {
        return this._partitionKey;
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

    // stream_name - computed: true, optional: true, required: false
    private _streamName?: string; 
    public get streamName() {
        return this.getStringAttribute('stream_name');
    }
    public set streamName(value: string) {
        this._streamName = value;
    }
    public resetStreamName() {
        this._streamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamNameInput() {
        return this._streamName;
    }
}
export interface LambdaActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#function_arn CcTopicRule#function_arn}
    */
    readonly functionArn?: string;
}
export class LambdaActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionArn = this._functionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functionArn = value.functionArn;
        }
    }

    // function_arn - computed: true, optional: true, required: false
    private _functionArn?: string; 
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    public set functionArn(value: string) {
        this._functionArn = value;
    }
    public resetFunctionArn() {
        this._functionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionArnInput() {
        return this._functionArn;
    }
}
export interface TimestampProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#unit CcTopicRule#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class TimestampPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimestampProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimestampProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
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
export interface LocationActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#device_id CcTopicRule#device_id}
    */
    readonly deviceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#latitude CcTopicRule#latitude}
    */
    readonly latitude?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#longitude CcTopicRule#longitude}
    */
    readonly longitude?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#timestamp CcTopicRule#timestamp}
    */
    readonly timestamp?: TimestampProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#tracker_name CcTopicRule#tracker_name}
    */
    readonly trackerName?: string;
}
export class LocationActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LocationActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deviceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceId = this._deviceId;
        }
        if (this._latitude !== undefined) {
            hasAnyValues = true;
            internalValueResult.latitude = this._latitude;
        }
        if (this._longitude !== undefined) {
            hasAnyValues = true;
            internalValueResult.longitude = this._longitude;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._timestamp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp?.internalValue;
        }
        if (this._trackerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.trackerName = this._trackerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocationActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceId = undefined;
            this._latitude = undefined;
            this._longitude = undefined;
            this._roleArn = undefined;
            this._timestamp.internalValue = undefined;
            this._trackerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deviceId = value.deviceId;
            this._latitude = value.latitude;
            this._longitude = value.longitude;
            this._roleArn = value.roleArn;
            this._timestamp.internalValue = value.timestamp;
            this._trackerName = value.trackerName;
        }
    }

    // device_id - computed: true, optional: true, required: false
    private _deviceId?: string; 
    public get deviceId() {
        return this.getStringAttribute('device_id');
    }
    public set deviceId(value: string) {
        this._deviceId = value;
    }
    public resetDeviceId() {
        this._deviceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceIdInput() {
        return this._deviceId;
    }

    // latitude - computed: true, optional: true, required: false
    private _latitude?: string; 
    public get latitude() {
        return this.getStringAttribute('latitude');
    }
    public set latitude(value: string) {
        this._latitude = value;
    }
    public resetLatitude() {
        this._latitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get latitudeInput() {
        return this._latitude;
    }

    // longitude - computed: true, optional: true, required: false
    private _longitude?: string; 
    public get longitude() {
        return this.getStringAttribute('longitude');
    }
    public set longitude(value: string) {
        this._longitude = value;
    }
    public resetLongitude() {
        this._longitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get longitudeInput() {
        return this._longitude;
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

    // timestamp - computed: true, optional: true, required: false
    private _timestamp = new TimestampPropertyOutputReference(this, "timestamp");
    public get timestamp() {
        return this._timestamp;
    }
    public putTimestamp(value: TimestampProperty) {
        this._timestamp.internalValue = value;
    }
    public resetTimestamp() {
        this._timestamp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp.internalValue;
    }

    // tracker_name - computed: true, optional: true, required: false
    private _trackerName?: string; 
    public get trackerName() {
        return this.getStringAttribute('tracker_name');
    }
    public set trackerName(value: string) {
        this._trackerName = value;
    }
    public resetTrackerName() {
        this._trackerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trackerNameInput() {
        return this._trackerName;
    }
}
export interface OpenSearchActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#endpoint CcTopicRule#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#id CcTopicRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#index CcTopicRule#index}
    */
    readonly index?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#type CcTopicRule#type}
    */
    readonly type?: string;
}
export class OpenSearchActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenSearchActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._index !== undefined) {
            hasAnyValues = true;
            internalValueResult.index = this._index;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenSearchActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpoint = undefined;
            this._id = undefined;
            this._index = undefined;
            this._roleArn = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpoint = value.endpoint;
            this._id = value.id;
            this._index = value.index;
            this._roleArn = value.roleArn;
            this._type = value.type;
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

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // index - computed: true, optional: true, required: false
    private _index?: string; 
    public get index() {
        return this.getStringAttribute('index');
    }
    public set index(value: string) {
        this._index = value;
    }
    public resetIndex() {
        this._index = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexInput() {
        return this._index;
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
}
export interface UserPropertyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#key CcTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class UserPropertyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UserPropertyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: UserPropertyProperty | cdktn.IResolvable | undefined) {
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

export class UserPropertyPropertyList extends cdktn.ComplexList {
    public internalValue? : UserPropertyProperty[] | cdktn.IResolvable

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
    public get(index: number): UserPropertyPropertyOutputReference {
        return new UserPropertyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RepublishActionHeadersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#content_type CcTopicRule#content_type}
    */
    readonly contentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#correlation_data CcTopicRule#correlation_data}
    */
    readonly correlationData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#message_expiry CcTopicRule#message_expiry}
    */
    readonly messageExpiry?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#payload_format_indicator CcTopicRule#payload_format_indicator}
    */
    readonly payloadFormatIndicator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#response_topic CcTopicRule#response_topic}
    */
    readonly responseTopic?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#user_properties CcTopicRule#user_properties}
    */
    readonly userProperties?: UserPropertyProperty[] | cdktn.IResolvable;
}
export class RepublishActionHeadersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RepublishActionHeadersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._correlationData !== undefined) {
            hasAnyValues = true;
            internalValueResult.correlationData = this._correlationData;
        }
        if (this._messageExpiry !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageExpiry = this._messageExpiry;
        }
        if (this._payloadFormatIndicator !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadFormatIndicator = this._payloadFormatIndicator;
        }
        if (this._responseTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseTopic = this._responseTopic;
        }
        if (this._userProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userProperties = this._userProperties?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RepublishActionHeadersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentType = undefined;
            this._correlationData = undefined;
            this._messageExpiry = undefined;
            this._payloadFormatIndicator = undefined;
            this._responseTopic = undefined;
            this._userProperties.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentType = value.contentType;
            this._correlationData = value.correlationData;
            this._messageExpiry = value.messageExpiry;
            this._payloadFormatIndicator = value.payloadFormatIndicator;
            this._responseTopic = value.responseTopic;
            this._userProperties.internalValue = value.userProperties;
        }
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // correlation_data - computed: true, optional: true, required: false
    private _correlationData?: string; 
    public get correlationData() {
        return this.getStringAttribute('correlation_data');
    }
    public set correlationData(value: string) {
        this._correlationData = value;
    }
    public resetCorrelationData() {
        this._correlationData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get correlationDataInput() {
        return this._correlationData;
    }

    // message_expiry - computed: true, optional: true, required: false
    private _messageExpiry?: string; 
    public get messageExpiry() {
        return this.getStringAttribute('message_expiry');
    }
    public set messageExpiry(value: string) {
        this._messageExpiry = value;
    }
    public resetMessageExpiry() {
        this._messageExpiry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageExpiryInput() {
        return this._messageExpiry;
    }

    // payload_format_indicator - computed: true, optional: true, required: false
    private _payloadFormatIndicator?: string; 
    public get payloadFormatIndicator() {
        return this.getStringAttribute('payload_format_indicator');
    }
    public set payloadFormatIndicator(value: string) {
        this._payloadFormatIndicator = value;
    }
    public resetPayloadFormatIndicator() {
        this._payloadFormatIndicator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFormatIndicatorInput() {
        return this._payloadFormatIndicator;
    }

    // response_topic - computed: true, optional: true, required: false
    private _responseTopic?: string; 
    public get responseTopic() {
        return this.getStringAttribute('response_topic');
    }
    public set responseTopic(value: string) {
        this._responseTopic = value;
    }
    public resetResponseTopic() {
        this._responseTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTopicInput() {
        return this._responseTopic;
    }

    // user_properties - computed: true, optional: true, required: false
    private _userProperties = new UserPropertyPropertyList(this, "user_properties", false);
    public get userProperties() {
        return this._userProperties;
    }
    public putUserProperties(value: UserPropertyProperty[] | cdktn.IResolvable) {
        this._userProperties.internalValue = value;
    }
    public resetUserProperties() {
        this._userProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPropertiesInput() {
        return this._userProperties.internalValue;
    }
}
export interface RepublishActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#headers CcTopicRule#headers}
    */
    readonly headers?: RepublishActionHeadersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#qos CcTopicRule#qos}
    */
    readonly qos?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#topic CcTopicRule#topic}
    */
    readonly topic?: string;
}
export class RepublishActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RepublishActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers?.internalValue;
        }
        if (this._qos !== undefined) {
            hasAnyValues = true;
            internalValueResult.qos = this._qos;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._topic !== undefined) {
            hasAnyValues = true;
            internalValueResult.topic = this._topic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RepublishActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headers.internalValue = undefined;
            this._qos = undefined;
            this._roleArn = undefined;
            this._topic = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headers.internalValue = value.headers;
            this._qos = value.qos;
            this._roleArn = value.roleArn;
            this._topic = value.topic;
        }
    }

    // headers - computed: true, optional: true, required: false
    private _headers = new RepublishActionHeadersPropertyOutputReference(this, "headers");
    public get headers() {
        return this._headers;
    }
    public putHeaders(value: RepublishActionHeadersProperty) {
        this._headers.internalValue = value;
    }
    public resetHeaders() {
        this._headers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
        return this._headers.internalValue;
    }

    // qos - computed: true, optional: true, required: false
    private _qos?: number; 
    public get qos() {
        return this.getNumberAttribute('qos');
    }
    public set qos(value: number) {
        this._qos = value;
    }
    public resetQos() {
        this._qos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qosInput() {
        return this._qos;
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

    // topic - computed: true, optional: true, required: false
    private _topic?: string; 
    public get topic() {
        return this.getStringAttribute('topic');
    }
    public set topic(value: string) {
        this._topic = value;
    }
    public resetTopic() {
        this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicInput() {
        return this._topic;
    }
}
export interface S3ActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#bucket_name CcTopicRule#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#canned_acl CcTopicRule#canned_acl}
    */
    readonly cannedAcl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#key CcTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class S3ActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._cannedAcl !== undefined) {
            hasAnyValues = true;
            internalValueResult.cannedAcl = this._cannedAcl;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._cannedAcl = undefined;
            this._key = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._cannedAcl = value.cannedAcl;
            this._key = value.key;
            this._roleArn = value.roleArn;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // canned_acl - computed: true, optional: true, required: false
    private _cannedAcl?: string; 
    public get cannedAcl() {
        return this.getStringAttribute('canned_acl');
    }
    public set cannedAcl(value: string) {
        this._cannedAcl = value;
    }
    public resetCannedAcl() {
        this._cannedAcl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cannedAclInput() {
        return this._cannedAcl;
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
export interface SnsActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#message_format CcTopicRule#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#target_arn CcTopicRule#target_arn}
    */
    readonly targetArn?: string;
}
export class SnsActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnsActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._messageFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageFormat = this._messageFormat;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._targetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetArn = this._targetArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnsActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._messageFormat = undefined;
            this._roleArn = undefined;
            this._targetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._messageFormat = value.messageFormat;
            this._roleArn = value.roleArn;
            this._targetArn = value.targetArn;
        }
    }

    // message_format - computed: true, optional: true, required: false
    private _messageFormat?: string; 
    public get messageFormat() {
        return this.getStringAttribute('message_format');
    }
    public set messageFormat(value: string) {
        this._messageFormat = value;
    }
    public resetMessageFormat() {
        this._messageFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageFormatInput() {
        return this._messageFormat;
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

    // target_arn - computed: true, optional: true, required: false
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    public resetTargetArn() {
        this._targetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }
}
export interface SqsActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#queue_url CcTopicRule#queue_url}
    */
    readonly queueUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#use_base_64 CcTopicRule#use_base_64}
    */
    readonly useBase64?: boolean | cdktn.IResolvable;
}
export class SqsActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SqsActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._queueUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueUrl = this._queueUrl;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._useBase64 !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBase64 = this._useBase64;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SqsActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._queueUrl = undefined;
            this._roleArn = undefined;
            this._useBase64 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._queueUrl = value.queueUrl;
            this._roleArn = value.roleArn;
            this._useBase64 = value.useBase64;
        }
    }

    // queue_url - computed: true, optional: true, required: false
    private _queueUrl?: string; 
    public get queueUrl() {
        return this.getStringAttribute('queue_url');
    }
    public set queueUrl(value: string) {
        this._queueUrl = value;
    }
    public resetQueueUrl() {
        this._queueUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueUrlInput() {
        return this._queueUrl;
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

    // use_base_64 - computed: true, optional: true, required: false
    private _useBase64?: boolean | cdktn.IResolvable; 
    public get useBase64() {
        return this.getBooleanAttribute('use_base_64');
    }
    public set useBase64(value: boolean | cdktn.IResolvable) {
        this._useBase64 = value;
    }
    public resetUseBase64() {
        this._useBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBase64Input() {
        return this._useBase64;
    }
}
export interface StepFunctionsActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#execution_name_prefix CcTopicRule#execution_name_prefix}
    */
    readonly executionNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#state_machine_name CcTopicRule#state_machine_name}
    */
    readonly stateMachineName?: string;
}
export class StepFunctionsActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepFunctionsActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executionNamePrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionNamePrefix = this._executionNamePrefix;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._stateMachineName !== undefined) {
            hasAnyValues = true;
            internalValueResult.stateMachineName = this._stateMachineName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepFunctionsActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executionNamePrefix = undefined;
            this._roleArn = undefined;
            this._stateMachineName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executionNamePrefix = value.executionNamePrefix;
            this._roleArn = value.roleArn;
            this._stateMachineName = value.stateMachineName;
        }
    }

    // execution_name_prefix - computed: true, optional: true, required: false
    private _executionNamePrefix?: string; 
    public get executionNamePrefix() {
        return this.getStringAttribute('execution_name_prefix');
    }
    public set executionNamePrefix(value: string) {
        this._executionNamePrefix = value;
    }
    public resetExecutionNamePrefix() {
        this._executionNamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionNamePrefixInput() {
        return this._executionNamePrefix;
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

    // state_machine_name - computed: true, optional: true, required: false
    private _stateMachineName?: string; 
    public get stateMachineName() {
        return this.getStringAttribute('state_machine_name');
    }
    public set stateMachineName(value: string) {
        this._stateMachineName = value;
    }
    public resetStateMachineName() {
        this._stateMachineName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateMachineNameInput() {
        return this._stateMachineName;
    }
}
export interface TimestreamDimensionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#name CcTopicRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class TimestreamDimensionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TimestreamDimensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimestreamDimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
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

export class TimestreamDimensionPropertyList extends cdktn.ComplexList {
    public internalValue? : TimestreamDimensionProperty[] | cdktn.IResolvable

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
    public get(index: number): TimestreamDimensionPropertyOutputReference {
        return new TimestreamDimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TimestreamTimestampProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#unit CcTopicRule#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class TimestreamTimestampPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimestreamTimestampProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimestreamTimestampProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
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
export interface TimestreamActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#database_name CcTopicRule#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#dimensions CcTopicRule#dimensions}
    */
    readonly dimensions?: TimestreamDimensionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#table_name CcTopicRule#table_name}
    */
    readonly tableName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#timestamp CcTopicRule#timestamp}
    */
    readonly timestamp?: TimestreamTimestampProperty;
}
export class TimestreamActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimestreamActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._timestamp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimestreamActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseName = undefined;
            this._dimensions.internalValue = undefined;
            this._roleArn = undefined;
            this._tableName = undefined;
            this._timestamp.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseName = value.databaseName;
            this._dimensions.internalValue = value.dimensions;
            this._roleArn = value.roleArn;
            this._tableName = value.tableName;
            this._timestamp.internalValue = value.timestamp;
        }
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

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new TimestreamDimensionPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: TimestreamDimensionProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
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

    // timestamp - computed: true, optional: true, required: false
    private _timestamp = new TimestreamTimestampPropertyOutputReference(this, "timestamp");
    public get timestamp() {
        return this._timestamp;
    }
    public putTimestamp(value: TimestreamTimestampProperty) {
        this._timestamp.internalValue = value;
    }
    public resetTimestamp() {
        this._timestamp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp.internalValue;
    }
}
export interface ActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#cloudwatch_alarm CcTopicRule#cloudwatch_alarm}
    */
    readonly cloudwatchAlarm?: CloudwatchAlarmActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#cloudwatch_logs CcTopicRule#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CloudwatchLogsActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#cloudwatch_metric CcTopicRule#cloudwatch_metric}
    */
    readonly cloudwatchMetric?: CloudwatchMetricActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#dynamo_d_bv_2 CcTopicRule#dynamo_d_bv_2}
    */
    readonly dynamoDBv2?: DynamoDBv2ActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#dynamo_db CcTopicRule#dynamo_db}
    */
    readonly dynamoDb?: DynamoDBActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#elasticsearch CcTopicRule#elasticsearch}
    */
    readonly elasticsearch?: ElasticsearchActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#firehose CcTopicRule#firehose}
    */
    readonly firehose?: FirehoseActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#http CcTopicRule#http}
    */
    readonly http?: HttpActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#iot_analytics CcTopicRule#iot_analytics}
    */
    readonly iotAnalytics?: IotAnalyticsActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#iot_events CcTopicRule#iot_events}
    */
    readonly iotEvents?: IotEventsActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#iot_site_wise CcTopicRule#iot_site_wise}
    */
    readonly iotSiteWise?: IotSiteWiseActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#kafka CcTopicRule#kafka}
    */
    readonly kafka?: KafkaActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#kinesis CcTopicRule#kinesis}
    */
    readonly kinesis?: KinesisActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#lambda CcTopicRule#lambda}
    */
    readonly lambda?: LambdaActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#location CcTopicRule#location}
    */
    readonly location?: LocationActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#open_search CcTopicRule#open_search}
    */
    readonly openSearch?: OpenSearchActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#republish CcTopicRule#republish}
    */
    readonly republish?: RepublishActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#s3 CcTopicRule#s3}
    */
    readonly s3?: S3ActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#sns CcTopicRule#sns}
    */
    readonly sns?: SnsActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#sqs CcTopicRule#sqs}
    */
    readonly sqs?: SqsActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#step_functions CcTopicRule#step_functions}
    */
    readonly stepFunctions?: StepFunctionsActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#timestream CcTopicRule#timestream}
    */
    readonly timestream?: TimestreamActionProperty;
}
export class ActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchAlarm?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchAlarm = this._cloudwatchAlarm?.internalValue;
        }
        if (this._cloudwatchLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
        }
        if (this._cloudwatchMetric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchMetric = this._cloudwatchMetric?.internalValue;
        }
        if (this._dynamoDBv2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
        }
        if (this._dynamoDb?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
        }
        if (this._elasticsearch?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
        }
        if (this._firehose?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehose = this._firehose?.internalValue;
        }
        if (this._http?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.http = this._http?.internalValue;
        }
        if (this._iotAnalytics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotAnalytics = this._iotAnalytics?.internalValue;
        }
        if (this._iotEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotEvents = this._iotEvents?.internalValue;
        }
        if (this._iotSiteWise?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
        }
        if (this._kafka?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kafka = this._kafka?.internalValue;
        }
        if (this._kinesis?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesis = this._kinesis?.internalValue;
        }
        if (this._lambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambda = this._lambda?.internalValue;
        }
        if (this._location?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location?.internalValue;
        }
        if (this._openSearch?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openSearch = this._openSearch?.internalValue;
        }
        if (this._republish?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.republish = this._republish?.internalValue;
        }
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        if (this._sns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sns = this._sns?.internalValue;
        }
        if (this._sqs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqs = this._sqs?.internalValue;
        }
        if (this._stepFunctions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stepFunctions = this._stepFunctions?.internalValue;
        }
        if (this._timestream?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestream = this._timestream?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchAlarm.internalValue = undefined;
            this._cloudwatchLogs.internalValue = undefined;
            this._cloudwatchMetric.internalValue = undefined;
            this._dynamoDBv2.internalValue = undefined;
            this._dynamoDb.internalValue = undefined;
            this._elasticsearch.internalValue = undefined;
            this._firehose.internalValue = undefined;
            this._http.internalValue = undefined;
            this._iotAnalytics.internalValue = undefined;
            this._iotEvents.internalValue = undefined;
            this._iotSiteWise.internalValue = undefined;
            this._kafka.internalValue = undefined;
            this._kinesis.internalValue = undefined;
            this._lambda.internalValue = undefined;
            this._location.internalValue = undefined;
            this._openSearch.internalValue = undefined;
            this._republish.internalValue = undefined;
            this._s3.internalValue = undefined;
            this._sns.internalValue = undefined;
            this._sqs.internalValue = undefined;
            this._stepFunctions.internalValue = undefined;
            this._timestream.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchAlarm.internalValue = value.cloudwatchAlarm;
            this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
            this._cloudwatchMetric.internalValue = value.cloudwatchMetric;
            this._dynamoDBv2.internalValue = value.dynamoDBv2;
            this._dynamoDb.internalValue = value.dynamoDb;
            this._elasticsearch.internalValue = value.elasticsearch;
            this._firehose.internalValue = value.firehose;
            this._http.internalValue = value.http;
            this._iotAnalytics.internalValue = value.iotAnalytics;
            this._iotEvents.internalValue = value.iotEvents;
            this._iotSiteWise.internalValue = value.iotSiteWise;
            this._kafka.internalValue = value.kafka;
            this._kinesis.internalValue = value.kinesis;
            this._lambda.internalValue = value.lambda;
            this._location.internalValue = value.location;
            this._openSearch.internalValue = value.openSearch;
            this._republish.internalValue = value.republish;
            this._s3.internalValue = value.s3;
            this._sns.internalValue = value.sns;
            this._sqs.internalValue = value.sqs;
            this._stepFunctions.internalValue = value.stepFunctions;
            this._timestream.internalValue = value.timestream;
        }
    }

    // cloudwatch_alarm - computed: true, optional: true, required: false
    private _cloudwatchAlarm = new CloudwatchAlarmActionPropertyOutputReference(this, "cloudwatch_alarm");
    public get cloudwatchAlarm() {
        return this._cloudwatchAlarm;
    }
    public putCloudwatchAlarm(value: CloudwatchAlarmActionProperty) {
        this._cloudwatchAlarm.internalValue = value;
    }
    public resetCloudwatchAlarm() {
        this._cloudwatchAlarm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchAlarmInput() {
        return this._cloudwatchAlarm.internalValue;
    }

    // cloudwatch_logs - computed: true, optional: true, required: false
    private _cloudwatchLogs = new CloudwatchLogsActionPropertyOutputReference(this, "cloudwatch_logs");
    public get cloudwatchLogs() {
        return this._cloudwatchLogs;
    }
    public putCloudwatchLogs(value: CloudwatchLogsActionProperty) {
        this._cloudwatchLogs.internalValue = value;
    }
    public resetCloudwatchLogs() {
        this._cloudwatchLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsInput() {
        return this._cloudwatchLogs.internalValue;
    }

    // cloudwatch_metric - computed: true, optional: true, required: false
    private _cloudwatchMetric = new CloudwatchMetricActionPropertyOutputReference(this, "cloudwatch_metric");
    public get cloudwatchMetric() {
        return this._cloudwatchMetric;
    }
    public putCloudwatchMetric(value: CloudwatchMetricActionProperty) {
        this._cloudwatchMetric.internalValue = value;
    }
    public resetCloudwatchMetric() {
        this._cloudwatchMetric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchMetricInput() {
        return this._cloudwatchMetric.internalValue;
    }

    // dynamo_d_bv_2 - computed: true, optional: true, required: false
    private _dynamoDBv2 = new DynamoDBv2ActionPropertyOutputReference(this, "dynamo_d_bv_2");
    public get dynamoDBv2() {
        return this._dynamoDBv2;
    }
    public putDynamoDBv2(value: DynamoDBv2ActionProperty) {
        this._dynamoDBv2.internalValue = value;
    }
    public resetDynamoDBv2() {
        this._dynamoDBv2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDBv2Input() {
        return this._dynamoDBv2.internalValue;
    }

    // dynamo_db - computed: true, optional: true, required: false
    private _dynamoDb = new DynamoDBActionPropertyOutputReference(this, "dynamo_db");
    public get dynamoDb() {
        return this._dynamoDb;
    }
    public putDynamoDb(value: DynamoDBActionProperty) {
        this._dynamoDb.internalValue = value;
    }
    public resetDynamoDb() {
        this._dynamoDb.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbInput() {
        return this._dynamoDb.internalValue;
    }

    // elasticsearch - computed: true, optional: true, required: false
    private _elasticsearch = new ElasticsearchActionPropertyOutputReference(this, "elasticsearch");
    public get elasticsearch() {
        return this._elasticsearch;
    }
    public putElasticsearch(value: ElasticsearchActionProperty) {
        this._elasticsearch.internalValue = value;
    }
    public resetElasticsearch() {
        this._elasticsearch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticsearchInput() {
        return this._elasticsearch.internalValue;
    }

    // firehose - computed: true, optional: true, required: false
    private _firehose = new FirehoseActionPropertyOutputReference(this, "firehose");
    public get firehose() {
        return this._firehose;
    }
    public putFirehose(value: FirehoseActionProperty) {
        this._firehose.internalValue = value;
    }
    public resetFirehose() {
        this._firehose.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseInput() {
        return this._firehose.internalValue;
    }

    // http - computed: true, optional: true, required: false
    private _http = new HttpActionPropertyOutputReference(this, "http");
    public get http() {
        return this._http;
    }
    public putHttp(value: HttpActionProperty) {
        this._http.internalValue = value;
    }
    public resetHttp() {
        this._http.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpInput() {
        return this._http.internalValue;
    }

    // iot_analytics - computed: true, optional: true, required: false
    private _iotAnalytics = new IotAnalyticsActionPropertyOutputReference(this, "iot_analytics");
    public get iotAnalytics() {
        return this._iotAnalytics;
    }
    public putIotAnalytics(value: IotAnalyticsActionProperty) {
        this._iotAnalytics.internalValue = value;
    }
    public resetIotAnalytics() {
        this._iotAnalytics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotAnalyticsInput() {
        return this._iotAnalytics.internalValue;
    }

    // iot_events - computed: true, optional: true, required: false
    private _iotEvents = new IotEventsActionPropertyOutputReference(this, "iot_events");
    public get iotEvents() {
        return this._iotEvents;
    }
    public putIotEvents(value: IotEventsActionProperty) {
        this._iotEvents.internalValue = value;
    }
    public resetIotEvents() {
        this._iotEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotEventsInput() {
        return this._iotEvents.internalValue;
    }

    // iot_site_wise - computed: true, optional: true, required: false
    private _iotSiteWise = new IotSiteWiseActionPropertyOutputReference(this, "iot_site_wise");
    public get iotSiteWise() {
        return this._iotSiteWise;
    }
    public putIotSiteWise(value: IotSiteWiseActionProperty) {
        this._iotSiteWise.internalValue = value;
    }
    public resetIotSiteWise() {
        this._iotSiteWise.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotSiteWiseInput() {
        return this._iotSiteWise.internalValue;
    }

    // kafka - computed: true, optional: true, required: false
    private _kafka = new KafkaActionPropertyOutputReference(this, "kafka");
    public get kafka() {
        return this._kafka;
    }
    public putKafka(value: KafkaActionProperty) {
        this._kafka.internalValue = value;
    }
    public resetKafka() {
        this._kafka.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaInput() {
        return this._kafka.internalValue;
    }

    // kinesis - computed: true, optional: true, required: false
    private _kinesis = new KinesisActionPropertyOutputReference(this, "kinesis");
    public get kinesis() {
        return this._kinesis;
    }
    public putKinesis(value: KinesisActionProperty) {
        this._kinesis.internalValue = value;
    }
    public resetKinesis() {
        this._kinesis.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisInput() {
        return this._kinesis.internalValue;
    }

    // lambda - computed: true, optional: true, required: false
    private _lambda = new LambdaActionPropertyOutputReference(this, "lambda");
    public get lambda() {
        return this._lambda;
    }
    public putLambda(value: LambdaActionProperty) {
        this._lambda.internalValue = value;
    }
    public resetLambda() {
        this._lambda.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
        return this._lambda.internalValue;
    }

    // location - computed: true, optional: true, required: false
    private _location = new LocationActionPropertyOutputReference(this, "location");
    public get location() {
        return this._location;
    }
    public putLocation(value: LocationActionProperty) {
        this._location.internalValue = value;
    }
    public resetLocation() {
        this._location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location.internalValue;
    }

    // open_search - computed: true, optional: true, required: false
    private _openSearch = new OpenSearchActionPropertyOutputReference(this, "open_search");
    public get openSearch() {
        return this._openSearch;
    }
    public putOpenSearch(value: OpenSearchActionProperty) {
        this._openSearch.internalValue = value;
    }
    public resetOpenSearch() {
        this._openSearch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openSearchInput() {
        return this._openSearch.internalValue;
    }

    // republish - computed: true, optional: true, required: false
    private _republish = new RepublishActionPropertyOutputReference(this, "republish");
    public get republish() {
        return this._republish;
    }
    public putRepublish(value: RepublishActionProperty) {
        this._republish.internalValue = value;
    }
    public resetRepublish() {
        this._republish.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get republishInput() {
        return this._republish.internalValue;
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3ActionPropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3ActionProperty) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }

    // sns - computed: true, optional: true, required: false
    private _sns = new SnsActionPropertyOutputReference(this, "sns");
    public get sns() {
        return this._sns;
    }
    public putSns(value: SnsActionProperty) {
        this._sns.internalValue = value;
    }
    public resetSns() {
        this._sns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsInput() {
        return this._sns.internalValue;
    }

    // sqs - computed: true, optional: true, required: false
    private _sqs = new SqsActionPropertyOutputReference(this, "sqs");
    public get sqs() {
        return this._sqs;
    }
    public putSqs(value: SqsActionProperty) {
        this._sqs.internalValue = value;
    }
    public resetSqs() {
        this._sqs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsInput() {
        return this._sqs.internalValue;
    }

    // step_functions - computed: true, optional: true, required: false
    private _stepFunctions = new StepFunctionsActionPropertyOutputReference(this, "step_functions");
    public get stepFunctions() {
        return this._stepFunctions;
    }
    public putStepFunctions(value: StepFunctionsActionProperty) {
        this._stepFunctions.internalValue = value;
    }
    public resetStepFunctions() {
        this._stepFunctions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepFunctionsInput() {
        return this._stepFunctions.internalValue;
    }

    // timestream - computed: true, optional: true, required: false
    private _timestream = new TimestreamActionPropertyOutputReference(this, "timestream");
    public get timestream() {
        return this._timestream;
    }
    public putTimestream(value: TimestreamActionProperty) {
        this._timestream.internalValue = value;
    }
    public resetTimestream() {
        this._timestream.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestreamInput() {
        return this._timestream.internalValue;
    }
}

export class ActionPropertyList extends cdktn.ComplexList {
    public internalValue? : ActionProperty[] | cdktn.IResolvable

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
    public get(index: number): ActionPropertyOutputReference {
        return new ActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CloudwatchAlarmProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#alarm_name CcTopicRule#alarm_name}
    */
    readonly alarmName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#state_reason CcTopicRule#state_reason}
    */
    readonly stateReason?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#state_value CcTopicRule#state_value}
    */
    readonly stateValue?: string;
}
export class CloudwatchAlarmPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudwatchAlarmProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmName = this._alarmName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._stateReason !== undefined) {
            hasAnyValues = true;
            internalValueResult.stateReason = this._stateReason;
        }
        if (this._stateValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stateValue = this._stateValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudwatchAlarmProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmName = undefined;
            this._roleArn = undefined;
            this._stateReason = undefined;
            this._stateValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmName = value.alarmName;
            this._roleArn = value.roleArn;
            this._stateReason = value.stateReason;
            this._stateValue = value.stateValue;
        }
    }

    // alarm_name - computed: true, optional: true, required: false
    private _alarmName?: string; 
    public get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    public set alarmName(value: string) {
        this._alarmName = value;
    }
    public resetAlarmName() {
        this._alarmName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNameInput() {
        return this._alarmName;
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

    // state_reason - computed: true, optional: true, required: false
    private _stateReason?: string; 
    public get stateReason() {
        return this.getStringAttribute('state_reason');
    }
    public set stateReason(value: string) {
        this._stateReason = value;
    }
    public resetStateReason() {
        this._stateReason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateReasonInput() {
        return this._stateReason;
    }

    // state_value - computed: true, optional: true, required: false
    private _stateValue?: string; 
    public get stateValue() {
        return this.getStringAttribute('state_value');
    }
    public set stateValue(value: string) {
        this._stateValue = value;
    }
    public resetStateValue() {
        this._stateValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateValueInput() {
        return this._stateValue;
    }
}
export interface CloudwatchLogsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_mode CcTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#log_group_name CcTopicRule#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
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
        if (this._batchMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchMode = this._batchMode;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudwatchLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchMode = undefined;
            this._logGroupName = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchMode = value.batchMode;
            this._logGroupName = value.logGroupName;
            this._roleArn = value.roleArn;
        }
    }

    // batch_mode - computed: true, optional: true, required: false
    private _batchMode?: boolean | cdktn.IResolvable; 
    public get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    public set batchMode(value: boolean | cdktn.IResolvable) {
        this._batchMode = value;
    }
    public resetBatchMode() {
        this._batchMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchModeInput() {
        return this._batchMode;
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
export interface CloudwatchMetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#metric_name CcTopicRule#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#metric_namespace CcTopicRule#metric_namespace}
    */
    readonly metricNamespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#metric_timestamp CcTopicRule#metric_timestamp}
    */
    readonly metricTimestamp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#metric_unit CcTopicRule#metric_unit}
    */
    readonly metricUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#metric_value CcTopicRule#metric_value}
    */
    readonly metricValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class CloudwatchMetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudwatchMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._metricNamespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricNamespace = this._metricNamespace;
        }
        if (this._metricTimestamp !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricTimestamp = this._metricTimestamp;
        }
        if (this._metricUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricUnit = this._metricUnit;
        }
        if (this._metricValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricValue = this._metricValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudwatchMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricName = undefined;
            this._metricNamespace = undefined;
            this._metricTimestamp = undefined;
            this._metricUnit = undefined;
            this._metricValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricName = value.metricName;
            this._metricNamespace = value.metricNamespace;
            this._metricTimestamp = value.metricTimestamp;
            this._metricUnit = value.metricUnit;
            this._metricValue = value.metricValue;
            this._roleArn = value.roleArn;
        }
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // metric_namespace - computed: true, optional: true, required: false
    private _metricNamespace?: string; 
    public get metricNamespace() {
        return this.getStringAttribute('metric_namespace');
    }
    public set metricNamespace(value: string) {
        this._metricNamespace = value;
    }
    public resetMetricNamespace() {
        this._metricNamespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNamespaceInput() {
        return this._metricNamespace;
    }

    // metric_timestamp - computed: true, optional: true, required: false
    private _metricTimestamp?: string; 
    public get metricTimestamp() {
        return this.getStringAttribute('metric_timestamp');
    }
    public set metricTimestamp(value: string) {
        this._metricTimestamp = value;
    }
    public resetMetricTimestamp() {
        this._metricTimestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricTimestampInput() {
        return this._metricTimestamp;
    }

    // metric_unit - computed: true, optional: true, required: false
    private _metricUnit?: string; 
    public get metricUnit() {
        return this.getStringAttribute('metric_unit');
    }
    public set metricUnit(value: string) {
        this._metricUnit = value;
    }
    public resetMetricUnit() {
        this._metricUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricUnitInput() {
        return this._metricUnit;
    }

    // metric_value - computed: true, optional: true, required: false
    private _metricValue?: string; 
    public get metricValue() {
        return this.getStringAttribute('metric_value');
    }
    public set metricValue(value: string) {
        this._metricValue = value;
    }
    public resetMetricValue() {
        this._metricValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricValueInput() {
        return this._metricValue;
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
export interface PutItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#table_name CcTopicRule#table_name}
    */
    readonly tableName?: string;
}
export class PutItemPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PutItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PutItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tableName = value.tableName;
        }
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
export interface DynamoDBv2Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#put_item CcTopicRule#put_item}
    */
    readonly putItem?: PutItemProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class DynamoDBv2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynamoDBv2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._putItem?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.putItem = this._putItem?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamoDBv2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._putItem.internalValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._putItem.internalValue = value.putItem;
            this._roleArn = value.roleArn;
        }
    }

    // put_item - computed: true, optional: true, required: false
    private _putItem = new PutItemPropertyOutputReference(this, "put_item");
    public get putItem() {
        return this._putItem;
    }
    public putPutItem(value: PutItemProperty) {
        this._putItem.internalValue = value;
    }
    public resetPutItem() {
        this._putItem.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get putItemInput() {
        return this._putItem.internalValue;
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
export interface DynamoDbProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#hash_key_field CcTopicRule#hash_key_field}
    */
    readonly hashKeyField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#hash_key_type CcTopicRule#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#hash_key_value CcTopicRule#hash_key_value}
    */
    readonly hashKeyValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#payload_field CcTopicRule#payload_field}
    */
    readonly payloadField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#range_key_field CcTopicRule#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#range_key_type CcTopicRule#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#range_key_value CcTopicRule#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#table_name CcTopicRule#table_name}
    */
    readonly tableName?: string;
}
export class DynamoDbPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynamoDbProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hashKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyField = this._hashKeyField;
        }
        if (this._hashKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyType = this._hashKeyType;
        }
        if (this._hashKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashKeyValue = this._hashKeyValue;
        }
        if (this._payloadField !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadField = this._payloadField;
        }
        if (this._rangeKeyField !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyField = this._rangeKeyField;
        }
        if (this._rangeKeyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyType = this._rangeKeyType;
        }
        if (this._rangeKeyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rangeKeyValue = this._rangeKeyValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamoDbProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hashKeyField = undefined;
            this._hashKeyType = undefined;
            this._hashKeyValue = undefined;
            this._payloadField = undefined;
            this._rangeKeyField = undefined;
            this._rangeKeyType = undefined;
            this._rangeKeyValue = undefined;
            this._roleArn = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hashKeyField = value.hashKeyField;
            this._hashKeyType = value.hashKeyType;
            this._hashKeyValue = value.hashKeyValue;
            this._payloadField = value.payloadField;
            this._rangeKeyField = value.rangeKeyField;
            this._rangeKeyType = value.rangeKeyType;
            this._rangeKeyValue = value.rangeKeyValue;
            this._roleArn = value.roleArn;
            this._tableName = value.tableName;
        }
    }

    // hash_key_field - computed: true, optional: true, required: false
    private _hashKeyField?: string; 
    public get hashKeyField() {
        return this.getStringAttribute('hash_key_field');
    }
    public set hashKeyField(value: string) {
        this._hashKeyField = value;
    }
    public resetHashKeyField() {
        this._hashKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyFieldInput() {
        return this._hashKeyField;
    }

    // hash_key_type - computed: true, optional: true, required: false
    private _hashKeyType?: string; 
    public get hashKeyType() {
        return this.getStringAttribute('hash_key_type');
    }
    public set hashKeyType(value: string) {
        this._hashKeyType = value;
    }
    public resetHashKeyType() {
        this._hashKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyTypeInput() {
        return this._hashKeyType;
    }

    // hash_key_value - computed: true, optional: true, required: false
    private _hashKeyValue?: string; 
    public get hashKeyValue() {
        return this.getStringAttribute('hash_key_value');
    }
    public set hashKeyValue(value: string) {
        this._hashKeyValue = value;
    }
    public resetHashKeyValue() {
        this._hashKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyValueInput() {
        return this._hashKeyValue;
    }

    // payload_field - computed: true, optional: true, required: false
    private _payloadField?: string; 
    public get payloadField() {
        return this.getStringAttribute('payload_field');
    }
    public set payloadField(value: string) {
        this._payloadField = value;
    }
    public resetPayloadField() {
        this._payloadField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFieldInput() {
        return this._payloadField;
    }

    // range_key_field - computed: true, optional: true, required: false
    private _rangeKeyField?: string; 
    public get rangeKeyField() {
        return this.getStringAttribute('range_key_field');
    }
    public set rangeKeyField(value: string) {
        this._rangeKeyField = value;
    }
    public resetRangeKeyField() {
        this._rangeKeyField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyFieldInput() {
        return this._rangeKeyField;
    }

    // range_key_type - computed: true, optional: true, required: false
    private _rangeKeyType?: string; 
    public get rangeKeyType() {
        return this.getStringAttribute('range_key_type');
    }
    public set rangeKeyType(value: string) {
        this._rangeKeyType = value;
    }
    public resetRangeKeyType() {
        this._rangeKeyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyTypeInput() {
        return this._rangeKeyType;
    }

    // range_key_value - computed: true, optional: true, required: false
    private _rangeKeyValue?: string; 
    public get rangeKeyValue() {
        return this.getStringAttribute('range_key_value');
    }
    public set rangeKeyValue(value: string) {
        this._rangeKeyValue = value;
    }
    public resetRangeKeyValue() {
        this._rangeKeyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyValueInput() {
        return this._rangeKeyValue;
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
export interface ElasticsearchProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#endpoint CcTopicRule#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#id CcTopicRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#index CcTopicRule#index}
    */
    readonly index?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#type CcTopicRule#type}
    */
    readonly type?: string;
}
export class ElasticsearchPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ElasticsearchProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._index !== undefined) {
            hasAnyValues = true;
            internalValueResult.index = this._index;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElasticsearchProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpoint = undefined;
            this._id = undefined;
            this._index = undefined;
            this._roleArn = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpoint = value.endpoint;
            this._id = value.id;
            this._index = value.index;
            this._roleArn = value.roleArn;
            this._type = value.type;
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

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // index - computed: true, optional: true, required: false
    private _index?: string; 
    public get index() {
        return this.getStringAttribute('index');
    }
    public set index(value: string) {
        this._index = value;
    }
    public resetIndex() {
        this._index = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexInput() {
        return this._index;
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
}
export interface FirehoseProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_mode CcTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#delivery_stream_name CcTopicRule#delivery_stream_name}
    */
    readonly deliveryStreamName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#separator CcTopicRule#separator}
    */
    readonly separator?: string;
}
export class FirehosePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirehoseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchMode = this._batchMode;
        }
        if (this._deliveryStreamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStreamName = this._deliveryStreamName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._separator !== undefined) {
            hasAnyValues = true;
            internalValueResult.separator = this._separator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirehoseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchMode = undefined;
            this._deliveryStreamName = undefined;
            this._roleArn = undefined;
            this._separator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchMode = value.batchMode;
            this._deliveryStreamName = value.deliveryStreamName;
            this._roleArn = value.roleArn;
            this._separator = value.separator;
        }
    }

    // batch_mode - computed: true, optional: true, required: false
    private _batchMode?: boolean | cdktn.IResolvable; 
    public get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    public set batchMode(value: boolean | cdktn.IResolvable) {
        this._batchMode = value;
    }
    public resetBatchMode() {
        this._batchMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchModeInput() {
        return this._batchMode;
    }

    // delivery_stream_name - computed: true, optional: true, required: false
    private _deliveryStreamName?: string; 
    public get deliveryStreamName() {
        return this.getStringAttribute('delivery_stream_name');
    }
    public set deliveryStreamName(value: string) {
        this._deliveryStreamName = value;
    }
    public resetDeliveryStreamName() {
        this._deliveryStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamNameInput() {
        return this._deliveryStreamName;
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

    // separator - computed: true, optional: true, required: false
    private _separator?: string; 
    public get separator() {
        return this.getStringAttribute('separator');
    }
    public set separator(value: string) {
        this._separator = value;
    }
    public resetSeparator() {
        this._separator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get separatorInput() {
        return this._separator;
    }
}
export interface Sigv4Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#service_name CcTopicRule#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#signing_region CcTopicRule#signing_region}
    */
    readonly signingRegion?: string;
}
export class Sigv4PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): Sigv4Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._serviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceName = this._serviceName;
        }
        if (this._signingRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.signingRegion = this._signingRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: Sigv4Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._serviceName = undefined;
            this._signingRegion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._serviceName = value.serviceName;
            this._signingRegion = value.signingRegion;
        }
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

    // service_name - computed: true, optional: true, required: false
    private _serviceName?: string; 
    public get serviceName() {
        return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
        this._serviceName = value;
    }
    public resetServiceName() {
        this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
        return this._serviceName;
    }

    // signing_region - computed: true, optional: true, required: false
    private _signingRegion?: string; 
    public get signingRegion() {
        return this.getStringAttribute('signing_region');
    }
    public set signingRegion(value: string) {
        this._signingRegion = value;
    }
    public resetSigningRegion() {
        this._signingRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signingRegionInput() {
        return this._signingRegion;
    }
}
export interface AuthProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#sigv_4 CcTopicRule#sigv_4}
    */
    readonly sigv4?: Sigv4Property;
}
export class AuthPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sigv4?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sigv4 = this._sigv4?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sigv4.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sigv4.internalValue = value.sigv4;
        }
    }

    // sigv_4 - computed: true, optional: true, required: false
    private _sigv4 = new Sigv4PropertyOutputReference(this, "sigv_4");
    public get sigv4() {
        return this._sigv4;
    }
    public putSigv4(value: Sigv4Property) {
        this._sigv4.internalValue = value;
    }
    public resetSigv4() {
        this._sigv4.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sigv4Input() {
        return this._sigv4.internalValue;
    }
}
export interface TopicRulePayloadErrorActionHttpBatchConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_across_topics CcTopicRule#batch_across_topics}
    */
    readonly batchAcrossTopics?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#max_batch_open_ms CcTopicRule#max_batch_open_ms}
    */
    readonly maxBatchOpenMs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#max_batch_size CcTopicRule#max_batch_size}
    */
    readonly maxBatchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#max_batch_size_bytes CcTopicRule#max_batch_size_bytes}
    */
    readonly maxBatchSizeBytes?: number;
}
export class TopicRulePayloadErrorActionHttpBatchConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TopicRulePayloadErrorActionHttpBatchConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchAcrossTopics !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchAcrossTopics = this._batchAcrossTopics;
        }
        if (this._maxBatchOpenMs !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxBatchOpenMs = this._maxBatchOpenMs;
        }
        if (this._maxBatchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxBatchSize = this._maxBatchSize;
        }
        if (this._maxBatchSizeBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxBatchSizeBytes = this._maxBatchSizeBytes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicRulePayloadErrorActionHttpBatchConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchAcrossTopics = undefined;
            this._maxBatchOpenMs = undefined;
            this._maxBatchSize = undefined;
            this._maxBatchSizeBytes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchAcrossTopics = value.batchAcrossTopics;
            this._maxBatchOpenMs = value.maxBatchOpenMs;
            this._maxBatchSize = value.maxBatchSize;
            this._maxBatchSizeBytes = value.maxBatchSizeBytes;
        }
    }

    // batch_across_topics - computed: true, optional: true, required: false
    private _batchAcrossTopics?: boolean | cdktn.IResolvable; 
    public get batchAcrossTopics() {
        return this.getBooleanAttribute('batch_across_topics');
    }
    public set batchAcrossTopics(value: boolean | cdktn.IResolvable) {
        this._batchAcrossTopics = value;
    }
    public resetBatchAcrossTopics() {
        this._batchAcrossTopics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchAcrossTopicsInput() {
        return this._batchAcrossTopics;
    }

    // max_batch_open_ms - computed: true, optional: true, required: false
    private _maxBatchOpenMs?: number; 
    public get maxBatchOpenMs() {
        return this.getNumberAttribute('max_batch_open_ms');
    }
    public set maxBatchOpenMs(value: number) {
        this._maxBatchOpenMs = value;
    }
    public resetMaxBatchOpenMs() {
        this._maxBatchOpenMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxBatchOpenMsInput() {
        return this._maxBatchOpenMs;
    }

    // max_batch_size - computed: true, optional: true, required: false
    private _maxBatchSize?: number; 
    public get maxBatchSize() {
        return this.getNumberAttribute('max_batch_size');
    }
    public set maxBatchSize(value: number) {
        this._maxBatchSize = value;
    }
    public resetMaxBatchSize() {
        this._maxBatchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxBatchSizeInput() {
        return this._maxBatchSize;
    }

    // max_batch_size_bytes - computed: true, optional: true, required: false
    private _maxBatchSizeBytes?: number; 
    public get maxBatchSizeBytes() {
        return this.getNumberAttribute('max_batch_size_bytes');
    }
    public set maxBatchSizeBytes(value: number) {
        this._maxBatchSizeBytes = value;
    }
    public resetMaxBatchSizeBytes() {
        this._maxBatchSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxBatchSizeBytesInput() {
        return this._maxBatchSizeBytes;
    }
}
export interface TopicRulePayloadErrorActionHttpHeadersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#key CcTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class TopicRulePayloadErrorActionHttpHeadersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TopicRulePayloadErrorActionHttpHeadersProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TopicRulePayloadErrorActionHttpHeadersProperty | cdktn.IResolvable | undefined) {
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

export class TopicRulePayloadErrorActionHttpHeadersPropertyList extends cdktn.ComplexList {
    public internalValue? : TopicRulePayloadErrorActionHttpHeadersProperty[] | cdktn.IResolvable

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
    public get(index: number): TopicRulePayloadErrorActionHttpHeadersPropertyOutputReference {
        return new TopicRulePayloadErrorActionHttpHeadersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HttpProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#auth CcTopicRule#auth}
    */
    readonly auth?: AuthProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_config CcTopicRule#batch_config}
    */
    readonly batchConfig?: TopicRulePayloadErrorActionHttpBatchConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#confirmation_url CcTopicRule#confirmation_url}
    */
    readonly confirmationUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#enable_batching CcTopicRule#enable_batching}
    */
    readonly enableBatching?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#headers CcTopicRule#headers}
    */
    readonly headers?: TopicRulePayloadErrorActionHttpHeadersProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#url CcTopicRule#url}
    */
    readonly url?: string;
}
export class HttpPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._auth?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.auth = this._auth?.internalValue;
        }
        if (this._batchConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchConfig = this._batchConfig?.internalValue;
        }
        if (this._confirmationUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.confirmationUrl = this._confirmationUrl;
        }
        if (this._enableBatching !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableBatching = this._enableBatching;
        }
        if (this._headers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers?.internalValue;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._auth.internalValue = undefined;
            this._batchConfig.internalValue = undefined;
            this._confirmationUrl = undefined;
            this._enableBatching = undefined;
            this._headers.internalValue = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._auth.internalValue = value.auth;
            this._batchConfig.internalValue = value.batchConfig;
            this._confirmationUrl = value.confirmationUrl;
            this._enableBatching = value.enableBatching;
            this._headers.internalValue = value.headers;
            this._url = value.url;
        }
    }

    // auth - computed: true, optional: true, required: false
    private _auth = new AuthPropertyOutputReference(this, "auth");
    public get auth() {
        return this._auth;
    }
    public putAuth(value: AuthProperty) {
        this._auth.internalValue = value;
    }
    public resetAuth() {
        this._auth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authInput() {
        return this._auth.internalValue;
    }

    // batch_config - computed: true, optional: true, required: false
    private _batchConfig = new TopicRulePayloadErrorActionHttpBatchConfigPropertyOutputReference(this, "batch_config");
    public get batchConfig() {
        return this._batchConfig;
    }
    public putBatchConfig(value: TopicRulePayloadErrorActionHttpBatchConfigProperty) {
        this._batchConfig.internalValue = value;
    }
    public resetBatchConfig() {
        this._batchConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchConfigInput() {
        return this._batchConfig.internalValue;
    }

    // confirmation_url - computed: true, optional: true, required: false
    private _confirmationUrl?: string; 
    public get confirmationUrl() {
        return this.getStringAttribute('confirmation_url');
    }
    public set confirmationUrl(value: string) {
        this._confirmationUrl = value;
    }
    public resetConfirmationUrl() {
        this._confirmationUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confirmationUrlInput() {
        return this._confirmationUrl;
    }

    // enable_batching - computed: true, optional: true, required: false
    private _enableBatching?: boolean | cdktn.IResolvable; 
    public get enableBatching() {
        return this.getBooleanAttribute('enable_batching');
    }
    public set enableBatching(value: boolean | cdktn.IResolvable) {
        this._enableBatching = value;
    }
    public resetEnableBatching() {
        this._enableBatching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableBatchingInput() {
        return this._enableBatching;
    }

    // headers - computed: true, optional: true, required: false
    private _headers = new TopicRulePayloadErrorActionHttpHeadersPropertyList(this, "headers", false);
    public get headers() {
        return this._headers;
    }
    public putHeaders(value: TopicRulePayloadErrorActionHttpHeadersProperty[] | cdktn.IResolvable) {
        this._headers.internalValue = value;
    }
    public resetHeaders() {
        this._headers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
        return this._headers.internalValue;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}
export interface IotAnalyticsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_mode CcTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#channel_name CcTopicRule#channel_name}
    */
    readonly channelName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class IotAnalyticsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotAnalyticsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchMode = this._batchMode;
        }
        if (this._channelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.channelName = this._channelName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotAnalyticsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchMode = undefined;
            this._channelName = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchMode = value.batchMode;
            this._channelName = value.channelName;
            this._roleArn = value.roleArn;
        }
    }

    // batch_mode - computed: true, optional: true, required: false
    private _batchMode?: boolean | cdktn.IResolvable; 
    public get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    public set batchMode(value: boolean | cdktn.IResolvable) {
        this._batchMode = value;
    }
    public resetBatchMode() {
        this._batchMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchModeInput() {
        return this._batchMode;
    }

    // channel_name - computed: true, optional: true, required: false
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    public resetChannelName() {
        this._channelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
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
export interface IotEventsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#batch_mode CcTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#input_name CcTopicRule#input_name}
    */
    readonly inputName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#message_id CcTopicRule#message_id}
    */
    readonly messageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class IotEventsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotEventsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchMode = this._batchMode;
        }
        if (this._inputName !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputName = this._inputName;
        }
        if (this._messageId !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageId = this._messageId;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchMode = undefined;
            this._inputName = undefined;
            this._messageId = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchMode = value.batchMode;
            this._inputName = value.inputName;
            this._messageId = value.messageId;
            this._roleArn = value.roleArn;
        }
    }

    // batch_mode - computed: true, optional: true, required: false
    private _batchMode?: boolean | cdktn.IResolvable; 
    public get batchMode() {
        return this.getBooleanAttribute('batch_mode');
    }
    public set batchMode(value: boolean | cdktn.IResolvable) {
        this._batchMode = value;
    }
    public resetBatchMode() {
        this._batchMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchModeInput() {
        return this._batchMode;
    }

    // input_name - computed: true, optional: true, required: false
    private _inputName?: string; 
    public get inputName() {
        return this.getStringAttribute('input_name');
    }
    public set inputName(value: string) {
        this._inputName = value;
    }
    public resetInputName() {
        this._inputName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputNameInput() {
        return this._inputName;
    }

    // message_id - computed: true, optional: true, required: false
    private _messageId?: string; 
    public get messageId() {
        return this.getStringAttribute('message_id');
    }
    public set messageId(value: string) {
        this._messageId = value;
    }
    public resetMessageId() {
        this._messageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageIdInput() {
        return this._messageId;
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
export interface TopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#offset_in_nanos CcTopicRule#offset_in_nanos}
    */
    readonly offsetInNanos?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#time_in_seconds CcTopicRule#time_in_seconds}
    */
    readonly timeInSeconds?: string;
}
export class TopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._offsetInNanos !== undefined) {
            hasAnyValues = true;
            internalValueResult.offsetInNanos = this._offsetInNanos;
        }
        if (this._timeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeInSeconds = this._timeInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._offsetInNanos = undefined;
            this._timeInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._offsetInNanos = value.offsetInNanos;
            this._timeInSeconds = value.timeInSeconds;
        }
    }

    // offset_in_nanos - computed: true, optional: true, required: false
    private _offsetInNanos?: string; 
    public get offsetInNanos() {
        return this.getStringAttribute('offset_in_nanos');
    }
    public set offsetInNanos(value: string) {
        this._offsetInNanos = value;
    }
    public resetOffsetInNanos() {
        this._offsetInNanos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetInNanosInput() {
        return this._offsetInNanos;
    }

    // time_in_seconds - computed: true, optional: true, required: false
    private _timeInSeconds?: string; 
    public get timeInSeconds() {
        return this.getStringAttribute('time_in_seconds');
    }
    public set timeInSeconds(value: string) {
        this._timeInSeconds = value;
    }
    public resetTimeInSeconds() {
        this._timeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeInSecondsInput() {
        return this._timeInSeconds;
    }
}
export interface ValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#boolean_value CcTopicRule#boolean_value}
    */
    readonly booleanValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#double_value CcTopicRule#double_value}
    */
    readonly doubleValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#integer_value CcTopicRule#integer_value}
    */
    readonly integerValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#string_value CcTopicRule#string_value}
    */
    readonly stringValue?: string;
}
export class ValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._booleanValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanValue = this._booleanValue;
        }
        if (this._doubleValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.doubleValue = this._doubleValue;
        }
        if (this._integerValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.integerValue = this._integerValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._integerValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanValue = value.booleanValue;
            this._doubleValue = value.doubleValue;
            this._integerValue = value.integerValue;
            this._stringValue = value.stringValue;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: string; 
    public get booleanValue() {
        return this.getStringAttribute('boolean_value');
    }
    public set booleanValue(value: string) {
        this._booleanValue = value;
    }
    public resetBooleanValue() {
        this._booleanValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanValueInput() {
        return this._booleanValue;
    }

    // double_value - computed: true, optional: true, required: false
    private _doubleValue?: string; 
    public get doubleValue() {
        return this.getStringAttribute('double_value');
    }
    public set doubleValue(value: string) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // integer_value - computed: true, optional: true, required: false
    private _integerValue?: string; 
    public get integerValue() {
        return this.getStringAttribute('integer_value');
    }
    public set integerValue(value: string) {
        this._integerValue = value;
    }
    public resetIntegerValue() {
        this._integerValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integerValueInput() {
        return this._integerValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}
export interface PropertyValuesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#quality CcTopicRule#quality}
    */
    readonly quality?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#timestamp CcTopicRule#timestamp}
    */
    readonly timestamp?: TopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: ValueProperty;
}
export class PropertyValuesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PropertyValuesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._quality !== undefined) {
            hasAnyValues = true;
            internalValueResult.quality = this._quality;
        }
        if (this._timestamp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp?.internalValue;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PropertyValuesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._quality = undefined;
            this._timestamp.internalValue = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._quality = value.quality;
            this._timestamp.internalValue = value.timestamp;
            this._value.internalValue = value.value;
        }
    }

    // quality - computed: true, optional: true, required: false
    private _quality?: string; 
    public get quality() {
        return this.getStringAttribute('quality');
    }
    public set quality(value: string) {
        this._quality = value;
    }
    public resetQuality() {
        this._quality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualityInput() {
        return this._quality;
    }

    // timestamp - computed: true, optional: true, required: false
    private _timestamp = new TopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampPropertyOutputReference(this, "timestamp");
    public get timestamp() {
        return this._timestamp;
    }
    public putTimestamp(value: TopicRulePayloadErrorActionIotSiteWisePutAssetPropertyValueEntriesPropertyValuesTimestampProperty) {
        this._timestamp.internalValue = value;
    }
    public resetTimestamp() {
        this._timestamp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp.internalValue;
    }

    // value - computed: true, optional: true, required: false
    private _value = new ValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: ValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class PropertyValuesPropertyList extends cdktn.ComplexList {
    public internalValue? : PropertyValuesProperty[] | cdktn.IResolvable

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
    public get(index: number): PropertyValuesPropertyOutputReference {
        return new PropertyValuesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PutAssetPropertyValueEntriesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#asset_id CcTopicRule#asset_id}
    */
    readonly assetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#entry_id CcTopicRule#entry_id}
    */
    readonly entryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#property_alias CcTopicRule#property_alias}
    */
    readonly propertyAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#property_id CcTopicRule#property_id}
    */
    readonly propertyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#property_values CcTopicRule#property_values}
    */
    readonly propertyValues?: PropertyValuesProperty[] | cdktn.IResolvable;
}
export class PutAssetPropertyValueEntriesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PutAssetPropertyValueEntriesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assetId !== undefined) {
            hasAnyValues = true;
            internalValueResult.assetId = this._assetId;
        }
        if (this._entryId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryId = this._entryId;
        }
        if (this._propertyAlias !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyAlias = this._propertyAlias;
        }
        if (this._propertyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyId = this._propertyId;
        }
        if (this._propertyValues?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyValues = this._propertyValues?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PutAssetPropertyValueEntriesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assetId = undefined;
            this._entryId = undefined;
            this._propertyAlias = undefined;
            this._propertyId = undefined;
            this._propertyValues.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assetId = value.assetId;
            this._entryId = value.entryId;
            this._propertyAlias = value.propertyAlias;
            this._propertyId = value.propertyId;
            this._propertyValues.internalValue = value.propertyValues;
        }
    }

    // asset_id - computed: true, optional: true, required: false
    private _assetId?: string; 
    public get assetId() {
        return this.getStringAttribute('asset_id');
    }
    public set assetId(value: string) {
        this._assetId = value;
    }
    public resetAssetId() {
        this._assetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetIdInput() {
        return this._assetId;
    }

    // entry_id - computed: true, optional: true, required: false
    private _entryId?: string; 
    public get entryId() {
        return this.getStringAttribute('entry_id');
    }
    public set entryId(value: string) {
        this._entryId = value;
    }
    public resetEntryId() {
        this._entryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entryIdInput() {
        return this._entryId;
    }

    // property_alias - computed: true, optional: true, required: false
    private _propertyAlias?: string; 
    public get propertyAlias() {
        return this.getStringAttribute('property_alias');
    }
    public set propertyAlias(value: string) {
        this._propertyAlias = value;
    }
    public resetPropertyAlias() {
        this._propertyAlias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyAliasInput() {
        return this._propertyAlias;
    }

    // property_id - computed: true, optional: true, required: false
    private _propertyId?: string; 
    public get propertyId() {
        return this.getStringAttribute('property_id');
    }
    public set propertyId(value: string) {
        this._propertyId = value;
    }
    public resetPropertyId() {
        this._propertyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyIdInput() {
        return this._propertyId;
    }

    // property_values - computed: true, optional: true, required: false
    private _propertyValues = new PropertyValuesPropertyList(this, "property_values", false);
    public get propertyValues() {
        return this._propertyValues;
    }
    public putPropertyValues(value: PropertyValuesProperty[] | cdktn.IResolvable) {
        this._propertyValues.internalValue = value;
    }
    public resetPropertyValues() {
        this._propertyValues.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyValuesInput() {
        return this._propertyValues.internalValue;
    }
}

export class PutAssetPropertyValueEntriesPropertyList extends cdktn.ComplexList {
    public internalValue? : PutAssetPropertyValueEntriesProperty[] | cdktn.IResolvable

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
    public get(index: number): PutAssetPropertyValueEntriesPropertyOutputReference {
        return new PutAssetPropertyValueEntriesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IotSiteWiseProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#put_asset_property_value_entries CcTopicRule#put_asset_property_value_entries}
    */
    readonly putAssetPropertyValueEntries?: PutAssetPropertyValueEntriesProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class IotSiteWisePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotSiteWiseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._putAssetPropertyValueEntries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.putAssetPropertyValueEntries = this._putAssetPropertyValueEntries?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotSiteWiseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._putAssetPropertyValueEntries.internalValue = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._putAssetPropertyValueEntries.internalValue = value.putAssetPropertyValueEntries;
            this._roleArn = value.roleArn;
        }
    }

    // put_asset_property_value_entries - computed: true, optional: true, required: false
    private _putAssetPropertyValueEntries = new PutAssetPropertyValueEntriesPropertyList(this, "put_asset_property_value_entries", false);
    public get putAssetPropertyValueEntries() {
        return this._putAssetPropertyValueEntries;
    }
    public putPutAssetPropertyValueEntries(value: PutAssetPropertyValueEntriesProperty[] | cdktn.IResolvable) {
        this._putAssetPropertyValueEntries.internalValue = value;
    }
    public resetPutAssetPropertyValueEntries() {
        this._putAssetPropertyValueEntries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get putAssetPropertyValueEntriesInput() {
        return this._putAssetPropertyValueEntries.internalValue;
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
export interface TopicRulePayloadErrorActionKafkaHeadersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#key CcTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class TopicRulePayloadErrorActionKafkaHeadersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TopicRulePayloadErrorActionKafkaHeadersProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TopicRulePayloadErrorActionKafkaHeadersProperty | cdktn.IResolvable | undefined) {
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

export class TopicRulePayloadErrorActionKafkaHeadersPropertyList extends cdktn.ComplexList {
    public internalValue? : TopicRulePayloadErrorActionKafkaHeadersProperty[] | cdktn.IResolvable

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
    public get(index: number): TopicRulePayloadErrorActionKafkaHeadersPropertyOutputReference {
        return new TopicRulePayloadErrorActionKafkaHeadersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KafkaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#client_properties CcTopicRule#client_properties}
    */
    readonly clientProperties?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#destination_arn CcTopicRule#destination_arn}
    */
    readonly destinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#headers CcTopicRule#headers}
    */
    readonly headers?: TopicRulePayloadErrorActionKafkaHeadersProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#key CcTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#partition CcTopicRule#partition}
    */
    readonly partition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#topic CcTopicRule#topic}
    */
    readonly topic?: string;
}
export class KafkaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KafkaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientProperties !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientProperties = this._clientProperties;
        }
        if (this._destinationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationArn = this._destinationArn;
        }
        if (this._headers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers?.internalValue;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._partition !== undefined) {
            hasAnyValues = true;
            internalValueResult.partition = this._partition;
        }
        if (this._topic !== undefined) {
            hasAnyValues = true;
            internalValueResult.topic = this._topic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KafkaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientProperties = undefined;
            this._destinationArn = undefined;
            this._headers.internalValue = undefined;
            this._key = undefined;
            this._partition = undefined;
            this._topic = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientProperties = value.clientProperties;
            this._destinationArn = value.destinationArn;
            this._headers.internalValue = value.headers;
            this._key = value.key;
            this._partition = value.partition;
            this._topic = value.topic;
        }
    }

    // client_properties - computed: true, optional: true, required: false
    private _clientProperties?: { [key: string]: string }; 
    public get clientProperties() {
        return this.getStringMapAttribute('client_properties');
    }
    public set clientProperties(value: { [key: string]: string }) {
        this._clientProperties = value;
    }
    public resetClientProperties() {
        this._clientProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientPropertiesInput() {
        return this._clientProperties;
    }

    // destination_arn - computed: true, optional: true, required: false
    private _destinationArn?: string; 
    public get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    public set destinationArn(value: string) {
        this._destinationArn = value;
    }
    public resetDestinationArn() {
        this._destinationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationArnInput() {
        return this._destinationArn;
    }

    // headers - computed: true, optional: true, required: false
    private _headers = new TopicRulePayloadErrorActionKafkaHeadersPropertyList(this, "headers", false);
    public get headers() {
        return this._headers;
    }
    public putHeaders(value: TopicRulePayloadErrorActionKafkaHeadersProperty[] | cdktn.IResolvable) {
        this._headers.internalValue = value;
    }
    public resetHeaders() {
        this._headers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
        return this._headers.internalValue;
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

    // partition - computed: true, optional: true, required: false
    private _partition?: string; 
    public get partition() {
        return this.getStringAttribute('partition');
    }
    public set partition(value: string) {
        this._partition = value;
    }
    public resetPartition() {
        this._partition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionInput() {
        return this._partition;
    }

    // topic - computed: true, optional: true, required: false
    private _topic?: string; 
    public get topic() {
        return this.getStringAttribute('topic');
    }
    public set topic(value: string) {
        this._topic = value;
    }
    public resetTopic() {
        this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicInput() {
        return this._topic;
    }
}
export interface KinesisProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#partition_key CcTopicRule#partition_key}
    */
    readonly partitionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#stream_name CcTopicRule#stream_name}
    */
    readonly streamName?: string;
}
export class KinesisPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._partitionKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionKey = this._partitionKey;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._streamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamName = this._streamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._partitionKey = undefined;
            this._roleArn = undefined;
            this._streamName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._partitionKey = value.partitionKey;
            this._roleArn = value.roleArn;
            this._streamName = value.streamName;
        }
    }

    // partition_key - computed: true, optional: true, required: false
    private _partitionKey?: string; 
    public get partitionKey() {
        return this.getStringAttribute('partition_key');
    }
    public set partitionKey(value: string) {
        this._partitionKey = value;
    }
    public resetPartitionKey() {
        this._partitionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionKeyInput() {
        return this._partitionKey;
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

    // stream_name - computed: true, optional: true, required: false
    private _streamName?: string; 
    public get streamName() {
        return this.getStringAttribute('stream_name');
    }
    public set streamName(value: string) {
        this._streamName = value;
    }
    public resetStreamName() {
        this._streamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamNameInput() {
        return this._streamName;
    }
}
export interface LambdaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#function_arn CcTopicRule#function_arn}
    */
    readonly functionArn?: string;
}
export class LambdaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionArn = this._functionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functionArn = value.functionArn;
        }
    }

    // function_arn - computed: true, optional: true, required: false
    private _functionArn?: string; 
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }
    public set functionArn(value: string) {
        this._functionArn = value;
    }
    public resetFunctionArn() {
        this._functionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionArnInput() {
        return this._functionArn;
    }
}
export interface TopicRulePayloadErrorActionLocationTimestampProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#unit CcTopicRule#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class TopicRulePayloadErrorActionLocationTimestampPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TopicRulePayloadErrorActionLocationTimestampProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicRulePayloadErrorActionLocationTimestampProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
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
export interface LocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#device_id CcTopicRule#device_id}
    */
    readonly deviceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#latitude CcTopicRule#latitude}
    */
    readonly latitude?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#longitude CcTopicRule#longitude}
    */
    readonly longitude?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#timestamp CcTopicRule#timestamp}
    */
    readonly timestamp?: TopicRulePayloadErrorActionLocationTimestampProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#tracker_name CcTopicRule#tracker_name}
    */
    readonly trackerName?: string;
}
export class LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deviceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceId = this._deviceId;
        }
        if (this._latitude !== undefined) {
            hasAnyValues = true;
            internalValueResult.latitude = this._latitude;
        }
        if (this._longitude !== undefined) {
            hasAnyValues = true;
            internalValueResult.longitude = this._longitude;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._timestamp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp?.internalValue;
        }
        if (this._trackerName !== undefined) {
            hasAnyValues = true;
            internalValueResult.trackerName = this._trackerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceId = undefined;
            this._latitude = undefined;
            this._longitude = undefined;
            this._roleArn = undefined;
            this._timestamp.internalValue = undefined;
            this._trackerName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deviceId = value.deviceId;
            this._latitude = value.latitude;
            this._longitude = value.longitude;
            this._roleArn = value.roleArn;
            this._timestamp.internalValue = value.timestamp;
            this._trackerName = value.trackerName;
        }
    }

    // device_id - computed: true, optional: true, required: false
    private _deviceId?: string; 
    public get deviceId() {
        return this.getStringAttribute('device_id');
    }
    public set deviceId(value: string) {
        this._deviceId = value;
    }
    public resetDeviceId() {
        this._deviceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceIdInput() {
        return this._deviceId;
    }

    // latitude - computed: true, optional: true, required: false
    private _latitude?: string; 
    public get latitude() {
        return this.getStringAttribute('latitude');
    }
    public set latitude(value: string) {
        this._latitude = value;
    }
    public resetLatitude() {
        this._latitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get latitudeInput() {
        return this._latitude;
    }

    // longitude - computed: true, optional: true, required: false
    private _longitude?: string; 
    public get longitude() {
        return this.getStringAttribute('longitude');
    }
    public set longitude(value: string) {
        this._longitude = value;
    }
    public resetLongitude() {
        this._longitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get longitudeInput() {
        return this._longitude;
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

    // timestamp - computed: true, optional: true, required: false
    private _timestamp = new TopicRulePayloadErrorActionLocationTimestampPropertyOutputReference(this, "timestamp");
    public get timestamp() {
        return this._timestamp;
    }
    public putTimestamp(value: TopicRulePayloadErrorActionLocationTimestampProperty) {
        this._timestamp.internalValue = value;
    }
    public resetTimestamp() {
        this._timestamp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp.internalValue;
    }

    // tracker_name - computed: true, optional: true, required: false
    private _trackerName?: string; 
    public get trackerName() {
        return this.getStringAttribute('tracker_name');
    }
    public set trackerName(value: string) {
        this._trackerName = value;
    }
    public resetTrackerName() {
        this._trackerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trackerNameInput() {
        return this._trackerName;
    }
}
export interface OpenSearchProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#endpoint CcTopicRule#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#id CcTopicRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#index CcTopicRule#index}
    */
    readonly index?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#type CcTopicRule#type}
    */
    readonly type?: string;
}
export class OpenSearchPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenSearchProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._index !== undefined) {
            hasAnyValues = true;
            internalValueResult.index = this._index;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenSearchProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpoint = undefined;
            this._id = undefined;
            this._index = undefined;
            this._roleArn = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpoint = value.endpoint;
            this._id = value.id;
            this._index = value.index;
            this._roleArn = value.roleArn;
            this._type = value.type;
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

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // index - computed: true, optional: true, required: false
    private _index?: string; 
    public get index() {
        return this.getStringAttribute('index');
    }
    public set index(value: string) {
        this._index = value;
    }
    public resetIndex() {
        this._index = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexInput() {
        return this._index;
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
}
export interface UserPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#key CcTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class UserPropertiesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UserPropertiesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: UserPropertiesProperty | cdktn.IResolvable | undefined) {
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

export class UserPropertiesPropertyList extends cdktn.ComplexList {
    public internalValue? : UserPropertiesProperty[] | cdktn.IResolvable

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
    public get(index: number): UserPropertiesPropertyOutputReference {
        return new UserPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TopicRulePayloadErrorActionRepublishHeadersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#content_type CcTopicRule#content_type}
    */
    readonly contentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#correlation_data CcTopicRule#correlation_data}
    */
    readonly correlationData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#message_expiry CcTopicRule#message_expiry}
    */
    readonly messageExpiry?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#payload_format_indicator CcTopicRule#payload_format_indicator}
    */
    readonly payloadFormatIndicator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#response_topic CcTopicRule#response_topic}
    */
    readonly responseTopic?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#user_properties CcTopicRule#user_properties}
    */
    readonly userProperties?: UserPropertiesProperty[] | cdktn.IResolvable;
}
export class TopicRulePayloadErrorActionRepublishHeadersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TopicRulePayloadErrorActionRepublishHeadersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._correlationData !== undefined) {
            hasAnyValues = true;
            internalValueResult.correlationData = this._correlationData;
        }
        if (this._messageExpiry !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageExpiry = this._messageExpiry;
        }
        if (this._payloadFormatIndicator !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadFormatIndicator = this._payloadFormatIndicator;
        }
        if (this._responseTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.responseTopic = this._responseTopic;
        }
        if (this._userProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userProperties = this._userProperties?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicRulePayloadErrorActionRepublishHeadersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentType = undefined;
            this._correlationData = undefined;
            this._messageExpiry = undefined;
            this._payloadFormatIndicator = undefined;
            this._responseTopic = undefined;
            this._userProperties.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentType = value.contentType;
            this._correlationData = value.correlationData;
            this._messageExpiry = value.messageExpiry;
            this._payloadFormatIndicator = value.payloadFormatIndicator;
            this._responseTopic = value.responseTopic;
            this._userProperties.internalValue = value.userProperties;
        }
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // correlation_data - computed: true, optional: true, required: false
    private _correlationData?: string; 
    public get correlationData() {
        return this.getStringAttribute('correlation_data');
    }
    public set correlationData(value: string) {
        this._correlationData = value;
    }
    public resetCorrelationData() {
        this._correlationData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get correlationDataInput() {
        return this._correlationData;
    }

    // message_expiry - computed: true, optional: true, required: false
    private _messageExpiry?: string; 
    public get messageExpiry() {
        return this.getStringAttribute('message_expiry');
    }
    public set messageExpiry(value: string) {
        this._messageExpiry = value;
    }
    public resetMessageExpiry() {
        this._messageExpiry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageExpiryInput() {
        return this._messageExpiry;
    }

    // payload_format_indicator - computed: true, optional: true, required: false
    private _payloadFormatIndicator?: string; 
    public get payloadFormatIndicator() {
        return this.getStringAttribute('payload_format_indicator');
    }
    public set payloadFormatIndicator(value: string) {
        this._payloadFormatIndicator = value;
    }
    public resetPayloadFormatIndicator() {
        this._payloadFormatIndicator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadFormatIndicatorInput() {
        return this._payloadFormatIndicator;
    }

    // response_topic - computed: true, optional: true, required: false
    private _responseTopic?: string; 
    public get responseTopic() {
        return this.getStringAttribute('response_topic');
    }
    public set responseTopic(value: string) {
        this._responseTopic = value;
    }
    public resetResponseTopic() {
        this._responseTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTopicInput() {
        return this._responseTopic;
    }

    // user_properties - computed: true, optional: true, required: false
    private _userProperties = new UserPropertiesPropertyList(this, "user_properties", false);
    public get userProperties() {
        return this._userProperties;
    }
    public putUserProperties(value: UserPropertiesProperty[] | cdktn.IResolvable) {
        this._userProperties.internalValue = value;
    }
    public resetUserProperties() {
        this._userProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userPropertiesInput() {
        return this._userProperties.internalValue;
    }
}
export interface RepublishProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#headers CcTopicRule#headers}
    */
    readonly headers?: TopicRulePayloadErrorActionRepublishHeadersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#qos CcTopicRule#qos}
    */
    readonly qos?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#topic CcTopicRule#topic}
    */
    readonly topic?: string;
}
export class RepublishPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RepublishProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers?.internalValue;
        }
        if (this._qos !== undefined) {
            hasAnyValues = true;
            internalValueResult.qos = this._qos;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._topic !== undefined) {
            hasAnyValues = true;
            internalValueResult.topic = this._topic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RepublishProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headers.internalValue = undefined;
            this._qos = undefined;
            this._roleArn = undefined;
            this._topic = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headers.internalValue = value.headers;
            this._qos = value.qos;
            this._roleArn = value.roleArn;
            this._topic = value.topic;
        }
    }

    // headers - computed: true, optional: true, required: false
    private _headers = new TopicRulePayloadErrorActionRepublishHeadersPropertyOutputReference(this, "headers");
    public get headers() {
        return this._headers;
    }
    public putHeaders(value: TopicRulePayloadErrorActionRepublishHeadersProperty) {
        this._headers.internalValue = value;
    }
    public resetHeaders() {
        this._headers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
        return this._headers.internalValue;
    }

    // qos - computed: true, optional: true, required: false
    private _qos?: number; 
    public get qos() {
        return this.getNumberAttribute('qos');
    }
    public set qos(value: number) {
        this._qos = value;
    }
    public resetQos() {
        this._qos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qosInput() {
        return this._qos;
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

    // topic - computed: true, optional: true, required: false
    private _topic?: string; 
    public get topic() {
        return this.getStringAttribute('topic');
    }
    public set topic(value: string) {
        this._topic = value;
    }
    public resetTopic() {
        this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicInput() {
        return this._topic;
    }
}
export interface S3Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#bucket_name CcTopicRule#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#canned_acl CcTopicRule#canned_acl}
    */
    readonly cannedAcl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#key CcTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._cannedAcl !== undefined) {
            hasAnyValues = true;
            internalValueResult.cannedAcl = this._cannedAcl;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._cannedAcl = undefined;
            this._key = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._cannedAcl = value.cannedAcl;
            this._key = value.key;
            this._roleArn = value.roleArn;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // canned_acl - computed: true, optional: true, required: false
    private _cannedAcl?: string; 
    public get cannedAcl() {
        return this.getStringAttribute('canned_acl');
    }
    public set cannedAcl(value: string) {
        this._cannedAcl = value;
    }
    public resetCannedAcl() {
        this._cannedAcl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cannedAclInput() {
        return this._cannedAcl;
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
export interface SnsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#message_format CcTopicRule#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#target_arn CcTopicRule#target_arn}
    */
    readonly targetArn?: string;
}
export class SnsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._messageFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageFormat = this._messageFormat;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._targetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetArn = this._targetArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._messageFormat = undefined;
            this._roleArn = undefined;
            this._targetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._messageFormat = value.messageFormat;
            this._roleArn = value.roleArn;
            this._targetArn = value.targetArn;
        }
    }

    // message_format - computed: true, optional: true, required: false
    private _messageFormat?: string; 
    public get messageFormat() {
        return this.getStringAttribute('message_format');
    }
    public set messageFormat(value: string) {
        this._messageFormat = value;
    }
    public resetMessageFormat() {
        this._messageFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageFormatInput() {
        return this._messageFormat;
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

    // target_arn - computed: true, optional: true, required: false
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    public resetTargetArn() {
        this._targetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }
}
export interface SqsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#queue_url CcTopicRule#queue_url}
    */
    readonly queueUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#use_base_64 CcTopicRule#use_base_64}
    */
    readonly useBase64?: boolean | cdktn.IResolvable;
}
export class SqsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SqsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._queueUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueUrl = this._queueUrl;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._useBase64 !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBase64 = this._useBase64;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SqsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._queueUrl = undefined;
            this._roleArn = undefined;
            this._useBase64 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._queueUrl = value.queueUrl;
            this._roleArn = value.roleArn;
            this._useBase64 = value.useBase64;
        }
    }

    // queue_url - computed: true, optional: true, required: false
    private _queueUrl?: string; 
    public get queueUrl() {
        return this.getStringAttribute('queue_url');
    }
    public set queueUrl(value: string) {
        this._queueUrl = value;
    }
    public resetQueueUrl() {
        this._queueUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueUrlInput() {
        return this._queueUrl;
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

    // use_base_64 - computed: true, optional: true, required: false
    private _useBase64?: boolean | cdktn.IResolvable; 
    public get useBase64() {
        return this.getBooleanAttribute('use_base_64');
    }
    public set useBase64(value: boolean | cdktn.IResolvable) {
        this._useBase64 = value;
    }
    public resetUseBase64() {
        this._useBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBase64Input() {
        return this._useBase64;
    }
}
export interface StepFunctionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#execution_name_prefix CcTopicRule#execution_name_prefix}
    */
    readonly executionNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#state_machine_name CcTopicRule#state_machine_name}
    */
    readonly stateMachineName?: string;
}
export class StepFunctionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StepFunctionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executionNamePrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionNamePrefix = this._executionNamePrefix;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._stateMachineName !== undefined) {
            hasAnyValues = true;
            internalValueResult.stateMachineName = this._stateMachineName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StepFunctionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executionNamePrefix = undefined;
            this._roleArn = undefined;
            this._stateMachineName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executionNamePrefix = value.executionNamePrefix;
            this._roleArn = value.roleArn;
            this._stateMachineName = value.stateMachineName;
        }
    }

    // execution_name_prefix - computed: true, optional: true, required: false
    private _executionNamePrefix?: string; 
    public get executionNamePrefix() {
        return this.getStringAttribute('execution_name_prefix');
    }
    public set executionNamePrefix(value: string) {
        this._executionNamePrefix = value;
    }
    public resetExecutionNamePrefix() {
        this._executionNamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionNamePrefixInput() {
        return this._executionNamePrefix;
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

    // state_machine_name - computed: true, optional: true, required: false
    private _stateMachineName?: string; 
    public get stateMachineName() {
        return this.getStringAttribute('state_machine_name');
    }
    public set stateMachineName(value: string) {
        this._stateMachineName = value;
    }
    public resetStateMachineName() {
        this._stateMachineName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateMachineNameInput() {
        return this._stateMachineName;
    }
}
export interface DimensionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#name CcTopicRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class DimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DimensionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DimensionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
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

export class DimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : DimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): DimensionsPropertyOutputReference {
        return new DimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TopicRulePayloadErrorActionTimestreamTimestampProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#unit CcTopicRule#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#value CcTopicRule#value}
    */
    readonly value?: string;
}
export class TopicRulePayloadErrorActionTimestreamTimestampPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TopicRulePayloadErrorActionTimestreamTimestampProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicRulePayloadErrorActionTimestreamTimestampProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
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
export interface TimestreamProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#database_name CcTopicRule#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#dimensions CcTopicRule#dimensions}
    */
    readonly dimensions?: DimensionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#role_arn CcTopicRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#table_name CcTopicRule#table_name}
    */
    readonly tableName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#timestamp CcTopicRule#timestamp}
    */
    readonly timestamp?: TopicRulePayloadErrorActionTimestreamTimestampProperty;
}
export class TimestreamPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimestreamProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._timestamp?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimestreamProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseName = undefined;
            this._dimensions.internalValue = undefined;
            this._roleArn = undefined;
            this._tableName = undefined;
            this._timestamp.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseName = value.databaseName;
            this._dimensions.internalValue = value.dimensions;
            this._roleArn = value.roleArn;
            this._tableName = value.tableName;
            this._timestamp.internalValue = value.timestamp;
        }
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

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new DimensionsPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: DimensionsProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
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

    // timestamp - computed: true, optional: true, required: false
    private _timestamp = new TopicRulePayloadErrorActionTimestreamTimestampPropertyOutputReference(this, "timestamp");
    public get timestamp() {
        return this._timestamp;
    }
    public putTimestamp(value: TopicRulePayloadErrorActionTimestreamTimestampProperty) {
        this._timestamp.internalValue = value;
    }
    public resetTimestamp() {
        this._timestamp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp.internalValue;
    }
}
export interface ErrorActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#cloudwatch_alarm CcTopicRule#cloudwatch_alarm}
    */
    readonly cloudwatchAlarm?: CloudwatchAlarmProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#cloudwatch_logs CcTopicRule#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CloudwatchLogsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#cloudwatch_metric CcTopicRule#cloudwatch_metric}
    */
    readonly cloudwatchMetric?: CloudwatchMetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#dynamo_d_bv_2 CcTopicRule#dynamo_d_bv_2}
    */
    readonly dynamoDBv2?: DynamoDBv2Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#dynamo_db CcTopicRule#dynamo_db}
    */
    readonly dynamoDb?: DynamoDbProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#elasticsearch CcTopicRule#elasticsearch}
    */
    readonly elasticsearch?: ElasticsearchProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#firehose CcTopicRule#firehose}
    */
    readonly firehose?: FirehoseProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#http CcTopicRule#http}
    */
    readonly http?: HttpProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#iot_analytics CcTopicRule#iot_analytics}
    */
    readonly iotAnalytics?: IotAnalyticsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#iot_events CcTopicRule#iot_events}
    */
    readonly iotEvents?: IotEventsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#iot_site_wise CcTopicRule#iot_site_wise}
    */
    readonly iotSiteWise?: IotSiteWiseProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#kafka CcTopicRule#kafka}
    */
    readonly kafka?: KafkaProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#kinesis CcTopicRule#kinesis}
    */
    readonly kinesis?: KinesisProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#lambda CcTopicRule#lambda}
    */
    readonly lambda?: LambdaProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#location CcTopicRule#location}
    */
    readonly location?: LocationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#open_search CcTopicRule#open_search}
    */
    readonly openSearch?: OpenSearchProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#republish CcTopicRule#republish}
    */
    readonly republish?: RepublishProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#s3 CcTopicRule#s3}
    */
    readonly s3?: S3Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#sns CcTopicRule#sns}
    */
    readonly sns?: SnsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#sqs CcTopicRule#sqs}
    */
    readonly sqs?: SqsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#step_functions CcTopicRule#step_functions}
    */
    readonly stepFunctions?: StepFunctionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#timestream CcTopicRule#timestream}
    */
    readonly timestream?: TimestreamProperty;
}
export class ErrorActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ErrorActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchAlarm?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchAlarm = this._cloudwatchAlarm?.internalValue;
        }
        if (this._cloudwatchLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
        }
        if (this._cloudwatchMetric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchMetric = this._cloudwatchMetric?.internalValue;
        }
        if (this._dynamoDBv2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
        }
        if (this._dynamoDb?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
        }
        if (this._elasticsearch?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
        }
        if (this._firehose?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehose = this._firehose?.internalValue;
        }
        if (this._http?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.http = this._http?.internalValue;
        }
        if (this._iotAnalytics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotAnalytics = this._iotAnalytics?.internalValue;
        }
        if (this._iotEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotEvents = this._iotEvents?.internalValue;
        }
        if (this._iotSiteWise?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
        }
        if (this._kafka?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kafka = this._kafka?.internalValue;
        }
        if (this._kinesis?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesis = this._kinesis?.internalValue;
        }
        if (this._lambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambda = this._lambda?.internalValue;
        }
        if (this._location?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location?.internalValue;
        }
        if (this._openSearch?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.openSearch = this._openSearch?.internalValue;
        }
        if (this._republish?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.republish = this._republish?.internalValue;
        }
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        if (this._sns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sns = this._sns?.internalValue;
        }
        if (this._sqs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqs = this._sqs?.internalValue;
        }
        if (this._stepFunctions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stepFunctions = this._stepFunctions?.internalValue;
        }
        if (this._timestream?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestream = this._timestream?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ErrorActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchAlarm.internalValue = undefined;
            this._cloudwatchLogs.internalValue = undefined;
            this._cloudwatchMetric.internalValue = undefined;
            this._dynamoDBv2.internalValue = undefined;
            this._dynamoDb.internalValue = undefined;
            this._elasticsearch.internalValue = undefined;
            this._firehose.internalValue = undefined;
            this._http.internalValue = undefined;
            this._iotAnalytics.internalValue = undefined;
            this._iotEvents.internalValue = undefined;
            this._iotSiteWise.internalValue = undefined;
            this._kafka.internalValue = undefined;
            this._kinesis.internalValue = undefined;
            this._lambda.internalValue = undefined;
            this._location.internalValue = undefined;
            this._openSearch.internalValue = undefined;
            this._republish.internalValue = undefined;
            this._s3.internalValue = undefined;
            this._sns.internalValue = undefined;
            this._sqs.internalValue = undefined;
            this._stepFunctions.internalValue = undefined;
            this._timestream.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchAlarm.internalValue = value.cloudwatchAlarm;
            this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
            this._cloudwatchMetric.internalValue = value.cloudwatchMetric;
            this._dynamoDBv2.internalValue = value.dynamoDBv2;
            this._dynamoDb.internalValue = value.dynamoDb;
            this._elasticsearch.internalValue = value.elasticsearch;
            this._firehose.internalValue = value.firehose;
            this._http.internalValue = value.http;
            this._iotAnalytics.internalValue = value.iotAnalytics;
            this._iotEvents.internalValue = value.iotEvents;
            this._iotSiteWise.internalValue = value.iotSiteWise;
            this._kafka.internalValue = value.kafka;
            this._kinesis.internalValue = value.kinesis;
            this._lambda.internalValue = value.lambda;
            this._location.internalValue = value.location;
            this._openSearch.internalValue = value.openSearch;
            this._republish.internalValue = value.republish;
            this._s3.internalValue = value.s3;
            this._sns.internalValue = value.sns;
            this._sqs.internalValue = value.sqs;
            this._stepFunctions.internalValue = value.stepFunctions;
            this._timestream.internalValue = value.timestream;
        }
    }

    // cloudwatch_alarm - computed: true, optional: true, required: false
    private _cloudwatchAlarm = new CloudwatchAlarmPropertyOutputReference(this, "cloudwatch_alarm");
    public get cloudwatchAlarm() {
        return this._cloudwatchAlarm;
    }
    public putCloudwatchAlarm(value: CloudwatchAlarmProperty) {
        this._cloudwatchAlarm.internalValue = value;
    }
    public resetCloudwatchAlarm() {
        this._cloudwatchAlarm.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchAlarmInput() {
        return this._cloudwatchAlarm.internalValue;
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

    // cloudwatch_metric - computed: true, optional: true, required: false
    private _cloudwatchMetric = new CloudwatchMetricPropertyOutputReference(this, "cloudwatch_metric");
    public get cloudwatchMetric() {
        return this._cloudwatchMetric;
    }
    public putCloudwatchMetric(value: CloudwatchMetricProperty) {
        this._cloudwatchMetric.internalValue = value;
    }
    public resetCloudwatchMetric() {
        this._cloudwatchMetric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchMetricInput() {
        return this._cloudwatchMetric.internalValue;
    }

    // dynamo_d_bv_2 - computed: true, optional: true, required: false
    private _dynamoDBv2 = new DynamoDBv2PropertyOutputReference(this, "dynamo_d_bv_2");
    public get dynamoDBv2() {
        return this._dynamoDBv2;
    }
    public putDynamoDBv2(value: DynamoDBv2Property) {
        this._dynamoDBv2.internalValue = value;
    }
    public resetDynamoDBv2() {
        this._dynamoDBv2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDBv2Input() {
        return this._dynamoDBv2.internalValue;
    }

    // dynamo_db - computed: true, optional: true, required: false
    private _dynamoDb = new DynamoDbPropertyOutputReference(this, "dynamo_db");
    public get dynamoDb() {
        return this._dynamoDb;
    }
    public putDynamoDb(value: DynamoDbProperty) {
        this._dynamoDb.internalValue = value;
    }
    public resetDynamoDb() {
        this._dynamoDb.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbInput() {
        return this._dynamoDb.internalValue;
    }

    // elasticsearch - computed: true, optional: true, required: false
    private _elasticsearch = new ElasticsearchPropertyOutputReference(this, "elasticsearch");
    public get elasticsearch() {
        return this._elasticsearch;
    }
    public putElasticsearch(value: ElasticsearchProperty) {
        this._elasticsearch.internalValue = value;
    }
    public resetElasticsearch() {
        this._elasticsearch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticsearchInput() {
        return this._elasticsearch.internalValue;
    }

    // firehose - computed: true, optional: true, required: false
    private _firehose = new FirehosePropertyOutputReference(this, "firehose");
    public get firehose() {
        return this._firehose;
    }
    public putFirehose(value: FirehoseProperty) {
        this._firehose.internalValue = value;
    }
    public resetFirehose() {
        this._firehose.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseInput() {
        return this._firehose.internalValue;
    }

    // http - computed: true, optional: true, required: false
    private _http = new HttpPropertyOutputReference(this, "http");
    public get http() {
        return this._http;
    }
    public putHttp(value: HttpProperty) {
        this._http.internalValue = value;
    }
    public resetHttp() {
        this._http.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpInput() {
        return this._http.internalValue;
    }

    // iot_analytics - computed: true, optional: true, required: false
    private _iotAnalytics = new IotAnalyticsPropertyOutputReference(this, "iot_analytics");
    public get iotAnalytics() {
        return this._iotAnalytics;
    }
    public putIotAnalytics(value: IotAnalyticsProperty) {
        this._iotAnalytics.internalValue = value;
    }
    public resetIotAnalytics() {
        this._iotAnalytics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotAnalyticsInput() {
        return this._iotAnalytics.internalValue;
    }

    // iot_events - computed: true, optional: true, required: false
    private _iotEvents = new IotEventsPropertyOutputReference(this, "iot_events");
    public get iotEvents() {
        return this._iotEvents;
    }
    public putIotEvents(value: IotEventsProperty) {
        this._iotEvents.internalValue = value;
    }
    public resetIotEvents() {
        this._iotEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotEventsInput() {
        return this._iotEvents.internalValue;
    }

    // iot_site_wise - computed: true, optional: true, required: false
    private _iotSiteWise = new IotSiteWisePropertyOutputReference(this, "iot_site_wise");
    public get iotSiteWise() {
        return this._iotSiteWise;
    }
    public putIotSiteWise(value: IotSiteWiseProperty) {
        this._iotSiteWise.internalValue = value;
    }
    public resetIotSiteWise() {
        this._iotSiteWise.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotSiteWiseInput() {
        return this._iotSiteWise.internalValue;
    }

    // kafka - computed: true, optional: true, required: false
    private _kafka = new KafkaPropertyOutputReference(this, "kafka");
    public get kafka() {
        return this._kafka;
    }
    public putKafka(value: KafkaProperty) {
        this._kafka.internalValue = value;
    }
    public resetKafka() {
        this._kafka.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaInput() {
        return this._kafka.internalValue;
    }

    // kinesis - computed: true, optional: true, required: false
    private _kinesis = new KinesisPropertyOutputReference(this, "kinesis");
    public get kinesis() {
        return this._kinesis;
    }
    public putKinesis(value: KinesisProperty) {
        this._kinesis.internalValue = value;
    }
    public resetKinesis() {
        this._kinesis.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisInput() {
        return this._kinesis.internalValue;
    }

    // lambda - computed: true, optional: true, required: false
    private _lambda = new LambdaPropertyOutputReference(this, "lambda");
    public get lambda() {
        return this._lambda;
    }
    public putLambda(value: LambdaProperty) {
        this._lambda.internalValue = value;
    }
    public resetLambda() {
        this._lambda.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
        return this._lambda.internalValue;
    }

    // location - computed: true, optional: true, required: false
    private _location = new LocationPropertyOutputReference(this, "location");
    public get location() {
        return this._location;
    }
    public putLocation(value: LocationProperty) {
        this._location.internalValue = value;
    }
    public resetLocation() {
        this._location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location.internalValue;
    }

    // open_search - computed: true, optional: true, required: false
    private _openSearch = new OpenSearchPropertyOutputReference(this, "open_search");
    public get openSearch() {
        return this._openSearch;
    }
    public putOpenSearch(value: OpenSearchProperty) {
        this._openSearch.internalValue = value;
    }
    public resetOpenSearch() {
        this._openSearch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openSearchInput() {
        return this._openSearch.internalValue;
    }

    // republish - computed: true, optional: true, required: false
    private _republish = new RepublishPropertyOutputReference(this, "republish");
    public get republish() {
        return this._republish;
    }
    public putRepublish(value: RepublishProperty) {
        this._republish.internalValue = value;
    }
    public resetRepublish() {
        this._republish.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get republishInput() {
        return this._republish.internalValue;
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3PropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3Property) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }

    // sns - computed: true, optional: true, required: false
    private _sns = new SnsPropertyOutputReference(this, "sns");
    public get sns() {
        return this._sns;
    }
    public putSns(value: SnsProperty) {
        this._sns.internalValue = value;
    }
    public resetSns() {
        this._sns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsInput() {
        return this._sns.internalValue;
    }

    // sqs - computed: true, optional: true, required: false
    private _sqs = new SqsPropertyOutputReference(this, "sqs");
    public get sqs() {
        return this._sqs;
    }
    public putSqs(value: SqsProperty) {
        this._sqs.internalValue = value;
    }
    public resetSqs() {
        this._sqs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsInput() {
        return this._sqs.internalValue;
    }

    // step_functions - computed: true, optional: true, required: false
    private _stepFunctions = new StepFunctionsPropertyOutputReference(this, "step_functions");
    public get stepFunctions() {
        return this._stepFunctions;
    }
    public putStepFunctions(value: StepFunctionsProperty) {
        this._stepFunctions.internalValue = value;
    }
    public resetStepFunctions() {
        this._stepFunctions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepFunctionsInput() {
        return this._stepFunctions.internalValue;
    }

    // timestream - computed: true, optional: true, required: false
    private _timestream = new TimestreamPropertyOutputReference(this, "timestream");
    public get timestream() {
        return this._timestream;
    }
    public putTimestream(value: TimestreamProperty) {
        this._timestream.internalValue = value;
    }
    public resetTimestream() {
        this._timestream.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestreamInput() {
        return this._timestream.internalValue;
    }
}
export interface TopicRulePayloadProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#actions CcTopicRule#actions}
    */
    readonly actions: ActionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#aws_iot_sql_version CcTopicRule#aws_iot_sql_version}
    */
    readonly awsIotSqlVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#description CcTopicRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#error_action CcTopicRule#error_action}
    */
    readonly errorAction?: ErrorActionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#rule_disabled CcTopicRule#rule_disabled}
    */
    readonly ruleDisabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule#sql CcTopicRule#sql}
    */
    readonly sql: string;
}
export class TopicRulePayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TopicRulePayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions?.internalValue;
        }
        if (this._awsIotSqlVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsIotSqlVersion = this._awsIotSqlVersion;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._errorAction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorAction = this._errorAction?.internalValue;
        }
        if (this._ruleDisabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleDisabled = this._ruleDisabled;
        }
        if (this._sql !== undefined) {
            hasAnyValues = true;
            internalValueResult.sql = this._sql;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicRulePayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions.internalValue = undefined;
            this._awsIotSqlVersion = undefined;
            this._description = undefined;
            this._errorAction.internalValue = undefined;
            this._ruleDisabled = undefined;
            this._sql = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions.internalValue = value.actions;
            this._awsIotSqlVersion = value.awsIotSqlVersion;
            this._description = value.description;
            this._errorAction.internalValue = value.errorAction;
            this._ruleDisabled = value.ruleDisabled;
            this._sql = value.sql;
        }
    }

    // actions - computed: false, optional: false, required: true
    private _actions = new ActionPropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: ActionProperty[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // aws_iot_sql_version - computed: true, optional: true, required: false
    private _awsIotSqlVersion?: string; 
    public get awsIotSqlVersion() {
        return this.getStringAttribute('aws_iot_sql_version');
    }
    public set awsIotSqlVersion(value: string) {
        this._awsIotSqlVersion = value;
    }
    public resetAwsIotSqlVersion() {
        this._awsIotSqlVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsIotSqlVersionInput() {
        return this._awsIotSqlVersion;
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

    // error_action - computed: true, optional: true, required: false
    private _errorAction = new ErrorActionPropertyOutputReference(this, "error_action");
    public get errorAction() {
        return this._errorAction;
    }
    public putErrorAction(value: ErrorActionProperty) {
        this._errorAction.internalValue = value;
    }
    public resetErrorAction() {
        this._errorAction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorActionInput() {
        return this._errorAction.internalValue;
    }

    // rule_disabled - computed: true, optional: true, required: false
    private _ruleDisabled?: boolean | cdktn.IResolvable; 
    public get ruleDisabled() {
        return this.getBooleanAttribute('rule_disabled');
    }
    public set ruleDisabled(value: boolean | cdktn.IResolvable) {
        this._ruleDisabled = value;
    }
    public resetRuleDisabled() {
        this._ruleDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleDisabledInput() {
        return this._ruleDisabled;
    }

    // sql - computed: false, optional: false, required: true
    private _sql?: string; 
    public get sql() {
        return this.getStringAttribute('sql');
    }
    public set sql(value: string) {
        this._sql = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlInput() {
        return this._sql;
    }
}
}
