// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTagProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag#catalog_id CcTag#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * The key-name for the LF-tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag#tag_key CcTag#tag_key}
    */
    readonly tagKey: string;
    /**
    * A list of possible values an attribute can take.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag#tag_values CcTag#tag_values}
    */
    readonly tagValues: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag awscc_lakeformation_tag}
*/
export class CcTag extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lakeformation_tag";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTag resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTag to import
    * @param importFromId The id of the existing CcTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTag to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lakeformation_tag", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag awscc_lakeformation_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTagProps
    */
    public constructor(scope: Construct, id: string, config: CcTagProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lakeformation_tag',
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
        this._catalogId = config.catalogId;
        this._tagKey = config.tagKey;
        this._tagValues = config.tagValues;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string; 
    public get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
        this._catalogId = value;
    }
    public resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
        return this._catalogId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tag_key - computed: false, optional: false, required: true
    private _tagKey?: string; 
    public get tagKey() {
        return this.getStringAttribute('tag_key');
    }
    public set tagKey(value: string) {
        this._tagKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyInput() {
        return this._tagKey;
    }

    // tag_values - computed: false, optional: false, required: true
    private _tagValues?: string[]; 
    public get tagValues() {
        return this.getListAttribute('tag_values');
    }
    public set tagValues(value: string[]) {
        this._tagValues = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValuesInput() {
        return this._tagValues;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            catalog_id: cdktn.stringToTerraform(this._catalogId),
            tag_key: cdktn.stringToTerraform(this._tagKey),
            tag_values: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tagValues),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            catalog_id: {
                value: cdktn.stringToHclTerraform(this._catalogId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag_key: {
                value: cdktn.stringToHclTerraform(this._tagKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tag_values: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tagValues),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTag {
}
