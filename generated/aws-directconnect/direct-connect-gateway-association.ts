// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_direct_connect_gateway_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDirectConnectGatewayAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_direct_connect_gateway_association#accept_direct_connect_gateway_association_proposal_role_arn CcDirectConnectGatewayAssociation#accept_direct_connect_gateway_association_proposal_role_arn}
    */
    readonly acceptDirectConnectGatewayAssociationProposalRoleArn?: string;
    /**
    * The Amazon VPC prefixes to advertise to the Direct Connect gateway. This parameter is required when you create an association to a transit gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_direct_connect_gateway_association#allowed_prefixes_to_direct_connect_gateway CcDirectConnectGatewayAssociation#allowed_prefixes_to_direct_connect_gateway}
    */
    readonly allowedPrefixesToDirectConnectGateway?: string[];
    /**
    * The ID or ARN of the virtual private gateway or transit gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_direct_connect_gateway_association#associated_gateway_id CcDirectConnectGatewayAssociation#associated_gateway_id}
    */
    readonly associatedGatewayId: string;
    /**
    * The ID or ARN of the Direct Connect gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_direct_connect_gateway_association#direct_connect_gateway_id CcDirectConnectGatewayAssociation#direct_connect_gateway_id}
    */
    readonly directConnectGatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_direct_connect_gateway_association awscc_directconnect_direct_connect_gateway_association}
*/
export class CcDirectConnectGatewayAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_directconnect_direct_connect_gateway_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDirectConnectGatewayAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDirectConnectGatewayAssociation to import
    * @param importFromId The id of the existing CcDirectConnectGatewayAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_direct_connect_gateway_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDirectConnectGatewayAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_directconnect_direct_connect_gateway_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/directconnect_direct_connect_gateway_association awscc_directconnect_direct_connect_gateway_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDirectConnectGatewayAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcDirectConnectGatewayAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_directconnect_direct_connect_gateway_association',
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
        this._acceptDirectConnectGatewayAssociationProposalRoleArn = config.acceptDirectConnectGatewayAssociationProposalRoleArn;
        this._allowedPrefixesToDirectConnectGateway = config.allowedPrefixesToDirectConnectGateway;
        this._associatedGatewayId = config.associatedGatewayId;
        this._directConnectGatewayId = config.directConnectGatewayId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_direct_connect_gateway_association_proposal_role_arn - computed: true, optional: true, required: false
    private _acceptDirectConnectGatewayAssociationProposalRoleArn?: string; 
    public get acceptDirectConnectGatewayAssociationProposalRoleArn() {
        return this.getStringAttribute('accept_direct_connect_gateway_association_proposal_role_arn');
    }
    public set acceptDirectConnectGatewayAssociationProposalRoleArn(value: string) {
        this._acceptDirectConnectGatewayAssociationProposalRoleArn = value;
    }
    public resetAcceptDirectConnectGatewayAssociationProposalRoleArn() {
        this._acceptDirectConnectGatewayAssociationProposalRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptDirectConnectGatewayAssociationProposalRoleArnInput() {
        return this._acceptDirectConnectGatewayAssociationProposalRoleArn;
    }

    // allowed_prefixes_to_direct_connect_gateway - computed: true, optional: true, required: false
    private _allowedPrefixesToDirectConnectGateway?: string[]; 
    public get allowedPrefixesToDirectConnectGateway() {
        return cdktn.Fn.tolist(this.getListAttribute('allowed_prefixes_to_direct_connect_gateway'));
    }
    public set allowedPrefixesToDirectConnectGateway(value: string[]) {
        this._allowedPrefixesToDirectConnectGateway = value;
    }
    public resetAllowedPrefixesToDirectConnectGateway() {
        this._allowedPrefixesToDirectConnectGateway = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedPrefixesToDirectConnectGatewayInput() {
        return this._allowedPrefixesToDirectConnectGateway;
    }

    // associated_gateway_id - computed: false, optional: false, required: true
    private _associatedGatewayId?: string; 
    public get associatedGatewayId() {
        return this.getStringAttribute('associated_gateway_id');
    }
    public set associatedGatewayId(value: string) {
        this._associatedGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get associatedGatewayIdInput() {
        return this._associatedGatewayId;
    }

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
        return this.getStringAttribute('association_id');
    }

    // direct_connect_gateway_id - computed: false, optional: false, required: true
    private _directConnectGatewayId?: string; 
    public get directConnectGatewayId() {
        return this.getStringAttribute('direct_connect_gateway_id');
    }
    public set directConnectGatewayId(value: string) {
        this._directConnectGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directConnectGatewayIdInput() {
        return this._directConnectGatewayId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_direct_connect_gateway_association_proposal_role_arn: cdktn.stringToTerraform(this._acceptDirectConnectGatewayAssociationProposalRoleArn),
            allowed_prefixes_to_direct_connect_gateway: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedPrefixesToDirectConnectGateway),
            associated_gateway_id: cdktn.stringToTerraform(this._associatedGatewayId),
            direct_connect_gateway_id: cdktn.stringToTerraform(this._directConnectGatewayId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            accept_direct_connect_gateway_association_proposal_role_arn: {
                value: cdktn.stringToHclTerraform(this._acceptDirectConnectGatewayAssociationProposalRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            allowed_prefixes_to_direct_connect_gateway: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedPrefixesToDirectConnectGateway),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            associated_gateway_id: {
                value: cdktn.stringToHclTerraform(this._associatedGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            direct_connect_gateway_id: {
                value: cdktn.stringToHclTerraform(this._directConnectGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcDirectConnectGatewayAssociation {
}
