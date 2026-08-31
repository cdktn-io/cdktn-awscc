// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCACertificateProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#auto_registration_status CcCACertificate#auto_registration_status}
    */
    readonly autoRegistrationStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#ca_certificate_pem CcCACertificate#ca_certificate_pem}
    */
    readonly caCertificatePem: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#certificate_mode CcCACertificate#certificate_mode}
    */
    readonly certificateMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#registration_config CcCACertificate#registration_config}
    */
    readonly registrationConfig?: CcCACertificate.RegistrationConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#remove_auto_registration CcCACertificate#remove_auto_registration}
    */
    readonly removeAutoRegistration?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#status CcCACertificate#status}
    */
    readonly status: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#tags CcCACertificate#tags}
    */
    readonly tags?: CcCACertificate.TagProperty[] | cdktn.IResolvable;
    /**
    * The private key verification certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#verification_certificate_pem CcCACertificate#verification_certificate_pem}
    */
    readonly verificationCertificatePem?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate awscc_iot_ca_certificate}
*/
export class CcCACertificate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_ca_certificate";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCACertificate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCACertificate to import
    * @param importFromId The id of the existing CcCACertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCACertificate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_ca_certificate", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate awscc_iot_ca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCACertificateProps
    */
    public constructor(scope: Construct, id: string, config: CcCACertificateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_ca_certificate',
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
        this._autoRegistrationStatus = config.autoRegistrationStatus;
        this._caCertificatePem = config.caCertificatePem;
        this._certificateMode = config.certificateMode;
        this._registrationConfig.internalValue = config.registrationConfig;
        this._removeAutoRegistration = config.removeAutoRegistration;
        this._status = config.status;
        this._tags.internalValue = config.tags;
        this._verificationCertificatePem = config.verificationCertificatePem;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auto_registration_status - computed: true, optional: true, required: false
    private _autoRegistrationStatus?: string; 
    public get autoRegistrationStatus() {
        return this.getStringAttribute('auto_registration_status');
    }
    public set autoRegistrationStatus(value: string) {
        this._autoRegistrationStatus = value;
    }
    public resetAutoRegistrationStatus() {
        this._autoRegistrationStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoRegistrationStatusInput() {
        return this._autoRegistrationStatus;
    }

    // ca_certificate_id - computed: true, optional: false, required: false
    public get caCertificateId() {
        return this.getStringAttribute('ca_certificate_id');
    }

    // ca_certificate_pem - computed: false, optional: false, required: true
    private _caCertificatePem?: string; 
    public get caCertificatePem() {
        return this.getStringAttribute('ca_certificate_pem');
    }
    public set caCertificatePem(value: string) {
        this._caCertificatePem = value;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertificatePemInput() {
        return this._caCertificatePem;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // registration_config - computed: true, optional: true, required: false
    private _registrationConfig = new CcCACertificate.RegistrationConfigPropertyOutputReference(this, "registration_config");
    public get registrationConfig() {
        return this._registrationConfig;
    }
    public putRegistrationConfig(value: CcCACertificate.RegistrationConfigProperty) {
        this._registrationConfig.internalValue = value;
    }
    public resetRegistrationConfig() {
        this._registrationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get registrationConfigInput() {
        return this._registrationConfig.internalValue;
    }

    // remove_auto_registration - computed: true, optional: true, required: false
    private _removeAutoRegistration?: boolean | cdktn.IResolvable; 
    public get removeAutoRegistration() {
        return this.getBooleanAttribute('remove_auto_registration');
    }
    public set removeAutoRegistration(value: boolean | cdktn.IResolvable) {
        this._removeAutoRegistration = value;
    }
    public resetRemoveAutoRegistration() {
        this._removeAutoRegistration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeAutoRegistrationInput() {
        return this._removeAutoRegistration;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCACertificate.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCACertificate.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // verification_certificate_pem - computed: true, optional: true, required: false
    private _verificationCertificatePem?: string; 
    public get verificationCertificatePem() {
        return this.getStringAttribute('verification_certificate_pem');
    }
    public set verificationCertificatePem(value: string) {
        this._verificationCertificatePem = value;
    }
    public resetVerificationCertificatePem() {
        this._verificationCertificatePem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verificationCertificatePemInput() {
        return this._verificationCertificatePem;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_registration_status: cdktn.stringToTerraform(this._autoRegistrationStatus),
            ca_certificate_pem: cdktn.stringToTerraform(this._caCertificatePem),
            certificate_mode: cdktn.stringToTerraform(this._certificateMode),
            registration_config: ccCACertificateRegistrationConfigPropertyToTerraform(this._registrationConfig.internalValue),
            remove_auto_registration: cdktn.booleanToTerraform(this._removeAutoRegistration),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccCACertificateTagPropertyToTerraform, false)(this._tags.internalValue),
            verification_certificate_pem: cdktn.stringToTerraform(this._verificationCertificatePem),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_registration_status: {
                value: cdktn.stringToHclTerraform(this._autoRegistrationStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
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
            registration_config: {
                value: ccCACertificateRegistrationConfigPropertyToHclTerraform(this._registrationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCACertificate.RegistrationConfigProperty",
            },
            remove_auto_registration: {
                value: cdktn.booleanToHclTerraform(this._removeAutoRegistration),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCACertificateTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCACertificate.TagPropertyList",
            },
            verification_certificate_pem: {
                value: cdktn.stringToHclTerraform(this._verificationCertificatePem),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCACertificateRegistrationConfigPropertyToTerraform(struct?: CcCACertificate.RegistrationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        template_body: cdktn.stringToTerraform(struct!.templateBody),
        template_name: cdktn.stringToTerraform(struct!.templateName),
    }
}


export function ccCACertificateRegistrationConfigPropertyToHclTerraform(struct?: CcCACertificate.RegistrationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template_body: {
            value: cdktn.stringToHclTerraform(struct!.templateBody),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        template_name: {
            value: cdktn.stringToHclTerraform(struct!.templateName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCACertificateTagPropertyToTerraform(struct?: CcCACertificate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCACertificateTagPropertyToHclTerraform(struct?: CcCACertificate.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCACertificate {
export interface RegistrationConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#role_arn CcCACertificate#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#template_body CcCACertificate#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#template_name CcCACertificate#template_name}
    */
    readonly templateName?: string;
}
export class RegistrationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RegistrationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._templateBody !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateBody = this._templateBody;
        }
        if (this._templateName !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateName = this._templateName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegistrationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._roleArn = undefined;
            this._templateBody = undefined;
            this._templateName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._roleArn = value.roleArn;
            this._templateBody = value.templateBody;
            this._templateName = value.templateName;
        }
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // template_body - computed: true, optional: true, required: false
    private _templateBody?: string; 
    public get templateBody() {
        return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string) {
        this._templateBody = value;
    }
    public resetTemplateBody() {
        this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
        return this._templateBody;
    }

    // template_name - computed: true, optional: true, required: false
    private _templateName?: string; 
    public get templateName() {
        return this.getStringAttribute('template_name');
    }
    public set templateName(value: string) {
        this._templateName = value;
    }
    public resetTemplateName() {
        this._templateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateNameInput() {
        return this._templateName;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#key CcCACertificate#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_ca_certificate#value CcCACertificate#value}
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
