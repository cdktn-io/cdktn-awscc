// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_network_acl_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSubnetNetworkAclAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the network ACL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_network_acl_association#network_acl_id CcSubnetNetworkAclAssociation#network_acl_id}
    */
    readonly networkAclId: string;
    /**
    * The ID of the subnet
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_network_acl_association#subnet_id CcSubnetNetworkAclAssociation#subnet_id}
    */
    readonly subnetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_network_acl_association awscc_ec2_subnet_network_acl_association}
*/
export class CcSubnetNetworkAclAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_subnet_network_acl_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSubnetNetworkAclAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSubnetNetworkAclAssociation to import
    * @param importFromId The id of the existing CcSubnetNetworkAclAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_network_acl_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSubnetNetworkAclAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_subnet_network_acl_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_subnet_network_acl_association awscc_ec2_subnet_network_acl_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSubnetNetworkAclAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcSubnetNetworkAclAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_subnet_network_acl_association',
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
        this._networkAclId = config.networkAclId;
        this._subnetId = config.subnetId;
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

    // network_acl_id - computed: false, optional: false, required: true
    private _networkAclId?: string; 
    public get networkAclId() {
        return this.getStringAttribute('network_acl_id');
    }
    public set networkAclId(value: string) {
        this._networkAclId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get networkAclIdInput() {
        return this._networkAclId;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            network_acl_id: cdktn.stringToTerraform(this._networkAclId),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            network_acl_id: {
                value: cdktn.stringToHclTerraform(this._networkAclId),
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

export namespace CcSubnetNetworkAclAssociation {
}
