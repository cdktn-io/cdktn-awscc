// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_vpc_connection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVpcConnectionProps extends cdktn.TerraformMetaArguments {
    /**
    * The type of private link authentication
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_vpc_connection#authentication CcVpcConnection#authentication}
    */
    readonly authentication: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_vpc_connection#client_subnets CcVpcConnection#client_subnets}
    */
    readonly clientSubnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_vpc_connection#security_groups CcVpcConnection#security_groups}
    */
    readonly securityGroups: string[];
    /**
    * A key-value pair to associate with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_vpc_connection#tags CcVpcConnection#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The Amazon Resource Name (ARN) of the target cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_vpc_connection#target_cluster_arn CcVpcConnection#target_cluster_arn}
    */
    readonly targetClusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_vpc_connection#vpc_id CcVpcConnection#vpc_id}
    */
    readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_vpc_connection awscc_msk_vpc_connection}
*/
export class CcVpcConnection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_msk_vpc_connection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVpcConnection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVpcConnection to import
    * @param importFromId The id of the existing CcVpcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_vpc_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVpcConnection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_vpc_connection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/msk_vpc_connection awscc_msk_vpc_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVpcConnectionProps
    */
    public constructor(scope: Construct, id: string, config: CcVpcConnectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_msk_vpc_connection',
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
        this._authentication = config.authentication;
        this._clientSubnets = config.clientSubnets;
        this._securityGroups = config.securityGroups;
        this._tags = config.tags;
        this._targetClusterArn = config.targetClusterArn;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // authentication - computed: false, optional: false, required: true
    private _authentication?: string; 
    public get authentication() {
        return this.getStringAttribute('authentication');
    }
    public set authentication(value: string) {
        this._authentication = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationInput() {
        return this._authentication;
    }

    // client_subnets - computed: false, optional: false, required: true
    private _clientSubnets?: string[]; 
    public get clientSubnets() {
        return this.getListAttribute('client_subnets');
    }
    public set clientSubnets(value: string[]) {
        this._clientSubnets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSubnetsInput() {
        return this._clientSubnets;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // security_groups - computed: false, optional: false, required: true
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // target_cluster_arn - computed: false, optional: false, required: true
    private _targetClusterArn?: string; 
    public get targetClusterArn() {
        return this.getStringAttribute('target_cluster_arn');
    }
    public set targetClusterArn(value: string) {
        this._targetClusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetClusterArnInput() {
        return this._targetClusterArn;
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
            authentication: cdktn.stringToTerraform(this._authentication),
            client_subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(this._clientSubnets),
            security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroups),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            target_cluster_arn: cdktn.stringToTerraform(this._targetClusterArn),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            authentication: {
                value: cdktn.stringToHclTerraform(this._authentication),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            client_subnets: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._clientSubnets),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            security_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            target_cluster_arn: {
                value: cdktn.stringToHclTerraform(this._targetClusterArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

export namespace CcVpcConnection {
}
