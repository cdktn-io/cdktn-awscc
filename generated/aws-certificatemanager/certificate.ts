// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCertificateProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#certificate_authority_arn CcCertificate#certificate_authority_arn}
    */
    readonly certificateAuthorityArn?: string;
    /**
    * Specifies whether the certificate can be exported. ENABLED allows the certificate to be exported, DISABLED prevents export.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#certificate_export CcCertificate#certificate_export}
    */
    readonly certificateExport?: string;
    /**
    * You can opt out of certificate transparency logging by specifying the DISABLED option. Opt in by specifying ENABLED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#certificate_transparency_logging_preference CcCertificate#certificate_transparency_logging_preference}
    */
    readonly certificateTransparencyLoggingPreference?: string;
    /**
    * The fully qualified domain name (FQDN), such as www.example.com, with which you want to secure an ACM certificate
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#domain_name CcCertificate#domain_name}
    */
    readonly domainName: string;
    /**
    * Domain information that domain name registrars use to verify your identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#domain_validation_options CcCertificate#domain_validation_options}
    */
    readonly domainValidationOptions?: CcCertificate.DomainValidationOptionProperty[] | cdktn.IResolvable;
    /**
    * Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#key_algorithm CcCertificate#key_algorithm}
    */
    readonly keyAlgorithm?: string;
    /**
    * Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#subject_alternative_names CcCertificate#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: string[];
    /**
    * Key-value pairs that can identify the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#tags CcCertificate#tags}
    */
    readonly tags?: CcCertificate.TagProperty[] | cdktn.IResolvable;
    /**
    * The method you want to use to validate that you own or control the domain associated with a public certificate. Valid values are DNS, EMAIL or HTTP
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#validation_method CcCertificate#validation_method}
    */
    readonly validationMethod?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate awscc_certificatemanager_certificate}
*/
export class CcCertificate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_certificatemanager_certificate";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCertificate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCertificate to import
    * @param importFromId The id of the existing CcCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCertificate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_certificatemanager_certificate", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate awscc_certificatemanager_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCertificateProps
    */
    public constructor(scope: Construct, id: string, config: CcCertificateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_certificatemanager_certificate',
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
        this._certificateAuthorityArn = config.certificateAuthorityArn;
        this._certificateExport = config.certificateExport;
        this._certificateTransparencyLoggingPreference = config.certificateTransparencyLoggingPreference;
        this._domainName = config.domainName;
        this._domainValidationOptions.internalValue = config.domainValidationOptions;
        this._keyAlgorithm = config.keyAlgorithm;
        this._subjectAlternativeNames = config.subjectAlternativeNames;
        this._tags.internalValue = config.tags;
        this._validationMethod = config.validationMethod;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_arn - computed: true, optional: false, required: false
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }

    // certificate_authority_arn - computed: true, optional: true, required: false
    private _certificateAuthorityArn?: string; 
    public get certificateAuthorityArn() {
        return this.getStringAttribute('certificate_authority_arn');
    }
    public set certificateAuthorityArn(value: string) {
        this._certificateAuthorityArn = value;
    }
    public resetCertificateAuthorityArn() {
        this._certificateAuthorityArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnInput() {
        return this._certificateAuthorityArn;
    }

    // certificate_export - computed: true, optional: true, required: false
    private _certificateExport?: string; 
    public get certificateExport() {
        return this.getStringAttribute('certificate_export');
    }
    public set certificateExport(value: string) {
        this._certificateExport = value;
    }
    public resetCertificateExport() {
        this._certificateExport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateExportInput() {
        return this._certificateExport;
    }

    // certificate_transparency_logging_preference - computed: true, optional: true, required: false
    private _certificateTransparencyLoggingPreference?: string; 
    public get certificateTransparencyLoggingPreference() {
        return this.getStringAttribute('certificate_transparency_logging_preference');
    }
    public set certificateTransparencyLoggingPreference(value: string) {
        this._certificateTransparencyLoggingPreference = value;
    }
    public resetCertificateTransparencyLoggingPreference() {
        this._certificateTransparencyLoggingPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateTransparencyLoggingPreferenceInput() {
        return this._certificateTransparencyLoggingPreference;
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // domain_validation_options - computed: true, optional: true, required: false
    private _domainValidationOptions = new CcCertificate.DomainValidationOptionPropertyList(this, "domain_validation_options", false);
    public get domainValidationOptions() {
        return this._domainValidationOptions;
    }
    public putDomainValidationOptions(value: CcCertificate.DomainValidationOptionProperty[] | cdktn.IResolvable) {
        this._domainValidationOptions.internalValue = value;
    }
    public resetDomainValidationOptions() {
        this._domainValidationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainValidationOptionsInput() {
        return this._domainValidationOptions.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // key_algorithm - computed: true, optional: true, required: false
    private _keyAlgorithm?: string; 
    public get keyAlgorithm() {
        return this.getStringAttribute('key_algorithm');
    }
    public set keyAlgorithm(value: string) {
        this._keyAlgorithm = value;
    }
    public resetKeyAlgorithm() {
        this._keyAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyAlgorithmInput() {
        return this._keyAlgorithm;
    }

    // subject_alternative_names - computed: true, optional: true, required: false
    private _subjectAlternativeNames?: string[]; 
    public get subjectAlternativeNames() {
        return this.getListAttribute('subject_alternative_names');
    }
    public set subjectAlternativeNames(value: string[]) {
        this._subjectAlternativeNames = value;
    }
    public resetSubjectAlternativeNames() {
        this._subjectAlternativeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectAlternativeNamesInput() {
        return this._subjectAlternativeNames;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCertificate.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCertificate.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // validation_method - computed: true, optional: true, required: false
    private _validationMethod?: string; 
    public get validationMethod() {
        return this.getStringAttribute('validation_method');
    }
    public set validationMethod(value: string) {
        this._validationMethod = value;
    }
    public resetValidationMethod() {
        this._validationMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationMethodInput() {
        return this._validationMethod;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            certificate_authority_arn: cdktn.stringToTerraform(this._certificateAuthorityArn),
            certificate_export: cdktn.stringToTerraform(this._certificateExport),
            certificate_transparency_logging_preference: cdktn.stringToTerraform(this._certificateTransparencyLoggingPreference),
            domain_name: cdktn.stringToTerraform(this._domainName),
            domain_validation_options: cdktn.listMapper(ccCertificateDomainValidationOptionPropertyToTerraform, false)(this._domainValidationOptions.internalValue),
            key_algorithm: cdktn.stringToTerraform(this._keyAlgorithm),
            subject_alternative_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subjectAlternativeNames),
            tags: cdktn.listMapper(ccCertificateTagPropertyToTerraform, false)(this._tags.internalValue),
            validation_method: cdktn.stringToTerraform(this._validationMethod),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate_authority_arn: {
                value: cdktn.stringToHclTerraform(this._certificateAuthorityArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_export: {
                value: cdktn.stringToHclTerraform(this._certificateExport),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_transparency_logging_preference: {
                value: cdktn.stringToHclTerraform(this._certificateTransparencyLoggingPreference),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_validation_options: {
                value: cdktn.listMapperHcl(ccCertificateDomainValidationOptionPropertyToHclTerraform, false)(this._domainValidationOptions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCertificate.DomainValidationOptionPropertyList",
            },
            key_algorithm: {
                value: cdktn.stringToHclTerraform(this._keyAlgorithm),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subject_alternative_names: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subjectAlternativeNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCertificateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCertificate.TagPropertyList",
            },
            validation_method: {
                value: cdktn.stringToHclTerraform(this._validationMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCertificateDomainValidationOptionPropertyToTerraform(struct?: CcCertificate.DomainValidationOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_name: cdktn.stringToTerraform(struct!.domainName),
        hosted_zone_id: cdktn.stringToTerraform(struct!.hostedZoneId),
        validation_domain: cdktn.stringToTerraform(struct!.validationDomain),
    }
}


export function ccCertificateDomainValidationOptionPropertyToHclTerraform(struct?: CcCertificate.DomainValidationOptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_name: {
            value: cdktn.stringToHclTerraform(struct!.domainName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hosted_zone_id: {
            value: cdktn.stringToHclTerraform(struct!.hostedZoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation_domain: {
            value: cdktn.stringToHclTerraform(struct!.validationDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCertificateTagPropertyToTerraform(struct?: CcCertificate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCertificateTagPropertyToHclTerraform(struct?: CcCertificate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
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


export namespace CcCertificate {
export interface DomainValidationOptionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#domain_name CcCertificate#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#hosted_zone_id CcCertificate#hosted_zone_id}
    */
    readonly hostedZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#validation_domain CcCertificate#validation_domain}
    */
    readonly validationDomain?: string;
}
export class DomainValidationOptionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DomainValidationOptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainName !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainName = this._domainName;
        }
        if (this._hostedZoneId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostedZoneId = this._hostedZoneId;
        }
        if (this._validationDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationDomain = this._validationDomain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DomainValidationOptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainName = undefined;
            this._hostedZoneId = undefined;
            this._validationDomain = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainName = value.domainName;
            this._hostedZoneId = value.hostedZoneId;
            this._validationDomain = value.validationDomain;
        }
    }

    // domain_name - computed: true, optional: true, required: false
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    public resetDomainName() {
        this._domainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // hosted_zone_id - computed: true, optional: true, required: false
    private _hostedZoneId?: string; 
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    public set hostedZoneId(value: string) {
        this._hostedZoneId = value;
    }
    public resetHostedZoneId() {
        this._hostedZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedZoneIdInput() {
        return this._hostedZoneId;
    }

    // validation_domain - computed: true, optional: true, required: false
    private _validationDomain?: string; 
    public get validationDomain() {
        return this.getStringAttribute('validation_domain');
    }
    public set validationDomain(value: string) {
        this._validationDomain = value;
    }
    public resetValidationDomain() {
        this._validationDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationDomainInput() {
        return this._validationDomain;
    }
}

export class DomainValidationOptionPropertyList extends cdktn.ComplexList {
    public internalValue? : DomainValidationOptionProperty[] | cdktn.IResolvable

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
    public get(index: number): DomainValidationOptionPropertyOutputReference {
        return new DomainValidationOptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#key CcCertificate#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_certificate#value CcCertificate#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
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

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

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
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
