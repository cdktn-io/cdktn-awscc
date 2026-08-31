// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_service_principal_name

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServicePrincipalNameProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_service_principal_name#connector_arn CcServicePrincipalName#connector_arn}
    */
    readonly connectorArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_service_principal_name#directory_registration_arn CcServicePrincipalName#directory_registration_arn}
    */
    readonly directoryRegistrationArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_service_principal_name awscc_pcaconnectorad_service_principal_name}
*/
export class CcServicePrincipalName extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_pcaconnectorad_service_principal_name";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServicePrincipalName resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServicePrincipalName to import
    * @param importFromId The id of the existing CcServicePrincipalName that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_service_principal_name#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServicePrincipalName to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcaconnectorad_service_principal_name", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcaconnectorad_service_principal_name awscc_pcaconnectorad_service_principal_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServicePrincipalNameProps
    */
    public constructor(scope: Construct, id: string, config: CcServicePrincipalNameProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_pcaconnectorad_service_principal_name',
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
        this._connectorArn = config.connectorArn;
        this._directoryRegistrationArn = config.directoryRegistrationArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // connector_arn - computed: false, optional: false, required: true
    private _connectorArn?: string; 
    public get connectorArn() {
        return this.getStringAttribute('connector_arn');
    }
    public set connectorArn(value: string) {
        this._connectorArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectorArnInput() {
        return this._connectorArn;
    }

    // directory_registration_arn - computed: false, optional: false, required: true
    private _directoryRegistrationArn?: string; 
    public get directoryRegistrationArn() {
        return this.getStringAttribute('directory_registration_arn');
    }
    public set directoryRegistrationArn(value: string) {
        this._directoryRegistrationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryRegistrationArnInput() {
        return this._directoryRegistrationArn;
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
            connector_arn: cdktn.stringToTerraform(this._connectorArn),
            directory_registration_arn: cdktn.stringToTerraform(this._directoryRegistrationArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connector_arn: {
                value: cdktn.stringToHclTerraform(this._connectorArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            directory_registration_arn: {
                value: cdktn.stringToHclTerraform(this._directoryRegistrationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcServicePrincipalName {
}
