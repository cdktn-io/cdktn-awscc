// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_gateway_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPCGatewayAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the internet gateway. You must specify either InternetGatewayId or VpnGatewayId, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_gateway_attachment#internet_gateway_id CcVPCGatewayAttachment#internet_gateway_id}
    */
    readonly internetGatewayId?: string;
    /**
    * The ID of the VPC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_gateway_attachment#vpc_id CcVPCGatewayAttachment#vpc_id}
    */
    readonly vpcId: string;
    /**
    * The ID of the virtual private gateway. You must specify either InternetGatewayId or VpnGatewayId, but not both.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_gateway_attachment#vpn_gateway_id CcVPCGatewayAttachment#vpn_gateway_id}
    */
    readonly vpnGatewayId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_gateway_attachment awscc_ec2_vpc_gateway_attachment}
*/
export class CcVPCGatewayAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpc_gateway_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPCGatewayAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPCGatewayAttachment to import
    * @param importFromId The id of the existing CcVPCGatewayAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_gateway_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPCGatewayAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc_gateway_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_vpc_gateway_attachment awscc_ec2_vpc_gateway_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPCGatewayAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcVPCGatewayAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpc_gateway_attachment',
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
        this._internetGatewayId = config.internetGatewayId;
        this._vpcId = config.vpcId;
        this._vpnGatewayId = config.vpnGatewayId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attachment_type - computed: true, optional: false, required: false
    public get attachmentType() {
        return this.getStringAttribute('attachment_type');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // internet_gateway_id - computed: true, optional: true, required: false
    private _internetGatewayId?: string; 
    public get internetGatewayId() {
        return this.getStringAttribute('internet_gateway_id');
    }
    public set internetGatewayId(value: string) {
        this._internetGatewayId = value;
    }
    public resetInternetGatewayId() {
        this._internetGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internetGatewayIdInput() {
        return this._internetGatewayId;
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

    // vpn_gateway_id - computed: true, optional: true, required: false
    private _vpnGatewayId?: string; 
    public get vpnGatewayId() {
        return this.getStringAttribute('vpn_gateway_id');
    }
    public set vpnGatewayId(value: string) {
        this._vpnGatewayId = value;
    }
    public resetVpnGatewayId() {
        this._vpnGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpnGatewayIdInput() {
        return this._vpnGatewayId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            internet_gateway_id: cdktn.stringToTerraform(this._internetGatewayId),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
            vpn_gateway_id: cdktn.stringToTerraform(this._vpnGatewayId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            internet_gateway_id: {
                value: cdktn.stringToHclTerraform(this._internetGatewayId),
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
            vpn_gateway_id: {
                value: cdktn.stringToHclTerraform(this._vpnGatewayId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcVPCGatewayAttachment {
}
