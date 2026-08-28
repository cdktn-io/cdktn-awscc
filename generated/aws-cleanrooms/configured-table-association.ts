// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfiguredTableAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#configured_table_association_analysis_rules CcConfiguredTableAssociation#configured_table_association_analysis_rules}
    */
    readonly configuredTableAssociationAnalysisRules?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRuleProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#configured_table_identifier CcConfiguredTableAssociation#configured_table_identifier}
    */
    readonly configuredTableIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#description CcConfiguredTableAssociation#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#membership_identifier CcConfiguredTableAssociation#membership_identifier}
    */
    readonly membershipIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#name CcConfiguredTableAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#role_arn CcConfiguredTableAssociation#role_arn}
    */
    readonly roleArn: string;
    /**
    * An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#tags CcConfiguredTableAssociation#tags}
    */
    readonly tags?: CcConfiguredTableAssociation.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association awscc_cleanrooms_configured_table_association}
*/
export class CcConfiguredTableAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cleanrooms_configured_table_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfiguredTableAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfiguredTableAssociation to import
    * @param importFromId The id of the existing CcConfiguredTableAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfiguredTableAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_configured_table_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association awscc_cleanrooms_configured_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfiguredTableAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcConfiguredTableAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cleanrooms_configured_table_association',
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
        this._configuredTableAssociationAnalysisRules.internalValue = config.configuredTableAssociationAnalysisRules;
        this._configuredTableIdentifier = config.configuredTableIdentifier;
        this._description = config.description;
        this._membershipIdentifier = config.membershipIdentifier;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // configured_table_association_analysis_rules - computed: true, optional: true, required: false
    private _configuredTableAssociationAnalysisRules = new CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRulePropertyList(this, "configured_table_association_analysis_rules", false);
    public get configuredTableAssociationAnalysisRules() {
        return this._configuredTableAssociationAnalysisRules;
    }
    public putConfiguredTableAssociationAnalysisRules(value: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRuleProperty[] | cdktn.IResolvable) {
        this._configuredTableAssociationAnalysisRules.internalValue = value;
    }
    public resetConfiguredTableAssociationAnalysisRules() {
        this._configuredTableAssociationAnalysisRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configuredTableAssociationAnalysisRulesInput() {
        return this._configuredTableAssociationAnalysisRules.internalValue;
    }

    // configured_table_association_identifier - computed: true, optional: false, required: false
    public get configuredTableAssociationIdentifier() {
        return this.getStringAttribute('configured_table_association_identifier');
    }

    // configured_table_identifier - computed: false, optional: false, required: true
    private _configuredTableIdentifier?: string; 
    public get configuredTableIdentifier() {
        return this.getStringAttribute('configured_table_identifier');
    }
    public set configuredTableIdentifier(value: string) {
        this._configuredTableIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configuredTableIdentifierInput() {
        return this._configuredTableIdentifier;
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

    // membership_identifier - computed: false, optional: false, required: true
    private _membershipIdentifier?: string; 
    public get membershipIdentifier() {
        return this.getStringAttribute('membership_identifier');
    }
    public set membershipIdentifier(value: string) {
        this._membershipIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get membershipIdentifierInput() {
        return this._membershipIdentifier;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConfiguredTableAssociation.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConfiguredTableAssociation.TagProperty[] | cdktn.IResolvable) {
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
            configured_table_association_analysis_rules: cdktn.listMapper(ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePropertyToTerraform, false)(this._configuredTableAssociationAnalysisRules.internalValue),
            configured_table_identifier: cdktn.stringToTerraform(this._configuredTableIdentifier),
            description: cdktn.stringToTerraform(this._description),
            membership_identifier: cdktn.stringToTerraform(this._membershipIdentifier),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccConfiguredTableAssociationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configured_table_association_analysis_rules: {
                value: cdktn.listMapperHcl(ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePropertyToHclTerraform, false)(this._configuredTableAssociationAnalysisRules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRulePropertyList",
            },
            configured_table_identifier: {
                value: cdktn.stringToHclTerraform(this._configuredTableIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            membership_identifier: {
                value: cdktn.stringToHclTerraform(this._membershipIdentifier),
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
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConfiguredTableAssociationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfiguredTableAssociation.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleAggregationPropertyToTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRuleAggregationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_additional_analyses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAdditionalAnalyses),
        allowed_result_receivers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedResultReceivers),
    }
}


export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleAggregationPropertyToHclTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRuleAggregationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_additional_analyses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAdditionalAnalyses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_result_receivers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedResultReceivers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleCustomPropertyToTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRuleCustomProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_additional_analyses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAdditionalAnalyses),
        allowed_result_receivers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedResultReceivers),
    }
}


export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleCustomPropertyToHclTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRuleCustomProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_additional_analyses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAdditionalAnalyses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_result_receivers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedResultReceivers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleListPropertyToTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRuleListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_additional_analyses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAdditionalAnalyses),
        allowed_result_receivers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedResultReceivers),
    }
}


export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleListPropertyToHclTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRuleListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_additional_analyses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAdditionalAnalyses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_result_receivers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedResultReceivers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePolicyV1PropertyToTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRulePolicyV1Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aggregation: ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleAggregationPropertyToTerraform(struct!.aggregation),
        custom: ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleCustomPropertyToTerraform(struct!.custom),
        list: ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleListPropertyToTerraform(struct!.list),
    }
}


export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePolicyV1PropertyToHclTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRulePolicyV1Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aggregation: {
            value: ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleAggregationPropertyToHclTerraform(struct!.aggregation),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfiguredTableAssociationAnalysisRuleAggregationProperty",
        },
        custom: {
            value: ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleCustomPropertyToHclTerraform(struct!.custom),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfiguredTableAssociationAnalysisRuleCustomProperty",
        },
        list: {
            value: ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRuleListPropertyToHclTerraform(struct!.list),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfiguredTableAssociationAnalysisRuleListProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePolicyPropertyToTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRulePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        v1: ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePolicyV1PropertyToTerraform(struct!.v1),
    }
}


export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePolicyPropertyToHclTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRulePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        v1: {
            value: ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePolicyV1PropertyToHclTerraform(struct!.v1),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfiguredTableAssociationAnalysisRulePolicyV1Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePropertyToTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy: ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePolicyPropertyToTerraform(struct!.policy),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePropertyToHclTerraform(struct?: CcConfiguredTableAssociation.ConfiguredTableAssociationAnalysisRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy: {
            value: ccConfiguredTableAssociationConfiguredTableAssociationAnalysisRulePolicyPropertyToHclTerraform(struct!.policy),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfiguredTableAssociationAnalysisRulePolicyProperty",
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


export function ccConfiguredTableAssociationTagPropertyToTerraform(struct?: CcConfiguredTableAssociation.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfiguredTableAssociationTagPropertyToHclTerraform(struct?: CcConfiguredTableAssociation.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConfiguredTableAssociation {
export interface ConfiguredTableAssociationAnalysisRuleAggregationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CcConfiguredTableAssociation#allowed_additional_analyses}
    */
    readonly allowedAdditionalAnalyses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CcConfiguredTableAssociation#allowed_result_receivers}
    */
    readonly allowedResultReceivers?: string[];
}
export class ConfiguredTableAssociationAnalysisRuleAggregationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfiguredTableAssociationAnalysisRuleAggregationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedAdditionalAnalyses !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAdditionalAnalyses = this._allowedAdditionalAnalyses;
        }
        if (this._allowedResultReceivers !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedResultReceivers = this._allowedResultReceivers;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfiguredTableAssociationAnalysisRuleAggregationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedAdditionalAnalyses = undefined;
            this._allowedResultReceivers = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedAdditionalAnalyses = value.allowedAdditionalAnalyses;
            this._allowedResultReceivers = value.allowedResultReceivers;
        }
    }

    // allowed_additional_analyses - computed: true, optional: true, required: false
    private _allowedAdditionalAnalyses?: string[]; 
    public get allowedAdditionalAnalyses() {
        return this.getListAttribute('allowed_additional_analyses');
    }
    public set allowedAdditionalAnalyses(value: string[]) {
        this._allowedAdditionalAnalyses = value;
    }
    public resetAllowedAdditionalAnalyses() {
        this._allowedAdditionalAnalyses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedAdditionalAnalysesInput() {
        return this._allowedAdditionalAnalyses;
    }

    // allowed_result_receivers - computed: true, optional: true, required: false
    private _allowedResultReceivers?: string[]; 
    public get allowedResultReceivers() {
        return this.getListAttribute('allowed_result_receivers');
    }
    public set allowedResultReceivers(value: string[]) {
        this._allowedResultReceivers = value;
    }
    public resetAllowedResultReceivers() {
        this._allowedResultReceivers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedResultReceiversInput() {
        return this._allowedResultReceivers;
    }
}
export interface ConfiguredTableAssociationAnalysisRuleCustomProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CcConfiguredTableAssociation#allowed_additional_analyses}
    */
    readonly allowedAdditionalAnalyses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CcConfiguredTableAssociation#allowed_result_receivers}
    */
    readonly allowedResultReceivers?: string[];
}
export class ConfiguredTableAssociationAnalysisRuleCustomPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfiguredTableAssociationAnalysisRuleCustomProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedAdditionalAnalyses !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAdditionalAnalyses = this._allowedAdditionalAnalyses;
        }
        if (this._allowedResultReceivers !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedResultReceivers = this._allowedResultReceivers;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfiguredTableAssociationAnalysisRuleCustomProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedAdditionalAnalyses = undefined;
            this._allowedResultReceivers = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedAdditionalAnalyses = value.allowedAdditionalAnalyses;
            this._allowedResultReceivers = value.allowedResultReceivers;
        }
    }

    // allowed_additional_analyses - computed: true, optional: true, required: false
    private _allowedAdditionalAnalyses?: string[]; 
    public get allowedAdditionalAnalyses() {
        return this.getListAttribute('allowed_additional_analyses');
    }
    public set allowedAdditionalAnalyses(value: string[]) {
        this._allowedAdditionalAnalyses = value;
    }
    public resetAllowedAdditionalAnalyses() {
        this._allowedAdditionalAnalyses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedAdditionalAnalysesInput() {
        return this._allowedAdditionalAnalyses;
    }

    // allowed_result_receivers - computed: true, optional: true, required: false
    private _allowedResultReceivers?: string[]; 
    public get allowedResultReceivers() {
        return this.getListAttribute('allowed_result_receivers');
    }
    public set allowedResultReceivers(value: string[]) {
        this._allowedResultReceivers = value;
    }
    public resetAllowedResultReceivers() {
        this._allowedResultReceivers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedResultReceiversInput() {
        return this._allowedResultReceivers;
    }
}
export interface ConfiguredTableAssociationAnalysisRuleListProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CcConfiguredTableAssociation#allowed_additional_analyses}
    */
    readonly allowedAdditionalAnalyses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CcConfiguredTableAssociation#allowed_result_receivers}
    */
    readonly allowedResultReceivers?: string[];
}
export class ConfiguredTableAssociationAnalysisRuleListPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfiguredTableAssociationAnalysisRuleListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedAdditionalAnalyses !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAdditionalAnalyses = this._allowedAdditionalAnalyses;
        }
        if (this._allowedResultReceivers !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedResultReceivers = this._allowedResultReceivers;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfiguredTableAssociationAnalysisRuleListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedAdditionalAnalyses = undefined;
            this._allowedResultReceivers = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedAdditionalAnalyses = value.allowedAdditionalAnalyses;
            this._allowedResultReceivers = value.allowedResultReceivers;
        }
    }

    // allowed_additional_analyses - computed: true, optional: true, required: false
    private _allowedAdditionalAnalyses?: string[]; 
    public get allowedAdditionalAnalyses() {
        return this.getListAttribute('allowed_additional_analyses');
    }
    public set allowedAdditionalAnalyses(value: string[]) {
        this._allowedAdditionalAnalyses = value;
    }
    public resetAllowedAdditionalAnalyses() {
        this._allowedAdditionalAnalyses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedAdditionalAnalysesInput() {
        return this._allowedAdditionalAnalyses;
    }

    // allowed_result_receivers - computed: true, optional: true, required: false
    private _allowedResultReceivers?: string[]; 
    public get allowedResultReceivers() {
        return this.getListAttribute('allowed_result_receivers');
    }
    public set allowedResultReceivers(value: string[]) {
        this._allowedResultReceivers = value;
    }
    public resetAllowedResultReceivers() {
        this._allowedResultReceivers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedResultReceiversInput() {
        return this._allowedResultReceivers;
    }
}
export interface ConfiguredTableAssociationAnalysisRulePolicyV1Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#aggregation CcConfiguredTableAssociation#aggregation}
    */
    readonly aggregation?: ConfiguredTableAssociationAnalysisRuleAggregationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#custom CcConfiguredTableAssociation#custom}
    */
    readonly custom?: ConfiguredTableAssociationAnalysisRuleCustomProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#list CcConfiguredTableAssociation#list}
    */
    readonly list?: ConfiguredTableAssociationAnalysisRuleListProperty;
}
export class ConfiguredTableAssociationAnalysisRulePolicyV1PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfiguredTableAssociationAnalysisRulePolicyV1Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aggregation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregation = this._aggregation?.internalValue;
        }
        if (this._custom?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.custom = this._custom?.internalValue;
        }
        if (this._list?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.list = this._list?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfiguredTableAssociationAnalysisRulePolicyV1Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aggregation.internalValue = undefined;
            this._custom.internalValue = undefined;
            this._list.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aggregation.internalValue = value.aggregation;
            this._custom.internalValue = value.custom;
            this._list.internalValue = value.list;
        }
    }

    // aggregation - computed: true, optional: true, required: false
    private _aggregation = new ConfiguredTableAssociationAnalysisRuleAggregationPropertyOutputReference(this, "aggregation");
    public get aggregation() {
        return this._aggregation;
    }
    public putAggregation(value: ConfiguredTableAssociationAnalysisRuleAggregationProperty) {
        this._aggregation.internalValue = value;
    }
    public resetAggregation() {
        this._aggregation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationInput() {
        return this._aggregation.internalValue;
    }

    // custom - computed: true, optional: true, required: false
    private _custom = new ConfiguredTableAssociationAnalysisRuleCustomPropertyOutputReference(this, "custom");
    public get custom() {
        return this._custom;
    }
    public putCustom(value: ConfiguredTableAssociationAnalysisRuleCustomProperty) {
        this._custom.internalValue = value;
    }
    public resetCustom() {
        this._custom.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInput() {
        return this._custom.internalValue;
    }

    // list - computed: true, optional: true, required: false
    private _list = new ConfiguredTableAssociationAnalysisRuleListPropertyOutputReference(this, "list");
    public get list() {
        return this._list;
    }
    public putList(value: ConfiguredTableAssociationAnalysisRuleListProperty) {
        this._list.internalValue = value;
    }
    public resetList() {
        this._list.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get listInput() {
        return this._list.internalValue;
    }
}
export interface ConfiguredTableAssociationAnalysisRulePolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#v1 CcConfiguredTableAssociation#v1}
    */
    readonly v1?: ConfiguredTableAssociationAnalysisRulePolicyV1Property;
}
export class ConfiguredTableAssociationAnalysisRulePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfiguredTableAssociationAnalysisRulePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._v1?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.v1 = this._v1?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfiguredTableAssociationAnalysisRulePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._v1.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._v1.internalValue = value.v1;
        }
    }

    // v1 - computed: true, optional: true, required: false
    private _v1 = new ConfiguredTableAssociationAnalysisRulePolicyV1PropertyOutputReference(this, "v1");
    public get v1() {
        return this._v1;
    }
    public putV1(value: ConfiguredTableAssociationAnalysisRulePolicyV1Property) {
        this._v1.internalValue = value;
    }
    public resetV1() {
        this._v1.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get v1Input() {
        return this._v1.internalValue;
    }
}
export interface ConfiguredTableAssociationAnalysisRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#policy CcConfiguredTableAssociation#policy}
    */
    readonly policy?: ConfiguredTableAssociationAnalysisRulePolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#type CcConfiguredTableAssociation#type}
    */
    readonly type?: string;
}
export class ConfiguredTableAssociationAnalysisRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ConfiguredTableAssociationAnalysisRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policy = this._policy?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfiguredTableAssociationAnalysisRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policy.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policy.internalValue = value.policy;
            this._type = value.type;
        }
    }

    // policy - computed: true, optional: true, required: false
    private _policy = new ConfiguredTableAssociationAnalysisRulePolicyPropertyOutputReference(this, "policy");
    public get policy() {
        return this._policy;
    }
    public putPolicy(value: ConfiguredTableAssociationAnalysisRulePolicyProperty) {
        this._policy.internalValue = value;
    }
    public resetPolicy() {
        this._policy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy.internalValue;
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

export class ConfiguredTableAssociationAnalysisRulePropertyList extends cdktn.ComplexList {
    public internalValue? : ConfiguredTableAssociationAnalysisRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): ConfiguredTableAssociationAnalysisRulePropertyOutputReference {
        return new ConfiguredTableAssociationAnalysisRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#key CcConfiguredTableAssociation#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table_association#value CcConfiguredTableAssociation#value}
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
