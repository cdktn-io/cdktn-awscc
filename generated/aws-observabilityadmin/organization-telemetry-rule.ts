// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOrganizationTelemetryRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The telemetry rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#rule CcOrganizationTelemetryRule#rule}
    */
    readonly rule: CcOrganizationTelemetryRule.TelemetryRuleProperty;
    /**
    * The name of the organization telemetry rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#rule_name CcOrganizationTelemetryRule#rule_name}
    */
    readonly ruleName: string;
    /**
    * An array of key-value pairs to apply to this resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#tags CcOrganizationTelemetryRule#tags}
    */
    readonly tags?: CcOrganizationTelemetryRule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule awscc_observabilityadmin_organization_telemetry_rule}
*/
export class CcOrganizationTelemetryRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_observabilityadmin_organization_telemetry_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOrganizationTelemetryRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOrganizationTelemetryRule to import
    * @param importFromId The id of the existing CcOrganizationTelemetryRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOrganizationTelemetryRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_observabilityadmin_organization_telemetry_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule awscc_observabilityadmin_organization_telemetry_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOrganizationTelemetryRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcOrganizationTelemetryRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_observabilityadmin_organization_telemetry_rule',
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
        this._rule.internalValue = config.rule;
        this._ruleName = config.ruleName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // region_statuses - computed: true, optional: false, required: false
    private _regionStatuses = new CcOrganizationTelemetryRule.RegionStatusesPropertyList(this, "region_statuses", false);
    public get regionStatuses() {
        return this._regionStatuses;
    }

    // rule - computed: false, optional: false, required: true
    private _rule = new CcOrganizationTelemetryRule.TelemetryRulePropertyOutputReference(this, "rule");
    public get rule() {
        return this._rule;
    }
    public putRule(value: CcOrganizationTelemetryRule.TelemetryRuleProperty) {
        this._rule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
        return this._rule.internalValue;
    }

    // rule_arn - computed: true, optional: false, required: false
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcOrganizationTelemetryRule.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcOrganizationTelemetryRule.TagProperty[] | cdktn.IResolvable) {
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
            rule: ccOrganizationTelemetryRuleTelemetryRulePropertyToTerraform(this._rule.internalValue),
            rule_name: cdktn.stringToTerraform(this._ruleName),
            tags: cdktn.listMapper(ccOrganizationTelemetryRuleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            rule: {
                value: ccOrganizationTelemetryRuleTelemetryRulePropertyToHclTerraform(this._rule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOrganizationTelemetryRule.TelemetryRuleProperty",
            },
            rule_name: {
                value: cdktn.stringToHclTerraform(this._ruleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccOrganizationTelemetryRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcOrganizationTelemetryRule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOrganizationTelemetryRuleRegionStatusesPropertyToTerraform(struct?: CcOrganizationTelemetryRule.RegionStatusesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOrganizationTelemetryRuleRegionStatusesPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.RegionStatusesProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOrganizationTelemetryRuleAdvancedFieldSelectorPropertyToTerraform(struct?: CcOrganizationTelemetryRule.AdvancedFieldSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ends_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endsWith),
        equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.equalTo),
        field: cdktn.stringToTerraform(struct!.field),
        not_ends_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notEndsWith),
        not_equals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notEquals),
        not_starts_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notStartsWith),
        starts_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.startsWith),
    }
}


export function ccOrganizationTelemetryRuleAdvancedFieldSelectorPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.AdvancedFieldSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ends_with: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endsWith),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        equals: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.equalTo),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        field: {
            value: cdktn.stringToHclTerraform(struct!.field),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        not_ends_with: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notEndsWith),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        not_equals: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notEquals),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        not_starts_with: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notStartsWith),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        starts_with: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.startsWith),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleAdvancedEventSelectorPropertyToTerraform(struct?: CcOrganizationTelemetryRule.AdvancedEventSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_selectors: cdktn.listMapper(ccOrganizationTelemetryRuleAdvancedFieldSelectorPropertyToTerraform, false)(struct!.fieldSelectors),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccOrganizationTelemetryRuleAdvancedEventSelectorPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.AdvancedEventSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_selectors: {
            value: cdktn.listMapperHcl(ccOrganizationTelemetryRuleAdvancedFieldSelectorPropertyToHclTerraform, false)(struct!.fieldSelectors),
            isBlock: true,
            type: "set",
            storageClassType: "AdvancedFieldSelectorPropertyList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleCloudtrailParametersPropertyToTerraform(struct?: CcOrganizationTelemetryRule.CloudtrailParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        advanced_event_selectors: cdktn.listMapper(ccOrganizationTelemetryRuleAdvancedEventSelectorPropertyToTerraform, false)(struct!.advancedEventSelectors),
    }
}


export function ccOrganizationTelemetryRuleCloudtrailParametersPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.CloudtrailParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        advanced_event_selectors: {
            value: cdktn.listMapperHcl(ccOrganizationTelemetryRuleAdvancedEventSelectorPropertyToHclTerraform, false)(struct!.advancedEventSelectors),
            isBlock: true,
            type: "set",
            storageClassType: "AdvancedEventSelectorPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleELBLoadBalancerLoggingParametersPropertyToTerraform(struct?: CcOrganizationTelemetryRule.ELBLoadBalancerLoggingParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field_delimiter: cdktn.stringToTerraform(struct!.fieldDelimiter),
        output_format: cdktn.stringToTerraform(struct!.outputFormat),
    }
}


export function ccOrganizationTelemetryRuleELBLoadBalancerLoggingParametersPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.ELBLoadBalancerLoggingParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field_delimiter: {
            value: cdktn.stringToHclTerraform(struct!.fieldDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_format: {
            value: cdktn.stringToHclTerraform(struct!.outputFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleLogDeliveryParametersPropertyToTerraform(struct?: CcOrganizationTelemetryRule.LogDeliveryParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.logTypes),
    }
}


export function ccOrganizationTelemetryRuleLogDeliveryParametersPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.LogDeliveryParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.logTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleVPCFlowLogParametersPropertyToTerraform(struct?: CcOrganizationTelemetryRule.VPCFlowLogParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_format: cdktn.stringToTerraform(struct!.logFormat),
        max_aggregation_interval: cdktn.numberToTerraform(struct!.maxAggregationInterval),
        traffic_type: cdktn.stringToTerraform(struct!.trafficType),
    }
}


export function ccOrganizationTelemetryRuleVPCFlowLogParametersPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.VPCFlowLogParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_format: {
            value: cdktn.stringToHclTerraform(struct!.logFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_aggregation_interval: {
            value: cdktn.numberToHclTerraform(struct!.maxAggregationInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        traffic_type: {
            value: cdktn.stringToHclTerraform(struct!.trafficType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleActionConditionPropertyToTerraform(struct?: CcOrganizationTelemetryRule.ActionConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
    }
}


export function ccOrganizationTelemetryRuleActionConditionPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.ActionConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleLabelNameConditionPropertyToTerraform(struct?: CcOrganizationTelemetryRule.LabelNameConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        label_name: cdktn.stringToTerraform(struct!.labelName),
    }
}


export function ccOrganizationTelemetryRuleLabelNameConditionPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.LabelNameConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        label_name: {
            value: cdktn.stringToHclTerraform(struct!.labelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleConditionPropertyToTerraform(struct?: CcOrganizationTelemetryRule.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_condition: ccOrganizationTelemetryRuleActionConditionPropertyToTerraform(struct!.actionCondition),
        label_name_condition: ccOrganizationTelemetryRuleLabelNameConditionPropertyToTerraform(struct!.labelNameCondition),
    }
}


export function ccOrganizationTelemetryRuleConditionPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.ConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_condition: {
            value: ccOrganizationTelemetryRuleActionConditionPropertyToHclTerraform(struct!.actionCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "ActionConditionProperty",
        },
        label_name_condition: {
            value: ccOrganizationTelemetryRuleLabelNameConditionPropertyToHclTerraform(struct!.labelNameCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "LabelNameConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleFilterPropertyToTerraform(struct?: CcOrganizationTelemetryRule.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        behavior: cdktn.stringToTerraform(struct!.behavior),
        conditions: cdktn.listMapper(ccOrganizationTelemetryRuleConditionPropertyToTerraform, false)(struct!.conditions),
        requirement: cdktn.stringToTerraform(struct!.requirement),
    }
}


export function ccOrganizationTelemetryRuleFilterPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        behavior: {
            value: cdktn.stringToHclTerraform(struct!.behavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        conditions: {
            value: cdktn.listMapperHcl(ccOrganizationTelemetryRuleConditionPropertyToHclTerraform, false)(struct!.conditions),
            isBlock: true,
            type: "set",
            storageClassType: "ConditionPropertyList",
        },
        requirement: {
            value: cdktn.stringToHclTerraform(struct!.requirement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleLoggingFilterPropertyToTerraform(struct?: CcOrganizationTelemetryRule.LoggingFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_behavior: cdktn.stringToTerraform(struct!.defaultBehavior),
        filters: cdktn.listMapper(ccOrganizationTelemetryRuleFilterPropertyToTerraform, false)(struct!.filters),
    }
}


export function ccOrganizationTelemetryRuleLoggingFilterPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.LoggingFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_behavior: {
            value: cdktn.stringToHclTerraform(struct!.defaultBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filters: {
            value: cdktn.listMapperHcl(ccOrganizationTelemetryRuleFilterPropertyToHclTerraform, false)(struct!.filters),
            isBlock: true,
            type: "set",
            storageClassType: "FilterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleSingleHeaderPropertyToTerraform(struct?: CcOrganizationTelemetryRule.SingleHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccOrganizationTelemetryRuleSingleHeaderPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.SingleHeaderProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleFieldToMatchPropertyToTerraform(struct?: CcOrganizationTelemetryRule.FieldToMatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        method: cdktn.stringToTerraform(struct!.method),
        query_string: cdktn.stringToTerraform(struct!.queryString),
        single_header: ccOrganizationTelemetryRuleSingleHeaderPropertyToTerraform(struct!.singleHeader),
        uri_path: cdktn.stringToTerraform(struct!.uriPath),
    }
}


export function ccOrganizationTelemetryRuleFieldToMatchPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.FieldToMatchProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        method: {
            value: cdktn.stringToHclTerraform(struct!.method),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query_string: {
            value: cdktn.stringToHclTerraform(struct!.queryString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        single_header: {
            value: ccOrganizationTelemetryRuleSingleHeaderPropertyToHclTerraform(struct!.singleHeader),
            isBlock: true,
            type: "struct",
            storageClassType: "SingleHeaderProperty",
        },
        uri_path: {
            value: cdktn.stringToHclTerraform(struct!.uriPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleWAFLoggingParametersPropertyToTerraform(struct?: CcOrganizationTelemetryRule.WAFLoggingParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_type: cdktn.stringToTerraform(struct!.logType),
        logging_filter: ccOrganizationTelemetryRuleLoggingFilterPropertyToTerraform(struct!.loggingFilter),
        redacted_fields: cdktn.listMapper(ccOrganizationTelemetryRuleFieldToMatchPropertyToTerraform, false)(struct!.redactedFields),
    }
}


export function ccOrganizationTelemetryRuleWAFLoggingParametersPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.WAFLoggingParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_type: {
            value: cdktn.stringToHclTerraform(struct!.logType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        logging_filter: {
            value: ccOrganizationTelemetryRuleLoggingFilterPropertyToHclTerraform(struct!.loggingFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "LoggingFilterProperty",
        },
        redacted_fields: {
            value: cdktn.listMapperHcl(ccOrganizationTelemetryRuleFieldToMatchPropertyToHclTerraform, false)(struct!.redactedFields),
            isBlock: true,
            type: "set",
            storageClassType: "FieldToMatchPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleTelemetryDestinationConfigurationPropertyToTerraform(struct?: CcOrganizationTelemetryRule.TelemetryDestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudtrail_parameters: ccOrganizationTelemetryRuleCloudtrailParametersPropertyToTerraform(struct!.cloudtrailParameters),
        destination_pattern: cdktn.stringToTerraform(struct!.destinationPattern),
        destination_type: cdktn.stringToTerraform(struct!.destinationType),
        elb_load_balancer_logging_parameters: ccOrganizationTelemetryRuleELBLoadBalancerLoggingParametersPropertyToTerraform(struct!.elbLoadBalancerLoggingParameters),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        log_delivery_parameters: ccOrganizationTelemetryRuleLogDeliveryParametersPropertyToTerraform(struct!.logDeliveryParameters),
        retention_in_days: cdktn.numberToTerraform(struct!.retentionInDays),
        vpc_flow_log_parameters: ccOrganizationTelemetryRuleVPCFlowLogParametersPropertyToTerraform(struct!.vpcFlowLogParameters),
        waf_logging_parameters: ccOrganizationTelemetryRuleWAFLoggingParametersPropertyToTerraform(struct!.wafLoggingParameters),
    }
}


export function ccOrganizationTelemetryRuleTelemetryDestinationConfigurationPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.TelemetryDestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudtrail_parameters: {
            value: ccOrganizationTelemetryRuleCloudtrailParametersPropertyToHclTerraform(struct!.cloudtrailParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudtrailParametersProperty",
        },
        destination_pattern: {
            value: cdktn.stringToHclTerraform(struct!.destinationPattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_type: {
            value: cdktn.stringToHclTerraform(struct!.destinationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        elb_load_balancer_logging_parameters: {
            value: ccOrganizationTelemetryRuleELBLoadBalancerLoggingParametersPropertyToHclTerraform(struct!.elbLoadBalancerLoggingParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "ELBLoadBalancerLoggingParametersProperty",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_delivery_parameters: {
            value: ccOrganizationTelemetryRuleLogDeliveryParametersPropertyToHclTerraform(struct!.logDeliveryParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "LogDeliveryParametersProperty",
        },
        retention_in_days: {
            value: cdktn.numberToHclTerraform(struct!.retentionInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        vpc_flow_log_parameters: {
            value: ccOrganizationTelemetryRuleVPCFlowLogParametersPropertyToHclTerraform(struct!.vpcFlowLogParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "VPCFlowLogParametersProperty",
        },
        waf_logging_parameters: {
            value: ccOrganizationTelemetryRuleWAFLoggingParametersPropertyToHclTerraform(struct!.wafLoggingParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "WAFLoggingParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleTelemetryRulePropertyToTerraform(struct?: CcOrganizationTelemetryRule.TelemetryRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        all_regions: cdktn.booleanToTerraform(struct!.allRegions),
        allow_field_updates: cdktn.booleanToTerraform(struct!.allowFieldUpdates),
        destination_configuration: ccOrganizationTelemetryRuleTelemetryDestinationConfigurationPropertyToTerraform(struct!.destinationConfiguration),
        regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        scope: cdktn.stringToTerraform(struct!.scope),
        selection_criteria: cdktn.stringToTerraform(struct!.selectionCriteria),
        telemetry_source_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.telemetrySourceTypes),
        telemetry_type: cdktn.stringToTerraform(struct!.telemetryType),
    }
}


export function ccOrganizationTelemetryRuleTelemetryRulePropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.TelemetryRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        all_regions: {
            value: cdktn.booleanToHclTerraform(struct!.allRegions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_field_updates: {
            value: cdktn.booleanToHclTerraform(struct!.allowFieldUpdates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        destination_configuration: {
            value: ccOrganizationTelemetryRuleTelemetryDestinationConfigurationPropertyToHclTerraform(struct!.destinationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "TelemetryDestinationConfigurationProperty",
        },
        regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope: {
            value: cdktn.stringToHclTerraform(struct!.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        selection_criteria: {
            value: cdktn.stringToHclTerraform(struct!.selectionCriteria),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        telemetry_source_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.telemetrySourceTypes),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        telemetry_type: {
            value: cdktn.stringToHclTerraform(struct!.telemetryType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationTelemetryRuleTagPropertyToTerraform(struct?: CcOrganizationTelemetryRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccOrganizationTelemetryRuleTagPropertyToHclTerraform(struct?: CcOrganizationTelemetryRule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcOrganizationTelemetryRule {
export interface RegionStatusesProperty {
}
export class RegionStatusesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): RegionStatusesProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegionStatusesProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // region - computed: true, optional: false, required: false
    public get region() {
        return this.getStringAttribute('region');
    }

    // rule_arn - computed: true, optional: false, required: false
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }
}

export class RegionStatusesPropertyList extends cdktn.ComplexList {

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
    public get(index: number): RegionStatusesPropertyOutputReference {
        return new RegionStatusesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AdvancedFieldSelectorProperty {
    /**
    * An operator that includes events that match the last few characters of the event record field specified as the value of Field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#ends_with CcOrganizationTelemetryRule#ends_with}
    */
    readonly endsWith?: string[];
    /**
    * An operator that includes events that match the exact value of the event record field specified as the value of Field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#equals CcOrganizationTelemetryRule#equals}
    */
    readonly equalTo?: string[];
    /**
    * A field in a CloudTrail event record on which to filter events to be logged
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#field CcOrganizationTelemetryRule#field}
    */
    readonly field?: string;
    /**
    * An operator that excludes events that match the last few characters of the event record field specified as the value of Field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#not_ends_with CcOrganizationTelemetryRule#not_ends_with}
    */
    readonly notEndsWith?: string[];
    /**
    * An operator that excludes events that match the exact value of the event record field specified as the value of Field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#not_equals CcOrganizationTelemetryRule#not_equals}
    */
    readonly notEquals?: string[];
    /**
    * An operator that excludes events that match the first few characters of the event record field specified as the value of Field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#not_starts_with CcOrganizationTelemetryRule#not_starts_with}
    */
    readonly notStartsWith?: string[];
    /**
    * An operator that includes events that match the first few characters of the event record field specified as the value of Field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#starts_with CcOrganizationTelemetryRule#starts_with}
    */
    readonly startsWith?: string[];
}
export class AdvancedFieldSelectorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AdvancedFieldSelectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endsWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.endsWith = this._endsWith;
        }
        if (this._equals !== undefined) {
            hasAnyValues = true;
            internalValueResult.equalTo = this._equals;
        }
        if (this._field !== undefined) {
            hasAnyValues = true;
            internalValueResult.field = this._field;
        }
        if (this._notEndsWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.notEndsWith = this._notEndsWith;
        }
        if (this._notEquals !== undefined) {
            hasAnyValues = true;
            internalValueResult.notEquals = this._notEquals;
        }
        if (this._notStartsWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.notStartsWith = this._notStartsWith;
        }
        if (this._startsWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.startsWith = this._startsWith;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdvancedFieldSelectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endsWith = undefined;
            this._equals = undefined;
            this._field = undefined;
            this._notEndsWith = undefined;
            this._notEquals = undefined;
            this._notStartsWith = undefined;
            this._startsWith = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endsWith = value.endsWith;
            this._equals = value.equalTo;
            this._field = value.field;
            this._notEndsWith = value.notEndsWith;
            this._notEquals = value.notEquals;
            this._notStartsWith = value.notStartsWith;
            this._startsWith = value.startsWith;
        }
    }

    // ends_with - computed: true, optional: true, required: false
    private _endsWith?: string[]; 
    public get endsWith() {
        return cdktn.Fn.tolist(this.getListAttribute('ends_with'));
    }
    public set endsWith(value: string[]) {
        this._endsWith = value;
    }
    public resetEndsWith() {
        this._endsWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endsWithInput() {
        return this._endsWith;
    }

    // equals - computed: true, optional: true, required: false
    private _equals?: string[]; 
    public get equalTo() {
        return cdktn.Fn.tolist(this.getListAttribute('equals'));
    }
    public set equalTo(value: string[]) {
        this._equals = value;
    }
    public resetEqualTo() {
        this._equals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get equalToInput() {
        return this._equals;
    }

    // field - computed: true, optional: true, required: false
    private _field?: string; 
    public get field() {
        return this.getStringAttribute('field');
    }
    public set field(value: string) {
        this._field = value;
    }
    public resetField() {
        this._field = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldInput() {
        return this._field;
    }

    // not_ends_with - computed: true, optional: true, required: false
    private _notEndsWith?: string[]; 
    public get notEndsWith() {
        return cdktn.Fn.tolist(this.getListAttribute('not_ends_with'));
    }
    public set notEndsWith(value: string[]) {
        this._notEndsWith = value;
    }
    public resetNotEndsWith() {
        this._notEndsWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notEndsWithInput() {
        return this._notEndsWith;
    }

    // not_equals - computed: true, optional: true, required: false
    private _notEquals?: string[]; 
    public get notEquals() {
        return cdktn.Fn.tolist(this.getListAttribute('not_equals'));
    }
    public set notEquals(value: string[]) {
        this._notEquals = value;
    }
    public resetNotEquals() {
        this._notEquals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notEqualsInput() {
        return this._notEquals;
    }

    // not_starts_with - computed: true, optional: true, required: false
    private _notStartsWith?: string[]; 
    public get notStartsWith() {
        return cdktn.Fn.tolist(this.getListAttribute('not_starts_with'));
    }
    public set notStartsWith(value: string[]) {
        this._notStartsWith = value;
    }
    public resetNotStartsWith() {
        this._notStartsWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notStartsWithInput() {
        return this._notStartsWith;
    }

    // starts_with - computed: true, optional: true, required: false
    private _startsWith?: string[]; 
    public get startsWith() {
        return cdktn.Fn.tolist(this.getListAttribute('starts_with'));
    }
    public set startsWith(value: string[]) {
        this._startsWith = value;
    }
    public resetStartsWith() {
        this._startsWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startsWithInput() {
        return this._startsWith;
    }
}

export class AdvancedFieldSelectorPropertyList extends cdktn.ComplexList {
    public internalValue? : AdvancedFieldSelectorProperty[] | cdktn.IResolvable

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
    public get(index: number): AdvancedFieldSelectorPropertyOutputReference {
        return new AdvancedFieldSelectorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AdvancedEventSelectorProperty {
    /**
    * Contains all selector statements in an advanced event selector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#field_selectors CcOrganizationTelemetryRule#field_selectors}
    */
    readonly fieldSelectors?: AdvancedFieldSelectorProperty[] | cdktn.IResolvable;
    /**
    * An optional descriptive name for the advanced event selector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#name CcOrganizationTelemetryRule#name}
    */
    readonly name?: string;
}
export class AdvancedEventSelectorPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AdvancedEventSelectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldSelectors?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldSelectors = this._fieldSelectors?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdvancedEventSelectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldSelectors.internalValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldSelectors.internalValue = value.fieldSelectors;
            this._name = value.name;
        }
    }

    // field_selectors - computed: true, optional: true, required: false
    private _fieldSelectors = new AdvancedFieldSelectorPropertyList(this, "field_selectors", true);
    public get fieldSelectors() {
        return this._fieldSelectors;
    }
    public putFieldSelectors(value: AdvancedFieldSelectorProperty[] | cdktn.IResolvable) {
        this._fieldSelectors.internalValue = value;
    }
    public resetFieldSelectors() {
        this._fieldSelectors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldSelectorsInput() {
        return this._fieldSelectors.internalValue;
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
}

export class AdvancedEventSelectorPropertyList extends cdktn.ComplexList {
    public internalValue? : AdvancedEventSelectorProperty[] | cdktn.IResolvable

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
    public get(index: number): AdvancedEventSelectorPropertyOutputReference {
        return new AdvancedEventSelectorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CloudtrailParametersProperty {
    /**
    * Create fine-grained selectors for AWS CloudTrail management and data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#advanced_event_selectors CcOrganizationTelemetryRule#advanced_event_selectors}
    */
    readonly advancedEventSelectors?: AdvancedEventSelectorProperty[] | cdktn.IResolvable;
}
export class CloudtrailParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudtrailParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._advancedEventSelectors?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.advancedEventSelectors = this._advancedEventSelectors?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudtrailParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._advancedEventSelectors.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._advancedEventSelectors.internalValue = value.advancedEventSelectors;
        }
    }

    // advanced_event_selectors - computed: true, optional: true, required: false
    private _advancedEventSelectors = new AdvancedEventSelectorPropertyList(this, "advanced_event_selectors", true);
    public get advancedEventSelectors() {
        return this._advancedEventSelectors;
    }
    public putAdvancedEventSelectors(value: AdvancedEventSelectorProperty[] | cdktn.IResolvable) {
        this._advancedEventSelectors.internalValue = value;
    }
    public resetAdvancedEventSelectors() {
        this._advancedEventSelectors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedEventSelectorsInput() {
        return this._advancedEventSelectors.internalValue;
    }
}
export interface ELBLoadBalancerLoggingParametersProperty {
    /**
    * A delimiter to delineate log fields
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#field_delimiter CcOrganizationTelemetryRule#field_delimiter}
    */
    readonly fieldDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#output_format CcOrganizationTelemetryRule#output_format}
    */
    readonly outputFormat?: string;
}
export class ELBLoadBalancerLoggingParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ELBLoadBalancerLoggingParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fieldDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.fieldDelimiter = this._fieldDelimiter;
        }
        if (this._outputFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputFormat = this._outputFormat;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ELBLoadBalancerLoggingParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fieldDelimiter = undefined;
            this._outputFormat = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fieldDelimiter = value.fieldDelimiter;
            this._outputFormat = value.outputFormat;
        }
    }

    // field_delimiter - computed: true, optional: true, required: false
    private _fieldDelimiter?: string; 
    public get fieldDelimiter() {
        return this.getStringAttribute('field_delimiter');
    }
    public set fieldDelimiter(value: string) {
        this._fieldDelimiter = value;
    }
    public resetFieldDelimiter() {
        this._fieldDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldDelimiterInput() {
        return this._fieldDelimiter;
    }

    // output_format - computed: true, optional: true, required: false
    private _outputFormat?: string; 
    public get outputFormat() {
        return this.getStringAttribute('output_format');
    }
    public set outputFormat(value: string) {
        this._outputFormat = value;
    }
    public resetOutputFormat() {
        this._outputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputFormatInput() {
        return this._outputFormat;
    }
}
export interface LogDeliveryParametersProperty {
    /**
    * Types of logs to deliver
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#log_types CcOrganizationTelemetryRule#log_types}
    */
    readonly logTypes?: string[];
}
export class LogDeliveryParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogDeliveryParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.logTypes = this._logTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogDeliveryParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logTypes = value.logTypes;
        }
    }

    // log_types - computed: true, optional: true, required: false
    private _logTypes?: string[]; 
    public get logTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('log_types'));
    }
    public set logTypes(value: string[]) {
        this._logTypes = value;
    }
    public resetLogTypes() {
        this._logTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypesInput() {
        return this._logTypes;
    }
}
export interface VPCFlowLogParametersProperty {
    /**
    * The fields to include in the flow log record. If you omit this parameter, the flow log is created using the default format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#log_format CcOrganizationTelemetryRule#log_format}
    */
    readonly logFormat?: string;
    /**
    * The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record. Default is 600s.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#max_aggregation_interval CcOrganizationTelemetryRule#max_aggregation_interval}
    */
    readonly maxAggregationInterval?: number;
    /**
    * The type of traffic captured for the flow log. Default is ALL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#traffic_type CcOrganizationTelemetryRule#traffic_type}
    */
    readonly trafficType?: string;
}
export class VPCFlowLogParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VPCFlowLogParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.logFormat = this._logFormat;
        }
        if (this._maxAggregationInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAggregationInterval = this._maxAggregationInterval;
        }
        if (this._trafficType !== undefined) {
            hasAnyValues = true;
            internalValueResult.trafficType = this._trafficType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VPCFlowLogParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logFormat = undefined;
            this._maxAggregationInterval = undefined;
            this._trafficType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logFormat = value.logFormat;
            this._maxAggregationInterval = value.maxAggregationInterval;
            this._trafficType = value.trafficType;
        }
    }

    // log_format - computed: true, optional: true, required: false
    private _logFormat?: string; 
    public get logFormat() {
        return this.getStringAttribute('log_format');
    }
    public set logFormat(value: string) {
        this._logFormat = value;
    }
    public resetLogFormat() {
        this._logFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logFormatInput() {
        return this._logFormat;
    }

    // max_aggregation_interval - computed: true, optional: true, required: false
    private _maxAggregationInterval?: number; 
    public get maxAggregationInterval() {
        return this.getNumberAttribute('max_aggregation_interval');
    }
    public set maxAggregationInterval(value: number) {
        this._maxAggregationInterval = value;
    }
    public resetMaxAggregationInterval() {
        this._maxAggregationInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAggregationIntervalInput() {
        return this._maxAggregationInterval;
    }

    // traffic_type - computed: true, optional: true, required: false
    private _trafficType?: string; 
    public get trafficType() {
        return this.getStringAttribute('traffic_type');
    }
    public set trafficType(value: string) {
        this._trafficType = value;
    }
    public resetTrafficType() {
        this._trafficType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficTypeInput() {
        return this._trafficType;
    }
}
export interface ActionConditionProperty {
    /**
    * The enumerated action to take.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#action CcOrganizationTelemetryRule#action}
    */
    readonly action?: string;
}
export class ActionConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }
}
export interface LabelNameConditionProperty {
    /**
    * The label name of the condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#label_name CcOrganizationTelemetryRule#label_name}
    */
    readonly labelName?: string;
}
export class LabelNameConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LabelNameConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._labelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.labelName = this._labelName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LabelNameConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._labelName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._labelName = value.labelName;
        }
    }

    // label_name - computed: true, optional: true, required: false
    private _labelName?: string; 
    public get labelName() {
        return this.getStringAttribute('label_name');
    }
    public set labelName(value: string) {
        this._labelName = value;
    }
    public resetLabelName() {
        this._labelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelNameInput() {
        return this._labelName;
    }
}
export interface ConditionProperty {
    /**
    * The condition of the action desired in the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#action_condition CcOrganizationTelemetryRule#action_condition}
    */
    readonly actionCondition?: ActionConditionProperty;
    /**
    * The label name of the condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#label_name_condition CcOrganizationTelemetryRule#label_name_condition}
    */
    readonly labelNameCondition?: LabelNameConditionProperty;
}
export class ConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionCondition = this._actionCondition?.internalValue;
        }
        if (this._labelNameCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.labelNameCondition = this._labelNameCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionCondition.internalValue = undefined;
            this._labelNameCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionCondition.internalValue = value.actionCondition;
            this._labelNameCondition.internalValue = value.labelNameCondition;
        }
    }

    // action_condition - computed: true, optional: true, required: false
    private _actionCondition = new ActionConditionPropertyOutputReference(this, "action_condition");
    public get actionCondition() {
        return this._actionCondition;
    }
    public putActionCondition(value: ActionConditionProperty) {
        this._actionCondition.internalValue = value;
    }
    public resetActionCondition() {
        this._actionCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionConditionInput() {
        return this._actionCondition.internalValue;
    }

    // label_name_condition - computed: true, optional: true, required: false
    private _labelNameCondition = new LabelNameConditionPropertyOutputReference(this, "label_name_condition");
    public get labelNameCondition() {
        return this._labelNameCondition;
    }
    public putLabelNameCondition(value: LabelNameConditionProperty) {
        this._labelNameCondition.internalValue = value;
    }
    public resetLabelNameCondition() {
        this._labelNameCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelNameConditionInput() {
        return this._labelNameCondition.internalValue;
    }
}

export class ConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : ConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): ConditionPropertyOutputReference {
        return new ConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterProperty {
    /**
    * The behavior required of the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#behavior CcOrganizationTelemetryRule#behavior}
    */
    readonly behavior?: string;
    /**
    * A list of conditions for a filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#conditions CcOrganizationTelemetryRule#conditions}
    */
    readonly conditions?: ConditionProperty[] | cdktn.IResolvable;
    /**
    * The requirement portion of the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#requirement CcOrganizationTelemetryRule#requirement}
    */
    readonly requirement?: string;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._behavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.behavior = this._behavior;
        }
        if (this._conditions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditions = this._conditions?.internalValue;
        }
        if (this._requirement !== undefined) {
            hasAnyValues = true;
            internalValueResult.requirement = this._requirement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._behavior = undefined;
            this._conditions.internalValue = undefined;
            this._requirement = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._behavior = value.behavior;
            this._conditions.internalValue = value.conditions;
            this._requirement = value.requirement;
        }
    }

    // behavior - computed: true, optional: true, required: false
    private _behavior?: string; 
    public get behavior() {
        return this.getStringAttribute('behavior');
    }
    public set behavior(value: string) {
        this._behavior = value;
    }
    public resetBehavior() {
        this._behavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get behaviorInput() {
        return this._behavior;
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new ConditionPropertyList(this, "conditions", true);
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: ConditionProperty[] | cdktn.IResolvable) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // requirement - computed: true, optional: true, required: false
    private _requirement?: string; 
    public get requirement() {
        return this.getStringAttribute('requirement');
    }
    public set requirement(value: string) {
        this._requirement = value;
    }
    public resetRequirement() {
        this._requirement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requirementInput() {
        return this._requirement;
    }
}

export class FilterPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterPropertyOutputReference {
        return new FilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LoggingFilterProperty {
    /**
    * The behavior required of the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#default_behavior CcOrganizationTelemetryRule#default_behavior}
    */
    readonly defaultBehavior?: string;
    /**
    * A list of filters to be applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#filters CcOrganizationTelemetryRule#filters}
    */
    readonly filters?: FilterProperty[] | cdktn.IResolvable;
}
export class LoggingFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultBehavior = this._defaultBehavior;
        }
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultBehavior = undefined;
            this._filters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultBehavior = value.defaultBehavior;
            this._filters.internalValue = value.filters;
        }
    }

    // default_behavior - computed: true, optional: true, required: false
    private _defaultBehavior?: string; 
    public get defaultBehavior() {
        return this.getStringAttribute('default_behavior');
    }
    public set defaultBehavior(value: string) {
        this._defaultBehavior = value;
    }
    public resetDefaultBehavior() {
        this._defaultBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultBehaviorInput() {
        return this._defaultBehavior;
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new FilterPropertyList(this, "filters", true);
    public get filters() {
        return this._filters;
    }
    public putFilters(value: FilterProperty[] | cdktn.IResolvable) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }
}
export interface SingleHeaderProperty {
    /**
    * The name of the header
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#name CcOrganizationTelemetryRule#name}
    */
    readonly name?: string;
}
export class SingleHeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SingleHeaderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SingleHeaderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
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
}
export interface FieldToMatchProperty {
    /**
    * The method with which to match this rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#method CcOrganizationTelemetryRule#method}
    */
    readonly method?: string;
    /**
    * The query string to find the resource to match this field to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#query_string CcOrganizationTelemetryRule#query_string}
    */
    readonly queryString?: string;
    /**
    * Header for the field to match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#single_header CcOrganizationTelemetryRule#single_header}
    */
    readonly singleHeader?: SingleHeaderProperty;
    /**
    * This is the URI path to match this rule to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#uri_path CcOrganizationTelemetryRule#uri_path}
    */
    readonly uriPath?: string;
}
export class FieldToMatchPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FieldToMatchProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._method !== undefined) {
            hasAnyValues = true;
            internalValueResult.method = this._method;
        }
        if (this._queryString !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString;
        }
        if (this._singleHeader?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._uriPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FieldToMatchProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._method = undefined;
            this._queryString = undefined;
            this._singleHeader.internalValue = undefined;
            this._uriPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._method = value.method;
            this._queryString = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._uriPath = value.uriPath;
        }
    }

    // method - computed: true, optional: true, required: false
    private _method?: string; 
    public get method() {
        return this.getStringAttribute('method');
    }
    public set method(value: string) {
        this._method = value;
    }
    public resetMethod() {
        this._method = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get methodInput() {
        return this._method;
    }

    // query_string - computed: true, optional: true, required: false
    private _queryString?: string; 
    public get queryString() {
        return this.getStringAttribute('query_string');
    }
    public set queryString(value: string) {
        this._queryString = value;
    }
    public resetQueryString() {
        this._queryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
        return this._queryString;
    }

    // single_header - computed: true, optional: true, required: false
    private _singleHeader = new SingleHeaderPropertyOutputReference(this, "single_header");
    public get singleHeader() {
        return this._singleHeader;
    }
    public putSingleHeader(value: SingleHeaderProperty) {
        this._singleHeader.internalValue = value;
    }
    public resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }

    // uri_path - computed: true, optional: true, required: false
    private _uriPath?: string; 
    public get uriPath() {
        return this.getStringAttribute('uri_path');
    }
    public set uriPath(value: string) {
        this._uriPath = value;
    }
    public resetUriPath() {
        this._uriPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriPathInput() {
        return this._uriPath;
    }
}

export class FieldToMatchPropertyList extends cdktn.ComplexList {
    public internalValue? : FieldToMatchProperty[] | cdktn.IResolvable

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
    public get(index: number): FieldToMatchPropertyOutputReference {
        return new FieldToMatchPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WAFLoggingParametersProperty {
    /**
    * The type of logs to generate for WAF.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#log_type CcOrganizationTelemetryRule#log_type}
    */
    readonly logType?: string;
    /**
    * Default handling for logs that don't match any of the specified filtering conditions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#logging_filter CcOrganizationTelemetryRule#logging_filter}
    */
    readonly loggingFilter?: LoggingFilterProperty;
    /**
    * Fields not to be included in the logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#redacted_fields CcOrganizationTelemetryRule#redacted_fields}
    */
    readonly redactedFields?: FieldToMatchProperty[] | cdktn.IResolvable;
}
export class WAFLoggingParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WAFLoggingParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logType !== undefined) {
            hasAnyValues = true;
            internalValueResult.logType = this._logType;
        }
        if (this._loggingFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loggingFilter = this._loggingFilter?.internalValue;
        }
        if (this._redactedFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redactedFields = this._redactedFields?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WAFLoggingParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logType = undefined;
            this._loggingFilter.internalValue = undefined;
            this._redactedFields.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logType = value.logType;
            this._loggingFilter.internalValue = value.loggingFilter;
            this._redactedFields.internalValue = value.redactedFields;
        }
    }

    // log_type - computed: true, optional: true, required: false
    private _logType?: string; 
    public get logType() {
        return this.getStringAttribute('log_type');
    }
    public set logType(value: string) {
        this._logType = value;
    }
    public resetLogType() {
        this._logType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypeInput() {
        return this._logType;
    }

    // logging_filter - computed: true, optional: true, required: false
    private _loggingFilter = new LoggingFilterPropertyOutputReference(this, "logging_filter");
    public get loggingFilter() {
        return this._loggingFilter;
    }
    public putLoggingFilter(value: LoggingFilterProperty) {
        this._loggingFilter.internalValue = value;
    }
    public resetLoggingFilter() {
        this._loggingFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingFilterInput() {
        return this._loggingFilter.internalValue;
    }

    // redacted_fields - computed: true, optional: true, required: false
    private _redactedFields = new FieldToMatchPropertyList(this, "redacted_fields", true);
    public get redactedFields() {
        return this._redactedFields;
    }
    public putRedactedFields(value: FieldToMatchProperty[] | cdktn.IResolvable) {
        this._redactedFields.internalValue = value;
    }
    public resetRedactedFields() {
        this._redactedFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redactedFieldsInput() {
        return this._redactedFields.internalValue;
    }
}
export interface TelemetryDestinationConfigurationProperty {
    /**
    * Telemetry parameters for Cloudtrail
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#cloudtrail_parameters CcOrganizationTelemetryRule#cloudtrail_parameters}
    */
    readonly cloudtrailParameters?: CloudtrailParametersProperty;
    /**
    * Pattern for telemetry data destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#destination_pattern CcOrganizationTelemetryRule#destination_pattern}
    */
    readonly destinationPattern?: string;
    /**
    * Type of telemetry destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#destination_type CcOrganizationTelemetryRule#destination_type}
    */
    readonly destinationType?: string;
    /**
    * Telemetry parameters for ELB/NLB Load Balancer Logs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#elb_load_balancer_logging_parameters CcOrganizationTelemetryRule#elb_load_balancer_logging_parameters}
    */
    readonly elbLoadBalancerLoggingParameters?: ELBLoadBalancerLoggingParametersProperty;
    /**
    * The Amazon Resource Name (ARN) of the customer-managed AWS KMS key used to encrypt the destination log groups specified in the Telemetry Rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#kms_key_arn CcOrganizationTelemetryRule#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Parameters for log delivery configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#log_delivery_parameters CcOrganizationTelemetryRule#log_delivery_parameters}
    */
    readonly logDeliveryParameters?: LogDeliveryParametersProperty;
    /**
    * Number of days to retain the telemetry data in the specified destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#retention_in_days CcOrganizationTelemetryRule#retention_in_days}
    */
    readonly retentionInDays?: number;
    /**
    * Telemetry parameters for VPC Flow logs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#vpc_flow_log_parameters CcOrganizationTelemetryRule#vpc_flow_log_parameters}
    */
    readonly vpcFlowLogParameters?: VPCFlowLogParametersProperty;
    /**
    * Telemetry parameters for WAF v2 Web ACL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#waf_logging_parameters CcOrganizationTelemetryRule#waf_logging_parameters}
    */
    readonly wafLoggingParameters?: WAFLoggingParametersProperty;
}
export class TelemetryDestinationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TelemetryDestinationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudtrailParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudtrailParameters = this._cloudtrailParameters?.internalValue;
        }
        if (this._destinationPattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPattern = this._destinationPattern;
        }
        if (this._destinationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationType = this._destinationType;
        }
        if (this._elbLoadBalancerLoggingParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.elbLoadBalancerLoggingParameters = this._elbLoadBalancerLoggingParameters?.internalValue;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._logDeliveryParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logDeliveryParameters = this._logDeliveryParameters?.internalValue;
        }
        if (this._retentionInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionInDays = this._retentionInDays;
        }
        if (this._vpcFlowLogParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcFlowLogParameters = this._vpcFlowLogParameters?.internalValue;
        }
        if (this._wafLoggingParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.wafLoggingParameters = this._wafLoggingParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TelemetryDestinationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudtrailParameters.internalValue = undefined;
            this._destinationPattern = undefined;
            this._destinationType = undefined;
            this._elbLoadBalancerLoggingParameters.internalValue = undefined;
            this._kmsKeyArn = undefined;
            this._logDeliveryParameters.internalValue = undefined;
            this._retentionInDays = undefined;
            this._vpcFlowLogParameters.internalValue = undefined;
            this._wafLoggingParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudtrailParameters.internalValue = value.cloudtrailParameters;
            this._destinationPattern = value.destinationPattern;
            this._destinationType = value.destinationType;
            this._elbLoadBalancerLoggingParameters.internalValue = value.elbLoadBalancerLoggingParameters;
            this._kmsKeyArn = value.kmsKeyArn;
            this._logDeliveryParameters.internalValue = value.logDeliveryParameters;
            this._retentionInDays = value.retentionInDays;
            this._vpcFlowLogParameters.internalValue = value.vpcFlowLogParameters;
            this._wafLoggingParameters.internalValue = value.wafLoggingParameters;
        }
    }

    // cloudtrail_parameters - computed: true, optional: true, required: false
    private _cloudtrailParameters = new CloudtrailParametersPropertyOutputReference(this, "cloudtrail_parameters");
    public get cloudtrailParameters() {
        return this._cloudtrailParameters;
    }
    public putCloudtrailParameters(value: CloudtrailParametersProperty) {
        this._cloudtrailParameters.internalValue = value;
    }
    public resetCloudtrailParameters() {
        this._cloudtrailParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudtrailParametersInput() {
        return this._cloudtrailParameters.internalValue;
    }

    // destination_pattern - computed: true, optional: true, required: false
    private _destinationPattern?: string; 
    public get destinationPattern() {
        return this.getStringAttribute('destination_pattern');
    }
    public set destinationPattern(value: string) {
        this._destinationPattern = value;
    }
    public resetDestinationPattern() {
        this._destinationPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPatternInput() {
        return this._destinationPattern;
    }

    // destination_type - computed: true, optional: true, required: false
    private _destinationType?: string; 
    public get destinationType() {
        return this.getStringAttribute('destination_type');
    }
    public set destinationType(value: string) {
        this._destinationType = value;
    }
    public resetDestinationType() {
        this._destinationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationTypeInput() {
        return this._destinationType;
    }

    // elb_load_balancer_logging_parameters - computed: true, optional: true, required: false
    private _elbLoadBalancerLoggingParameters = new ELBLoadBalancerLoggingParametersPropertyOutputReference(this, "elb_load_balancer_logging_parameters");
    public get elbLoadBalancerLoggingParameters() {
        return this._elbLoadBalancerLoggingParameters;
    }
    public putElbLoadBalancerLoggingParameters(value: ELBLoadBalancerLoggingParametersProperty) {
        this._elbLoadBalancerLoggingParameters.internalValue = value;
    }
    public resetElbLoadBalancerLoggingParameters() {
        this._elbLoadBalancerLoggingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elbLoadBalancerLoggingParametersInput() {
        return this._elbLoadBalancerLoggingParameters.internalValue;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // log_delivery_parameters - computed: true, optional: true, required: false
    private _logDeliveryParameters = new LogDeliveryParametersPropertyOutputReference(this, "log_delivery_parameters");
    public get logDeliveryParameters() {
        return this._logDeliveryParameters;
    }
    public putLogDeliveryParameters(value: LogDeliveryParametersProperty) {
        this._logDeliveryParameters.internalValue = value;
    }
    public resetLogDeliveryParameters() {
        this._logDeliveryParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDeliveryParametersInput() {
        return this._logDeliveryParameters.internalValue;
    }

    // retention_in_days - computed: true, optional: true, required: false
    private _retentionInDays?: number; 
    public get retentionInDays() {
        return this.getNumberAttribute('retention_in_days');
    }
    public set retentionInDays(value: number) {
        this._retentionInDays = value;
    }
    public resetRetentionInDays() {
        this._retentionInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionInDaysInput() {
        return this._retentionInDays;
    }

    // vpc_flow_log_parameters - computed: true, optional: true, required: false
    private _vpcFlowLogParameters = new VPCFlowLogParametersPropertyOutputReference(this, "vpc_flow_log_parameters");
    public get vpcFlowLogParameters() {
        return this._vpcFlowLogParameters;
    }
    public putVpcFlowLogParameters(value: VPCFlowLogParametersProperty) {
        this._vpcFlowLogParameters.internalValue = value;
    }
    public resetVpcFlowLogParameters() {
        this._vpcFlowLogParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcFlowLogParametersInput() {
        return this._vpcFlowLogParameters.internalValue;
    }

    // waf_logging_parameters - computed: true, optional: true, required: false
    private _wafLoggingParameters = new WAFLoggingParametersPropertyOutputReference(this, "waf_logging_parameters");
    public get wafLoggingParameters() {
        return this._wafLoggingParameters;
    }
    public putWafLoggingParameters(value: WAFLoggingParametersProperty) {
        this._wafLoggingParameters.internalValue = value;
    }
    public resetWafLoggingParameters() {
        this._wafLoggingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wafLoggingParametersInput() {
        return this._wafLoggingParameters.internalValue;
    }
}
export interface TelemetryRuleProperty {
    /**
    * When true, the rule is replicated to all supported regions
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#all_regions CcOrganizationTelemetryRule#all_regions}
    */
    readonly allRegions?: boolean | cdktn.IResolvable;
    /**
    * When true, configuration drift in managed telemetry resources will be detected and remediated for resource-level fields.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#allow_field_updates CcOrganizationTelemetryRule#allow_field_updates}
    */
    readonly allowFieldUpdates?: boolean | cdktn.IResolvable;
    /**
    * The destination configuration for telemetry data
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#destination_configuration CcOrganizationTelemetryRule#destination_configuration}
    */
    readonly destinationConfiguration?: TelemetryDestinationConfigurationProperty;
    /**
    * List of AWS region codes where the rule should be replicated
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#regions CcOrganizationTelemetryRule#regions}
    */
    readonly regions?: string[];
    /**
    * Resource Type associated with the Organization Telemetry Rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#resource_type CcOrganizationTelemetryRule#resource_type}
    */
    readonly resourceType: string;
    /**
    * Selection Criteria on scope level for rule application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#scope CcOrganizationTelemetryRule#scope}
    */
    readonly scope?: string;
    /**
    * Selection Criteria on resource level for rule application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#selection_criteria CcOrganizationTelemetryRule#selection_criteria}
    */
    readonly selectionCriteria?: string;
    /**
    * The telemetry source types for a telemetry rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#telemetry_source_types CcOrganizationTelemetryRule#telemetry_source_types}
    */
    readonly telemetrySourceTypes?: string[];
    /**
    * Telemetry Type associated with the Organization Telemetry Rule
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#telemetry_type CcOrganizationTelemetryRule#telemetry_type}
    */
    readonly telemetryType: string;
}
export class TelemetryRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TelemetryRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allRegions !== undefined) {
            hasAnyValues = true;
            internalValueResult.allRegions = this._allRegions;
        }
        if (this._allowFieldUpdates !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowFieldUpdates = this._allowFieldUpdates;
        }
        if (this._destinationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationConfiguration = this._destinationConfiguration?.internalValue;
        }
        if (this._regions !== undefined) {
            hasAnyValues = true;
            internalValueResult.regions = this._regions;
        }
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._selectionCriteria !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectionCriteria = this._selectionCriteria;
        }
        if (this._telemetrySourceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.telemetrySourceTypes = this._telemetrySourceTypes;
        }
        if (this._telemetryType !== undefined) {
            hasAnyValues = true;
            internalValueResult.telemetryType = this._telemetryType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TelemetryRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allRegions = undefined;
            this._allowFieldUpdates = undefined;
            this._destinationConfiguration.internalValue = undefined;
            this._regions = undefined;
            this._resourceType = undefined;
            this._scope = undefined;
            this._selectionCriteria = undefined;
            this._telemetrySourceTypes = undefined;
            this._telemetryType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allRegions = value.allRegions;
            this._allowFieldUpdates = value.allowFieldUpdates;
            this._destinationConfiguration.internalValue = value.destinationConfiguration;
            this._regions = value.regions;
            this._resourceType = value.resourceType;
            this._scope = value.scope;
            this._selectionCriteria = value.selectionCriteria;
            this._telemetrySourceTypes = value.telemetrySourceTypes;
            this._telemetryType = value.telemetryType;
        }
    }

    // all_regions - computed: true, optional: true, required: false
    private _allRegions?: boolean | cdktn.IResolvable; 
    public get allRegions() {
        return this.getBooleanAttribute('all_regions');
    }
    public set allRegions(value: boolean | cdktn.IResolvable) {
        this._allRegions = value;
    }
    public resetAllRegions() {
        this._allRegions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allRegionsInput() {
        return this._allRegions;
    }

    // allow_field_updates - computed: true, optional: true, required: false
    private _allowFieldUpdates?: boolean | cdktn.IResolvable; 
    public get allowFieldUpdates() {
        return this.getBooleanAttribute('allow_field_updates');
    }
    public set allowFieldUpdates(value: boolean | cdktn.IResolvable) {
        this._allowFieldUpdates = value;
    }
    public resetAllowFieldUpdates() {
        this._allowFieldUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowFieldUpdatesInput() {
        return this._allowFieldUpdates;
    }

    // destination_configuration - computed: true, optional: true, required: false
    private _destinationConfiguration = new TelemetryDestinationConfigurationPropertyOutputReference(this, "destination_configuration");
    public get destinationConfiguration() {
        return this._destinationConfiguration;
    }
    public putDestinationConfiguration(value: TelemetryDestinationConfigurationProperty) {
        this._destinationConfiguration.internalValue = value;
    }
    public resetDestinationConfiguration() {
        this._destinationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationConfigurationInput() {
        return this._destinationConfiguration.internalValue;
    }

    // regions - computed: true, optional: true, required: false
    private _regions?: string[]; 
    public get regions() {
        return cdktn.Fn.tolist(this.getListAttribute('regions'));
    }
    public set regions(value: string[]) {
        this._regions = value;
    }
    public resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions;
    }

    // resource_type - computed: false, optional: false, required: true
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    public resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
    }

    // selection_criteria - computed: true, optional: true, required: false
    private _selectionCriteria?: string; 
    public get selectionCriteria() {
        return this.getStringAttribute('selection_criteria');
    }
    public set selectionCriteria(value: string) {
        this._selectionCriteria = value;
    }
    public resetSelectionCriteria() {
        this._selectionCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionCriteriaInput() {
        return this._selectionCriteria;
    }

    // telemetry_source_types - computed: true, optional: true, required: false
    private _telemetrySourceTypes?: string[]; 
    public get telemetrySourceTypes() {
        return cdktn.Fn.tolist(this.getListAttribute('telemetry_source_types'));
    }
    public set telemetrySourceTypes(value: string[]) {
        this._telemetrySourceTypes = value;
    }
    public resetTelemetrySourceTypes() {
        this._telemetrySourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get telemetrySourceTypesInput() {
        return this._telemetrySourceTypes;
    }

    // telemetry_type - computed: false, optional: false, required: true
    private _telemetryType?: string; 
    public get telemetryType() {
        return this.getStringAttribute('telemetry_type');
    }
    public set telemetryType(value: string) {
        this._telemetryType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get telemetryTypeInput() {
        return this._telemetryType;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#key CcOrganizationTelemetryRule#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/observabilityadmin_organization_telemetry_rule#value CcOrganizationTelemetryRule#value}
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
