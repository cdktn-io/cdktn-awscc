// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_route

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayRouteProps extends cdktn.TerraformMetaArguments {
    /**
    * Indicates whether to drop traffic that matches this route.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_route#blackhole CcTransitGatewayRoute#blackhole}
    */
    readonly blackhole?: boolean | cdktn.IResolvable;
    /**
    * The CIDR range used for destination matches. Routing decisions are based on the most specific match.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_route#destination_cidr_block CcTransitGatewayRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * The ID of transit gateway attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_route#transit_gateway_attachment_id CcTransitGatewayRoute#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId?: string;
    /**
    * The ID of transit gateway route table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_route#transit_gateway_route_table_id CcTransitGatewayRoute#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_route awscc_ec2_transit_gateway_route}
*/
export class CcTransitGatewayRoute extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_transit_gateway_route";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayRoute resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayRoute to import
    * @param importFromId The id of the existing CcTransitGatewayRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayRoute to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_route", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_route awscc_ec2_transit_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayRouteProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayRouteProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_transit_gateway_route',
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
        this._blackhole = config.blackhole;
        this._destinationCidrBlock = config.destinationCidrBlock;
        this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
        this._transitGatewayRouteTableId = config.transitGatewayRouteTableId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // blackhole - computed: true, optional: true, required: false
    private _blackhole?: boolean | cdktn.IResolvable; 
    public get blackhole() {
        return this.getBooleanAttribute('blackhole');
    }
    public set blackhole(value: boolean | cdktn.IResolvable) {
        this._blackhole = value;
    }
    public resetBlackhole() {
        this._blackhole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blackholeInput() {
        return this._blackhole;
    }

    // destination_cidr_block - computed: false, optional: false, required: true
    private _destinationCidrBlock?: string; 
    public get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    public set destinationCidrBlock(value: string) {
        this._destinationCidrBlock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationCidrBlockInput() {
        return this._destinationCidrBlock;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // transit_gateway_attachment_id - computed: true, optional: true, required: false
    private _transitGatewayAttachmentId?: string; 
    public get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }
    public set transitGatewayAttachmentId(value: string) {
        this._transitGatewayAttachmentId = value;
    }
    public resetTransitGatewayAttachmentId() {
        this._transitGatewayAttachmentId = undefined;
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
            blackhole: cdktn.booleanToTerraform(this._blackhole),
            destination_cidr_block: cdktn.stringToTerraform(this._destinationCidrBlock),
            transit_gateway_attachment_id: cdktn.stringToTerraform(this._transitGatewayAttachmentId),
            transit_gateway_route_table_id: cdktn.stringToTerraform(this._transitGatewayRouteTableId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            blackhole: {
                value: cdktn.booleanToHclTerraform(this._blackhole),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            destination_cidr_block: {
                value: cdktn.stringToHclTerraform(this._destinationCidrBlock),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
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

export namespace CcTransitGatewayRoute {
}
