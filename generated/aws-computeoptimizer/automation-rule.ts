// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAutomationRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * Filter criteria that specify which recommended actions qualify for implementation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#criteria CcAutomationRule#criteria}
    */
    readonly criteria?: CcAutomationRule.CriteriaProperty;
    /**
    * The description of the automation rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#description CcAutomationRule#description}
    */
    readonly description?: string;
    /**
    * The name of the automation rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#name CcAutomationRule#name}
    */
    readonly name: string;
    /**
    * Organization configuration for organization rules, including rule apply order and account scope.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#organization_configuration CcAutomationRule#organization_configuration}
    */
    readonly organizationConfiguration?: CcAutomationRule.OrganizationConfigurationProperty;
    /**
    * Rule priority within its group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#priority CcAutomationRule#priority}
    */
    readonly priority?: string;
    /**
    * The types of recommended actions this rule will implement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#recommended_action_types CcAutomationRule#recommended_action_types}
    */
    readonly recommendedActionTypes: string[];
    /**
    * The type of automation rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#rule_type CcAutomationRule#rule_type}
    */
    readonly ruleType: string;
    /**
    * The schedule configuration for when the rule runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#schedule CcAutomationRule#schedule}
    */
    readonly schedule: CcAutomationRule.ScheduleProperty;
    /**
    * The status of the automation rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#status CcAutomationRule#status}
    */
    readonly status: string;
    /**
    * Tags associated with the automation rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#tags CcAutomationRule#tags}
    */
    readonly tags?: CcAutomationRule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule}
*/
export class CcAutomationRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_computeoptimizer_automation_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAutomationRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAutomationRule to import
    * @param importFromId The id of the existing CcAutomationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAutomationRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_computeoptimizer_automation_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAutomationRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcAutomationRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_computeoptimizer_automation_rule',
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
        this._criteria.internalValue = config.criteria;
        this._description = config.description;
        this._name = config.name;
        this._organizationConfiguration.internalValue = config.organizationConfiguration;
        this._priority = config.priority;
        this._recommendedActionTypes = config.recommendedActionTypes;
        this._ruleType = config.ruleType;
        this._schedule.internalValue = config.schedule;
        this._status = config.status;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // created_timestamp - computed: true, optional: false, required: false
    public get createdTimestamp() {
        return this.getStringAttribute('created_timestamp');
    }

    // criteria - computed: true, optional: true, required: false
    private _criteria = new CcAutomationRule.CriteriaPropertyOutputReference(this, "criteria");
    public get criteria() {
        return this._criteria;
    }
    public putCriteria(value: CcAutomationRule.CriteriaProperty) {
        this._criteria.internalValue = value;
    }
    public resetCriteria() {
        this._criteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get criteriaInput() {
        return this._criteria.internalValue;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_timestamp - computed: true, optional: false, required: false
    public get lastUpdatedTimestamp() {
        return this.getStringAttribute('last_updated_timestamp');
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

    // organization_configuration - computed: true, optional: true, required: false
    private _organizationConfiguration = new CcAutomationRule.OrganizationConfigurationPropertyOutputReference(this, "organization_configuration");
    public get organizationConfiguration() {
        return this._organizationConfiguration;
    }
    public putOrganizationConfiguration(value: CcAutomationRule.OrganizationConfigurationProperty) {
        this._organizationConfiguration.internalValue = value;
    }
    public resetOrganizationConfiguration() {
        this._organizationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationConfigurationInput() {
        return this._organizationConfiguration.internalValue;
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: string; 
    public get priority() {
        return this.getStringAttribute('priority');
    }
    public set priority(value: string) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // recommended_action_types - computed: false, optional: false, required: true
    private _recommendedActionTypes?: string[]; 
    public get recommendedActionTypes() {
        return this.getListAttribute('recommended_action_types');
    }
    public set recommendedActionTypes(value: string[]) {
        this._recommendedActionTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recommendedActionTypesInput() {
        return this._recommendedActionTypes;
    }

    // rule_arn - computed: true, optional: false, required: false
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
    }

    // rule_id - computed: true, optional: false, required: false
    public get ruleId() {
        return this.getStringAttribute('rule_id');
    }

    // rule_revision - computed: true, optional: false, required: false
    public get ruleRevision() {
        return this.getStringAttribute('rule_revision');
    }

    // rule_type - computed: false, optional: false, required: true
    private _ruleType?: string; 
    public get ruleType() {
        return this.getStringAttribute('rule_type');
    }
    public set ruleType(value: string) {
        this._ruleType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleTypeInput() {
        return this._ruleType;
    }

    // schedule - computed: false, optional: false, required: true
    private _schedule = new CcAutomationRule.SchedulePropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: CcAutomationRule.ScheduleProperty) {
        this._schedule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }

    // status - computed: false, optional: false, required: true
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAutomationRule.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAutomationRule.TagProperty[] | cdktn.IResolvable) {
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
            criteria: ccAutomationRuleCriteriaPropertyToTerraform(this._criteria.internalValue),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            organization_configuration: ccAutomationRuleOrganizationConfigurationPropertyToTerraform(this._organizationConfiguration.internalValue),
            priority: cdktn.stringToTerraform(this._priority),
            recommended_action_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._recommendedActionTypes),
            rule_type: cdktn.stringToTerraform(this._ruleType),
            schedule: ccAutomationRuleSchedulePropertyToTerraform(this._schedule.internalValue),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccAutomationRuleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            criteria: {
                value: ccAutomationRuleCriteriaPropertyToHclTerraform(this._criteria.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutomationRule.CriteriaProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            organization_configuration: {
                value: ccAutomationRuleOrganizationConfigurationPropertyToHclTerraform(this._organizationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutomationRule.OrganizationConfigurationProperty",
            },
            priority: {
                value: cdktn.stringToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recommended_action_types: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._recommendedActionTypes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            rule_type: {
                value: cdktn.stringToHclTerraform(this._ruleType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schedule: {
                value: ccAutomationRuleSchedulePropertyToHclTerraform(this._schedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutomationRule.ScheduleProperty",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAutomationRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAutomationRule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAutomationRuleIntegerCriteriaConditionPropertyToTerraform(struct?: CcAutomationRule.IntegerCriteriaConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
    }
}


export function ccAutomationRuleIntegerCriteriaConditionPropertyToHclTerraform(struct?: CcAutomationRule.IntegerCriteriaConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleStringCriteriaConditionPropertyToTerraform(struct?: CcAutomationRule.StringCriteriaConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccAutomationRuleStringCriteriaConditionPropertyToHclTerraform(struct?: CcAutomationRule.StringCriteriaConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleDoubleCriteriaConditionPropertyToTerraform(struct?: CcAutomationRule.DoubleCriteriaConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
    }
}


export function ccAutomationRuleDoubleCriteriaConditionPropertyToHclTerraform(struct?: CcAutomationRule.DoubleCriteriaConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleLookBackPeriodInDaysPropertyToTerraform(struct?: CcAutomationRule.LookBackPeriodInDaysProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
    }
}


export function ccAutomationRuleLookBackPeriodInDaysPropertyToHclTerraform(struct?: CcAutomationRule.LookBackPeriodInDaysProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleRegionPropertyToTerraform(struct?: CcAutomationRule.RegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccAutomationRuleRegionPropertyToHclTerraform(struct?: CcAutomationRule.RegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleResourceArnPropertyToTerraform(struct?: CcAutomationRule.ResourceArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccAutomationRuleResourceArnPropertyToHclTerraform(struct?: CcAutomationRule.ResourceArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleResourceTagsCriteriaConditionPropertyToTerraform(struct?: CcAutomationRule.ResourceTagsCriteriaConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        key: cdktn.stringToTerraform(struct!.key),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccAutomationRuleResourceTagsCriteriaConditionPropertyToHclTerraform(struct?: CcAutomationRule.ResourceTagsCriteriaConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleRestartNeededPropertyToTerraform(struct?: CcAutomationRule.RestartNeededProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccAutomationRuleRestartNeededPropertyToHclTerraform(struct?: CcAutomationRule.RestartNeededProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleCriteriaPropertyToTerraform(struct?: CcAutomationRule.CriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ebs_volume_size_in_gib: cdktn.listMapper(ccAutomationRuleIntegerCriteriaConditionPropertyToTerraform, false)(struct!.ebsVolumeSizeInGib),
        ebs_volume_type: cdktn.listMapper(ccAutomationRuleStringCriteriaConditionPropertyToTerraform, false)(struct!.ebsVolumeType),
        estimated_monthly_savings: cdktn.listMapper(ccAutomationRuleDoubleCriteriaConditionPropertyToTerraform, false)(struct!.estimatedMonthlySavings),
        look_back_period_in_days: cdktn.listMapper(ccAutomationRuleLookBackPeriodInDaysPropertyToTerraform, false)(struct!.lookBackPeriodInDays),
        region: cdktn.listMapper(ccAutomationRuleRegionPropertyToTerraform, false)(struct!.region),
        resource_arn: cdktn.listMapper(ccAutomationRuleResourceArnPropertyToTerraform, false)(struct!.resourceArn),
        resource_tag: cdktn.listMapper(ccAutomationRuleResourceTagsCriteriaConditionPropertyToTerraform, false)(struct!.resourceTag),
        restart_needed: cdktn.listMapper(ccAutomationRuleRestartNeededPropertyToTerraform, false)(struct!.restartNeeded),
    }
}


export function ccAutomationRuleCriteriaPropertyToHclTerraform(struct?: CcAutomationRule.CriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ebs_volume_size_in_gib: {
            value: cdktn.listMapperHcl(ccAutomationRuleIntegerCriteriaConditionPropertyToHclTerraform, false)(struct!.ebsVolumeSizeInGib),
            isBlock: true,
            type: "list",
            storageClassType: "IntegerCriteriaConditionPropertyList",
        },
        ebs_volume_type: {
            value: cdktn.listMapperHcl(ccAutomationRuleStringCriteriaConditionPropertyToHclTerraform, false)(struct!.ebsVolumeType),
            isBlock: true,
            type: "list",
            storageClassType: "StringCriteriaConditionPropertyList",
        },
        estimated_monthly_savings: {
            value: cdktn.listMapperHcl(ccAutomationRuleDoubleCriteriaConditionPropertyToHclTerraform, false)(struct!.estimatedMonthlySavings),
            isBlock: true,
            type: "list",
            storageClassType: "DoubleCriteriaConditionPropertyList",
        },
        look_back_period_in_days: {
            value: cdktn.listMapperHcl(ccAutomationRuleLookBackPeriodInDaysPropertyToHclTerraform, false)(struct!.lookBackPeriodInDays),
            isBlock: true,
            type: "list",
            storageClassType: "LookBackPeriodInDaysPropertyList",
        },
        region: {
            value: cdktn.listMapperHcl(ccAutomationRuleRegionPropertyToHclTerraform, false)(struct!.region),
            isBlock: true,
            type: "list",
            storageClassType: "RegionPropertyList",
        },
        resource_arn: {
            value: cdktn.listMapperHcl(ccAutomationRuleResourceArnPropertyToHclTerraform, false)(struct!.resourceArn),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceArnPropertyList",
        },
        resource_tag: {
            value: cdktn.listMapperHcl(ccAutomationRuleResourceTagsCriteriaConditionPropertyToHclTerraform, false)(struct!.resourceTag),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceTagsCriteriaConditionPropertyList",
        },
        restart_needed: {
            value: cdktn.listMapperHcl(ccAutomationRuleRestartNeededPropertyToHclTerraform, false)(struct!.restartNeeded),
            isBlock: true,
            type: "list",
            storageClassType: "RestartNeededPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleOrganizationConfigurationPropertyToTerraform(struct?: CcAutomationRule.OrganizationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.accountIds),
        rule_apply_order: cdktn.stringToTerraform(struct!.ruleApplyOrder),
    }
}


export function ccAutomationRuleOrganizationConfigurationPropertyToHclTerraform(struct?: CcAutomationRule.OrganizationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.accountIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        rule_apply_order: {
            value: cdktn.stringToHclTerraform(struct!.ruleApplyOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleSchedulePropertyToTerraform(struct?: CcAutomationRule.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        execution_window_in_minutes: cdktn.numberToTerraform(struct!.executionWindowInMinutes),
        schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
        schedule_expression_timezone: cdktn.stringToTerraform(struct!.scheduleExpressionTimezone),
    }
}


export function ccAutomationRuleSchedulePropertyToHclTerraform(struct?: CcAutomationRule.ScheduleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        execution_window_in_minutes: {
            value: cdktn.numberToHclTerraform(struct!.executionWindowInMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        schedule_expression: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_expression_timezone: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpressionTimezone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleTagPropertyToTerraform(struct?: CcAutomationRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAutomationRuleTagPropertyToHclTerraform(struct?: CcAutomationRule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAutomationRule {
export interface IntegerCriteriaConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison CcAutomationRule#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values CcAutomationRule#values}
    */
    readonly values?: number[];
}
export class IntegerCriteriaConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IntegerCriteriaConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntegerCriteriaConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._values = value.values;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
    }

    // values - computed: true, optional: true, required: false
    private _values?: number[]; 
    public get values() {
        return this.getNumberListAttribute('values');
    }
    public set values(value: number[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class IntegerCriteriaConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : IntegerCriteriaConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): IntegerCriteriaConditionPropertyOutputReference {
        return new IntegerCriteriaConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StringCriteriaConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison CcAutomationRule#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values CcAutomationRule#values}
    */
    readonly values?: string[];
}
export class StringCriteriaConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StringCriteriaConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StringCriteriaConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._values = value.values;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class StringCriteriaConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : StringCriteriaConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): StringCriteriaConditionPropertyOutputReference {
        return new StringCriteriaConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DoubleCriteriaConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison CcAutomationRule#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values CcAutomationRule#values}
    */
    readonly values?: number[];
}
export class DoubleCriteriaConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DoubleCriteriaConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DoubleCriteriaConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._values = value.values;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
    }

    // values - computed: true, optional: true, required: false
    private _values?: number[]; 
    public get values() {
        return this.getNumberListAttribute('values');
    }
    public set values(value: number[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class DoubleCriteriaConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : DoubleCriteriaConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): DoubleCriteriaConditionPropertyOutputReference {
        return new DoubleCriteriaConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LookBackPeriodInDaysProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison CcAutomationRule#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values CcAutomationRule#values}
    */
    readonly values?: number[];
}
export class LookBackPeriodInDaysPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LookBackPeriodInDaysProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LookBackPeriodInDaysProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._values = value.values;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
    }

    // values - computed: true, optional: true, required: false
    private _values?: number[]; 
    public get values() {
        return this.getNumberListAttribute('values');
    }
    public set values(value: number[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class LookBackPeriodInDaysPropertyList extends cdktn.ComplexList {
    public internalValue? : LookBackPeriodInDaysProperty[] | cdktn.IResolvable

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
    public get(index: number): LookBackPeriodInDaysPropertyOutputReference {
        return new LookBackPeriodInDaysPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RegionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison CcAutomationRule#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values CcAutomationRule#values}
    */
    readonly values?: string[];
}
export class RegionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RegionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._values = value.values;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class RegionPropertyList extends cdktn.ComplexList {
    public internalValue? : RegionProperty[] | cdktn.IResolvable

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
    public get(index: number): RegionPropertyOutputReference {
        return new RegionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceArnProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison CcAutomationRule#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values CcAutomationRule#values}
    */
    readonly values?: string[];
}
export class ResourceArnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceArnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceArnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._values = value.values;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class ResourceArnPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceArnProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceArnPropertyOutputReference {
        return new ResourceArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceTagsCriteriaConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison CcAutomationRule#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#key CcAutomationRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values CcAutomationRule#values}
    */
    readonly values?: string[];
}
export class ResourceTagsCriteriaConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceTagsCriteriaConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceTagsCriteriaConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._key = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._key = value.key;
            this._values = value.values;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class ResourceTagsCriteriaConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceTagsCriteriaConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceTagsCriteriaConditionPropertyOutputReference {
        return new ResourceTagsCriteriaConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RestartNeededProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison CcAutomationRule#comparison}
    */
    readonly comparison?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values CcAutomationRule#values}
    */
    readonly values?: string[];
}
export class RestartNeededPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RestartNeededProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestartNeededProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._values = value.values;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class RestartNeededPropertyList extends cdktn.ComplexList {
    public internalValue? : RestartNeededProperty[] | cdktn.IResolvable

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
    public get(index: number): RestartNeededPropertyOutputReference {
        return new RestartNeededPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CriteriaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_size_in_gib CcAutomationRule#ebs_volume_size_in_gib}
    */
    readonly ebsVolumeSizeInGib?: IntegerCriteriaConditionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_type CcAutomationRule#ebs_volume_type}
    */
    readonly ebsVolumeType?: StringCriteriaConditionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#estimated_monthly_savings CcAutomationRule#estimated_monthly_savings}
    */
    readonly estimatedMonthlySavings?: DoubleCriteriaConditionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#look_back_period_in_days CcAutomationRule#look_back_period_in_days}
    */
    readonly lookBackPeriodInDays?: LookBackPeriodInDaysProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#region CcAutomationRule#region}
    */
    readonly region?: RegionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#resource_arn CcAutomationRule#resource_arn}
    */
    readonly resourceArn?: ResourceArnProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#resource_tag CcAutomationRule#resource_tag}
    */
    readonly resourceTag?: ResourceTagsCriteriaConditionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#restart_needed CcAutomationRule#restart_needed}
    */
    readonly restartNeeded?: RestartNeededProperty[] | cdktn.IResolvable;
}
export class CriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ebsVolumeSizeInGib?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsVolumeSizeInGib = this._ebsVolumeSizeInGib?.internalValue;
        }
        if (this._ebsVolumeType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ebsVolumeType = this._ebsVolumeType?.internalValue;
        }
        if (this._estimatedMonthlySavings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.estimatedMonthlySavings = this._estimatedMonthlySavings?.internalValue;
        }
        if (this._lookBackPeriodInDays?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lookBackPeriodInDays = this._lookBackPeriodInDays?.internalValue;
        }
        if (this._region?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region?.internalValue;
        }
        if (this._resourceArn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn?.internalValue;
        }
        if (this._resourceTag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTag = this._resourceTag?.internalValue;
        }
        if (this._restartNeeded?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restartNeeded = this._restartNeeded?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ebsVolumeSizeInGib.internalValue = undefined;
            this._ebsVolumeType.internalValue = undefined;
            this._estimatedMonthlySavings.internalValue = undefined;
            this._lookBackPeriodInDays.internalValue = undefined;
            this._region.internalValue = undefined;
            this._resourceArn.internalValue = undefined;
            this._resourceTag.internalValue = undefined;
            this._restartNeeded.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ebsVolumeSizeInGib.internalValue = value.ebsVolumeSizeInGib;
            this._ebsVolumeType.internalValue = value.ebsVolumeType;
            this._estimatedMonthlySavings.internalValue = value.estimatedMonthlySavings;
            this._lookBackPeriodInDays.internalValue = value.lookBackPeriodInDays;
            this._region.internalValue = value.region;
            this._resourceArn.internalValue = value.resourceArn;
            this._resourceTag.internalValue = value.resourceTag;
            this._restartNeeded.internalValue = value.restartNeeded;
        }
    }

    // ebs_volume_size_in_gib - computed: true, optional: true, required: false
    private _ebsVolumeSizeInGib = new IntegerCriteriaConditionPropertyList(this, "ebs_volume_size_in_gib", false);
    public get ebsVolumeSizeInGib() {
        return this._ebsVolumeSizeInGib;
    }
    public putEbsVolumeSizeInGib(value: IntegerCriteriaConditionProperty[] | cdktn.IResolvable) {
        this._ebsVolumeSizeInGib.internalValue = value;
    }
    public resetEbsVolumeSizeInGib() {
        this._ebsVolumeSizeInGib.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeSizeInGibInput() {
        return this._ebsVolumeSizeInGib.internalValue;
    }

    // ebs_volume_type - computed: true, optional: true, required: false
    private _ebsVolumeType = new StringCriteriaConditionPropertyList(this, "ebs_volume_type", false);
    public get ebsVolumeType() {
        return this._ebsVolumeType;
    }
    public putEbsVolumeType(value: StringCriteriaConditionProperty[] | cdktn.IResolvable) {
        this._ebsVolumeType.internalValue = value;
    }
    public resetEbsVolumeType() {
        this._ebsVolumeType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsVolumeTypeInput() {
        return this._ebsVolumeType.internalValue;
    }

    // estimated_monthly_savings - computed: true, optional: true, required: false
    private _estimatedMonthlySavings = new DoubleCriteriaConditionPropertyList(this, "estimated_monthly_savings", false);
    public get estimatedMonthlySavings() {
        return this._estimatedMonthlySavings;
    }
    public putEstimatedMonthlySavings(value: DoubleCriteriaConditionProperty[] | cdktn.IResolvable) {
        this._estimatedMonthlySavings.internalValue = value;
    }
    public resetEstimatedMonthlySavings() {
        this._estimatedMonthlySavings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get estimatedMonthlySavingsInput() {
        return this._estimatedMonthlySavings.internalValue;
    }

    // look_back_period_in_days - computed: true, optional: true, required: false
    private _lookBackPeriodInDays = new LookBackPeriodInDaysPropertyList(this, "look_back_period_in_days", false);
    public get lookBackPeriodInDays() {
        return this._lookBackPeriodInDays;
    }
    public putLookBackPeriodInDays(value: LookBackPeriodInDaysProperty[] | cdktn.IResolvable) {
        this._lookBackPeriodInDays.internalValue = value;
    }
    public resetLookBackPeriodInDays() {
        this._lookBackPeriodInDays.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lookBackPeriodInDaysInput() {
        return this._lookBackPeriodInDays.internalValue;
    }

    // region - computed: true, optional: true, required: false
    private _region = new RegionPropertyList(this, "region", false);
    public get region() {
        return this._region;
    }
    public putRegion(value: RegionProperty[] | cdktn.IResolvable) {
        this._region.internalValue = value;
    }
    public resetRegion() {
        this._region.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region.internalValue;
    }

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn = new ResourceArnPropertyList(this, "resource_arn", false);
    public get resourceArn() {
        return this._resourceArn;
    }
    public putResourceArn(value: ResourceArnProperty[] | cdktn.IResolvable) {
        this._resourceArn.internalValue = value;
    }
    public resetResourceArn() {
        this._resourceArn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn.internalValue;
    }

    // resource_tag - computed: true, optional: true, required: false
    private _resourceTag = new ResourceTagsCriteriaConditionPropertyList(this, "resource_tag", false);
    public get resourceTag() {
        return this._resourceTag;
    }
    public putResourceTag(value: ResourceTagsCriteriaConditionProperty[] | cdktn.IResolvable) {
        this._resourceTag.internalValue = value;
    }
    public resetResourceTag() {
        this._resourceTag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagInput() {
        return this._resourceTag.internalValue;
    }

    // restart_needed - computed: true, optional: true, required: false
    private _restartNeeded = new RestartNeededPropertyList(this, "restart_needed", false);
    public get restartNeeded() {
        return this._restartNeeded;
    }
    public putRestartNeeded(value: RestartNeededProperty[] | cdktn.IResolvable) {
        this._restartNeeded.internalValue = value;
    }
    public resetRestartNeeded() {
        this._restartNeeded.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restartNeededInput() {
        return this._restartNeeded.internalValue;
    }
}
export interface OrganizationConfigurationProperty {
    /**
    * List of account IDs where the organization rule applies
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#account_ids CcAutomationRule#account_ids}
    */
    readonly accountIds?: string[];
    /**
    * When the rule should be applied relative to account rules
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#rule_apply_order CcAutomationRule#rule_apply_order}
    */
    readonly ruleApplyOrder?: string;
}
export class OrganizationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OrganizationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountIds = this._accountIds;
        }
        if (this._ruleApplyOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleApplyOrder = this._ruleApplyOrder;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrganizationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountIds = undefined;
            this._ruleApplyOrder = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountIds = value.accountIds;
            this._ruleApplyOrder = value.ruleApplyOrder;
        }
    }

    // account_ids - computed: true, optional: true, required: false
    private _accountIds?: string[]; 
    public get accountIds() {
        return this.getListAttribute('account_ids');
    }
    public set accountIds(value: string[]) {
        this._accountIds = value;
    }
    public resetAccountIds() {
        this._accountIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdsInput() {
        return this._accountIds;
    }

    // rule_apply_order - computed: true, optional: true, required: false
    private _ruleApplyOrder?: string; 
    public get ruleApplyOrder() {
        return this.getStringAttribute('rule_apply_order');
    }
    public set ruleApplyOrder(value: string) {
        this._ruleApplyOrder = value;
    }
    public resetRuleApplyOrder() {
        this._ruleApplyOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleApplyOrderInput() {
        return this._ruleApplyOrder;
    }
}
export interface ScheduleProperty {
    /**
    * Execution window duration in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#execution_window_in_minutes CcAutomationRule#execution_window_in_minutes}
    */
    readonly executionWindowInMinutes?: number;
    /**
    * Schedule expression (e.g., cron or rate expression)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#schedule_expression CcAutomationRule#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * IANA timezone identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#schedule_expression_timezone CcAutomationRule#schedule_expression_timezone}
    */
    readonly scheduleExpressionTimezone?: string;
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
        if (this._executionWindowInMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionWindowInMinutes = this._executionWindowInMinutes;
        }
        if (this._scheduleExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        if (this._scheduleExpressionTimezone !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpressionTimezone = this._scheduleExpressionTimezone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executionWindowInMinutes = undefined;
            this._scheduleExpression = undefined;
            this._scheduleExpressionTimezone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executionWindowInMinutes = value.executionWindowInMinutes;
            this._scheduleExpression = value.scheduleExpression;
            this._scheduleExpressionTimezone = value.scheduleExpressionTimezone;
        }
    }

    // execution_window_in_minutes - computed: true, optional: true, required: false
    private _executionWindowInMinutes?: number; 
    public get executionWindowInMinutes() {
        return this.getNumberAttribute('execution_window_in_minutes');
    }
    public set executionWindowInMinutes(value: number) {
        this._executionWindowInMinutes = value;
    }
    public resetExecutionWindowInMinutes() {
        this._executionWindowInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionWindowInMinutesInput() {
        return this._executionWindowInMinutes;
    }

    // schedule_expression - computed: true, optional: true, required: false
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
        this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }

    // schedule_expression_timezone - computed: true, optional: true, required: false
    private _scheduleExpressionTimezone?: string; 
    public get scheduleExpressionTimezone() {
        return this.getStringAttribute('schedule_expression_timezone');
    }
    public set scheduleExpressionTimezone(value: string) {
        this._scheduleExpressionTimezone = value;
    }
    public resetScheduleExpressionTimezone() {
        this._scheduleExpressionTimezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionTimezoneInput() {
        return this._scheduleExpressionTimezone;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#key CcAutomationRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#value CcAutomationRule#value}
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
