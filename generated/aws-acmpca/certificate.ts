// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCertificateProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies X.509 certificate information to be included in the issued certificate. An ``APIPassthrough`` or ``APICSRPassthrough`` template variant must be selected, or else this parameter is ignored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#api_passthrough CcCertificate#api_passthrough}
    */
    readonly apiPassthrough?: CcCertificate.ApiPassthroughProperty;
    /**
    * The Amazon Resource Name (ARN) for the private CA issues the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#certificate_authority_arn CcCertificate#certificate_authority_arn}
    */
    readonly certificateAuthorityArn: string;
    /**
    * The certificate signing request (CSR) for the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#certificate_signing_request CcCertificate#certificate_signing_request}
    */
    readonly certificateSigningRequest: string;
    /**
    * The name of the algorithm that will be used to sign the certificate to be issued. 
    *  This parameter should not be confused with the ``SigningAlgorithm`` parameter used to sign a CSR in the ``CreateCertificateAuthority`` action.
    *   The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#signing_algorithm CcCertificate#signing_algorithm}
    */
    readonly signingAlgorithm: string;
    /**
    * Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, PCAshort defaults to the ``EndEntityCertificate/V1`` template. For more information about PCAshort templates, see [Using Templates](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#template_arn CcCertificate#template_arn}
    */
    readonly templateArn?: string;
    /**
    * The period of time during which the certificate will be valid.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#validity CcCertificate#validity}
    */
    readonly validity: CcCertificate.ValidityProperty;
    /**
    * Information describing the start of the validity period of the certificate. This parameter sets the ?Not Before" date for the certificate.
    *  By default, when issuing a certificate, PCAshort sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The ``ValidityNotBefore`` parameter can be used to customize the ?Not Before? value. 
    *  Unlike the ``Validity`` parameter, the ``ValidityNotBefore`` parameter is optional.
    *  The ``ValidityNotBefore`` value is expressed as an explicit date and time, using the ``Validity`` type value ``ABSOLUTE``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#validity_not_before CcCertificate#validity_not_before}
    */
    readonly validityNotBefore?: CcCertificate.ValidityNotBeforeProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate awscc_acmpca_certificate}
*/
export class CcCertificate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_acmpca_certificate";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCertificate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCertificate to import
    * @param importFromId The id of the existing CcCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCertificate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_acmpca_certificate", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate awscc_acmpca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCertificateProps
    */
    public constructor(scope: Construct, id: string, config: CcCertificateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_acmpca_certificate',
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
        this._apiPassthrough.internalValue = config.apiPassthrough;
        this._certificateAuthorityArn = config.certificateAuthorityArn;
        this._certificateSigningRequest = config.certificateSigningRequest;
        this._signingAlgorithm = config.signingAlgorithm;
        this._templateArn = config.templateArn;
        this._validity.internalValue = config.validity;
        this._validityNotBefore.internalValue = config.validityNotBefore;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_passthrough - computed: true, optional: true, required: false
    private _apiPassthrough = new CcCertificate.ApiPassthroughPropertyOutputReference(this, "api_passthrough");
    public get apiPassthrough() {
        return this._apiPassthrough;
    }
    public putApiPassthrough(value: CcCertificate.ApiPassthroughProperty) {
        this._apiPassthrough.internalValue = value;
    }
    public resetApiPassthrough() {
        this._apiPassthrough.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiPassthroughInput() {
        return this._apiPassthrough.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // certificate - computed: true, optional: false, required: false
    public get certificate() {
        return this.getStringAttribute('certificate');
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

    // certificate_signing_request - computed: false, optional: false, required: true
    private _certificateSigningRequest?: string; 
    public get certificateSigningRequest() {
        return this.getStringAttribute('certificate_signing_request');
    }
    public set certificateSigningRequest(value: string) {
        this._certificateSigningRequest = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateSigningRequestInput() {
        return this._certificateSigningRequest;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // signing_algorithm - computed: false, optional: false, required: true
    private _signingAlgorithm?: string; 
    public get signingAlgorithm() {
        return this.getStringAttribute('signing_algorithm');
    }
    public set signingAlgorithm(value: string) {
        this._signingAlgorithm = value;
    }
    // Temporarily expose input value. Use with caution.
    public get signingAlgorithmInput() {
        return this._signingAlgorithm;
    }

    // template_arn - computed: true, optional: true, required: false
    private _templateArn?: string; 
    public get templateArn() {
        return this.getStringAttribute('template_arn');
    }
    public set templateArn(value: string) {
        this._templateArn = value;
    }
    public resetTemplateArn() {
        this._templateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateArnInput() {
        return this._templateArn;
    }

    // validity - computed: false, optional: false, required: true
    private _validity = new CcCertificate.ValidityPropertyOutputReference(this, "validity");
    public get validity() {
        return this._validity;
    }
    public putValidity(value: CcCertificate.ValidityProperty) {
        this._validity.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get validityInput() {
        return this._validity.internalValue;
    }

    // validity_not_before - computed: true, optional: true, required: false
    private _validityNotBefore = new CcCertificate.ValidityNotBeforePropertyOutputReference(this, "validity_not_before");
    public get validityNotBefore() {
        return this._validityNotBefore;
    }
    public putValidityNotBefore(value: CcCertificate.ValidityNotBeforeProperty) {
        this._validityNotBefore.internalValue = value;
    }
    public resetValidityNotBefore() {
        this._validityNotBefore.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validityNotBeforeInput() {
        return this._validityNotBefore.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_passthrough: ccCertificateApiPassthroughPropertyToTerraform(this._apiPassthrough.internalValue),
            certificate_authority_arn: cdktn.stringToTerraform(this._certificateAuthorityArn),
            certificate_signing_request: cdktn.stringToTerraform(this._certificateSigningRequest),
            signing_algorithm: cdktn.stringToTerraform(this._signingAlgorithm),
            template_arn: cdktn.stringToTerraform(this._templateArn),
            validity: ccCertificateValidityPropertyToTerraform(this._validity.internalValue),
            validity_not_before: ccCertificateValidityNotBeforePropertyToTerraform(this._validityNotBefore.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_passthrough: {
                value: ccCertificateApiPassthroughPropertyToHclTerraform(this._apiPassthrough.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCertificate.ApiPassthroughProperty",
            },
            certificate_authority_arn: {
                value: cdktn.stringToHclTerraform(this._certificateAuthorityArn),
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
            signing_algorithm: {
                value: cdktn.stringToHclTerraform(this._signingAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_arn: {
                value: cdktn.stringToHclTerraform(this._templateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validity: {
                value: ccCertificateValidityPropertyToHclTerraform(this._validity.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCertificate.ValidityProperty",
            },
            validity_not_before: {
                value: ccCertificateValidityNotBeforePropertyToHclTerraform(this._validityNotBefore.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCertificate.ValidityNotBeforeProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCertificateQualifierPropertyToTerraform(struct?: CcCertificate.QualifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cps_uri: cdktn.stringToTerraform(struct!.cpsUri),
    }
}


export function ccCertificateQualifierPropertyToHclTerraform(struct?: CcCertificate.QualifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cps_uri: {
            value: cdktn.stringToHclTerraform(struct!.cpsUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificatePolicyQualifierInfoPropertyToTerraform(struct?: CcCertificate.PolicyQualifierInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_qualifier_id: cdktn.stringToTerraform(struct!.policyQualifierId),
        qualifier: ccCertificateQualifierPropertyToTerraform(struct!.qualifier),
    }
}


export function ccCertificatePolicyQualifierInfoPropertyToHclTerraform(struct?: CcCertificate.PolicyQualifierInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy_qualifier_id: {
            value: cdktn.stringToHclTerraform(struct!.policyQualifierId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        qualifier: {
            value: ccCertificateQualifierPropertyToHclTerraform(struct!.qualifier),
            isBlock: true,
            type: "struct",
            storageClassType: "QualifierProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificatePolicyInformationPropertyToTerraform(struct?: CcCertificate.PolicyInformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cert_policy_id: cdktn.stringToTerraform(struct!.certPolicyId),
        policy_qualifiers: cdktn.listMapper(ccCertificatePolicyQualifierInfoPropertyToTerraform, false)(struct!.policyQualifiers),
    }
}


export function ccCertificatePolicyInformationPropertyToHclTerraform(struct?: CcCertificate.PolicyInformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cert_policy_id: {
            value: cdktn.stringToHclTerraform(struct!.certPolicyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_qualifiers: {
            value: cdktn.listMapperHcl(ccCertificatePolicyQualifierInfoPropertyToHclTerraform, false)(struct!.policyQualifiers),
            isBlock: true,
            type: "list",
            storageClassType: "PolicyQualifierInfoPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateCustomExtensionPropertyToTerraform(struct?: CcCertificate.CustomExtensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        critical: cdktn.booleanToTerraform(struct!.critical),
        object_identifier: cdktn.stringToTerraform(struct!.objectIdentifier),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCertificateCustomExtensionPropertyToHclTerraform(struct?: CcCertificate.CustomExtensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        critical: {
            value: cdktn.booleanToHclTerraform(struct!.critical),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        object_identifier: {
            value: cdktn.stringToHclTerraform(struct!.objectIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateExtendedKeyUsagePropertyToTerraform(struct?: CcCertificate.ExtendedKeyUsageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extended_key_usage_object_identifier: cdktn.stringToTerraform(struct!.extendedKeyUsageObjectIdentifier),
        extended_key_usage_type: cdktn.stringToTerraform(struct!.extendedKeyUsageType),
    }
}


export function ccCertificateExtendedKeyUsagePropertyToHclTerraform(struct?: CcCertificate.ExtendedKeyUsageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extended_key_usage_object_identifier: {
            value: cdktn.stringToHclTerraform(struct!.extendedKeyUsageObjectIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        extended_key_usage_type: {
            value: cdktn.stringToHclTerraform(struct!.extendedKeyUsageType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateKeyUsagePropertyToTerraform(struct?: CcCertificate.KeyUsageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        crl_sign: cdktn.booleanToTerraform(struct!.crlSign),
        data_encipherment: cdktn.booleanToTerraform(struct!.dataEncipherment),
        decipher_only: cdktn.booleanToTerraform(struct!.decipherOnly),
        digital_signature: cdktn.booleanToTerraform(struct!.digitalSignature),
        encipher_only: cdktn.booleanToTerraform(struct!.encipherOnly),
        key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
        key_cert_sign: cdktn.booleanToTerraform(struct!.keyCertSign),
        key_encipherment: cdktn.booleanToTerraform(struct!.keyEncipherment),
        non_repudiation: cdktn.booleanToTerraform(struct!.nonRepudiation),
    }
}


export function ccCertificateKeyUsagePropertyToHclTerraform(struct?: CcCertificate.KeyUsageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        crl_sign: {
            value: cdktn.booleanToHclTerraform(struct!.crlSign),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        data_encipherment: {
            value: cdktn.booleanToHclTerraform(struct!.dataEncipherment),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        decipher_only: {
            value: cdktn.booleanToHclTerraform(struct!.decipherOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        digital_signature: {
            value: cdktn.booleanToHclTerraform(struct!.digitalSignature),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        encipher_only: {
            value: cdktn.booleanToHclTerraform(struct!.encipherOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        key_agreement: {
            value: cdktn.booleanToHclTerraform(struct!.keyAgreement),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        key_cert_sign: {
            value: cdktn.booleanToHclTerraform(struct!.keyCertSign),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        key_encipherment: {
            value: cdktn.booleanToHclTerraform(struct!.keyEncipherment),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        non_repudiation: {
            value: cdktn.booleanToHclTerraform(struct!.nonRepudiation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateCustomAttributePropertyToTerraform(struct?: CcCertificate.CustomAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object_identifier: cdktn.stringToTerraform(struct!.objectIdentifier),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCertificateCustomAttributePropertyToHclTerraform(struct?: CcCertificate.CustomAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object_identifier: {
            value: cdktn.stringToHclTerraform(struct!.objectIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateSubjectPropertyToTerraform(struct?: CcCertificate.SubjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        common_name: cdktn.stringToTerraform(struct!.commonName),
        country: cdktn.stringToTerraform(struct!.country),
        custom_attributes: cdktn.listMapper(ccCertificateCustomAttributePropertyToTerraform, false)(struct!.customAttributes),
        distinguished_name_qualifier: cdktn.stringToTerraform(struct!.distinguishedNameQualifier),
        generation_qualifier: cdktn.stringToTerraform(struct!.generationQualifier),
        given_name: cdktn.stringToTerraform(struct!.givenName),
        initials: cdktn.stringToTerraform(struct!.initials),
        locality: cdktn.stringToTerraform(struct!.locality),
        organization: cdktn.stringToTerraform(struct!.organization),
        organizational_unit: cdktn.stringToTerraform(struct!.organizationalUnit),
        pseudonym: cdktn.stringToTerraform(struct!.pseudonym),
        serial_number: cdktn.stringToTerraform(struct!.serialNumber),
        state: cdktn.stringToTerraform(struct!.state),
        surname: cdktn.stringToTerraform(struct!.surname),
        title: cdktn.stringToTerraform(struct!.title),
    }
}


export function ccCertificateSubjectPropertyToHclTerraform(struct?: CcCertificate.SubjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        common_name: {
            value: cdktn.stringToHclTerraform(struct!.commonName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        country: {
            value: cdktn.stringToHclTerraform(struct!.country),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_attributes: {
            value: cdktn.listMapperHcl(ccCertificateCustomAttributePropertyToHclTerraform, false)(struct!.customAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "CustomAttributePropertyList",
        },
        distinguished_name_qualifier: {
            value: cdktn.stringToHclTerraform(struct!.distinguishedNameQualifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        generation_qualifier: {
            value: cdktn.stringToHclTerraform(struct!.generationQualifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        given_name: {
            value: cdktn.stringToHclTerraform(struct!.givenName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        initials: {
            value: cdktn.stringToHclTerraform(struct!.initials),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locality: {
            value: cdktn.stringToHclTerraform(struct!.locality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organization: {
            value: cdktn.stringToHclTerraform(struct!.organization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organizational_unit: {
            value: cdktn.stringToHclTerraform(struct!.organizationalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pseudonym: {
            value: cdktn.stringToHclTerraform(struct!.pseudonym),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        serial_number: {
            value: cdktn.stringToHclTerraform(struct!.serialNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        surname: {
            value: cdktn.stringToHclTerraform(struct!.surname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        title: {
            value: cdktn.stringToHclTerraform(struct!.title),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateEdiPartyNamePropertyToTerraform(struct?: CcCertificate.EdiPartyNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name_assigner: cdktn.stringToTerraform(struct!.nameAssigner),
        party_name: cdktn.stringToTerraform(struct!.partyName),
    }
}


export function ccCertificateEdiPartyNamePropertyToHclTerraform(struct?: CcCertificate.EdiPartyNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name_assigner: {
            value: cdktn.stringToHclTerraform(struct!.nameAssigner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        party_name: {
            value: cdktn.stringToHclTerraform(struct!.partyName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateOtherNamePropertyToTerraform(struct?: CcCertificate.OtherNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type_id: cdktn.stringToTerraform(struct!.typeId),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCertificateOtherNamePropertyToHclTerraform(struct?: CcCertificate.OtherNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type_id: {
            value: cdktn.stringToHclTerraform(struct!.typeId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateGeneralNamePropertyToTerraform(struct?: CcCertificate.GeneralNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        directory_name: ccCertificateSubjectPropertyToTerraform(struct!.directoryName),
        dns_name: cdktn.stringToTerraform(struct!.dnsName),
        edi_party_name: ccCertificateEdiPartyNamePropertyToTerraform(struct!.ediPartyName),
        ip_address: cdktn.stringToTerraform(struct!.ipAddress),
        other_name: ccCertificateOtherNamePropertyToTerraform(struct!.otherName),
        registered_id: cdktn.stringToTerraform(struct!.registeredId),
        rfc_822_name: cdktn.stringToTerraform(struct!.rfc822Name),
        uniform_resource_identifier: cdktn.stringToTerraform(struct!.uniformResourceIdentifier),
    }
}


export function ccCertificateGeneralNamePropertyToHclTerraform(struct?: CcCertificate.GeneralNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        directory_name: {
            value: ccCertificateSubjectPropertyToHclTerraform(struct!.directoryName),
            isBlock: true,
            type: "struct",
            storageClassType: "SubjectProperty",
        },
        dns_name: {
            value: cdktn.stringToHclTerraform(struct!.dnsName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        edi_party_name: {
            value: ccCertificateEdiPartyNamePropertyToHclTerraform(struct!.ediPartyName),
            isBlock: true,
            type: "struct",
            storageClassType: "EdiPartyNameProperty",
        },
        ip_address: {
            value: cdktn.stringToHclTerraform(struct!.ipAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        other_name: {
            value: ccCertificateOtherNamePropertyToHclTerraform(struct!.otherName),
            isBlock: true,
            type: "struct",
            storageClassType: "OtherNameProperty",
        },
        registered_id: {
            value: cdktn.stringToHclTerraform(struct!.registeredId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rfc_822_name: {
            value: cdktn.stringToHclTerraform(struct!.rfc822Name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uniform_resource_identifier: {
            value: cdktn.stringToHclTerraform(struct!.uniformResourceIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateExtensionsPropertyToTerraform(struct?: CcCertificate.ExtensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_policies: cdktn.listMapper(ccCertificatePolicyInformationPropertyToTerraform, false)(struct!.certificatePolicies),
        custom_extensions: cdktn.listMapper(ccCertificateCustomExtensionPropertyToTerraform, false)(struct!.customExtensions),
        extended_key_usage: cdktn.listMapper(ccCertificateExtendedKeyUsagePropertyToTerraform, false)(struct!.extendedKeyUsage),
        key_usage: ccCertificateKeyUsagePropertyToTerraform(struct!.keyUsage),
        subject_alternative_names: cdktn.listMapper(ccCertificateGeneralNamePropertyToTerraform, false)(struct!.subjectAlternativeNames),
    }
}


export function ccCertificateExtensionsPropertyToHclTerraform(struct?: CcCertificate.ExtensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_policies: {
            value: cdktn.listMapperHcl(ccCertificatePolicyInformationPropertyToHclTerraform, false)(struct!.certificatePolicies),
            isBlock: true,
            type: "list",
            storageClassType: "PolicyInformationPropertyList",
        },
        custom_extensions: {
            value: cdktn.listMapperHcl(ccCertificateCustomExtensionPropertyToHclTerraform, false)(struct!.customExtensions),
            isBlock: true,
            type: "list",
            storageClassType: "CustomExtensionPropertyList",
        },
        extended_key_usage: {
            value: cdktn.listMapperHcl(ccCertificateExtendedKeyUsagePropertyToHclTerraform, false)(struct!.extendedKeyUsage),
            isBlock: true,
            type: "list",
            storageClassType: "ExtendedKeyUsagePropertyList",
        },
        key_usage: {
            value: ccCertificateKeyUsagePropertyToHclTerraform(struct!.keyUsage),
            isBlock: true,
            type: "struct",
            storageClassType: "KeyUsageProperty",
        },
        subject_alternative_names: {
            value: cdktn.listMapperHcl(ccCertificateGeneralNamePropertyToHclTerraform, false)(struct!.subjectAlternativeNames),
            isBlock: true,
            type: "list",
            storageClassType: "GeneralNamePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateCustomAttributesPropertyToTerraform(struct?: CcCertificate.CustomAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object_identifier: cdktn.stringToTerraform(struct!.objectIdentifier),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCertificateCustomAttributesPropertyToHclTerraform(struct?: CcCertificate.CustomAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object_identifier: {
            value: cdktn.stringToHclTerraform(struct!.objectIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateApiPassthroughSubjectPropertyToTerraform(struct?: CcCertificate.ApiPassthroughSubjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        common_name: cdktn.stringToTerraform(struct!.commonName),
        country: cdktn.stringToTerraform(struct!.country),
        custom_attributes: cdktn.listMapper(ccCertificateCustomAttributesPropertyToTerraform, false)(struct!.customAttributes),
        distinguished_name_qualifier: cdktn.stringToTerraform(struct!.distinguishedNameQualifier),
        generation_qualifier: cdktn.stringToTerraform(struct!.generationQualifier),
        given_name: cdktn.stringToTerraform(struct!.givenName),
        initials: cdktn.stringToTerraform(struct!.initials),
        locality: cdktn.stringToTerraform(struct!.locality),
        organization: cdktn.stringToTerraform(struct!.organization),
        organizational_unit: cdktn.stringToTerraform(struct!.organizationalUnit),
        pseudonym: cdktn.stringToTerraform(struct!.pseudonym),
        serial_number: cdktn.stringToTerraform(struct!.serialNumber),
        state: cdktn.stringToTerraform(struct!.state),
        surname: cdktn.stringToTerraform(struct!.surname),
        title: cdktn.stringToTerraform(struct!.title),
    }
}


export function ccCertificateApiPassthroughSubjectPropertyToHclTerraform(struct?: CcCertificate.ApiPassthroughSubjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        common_name: {
            value: cdktn.stringToHclTerraform(struct!.commonName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        country: {
            value: cdktn.stringToHclTerraform(struct!.country),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_attributes: {
            value: cdktn.listMapperHcl(ccCertificateCustomAttributesPropertyToHclTerraform, false)(struct!.customAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "CustomAttributesPropertyList",
        },
        distinguished_name_qualifier: {
            value: cdktn.stringToHclTerraform(struct!.distinguishedNameQualifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        generation_qualifier: {
            value: cdktn.stringToHclTerraform(struct!.generationQualifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        given_name: {
            value: cdktn.stringToHclTerraform(struct!.givenName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        initials: {
            value: cdktn.stringToHclTerraform(struct!.initials),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        locality: {
            value: cdktn.stringToHclTerraform(struct!.locality),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organization: {
            value: cdktn.stringToHclTerraform(struct!.organization),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        organizational_unit: {
            value: cdktn.stringToHclTerraform(struct!.organizationalUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pseudonym: {
            value: cdktn.stringToHclTerraform(struct!.pseudonym),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        serial_number: {
            value: cdktn.stringToHclTerraform(struct!.serialNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        state: {
            value: cdktn.stringToHclTerraform(struct!.state),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        surname: {
            value: cdktn.stringToHclTerraform(struct!.surname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        title: {
            value: cdktn.stringToHclTerraform(struct!.title),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateApiPassthroughPropertyToTerraform(struct?: CcCertificate.ApiPassthroughProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        extensions: ccCertificateExtensionsPropertyToTerraform(struct!.extensions),
        subject: ccCertificateApiPassthroughSubjectPropertyToTerraform(struct!.subject),
    }
}


export function ccCertificateApiPassthroughPropertyToHclTerraform(struct?: CcCertificate.ApiPassthroughProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        extensions: {
            value: ccCertificateExtensionsPropertyToHclTerraform(struct!.extensions),
            isBlock: true,
            type: "struct",
            storageClassType: "ExtensionsProperty",
        },
        subject: {
            value: ccCertificateApiPassthroughSubjectPropertyToHclTerraform(struct!.subject),
            isBlock: true,
            type: "struct",
            storageClassType: "ApiPassthroughSubjectProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateValidityPropertyToTerraform(struct?: CcCertificate.ValidityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccCertificateValidityPropertyToHclTerraform(struct?: CcCertificate.ValidityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateValidityNotBeforePropertyToTerraform(struct?: CcCertificate.ValidityNotBeforeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccCertificateValidityNotBeforePropertyToHclTerraform(struct?: CcCertificate.ValidityNotBeforeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCertificate {
export interface QualifierProperty {
    /**
    * Contains a pointer to a certification practice statement (CPS) published by the CA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#cps_uri CcCertificate#cps_uri}
    */
    readonly cpsUri?: string;
}
export class QualifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QualifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cpsUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpsUri = this._cpsUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QualifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpsUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpsUri = value.cpsUri;
        }
    }

    // cps_uri - computed: true, optional: true, required: false
    private _cpsUri?: string; 
    public get cpsUri() {
        return this.getStringAttribute('cps_uri');
    }
    public set cpsUri(value: string) {
        this._cpsUri = value;
    }
    public resetCpsUri() {
        this._cpsUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpsUriInput() {
        return this._cpsUri;
    }
}
export interface PolicyQualifierInfoProperty {
    /**
    * Identifies the qualifier modifying a ``CertPolicyId``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#policy_qualifier_id CcCertificate#policy_qualifier_id}
    */
    readonly policyQualifierId?: string;
    /**
    * Defines the qualifier type. AWS Private CA supports the use of a URI for a CPS qualifier in this field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#qualifier CcCertificate#qualifier}
    */
    readonly qualifier?: QualifierProperty;
}
export class PolicyQualifierInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): PolicyQualifierInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policyQualifierId !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyQualifierId = this._policyQualifierId;
        }
        if (this._qualifier?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.qualifier = this._qualifier?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyQualifierInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policyQualifierId = undefined;
            this._qualifier.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policyQualifierId = value.policyQualifierId;
            this._qualifier.internalValue = value.qualifier;
        }
    }

    // policy_qualifier_id - computed: true, optional: true, required: false
    private _policyQualifierId?: string; 
    public get policyQualifierId() {
        return this.getStringAttribute('policy_qualifier_id');
    }
    public set policyQualifierId(value: string) {
        this._policyQualifierId = value;
    }
    public resetPolicyQualifierId() {
        this._policyQualifierId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyQualifierIdInput() {
        return this._policyQualifierId;
    }

    // qualifier - computed: true, optional: true, required: false
    private _qualifier = new QualifierPropertyOutputReference(this, "qualifier");
    public get qualifier() {
        return this._qualifier;
    }
    public putQualifier(value: QualifierProperty) {
        this._qualifier.internalValue = value;
    }
    public resetQualifier() {
        this._qualifier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualifierInput() {
        return this._qualifier.internalValue;
    }
}

export class PolicyQualifierInfoPropertyList extends cdktn.ComplexList {
    public internalValue? : PolicyQualifierInfoProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): PolicyQualifierInfoPropertyOutputReference {
        return new PolicyQualifierInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PolicyInformationProperty {
    /**
    * Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#cert_policy_id CcCertificate#cert_policy_id}
    */
    readonly certPolicyId?: string;
    /**
    * Modifies the given ``CertPolicyId`` with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#policy_qualifiers CcCertificate#policy_qualifiers}
    */
    readonly policyQualifiers?: PolicyQualifierInfoProperty[] | cdktn.IResolvable;
}
export class PolicyInformationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): PolicyInformationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certPolicyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.certPolicyId = this._certPolicyId;
        }
        if (this._policyQualifiers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyQualifiers = this._policyQualifiers?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyInformationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certPolicyId = undefined;
            this._policyQualifiers.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certPolicyId = value.certPolicyId;
            this._policyQualifiers.internalValue = value.policyQualifiers;
        }
    }

    // cert_policy_id - computed: true, optional: true, required: false
    private _certPolicyId?: string; 
    public get certPolicyId() {
        return this.getStringAttribute('cert_policy_id');
    }
    public set certPolicyId(value: string) {
        this._certPolicyId = value;
    }
    public resetCertPolicyId() {
        this._certPolicyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certPolicyIdInput() {
        return this._certPolicyId;
    }

    // policy_qualifiers - computed: true, optional: true, required: false
    private _policyQualifiers = new PolicyQualifierInfoPropertyList(this, "policy_qualifiers", false);
    public get policyQualifiers() {
        return this._policyQualifiers;
    }
    public putPolicyQualifiers(value: PolicyQualifierInfoProperty[] | cdktn.IResolvable) {
        this._policyQualifiers.internalValue = value;
    }
    public resetPolicyQualifiers() {
        this._policyQualifiers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyQualifiersInput() {
        return this._policyQualifiers.internalValue;
    }
}

export class PolicyInformationPropertyList extends cdktn.ComplexList {
    public internalValue? : PolicyInformationProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): PolicyInformationPropertyOutputReference {
        return new PolicyInformationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomExtensionProperty {
    /**
    * Specifies the critical flag of the X.509 extension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#critical CcCertificate#critical}
    */
    readonly critical?: boolean | cdktn.IResolvable;
    /**
    * Specifies the object identifier (OID) of the X.509 extension. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#object_identifier CcCertificate#object_identifier}
    */
    readonly objectIdentifier?: string;
    /**
    * Specifies the base64-encoded value of the X.509 extension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#value CcCertificate#value}
    */
    readonly value?: string;
}
export class CustomExtensionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): CustomExtensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._critical !== undefined) {
            hasAnyValues = true;
            internalValueResult.critical = this._critical;
        }
        if (this._objectIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectIdentifier = this._objectIdentifier;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomExtensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._critical = undefined;
            this._objectIdentifier = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._critical = value.critical;
            this._objectIdentifier = value.objectIdentifier;
            this._value = value.value;
        }
    }

    // critical - computed: true, optional: true, required: false
    private _critical?: boolean | cdktn.IResolvable; 
    public get critical() {
        return this.getBooleanAttribute('critical');
    }
    public set critical(value: boolean | cdktn.IResolvable) {
        this._critical = value;
    }
    public resetCritical() {
        this._critical = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get criticalInput() {
        return this._critical;
    }

    // object_identifier - computed: true, optional: true, required: false
    private _objectIdentifier?: string; 
    public get objectIdentifier() {
        return this.getStringAttribute('object_identifier');
    }
    public set objectIdentifier(value: string) {
        this._objectIdentifier = value;
    }
    public resetObjectIdentifier() {
        this._objectIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectIdentifierInput() {
        return this._objectIdentifier;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class CustomExtensionPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomExtensionProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): CustomExtensionPropertyOutputReference {
        return new CustomExtensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ExtendedKeyUsageProperty {
    /**
    * Specifies a custom ``ExtendedKeyUsage`` with an object identifier (OID).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#extended_key_usage_object_identifier CcCertificate#extended_key_usage_object_identifier}
    */
    readonly extendedKeyUsageObjectIdentifier?: string;
    /**
    * Specifies a standard ``ExtendedKeyUsage`` as defined as in [RFC 5280](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#extended_key_usage_type CcCertificate#extended_key_usage_type}
    */
    readonly extendedKeyUsageType?: string;
}
export class ExtendedKeyUsagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ExtendedKeyUsageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extendedKeyUsageObjectIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.extendedKeyUsageObjectIdentifier = this._extendedKeyUsageObjectIdentifier;
        }
        if (this._extendedKeyUsageType !== undefined) {
            hasAnyValues = true;
            internalValueResult.extendedKeyUsageType = this._extendedKeyUsageType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExtendedKeyUsageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extendedKeyUsageObjectIdentifier = undefined;
            this._extendedKeyUsageType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extendedKeyUsageObjectIdentifier = value.extendedKeyUsageObjectIdentifier;
            this._extendedKeyUsageType = value.extendedKeyUsageType;
        }
    }

    // extended_key_usage_object_identifier - computed: true, optional: true, required: false
    private _extendedKeyUsageObjectIdentifier?: string; 
    public get extendedKeyUsageObjectIdentifier() {
        return this.getStringAttribute('extended_key_usage_object_identifier');
    }
    public set extendedKeyUsageObjectIdentifier(value: string) {
        this._extendedKeyUsageObjectIdentifier = value;
    }
    public resetExtendedKeyUsageObjectIdentifier() {
        this._extendedKeyUsageObjectIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extendedKeyUsageObjectIdentifierInput() {
        return this._extendedKeyUsageObjectIdentifier;
    }

    // extended_key_usage_type - computed: true, optional: true, required: false
    private _extendedKeyUsageType?: string; 
    public get extendedKeyUsageType() {
        return this.getStringAttribute('extended_key_usage_type');
    }
    public set extendedKeyUsageType(value: string) {
        this._extendedKeyUsageType = value;
    }
    public resetExtendedKeyUsageType() {
        this._extendedKeyUsageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extendedKeyUsageTypeInput() {
        return this._extendedKeyUsageType;
    }
}

export class ExtendedKeyUsagePropertyList extends cdktn.ComplexList {
    public internalValue? : ExtendedKeyUsageProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): ExtendedKeyUsagePropertyOutputReference {
        return new ExtendedKeyUsagePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KeyUsageProperty {
    /**
    * Key can be used to sign CRLs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#crl_sign CcCertificate#crl_sign}
    */
    readonly crlSign?: boolean | cdktn.IResolvable;
    /**
    * Key can be used to decipher data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#data_encipherment CcCertificate#data_encipherment}
    */
    readonly dataEncipherment?: boolean | cdktn.IResolvable;
    /**
    * Key can be used only to decipher data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#decipher_only CcCertificate#decipher_only}
    */
    readonly decipherOnly?: boolean | cdktn.IResolvable;
    /**
    * Key can be used for digital signing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#digital_signature CcCertificate#digital_signature}
    */
    readonly digitalSignature?: boolean | cdktn.IResolvable;
    /**
    * Key can be used only to encipher data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#encipher_only CcCertificate#encipher_only}
    */
    readonly encipherOnly?: boolean | cdktn.IResolvable;
    /**
    * Key can be used in a key-agreement protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#key_agreement CcCertificate#key_agreement}
    */
    readonly keyAgreement?: boolean | cdktn.IResolvable;
    /**
    * Key can be used to sign certificates.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#key_cert_sign CcCertificate#key_cert_sign}
    */
    readonly keyCertSign?: boolean | cdktn.IResolvable;
    /**
    * Key can be used to encipher data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#key_encipherment CcCertificate#key_encipherment}
    */
    readonly keyEncipherment?: boolean | cdktn.IResolvable;
    /**
    * Key can be used for non-repudiation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#non_repudiation CcCertificate#non_repudiation}
    */
    readonly nonRepudiation?: boolean | cdktn.IResolvable;
}
export class KeyUsagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KeyUsageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._crlSign !== undefined) {
            hasAnyValues = true;
            internalValueResult.crlSign = this._crlSign;
        }
        if (this._dataEncipherment !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataEncipherment = this._dataEncipherment;
        }
        if (this._decipherOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.decipherOnly = this._decipherOnly;
        }
        if (this._digitalSignature !== undefined) {
            hasAnyValues = true;
            internalValueResult.digitalSignature = this._digitalSignature;
        }
        if (this._encipherOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.encipherOnly = this._encipherOnly;
        }
        if (this._keyAgreement !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyAgreement = this._keyAgreement;
        }
        if (this._keyCertSign !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyCertSign = this._keyCertSign;
        }
        if (this._keyEncipherment !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyEncipherment = this._keyEncipherment;
        }
        if (this._nonRepudiation !== undefined) {
            hasAnyValues = true;
            internalValueResult.nonRepudiation = this._nonRepudiation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyUsageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._crlSign = undefined;
            this._dataEncipherment = undefined;
            this._decipherOnly = undefined;
            this._digitalSignature = undefined;
            this._encipherOnly = undefined;
            this._keyAgreement = undefined;
            this._keyCertSign = undefined;
            this._keyEncipherment = undefined;
            this._nonRepudiation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._crlSign = value.crlSign;
            this._dataEncipherment = value.dataEncipherment;
            this._decipherOnly = value.decipherOnly;
            this._digitalSignature = value.digitalSignature;
            this._encipherOnly = value.encipherOnly;
            this._keyAgreement = value.keyAgreement;
            this._keyCertSign = value.keyCertSign;
            this._keyEncipherment = value.keyEncipherment;
            this._nonRepudiation = value.nonRepudiation;
        }
    }

    // crl_sign - computed: true, optional: true, required: false
    private _crlSign?: boolean | cdktn.IResolvable; 
    public get crlSign() {
        return this.getBooleanAttribute('crl_sign');
    }
    public set crlSign(value: boolean | cdktn.IResolvable) {
        this._crlSign = value;
    }
    public resetCrlSign() {
        this._crlSign = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get crlSignInput() {
        return this._crlSign;
    }

    // data_encipherment - computed: true, optional: true, required: false
    private _dataEncipherment?: boolean | cdktn.IResolvable; 
    public get dataEncipherment() {
        return this.getBooleanAttribute('data_encipherment');
    }
    public set dataEncipherment(value: boolean | cdktn.IResolvable) {
        this._dataEncipherment = value;
    }
    public resetDataEncipherment() {
        this._dataEncipherment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataEnciphermentInput() {
        return this._dataEncipherment;
    }

    // decipher_only - computed: true, optional: true, required: false
    private _decipherOnly?: boolean | cdktn.IResolvable; 
    public get decipherOnly() {
        return this.getBooleanAttribute('decipher_only');
    }
    public set decipherOnly(value: boolean | cdktn.IResolvable) {
        this._decipherOnly = value;
    }
    public resetDecipherOnly() {
        this._decipherOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decipherOnlyInput() {
        return this._decipherOnly;
    }

    // digital_signature - computed: true, optional: true, required: false
    private _digitalSignature?: boolean | cdktn.IResolvable; 
    public get digitalSignature() {
        return this.getBooleanAttribute('digital_signature');
    }
    public set digitalSignature(value: boolean | cdktn.IResolvable) {
        this._digitalSignature = value;
    }
    public resetDigitalSignature() {
        this._digitalSignature = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get digitalSignatureInput() {
        return this._digitalSignature;
    }

    // encipher_only - computed: true, optional: true, required: false
    private _encipherOnly?: boolean | cdktn.IResolvable; 
    public get encipherOnly() {
        return this.getBooleanAttribute('encipher_only');
    }
    public set encipherOnly(value: boolean | cdktn.IResolvable) {
        this._encipherOnly = value;
    }
    public resetEncipherOnly() {
        this._encipherOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encipherOnlyInput() {
        return this._encipherOnly;
    }

    // key_agreement - computed: true, optional: true, required: false
    private _keyAgreement?: boolean | cdktn.IResolvable; 
    public get keyAgreement() {
        return this.getBooleanAttribute('key_agreement');
    }
    public set keyAgreement(value: boolean | cdktn.IResolvable) {
        this._keyAgreement = value;
    }
    public resetKeyAgreement() {
        this._keyAgreement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyAgreementInput() {
        return this._keyAgreement;
    }

    // key_cert_sign - computed: true, optional: true, required: false
    private _keyCertSign?: boolean | cdktn.IResolvable; 
    public get keyCertSign() {
        return this.getBooleanAttribute('key_cert_sign');
    }
    public set keyCertSign(value: boolean | cdktn.IResolvable) {
        this._keyCertSign = value;
    }
    public resetKeyCertSign() {
        this._keyCertSign = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyCertSignInput() {
        return this._keyCertSign;
    }

    // key_encipherment - computed: true, optional: true, required: false
    private _keyEncipherment?: boolean | cdktn.IResolvable; 
    public get keyEncipherment() {
        return this.getBooleanAttribute('key_encipherment');
    }
    public set keyEncipherment(value: boolean | cdktn.IResolvable) {
        this._keyEncipherment = value;
    }
    public resetKeyEncipherment() {
        this._keyEncipherment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyEnciphermentInput() {
        return this._keyEncipherment;
    }

    // non_repudiation - computed: true, optional: true, required: false
    private _nonRepudiation?: boolean | cdktn.IResolvable; 
    public get nonRepudiation() {
        return this.getBooleanAttribute('non_repudiation');
    }
    public set nonRepudiation(value: boolean | cdktn.IResolvable) {
        this._nonRepudiation = value;
    }
    public resetNonRepudiation() {
        this._nonRepudiation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nonRepudiationInput() {
        return this._nonRepudiation;
    }
}
export interface CustomAttributeProperty {
    /**
    * Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#object_identifier CcCertificate#object_identifier}
    */
    readonly objectIdentifier?: string;
    /**
    * Specifies the attribute value of relative distinguished name (RDN).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#value CcCertificate#value}
    */
    readonly value?: string;
}
export class CustomAttributePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): CustomAttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._objectIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectIdentifier = this._objectIdentifier;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomAttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._objectIdentifier = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._objectIdentifier = value.objectIdentifier;
            this._value = value.value;
        }
    }

    // object_identifier - computed: true, optional: true, required: false
    private _objectIdentifier?: string; 
    public get objectIdentifier() {
        return this.getStringAttribute('object_identifier');
    }
    public set objectIdentifier(value: string) {
        this._objectIdentifier = value;
    }
    public resetObjectIdentifier() {
        this._objectIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectIdentifierInput() {
        return this._objectIdentifier;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class CustomAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : CustomAttributeProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): CustomAttributePropertyOutputReference {
        return new CustomAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SubjectProperty {
    /**
    * For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.
    *  Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#common_name CcCertificate#common_name}
    */
    readonly commonName?: string;
    /**
    * Two-digit code that specifies the country in which the certificate subject located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#country CcCertificate#country}
    */
    readonly country?: string;
    /**
    * Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).
    *   Custom attributes cannot be used in combination with standard attributes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#custom_attributes CcCertificate#custom_attributes}
    */
    readonly customAttributes?: CustomAttributeProperty[] | cdktn.IResolvable;
    /**
    * Disambiguating information for the certificate subject.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#distinguished_name_qualifier CcCertificate#distinguished_name_qualifier}
    */
    readonly distinguishedNameQualifier?: string;
    /**
    * Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#generation_qualifier CcCertificate#generation_qualifier}
    */
    readonly generationQualifier?: string;
    /**
    * First name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#given_name CcCertificate#given_name}
    */
    readonly givenName?: string;
    /**
    * Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#initials CcCertificate#initials}
    */
    readonly initials?: string;
    /**
    * The locality (such as a city or town) in which the certificate subject is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#locality CcCertificate#locality}
    */
    readonly locality?: string;
    /**
    * Legal name of the organization with which the certificate subject is affiliated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#organization CcCertificate#organization}
    */
    readonly organization?: string;
    /**
    * A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#organizational_unit CcCertificate#organizational_unit}
    */
    readonly organizationalUnit?: string;
    /**
    * Typically a shortened version of a longer *GivenName*. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#pseudonym CcCertificate#pseudonym}
    */
    readonly pseudonym?: string;
    /**
    * The certificate serial number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#serial_number CcCertificate#serial_number}
    */
    readonly serialNumber?: string;
    /**
    * State in which the subject of the certificate is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#state CcCertificate#state}
    */
    readonly state?: string;
    /**
    * Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#surname CcCertificate#surname}
    */
    readonly surname?: string;
    /**
    * A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#title CcCertificate#title}
    */
    readonly title?: string;
}
export class SubjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SubjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._commonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName;
        }
        if (this._country !== undefined) {
            hasAnyValues = true;
            internalValueResult.country = this._country;
        }
        if (this._customAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAttributes = this._customAttributes?.internalValue;
        }
        if (this._distinguishedNameQualifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.distinguishedNameQualifier = this._distinguishedNameQualifier;
        }
        if (this._generationQualifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.generationQualifier = this._generationQualifier;
        }
        if (this._givenName !== undefined) {
            hasAnyValues = true;
            internalValueResult.givenName = this._givenName;
        }
        if (this._initials !== undefined) {
            hasAnyValues = true;
            internalValueResult.initials = this._initials;
        }
        if (this._locality !== undefined) {
            hasAnyValues = true;
            internalValueResult.locality = this._locality;
        }
        if (this._organization !== undefined) {
            hasAnyValues = true;
            internalValueResult.organization = this._organization;
        }
        if (this._organizationalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationalUnit = this._organizationalUnit;
        }
        if (this._pseudonym !== undefined) {
            hasAnyValues = true;
            internalValueResult.pseudonym = this._pseudonym;
        }
        if (this._serialNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.serialNumber = this._serialNumber;
        }
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._surname !== undefined) {
            hasAnyValues = true;
            internalValueResult.surname = this._surname;
        }
        if (this._title !== undefined) {
            hasAnyValues = true;
            internalValueResult.title = this._title;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commonName = undefined;
            this._country = undefined;
            this._customAttributes.internalValue = undefined;
            this._distinguishedNameQualifier = undefined;
            this._generationQualifier = undefined;
            this._givenName = undefined;
            this._initials = undefined;
            this._locality = undefined;
            this._organization = undefined;
            this._organizationalUnit = undefined;
            this._pseudonym = undefined;
            this._serialNumber = undefined;
            this._state = undefined;
            this._surname = undefined;
            this._title = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commonName = value.commonName;
            this._country = value.country;
            this._customAttributes.internalValue = value.customAttributes;
            this._distinguishedNameQualifier = value.distinguishedNameQualifier;
            this._generationQualifier = value.generationQualifier;
            this._givenName = value.givenName;
            this._initials = value.initials;
            this._locality = value.locality;
            this._organization = value.organization;
            this._organizationalUnit = value.organizationalUnit;
            this._pseudonym = value.pseudonym;
            this._serialNumber = value.serialNumber;
            this._state = value.state;
            this._surname = value.surname;
            this._title = value.title;
        }
    }

    // common_name - computed: true, optional: true, required: false
    private _commonName?: string; 
    public get commonName() {
        return this.getStringAttribute('common_name');
    }
    public set commonName(value: string) {
        this._commonName = value;
    }
    public resetCommonName() {
        this._commonName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commonNameInput() {
        return this._commonName;
    }

    // country - computed: true, optional: true, required: false
    private _country?: string; 
    public get country() {
        return this.getStringAttribute('country');
    }
    public set country(value: string) {
        this._country = value;
    }
    public resetCountry() {
        this._country = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryInput() {
        return this._country;
    }

    // custom_attributes - computed: true, optional: true, required: false
    private _customAttributes = new CustomAttributePropertyList(this, "custom_attributes", false);
    public get customAttributes() {
        return this._customAttributes;
    }
    public putCustomAttributes(value: CustomAttributeProperty[] | cdktn.IResolvable) {
        this._customAttributes.internalValue = value;
    }
    public resetCustomAttributes() {
        this._customAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAttributesInput() {
        return this._customAttributes.internalValue;
    }

    // distinguished_name_qualifier - computed: true, optional: true, required: false
    private _distinguishedNameQualifier?: string; 
    public get distinguishedNameQualifier() {
        return this.getStringAttribute('distinguished_name_qualifier');
    }
    public set distinguishedNameQualifier(value: string) {
        this._distinguishedNameQualifier = value;
    }
    public resetDistinguishedNameQualifier() {
        this._distinguishedNameQualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get distinguishedNameQualifierInput() {
        return this._distinguishedNameQualifier;
    }

    // generation_qualifier - computed: true, optional: true, required: false
    private _generationQualifier?: string; 
    public get generationQualifier() {
        return this.getStringAttribute('generation_qualifier');
    }
    public set generationQualifier(value: string) {
        this._generationQualifier = value;
    }
    public resetGenerationQualifier() {
        this._generationQualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generationQualifierInput() {
        return this._generationQualifier;
    }

    // given_name - computed: true, optional: true, required: false
    private _givenName?: string; 
    public get givenName() {
        return this.getStringAttribute('given_name');
    }
    public set givenName(value: string) {
        this._givenName = value;
    }
    public resetGivenName() {
        this._givenName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get givenNameInput() {
        return this._givenName;
    }

    // initials - computed: true, optional: true, required: false
    private _initials?: string; 
    public get initials() {
        return this.getStringAttribute('initials');
    }
    public set initials(value: string) {
        this._initials = value;
    }
    public resetInitials() {
        this._initials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initialsInput() {
        return this._initials;
    }

    // locality - computed: true, optional: true, required: false
    private _locality?: string; 
    public get locality() {
        return this.getStringAttribute('locality');
    }
    public set locality(value: string) {
        this._locality = value;
    }
    public resetLocality() {
        this._locality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localityInput() {
        return this._locality;
    }

    // organization - computed: true, optional: true, required: false
    private _organization?: string; 
    public get organization() {
        return this.getStringAttribute('organization');
    }
    public set organization(value: string) {
        this._organization = value;
    }
    public resetOrganization() {
        this._organization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationInput() {
        return this._organization;
    }

    // organizational_unit - computed: true, optional: true, required: false
    private _organizationalUnit?: string; 
    public get organizationalUnit() {
        return this.getStringAttribute('organizational_unit');
    }
    public set organizationalUnit(value: string) {
        this._organizationalUnit = value;
    }
    public resetOrganizationalUnit() {
        this._organizationalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitInput() {
        return this._organizationalUnit;
    }

    // pseudonym - computed: true, optional: true, required: false
    private _pseudonym?: string; 
    public get pseudonym() {
        return this.getStringAttribute('pseudonym');
    }
    public set pseudonym(value: string) {
        this._pseudonym = value;
    }
    public resetPseudonym() {
        this._pseudonym = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pseudonymInput() {
        return this._pseudonym;
    }

    // serial_number - computed: true, optional: true, required: false
    private _serialNumber?: string; 
    public get serialNumber() {
        return this.getStringAttribute('serial_number');
    }
    public set serialNumber(value: string) {
        this._serialNumber = value;
    }
    public resetSerialNumber() {
        this._serialNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serialNumberInput() {
        return this._serialNumber;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // surname - computed: true, optional: true, required: false
    private _surname?: string; 
    public get surname() {
        return this.getStringAttribute('surname');
    }
    public set surname(value: string) {
        this._surname = value;
    }
    public resetSurname() {
        this._surname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get surnameInput() {
        return this._surname;
    }

    // title - computed: true, optional: true, required: false
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    public resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }
}
export interface EdiPartyNameProperty {
    /**
    * Specifies the name assigner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#name_assigner CcCertificate#name_assigner}
    */
    readonly nameAssigner?: string;
    /**
    * Specifies the party name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#party_name CcCertificate#party_name}
    */
    readonly partyName?: string;
}
export class EdiPartyNamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EdiPartyNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._nameAssigner !== undefined) {
            hasAnyValues = true;
            internalValueResult.nameAssigner = this._nameAssigner;
        }
        if (this._partyName !== undefined) {
            hasAnyValues = true;
            internalValueResult.partyName = this._partyName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EdiPartyNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nameAssigner = undefined;
            this._partyName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nameAssigner = value.nameAssigner;
            this._partyName = value.partyName;
        }
    }

    // name_assigner - computed: true, optional: true, required: false
    private _nameAssigner?: string; 
    public get nameAssigner() {
        return this.getStringAttribute('name_assigner');
    }
    public set nameAssigner(value: string) {
        this._nameAssigner = value;
    }
    public resetNameAssigner() {
        this._nameAssigner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameAssignerInput() {
        return this._nameAssigner;
    }

    // party_name - computed: true, optional: true, required: false
    private _partyName?: string; 
    public get partyName() {
        return this.getStringAttribute('party_name');
    }
    public set partyName(value: string) {
        this._partyName = value;
    }
    public resetPartyName() {
        this._partyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partyNameInput() {
        return this._partyName;
    }
}
export interface OtherNameProperty {
    /**
    * Specifies an OID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#type_id CcCertificate#type_id}
    */
    readonly typeId?: string;
    /**
    * Specifies an OID value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#value CcCertificate#value}
    */
    readonly value?: string;
}
export class OtherNamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OtherNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._typeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.typeId = this._typeId;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OtherNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._typeId = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._typeId = value.typeId;
            this._value = value.value;
        }
    }

    // type_id - computed: true, optional: true, required: false
    private _typeId?: string; 
    public get typeId() {
        return this.getStringAttribute('type_id');
    }
    public set typeId(value: string) {
        this._typeId = value;
    }
    public resetTypeId() {
        this._typeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeIdInput() {
        return this._typeId;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}
export interface GeneralNameProperty {
    /**
    * Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#directory_name CcCertificate#directory_name}
    */
    readonly directoryName?: SubjectProperty;
    /**
    * Represents ``GeneralName`` as a DNS name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#dns_name CcCertificate#dns_name}
    */
    readonly dnsName?: string;
    /**
    * Represents ``GeneralName`` as an ``EdiPartyName`` object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#edi_party_name CcCertificate#edi_party_name}
    */
    readonly ediPartyName?: EdiPartyNameProperty;
    /**
    * Represents ``GeneralName`` as an IPv4 or IPv6 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#ip_address CcCertificate#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Represents ``GeneralName`` using an ``OtherName`` object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#other_name CcCertificate#other_name}
    */
    readonly otherName?: OtherNameProperty;
    /**
    * Represents ``GeneralName`` as an object identifier (OID).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#registered_id CcCertificate#registered_id}
    */
    readonly registeredId?: string;
    /**
    * Represents ``GeneralName`` as an [RFC 822](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc822) email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#rfc_822_name CcCertificate#rfc_822_name}
    */
    readonly rfc822Name?: string;
    /**
    * Represents ``GeneralName`` as a URI.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#uniform_resource_identifier CcCertificate#uniform_resource_identifier}
    */
    readonly uniformResourceIdentifier?: string;
}
export class GeneralNamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): GeneralNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._directoryName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.directoryName = this._directoryName?.internalValue;
        }
        if (this._dnsName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsName = this._dnsName;
        }
        if (this._ediPartyName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ediPartyName = this._ediPartyName?.internalValue;
        }
        if (this._ipAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddress = this._ipAddress;
        }
        if (this._otherName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.otherName = this._otherName?.internalValue;
        }
        if (this._registeredId !== undefined) {
            hasAnyValues = true;
            internalValueResult.registeredId = this._registeredId;
        }
        if (this._rfc822Name !== undefined) {
            hasAnyValues = true;
            internalValueResult.rfc822Name = this._rfc822Name;
        }
        if (this._uniformResourceIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.uniformResourceIdentifier = this._uniformResourceIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GeneralNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._directoryName.internalValue = undefined;
            this._dnsName = undefined;
            this._ediPartyName.internalValue = undefined;
            this._ipAddress = undefined;
            this._otherName.internalValue = undefined;
            this._registeredId = undefined;
            this._rfc822Name = undefined;
            this._uniformResourceIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._directoryName.internalValue = value.directoryName;
            this._dnsName = value.dnsName;
            this._ediPartyName.internalValue = value.ediPartyName;
            this._ipAddress = value.ipAddress;
            this._otherName.internalValue = value.otherName;
            this._registeredId = value.registeredId;
            this._rfc822Name = value.rfc822Name;
            this._uniformResourceIdentifier = value.uniformResourceIdentifier;
        }
    }

    // directory_name - computed: true, optional: true, required: false
    private _directoryName = new SubjectPropertyOutputReference(this, "directory_name");
    public get directoryName() {
        return this._directoryName;
    }
    public putDirectoryName(value: SubjectProperty) {
        this._directoryName.internalValue = value;
    }
    public resetDirectoryName() {
        this._directoryName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryNameInput() {
        return this._directoryName.internalValue;
    }

    // dns_name - computed: true, optional: true, required: false
    private _dnsName?: string; 
    public get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    public set dnsName(value: string) {
        this._dnsName = value;
    }
    public resetDnsName() {
        this._dnsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsNameInput() {
        return this._dnsName;
    }

    // edi_party_name - computed: true, optional: true, required: false
    private _ediPartyName = new EdiPartyNamePropertyOutputReference(this, "edi_party_name");
    public get ediPartyName() {
        return this._ediPartyName;
    }
    public putEdiPartyName(value: EdiPartyNameProperty) {
        this._ediPartyName.internalValue = value;
    }
    public resetEdiPartyName() {
        this._ediPartyName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ediPartyNameInput() {
        return this._ediPartyName.internalValue;
    }

    // ip_address - computed: true, optional: true, required: false
    private _ipAddress?: string; 
    public get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    public set ipAddress(value: string) {
        this._ipAddress = value;
    }
    public resetIpAddress() {
        this._ipAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressInput() {
        return this._ipAddress;
    }

    // other_name - computed: true, optional: true, required: false
    private _otherName = new OtherNamePropertyOutputReference(this, "other_name");
    public get otherName() {
        return this._otherName;
    }
    public putOtherName(value: OtherNameProperty) {
        this._otherName.internalValue = value;
    }
    public resetOtherName() {
        this._otherName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get otherNameInput() {
        return this._otherName.internalValue;
    }

    // registered_id - computed: true, optional: true, required: false
    private _registeredId?: string; 
    public get registeredId() {
        return this.getStringAttribute('registered_id');
    }
    public set registeredId(value: string) {
        this._registeredId = value;
    }
    public resetRegisteredId() {
        this._registeredId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registeredIdInput() {
        return this._registeredId;
    }

    // rfc_822_name - computed: true, optional: true, required: false
    private _rfc822Name?: string; 
    public get rfc822Name() {
        return this.getStringAttribute('rfc_822_name');
    }
    public set rfc822Name(value: string) {
        this._rfc822Name = value;
    }
    public resetRfc822Name() {
        this._rfc822Name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rfc822NameInput() {
        return this._rfc822Name;
    }

    // uniform_resource_identifier - computed: true, optional: true, required: false
    private _uniformResourceIdentifier?: string; 
    public get uniformResourceIdentifier() {
        return this.getStringAttribute('uniform_resource_identifier');
    }
    public set uniformResourceIdentifier(value: string) {
        this._uniformResourceIdentifier = value;
    }
    public resetUniformResourceIdentifier() {
        this._uniformResourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uniformResourceIdentifierInput() {
        return this._uniformResourceIdentifier;
    }
}

export class GeneralNamePropertyList extends cdktn.ComplexList {
    public internalValue? : GeneralNameProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): GeneralNamePropertyOutputReference {
        return new GeneralNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ExtensionsProperty {
    /**
    * Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).
    *  In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#certificate_policies CcCertificate#certificate_policies}
    */
    readonly certificatePolicies?: PolicyInformationProperty[] | cdktn.IResolvable;
    /**
    * Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#custom_extensions CcCertificate#custom_extensions}
    */
    readonly customExtensions?: CustomExtensionProperty[] | cdktn.IResolvable;
    /**
    * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the ``KeyUsage`` extension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#extended_key_usage CcCertificate#extended_key_usage}
    */
    readonly extendedKeyUsage?: ExtendedKeyUsageProperty[] | cdktn.IResolvable;
    /**
    * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#key_usage CcCertificate#key_usage}
    */
    readonly keyUsage?: KeyUsageProperty;
    /**
    * The subject alternative name extension allows identities to be bound to the subject of the certificate. These identities may be included in addition to or in place of the identity in the subject field of the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#subject_alternative_names CcCertificate#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: GeneralNameProperty[] | cdktn.IResolvable;
}
export class ExtensionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExtensionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificatePolicies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificatePolicies = this._certificatePolicies?.internalValue;
        }
        if (this._customExtensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customExtensions = this._customExtensions?.internalValue;
        }
        if (this._extendedKeyUsage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extendedKeyUsage = this._extendedKeyUsage?.internalValue;
        }
        if (this._keyUsage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyUsage = this._keyUsage?.internalValue;
        }
        if (this._subjectAlternativeNames?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExtensionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificatePolicies.internalValue = undefined;
            this._customExtensions.internalValue = undefined;
            this._extendedKeyUsage.internalValue = undefined;
            this._keyUsage.internalValue = undefined;
            this._subjectAlternativeNames.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificatePolicies.internalValue = value.certificatePolicies;
            this._customExtensions.internalValue = value.customExtensions;
            this._extendedKeyUsage.internalValue = value.extendedKeyUsage;
            this._keyUsage.internalValue = value.keyUsage;
            this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
        }
    }

    // certificate_policies - computed: true, optional: true, required: false
    private _certificatePolicies = new PolicyInformationPropertyList(this, "certificate_policies", false);
    public get certificatePolicies() {
        return this._certificatePolicies;
    }
    public putCertificatePolicies(value: PolicyInformationProperty[] | cdktn.IResolvable) {
        this._certificatePolicies.internalValue = value;
    }
    public resetCertificatePolicies() {
        this._certificatePolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificatePoliciesInput() {
        return this._certificatePolicies.internalValue;
    }

    // custom_extensions - computed: true, optional: true, required: false
    private _customExtensions = new CustomExtensionPropertyList(this, "custom_extensions", false);
    public get customExtensions() {
        return this._customExtensions;
    }
    public putCustomExtensions(value: CustomExtensionProperty[] | cdktn.IResolvable) {
        this._customExtensions.internalValue = value;
    }
    public resetCustomExtensions() {
        this._customExtensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customExtensionsInput() {
        return this._customExtensions.internalValue;
    }

    // extended_key_usage - computed: true, optional: true, required: false
    private _extendedKeyUsage = new ExtendedKeyUsagePropertyList(this, "extended_key_usage", false);
    public get extendedKeyUsage() {
        return this._extendedKeyUsage;
    }
    public putExtendedKeyUsage(value: ExtendedKeyUsageProperty[] | cdktn.IResolvable) {
        this._extendedKeyUsage.internalValue = value;
    }
    public resetExtendedKeyUsage() {
        this._extendedKeyUsage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extendedKeyUsageInput() {
        return this._extendedKeyUsage.internalValue;
    }

    // key_usage - computed: true, optional: true, required: false
    private _keyUsage = new KeyUsagePropertyOutputReference(this, "key_usage");
    public get keyUsage() {
        return this._keyUsage;
    }
    public putKeyUsage(value: KeyUsageProperty) {
        this._keyUsage.internalValue = value;
    }
    public resetKeyUsage() {
        this._keyUsage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyUsageInput() {
        return this._keyUsage.internalValue;
    }

    // subject_alternative_names - computed: true, optional: true, required: false
    private _subjectAlternativeNames = new GeneralNamePropertyList(this, "subject_alternative_names", false);
    public get subjectAlternativeNames() {
        return this._subjectAlternativeNames;
    }
    public putSubjectAlternativeNames(value: GeneralNameProperty[] | cdktn.IResolvable) {
        this._subjectAlternativeNames.internalValue = value;
    }
    public resetSubjectAlternativeNames() {
        this._subjectAlternativeNames.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectAlternativeNamesInput() {
        return this._subjectAlternativeNames.internalValue;
    }
}
export interface CustomAttributesProperty {
    /**
    * Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#object_identifier CcCertificate#object_identifier}
    */
    readonly objectIdentifier?: string;
    /**
    * Specifies the attribute value of relative distinguished name (RDN).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#value CcCertificate#value}
    */
    readonly value?: string;
}
export class CustomAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): CustomAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._objectIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectIdentifier = this._objectIdentifier;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._objectIdentifier = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._objectIdentifier = value.objectIdentifier;
            this._value = value.value;
        }
    }

    // object_identifier - computed: true, optional: true, required: false
    private _objectIdentifier?: string; 
    public get objectIdentifier() {
        return this.getStringAttribute('object_identifier');
    }
    public set objectIdentifier(value: string) {
        this._objectIdentifier = value;
    }
    public resetObjectIdentifier() {
        this._objectIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectIdentifierInput() {
        return this._objectIdentifier;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class CustomAttributesPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomAttributesProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): CustomAttributesPropertyOutputReference {
        return new CustomAttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ApiPassthroughSubjectProperty {
    /**
    * For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.
    *  Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#common_name CcCertificate#common_name}
    */
    readonly commonName?: string;
    /**
    * Two-digit code that specifies the country in which the certificate subject located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#country CcCertificate#country}
    */
    readonly country?: string;
    /**
    * Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).
    *   Custom attributes cannot be used in combination with standard attributes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#custom_attributes CcCertificate#custom_attributes}
    */
    readonly customAttributes?: CustomAttributesProperty[] | cdktn.IResolvable;
    /**
    * Disambiguating information for the certificate subject.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#distinguished_name_qualifier CcCertificate#distinguished_name_qualifier}
    */
    readonly distinguishedNameQualifier?: string;
    /**
    * Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#generation_qualifier CcCertificate#generation_qualifier}
    */
    readonly generationQualifier?: string;
    /**
    * First name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#given_name CcCertificate#given_name}
    */
    readonly givenName?: string;
    /**
    * Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#initials CcCertificate#initials}
    */
    readonly initials?: string;
    /**
    * The locality (such as a city or town) in which the certificate subject is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#locality CcCertificate#locality}
    */
    readonly locality?: string;
    /**
    * Legal name of the organization with which the certificate subject is affiliated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#organization CcCertificate#organization}
    */
    readonly organization?: string;
    /**
    * A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#organizational_unit CcCertificate#organizational_unit}
    */
    readonly organizationalUnit?: string;
    /**
    * Typically a shortened version of a longer *GivenName*. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#pseudonym CcCertificate#pseudonym}
    */
    readonly pseudonym?: string;
    /**
    * The certificate serial number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#serial_number CcCertificate#serial_number}
    */
    readonly serialNumber?: string;
    /**
    * State in which the subject of the certificate is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#state CcCertificate#state}
    */
    readonly state?: string;
    /**
    * Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#surname CcCertificate#surname}
    */
    readonly surname?: string;
    /**
    * A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#title CcCertificate#title}
    */
    readonly title?: string;
}
export class ApiPassthroughSubjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApiPassthroughSubjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._commonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.commonName = this._commonName;
        }
        if (this._country !== undefined) {
            hasAnyValues = true;
            internalValueResult.country = this._country;
        }
        if (this._customAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customAttributes = this._customAttributes?.internalValue;
        }
        if (this._distinguishedNameQualifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.distinguishedNameQualifier = this._distinguishedNameQualifier;
        }
        if (this._generationQualifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.generationQualifier = this._generationQualifier;
        }
        if (this._givenName !== undefined) {
            hasAnyValues = true;
            internalValueResult.givenName = this._givenName;
        }
        if (this._initials !== undefined) {
            hasAnyValues = true;
            internalValueResult.initials = this._initials;
        }
        if (this._locality !== undefined) {
            hasAnyValues = true;
            internalValueResult.locality = this._locality;
        }
        if (this._organization !== undefined) {
            hasAnyValues = true;
            internalValueResult.organization = this._organization;
        }
        if (this._organizationalUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.organizationalUnit = this._organizationalUnit;
        }
        if (this._pseudonym !== undefined) {
            hasAnyValues = true;
            internalValueResult.pseudonym = this._pseudonym;
        }
        if (this._serialNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.serialNumber = this._serialNumber;
        }
        if (this._state !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state;
        }
        if (this._surname !== undefined) {
            hasAnyValues = true;
            internalValueResult.surname = this._surname;
        }
        if (this._title !== undefined) {
            hasAnyValues = true;
            internalValueResult.title = this._title;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApiPassthroughSubjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commonName = undefined;
            this._country = undefined;
            this._customAttributes.internalValue = undefined;
            this._distinguishedNameQualifier = undefined;
            this._generationQualifier = undefined;
            this._givenName = undefined;
            this._initials = undefined;
            this._locality = undefined;
            this._organization = undefined;
            this._organizationalUnit = undefined;
            this._pseudonym = undefined;
            this._serialNumber = undefined;
            this._state = undefined;
            this._surname = undefined;
            this._title = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commonName = value.commonName;
            this._country = value.country;
            this._customAttributes.internalValue = value.customAttributes;
            this._distinguishedNameQualifier = value.distinguishedNameQualifier;
            this._generationQualifier = value.generationQualifier;
            this._givenName = value.givenName;
            this._initials = value.initials;
            this._locality = value.locality;
            this._organization = value.organization;
            this._organizationalUnit = value.organizationalUnit;
            this._pseudonym = value.pseudonym;
            this._serialNumber = value.serialNumber;
            this._state = value.state;
            this._surname = value.surname;
            this._title = value.title;
        }
    }

    // common_name - computed: true, optional: true, required: false
    private _commonName?: string; 
    public get commonName() {
        return this.getStringAttribute('common_name');
    }
    public set commonName(value: string) {
        this._commonName = value;
    }
    public resetCommonName() {
        this._commonName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commonNameInput() {
        return this._commonName;
    }

    // country - computed: true, optional: true, required: false
    private _country?: string; 
    public get country() {
        return this.getStringAttribute('country');
    }
    public set country(value: string) {
        this._country = value;
    }
    public resetCountry() {
        this._country = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryInput() {
        return this._country;
    }

    // custom_attributes - computed: true, optional: true, required: false
    private _customAttributes = new CustomAttributesPropertyList(this, "custom_attributes", false);
    public get customAttributes() {
        return this._customAttributes;
    }
    public putCustomAttributes(value: CustomAttributesProperty[] | cdktn.IResolvable) {
        this._customAttributes.internalValue = value;
    }
    public resetCustomAttributes() {
        this._customAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customAttributesInput() {
        return this._customAttributes.internalValue;
    }

    // distinguished_name_qualifier - computed: true, optional: true, required: false
    private _distinguishedNameQualifier?: string; 
    public get distinguishedNameQualifier() {
        return this.getStringAttribute('distinguished_name_qualifier');
    }
    public set distinguishedNameQualifier(value: string) {
        this._distinguishedNameQualifier = value;
    }
    public resetDistinguishedNameQualifier() {
        this._distinguishedNameQualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get distinguishedNameQualifierInput() {
        return this._distinguishedNameQualifier;
    }

    // generation_qualifier - computed: true, optional: true, required: false
    private _generationQualifier?: string; 
    public get generationQualifier() {
        return this.getStringAttribute('generation_qualifier');
    }
    public set generationQualifier(value: string) {
        this._generationQualifier = value;
    }
    public resetGenerationQualifier() {
        this._generationQualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generationQualifierInput() {
        return this._generationQualifier;
    }

    // given_name - computed: true, optional: true, required: false
    private _givenName?: string; 
    public get givenName() {
        return this.getStringAttribute('given_name');
    }
    public set givenName(value: string) {
        this._givenName = value;
    }
    public resetGivenName() {
        this._givenName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get givenNameInput() {
        return this._givenName;
    }

    // initials - computed: true, optional: true, required: false
    private _initials?: string; 
    public get initials() {
        return this.getStringAttribute('initials');
    }
    public set initials(value: string) {
        this._initials = value;
    }
    public resetInitials() {
        this._initials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initialsInput() {
        return this._initials;
    }

    // locality - computed: true, optional: true, required: false
    private _locality?: string; 
    public get locality() {
        return this.getStringAttribute('locality');
    }
    public set locality(value: string) {
        this._locality = value;
    }
    public resetLocality() {
        this._locality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localityInput() {
        return this._locality;
    }

    // organization - computed: true, optional: true, required: false
    private _organization?: string; 
    public get organization() {
        return this.getStringAttribute('organization');
    }
    public set organization(value: string) {
        this._organization = value;
    }
    public resetOrganization() {
        this._organization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationInput() {
        return this._organization;
    }

    // organizational_unit - computed: true, optional: true, required: false
    private _organizationalUnit?: string; 
    public get organizationalUnit() {
        return this.getStringAttribute('organizational_unit');
    }
    public set organizationalUnit(value: string) {
        this._organizationalUnit = value;
    }
    public resetOrganizationalUnit() {
        this._organizationalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitInput() {
        return this._organizationalUnit;
    }

    // pseudonym - computed: true, optional: true, required: false
    private _pseudonym?: string; 
    public get pseudonym() {
        return this.getStringAttribute('pseudonym');
    }
    public set pseudonym(value: string) {
        this._pseudonym = value;
    }
    public resetPseudonym() {
        this._pseudonym = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pseudonymInput() {
        return this._pseudonym;
    }

    // serial_number - computed: true, optional: true, required: false
    private _serialNumber?: string; 
    public get serialNumber() {
        return this.getStringAttribute('serial_number');
    }
    public set serialNumber(value: string) {
        this._serialNumber = value;
    }
    public resetSerialNumber() {
        this._serialNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serialNumberInput() {
        return this._serialNumber;
    }

    // state - computed: true, optional: true, required: false
    private _state?: string; 
    public get state() {
        return this.getStringAttribute('state');
    }
    public set state(value: string) {
        this._state = value;
    }
    public resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state;
    }

    // surname - computed: true, optional: true, required: false
    private _surname?: string; 
    public get surname() {
        return this.getStringAttribute('surname');
    }
    public set surname(value: string) {
        this._surname = value;
    }
    public resetSurname() {
        this._surname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get surnameInput() {
        return this._surname;
    }

    // title - computed: true, optional: true, required: false
    private _title?: string; 
    public get title() {
        return this.getStringAttribute('title');
    }
    public set title(value: string) {
        this._title = value;
    }
    public resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title;
    }
}
export interface ApiPassthroughProperty {
    /**
    * Specifies X.509 extension information for a certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#extensions CcCertificate#extensions}
    */
    readonly extensions?: ExtensionsProperty;
    /**
    * Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#subject CcCertificate#subject}
    */
    readonly subject?: ApiPassthroughSubjectProperty;
}
export class ApiPassthroughPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApiPassthroughProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._extensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extensions = this._extensions?.internalValue;
        }
        if (this._subject?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subject = this._subject?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApiPassthroughProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._extensions.internalValue = undefined;
            this._subject.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._extensions.internalValue = value.extensions;
            this._subject.internalValue = value.subject;
        }
    }

    // extensions - computed: true, optional: true, required: false
    private _extensions = new ExtensionsPropertyOutputReference(this, "extensions");
    public get extensions() {
        return this._extensions;
    }
    public putExtensions(value: ExtensionsProperty) {
        this._extensions.internalValue = value;
    }
    public resetExtensions() {
        this._extensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extensionsInput() {
        return this._extensions.internalValue;
    }

    // subject - computed: true, optional: true, required: false
    private _subject = new ApiPassthroughSubjectPropertyOutputReference(this, "subject");
    public get subject() {
        return this._subject;
    }
    public putSubject(value: ApiPassthroughSubjectProperty) {
        this._subject.internalValue = value;
    }
    public resetSubject() {
        this._subject.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectInput() {
        return this._subject.internalValue;
    }
}
export interface ValidityProperty {
    /**
    * Specifies whether the ``Value`` parameter represents days, months, or years.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#type CcCertificate#type}
    */
    readonly type: string;
    /**
    * A long integer interpreted according to the value of ``Type``, below.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#value CcCertificate#value}
    */
    readonly value: number;
}
export class ValidityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValidityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}
export interface ValidityNotBeforeProperty {
    /**
    * Specifies whether the ``Value`` parameter represents days, months, or years.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#type CcCertificate#type}
    */
    readonly type?: string;
    /**
    * A long integer interpreted according to the value of ``Type``, below.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/acmpca_certificate#value CcCertificate#value}
    */
    readonly value?: number;
}
export class ValidityNotBeforePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValidityNotBeforeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidityNotBeforeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}
}
