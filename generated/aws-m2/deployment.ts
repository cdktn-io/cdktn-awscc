// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/m2_deployment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeploymentProps extends cdktn.TerraformMetaArguments {
    /**
    * The application ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/m2_deployment#application_id CcDeployment#application_id}
    */
    readonly applicationId: string;
    /**
    * The version number of the application to deploy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/m2_deployment#application_version CcDeployment#application_version}
    */
    readonly applicationVersion: number;
    /**
    * The environment ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/m2_deployment#environment_id CcDeployment#environment_id}
    */
    readonly environmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/m2_deployment awscc_m2_deployment}
*/
export class CcDeployment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_m2_deployment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDeployment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDeployment to import
    * @param importFromId The id of the existing CcDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/m2_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDeployment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_m2_deployment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/m2_deployment awscc_m2_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeploymentProps
    */
    public constructor(scope: Construct, id: string, config: CcDeploymentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_m2_deployment',
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
        this._applicationId = config.applicationId;
        this._applicationVersion = config.applicationVersion;
        this._environmentId = config.environmentId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: false, optional: false, required: true
    private _applicationId?: string; 
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string) {
        this._applicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
        return this._applicationId;
    }

    // application_version - computed: false, optional: false, required: true
    private _applicationVersion?: number; 
    public get applicationVersion() {
        return this.getNumberAttribute('application_version');
    }
    public set applicationVersion(value: number) {
        this._applicationVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationVersionInput() {
        return this._applicationVersion;
    }

    // deployment_id - computed: true, optional: false, required: false
    public get deploymentId() {
        return this.getStringAttribute('deployment_id');
    }

    // environment_id - computed: false, optional: false, required: true
    private _environmentId?: string; 
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }
    public set environmentId(value: string) {
        this._environmentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentIdInput() {
        return this._environmentId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_id: cdktn.stringToTerraform(this._applicationId),
            application_version: cdktn.numberToTerraform(this._applicationVersion),
            environment_id: cdktn.stringToTerraform(this._environmentId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_id: {
                value: cdktn.stringToHclTerraform(this._applicationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            application_version: {
                value: cdktn.numberToHclTerraform(this._applicationVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            environment_id: {
                value: cdktn.stringToHclTerraform(this._environmentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcDeployment {
}
