// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAlarmMuteRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the AlarmMuteRule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#description CcAlarmMuteRule#description}
    */
    readonly description?: string;
    /**
    * The date, with the same timezone offset as "ScheduleTimezone" after which the alarm mute rule will be expired.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#expire_date CcAlarmMuteRule#expire_date}
    */
    readonly expireDate?: string;
    /**
    * Targets to be muted
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#mute_targets CcAlarmMuteRule#mute_targets}
    */
    readonly muteTargets?: CcAlarmMuteRule.MuteTargetsProperty;
    /**
    * The name of the AlarmMuteRule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#name CcAlarmMuteRule#name}
    */
    readonly name?: string;
    /**
    * The rule for the mute
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#rule CcAlarmMuteRule#rule}
    */
    readonly rule: CcAlarmMuteRule.RuleProperty;
    /**
    * The date, with the same timezone offset as "ScheduleTimezone", after which the alarm mute rule will become active.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#start_date CcAlarmMuteRule#start_date}
    */
    readonly startDate?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#tags CcAlarmMuteRule#tags}
    */
    readonly tags?: CcAlarmMuteRule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule awscc_cloudwatch_alarm_mute_rule}
*/
export class CcAlarmMuteRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudwatch_alarm_mute_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAlarmMuteRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAlarmMuteRule to import
    * @param importFromId The id of the existing CcAlarmMuteRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAlarmMuteRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_alarm_mute_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule awscc_cloudwatch_alarm_mute_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAlarmMuteRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcAlarmMuteRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudwatch_alarm_mute_rule',
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
        this._description = config.description;
        this._expireDate = config.expireDate;
        this._muteTargets.internalValue = config.muteTargets;
        this._name = config.name;
        this._rule.internalValue = config.rule;
        this._startDate = config.startDate;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // expire_date - computed: true, optional: true, required: false
    private _expireDate?: string; 
    public get expireDate() {
        return this.getStringAttribute('expire_date');
    }
    public set expireDate(value: string) {
        this._expireDate = value;
    }
    public resetExpireDate() {
        this._expireDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expireDateInput() {
        return this._expireDate;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_timestamp - computed: true, optional: false, required: false
    public get lastUpdatedTimestamp() {
        return this.getStringAttribute('last_updated_timestamp');
    }

    // mute_targets - computed: true, optional: true, required: false
    private _muteTargets = new CcAlarmMuteRule.MuteTargetsPropertyOutputReference(this, "mute_targets");
    public get muteTargets() {
        return this._muteTargets;
    }
    public putMuteTargets(value: CcAlarmMuteRule.MuteTargetsProperty) {
        this._muteTargets.internalValue = value;
    }
    public resetMuteTargets() {
        this._muteTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get muteTargetsInput() {
        return this._muteTargets.internalValue;
    }

    // mute_type - computed: true, optional: false, required: false
    public get muteType() {
        return this.getStringAttribute('mute_type');
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

    // rule - computed: false, optional: false, required: true
    private _rule = new CcAlarmMuteRule.RulePropertyOutputReference(this, "rule");
    public get rule() {
        return this._rule;
    }
    public putRule(value: CcAlarmMuteRule.RuleProperty) {
        this._rule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
        return this._rule.internalValue;
    }

    // start_date - computed: true, optional: true, required: false
    private _startDate?: string; 
    public get startDate() {
        return this.getStringAttribute('start_date');
    }
    public set startDate(value: string) {
        this._startDate = value;
    }
    public resetStartDate() {
        this._startDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startDateInput() {
        return this._startDate;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAlarmMuteRule.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAlarmMuteRule.TagProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            expire_date: cdktn.stringToTerraform(this._expireDate),
            mute_targets: ccAlarmMuteRuleMuteTargetsPropertyToTerraform(this._muteTargets.internalValue),
            name: cdktn.stringToTerraform(this._name),
            rule: ccAlarmMuteRuleRulePropertyToTerraform(this._rule.internalValue),
            start_date: cdktn.stringToTerraform(this._startDate),
            tags: cdktn.listMapper(ccAlarmMuteRuleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            expire_date: {
                value: cdktn.stringToHclTerraform(this._expireDate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            mute_targets: {
                value: ccAlarmMuteRuleMuteTargetsPropertyToHclTerraform(this._muteTargets.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAlarmMuteRule.MuteTargetsProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule: {
                value: ccAlarmMuteRuleRulePropertyToHclTerraform(this._rule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAlarmMuteRule.RuleProperty",
            },
            start_date: {
                value: cdktn.stringToHclTerraform(this._startDate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAlarmMuteRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAlarmMuteRule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAlarmMuteRuleMuteTargetsPropertyToTerraform(struct?: CcAlarmMuteRule.MuteTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alarmNames),
    }
}


export function ccAlarmMuteRuleMuteTargetsPropertyToHclTerraform(struct?: CcAlarmMuteRule.MuteTargetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alarmNames),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmMuteRuleSchedulePropertyToTerraform(struct?: CcAlarmMuteRule.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        duration: cdktn.stringToTerraform(struct!.duration),
        expression: cdktn.stringToTerraform(struct!.expression),
        timezone: cdktn.stringToTerraform(struct!.timezone),
    }
}


export function ccAlarmMuteRuleSchedulePropertyToHclTerraform(struct?: CcAlarmMuteRule.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        duration: {
            value: cdktn.stringToHclTerraform(struct!.duration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timezone: {
            value: cdktn.stringToHclTerraform(struct!.timezone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmMuteRuleRulePropertyToTerraform(struct?: CcAlarmMuteRule.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        schedule: ccAlarmMuteRuleSchedulePropertyToTerraform(struct!.schedule),
    }
}


export function ccAlarmMuteRuleRulePropertyToHclTerraform(struct?: CcAlarmMuteRule.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        schedule: {
            value: ccAlarmMuteRuleSchedulePropertyToHclTerraform(struct!.schedule),
            isBlock: true,
            type: "struct",
            storageClassType: "ScheduleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAlarmMuteRuleTagPropertyToTerraform(struct?: CcAlarmMuteRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAlarmMuteRuleTagPropertyToHclTerraform(struct?: CcAlarmMuteRule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAlarmMuteRule {
export interface MuteTargetsProperty {
    /**
    * The alarm names to be mute by the AlarmMuteRule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#alarm_names CcAlarmMuteRule#alarm_names}
    */
    readonly alarmNames?: string[];
}
export class MuteTargetsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MuteTargetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmNames = this._alarmNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MuteTargetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmNames = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmNames = value.alarmNames;
        }
    }

    // alarm_names - computed: true, optional: true, required: false
    private _alarmNames?: string[]; 
    public get alarmNames() {
        return cdktn.Fn.tolist(this.getListAttribute('alarm_names'));
    }
    public set alarmNames(value: string[]) {
        this._alarmNames = value;
    }
    public resetAlarmNames() {
        this._alarmNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNamesInput() {
        return this._alarmNames;
    }
}
export interface ScheduleProperty {
    /**
    * The duration of the schedule when it triggers
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#duration CcAlarmMuteRule#duration}
    */
    readonly duration: string;
    /**
    * The expression of the schedule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#expression CcAlarmMuteRule#expression}
    */
    readonly expression: string;
    /**
    * The timezone of the schedule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#timezone CcAlarmMuteRule#timezone}
    */
    readonly timezone?: string;
}
export class SchedulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._duration !== undefined) {
            hasAnyValues = true;
            internalValueResult.duration = this._duration;
        }
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._timezone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timezone = this._timezone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._duration = undefined;
            this._expression = undefined;
            this._timezone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._duration = value.duration;
            this._expression = value.expression;
            this._timezone = value.timezone;
        }
    }

    // duration - computed: false, optional: false, required: true
    private _duration?: string; 
    public get duration() {
        return this.getStringAttribute('duration');
    }
    public set duration(value: string) {
        this._duration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInput() {
        return this._duration;
    }

    // expression - computed: false, optional: false, required: true
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // timezone - computed: true, optional: true, required: false
    private _timezone?: string; 
    public get timezone() {
        return this.getStringAttribute('timezone');
    }
    public set timezone(value: string) {
        this._timezone = value;
    }
    public resetTimezone() {
        this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneInput() {
        return this._timezone;
    }
}
export interface RuleProperty {
    /**
    * Schedule for the mute to be active
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#schedule CcAlarmMuteRule#schedule}
    */
    readonly schedule: ScheduleProperty;
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._schedule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedule = this._schedule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._schedule.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._schedule.internalValue = value.schedule;
        }
    }

    // schedule - computed: false, optional: false, required: true
    private _schedule = new SchedulePropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: ScheduleProperty) {
        this._schedule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#key CcAlarmMuteRule#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_alarm_mute_rule#value CcAlarmMuteRule#value}
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
