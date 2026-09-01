// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDomainProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#app_id CcDomain#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#auto_sub_domain_creation_patterns CcDomain#auto_sub_domain_creation_patterns}
    */
    readonly autoSubDomainCreationPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#auto_sub_domain_iam_role CcDomain#auto_sub_domain_iam_role}
    */
    readonly autoSubDomainIamRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#certificate_settings CcDomain#certificate_settings}
    */
    readonly certificateSettings?: CcDomain.CertificateSettingsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#domain_name CcDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#enable_auto_sub_domain CcDomain#enable_auto_sub_domain}
    */
    readonly enableAutoSubDomain?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#sub_domain_settings CcDomain#sub_domain_settings}
    */
    readonly subDomainSettings: CcDomain.SubDomainSettingProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain awscc_amplify_domain}
*/
export class CcDomain extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_amplify_domain";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDomain resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDomain to import
    * @param importFromId The id of the existing CcDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDomain to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_amplify_domain", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain awscc_amplify_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDomainProps
    */
    public constructor(scope: Construct, id: string, config: CcDomainProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_amplify_domain',
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
        this._appId = config.appId;
        this._autoSubDomainCreationPatterns = config.autoSubDomainCreationPatterns;
        this._autoSubDomainIamRole = config.autoSubDomainIamRole;
        this._certificateSettings.internalValue = config.certificateSettings;
        this._domainName = config.domainName;
        this._enableAutoSubDomain = config.enableAutoSubDomain;
        this._subDomainSettings.internalValue = config.subDomainSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_id - computed: false, optional: false, required: true
    private _appId?: string; 
    public get appId() {
        return this.getStringAttribute('app_id');
    }
    public set appId(value: string) {
        this._appId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appIdInput() {
        return this._appId;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // auto_sub_domain_creation_patterns - computed: true, optional: true, required: false
    private _autoSubDomainCreationPatterns?: string[]; 
    public get autoSubDomainCreationPatterns() {
        return this.getListAttribute('auto_sub_domain_creation_patterns');
    }
    public set autoSubDomainCreationPatterns(value: string[]) {
        this._autoSubDomainCreationPatterns = value;
    }
    public resetAutoSubDomainCreationPatterns() {
        this._autoSubDomainCreationPatterns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoSubDomainCreationPatternsInput() {
        return this._autoSubDomainCreationPatterns;
    }

    // auto_sub_domain_iam_role - computed: true, optional: true, required: false
    private _autoSubDomainIamRole?: string; 
    public get autoSubDomainIamRole() {
        return this.getStringAttribute('auto_sub_domain_iam_role');
    }
    public set autoSubDomainIamRole(value: string) {
        this._autoSubDomainIamRole = value;
    }
    public resetAutoSubDomainIamRole() {
        this._autoSubDomainIamRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoSubDomainIamRoleInput() {
        return this._autoSubDomainIamRole;
    }

    // certificate - computed: true, optional: false, required: false
    private _certificate = new CcDomain.CertificatePropertyOutputReference(this, "certificate");
    public get certificate() {
        return this._certificate;
    }

    // certificate_record - computed: true, optional: false, required: false
    public get certificateRecord() {
        return this.getStringAttribute('certificate_record');
    }

    // certificate_settings - computed: true, optional: true, required: false
    private _certificateSettings = new CcDomain.CertificateSettingsPropertyOutputReference(this, "certificate_settings");
    public get certificateSettings() {
        return this._certificateSettings;
    }
    public putCertificateSettings(value: CcDomain.CertificateSettingsProperty) {
        this._certificateSettings.internalValue = value;
    }
    public resetCertificateSettings() {
        this._certificateSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateSettingsInput() {
        return this._certificateSettings.internalValue;
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

    // domain_status - computed: true, optional: false, required: false
    public get domainStatus() {
        return this.getStringAttribute('domain_status');
    }

    // enable_auto_sub_domain - computed: true, optional: true, required: false
    private _enableAutoSubDomain?: boolean | cdktn.IResolvable; 
    public get enableAutoSubDomain() {
        return this.getBooleanAttribute('enable_auto_sub_domain');
    }
    public set enableAutoSubDomain(value: boolean | cdktn.IResolvable) {
        this._enableAutoSubDomain = value;
    }
    public resetEnableAutoSubDomain() {
        this._enableAutoSubDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAutoSubDomainInput() {
        return this._enableAutoSubDomain;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // status_reason - computed: true, optional: false, required: false
    public get statusReason() {
        return this.getStringAttribute('status_reason');
    }

    // sub_domain_settings - computed: false, optional: false, required: true
    private _subDomainSettings = new CcDomain.SubDomainSettingPropertyList(this, "sub_domain_settings", false);
    public get subDomainSettings() {
        return this._subDomainSettings;
    }
    public putSubDomainSettings(value: CcDomain.SubDomainSettingProperty[] | cdktn.IResolvable) {
        this._subDomainSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subDomainSettingsInput() {
        return this._subDomainSettings.internalValue;
    }

    // update_status - computed: true, optional: false, required: false
    public get updateStatus() {
        return this.getStringAttribute('update_status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            app_id: cdktn.stringToTerraform(this._appId),
            auto_sub_domain_creation_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._autoSubDomainCreationPatterns),
            auto_sub_domain_iam_role: cdktn.stringToTerraform(this._autoSubDomainIamRole),
            certificate_settings: ccDomainCertificateSettingsPropertyToTerraform(this._certificateSettings.internalValue),
            domain_name: cdktn.stringToTerraform(this._domainName),
            enable_auto_sub_domain: cdktn.booleanToTerraform(this._enableAutoSubDomain),
            sub_domain_settings: cdktn.listMapper(ccDomainSubDomainSettingPropertyToTerraform, false)(this._subDomainSettings.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app_id: {
                value: cdktn.stringToHclTerraform(this._appId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_sub_domain_creation_patterns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._autoSubDomainCreationPatterns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            auto_sub_domain_iam_role: {
                value: cdktn.stringToHclTerraform(this._autoSubDomainIamRole),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_settings: {
                value: ccDomainCertificateSettingsPropertyToHclTerraform(this._certificateSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDomain.CertificateSettingsProperty",
            },
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_auto_sub_domain: {
                value: cdktn.booleanToHclTerraform(this._enableAutoSubDomain),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            sub_domain_settings: {
                value: cdktn.listMapperHcl(ccDomainSubDomainSettingPropertyToHclTerraform, false)(this._subDomainSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDomain.SubDomainSettingPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDomainCertificatePropertyToTerraform(struct?: CcDomain.CertificateProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDomainCertificatePropertyToHclTerraform(struct?: CcDomain.CertificateProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDomainCertificateSettingsPropertyToTerraform(struct?: CcDomain.CertificateSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_type: cdktn.stringToTerraform(struct!.certificateType),
        custom_certificate_arn: cdktn.stringToTerraform(struct!.customCertificateArn),
    }
}


export function ccDomainCertificateSettingsPropertyToHclTerraform(struct?: CcDomain.CertificateSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_type: {
            value: cdktn.stringToHclTerraform(struct!.certificateType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.customCertificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDomainSubDomainSettingPropertyToTerraform(struct?: CcDomain.SubDomainSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        branch_name: cdktn.stringToTerraform(struct!.branchName),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccDomainSubDomainSettingPropertyToHclTerraform(struct?: CcDomain.SubDomainSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        branch_name: {
            value: cdktn.stringToHclTerraform(struct!.branchName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDomain {
export interface CertificateProperty {
}
export class CertificatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CertificateProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertificateProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // certificate_arn - computed: true, optional: false, required: false
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }

    // certificate_type - computed: true, optional: false, required: false
    public get certificateType() {
        return this.getStringAttribute('certificate_type');
    }

    // certificate_verification_dns_record - computed: true, optional: false, required: false
    public get certificateVerificationDnsRecord() {
        return this.getStringAttribute('certificate_verification_dns_record');
    }
}
export interface CertificateSettingsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#certificate_type CcDomain#certificate_type}
    */
    readonly certificateType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#custom_certificate_arn CcDomain#custom_certificate_arn}
    */
    readonly customCertificateArn?: string;
}
export class CertificateSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CertificateSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateType !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateType = this._certificateType;
        }
        if (this._customCertificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.customCertificateArn = this._customCertificateArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertificateSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateType = undefined;
            this._customCertificateArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateType = value.certificateType;
            this._customCertificateArn = value.customCertificateArn;
        }
    }

    // certificate_type - computed: true, optional: true, required: false
    private _certificateType?: string; 
    public get certificateType() {
        return this.getStringAttribute('certificate_type');
    }
    public set certificateType(value: string) {
        this._certificateType = value;
    }
    public resetCertificateType() {
        this._certificateType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateTypeInput() {
        return this._certificateType;
    }

    // custom_certificate_arn - computed: true, optional: true, required: false
    private _customCertificateArn?: string; 
    public get customCertificateArn() {
        return this.getStringAttribute('custom_certificate_arn');
    }
    public set customCertificateArn(value: string) {
        this._customCertificateArn = value;
    }
    public resetCustomCertificateArn() {
        this._customCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customCertificateArnInput() {
        return this._customCertificateArn;
    }
}
export interface SubDomainSettingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#branch_name CcDomain#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_domain#prefix CcDomain#prefix}
    */
    readonly prefix: string;
}
export class SubDomainSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SubDomainSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._branchName !== undefined) {
            hasAnyValues = true;
            internalValueResult.branchName = this._branchName;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubDomainSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._branchName = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._branchName = value.branchName;
            this._prefix = value.prefix;
        }
    }

    // branch_name - computed: false, optional: false, required: true
    private _branchName?: string; 
    public get branchName() {
        return this.getStringAttribute('branch_name');
    }
    public set branchName(value: string) {
        this._branchName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get branchNameInput() {
        return this._branchName;
    }

    // prefix - computed: false, optional: false, required: true
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}

export class SubDomainSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : SubDomainSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): SubDomainSettingPropertyOutputReference {
        return new SubDomainSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
