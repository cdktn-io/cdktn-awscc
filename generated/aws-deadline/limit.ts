// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_limit

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcLimitProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_limit#amount_requirement_name CcLimit#amount_requirement_name}
    */
    readonly amountRequirementName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_limit#description CcLimit#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_limit#display_name CcLimit#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_limit#farm_id CcLimit#farm_id}
    */
    readonly farmId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_limit#max_count CcLimit#max_count}
    */
    readonly maxCount: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_limit awscc_deadline_limit}
*/
export class CcLimit extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_deadline_limit";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcLimit resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcLimit to import
    * @param importFromId The id of the existing CcLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_limit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcLimit to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_deadline_limit", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_limit awscc_deadline_limit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcLimitProps
    */
    public constructor(scope: Construct, id: string, config: CcLimitProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_deadline_limit',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._amountRequirementName = config.amountRequirementName;
        this._description = config.description;
        this._displayName = config.displayName;
        this._farmId = config.farmId;
        this._maxCount = config.maxCount;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // amount_requirement_name - computed: false, optional: false, required: true
    private _amountRequirementName?: string; 
    public get amountRequirementName() {
        return this.getStringAttribute('amount_requirement_name');
    }
    public set amountRequirementName(value: string) {
        this._amountRequirementName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get amountRequirementNameInput() {
        return this._amountRequirementName;
    }

    // current_count - computed: true, optional: false, required: false
    public get currentCount() {
        return this.getNumberAttribute('current_count');
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

    // display_name - computed: false, optional: false, required: true
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // farm_id - computed: false, optional: false, required: true
    private _farmId?: string; 
    public get farmId() {
        return this.getStringAttribute('farm_id');
    }
    public set farmId(value: string) {
        this._farmId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get farmIdInput() {
        return this._farmId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // limit_id - computed: true, optional: false, required: false
    public get limitId() {
        return this.getStringAttribute('limit_id');
    }

    // max_count - computed: false, optional: false, required: true
    private _maxCount?: number; 
    public get maxCount() {
        return this.getNumberAttribute('max_count');
    }
    public set maxCount(value: number) {
        this._maxCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCountInput() {
        return this._maxCount;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            amount_requirement_name: cdktn.stringToTerraform(this._amountRequirementName),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            farm_id: cdktn.stringToTerraform(this._farmId),
            max_count: cdktn.numberToTerraform(this._maxCount),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            amount_requirement_name: {
                value: cdktn.stringToHclTerraform(this._amountRequirementName),
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
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            farm_id: {
                value: cdktn.stringToHclTerraform(this._farmId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_count: {
                value: cdktn.numberToHclTerraform(this._maxCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcLimit {
}
