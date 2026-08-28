// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptunegraph_private_graph_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPrivateGraphEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * The auto-generated Graph Id assigned by the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptunegraph_private_graph_endpoint#graph_identifier CcPrivateGraphEndpoint#graph_identifier}
    */
    readonly graphIdentifier: string;
    /**
    * The security group Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptunegraph_private_graph_endpoint#security_group_ids CcPrivateGraphEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The subnet Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptunegraph_private_graph_endpoint#subnet_ids CcPrivateGraphEndpoint#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * The VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptunegraph_private_graph_endpoint#vpc_id CcPrivateGraphEndpoint#vpc_id}
    */
    readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptunegraph_private_graph_endpoint awscc_neptunegraph_private_graph_endpoint}
*/
export class CcPrivateGraphEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_neptunegraph_private_graph_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPrivateGraphEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPrivateGraphEndpoint to import
    * @param importFromId The id of the existing CcPrivateGraphEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptunegraph_private_graph_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPrivateGraphEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_neptunegraph_private_graph_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptunegraph_private_graph_endpoint awscc_neptunegraph_private_graph_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPrivateGraphEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcPrivateGraphEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_neptunegraph_private_graph_endpoint',
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
        this._graphIdentifier = config.graphIdentifier;
        this._securityGroupIds = config.securityGroupIds;
        this._subnetIds = config.subnetIds;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // graph_identifier - computed: false, optional: false, required: true
    private _graphIdentifier?: string; 
    public get graphIdentifier() {
        return this.getStringAttribute('graph_identifier');
    }
    public set graphIdentifier(value: string) {
        this._graphIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get graphIdentifierInput() {
        return this._graphIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // private_graph_endpoint_identifier - computed: true, optional: false, required: false
    public get privateGraphEndpointIdentifier() {
        return this.getStringAttribute('private_graph_endpoint_identifier');
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }

    // vpc_endpoint_id - computed: true, optional: false, required: false
    public get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            graph_identifier: cdktn.stringToTerraform(this._graphIdentifier),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            graph_identifier: {
                value: cdktn.stringToHclTerraform(this._graphIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            subnet_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPrivateGraphEndpoint {
}
