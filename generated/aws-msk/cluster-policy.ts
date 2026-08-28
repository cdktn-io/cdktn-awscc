// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_cluster_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The arn of the cluster for the resource policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_cluster_policy#cluster_arn CcClusterPolicy#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * A policy document containing permissions to add to the specified cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_cluster_policy#policy CcClusterPolicy#policy}
    */
    readonly policy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_cluster_policy awscc_msk_cluster_policy}
*/
export class CcClusterPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_msk_cluster_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcClusterPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcClusterPolicy to import
    * @param importFromId The id of the existing CcClusterPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_cluster_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcClusterPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_cluster_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_cluster_policy awscc_msk_cluster_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcClusterPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_msk_cluster_policy',
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
        this._clusterArn = config.clusterArn;
        this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn?: string; 
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
        this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
        return this._clusterArn;
    }

    // current_version - computed: true, optional: false, required: false
    public get currentVersion() {
        return this.getStringAttribute('current_version');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cluster_arn: cdktn.stringToTerraform(this._clusterArn),
            policy: cdktn.stringToTerraform(this._policy),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cluster_arn: {
                value: cdktn.stringToHclTerraform(this._clusterArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcClusterPolicy {
}
