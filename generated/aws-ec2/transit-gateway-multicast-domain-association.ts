// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_multicast_domain_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayMulticastDomainAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The IDs of the subnets to associate with the transit gateway multicast domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_multicast_domain_association#subnet_id CcTransitGatewayMulticastDomainAssociation#subnet_id}
    */
    readonly subnetId: string;
    /**
    * The ID of the transit gateway attachment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_attachment_id CcTransitGatewayMulticastDomainAssociation#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * The ID of the transit gateway multicast domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_multicast_domain_id CcTransitGatewayMulticastDomainAssociation#transit_gateway_multicast_domain_id}
    */
    readonly transitGatewayMulticastDomainId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_multicast_domain_association awscc_ec2_transit_gateway_multicast_domain_association}
*/
export class CcTransitGatewayMulticastDomainAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_transit_gateway_multicast_domain_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayMulticastDomainAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayMulticastDomainAssociation to import
    * @param importFromId The id of the existing CcTransitGatewayMulticastDomainAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_multicast_domain_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayMulticastDomainAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_transit_gateway_multicast_domain_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_transit_gateway_multicast_domain_association awscc_ec2_transit_gateway_multicast_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayMulticastDomainAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayMulticastDomainAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_transit_gateway_multicast_domain_association',
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
        this._subnetId = config.subnetId;
        this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
        this._transitGatewayMulticastDomainId = config.transitGatewayMulticastDomainId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // resource_id - computed: true, optional: false, required: false
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }

    // resource_type - computed: true, optional: false, required: false
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
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

    // transit_gateway_multicast_domain_id - computed: false, optional: false, required: true
    private _transitGatewayMulticastDomainId?: string; 
    public get transitGatewayMulticastDomainId() {
        return this.getStringAttribute('transit_gateway_multicast_domain_id');
    }
    public set transitGatewayMulticastDomainId(value: string) {
        this._transitGatewayMulticastDomainId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayMulticastDomainIdInput() {
        return this._transitGatewayMulticastDomainId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            subnet_id: cdktn.stringToTerraform(this._subnetId),
            transit_gateway_attachment_id: cdktn.stringToTerraform(this._transitGatewayAttachmentId),
            transit_gateway_multicast_domain_id: cdktn.stringToTerraform(this._transitGatewayMulticastDomainId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            subnet_id: {
                value: cdktn.stringToHclTerraform(this._subnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            transit_gateway_attachment_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayAttachmentId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            transit_gateway_multicast_domain_id: {
                value: cdktn.stringToHclTerraform(this._transitGatewayMulticastDomainId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTransitGatewayMulticastDomainAssociation {
}
