// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_propagation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRouteServerPropagationProps extends cdktn.TerraformMetaArguments {
    /**
    * Route Server ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_propagation#route_server_id CcRouteServerPropagation#route_server_id}
    */
    readonly routeServerId: string;
    /**
    * Route Table ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_propagation#route_table_id CcRouteServerPropagation#route_table_id}
    */
    readonly routeTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_propagation awscc_ec2_route_server_propagation}
*/
export class CcRouteServerPropagation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_route_server_propagation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRouteServerPropagation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRouteServerPropagation to import
    * @param importFromId The id of the existing CcRouteServerPropagation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_propagation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRouteServerPropagation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_route_server_propagation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server_propagation awscc_ec2_route_server_propagation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRouteServerPropagationProps
    */
    public constructor(scope: Construct, id: string, config: CcRouteServerPropagationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_route_server_propagation',
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
        this._routeServerId = config.routeServerId;
        this._routeTableId = config.routeTableId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // route_server_id - computed: false, optional: false, required: true
    private _routeServerId?: string; 
    public get routeServerId() {
        return this.getStringAttribute('route_server_id');
    }
    public set routeServerId(value: string) {
        this._routeServerId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeServerIdInput() {
        return this._routeServerId;
    }

    // route_table_id - computed: false, optional: false, required: true
    private _routeTableId?: string; 
    public get routeTableId() {
        return this.getStringAttribute('route_table_id');
    }
    public set routeTableId(value: string) {
        this._routeTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeTableIdInput() {
        return this._routeTableId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            route_server_id: cdktn.stringToTerraform(this._routeServerId),
            route_table_id: cdktn.stringToTerraform(this._routeTableId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            route_server_id: {
                value: cdktn.stringToHclTerraform(this._routeServerId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            route_table_id: {
                value: cdktn.stringToHclTerraform(this._routeTableId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcRouteServerPropagation {
}
