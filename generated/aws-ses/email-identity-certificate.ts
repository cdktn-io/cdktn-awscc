// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEmailIdentityCertificateProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the AWS Certificate Manager certificate to associate with the sender.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate#certificate_arn CcEmailIdentityCertificate#certificate_arn}
    */
    readonly certificateArn: string;
    /**
    * The email identity that owns the sender the certificate is associated with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate#email_identity CcEmailIdentityCertificate#email_identity}
    */
    readonly emailIdentity: string;
    /**
    * The sender the certificate signs for. For an email address identity this is the identity itself.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate#from_address CcEmailIdentityCertificate#from_address}
    */
    readonly fromAddress: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate awscc_ses_email_identity_certificate}
*/
export class CcEmailIdentityCertificate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_email_identity_certificate";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEmailIdentityCertificate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEmailIdentityCertificate to import
    * @param importFromId The id of the existing CcEmailIdentityCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEmailIdentityCertificate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_email_identity_certificate", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/ses_email_identity_certificate awscc_ses_email_identity_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEmailIdentityCertificateProps
    */
    public constructor(scope: Construct, id: string, config: CcEmailIdentityCertificateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_email_identity_certificate',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._certificateArn = config.certificateArn;
        this._emailIdentity = config.emailIdentity;
        this._fromAddress = config.fromAddress;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_arn - computed: false, optional: false, required: true
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
    }

    // email_identity - computed: false, optional: false, required: true
    private _emailIdentity?: string; 
    public get emailIdentity() {
        return this.getStringAttribute('email_identity');
    }
    public set emailIdentity(value: string) {
        this._emailIdentity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emailIdentityInput() {
        return this._emailIdentity;
    }

    // from_address - computed: false, optional: false, required: true
    private _fromAddress?: string; 
    public get fromAddress() {
        return this.getStringAttribute('from_address');
    }
    public set fromAddress(value: string) {
        this._fromAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fromAddressInput() {
        return this._fromAddress;
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
            certificate_arn: cdktn.stringToTerraform(this._certificateArn),
            email_identity: cdktn.stringToTerraform(this._emailIdentity),
            from_address: cdktn.stringToTerraform(this._fromAddress),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate_arn: {
                value: cdktn.stringToHclTerraform(this._certificateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            email_identity: {
                value: cdktn.stringToHclTerraform(this._emailIdentity),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            from_address: {
                value: cdktn.stringToHclTerraform(this._fromAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcEmailIdentityCertificate {
}
