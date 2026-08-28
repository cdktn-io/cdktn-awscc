// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/paymentcryptography_alias

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAliasProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/paymentcryptography_alias#alias_name CcAlias#alias_name}
    */
    readonly aliasName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/paymentcryptography_alias#key_arn CcAlias#key_arn}
    */
    readonly keyArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/paymentcryptography_alias awscc_paymentcryptography_alias}
*/
export class CcAlias extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_paymentcryptography_alias";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAlias resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAlias to import
    * @param importFromId The id of the existing CcAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/paymentcryptography_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAlias to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_paymentcryptography_alias", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/paymentcryptography_alias awscc_paymentcryptography_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAliasProps
    */
    public constructor(scope: Construct, id: string, config: CcAliasProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_paymentcryptography_alias',
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
        this._aliasName = config.aliasName;
        this._keyArn = config.keyArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias_name - computed: false, optional: false, required: true
    private _aliasName?: string; 
    public get aliasName() {
        return this.getStringAttribute('alias_name');
    }
    public set aliasName(value: string) {
        this._aliasName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasNameInput() {
        return this._aliasName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // key_arn - computed: true, optional: true, required: false
    private _keyArn?: string; 
    public get keyArn() {
        return this.getStringAttribute('key_arn');
    }
    public set keyArn(value: string) {
        this._keyArn = value;
    }
    public resetKeyArn() {
        this._keyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyArnInput() {
        return this._keyArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            alias_name: cdktn.stringToTerraform(this._aliasName),
            key_arn: cdktn.stringToTerraform(this._keyArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alias_name: {
                value: cdktn.stringToHclTerraform(this._aliasName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_arn: {
                value: cdktn.stringToHclTerraform(this._keyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcAlias {
}
