// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway_cluster_associations

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGatewayClusterAssociationsProps extends cdktn.TerraformMetaArguments {
    /**
    * The name or full Amazon Resource Name (ARN) of the cluster to associate the gateway with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway_cluster_associations#cluster CcGatewayClusterAssociations#cluster}
    */
    readonly cluster: string;
    /**
    * The name or full Amazon Resource Name (ARN) of the gateway to associate with the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway_cluster_associations#gateway CcGatewayClusterAssociations#gateway}
    */
    readonly gateway: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway_cluster_associations awscc_ecs_gateway_cluster_associations}
*/
export class CcGatewayClusterAssociations extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecs_gateway_cluster_associations";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGatewayClusterAssociations resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGatewayClusterAssociations to import
    * @param importFromId The id of the existing CcGatewayClusterAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway_cluster_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGatewayClusterAssociations to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_gateway_cluster_associations", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway_cluster_associations awscc_ecs_gateway_cluster_associations} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGatewayClusterAssociationsProps
    */
    public constructor(scope: Construct, id: string, config: CcGatewayClusterAssociationsProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecs_gateway_cluster_associations',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._cluster = config.cluster;
        this._gateway = config.gateway;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster - computed: false, optional: false, required: true
    private _cluster?: string; 
    public get cluster() {
        return this.getStringAttribute('cluster');
    }
    public set cluster(value: string) {
        this._cluster = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterInput() {
        return this._cluster;
    }

    // cluster_arn - computed: true, optional: false, required: false
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }

    // gateway - computed: false, optional: false, required: true
    private _gateway?: string; 
    public get gateway() {
        return this.getStringAttribute('gateway');
    }
    public set gateway(value: string) {
        this._gateway = value;
    }
    // Temporarily expose input value. Use with caution.
    public get gatewayInput() {
        return this._gateway;
    }

    // gateway_arn - computed: true, optional: false, required: false
    public get gatewayArn() {
        return this.getStringAttribute('gateway_arn');
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
            cluster: cdktn.stringToTerraform(this._cluster),
            gateway: cdktn.stringToTerraform(this._gateway),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster: {
                value: cdktn.stringToHclTerraform(this._cluster),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gateway: {
                value: cdktn.stringToHclTerraform(this._gateway),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcGatewayClusterAssociations {
}
