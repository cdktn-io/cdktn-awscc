// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCaseRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * A description explaining the purpose and behavior of this case rule. Helps administrators understand when and why this rule applies to case fields.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#description CcCaseRule#description}
    */
    readonly description?: string;
    /**
    * The unique identifier of the Cases domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#domain_id CcCaseRule#domain_id}
    */
    readonly domainId?: string;
    /**
    * A descriptive name for the case rule. Must be unique within the domain and should clearly indicate the rule's purpose (e.g., 'Priority Field Required for Urgent Cases').
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#name CcCaseRule#name}
    */
    readonly name: string;
    /**
    * Defines the rule behavior and conditions. Specifies the rule type and the conditions under which it applies. In the Amazon Connect admin website, this corresponds to case field conditions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#rule CcCaseRule#rule}
    */
    readonly rule: CcCaseRule.CaseRuleDetailsProperty;
    /**
    * The tags that you attach to this case rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#tags CcCaseRule#tags}
    */
    readonly tags?: CcCaseRule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule awscc_cases_case_rule}
*/
export class CcCaseRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cases_case_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCaseRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCaseRule to import
    * @param importFromId The id of the existing CcCaseRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCaseRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cases_case_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule awscc_cases_case_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCaseRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcCaseRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cases_case_rule',
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
        this._domainId = config.domainId;
        this._name = config.name;
        this._rule.internalValue = config.rule;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // case_rule_arn - computed: true, optional: false, required: false
    public get caseRuleArn() {
        return this.getStringAttribute('case_rule_arn');
    }

    // case_rule_id - computed: true, optional: false, required: false
    public get caseRuleId() {
        return this.getStringAttribute('case_rule_id');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
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

    // domain_id - computed: true, optional: true, required: false
    private _domainId?: string; 
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }
    public set domainId(value: string) {
        this._domainId = value;
    }
    public resetDomainId() {
        this._domainId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdInput() {
        return this._domainId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // rule - computed: false, optional: false, required: true
    private _rule = new CcCaseRule.CaseRuleDetailsPropertyOutputReference(this, "rule");
    public get rule() {
        return this._rule;
    }
    public putRule(value: CcCaseRule.CaseRuleDetailsProperty) {
        this._rule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
        return this._rule.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCaseRule.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCaseRule.TagProperty[] | cdktn.IResolvable) {
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
            domain_id: cdktn.stringToTerraform(this._domainId),
            name: cdktn.stringToTerraform(this._name),
            rule: ccCaseRuleCaseRuleDetailsPropertyToTerraform(this._rule.internalValue),
            tags: cdktn.listMapper(ccCaseRuleTagPropertyToTerraform, false)(this._tags.internalValue),
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
            domain_id: {
                value: cdktn.stringToHclTerraform(this._domainId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule: {
                value: ccCaseRuleCaseRuleDetailsPropertyToHclTerraform(this._rule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCaseRule.CaseRuleDetailsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCaseRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCaseRule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCaseRuleOperandOnePropertyToTerraform(struct?: CcCaseRule.OperandOneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_id: cdktn.stringToTerraform(struct!.fieldId),
    }
}


export function ccCaseRuleOperandOnePropertyToHclTerraform(struct?: CcCaseRule.OperandOneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_id: {
            value: cdktn.stringToHclTerraform(struct!.fieldId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleOperandTwoPropertyToTerraform(struct?: CcCaseRule.OperandTwoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
        double_value: cdktn.numberToTerraform(struct!.doubleValue),
        empty_value: cdktn.stringToTerraform(struct!.emptyValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccCaseRuleOperandTwoPropertyToHclTerraform(struct?: CcCaseRule.OperandTwoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.booleanToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        double_value: {
            value: cdktn.numberToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        empty_value: {
            value: cdktn.stringToHclTerraform(struct!.emptyValue),
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


export function ccCaseRuleBooleanOperandsPropertyToTerraform(struct?: CcCaseRule.BooleanOperandsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        operand_one: ccCaseRuleOperandOnePropertyToTerraform(struct!.operandOne),
        operand_two: ccCaseRuleOperandTwoPropertyToTerraform(struct!.operandTwo),
        result: cdktn.booleanToTerraform(struct!.result),
    }
}


export function ccCaseRuleBooleanOperandsPropertyToHclTerraform(struct?: CcCaseRule.BooleanOperandsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        operand_one: {
            value: ccCaseRuleOperandOnePropertyToHclTerraform(struct!.operandOne),
            isBlock: true,
            type: "struct",
            storageClassType: "OperandOneProperty",
        },
        operand_two: {
            value: ccCaseRuleOperandTwoPropertyToHclTerraform(struct!.operandTwo),
            isBlock: true,
            type: "struct",
            storageClassType: "OperandTwoProperty",
        },
        result: {
            value: cdktn.booleanToHclTerraform(struct!.result),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleRuleHiddenConditionsNotEqualToOperandOnePropertyToTerraform(struct?: CcCaseRule.RuleHiddenConditionsNotEqualToOperandOneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_id: cdktn.stringToTerraform(struct!.fieldId),
    }
}


export function ccCaseRuleRuleHiddenConditionsNotEqualToOperandOnePropertyToHclTerraform(struct?: CcCaseRule.RuleHiddenConditionsNotEqualToOperandOneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_id: {
            value: cdktn.stringToHclTerraform(struct!.fieldId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleRuleHiddenConditionsNotEqualToOperandTwoPropertyToTerraform(struct?: CcCaseRule.RuleHiddenConditionsNotEqualToOperandTwoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
        double_value: cdktn.numberToTerraform(struct!.doubleValue),
        empty_value: cdktn.stringToTerraform(struct!.emptyValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccCaseRuleRuleHiddenConditionsNotEqualToOperandTwoPropertyToHclTerraform(struct?: CcCaseRule.RuleHiddenConditionsNotEqualToOperandTwoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.booleanToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        double_value: {
            value: cdktn.numberToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        empty_value: {
            value: cdktn.stringToHclTerraform(struct!.emptyValue),
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


export function ccCaseRuleRuleHiddenConditionsNotEqualToPropertyToTerraform(struct?: CcCaseRule.RuleHiddenConditionsNotEqualToProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        operand_one: ccCaseRuleRuleHiddenConditionsNotEqualToOperandOnePropertyToTerraform(struct!.operandOne),
        operand_two: ccCaseRuleRuleHiddenConditionsNotEqualToOperandTwoPropertyToTerraform(struct!.operandTwo),
        result: cdktn.booleanToTerraform(struct!.result),
    }
}


export function ccCaseRuleRuleHiddenConditionsNotEqualToPropertyToHclTerraform(struct?: CcCaseRule.RuleHiddenConditionsNotEqualToProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        operand_one: {
            value: ccCaseRuleRuleHiddenConditionsNotEqualToOperandOnePropertyToHclTerraform(struct!.operandOne),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleHiddenConditionsNotEqualToOperandOneProperty",
        },
        operand_two: {
            value: ccCaseRuleRuleHiddenConditionsNotEqualToOperandTwoPropertyToHclTerraform(struct!.operandTwo),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleHiddenConditionsNotEqualToOperandTwoProperty",
        },
        result: {
            value: cdktn.booleanToHclTerraform(struct!.result),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleBooleanConditionPropertyToTerraform(struct?: CcCaseRule.BooleanConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        equal_to: ccCaseRuleBooleanOperandsPropertyToTerraform(struct!.equalTo),
        not_equal_to: ccCaseRuleRuleHiddenConditionsNotEqualToPropertyToTerraform(struct!.notEqualTo),
    }
}


export function ccCaseRuleBooleanConditionPropertyToHclTerraform(struct?: CcCaseRule.BooleanConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        equal_to: {
            value: ccCaseRuleBooleanOperandsPropertyToHclTerraform(struct!.equalTo),
            isBlock: true,
            type: "struct",
            storageClassType: "BooleanOperandsProperty",
        },
        not_equal_to: {
            value: ccCaseRuleRuleHiddenConditionsNotEqualToPropertyToHclTerraform(struct!.notEqualTo),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleHiddenConditionsNotEqualToProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleHiddenCaseRulePropertyToTerraform(struct?: CcCaseRule.HiddenCaseRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        conditions: cdktn.listMapper(ccCaseRuleBooleanConditionPropertyToTerraform, false)(struct!.conditions),
        default_value: cdktn.booleanToTerraform(struct!.defaultValue),
    }
}


export function ccCaseRuleHiddenCaseRulePropertyToHclTerraform(struct?: CcCaseRule.HiddenCaseRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        conditions: {
            value: cdktn.listMapperHcl(ccCaseRuleBooleanConditionPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "list",
            storageClassType: "BooleanConditionPropertyList",
        },
        default_value: {
            value: cdktn.booleanToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleRuleRequiredConditionsEqualToOperandOnePropertyToTerraform(struct?: CcCaseRule.RuleRequiredConditionsEqualToOperandOneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_id: cdktn.stringToTerraform(struct!.fieldId),
    }
}


export function ccCaseRuleRuleRequiredConditionsEqualToOperandOnePropertyToHclTerraform(struct?: CcCaseRule.RuleRequiredConditionsEqualToOperandOneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_id: {
            value: cdktn.stringToHclTerraform(struct!.fieldId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleRuleRequiredConditionsEqualToOperandTwoPropertyToTerraform(struct?: CcCaseRule.RuleRequiredConditionsEqualToOperandTwoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
        double_value: cdktn.numberToTerraform(struct!.doubleValue),
        empty_value: cdktn.stringToTerraform(struct!.emptyValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccCaseRuleRuleRequiredConditionsEqualToOperandTwoPropertyToHclTerraform(struct?: CcCaseRule.RuleRequiredConditionsEqualToOperandTwoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.booleanToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        double_value: {
            value: cdktn.numberToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        empty_value: {
            value: cdktn.stringToHclTerraform(struct!.emptyValue),
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


export function ccCaseRuleEqualToPropertyToTerraform(struct?: CcCaseRule.EqualToProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        operand_one: ccCaseRuleRuleRequiredConditionsEqualToOperandOnePropertyToTerraform(struct!.operandOne),
        operand_two: ccCaseRuleRuleRequiredConditionsEqualToOperandTwoPropertyToTerraform(struct!.operandTwo),
        result: cdktn.booleanToTerraform(struct!.result),
    }
}


export function ccCaseRuleEqualToPropertyToHclTerraform(struct?: CcCaseRule.EqualToProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        operand_one: {
            value: ccCaseRuleRuleRequiredConditionsEqualToOperandOnePropertyToHclTerraform(struct!.operandOne),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleRequiredConditionsEqualToOperandOneProperty",
        },
        operand_two: {
            value: ccCaseRuleRuleRequiredConditionsEqualToOperandTwoPropertyToHclTerraform(struct!.operandTwo),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleRequiredConditionsEqualToOperandTwoProperty",
        },
        result: {
            value: cdktn.booleanToHclTerraform(struct!.result),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleRuleRequiredConditionsNotEqualToOperandOnePropertyToTerraform(struct?: CcCaseRule.RuleRequiredConditionsNotEqualToOperandOneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_id: cdktn.stringToTerraform(struct!.fieldId),
    }
}


export function ccCaseRuleRuleRequiredConditionsNotEqualToOperandOnePropertyToHclTerraform(struct?: CcCaseRule.RuleRequiredConditionsNotEqualToOperandOneProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_id: {
            value: cdktn.stringToHclTerraform(struct!.fieldId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleRuleRequiredConditionsNotEqualToOperandTwoPropertyToTerraform(struct?: CcCaseRule.RuleRequiredConditionsNotEqualToOperandTwoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
        double_value: cdktn.numberToTerraform(struct!.doubleValue),
        empty_value: cdktn.stringToTerraform(struct!.emptyValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccCaseRuleRuleRequiredConditionsNotEqualToOperandTwoPropertyToHclTerraform(struct?: CcCaseRule.RuleRequiredConditionsNotEqualToOperandTwoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.booleanToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        double_value: {
            value: cdktn.numberToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        empty_value: {
            value: cdktn.stringToHclTerraform(struct!.emptyValue),
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


export function ccCaseRuleRuleRequiredConditionsNotEqualToPropertyToTerraform(struct?: CcCaseRule.RuleRequiredConditionsNotEqualToProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        operand_one: ccCaseRuleRuleRequiredConditionsNotEqualToOperandOnePropertyToTerraform(struct!.operandOne),
        operand_two: ccCaseRuleRuleRequiredConditionsNotEqualToOperandTwoPropertyToTerraform(struct!.operandTwo),
        result: cdktn.booleanToTerraform(struct!.result),
    }
}


export function ccCaseRuleRuleRequiredConditionsNotEqualToPropertyToHclTerraform(struct?: CcCaseRule.RuleRequiredConditionsNotEqualToProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        operand_one: {
            value: ccCaseRuleRuleRequiredConditionsNotEqualToOperandOnePropertyToHclTerraform(struct!.operandOne),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleRequiredConditionsNotEqualToOperandOneProperty",
        },
        operand_two: {
            value: ccCaseRuleRuleRequiredConditionsNotEqualToOperandTwoPropertyToHclTerraform(struct!.operandTwo),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleRequiredConditionsNotEqualToOperandTwoProperty",
        },
        result: {
            value: cdktn.booleanToHclTerraform(struct!.result),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleConditionsPropertyToTerraform(struct?: CcCaseRule.ConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        equal_to: ccCaseRuleEqualToPropertyToTerraform(struct!.equalTo),
        not_equal_to: ccCaseRuleRuleRequiredConditionsNotEqualToPropertyToTerraform(struct!.notEqualTo),
    }
}


export function ccCaseRuleConditionsPropertyToHclTerraform(struct?: CcCaseRule.ConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        equal_to: {
            value: ccCaseRuleEqualToPropertyToHclTerraform(struct!.equalTo),
            isBlock: true,
            type: "struct",
            storageClassType: "EqualToProperty",
        },
        not_equal_to: {
            value: ccCaseRuleRuleRequiredConditionsNotEqualToPropertyToHclTerraform(struct!.notEqualTo),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleRequiredConditionsNotEqualToProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleRequiredCaseRulePropertyToTerraform(struct?: CcCaseRule.RequiredCaseRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        conditions: cdktn.listMapper(ccCaseRuleConditionsPropertyToTerraform, false)(struct!.conditions),
        default_value: cdktn.booleanToTerraform(struct!.defaultValue),
    }
}


export function ccCaseRuleRequiredCaseRulePropertyToHclTerraform(struct?: CcCaseRule.RequiredCaseRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        conditions: {
            value: cdktn.listMapperHcl(ccCaseRuleConditionsPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "list",
            storageClassType: "ConditionsPropertyList",
        },
        default_value: {
            value: cdktn.booleanToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleCaseRuleDetailsPropertyToTerraform(struct?: CcCaseRule.CaseRuleDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        hidden: ccCaseRuleHiddenCaseRulePropertyToTerraform(struct!.hidden),
        required: ccCaseRuleRequiredCaseRulePropertyToTerraform(struct!.required),
    }
}


export function ccCaseRuleCaseRuleDetailsPropertyToHclTerraform(struct?: CcCaseRule.CaseRuleDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        hidden: {
            value: ccCaseRuleHiddenCaseRulePropertyToHclTerraform(struct!.hidden),
            isBlock: true,
            type: "struct",
            storageClassType: "HiddenCaseRuleProperty",
        },
        required: {
            value: ccCaseRuleRequiredCaseRulePropertyToHclTerraform(struct!.required),
            isBlock: true,
            type: "struct",
            storageClassType: "RequiredCaseRuleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCaseRuleTagPropertyToTerraform(struct?: CcCaseRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCaseRuleTagPropertyToHclTerraform(struct?: CcCaseRule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCaseRule {
export interface OperandOneProperty {
    /**
    * The field ID this operand should take the value of.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#field_id CcCaseRule#field_id}
    */
    readonly fieldId?: string;
}
export class OperandOnePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OperandOneProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldId = this._fieldId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OperandOneProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldId = value.fieldId;
        }
    }

    // field_id - computed: true, optional: true, required: false
    private _fieldId?: string; 
    public get fieldId() {
        return this.getStringAttribute('field_id');
    }
    public set fieldId(value: string) {
        this._fieldId = value;
    }
    public resetFieldId() {
        this._fieldId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldIdInput() {
        return this._fieldId;
    }
}
export interface OperandTwoProperty {
    /**
    * A boolean value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#boolean_value CcCaseRule#boolean_value}
    */
    readonly booleanValue?: boolean | cdktn.IResolvable;
    /**
    * A numeric value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#double_value CcCaseRule#double_value}
    */
    readonly doubleValue?: number;
    /**
    * An empty operand value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#empty_value CcCaseRule#empty_value}
    */
    readonly emptyValue?: string;
    /**
    * A string value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#string_value CcCaseRule#string_value}
    */
    readonly stringValue?: string;
}
export class OperandTwoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OperandTwoProperty | cdktn.IResolvable | undefined {
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
        if (this._emptyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emptyValue = this._emptyValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OperandTwoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._emptyValue = undefined;
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
            this._emptyValue = value.emptyValue;
            this._stringValue = value.stringValue;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: boolean | cdktn.IResolvable; 
    public get booleanValue() {
        return this.getBooleanAttribute('boolean_value');
    }
    public set booleanValue(value: boolean | cdktn.IResolvable) {
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
    private _doubleValue?: number; 
    public get doubleValue() {
        return this.getNumberAttribute('double_value');
    }
    public set doubleValue(value: number) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // empty_value - computed: true, optional: true, required: false
    private _emptyValue?: string; 
    public get emptyValue() {
        return this.getStringAttribute('empty_value');
    }
    public set emptyValue(value: string) {
        this._emptyValue = value;
    }
    public resetEmptyValue() {
        this._emptyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emptyValueInput() {
        return this._emptyValue;
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
export interface BooleanOperandsProperty {
    /**
    * The left hand operand in the condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#operand_one CcCaseRule#operand_one}
    */
    readonly operandOne?: OperandOneProperty;
    /**
    * The right hand operand in the condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#operand_two CcCaseRule#operand_two}
    */
    readonly operandTwo?: OperandTwoProperty;
    /**
    * The value of the outer rule if the condition evaluates to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#result CcCaseRule#result}
    */
    readonly result?: boolean | cdktn.IResolvable;
}
export class BooleanOperandsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BooleanOperandsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._operandOne?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.operandOne = this._operandOne?.internalValue;
        }
        if (this._operandTwo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.operandTwo = this._operandTwo?.internalValue;
        }
        if (this._result !== undefined) {
            hasAnyValues = true;
            internalValueResult.result = this._result;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BooleanOperandsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._operandOne.internalValue = undefined;
            this._operandTwo.internalValue = undefined;
            this._result = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._operandOne.internalValue = value.operandOne;
            this._operandTwo.internalValue = value.operandTwo;
            this._result = value.result;
        }
    }

    // operand_one - computed: true, optional: true, required: false
    private _operandOne = new OperandOnePropertyOutputReference(this, "operand_one");
    public get operandOne() {
        return this._operandOne;
    }
    public putOperandOne(value: OperandOneProperty) {
        this._operandOne.internalValue = value;
    }
    public resetOperandOne() {
        this._operandOne.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operandOneInput() {
        return this._operandOne.internalValue;
    }

    // operand_two - computed: true, optional: true, required: false
    private _operandTwo = new OperandTwoPropertyOutputReference(this, "operand_two");
    public get operandTwo() {
        return this._operandTwo;
    }
    public putOperandTwo(value: OperandTwoProperty) {
        this._operandTwo.internalValue = value;
    }
    public resetOperandTwo() {
        this._operandTwo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operandTwoInput() {
        return this._operandTwo.internalValue;
    }

    // result - computed: true, optional: true, required: false
    private _result?: boolean | cdktn.IResolvable; 
    public get result() {
        return this.getBooleanAttribute('result');
    }
    public set result(value: boolean | cdktn.IResolvable) {
        this._result = value;
    }
    public resetResult() {
        this._result = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultInput() {
        return this._result;
    }
}
export interface RuleHiddenConditionsNotEqualToOperandOneProperty {
    /**
    * The field ID this operand should take the value of.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#field_id CcCaseRule#field_id}
    */
    readonly fieldId?: string;
}
export class RuleHiddenConditionsNotEqualToOperandOnePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleHiddenConditionsNotEqualToOperandOneProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldId = this._fieldId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleHiddenConditionsNotEqualToOperandOneProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldId = value.fieldId;
        }
    }

    // field_id - computed: true, optional: true, required: false
    private _fieldId?: string; 
    public get fieldId() {
        return this.getStringAttribute('field_id');
    }
    public set fieldId(value: string) {
        this._fieldId = value;
    }
    public resetFieldId() {
        this._fieldId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldIdInput() {
        return this._fieldId;
    }
}
export interface RuleHiddenConditionsNotEqualToOperandTwoProperty {
    /**
    * A boolean value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#boolean_value CcCaseRule#boolean_value}
    */
    readonly booleanValue?: boolean | cdktn.IResolvable;
    /**
    * A numeric value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#double_value CcCaseRule#double_value}
    */
    readonly doubleValue?: number;
    /**
    * An empty operand value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#empty_value CcCaseRule#empty_value}
    */
    readonly emptyValue?: string;
    /**
    * A string value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#string_value CcCaseRule#string_value}
    */
    readonly stringValue?: string;
}
export class RuleHiddenConditionsNotEqualToOperandTwoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleHiddenConditionsNotEqualToOperandTwoProperty | cdktn.IResolvable | undefined {
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
        if (this._emptyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emptyValue = this._emptyValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleHiddenConditionsNotEqualToOperandTwoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._emptyValue = undefined;
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
            this._emptyValue = value.emptyValue;
            this._stringValue = value.stringValue;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: boolean | cdktn.IResolvable; 
    public get booleanValue() {
        return this.getBooleanAttribute('boolean_value');
    }
    public set booleanValue(value: boolean | cdktn.IResolvable) {
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
    private _doubleValue?: number; 
    public get doubleValue() {
        return this.getNumberAttribute('double_value');
    }
    public set doubleValue(value: number) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // empty_value - computed: true, optional: true, required: false
    private _emptyValue?: string; 
    public get emptyValue() {
        return this.getStringAttribute('empty_value');
    }
    public set emptyValue(value: string) {
        this._emptyValue = value;
    }
    public resetEmptyValue() {
        this._emptyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emptyValueInput() {
        return this._emptyValue;
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
export interface RuleHiddenConditionsNotEqualToProperty {
    /**
    * The left hand operand in the condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#operand_one CcCaseRule#operand_one}
    */
    readonly operandOne?: RuleHiddenConditionsNotEqualToOperandOneProperty;
    /**
    * The right hand operand in the condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#operand_two CcCaseRule#operand_two}
    */
    readonly operandTwo?: RuleHiddenConditionsNotEqualToOperandTwoProperty;
    /**
    * The value of the outer rule if the condition evaluates to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#result CcCaseRule#result}
    */
    readonly result?: boolean | cdktn.IResolvable;
}
export class RuleHiddenConditionsNotEqualToPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleHiddenConditionsNotEqualToProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._operandOne?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.operandOne = this._operandOne?.internalValue;
        }
        if (this._operandTwo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.operandTwo = this._operandTwo?.internalValue;
        }
        if (this._result !== undefined) {
            hasAnyValues = true;
            internalValueResult.result = this._result;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleHiddenConditionsNotEqualToProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._operandOne.internalValue = undefined;
            this._operandTwo.internalValue = undefined;
            this._result = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._operandOne.internalValue = value.operandOne;
            this._operandTwo.internalValue = value.operandTwo;
            this._result = value.result;
        }
    }

    // operand_one - computed: true, optional: true, required: false
    private _operandOne = new RuleHiddenConditionsNotEqualToOperandOnePropertyOutputReference(this, "operand_one");
    public get operandOne() {
        return this._operandOne;
    }
    public putOperandOne(value: RuleHiddenConditionsNotEqualToOperandOneProperty) {
        this._operandOne.internalValue = value;
    }
    public resetOperandOne() {
        this._operandOne.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operandOneInput() {
        return this._operandOne.internalValue;
    }

    // operand_two - computed: true, optional: true, required: false
    private _operandTwo = new RuleHiddenConditionsNotEqualToOperandTwoPropertyOutputReference(this, "operand_two");
    public get operandTwo() {
        return this._operandTwo;
    }
    public putOperandTwo(value: RuleHiddenConditionsNotEqualToOperandTwoProperty) {
        this._operandTwo.internalValue = value;
    }
    public resetOperandTwo() {
        this._operandTwo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operandTwoInput() {
        return this._operandTwo.internalValue;
    }

    // result - computed: true, optional: true, required: false
    private _result?: boolean | cdktn.IResolvable; 
    public get result() {
        return this.getBooleanAttribute('result');
    }
    public set result(value: boolean | cdktn.IResolvable) {
        this._result = value;
    }
    public resetResult() {
        this._result = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultInput() {
        return this._result;
    }
}
export interface BooleanConditionProperty {
    /**
    * Boolean operands for a condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#equal_to CcCaseRule#equal_to}
    */
    readonly equalTo?: BooleanOperandsProperty;
    /**
    * Boolean operands for a condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#not_equal_to CcCaseRule#not_equal_to}
    */
    readonly notEqualTo?: RuleHiddenConditionsNotEqualToProperty;
}
export class BooleanConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BooleanConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._equalTo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.equalTo = this._equalTo?.internalValue;
        }
        if (this._notEqualTo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.notEqualTo = this._notEqualTo?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BooleanConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._equalTo.internalValue = undefined;
            this._notEqualTo.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._equalTo.internalValue = value.equalTo;
            this._notEqualTo.internalValue = value.notEqualTo;
        }
    }

    // equal_to - computed: true, optional: true, required: false
    private _equalTo = new BooleanOperandsPropertyOutputReference(this, "equal_to");
    public get equalTo() {
        return this._equalTo;
    }
    public putEqualTo(value: BooleanOperandsProperty) {
        this._equalTo.internalValue = value;
    }
    public resetEqualTo() {
        this._equalTo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get equalToInput() {
        return this._equalTo.internalValue;
    }

    // not_equal_to - computed: true, optional: true, required: false
    private _notEqualTo = new RuleHiddenConditionsNotEqualToPropertyOutputReference(this, "not_equal_to");
    public get notEqualTo() {
        return this._notEqualTo;
    }
    public putNotEqualTo(value: RuleHiddenConditionsNotEqualToProperty) {
        this._notEqualTo.internalValue = value;
    }
    public resetNotEqualTo() {
        this._notEqualTo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notEqualToInput() {
        return this._notEqualTo.internalValue;
    }
}

export class BooleanConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : BooleanConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): BooleanConditionPropertyOutputReference {
        return new BooleanConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HiddenCaseRuleProperty {
    /**
    * List of conditions for the hidden rule; the first condition to evaluate to true dictates the value of the rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#conditions CcCaseRule#conditions}
    */
    readonly conditions?: BooleanConditionProperty[] | cdktn.IResolvable;
    /**
    * The value of the rule (i.e. whether the field is hidden) should none of the conditions evaluate to true
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#default_value CcCaseRule#default_value}
    */
    readonly defaultValue?: boolean | cdktn.IResolvable;
}
export class HiddenCaseRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HiddenCaseRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HiddenCaseRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditions.internalValue = undefined;
            this._defaultValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conditions.internalValue = value.conditions;
            this._defaultValue = value.defaultValue;
        }
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new BooleanConditionPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: BooleanConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: boolean | cdktn.IResolvable; 
    public get defaultValue() {
        return this.getBooleanAttribute('default_value');
    }
    public set defaultValue(value: boolean | cdktn.IResolvable) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }
}
export interface RuleRequiredConditionsEqualToOperandOneProperty {
    /**
    * The field ID this operand should take the value of.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#field_id CcCaseRule#field_id}
    */
    readonly fieldId?: string;
}
export class RuleRequiredConditionsEqualToOperandOnePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleRequiredConditionsEqualToOperandOneProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldId = this._fieldId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleRequiredConditionsEqualToOperandOneProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldId = value.fieldId;
        }
    }

    // field_id - computed: true, optional: true, required: false
    private _fieldId?: string; 
    public get fieldId() {
        return this.getStringAttribute('field_id');
    }
    public set fieldId(value: string) {
        this._fieldId = value;
    }
    public resetFieldId() {
        this._fieldId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldIdInput() {
        return this._fieldId;
    }
}
export interface RuleRequiredConditionsEqualToOperandTwoProperty {
    /**
    * A boolean value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#boolean_value CcCaseRule#boolean_value}
    */
    readonly booleanValue?: boolean | cdktn.IResolvable;
    /**
    * A numeric value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#double_value CcCaseRule#double_value}
    */
    readonly doubleValue?: number;
    /**
    * An empty operand value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#empty_value CcCaseRule#empty_value}
    */
    readonly emptyValue?: string;
    /**
    * A string value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#string_value CcCaseRule#string_value}
    */
    readonly stringValue?: string;
}
export class RuleRequiredConditionsEqualToOperandTwoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleRequiredConditionsEqualToOperandTwoProperty | cdktn.IResolvable | undefined {
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
        if (this._emptyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emptyValue = this._emptyValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleRequiredConditionsEqualToOperandTwoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._emptyValue = undefined;
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
            this._emptyValue = value.emptyValue;
            this._stringValue = value.stringValue;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: boolean | cdktn.IResolvable; 
    public get booleanValue() {
        return this.getBooleanAttribute('boolean_value');
    }
    public set booleanValue(value: boolean | cdktn.IResolvable) {
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
    private _doubleValue?: number; 
    public get doubleValue() {
        return this.getNumberAttribute('double_value');
    }
    public set doubleValue(value: number) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // empty_value - computed: true, optional: true, required: false
    private _emptyValue?: string; 
    public get emptyValue() {
        return this.getStringAttribute('empty_value');
    }
    public set emptyValue(value: string) {
        this._emptyValue = value;
    }
    public resetEmptyValue() {
        this._emptyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emptyValueInput() {
        return this._emptyValue;
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
export interface EqualToProperty {
    /**
    * The left hand operand in the condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#operand_one CcCaseRule#operand_one}
    */
    readonly operandOne?: RuleRequiredConditionsEqualToOperandOneProperty;
    /**
    * The right hand operand in the condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#operand_two CcCaseRule#operand_two}
    */
    readonly operandTwo?: RuleRequiredConditionsEqualToOperandTwoProperty;
    /**
    * The value of the outer rule if the condition evaluates to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#result CcCaseRule#result}
    */
    readonly result?: boolean | cdktn.IResolvable;
}
export class EqualToPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EqualToProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._operandOne?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.operandOne = this._operandOne?.internalValue;
        }
        if (this._operandTwo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.operandTwo = this._operandTwo?.internalValue;
        }
        if (this._result !== undefined) {
            hasAnyValues = true;
            internalValueResult.result = this._result;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EqualToProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._operandOne.internalValue = undefined;
            this._operandTwo.internalValue = undefined;
            this._result = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._operandOne.internalValue = value.operandOne;
            this._operandTwo.internalValue = value.operandTwo;
            this._result = value.result;
        }
    }

    // operand_one - computed: true, optional: true, required: false
    private _operandOne = new RuleRequiredConditionsEqualToOperandOnePropertyOutputReference(this, "operand_one");
    public get operandOne() {
        return this._operandOne;
    }
    public putOperandOne(value: RuleRequiredConditionsEqualToOperandOneProperty) {
        this._operandOne.internalValue = value;
    }
    public resetOperandOne() {
        this._operandOne.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operandOneInput() {
        return this._operandOne.internalValue;
    }

    // operand_two - computed: true, optional: true, required: false
    private _operandTwo = new RuleRequiredConditionsEqualToOperandTwoPropertyOutputReference(this, "operand_two");
    public get operandTwo() {
        return this._operandTwo;
    }
    public putOperandTwo(value: RuleRequiredConditionsEqualToOperandTwoProperty) {
        this._operandTwo.internalValue = value;
    }
    public resetOperandTwo() {
        this._operandTwo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operandTwoInput() {
        return this._operandTwo.internalValue;
    }

    // result - computed: true, optional: true, required: false
    private _result?: boolean | cdktn.IResolvable; 
    public get result() {
        return this.getBooleanAttribute('result');
    }
    public set result(value: boolean | cdktn.IResolvable) {
        this._result = value;
    }
    public resetResult() {
        this._result = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultInput() {
        return this._result;
    }
}
export interface RuleRequiredConditionsNotEqualToOperandOneProperty {
    /**
    * The field ID this operand should take the value of.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#field_id CcCaseRule#field_id}
    */
    readonly fieldId?: string;
}
export class RuleRequiredConditionsNotEqualToOperandOnePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleRequiredConditionsNotEqualToOperandOneProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldId !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldId = this._fieldId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleRequiredConditionsNotEqualToOperandOneProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldId = value.fieldId;
        }
    }

    // field_id - computed: true, optional: true, required: false
    private _fieldId?: string; 
    public get fieldId() {
        return this.getStringAttribute('field_id');
    }
    public set fieldId(value: string) {
        this._fieldId = value;
    }
    public resetFieldId() {
        this._fieldId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldIdInput() {
        return this._fieldId;
    }
}
export interface RuleRequiredConditionsNotEqualToOperandTwoProperty {
    /**
    * A boolean value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#boolean_value CcCaseRule#boolean_value}
    */
    readonly booleanValue?: boolean | cdktn.IResolvable;
    /**
    * A numeric value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#double_value CcCaseRule#double_value}
    */
    readonly doubleValue?: number;
    /**
    * An empty operand value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#empty_value CcCaseRule#empty_value}
    */
    readonly emptyValue?: string;
    /**
    * A string value to compare against the field value in the condition evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#string_value CcCaseRule#string_value}
    */
    readonly stringValue?: string;
}
export class RuleRequiredConditionsNotEqualToOperandTwoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleRequiredConditionsNotEqualToOperandTwoProperty | cdktn.IResolvable | undefined {
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
        if (this._emptyValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emptyValue = this._emptyValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleRequiredConditionsNotEqualToOperandTwoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._emptyValue = undefined;
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
            this._emptyValue = value.emptyValue;
            this._stringValue = value.stringValue;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: boolean | cdktn.IResolvable; 
    public get booleanValue() {
        return this.getBooleanAttribute('boolean_value');
    }
    public set booleanValue(value: boolean | cdktn.IResolvable) {
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
    private _doubleValue?: number; 
    public get doubleValue() {
        return this.getNumberAttribute('double_value');
    }
    public set doubleValue(value: number) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // empty_value - computed: true, optional: true, required: false
    private _emptyValue?: string; 
    public get emptyValue() {
        return this.getStringAttribute('empty_value');
    }
    public set emptyValue(value: string) {
        this._emptyValue = value;
    }
    public resetEmptyValue() {
        this._emptyValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emptyValueInput() {
        return this._emptyValue;
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
export interface RuleRequiredConditionsNotEqualToProperty {
    /**
    * The left hand operand in the condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#operand_one CcCaseRule#operand_one}
    */
    readonly operandOne?: RuleRequiredConditionsNotEqualToOperandOneProperty;
    /**
    * The right hand operand in the condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#operand_two CcCaseRule#operand_two}
    */
    readonly operandTwo?: RuleRequiredConditionsNotEqualToOperandTwoProperty;
    /**
    * The value of the outer rule if the condition evaluates to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#result CcCaseRule#result}
    */
    readonly result?: boolean | cdktn.IResolvable;
}
export class RuleRequiredConditionsNotEqualToPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleRequiredConditionsNotEqualToProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._operandOne?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.operandOne = this._operandOne?.internalValue;
        }
        if (this._operandTwo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.operandTwo = this._operandTwo?.internalValue;
        }
        if (this._result !== undefined) {
            hasAnyValues = true;
            internalValueResult.result = this._result;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleRequiredConditionsNotEqualToProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._operandOne.internalValue = undefined;
            this._operandTwo.internalValue = undefined;
            this._result = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._operandOne.internalValue = value.operandOne;
            this._operandTwo.internalValue = value.operandTwo;
            this._result = value.result;
        }
    }

    // operand_one - computed: true, optional: true, required: false
    private _operandOne = new RuleRequiredConditionsNotEqualToOperandOnePropertyOutputReference(this, "operand_one");
    public get operandOne() {
        return this._operandOne;
    }
    public putOperandOne(value: RuleRequiredConditionsNotEqualToOperandOneProperty) {
        this._operandOne.internalValue = value;
    }
    public resetOperandOne() {
        this._operandOne.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operandOneInput() {
        return this._operandOne.internalValue;
    }

    // operand_two - computed: true, optional: true, required: false
    private _operandTwo = new RuleRequiredConditionsNotEqualToOperandTwoPropertyOutputReference(this, "operand_two");
    public get operandTwo() {
        return this._operandTwo;
    }
    public putOperandTwo(value: RuleRequiredConditionsNotEqualToOperandTwoProperty) {
        this._operandTwo.internalValue = value;
    }
    public resetOperandTwo() {
        this._operandTwo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operandTwoInput() {
        return this._operandTwo.internalValue;
    }

    // result - computed: true, optional: true, required: false
    private _result?: boolean | cdktn.IResolvable; 
    public get result() {
        return this.getBooleanAttribute('result');
    }
    public set result(value: boolean | cdktn.IResolvable) {
        this._result = value;
    }
    public resetResult() {
        this._result = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultInput() {
        return this._result;
    }
}
export interface ConditionsProperty {
    /**
    * Boolean operands for a condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#equal_to CcCaseRule#equal_to}
    */
    readonly equalTo?: EqualToProperty;
    /**
    * Boolean operands for a condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#not_equal_to CcCaseRule#not_equal_to}
    */
    readonly notEqualTo?: RuleRequiredConditionsNotEqualToProperty;
}
export class ConditionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._equalTo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.equalTo = this._equalTo?.internalValue;
        }
        if (this._notEqualTo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.notEqualTo = this._notEqualTo?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._equalTo.internalValue = undefined;
            this._notEqualTo.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._equalTo.internalValue = value.equalTo;
            this._notEqualTo.internalValue = value.notEqualTo;
        }
    }

    // equal_to - computed: true, optional: true, required: false
    private _equalTo = new EqualToPropertyOutputReference(this, "equal_to");
    public get equalTo() {
        return this._equalTo;
    }
    public putEqualTo(value: EqualToProperty) {
        this._equalTo.internalValue = value;
    }
    public resetEqualTo() {
        this._equalTo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get equalToInput() {
        return this._equalTo.internalValue;
    }

    // not_equal_to - computed: true, optional: true, required: false
    private _notEqualTo = new RuleRequiredConditionsNotEqualToPropertyOutputReference(this, "not_equal_to");
    public get notEqualTo() {
        return this._notEqualTo;
    }
    public putNotEqualTo(value: RuleRequiredConditionsNotEqualToProperty) {
        this._notEqualTo.internalValue = value;
    }
    public resetNotEqualTo() {
        this._notEqualTo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notEqualToInput() {
        return this._notEqualTo.internalValue;
    }
}

export class ConditionsPropertyList extends cdktn.ComplexList {
    public internalValue? : ConditionsProperty[] | cdktn.IResolvable

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
    public get(index: number): ConditionsPropertyOutputReference {
        return new ConditionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RequiredCaseRuleProperty {
    /**
    * An ordered list of boolean conditions that determine when the field should be required. Conditions are evaluated in order, and the first condition that evaluates to true determines whether the field is required, overriding the default value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#conditions CcCaseRule#conditions}
    */
    readonly conditions?: ConditionsProperty[] | cdktn.IResolvable;
    /**
    * The default required state for the field when none of the specified conditions are met. If true, the field is required by default; if false, the field is optional by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#default_value CcCaseRule#default_value}
    */
    readonly defaultValue?: boolean | cdktn.IResolvable;
}
export class RequiredCaseRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RequiredCaseRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RequiredCaseRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditions.internalValue = undefined;
            this._defaultValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conditions.internalValue = value.conditions;
            this._defaultValue = value.defaultValue;
        }
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new ConditionsPropertyList(this, "conditions", false);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: ConditionsProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: boolean | cdktn.IResolvable; 
    public get defaultValue() {
        return this.getBooleanAttribute('default_value');
    }
    public set defaultValue(value: boolean | cdktn.IResolvable) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }
}
export interface CaseRuleDetailsProperty {
    /**
    * Hidden rule type, used to indicate whether a field is hidden
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#hidden CcCaseRule#hidden}
    */
    readonly hidden?: HiddenCaseRuleProperty;
    /**
    * A required rule type, used to indicate whether a field is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#required CcCaseRule#required}
    */
    readonly required?: RequiredCaseRuleProperty;
}
export class CaseRuleDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CaseRuleDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hidden?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hidden = this._hidden?.internalValue;
        }
        if (this._required?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CaseRuleDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hidden.internalValue = undefined;
            this._required.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hidden.internalValue = value.hidden;
            this._required.internalValue = value.required;
        }
    }

    // hidden - computed: true, optional: true, required: false
    private _hidden = new HiddenCaseRulePropertyOutputReference(this, "hidden");
    public get hidden() {
        return this._hidden;
    }
    public putHidden(value: HiddenCaseRuleProperty) {
        this._hidden.internalValue = value;
    }
    public resetHidden() {
        this._hidden.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hiddenInput() {
        return this._hidden.internalValue;
    }

    // required - computed: true, optional: true, required: false
    private _required = new RequiredCaseRulePropertyOutputReference(this, "required");
    public get required() {
        return this._required;
    }
    public putRequired(value: RequiredCaseRuleProperty) {
        this._required.internalValue = value;
    }
    public resetRequired() {
        this._required.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#key CcCaseRule#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cases_case_rule#value CcCaseRule#value}
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
