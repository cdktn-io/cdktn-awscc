// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSimulationApplicationVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application_version#application CcSimulationApplicationVersion#application}
    */
    readonly application: string;
    /**
    * The revision ID of robot application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application_version#current_revision_id CcSimulationApplicationVersion#current_revision_id}
    */
    readonly currentRevisionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application_version awscc_robomaker_simulation_application_version}
*/
export class CcSimulationApplicationVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_robomaker_simulation_application_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSimulationApplicationVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSimulationApplicationVersion to import
    * @param importFromId The id of the existing CcSimulationApplicationVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSimulationApplicationVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_robomaker_simulation_application_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/robomaker_simulation_application_version awscc_robomaker_simulation_application_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSimulationApplicationVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcSimulationApplicationVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_robomaker_simulation_application_version',
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
        this._application = config.application;
        this._currentRevisionId = config.currentRevisionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application - computed: false, optional: false, required: true
    private _application?: string; 
    public get application() {
        return this.getStringAttribute('application');
    }
    public set application(value: string) {
        this._application = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationInput() {
        return this._application;
    }

    // application_version - computed: true, optional: false, required: false
    public get applicationVersion() {
        return this.getStringAttribute('application_version');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // current_revision_id - computed: true, optional: true, required: false
    private _currentRevisionId?: string; 
    public get currentRevisionId() {
        return this.getStringAttribute('current_revision_id');
    }
    public set currentRevisionId(value: string) {
        this._currentRevisionId = value;
    }
    public resetCurrentRevisionId() {
        this._currentRevisionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get currentRevisionIdInput() {
        return this._currentRevisionId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application: cdktn.stringToTerraform(this._application),
            current_revision_id: cdktn.stringToTerraform(this._currentRevisionId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application: {
                value: cdktn.stringToHclTerraform(this._application),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            current_revision_id: {
                value: cdktn.stringToHclTerraform(this._currentRevisionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSimulationApplicationVersion {
}
