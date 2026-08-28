// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_policy_statement

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyStatementProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_policy_statement#action CcPolicyStatement#action}
    */
    readonly action?: string[];
    /**
    * Arn of the resource to which the policy statement is being attached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_policy_statement#arn CcPolicyStatement#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_policy_statement#condition CcPolicyStatement#condition}
    */
    readonly condition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_policy_statement#effect CcPolicyStatement#effect}
    */
    readonly effect?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_policy_statement#principal CcPolicyStatement#principal}
    */
    readonly principal?: string[];
    /**
    * The Statement Id of the policy statement that is being attached.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_policy_statement#statement_id CcPolicyStatement#statement_id}
    */
    readonly statementId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_policy_statement awscc_entityresolution_policy_statement}
*/
export class CcPolicyStatement extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_entityresolution_policy_statement";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicyStatement resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicyStatement to import
    * @param importFromId The id of the existing CcPolicyStatement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_policy_statement#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicyStatement to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_entityresolution_policy_statement", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/entityresolution_policy_statement awscc_entityresolution_policy_statement} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyStatementProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyStatementProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_entityresolution_policy_statement',
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
        this._action = config.action;
        this._arn = config.arn;
        this._condition = config.condition;
        this._effect = config.effect;
        this._principal = config.principal;
        this._statementId = config.statementId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: true, optional: true, required: false
    private _action?: string[]; 
    public get action() {
        return this.getListAttribute('action');
    }
    public set action(value: string[]) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // condition - computed: true, optional: true, required: false
    private _condition?: string; 
    public get condition() {
        return this.getStringAttribute('condition');
    }
    public set condition(value: string) {
        this._condition = value;
    }
    public resetCondition() {
        this._condition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
        return this._condition;
    }

    // effect - computed: true, optional: true, required: false
    private _effect?: string; 
    public get effect() {
        return this.getStringAttribute('effect');
    }
    public set effect(value: string) {
        this._effect = value;
    }
    public resetEffect() {
        this._effect = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get effectInput() {
        return this._effect;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // principal - computed: true, optional: true, required: false
    private _principal?: string[]; 
    public get principal() {
        return this.getListAttribute('principal');
    }
    public set principal(value: string[]) {
        this._principal = value;
    }
    public resetPrincipal() {
        this._principal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
    }

    // statement_id - computed: false, optional: false, required: true
    private _statementId?: string; 
    public get statementId() {
        return this.getStringAttribute('statement_id');
    }
    public set statementId(value: string) {
        this._statementId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statementIdInput() {
        return this._statementId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action: cdktn.listMapper(cdktn.stringToTerraform, false)(this._action),
            arn: cdktn.stringToTerraform(this._arn),
            condition: cdktn.stringToTerraform(this._condition),
            effect: cdktn.stringToTerraform(this._effect),
            principal: cdktn.listMapper(cdktn.stringToTerraform, false)(this._principal),
            statement_id: cdktn.stringToTerraform(this._statementId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._action),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            arn: {
                value: cdktn.stringToHclTerraform(this._arn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            condition: {
                value: cdktn.stringToHclTerraform(this._condition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            effect: {
                value: cdktn.stringToHclTerraform(this._effect),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._principal),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            statement_id: {
                value: cdktn.stringToHclTerraform(this._statementId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPolicyStatement {
}
