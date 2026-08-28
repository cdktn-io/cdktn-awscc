// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_schema_version_metadata

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSchemaVersionMetadataProps extends cdktn.TerraformMetaArguments {
    /**
    * Metadata key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_schema_version_metadata#key CcSchemaVersionMetadata#key}
    */
    readonly key: string;
    /**
    * Represents the version ID associated with the schema version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_schema_version_metadata#schema_version_id CcSchemaVersionMetadata#schema_version_id}
    */
    readonly schemaVersionId: string;
    /**
    * Metadata value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_schema_version_metadata#value CcSchemaVersionMetadata#value}
    */
    readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_schema_version_metadata awscc_glue_schema_version_metadata}
*/
export class CcSchemaVersionMetadata extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_schema_version_metadata";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSchemaVersionMetadata resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSchemaVersionMetadata to import
    * @param importFromId The id of the existing CcSchemaVersionMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_schema_version_metadata#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSchemaVersionMetadata to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_schema_version_metadata", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/glue_schema_version_metadata awscc_glue_schema_version_metadata} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSchemaVersionMetadataProps
    */
    public constructor(scope: Construct, id: string, config: CcSchemaVersionMetadataProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_schema_version_metadata',
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
        this._key = config.key;
        this._schemaVersionId = config.schemaVersionId;
        this._value = config.value;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // schema_version_id - computed: false, optional: false, required: true
    private _schemaVersionId?: string; 
    public get schemaVersionId() {
        return this.getStringAttribute('schema_version_id');
    }
    public set schemaVersionId(value: string) {
        this._schemaVersionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaVersionIdInput() {
        return this._schemaVersionId;
    }

    // value - computed: false, optional: false, required: true
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            key: cdktn.stringToTerraform(this._key),
            schema_version_id: cdktn.stringToTerraform(this._schemaVersionId),
            value: cdktn.stringToTerraform(this._value),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            key: {
                value: cdktn.stringToHclTerraform(this._key),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            schema_version_id: {
                value: cdktn.stringToHclTerraform(this._schemaVersionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            value: {
                value: cdktn.stringToHclTerraform(this._value),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSchemaVersionMetadata {
}
