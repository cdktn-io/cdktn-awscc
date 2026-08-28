// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application_fleet_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationFleetAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application_fleet_association#application_arn CcApplicationFleetAssociation#application_arn}
    */
    readonly applicationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application_fleet_association#fleet_name CcApplicationFleetAssociation#fleet_name}
    */
    readonly fleetName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application_fleet_association awscc_appstream_application_fleet_association}
*/
export class CcApplicationFleetAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appstream_application_fleet_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplicationFleetAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplicationFleetAssociation to import
    * @param importFromId The id of the existing CcApplicationFleetAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application_fleet_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplicationFleetAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_application_fleet_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appstream_application_fleet_association awscc_appstream_application_fleet_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationFleetAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationFleetAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appstream_application_fleet_association',
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
        this._applicationArn = config.applicationArn;
        this._fleetName = config.fleetName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_arn - computed: false, optional: false, required: true
    private _applicationArn?: string; 
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }
    public set applicationArn(value: string) {
        this._applicationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationArnInput() {
        return this._applicationArn;
    }

    // fleet_name - computed: false, optional: false, required: true
    private _fleetName?: string; 
    public get fleetName() {
        return this.getStringAttribute('fleet_name');
    }
    public set fleetName(value: string) {
        this._fleetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetNameInput() {
        return this._fleetName;
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
            application_arn: cdktn.stringToTerraform(this._applicationArn),
            fleet_name: cdktn.stringToTerraform(this._fleetName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_arn: {
                value: cdktn.stringToHclTerraform(this._applicationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fleet_name: {
                value: cdktn.stringToHclTerraform(this._fleetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcApplicationFleetAssociation {
}
