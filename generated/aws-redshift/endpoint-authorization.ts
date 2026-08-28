// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_authorization

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEndpointAuthorizationProps extends cdktn.TerraformMetaArguments {
    /**
    * The target AWS account ID to grant or revoke access for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_authorization#account CcEndpointAuthorization#account}
    */
    readonly account: string;
    /**
    * The cluster identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_authorization#cluster_identifier CcEndpointAuthorization#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    *  Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_authorization#force CcEndpointAuthorization#force}
    */
    readonly force?: boolean | cdktn.IResolvable;
    /**
    * The virtual private cloud (VPC) identifiers to grant or revoke access to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_authorization#vpc_ids CcEndpointAuthorization#vpc_ids}
    */
    readonly vpcIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_authorization awscc_redshift_endpoint_authorization}
*/
export class CcEndpointAuthorization extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshift_endpoint_authorization";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEndpointAuthorization resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEndpointAuthorization to import
    * @param importFromId The id of the existing CcEndpointAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_authorization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEndpointAuthorization to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_endpoint_authorization", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_endpoint_authorization awscc_redshift_endpoint_authorization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEndpointAuthorizationProps
    */
    public constructor(scope: Construct, id: string, config: CcEndpointAuthorizationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshift_endpoint_authorization',
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
        this._account = config.account;
        this._clusterIdentifier = config.clusterIdentifier;
        this._force = config.force;
        this._vpcIds = config.vpcIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account - computed: false, optional: false, required: true
    private _account?: string; 
    public get account() {
        return this.getStringAttribute('account');
    }
    public set account(value: string) {
        this._account = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountInput() {
        return this._account;
    }

    // allowed_all_vp_cs - computed: true, optional: false, required: false
    public get allowedAllVpCs() {
        return this.getBooleanAttribute('allowed_all_vp_cs');
    }

    // allowed_vp_cs - computed: true, optional: false, required: false
    public get allowedVpCs() {
        return this.getListAttribute('allowed_vp_cs');
    }

    // authorize_time - computed: true, optional: false, required: false
    public get authorizeTime() {
        return this.getStringAttribute('authorize_time');
    }

    // cluster_identifier - computed: false, optional: false, required: true
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
        this._clusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }

    // cluster_status - computed: true, optional: false, required: false
    public get clusterStatus() {
        return this.getStringAttribute('cluster_status');
    }

    // endpoint_count - computed: true, optional: false, required: false
    public get endpointCount() {
        return this.getNumberAttribute('endpoint_count');
    }

    // force - computed: true, optional: true, required: false
    private _force?: boolean | cdktn.IResolvable; 
    public get force() {
        return this.getBooleanAttribute('force');
    }
    public set force(value: boolean | cdktn.IResolvable) {
        this._force = value;
    }
    public resetForce() {
        this._force = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceInput() {
        return this._force;
    }

    // grantee - computed: true, optional: false, required: false
    public get grantee() {
        return this.getStringAttribute('grantee');
    }

    // grantor - computed: true, optional: false, required: false
    public get grantor() {
        return this.getStringAttribute('grantor');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // vpc_ids - computed: true, optional: true, required: false
    private _vpcIds?: string[]; 
    public get vpcIds() {
        return this.getListAttribute('vpc_ids');
    }
    public set vpcIds(value: string[]) {
        this._vpcIds = value;
    }
    public resetVpcIds() {
        this._vpcIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdsInput() {
        return this._vpcIds;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            account: cdktn.stringToTerraform(this._account),
            cluster_identifier: cdktn.stringToTerraform(this._clusterIdentifier),
            force: cdktn.booleanToTerraform(this._force),
            vpc_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            account: {
                value: cdktn.stringToHclTerraform(this._account),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._clusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            force: {
                value: cdktn.booleanToHclTerraform(this._force),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            vpc_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcEndpointAuthorization {
}
