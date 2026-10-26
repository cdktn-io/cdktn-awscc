// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOrganizationConfigRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * A comma-separated list of accounts that you want to exclude from an organization AWS Config rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#excluded_accounts CcOrganizationConfigRule#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * The name that you assign to an organization AWS Config rule. Required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#organization_config_rule_name CcOrganizationConfigRule#organization_config_rule_name}
    */
    readonly organizationConfigRuleName: string;
    /**
    * This object specifies metadata for your organization's AWS Config Custom Policy rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#organization_custom_policy_rule_metadata CcOrganizationConfigRule#organization_custom_policy_rule_metadata}
    */
    readonly organizationCustomPolicyRuleMetadata?: CcOrganizationConfigRule.OrganizationCustomPolicyRuleMetadataProperty;
    /**
    * This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#organization_custom_rule_metadata CcOrganizationConfigRule#organization_custom_rule_metadata}
    */
    readonly organizationCustomRuleMetadata?: CcOrganizationConfigRule.OrganizationCustomRuleMetadataProperty;
    /**
    * This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#organization_managed_rule_metadata CcOrganizationConfigRule#organization_managed_rule_metadata}
    */
    readonly organizationManagedRuleMetadata?: CcOrganizationConfigRule.OrganizationManagedRuleMetadataProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule awscc_config_organization_config_rule}
*/
export class CcOrganizationConfigRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_config_organization_config_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOrganizationConfigRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOrganizationConfigRule to import
    * @param importFromId The id of the existing CcOrganizationConfigRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOrganizationConfigRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_organization_config_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule awscc_config_organization_config_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOrganizationConfigRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcOrganizationConfigRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_config_organization_config_rule',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._excludedAccounts = config.excludedAccounts;
        this._organizationConfigRuleName = config.organizationConfigRuleName;
        this._organizationCustomPolicyRuleMetadata.internalValue = config.organizationCustomPolicyRuleMetadata;
        this._organizationCustomRuleMetadata.internalValue = config.organizationCustomRuleMetadata;
        this._organizationManagedRuleMetadata.internalValue = config.organizationManagedRuleMetadata;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // excluded_accounts - computed: true, optional: true, required: false
    private _excludedAccounts?: string[]; 
    public get excludedAccounts() {
        return this.getListAttribute('excluded_accounts');
    }
    public set excludedAccounts(value: string[]) {
        this._excludedAccounts = value;
    }
    public resetExcludedAccounts() {
        this._excludedAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedAccountsInput() {
        return this._excludedAccounts;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // organization_config_rule_arn - computed: true, optional: false, required: false
    public get organizationConfigRuleArn() {
        return this.getStringAttribute('organization_config_rule_arn');
    }

    // organization_config_rule_name - computed: false, optional: false, required: true
    private _organizationConfigRuleName?: string; 
    public get organizationConfigRuleName() {
        return this.getStringAttribute('organization_config_rule_name');
    }
    public set organizationConfigRuleName(value: string) {
        this._organizationConfigRuleName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationConfigRuleNameInput() {
        return this._organizationConfigRuleName;
    }

    // organization_custom_policy_rule_metadata - computed: true, optional: true, required: false
    private _organizationCustomPolicyRuleMetadata = new CcOrganizationConfigRule.OrganizationCustomPolicyRuleMetadataPropertyOutputReference(this, "organization_custom_policy_rule_metadata");
    public get organizationCustomPolicyRuleMetadata() {
        return this._organizationCustomPolicyRuleMetadata;
    }
    public putOrganizationCustomPolicyRuleMetadata(value: CcOrganizationConfigRule.OrganizationCustomPolicyRuleMetadataProperty) {
        this._organizationCustomPolicyRuleMetadata.internalValue = value;
    }
    public resetOrganizationCustomPolicyRuleMetadata() {
        this._organizationCustomPolicyRuleMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationCustomPolicyRuleMetadataInput() {
        return this._organizationCustomPolicyRuleMetadata.internalValue;
    }

    // organization_custom_rule_metadata - computed: true, optional: true, required: false
    private _organizationCustomRuleMetadata = new CcOrganizationConfigRule.OrganizationCustomRuleMetadataPropertyOutputReference(this, "organization_custom_rule_metadata");
    public get organizationCustomRuleMetadata() {
        return this._organizationCustomRuleMetadata;
    }
    public putOrganizationCustomRuleMetadata(value: CcOrganizationConfigRule.OrganizationCustomRuleMetadataProperty) {
        this._organizationCustomRuleMetadata.internalValue = value;
    }
    public resetOrganizationCustomRuleMetadata() {
        this._organizationCustomRuleMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationCustomRuleMetadataInput() {
        return this._organizationCustomRuleMetadata.internalValue;
    }

    // organization_managed_rule_metadata - computed: true, optional: true, required: false
    private _organizationManagedRuleMetadata = new CcOrganizationConfigRule.OrganizationManagedRuleMetadataPropertyOutputReference(this, "organization_managed_rule_metadata");
    public get organizationManagedRuleMetadata() {
        return this._organizationManagedRuleMetadata;
    }
    public putOrganizationManagedRuleMetadata(value: CcOrganizationConfigRule.OrganizationManagedRuleMetadataProperty) {
        this._organizationManagedRuleMetadata.internalValue = value;
    }
    public resetOrganizationManagedRuleMetadata() {
        this._organizationManagedRuleMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationManagedRuleMetadataInput() {
        return this._organizationManagedRuleMetadata.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            excluded_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._excludedAccounts),
            organization_config_rule_name: cdktn.stringToTerraform(this._organizationConfigRuleName),
            organization_custom_policy_rule_metadata: ccOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataPropertyToTerraform(this._organizationCustomPolicyRuleMetadata.internalValue),
            organization_custom_rule_metadata: ccOrganizationConfigRuleOrganizationCustomRuleMetadataPropertyToTerraform(this._organizationCustomRuleMetadata.internalValue),
            organization_managed_rule_metadata: ccOrganizationConfigRuleOrganizationManagedRuleMetadataPropertyToTerraform(this._organizationManagedRuleMetadata.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            excluded_accounts: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._excludedAccounts),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            organization_config_rule_name: {
                value: cdktn.stringToHclTerraform(this._organizationConfigRuleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organization_custom_policy_rule_metadata: {
                value: ccOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataPropertyToHclTerraform(this._organizationCustomPolicyRuleMetadata.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOrganizationConfigRule.OrganizationCustomPolicyRuleMetadataProperty",
            },
            organization_custom_rule_metadata: {
                value: ccOrganizationConfigRuleOrganizationCustomRuleMetadataPropertyToHclTerraform(this._organizationCustomRuleMetadata.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOrganizationConfigRule.OrganizationCustomRuleMetadataProperty",
            },
            organization_managed_rule_metadata: {
                value: ccOrganizationConfigRuleOrganizationManagedRuleMetadataPropertyToHclTerraform(this._organizationManagedRuleMetadata.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOrganizationConfigRule.OrganizationManagedRuleMetadataProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataPropertyToTerraform(struct?: CcOrganizationConfigRule.OrganizationCustomPolicyRuleMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        debug_log_delivery_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.debugLogDeliveryAccounts),
        description: cdktn.stringToTerraform(struct!.description),
        input_parameters: cdktn.stringToTerraform(struct!.inputParameters),
        organization_config_rule_trigger_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationConfigRuleTriggerTypes),
        policy_text: cdktn.stringToTerraform(struct!.policyText),
        resource_id_scope: cdktn.stringToTerraform(struct!.resourceIdScope),
        resource_types_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypesScope),
        runtime: cdktn.stringToTerraform(struct!.runtime),
        tag_key_scope: cdktn.stringToTerraform(struct!.tagKeyScope),
        tag_value_scope: cdktn.stringToTerraform(struct!.tagValueScope),
    }
}


export function ccOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataPropertyToHclTerraform(struct?: CcOrganizationConfigRule.OrganizationCustomPolicyRuleMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        debug_log_delivery_accounts: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.debugLogDeliveryAccounts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_parameters: {
            value: cdktn.stringToHclTerraform(struct!.inputParameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organization_config_rule_trigger_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationConfigRuleTriggerTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        policy_text: {
            value: cdktn.stringToHclTerraform(struct!.policyText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_id_scope: {
            value: cdktn.stringToHclTerraform(struct!.resourceIdScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_types_scope: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypesScope),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        runtime: {
            value: cdktn.stringToHclTerraform(struct!.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_key_scope: {
            value: cdktn.stringToHclTerraform(struct!.tagKeyScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_value_scope: {
            value: cdktn.stringToHclTerraform(struct!.tagValueScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationConfigRuleOrganizationCustomRuleMetadataPropertyToTerraform(struct?: CcOrganizationConfigRule.OrganizationCustomRuleMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        input_parameters: cdktn.stringToTerraform(struct!.inputParameters),
        lambda_function_arn: cdktn.stringToTerraform(struct!.lambdaFunctionArn),
        maximum_execution_frequency: cdktn.stringToTerraform(struct!.maximumExecutionFrequency),
        organization_config_rule_trigger_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.organizationConfigRuleTriggerTypes),
        resource_id_scope: cdktn.stringToTerraform(struct!.resourceIdScope),
        resource_types_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypesScope),
        tag_key_scope: cdktn.stringToTerraform(struct!.tagKeyScope),
        tag_value_scope: cdktn.stringToTerraform(struct!.tagValueScope),
    }
}


export function ccOrganizationConfigRuleOrganizationCustomRuleMetadataPropertyToHclTerraform(struct?: CcOrganizationConfigRule.OrganizationCustomRuleMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_parameters: {
            value: cdktn.stringToHclTerraform(struct!.inputParameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_function_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaFunctionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        maximum_execution_frequency: {
            value: cdktn.stringToHclTerraform(struct!.maximumExecutionFrequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organization_config_rule_trigger_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.organizationConfigRuleTriggerTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resource_id_scope: {
            value: cdktn.stringToHclTerraform(struct!.resourceIdScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_types_scope: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypesScope),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        tag_key_scope: {
            value: cdktn.stringToHclTerraform(struct!.tagKeyScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_value_scope: {
            value: cdktn.stringToHclTerraform(struct!.tagValueScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationConfigRuleOrganizationManagedRuleMetadataPropertyToTerraform(struct?: CcOrganizationConfigRule.OrganizationManagedRuleMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        input_parameters: cdktn.stringToTerraform(struct!.inputParameters),
        maximum_execution_frequency: cdktn.stringToTerraform(struct!.maximumExecutionFrequency),
        resource_id_scope: cdktn.stringToTerraform(struct!.resourceIdScope),
        resource_types_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypesScope),
        rule_identifier: cdktn.stringToTerraform(struct!.ruleIdentifier),
        tag_key_scope: cdktn.stringToTerraform(struct!.tagKeyScope),
        tag_value_scope: cdktn.stringToTerraform(struct!.tagValueScope),
    }
}


export function ccOrganizationConfigRuleOrganizationManagedRuleMetadataPropertyToHclTerraform(struct?: CcOrganizationConfigRule.OrganizationManagedRuleMetadataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_parameters: {
            value: cdktn.stringToHclTerraform(struct!.inputParameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        maximum_execution_frequency: {
            value: cdktn.stringToHclTerraform(struct!.maximumExecutionFrequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_id_scope: {
            value: cdktn.stringToHclTerraform(struct!.resourceIdScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_types_scope: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypesScope),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        rule_identifier: {
            value: cdktn.stringToHclTerraform(struct!.ruleIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_key_scope: {
            value: cdktn.stringToHclTerraform(struct!.tagKeyScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_value_scope: {
            value: cdktn.stringToHclTerraform(struct!.tagValueScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcOrganizationConfigRule {
export interface OrganizationCustomPolicyRuleMetadataProperty {
    /**
    * A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#debug_log_delivery_accounts CcOrganizationConfigRule#debug_log_delivery_accounts}
    */
    readonly debugLogDeliveryAccounts?: string[];
    /**
    * The description that you provide for your organization AWS Config rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#description CcOrganizationConfigRule#description}
    */
    readonly description?: string;
    /**
    * A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#input_parameters CcOrganizationConfigRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * The type of notification that initiates AWS Config to run an evaluation for a rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types CcOrganizationConfigRule#organization_config_rule_trigger_types}
    */
    readonly organizationConfigRuleTriggerTypes?: string[];
    /**
    * The policy definition containing the logic for your organization AWS Config Custom Policy rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#policy_text CcOrganizationConfigRule#policy_text}
    */
    readonly policyText?: string;
    /**
    * The ID of the AWS resource that was evaluated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#resource_id_scope CcOrganizationConfigRule#resource_id_scope}
    */
    readonly resourceIdScope?: string;
    /**
    * The type of the AWS resource that was evaluated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#resource_types_scope CcOrganizationConfigRule#resource_types_scope}
    */
    readonly resourceTypesScope?: string[];
    /**
    * The runtime system for your organization AWS Config Custom Policy rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#runtime CcOrganizationConfigRule#runtime}
    */
    readonly runtime?: string;
    /**
    * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#tag_key_scope CcOrganizationConfigRule#tag_key_scope}
    */
    readonly tagKeyScope?: string;
    /**
    * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#tag_value_scope CcOrganizationConfigRule#tag_value_scope}
    */
    readonly tagValueScope?: string;
}
export class OrganizationCustomPolicyRuleMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OrganizationCustomPolicyRuleMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._debugLogDeliveryAccounts !== undefined) {
            hasAnyValues = true;
            internalValueResult.debugLogDeliveryAccounts = this._debugLogDeliveryAccounts;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inputParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputParameters = this._inputParameters;
        }
        if (this._organizationConfigRuleTriggerTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationConfigRuleTriggerTypes = this._organizationConfigRuleTriggerTypes;
        }
        if (this._policyText !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyText = this._policyText;
        }
        if (this._resourceIdScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceIdScope = this._resourceIdScope;
        }
        if (this._resourceTypesScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTypesScope = this._resourceTypesScope;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        if (this._tagKeyScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagKeyScope = this._tagKeyScope;
        }
        if (this._tagValueScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagValueScope = this._tagValueScope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrganizationCustomPolicyRuleMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._debugLogDeliveryAccounts = undefined;
            this._description = undefined;
            this._inputParameters = undefined;
            this._organizationConfigRuleTriggerTypes = undefined;
            this._policyText = undefined;
            this._resourceIdScope = undefined;
            this._resourceTypesScope = undefined;
            this._runtime = undefined;
            this._tagKeyScope = undefined;
            this._tagValueScope = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._debugLogDeliveryAccounts = value.debugLogDeliveryAccounts;
            this._description = value.description;
            this._inputParameters = value.inputParameters;
            this._organizationConfigRuleTriggerTypes = value.organizationConfigRuleTriggerTypes;
            this._policyText = value.policyText;
            this._resourceIdScope = value.resourceIdScope;
            this._resourceTypesScope = value.resourceTypesScope;
            this._runtime = value.runtime;
            this._tagKeyScope = value.tagKeyScope;
            this._tagValueScope = value.tagValueScope;
        }
    }

    // debug_log_delivery_accounts - computed: true, optional: true, required: false
    private _debugLogDeliveryAccounts?: string[]; 
    public get debugLogDeliveryAccounts() {
        return this.getListAttribute('debug_log_delivery_accounts');
    }
    public set debugLogDeliveryAccounts(value: string[]) {
        this._debugLogDeliveryAccounts = value;
    }
    public resetDebugLogDeliveryAccounts() {
        this._debugLogDeliveryAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get debugLogDeliveryAccountsInput() {
        return this._debugLogDeliveryAccounts;
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

    // input_parameters - computed: true, optional: true, required: false
    private _inputParameters?: string; 
    public get inputParameters() {
        return this.getStringAttribute('input_parameters');
    }
    public set inputParameters(value: string) {
        this._inputParameters = value;
    }
    public resetInputParameters() {
        this._inputParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParametersInput() {
        return this._inputParameters;
    }

    // organization_config_rule_trigger_types - computed: true, optional: true, required: false
    private _organizationConfigRuleTriggerTypes?: string[]; 
    public get organizationConfigRuleTriggerTypes() {
        return this.getListAttribute('organization_config_rule_trigger_types');
    }
    public set organizationConfigRuleTriggerTypes(value: string[]) {
        this._organizationConfigRuleTriggerTypes = value;
    }
    public resetOrganizationConfigRuleTriggerTypes() {
        this._organizationConfigRuleTriggerTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationConfigRuleTriggerTypesInput() {
        return this._organizationConfigRuleTriggerTypes;
    }

    // policy_text - computed: true, optional: true, required: false
    private _policyText?: string; 
    public get policyText() {
        return this.getStringAttribute('policy_text');
    }
    public set policyText(value: string) {
        this._policyText = value;
    }
    public resetPolicyText() {
        this._policyText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTextInput() {
        return this._policyText;
    }

    // resource_id_scope - computed: true, optional: true, required: false
    private _resourceIdScope?: string; 
    public get resourceIdScope() {
        return this.getStringAttribute('resource_id_scope');
    }
    public set resourceIdScope(value: string) {
        this._resourceIdScope = value;
    }
    public resetResourceIdScope() {
        this._resourceIdScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdScopeInput() {
        return this._resourceIdScope;
    }

    // resource_types_scope - computed: true, optional: true, required: false
    private _resourceTypesScope?: string[]; 
    public get resourceTypesScope() {
        return this.getListAttribute('resource_types_scope');
    }
    public set resourceTypesScope(value: string[]) {
        this._resourceTypesScope = value;
    }
    public resetResourceTypesScope() {
        this._resourceTypesScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesScopeInput() {
        return this._resourceTypesScope;
    }

    // runtime - computed: true, optional: true, required: false
    private _runtime?: string; 
    public get runtime() {
        return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
        this._runtime = value;
    }
    public resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime;
    }

    // tag_key_scope - computed: true, optional: true, required: false
    private _tagKeyScope?: string; 
    public get tagKeyScope() {
        return this.getStringAttribute('tag_key_scope');
    }
    public set tagKeyScope(value: string) {
        this._tagKeyScope = value;
    }
    public resetTagKeyScope() {
        this._tagKeyScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyScopeInput() {
        return this._tagKeyScope;
    }

    // tag_value_scope - computed: true, optional: true, required: false
    private _tagValueScope?: string; 
    public get tagValueScope() {
        return this.getStringAttribute('tag_value_scope');
    }
    public set tagValueScope(value: string) {
        this._tagValueScope = value;
    }
    public resetTagValueScope() {
        this._tagValueScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueScopeInput() {
        return this._tagValueScope;
    }
}
export interface OrganizationCustomRuleMetadataProperty {
    /**
    * The description that you provide for your organization AWS Config rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#description CcOrganizationConfigRule#description}
    */
    readonly description?: string;
    /**
    * A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#input_parameters CcOrganizationConfigRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * The lambda function ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#lambda_function_arn CcOrganizationConfigRule#lambda_function_arn}
    */
    readonly lambdaFunctionArn?: string;
    /**
    * The maximum frequency with which AWS Config runs evaluations for a rule.Allowed values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#maximum_execution_frequency CcOrganizationConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * The type of notification that triggers AWS Config to run an evaluation for a rule. You can specify the following notification types:
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types CcOrganizationConfigRule#organization_config_rule_trigger_types}
    */
    readonly organizationConfigRuleTriggerTypes?: string[];
    /**
    * The ID of the AWS resource that was evaluated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#resource_id_scope CcOrganizationConfigRule#resource_id_scope}
    */
    readonly resourceIdScope?: string;
    /**
    * The type of the AWS resource that was evaluated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#resource_types_scope CcOrganizationConfigRule#resource_types_scope}
    */
    readonly resourceTypesScope?: string[];
    /**
    * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#tag_key_scope CcOrganizationConfigRule#tag_key_scope}
    */
    readonly tagKeyScope?: string;
    /**
    * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#tag_value_scope CcOrganizationConfigRule#tag_value_scope}
    */
    readonly tagValueScope?: string;
}
export class OrganizationCustomRuleMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OrganizationCustomRuleMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inputParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputParameters = this._inputParameters;
        }
        if (this._lambdaFunctionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
        }
        if (this._maximumExecutionFrequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumExecutionFrequency = this._maximumExecutionFrequency;
        }
        if (this._organizationConfigRuleTriggerTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationConfigRuleTriggerTypes = this._organizationConfigRuleTriggerTypes;
        }
        if (this._resourceIdScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceIdScope = this._resourceIdScope;
        }
        if (this._resourceTypesScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTypesScope = this._resourceTypesScope;
        }
        if (this._tagKeyScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagKeyScope = this._tagKeyScope;
        }
        if (this._tagValueScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagValueScope = this._tagValueScope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrganizationCustomRuleMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._inputParameters = undefined;
            this._lambdaFunctionArn = undefined;
            this._maximumExecutionFrequency = undefined;
            this._organizationConfigRuleTriggerTypes = undefined;
            this._resourceIdScope = undefined;
            this._resourceTypesScope = undefined;
            this._tagKeyScope = undefined;
            this._tagValueScope = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._inputParameters = value.inputParameters;
            this._lambdaFunctionArn = value.lambdaFunctionArn;
            this._maximumExecutionFrequency = value.maximumExecutionFrequency;
            this._organizationConfigRuleTriggerTypes = value.organizationConfigRuleTriggerTypes;
            this._resourceIdScope = value.resourceIdScope;
            this._resourceTypesScope = value.resourceTypesScope;
            this._tagKeyScope = value.tagKeyScope;
            this._tagValueScope = value.tagValueScope;
        }
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

    // input_parameters - computed: true, optional: true, required: false
    private _inputParameters?: string; 
    public get inputParameters() {
        return this.getStringAttribute('input_parameters');
    }
    public set inputParameters(value: string) {
        this._inputParameters = value;
    }
    public resetInputParameters() {
        this._inputParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParametersInput() {
        return this._inputParameters;
    }

    // lambda_function_arn - computed: true, optional: true, required: false
    private _lambdaFunctionArn?: string; 
    public get lambdaFunctionArn() {
        return this.getStringAttribute('lambda_function_arn');
    }
    public set lambdaFunctionArn(value: string) {
        this._lambdaFunctionArn = value;
    }
    public resetLambdaFunctionArn() {
        this._lambdaFunctionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionArnInput() {
        return this._lambdaFunctionArn;
    }

    // maximum_execution_frequency - computed: true, optional: true, required: false
    private _maximumExecutionFrequency?: string; 
    public get maximumExecutionFrequency() {
        return this.getStringAttribute('maximum_execution_frequency');
    }
    public set maximumExecutionFrequency(value: string) {
        this._maximumExecutionFrequency = value;
    }
    public resetMaximumExecutionFrequency() {
        this._maximumExecutionFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionFrequencyInput() {
        return this._maximumExecutionFrequency;
    }

    // organization_config_rule_trigger_types - computed: true, optional: true, required: false
    private _organizationConfigRuleTriggerTypes?: string[]; 
    public get organizationConfigRuleTriggerTypes() {
        return this.getListAttribute('organization_config_rule_trigger_types');
    }
    public set organizationConfigRuleTriggerTypes(value: string[]) {
        this._organizationConfigRuleTriggerTypes = value;
    }
    public resetOrganizationConfigRuleTriggerTypes() {
        this._organizationConfigRuleTriggerTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationConfigRuleTriggerTypesInput() {
        return this._organizationConfigRuleTriggerTypes;
    }

    // resource_id_scope - computed: true, optional: true, required: false
    private _resourceIdScope?: string; 
    public get resourceIdScope() {
        return this.getStringAttribute('resource_id_scope');
    }
    public set resourceIdScope(value: string) {
        this._resourceIdScope = value;
    }
    public resetResourceIdScope() {
        this._resourceIdScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdScopeInput() {
        return this._resourceIdScope;
    }

    // resource_types_scope - computed: true, optional: true, required: false
    private _resourceTypesScope?: string[]; 
    public get resourceTypesScope() {
        return this.getListAttribute('resource_types_scope');
    }
    public set resourceTypesScope(value: string[]) {
        this._resourceTypesScope = value;
    }
    public resetResourceTypesScope() {
        this._resourceTypesScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesScopeInput() {
        return this._resourceTypesScope;
    }

    // tag_key_scope - computed: true, optional: true, required: false
    private _tagKeyScope?: string; 
    public get tagKeyScope() {
        return this.getStringAttribute('tag_key_scope');
    }
    public set tagKeyScope(value: string) {
        this._tagKeyScope = value;
    }
    public resetTagKeyScope() {
        this._tagKeyScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyScopeInput() {
        return this._tagKeyScope;
    }

    // tag_value_scope - computed: true, optional: true, required: false
    private _tagValueScope?: string; 
    public get tagValueScope() {
        return this.getStringAttribute('tag_value_scope');
    }
    public set tagValueScope(value: string) {
        this._tagValueScope = value;
    }
    public resetTagValueScope() {
        this._tagValueScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueScopeInput() {
        return this._tagValueScope;
    }
}
export interface OrganizationManagedRuleMetadataProperty {
    /**
    * The description that you provide for your organization AWS Config rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#description CcOrganizationConfigRule#description}
    */
    readonly description?: string;
    /**
    * A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#input_parameters CcOrganizationConfigRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * The maximum frequency with which AWS Config runs evaluations for a rule. Valid Values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#maximum_execution_frequency CcOrganizationConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * The ID of the AWS resource that was evaluated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#resource_id_scope CcOrganizationConfigRule#resource_id_scope}
    */
    readonly resourceIdScope?: string;
    /**
    * The type of the AWS resource that was evaluated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#resource_types_scope CcOrganizationConfigRule#resource_types_scope}
    */
    readonly resourceTypesScope?: string[];
    /**
    * Required. For organization config managed rules, a predefined identifier from a list. For example, IAM_PASSWORD_POLICY is a managed rule. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#rule_identifier CcOrganizationConfigRule#rule_identifier}
    */
    readonly ruleIdentifier?: string;
    /**
    * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#tag_key_scope CcOrganizationConfigRule#tag_key_scope}
    */
    readonly tagKeyScope?: string;
    /**
    * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
    * 
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/config_organization_config_rule#tag_value_scope CcOrganizationConfigRule#tag_value_scope}
    */
    readonly tagValueScope?: string;
}
export class OrganizationManagedRuleMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OrganizationManagedRuleMetadataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._inputParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputParameters = this._inputParameters;
        }
        if (this._maximumExecutionFrequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumExecutionFrequency = this._maximumExecutionFrequency;
        }
        if (this._resourceIdScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceIdScope = this._resourceIdScope;
        }
        if (this._resourceTypesScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTypesScope = this._resourceTypesScope;
        }
        if (this._ruleIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleIdentifier = this._ruleIdentifier;
        }
        if (this._tagKeyScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagKeyScope = this._tagKeyScope;
        }
        if (this._tagValueScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagValueScope = this._tagValueScope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OrganizationManagedRuleMetadataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._inputParameters = undefined;
            this._maximumExecutionFrequency = undefined;
            this._resourceIdScope = undefined;
            this._resourceTypesScope = undefined;
            this._ruleIdentifier = undefined;
            this._tagKeyScope = undefined;
            this._tagValueScope = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._inputParameters = value.inputParameters;
            this._maximumExecutionFrequency = value.maximumExecutionFrequency;
            this._resourceIdScope = value.resourceIdScope;
            this._resourceTypesScope = value.resourceTypesScope;
            this._ruleIdentifier = value.ruleIdentifier;
            this._tagKeyScope = value.tagKeyScope;
            this._tagValueScope = value.tagValueScope;
        }
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

    // input_parameters - computed: true, optional: true, required: false
    private _inputParameters?: string; 
    public get inputParameters() {
        return this.getStringAttribute('input_parameters');
    }
    public set inputParameters(value: string) {
        this._inputParameters = value;
    }
    public resetInputParameters() {
        this._inputParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParametersInput() {
        return this._inputParameters;
    }

    // maximum_execution_frequency - computed: true, optional: true, required: false
    private _maximumExecutionFrequency?: string; 
    public get maximumExecutionFrequency() {
        return this.getStringAttribute('maximum_execution_frequency');
    }
    public set maximumExecutionFrequency(value: string) {
        this._maximumExecutionFrequency = value;
    }
    public resetMaximumExecutionFrequency() {
        this._maximumExecutionFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionFrequencyInput() {
        return this._maximumExecutionFrequency;
    }

    // resource_id_scope - computed: true, optional: true, required: false
    private _resourceIdScope?: string; 
    public get resourceIdScope() {
        return this.getStringAttribute('resource_id_scope');
    }
    public set resourceIdScope(value: string) {
        this._resourceIdScope = value;
    }
    public resetResourceIdScope() {
        this._resourceIdScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdScopeInput() {
        return this._resourceIdScope;
    }

    // resource_types_scope - computed: true, optional: true, required: false
    private _resourceTypesScope?: string[]; 
    public get resourceTypesScope() {
        return this.getListAttribute('resource_types_scope');
    }
    public set resourceTypesScope(value: string[]) {
        this._resourceTypesScope = value;
    }
    public resetResourceTypesScope() {
        this._resourceTypesScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesScopeInput() {
        return this._resourceTypesScope;
    }

    // rule_identifier - computed: true, optional: true, required: false
    private _ruleIdentifier?: string; 
    public get ruleIdentifier() {
        return this.getStringAttribute('rule_identifier');
    }
    public set ruleIdentifier(value: string) {
        this._ruleIdentifier = value;
    }
    public resetRuleIdentifier() {
        this._ruleIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleIdentifierInput() {
        return this._ruleIdentifier;
    }

    // tag_key_scope - computed: true, optional: true, required: false
    private _tagKeyScope?: string; 
    public get tagKeyScope() {
        return this.getStringAttribute('tag_key_scope');
    }
    public set tagKeyScope(value: string) {
        this._tagKeyScope = value;
    }
    public resetTagKeyScope() {
        this._tagKeyScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyScopeInput() {
        return this._tagKeyScope;
    }

    // tag_value_scope - computed: true, optional: true, required: false
    private _tagValueScope?: string; 
    public get tagValueScope() {
        return this.getStringAttribute('tag_value_scope');
    }
    public set tagValueScope(value: string) {
        this._tagValueScope = value;
    }
    public resetTagValueScope() {
        this._tagValueScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueScopeInput() {
        return this._tagValueScope;
    }
}
}
