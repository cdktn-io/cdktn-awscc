// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/iot_policy_principal_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyPrincipalAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the AWS IoT policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/iot_policy_principal_attachment#policy_name CcPolicyPrincipalAttachment#policy_name}
    */
    readonly policyName: string;
    /**
    * The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/iot_policy_principal_attachment#principal CcPolicyPrincipalAttachment#principal}
    */
    readonly principal: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/iot_policy_principal_attachment awscc_iot_policy_principal_attachment}
*/
export class CcPolicyPrincipalAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_policy_principal_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicyPrincipalAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicyPrincipalAttachment to import
    * @param importFromId The id of the existing CcPolicyPrincipalAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/iot_policy_principal_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicyPrincipalAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_policy_principal_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/iot_policy_principal_attachment awscc_iot_policy_principal_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyPrincipalAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyPrincipalAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_policy_principal_attachment',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.105.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._policyName = config.policyName;
        this._principal = config.principal;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // policy_name - computed: false, optional: false, required: true
    private _policyName?: string; 
    public get policyName() {
        return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
        this._policyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
        return this._policyName;
    }

    // principal - computed: false, optional: false, required: true
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            policy_name: cdktn.stringToTerraform(this._policyName),
            principal: cdktn.stringToTerraform(this._principal),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            policy_name: {
                value: cdktn.stringToHclTerraform(this._policyName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principal: {
                value: cdktn.stringToHclTerraform(this._principal),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcPolicyPrincipalAttachment {
}
