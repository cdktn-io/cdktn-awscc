// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDirectoryConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config#certificate_based_auth_properties CcDirectoryConfig#certificate_based_auth_properties}
    */
    readonly certificateBasedAuthProperties?: CcDirectoryConfig.CertificateBasedAuthPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config#directory_name CcDirectoryConfig#directory_name}
    */
    readonly directoryName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config#organizational_unit_distinguished_names CcDirectoryConfig#organizational_unit_distinguished_names}
    */
    readonly organizationalUnitDistinguishedNames: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config#service_account_credentials CcDirectoryConfig#service_account_credentials}
    */
    readonly serviceAccountCredentials: CcDirectoryConfig.ServiceAccountCredentialsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config awscc_appstream_directory_config}
*/
export class CcDirectoryConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appstream_directory_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDirectoryConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDirectoryConfig to import
    * @param importFromId The id of the existing CcDirectoryConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDirectoryConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_directory_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config awscc_appstream_directory_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDirectoryConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcDirectoryConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appstream_directory_config',
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
        this._certificateBasedAuthProperties.internalValue = config.certificateBasedAuthProperties;
        this._directoryName = config.directoryName;
        this._organizationalUnitDistinguishedNames = config.organizationalUnitDistinguishedNames;
        this._serviceAccountCredentials.internalValue = config.serviceAccountCredentials;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_based_auth_properties - computed: true, optional: true, required: false
    private _certificateBasedAuthProperties = new CcDirectoryConfig.CertificateBasedAuthPropertiesPropertyOutputReference(this, "certificate_based_auth_properties");
    public get certificateBasedAuthProperties() {
        return this._certificateBasedAuthProperties;
    }
    public putCertificateBasedAuthProperties(value: CcDirectoryConfig.CertificateBasedAuthPropertiesProperty) {
        this._certificateBasedAuthProperties.internalValue = value;
    }
    public resetCertificateBasedAuthProperties() {
        this._certificateBasedAuthProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateBasedAuthPropertiesInput() {
        return this._certificateBasedAuthProperties.internalValue;
    }

    // directory_name - computed: false, optional: false, required: true
    private _directoryName?: string; 
    public get directoryName() {
        return this.getStringAttribute('directory_name');
    }
    public set directoryName(value: string) {
        this._directoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryNameInput() {
        return this._directoryName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // organizational_unit_distinguished_names - computed: false, optional: false, required: true
    private _organizationalUnitDistinguishedNames?: string[]; 
    public get organizationalUnitDistinguishedNames() {
        return this.getListAttribute('organizational_unit_distinguished_names');
    }
    public set organizationalUnitDistinguishedNames(value: string[]) {
        this._organizationalUnitDistinguishedNames = value;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitDistinguishedNamesInput() {
        return this._organizationalUnitDistinguishedNames;
    }

    // service_account_credentials - computed: false, optional: false, required: true
    private _serviceAccountCredentials = new CcDirectoryConfig.ServiceAccountCredentialsPropertyOutputReference(this, "service_account_credentials");
    public get serviceAccountCredentials() {
        return this._serviceAccountCredentials;
    }
    public putServiceAccountCredentials(value: CcDirectoryConfig.ServiceAccountCredentialsProperty) {
        this._serviceAccountCredentials.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccountCredentialsInput() {
        return this._serviceAccountCredentials.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            certificate_based_auth_properties: ccDirectoryConfigCertificateBasedAuthPropertiesPropertyToTerraform(this._certificateBasedAuthProperties.internalValue),
            directory_name: cdktn.stringToTerraform(this._directoryName),
            organizational_unit_distinguished_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._organizationalUnitDistinguishedNames),
            service_account_credentials: ccDirectoryConfigServiceAccountCredentialsPropertyToTerraform(this._serviceAccountCredentials.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate_based_auth_properties: {
                value: ccDirectoryConfigCertificateBasedAuthPropertiesPropertyToHclTerraform(this._certificateBasedAuthProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectoryConfig.CertificateBasedAuthPropertiesProperty",
            },
            directory_name: {
                value: cdktn.stringToHclTerraform(this._directoryName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            organizational_unit_distinguished_names: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._organizationalUnitDistinguishedNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            service_account_credentials: {
                value: ccDirectoryConfigServiceAccountCredentialsPropertyToHclTerraform(this._serviceAccountCredentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectoryConfig.ServiceAccountCredentialsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDirectoryConfigCertificateBasedAuthPropertiesPropertyToTerraform(struct?: CcDirectoryConfig.CertificateBasedAuthPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_authority_arn: cdktn.stringToTerraform(struct!.certificateAuthorityArn),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccDirectoryConfigCertificateBasedAuthPropertiesPropertyToHclTerraform(struct?: CcDirectoryConfig.CertificateBasedAuthPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_authority_arn: {
            value: cdktn.stringToHclTerraform(struct!.certificateAuthorityArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryConfigServiceAccountCredentialsPropertyToTerraform(struct?: CcDirectoryConfig.ServiceAccountCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_name: cdktn.stringToTerraform(struct!.accountName),
        account_password: cdktn.stringToTerraform(struct!.accountPassword),
    }
}


export function ccDirectoryConfigServiceAccountCredentialsPropertyToHclTerraform(struct?: CcDirectoryConfig.ServiceAccountCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_name: {
            value: cdktn.stringToHclTerraform(struct!.accountName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        account_password: {
            value: cdktn.stringToHclTerraform(struct!.accountPassword),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDirectoryConfig {
export interface CertificateBasedAuthPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config#certificate_authority_arn CcDirectoryConfig#certificate_authority_arn}
    */
    readonly certificateAuthorityArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config#status CcDirectoryConfig#status}
    */
    readonly status?: string;
}
export class CertificateBasedAuthPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CertificateBasedAuthPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateAuthorityArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateAuthorityArn = this._certificateAuthorityArn;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertificateBasedAuthPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateAuthorityArn = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateAuthorityArn = value.certificateAuthorityArn;
            this._status = value.status;
        }
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
}
export interface ServiceAccountCredentialsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config#account_name CcDirectoryConfig#account_name}
    */
    readonly accountName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_directory_config#account_password CcDirectoryConfig#account_password}
    */
    readonly accountPassword: string;
}
export class ServiceAccountCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceAccountCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountName !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountName = this._accountName;
        }
        if (this._accountPassword !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountPassword = this._accountPassword;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceAccountCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountName = undefined;
            this._accountPassword = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountName = value.accountName;
            this._accountPassword = value.accountPassword;
        }
    }

    // account_name - computed: false, optional: false, required: true
    private _accountName?: string; 
    public get accountName() {
        return this.getStringAttribute('account_name');
    }
    public set accountName(value: string) {
        this._accountName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountNameInput() {
        return this._accountName;
    }

    // account_password - computed: false, optional: false, required: true
    private _accountPassword?: string; 
    public get accountPassword() {
        return this.getStringAttribute('account_password');
    }
    public set accountPassword(value: string) {
        this._accountPassword = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountPasswordInput() {
        return this._accountPassword;
    }
}
}
