// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/polly_lexicon

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLexiconProps extends cdktn.TerraformMetaArguments {
    /**
    * The content of the PLS lexicon in string format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/polly_lexicon#content CcLexicon#content}
    */
    readonly content: string;
    /**
    * The name of the lexicon. Must be an alphanumeric string up to 20 characters long.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/polly_lexicon#name CcLexicon#name}
    */
    readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/polly_lexicon awscc_polly_lexicon}
*/
export class CcLexicon extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_polly_lexicon";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLexicon resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLexicon to import
    * @param importFromId The id of the existing CcLexicon that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/polly_lexicon#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLexicon to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_polly_lexicon", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/polly_lexicon awscc_polly_lexicon} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLexiconProps
    */
    public constructor(scope: Construct, id: string, config: CcLexiconProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_polly_lexicon',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._content = config.content;
        this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alphabet - computed: true, optional: false, required: false
    public get alphabet() {
        return this.getStringAttribute('alphabet');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // content - computed: false, optional: false, required: true
    private _content?: string; 
    public get content() {
        return this.getStringAttribute('content');
    }
    public set content(value: string) {
        this._content = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // language_code - computed: true, optional: false, required: false
    public get languageCode() {
        return this.getStringAttribute('language_code');
    }

    // last_modified - computed: true, optional: false, required: false
    public get lastModified() {
        return this.getStringAttribute('last_modified');
    }

    // lexemes_count - computed: true, optional: false, required: false
    public get lexemesCount() {
        return this.getNumberAttribute('lexemes_count');
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

    // size - computed: true, optional: false, required: false
    public get size() {
        return this.getNumberAttribute('size');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            content: cdktn.stringToTerraform(this._content),
            name: cdktn.stringToTerraform(this._name),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            content: {
                value: cdktn.stringToHclTerraform(this._content),
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

export namespace CcLexicon {
}
