// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ip_pool_route_table_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIpPoolRouteTableAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the public IPv4 pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ip_pool_route_table_association#public_ipv_4_pool CcIpPoolRouteTableAssociation#public_ipv_4_pool}
    */
    readonly publicIpv4Pool: string;
    /**
    * The ID of the route table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ip_pool_route_table_association#route_table_id CcIpPoolRouteTableAssociation#route_table_id}
    */
    readonly routeTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ip_pool_route_table_association awscc_ec2_ip_pool_route_table_association}
*/
export class CcIpPoolRouteTableAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_ip_pool_route_table_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIpPoolRouteTableAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIpPoolRouteTableAssociation to import
    * @param importFromId The id of the existing CcIpPoolRouteTableAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ip_pool_route_table_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIpPoolRouteTableAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_ip_pool_route_table_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_ip_pool_route_table_association awscc_ec2_ip_pool_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIpPoolRouteTableAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcIpPoolRouteTableAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_ip_pool_route_table_association',
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
        this._publicIpv4Pool = config.publicIpv4Pool;
        this._routeTableId = config.routeTableId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
        return this.getStringAttribute('association_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // public_ipv_4_pool - computed: false, optional: false, required: true
    private _publicIpv4Pool?: string; 
    public get publicIpv4Pool() {
        return this.getStringAttribute('public_ipv_4_pool');
    }
    public set publicIpv4Pool(value: string) {
        this._publicIpv4Pool = value;
    }
    // Temporarily expose input value. Use with caution.
    public get publicIpv4PoolInput() {
        return this._publicIpv4Pool;
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
            public_ipv_4_pool: cdktn.stringToTerraform(this._publicIpv4Pool),
            route_table_id: cdktn.stringToTerraform(this._routeTableId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            public_ipv_4_pool: {
                value: cdktn.stringToHclTerraform(this._publicIpv4Pool),
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

export namespace CcIpPoolRouteTableAssociation {
}
