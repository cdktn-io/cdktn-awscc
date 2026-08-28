// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAlarmModelProps extends cdktn.TerraformMetaArguments {
    /**
    * Contains the configuration information of alarm state changes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#alarm_capabilities CcAlarmModel#alarm_capabilities}
    */
    readonly alarmCapabilities?: CcAlarmModel.AlarmCapabilitiesProperty;
    /**
    * Contains information about one or more alarm actions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#alarm_event_actions CcAlarmModel#alarm_event_actions}
    */
    readonly alarmEventActions?: CcAlarmModel.AlarmEventActionsProperty;
    /**
    * The description of the alarm model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#alarm_model_description CcAlarmModel#alarm_model_description}
    */
    readonly alarmModelDescription?: string;
    /**
    * The name of the alarm model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#alarm_model_name CcAlarmModel#alarm_model_name}
    */
    readonly alarmModelName?: string;
    /**
    * Defines when your alarm is invoked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#alarm_rule CcAlarmModel#alarm_rule}
    */
    readonly alarmRule: CcAlarmModel.AlarmRuleProperty;
    /**
    * An input attribute used as a key to create an alarm. ITE routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#key CcAlarmModel#key}
    */
    readonly key?: string;
    /**
    * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#role_arn CcAlarmModel#role_arn}
    */
    readonly roleArn: string;
    /**
    * A non-negative integer that reflects the severity level of the alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#severity CcAlarmModel#severity}
    */
    readonly severity?: number;
    /**
    * A list of key-value pairs that contain metadata for the alarm model. The tags help you manage the alarm model. For more information, see [Tagging your resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the *Developer Guide*.
    *  You can create up to 50 tags for one alarm model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#tags CcAlarmModel#tags}
    */
    readonly tags?: CcAlarmModel.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model awscc_iotevents_alarm_model}
*/
export class CcAlarmModel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotevents_alarm_model";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAlarmModel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAlarmModel to import
    * @param importFromId The id of the existing CcAlarmModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAlarmModel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotevents_alarm_model", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model awscc_iotevents_alarm_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAlarmModelProps
    */
    public constructor(scope: Construct, id: string, config: CcAlarmModelProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotevents_alarm_model',
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
        this._alarmCapabilities.internalValue = config.alarmCapabilities;
        this._alarmEventActions.internalValue = config.alarmEventActions;
        this._alarmModelDescription = config.alarmModelDescription;
        this._alarmModelName = config.alarmModelName;
        this._alarmRule.internalValue = config.alarmRule;
        this._key = config.key;
        this._roleArn = config.roleArn;
        this._severity = config.severity;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alarm_capabilities - computed: true, optional: true, required: false
    private _alarmCapabilities = new CcAlarmModel.AlarmCapabilitiesPropertyOutputReference(this, "alarm_capabilities");
    public get alarmCapabilities() {
        return this._alarmCapabilities;
    }
    public putAlarmCapabilities(value: CcAlarmModel.AlarmCapabilitiesProperty) {
        this._alarmCapabilities.internalValue = value;
    }
    public resetAlarmCapabilities() {
        this._alarmCapabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmCapabilitiesInput() {
        return this._alarmCapabilities.internalValue;
    }

    // alarm_event_actions - computed: true, optional: true, required: false
    private _alarmEventActions = new CcAlarmModel.AlarmEventActionsPropertyOutputReference(this, "alarm_event_actions");
    public get alarmEventActions() {
        return this._alarmEventActions;
    }
    public putAlarmEventActions(value: CcAlarmModel.AlarmEventActionsProperty) {
        this._alarmEventActions.internalValue = value;
    }
    public resetAlarmEventActions() {
        this._alarmEventActions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmEventActionsInput() {
        return this._alarmEventActions.internalValue;
    }

    // alarm_model_description - computed: true, optional: true, required: false
    private _alarmModelDescription?: string; 
    public get alarmModelDescription() {
        return this.getStringAttribute('alarm_model_description');
    }
    public set alarmModelDescription(value: string) {
        this._alarmModelDescription = value;
    }
    public resetAlarmModelDescription() {
        this._alarmModelDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmModelDescriptionInput() {
        return this._alarmModelDescription;
    }

    // alarm_model_name - computed: true, optional: true, required: false
    private _alarmModelName?: string; 
    public get alarmModelName() {
        return this.getStringAttribute('alarm_model_name');
    }
    public set alarmModelName(value: string) {
        this._alarmModelName = value;
    }
    public resetAlarmModelName() {
        this._alarmModelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmModelNameInput() {
        return this._alarmModelName;
    }

    // alarm_rule - computed: false, optional: false, required: true
    private _alarmRule = new CcAlarmModel.AlarmRulePropertyOutputReference(this, "alarm_rule");
    public get alarmRule() {
        return this._alarmRule;
    }
    public putAlarmRule(value: CcAlarmModel.AlarmRuleProperty) {
        this._alarmRule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmRuleInput() {
        return this._alarmRule.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // severity - computed: true, optional: true, required: false
    private _severity?: number; 
    public get severity() {
        return this.getNumberAttribute('severity');
    }
    public set severity(value: number) {
        this._severity = value;
    }
    public resetSeverity() {
        this._severity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severityInput() {
        return this._severity;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAlarmModel.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAlarmModel.TagProperty[] | cdktn.IResolvable) {
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
            alarm_capabilities: ccAlarmModelAlarmCapabilitiesPropertyToTerraform(this._alarmCapabilities.internalValue),
            alarm_event_actions: ccAlarmModelAlarmEventActionsPropertyToTerraform(this._alarmEventActions.internalValue),
            alarm_model_description: cdktn.stringToTerraform(this._alarmModelDescription),
            alarm_model_name: cdktn.stringToTerraform(this._alarmModelName),
            alarm_rule: ccAlarmModelAlarmRulePropertyToTerraform(this._alarmRule.internalValue),
            key: cdktn.stringToTerraform(this._key),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            severity: cdktn.numberToTerraform(this._severity),
            tags: cdktn.listMapper(ccAlarmModelTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alarm_capabilities: {
                value: ccAlarmModelAlarmCapabilitiesPropertyToHclTerraform(this._alarmCapabilities.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAlarmModel.AlarmCapabilitiesProperty",
            },
            alarm_event_actions: {
                value: ccAlarmModelAlarmEventActionsPropertyToHclTerraform(this._alarmEventActions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAlarmModel.AlarmEventActionsProperty",
            },
            alarm_model_description: {
                value: cdktn.stringToHclTerraform(this._alarmModelDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alarm_model_name: {
                value: cdktn.stringToHclTerraform(this._alarmModelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alarm_rule: {
                value: ccAlarmModelAlarmRulePropertyToHclTerraform(this._alarmRule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAlarmModel.AlarmRuleProperty",
            },
            key: {
                value: cdktn.stringToHclTerraform(this._key),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            severity: {
                value: cdktn.numberToHclTerraform(this._severity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAlarmModelTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAlarmModel.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAlarmModelAcknowledgeFlowPropertyToTerraform(struct?: CcAlarmModel.AcknowledgeFlowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccAlarmModelAcknowledgeFlowPropertyToHclTerraform(struct?: CcAlarmModel.AcknowledgeFlowProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelInitializationConfigurationPropertyToTerraform(struct?: CcAlarmModel.InitializationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disabled_on_initialization: cdktn.booleanToTerraform(struct!.disabledOnInitialization),
    }
}


export function ccAlarmModelInitializationConfigurationPropertyToHclTerraform(struct?: CcAlarmModel.InitializationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disabled_on_initialization: {
            value: cdktn.booleanToHclTerraform(struct!.disabledOnInitialization),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelAlarmCapabilitiesPropertyToTerraform(struct?: CcAlarmModel.AlarmCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        acknowledge_flow: ccAlarmModelAcknowledgeFlowPropertyToTerraform(struct!.acknowledgeFlow),
        initialization_configuration: ccAlarmModelInitializationConfigurationPropertyToTerraform(struct!.initializationConfiguration),
    }
}


export function ccAlarmModelAlarmCapabilitiesPropertyToHclTerraform(struct?: CcAlarmModel.AlarmCapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        acknowledge_flow: {
            value: ccAlarmModelAcknowledgeFlowPropertyToHclTerraform(struct!.acknowledgeFlow),
            isBlock: true,
            type: "struct",
            storageClassType: "AcknowledgeFlowProperty",
        },
        initialization_configuration: {
            value: ccAlarmModelInitializationConfigurationPropertyToHclTerraform(struct!.initializationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "InitializationConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelPayloadPropertyToTerraform(struct?: CcAlarmModel.PayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAlarmModelPayloadPropertyToHclTerraform(struct?: CcAlarmModel.PayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
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


export function ccAlarmModelDynamoDBv2PropertyToTerraform(struct?: CcAlarmModel.DynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccAlarmModelPayloadPropertyToTerraform(struct!.payload),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccAlarmModelDynamoDBv2PropertyToHclTerraform(struct?: CcAlarmModel.DynamoDBv2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccAlarmModelPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "PayloadProperty",
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


export function ccAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadPropertyToTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsDynamoDbPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadPropertyToHclTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsDynamoDbPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
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


export function ccAlarmModelDynamoDBPropertyToTerraform(struct?: CcAlarmModel.DynamoDBProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hash_key_field: cdktn.stringToTerraform(struct!.hashKeyField),
        hash_key_type: cdktn.stringToTerraform(struct!.hashKeyType),
        hash_key_value: cdktn.stringToTerraform(struct!.hashKeyValue),
        operation: cdktn.stringToTerraform(struct!.operation),
        payload: ccAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadPropertyToTerraform(struct!.payload),
        payload_field: cdktn.stringToTerraform(struct!.payloadField),
        range_key_field: cdktn.stringToTerraform(struct!.rangeKeyField),
        range_key_type: cdktn.stringToTerraform(struct!.rangeKeyType),
        range_key_value: cdktn.stringToTerraform(struct!.rangeKeyValue),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccAlarmModelDynamoDBPropertyToHclTerraform(struct?: CcAlarmModel.DynamoDBProperty | cdktn.IResolvable): any {
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
        operation: {
            value: cdktn.stringToHclTerraform(struct!.operation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccAlarmModelAlarmEventActionsAlarmActionsDynamoDbPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "AlarmEventActionsAlarmActionsDynamoDbPayloadProperty",
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


export function ccAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadPropertyToTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsFirehosePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadPropertyToHclTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsFirehosePayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
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


export function ccAlarmModelFirehosePropertyToTerraform(struct?: CcAlarmModel.FirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream_name: cdktn.stringToTerraform(struct!.deliveryStreamName),
        payload: ccAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadPropertyToTerraform(struct!.payload),
        separator: cdktn.stringToTerraform(struct!.separator),
    }
}


export function ccAlarmModelFirehosePropertyToHclTerraform(struct?: CcAlarmModel.FirehoseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_stream_name: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStreamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccAlarmModelAlarmEventActionsAlarmActionsFirehosePayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "AlarmEventActionsAlarmActionsFirehosePayloadProperty",
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


export function ccAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadPropertyToTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsIotEventsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadPropertyToHclTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsIotEventsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
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


export function ccAlarmModelIotEventsPropertyToTerraform(struct?: CcAlarmModel.IotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        input_name: cdktn.stringToTerraform(struct!.inputName),
        payload: ccAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccAlarmModelIotEventsPropertyToHclTerraform(struct?: CcAlarmModel.IotEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        input_name: {
            value: cdktn.stringToHclTerraform(struct!.inputName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccAlarmModelAlarmEventActionsAlarmActionsIotEventsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "AlarmEventActionsAlarmActionsIotEventsPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelAssetPropertyTimestampPropertyToTerraform(struct?: CcAlarmModel.AssetPropertyTimestampProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        offset_in_nanos: cdktn.stringToTerraform(struct!.offsetInNanos),
        time_in_seconds: cdktn.stringToTerraform(struct!.timeInSeconds),
    }
}


export function ccAlarmModelAssetPropertyTimestampPropertyToHclTerraform(struct?: CcAlarmModel.AssetPropertyTimestampProperty | cdktn.IResolvable): any {
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


export function ccAlarmModelAssetPropertyVariantPropertyToTerraform(struct?: CcAlarmModel.AssetPropertyVariantProperty | cdktn.IResolvable): any {
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


export function ccAlarmModelAssetPropertyVariantPropertyToHclTerraform(struct?: CcAlarmModel.AssetPropertyVariantProperty | cdktn.IResolvable): any {
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


export function ccAlarmModelAssetPropertyValuePropertyToTerraform(struct?: CcAlarmModel.AssetPropertyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        quality: cdktn.stringToTerraform(struct!.quality),
        timestamp: ccAlarmModelAssetPropertyTimestampPropertyToTerraform(struct!.timestamp),
        value: ccAlarmModelAssetPropertyVariantPropertyToTerraform(struct!.value),
    }
}


export function ccAlarmModelAssetPropertyValuePropertyToHclTerraform(struct?: CcAlarmModel.AssetPropertyValueProperty | cdktn.IResolvable): any {
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
            value: ccAlarmModelAssetPropertyTimestampPropertyToHclTerraform(struct!.timestamp),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetPropertyTimestampProperty",
        },
        value: {
            value: ccAlarmModelAssetPropertyVariantPropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetPropertyVariantProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelIotSiteWisePropertyToTerraform(struct?: CcAlarmModel.IotSiteWiseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        asset_id: cdktn.stringToTerraform(struct!.assetId),
        entry_id: cdktn.stringToTerraform(struct!.entryId),
        property_alias: cdktn.stringToTerraform(struct!.propertyAlias),
        property_id: cdktn.stringToTerraform(struct!.propertyId),
        property_value: ccAlarmModelAssetPropertyValuePropertyToTerraform(struct!.propertyValue),
    }
}


export function ccAlarmModelIotSiteWisePropertyToHclTerraform(struct?: CcAlarmModel.IotSiteWiseProperty | cdktn.IResolvable): any {
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
        property_value: {
            value: ccAlarmModelAssetPropertyValuePropertyToHclTerraform(struct!.propertyValue),
            isBlock: true,
            type: "struct",
            storageClassType: "AssetPropertyValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadPropertyToTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsIotTopicPublishPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadPropertyToHclTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsIotTopicPublishPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
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


export function ccAlarmModelIotTopicPublishPropertyToTerraform(struct?: CcAlarmModel.IotTopicPublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mqtt_topic: cdktn.stringToTerraform(struct!.mqttTopic),
        payload: ccAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccAlarmModelIotTopicPublishPropertyToHclTerraform(struct?: CcAlarmModel.IotTopicPublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mqtt_topic: {
            value: cdktn.stringToHclTerraform(struct!.mqttTopic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        payload: {
            value: ccAlarmModelAlarmEventActionsAlarmActionsIotTopicPublishPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "AlarmEventActionsAlarmActionsIotTopicPublishPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadPropertyToTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsLambdaPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadPropertyToHclTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsLambdaPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
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


export function ccAlarmModelLambdaPropertyToTerraform(struct?: CcAlarmModel.LambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_arn: cdktn.stringToTerraform(struct!.functionArn),
        payload: ccAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadPropertyToTerraform(struct!.payload),
    }
}


export function ccAlarmModelLambdaPropertyToHclTerraform(struct?: CcAlarmModel.LambdaProperty | cdktn.IResolvable): any {
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
        payload: {
            value: ccAlarmModelAlarmEventActionsAlarmActionsLambdaPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "AlarmEventActionsAlarmActionsLambdaPayloadProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelAlarmEventActionsAlarmActionsSnsPayloadPropertyToTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsSnsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAlarmModelAlarmEventActionsAlarmActionsSnsPayloadPropertyToHclTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsSnsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
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


export function ccAlarmModelSnsPropertyToTerraform(struct?: CcAlarmModel.SnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccAlarmModelAlarmEventActionsAlarmActionsSnsPayloadPropertyToTerraform(struct!.payload),
        target_arn: cdktn.stringToTerraform(struct!.targetArn),
    }
}


export function ccAlarmModelSnsPropertyToHclTerraform(struct?: CcAlarmModel.SnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccAlarmModelAlarmEventActionsAlarmActionsSnsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "AlarmEventActionsAlarmActionsSnsPayloadProperty",
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


export function ccAlarmModelAlarmEventActionsAlarmActionsSqsPayloadPropertyToTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsSqsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_expression: cdktn.stringToTerraform(struct!.contentExpression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAlarmModelAlarmEventActionsAlarmActionsSqsPayloadPropertyToHclTerraform(struct?: CcAlarmModel.AlarmEventActionsAlarmActionsSqsPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_expression: {
            value: cdktn.stringToHclTerraform(struct!.contentExpression),
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


export function ccAlarmModelSqsPropertyToTerraform(struct?: CcAlarmModel.SqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload: ccAlarmModelAlarmEventActionsAlarmActionsSqsPayloadPropertyToTerraform(struct!.payload),
        queue_url: cdktn.stringToTerraform(struct!.queueUrl),
        use_base_64: cdktn.booleanToTerraform(struct!.useBase64),
    }
}


export function ccAlarmModelSqsPropertyToHclTerraform(struct?: CcAlarmModel.SqsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload: {
            value: ccAlarmModelAlarmEventActionsAlarmActionsSqsPayloadPropertyToHclTerraform(struct!.payload),
            isBlock: true,
            type: "struct",
            storageClassType: "AlarmEventActionsAlarmActionsSqsPayloadProperty",
        },
        queue_url: {
            value: cdktn.stringToHclTerraform(struct!.queueUrl),
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


export function ccAlarmModelAlarmActionPropertyToTerraform(struct?: CcAlarmModel.AlarmActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dynamo_d_bv_2: ccAlarmModelDynamoDBv2PropertyToTerraform(struct!.dynamoDBv2),
        dynamo_db: ccAlarmModelDynamoDBPropertyToTerraform(struct!.dynamoDb),
        firehose: ccAlarmModelFirehosePropertyToTerraform(struct!.firehose),
        iot_events: ccAlarmModelIotEventsPropertyToTerraform(struct!.iotEvents),
        iot_site_wise: ccAlarmModelIotSiteWisePropertyToTerraform(struct!.iotSiteWise),
        iot_topic_publish: ccAlarmModelIotTopicPublishPropertyToTerraform(struct!.iotTopicPublish),
        lambda: ccAlarmModelLambdaPropertyToTerraform(struct!.lambda),
        sns: ccAlarmModelSnsPropertyToTerraform(struct!.sns),
        sqs: ccAlarmModelSqsPropertyToTerraform(struct!.sqs),
    }
}


export function ccAlarmModelAlarmActionPropertyToHclTerraform(struct?: CcAlarmModel.AlarmActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dynamo_d_bv_2: {
            value: ccAlarmModelDynamoDBv2PropertyToHclTerraform(struct!.dynamoDBv2),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamoDBv2Property",
        },
        dynamo_db: {
            value: ccAlarmModelDynamoDBPropertyToHclTerraform(struct!.dynamoDb),
            isBlock: true,
            type: "struct",
            storageClassType: "DynamoDBProperty",
        },
        firehose: {
            value: ccAlarmModelFirehosePropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "FirehoseProperty",
        },
        iot_events: {
            value: ccAlarmModelIotEventsPropertyToHclTerraform(struct!.iotEvents),
            isBlock: true,
            type: "struct",
            storageClassType: "IotEventsProperty",
        },
        iot_site_wise: {
            value: ccAlarmModelIotSiteWisePropertyToHclTerraform(struct!.iotSiteWise),
            isBlock: true,
            type: "struct",
            storageClassType: "IotSiteWiseProperty",
        },
        iot_topic_publish: {
            value: ccAlarmModelIotTopicPublishPropertyToHclTerraform(struct!.iotTopicPublish),
            isBlock: true,
            type: "struct",
            storageClassType: "IotTopicPublishProperty",
        },
        lambda: {
            value: ccAlarmModelLambdaPropertyToHclTerraform(struct!.lambda),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaProperty",
        },
        sns: {
            value: ccAlarmModelSnsPropertyToHclTerraform(struct!.sns),
            isBlock: true,
            type: "struct",
            storageClassType: "SnsProperty",
        },
        sqs: {
            value: ccAlarmModelSqsPropertyToHclTerraform(struct!.sqs),
            isBlock: true,
            type: "struct",
            storageClassType: "SqsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelAlarmEventActionsPropertyToTerraform(struct?: CcAlarmModel.AlarmEventActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_actions: cdktn.listMapper(ccAlarmModelAlarmActionPropertyToTerraform, false)(struct!.alarmActions),
    }
}


export function ccAlarmModelAlarmEventActionsPropertyToHclTerraform(struct?: CcAlarmModel.AlarmEventActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_actions: {
            value: cdktn.listMapperHcl(ccAlarmModelAlarmActionPropertyToHclTerraform, false)(struct!.alarmActions),
            isBlock: true,
            type: "list",
            storageClassType: "AlarmActionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelSimpleRulePropertyToTerraform(struct?: CcAlarmModel.SimpleRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
        input_property: cdktn.stringToTerraform(struct!.inputProperty),
        threshold: cdktn.stringToTerraform(struct!.threshold),
    }
}


export function ccAlarmModelSimpleRulePropertyToHclTerraform(struct?: CcAlarmModel.SimpleRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison_operator: {
            value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_property: {
            value: cdktn.stringToHclTerraform(struct!.inputProperty),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        threshold: {
            value: cdktn.stringToHclTerraform(struct!.threshold),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelAlarmRulePropertyToTerraform(struct?: CcAlarmModel.AlarmRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        simple_rule: ccAlarmModelSimpleRulePropertyToTerraform(struct!.simpleRule),
    }
}


export function ccAlarmModelAlarmRulePropertyToHclTerraform(struct?: CcAlarmModel.AlarmRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        simple_rule: {
            value: ccAlarmModelSimpleRulePropertyToHclTerraform(struct!.simpleRule),
            isBlock: true,
            type: "struct",
            storageClassType: "SimpleRuleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmModelTagPropertyToTerraform(struct?: CcAlarmModel.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAlarmModelTagPropertyToHclTerraform(struct?: CcAlarmModel.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAlarmModel {
export interface AcknowledgeFlowProperty {
    /**
    * The value must be ``TRUE`` or ``FALSE``. If ``TRUE``, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to ``NORMAL``. If ``FALSE``, you won't receive notifications. The alarm automatically changes to the ``NORMAL`` state when the input property value returns to the specified range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#enabled CcAlarmModel#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
}
export class AcknowledgeFlowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AcknowledgeFlowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AcknowledgeFlowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
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
}
export interface InitializationConfigurationProperty {
    /**
    * The value must be ``TRUE`` or ``FALSE``. If ``FALSE``, all alarm instances created based on the alarm model are activated. The default value is ``TRUE``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#disabled_on_initialization CcAlarmModel#disabled_on_initialization}
    */
    readonly disabledOnInitialization?: boolean | cdktn.IResolvable;
}
export class InitializationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InitializationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disabledOnInitialization !== undefined) {
            hasAnyValues = true;
            internalValueResult.disabledOnInitialization = this._disabledOnInitialization;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InitializationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disabledOnInitialization = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disabledOnInitialization = value.disabledOnInitialization;
        }
    }

    // disabled_on_initialization - computed: true, optional: true, required: false
    private _disabledOnInitialization?: boolean | cdktn.IResolvable; 
    public get disabledOnInitialization() {
        return this.getBooleanAttribute('disabled_on_initialization');
    }
    public set disabledOnInitialization(value: boolean | cdktn.IResolvable) {
        this._disabledOnInitialization = value;
    }
    public resetDisabledOnInitialization() {
        this._disabledOnInitialization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disabledOnInitializationInput() {
        return this._disabledOnInitialization;
    }
}
export interface AlarmCapabilitiesProperty {
    /**
    * Specifies whether to get notified for alarm state changes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#acknowledge_flow CcAlarmModel#acknowledge_flow}
    */
    readonly acknowledgeFlow?: AcknowledgeFlowProperty;
    /**
    * Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#initialization_configuration CcAlarmModel#initialization_configuration}
    */
    readonly initializationConfiguration?: InitializationConfigurationProperty;
}
export class AlarmCapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmCapabilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acknowledgeFlow?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.acknowledgeFlow = this._acknowledgeFlow?.internalValue;
        }
        if (this._initializationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.initializationConfiguration = this._initializationConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmCapabilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acknowledgeFlow.internalValue = undefined;
            this._initializationConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acknowledgeFlow.internalValue = value.acknowledgeFlow;
            this._initializationConfiguration.internalValue = value.initializationConfiguration;
        }
    }

    // acknowledge_flow - computed: true, optional: true, required: false
    private _acknowledgeFlow = new AcknowledgeFlowPropertyOutputReference(this, "acknowledge_flow");
    public get acknowledgeFlow() {
        return this._acknowledgeFlow;
    }
    public putAcknowledgeFlow(value: AcknowledgeFlowProperty) {
        this._acknowledgeFlow.internalValue = value;
    }
    public resetAcknowledgeFlow() {
        this._acknowledgeFlow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acknowledgeFlowInput() {
        return this._acknowledgeFlow.internalValue;
    }

    // initialization_configuration - computed: true, optional: true, required: false
    private _initializationConfiguration = new InitializationConfigurationPropertyOutputReference(this, "initialization_configuration");
    public get initializationConfiguration() {
        return this._initializationConfiguration;
    }
    public putInitializationConfiguration(value: InitializationConfigurationProperty) {
        this._initializationConfiguration.internalValue = value;
    }
    public resetInitializationConfiguration() {
        this._initializationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initializationConfigurationInput() {
        return this._initializationConfiguration.internalValue;
    }
}
export interface PayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#content_expression CcAlarmModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#type CcAlarmModel#type}
    */
    readonly type?: string;
}
export class PayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
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
export interface DynamoDBv2Property {
    /**
    * Information needed to configure the payload.
    *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#payload CcAlarmModel#payload}
    */
    readonly payload?: PayloadProperty;
    /**
    * The name of the DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#table_name CcAlarmModel#table_name}
    */
    readonly tableName?: string;
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
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamoDBv2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payload.internalValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._tableName = value.tableName;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new PayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: PayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
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
export interface AlarmEventActionsAlarmActionsDynamoDbPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#content_expression CcAlarmModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#type CcAlarmModel#type}
    */
    readonly type?: string;
}
export class AlarmEventActionsAlarmActionsDynamoDbPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmEventActionsAlarmActionsDynamoDbPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmEventActionsAlarmActionsDynamoDbPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
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
export interface DynamoDBProperty {
    /**
    * The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#hash_key_field CcAlarmModel#hash_key_field}
    */
    readonly hashKeyField?: string;
    /**
    * The data type for the hash key (also called the partition key). You can specify the following values:
    *   +  ``'STRING'`` - The hash key is a string.
    *   +  ``'NUMBER'`` - The hash key is a number.
    *   
    *  If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#hash_key_type CcAlarmModel#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * The value of the hash key (also called the partition key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#hash_key_value CcAlarmModel#hash_key_value}
    */
    readonly hashKeyValue?: string;
    /**
    * The type of operation to perform. You can specify the following values: 
    *   +  ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
    *   +  ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    *   +  ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
    *   
    *  If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#operation CcAlarmModel#operation}
    */
    readonly operation?: string;
    /**
    * Information needed to configure the payload.
    *  By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#payload CcAlarmModel#payload}
    */
    readonly payload?: AlarmEventActionsAlarmActionsDynamoDbPayloadProperty;
    /**
    * The name of the DynamoDB column that receives the action payload.
    *  If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#payload_field CcAlarmModel#payload_field}
    */
    readonly payloadField?: string;
    /**
    * The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#range_key_field CcAlarmModel#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * The data type for the range key (also called the sort key), You can specify the following values:
    *   +  ``'STRING'`` - The range key is a string.
    *   +  ``'NUMBER'`` - The range key is number.
    *   
    *  If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#range_key_type CcAlarmModel#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * The value of the range key (also called the sort key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#range_key_value CcAlarmModel#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#table_name CcAlarmModel#table_name}
    */
    readonly tableName?: string;
}
export class DynamoDBPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynamoDBProperty | cdktn.IResolvable | undefined {
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
        if (this._operation !== undefined) {
            hasAnyValues = true;
            internalValueResult.operation = this._operation;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
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
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamoDBProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hashKeyField = undefined;
            this._hashKeyType = undefined;
            this._hashKeyValue = undefined;
            this._operation = undefined;
            this._payload.internalValue = undefined;
            this._payloadField = undefined;
            this._rangeKeyField = undefined;
            this._rangeKeyType = undefined;
            this._rangeKeyValue = undefined;
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
            this._operation = value.operation;
            this._payload.internalValue = value.payload;
            this._payloadField = value.payloadField;
            this._rangeKeyField = value.rangeKeyField;
            this._rangeKeyType = value.rangeKeyType;
            this._rangeKeyValue = value.rangeKeyValue;
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

    // operation - computed: true, optional: true, required: false
    private _operation?: string; 
    public get operation() {
        return this.getStringAttribute('operation');
    }
    public set operation(value: string) {
        this._operation = value;
    }
    public resetOperation() {
        this._operation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationInput() {
        return this._operation;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new AlarmEventActionsAlarmActionsDynamoDbPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: AlarmEventActionsAlarmActionsDynamoDbPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
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
export interface AlarmEventActionsAlarmActionsFirehosePayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#content_expression CcAlarmModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#type CcAlarmModel#type}
    */
    readonly type?: string;
}
export class AlarmEventActionsAlarmActionsFirehosePayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmEventActionsAlarmActionsFirehosePayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmEventActionsAlarmActionsFirehosePayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
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
    * The name of the Kinesis Data Firehose delivery stream where the data is written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#delivery_stream_name CcAlarmModel#delivery_stream_name}
    */
    readonly deliveryStreamName?: string;
    /**
    * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#payload CcAlarmModel#payload}
    */
    readonly payload?: AlarmEventActionsAlarmActionsFirehosePayloadProperty;
    /**
    * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#separator CcAlarmModel#separator}
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
        if (this._deliveryStreamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStreamName = this._deliveryStreamName;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
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
            this._deliveryStreamName = undefined;
            this._payload.internalValue = undefined;
            this._separator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStreamName = value.deliveryStreamName;
            this._payload.internalValue = value.payload;
            this._separator = value.separator;
        }
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

    // payload - computed: true, optional: true, required: false
    private _payload = new AlarmEventActionsAlarmActionsFirehosePayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: AlarmEventActionsAlarmActionsFirehosePayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
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
export interface AlarmEventActionsAlarmActionsIotEventsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#content_expression CcAlarmModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#type CcAlarmModel#type}
    */
    readonly type?: string;
}
export class AlarmEventActionsAlarmActionsIotEventsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmEventActionsAlarmActionsIotEventsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmEventActionsAlarmActionsIotEventsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
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
export interface IotEventsProperty {
    /**
    * The name of the ITE input where the data is sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#input_name CcAlarmModel#input_name}
    */
    readonly inputName?: string;
    /**
    * You can configure the action payload when you send a message to an ITE input.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#payload CcAlarmModel#payload}
    */
    readonly payload?: AlarmEventActionsAlarmActionsIotEventsPayloadProperty;
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
        if (this._inputName !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputName = this._inputName;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inputName = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inputName = value.inputName;
            this._payload.internalValue = value.payload;
        }
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

    // payload - computed: true, optional: true, required: false
    private _payload = new AlarmEventActionsAlarmActionsIotEventsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: AlarmEventActionsAlarmActionsIotEventsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface AssetPropertyTimestampProperty {
    /**
    * The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#offset_in_nanos CcAlarmModel#offset_in_nanos}
    */
    readonly offsetInNanos?: string;
    /**
    * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#time_in_seconds CcAlarmModel#time_in_seconds}
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
    * The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#boolean_value CcAlarmModel#boolean_value}
    */
    readonly booleanValue?: string;
    /**
    * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#double_value CcAlarmModel#double_value}
    */
    readonly doubleValue?: string;
    /**
    * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#integer_value CcAlarmModel#integer_value}
    */
    readonly integerValue?: string;
    /**
    * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#string_value CcAlarmModel#string_value}
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
    * The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#quality CcAlarmModel#quality}
    */
    readonly quality?: string;
    /**
    * The timestamp associated with the asset property value. The default is the current event time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#timestamp CcAlarmModel#timestamp}
    */
    readonly timestamp?: AssetPropertyTimestampProperty;
    /**
    * The value to send to an asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#value CcAlarmModel#value}
    */
    readonly value?: AssetPropertyVariantProperty;
}
export class AssetPropertyValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
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
export interface IotSiteWiseProperty {
    /**
    * The ID of the asset that has the specified property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#asset_id CcAlarmModel#asset_id}
    */
    readonly assetId?: string;
    /**
    * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#entry_id CcAlarmModel#entry_id}
    */
    readonly entryId?: string;
    /**
    * The alias of the asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#property_alias CcAlarmModel#property_alias}
    */
    readonly propertyAlias?: string;
    /**
    * The ID of the asset property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#property_id CcAlarmModel#property_id}
    */
    readonly propertyId?: string;
    /**
    * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#property_value CcAlarmModel#property_value}
    */
    readonly propertyValue?: AssetPropertyValueProperty;
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
        if (this._propertyValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyValue = this._propertyValue?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotSiteWiseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assetId = undefined;
            this._entryId = undefined;
            this._propertyAlias = undefined;
            this._propertyId = undefined;
            this._propertyValue.internalValue = undefined;
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
            this._propertyValue.internalValue = value.propertyValue;
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

    // property_value - computed: true, optional: true, required: false
    private _propertyValue = new AssetPropertyValuePropertyOutputReference(this, "property_value");
    public get propertyValue() {
        return this._propertyValue;
    }
    public putPropertyValue(value: AssetPropertyValueProperty) {
        this._propertyValue.internalValue = value;
    }
    public resetPropertyValue() {
        this._propertyValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyValueInput() {
        return this._propertyValue.internalValue;
    }
}
export interface AlarmEventActionsAlarmActionsIotTopicPublishPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#content_expression CcAlarmModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#type CcAlarmModel#type}
    */
    readonly type?: string;
}
export class AlarmEventActionsAlarmActionsIotTopicPublishPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmEventActionsAlarmActionsIotTopicPublishPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmEventActionsAlarmActionsIotTopicPublishPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
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
export interface IotTopicPublishProperty {
    /**
    * The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#mqtt_topic CcAlarmModel#mqtt_topic}
    */
    readonly mqttTopic?: string;
    /**
    * You can configure the action payload when you publish a message to an IoTCore topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#payload CcAlarmModel#payload}
    */
    readonly payload?: AlarmEventActionsAlarmActionsIotTopicPublishPayloadProperty;
}
export class IotTopicPublishPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IotTopicPublishProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mqttTopic !== undefined) {
            hasAnyValues = true;
            internalValueResult.mqttTopic = this._mqttTopic;
        }
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IotTopicPublishProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mqttTopic = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mqttTopic = value.mqttTopic;
            this._payload.internalValue = value.payload;
        }
    }

    // mqtt_topic - computed: true, optional: true, required: false
    private _mqttTopic?: string; 
    public get mqttTopic() {
        return this.getStringAttribute('mqtt_topic');
    }
    public set mqttTopic(value: string) {
        this._mqttTopic = value;
    }
    public resetMqttTopic() {
        this._mqttTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mqttTopicInput() {
        return this._mqttTopic;
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new AlarmEventActionsAlarmActionsIotTopicPublishPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: AlarmEventActionsAlarmActionsIotTopicPublishPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface AlarmEventActionsAlarmActionsLambdaPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#content_expression CcAlarmModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#type CcAlarmModel#type}
    */
    readonly type?: string;
}
export class AlarmEventActionsAlarmActionsLambdaPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmEventActionsAlarmActionsLambdaPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmEventActionsAlarmActionsLambdaPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
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
export interface LambdaProperty {
    /**
    * The ARN of the Lambda function that is executed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#function_arn CcAlarmModel#function_arn}
    */
    readonly functionArn?: string;
    /**
    * You can configure the action payload when you send a message to a Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#payload CcAlarmModel#payload}
    */
    readonly payload?: AlarmEventActionsAlarmActionsLambdaPayloadProperty;
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
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionArn = undefined;
            this._payload.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functionArn = value.functionArn;
            this._payload.internalValue = value.payload;
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

    // payload - computed: true, optional: true, required: false
    private _payload = new AlarmEventActionsAlarmActionsLambdaPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: AlarmEventActionsAlarmActionsLambdaPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
    }
}
export interface AlarmEventActionsAlarmActionsSnsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#content_expression CcAlarmModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#type CcAlarmModel#type}
    */
    readonly type?: string;
}
export class AlarmEventActionsAlarmActionsSnsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmEventActionsAlarmActionsSnsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmEventActionsAlarmActionsSnsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
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
export interface SnsProperty {
    /**
    * You can configure the action payload when you send a message as an Amazon SNS push notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#payload CcAlarmModel#payload}
    */
    readonly payload?: AlarmEventActionsAlarmActionsSnsPayloadProperty;
    /**
    * The ARN of the Amazon SNS target where the message is sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#target_arn CcAlarmModel#target_arn}
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
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
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
            this._payload.internalValue = undefined;
            this._targetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._targetArn = value.targetArn;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new AlarmEventActionsAlarmActionsSnsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: AlarmEventActionsAlarmActionsSnsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
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
export interface AlarmEventActionsAlarmActionsSqsPayloadProperty {
    /**
    * The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#content_expression CcAlarmModel#content_expression}
    */
    readonly contentExpression?: string;
    /**
    * The value of the payload type can be either ``STRING`` or ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#type CcAlarmModel#type}
    */
    readonly type?: string;
}
export class AlarmEventActionsAlarmActionsSqsPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmEventActionsAlarmActionsSqsPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentExpression = this._contentExpression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmEventActionsAlarmActionsSqsPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentExpression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentExpression = value.contentExpression;
            this._type = value.type;
        }
    }

    // content_expression - computed: true, optional: true, required: false
    private _contentExpression?: string; 
    public get contentExpression() {
        return this.getStringAttribute('content_expression');
    }
    public set contentExpression(value: string) {
        this._contentExpression = value;
    }
    public resetContentExpression() {
        this._contentExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentExpressionInput() {
        return this._contentExpression;
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
export interface SqsProperty {
    /**
    * You can configure the action payload when you send a message to an Amazon SQS queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#payload CcAlarmModel#payload}
    */
    readonly payload?: AlarmEventActionsAlarmActionsSqsPayloadProperty;
    /**
    * The URL of the SQS queue where the data is written.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#queue_url CcAlarmModel#queue_url}
    */
    readonly queueUrl?: string;
    /**
    * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#use_base_64 CcAlarmModel#use_base_64}
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
        if (this._payload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload?.internalValue;
        }
        if (this._queueUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueUrl = this._queueUrl;
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
            this._payload.internalValue = undefined;
            this._queueUrl = undefined;
            this._useBase64 = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payload.internalValue = value.payload;
            this._queueUrl = value.queueUrl;
            this._useBase64 = value.useBase64;
        }
    }

    // payload - computed: true, optional: true, required: false
    private _payload = new AlarmEventActionsAlarmActionsSqsPayloadPropertyOutputReference(this, "payload");
    public get payload() {
        return this._payload;
    }
    public putPayload(value: AlarmEventActionsAlarmActionsSqsPayloadProperty) {
        this._payload.internalValue = value;
    }
    public resetPayload() {
        this._payload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadInput() {
        return this._payload.internalValue;
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
export interface AlarmActionProperty {
    /**
    * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
    *  You must use expressions for all parameters in ``DynamoDBv2Action``. The expressions accept literals, operators, functions, references, and substitution templates.
    *   **Examples**
    *  +  For literal values, the expressions must contain single quotes. For example, the value for the ``tableName`` parameter can be ``'GreenhouseTemperatureTable'``.
    *   +  For references, you must specify either variables or input values. For example, the value for the ``tableName`` parameter can be ``$variable.ddbtableName``.
    *   +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
    *  In the following example, the value for the ``contentExpression`` parameter in ``Payload`` uses a substitution template. 
    *   ``'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'`` 
    *   +  For a string concatenation, you must use ``+``. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
    *  In the following example, the value for the ``tableName`` parameter uses a string concatenation. 
    *   ``'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`` 
    *   
    *  For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
    *  The value for the ``type`` parameter in ``Payload`` must be ``JSON``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#dynamo_d_bv_2 CcAlarmModel#dynamo_d_bv_2}
    */
    readonly dynamoDBv2?: DynamoDBv2Property;
    /**
    * Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
    *  You must use expressions for all parameters in ``DynamoDBAction``. The expressions accept literals, operators, functions, references, and substitution templates.
    *   **Examples**
    *  +  For literal values, the expressions must contain single quotes. For example, the value for the ``hashKeyType`` parameter can be ``'STRING'``.
    *   +  For references, you must specify either variables or input values. For example, the value for the ``hashKeyField`` parameter can be ``$input.GreenhouseInput.name``.
    *   +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
    *  In the following example, the value for the ``hashKeyValue`` parameter uses a substitution template. 
    *   ``'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'`` 
    *   +  For a string concatenation, you must use ``+``. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
    *  In the following example, the value for the ``tableName`` parameter uses a string concatenation. 
    *   ``'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`` 
    *   
    *  For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
    *  If the defined payload type is a string, ``DynamoDBAction`` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the ``payloadField`` parameter is ``<payload-field>_raw``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#dynamo_db CcAlarmModel#dynamo_db}
    */
    readonly dynamoDb?: DynamoDBProperty;
    /**
    * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#firehose CcAlarmModel#firehose}
    */
    readonly firehose?: FirehoseProperty;
    /**
    * Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#iot_events CcAlarmModel#iot_events}
    */
    readonly iotEvents?: IotEventsProperty;
    /**
    * Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW.
    *  You must use expressions for all parameters in ``IotSiteWiseAction``. The expressions accept literals, operators, functions, references, and substitutions templates.
    *   **Examples**
    *  +  For literal values, the expressions must contain single quotes. For example, the value for the ``propertyAlias`` parameter can be ``'/company/windfarm/3/turbine/7/temperature'``.
    *   +  For references, you must specify either variables or input values. For example, the value for the ``assetId`` parameter can be ``$input.TurbineInput.assetId1``.
    *   +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
    *  In the following example, the value for the ``propertyAlias`` parameter uses a substitution template. 
    *   ``'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'`` 
    *   
    *  You must specify either ``propertyAlias`` or both ``assetId`` and ``propertyId`` to identify the target asset property in ITSW.
    *  For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#iot_site_wise CcAlarmModel#iot_site_wise}
    */
    readonly iotSiteWise?: IotSiteWiseProperty;
    /**
    * Information required to publish the MQTT message through the IoT message broker.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#iot_topic_publish CcAlarmModel#iot_topic_publish}
    */
    readonly iotTopicPublish?: IotTopicPublishProperty;
    /**
    * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#lambda CcAlarmModel#lambda}
    */
    readonly lambda?: LambdaProperty;
    /**
    * Information required to publish the Amazon SNS message.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#sns CcAlarmModel#sns}
    */
    readonly sns?: SnsProperty;
    /**
    * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#sqs CcAlarmModel#sqs}
    */
    readonly sqs?: SqsProperty;
}
export class AlarmActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AlarmActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dynamoDBv2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDBv2 = this._dynamoDBv2?.internalValue;
        }
        if (this._dynamoDb?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDb = this._dynamoDb?.internalValue;
        }
        if (this._firehose?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehose = this._firehose?.internalValue;
        }
        if (this._iotEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotEvents = this._iotEvents?.internalValue;
        }
        if (this._iotSiteWise?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotSiteWise = this._iotSiteWise?.internalValue;
        }
        if (this._iotTopicPublish?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iotTopicPublish = this._iotTopicPublish?.internalValue;
        }
        if (this._lambda?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambda = this._lambda?.internalValue;
        }
        if (this._sns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sns = this._sns?.internalValue;
        }
        if (this._sqs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqs = this._sqs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dynamoDBv2.internalValue = undefined;
            this._dynamoDb.internalValue = undefined;
            this._firehose.internalValue = undefined;
            this._iotEvents.internalValue = undefined;
            this._iotSiteWise.internalValue = undefined;
            this._iotTopicPublish.internalValue = undefined;
            this._lambda.internalValue = undefined;
            this._sns.internalValue = undefined;
            this._sqs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dynamoDBv2.internalValue = value.dynamoDBv2;
            this._dynamoDb.internalValue = value.dynamoDb;
            this._firehose.internalValue = value.firehose;
            this._iotEvents.internalValue = value.iotEvents;
            this._iotSiteWise.internalValue = value.iotSiteWise;
            this._iotTopicPublish.internalValue = value.iotTopicPublish;
            this._lambda.internalValue = value.lambda;
            this._sns.internalValue = value.sns;
            this._sqs.internalValue = value.sqs;
        }
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
    private _dynamoDb = new DynamoDBPropertyOutputReference(this, "dynamo_db");
    public get dynamoDb() {
        return this._dynamoDb;
    }
    public putDynamoDb(value: DynamoDBProperty) {
        this._dynamoDb.internalValue = value;
    }
    public resetDynamoDb() {
        this._dynamoDb.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbInput() {
        return this._dynamoDb.internalValue;
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

    // iot_topic_publish - computed: true, optional: true, required: false
    private _iotTopicPublish = new IotTopicPublishPropertyOutputReference(this, "iot_topic_publish");
    public get iotTopicPublish() {
        return this._iotTopicPublish;
    }
    public putIotTopicPublish(value: IotTopicPublishProperty) {
        this._iotTopicPublish.internalValue = value;
    }
    public resetIotTopicPublish() {
        this._iotTopicPublish.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotTopicPublishInput() {
        return this._iotTopicPublish.internalValue;
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
}

export class AlarmActionPropertyList extends cdktn.ComplexList {
    public internalValue? : AlarmActionProperty[] | cdktn.IResolvable

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
    public get(index: number): AlarmActionPropertyOutputReference {
        return new AlarmActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AlarmEventActionsProperty {
    /**
    * Specifies one or more supported actions to receive notifications when the alarm state changes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#alarm_actions CcAlarmModel#alarm_actions}
    */
    readonly alarmActions?: AlarmActionProperty[] | cdktn.IResolvable;
}
export class AlarmEventActionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmEventActionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmActions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmActions = this._alarmActions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmEventActionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmActions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmActions.internalValue = value.alarmActions;
        }
    }

    // alarm_actions - computed: true, optional: true, required: false
    private _alarmActions = new AlarmActionPropertyList(this, "alarm_actions", false);
    public get alarmActions() {
        return this._alarmActions;
    }
    public putAlarmActions(value: AlarmActionProperty[] | cdktn.IResolvable) {
        this._alarmActions.internalValue = value;
    }
    public resetAlarmActions() {
        this._alarmActions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmActionsInput() {
        return this._alarmActions.internalValue;
    }
}
export interface SimpleRuleProperty {
    /**
    * The comparison operator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#comparison_operator CcAlarmModel#comparison_operator}
    */
    readonly comparisonOperator?: string;
    /**
    * The value on the left side of the comparison operator. You can specify an ITE input attribute as an input property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#input_property CcAlarmModel#input_property}
    */
    readonly inputProperty?: string;
    /**
    * The value on the right side of the comparison operator. You can enter a number or specify an ITE input attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#threshold CcAlarmModel#threshold}
    */
    readonly threshold?: string;
}
export class SimpleRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SimpleRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparisonOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._inputProperty !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputProperty = this._inputProperty;
        }
        if (this._threshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.threshold = this._threshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SimpleRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparisonOperator = undefined;
            this._inputProperty = undefined;
            this._threshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparisonOperator = value.comparisonOperator;
            this._inputProperty = value.inputProperty;
            this._threshold = value.threshold;
        }
    }

    // comparison_operator - computed: true, optional: true, required: false
    private _comparisonOperator?: string; 
    public get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    public set comparisonOperator(value: string) {
        this._comparisonOperator = value;
    }
    public resetComparisonOperator() {
        this._comparisonOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonOperatorInput() {
        return this._comparisonOperator;
    }

    // input_property - computed: true, optional: true, required: false
    private _inputProperty?: string; 
    public get inputProperty() {
        return this.getStringAttribute('input_property');
    }
    public set inputProperty(value: string) {
        this._inputProperty = value;
    }
    public resetInputProperty() {
        this._inputProperty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputPropertyInput() {
        return this._inputProperty;
    }

    // threshold - computed: true, optional: true, required: false
    private _threshold?: string; 
    public get threshold() {
        return this.getStringAttribute('threshold');
    }
    public set threshold(value: string) {
        this._threshold = value;
    }
    public resetThreshold() {
        this._threshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
        return this._threshold;
    }
}
export interface AlarmRuleProperty {
    /**
    * A rule that compares an input property value to a threshold value with a comparison operator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#simple_rule CcAlarmModel#simple_rule}
    */
    readonly simpleRule?: SimpleRuleProperty;
}
export class AlarmRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._simpleRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.simpleRule = this._simpleRule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._simpleRule.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._simpleRule.internalValue = value.simpleRule;
        }
    }

    // simple_rule - computed: true, optional: true, required: false
    private _simpleRule = new SimpleRulePropertyOutputReference(this, "simple_rule");
    public get simpleRule() {
        return this._simpleRule;
    }
    public putSimpleRule(value: SimpleRuleProperty) {
        this._simpleRule.internalValue = value;
    }
    public resetSimpleRule() {
        this._simpleRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get simpleRuleInput() {
        return this._simpleRule.internalValue;
    }
}
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#key CcAlarmModel#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotevents_alarm_model#value CcAlarmModel#value}
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
