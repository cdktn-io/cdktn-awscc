// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResolverRuleAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of an association between a Resolver rule and a VPC.
    *  The name can be up to 64 characters long and can contain letters (a-z, A-Z), numbers (0-9), hyphens (-), underscores (_), and spaces. The name cannot consist of only numbers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule_association#name CcResolverRuleAssociation#name}
    */
    readonly name?: string;
    /**
    * The ID of the Resolver rule that you associated with the VPC that is specified by ``VPCId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule_association#resolver_rule_id CcResolverRuleAssociation#resolver_rule_id}
    */
    readonly resolverRuleId: string;
    /**
    * The ID of the VPC that you associated the Resolver rule with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule_association#vpc_id CcResolverRuleAssociation#vpc_id}
    */
    readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule_association awscc_route53resolver_resolver_rule_association}
*/
export class CcResolverRuleAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_route53resolver_resolver_rule_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResolverRuleAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResolverRuleAssociation to import
    * @param importFromId The id of the existing CcResolverRuleAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResolverRuleAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_route53resolver_resolver_rule_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/route53resolver_resolver_rule_association awscc_route53resolver_resolver_rule_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResolverRuleAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcResolverRuleAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_route53resolver_resolver_rule_association',
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
        this._name = config.name;
        this._resolverRuleId = config.resolverRuleId;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // resolver_rule_association_id - computed: true, optional: false, required: false
    public get resolverRuleAssociationId() {
        return this.getStringAttribute('resolver_rule_association_id');
    }

    // resolver_rule_id - computed: false, optional: false, required: true
    private _resolverRuleId?: string; 
    public get resolverRuleId() {
        return this.getStringAttribute('resolver_rule_id');
    }
    public set resolverRuleId(value: string) {
        this._resolverRuleId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resolverRuleIdInput() {
        return this._resolverRuleId;
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            name: cdktn.stringToTerraform(this._name),
            resolver_rule_id: cdktn.stringToTerraform(this._resolverRuleId),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resolver_rule_id: {
                value: cdktn.stringToHclTerraform(this._resolverRuleId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcResolverRuleAssociation {
}
