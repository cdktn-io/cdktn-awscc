// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_customer_gateway_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCustomerGatewayAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the customer gateway.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_customer_gateway_association#customer_gateway_arn CcCustomerGatewayAssociation#customer_gateway_arn}
    */
    readonly customerGatewayArn: string;
    /**
    * The ID of the device
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_customer_gateway_association#device_id CcCustomerGatewayAssociation#device_id}
    */
    readonly deviceId: string;
    /**
    * The ID of the global network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_customer_gateway_association#global_network_id CcCustomerGatewayAssociation#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * The ID of the link
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_customer_gateway_association#link_id CcCustomerGatewayAssociation#link_id}
    */
    readonly linkId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_customer_gateway_association awscc_networkmanager_customer_gateway_association}
*/
export class CcCustomerGatewayAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkmanager_customer_gateway_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCustomerGatewayAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCustomerGatewayAssociation to import
    * @param importFromId The id of the existing CcCustomerGatewayAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_customer_gateway_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCustomerGatewayAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_customer_gateway_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_customer_gateway_association awscc_networkmanager_customer_gateway_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCustomerGatewayAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcCustomerGatewayAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkmanager_customer_gateway_association',
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
        this._customerGatewayArn = config.customerGatewayArn;
        this._deviceId = config.deviceId;
        this._globalNetworkId = config.globalNetworkId;
        this._linkId = config.linkId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // customer_gateway_arn - computed: false, optional: false, required: true
    private _customerGatewayArn?: string; 
    public get customerGatewayArn() {
        return this.getStringAttribute('customer_gateway_arn');
    }
    public set customerGatewayArn(value: string) {
        this._customerGatewayArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get customerGatewayArnInput() {
        return this._customerGatewayArn;
    }

    // device_id - computed: false, optional: false, required: true
    private _deviceId?: string; 
    public get deviceId() {
        return this.getStringAttribute('device_id');
    }
    public set deviceId(value: string) {
        this._deviceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceIdInput() {
        return this._deviceId;
    }

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

    // link_id - computed: true, optional: true, required: false
    private _linkId?: string; 
    public get linkId() {
        return this.getStringAttribute('link_id');
    }
    public set linkId(value: string) {
        this._linkId = value;
    }
    public resetLinkId() {
        this._linkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linkIdInput() {
        return this._linkId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            customer_gateway_arn: cdktn.stringToTerraform(this._customerGatewayArn),
            device_id: cdktn.stringToTerraform(this._deviceId),
            global_network_id: cdktn.stringToTerraform(this._globalNetworkId),
            link_id: cdktn.stringToTerraform(this._linkId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            customer_gateway_arn: {
                value: cdktn.stringToHclTerraform(this._customerGatewayArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            device_id: {
                value: cdktn.stringToHclTerraform(this._deviceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            global_network_id: {
                value: cdktn.stringToHclTerraform(this._globalNetworkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            link_id: {
                value: cdktn.stringToHclTerraform(this._linkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcCustomerGatewayAssociation {
}
