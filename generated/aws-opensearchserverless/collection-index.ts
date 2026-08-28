// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_collection_index

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCollectionIndexProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier of the collection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_collection_index#collection_index_id CcCollectionIndex#collection_index_id}
    */
    readonly collectionIndexId: string;
    /**
    * The name of the collection index
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_collection_index#index_name CcCollectionIndex#index_name}
    */
    readonly indexName: string;
    /**
    * The Mappings for the collection index
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_collection_index#index_schema CcCollectionIndex#index_schema}
    */
    readonly indexSchema?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_collection_index awscc_opensearchserverless_collection_index}
*/
export class CcCollectionIndex extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_opensearchserverless_collection_index";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCollectionIndex resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCollectionIndex to import
    * @param importFromId The id of the existing CcCollectionIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_collection_index#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCollectionIndex to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearchserverless_collection_index", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/opensearchserverless_collection_index awscc_opensearchserverless_collection_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCollectionIndexProps
    */
    public constructor(scope: Construct, id: string, config: CcCollectionIndexProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_opensearchserverless_collection_index',
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
        this._collectionIndexId = config.collectionIndexId;
        this._indexName = config.indexName;
        this._indexSchema = config.indexSchema;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // collection_index_id - computed: false, optional: false, required: true
    private _collectionIndexId?: string; 
    public get collectionIndexId() {
        return this.getStringAttribute('collection_index_id');
    }
    public set collectionIndexId(value: string) {
        this._collectionIndexId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get collectionIndexIdInput() {
        return this._collectionIndexId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // index_name - computed: false, optional: false, required: true
    private _indexName?: string; 
    public get indexName() {
        return this.getStringAttribute('index_name');
    }
    public set indexName(value: string) {
        this._indexName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get indexNameInput() {
        return this._indexName;
    }

    // index_schema - computed: true, optional: true, required: false
    private _indexSchema?: string; 
    public get indexSchema() {
        return this.getStringAttribute('index_schema');
    }
    public set indexSchema(value: string) {
        this._indexSchema = value;
    }
    public resetIndexSchema() {
        this._indexSchema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexSchemaInput() {
        return this._indexSchema;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            collection_index_id: cdktn.stringToTerraform(this._collectionIndexId),
            index_name: cdktn.stringToTerraform(this._indexName),
            index_schema: cdktn.stringToTerraform(this._indexSchema),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            collection_index_id: {
                value: cdktn.stringToHclTerraform(this._collectionIndexId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            index_name: {
                value: cdktn.stringToHclTerraform(this._indexName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            index_schema: {
                value: cdktn.stringToHclTerraform(this._indexSchema),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcCollectionIndex {
}
