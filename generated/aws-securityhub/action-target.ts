// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityhub_action_target

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcActionTargetProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID for the custom action target. Can contain up to 20 alphanumeric characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityhub_action_target#action_target_id CcActionTarget#action_target_id}
    */
    readonly actionTargetId: string;
    /**
    * The description for the custom action target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityhub_action_target#description CcActionTarget#description}
    */
    readonly description: string;
    /**
    * The name of the custom action target. Can contain up to 20 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityhub_action_target#name CcActionTarget#name}
    */
    readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityhub_action_target awscc_securityhub_action_target}
*/
export class CcActionTarget extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_action_target";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcActionTarget resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcActionTarget to import
    * @param importFromId The id of the existing CcActionTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityhub_action_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcActionTarget to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_action_target", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/securityhub_action_target awscc_securityhub_action_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcActionTargetProps
    */
    public constructor(scope: Construct, id: string, config: CcActionTargetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_action_target',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._actionTargetId = config.actionTargetId;
        this._description = config.description;
        this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action_target_arn - computed: true, optional: false, required: false
    public get actionTargetArn() {
        return this.getStringAttribute('action_target_arn');
    }

    // action_target_id - computed: false, optional: false, required: true
    private _actionTargetId?: string; 
    public get actionTargetId() {
        return this.getStringAttribute('action_target_id');
    }
    public set actionTargetId(value: string) {
        this._actionTargetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionTargetIdInput() {
        return this._actionTargetId;
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action_target_id: cdktn.stringToTerraform(this._actionTargetId),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action_target_id: {
                value: cdktn.stringToHclTerraform(this._actionTargetId),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcActionTarget {
}
