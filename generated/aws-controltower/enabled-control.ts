// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/controltower_enabled_control

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnabledControlProps extends cdktn.TerraformMetaArguments {
    /**
    * Arn of the control.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/controltower_enabled_control#control_identifier CcEnabledControl#control_identifier}
    */
    readonly controlIdentifier: string;
    /**
    * Arn for Organizational unit to which the control needs to be applied
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/controltower_enabled_control#target_identifier CcEnabledControl#target_identifier}
    */
    readonly targetIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/controltower_enabled_control awscc_controltower_enabled_control}
*/
export class CcEnabledControl extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_controltower_enabled_control";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnabledControl resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnabledControl to import
    * @param importFromId The id of the existing CcEnabledControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/controltower_enabled_control#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnabledControl to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_controltower_enabled_control", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/controltower_enabled_control awscc_controltower_enabled_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnabledControlProps
    */
    public constructor(scope: Construct, id: string, config: CcEnabledControlProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_controltower_enabled_control',
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
        this._controlIdentifier = config.controlIdentifier;
        this._targetIdentifier = config.targetIdentifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // control_identifier - computed: false, optional: false, required: true
    private _controlIdentifier?: string; 
    public get controlIdentifier() {
        return this.getStringAttribute('control_identifier');
    }
    public set controlIdentifier(value: string) {
        this._controlIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get controlIdentifierInput() {
        return this._controlIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // target_identifier - computed: false, optional: false, required: true
    private _targetIdentifier?: string; 
    public get targetIdentifier() {
        return this.getStringAttribute('target_identifier');
    }
    public set targetIdentifier(value: string) {
        this._targetIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdentifierInput() {
        return this._targetIdentifier;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            control_identifier: cdktn.stringToTerraform(this._controlIdentifier),
            target_identifier: cdktn.stringToTerraform(this._targetIdentifier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            control_identifier: {
                value: cdktn.stringToHclTerraform(this._controlIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_identifier: {
                value: cdktn.stringToHclTerraform(this._targetIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcEnabledControl {
}
