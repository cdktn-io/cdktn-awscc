// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_terms

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTermsProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_terms#client_id CcTerms#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_terms#enforcement CcTerms#enforcement}
    */
    readonly enforcement: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_terms#links CcTerms#links}
    */
    readonly links: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_terms#terms_name CcTerms#terms_name}
    */
    readonly termsName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_terms#terms_source CcTerms#terms_source}
    */
    readonly termsSource: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_terms#user_pool_id CcTerms#user_pool_id}
    */
    readonly userPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_terms awscc_cognito_terms}
*/
export class CcTerms extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_terms";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTerms resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTerms to import
    * @param importFromId The id of the existing CcTerms that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_terms#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTerms to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_terms", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_terms awscc_cognito_terms} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTermsProps
    */
    public constructor(scope: Construct, id: string, config: CcTermsProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_terms',
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
        this._clientId = config.clientId;
        this._enforcement = config.enforcement;
        this._links = config.links;
        this._termsName = config.termsName;
        this._termsSource = config.termsSource;
        this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // client_id - computed: true, optional: true, required: false
    private _clientId?: string; 
    public get clientId() {
        return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
        this._clientId = value;
    }
    public resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
        return this._clientId;
    }

    // enforcement - computed: false, optional: false, required: true
    private _enforcement?: string; 
    public get enforcement() {
        return this.getStringAttribute('enforcement');
    }
    public set enforcement(value: string) {
        this._enforcement = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enforcementInput() {
        return this._enforcement;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // links - computed: false, optional: false, required: true
    private _links?: { [key: string]: string }; 
    public get links() {
        return this.getStringMapAttribute('links');
    }
    public set links(value: { [key: string]: string }) {
        this._links = value;
    }
    // Temporarily expose input value. Use with caution.
    public get linksInput() {
        return this._links;
    }

    // terms_id - computed: true, optional: false, required: false
    public get termsId() {
        return this.getStringAttribute('terms_id');
    }

    // terms_name - computed: false, optional: false, required: true
    private _termsName?: string; 
    public get termsName() {
        return this.getStringAttribute('terms_name');
    }
    public set termsName(value: string) {
        this._termsName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get termsNameInput() {
        return this._termsName;
    }

    // terms_source - computed: false, optional: false, required: true
    private _termsSource?: string; 
    public get termsSource() {
        return this.getStringAttribute('terms_source');
    }
    public set termsSource(value: string) {
        this._termsSource = value;
    }
    // Temporarily expose input value. Use with caution.
    public get termsSourceInput() {
        return this._termsSource;
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            client_id: cdktn.stringToTerraform(this._clientId),
            enforcement: cdktn.stringToTerraform(this._enforcement),
            links: cdktn.hashMapper(cdktn.stringToTerraform)(this._links),
            terms_name: cdktn.stringToTerraform(this._termsName),
            terms_source: cdktn.stringToTerraform(this._termsSource),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            client_id: {
                value: cdktn.stringToHclTerraform(this._clientId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enforcement: {
                value: cdktn.stringToHclTerraform(this._enforcement),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            links: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._links),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            terms_name: {
                value: cdktn.stringToHclTerraform(this._termsName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            terms_source: {
                value: cdktn.stringToHclTerraform(this._termsSource),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_pool_id: {
                value: cdktn.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTerms {
}
