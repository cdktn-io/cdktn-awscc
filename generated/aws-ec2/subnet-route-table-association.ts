// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_route_table_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSubnetRouteTableAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the route table.
    *  The physical ID changes when the route table ID is changed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_route_table_association#route_table_id CcSubnetRouteTableAssociation#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * The ID of the subnet.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_route_table_association#subnet_id CcSubnetRouteTableAssociation#subnet_id}
    */
    readonly subnetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_route_table_association awscc_ec2_subnet_route_table_association}
*/
export class CcSubnetRouteTableAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_subnet_route_table_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSubnetRouteTableAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSubnetRouteTableAssociation to import
    * @param importFromId The id of the existing CcSubnetRouteTableAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_route_table_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSubnetRouteTableAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_subnet_route_table_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_route_table_association awscc_ec2_subnet_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSubnetRouteTableAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcSubnetRouteTableAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_subnet_route_table_association',
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
        this._routeTableId = config.routeTableId;
        this._subnetId = config.subnetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // subnet_id - computed: false, optional: false, required: true
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }

    // subnet_route_table_association_id - computed: true, optional: false, required: false
    public get subnetRouteTableAssociationId() {
        return this.getStringAttribute('subnet_route_table_association_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            route_table_id: cdktn.stringToTerraform(this._routeTableId),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            route_table_id: {
                value: cdktn.stringToHclTerraform(this._routeTableId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subnet_id: {
                value: cdktn.stringToHclTerraform(this._subnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcSubnetRouteTableAssociation {
}
