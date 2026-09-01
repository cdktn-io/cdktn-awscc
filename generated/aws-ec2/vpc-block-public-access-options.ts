// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_options

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVPCBlockPublicAccessOptionsProps extends cdktn.TerraformMetaArguments {
    /**
    * The desired Block Public Access mode for Internet Gateways in your account. We do not allow to create in a off mode as this is the default value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_options#internet_gateway_block_mode CcVPCBlockPublicAccessOptions#internet_gateway_block_mode}
    */
    readonly internetGatewayBlockMode: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_options awscc_ec2_vpc_block_public_access_options}
*/
export class CcVPCBlockPublicAccessOptions extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_vpc_block_public_access_options";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVPCBlockPublicAccessOptions resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVPCBlockPublicAccessOptions to import
    * @param importFromId The id of the existing CcVPCBlockPublicAccessOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_options#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVPCBlockPublicAccessOptions to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_vpc_block_public_access_options", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_options awscc_ec2_vpc_block_public_access_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVPCBlockPublicAccessOptionsProps
    */
    public constructor(scope: Construct, id: string, config: CcVPCBlockPublicAccessOptionsProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_vpc_block_public_access_options',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._internetGatewayBlockMode = config.internetGatewayBlockMode;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // exclusions_allowed - computed: true, optional: false, required: false
    public get exclusionsAllowed() {
        return this.getStringAttribute('exclusions_allowed');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // internet_gateway_block_mode - computed: false, optional: false, required: true
    private _internetGatewayBlockMode?: string; 
    public get internetGatewayBlockMode() {
        return this.getStringAttribute('internet_gateway_block_mode');
    }
    public set internetGatewayBlockMode(value: string) {
        this._internetGatewayBlockMode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get internetGatewayBlockModeInput() {
        return this._internetGatewayBlockMode;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            internet_gateway_block_mode: cdktn.stringToTerraform(this._internetGatewayBlockMode),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            internet_gateway_block_mode: {
                value: cdktn.stringToHclTerraform(this._internetGatewayBlockMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcVPCBlockPublicAccessOptions {
}
