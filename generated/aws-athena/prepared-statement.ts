// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_prepared_statement

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPreparedStatementProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the prepared statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_prepared_statement#description CcPreparedStatement#description}
    */
    readonly description?: string;
    /**
    * The query string for the prepared statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_prepared_statement#query_statement CcPreparedStatement#query_statement}
    */
    readonly queryStatement: string;
    /**
    * The name of the prepared statement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_prepared_statement#statement_name CcPreparedStatement#statement_name}
    */
    readonly statementName: string;
    /**
    * The name of the workgroup to which the prepared statement belongs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_prepared_statement#work_group CcPreparedStatement#work_group}
    */
    readonly workGroup: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_prepared_statement awscc_athena_prepared_statement}
*/
export class CcPreparedStatement extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_athena_prepared_statement";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPreparedStatement resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPreparedStatement to import
    * @param importFromId The id of the existing CcPreparedStatement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_prepared_statement#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPreparedStatement to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_athena_prepared_statement", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_prepared_statement awscc_athena_prepared_statement} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPreparedStatementProps
    */
    public constructor(scope: Construct, id: string, config: CcPreparedStatementProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_athena_prepared_statement',
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
        this._description = config.description;
        this._queryStatement = config.queryStatement;
        this._statementName = config.statementName;
        this._workGroup = config.workGroup;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // query_statement - computed: false, optional: false, required: true
    private _queryStatement?: string; 
    public get queryStatement() {
        return this.getStringAttribute('query_statement');
    }
    public set queryStatement(value: string) {
        this._queryStatement = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStatementInput() {
        return this._queryStatement;
    }

    // statement_name - computed: false, optional: false, required: true
    private _statementName?: string; 
    public get statementName() {
        return this.getStringAttribute('statement_name');
    }
    public set statementName(value: string) {
        this._statementName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statementNameInput() {
        return this._statementName;
    }

    // work_group - computed: false, optional: false, required: true
    private _workGroup?: string; 
    public get workGroup() {
        return this.getStringAttribute('work_group');
    }
    public set workGroup(value: string) {
        this._workGroup = value;
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
            description: cdktn.stringToTerraform(this._description),
            query_statement: cdktn.stringToTerraform(this._queryStatement),
            statement_name: cdktn.stringToTerraform(this._statementName),
            work_group: cdktn.stringToTerraform(this._workGroup),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            query_statement: {
                value: cdktn.stringToHclTerraform(this._queryStatement),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            statement_name: {
                value: cdktn.stringToHclTerraform(this._statementName),
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

export namespace CcPreparedStatement {
}
