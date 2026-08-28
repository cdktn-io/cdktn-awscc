// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGuardrailVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * Description of the Guardrail version
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail_version#description CcGuardrailVersion#description}
    */
    readonly description?: string;
    /**
    * Identifier (GuardrailId or GuardrailArn) for the guardrail
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail_version#guardrail_identifier CcGuardrailVersion#guardrail_identifier}
    */
    readonly guardrailIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail_version awscc_bedrock_guardrail_version}
*/
export class CcGuardrailVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_guardrail_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGuardrailVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGuardrailVersion to import
    * @param importFromId The id of the existing CcGuardrailVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGuardrailVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_guardrail_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_guardrail_version awscc_bedrock_guardrail_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGuardrailVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcGuardrailVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_guardrail_version',
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
        this._description = config.description;
        this._guardrailIdentifier = config.guardrailIdentifier;
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

    // guardrail_arn - computed: true, optional: false, required: false
    public get guardrailArn() {
        return this.getStringAttribute('guardrail_arn');
    }

    // guardrail_id - computed: true, optional: false, required: false
    public get guardrailId() {
        return this.getStringAttribute('guardrail_id');
    }

    // guardrail_identifier - computed: false, optional: false, required: true
    private _guardrailIdentifier?: string; 
    public get guardrailIdentifier() {
        return this.getStringAttribute('guardrail_identifier');
    }
    public set guardrailIdentifier(value: string) {
        this._guardrailIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get guardrailIdentifierInput() {
        return this._guardrailIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            guardrail_identifier: cdktn.stringToTerraform(this._guardrailIdentifier),
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
            guardrail_identifier: {
                value: cdktn.stringToHclTerraform(this._guardrailIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcGuardrailVersion {
}
