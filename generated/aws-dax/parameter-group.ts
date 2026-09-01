// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dax_parameter_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcParameterGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * A description of the parameter group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dax_parameter_group#description CcParameterGroup#description}
    */
    readonly description?: string;
    /**
    * The name of the parameter group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dax_parameter_group#parameter_group_name CcParameterGroup#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * An array of name-value pairs for the parameters in the group. Each element in the array represents a single parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dax_parameter_group#parameter_name_values CcParameterGroup#parameter_name_values}
    */
    readonly parameterNameValues?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dax_parameter_group awscc_dax_parameter_group}
*/
export class CcParameterGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dax_parameter_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcParameterGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcParameterGroup to import
    * @param importFromId The id of the existing CcParameterGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dax_parameter_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcParameterGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dax_parameter_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dax_parameter_group awscc_dax_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcParameterGroupProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcParameterGroupProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_dax_parameter_group',
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
        this._parameterGroupName = config.parameterGroupName;
        this._parameterNameValues = config.parameterNameValues;
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

    // parameter_group_name - computed: true, optional: true, required: false
    private _parameterGroupName?: string; 
    public get parameterGroupName() {
        return this.getStringAttribute('parameter_group_name');
    }
    public set parameterGroupName(value: string) {
        this._parameterGroupName = value;
    }
    public resetParameterGroupName() {
        this._parameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterGroupNameInput() {
        return this._parameterGroupName;
    }

    // parameter_name_values - computed: true, optional: true, required: false
    private _parameterNameValues?: string; 
    public get parameterNameValues() {
        return this.getStringAttribute('parameter_name_values');
    }
    public set parameterNameValues(value: string) {
        this._parameterNameValues = value;
    }
    public resetParameterNameValues() {
        this._parameterNameValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterNameValuesInput() {
        return this._parameterNameValues;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            parameter_group_name: cdktn.stringToTerraform(this._parameterGroupName),
            parameter_name_values: cdktn.stringToTerraform(this._parameterNameValues),
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
            parameter_group_name: {
                value: cdktn.stringToHclTerraform(this._parameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameter_name_values: {
                value: cdktn.stringToHclTerraform(this._parameterNameValues),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcParameterGroup {
}
