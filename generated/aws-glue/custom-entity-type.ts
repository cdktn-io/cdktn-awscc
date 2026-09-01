// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_custom_entity_type

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCustomEntityTypeProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of context words.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_custom_entity_type#context_words CcCustomEntityType#context_words}
    */
    readonly contextWords?: string[];
    /**
    * The name of the custom entity type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_custom_entity_type#name CcCustomEntityType#name}
    */
    readonly name?: string;
    /**
    * A regular expression string that is used for detecting sensitive data in a custom pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_custom_entity_type#regex_string CcCustomEntityType#regex_string}
    */
    readonly regexString?: string;
    /**
    * Tags to associate with the custom entity type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_custom_entity_type#tags CcCustomEntityType#tags}
    */
    readonly tags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_custom_entity_type awscc_glue_custom_entity_type}
*/
export class CcCustomEntityType extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_custom_entity_type";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCustomEntityType resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCustomEntityType to import
    * @param importFromId The id of the existing CcCustomEntityType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_custom_entity_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCustomEntityType to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_custom_entity_type", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_custom_entity_type awscc_glue_custom_entity_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCustomEntityTypeProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcCustomEntityTypeProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_custom_entity_type',
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
        this._contextWords = config.contextWords;
        this._name = config.name;
        this._regexString = config.regexString;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // context_words - computed: true, optional: true, required: false
    private _contextWords?: string[]; 
    public get contextWords() {
        return this.getListAttribute('context_words');
    }
    public set contextWords(value: string[]) {
        this._contextWords = value;
    }
    public resetContextWords() {
        this._contextWords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contextWordsInput() {
        return this._contextWords;
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

    // regex_string - computed: true, optional: true, required: false
    private _regexString?: string; 
    public get regexString() {
        return this.getStringAttribute('regex_string');
    }
    public set regexString(value: string) {
        this._regexString = value;
    }
    public resetRegexString() {
        this._regexString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexStringInput() {
        return this._regexString;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: string; 
    public get tags() {
        return this.getStringAttribute('tags');
    }
    public set tags(value: string) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            context_words: cdktn.listMapper(cdktn.stringToTerraform, false)(this._contextWords),
            name: cdktn.stringToTerraform(this._name),
            regex_string: cdktn.stringToTerraform(this._regexString),
            tags: cdktn.stringToTerraform(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            context_words: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._contextWords),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            regex_string: {
                value: cdktn.stringToHclTerraform(this._regexString),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.stringToHclTerraform(this._tags),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcCustomEntityType {
}
