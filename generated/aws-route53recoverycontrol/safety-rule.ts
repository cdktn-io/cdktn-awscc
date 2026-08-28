// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSafetyRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#assertion_rule CcSafetyRule#assertion_rule}
    */
    readonly assertionRule?: CcSafetyRule.AssertionRuleProperty;
    /**
    * The Amazon Resource Name (ARN) of the control panel.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#control_panel_arn CcSafetyRule#control_panel_arn}
    */
    readonly controlPanelArn?: string;
    /**
    * A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#gating_rule CcSafetyRule#gating_rule}
    */
    readonly gatingRule?: CcSafetyRule.GatingRuleProperty;
    /**
    * The name for the safety rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#name CcSafetyRule#name}
    */
    readonly name?: string;
    /**
    * The rule configuration for an assertion rule or gating rule. This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#rule_config CcSafetyRule#rule_config}
    */
    readonly ruleConfig?: CcSafetyRule.RuleConfigProperty;
    /**
    * A collection of tags associated with a resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#tags CcSafetyRule#tags}
    */
    readonly tags?: CcSafetyRule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule awscc_route53recoverycontrol_safety_rule}
*/
export class CcSafetyRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53recoverycontrol_safety_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSafetyRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSafetyRule to import
    * @param importFromId The id of the existing CcSafetyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSafetyRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53recoverycontrol_safety_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule awscc_route53recoverycontrol_safety_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSafetyRuleProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcSafetyRuleProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53recoverycontrol_safety_rule',
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
        this._assertionRule.internalValue = config.assertionRule;
        this._controlPanelArn = config.controlPanelArn;
        this._gatingRule.internalValue = config.gatingRule;
        this._name = config.name;
        this._ruleConfig.internalValue = config.ruleConfig;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // assertion_rule - computed: true, optional: true, required: false
    private _assertionRule = new CcSafetyRule.AssertionRulePropertyOutputReference(this, "assertion_rule");
    public get assertionRule() {
        return this._assertionRule;
    }
    public putAssertionRule(value: CcSafetyRule.AssertionRuleProperty) {
        this._assertionRule.internalValue = value;
    }
    public resetAssertionRule() {
        this._assertionRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assertionRuleInput() {
        return this._assertionRule.internalValue;
    }

    // control_panel_arn - computed: true, optional: true, required: false
    private _controlPanelArn?: string; 
    public get controlPanelArn() {
        return this.getStringAttribute('control_panel_arn');
    }
    public set controlPanelArn(value: string) {
        this._controlPanelArn = value;
    }
    public resetControlPanelArn() {
        this._controlPanelArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlPanelArnInput() {
        return this._controlPanelArn;
    }

    // gating_rule - computed: true, optional: true, required: false
    private _gatingRule = new CcSafetyRule.GatingRulePropertyOutputReference(this, "gating_rule");
    public get gatingRule() {
        return this._gatingRule;
    }
    public putGatingRule(value: CcSafetyRule.GatingRuleProperty) {
        this._gatingRule.internalValue = value;
    }
    public resetGatingRule() {
        this._gatingRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatingRuleInput() {
        return this._gatingRule.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // rule_config - computed: true, optional: true, required: false
    private _ruleConfig = new CcSafetyRule.RuleConfigPropertyOutputReference(this, "rule_config");
    public get ruleConfig() {
        return this._ruleConfig;
    }
    public putRuleConfig(value: CcSafetyRule.RuleConfigProperty) {
        this._ruleConfig.internalValue = value;
    }
    public resetRuleConfig() {
        this._ruleConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleConfigInput() {
        return this._ruleConfig.internalValue;
    }

    // safety_rule_arn - computed: true, optional: false, required: false
    public get safetyRuleArn() {
        return this.getStringAttribute('safety_rule_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSafetyRule.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSafetyRule.TagProperty[] | cdktn.IResolvable) {
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
            assertion_rule: ccSafetyRuleAssertionRulePropertyToTerraform(this._assertionRule.internalValue),
            control_panel_arn: cdktn.stringToTerraform(this._controlPanelArn),
            gating_rule: ccSafetyRuleGatingRulePropertyToTerraform(this._gatingRule.internalValue),
            name: cdktn.stringToTerraform(this._name),
            rule_config: ccSafetyRuleRuleConfigPropertyToTerraform(this._ruleConfig.internalValue),
            tags: cdktn.listMapper(ccSafetyRuleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            assertion_rule: {
                value: ccSafetyRuleAssertionRulePropertyToHclTerraform(this._assertionRule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSafetyRule.AssertionRuleProperty",
            },
            control_panel_arn: {
                value: cdktn.stringToHclTerraform(this._controlPanelArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gating_rule: {
                value: ccSafetyRuleGatingRulePropertyToHclTerraform(this._gatingRule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSafetyRule.GatingRuleProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_config: {
                value: ccSafetyRuleRuleConfigPropertyToHclTerraform(this._ruleConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSafetyRule.RuleConfigProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSafetyRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSafetyRule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSafetyRuleAssertionRulePropertyToTerraform(struct?: CcSafetyRule.AssertionRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        asserted_controls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.assertedControls),
        wait_period_ms: cdktn.numberToTerraform(struct!.waitPeriodMs),
    }
}


export function ccSafetyRuleAssertionRulePropertyToHclTerraform(struct?: CcSafetyRule.AssertionRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        asserted_controls: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.assertedControls),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        wait_period_ms: {
            value: cdktn.numberToHclTerraform(struct!.waitPeriodMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSafetyRuleGatingRulePropertyToTerraform(struct?: CcSafetyRule.GatingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gating_controls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.gatingControls),
        target_controls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetControls),
        wait_period_ms: cdktn.numberToTerraform(struct!.waitPeriodMs),
    }
}


export function ccSafetyRuleGatingRulePropertyToHclTerraform(struct?: CcSafetyRule.GatingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        gating_controls: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.gatingControls),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        target_controls: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetControls),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        wait_period_ms: {
            value: cdktn.numberToHclTerraform(struct!.waitPeriodMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSafetyRuleRuleConfigPropertyToTerraform(struct?: CcSafetyRule.RuleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        inverted: cdktn.booleanToTerraform(struct!.inverted),
        threshold: cdktn.numberToTerraform(struct!.threshold),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccSafetyRuleRuleConfigPropertyToHclTerraform(struct?: CcSafetyRule.RuleConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        inverted: {
            value: cdktn.booleanToHclTerraform(struct!.inverted),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        threshold: {
            value: cdktn.numberToHclTerraform(struct!.threshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccSafetyRuleTagPropertyToTerraform(struct?: CcSafetyRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSafetyRuleTagPropertyToHclTerraform(struct?: CcSafetyRule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSafetyRule {
export interface AssertionRuleProperty {
    /**
    * The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three AWS Regions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#asserted_controls CcSafetyRule#asserted_controls}
    */
    readonly assertedControls?: string[];
    /**
    * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms CcSafetyRule#wait_period_ms}
    */
    readonly waitPeriodMs?: number;
}
export class AssertionRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AssertionRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assertedControls !== undefined) {
            hasAnyValues = true;
            internalValueResult.assertedControls = this._assertedControls;
        }
        if (this._waitPeriodMs !== undefined) {
            hasAnyValues = true;
            internalValueResult.waitPeriodMs = this._waitPeriodMs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssertionRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assertedControls = undefined;
            this._waitPeriodMs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assertedControls = value.assertedControls;
            this._waitPeriodMs = value.waitPeriodMs;
        }
    }

    // asserted_controls - computed: true, optional: true, required: false
    private _assertedControls?: string[]; 
    public get assertedControls() {
        return this.getListAttribute('asserted_controls');
    }
    public set assertedControls(value: string[]) {
        this._assertedControls = value;
    }
    public resetAssertedControls() {
        this._assertedControls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assertedControlsInput() {
        return this._assertedControls;
    }

    // wait_period_ms - computed: true, optional: true, required: false
    private _waitPeriodMs?: number; 
    public get waitPeriodMs() {
        return this.getNumberAttribute('wait_period_ms');
    }
    public set waitPeriodMs(value: number) {
        this._waitPeriodMs = value;
    }
    public resetWaitPeriodMs() {
        this._waitPeriodMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitPeriodMsInput() {
        return this._waitPeriodMs;
    }
}
export interface GatingRuleProperty {
    /**
    * The gating controls for the gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#gating_controls CcSafetyRule#gating_controls}
    */
    readonly gatingControls?: string[];
    /**
    * Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three AWS Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true. 
    * In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#target_controls CcSafetyRule#target_controls}
    */
    readonly targetControls?: string[];
    /**
    * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms CcSafetyRule#wait_period_ms}
    */
    readonly waitPeriodMs?: number;
}
export class GatingRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GatingRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gatingControls !== undefined) {
            hasAnyValues = true;
            internalValueResult.gatingControls = this._gatingControls;
        }
        if (this._targetControls !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetControls = this._targetControls;
        }
        if (this._waitPeriodMs !== undefined) {
            hasAnyValues = true;
            internalValueResult.waitPeriodMs = this._waitPeriodMs;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GatingRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gatingControls = undefined;
            this._targetControls = undefined;
            this._waitPeriodMs = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gatingControls = value.gatingControls;
            this._targetControls = value.targetControls;
            this._waitPeriodMs = value.waitPeriodMs;
        }
    }

    // gating_controls - computed: true, optional: true, required: false
    private _gatingControls?: string[]; 
    public get gatingControls() {
        return this.getListAttribute('gating_controls');
    }
    public set gatingControls(value: string[]) {
        this._gatingControls = value;
    }
    public resetGatingControls() {
        this._gatingControls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gatingControlsInput() {
        return this._gatingControls;
    }

    // target_controls - computed: true, optional: true, required: false
    private _targetControls?: string[]; 
    public get targetControls() {
        return this.getListAttribute('target_controls');
    }
    public set targetControls(value: string[]) {
        this._targetControls = value;
    }
    public resetTargetControls() {
        this._targetControls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetControlsInput() {
        return this._targetControls;
    }

    // wait_period_ms - computed: true, optional: true, required: false
    private _waitPeriodMs?: number; 
    public get waitPeriodMs() {
        return this.getNumberAttribute('wait_period_ms');
    }
    public set waitPeriodMs(value: number) {
        this._waitPeriodMs = value;
    }
    public resetWaitPeriodMs() {
        this._waitPeriodMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitPeriodMsInput() {
        return this._waitPeriodMs;
    }
}
export interface RuleConfigProperty {
    /**
    * Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#inverted CcSafetyRule#inverted}
    */
    readonly inverted?: boolean | cdktn.IResolvable;
    /**
    * The value of N, when you specify an ATLEAST rule type. That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#threshold CcSafetyRule#threshold}
    */
    readonly threshold?: number;
    /**
    * A rule can be one of the following: ATLEAST, AND, or OR.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#type CcSafetyRule#type}
    */
    readonly type?: string;
}
export class RuleConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inverted !== undefined) {
            hasAnyValues = true;
            internalValueResult.inverted = this._inverted;
        }
        if (this._threshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.threshold = this._threshold;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inverted = undefined;
            this._threshold = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inverted = value.inverted;
            this._threshold = value.threshold;
            this._type = value.type;
        }
    }

    // inverted - computed: true, optional: true, required: false
    private _inverted?: boolean | cdktn.IResolvable; 
    public get inverted() {
        return this.getBooleanAttribute('inverted');
    }
    public set inverted(value: boolean | cdktn.IResolvable) {
        this._inverted = value;
    }
    public resetInverted() {
        this._inverted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invertedInput() {
        return this._inverted;
    }

    // threshold - computed: true, optional: true, required: false
    private _threshold?: number; 
    public get threshold() {
        return this.getNumberAttribute('threshold');
    }
    public set threshold(value: number) {
        this._threshold = value;
    }
    public resetThreshold() {
        this._threshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
        return this._threshold;
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
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#key CcSafetyRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53recoverycontrol_safety_rule#value CcSafetyRule#value}
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
