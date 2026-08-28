// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_certificate

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCertificateProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_certificate#ca_certificate_pem CcCertificate#ca_certificate_pem}
    */
    readonly caCertificatePem?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_certificate#certificate_mode CcCertificate#certificate_mode}
    */
    readonly certificateMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_certificate#certificate_pem CcCertificate#certificate_pem}
    */
    readonly certificatePem?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_certificate#certificate_signing_request CcCertificate#certificate_signing_request}
    */
    readonly certificateSigningRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_certificate#status CcCertificate#status}
    */
    readonly status: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_certificate awscc_iot_certificate}
*/
export class CcCertificate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_certificate";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCertificate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCertificate to import
    * @param importFromId The id of the existing CcCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCertificate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_certificate", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iot_certificate awscc_iot_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCertificateProps
    */
    public constructor(scope: Construct, id: string, config: CcCertificateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_certificate',
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
        this._caCertificatePem = config.caCertificatePem;
        this._certificateMode = config.certificateMode;
        this._certificatePem = config.certificatePem;
        this._certificateSigningRequest = config.certificateSigningRequest;
        this._status = config.status;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // ca_certificate_pem - computed: true, optional: true, required: false
    private _caCertificatePem?: string; 
    public get caCertificatePem() {
        return this.getStringAttribute('ca_certificate_pem');
    }
    public set caCertificatePem(value: string) {
        this._caCertificatePem = value;
    }
    public resetCaCertificatePem() {
        this._caCertificatePem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertificatePemInput() {
        return this._caCertificatePem;
    }

    // certificate_id - computed: true, optional: false, required: false
    public get certificateId() {
        return this.getStringAttribute('certificate_id');
    }

    // certificate_mode - computed: true, optional: true, required: false
    private _certificateMode?: string; 
    public get certificateMode() {
        return this.getStringAttribute('certificate_mode');
    }
    public set certificateMode(value: string) {
        this._certificateMode = value;
    }
    public resetCertificateMode() {
        this._certificateMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateModeInput() {
        return this._certificateMode;
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

    // certificate_signing_request - computed: true, optional: true, required: false
    private _certificateSigningRequest?: string; 
    public get certificateSigningRequest() {
        return this.getStringAttribute('certificate_signing_request');
    }
    public set certificateSigningRequest(value: string) {
        this._certificateSigningRequest = value;
    }
    public resetCertificateSigningRequest() {
        this._certificateSigningRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateSigningRequestInput() {
        return this._certificateSigningRequest;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // status - computed: false, optional: false, required: true
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
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
            ca_certificate_pem: cdktn.stringToTerraform(this._caCertificatePem),
            certificate_mode: cdktn.stringToTerraform(this._certificateMode),
            certificate_pem: cdktn.stringToTerraform(this._certificatePem),
            certificate_signing_request: cdktn.stringToTerraform(this._certificateSigningRequest),
            status: cdktn.stringToTerraform(this._status),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ca_certificate_pem: {
                value: cdktn.stringToHclTerraform(this._caCertificatePem),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_mode: {
                value: cdktn.stringToHclTerraform(this._certificateMode),
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
            certificate_signing_request: {
                value: cdktn.stringToHclTerraform(this._certificateSigningRequest),
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

export namespace CcCertificate {
}
