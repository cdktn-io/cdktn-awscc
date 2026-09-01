// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_gateway_route_table_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGatewayRouteTableAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_gateway_route_table_association#gateway_id CcGatewayRouteTableAssociation#gateway_id}
    */
    readonly gatewayId: string;
    /**
    * The ID of the route table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_gateway_route_table_association#route_table_id CcGatewayRouteTableAssociation#route_table_id}
    */
    readonly routeTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_gateway_route_table_association awscc_ec2_gateway_route_table_association}
*/
export class CcGatewayRouteTableAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_gateway_route_table_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGatewayRouteTableAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGatewayRouteTableAssociation to import
    * @param importFromId The id of the existing CcGatewayRouteTableAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_gateway_route_table_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGatewayRouteTableAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_gateway_route_table_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_gateway_route_table_association awscc_ec2_gateway_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGatewayRouteTableAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcGatewayRouteTableAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_gateway_route_table_association',
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
        this._gatewayId = config.gatewayId;
        this._routeTableId = config.routeTableId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
        return this.getStringAttribute('association_id');
    }

    // gateway_id - computed: false, optional: false, required: true
    private _gatewayId?: string; 
    public get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    public set gatewayId(value: string) {
        this._gatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayIdInput() {
        return this._gatewayId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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
            gateway_id: cdktn.stringToTerraform(this._gatewayId),
            route_table_id: cdktn.stringToTerraform(this._routeTableId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            gateway_id: {
                value: cdktn.stringToHclTerraform(this._gatewayId),
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

export namespace CcGatewayRouteTableAssociation {
}
