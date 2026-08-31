// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFirewallRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#action CcFirewallRule#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_override_dns_type CcFirewallRule#block_override_dns_type}
    */
    readonly blockOverrideDnsType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_override_domain CcFirewallRule#block_override_domain}
    */
    readonly blockOverrideDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_override_ttl CcFirewallRule#block_override_ttl}
    */
    readonly blockOverrideTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_response CcFirewallRule#block_response}
    */
    readonly blockResponse?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#client_token CcFirewallRule#client_token}
    */
    readonly clientToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#confidence_threshold CcFirewallRule#confidence_threshold}
    */
    readonly confidenceThreshold?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#description CcFirewallRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#dns_advanced_protection CcFirewallRule#dns_advanced_protection}
    */
    readonly dnsAdvancedProtection?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#dns_view_id CcFirewallRule#dns_view_id}
    */
    readonly dnsViewId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#firewall_domain_list_id CcFirewallRule#firewall_domain_list_id}
    */
    readonly firewallDomainListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#name CcFirewallRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#priority CcFirewallRule#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#q_type CcFirewallRule#q_type}
    */
    readonly qType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule awscc_route53globalresolver_firewall_rule}
*/
export class CcFirewallRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53globalresolver_firewall_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFirewallRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFirewallRule to import
    * @param importFromId The id of the existing CcFirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFirewallRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53globalresolver_firewall_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule awscc_route53globalresolver_firewall_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFirewallRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcFirewallRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53globalresolver_firewall_rule',
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
        this._action = config.action;
        this._blockOverrideDnsType = config.blockOverrideDnsType;
        this._blockOverrideDomain = config.blockOverrideDomain;
        this._blockOverrideTtl = config.blockOverrideTtl;
        this._blockResponse = config.blockResponse;
        this._clientToken = config.clientToken;
        this._confidenceThreshold = config.confidenceThreshold;
        this._description = config.description;
        this._dnsAdvancedProtection = config.dnsAdvancedProtection;
        this._dnsViewId = config.dnsViewId;
        this._firewallDomainListId = config.firewallDomainListId;
        this._name = config.name;
        this._priority = config.priority;
        this._qType = config.qType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
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

    // client_token - computed: true, optional: true, required: false
    private _clientToken?: string; 
    public get clientToken() {
        return this.getStringAttribute('client_token');
    }
    public set clientToken(value: string) {
        this._clientToken = value;
    }
    public resetClientToken() {
        this._clientToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientTokenInput() {
        return this._clientToken;
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

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // dns_advanced_protection - computed: true, optional: true, required: false
    private _dnsAdvancedProtection?: string; 
    public get dnsAdvancedProtection() {
        return this.getStringAttribute('dns_advanced_protection');
    }
    public set dnsAdvancedProtection(value: string) {
        this._dnsAdvancedProtection = value;
    }
    public resetDnsAdvancedProtection() {
        this._dnsAdvancedProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsAdvancedProtectionInput() {
        return this._dnsAdvancedProtection;
    }

    // dns_view_id - computed: false, optional: false, required: true
    private _dnsViewId?: string; 
    public get dnsViewId() {
        return this.getStringAttribute('dns_view_id');
    }
    public set dnsViewId(value: string) {
        this._dnsViewId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsViewIdInput() {
        return this._dnsViewId;
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

    // firewall_rule_id - computed: true, optional: false, required: false
    public get firewallRuleId() {
        return this.getStringAttribute('firewall_rule_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // q_type - computed: true, optional: true, required: false
    private _qType?: string; 
    public get qType() {
        return this.getStringAttribute('q_type');
    }
    public set qType(value: string) {
        this._qType = value;
    }
    public resetQType() {
        this._qType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qTypeInput() {
        return this._qType;
    }

    // query_type - computed: true, optional: false, required: false
    public get queryType() {
        return this.getStringAttribute('query_type');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
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
            action: cdktn.stringToTerraform(this._action),
            block_override_dns_type: cdktn.stringToTerraform(this._blockOverrideDnsType),
            block_override_domain: cdktn.stringToTerraform(this._blockOverrideDomain),
            block_override_ttl: cdktn.numberToTerraform(this._blockOverrideTtl),
            block_response: cdktn.stringToTerraform(this._blockResponse),
            client_token: cdktn.stringToTerraform(this._clientToken),
            confidence_threshold: cdktn.stringToTerraform(this._confidenceThreshold),
            description: cdktn.stringToTerraform(this._description),
            dns_advanced_protection: cdktn.stringToTerraform(this._dnsAdvancedProtection),
            dns_view_id: cdktn.stringToTerraform(this._dnsViewId),
            firewall_domain_list_id: cdktn.stringToTerraform(this._firewallDomainListId),
            name: cdktn.stringToTerraform(this._name),
            priority: cdktn.numberToTerraform(this._priority),
            q_type: cdktn.stringToTerraform(this._qType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action: {
                value: cdktn.stringToHclTerraform(this._action),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            block_override_dns_type: {
                value: cdktn.stringToHclTerraform(this._blockOverrideDnsType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            block_override_domain: {
                value: cdktn.stringToHclTerraform(this._blockOverrideDomain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            block_override_ttl: {
                value: cdktn.numberToHclTerraform(this._blockOverrideTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            block_response: {
                value: cdktn.stringToHclTerraform(this._blockResponse),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            client_token: {
                value: cdktn.stringToHclTerraform(this._clientToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            confidence_threshold: {
                value: cdktn.stringToHclTerraform(this._confidenceThreshold),
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
            dns_advanced_protection: {
                value: cdktn.stringToHclTerraform(this._dnsAdvancedProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dns_view_id: {
                value: cdktn.stringToHclTerraform(this._dnsViewId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            firewall_domain_list_id: {
                value: cdktn.stringToHclTerraform(this._firewallDomainListId),
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
            priority: {
                value: cdktn.numberToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            q_type: {
                value: cdktn.stringToHclTerraform(this._qType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcFirewallRule {
}
