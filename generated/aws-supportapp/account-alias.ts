// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/supportapp_account_alias

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAccountAliasProps extends cdktn.TerraformMetaArguments {
    /**
    * An account alias associated with a customer's account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/supportapp_account_alias#account_alias CcAccountAlias#account_alias}
    */
    readonly accountAlias: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/supportapp_account_alias awscc_supportapp_account_alias}
*/
export class CcAccountAlias extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_supportapp_account_alias";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAccountAlias resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAccountAlias to import
    * @param importFromId The id of the existing CcAccountAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/supportapp_account_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAccountAlias to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_supportapp_account_alias", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/supportapp_account_alias awscc_supportapp_account_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAccountAliasProps
    */
    public constructor(scope: Construct, id: string, config: CcAccountAliasProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_supportapp_account_alias',
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
        this._accountAlias = config.accountAlias;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_alias - computed: false, optional: false, required: true
    private _accountAlias?: string; 
    public get accountAlias() {
        return this.getStringAttribute('account_alias');
    }
    public set accountAlias(value: string) {
        this._accountAlias = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountAliasInput() {
        return this._accountAlias;
    }

    // account_alias_resource_id - computed: true, optional: false, required: false
    public get accountAliasResourceId() {
        return this.getStringAttribute('account_alias_resource_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            account_alias: cdktn.stringToTerraform(this._accountAlias),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account_alias: {
                value: cdktn.stringToHclTerraform(this._accountAlias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAccountAlias {
}
