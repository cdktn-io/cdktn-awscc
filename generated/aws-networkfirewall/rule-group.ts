// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRuleGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#capacity CcRuleGroup#capacity}
    */
    readonly capacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#description CcRuleGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#rule_group CcRuleGroup#rule_group}
    */
    readonly ruleGroup?: CcRuleGroup.RuleGroupProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#rule_group_name CcRuleGroup#rule_group_name}
    */
    readonly ruleGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#summary_configuration CcRuleGroup#summary_configuration}
    */
    readonly summaryConfiguration?: CcRuleGroup.SummaryConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#tags CcRuleGroup#tags}
    */
    readonly tags?: CcRuleGroup.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#type CcRuleGroup#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group awscc_networkfirewall_rule_group}
*/
export class CcRuleGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkfirewall_rule_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRuleGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRuleGroup to import
    * @param importFromId The id of the existing CcRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRuleGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkfirewall_rule_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group awscc_networkfirewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRuleGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcRuleGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkfirewall_rule_group',
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
        this._capacity = config.capacity;
        this._description = config.description;
        this._ruleGroup.internalValue = config.ruleGroup;
        this._ruleGroupName = config.ruleGroupName;
        this._summaryConfiguration.internalValue = config.summaryConfiguration;
        this._tags.internalValue = config.tags;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capacity - computed: false, optional: false, required: true
    private _capacity?: number; 
    public get capacity() {
        return this.getNumberAttribute('capacity');
    }
    public set capacity(value: number) {
        this._capacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityInput() {
        return this._capacity;
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

    // rule_group - computed: true, optional: true, required: false
    private _ruleGroup = new CcRuleGroup.RuleGroupPropertyOutputReference(this, "rule_group");
    public get ruleGroup() {
        return this._ruleGroup;
    }
    public putRuleGroup(value: CcRuleGroup.RuleGroupProperty) {
        this._ruleGroup.internalValue = value;
    }
    public resetRuleGroup() {
        this._ruleGroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleGroupInput() {
        return this._ruleGroup.internalValue;
    }

    // rule_group_arn - computed: true, optional: false, required: false
    public get ruleGroupArn() {
        return this.getStringAttribute('rule_group_arn');
    }

    // rule_group_id - computed: true, optional: false, required: false
    public get ruleGroupId() {
        return this.getStringAttribute('rule_group_id');
    }

    // rule_group_name - computed: false, optional: false, required: true
    private _ruleGroupName?: string; 
    public get ruleGroupName() {
        return this.getStringAttribute('rule_group_name');
    }
    public set ruleGroupName(value: string) {
        this._ruleGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleGroupNameInput() {
        return this._ruleGroupName;
    }

    // summary_configuration - computed: true, optional: true, required: false
    private _summaryConfiguration = new CcRuleGroup.SummaryConfigurationPropertyOutputReference(this, "summary_configuration");
    public get summaryConfiguration() {
        return this._summaryConfiguration;
    }
    public putSummaryConfiguration(value: CcRuleGroup.SummaryConfigurationProperty) {
        this._summaryConfiguration.internalValue = value;
    }
    public resetSummaryConfiguration() {
        this._summaryConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get summaryConfigurationInput() {
        return this._summaryConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRuleGroup.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRuleGroup.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capacity: cdktn.numberToTerraform(this._capacity),
            description: cdktn.stringToTerraform(this._description),
            rule_group: ccRuleGroupRuleGroupPropertyToTerraform(this._ruleGroup.internalValue),
            rule_group_name: cdktn.stringToTerraform(this._ruleGroupName),
            summary_configuration: ccRuleGroupSummaryConfigurationPropertyToTerraform(this._summaryConfiguration.internalValue),
            tags: cdktn.listMapper(ccRuleGroupTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capacity: {
                value: cdktn.numberToHclTerraform(this._capacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_group: {
                value: ccRuleGroupRuleGroupPropertyToHclTerraform(this._ruleGroup.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRuleGroup.RuleGroupProperty",
            },
            rule_group_name: {
                value: cdktn.stringToHclTerraform(this._ruleGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            summary_configuration: {
                value: ccRuleGroupSummaryConfigurationPropertyToHclTerraform(this._summaryConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRuleGroup.SummaryConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRuleGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRuleGroup.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRuleGroupIPSetReferencePropertyToTerraform(struct?: CcRuleGroup.IPSetReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        reference_arn: cdktn.stringToTerraform(struct!.referenceArn),
    }
}


export function ccRuleGroupIPSetReferencePropertyToHclTerraform(struct?: CcRuleGroup.IPSetReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        reference_arn: {
            value: cdktn.stringToHclTerraform(struct!.referenceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupReferenceSetsPropertyToTerraform(struct?: CcRuleGroup.ReferenceSetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip_set_references: cdktn.hashMapper(ccRuleGroupIPSetReferencePropertyToTerraform)(struct!.ipSetReferences),
    }
}


export function ccRuleGroupReferenceSetsPropertyToHclTerraform(struct?: CcRuleGroup.ReferenceSetsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip_set_references: {
            value: cdktn.hashMapperHcl(ccRuleGroupIPSetReferencePropertyToHclTerraform)(struct!.ipSetReferences),
            isBlock: true,
            type: "map",
            storageClassType: "IPSetReferencePropertyMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupIPSetPropertyToTerraform(struct?: CcRuleGroup.IPSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.definition),
    }
}


export function ccRuleGroupIPSetPropertyToHclTerraform(struct?: CcRuleGroup.IPSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definition: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.definition),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupPortSetPropertyToTerraform(struct?: CcRuleGroup.PortSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.definition),
    }
}


export function ccRuleGroupPortSetPropertyToHclTerraform(struct?: CcRuleGroup.PortSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        definition: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.definition),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupRuleVariablesPropertyToTerraform(struct?: CcRuleGroup.RuleVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip_sets: cdktn.hashMapper(ccRuleGroupIPSetPropertyToTerraform)(struct!.ipSets),
        port_sets: cdktn.hashMapper(ccRuleGroupPortSetPropertyToTerraform)(struct!.portSets),
    }
}


export function ccRuleGroupRuleVariablesPropertyToHclTerraform(struct?: CcRuleGroup.RuleVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip_sets: {
            value: cdktn.hashMapperHcl(ccRuleGroupIPSetPropertyToHclTerraform)(struct!.ipSets),
            isBlock: true,
            type: "map",
            storageClassType: "IPSetPropertyMap",
        },
        port_sets: {
            value: cdktn.hashMapperHcl(ccRuleGroupPortSetPropertyToHclTerraform)(struct!.portSets),
            isBlock: true,
            type: "map",
            storageClassType: "PortSetPropertyMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupRulesSourceListPropertyToTerraform(struct?: CcRuleGroup.RulesSourceListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        generated_rules_type: cdktn.stringToTerraform(struct!.generatedRulesType),
        target_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetTypes),
        targets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targets),
    }
}


export function ccRuleGroupRulesSourceListPropertyToHclTerraform(struct?: CcRuleGroup.RulesSourceListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        generated_rules_type: {
            value: cdktn.stringToHclTerraform(struct!.generatedRulesType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        targets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupHeaderPropertyToTerraform(struct?: CcRuleGroup.HeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: cdktn.stringToTerraform(struct!.destination),
        destination_port: cdktn.stringToTerraform(struct!.destinationPort),
        direction: cdktn.stringToTerraform(struct!.direction),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        source: cdktn.stringToTerraform(struct!.source),
        source_port: cdktn.stringToTerraform(struct!.sourcePort),
    }
}


export function ccRuleGroupHeaderPropertyToHclTerraform(struct?: CcRuleGroup.HeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: cdktn.stringToHclTerraform(struct!.destination),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_port: {
            value: cdktn.stringToHclTerraform(struct!.destinationPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        direction: {
            value: cdktn.stringToHclTerraform(struct!.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: cdktn.stringToHclTerraform(struct!.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_port: {
            value: cdktn.stringToHclTerraform(struct!.sourcePort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupRuleOptionPropertyToTerraform(struct?: CcRuleGroup.RuleOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        keyword: cdktn.stringToTerraform(struct!.keyword),
        settings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.settings),
    }
}


export function ccRuleGroupRuleOptionPropertyToHclTerraform(struct?: CcRuleGroup.RuleOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        keyword: {
            value: cdktn.stringToHclTerraform(struct!.keyword),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        settings: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.settings),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupStatefulRulePropertyToTerraform(struct?: CcRuleGroup.StatefulRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        header: ccRuleGroupHeaderPropertyToTerraform(struct!.header),
        rule_options: cdktn.listMapper(ccRuleGroupRuleOptionPropertyToTerraform, false)(struct!.ruleOptions),
    }
}


export function ccRuleGroupStatefulRulePropertyToHclTerraform(struct?: CcRuleGroup.StatefulRuleProperty | cdktn.IResolvable): any {
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
        header: {
            value: ccRuleGroupHeaderPropertyToHclTerraform(struct!.header),
            isBlock: true,
            type: "struct",
            storageClassType: "HeaderProperty",
        },
        rule_options: {
            value: cdktn.listMapperHcl(ccRuleGroupRuleOptionPropertyToHclTerraform, false)(struct!.ruleOptions),
            isBlock: true,
            type: "list",
            storageClassType: "RuleOptionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupDimensionPropertyToTerraform(struct?: CcRuleGroup.DimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRuleGroupDimensionPropertyToHclTerraform(struct?: CcRuleGroup.DimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccRuleGroupPublishMetricActionPropertyToTerraform(struct?: CcRuleGroup.PublishMetricActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccRuleGroupDimensionPropertyToTerraform, false)(struct!.dimensions),
    }
}


export function ccRuleGroupPublishMetricActionPropertyToHclTerraform(struct?: CcRuleGroup.PublishMetricActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccRuleGroupDimensionPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "DimensionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupActionDefinitionPropertyToTerraform(struct?: CcRuleGroup.ActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        publish_metric_action: ccRuleGroupPublishMetricActionPropertyToTerraform(struct!.publishMetricAction),
    }
}


export function ccRuleGroupActionDefinitionPropertyToHclTerraform(struct?: CcRuleGroup.ActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        publish_metric_action: {
            value: ccRuleGroupPublishMetricActionPropertyToHclTerraform(struct!.publishMetricAction),
            isBlock: true,
            type: "struct",
            storageClassType: "PublishMetricActionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupCustomActionPropertyToTerraform(struct?: CcRuleGroup.CustomActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_definition: ccRuleGroupActionDefinitionPropertyToTerraform(struct!.actionDefinition),
        action_name: cdktn.stringToTerraform(struct!.actionName),
    }
}


export function ccRuleGroupCustomActionPropertyToHclTerraform(struct?: CcRuleGroup.CustomActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_definition: {
            value: ccRuleGroupActionDefinitionPropertyToHclTerraform(struct!.actionDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "ActionDefinitionProperty",
        },
        action_name: {
            value: cdktn.stringToHclTerraform(struct!.actionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupPortRangePropertyToTerraform(struct?: CcRuleGroup.PortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccRuleGroupPortRangePropertyToHclTerraform(struct?: CcRuleGroup.PortRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupAddressPropertyToTerraform(struct?: CcRuleGroup.AddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address_definition: cdktn.stringToTerraform(struct!.addressDefinition),
    }
}


export function ccRuleGroupAddressPropertyToHclTerraform(struct?: CcRuleGroup.AddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address_definition: {
            value: cdktn.stringToHclTerraform(struct!.addressDefinition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupSourcePortsPropertyToTerraform(struct?: CcRuleGroup.SourcePortsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        from_port: cdktn.numberToTerraform(struct!.fromPort),
        to_port: cdktn.numberToTerraform(struct!.toPort),
    }
}


export function ccRuleGroupSourcePortsPropertyToHclTerraform(struct?: CcRuleGroup.SourcePortsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        from_port: {
            value: cdktn.numberToHclTerraform(struct!.fromPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        to_port: {
            value: cdktn.numberToHclTerraform(struct!.toPort),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupSourcesPropertyToTerraform(struct?: CcRuleGroup.SourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address_definition: cdktn.stringToTerraform(struct!.addressDefinition),
    }
}


export function ccRuleGroupSourcesPropertyToHclTerraform(struct?: CcRuleGroup.SourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address_definition: {
            value: cdktn.stringToHclTerraform(struct!.addressDefinition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupTCPFlagFieldPropertyToTerraform(struct?: CcRuleGroup.TCPFlagFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        flags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.flags),
        masks: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.masks),
    }
}


export function ccRuleGroupTCPFlagFieldPropertyToHclTerraform(struct?: CcRuleGroup.TCPFlagFieldProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        flags: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.flags),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        masks: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.masks),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupMatchAttributesPropertyToTerraform(struct?: CcRuleGroup.MatchAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_ports: cdktn.listMapper(ccRuleGroupPortRangePropertyToTerraform, false)(struct!.destinationPorts),
        destinations: cdktn.listMapper(ccRuleGroupAddressPropertyToTerraform, false)(struct!.destinations),
        protocols: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.protocols),
        source_ports: cdktn.listMapper(ccRuleGroupSourcePortsPropertyToTerraform, false)(struct!.sourcePorts),
        sources: cdktn.listMapper(ccRuleGroupSourcesPropertyToTerraform, false)(struct!.sources),
        tcp_flags: cdktn.listMapper(ccRuleGroupTCPFlagFieldPropertyToTerraform, false)(struct!.tcpFlags),
    }
}


export function ccRuleGroupMatchAttributesPropertyToHclTerraform(struct?: CcRuleGroup.MatchAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_ports: {
            value: cdktn.listMapperHcl(ccRuleGroupPortRangePropertyToHclTerraform, false)(struct!.destinationPorts),
            isBlock: true,
            type: "list",
            storageClassType: "PortRangePropertyList",
        },
        destinations: {
            value: cdktn.listMapperHcl(ccRuleGroupAddressPropertyToHclTerraform, false)(struct!.destinations),
            isBlock: true,
            type: "list",
            storageClassType: "AddressPropertyList",
        },
        protocols: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.protocols),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        source_ports: {
            value: cdktn.listMapperHcl(ccRuleGroupSourcePortsPropertyToHclTerraform, false)(struct!.sourcePorts),
            isBlock: true,
            type: "list",
            storageClassType: "SourcePortsPropertyList",
        },
        sources: {
            value: cdktn.listMapperHcl(ccRuleGroupSourcesPropertyToHclTerraform, false)(struct!.sources),
            isBlock: true,
            type: "list",
            storageClassType: "SourcesPropertyList",
        },
        tcp_flags: {
            value: cdktn.listMapperHcl(ccRuleGroupTCPFlagFieldPropertyToHclTerraform, false)(struct!.tcpFlags),
            isBlock: true,
            type: "list",
            storageClassType: "TCPFlagFieldPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupRuleDefinitionPropertyToTerraform(struct?: CcRuleGroup.RuleDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        match_attributes: ccRuleGroupMatchAttributesPropertyToTerraform(struct!.matchAttributes),
    }
}


export function ccRuleGroupRuleDefinitionPropertyToHclTerraform(struct?: CcRuleGroup.RuleDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        match_attributes: {
            value: ccRuleGroupMatchAttributesPropertyToHclTerraform(struct!.matchAttributes),
            isBlock: true,
            type: "struct",
            storageClassType: "MatchAttributesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupStatelessRulePropertyToTerraform(struct?: CcRuleGroup.StatelessRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        priority: cdktn.numberToTerraform(struct!.priority),
        rule_definition: ccRuleGroupRuleDefinitionPropertyToTerraform(struct!.ruleDefinition),
    }
}


export function ccRuleGroupStatelessRulePropertyToHclTerraform(struct?: CcRuleGroup.StatelessRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rule_definition: {
            value: ccRuleGroupRuleDefinitionPropertyToHclTerraform(struct!.ruleDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleDefinitionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupStatelessRulesAndCustomActionsPropertyToTerraform(struct?: CcRuleGroup.StatelessRulesAndCustomActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_actions: cdktn.listMapper(ccRuleGroupCustomActionPropertyToTerraform, false)(struct!.customActions),
        stateless_rules: cdktn.listMapper(ccRuleGroupStatelessRulePropertyToTerraform, false)(struct!.statelessRules),
    }
}


export function ccRuleGroupStatelessRulesAndCustomActionsPropertyToHclTerraform(struct?: CcRuleGroup.StatelessRulesAndCustomActionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_actions: {
            value: cdktn.listMapperHcl(ccRuleGroupCustomActionPropertyToHclTerraform, false)(struct!.customActions),
            isBlock: true,
            type: "list",
            storageClassType: "CustomActionPropertyList",
        },
        stateless_rules: {
            value: cdktn.listMapperHcl(ccRuleGroupStatelessRulePropertyToHclTerraform, false)(struct!.statelessRules),
            isBlock: true,
            type: "list",
            storageClassType: "StatelessRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupRulesSourcePropertyToTerraform(struct?: CcRuleGroup.RulesSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rules_source_list: ccRuleGroupRulesSourceListPropertyToTerraform(struct!.rulesSourceList),
        rules_string: cdktn.stringToTerraform(struct!.rulesString),
        stateful_rules: cdktn.listMapper(ccRuleGroupStatefulRulePropertyToTerraform, false)(struct!.statefulRules),
        stateless_rules_and_custom_actions: ccRuleGroupStatelessRulesAndCustomActionsPropertyToTerraform(struct!.statelessRulesAndCustomActions),
    }
}


export function ccRuleGroupRulesSourcePropertyToHclTerraform(struct?: CcRuleGroup.RulesSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rules_source_list: {
            value: ccRuleGroupRulesSourceListPropertyToHclTerraform(struct!.rulesSourceList),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesSourceListProperty",
        },
        rules_string: {
            value: cdktn.stringToHclTerraform(struct!.rulesString),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stateful_rules: {
            value: cdktn.listMapperHcl(ccRuleGroupStatefulRulePropertyToHclTerraform, false)(struct!.statefulRules),
            isBlock: true,
            type: "list",
            storageClassType: "StatefulRulePropertyList",
        },
        stateless_rules_and_custom_actions: {
            value: ccRuleGroupStatelessRulesAndCustomActionsPropertyToHclTerraform(struct!.statelessRulesAndCustomActions),
            isBlock: true,
            type: "struct",
            storageClassType: "StatelessRulesAndCustomActionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupStatefulRuleOptionsPropertyToTerraform(struct?: CcRuleGroup.StatefulRuleOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rule_order: cdktn.stringToTerraform(struct!.ruleOrder),
    }
}


export function ccRuleGroupStatefulRuleOptionsPropertyToHclTerraform(struct?: CcRuleGroup.StatefulRuleOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rule_order: {
            value: cdktn.stringToHclTerraform(struct!.ruleOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupRuleGroupPropertyToTerraform(struct?: CcRuleGroup.RuleGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        reference_sets: ccRuleGroupReferenceSetsPropertyToTerraform(struct!.referenceSets),
        rule_variables: ccRuleGroupRuleVariablesPropertyToTerraform(struct!.ruleVariables),
        rules_source: ccRuleGroupRulesSourcePropertyToTerraform(struct!.rulesSource),
        stateful_rule_options: ccRuleGroupStatefulRuleOptionsPropertyToTerraform(struct!.statefulRuleOptions),
    }
}


export function ccRuleGroupRuleGroupPropertyToHclTerraform(struct?: CcRuleGroup.RuleGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        reference_sets: {
            value: ccRuleGroupReferenceSetsPropertyToHclTerraform(struct!.referenceSets),
            isBlock: true,
            type: "struct",
            storageClassType: "ReferenceSetsProperty",
        },
        rule_variables: {
            value: ccRuleGroupRuleVariablesPropertyToHclTerraform(struct!.ruleVariables),
            isBlock: true,
            type: "struct",
            storageClassType: "RuleVariablesProperty",
        },
        rules_source: {
            value: ccRuleGroupRulesSourcePropertyToHclTerraform(struct!.rulesSource),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesSourceProperty",
        },
        stateful_rule_options: {
            value: ccRuleGroupStatefulRuleOptionsPropertyToHclTerraform(struct!.statefulRuleOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "StatefulRuleOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupSummaryConfigurationPropertyToTerraform(struct?: CcRuleGroup.SummaryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rule_options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ruleOptions),
    }
}


export function ccRuleGroupSummaryConfigurationPropertyToHclTerraform(struct?: CcRuleGroup.SummaryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rule_options: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ruleOptions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRuleGroupTagPropertyToTerraform(struct?: CcRuleGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRuleGroupTagPropertyToHclTerraform(struct?: CcRuleGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRuleGroup {
export interface IPSetReferenceProperty {
    /**
    * A resource ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#reference_arn CcRuleGroup#reference_arn}
    */
    readonly referenceArn?: string;
}
export class IPSetReferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): IPSetReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._referenceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.referenceArn = this._referenceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IPSetReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._referenceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._referenceArn = value.referenceArn;
        }
    }

    // reference_arn - computed: true, optional: true, required: false
    private _referenceArn?: string; 
    public get referenceArn() {
        return this.getStringAttribute('reference_arn');
    }
    public set referenceArn(value: string) {
        this._referenceArn = value;
    }
    public resetReferenceArn() {
        this._referenceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceArnInput() {
        return this._referenceArn;
    }
}

export class IPSetReferencePropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: IPSetReferenceProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): IPSetReferencePropertyOutputReference {
        return new IPSetReferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface ReferenceSetsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#ip_set_references CcRuleGroup#ip_set_references}
    */
    readonly ipSetReferences?: { [key: string]: IPSetReferenceProperty } | cdktn.IResolvable;
}
export class ReferenceSetsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReferenceSetsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipSetReferences?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipSetReferences = this._ipSetReferences?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReferenceSetsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipSetReferences.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipSetReferences.internalValue = value.ipSetReferences;
        }
    }

    // ip_set_references - computed: true, optional: true, required: false
    private _ipSetReferences = new IPSetReferencePropertyMap(this, "ip_set_references");
    public get ipSetReferences() {
        return this._ipSetReferences;
    }
    public putIpSetReferences(value: { [key: string]: IPSetReferenceProperty } | cdktn.IResolvable) {
        this._ipSetReferences.internalValue = value;
    }
    public resetIpSetReferences() {
        this._ipSetReferences.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipSetReferencesInput() {
        return this._ipSetReferences.internalValue;
    }
}
export interface IPSetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#definition CcRuleGroup#definition}
    */
    readonly definition?: string[];
}
export class IPSetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): IPSetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IPSetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
        }
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string[]; 
    public get definition() {
        return this.getListAttribute('definition');
    }
    public set definition(value: string[]) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }
}

export class IPSetPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: IPSetProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): IPSetPropertyOutputReference {
        return new IPSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface PortSetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#definition CcRuleGroup#definition}
    */
    readonly definition?: string[];
}
export class PortSetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): PortSetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._definition !== undefined) {
            hasAnyValues = true;
            internalValueResult.definition = this._definition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortSetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._definition = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._definition = value.definition;
        }
    }

    // definition - computed: true, optional: true, required: false
    private _definition?: string[]; 
    public get definition() {
        return this.getListAttribute('definition');
    }
    public set definition(value: string[]) {
        this._definition = value;
    }
    public resetDefinition() {
        this._definition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition;
    }
}

export class PortSetPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: PortSetProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): PortSetPropertyOutputReference {
        return new PortSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface RuleVariablesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#ip_sets CcRuleGroup#ip_sets}
    */
    readonly ipSets?: { [key: string]: IPSetProperty } | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#port_sets CcRuleGroup#port_sets}
    */
    readonly portSets?: { [key: string]: PortSetProperty } | cdktn.IResolvable;
}
export class RuleVariablesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleVariablesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipSets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipSets = this._ipSets?.internalValue;
        }
        if (this._portSets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.portSets = this._portSets?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleVariablesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipSets.internalValue = undefined;
            this._portSets.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipSets.internalValue = value.ipSets;
            this._portSets.internalValue = value.portSets;
        }
    }

    // ip_sets - computed: true, optional: true, required: false
    private _ipSets = new IPSetPropertyMap(this, "ip_sets");
    public get ipSets() {
        return this._ipSets;
    }
    public putIpSets(value: { [key: string]: IPSetProperty } | cdktn.IResolvable) {
        this._ipSets.internalValue = value;
    }
    public resetIpSets() {
        this._ipSets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipSetsInput() {
        return this._ipSets.internalValue;
    }

    // port_sets - computed: true, optional: true, required: false
    private _portSets = new PortSetPropertyMap(this, "port_sets");
    public get portSets() {
        return this._portSets;
    }
    public putPortSets(value: { [key: string]: PortSetProperty } | cdktn.IResolvable) {
        this._portSets.internalValue = value;
    }
    public resetPortSets() {
        this._portSets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portSetsInput() {
        return this._portSets.internalValue;
    }
}
export interface RulesSourceListProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#generated_rules_type CcRuleGroup#generated_rules_type}
    */
    readonly generatedRulesType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#target_types CcRuleGroup#target_types}
    */
    readonly targetTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#targets CcRuleGroup#targets}
    */
    readonly targets?: string[];
}
export class RulesSourceListPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesSourceListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._generatedRulesType !== undefined) {
            hasAnyValues = true;
            internalValueResult.generatedRulesType = this._generatedRulesType;
        }
        if (this._targetTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTypes = this._targetTypes;
        }
        if (this._targets !== undefined) {
            hasAnyValues = true;
            internalValueResult.targets = this._targets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesSourceListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._generatedRulesType = undefined;
            this._targetTypes = undefined;
            this._targets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._generatedRulesType = value.generatedRulesType;
            this._targetTypes = value.targetTypes;
            this._targets = value.targets;
        }
    }

    // generated_rules_type - computed: true, optional: true, required: false
    private _generatedRulesType?: string; 
    public get generatedRulesType() {
        return this.getStringAttribute('generated_rules_type');
    }
    public set generatedRulesType(value: string) {
        this._generatedRulesType = value;
    }
    public resetGeneratedRulesType() {
        this._generatedRulesType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generatedRulesTypeInput() {
        return this._generatedRulesType;
    }

    // target_types - computed: true, optional: true, required: false
    private _targetTypes?: string[]; 
    public get targetTypes() {
        return this.getListAttribute('target_types');
    }
    public set targetTypes(value: string[]) {
        this._targetTypes = value;
    }
    public resetTargetTypes() {
        this._targetTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypesInput() {
        return this._targetTypes;
    }

    // targets - computed: true, optional: true, required: false
    private _targets?: string[]; 
    public get targets() {
        return this.getListAttribute('targets');
    }
    public set targets(value: string[]) {
        this._targets = value;
    }
    public resetTargets() {
        this._targets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets;
    }
}
export interface HeaderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#destination CcRuleGroup#destination}
    */
    readonly destination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#destination_port CcRuleGroup#destination_port}
    */
    readonly destinationPort?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#direction CcRuleGroup#direction}
    */
    readonly direction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#protocol CcRuleGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#source CcRuleGroup#source}
    */
    readonly source?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#source_port CcRuleGroup#source_port}
    */
    readonly sourcePort?: string;
}
export class HeaderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HeaderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        if (this._destinationPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPort = this._destinationPort;
        }
        if (this._direction !== undefined) {
            hasAnyValues = true;
            internalValueResult.direction = this._direction;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._sourcePort !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePort = this._sourcePort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HeaderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination = undefined;
            this._destinationPort = undefined;
            this._direction = undefined;
            this._protocol = undefined;
            this._source = undefined;
            this._sourcePort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination = value.destination;
            this._destinationPort = value.destinationPort;
            this._direction = value.direction;
            this._protocol = value.protocol;
            this._source = value.source;
            this._sourcePort = value.sourcePort;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination?: string; 
    public get destination() {
        return this.getStringAttribute('destination');
    }
    public set destination(value: string) {
        this._destination = value;
    }
    public resetDestination() {
        this._destination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination;
    }

    // destination_port - computed: true, optional: true, required: false
    private _destinationPort?: string; 
    public get destinationPort() {
        return this.getStringAttribute('destination_port');
    }
    public set destinationPort(value: string) {
        this._destinationPort = value;
    }
    public resetDestinationPort() {
        this._destinationPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortInput() {
        return this._destinationPort;
    }

    // direction - computed: true, optional: true, required: false
    private _direction?: string; 
    public get direction() {
        return this.getStringAttribute('direction');
    }
    public set direction(value: string) {
        this._direction = value;
    }
    public resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directionInput() {
        return this._direction;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // source - computed: true, optional: true, required: false
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    public resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // source_port - computed: true, optional: true, required: false
    private _sourcePort?: string; 
    public get sourcePort() {
        return this.getStringAttribute('source_port');
    }
    public set sourcePort(value: string) {
        this._sourcePort = value;
    }
    public resetSourcePort() {
        this._sourcePort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortInput() {
        return this._sourcePort;
    }
}
export interface RuleOptionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#keyword CcRuleGroup#keyword}
    */
    readonly keyword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#settings CcRuleGroup#settings}
    */
    readonly settings?: string[];
}
export class RuleOptionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RuleOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyword !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyword = this._keyword;
        }
        if (this._settings !== undefined) {
            hasAnyValues = true;
            internalValueResult.settings = this._settings;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyword = undefined;
            this._settings = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyword = value.keyword;
            this._settings = value.settings;
        }
    }

    // keyword - computed: true, optional: true, required: false
    private _keyword?: string; 
    public get keyword() {
        return this.getStringAttribute('keyword');
    }
    public set keyword(value: string) {
        this._keyword = value;
    }
    public resetKeyword() {
        this._keyword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keywordInput() {
        return this._keyword;
    }

    // settings - computed: true, optional: true, required: false
    private _settings?: string[]; 
    public get settings() {
        return this.getListAttribute('settings');
    }
    public set settings(value: string[]) {
        this._settings = value;
    }
    public resetSettings() {
        this._settings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get settingsInput() {
        return this._settings;
    }
}

export class RuleOptionPropertyList extends cdktn.ComplexList {
    public internalValue? : RuleOptionProperty[] | cdktn.IResolvable

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
    public get(index: number): RuleOptionPropertyOutputReference {
        return new RuleOptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StatefulRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#action CcRuleGroup#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#header CcRuleGroup#header}
    */
    readonly header?: HeaderProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#rule_options CcRuleGroup#rule_options}
    */
    readonly ruleOptions?: RuleOptionProperty[] | cdktn.IResolvable;
}
export class StatefulRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StatefulRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._header?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header?.internalValue;
        }
        if (this._ruleOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleOptions = this._ruleOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatefulRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._header.internalValue = undefined;
            this._ruleOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._header.internalValue = value.header;
            this._ruleOptions.internalValue = value.ruleOptions;
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

    // header - computed: true, optional: true, required: false
    private _header = new HeaderPropertyOutputReference(this, "header");
    public get header() {
        return this._header;
    }
    public putHeader(value: HeaderProperty) {
        this._header.internalValue = value;
    }
    public resetHeader() {
        this._header.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header.internalValue;
    }

    // rule_options - computed: true, optional: true, required: false
    private _ruleOptions = new RuleOptionPropertyList(this, "rule_options", false);
    public get ruleOptions() {
        return this._ruleOptions;
    }
    public putRuleOptions(value: RuleOptionProperty[] | cdktn.IResolvable) {
        this._ruleOptions.internalValue = value;
    }
    public resetRuleOptions() {
        this._ruleOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleOptionsInput() {
        return this._ruleOptions.internalValue;
    }
}

export class StatefulRulePropertyList extends cdktn.ComplexList {
    public internalValue? : StatefulRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): StatefulRulePropertyOutputReference {
        return new StatefulRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DimensionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#value CcRuleGroup#value}
    */
    readonly value?: string;
}
export class DimensionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DimensionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DimensionProperty | cdktn.IResolvable | undefined) {
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

export class DimensionPropertyList extends cdktn.ComplexList {
    public internalValue? : DimensionProperty[] | cdktn.IResolvable

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
    public get(index: number): DimensionPropertyOutputReference {
        return new DimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PublishMetricActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#dimensions CcRuleGroup#dimensions}
    */
    readonly dimensions?: DimensionProperty[] | cdktn.IResolvable;
}
export class PublishMetricActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PublishMetricActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublishMetricActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = value.dimensions;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new DimensionPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: DimensionProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
    }
}
export interface ActionDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#publish_metric_action CcRuleGroup#publish_metric_action}
    */
    readonly publishMetricAction?: PublishMetricActionProperty;
}
export class ActionDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ActionDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._publishMetricAction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.publishMetricAction = this._publishMetricAction?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ActionDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._publishMetricAction.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._publishMetricAction.internalValue = value.publishMetricAction;
        }
    }

    // publish_metric_action - computed: true, optional: true, required: false
    private _publishMetricAction = new PublishMetricActionPropertyOutputReference(this, "publish_metric_action");
    public get publishMetricAction() {
        return this._publishMetricAction;
    }
    public putPublishMetricAction(value: PublishMetricActionProperty) {
        this._publishMetricAction.internalValue = value;
    }
    public resetPublishMetricAction() {
        this._publishMetricAction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishMetricActionInput() {
        return this._publishMetricAction.internalValue;
    }
}
export interface CustomActionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#action_definition CcRuleGroup#action_definition}
    */
    readonly actionDefinition?: ActionDefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#action_name CcRuleGroup#action_name}
    */
    readonly actionName?: string;
}
export class CustomActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionDefinition = this._actionDefinition?.internalValue;
        }
        if (this._actionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionName = this._actionName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionDefinition.internalValue = undefined;
            this._actionName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionDefinition.internalValue = value.actionDefinition;
            this._actionName = value.actionName;
        }
    }

    // action_definition - computed: true, optional: true, required: false
    private _actionDefinition = new ActionDefinitionPropertyOutputReference(this, "action_definition");
    public get actionDefinition() {
        return this._actionDefinition;
    }
    public putActionDefinition(value: ActionDefinitionProperty) {
        this._actionDefinition.internalValue = value;
    }
    public resetActionDefinition() {
        this._actionDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionDefinitionInput() {
        return this._actionDefinition.internalValue;
    }

    // action_name - computed: true, optional: true, required: false
    private _actionName?: string; 
    public get actionName() {
        return this.getStringAttribute('action_name');
    }
    public set actionName(value: string) {
        this._actionName = value;
    }
    public resetActionName() {
        this._actionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionNameInput() {
        return this._actionName;
    }
}

export class CustomActionPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomActionProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomActionPropertyOutputReference {
        return new CustomActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PortRangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#from_port CcRuleGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#to_port CcRuleGroup#to_port}
    */
    readonly toPort?: number;
}
export class PortRangePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PortRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}

export class PortRangePropertyList extends cdktn.ComplexList {
    public internalValue? : PortRangeProperty[] | cdktn.IResolvable

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
    public get(index: number): PortRangePropertyOutputReference {
        return new PortRangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AddressProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#address_definition CcRuleGroup#address_definition}
    */
    readonly addressDefinition?: string;
}
export class AddressPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addressDefinition !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressDefinition = this._addressDefinition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addressDefinition = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addressDefinition = value.addressDefinition;
        }
    }

    // address_definition - computed: true, optional: true, required: false
    private _addressDefinition?: string; 
    public get addressDefinition() {
        return this.getStringAttribute('address_definition');
    }
    public set addressDefinition(value: string) {
        this._addressDefinition = value;
    }
    public resetAddressDefinition() {
        this._addressDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressDefinitionInput() {
        return this._addressDefinition;
    }
}

export class AddressPropertyList extends cdktn.ComplexList {
    public internalValue? : AddressProperty[] | cdktn.IResolvable

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
    public get(index: number): AddressPropertyOutputReference {
        return new AddressPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourcePortsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#from_port CcRuleGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#to_port CcRuleGroup#to_port}
    */
    readonly toPort?: number;
}
export class SourcePortsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourcePortsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._fromPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromPort = this._fromPort;
        }
        if (this._toPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.toPort = this._toPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourcePortsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._fromPort = undefined;
            this._toPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._fromPort = value.fromPort;
            this._toPort = value.toPort;
        }
    }

    // from_port - computed: true, optional: true, required: false
    private _fromPort?: number; 
    public get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    public set fromPort(value: number) {
        this._fromPort = value;
    }
    public resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fromPortInput() {
        return this._fromPort;
    }

    // to_port - computed: true, optional: true, required: false
    private _toPort?: number; 
    public get toPort() {
        return this.getNumberAttribute('to_port');
    }
    public set toPort(value: number) {
        this._toPort = value;
    }
    public resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get toPortInput() {
        return this._toPort;
    }
}

export class SourcePortsPropertyList extends cdktn.ComplexList {
    public internalValue? : SourcePortsProperty[] | cdktn.IResolvable

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
    public get(index: number): SourcePortsPropertyOutputReference {
        return new SourcePortsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourcesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#address_definition CcRuleGroup#address_definition}
    */
    readonly addressDefinition?: string;
}
export class SourcesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addressDefinition !== undefined) {
            hasAnyValues = true;
            internalValueResult.addressDefinition = this._addressDefinition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addressDefinition = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addressDefinition = value.addressDefinition;
        }
    }

    // address_definition - computed: true, optional: true, required: false
    private _addressDefinition?: string; 
    public get addressDefinition() {
        return this.getStringAttribute('address_definition');
    }
    public set addressDefinition(value: string) {
        this._addressDefinition = value;
    }
    public resetAddressDefinition() {
        this._addressDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressDefinitionInput() {
        return this._addressDefinition;
    }
}

export class SourcesPropertyList extends cdktn.ComplexList {
    public internalValue? : SourcesProperty[] | cdktn.IResolvable

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
    public get(index: number): SourcesPropertyOutputReference {
        return new SourcesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TCPFlagFieldProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#flags CcRuleGroup#flags}
    */
    readonly flags?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#masks CcRuleGroup#masks}
    */
    readonly masks?: string[];
}
export class TCPFlagFieldPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TCPFlagFieldProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._flags !== undefined) {
            hasAnyValues = true;
            internalValueResult.flags = this._flags;
        }
        if (this._masks !== undefined) {
            hasAnyValues = true;
            internalValueResult.masks = this._masks;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TCPFlagFieldProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flags = undefined;
            this._masks = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flags = value.flags;
            this._masks = value.masks;
        }
    }

    // flags - computed: true, optional: true, required: false
    private _flags?: string[]; 
    public get flags() {
        return this.getListAttribute('flags');
    }
    public set flags(value: string[]) {
        this._flags = value;
    }
    public resetFlags() {
        this._flags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flagsInput() {
        return this._flags;
    }

    // masks - computed: true, optional: true, required: false
    private _masks?: string[]; 
    public get masks() {
        return this.getListAttribute('masks');
    }
    public set masks(value: string[]) {
        this._masks = value;
    }
    public resetMasks() {
        this._masks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masksInput() {
        return this._masks;
    }
}

export class TCPFlagFieldPropertyList extends cdktn.ComplexList {
    public internalValue? : TCPFlagFieldProperty[] | cdktn.IResolvable

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
    public get(index: number): TCPFlagFieldPropertyOutputReference {
        return new TCPFlagFieldPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MatchAttributesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#destination_ports CcRuleGroup#destination_ports}
    */
    readonly destinationPorts?: PortRangeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#destinations CcRuleGroup#destinations}
    */
    readonly destinations?: AddressProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#protocols CcRuleGroup#protocols}
    */
    readonly protocols?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#source_ports CcRuleGroup#source_ports}
    */
    readonly sourcePorts?: SourcePortsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#sources CcRuleGroup#sources}
    */
    readonly sources?: SourcesProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#tcp_flags CcRuleGroup#tcp_flags}
    */
    readonly tcpFlags?: TCPFlagFieldProperty[] | cdktn.IResolvable;
}
export class MatchAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MatchAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationPorts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationPorts = this._destinationPorts?.internalValue;
        }
        if (this._destinations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinations = this._destinations?.internalValue;
        }
        if (this._protocols !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocols = this._protocols;
        }
        if (this._sourcePorts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourcePorts = this._sourcePorts?.internalValue;
        }
        if (this._sources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sources = this._sources?.internalValue;
        }
        if (this._tcpFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tcpFlags = this._tcpFlags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MatchAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationPorts.internalValue = undefined;
            this._destinations.internalValue = undefined;
            this._protocols = undefined;
            this._sourcePorts.internalValue = undefined;
            this._sources.internalValue = undefined;
            this._tcpFlags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationPorts.internalValue = value.destinationPorts;
            this._destinations.internalValue = value.destinations;
            this._protocols = value.protocols;
            this._sourcePorts.internalValue = value.sourcePorts;
            this._sources.internalValue = value.sources;
            this._tcpFlags.internalValue = value.tcpFlags;
        }
    }

    // destination_ports - computed: true, optional: true, required: false
    private _destinationPorts = new PortRangePropertyList(this, "destination_ports", false);
    public get destinationPorts() {
        return this._destinationPorts;
    }
    public putDestinationPorts(value: PortRangeProperty[] | cdktn.IResolvable) {
        this._destinationPorts.internalValue = value;
    }
    public resetDestinationPorts() {
        this._destinationPorts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationPortsInput() {
        return this._destinationPorts.internalValue;
    }

    // destinations - computed: true, optional: true, required: false
    private _destinations = new AddressPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: AddressProperty[] | cdktn.IResolvable) {
        this._destinations.internalValue = value;
    }
    public resetDestinations() {
        this._destinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
        return this._destinations.internalValue;
    }

    // protocols - computed: true, optional: true, required: false
    private _protocols?: number[]; 
    public get protocols() {
        return this.getNumberListAttribute('protocols');
    }
    public set protocols(value: number[]) {
        this._protocols = value;
    }
    public resetProtocols() {
        this._protocols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolsInput() {
        return this._protocols;
    }

    // source_ports - computed: true, optional: true, required: false
    private _sourcePorts = new SourcePortsPropertyList(this, "source_ports", false);
    public get sourcePorts() {
        return this._sourcePorts;
    }
    public putSourcePorts(value: SourcePortsProperty[] | cdktn.IResolvable) {
        this._sourcePorts.internalValue = value;
    }
    public resetSourcePorts() {
        this._sourcePorts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcePortsInput() {
        return this._sourcePorts.internalValue;
    }

    // sources - computed: true, optional: true, required: false
    private _sources = new SourcesPropertyList(this, "sources", false);
    public get sources() {
        return this._sources;
    }
    public putSources(value: SourcesProperty[] | cdktn.IResolvable) {
        this._sources.internalValue = value;
    }
    public resetSources() {
        this._sources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcesInput() {
        return this._sources.internalValue;
    }

    // tcp_flags - computed: true, optional: true, required: false
    private _tcpFlags = new TCPFlagFieldPropertyList(this, "tcp_flags", false);
    public get tcpFlags() {
        return this._tcpFlags;
    }
    public putTcpFlags(value: TCPFlagFieldProperty[] | cdktn.IResolvable) {
        this._tcpFlags.internalValue = value;
    }
    public resetTcpFlags() {
        this._tcpFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcpFlagsInput() {
        return this._tcpFlags.internalValue;
    }
}
export interface RuleDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#actions CcRuleGroup#actions}
    */
    readonly actions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#match_attributes CcRuleGroup#match_attributes}
    */
    readonly matchAttributes?: MatchAttributesProperty;
}
export class RuleDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._matchAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchAttributes = this._matchAttributes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._matchAttributes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions = value.actions;
            this._matchAttributes.internalValue = value.matchAttributes;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions?: string[]; 
    public get actions() {
        return this.getListAttribute('actions');
    }
    public set actions(value: string[]) {
        this._actions = value;
    }
    public resetActions() {
        this._actions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions;
    }

    // match_attributes - computed: true, optional: true, required: false
    private _matchAttributes = new MatchAttributesPropertyOutputReference(this, "match_attributes");
    public get matchAttributes() {
        return this._matchAttributes;
    }
    public putMatchAttributes(value: MatchAttributesProperty) {
        this._matchAttributes.internalValue = value;
    }
    public resetMatchAttributes() {
        this._matchAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchAttributesInput() {
        return this._matchAttributes.internalValue;
    }
}
export interface StatelessRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#priority CcRuleGroup#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#rule_definition CcRuleGroup#rule_definition}
    */
    readonly ruleDefinition?: RuleDefinitionProperty;
}
export class StatelessRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StatelessRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._ruleDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleDefinition = this._ruleDefinition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatelessRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._priority = undefined;
            this._ruleDefinition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._priority = value.priority;
            this._ruleDefinition.internalValue = value.ruleDefinition;
        }
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // rule_definition - computed: true, optional: true, required: false
    private _ruleDefinition = new RuleDefinitionPropertyOutputReference(this, "rule_definition");
    public get ruleDefinition() {
        return this._ruleDefinition;
    }
    public putRuleDefinition(value: RuleDefinitionProperty) {
        this._ruleDefinition.internalValue = value;
    }
    public resetRuleDefinition() {
        this._ruleDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleDefinitionInput() {
        return this._ruleDefinition.internalValue;
    }
}

export class StatelessRulePropertyList extends cdktn.ComplexList {
    public internalValue? : StatelessRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): StatelessRulePropertyOutputReference {
        return new StatelessRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StatelessRulesAndCustomActionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#custom_actions CcRuleGroup#custom_actions}
    */
    readonly customActions?: CustomActionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#stateless_rules CcRuleGroup#stateless_rules}
    */
    readonly statelessRules?: StatelessRuleProperty[] | cdktn.IResolvable;
}
export class StatelessRulesAndCustomActionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StatelessRulesAndCustomActionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customActions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customActions = this._customActions?.internalValue;
        }
        if (this._statelessRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessRules = this._statelessRules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatelessRulesAndCustomActionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customActions.internalValue = undefined;
            this._statelessRules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customActions.internalValue = value.customActions;
            this._statelessRules.internalValue = value.statelessRules;
        }
    }

    // custom_actions - computed: true, optional: true, required: false
    private _customActions = new CustomActionPropertyList(this, "custom_actions", false);
    public get customActions() {
        return this._customActions;
    }
    public putCustomActions(value: CustomActionProperty[] | cdktn.IResolvable) {
        this._customActions.internalValue = value;
    }
    public resetCustomActions() {
        this._customActions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customActionsInput() {
        return this._customActions.internalValue;
    }

    // stateless_rules - computed: true, optional: true, required: false
    private _statelessRules = new StatelessRulePropertyList(this, "stateless_rules", false);
    public get statelessRules() {
        return this._statelessRules;
    }
    public putStatelessRules(value: StatelessRuleProperty[] | cdktn.IResolvable) {
        this._statelessRules.internalValue = value;
    }
    public resetStatelessRules() {
        this._statelessRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statelessRulesInput() {
        return this._statelessRules.internalValue;
    }
}
export interface RulesSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#rules_source_list CcRuleGroup#rules_source_list}
    */
    readonly rulesSourceList?: RulesSourceListProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#rules_string CcRuleGroup#rules_string}
    */
    readonly rulesString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#stateful_rules CcRuleGroup#stateful_rules}
    */
    readonly statefulRules?: StatefulRuleProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#stateless_rules_and_custom_actions CcRuleGroup#stateless_rules_and_custom_actions}
    */
    readonly statelessRulesAndCustomActions?: StatelessRulesAndCustomActionsProperty;
}
export class RulesSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rulesSourceList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rulesSourceList = this._rulesSourceList?.internalValue;
        }
        if (this._rulesString !== undefined) {
            hasAnyValues = true;
            internalValueResult.rulesString = this._rulesString;
        }
        if (this._statefulRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statefulRules = this._statefulRules?.internalValue;
        }
        if (this._statelessRulesAndCustomActions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessRulesAndCustomActions = this._statelessRulesAndCustomActions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rulesSourceList.internalValue = undefined;
            this._rulesString = undefined;
            this._statefulRules.internalValue = undefined;
            this._statelessRulesAndCustomActions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rulesSourceList.internalValue = value.rulesSourceList;
            this._rulesString = value.rulesString;
            this._statefulRules.internalValue = value.statefulRules;
            this._statelessRulesAndCustomActions.internalValue = value.statelessRulesAndCustomActions;
        }
    }

    // rules_source_list - computed: true, optional: true, required: false
    private _rulesSourceList = new RulesSourceListPropertyOutputReference(this, "rules_source_list");
    public get rulesSourceList() {
        return this._rulesSourceList;
    }
    public putRulesSourceList(value: RulesSourceListProperty) {
        this._rulesSourceList.internalValue = value;
    }
    public resetRulesSourceList() {
        this._rulesSourceList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesSourceListInput() {
        return this._rulesSourceList.internalValue;
    }

    // rules_string - computed: true, optional: true, required: false
    private _rulesString?: string; 
    public get rulesString() {
        return this.getStringAttribute('rules_string');
    }
    public set rulesString(value: string) {
        this._rulesString = value;
    }
    public resetRulesString() {
        this._rulesString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesStringInput() {
        return this._rulesString;
    }

    // stateful_rules - computed: true, optional: true, required: false
    private _statefulRules = new StatefulRulePropertyList(this, "stateful_rules", false);
    public get statefulRules() {
        return this._statefulRules;
    }
    public putStatefulRules(value: StatefulRuleProperty[] | cdktn.IResolvable) {
        this._statefulRules.internalValue = value;
    }
    public resetStatefulRules() {
        this._statefulRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statefulRulesInput() {
        return this._statefulRules.internalValue;
    }

    // stateless_rules_and_custom_actions - computed: true, optional: true, required: false
    private _statelessRulesAndCustomActions = new StatelessRulesAndCustomActionsPropertyOutputReference(this, "stateless_rules_and_custom_actions");
    public get statelessRulesAndCustomActions() {
        return this._statelessRulesAndCustomActions;
    }
    public putStatelessRulesAndCustomActions(value: StatelessRulesAndCustomActionsProperty) {
        this._statelessRulesAndCustomActions.internalValue = value;
    }
    public resetStatelessRulesAndCustomActions() {
        this._statelessRulesAndCustomActions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statelessRulesAndCustomActionsInput() {
        return this._statelessRulesAndCustomActions.internalValue;
    }
}
export interface StatefulRuleOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#rule_order CcRuleGroup#rule_order}
    */
    readonly ruleOrder?: string;
}
export class StatefulRuleOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StatefulRuleOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ruleOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleOrder = this._ruleOrder;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatefulRuleOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ruleOrder = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ruleOrder = value.ruleOrder;
        }
    }

    // rule_order - computed: true, optional: true, required: false
    private _ruleOrder?: string; 
    public get ruleOrder() {
        return this.getStringAttribute('rule_order');
    }
    public set ruleOrder(value: string) {
        this._ruleOrder = value;
    }
    public resetRuleOrder() {
        this._ruleOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleOrderInput() {
        return this._ruleOrder;
    }
}
export interface RuleGroupProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#reference_sets CcRuleGroup#reference_sets}
    */
    readonly referenceSets?: ReferenceSetsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#rule_variables CcRuleGroup#rule_variables}
    */
    readonly ruleVariables?: RuleVariablesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#rules_source CcRuleGroup#rules_source}
    */
    readonly rulesSource?: RulesSourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#stateful_rule_options CcRuleGroup#stateful_rule_options}
    */
    readonly statefulRuleOptions?: StatefulRuleOptionsProperty;
}
export class RuleGroupPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._referenceSets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.referenceSets = this._referenceSets?.internalValue;
        }
        if (this._ruleVariables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleVariables = this._ruleVariables?.internalValue;
        }
        if (this._rulesSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rulesSource = this._rulesSource?.internalValue;
        }
        if (this._statefulRuleOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statefulRuleOptions = this._statefulRuleOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._referenceSets.internalValue = undefined;
            this._ruleVariables.internalValue = undefined;
            this._rulesSource.internalValue = undefined;
            this._statefulRuleOptions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._referenceSets.internalValue = value.referenceSets;
            this._ruleVariables.internalValue = value.ruleVariables;
            this._rulesSource.internalValue = value.rulesSource;
            this._statefulRuleOptions.internalValue = value.statefulRuleOptions;
        }
    }

    // reference_sets - computed: true, optional: true, required: false
    private _referenceSets = new ReferenceSetsPropertyOutputReference(this, "reference_sets");
    public get referenceSets() {
        return this._referenceSets;
    }
    public putReferenceSets(value: ReferenceSetsProperty) {
        this._referenceSets.internalValue = value;
    }
    public resetReferenceSets() {
        this._referenceSets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceSetsInput() {
        return this._referenceSets.internalValue;
    }

    // rule_variables - computed: true, optional: true, required: false
    private _ruleVariables = new RuleVariablesPropertyOutputReference(this, "rule_variables");
    public get ruleVariables() {
        return this._ruleVariables;
    }
    public putRuleVariables(value: RuleVariablesProperty) {
        this._ruleVariables.internalValue = value;
    }
    public resetRuleVariables() {
        this._ruleVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleVariablesInput() {
        return this._ruleVariables.internalValue;
    }

    // rules_source - computed: true, optional: true, required: false
    private _rulesSource = new RulesSourcePropertyOutputReference(this, "rules_source");
    public get rulesSource() {
        return this._rulesSource;
    }
    public putRulesSource(value: RulesSourceProperty) {
        this._rulesSource.internalValue = value;
    }
    public resetRulesSource() {
        this._rulesSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesSourceInput() {
        return this._rulesSource.internalValue;
    }

    // stateful_rule_options - computed: true, optional: true, required: false
    private _statefulRuleOptions = new StatefulRuleOptionsPropertyOutputReference(this, "stateful_rule_options");
    public get statefulRuleOptions() {
        return this._statefulRuleOptions;
    }
    public putStatefulRuleOptions(value: StatefulRuleOptionsProperty) {
        this._statefulRuleOptions.internalValue = value;
    }
    public resetStatefulRuleOptions() {
        this._statefulRuleOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statefulRuleOptionsInput() {
        return this._statefulRuleOptions.internalValue;
    }
}
export interface SummaryConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#rule_options CcRuleGroup#rule_options}
    */
    readonly ruleOptions?: string[];
}
export class SummaryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SummaryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ruleOptions !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleOptions = this._ruleOptions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SummaryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ruleOptions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ruleOptions = value.ruleOptions;
        }
    }

    // rule_options - computed: true, optional: true, required: false
    private _ruleOptions?: string[]; 
    public get ruleOptions() {
        return this.getListAttribute('rule_options');
    }
    public set ruleOptions(value: string[]) {
        this._ruleOptions = value;
    }
    public resetRuleOptions() {
        this._ruleOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleOptionsInput() {
        return this._ruleOptions;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#key CcRuleGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkfirewall_rule_group#value CcRuleGroup#value}
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
