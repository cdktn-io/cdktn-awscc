// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_registration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTransitGatewayRegistrationProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the global network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_registration#global_network_id CcTransitGatewayRegistration#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * The Amazon Resource Name (ARN) of the transit gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_registration#transit_gateway_arn CcTransitGatewayRegistration#transit_gateway_arn}
    */
    readonly transitGatewayArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_registration awscc_networkmanager_transit_gateway_registration}
*/
export class CcTransitGatewayRegistration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkmanager_transit_gateway_registration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTransitGatewayRegistration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTransitGatewayRegistration to import
    * @param importFromId The id of the existing CcTransitGatewayRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_registration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTransitGatewayRegistration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_transit_gateway_registration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_transit_gateway_registration awscc_networkmanager_transit_gateway_registration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTransitGatewayRegistrationProps
    */
    public constructor(scope: Construct, id: string, config: CcTransitGatewayRegistrationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkmanager_transit_gateway_registration',
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
        this._globalNetworkId = config.globalNetworkId;
        this._transitGatewayArn = config.transitGatewayArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // global_network_id - computed: false, optional: false, required: true
    private _globalNetworkId?: string; 
    public get globalNetworkId() {
        return this.getStringAttribute('global_network_id');
    }
    public set globalNetworkId(value: string) {
        this._globalNetworkId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get globalNetworkIdInput() {
        return this._globalNetworkId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // transit_gateway_arn - computed: false, optional: false, required: true
    private _transitGatewayArn?: string; 
    public get transitGatewayArn() {
        return this.getStringAttribute('transit_gateway_arn');
    }
    public set transitGatewayArn(value: string) {
        this._transitGatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get transitGatewayArnInput() {
        return this._transitGatewayArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            global_network_id: cdktn.stringToTerraform(this._globalNetworkId),
            transit_gateway_arn: cdktn.stringToTerraform(this._transitGatewayArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            global_network_id: {
                value: cdktn.stringToHclTerraform(this._globalNetworkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            transit_gateway_arn: {
                value: cdktn.stringToHclTerraform(this._transitGatewayArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcTransitGatewayRegistration {
}
