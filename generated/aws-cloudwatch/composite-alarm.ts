// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCompositeAlarmProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CcCompositeAlarm#actions_enabled}
    */
    readonly actionsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Actions will be suppressed if the suppressor alarm is in the ALARM state. ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor CcCompositeAlarm#actions_suppressor}
    */
    readonly actionsSuppressor?: string;
    /**
    * Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_extension_period CcCompositeAlarm#actions_suppressor_extension_period}
    */
    readonly actionsSuppressorExtensionPeriod?: number;
    /**
    * Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor_wait_period CcCompositeAlarm#actions_suppressor_wait_period}
    */
    readonly actionsSuppressorWaitPeriod?: number;
    /**
    * The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CcCompositeAlarm#alarm_actions}
    */
    readonly alarmActions?: string[];
    /**
    * The description of the alarm
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_description CcCompositeAlarm#alarm_description}
    */
    readonly alarmDescription?: string;
    /**
    * The name of the Composite Alarm
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_name CcCompositeAlarm#alarm_name}
    */
    readonly alarmName?: string;
    /**
    * Expression which aggregates the state of other Alarms (Metric or Composite Alarms)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CcCompositeAlarm#alarm_rule}
    */
    readonly alarmRule: string;
    /**
    * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CcCompositeAlarm#insufficient_data_actions}
    */
    readonly insufficientDataActions?: string[];
    /**
    * The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#ok_actions CcCompositeAlarm#ok_actions}
    */
    readonly okActions?: string[];
    /**
    * A list of key-value pairs to associate with the composite alarm. You can associate as many as 50 tags with an alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#tags CcCompositeAlarm#tags}
    */
    readonly tags?: CcCompositeAlarm.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm awscc_cloudwatch_composite_alarm}
*/
export class CcCompositeAlarm extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudwatch_composite_alarm";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCompositeAlarm resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCompositeAlarm to import
    * @param importFromId The id of the existing CcCompositeAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCompositeAlarm to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_composite_alarm", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm awscc_cloudwatch_composite_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCompositeAlarmProps
    */
    public constructor(scope: Construct, id: string, config: CcCompositeAlarmProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudwatch_composite_alarm',
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
        this._actionsEnabled = config.actionsEnabled;
        this._actionsSuppressor = config.actionsSuppressor;
        this._actionsSuppressorExtensionPeriod = config.actionsSuppressorExtensionPeriod;
        this._actionsSuppressorWaitPeriod = config.actionsSuppressorWaitPeriod;
        this._alarmActions = config.alarmActions;
        this._alarmDescription = config.alarmDescription;
        this._alarmName = config.alarmName;
        this._alarmRule = config.alarmRule;
        this._insufficientDataActions = config.insufficientDataActions;
        this._okActions = config.okActions;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions_enabled - computed: true, optional: true, required: false
    private _actionsEnabled?: boolean | cdktn.IResolvable; 
    public get actionsEnabled() {
        return this.getBooleanAttribute('actions_enabled');
    }
    public set actionsEnabled(value: boolean | cdktn.IResolvable) {
        this._actionsEnabled = value;
    }
    public resetActionsEnabled() {
        this._actionsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsEnabledInput() {
        return this._actionsEnabled;
    }

    // actions_suppressor - computed: true, optional: true, required: false
    private _actionsSuppressor?: string; 
    public get actionsSuppressor() {
        return this.getStringAttribute('actions_suppressor');
    }
    public set actionsSuppressor(value: string) {
        this._actionsSuppressor = value;
    }
    public resetActionsSuppressor() {
        this._actionsSuppressor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsSuppressorInput() {
        return this._actionsSuppressor;
    }

    // actions_suppressor_extension_period - computed: true, optional: true, required: false
    private _actionsSuppressorExtensionPeriod?: number; 
    public get actionsSuppressorExtensionPeriod() {
        return this.getNumberAttribute('actions_suppressor_extension_period');
    }
    public set actionsSuppressorExtensionPeriod(value: number) {
        this._actionsSuppressorExtensionPeriod = value;
    }
    public resetActionsSuppressorExtensionPeriod() {
        this._actionsSuppressorExtensionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsSuppressorExtensionPeriodInput() {
        return this._actionsSuppressorExtensionPeriod;
    }

    // actions_suppressor_wait_period - computed: true, optional: true, required: false
    private _actionsSuppressorWaitPeriod?: number; 
    public get actionsSuppressorWaitPeriod() {
        return this.getNumberAttribute('actions_suppressor_wait_period');
    }
    public set actionsSuppressorWaitPeriod(value: number) {
        this._actionsSuppressorWaitPeriod = value;
    }
    public resetActionsSuppressorWaitPeriod() {
        this._actionsSuppressorWaitPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsSuppressorWaitPeriodInput() {
        return this._actionsSuppressorWaitPeriod;
    }

    // alarm_actions - computed: true, optional: true, required: false
    private _alarmActions?: string[]; 
    public get alarmActions() {
        return this.getListAttribute('alarm_actions');
    }
    public set alarmActions(value: string[]) {
        this._alarmActions = value;
    }
    public resetAlarmActions() {
        this._alarmActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmActionsInput() {
        return this._alarmActions;
    }

    // alarm_description - computed: true, optional: true, required: false
    private _alarmDescription?: string; 
    public get alarmDescription() {
        return this.getStringAttribute('alarm_description');
    }
    public set alarmDescription(value: string) {
        this._alarmDescription = value;
    }
    public resetAlarmDescription() {
        this._alarmDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmDescriptionInput() {
        return this._alarmDescription;
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

    // alarm_rule - computed: false, optional: false, required: true
    private _alarmRule?: string; 
    public get alarmRule() {
        return this.getStringAttribute('alarm_rule');
    }
    public set alarmRule(value: string) {
        this._alarmRule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmRuleInput() {
        return this._alarmRule;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // insufficient_data_actions - computed: true, optional: true, required: false
    private _insufficientDataActions?: string[]; 
    public get insufficientDataActions() {
        return this.getListAttribute('insufficient_data_actions');
    }
    public set insufficientDataActions(value: string[]) {
        this._insufficientDataActions = value;
    }
    public resetInsufficientDataActions() {
        this._insufficientDataActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insufficientDataActionsInput() {
        return this._insufficientDataActions;
    }

    // ok_actions - computed: true, optional: true, required: false
    private _okActions?: string[]; 
    public get okActions() {
        return this.getListAttribute('ok_actions');
    }
    public set okActions(value: string[]) {
        this._okActions = value;
    }
    public resetOkActions() {
        this._okActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get okActionsInput() {
        return this._okActions;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCompositeAlarm.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCompositeAlarm.TagProperty[] | cdktn.IResolvable) {
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
            actions_enabled: cdktn.booleanToTerraform(this._actionsEnabled),
            actions_suppressor: cdktn.stringToTerraform(this._actionsSuppressor),
            actions_suppressor_extension_period: cdktn.numberToTerraform(this._actionsSuppressorExtensionPeriod),
            actions_suppressor_wait_period: cdktn.numberToTerraform(this._actionsSuppressorWaitPeriod),
            alarm_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._alarmActions),
            alarm_description: cdktn.stringToTerraform(this._alarmDescription),
            alarm_name: cdktn.stringToTerraform(this._alarmName),
            alarm_rule: cdktn.stringToTerraform(this._alarmRule),
            insufficient_data_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._insufficientDataActions),
            ok_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._okActions),
            tags: cdktn.listMapper(ccCompositeAlarmTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            actions_enabled: {
                value: cdktn.booleanToHclTerraform(this._actionsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            actions_suppressor: {
                value: cdktn.stringToHclTerraform(this._actionsSuppressor),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            actions_suppressor_extension_period: {
                value: cdktn.numberToHclTerraform(this._actionsSuppressorExtensionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            actions_suppressor_wait_period: {
                value: cdktn.numberToHclTerraform(this._actionsSuppressorWaitPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            alarm_actions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._alarmActions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            alarm_description: {
                value: cdktn.stringToHclTerraform(this._alarmDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alarm_name: {
                value: cdktn.stringToHclTerraform(this._alarmName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alarm_rule: {
                value: cdktn.stringToHclTerraform(this._alarmRule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            insufficient_data_actions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._insufficientDataActions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            ok_actions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._okActions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCompositeAlarmTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCompositeAlarm.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCompositeAlarmTagPropertyToTerraform(struct?: CcCompositeAlarm.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCompositeAlarmTagPropertyToHclTerraform(struct?: CcCompositeAlarm.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCompositeAlarm {
export interface TagProperty {
    /**
    * A unique identifier for the tag. The combination of tag keys and values can help you organize and categorize your resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#key CcCompositeAlarm#key}
    */
    readonly key?: string;
    /**
    * The value for the specified tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudwatch_composite_alarm#value CcCompositeAlarm#value}
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
