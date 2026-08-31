// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_route_table_propagation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayRouteTablePropagationProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of transit gateway attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_route_table_propagation#transit_gateway_attachment_id CcTransitGatewayRouteTablePropagation#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * The ID of transit gateway route table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_route_table_propagation#transit_gateway_route_table_id CcTransitGatewayRouteTablePropagation#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_route_table_propagation awscc_ec2_transit_gateway_route_table_propagation}
*/
export class CcTransitGatewayRouteTablePropagation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_transit_gateway_route_table_propagation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayRouteTablePropagation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayRouteTablePropagation to import
    * @param importFromId The id of the existing CcTransitGatewayRouteTablePropagation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_route_table_propagation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayRouteTablePropagation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_route_table_propagation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_route_table_propagation awscc_ec2_transit_gateway_route_table_propagation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayRouteTablePropagationProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayRouteTablePropagationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_transit_gateway_route_table_propagation',
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
        this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
        this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // transit_gateway_attachment_id - computed: false, optional: false, required: true
    private _transitGatewayAttachmentId?: string; 
    public get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }
    public set transitGatewayAttachmentId(value: string) {
        this._transitGatewayAttachmentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayAttachmentIdInput() {
        return this._transitGatewayAttachmentId;
    }

    // transit_gateway_route_table_id - computed: false, optional: false, required: true
    private _transitGatewayRouteTableId?: string; 
    public get transitGatewayRouteTableId() {
        return this.getStringAttribute('transit_gateway_route_table_id');
    }
    public set transitGatewayRouteTableId(value: string) {
        this._transitGatewayRouteTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayRouteTableIdInput() {
        return this._transitGatewayRouteTableId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            transit_gateway_attachment_id: cdktn.stringToTerraform(this._transitGatewayAttachmentId),
            transit_gateway_route_table_id: cdktn.stringToTerraform(this._transitGatewayRouteTableId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            transit_gateway_attachment_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayAttachmentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            transit_gateway_route_table_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayRouteTableId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTransitGatewayRouteTablePropagation {
}
