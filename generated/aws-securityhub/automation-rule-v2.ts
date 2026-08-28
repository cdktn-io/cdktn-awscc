// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAutomationRuleV2Props extends cdktn.TerraformMetaArguments {
    /**
    * A list of actions to be performed when the rule criteria is met
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#actions CcAutomationRuleV2#actions}
    */
    readonly actions: CcAutomationRuleV2.AutomationRulesActionV2Property[] | cdktn.IResolvable;
    /**
    * Defines the parameters and conditions used to evaluate and filter security findings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#criteria CcAutomationRuleV2#criteria}
    */
    readonly criteria: CcAutomationRuleV2.CriteriaProperty;
    /**
    * A description of the automation rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#description CcAutomationRuleV2#description}
    */
    readonly description: string;
    /**
    * The name of the automation rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#rule_name CcAutomationRuleV2#rule_name}
    */
    readonly ruleName: string;
    /**
    * The value for the rule priority
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#rule_order CcAutomationRuleV2#rule_order}
    */
    readonly ruleOrder: number;
    /**
    * The status of the automation rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#rule_status CcAutomationRuleV2#rule_status}
    */
    readonly ruleStatus?: string;
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#tags CcAutomationRuleV2#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2 awscc_securityhub_automation_rule_v2}
*/
export class CcAutomationRuleV2 extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_automation_rule_v2";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAutomationRuleV2 resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAutomationRuleV2 to import
    * @param importFromId The id of the existing CcAutomationRuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAutomationRuleV2 to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_automation_rule_v2", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2 awscc_securityhub_automation_rule_v2} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAutomationRuleV2Props
    */
    public constructor(scope: Construct, id: string, config: CcAutomationRuleV2Props) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_automation_rule_v2',
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
        this._actions.internalValue = config.actions;
        this._criteria.internalValue = config.criteria;
        this._description = config.description;
        this._ruleName = config.ruleName;
        this._ruleOrder = config.ruleOrder;
        this._ruleStatus = config.ruleStatus;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions - computed: false, optional: false, required: true
    private _actions = new CcAutomationRuleV2.AutomationRulesActionV2PropertyList(this, "actions", false);
    public get actions() {
        return this._actions;
    }
    public putActions(value: CcAutomationRuleV2.AutomationRulesActionV2Property[] | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // criteria - computed: false, optional: false, required: true
    private _criteria = new CcAutomationRuleV2.CriteriaPropertyOutputReference(this, "criteria");
    public get criteria() {
        return this._criteria;
    }
    public putCriteria(value: CcAutomationRuleV2.CriteriaProperty) {
        this._criteria.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get criteriaInput() {
        return this._criteria.internalValue;
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // rule_arn - computed: true, optional: false, required: false
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
    }

    // rule_id - computed: true, optional: false, required: false
    public get ruleId() {
        return this.getStringAttribute('rule_id');
    }

    // rule_name - computed: false, optional: false, required: true
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }

    // rule_order - computed: false, optional: false, required: true
    private _ruleOrder?: number; 
    public get ruleOrder() {
        return this.getNumberAttribute('rule_order');
    }
    public set ruleOrder(value: number) {
        this._ruleOrder = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleOrderInput() {
        return this._ruleOrder;
    }

    // rule_status - computed: true, optional: true, required: false
    private _ruleStatus?: string; 
    public get ruleStatus() {
        return this.getStringAttribute('rule_status');
    }
    public set ruleStatus(value: string) {
        this._ruleStatus = value;
    }
    public resetRuleStatus() {
        this._ruleStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleStatusInput() {
        return this._ruleStatus;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            actions: cdktn.listMapper(ccAutomationRuleV2AutomationRulesActionV2PropertyToTerraform, false)(this._actions.internalValue),
            criteria: ccAutomationRuleV2CriteriaPropertyToTerraform(this._criteria.internalValue),
            description: cdktn.stringToTerraform(this._description),
            rule_name: cdktn.stringToTerraform(this._ruleName),
            rule_order: cdktn.numberToTerraform(this._ruleOrder),
            rule_status: cdktn.stringToTerraform(this._ruleStatus),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            actions: {
                value: cdktn.listMapperHcl(ccAutomationRuleV2AutomationRulesActionV2PropertyToHclTerraform, false)(this._actions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAutomationRuleV2.AutomationRulesActionV2PropertyList",
            },
            criteria: {
                value: ccAutomationRuleV2CriteriaPropertyToHclTerraform(this._criteria.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAutomationRuleV2.CriteriaProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_name: {
                value: cdktn.stringToHclTerraform(this._ruleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_order: {
                value: cdktn.numberToHclTerraform(this._ruleOrder),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rule_status: {
                value: cdktn.stringToHclTerraform(this._ruleStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAutomationRuleV2ExternalIntegrationConfigurationPropertyToTerraform(struct?: CcAutomationRuleV2.ExternalIntegrationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connector_arn: cdktn.stringToTerraform(struct!.connectorArn),
    }
}


export function ccAutomationRuleV2ExternalIntegrationConfigurationPropertyToHclTerraform(struct?: CcAutomationRuleV2.ExternalIntegrationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connector_arn: {
            value: cdktn.stringToHclTerraform(struct!.connectorArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2AutomationRulesFindingFieldsUpdateV2PropertyToTerraform(struct?: CcAutomationRuleV2.AutomationRulesFindingFieldsUpdateV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comment: cdktn.stringToTerraform(struct!.comment),
        severity_id: cdktn.numberToTerraform(struct!.severityId),
        status_id: cdktn.numberToTerraform(struct!.statusId),
    }
}


export function ccAutomationRuleV2AutomationRulesFindingFieldsUpdateV2PropertyToHclTerraform(struct?: CcAutomationRuleV2.AutomationRulesFindingFieldsUpdateV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comment: {
            value: cdktn.stringToHclTerraform(struct!.comment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        severity_id: {
            value: cdktn.numberToHclTerraform(struct!.severityId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        status_id: {
            value: cdktn.numberToHclTerraform(struct!.statusId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2AutomationRulesActionV2PropertyToTerraform(struct?: CcAutomationRuleV2.AutomationRulesActionV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        external_integration_configuration: ccAutomationRuleV2ExternalIntegrationConfigurationPropertyToTerraform(struct!.externalIntegrationConfiguration),
        finding_fields_update: ccAutomationRuleV2AutomationRulesFindingFieldsUpdateV2PropertyToTerraform(struct!.findingFieldsUpdate),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccAutomationRuleV2AutomationRulesActionV2PropertyToHclTerraform(struct?: CcAutomationRuleV2.AutomationRulesActionV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        external_integration_configuration: {
            value: ccAutomationRuleV2ExternalIntegrationConfigurationPropertyToHclTerraform(struct!.externalIntegrationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ExternalIntegrationConfigurationProperty",
        },
        finding_fields_update: {
            value: ccAutomationRuleV2AutomationRulesFindingFieldsUpdateV2PropertyToHclTerraform(struct!.findingFieldsUpdate),
            isBlock: true,
            type: "struct",
            storageClassType: "AutomationRulesFindingFieldsUpdateV2Property",
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


export function ccAutomationRuleV2BooleanFilterPropertyToTerraform(struct?: CcAutomationRuleV2.BooleanFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.booleanToTerraform(struct!.value),
    }
}


export function ccAutomationRuleV2BooleanFilterPropertyToHclTerraform(struct?: CcAutomationRuleV2.BooleanFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: cdktn.booleanToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2OcsfBooleanFilterPropertyToTerraform(struct?: CcAutomationRuleV2.OcsfBooleanFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_name: cdktn.stringToTerraform(struct!.fieldName),
        filter: ccAutomationRuleV2BooleanFilterPropertyToTerraform(struct!.filter),
    }
}


export function ccAutomationRuleV2OcsfBooleanFilterPropertyToHclTerraform(struct?: CcAutomationRuleV2.OcsfBooleanFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_name: {
            value: cdktn.stringToHclTerraform(struct!.fieldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter: {
            value: ccAutomationRuleV2BooleanFilterPropertyToHclTerraform(struct!.filter),
            isBlock: true,
            type: "struct",
            storageClassType: "BooleanFilterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2DateRangePropertyToTerraform(struct?: CcAutomationRuleV2.DateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccAutomationRuleV2DateRangePropertyToHclTerraform(struct?: CcAutomationRuleV2.DateRangeProperty | cdktn.IResolvable): any {
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
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2DateFilterPropertyToTerraform(struct?: CcAutomationRuleV2.DateFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccAutomationRuleV2DateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccAutomationRuleV2DateFilterPropertyToHclTerraform(struct?: CcAutomationRuleV2.DateFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccAutomationRuleV2DateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "DateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2OcsfDateFilterPropertyToTerraform(struct?: CcAutomationRuleV2.OcsfDateFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_name: cdktn.stringToTerraform(struct!.fieldName),
        filter: ccAutomationRuleV2DateFilterPropertyToTerraform(struct!.filter),
    }
}


export function ccAutomationRuleV2OcsfDateFilterPropertyToHclTerraform(struct?: CcAutomationRuleV2.OcsfDateFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_name: {
            value: cdktn.stringToHclTerraform(struct!.fieldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter: {
            value: ccAutomationRuleV2DateFilterPropertyToHclTerraform(struct!.filter),
            isBlock: true,
            type: "struct",
            storageClassType: "DateFilterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2MapFilterPropertyToTerraform(struct?: CcAutomationRuleV2.MapFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAutomationRuleV2MapFilterPropertyToHclTerraform(struct?: CcAutomationRuleV2.MapFilterProperty | cdktn.IResolvable): any {
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


export function ccAutomationRuleV2OcsfMapFilterPropertyToTerraform(struct?: CcAutomationRuleV2.OcsfMapFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_name: cdktn.stringToTerraform(struct!.fieldName),
        filter: ccAutomationRuleV2MapFilterPropertyToTerraform(struct!.filter),
    }
}


export function ccAutomationRuleV2OcsfMapFilterPropertyToHclTerraform(struct?: CcAutomationRuleV2.OcsfMapFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_name: {
            value: cdktn.stringToHclTerraform(struct!.fieldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter: {
            value: ccAutomationRuleV2MapFilterPropertyToHclTerraform(struct!.filter),
            isBlock: true,
            type: "struct",
            storageClassType: "MapFilterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2NumberFilterPropertyToTerraform(struct?: CcAutomationRuleV2.NumberFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.numberToTerraform(struct!.eq),
        gte: cdktn.numberToTerraform(struct!.gte),
        lte: cdktn.numberToTerraform(struct!.lte),
    }
}


export function ccAutomationRuleV2NumberFilterPropertyToHclTerraform(struct?: CcAutomationRuleV2.NumberFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.numberToHclTerraform(struct!.eq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2OcsfNumberFilterPropertyToTerraform(struct?: CcAutomationRuleV2.OcsfNumberFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_name: cdktn.stringToTerraform(struct!.fieldName),
        filter: ccAutomationRuleV2NumberFilterPropertyToTerraform(struct!.filter),
    }
}


export function ccAutomationRuleV2OcsfNumberFilterPropertyToHclTerraform(struct?: CcAutomationRuleV2.OcsfNumberFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_name: {
            value: cdktn.stringToHclTerraform(struct!.fieldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter: {
            value: ccAutomationRuleV2NumberFilterPropertyToHclTerraform(struct!.filter),
            isBlock: true,
            type: "struct",
            storageClassType: "NumberFilterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2StringFilterPropertyToTerraform(struct?: CcAutomationRuleV2.StringFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAutomationRuleV2StringFilterPropertyToHclTerraform(struct?: CcAutomationRuleV2.StringFilterProperty | cdktn.IResolvable): any {
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


export function ccAutomationRuleV2OcsfStringFilterPropertyToTerraform(struct?: CcAutomationRuleV2.OcsfStringFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_name: cdktn.stringToTerraform(struct!.fieldName),
        filter: ccAutomationRuleV2StringFilterPropertyToTerraform(struct!.filter),
    }
}


export function ccAutomationRuleV2OcsfStringFilterPropertyToHclTerraform(struct?: CcAutomationRuleV2.OcsfStringFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_name: {
            value: cdktn.stringToHclTerraform(struct!.fieldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter: {
            value: ccAutomationRuleV2StringFilterPropertyToHclTerraform(struct!.filter),
            isBlock: true,
            type: "struct",
            storageClassType: "StringFilterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2CompositeFilterPropertyToTerraform(struct?: CcAutomationRuleV2.CompositeFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_filters: cdktn.listMapper(ccAutomationRuleV2OcsfBooleanFilterPropertyToTerraform, false)(struct!.booleanFilters),
        date_filters: cdktn.listMapper(ccAutomationRuleV2OcsfDateFilterPropertyToTerraform, false)(struct!.dateFilters),
        map_filters: cdktn.listMapper(ccAutomationRuleV2OcsfMapFilterPropertyToTerraform, false)(struct!.mapFilters),
        number_filters: cdktn.listMapper(ccAutomationRuleV2OcsfNumberFilterPropertyToTerraform, false)(struct!.numberFilters),
        operator: cdktn.stringToTerraform(struct!.operator),
        string_filters: cdktn.listMapper(ccAutomationRuleV2OcsfStringFilterPropertyToTerraform, false)(struct!.stringFilters),
    }
}


export function ccAutomationRuleV2CompositeFilterPropertyToHclTerraform(struct?: CcAutomationRuleV2.CompositeFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_filters: {
            value: cdktn.listMapperHcl(ccAutomationRuleV2OcsfBooleanFilterPropertyToHclTerraform, false)(struct!.booleanFilters),
            isBlock: true,
            type: "list",
            storageClassType: "OcsfBooleanFilterPropertyList",
        },
        date_filters: {
            value: cdktn.listMapperHcl(ccAutomationRuleV2OcsfDateFilterPropertyToHclTerraform, false)(struct!.dateFilters),
            isBlock: true,
            type: "list",
            storageClassType: "OcsfDateFilterPropertyList",
        },
        map_filters: {
            value: cdktn.listMapperHcl(ccAutomationRuleV2OcsfMapFilterPropertyToHclTerraform, false)(struct!.mapFilters),
            isBlock: true,
            type: "list",
            storageClassType: "OcsfMapFilterPropertyList",
        },
        number_filters: {
            value: cdktn.listMapperHcl(ccAutomationRuleV2OcsfNumberFilterPropertyToHclTerraform, false)(struct!.numberFilters),
            isBlock: true,
            type: "list",
            storageClassType: "OcsfNumberFilterPropertyList",
        },
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        string_filters: {
            value: cdktn.listMapperHcl(ccAutomationRuleV2OcsfStringFilterPropertyToHclTerraform, false)(struct!.stringFilters),
            isBlock: true,
            type: "list",
            storageClassType: "OcsfStringFilterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2OcsfFindingFiltersPropertyToTerraform(struct?: CcAutomationRuleV2.OcsfFindingFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        composite_filters: cdktn.listMapper(ccAutomationRuleV2CompositeFilterPropertyToTerraform, false)(struct!.compositeFilters),
        composite_operator: cdktn.stringToTerraform(struct!.compositeOperator),
    }
}


export function ccAutomationRuleV2OcsfFindingFiltersPropertyToHclTerraform(struct?: CcAutomationRuleV2.OcsfFindingFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        composite_filters: {
            value: cdktn.listMapperHcl(ccAutomationRuleV2CompositeFilterPropertyToHclTerraform, false)(struct!.compositeFilters),
            isBlock: true,
            type: "list",
            storageClassType: "CompositeFilterPropertyList",
        },
        composite_operator: {
            value: cdktn.stringToHclTerraform(struct!.compositeOperator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAutomationRuleV2CriteriaPropertyToTerraform(struct?: CcAutomationRuleV2.CriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ocsf_finding_criteria: ccAutomationRuleV2OcsfFindingFiltersPropertyToTerraform(struct!.ocsfFindingCriteria),
    }
}


export function ccAutomationRuleV2CriteriaPropertyToHclTerraform(struct?: CcAutomationRuleV2.CriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ocsf_finding_criteria: {
            value: ccAutomationRuleV2OcsfFindingFiltersPropertyToHclTerraform(struct!.ocsfFindingCriteria),
            isBlock: true,
            type: "struct",
            storageClassType: "OcsfFindingFiltersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAutomationRuleV2 {
export interface ExternalIntegrationConfigurationProperty {
    /**
    * The ARN of the connector that establishes the integration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#connector_arn CcAutomationRuleV2#connector_arn}
    */
    readonly connectorArn?: string;
}
export class ExternalIntegrationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExternalIntegrationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectorArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectorArn = this._connectorArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExternalIntegrationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectorArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectorArn = value.connectorArn;
        }
    }

    // connector_arn - computed: true, optional: true, required: false
    private _connectorArn?: string; 
    public get connectorArn() {
        return this.getStringAttribute('connector_arn');
    }
    public set connectorArn(value: string) {
        this._connectorArn = value;
    }
    public resetConnectorArn() {
        this._connectorArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorArnInput() {
        return this._connectorArn;
    }
}
export interface AutomationRulesFindingFieldsUpdateV2Property {
    /**
    * Notes or contextual information for findings that are modified by the automation rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#comment CcAutomationRuleV2#comment}
    */
    readonly comment?: string;
    /**
    * The severity level to be assigned to findings that match the automation rule criteria
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#severity_id CcAutomationRuleV2#severity_id}
    */
    readonly severityId?: number;
    /**
    * The status to be applied to findings that match automation rule criteria
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#status_id CcAutomationRuleV2#status_id}
    */
    readonly statusId?: number;
}
export class AutomationRulesFindingFieldsUpdateV2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutomationRulesFindingFieldsUpdateV2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._severityId !== undefined) {
            hasAnyValues = true;
            internalValueResult.severityId = this._severityId;
        }
        if (this._statusId !== undefined) {
            hasAnyValues = true;
            internalValueResult.statusId = this._statusId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutomationRulesFindingFieldsUpdateV2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comment = undefined;
            this._severityId = undefined;
            this._statusId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comment = value.comment;
            this._severityId = value.severityId;
            this._statusId = value.statusId;
        }
    }

    // comment - computed: true, optional: true, required: false
    private _comment?: string; 
    public get comment() {
        return this.getStringAttribute('comment');
    }
    public set comment(value: string) {
        this._comment = value;
    }
    public resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
        return this._comment;
    }

    // severity_id - computed: true, optional: true, required: false
    private _severityId?: number; 
    public get severityId() {
        return this.getNumberAttribute('severity_id');
    }
    public set severityId(value: number) {
        this._severityId = value;
    }
    public resetSeverityId() {
        this._severityId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severityIdInput() {
        return this._severityId;
    }

    // status_id - computed: true, optional: true, required: false
    private _statusId?: number; 
    public get statusId() {
        return this.getNumberAttribute('status_id');
    }
    public set statusId(value: number) {
        this._statusId = value;
    }
    public resetStatusId() {
        this._statusId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusIdInput() {
        return this._statusId;
    }
}
export interface AutomationRulesActionV2Property {
    /**
    * The settings for integrating automation rule actions with external systems or service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#external_integration_configuration CcAutomationRuleV2#external_integration_configuration}
    */
    readonly externalIntegrationConfiguration?: ExternalIntegrationConfigurationProperty;
    /**
    * The changes to be applied to fields in a security finding when an automation rule is triggered
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#finding_fields_update CcAutomationRuleV2#finding_fields_update}
    */
    readonly findingFieldsUpdate?: AutomationRulesFindingFieldsUpdateV2Property;
    /**
    * The category of action to be executed by the automation rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#type CcAutomationRuleV2#type}
    */
    readonly type: string;
}
export class AutomationRulesActionV2PropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AutomationRulesActionV2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._externalIntegrationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalIntegrationConfiguration = this._externalIntegrationConfiguration?.internalValue;
        }
        if (this._findingFieldsUpdate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findingFieldsUpdate = this._findingFieldsUpdate?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutomationRulesActionV2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._externalIntegrationConfiguration.internalValue = undefined;
            this._findingFieldsUpdate.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._externalIntegrationConfiguration.internalValue = value.externalIntegrationConfiguration;
            this._findingFieldsUpdate.internalValue = value.findingFieldsUpdate;
            this._type = value.type;
        }
    }

    // external_integration_configuration - computed: true, optional: true, required: false
    private _externalIntegrationConfiguration = new ExternalIntegrationConfigurationPropertyOutputReference(this, "external_integration_configuration");
    public get externalIntegrationConfiguration() {
        return this._externalIntegrationConfiguration;
    }
    public putExternalIntegrationConfiguration(value: ExternalIntegrationConfigurationProperty) {
        this._externalIntegrationConfiguration.internalValue = value;
    }
    public resetExternalIntegrationConfiguration() {
        this._externalIntegrationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalIntegrationConfigurationInput() {
        return this._externalIntegrationConfiguration.internalValue;
    }

    // finding_fields_update - computed: true, optional: true, required: false
    private _findingFieldsUpdate = new AutomationRulesFindingFieldsUpdateV2PropertyOutputReference(this, "finding_fields_update");
    public get findingFieldsUpdate() {
        return this._findingFieldsUpdate;
    }
    public putFindingFieldsUpdate(value: AutomationRulesFindingFieldsUpdateV2Property) {
        this._findingFieldsUpdate.internalValue = value;
    }
    public resetFindingFieldsUpdate() {
        this._findingFieldsUpdate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingFieldsUpdateInput() {
        return this._findingFieldsUpdate.internalValue;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class AutomationRulesActionV2PropertyList extends cdktn.ComplexList {
    public internalValue? : AutomationRulesActionV2Property[] | cdktn.IResolvable

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
    public get(index: number): AutomationRulesActionV2PropertyOutputReference {
        return new AutomationRulesActionV2PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface BooleanFilterProperty {
    /**
    * The value of the boolean
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#value CcAutomationRuleV2#value}
    */
    readonly value?: boolean | cdktn.IResolvable;
}
export class BooleanFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BooleanFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BooleanFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
    }

    // value - computed: true, optional: true, required: false
    private _value?: boolean | cdktn.IResolvable; 
    public get value() {
        return this.getBooleanAttribute('value');
    }
    public set value(value: boolean | cdktn.IResolvable) {
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
export interface OcsfBooleanFilterProperty {
    /**
    * The name of the field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#field_name CcAutomationRuleV2#field_name}
    */
    readonly fieldName?: string;
    /**
    * Boolean filter for querying findings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#filter CcAutomationRuleV2#filter}
    */
    readonly filter?: BooleanFilterProperty;
}
export class OcsfBooleanFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OcsfBooleanFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldName = this._fieldName;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OcsfBooleanFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldName = undefined;
            this._filter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldName = value.fieldName;
            this._filter.internalValue = value.filter;
        }
    }

    // field_name - computed: true, optional: true, required: false
    private _fieldName?: string; 
    public get fieldName() {
        return this.getStringAttribute('field_name');
    }
    public set fieldName(value: string) {
        this._fieldName = value;
    }
    public resetFieldName() {
        this._fieldName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldNameInput() {
        return this._fieldName;
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new BooleanFilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: BooleanFilterProperty) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
    }
}

export class OcsfBooleanFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : OcsfBooleanFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): OcsfBooleanFilterPropertyOutputReference {
        return new OcsfBooleanFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DateRangeProperty {
    /**
    * A date range unit for the date filter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#unit CcAutomationRuleV2#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#value CcAutomationRuleV2#value}
    */
    readonly value?: number;
}
export class DateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DateRangeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DateRangeProperty | cdktn.IResolvable | undefined) {
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
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
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
export interface DateFilterProperty {
    /**
    * A date range for the date filter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#date_range CcAutomationRuleV2#date_range}
    */
    readonly dateRange?: DateRangeProperty;
    /**
    * The timestamp formatted in ISO8601
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#end CcAutomationRuleV2#end}
    */
    readonly end?: string;
    /**
    * The timestamp formatted in ISO8601
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#start CcAutomationRuleV2#start}
    */
    readonly start?: string;
}
export class DateFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DateFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
        if (this._end !== undefined) {
            hasAnyValues = true;
            internalValueResult.end = this._end;
        }
        if (this._start !== undefined) {
            hasAnyValues = true;
            internalValueResult.start = this._start;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DateFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
            this._end = undefined;
            this._start = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new DateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: DateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
        this._end = value;
    }
    public resetEnd() {
        this._end = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInput() {
        return this._end;
    }

    // start - computed: true, optional: true, required: false
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
        this._start = value;
    }
    public resetStart() {
        this._start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInput() {
        return this._start;
    }
}
export interface OcsfDateFilterProperty {
    /**
    * The name of the field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#field_name CcAutomationRuleV2#field_name}
    */
    readonly fieldName?: string;
    /**
    * A date filter for querying findings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#filter CcAutomationRuleV2#filter}
    */
    readonly filter?: DateFilterProperty;
}
export class OcsfDateFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OcsfDateFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldName = this._fieldName;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OcsfDateFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldName = undefined;
            this._filter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldName = value.fieldName;
            this._filter.internalValue = value.filter;
        }
    }

    // field_name - computed: true, optional: true, required: false
    private _fieldName?: string; 
    public get fieldName() {
        return this.getStringAttribute('field_name');
    }
    public set fieldName(value: string) {
        this._fieldName = value;
    }
    public resetFieldName() {
        this._fieldName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldNameInput() {
        return this._fieldName;
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new DateFilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: DateFilterProperty) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
    }
}

export class OcsfDateFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : OcsfDateFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): OcsfDateFilterPropertyOutputReference {
        return new OcsfDateFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MapFilterProperty {
    /**
    * The condition to apply to the key value when filtering findings with a map filter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#comparison CcAutomationRuleV2#comparison}
    */
    readonly comparison?: string;
    /**
    * The key of the map filter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#key CcAutomationRuleV2#key}
    */
    readonly key?: string;
    /**
    * The value for the key in the map filter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#value CcAutomationRuleV2#value}
    */
    readonly value?: string;
}
export class MapFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MapFilterProperty | cdktn.IResolvable | undefined {
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
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MapFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
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
            this._comparison = value.comparison;
            this._key = value.key;
            this._value = value.value;
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
export interface OcsfMapFilterProperty {
    /**
    * The name of the field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#field_name CcAutomationRuleV2#field_name}
    */
    readonly fieldName?: string;
    /**
    * A map filter for filtering findings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#filter CcAutomationRuleV2#filter}
    */
    readonly filter?: MapFilterProperty;
}
export class OcsfMapFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OcsfMapFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldName = this._fieldName;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OcsfMapFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldName = undefined;
            this._filter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldName = value.fieldName;
            this._filter.internalValue = value.filter;
        }
    }

    // field_name - computed: true, optional: true, required: false
    private _fieldName?: string; 
    public get fieldName() {
        return this.getStringAttribute('field_name');
    }
    public set fieldName(value: string) {
        this._fieldName = value;
    }
    public resetFieldName() {
        this._fieldName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldNameInput() {
        return this._fieldName;
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new MapFilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: MapFilterProperty) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
    }
}

export class OcsfMapFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : OcsfMapFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): OcsfMapFilterPropertyOutputReference {
        return new OcsfMapFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NumberFilterProperty {
    /**
    * The equal-to condition to be applied to a single field when querying for findings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#eq CcAutomationRuleV2#eq}
    */
    readonly eq?: number;
    /**
    * The greater-than-equal condition to be applied to a single field when querying for findings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#gte CcAutomationRuleV2#gte}
    */
    readonly gte?: number;
    /**
    * The less-than-equal condition to be applied to a single field when querying for findings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#lte CcAutomationRuleV2#lte}
    */
    readonly lte?: number;
}
export class NumberFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NumberFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NumberFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gte = undefined;
            this._lte = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gte = value.gte;
            this._lte = value.lte;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: number; 
    public get eq() {
        return this.getNumberAttribute('eq');
    }
    public set eq(value: number) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }
}
export interface OcsfNumberFilterProperty {
    /**
    * The name of the field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#field_name CcAutomationRuleV2#field_name}
    */
    readonly fieldName?: string;
    /**
    * A number filter for querying findings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#filter CcAutomationRuleV2#filter}
    */
    readonly filter?: NumberFilterProperty;
}
export class OcsfNumberFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OcsfNumberFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldName = this._fieldName;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OcsfNumberFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldName = undefined;
            this._filter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldName = value.fieldName;
            this._filter.internalValue = value.filter;
        }
    }

    // field_name - computed: true, optional: true, required: false
    private _fieldName?: string; 
    public get fieldName() {
        return this.getStringAttribute('field_name');
    }
    public set fieldName(value: string) {
        this._fieldName = value;
    }
    public resetFieldName() {
        this._fieldName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldNameInput() {
        return this._fieldName;
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new NumberFilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: NumberFilterProperty) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
    }
}

export class OcsfNumberFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : OcsfNumberFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): OcsfNumberFilterPropertyOutputReference {
        return new OcsfNumberFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StringFilterProperty {
    /**
    * The condition to apply to a string value when filtering findings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#comparison CcAutomationRuleV2#comparison}
    */
    readonly comparison?: string;
    /**
    * The string filter value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#value CcAutomationRuleV2#value}
    */
    readonly value?: string;
}
export class StringFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StringFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StringFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
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
export interface OcsfStringFilterProperty {
    /**
    * The name of the field
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#field_name CcAutomationRuleV2#field_name}
    */
    readonly fieldName?: string;
    /**
    * A string filter for filtering findings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#filter CcAutomationRuleV2#filter}
    */
    readonly filter?: StringFilterProperty;
}
export class OcsfStringFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OcsfStringFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldName !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldName = this._fieldName;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OcsfStringFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldName = undefined;
            this._filter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldName = value.fieldName;
            this._filter.internalValue = value.filter;
        }
    }

    // field_name - computed: true, optional: true, required: false
    private _fieldName?: string; 
    public get fieldName() {
        return this.getStringAttribute('field_name');
    }
    public set fieldName(value: string) {
        this._fieldName = value;
    }
    public resetFieldName() {
        this._fieldName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldNameInput() {
        return this._fieldName;
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new StringFilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: StringFilterProperty) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
    }
}

export class OcsfStringFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : OcsfStringFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): OcsfStringFilterPropertyOutputReference {
        return new OcsfStringFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CompositeFilterProperty {
    /**
    * Enables filtering based on boolean field values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#boolean_filters CcAutomationRuleV2#boolean_filters}
    */
    readonly booleanFilters?: OcsfBooleanFilterProperty[] | cdktn.IResolvable;
    /**
    * Enables filtering based on date and timestamp fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#date_filters CcAutomationRuleV2#date_filters}
    */
    readonly dateFilters?: OcsfDateFilterProperty[] | cdktn.IResolvable;
    /**
    * Enables filtering based on map field value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#map_filters CcAutomationRuleV2#map_filters}
    */
    readonly mapFilters?: OcsfMapFilterProperty[] | cdktn.IResolvable;
    /**
    * Enables filtering based on numerical field values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#number_filters CcAutomationRuleV2#number_filters}
    */
    readonly numberFilters?: OcsfNumberFilterProperty[] | cdktn.IResolvable;
    /**
    * The logical operator used to combine multiple conditions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#operator CcAutomationRuleV2#operator}
    */
    readonly operator?: string;
    /**
    * Enables filtering based on string field values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#string_filters CcAutomationRuleV2#string_filters}
    */
    readonly stringFilters?: OcsfStringFilterProperty[] | cdktn.IResolvable;
}
export class CompositeFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CompositeFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._booleanFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanFilters = this._booleanFilters?.internalValue;
        }
        if (this._dateFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateFilters = this._dateFilters?.internalValue;
        }
        if (this._mapFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mapFilters = this._mapFilters?.internalValue;
        }
        if (this._numberFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberFilters = this._numberFilters?.internalValue;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._stringFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringFilters = this._stringFilters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CompositeFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanFilters.internalValue = undefined;
            this._dateFilters.internalValue = undefined;
            this._mapFilters.internalValue = undefined;
            this._numberFilters.internalValue = undefined;
            this._operator = undefined;
            this._stringFilters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanFilters.internalValue = value.booleanFilters;
            this._dateFilters.internalValue = value.dateFilters;
            this._mapFilters.internalValue = value.mapFilters;
            this._numberFilters.internalValue = value.numberFilters;
            this._operator = value.operator;
            this._stringFilters.internalValue = value.stringFilters;
        }
    }

    // boolean_filters - computed: true, optional: true, required: false
    private _booleanFilters = new OcsfBooleanFilterPropertyList(this, "boolean_filters", false);
    public get booleanFilters() {
        return this._booleanFilters;
    }
    public putBooleanFilters(value: OcsfBooleanFilterProperty[] | cdktn.IResolvable) {
        this._booleanFilters.internalValue = value;
    }
    public resetBooleanFilters() {
        this._booleanFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanFiltersInput() {
        return this._booleanFilters.internalValue;
    }

    // date_filters - computed: true, optional: true, required: false
    private _dateFilters = new OcsfDateFilterPropertyList(this, "date_filters", false);
    public get dateFilters() {
        return this._dateFilters;
    }
    public putDateFilters(value: OcsfDateFilterProperty[] | cdktn.IResolvable) {
        this._dateFilters.internalValue = value;
    }
    public resetDateFilters() {
        this._dateFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateFiltersInput() {
        return this._dateFilters.internalValue;
    }

    // map_filters - computed: true, optional: true, required: false
    private _mapFilters = new OcsfMapFilterPropertyList(this, "map_filters", false);
    public get mapFilters() {
        return this._mapFilters;
    }
    public putMapFilters(value: OcsfMapFilterProperty[] | cdktn.IResolvable) {
        this._mapFilters.internalValue = value;
    }
    public resetMapFilters() {
        this._mapFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mapFiltersInput() {
        return this._mapFilters.internalValue;
    }

    // number_filters - computed: true, optional: true, required: false
    private _numberFilters = new OcsfNumberFilterPropertyList(this, "number_filters", false);
    public get numberFilters() {
        return this._numberFilters;
    }
    public putNumberFilters(value: OcsfNumberFilterProperty[] | cdktn.IResolvable) {
        this._numberFilters.internalValue = value;
    }
    public resetNumberFilters() {
        this._numberFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberFiltersInput() {
        return this._numberFilters.internalValue;
    }

    // operator - computed: true, optional: true, required: false
    private _operator?: string; 
    public get operator() {
        return this.getStringAttribute('operator');
    }
    public set operator(value: string) {
        this._operator = value;
    }
    public resetOperator() {
        this._operator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorInput() {
        return this._operator;
    }

    // string_filters - computed: true, optional: true, required: false
    private _stringFilters = new OcsfStringFilterPropertyList(this, "string_filters", false);
    public get stringFilters() {
        return this._stringFilters;
    }
    public putStringFilters(value: OcsfStringFilterProperty[] | cdktn.IResolvable) {
        this._stringFilters.internalValue = value;
    }
    public resetStringFilters() {
        this._stringFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringFiltersInput() {
        return this._stringFilters.internalValue;
    }
}

export class CompositeFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : CompositeFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): CompositeFilterPropertyOutputReference {
        return new CompositeFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OcsfFindingFiltersProperty {
    /**
    * Enables the creation of complex filtering conditions by combining filter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#composite_filters CcAutomationRuleV2#composite_filters}
    */
    readonly compositeFilters?: CompositeFilterProperty[] | cdktn.IResolvable;
    /**
    * The logical operator used to combine multiple conditions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#composite_operator CcAutomationRuleV2#composite_operator}
    */
    readonly compositeOperator?: string;
}
export class OcsfFindingFiltersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OcsfFindingFiltersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compositeFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.compositeFilters = this._compositeFilters?.internalValue;
        }
        if (this._compositeOperator !== undefined) {
            hasAnyValues = true;
            internalValueResult.compositeOperator = this._compositeOperator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OcsfFindingFiltersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compositeFilters.internalValue = undefined;
            this._compositeOperator = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compositeFilters.internalValue = value.compositeFilters;
            this._compositeOperator = value.compositeOperator;
        }
    }

    // composite_filters - computed: true, optional: true, required: false
    private _compositeFilters = new CompositeFilterPropertyList(this, "composite_filters", false);
    public get compositeFilters() {
        return this._compositeFilters;
    }
    public putCompositeFilters(value: CompositeFilterProperty[] | cdktn.IResolvable) {
        this._compositeFilters.internalValue = value;
    }
    public resetCompositeFilters() {
        this._compositeFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compositeFiltersInput() {
        return this._compositeFilters.internalValue;
    }

    // composite_operator - computed: true, optional: true, required: false
    private _compositeOperator?: string; 
    public get compositeOperator() {
        return this.getStringAttribute('composite_operator');
    }
    public set compositeOperator(value: string) {
        this._compositeOperator = value;
    }
    public resetCompositeOperator() {
        this._compositeOperator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compositeOperatorInput() {
        return this._compositeOperator;
    }
}
export interface CriteriaProperty {
    /**
    * The filtering conditions that align with OCSF standards
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/securityhub_automation_rule_v2#ocsf_finding_criteria CcAutomationRuleV2#ocsf_finding_criteria}
    */
    readonly ocsfFindingCriteria?: OcsfFindingFiltersProperty;
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
        if (this._ocsfFindingCriteria?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ocsfFindingCriteria = this._ocsfFindingCriteria?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ocsfFindingCriteria.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ocsfFindingCriteria.internalValue = value.ocsfFindingCriteria;
        }
    }

    // ocsf_finding_criteria - computed: true, optional: true, required: false
    private _ocsfFindingCriteria = new OcsfFindingFiltersPropertyOutputReference(this, "ocsf_finding_criteria");
    public get ocsfFindingCriteria() {
        return this._ocsfFindingCriteria;
    }
    public putOcsfFindingCriteria(value: OcsfFindingFiltersProperty) {
        this._ocsfFindingCriteria.internalValue = value;
    }
    public resetOcsfFindingCriteria() {
        this._ocsfFindingCriteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ocsfFindingCriteriaInput() {
        return this._ocsfFindingCriteria.internalValue;
    }
}
}
