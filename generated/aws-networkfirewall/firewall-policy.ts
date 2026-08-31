// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFirewallPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#description CcFirewallPolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#firewall_policy CcFirewallPolicy#firewall_policy}
    */
    readonly firewallPolicy: CcFirewallPolicy.FirewallPolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#firewall_policy_name CcFirewallPolicy#firewall_policy_name}
    */
    readonly firewallPolicyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#tags CcFirewallPolicy#tags}
    */
    readonly tags?: CcFirewallPolicy.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy awscc_networkfirewall_firewall_policy}
*/
export class CcFirewallPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkfirewall_firewall_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFirewallPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFirewallPolicy to import
    * @param importFromId The id of the existing CcFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFirewallPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkfirewall_firewall_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy awscc_networkfirewall_firewall_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFirewallPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcFirewallPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkfirewall_firewall_policy',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
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
        this._firewallPolicy.internalValue = config.firewallPolicy;
        this._firewallPolicyName = config.firewallPolicyName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // firewall_policy - computed: false, optional: false, required: true
    private _firewallPolicy = new CcFirewallPolicy.FirewallPolicyPropertyOutputReference(this, "firewall_policy");
    public get firewallPolicy() {
        return this._firewallPolicy;
    }
    public putFirewallPolicy(value: CcFirewallPolicy.FirewallPolicyProperty) {
        this._firewallPolicy.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallPolicyInput() {
        return this._firewallPolicy.internalValue;
    }

    // firewall_policy_arn - computed: true, optional: false, required: false
    public get firewallPolicyArn() {
        return this.getStringAttribute('firewall_policy_arn');
    }

    // firewall_policy_id - computed: true, optional: false, required: false
    public get firewallPolicyId() {
        return this.getStringAttribute('firewall_policy_id');
    }

    // firewall_policy_name - computed: false, optional: false, required: true
    private _firewallPolicyName?: string; 
    public get firewallPolicyName() {
        return this.getStringAttribute('firewall_policy_name');
    }
    public set firewallPolicyName(value: string) {
        this._firewallPolicyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallPolicyNameInput() {
        return this._firewallPolicyName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFirewallPolicy.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFirewallPolicy.TagProperty[] | cdktn.IResolvable) {
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
            firewall_policy: ccFirewallPolicyFirewallPolicyPropertyToTerraform(this._firewallPolicy.internalValue),
            firewall_policy_name: cdktn.stringToTerraform(this._firewallPolicyName),
            tags: cdktn.listMapper(ccFirewallPolicyTagPropertyToTerraform, false)(this._tags.internalValue),
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
            firewall_policy: {
                value: ccFirewallPolicyFirewallPolicyPropertyToHclTerraform(this._firewallPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFirewallPolicy.FirewallPolicyProperty",
            },
            firewall_policy_name: {
                value: cdktn.stringToHclTerraform(this._firewallPolicyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFirewallPolicyTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFirewallPolicy.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFirewallPolicyIPSetPropertyToTerraform(struct?: CcFirewallPolicy.IPSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        definition: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.definition),
    }
}


export function ccFirewallPolicyIPSetPropertyToHclTerraform(struct?: CcFirewallPolicy.IPSetProperty | cdktn.IResolvable): any {
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


export function ccFirewallPolicyPolicyVariablesPropertyToTerraform(struct?: CcFirewallPolicy.PolicyVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rule_variables: cdktn.hashMapper(ccFirewallPolicyIPSetPropertyToTerraform)(struct!.ruleVariables),
    }
}


export function ccFirewallPolicyPolicyVariablesPropertyToHclTerraform(struct?: CcFirewallPolicy.PolicyVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rule_variables: {
            value: cdktn.hashMapperHcl(ccFirewallPolicyIPSetPropertyToHclTerraform)(struct!.ruleVariables),
            isBlock: true,
            type: "map",
            storageClassType: "IPSetPropertyMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallPolicyFlowTimeoutsPropertyToTerraform(struct?: CcFirewallPolicy.FlowTimeoutsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tcp_idle_timeout_seconds: cdktn.numberToTerraform(struct!.tcpIdleTimeoutSeconds),
    }
}


export function ccFirewallPolicyFlowTimeoutsPropertyToHclTerraform(struct?: CcFirewallPolicy.FlowTimeoutsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tcp_idle_timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.tcpIdleTimeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallPolicyStatefulEngineOptionsPropertyToTerraform(struct?: CcFirewallPolicy.StatefulEngineOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        flow_timeouts: ccFirewallPolicyFlowTimeoutsPropertyToTerraform(struct!.flowTimeouts),
        rule_order: cdktn.stringToTerraform(struct!.ruleOrder),
        stream_exception_policy: cdktn.stringToTerraform(struct!.streamExceptionPolicy),
    }
}


export function ccFirewallPolicyStatefulEngineOptionsPropertyToHclTerraform(struct?: CcFirewallPolicy.StatefulEngineOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        flow_timeouts: {
            value: ccFirewallPolicyFlowTimeoutsPropertyToHclTerraform(struct!.flowTimeouts),
            isBlock: true,
            type: "struct",
            storageClassType: "FlowTimeoutsProperty",
        },
        rule_order: {
            value: cdktn.stringToHclTerraform(struct!.ruleOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stream_exception_policy: {
            value: cdktn.stringToHclTerraform(struct!.streamExceptionPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallPolicyStatefulRuleGroupOverridePropertyToTerraform(struct?: CcFirewallPolicy.StatefulRuleGroupOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
    }
}


export function ccFirewallPolicyStatefulRuleGroupOverridePropertyToHclTerraform(struct?: CcFirewallPolicy.StatefulRuleGroupOverrideProperty | cdktn.IResolvable): any {
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


export function ccFirewallPolicyStatefulRuleGroupReferencePropertyToTerraform(struct?: CcFirewallPolicy.StatefulRuleGroupReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        deep_threat_inspection: cdktn.booleanToTerraform(struct!.deepThreatInspection),
        override: ccFirewallPolicyStatefulRuleGroupOverridePropertyToTerraform(struct!.override),
        priority: cdktn.numberToTerraform(struct!.priority),
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    }
}


export function ccFirewallPolicyStatefulRuleGroupReferencePropertyToHclTerraform(struct?: CcFirewallPolicy.StatefulRuleGroupReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        deep_threat_inspection: {
            value: cdktn.booleanToHclTerraform(struct!.deepThreatInspection),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        override: {
            value: ccFirewallPolicyStatefulRuleGroupOverridePropertyToHclTerraform(struct!.override),
            isBlock: true,
            type: "struct",
            storageClassType: "StatefulRuleGroupOverrideProperty",
        },
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallPolicyDimensionPropertyToTerraform(struct?: CcFirewallPolicy.DimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFirewallPolicyDimensionPropertyToHclTerraform(struct?: CcFirewallPolicy.DimensionProperty | cdktn.IResolvable): any {
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


export function ccFirewallPolicyPublishMetricActionPropertyToTerraform(struct?: CcFirewallPolicy.PublishMetricActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccFirewallPolicyDimensionPropertyToTerraform, false)(struct!.dimensions),
    }
}


export function ccFirewallPolicyPublishMetricActionPropertyToHclTerraform(struct?: CcFirewallPolicy.PublishMetricActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccFirewallPolicyDimensionPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "DimensionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallPolicyActionDefinitionPropertyToTerraform(struct?: CcFirewallPolicy.ActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        publish_metric_action: ccFirewallPolicyPublishMetricActionPropertyToTerraform(struct!.publishMetricAction),
    }
}


export function ccFirewallPolicyActionDefinitionPropertyToHclTerraform(struct?: CcFirewallPolicy.ActionDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        publish_metric_action: {
            value: ccFirewallPolicyPublishMetricActionPropertyToHclTerraform(struct!.publishMetricAction),
            isBlock: true,
            type: "struct",
            storageClassType: "PublishMetricActionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallPolicyCustomActionPropertyToTerraform(struct?: CcFirewallPolicy.CustomActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_definition: ccFirewallPolicyActionDefinitionPropertyToTerraform(struct!.actionDefinition),
        action_name: cdktn.stringToTerraform(struct!.actionName),
    }
}


export function ccFirewallPolicyCustomActionPropertyToHclTerraform(struct?: CcFirewallPolicy.CustomActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_definition: {
            value: ccFirewallPolicyActionDefinitionPropertyToHclTerraform(struct!.actionDefinition),
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


export function ccFirewallPolicyStatelessRuleGroupReferencePropertyToTerraform(struct?: CcFirewallPolicy.StatelessRuleGroupReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        priority: cdktn.numberToTerraform(struct!.priority),
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    }
}


export function ccFirewallPolicyStatelessRuleGroupReferencePropertyToHclTerraform(struct?: CcFirewallPolicy.StatelessRuleGroupReferenceProperty | cdktn.IResolvable): any {
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
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallPolicyFirewallPolicyPropertyToTerraform(struct?: CcFirewallPolicy.FirewallPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_tls_session_holding: cdktn.booleanToTerraform(struct!.enableTlsSessionHolding),
        policy_variables: ccFirewallPolicyPolicyVariablesPropertyToTerraform(struct!.policyVariables),
        stateful_default_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.statefulDefaultActions),
        stateful_engine_options: ccFirewallPolicyStatefulEngineOptionsPropertyToTerraform(struct!.statefulEngineOptions),
        stateful_rule_group_references: cdktn.listMapper(ccFirewallPolicyStatefulRuleGroupReferencePropertyToTerraform, false)(struct!.statefulRuleGroupReferences),
        stateless_custom_actions: cdktn.listMapper(ccFirewallPolicyCustomActionPropertyToTerraform, false)(struct!.statelessCustomActions),
        stateless_default_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.statelessDefaultActions),
        stateless_fragment_default_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.statelessFragmentDefaultActions),
        stateless_rule_group_references: cdktn.listMapper(ccFirewallPolicyStatelessRuleGroupReferencePropertyToTerraform, false)(struct!.statelessRuleGroupReferences),
        tls_inspection_configuration_arn: cdktn.stringToTerraform(struct!.tlsInspectionConfigurationArn),
    }
}


export function ccFirewallPolicyFirewallPolicyPropertyToHclTerraform(struct?: CcFirewallPolicy.FirewallPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_tls_session_holding: {
            value: cdktn.booleanToHclTerraform(struct!.enableTlsSessionHolding),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        policy_variables: {
            value: ccFirewallPolicyPolicyVariablesPropertyToHclTerraform(struct!.policyVariables),
            isBlock: true,
            type: "struct",
            storageClassType: "PolicyVariablesProperty",
        },
        stateful_default_actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.statefulDefaultActions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        stateful_engine_options: {
            value: ccFirewallPolicyStatefulEngineOptionsPropertyToHclTerraform(struct!.statefulEngineOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "StatefulEngineOptionsProperty",
        },
        stateful_rule_group_references: {
            value: cdktn.listMapperHcl(ccFirewallPolicyStatefulRuleGroupReferencePropertyToHclTerraform, false)(struct!.statefulRuleGroupReferences),
            isBlock: true,
            type: "list",
            storageClassType: "StatefulRuleGroupReferencePropertyList",
        },
        stateless_custom_actions: {
            value: cdktn.listMapperHcl(ccFirewallPolicyCustomActionPropertyToHclTerraform, false)(struct!.statelessCustomActions),
            isBlock: true,
            type: "list",
            storageClassType: "CustomActionPropertyList",
        },
        stateless_default_actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.statelessDefaultActions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        stateless_fragment_default_actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.statelessFragmentDefaultActions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        stateless_rule_group_references: {
            value: cdktn.listMapperHcl(ccFirewallPolicyStatelessRuleGroupReferencePropertyToHclTerraform, false)(struct!.statelessRuleGroupReferences),
            isBlock: true,
            type: "list",
            storageClassType: "StatelessRuleGroupReferencePropertyList",
        },
        tls_inspection_configuration_arn: {
            value: cdktn.stringToHclTerraform(struct!.tlsInspectionConfigurationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFirewallPolicyTagPropertyToTerraform(struct?: CcFirewallPolicy.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFirewallPolicyTagPropertyToHclTerraform(struct?: CcFirewallPolicy.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFirewallPolicy {
export interface IPSetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#definition CcFirewallPolicy#definition}
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
export interface PolicyVariablesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#rule_variables CcFirewallPolicy#rule_variables}
    */
    readonly ruleVariables?: { [key: string]: IPSetProperty } | cdktn.IResolvable;
}
export class PolicyVariablesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyVariablesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ruleVariables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleVariables = this._ruleVariables?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyVariablesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ruleVariables.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ruleVariables.internalValue = value.ruleVariables;
        }
    }

    // rule_variables - computed: true, optional: true, required: false
    private _ruleVariables = new IPSetPropertyMap(this, "rule_variables");
    public get ruleVariables() {
        return this._ruleVariables;
    }
    public putRuleVariables(value: { [key: string]: IPSetProperty } | cdktn.IResolvable) {
        this._ruleVariables.internalValue = value;
    }
    public resetRuleVariables() {
        this._ruleVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleVariablesInput() {
        return this._ruleVariables.internalValue;
    }
}
export interface FlowTimeoutsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#tcp_idle_timeout_seconds CcFirewallPolicy#tcp_idle_timeout_seconds}
    */
    readonly tcpIdleTimeoutSeconds?: number;
}
export class FlowTimeoutsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FlowTimeoutsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tcpIdleTimeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.tcpIdleTimeoutSeconds = this._tcpIdleTimeoutSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FlowTimeoutsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tcpIdleTimeoutSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tcpIdleTimeoutSeconds = value.tcpIdleTimeoutSeconds;
        }
    }

    // tcp_idle_timeout_seconds - computed: true, optional: true, required: false
    private _tcpIdleTimeoutSeconds?: number; 
    public get tcpIdleTimeoutSeconds() {
        return this.getNumberAttribute('tcp_idle_timeout_seconds');
    }
    public set tcpIdleTimeoutSeconds(value: number) {
        this._tcpIdleTimeoutSeconds = value;
    }
    public resetTcpIdleTimeoutSeconds() {
        this._tcpIdleTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcpIdleTimeoutSecondsInput() {
        return this._tcpIdleTimeoutSeconds;
    }
}
export interface StatefulEngineOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#flow_timeouts CcFirewallPolicy#flow_timeouts}
    */
    readonly flowTimeouts?: FlowTimeoutsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#rule_order CcFirewallPolicy#rule_order}
    */
    readonly ruleOrder?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#stream_exception_policy CcFirewallPolicy#stream_exception_policy}
    */
    readonly streamExceptionPolicy?: string;
}
export class StatefulEngineOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StatefulEngineOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._flowTimeouts?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowTimeouts = this._flowTimeouts?.internalValue;
        }
        if (this._ruleOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleOrder = this._ruleOrder;
        }
        if (this._streamExceptionPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamExceptionPolicy = this._streamExceptionPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatefulEngineOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flowTimeouts.internalValue = undefined;
            this._ruleOrder = undefined;
            this._streamExceptionPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flowTimeouts.internalValue = value.flowTimeouts;
            this._ruleOrder = value.ruleOrder;
            this._streamExceptionPolicy = value.streamExceptionPolicy;
        }
    }

    // flow_timeouts - computed: true, optional: true, required: false
    private _flowTimeouts = new FlowTimeoutsPropertyOutputReference(this, "flow_timeouts");
    public get flowTimeouts() {
        return this._flowTimeouts;
    }
    public putFlowTimeouts(value: FlowTimeoutsProperty) {
        this._flowTimeouts.internalValue = value;
    }
    public resetFlowTimeouts() {
        this._flowTimeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowTimeoutsInput() {
        return this._flowTimeouts.internalValue;
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

    // stream_exception_policy - computed: true, optional: true, required: false
    private _streamExceptionPolicy?: string; 
    public get streamExceptionPolicy() {
        return this.getStringAttribute('stream_exception_policy');
    }
    public set streamExceptionPolicy(value: string) {
        this._streamExceptionPolicy = value;
    }
    public resetStreamExceptionPolicy() {
        this._streamExceptionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamExceptionPolicyInput() {
        return this._streamExceptionPolicy;
    }
}
export interface StatefulRuleGroupOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#action CcFirewallPolicy#action}
    */
    readonly action?: string;
}
export class StatefulRuleGroupOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StatefulRuleGroupOverrideProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: StatefulRuleGroupOverrideProperty | cdktn.IResolvable | undefined) {
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
export interface StatefulRuleGroupReferenceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#deep_threat_inspection CcFirewallPolicy#deep_threat_inspection}
    */
    readonly deepThreatInspection?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#override CcFirewallPolicy#override}
    */
    readonly override?: StatefulRuleGroupOverrideProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#priority CcFirewallPolicy#priority}
    */
    readonly priority?: number;
    /**
    * A resource ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#resource_arn CcFirewallPolicy#resource_arn}
    */
    readonly resourceArn?: string;
}
export class StatefulRuleGroupReferencePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StatefulRuleGroupReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deepThreatInspection !== undefined) {
            hasAnyValues = true;
            internalValueResult.deepThreatInspection = this._deepThreatInspection;
        }
        if (this._override?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override?.internalValue;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatefulRuleGroupReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deepThreatInspection = undefined;
            this._override.internalValue = undefined;
            this._priority = undefined;
            this._resourceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deepThreatInspection = value.deepThreatInspection;
            this._override.internalValue = value.override;
            this._priority = value.priority;
            this._resourceArn = value.resourceArn;
        }
    }

    // deep_threat_inspection - computed: true, optional: true, required: false
    private _deepThreatInspection?: boolean | cdktn.IResolvable; 
    public get deepThreatInspection() {
        return this.getBooleanAttribute('deep_threat_inspection');
    }
    public set deepThreatInspection(value: boolean | cdktn.IResolvable) {
        this._deepThreatInspection = value;
    }
    public resetDeepThreatInspection() {
        this._deepThreatInspection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deepThreatInspectionInput() {
        return this._deepThreatInspection;
    }

    // override - computed: true, optional: true, required: false
    private _override = new StatefulRuleGroupOverridePropertyOutputReference(this, "override");
    public get override() {
        return this._override;
    }
    public putOverride(value: StatefulRuleGroupOverrideProperty) {
        this._override.internalValue = value;
    }
    public resetOverride() {
        this._override.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideInput() {
        return this._override.internalValue;
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

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }
}

export class StatefulRuleGroupReferencePropertyList extends cdktn.ComplexList {
    public internalValue? : StatefulRuleGroupReferenceProperty[] | cdktn.IResolvable

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
    public get(index: number): StatefulRuleGroupReferencePropertyOutputReference {
        return new StatefulRuleGroupReferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DimensionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#value CcFirewallPolicy#value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#dimensions CcFirewallPolicy#dimensions}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#publish_metric_action CcFirewallPolicy#publish_metric_action}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#action_definition CcFirewallPolicy#action_definition}
    */
    readonly actionDefinition?: ActionDefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#action_name CcFirewallPolicy#action_name}
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
export interface StatelessRuleGroupReferenceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#priority CcFirewallPolicy#priority}
    */
    readonly priority?: number;
    /**
    * A resource ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#resource_arn CcFirewallPolicy#resource_arn}
    */
    readonly resourceArn?: string;
}
export class StatelessRuleGroupReferencePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StatelessRuleGroupReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatelessRuleGroupReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._priority = undefined;
            this._resourceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._priority = value.priority;
            this._resourceArn = value.resourceArn;
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

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }
}

export class StatelessRuleGroupReferencePropertyList extends cdktn.ComplexList {
    public internalValue? : StatelessRuleGroupReferenceProperty[] | cdktn.IResolvable

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
    public get(index: number): StatelessRuleGroupReferencePropertyOutputReference {
        return new StatelessRuleGroupReferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FirewallPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#enable_tls_session_holding CcFirewallPolicy#enable_tls_session_holding}
    */
    readonly enableTlsSessionHolding?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#policy_variables CcFirewallPolicy#policy_variables}
    */
    readonly policyVariables?: PolicyVariablesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#stateful_default_actions CcFirewallPolicy#stateful_default_actions}
    */
    readonly statefulDefaultActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#stateful_engine_options CcFirewallPolicy#stateful_engine_options}
    */
    readonly statefulEngineOptions?: StatefulEngineOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#stateful_rule_group_references CcFirewallPolicy#stateful_rule_group_references}
    */
    readonly statefulRuleGroupReferences?: StatefulRuleGroupReferenceProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#stateless_custom_actions CcFirewallPolicy#stateless_custom_actions}
    */
    readonly statelessCustomActions?: CustomActionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#stateless_default_actions CcFirewallPolicy#stateless_default_actions}
    */
    readonly statelessDefaultActions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#stateless_fragment_default_actions CcFirewallPolicy#stateless_fragment_default_actions}
    */
    readonly statelessFragmentDefaultActions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#stateless_rule_group_references CcFirewallPolicy#stateless_rule_group_references}
    */
    readonly statelessRuleGroupReferences?: StatelessRuleGroupReferenceProperty[] | cdktn.IResolvable;
    /**
    * A resource ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#tls_inspection_configuration_arn CcFirewallPolicy#tls_inspection_configuration_arn}
    */
    readonly tlsInspectionConfigurationArn?: string;
}
export class FirewallPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirewallPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableTlsSessionHolding !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableTlsSessionHolding = this._enableTlsSessionHolding;
        }
        if (this._policyVariables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyVariables = this._policyVariables?.internalValue;
        }
        if (this._statefulDefaultActions !== undefined) {
            hasAnyValues = true;
            internalValueResult.statefulDefaultActions = this._statefulDefaultActions;
        }
        if (this._statefulEngineOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statefulEngineOptions = this._statefulEngineOptions?.internalValue;
        }
        if (this._statefulRuleGroupReferences?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statefulRuleGroupReferences = this._statefulRuleGroupReferences?.internalValue;
        }
        if (this._statelessCustomActions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessCustomActions = this._statelessCustomActions?.internalValue;
        }
        if (this._statelessDefaultActions !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessDefaultActions = this._statelessDefaultActions;
        }
        if (this._statelessFragmentDefaultActions !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessFragmentDefaultActions = this._statelessFragmentDefaultActions;
        }
        if (this._statelessRuleGroupReferences?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statelessRuleGroupReferences = this._statelessRuleGroupReferences?.internalValue;
        }
        if (this._tlsInspectionConfigurationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.tlsInspectionConfigurationArn = this._tlsInspectionConfigurationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirewallPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableTlsSessionHolding = undefined;
            this._policyVariables.internalValue = undefined;
            this._statefulDefaultActions = undefined;
            this._statefulEngineOptions.internalValue = undefined;
            this._statefulRuleGroupReferences.internalValue = undefined;
            this._statelessCustomActions.internalValue = undefined;
            this._statelessDefaultActions = undefined;
            this._statelessFragmentDefaultActions = undefined;
            this._statelessRuleGroupReferences.internalValue = undefined;
            this._tlsInspectionConfigurationArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableTlsSessionHolding = value.enableTlsSessionHolding;
            this._policyVariables.internalValue = value.policyVariables;
            this._statefulDefaultActions = value.statefulDefaultActions;
            this._statefulEngineOptions.internalValue = value.statefulEngineOptions;
            this._statefulRuleGroupReferences.internalValue = value.statefulRuleGroupReferences;
            this._statelessCustomActions.internalValue = value.statelessCustomActions;
            this._statelessDefaultActions = value.statelessDefaultActions;
            this._statelessFragmentDefaultActions = value.statelessFragmentDefaultActions;
            this._statelessRuleGroupReferences.internalValue = value.statelessRuleGroupReferences;
            this._tlsInspectionConfigurationArn = value.tlsInspectionConfigurationArn;
        }
    }

    // enable_tls_session_holding - computed: true, optional: true, required: false
    private _enableTlsSessionHolding?: boolean | cdktn.IResolvable; 
    public get enableTlsSessionHolding() {
        return this.getBooleanAttribute('enable_tls_session_holding');
    }
    public set enableTlsSessionHolding(value: boolean | cdktn.IResolvable) {
        this._enableTlsSessionHolding = value;
    }
    public resetEnableTlsSessionHolding() {
        this._enableTlsSessionHolding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableTlsSessionHoldingInput() {
        return this._enableTlsSessionHolding;
    }

    // policy_variables - computed: true, optional: true, required: false
    private _policyVariables = new PolicyVariablesPropertyOutputReference(this, "policy_variables");
    public get policyVariables() {
        return this._policyVariables;
    }
    public putPolicyVariables(value: PolicyVariablesProperty) {
        this._policyVariables.internalValue = value;
    }
    public resetPolicyVariables() {
        this._policyVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyVariablesInput() {
        return this._policyVariables.internalValue;
    }

    // stateful_default_actions - computed: true, optional: true, required: false
    private _statefulDefaultActions?: string[]; 
    public get statefulDefaultActions() {
        return this.getListAttribute('stateful_default_actions');
    }
    public set statefulDefaultActions(value: string[]) {
        this._statefulDefaultActions = value;
    }
    public resetStatefulDefaultActions() {
        this._statefulDefaultActions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statefulDefaultActionsInput() {
        return this._statefulDefaultActions;
    }

    // stateful_engine_options - computed: true, optional: true, required: false
    private _statefulEngineOptions = new StatefulEngineOptionsPropertyOutputReference(this, "stateful_engine_options");
    public get statefulEngineOptions() {
        return this._statefulEngineOptions;
    }
    public putStatefulEngineOptions(value: StatefulEngineOptionsProperty) {
        this._statefulEngineOptions.internalValue = value;
    }
    public resetStatefulEngineOptions() {
        this._statefulEngineOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statefulEngineOptionsInput() {
        return this._statefulEngineOptions.internalValue;
    }

    // stateful_rule_group_references - computed: true, optional: true, required: false
    private _statefulRuleGroupReferences = new StatefulRuleGroupReferencePropertyList(this, "stateful_rule_group_references", false);
    public get statefulRuleGroupReferences() {
        return this._statefulRuleGroupReferences;
    }
    public putStatefulRuleGroupReferences(value: StatefulRuleGroupReferenceProperty[] | cdktn.IResolvable) {
        this._statefulRuleGroupReferences.internalValue = value;
    }
    public resetStatefulRuleGroupReferences() {
        this._statefulRuleGroupReferences.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statefulRuleGroupReferencesInput() {
        return this._statefulRuleGroupReferences.internalValue;
    }

    // stateless_custom_actions - computed: true, optional: true, required: false
    private _statelessCustomActions = new CustomActionPropertyList(this, "stateless_custom_actions", false);
    public get statelessCustomActions() {
        return this._statelessCustomActions;
    }
    public putStatelessCustomActions(value: CustomActionProperty[] | cdktn.IResolvable) {
        this._statelessCustomActions.internalValue = value;
    }
    public resetStatelessCustomActions() {
        this._statelessCustomActions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statelessCustomActionsInput() {
        return this._statelessCustomActions.internalValue;
    }

    // stateless_default_actions - computed: false, optional: false, required: true
    private _statelessDefaultActions?: string[]; 
    public get statelessDefaultActions() {
        return this.getListAttribute('stateless_default_actions');
    }
    public set statelessDefaultActions(value: string[]) {
        this._statelessDefaultActions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statelessDefaultActionsInput() {
        return this._statelessDefaultActions;
    }

    // stateless_fragment_default_actions - computed: false, optional: false, required: true
    private _statelessFragmentDefaultActions?: string[]; 
    public get statelessFragmentDefaultActions() {
        return this.getListAttribute('stateless_fragment_default_actions');
    }
    public set statelessFragmentDefaultActions(value: string[]) {
        this._statelessFragmentDefaultActions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statelessFragmentDefaultActionsInput() {
        return this._statelessFragmentDefaultActions;
    }

    // stateless_rule_group_references - computed: true, optional: true, required: false
    private _statelessRuleGroupReferences = new StatelessRuleGroupReferencePropertyList(this, "stateless_rule_group_references", false);
    public get statelessRuleGroupReferences() {
        return this._statelessRuleGroupReferences;
    }
    public putStatelessRuleGroupReferences(value: StatelessRuleGroupReferenceProperty[] | cdktn.IResolvable) {
        this._statelessRuleGroupReferences.internalValue = value;
    }
    public resetStatelessRuleGroupReferences() {
        this._statelessRuleGroupReferences.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statelessRuleGroupReferencesInput() {
        return this._statelessRuleGroupReferences.internalValue;
    }

    // tls_inspection_configuration_arn - computed: true, optional: true, required: false
    private _tlsInspectionConfigurationArn?: string; 
    public get tlsInspectionConfigurationArn() {
        return this.getStringAttribute('tls_inspection_configuration_arn');
    }
    public set tlsInspectionConfigurationArn(value: string) {
        this._tlsInspectionConfigurationArn = value;
    }
    public resetTlsInspectionConfigurationArn() {
        this._tlsInspectionConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInspectionConfigurationArnInput() {
        return this._tlsInspectionConfigurationArn;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#key CcFirewallPolicy#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkfirewall_firewall_policy#value CcFirewallPolicy#value}
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
