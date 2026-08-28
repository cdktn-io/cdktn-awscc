// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_receipt_rule_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReceiptRuleSetProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the rule set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_receipt_rule_set#rule_set_name CcReceiptRuleSet#rule_set_name}
    */
    readonly ruleSetName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_receipt_rule_set awscc_ses_receipt_rule_set}
*/
export class CcReceiptRuleSet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_receipt_rule_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReceiptRuleSet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReceiptRuleSet to import
    * @param importFromId The id of the existing CcReceiptRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_receipt_rule_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReceiptRuleSet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_receipt_rule_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_receipt_rule_set awscc_ses_receipt_rule_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReceiptRuleSetProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcReceiptRuleSetProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_receipt_rule_set',
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
        this._ruleSetName = config.ruleSetName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // rule_set_name - computed: true, optional: true, required: false
    private _ruleSetName?: string; 
    public get ruleSetName() {
        return this.getStringAttribute('rule_set_name');
    }
    public set ruleSetName(value: string) {
        this._ruleSetName = value;
    }
    public resetRuleSetName() {
        this._ruleSetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleSetNameInput() {
        return this._ruleSetName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            rule_set_name: cdktn.stringToTerraform(this._ruleSetName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            rule_set_name: {
                value: cdktn.stringToHclTerraform(this._ruleSetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcReceiptRuleSet {
}
