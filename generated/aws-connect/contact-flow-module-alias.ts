// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_contact_flow_module_alias

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContactFlowModuleAliasProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier of the contact flow module (ARN) this alias is tied to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_contact_flow_module_alias#contact_flow_module_id CcContactFlowModuleAlias#contact_flow_module_id}
    */
    readonly contactFlowModuleId: string;
    /**
    * The version number of the contact flow module this alias points to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_contact_flow_module_alias#contact_flow_module_version CcContactFlowModuleAlias#contact_flow_module_version}
    */
    readonly contactFlowModuleVersion: number;
    /**
    * The description of the alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_contact_flow_module_alias#description CcContactFlowModuleAlias#description}
    */
    readonly description?: string;
    /**
    * The name of the alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_contact_flow_module_alias#name CcContactFlowModuleAlias#name}
    */
    readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_contact_flow_module_alias awscc_connect_contact_flow_module_alias}
*/
export class CcContactFlowModuleAlias extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_contact_flow_module_alias";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContactFlowModuleAlias resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContactFlowModuleAlias to import
    * @param importFromId The id of the existing CcContactFlowModuleAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_contact_flow_module_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContactFlowModuleAlias to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_contact_flow_module_alias", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_contact_flow_module_alias awscc_connect_contact_flow_module_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContactFlowModuleAliasProps
    */
    public constructor(scope: Construct, id: string, config: CcContactFlowModuleAliasProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_contact_flow_module_alias',
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
        this._contactFlowModuleId = config.contactFlowModuleId;
        this._contactFlowModuleVersion = config.contactFlowModuleVersion;
        this._description = config.description;
        this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias_id - computed: true, optional: false, required: false
    public get aliasId() {
        return this.getStringAttribute('alias_id');
    }

    // contact_flow_module_alias_arn - computed: true, optional: false, required: false
    public get contactFlowModuleAliasArn() {
        return this.getStringAttribute('contact_flow_module_alias_arn');
    }

    // contact_flow_module_id - computed: false, optional: false, required: true
    private _contactFlowModuleId?: string; 
    public get contactFlowModuleId() {
        return this.getStringAttribute('contact_flow_module_id');
    }
    public set contactFlowModuleId(value: string) {
        this._contactFlowModuleId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contactFlowModuleIdInput() {
        return this._contactFlowModuleId;
    }

    // contact_flow_module_version - computed: false, optional: false, required: true
    private _contactFlowModuleVersion?: number; 
    public get contactFlowModuleVersion() {
        return this.getNumberAttribute('contact_flow_module_version');
    }
    public set contactFlowModuleVersion(value: number) {
        this._contactFlowModuleVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contactFlowModuleVersionInput() {
        return this._contactFlowModuleVersion;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            contact_flow_module_id: cdktn.stringToTerraform(this._contactFlowModuleId),
            contact_flow_module_version: cdktn.numberToTerraform(this._contactFlowModuleVersion),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            contact_flow_module_id: {
                value: cdktn.stringToHclTerraform(this._contactFlowModuleId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            contact_flow_module_version: {
                value: cdktn.numberToHclTerraform(this._contactFlowModuleVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcContactFlowModuleAlias {
}
