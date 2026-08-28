// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate_authority_activation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCertificateAuthorityActivationProps extends cdktn.TerraformMetaArguments {
    /**
    * Certificate Authority certificate that will be installed in the Certificate Authority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate_authority_activation#certificate CcCertificateAuthorityActivation#certificate}
    */
    readonly certificate: string;
    /**
    * Arn of the Certificate Authority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate_authority_activation#certificate_authority_arn CcCertificateAuthorityActivation#certificate_authority_arn}
    */
    readonly certificateAuthorityArn: string;
    /**
    * Certificate chain for the Certificate Authority certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate_authority_activation#certificate_chain CcCertificateAuthorityActivation#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * The status of the Certificate Authority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate_authority_activation#status CcCertificateAuthorityActivation#status}
    */
    readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate_authority_activation awscc_acmpca_certificate_authority_activation}
*/
export class CcCertificateAuthorityActivation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_acmpca_certificate_authority_activation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCertificateAuthorityActivation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCertificateAuthorityActivation to import
    * @param importFromId The id of the existing CcCertificateAuthorityActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate_authority_activation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCertificateAuthorityActivation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_acmpca_certificate_authority_activation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate_authority_activation awscc_acmpca_certificate_authority_activation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCertificateAuthorityActivationProps
    */
    public constructor(scope: Construct, id: string, config: CcCertificateAuthorityActivationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_acmpca_certificate_authority_activation',
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
        this._certificate = config.certificate;
        this._certificateAuthorityArn = config.certificateAuthorityArn;
        this._certificateChain = config.certificateChain;
        this._status = config.status;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate - computed: false, optional: false, required: true
    private _certificate?: string; 
    public get certificate() {
        return this.getStringAttribute('certificate');
    }
    public set certificate(value: string) {
        this._certificate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
        return this._certificate;
    }

    // certificate_authority_arn - computed: false, optional: false, required: true
    private _certificateAuthorityArn?: string; 
    public get certificateAuthorityArn() {
        return this.getStringAttribute('certificate_authority_arn');
    }
    public set certificateAuthorityArn(value: string) {
        this._certificateAuthorityArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnInput() {
        return this._certificateAuthorityArn;
    }

    // certificate_chain - computed: true, optional: true, required: false
    private _certificateChain?: string; 
    public get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
        this._certificateChain = value;
    }
    public resetCertificateChain() {
        this._certificateChain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
        return this._certificateChain;
    }

    // complete_certificate_chain - computed: true, optional: false, required: false
    public get completeCertificateChain() {
        return this.getStringAttribute('complete_certificate_chain');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            certificate: cdktn.stringToTerraform(this._certificate),
            certificate_authority_arn: cdktn.stringToTerraform(this._certificateAuthorityArn),
            certificate_chain: cdktn.stringToTerraform(this._certificateChain),
            status: cdktn.stringToTerraform(this._status),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate: {
                value: cdktn.stringToHclTerraform(this._certificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_authority_arn: {
                value: cdktn.stringToHclTerraform(this._certificateAuthorityArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_chain: {
                value: cdktn.stringToHclTerraform(this._certificateChain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcCertificateAuthorityActivation {
}
