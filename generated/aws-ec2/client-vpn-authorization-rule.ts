// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClientVpnAuthorizationRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group. Required if `AuthorizeAllGroups` is `false` or not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#access_group_id CcClientVpnAuthorizationRule#access_group_id}
    */
    readonly accessGroupId?: string;
    /**
    * Indicates whether to grant access to all clients. Specify `true` to grant all clients who successfully establish a VPN connection access to the network. Must be set to `true` if `AccessGroupId` is not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#authorize_all_groups CcClientVpnAuthorizationRule#authorize_all_groups}
    */
    readonly authorizeAllGroups?: boolean | cdktn.IResolvable;
    /**
    * The ID of the Client VPN endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#client_vpn_endpoint_id CcClientVpnAuthorizationRule#client_vpn_endpoint_id}
    */
    readonly clientVpnEndpointId: string;
    /**
    * A brief description of the authorization rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#description CcClientVpnAuthorizationRule#description}
    */
    readonly description?: string;
    /**
    * The IPv4 address range, in CIDR notation, of the network for which access is being authorized.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#target_network_cidr CcClientVpnAuthorizationRule#target_network_cidr}
    */
    readonly targetNetworkCidr: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule awscc_ec2_client_vpn_authorization_rule}
*/
export class CcClientVpnAuthorizationRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_client_vpn_authorization_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcClientVpnAuthorizationRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcClientVpnAuthorizationRule to import
    * @param importFromId The id of the existing CcClientVpnAuthorizationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcClientVpnAuthorizationRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_client_vpn_authorization_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ec2_client_vpn_authorization_rule awscc_ec2_client_vpn_authorization_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClientVpnAuthorizationRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcClientVpnAuthorizationRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_client_vpn_authorization_rule',
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
        this._accessGroupId = config.accessGroupId;
        this._authorizeAllGroups = config.authorizeAllGroups;
        this._clientVpnEndpointId = config.clientVpnEndpointId;
        this._description = config.description;
        this._targetNetworkCidr = config.targetNetworkCidr;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_group_id - computed: true, optional: true, required: false
    private _accessGroupId?: string; 
    public get accessGroupId() {
        return this.getStringAttribute('access_group_id');
    }
    public set accessGroupId(value: string) {
        this._accessGroupId = value;
    }
    public resetAccessGroupId() {
        this._accessGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessGroupIdInput() {
        return this._accessGroupId;
    }

    // authorize_all_groups - computed: true, optional: true, required: false
    private _authorizeAllGroups?: boolean | cdktn.IResolvable; 
    public get authorizeAllGroups() {
        return this.getBooleanAttribute('authorize_all_groups');
    }
    public set authorizeAllGroups(value: boolean | cdktn.IResolvable) {
        this._authorizeAllGroups = value;
    }
    public resetAuthorizeAllGroups() {
        this._authorizeAllGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizeAllGroupsInput() {
        return this._authorizeAllGroups;
    }

    // client_vpn_authorization_rule_id - computed: true, optional: false, required: false
    public get clientVpnAuthorizationRuleId() {
        return this.getStringAttribute('client_vpn_authorization_rule_id');
    }

    // client_vpn_endpoint_id - computed: false, optional: false, required: true
    private _clientVpnEndpointId?: string; 
    public get clientVpnEndpointId() {
        return this.getStringAttribute('client_vpn_endpoint_id');
    }
    public set clientVpnEndpointId(value: string) {
        this._clientVpnEndpointId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientVpnEndpointIdInput() {
        return this._clientVpnEndpointId;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // target_network_cidr - computed: false, optional: false, required: true
    private _targetNetworkCidr?: string; 
    public get targetNetworkCidr() {
        return this.getStringAttribute('target_network_cidr');
    }
    public set targetNetworkCidr(value: string) {
        this._targetNetworkCidr = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNetworkCidrInput() {
        return this._targetNetworkCidr;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_group_id: cdktn.stringToTerraform(this._accessGroupId),
            authorize_all_groups: cdktn.booleanToTerraform(this._authorizeAllGroups),
            client_vpn_endpoint_id: cdktn.stringToTerraform(this._clientVpnEndpointId),
            description: cdktn.stringToTerraform(this._description),
            target_network_cidr: cdktn.stringToTerraform(this._targetNetworkCidr),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_group_id: {
                value: cdktn.stringToHclTerraform(this._accessGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            authorize_all_groups: {
                value: cdktn.booleanToHclTerraform(this._authorizeAllGroups),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            client_vpn_endpoint_id: {
                value: cdktn.stringToHclTerraform(this._clientVpnEndpointId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_network_cidr: {
                value: cdktn.stringToHclTerraform(this._targetNetworkCidr),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcClientVpnAuthorizationRule {
}
