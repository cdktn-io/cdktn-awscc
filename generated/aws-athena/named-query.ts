// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_named_query

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNamedQueryProps extends cdktn.TerraformMetaArguments {
    /**
    * The database to which the query belongs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_named_query#database CcNamedQuery#database}
    */
    readonly database: string;
    /**
    * The query description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_named_query#description CcNamedQuery#description}
    */
    readonly description?: string;
    /**
    * The query name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_named_query#name CcNamedQuery#name}
    */
    readonly name?: string;
    /**
    * The contents of the query with all query statements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_named_query#query_string CcNamedQuery#query_string}
    */
    readonly queryString: string;
    /**
    * The name of the workgroup that contains the named query.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_named_query#work_group CcNamedQuery#work_group}
    */
    readonly workGroup?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_named_query awscc_athena_named_query}
*/
export class CcNamedQuery extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_athena_named_query";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNamedQuery resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNamedQuery to import
    * @param importFromId The id of the existing CcNamedQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_named_query#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNamedQuery to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_athena_named_query", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_named_query awscc_athena_named_query} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNamedQueryProps
    */
    public constructor(scope: Construct, id: string, config: CcNamedQueryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_athena_named_query',
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
        this._database = config.database;
        this._description = config.description;
        this._name = config.name;
        this._queryString = config.queryString;
        this._workGroup = config.workGroup;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // database - computed: false, optional: false, required: true
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
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

    // named_query_id - computed: true, optional: false, required: false
    public get namedQueryId() {
        return this.getStringAttribute('named_query_id');
    }

    // query_string - computed: false, optional: false, required: true
    private _queryString?: string; 
    public get queryString() {
        return this.getStringAttribute('query_string');
    }
    public set queryString(value: string) {
        this._queryString = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
        return this._queryString;
    }

    // work_group - computed: true, optional: true, required: false
    private _workGroup?: string; 
    public get workGroup() {
        return this.getStringAttribute('work_group');
    }
    public set workGroup(value: string) {
        this._workGroup = value;
    }
    public resetWorkGroup() {
        this._workGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workGroupInput() {
        return this._workGroup;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            database: cdktn.stringToTerraform(this._database),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            query_string: cdktn.stringToTerraform(this._queryString),
            work_group: cdktn.stringToTerraform(this._workGroup),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            database: {
                value: cdktn.stringToHclTerraform(this._database),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            query_string: {
                value: cdktn.stringToHclTerraform(this._queryString),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            work_group: {
                value: cdktn.stringToHclTerraform(this._workGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcNamedQuery {
}
