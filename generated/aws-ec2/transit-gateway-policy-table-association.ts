// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_policy_table_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayPolicyTableAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of transit gateway attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_policy_table_association#transit_gateway_attachment_id CcTransitGatewayPolicyTableAssociation#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * The ID of transit gateway policy table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_policy_table_association#transit_gateway_policy_table_id CcTransitGatewayPolicyTableAssociation#transit_gateway_policy_table_id}
    */
    readonly transitGatewayPolicyTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_policy_table_association awscc_ec2_transit_gateway_policy_table_association}
*/
export class CcTransitGatewayPolicyTableAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_transit_gateway_policy_table_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayPolicyTableAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayPolicyTableAssociation to import
    * @param importFromId The id of the existing CcTransitGatewayPolicyTableAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_policy_table_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayPolicyTableAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_policy_table_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_transit_gateway_policy_table_association awscc_ec2_transit_gateway_policy_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayPolicyTableAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayPolicyTableAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_transit_gateway_policy_table_association',
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
        this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
        this._transitGatewayPolicyTableId = config.transitGatewayPolicyTableId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // transit_gateway_attachment_id - computed: false, optional: false, required: true
    private _transitGatewayAttachmentId?: string; 
    public get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }
    public set transitGatewayAttachmentId(value: string) {
        this._transitGatewayAttachmentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayAttachmentIdInput() {
        return this._transitGatewayAttachmentId;
    }

    // transit_gateway_policy_table_id - computed: false, optional: false, required: true
    private _transitGatewayPolicyTableId?: string; 
    public get transitGatewayPolicyTableId() {
        return this.getStringAttribute('transit_gateway_policy_table_id');
    }
    public set transitGatewayPolicyTableId(value: string) {
        this._transitGatewayPolicyTableId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayPolicyTableIdInput() {
        return this._transitGatewayPolicyTableId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            transit_gateway_attachment_id: cdktn.stringToTerraform(this._transitGatewayAttachmentId),
            transit_gateway_policy_table_id: cdktn.stringToTerraform(this._transitGatewayPolicyTableId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            transit_gateway_attachment_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayAttachmentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            transit_gateway_policy_table_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayPolicyTableId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTransitGatewayPolicyTableAssociation {
}
