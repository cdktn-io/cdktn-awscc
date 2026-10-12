// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * List of templates and rules associated with this policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#associated_template_and_rule_list CcPolicy#associated_template_and_rule_list}
    */
    readonly associatedTemplateAndRuleList?: CcPolicy.AssociatedTemplateAndRuleListProperty[] | cdktn.IResolvable;
    /**
    * The type of firewall.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#firewall_type CcPolicy#firewall_type}
    */
    readonly firewallType: string;
    /**
    * Configuration settings for policy behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_configuration CcPolicy#policy_configuration}
    */
    readonly policyConfiguration: CcPolicy.PolicyConfigurationProperty;
    /**
    * A description of the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_description CcPolicy#policy_description}
    */
    readonly policyDescription?: string;
    /**
    * The name of the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_name CcPolicy#policy_name}
    */
    readonly policyName: string;
    /**
    * The priority of the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#priority CcPolicy#priority}
    */
    readonly priority: number;
    /**
    * The tags associated with the policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#tags CcPolicy#tags}
    */
    readonly tags?: CcPolicy.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy awscc_networksecuritymanager_policy}
*/
export class CcPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networksecuritymanager_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicy to import
    * @param importFromId The id of the existing CcPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networksecuritymanager_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy awscc_networksecuritymanager_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networksecuritymanager_policy',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.105.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._associatedTemplateAndRuleList.internalValue = config.associatedTemplateAndRuleList;
        this._firewallType = config.firewallType;
        this._policyConfiguration.internalValue = config.policyConfiguration;
        this._policyDescription = config.policyDescription;
        this._policyName = config.policyName;
        this._priority = config.priority;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // associated_template_and_rule_list - computed: true, optional: true, required: false
    private _associatedTemplateAndRuleList = new CcPolicy.AssociatedTemplateAndRuleListPropertyList(this, "associated_template_and_rule_list", false);
    public get associatedTemplateAndRuleList() {
        return this._associatedTemplateAndRuleList;
    }
    public putAssociatedTemplateAndRuleList(value: CcPolicy.AssociatedTemplateAndRuleListProperty[] | cdktn.IResolvable) {
        this._associatedTemplateAndRuleList.internalValue = value;
    }
    public resetAssociatedTemplateAndRuleList() {
        this._associatedTemplateAndRuleList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associatedTemplateAndRuleListInput() {
        return this._associatedTemplateAndRuleList.internalValue;
    }

    // firewall_type - computed: false, optional: false, required: true
    private _firewallType?: string; 
    public get firewallType() {
        return this.getStringAttribute('firewall_type');
    }
    public set firewallType(value: string) {
        this._firewallType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallTypeInput() {
        return this._firewallType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy_arn - computed: true, optional: false, required: false
    public get policyArn() {
        return this.getStringAttribute('policy_arn');
    }

    // policy_configuration - computed: false, optional: false, required: true
    private _policyConfiguration = new CcPolicy.PolicyConfigurationPropertyOutputReference(this, "policy_configuration");
    public get policyConfiguration() {
        return this._policyConfiguration;
    }
    public putPolicyConfiguration(value: CcPolicy.PolicyConfigurationProperty) {
        this._policyConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyConfigurationInput() {
        return this._policyConfiguration.internalValue;
    }

    // policy_description - computed: true, optional: true, required: false
    private _policyDescription?: string; 
    public get policyDescription() {
        return this.getStringAttribute('policy_description');
    }
    public set policyDescription(value: string) {
        this._policyDescription = value;
    }
    public resetPolicyDescription() {
        this._policyDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDescriptionInput() {
        return this._policyDescription;
    }

    // policy_id - computed: true, optional: false, required: false
    public get policyId() {
        return this.getStringAttribute('policy_id');
    }

    // policy_name - computed: false, optional: false, required: true
    private _policyName?: string; 
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
        this._policyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
        return this._policyName;
    }

    // priority - computed: false, optional: false, required: true
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPolicy.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPolicy.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            associated_template_and_rule_list: cdktn.listMapper(ccPolicyAssociatedTemplateAndRuleListPropertyToTerraform, false)(this._associatedTemplateAndRuleList.internalValue),
            firewall_type: cdktn.stringToTerraform(this._firewallType),
            policy_configuration: ccPolicyPolicyConfigurationPropertyToTerraform(this._policyConfiguration.internalValue),
            policy_description: cdktn.stringToTerraform(this._policyDescription),
            policy_name: cdktn.stringToTerraform(this._policyName),
            priority: cdktn.numberToTerraform(this._priority),
            tags: cdktn.listMapper(ccPolicyTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            associated_template_and_rule_list: {
                value: cdktn.listMapperHcl(ccPolicyAssociatedTemplateAndRuleListPropertyToHclTerraform, false)(this._associatedTemplateAndRuleList.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPolicy.AssociatedTemplateAndRuleListPropertyList",
            },
            firewall_type: {
                value: cdktn.stringToHclTerraform(this._firewallType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_configuration: {
                value: ccPolicyPolicyConfigurationPropertyToHclTerraform(this._policyConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicy.PolicyConfigurationProperty",
            },
            policy_description: {
                value: cdktn.stringToHclTerraform(this._policyDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_name: {
                value: cdktn.stringToHclTerraform(this._policyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            priority: {
                value: cdktn.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPolicyTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcPolicy.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPolicyAssociatedTemplateAndRuleListPropertyToTerraform(struct?: CcPolicy.AssociatedTemplateAndRuleListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rule_arn: cdktn.stringToTerraform(struct!.ruleArn),
        template_arn: cdktn.stringToTerraform(struct!.templateArn),
    }
}


export function ccPolicyAssociatedTemplateAndRuleListPropertyToHclTerraform(struct?: CcPolicy.AssociatedTemplateAndRuleListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rule_arn: {
            value: cdktn.stringToHclTerraform(struct!.ruleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template_arn: {
            value: cdktn.stringToHclTerraform(struct!.templateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyWafConfigPropertyToTerraform(struct?: CcPolicy.WafConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        conflict_resolution: cdktn.stringToTerraform(struct!.conflictResolution),
        existing_customer_web_acl_resolution: cdktn.stringToTerraform(struct!.existingCustomerWebAclResolution),
    }
}


export function ccPolicyWafConfigPropertyToHclTerraform(struct?: CcPolicy.WafConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        conflict_resolution: {
            value: cdktn.stringToHclTerraform(struct!.conflictResolution),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        existing_customer_web_acl_resolution: {
            value: cdktn.stringToHclTerraform(struct!.existingCustomerWebAclResolution),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyPolicyConfigurationPropertyToTerraform(struct?: CcPolicy.PolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        remediation_enabled: cdktn.booleanToTerraform(struct!.remediationEnabled),
        resources_clean_up: cdktn.booleanToTerraform(struct!.resourcesCleanUp),
        waf_config: ccPolicyWafConfigPropertyToTerraform(struct!.wafConfig),
    }
}


export function ccPolicyPolicyConfigurationPropertyToHclTerraform(struct?: CcPolicy.PolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        remediation_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.remediationEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        resources_clean_up: {
            value: cdktn.booleanToHclTerraform(struct!.resourcesCleanUp),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        waf_config: {
            value: ccPolicyWafConfigPropertyToHclTerraform(struct!.wafConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "WafConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyTagsPropertyToTerraform(struct?: CcPolicy.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPolicyTagsPropertyToHclTerraform(struct?: CcPolicy.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcPolicy {
export interface AssociatedTemplateAndRuleListProperty {
    /**
    * ARN of the associated rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#rule_arn CcPolicy#rule_arn}
    */
    readonly ruleArn?: string;
    /**
    * ARN of the associated template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#template_arn CcPolicy#template_arn}
    */
    readonly templateArn?: string;
}
export class AssociatedTemplateAndRuleListPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AssociatedTemplateAndRuleListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ruleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleArn = this._ruleArn;
        }
        if (this._templateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateArn = this._templateArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AssociatedTemplateAndRuleListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ruleArn = undefined;
            this._templateArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ruleArn = value.ruleArn;
            this._templateArn = value.templateArn;
        }
    }

    // rule_arn - computed: true, optional: true, required: false
    private _ruleArn?: string; 
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
    }
    public set ruleArn(value: string) {
        this._ruleArn = value;
    }
    public resetRuleArn() {
        this._ruleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleArnInput() {
        return this._ruleArn;
    }

    // template_arn - computed: true, optional: true, required: false
    private _templateArn?: string; 
    public get templateArn() {
        return this.getStringAttribute('template_arn');
    }
    public set templateArn(value: string) {
        this._templateArn = value;
    }
    public resetTemplateArn() {
        this._templateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateArnInput() {
        return this._templateArn;
    }
}

export class AssociatedTemplateAndRuleListPropertyList extends cdktn.ComplexList {
    public internalValue? : AssociatedTemplateAndRuleListProperty[] | cdktn.IResolvable

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
    public get(index: number): AssociatedTemplateAndRuleListPropertyOutputReference {
        return new AssociatedTemplateAndRuleListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WafConfigProperty {
    /**
    * Conflict-resolution strategy applied to AWS WAF policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#conflict_resolution CcPolicy#conflict_resolution}
    */
    readonly conflictResolution?: string;
    /**
    * Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution CcPolicy#existing_customer_web_acl_resolution}
    */
    readonly existingCustomerWebAclResolution?: string;
}
export class WafConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WafConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conflictResolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.conflictResolution = this._conflictResolution;
        }
        if (this._existingCustomerWebAclResolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.existingCustomerWebAclResolution = this._existingCustomerWebAclResolution;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WafConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conflictResolution = undefined;
            this._existingCustomerWebAclResolution = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conflictResolution = value.conflictResolution;
            this._existingCustomerWebAclResolution = value.existingCustomerWebAclResolution;
        }
    }

    // conflict_resolution - computed: true, optional: true, required: false
    private _conflictResolution?: string; 
    public get conflictResolution() {
        return this.getStringAttribute('conflict_resolution');
    }
    public set conflictResolution(value: string) {
        this._conflictResolution = value;
    }
    public resetConflictResolution() {
        this._conflictResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conflictResolutionInput() {
        return this._conflictResolution;
    }

    // existing_customer_web_acl_resolution - computed: true, optional: true, required: false
    private _existingCustomerWebAclResolution?: string; 
    public get existingCustomerWebAclResolution() {
        return this.getStringAttribute('existing_customer_web_acl_resolution');
    }
    public set existingCustomerWebAclResolution(value: string) {
        this._existingCustomerWebAclResolution = value;
    }
    public resetExistingCustomerWebAclResolution() {
        this._existingCustomerWebAclResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get existingCustomerWebAclResolutionInput() {
        return this._existingCustomerWebAclResolution;
    }
}
export interface PolicyConfigurationProperty {
    /**
    * Controls automatic remediation of non-compliant resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#remediation_enabled CcPolicy#remediation_enabled}
    */
    readonly remediationEnabled?: boolean | cdktn.IResolvable;
    /**
    * Controls automatic cleanup of unused resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#resources_clean_up CcPolicy#resources_clean_up}
    */
    readonly resourcesCleanUp?: boolean | cdktn.IResolvable;
    /**
    * WAF-specific policy settings. Populated only for WAF firewall type policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#waf_config CcPolicy#waf_config}
    */
    readonly wafConfig?: WafConfigProperty;
}
export class PolicyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._remediationEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.remediationEnabled = this._remediationEnabled;
        }
        if (this._resourcesCleanUp !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourcesCleanUp = this._resourcesCleanUp;
        }
        if (this._wafConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.wafConfig = this._wafConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._remediationEnabled = undefined;
            this._resourcesCleanUp = undefined;
            this._wafConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._remediationEnabled = value.remediationEnabled;
            this._resourcesCleanUp = value.resourcesCleanUp;
            this._wafConfig.internalValue = value.wafConfig;
        }
    }

    // remediation_enabled - computed: true, optional: true, required: false
    private _remediationEnabled?: boolean | cdktn.IResolvable; 
    public get remediationEnabled() {
        return this.getBooleanAttribute('remediation_enabled');
    }
    public set remediationEnabled(value: boolean | cdktn.IResolvable) {
        this._remediationEnabled = value;
    }
    public resetRemediationEnabled() {
        this._remediationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remediationEnabledInput() {
        return this._remediationEnabled;
    }

    // resources_clean_up - computed: true, optional: true, required: false
    private _resourcesCleanUp?: boolean | cdktn.IResolvable; 
    public get resourcesCleanUp() {
        return this.getBooleanAttribute('resources_clean_up');
    }
    public set resourcesCleanUp(value: boolean | cdktn.IResolvable) {
        this._resourcesCleanUp = value;
    }
    public resetResourcesCleanUp() {
        this._resourcesCleanUp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesCleanUpInput() {
        return this._resourcesCleanUp;
    }

    // waf_config - computed: true, optional: true, required: false
    private _wafConfig = new WafConfigPropertyOutputReference(this, "waf_config");
    public get wafConfig() {
        return this._wafConfig;
    }
    public putWafConfig(value: WafConfigProperty) {
        this._wafConfig.internalValue = value;
    }
    public resetWafConfig() {
        this._wafConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wafConfigInput() {
        return this._wafConfig.internalValue;
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#key CcPolicy#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#value CcPolicy#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
