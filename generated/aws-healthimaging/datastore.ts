// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthimaging_datastore

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDatastoreProps extends cdktn.TerraformMetaArguments {
    /**
    * User friendly name for Datastore.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthimaging_datastore#datastore_name CcDatastore#datastore_name}
    */
    readonly datastoreName?: string;
    /**
    * ARN referencing a KMS key or KMS key alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthimaging_datastore#kms_key_arn CcDatastore#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * A Map of key value pairs for Tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthimaging_datastore#tags CcDatastore#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthimaging_datastore awscc_healthimaging_datastore}
*/
export class CcDatastore extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_healthimaging_datastore";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDatastore resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDatastore to import
    * @param importFromId The id of the existing CcDatastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthimaging_datastore#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDatastore to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_healthimaging_datastore", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/healthimaging_datastore awscc_healthimaging_datastore} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDatastoreProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDatastoreProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_healthimaging_datastore',
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
        this._datastoreName = config.datastoreName;
        this._kmsKeyArn = config.kmsKeyArn;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // datastore_arn - computed: true, optional: false, required: false
    public get datastoreArn() {
        return this.getStringAttribute('datastore_arn');
    }

    // datastore_id - computed: true, optional: false, required: false
    public get datastoreId() {
        return this.getStringAttribute('datastore_id');
    }

    // datastore_name - computed: true, optional: true, required: false
    private _datastoreName?: string; 
    public get datastoreName() {
        return this.getStringAttribute('datastore_name');
    }
    public set datastoreName(value: string) {
        this._datastoreName = value;
    }
    public resetDatastoreName() {
        this._datastoreName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datastoreNameInput() {
        return this._datastoreName;
    }

    // datastore_status - computed: true, optional: false, required: false
    public get datastoreStatus() {
        return this.getStringAttribute('datastore_status');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            datastore_name: cdktn.stringToTerraform(this._datastoreName),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            datastore_name: {
                value: cdktn.stringToHclTerraform(this._datastoreName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcDatastore {
}
