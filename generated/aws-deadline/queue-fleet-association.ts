// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_queue_fleet_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQueueFleetAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_queue_fleet_association#farm_id CcQueueFleetAssociation#farm_id}
    */
    readonly farmId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_queue_fleet_association#fleet_id CcQueueFleetAssociation#fleet_id}
    */
    readonly fleetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_queue_fleet_association#queue_id CcQueueFleetAssociation#queue_id}
    */
    readonly queueId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_queue_fleet_association awscc_deadline_queue_fleet_association}
*/
export class CcQueueFleetAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_deadline_queue_fleet_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQueueFleetAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQueueFleetAssociation to import
    * @param importFromId The id of the existing CcQueueFleetAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_queue_fleet_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQueueFleetAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_deadline_queue_fleet_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/deadline_queue_fleet_association awscc_deadline_queue_fleet_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQueueFleetAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcQueueFleetAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_deadline_queue_fleet_association',
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
        this._farmId = config.farmId;
        this._fleetId = config.fleetId;
        this._queueId = config.queueId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // fleet_id - computed: false, optional: false, required: true
    private _fleetId?: string; 
    public get fleetId() {
        return this.getStringAttribute('fleet_id');
    }
    public set fleetId(value: string) {
        this._fleetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetIdInput() {
        return this._fleetId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // queue_id - computed: false, optional: false, required: true
    private _queueId?: string; 
    public get queueId() {
        return this.getStringAttribute('queue_id');
    }
    public set queueId(value: string) {
        this._queueId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queueIdInput() {
        return this._queueId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            farm_id: cdktn.stringToTerraform(this._farmId),
            fleet_id: cdktn.stringToTerraform(this._fleetId),
            queue_id: cdktn.stringToTerraform(this._queueId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            farm_id: {
                value: cdktn.stringToHclTerraform(this._farmId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fleet_id: {
                value: cdktn.stringToHclTerraform(this._fleetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            queue_id: {
                value: cdktn.stringToHclTerraform(this._queueId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcQueueFleetAssociation {
}
