// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_tag_option

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTagOptionProps extends cdktn.TerraformMetaArguments {
    /**
    * The TagOption active state.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_tag_option#active CcTagOption#active}
    */
    readonly active?: boolean | cdktn.IResolvable;
    /**
    * The TagOption key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_tag_option#key CcTagOption#key}
    */
    readonly key: string;
    /**
    * The TagOption value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_tag_option#value CcTagOption#value}
    */
    readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_tag_option awscc_servicecatalog_tag_option}
*/
export class CcTagOption extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_servicecatalog_tag_option";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTagOption resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTagOption to import
    * @param importFromId The id of the existing CcTagOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_tag_option#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTagOption to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_servicecatalog_tag_option", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/servicecatalog_tag_option awscc_servicecatalog_tag_option} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTagOptionProps
    */
    public constructor(scope: Construct, id: string, config: CcTagOptionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_servicecatalog_tag_option',
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
        this._active = config.active;
        this._key = config.key;
        this._value = config.value;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // active - computed: true, optional: true, required: false
    private _active?: boolean | cdktn.IResolvable; 
    public get active() {
        return this.getBooleanAttribute('active');
    }
    public set active(value: boolean | cdktn.IResolvable) {
        this._active = value;
    }
    public resetActive() {
        this._active = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeInput() {
        return this._active;
    }

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

    // tag_option_id - computed: true, optional: false, required: false
    public get tagOptionId() {
        return this.getStringAttribute('tag_option_id');
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
            active: cdktn.booleanToTerraform(this._active),
            key: cdktn.stringToTerraform(this._key),
            value: cdktn.stringToTerraform(this._value),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            active: {
                value: cdktn.booleanToHclTerraform(this._active),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            key: {
                value: cdktn.stringToHclTerraform(this._key),
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

export namespace CcTagOption {
}
