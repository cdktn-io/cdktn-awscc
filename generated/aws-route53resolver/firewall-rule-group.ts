// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFirewallRuleGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * FirewallRules
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#firewall_rules CcFirewallRuleGroup#firewall_rules}
    */
    readonly firewallRules?: CcFirewallRuleGroup.FirewallRuleProperty[] | cdktn.IResolvable;
    /**
    * FirewallRuleGroupName
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#name CcFirewallRuleGroup#name}
    */
    readonly name?: string;
    /**
    * Tags
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#tags CcFirewallRuleGroup#tags}
    */
    readonly tags?: CcFirewallRuleGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group awscc_route53resolver_firewall_rule_group}
*/
export class CcFirewallRuleGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53resolver_firewall_rule_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFirewallRuleGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFirewallRuleGroup to import
    * @param importFromId The id of the existing CcFirewallRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFirewallRuleGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53resolver_firewall_rule_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group awscc_route53resolver_firewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFirewallRuleGroupProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcFirewallRuleGroupProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53resolver_firewall_rule_group',
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
        this._firewallRules.internalValue = config.firewallRules;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // creator_request_id - computed: true, optional: false, required: false
    public get creatorRequestId() {
        return this.getStringAttribute('creator_request_id');
    }

    // firewall_rule_group_id - computed: true, optional: false, required: false
    public get firewallRuleGroupId() {
        return this.getStringAttribute('firewall_rule_group_id');
    }

    // firewall_rules - computed: true, optional: true, required: false
    private _firewallRules = new CcFirewallRuleGroup.FirewallRulePropertyList(this, "firewall_rules", true);
    public get firewallRules() {
        return this._firewallRules;
    }
    public putFirewallRules(value: CcFirewallRuleGroup.FirewallRuleProperty[] | cdktn.IResolvable) {
        this._firewallRules.internalValue = value;
    }
    public resetFirewallRules() {
        this._firewallRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallRulesInput() {
        return this._firewallRules.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // modification_time - computed: true, optional: false, required: false
    public get modificationTime() {
        return this.getStringAttribute('modification_time');
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

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
        return this.getStringAttribute('owner_id');
    }

    // rule_count - computed: true, optional: false, required: false
    public get ruleCount() {
        return this.getNumberAttribute('rule_count');
    }

    // share_status - computed: true, optional: false, required: false
    public get shareStatus() {
        return this.getStringAttribute('share_status');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
        return this.getStringAttribute('status_message');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFirewallRuleGroup.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFirewallRuleGroup.TagProperty[] | cdktn.IResolvable) {
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
            firewall_rules: cdktn.listMapper(ccFirewallRuleGroupFirewallRulePropertyToTerraform, false)(this._firewallRules.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccFirewallRuleGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            firewall_rules: {
                value: cdktn.listMapperHcl(ccFirewallRuleGroupFirewallRulePropertyToHclTerraform, false)(this._firewallRules.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFirewallRuleGroup.FirewallRulePropertyList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFirewallRuleGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFirewallRuleGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFirewallRuleGroupFirewallAdvancedContentCategoryConfigPropertyToTerraform(struct?: CcFirewallRuleGroup.FirewallAdvancedContentCategoryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        category: cdktn.stringToTerraform(struct!.category),
    }
}


export function ccFirewallRuleGroupFirewallAdvancedContentCategoryConfigPropertyToHclTerraform(struct?: CcFirewallRuleGroup.FirewallAdvancedContentCategoryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        category: {
            value: cdktn.stringToHclTerraform(struct!.category),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallRuleGroupFirewallAdvancedThreatCategoryConfigPropertyToTerraform(struct?: CcFirewallRuleGroup.FirewallAdvancedThreatCategoryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        category: cdktn.stringToTerraform(struct!.category),
    }
}


export function ccFirewallRuleGroupFirewallAdvancedThreatCategoryConfigPropertyToHclTerraform(struct?: CcFirewallRuleGroup.FirewallAdvancedThreatCategoryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        category: {
            value: cdktn.stringToHclTerraform(struct!.category),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallRuleGroupPartnerThreatProtectionConfigPropertyToTerraform(struct?: CcFirewallRuleGroup.PartnerThreatProtectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        partner: cdktn.stringToTerraform(struct!.partner),
    }
}


export function ccFirewallRuleGroupPartnerThreatProtectionConfigPropertyToHclTerraform(struct?: CcFirewallRuleGroup.PartnerThreatProtectionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        partner: {
            value: cdktn.stringToHclTerraform(struct!.partner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallRuleGroupFirewallRuleTypePropertyToTerraform(struct?: CcFirewallRuleGroup.FirewallRuleTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        firewall_advanced_content_category: ccFirewallRuleGroupFirewallAdvancedContentCategoryConfigPropertyToTerraform(struct!.firewallAdvancedContentCategory),
        firewall_advanced_threat_category: ccFirewallRuleGroupFirewallAdvancedThreatCategoryConfigPropertyToTerraform(struct!.firewallAdvancedThreatCategory),
        partner_threat_protection: ccFirewallRuleGroupPartnerThreatProtectionConfigPropertyToTerraform(struct!.partnerThreatProtection),
    }
}


export function ccFirewallRuleGroupFirewallRuleTypePropertyToHclTerraform(struct?: CcFirewallRuleGroup.FirewallRuleTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        firewall_advanced_content_category: {
            value: ccFirewallRuleGroupFirewallAdvancedContentCategoryConfigPropertyToHclTerraform(struct!.firewallAdvancedContentCategory),
            isBlock: true,
            type: "struct",
            storageClassType: "FirewallAdvancedContentCategoryConfigProperty",
        },
        firewall_advanced_threat_category: {
            value: ccFirewallRuleGroupFirewallAdvancedThreatCategoryConfigPropertyToHclTerraform(struct!.firewallAdvancedThreatCategory),
            isBlock: true,
            type: "struct",
            storageClassType: "FirewallAdvancedThreatCategoryConfigProperty",
        },
        partner_threat_protection: {
            value: ccFirewallRuleGroupPartnerThreatProtectionConfigPropertyToHclTerraform(struct!.partnerThreatProtection),
            isBlock: true,
            type: "struct",
            storageClassType: "PartnerThreatProtectionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallRuleGroupFirewallRulePropertyToTerraform(struct?: CcFirewallRuleGroup.FirewallRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        block_override_dns_type: cdktn.stringToTerraform(struct!.blockOverrideDnsType),
        block_override_domain: cdktn.stringToTerraform(struct!.blockOverrideDomain),
        block_override_ttl: cdktn.numberToTerraform(struct!.blockOverrideTtl),
        block_response: cdktn.stringToTerraform(struct!.blockResponse),
        confidence_threshold: cdktn.stringToTerraform(struct!.confidenceThreshold),
        dns_threat_protection: cdktn.stringToTerraform(struct!.dnsThreatProtection),
        firewall_domain_list_id: cdktn.stringToTerraform(struct!.firewallDomainListId),
        firewall_domain_redirection_action: cdktn.stringToTerraform(struct!.firewallDomainRedirectionAction),
        firewall_rule_type: ccFirewallRuleGroupFirewallRuleTypePropertyToTerraform(struct!.firewallRuleType),
        firewall_threat_protection_id: cdktn.stringToTerraform(struct!.firewallThreatProtectionId),
        priority: cdktn.numberToTerraform(struct!.priority),
        qtype: cdktn.stringToTerraform(struct!.qtype),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccFirewallRuleGroupFirewallRulePropertyToHclTerraform(struct?: CcFirewallRuleGroup.FirewallRuleProperty | cdktn.IResolvable): any {
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
        block_override_dns_type: {
            value: cdktn.stringToHclTerraform(struct!.blockOverrideDnsType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        block_override_domain: {
            value: cdktn.stringToHclTerraform(struct!.blockOverrideDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        block_override_ttl: {
            value: cdktn.numberToHclTerraform(struct!.blockOverrideTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        block_response: {
            value: cdktn.stringToHclTerraform(struct!.blockResponse),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        confidence_threshold: {
            value: cdktn.stringToHclTerraform(struct!.confidenceThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dns_threat_protection: {
            value: cdktn.stringToHclTerraform(struct!.dnsThreatProtection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        firewall_domain_list_id: {
            value: cdktn.stringToHclTerraform(struct!.firewallDomainListId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        firewall_domain_redirection_action: {
            value: cdktn.stringToHclTerraform(struct!.firewallDomainRedirectionAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        firewall_rule_type: {
            value: ccFirewallRuleGroupFirewallRuleTypePropertyToHclTerraform(struct!.firewallRuleType),
            isBlock: true,
            type: "struct",
            storageClassType: "FirewallRuleTypeProperty",
        },
        firewall_threat_protection_id: {
            value: cdktn.stringToHclTerraform(struct!.firewallThreatProtectionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        qtype: {
            value: cdktn.stringToHclTerraform(struct!.qtype),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallRuleGroupTagPropertyToTerraform(struct?: CcFirewallRuleGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFirewallRuleGroupTagPropertyToHclTerraform(struct?: CcFirewallRuleGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFirewallRuleGroup {
export interface FirewallAdvancedContentCategoryConfigProperty {
    /**
    * The content category value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#category CcFirewallRuleGroup#category}
    */
    readonly category?: string;
}
export class FirewallAdvancedContentCategoryConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirewallAdvancedContentCategoryConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._category !== undefined) {
            hasAnyValues = true;
            internalValueResult.category = this._category;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirewallAdvancedContentCategoryConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._category = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._category = value.category;
        }
    }

    // category - computed: true, optional: true, required: false
    private _category?: string; 
    public get category() {
        return this.getStringAttribute('category');
    }
    public set category(value: string) {
        this._category = value;
    }
    public resetCategory() {
        this._category = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryInput() {
        return this._category;
    }
}
export interface FirewallAdvancedThreatCategoryConfigProperty {
    /**
    * The threat category value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#category CcFirewallRuleGroup#category}
    */
    readonly category?: string;
}
export class FirewallAdvancedThreatCategoryConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirewallAdvancedThreatCategoryConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._category !== undefined) {
            hasAnyValues = true;
            internalValueResult.category = this._category;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirewallAdvancedThreatCategoryConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._category = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._category = value.category;
        }
    }

    // category - computed: true, optional: true, required: false
    private _category?: string; 
    public get category() {
        return this.getStringAttribute('category');
    }
    public set category(value: string) {
        this._category = value;
    }
    public resetCategory() {
        this._category = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get categoryInput() {
        return this._category;
    }
}
export interface PartnerThreatProtectionConfigProperty {
    /**
    * The partner identifier value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#partner CcFirewallRuleGroup#partner}
    */
    readonly partner?: string;
}
export class PartnerThreatProtectionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PartnerThreatProtectionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._partner !== undefined) {
            hasAnyValues = true;
            internalValueResult.partner = this._partner;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PartnerThreatProtectionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._partner = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._partner = value.partner;
        }
    }

    // partner - computed: true, optional: true, required: false
    private _partner?: string; 
    public get partner() {
        return this.getStringAttribute('partner');
    }
    public set partner(value: string) {
        this._partner = value;
    }
    public resetPartner() {
        this._partner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partnerInput() {
        return this._partner;
    }
}
export interface FirewallRuleTypeProperty {
    /**
    * Configuration for an advanced content category rule type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_content_category CcFirewallRuleGroup#firewall_advanced_content_category}
    */
    readonly firewallAdvancedContentCategory?: FirewallAdvancedContentCategoryConfigProperty;
    /**
    * Configuration for an advanced threat category rule type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_threat_category CcFirewallRuleGroup#firewall_advanced_threat_category}
    */
    readonly firewallAdvancedThreatCategory?: FirewallAdvancedThreatCategoryConfigProperty;
    /**
    * Configuration for a partner threat protection rule type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#partner_threat_protection CcFirewallRuleGroup#partner_threat_protection}
    */
    readonly partnerThreatProtection?: PartnerThreatProtectionConfigProperty;
}
export class FirewallRuleTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirewallRuleTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._firewallAdvancedContentCategory?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firewallAdvancedContentCategory = this._firewallAdvancedContentCategory?.internalValue;
        }
        if (this._firewallAdvancedThreatCategory?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firewallAdvancedThreatCategory = this._firewallAdvancedThreatCategory?.internalValue;
        }
        if (this._partnerThreatProtection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.partnerThreatProtection = this._partnerThreatProtection?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirewallRuleTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._firewallAdvancedContentCategory.internalValue = undefined;
            this._firewallAdvancedThreatCategory.internalValue = undefined;
            this._partnerThreatProtection.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._firewallAdvancedContentCategory.internalValue = value.firewallAdvancedContentCategory;
            this._firewallAdvancedThreatCategory.internalValue = value.firewallAdvancedThreatCategory;
            this._partnerThreatProtection.internalValue = value.partnerThreatProtection;
        }
    }

    // firewall_advanced_content_category - computed: true, optional: true, required: false
    private _firewallAdvancedContentCategory = new FirewallAdvancedContentCategoryConfigPropertyOutputReference(this, "firewall_advanced_content_category");
    public get firewallAdvancedContentCategory() {
        return this._firewallAdvancedContentCategory;
    }
    public putFirewallAdvancedContentCategory(value: FirewallAdvancedContentCategoryConfigProperty) {
        this._firewallAdvancedContentCategory.internalValue = value;
    }
    public resetFirewallAdvancedContentCategory() {
        this._firewallAdvancedContentCategory.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallAdvancedContentCategoryInput() {
        return this._firewallAdvancedContentCategory.internalValue;
    }

    // firewall_advanced_threat_category - computed: true, optional: true, required: false
    private _firewallAdvancedThreatCategory = new FirewallAdvancedThreatCategoryConfigPropertyOutputReference(this, "firewall_advanced_threat_category");
    public get firewallAdvancedThreatCategory() {
        return this._firewallAdvancedThreatCategory;
    }
    public putFirewallAdvancedThreatCategory(value: FirewallAdvancedThreatCategoryConfigProperty) {
        this._firewallAdvancedThreatCategory.internalValue = value;
    }
    public resetFirewallAdvancedThreatCategory() {
        this._firewallAdvancedThreatCategory.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallAdvancedThreatCategoryInput() {
        return this._firewallAdvancedThreatCategory.internalValue;
    }

    // partner_threat_protection - computed: true, optional: true, required: false
    private _partnerThreatProtection = new PartnerThreatProtectionConfigPropertyOutputReference(this, "partner_threat_protection");
    public get partnerThreatProtection() {
        return this._partnerThreatProtection;
    }
    public putPartnerThreatProtection(value: PartnerThreatProtectionConfigProperty) {
        this._partnerThreatProtection.internalValue = value;
    }
    public resetPartnerThreatProtection() {
        this._partnerThreatProtection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partnerThreatProtectionInput() {
        return this._partnerThreatProtection.internalValue;
    }
}
export interface FirewallRuleProperty {
    /**
    * Rule Action
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#action CcFirewallRuleGroup#action}
    */
    readonly action?: string;
    /**
    * BlockOverrideDnsType
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#block_override_dns_type CcFirewallRuleGroup#block_override_dns_type}
    */
    readonly blockOverrideDnsType?: string;
    /**
    * BlockOverrideDomain
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#block_override_domain CcFirewallRuleGroup#block_override_domain}
    */
    readonly blockOverrideDomain?: string;
    /**
    * BlockOverrideTtl
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#block_override_ttl CcFirewallRuleGroup#block_override_ttl}
    */
    readonly blockOverrideTtl?: number;
    /**
    * BlockResponse
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#block_response CcFirewallRuleGroup#block_response}
    */
    readonly blockResponse?: string;
    /**
    * ConfidenceThreshold
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#confidence_threshold CcFirewallRuleGroup#confidence_threshold}
    */
    readonly confidenceThreshold?: string;
    /**
    * DnsThreatProtection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#dns_threat_protection CcFirewallRuleGroup#dns_threat_protection}
    */
    readonly dnsThreatProtection?: string;
    /**
    * ResourceId
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#firewall_domain_list_id CcFirewallRuleGroup#firewall_domain_list_id}
    */
    readonly firewallDomainListId?: string;
    /**
    * FirewallDomainRedirectionAction
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#firewall_domain_redirection_action CcFirewallRuleGroup#firewall_domain_redirection_action}
    */
    readonly firewallDomainRedirectionAction?: string;
    /**
    * Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#firewall_rule_type CcFirewallRuleGroup#firewall_rule_type}
    */
    readonly firewallRuleType?: FirewallRuleTypeProperty;
    /**
    * ResourceId
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#firewall_threat_protection_id CcFirewallRuleGroup#firewall_threat_protection_id}
    */
    readonly firewallThreatProtectionId?: string;
    /**
    * Rule Priority
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#priority CcFirewallRuleGroup#priority}
    */
    readonly priority?: number;
    /**
    * Qtype
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#qtype CcFirewallRuleGroup#qtype}
    */
    readonly qtype?: string;
    /**
    * The status of the firewall rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#status CcFirewallRuleGroup#status}
    */
    readonly status?: string;
}
export class FirewallRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FirewallRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._blockOverrideDnsType !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockOverrideDnsType = this._blockOverrideDnsType;
        }
        if (this._blockOverrideDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockOverrideDomain = this._blockOverrideDomain;
        }
        if (this._blockOverrideTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockOverrideTtl = this._blockOverrideTtl;
        }
        if (this._blockResponse !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockResponse = this._blockResponse;
        }
        if (this._confidenceThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.confidenceThreshold = this._confidenceThreshold;
        }
        if (this._dnsThreatProtection !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsThreatProtection = this._dnsThreatProtection;
        }
        if (this._firewallDomainListId !== undefined) {
            hasAnyValues = true;
            internalValueResult.firewallDomainListId = this._firewallDomainListId;
        }
        if (this._firewallDomainRedirectionAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.firewallDomainRedirectionAction = this._firewallDomainRedirectionAction;
        }
        if (this._firewallRuleType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firewallRuleType = this._firewallRuleType?.internalValue;
        }
        if (this._firewallThreatProtectionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.firewallThreatProtectionId = this._firewallThreatProtectionId;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._qtype !== undefined) {
            hasAnyValues = true;
            internalValueResult.qtype = this._qtype;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirewallRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._blockOverrideDnsType = undefined;
            this._blockOverrideDomain = undefined;
            this._blockOverrideTtl = undefined;
            this._blockResponse = undefined;
            this._confidenceThreshold = undefined;
            this._dnsThreatProtection = undefined;
            this._firewallDomainListId = undefined;
            this._firewallDomainRedirectionAction = undefined;
            this._firewallRuleType.internalValue = undefined;
            this._firewallThreatProtectionId = undefined;
            this._priority = undefined;
            this._qtype = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._blockOverrideDnsType = value.blockOverrideDnsType;
            this._blockOverrideDomain = value.blockOverrideDomain;
            this._blockOverrideTtl = value.blockOverrideTtl;
            this._blockResponse = value.blockResponse;
            this._confidenceThreshold = value.confidenceThreshold;
            this._dnsThreatProtection = value.dnsThreatProtection;
            this._firewallDomainListId = value.firewallDomainListId;
            this._firewallDomainRedirectionAction = value.firewallDomainRedirectionAction;
            this._firewallRuleType.internalValue = value.firewallRuleType;
            this._firewallThreatProtectionId = value.firewallThreatProtectionId;
            this._priority = value.priority;
            this._qtype = value.qtype;
            this._status = value.status;
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

    // block_override_dns_type - computed: true, optional: true, required: false
    private _blockOverrideDnsType?: string; 
    public get blockOverrideDnsType() {
        return this.getStringAttribute('block_override_dns_type');
    }
    public set blockOverrideDnsType(value: string) {
        this._blockOverrideDnsType = value;
    }
    public resetBlockOverrideDnsType() {
        this._blockOverrideDnsType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockOverrideDnsTypeInput() {
        return this._blockOverrideDnsType;
    }

    // block_override_domain - computed: true, optional: true, required: false
    private _blockOverrideDomain?: string; 
    public get blockOverrideDomain() {
        return this.getStringAttribute('block_override_domain');
    }
    public set blockOverrideDomain(value: string) {
        this._blockOverrideDomain = value;
    }
    public resetBlockOverrideDomain() {
        this._blockOverrideDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockOverrideDomainInput() {
        return this._blockOverrideDomain;
    }

    // block_override_ttl - computed: true, optional: true, required: false
    private _blockOverrideTtl?: number; 
    public get blockOverrideTtl() {
        return this.getNumberAttribute('block_override_ttl');
    }
    public set blockOverrideTtl(value: number) {
        this._blockOverrideTtl = value;
    }
    public resetBlockOverrideTtl() {
        this._blockOverrideTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockOverrideTtlInput() {
        return this._blockOverrideTtl;
    }

    // block_response - computed: true, optional: true, required: false
    private _blockResponse?: string; 
    public get blockResponse() {
        return this.getStringAttribute('block_response');
    }
    public set blockResponse(value: string) {
        this._blockResponse = value;
    }
    public resetBlockResponse() {
        this._blockResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockResponseInput() {
        return this._blockResponse;
    }

    // confidence_threshold - computed: true, optional: true, required: false
    private _confidenceThreshold?: string; 
    public get confidenceThreshold() {
        return this.getStringAttribute('confidence_threshold');
    }
    public set confidenceThreshold(value: string) {
        this._confidenceThreshold = value;
    }
    public resetConfidenceThreshold() {
        this._confidenceThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confidenceThresholdInput() {
        return this._confidenceThreshold;
    }

    // dns_threat_protection - computed: true, optional: true, required: false
    private _dnsThreatProtection?: string; 
    public get dnsThreatProtection() {
        return this.getStringAttribute('dns_threat_protection');
    }
    public set dnsThreatProtection(value: string) {
        this._dnsThreatProtection = value;
    }
    public resetDnsThreatProtection() {
        this._dnsThreatProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsThreatProtectionInput() {
        return this._dnsThreatProtection;
    }

    // firewall_domain_list_id - computed: true, optional: true, required: false
    private _firewallDomainListId?: string; 
    public get firewallDomainListId() {
        return this.getStringAttribute('firewall_domain_list_id');
    }
    public set firewallDomainListId(value: string) {
        this._firewallDomainListId = value;
    }
    public resetFirewallDomainListId() {
        this._firewallDomainListId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallDomainListIdInput() {
        return this._firewallDomainListId;
    }

    // firewall_domain_redirection_action - computed: true, optional: true, required: false
    private _firewallDomainRedirectionAction?: string; 
    public get firewallDomainRedirectionAction() {
        return this.getStringAttribute('firewall_domain_redirection_action');
    }
    public set firewallDomainRedirectionAction(value: string) {
        this._firewallDomainRedirectionAction = value;
    }
    public resetFirewallDomainRedirectionAction() {
        this._firewallDomainRedirectionAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallDomainRedirectionActionInput() {
        return this._firewallDomainRedirectionAction;
    }

    // firewall_rule_type - computed: true, optional: true, required: false
    private _firewallRuleType = new FirewallRuleTypePropertyOutputReference(this, "firewall_rule_type");
    public get firewallRuleType() {
        return this._firewallRuleType;
    }
    public putFirewallRuleType(value: FirewallRuleTypeProperty) {
        this._firewallRuleType.internalValue = value;
    }
    public resetFirewallRuleType() {
        this._firewallRuleType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallRuleTypeInput() {
        return this._firewallRuleType.internalValue;
    }

    // firewall_threat_protection_id - computed: true, optional: true, required: false
    private _firewallThreatProtectionId?: string; 
    public get firewallThreatProtectionId() {
        return this.getStringAttribute('firewall_threat_protection_id');
    }
    public set firewallThreatProtectionId(value: string) {
        this._firewallThreatProtectionId = value;
    }
    public resetFirewallThreatProtectionId() {
        this._firewallThreatProtectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallThreatProtectionIdInput() {
        return this._firewallThreatProtectionId;
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

    // qtype - computed: true, optional: true, required: false
    private _qtype?: string; 
    public get qtype() {
        return this.getStringAttribute('qtype');
    }
    public set qtype(value: string) {
        this._qtype = value;
    }
    public resetQtype() {
        this._qtype = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qtypeInput() {
        return this._qtype;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}

export class FirewallRulePropertyList extends cdktn.ComplexList {
    public internalValue? : FirewallRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): FirewallRulePropertyOutputReference {
        return new FirewallRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#key CcFirewallRuleGroup#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_firewall_rule_group#value CcFirewallRuleGroup#value}
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
