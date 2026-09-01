// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy_template#description CcPolicyTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy_template#name CcPolicyTemplate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy_template#policy_store_id CcPolicyTemplate#policy_store_id}
    */
    readonly policyStoreId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy_template#statement CcPolicyTemplate#statement}
    */
    readonly statement: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy_template awscc_verifiedpermissions_policy_template}
*/
export class CcPolicyTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_verifiedpermissions_policy_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicyTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicyTemplate to import
    * @param importFromId The id of the existing CcPolicyTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicyTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_verifiedpermissions_policy_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/verifiedpermissions_policy_template awscc_verifiedpermissions_policy_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_verifiedpermissions_policy_template',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
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
        this._name = config.name;
        this._policyStoreId = config.policyStoreId;
        this._statement = config.statement;
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

    // policy_store_id - computed: false, optional: false, required: true
    private _policyStoreId?: string; 
    public get policyStoreId() {
        return this.getStringAttribute('policy_store_id');
    }
    public set policyStoreId(value: string) {
        this._policyStoreId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyStoreIdInput() {
        return this._policyStoreId;
    }

    // policy_template_id - computed: true, optional: false, required: false
    public get policyTemplateId() {
        return this.getStringAttribute('policy_template_id');
    }

    // statement - computed: false, optional: false, required: true
    private _statement?: string; 
    public get statement() {
        return this.getStringAttribute('statement');
    }
    public set statement(value: string) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statementInput() {
        return this._statement;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            policy_store_id: cdktn.stringToTerraform(this._policyStoreId),
            statement: cdktn.stringToTerraform(this._statement),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_store_id: {
                value: cdktn.stringToHclTerraform(this._policyStoreId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            statement: {
                value: cdktn.stringToHclTerraform(this._statement),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPolicyTemplate {
}
