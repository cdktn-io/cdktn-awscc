// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_certificate

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCertificateProps extends cdktn.TerraformMetaArguments {
    /**
    * The certificate Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_certificate#certificate_identifier CcCertificate#certificate_identifier}
    */
    readonly certificateIdentifier?: string;
    /**
    * The certificate Pem
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_certificate#certificate_pem CcCertificate#certificate_pem}
    */
    readonly certificatePem?: string;
    /**
    * The certificate Wallet
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_certificate#certificate_wallet CcCertificate#certificate_wallet}
    */
    readonly certificateWallet?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_certificate awscc_dms_certificate}
*/
export class CcCertificate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dms_certificate";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCertificate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCertificate to import
    * @param importFromId The id of the existing CcCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCertificate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_certificate", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_certificate awscc_dms_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCertificateProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcCertificateProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_dms_certificate',
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
        this._certificateIdentifier = config.certificateIdentifier;
        this._certificatePem = config.certificatePem;
        this._certificateWallet = config.certificateWallet;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_arn - computed: true, optional: false, required: false
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }

    // certificate_identifier - computed: true, optional: true, required: false
    private _certificateIdentifier?: string; 
    public get certificateIdentifier() {
        return this.getStringAttribute('certificate_identifier');
    }
    public set certificateIdentifier(value: string) {
        this._certificateIdentifier = value;
    }
    public resetCertificateIdentifier() {
        this._certificateIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateIdentifierInput() {
        return this._certificateIdentifier;
    }

    // certificate_pem - computed: true, optional: true, required: false
    private _certificatePem?: string; 
    public get certificatePem() {
        return this.getStringAttribute('certificate_pem');
    }
    public set certificatePem(value: string) {
        this._certificatePem = value;
    }
    public resetCertificatePem() {
        this._certificatePem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificatePemInput() {
        return this._certificatePem;
    }

    // certificate_wallet - computed: true, optional: true, required: false
    private _certificateWallet?: string; 
    public get certificateWallet() {
        return this.getStringAttribute('certificate_wallet');
    }
    public set certificateWallet(value: string) {
        this._certificateWallet = value;
    }
    public resetCertificateWallet() {
        this._certificateWallet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateWalletInput() {
        return this._certificateWallet;
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
            certificate_identifier: cdktn.stringToTerraform(this._certificateIdentifier),
            certificate_pem: cdktn.stringToTerraform(this._certificatePem),
            certificate_wallet: cdktn.stringToTerraform(this._certificateWallet),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate_identifier: {
                value: cdktn.stringToHclTerraform(this._certificateIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_pem: {
                value: cdktn.stringToHclTerraform(this._certificatePem),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_wallet: {
                value: cdktn.stringToHclTerraform(this._certificateWallet),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcCertificate {
}
