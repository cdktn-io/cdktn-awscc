// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#connector_arn CcTemplate#connector_arn}
    */
    readonly connectorArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#definition CcTemplate#definition}
    */
    readonly definition: CcTemplate.TemplateDefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#name CcTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#reenroll_all_certificate_holders CcTemplate#reenroll_all_certificate_holders}
    */
    readonly reenrollAllCertificateHolders?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#tags CcTemplate#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template awscc_pcaconnectorad_template}
*/
export class CcTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_pcaconnectorad_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTemplate to import
    * @param importFromId The id of the existing CcTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcaconnectorad_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template awscc_pcaconnectorad_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_pcaconnectorad_template',
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
        this._connectorArn = config.connectorArn;
        this._definition.internalValue = config.definition;
        this._name = config.name;
        this._reenrollAllCertificateHolders = config.reenrollAllCertificateHolders;
        this._tags = config.tags;
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

    // definition - computed: false, optional: false, required: true
    private _definition = new CcTemplate.TemplateDefinitionPropertyOutputReference(this, "definition");
    public get definition() {
        return this._definition;
    }
    public putDefinition(value: CcTemplate.TemplateDefinitionProperty) {
        this._definition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // reenroll_all_certificate_holders - computed: true, optional: true, required: false
    private _reenrollAllCertificateHolders?: boolean | cdktn.IResolvable; 
    public get reenrollAllCertificateHolders() {
        return this.getBooleanAttribute('reenroll_all_certificate_holders');
    }
    public set reenrollAllCertificateHolders(value: boolean | cdktn.IResolvable) {
        this._reenrollAllCertificateHolders = value;
    }
    public resetReenrollAllCertificateHolders() {
        this._reenrollAllCertificateHolders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reenrollAllCertificateHoldersInput() {
        return this._reenrollAllCertificateHolders;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // template_arn - computed: true, optional: false, required: false
    public get templateArn() {
        return this.getStringAttribute('template_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            connector_arn: cdktn.stringToTerraform(this._connectorArn),
            definition: ccTemplateTemplateDefinitionPropertyToTerraform(this._definition.internalValue),
            name: cdktn.stringToTerraform(this._name),
            reenroll_all_certificate_holders: cdktn.booleanToTerraform(this._reenrollAllCertificateHolders),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
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
            definition: {
                value: ccTemplateTemplateDefinitionPropertyToHclTerraform(this._definition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTemplate.TemplateDefinitionProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            reenroll_all_certificate_holders: {
                value: cdktn.booleanToHclTerraform(this._reenrollAllCertificateHolders),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTemplateValidityPeriodPropertyToTerraform(struct?: CcTemplate.ValidityPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        period: cdktn.numberToTerraform(struct!.period),
        period_type: cdktn.stringToTerraform(struct!.periodType),
    }
}


export function ccTemplateValidityPeriodPropertyToHclTerraform(struct?: CcTemplate.ValidityPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        period: {
            value: cdktn.numberToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        period_type: {
            value: cdktn.stringToHclTerraform(struct!.periodType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV2CertificateValidityValidityPeriodPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV2CertificateValidityValidityPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        period: cdktn.numberToTerraform(struct!.period),
        period_type: cdktn.stringToTerraform(struct!.periodType),
    }
}


export function ccTemplateDefinitionTemplateV2CertificateValidityValidityPeriodPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV2CertificateValidityValidityPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        period: {
            value: cdktn.numberToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        period_type: {
            value: cdktn.stringToHclTerraform(struct!.periodType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateCertificateValidityPropertyToTerraform(struct?: CcTemplate.CertificateValidityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        renewal_period: ccTemplateValidityPeriodPropertyToTerraform(struct!.renewalPeriod),
        validity_period: ccTemplateDefinitionTemplateV2CertificateValidityValidityPeriodPropertyToTerraform(struct!.validityPeriod),
    }
}


export function ccTemplateCertificateValidityPropertyToHclTerraform(struct?: CcTemplate.CertificateValidityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        renewal_period: {
            value: ccTemplateValidityPeriodPropertyToHclTerraform(struct!.renewalPeriod),
            isBlock: true,
            type: "struct",
            storageClassType: "ValidityPeriodProperty",
        },
        validity_period: {
            value: ccTemplateDefinitionTemplateV2CertificateValidityValidityPeriodPropertyToHclTerraform(struct!.validityPeriod),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV2CertificateValidityValidityPeriodProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateEnrollmentFlagsV2PropertyToTerraform(struct?: CcTemplate.EnrollmentFlagsV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_key_reuse_on_nt_token_keyset_storage_full: cdktn.booleanToTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
        include_symmetric_algorithms: cdktn.booleanToTerraform(struct!.includeSymmetricAlgorithms),
        no_security_extension: cdktn.booleanToTerraform(struct!.noSecurityExtension),
        remove_invalid_certificate_from_personal_store: cdktn.booleanToTerraform(struct!.removeInvalidCertificateFromPersonalStore),
        user_interaction_required: cdktn.booleanToTerraform(struct!.userInteractionRequired),
    }
}


export function ccTemplateEnrollmentFlagsV2PropertyToHclTerraform(struct?: CcTemplate.EnrollmentFlagsV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_key_reuse_on_nt_token_keyset_storage_full: {
            value: cdktn.booleanToHclTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_symmetric_algorithms: {
            value: cdktn.booleanToHclTerraform(struct!.includeSymmetricAlgorithms),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        no_security_extension: {
            value: cdktn.booleanToHclTerraform(struct!.noSecurityExtension),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remove_invalid_certificate_from_personal_store: {
            value: cdktn.booleanToHclTerraform(struct!.removeInvalidCertificateFromPersonalStore),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        user_interaction_required: {
            value: cdktn.booleanToHclTerraform(struct!.userInteractionRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateApplicationPolicyPropertyToTerraform(struct?: CcTemplate.ApplicationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_object_identifier: cdktn.stringToTerraform(struct!.policyObjectIdentifier),
        policy_type: cdktn.stringToTerraform(struct!.policyType),
    }
}


export function ccTemplateApplicationPolicyPropertyToHclTerraform(struct?: CcTemplate.ApplicationPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy_object_identifier: {
            value: cdktn.stringToHclTerraform(struct!.policyObjectIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_type: {
            value: cdktn.stringToHclTerraform(struct!.policyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateApplicationPoliciesPropertyToTerraform(struct?: CcTemplate.ApplicationPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        critical: cdktn.booleanToTerraform(struct!.critical),
        policies: cdktn.listMapper(ccTemplateApplicationPolicyPropertyToTerraform, false)(struct!.policies),
    }
}


export function ccTemplateApplicationPoliciesPropertyToHclTerraform(struct?: CcTemplate.ApplicationPoliciesProperty | cdktn.IResolvable): any {
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
        policies: {
            value: cdktn.listMapperHcl(ccTemplateApplicationPolicyPropertyToHclTerraform, false)(struct!.policies),
            isBlock: true,
            type: "list",
            storageClassType: "ApplicationPolicyPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateKeyUsageFlagsPropertyToTerraform(struct?: CcTemplate.KeyUsageFlagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_encipherment: cdktn.booleanToTerraform(struct!.dataEncipherment),
        digital_signature: cdktn.booleanToTerraform(struct!.digitalSignature),
        key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
        key_encipherment: cdktn.booleanToTerraform(struct!.keyEncipherment),
        non_repudiation: cdktn.booleanToTerraform(struct!.nonRepudiation),
    }
}


export function ccTemplateKeyUsageFlagsPropertyToHclTerraform(struct?: CcTemplate.KeyUsageFlagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_encipherment: {
            value: cdktn.booleanToHclTerraform(struct!.dataEncipherment),
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
        key_agreement: {
            value: cdktn.booleanToHclTerraform(struct!.keyAgreement),
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


export function ccTemplateKeyUsagePropertyToTerraform(struct?: CcTemplate.KeyUsageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        critical: cdktn.booleanToTerraform(struct!.critical),
        usage_flags: ccTemplateKeyUsageFlagsPropertyToTerraform(struct!.usageFlags),
    }
}


export function ccTemplateKeyUsagePropertyToHclTerraform(struct?: CcTemplate.KeyUsageProperty | cdktn.IResolvable): any {
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
        usage_flags: {
            value: ccTemplateKeyUsageFlagsPropertyToHclTerraform(struct!.usageFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "KeyUsageFlagsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateExtensionsV2PropertyToTerraform(struct?: CcTemplate.ExtensionsV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_policies: ccTemplateApplicationPoliciesPropertyToTerraform(struct!.applicationPolicies),
        key_usage: ccTemplateKeyUsagePropertyToTerraform(struct!.keyUsage),
    }
}


export function ccTemplateExtensionsV2PropertyToHclTerraform(struct?: CcTemplate.ExtensionsV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_policies: {
            value: ccTemplateApplicationPoliciesPropertyToHclTerraform(struct!.applicationPolicies),
            isBlock: true,
            type: "struct",
            storageClassType: "ApplicationPoliciesProperty",
        },
        key_usage: {
            value: ccTemplateKeyUsagePropertyToHclTerraform(struct!.keyUsage),
            isBlock: true,
            type: "struct",
            storageClassType: "KeyUsageProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateGeneralFlagsV2PropertyToTerraform(struct?: CcTemplate.GeneralFlagsV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_enrollment: cdktn.booleanToTerraform(struct!.autoEnrollment),
        machine_type: cdktn.booleanToTerraform(struct!.machineType),
    }
}


export function ccTemplateGeneralFlagsV2PropertyToHclTerraform(struct?: CcTemplate.GeneralFlagsV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_enrollment: {
            value: cdktn.booleanToHclTerraform(struct!.autoEnrollment),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        machine_type: {
            value: cdktn.booleanToHclTerraform(struct!.machineType),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplatePrivateKeyAttributesV2PropertyToTerraform(struct?: CcTemplate.PrivateKeyAttributesV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        crypto_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cryptoProviders),
        key_spec: cdktn.stringToTerraform(struct!.keySpec),
        minimal_key_length: cdktn.numberToTerraform(struct!.minimalKeyLength),
    }
}


export function ccTemplatePrivateKeyAttributesV2PropertyToHclTerraform(struct?: CcTemplate.PrivateKeyAttributesV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        crypto_providers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cryptoProviders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        key_spec: {
            value: cdktn.stringToHclTerraform(struct!.keySpec),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        minimal_key_length: {
            value: cdktn.numberToHclTerraform(struct!.minimalKeyLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplatePrivateKeyFlagsV2PropertyToTerraform(struct?: CcTemplate.PrivateKeyFlagsV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_version: cdktn.stringToTerraform(struct!.clientVersion),
        exportable_key: cdktn.booleanToTerraform(struct!.exportableKey),
        strong_key_protection_required: cdktn.booleanToTerraform(struct!.strongKeyProtectionRequired),
    }
}


export function ccTemplatePrivateKeyFlagsV2PropertyToHclTerraform(struct?: CcTemplate.PrivateKeyFlagsV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_version: {
            value: cdktn.stringToHclTerraform(struct!.clientVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exportable_key: {
            value: cdktn.booleanToHclTerraform(struct!.exportableKey),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        strong_key_protection_required: {
            value: cdktn.booleanToHclTerraform(struct!.strongKeyProtectionRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateSubjectNameFlagsV2PropertyToTerraform(struct?: CcTemplate.SubjectNameFlagsV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        require_common_name: cdktn.booleanToTerraform(struct!.requireCommonName),
        require_directory_path: cdktn.booleanToTerraform(struct!.requireDirectoryPath),
        require_dns_as_cn: cdktn.booleanToTerraform(struct!.requireDnsAsCn),
        require_email: cdktn.booleanToTerraform(struct!.requireEmail),
        san_require_directory_guid: cdktn.booleanToTerraform(struct!.sanRequireDirectoryGuid),
        san_require_dns: cdktn.booleanToTerraform(struct!.sanRequireDns),
        san_require_domain_dns: cdktn.booleanToTerraform(struct!.sanRequireDomainDns),
        san_require_email: cdktn.booleanToTerraform(struct!.sanRequireEmail),
        san_require_spn: cdktn.booleanToTerraform(struct!.sanRequireSpn),
        san_require_upn: cdktn.booleanToTerraform(struct!.sanRequireUpn),
    }
}


export function ccTemplateSubjectNameFlagsV2PropertyToHclTerraform(struct?: CcTemplate.SubjectNameFlagsV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        require_common_name: {
            value: cdktn.booleanToHclTerraform(struct!.requireCommonName),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_directory_path: {
            value: cdktn.booleanToHclTerraform(struct!.requireDirectoryPath),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_dns_as_cn: {
            value: cdktn.booleanToHclTerraform(struct!.requireDnsAsCn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_email: {
            value: cdktn.booleanToHclTerraform(struct!.requireEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_directory_guid: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireDirectoryGuid),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_dns: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireDns),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_domain_dns: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireDomainDns),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_email: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_spn: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireSpn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_upn: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireUpn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateTemplateV2PropertyToTerraform(struct?: CcTemplate.TemplateV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_validity: ccTemplateCertificateValidityPropertyToTerraform(struct!.certificateValidity),
        enrollment_flags: ccTemplateEnrollmentFlagsV2PropertyToTerraform(struct!.enrollmentFlags),
        extensions: ccTemplateExtensionsV2PropertyToTerraform(struct!.extensions),
        general_flags: ccTemplateGeneralFlagsV2PropertyToTerraform(struct!.generalFlags),
        private_key_attributes: ccTemplatePrivateKeyAttributesV2PropertyToTerraform(struct!.privateKeyAttributes),
        private_key_flags: ccTemplatePrivateKeyFlagsV2PropertyToTerraform(struct!.privateKeyFlags),
        subject_name_flags: ccTemplateSubjectNameFlagsV2PropertyToTerraform(struct!.subjectNameFlags),
        superseded_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supersededTemplates),
    }
}


export function ccTemplateTemplateV2PropertyToHclTerraform(struct?: CcTemplate.TemplateV2Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_validity: {
            value: ccTemplateCertificateValidityPropertyToHclTerraform(struct!.certificateValidity),
            isBlock: true,
            type: "struct",
            storageClassType: "CertificateValidityProperty",
        },
        enrollment_flags: {
            value: ccTemplateEnrollmentFlagsV2PropertyToHclTerraform(struct!.enrollmentFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "EnrollmentFlagsV2Property",
        },
        extensions: {
            value: ccTemplateExtensionsV2PropertyToHclTerraform(struct!.extensions),
            isBlock: true,
            type: "struct",
            storageClassType: "ExtensionsV2Property",
        },
        general_flags: {
            value: ccTemplateGeneralFlagsV2PropertyToHclTerraform(struct!.generalFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "GeneralFlagsV2Property",
        },
        private_key_attributes: {
            value: ccTemplatePrivateKeyAttributesV2PropertyToHclTerraform(struct!.privateKeyAttributes),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateKeyAttributesV2Property",
        },
        private_key_flags: {
            value: ccTemplatePrivateKeyFlagsV2PropertyToHclTerraform(struct!.privateKeyFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateKeyFlagsV2Property",
        },
        subject_name_flags: {
            value: ccTemplateSubjectNameFlagsV2PropertyToHclTerraform(struct!.subjectNameFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "SubjectNameFlagsV2Property",
        },
        superseded_templates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supersededTemplates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV3CertificateValidityRenewalPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        period: cdktn.numberToTerraform(struct!.period),
        period_type: cdktn.stringToTerraform(struct!.periodType),
    }
}


export function ccTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV3CertificateValidityRenewalPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        period: {
            value: cdktn.numberToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        period_type: {
            value: cdktn.stringToHclTerraform(struct!.periodType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV3CertificateValidityValidityPeriodPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV3CertificateValidityValidityPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        period: cdktn.numberToTerraform(struct!.period),
        period_type: cdktn.stringToTerraform(struct!.periodType),
    }
}


export function ccTemplateDefinitionTemplateV3CertificateValidityValidityPeriodPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV3CertificateValidityValidityPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        period: {
            value: cdktn.numberToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        period_type: {
            value: cdktn.stringToHclTerraform(struct!.periodType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV3CertificateValidityPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV3CertificateValidityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        renewal_period: ccTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodPropertyToTerraform(struct!.renewalPeriod),
        validity_period: ccTemplateDefinitionTemplateV3CertificateValidityValidityPeriodPropertyToTerraform(struct!.validityPeriod),
    }
}


export function ccTemplateDefinitionTemplateV3CertificateValidityPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV3CertificateValidityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        renewal_period: {
            value: ccTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodPropertyToHclTerraform(struct!.renewalPeriod),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV3CertificateValidityRenewalPeriodProperty",
        },
        validity_period: {
            value: ccTemplateDefinitionTemplateV3CertificateValidityValidityPeriodPropertyToHclTerraform(struct!.validityPeriod),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV3CertificateValidityValidityPeriodProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateEnrollmentFlagsV3PropertyToTerraform(struct?: CcTemplate.EnrollmentFlagsV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_key_reuse_on_nt_token_keyset_storage_full: cdktn.booleanToTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
        include_symmetric_algorithms: cdktn.booleanToTerraform(struct!.includeSymmetricAlgorithms),
        no_security_extension: cdktn.booleanToTerraform(struct!.noSecurityExtension),
        remove_invalid_certificate_from_personal_store: cdktn.booleanToTerraform(struct!.removeInvalidCertificateFromPersonalStore),
        user_interaction_required: cdktn.booleanToTerraform(struct!.userInteractionRequired),
    }
}


export function ccTemplateEnrollmentFlagsV3PropertyToHclTerraform(struct?: CcTemplate.EnrollmentFlagsV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_key_reuse_on_nt_token_keyset_storage_full: {
            value: cdktn.booleanToHclTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_symmetric_algorithms: {
            value: cdktn.booleanToHclTerraform(struct!.includeSymmetricAlgorithms),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        no_security_extension: {
            value: cdktn.booleanToHclTerraform(struct!.noSecurityExtension),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remove_invalid_certificate_from_personal_store: {
            value: cdktn.booleanToHclTerraform(struct!.removeInvalidCertificateFromPersonalStore),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        user_interaction_required: {
            value: cdktn.booleanToHclTerraform(struct!.userInteractionRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_object_identifier: cdktn.stringToTerraform(struct!.policyObjectIdentifier),
        policy_type: cdktn.stringToTerraform(struct!.policyType),
    }
}


export function ccTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy_object_identifier: {
            value: cdktn.stringToHclTerraform(struct!.policyObjectIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_type: {
            value: cdktn.stringToHclTerraform(struct!.policyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV3ExtensionsApplicationPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        critical: cdktn.booleanToTerraform(struct!.critical),
        policies: cdktn.listMapper(ccTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesPropertyToTerraform, false)(struct!.policies),
    }
}


export function ccTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV3ExtensionsApplicationPoliciesProperty | cdktn.IResolvable): any {
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
        policies: {
            value: cdktn.listMapperHcl(ccTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesPropertyToHclTerraform, false)(struct!.policies),
            isBlock: true,
            type: "list",
            storageClassType: "DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV3ExtensionsKeyUsageUsageFlagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_encipherment: cdktn.booleanToTerraform(struct!.dataEncipherment),
        digital_signature: cdktn.booleanToTerraform(struct!.digitalSignature),
        key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
        key_encipherment: cdktn.booleanToTerraform(struct!.keyEncipherment),
        non_repudiation: cdktn.booleanToTerraform(struct!.nonRepudiation),
    }
}


export function ccTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV3ExtensionsKeyUsageUsageFlagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_encipherment: {
            value: cdktn.booleanToHclTerraform(struct!.dataEncipherment),
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
        key_agreement: {
            value: cdktn.booleanToHclTerraform(struct!.keyAgreement),
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


export function ccTemplateDefinitionTemplateV3ExtensionsKeyUsagePropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV3ExtensionsKeyUsageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        critical: cdktn.booleanToTerraform(struct!.critical),
        usage_flags: ccTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsPropertyToTerraform(struct!.usageFlags),
    }
}


export function ccTemplateDefinitionTemplateV3ExtensionsKeyUsagePropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV3ExtensionsKeyUsageProperty | cdktn.IResolvable): any {
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
        usage_flags: {
            value: ccTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsPropertyToHclTerraform(struct!.usageFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV3ExtensionsKeyUsageUsageFlagsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateExtensionsV3PropertyToTerraform(struct?: CcTemplate.ExtensionsV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_policies: ccTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPropertyToTerraform(struct!.applicationPolicies),
        key_usage: ccTemplateDefinitionTemplateV3ExtensionsKeyUsagePropertyToTerraform(struct!.keyUsage),
    }
}


export function ccTemplateExtensionsV3PropertyToHclTerraform(struct?: CcTemplate.ExtensionsV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_policies: {
            value: ccTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPropertyToHclTerraform(struct!.applicationPolicies),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV3ExtensionsApplicationPoliciesProperty",
        },
        key_usage: {
            value: ccTemplateDefinitionTemplateV3ExtensionsKeyUsagePropertyToHclTerraform(struct!.keyUsage),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV3ExtensionsKeyUsageProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateGeneralFlagsV3PropertyToTerraform(struct?: CcTemplate.GeneralFlagsV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_enrollment: cdktn.booleanToTerraform(struct!.autoEnrollment),
        machine_type: cdktn.booleanToTerraform(struct!.machineType),
    }
}


export function ccTemplateGeneralFlagsV3PropertyToHclTerraform(struct?: CcTemplate.GeneralFlagsV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_enrollment: {
            value: cdktn.booleanToHclTerraform(struct!.autoEnrollment),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        machine_type: {
            value: cdktn.booleanToHclTerraform(struct!.machineType),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateKeyUsagePropertyFlagsPropertyToTerraform(struct?: CcTemplate.KeyUsagePropertyFlagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        decrypt: cdktn.booleanToTerraform(struct!.decrypt),
        key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
        sign: cdktn.booleanToTerraform(struct!.sign),
    }
}


export function ccTemplateKeyUsagePropertyFlagsPropertyToHclTerraform(struct?: CcTemplate.KeyUsagePropertyFlagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        decrypt: {
            value: cdktn.booleanToHclTerraform(struct!.decrypt),
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
        sign: {
            value: cdktn.booleanToHclTerraform(struct!.sign),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateKeyUsagePropertyPropertyToTerraform(struct?: CcTemplate.KeyUsagePropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        property_flags: ccTemplateKeyUsagePropertyFlagsPropertyToTerraform(struct!.propertyFlags),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
    }
}


export function ccTemplateKeyUsagePropertyPropertyToHclTerraform(struct?: CcTemplate.KeyUsagePropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        property_flags: {
            value: ccTemplateKeyUsagePropertyFlagsPropertyToHclTerraform(struct!.propertyFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "KeyUsagePropertyFlagsProperty",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplatePrivateKeyAttributesV3PropertyToTerraform(struct?: CcTemplate.PrivateKeyAttributesV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        algorithm: cdktn.stringToTerraform(struct!.algorithm),
        crypto_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cryptoProviders),
        key_spec: cdktn.stringToTerraform(struct!.keySpec),
        key_usage_property: ccTemplateKeyUsagePropertyPropertyToTerraform(struct!.keyUsageProperty),
        minimal_key_length: cdktn.numberToTerraform(struct!.minimalKeyLength),
    }
}


export function ccTemplatePrivateKeyAttributesV3PropertyToHclTerraform(struct?: CcTemplate.PrivateKeyAttributesV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        algorithm: {
            value: cdktn.stringToHclTerraform(struct!.algorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        crypto_providers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cryptoProviders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        key_spec: {
            value: cdktn.stringToHclTerraform(struct!.keySpec),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_usage_property: {
            value: ccTemplateKeyUsagePropertyPropertyToHclTerraform(struct!.keyUsageProperty),
            isBlock: true,
            type: "struct",
            storageClassType: "KeyUsagePropertyProperty",
        },
        minimal_key_length: {
            value: cdktn.numberToHclTerraform(struct!.minimalKeyLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplatePrivateKeyFlagsV3PropertyToTerraform(struct?: CcTemplate.PrivateKeyFlagsV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_version: cdktn.stringToTerraform(struct!.clientVersion),
        exportable_key: cdktn.booleanToTerraform(struct!.exportableKey),
        require_alternate_signature_algorithm: cdktn.booleanToTerraform(struct!.requireAlternateSignatureAlgorithm),
        strong_key_protection_required: cdktn.booleanToTerraform(struct!.strongKeyProtectionRequired),
    }
}


export function ccTemplatePrivateKeyFlagsV3PropertyToHclTerraform(struct?: CcTemplate.PrivateKeyFlagsV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_version: {
            value: cdktn.stringToHclTerraform(struct!.clientVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exportable_key: {
            value: cdktn.booleanToHclTerraform(struct!.exportableKey),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_alternate_signature_algorithm: {
            value: cdktn.booleanToHclTerraform(struct!.requireAlternateSignatureAlgorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        strong_key_protection_required: {
            value: cdktn.booleanToHclTerraform(struct!.strongKeyProtectionRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateSubjectNameFlagsV3PropertyToTerraform(struct?: CcTemplate.SubjectNameFlagsV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        require_common_name: cdktn.booleanToTerraform(struct!.requireCommonName),
        require_directory_path: cdktn.booleanToTerraform(struct!.requireDirectoryPath),
        require_dns_as_cn: cdktn.booleanToTerraform(struct!.requireDnsAsCn),
        require_email: cdktn.booleanToTerraform(struct!.requireEmail),
        san_require_directory_guid: cdktn.booleanToTerraform(struct!.sanRequireDirectoryGuid),
        san_require_dns: cdktn.booleanToTerraform(struct!.sanRequireDns),
        san_require_domain_dns: cdktn.booleanToTerraform(struct!.sanRequireDomainDns),
        san_require_email: cdktn.booleanToTerraform(struct!.sanRequireEmail),
        san_require_spn: cdktn.booleanToTerraform(struct!.sanRequireSpn),
        san_require_upn: cdktn.booleanToTerraform(struct!.sanRequireUpn),
    }
}


export function ccTemplateSubjectNameFlagsV3PropertyToHclTerraform(struct?: CcTemplate.SubjectNameFlagsV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        require_common_name: {
            value: cdktn.booleanToHclTerraform(struct!.requireCommonName),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_directory_path: {
            value: cdktn.booleanToHclTerraform(struct!.requireDirectoryPath),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_dns_as_cn: {
            value: cdktn.booleanToHclTerraform(struct!.requireDnsAsCn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_email: {
            value: cdktn.booleanToHclTerraform(struct!.requireEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_directory_guid: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireDirectoryGuid),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_dns: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireDns),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_domain_dns: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireDomainDns),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_email: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_spn: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireSpn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_upn: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireUpn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateTemplateV3PropertyToTerraform(struct?: CcTemplate.TemplateV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_validity: ccTemplateDefinitionTemplateV3CertificateValidityPropertyToTerraform(struct!.certificateValidity),
        enrollment_flags: ccTemplateEnrollmentFlagsV3PropertyToTerraform(struct!.enrollmentFlags),
        extensions: ccTemplateExtensionsV3PropertyToTerraform(struct!.extensions),
        general_flags: ccTemplateGeneralFlagsV3PropertyToTerraform(struct!.generalFlags),
        hash_algorithm: cdktn.stringToTerraform(struct!.hashAlgorithm),
        private_key_attributes: ccTemplatePrivateKeyAttributesV3PropertyToTerraform(struct!.privateKeyAttributes),
        private_key_flags: ccTemplatePrivateKeyFlagsV3PropertyToTerraform(struct!.privateKeyFlags),
        subject_name_flags: ccTemplateSubjectNameFlagsV3PropertyToTerraform(struct!.subjectNameFlags),
        superseded_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supersededTemplates),
    }
}


export function ccTemplateTemplateV3PropertyToHclTerraform(struct?: CcTemplate.TemplateV3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_validity: {
            value: ccTemplateDefinitionTemplateV3CertificateValidityPropertyToHclTerraform(struct!.certificateValidity),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV3CertificateValidityProperty",
        },
        enrollment_flags: {
            value: ccTemplateEnrollmentFlagsV3PropertyToHclTerraform(struct!.enrollmentFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "EnrollmentFlagsV3Property",
        },
        extensions: {
            value: ccTemplateExtensionsV3PropertyToHclTerraform(struct!.extensions),
            isBlock: true,
            type: "struct",
            storageClassType: "ExtensionsV3Property",
        },
        general_flags: {
            value: ccTemplateGeneralFlagsV3PropertyToHclTerraform(struct!.generalFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "GeneralFlagsV3Property",
        },
        hash_algorithm: {
            value: cdktn.stringToHclTerraform(struct!.hashAlgorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_key_attributes: {
            value: ccTemplatePrivateKeyAttributesV3PropertyToHclTerraform(struct!.privateKeyAttributes),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateKeyAttributesV3Property",
        },
        private_key_flags: {
            value: ccTemplatePrivateKeyFlagsV3PropertyToHclTerraform(struct!.privateKeyFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateKeyFlagsV3Property",
        },
        subject_name_flags: {
            value: ccTemplateSubjectNameFlagsV3PropertyToHclTerraform(struct!.subjectNameFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "SubjectNameFlagsV3Property",
        },
        superseded_templates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supersededTemplates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV4CertificateValidityRenewalPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        period: cdktn.numberToTerraform(struct!.period),
        period_type: cdktn.stringToTerraform(struct!.periodType),
    }
}


export function ccTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV4CertificateValidityRenewalPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        period: {
            value: cdktn.numberToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        period_type: {
            value: cdktn.stringToHclTerraform(struct!.periodType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV4CertificateValidityValidityPeriodPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV4CertificateValidityValidityPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        period: cdktn.numberToTerraform(struct!.period),
        period_type: cdktn.stringToTerraform(struct!.periodType),
    }
}


export function ccTemplateDefinitionTemplateV4CertificateValidityValidityPeriodPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV4CertificateValidityValidityPeriodProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        period: {
            value: cdktn.numberToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        period_type: {
            value: cdktn.stringToHclTerraform(struct!.periodType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV4CertificateValidityPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV4CertificateValidityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        renewal_period: ccTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodPropertyToTerraform(struct!.renewalPeriod),
        validity_period: ccTemplateDefinitionTemplateV4CertificateValidityValidityPeriodPropertyToTerraform(struct!.validityPeriod),
    }
}


export function ccTemplateDefinitionTemplateV4CertificateValidityPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV4CertificateValidityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        renewal_period: {
            value: ccTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodPropertyToHclTerraform(struct!.renewalPeriod),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV4CertificateValidityRenewalPeriodProperty",
        },
        validity_period: {
            value: ccTemplateDefinitionTemplateV4CertificateValidityValidityPeriodPropertyToHclTerraform(struct!.validityPeriod),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV4CertificateValidityValidityPeriodProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateEnrollmentFlagsV4PropertyToTerraform(struct?: CcTemplate.EnrollmentFlagsV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_key_reuse_on_nt_token_keyset_storage_full: cdktn.booleanToTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
        include_symmetric_algorithms: cdktn.booleanToTerraform(struct!.includeSymmetricAlgorithms),
        no_security_extension: cdktn.booleanToTerraform(struct!.noSecurityExtension),
        remove_invalid_certificate_from_personal_store: cdktn.booleanToTerraform(struct!.removeInvalidCertificateFromPersonalStore),
        user_interaction_required: cdktn.booleanToTerraform(struct!.userInteractionRequired),
    }
}


export function ccTemplateEnrollmentFlagsV4PropertyToHclTerraform(struct?: CcTemplate.EnrollmentFlagsV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_key_reuse_on_nt_token_keyset_storage_full: {
            value: cdktn.booleanToHclTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_symmetric_algorithms: {
            value: cdktn.booleanToHclTerraform(struct!.includeSymmetricAlgorithms),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        no_security_extension: {
            value: cdktn.booleanToHclTerraform(struct!.noSecurityExtension),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        remove_invalid_certificate_from_personal_store: {
            value: cdktn.booleanToHclTerraform(struct!.removeInvalidCertificateFromPersonalStore),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        user_interaction_required: {
            value: cdktn.booleanToHclTerraform(struct!.userInteractionRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_object_identifier: cdktn.stringToTerraform(struct!.policyObjectIdentifier),
        policy_type: cdktn.stringToTerraform(struct!.policyType),
    }
}


export function ccTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy_object_identifier: {
            value: cdktn.stringToHclTerraform(struct!.policyObjectIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        policy_type: {
            value: cdktn.stringToHclTerraform(struct!.policyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV4ExtensionsApplicationPoliciesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        critical: cdktn.booleanToTerraform(struct!.critical),
        policies: cdktn.listMapper(ccTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesPropertyToTerraform, false)(struct!.policies),
    }
}


export function ccTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV4ExtensionsApplicationPoliciesProperty | cdktn.IResolvable): any {
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
        policies: {
            value: cdktn.listMapperHcl(ccTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesPropertyToHclTerraform, false)(struct!.policies),
            isBlock: true,
            type: "list",
            storageClassType: "DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV4ExtensionsKeyUsageUsageFlagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_encipherment: cdktn.booleanToTerraform(struct!.dataEncipherment),
        digital_signature: cdktn.booleanToTerraform(struct!.digitalSignature),
        key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
        key_encipherment: cdktn.booleanToTerraform(struct!.keyEncipherment),
        non_repudiation: cdktn.booleanToTerraform(struct!.nonRepudiation),
    }
}


export function ccTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV4ExtensionsKeyUsageUsageFlagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_encipherment: {
            value: cdktn.booleanToHclTerraform(struct!.dataEncipherment),
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
        key_agreement: {
            value: cdktn.booleanToHclTerraform(struct!.keyAgreement),
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


export function ccTemplateDefinitionTemplateV4ExtensionsKeyUsagePropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV4ExtensionsKeyUsageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        critical: cdktn.booleanToTerraform(struct!.critical),
        usage_flags: ccTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsPropertyToTerraform(struct!.usageFlags),
    }
}


export function ccTemplateDefinitionTemplateV4ExtensionsKeyUsagePropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV4ExtensionsKeyUsageProperty | cdktn.IResolvable): any {
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
        usage_flags: {
            value: ccTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsPropertyToHclTerraform(struct!.usageFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV4ExtensionsKeyUsageUsageFlagsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateExtensionsV4PropertyToTerraform(struct?: CcTemplate.ExtensionsV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_policies: ccTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPropertyToTerraform(struct!.applicationPolicies),
        key_usage: ccTemplateDefinitionTemplateV4ExtensionsKeyUsagePropertyToTerraform(struct!.keyUsage),
    }
}


export function ccTemplateExtensionsV4PropertyToHclTerraform(struct?: CcTemplate.ExtensionsV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_policies: {
            value: ccTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPropertyToHclTerraform(struct!.applicationPolicies),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV4ExtensionsApplicationPoliciesProperty",
        },
        key_usage: {
            value: ccTemplateDefinitionTemplateV4ExtensionsKeyUsagePropertyToHclTerraform(struct!.keyUsage),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV4ExtensionsKeyUsageProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateGeneralFlagsV4PropertyToTerraform(struct?: CcTemplate.GeneralFlagsV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_enrollment: cdktn.booleanToTerraform(struct!.autoEnrollment),
        machine_type: cdktn.booleanToTerraform(struct!.machineType),
    }
}


export function ccTemplateGeneralFlagsV4PropertyToHclTerraform(struct?: CcTemplate.GeneralFlagsV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_enrollment: {
            value: cdktn.booleanToHclTerraform(struct!.autoEnrollment),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        machine_type: {
            value: cdktn.booleanToHclTerraform(struct!.machineType),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplatePropertyFlagsPropertyToTerraform(struct?: CcTemplate.PropertyFlagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        decrypt: cdktn.booleanToTerraform(struct!.decrypt),
        key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
        sign: cdktn.booleanToTerraform(struct!.sign),
    }
}


export function ccTemplatePropertyFlagsPropertyToHclTerraform(struct?: CcTemplate.PropertyFlagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        decrypt: {
            value: cdktn.booleanToHclTerraform(struct!.decrypt),
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
        sign: {
            value: cdktn.booleanToHclTerraform(struct!.sign),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyToTerraform(struct?: CcTemplate.DefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        property_flags: ccTemplatePropertyFlagsPropertyToTerraform(struct!.propertyFlags),
        property_type: cdktn.stringToTerraform(struct!.propertyType),
    }
}


export function ccTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyToHclTerraform(struct?: CcTemplate.DefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        property_flags: {
            value: ccTemplatePropertyFlagsPropertyToHclTerraform(struct!.propertyFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "PropertyFlagsProperty",
        },
        property_type: {
            value: cdktn.stringToHclTerraform(struct!.propertyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplatePrivateKeyAttributesV4PropertyToTerraform(struct?: CcTemplate.PrivateKeyAttributesV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        algorithm: cdktn.stringToTerraform(struct!.algorithm),
        crypto_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cryptoProviders),
        key_spec: cdktn.stringToTerraform(struct!.keySpec),
        key_usage_property: ccTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyToTerraform(struct!.keyUsageProperty),
        minimal_key_length: cdktn.numberToTerraform(struct!.minimalKeyLength),
    }
}


export function ccTemplatePrivateKeyAttributesV4PropertyToHclTerraform(struct?: CcTemplate.PrivateKeyAttributesV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        algorithm: {
            value: cdktn.stringToHclTerraform(struct!.algorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        crypto_providers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cryptoProviders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        key_spec: {
            value: cdktn.stringToHclTerraform(struct!.keySpec),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_usage_property: {
            value: ccTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyToHclTerraform(struct!.keyUsageProperty),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyProperty",
        },
        minimal_key_length: {
            value: cdktn.numberToHclTerraform(struct!.minimalKeyLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplatePrivateKeyFlagsV4PropertyToTerraform(struct?: CcTemplate.PrivateKeyFlagsV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_version: cdktn.stringToTerraform(struct!.clientVersion),
        exportable_key: cdktn.booleanToTerraform(struct!.exportableKey),
        require_alternate_signature_algorithm: cdktn.booleanToTerraform(struct!.requireAlternateSignatureAlgorithm),
        require_same_key_renewal: cdktn.booleanToTerraform(struct!.requireSameKeyRenewal),
        strong_key_protection_required: cdktn.booleanToTerraform(struct!.strongKeyProtectionRequired),
        use_legacy_provider: cdktn.booleanToTerraform(struct!.useLegacyProvider),
    }
}


export function ccTemplatePrivateKeyFlagsV4PropertyToHclTerraform(struct?: CcTemplate.PrivateKeyFlagsV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_version: {
            value: cdktn.stringToHclTerraform(struct!.clientVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exportable_key: {
            value: cdktn.booleanToHclTerraform(struct!.exportableKey),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_alternate_signature_algorithm: {
            value: cdktn.booleanToHclTerraform(struct!.requireAlternateSignatureAlgorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_same_key_renewal: {
            value: cdktn.booleanToHclTerraform(struct!.requireSameKeyRenewal),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        strong_key_protection_required: {
            value: cdktn.booleanToHclTerraform(struct!.strongKeyProtectionRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_legacy_provider: {
            value: cdktn.booleanToHclTerraform(struct!.useLegacyProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateSubjectNameFlagsV4PropertyToTerraform(struct?: CcTemplate.SubjectNameFlagsV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        require_common_name: cdktn.booleanToTerraform(struct!.requireCommonName),
        require_directory_path: cdktn.booleanToTerraform(struct!.requireDirectoryPath),
        require_dns_as_cn: cdktn.booleanToTerraform(struct!.requireDnsAsCn),
        require_email: cdktn.booleanToTerraform(struct!.requireEmail),
        san_require_directory_guid: cdktn.booleanToTerraform(struct!.sanRequireDirectoryGuid),
        san_require_dns: cdktn.booleanToTerraform(struct!.sanRequireDns),
        san_require_domain_dns: cdktn.booleanToTerraform(struct!.sanRequireDomainDns),
        san_require_email: cdktn.booleanToTerraform(struct!.sanRequireEmail),
        san_require_spn: cdktn.booleanToTerraform(struct!.sanRequireSpn),
        san_require_upn: cdktn.booleanToTerraform(struct!.sanRequireUpn),
    }
}


export function ccTemplateSubjectNameFlagsV4PropertyToHclTerraform(struct?: CcTemplate.SubjectNameFlagsV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        require_common_name: {
            value: cdktn.booleanToHclTerraform(struct!.requireCommonName),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_directory_path: {
            value: cdktn.booleanToHclTerraform(struct!.requireDirectoryPath),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_dns_as_cn: {
            value: cdktn.booleanToHclTerraform(struct!.requireDnsAsCn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_email: {
            value: cdktn.booleanToHclTerraform(struct!.requireEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_directory_guid: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireDirectoryGuid),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_dns: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireDns),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_domain_dns: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireDomainDns),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_email: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_spn: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireSpn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        san_require_upn: {
            value: cdktn.booleanToHclTerraform(struct!.sanRequireUpn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateTemplateV4PropertyToTerraform(struct?: CcTemplate.TemplateV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_validity: ccTemplateDefinitionTemplateV4CertificateValidityPropertyToTerraform(struct!.certificateValidity),
        enrollment_flags: ccTemplateEnrollmentFlagsV4PropertyToTerraform(struct!.enrollmentFlags),
        extensions: ccTemplateExtensionsV4PropertyToTerraform(struct!.extensions),
        general_flags: ccTemplateGeneralFlagsV4PropertyToTerraform(struct!.generalFlags),
        hash_algorithm: cdktn.stringToTerraform(struct!.hashAlgorithm),
        private_key_attributes: ccTemplatePrivateKeyAttributesV4PropertyToTerraform(struct!.privateKeyAttributes),
        private_key_flags: ccTemplatePrivateKeyFlagsV4PropertyToTerraform(struct!.privateKeyFlags),
        subject_name_flags: ccTemplateSubjectNameFlagsV4PropertyToTerraform(struct!.subjectNameFlags),
        superseded_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supersededTemplates),
    }
}


export function ccTemplateTemplateV4PropertyToHclTerraform(struct?: CcTemplate.TemplateV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_validity: {
            value: ccTemplateDefinitionTemplateV4CertificateValidityPropertyToHclTerraform(struct!.certificateValidity),
            isBlock: true,
            type: "struct",
            storageClassType: "DefinitionTemplateV4CertificateValidityProperty",
        },
        enrollment_flags: {
            value: ccTemplateEnrollmentFlagsV4PropertyToHclTerraform(struct!.enrollmentFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "EnrollmentFlagsV4Property",
        },
        extensions: {
            value: ccTemplateExtensionsV4PropertyToHclTerraform(struct!.extensions),
            isBlock: true,
            type: "struct",
            storageClassType: "ExtensionsV4Property",
        },
        general_flags: {
            value: ccTemplateGeneralFlagsV4PropertyToHclTerraform(struct!.generalFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "GeneralFlagsV4Property",
        },
        hash_algorithm: {
            value: cdktn.stringToHclTerraform(struct!.hashAlgorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_key_attributes: {
            value: ccTemplatePrivateKeyAttributesV4PropertyToHclTerraform(struct!.privateKeyAttributes),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateKeyAttributesV4Property",
        },
        private_key_flags: {
            value: ccTemplatePrivateKeyFlagsV4PropertyToHclTerraform(struct!.privateKeyFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "PrivateKeyFlagsV4Property",
        },
        subject_name_flags: {
            value: ccTemplateSubjectNameFlagsV4PropertyToHclTerraform(struct!.subjectNameFlags),
            isBlock: true,
            type: "struct",
            storageClassType: "SubjectNameFlagsV4Property",
        },
        superseded_templates: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supersededTemplates),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTemplateTemplateDefinitionPropertyToTerraform(struct?: CcTemplate.TemplateDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        template_v2: ccTemplateTemplateV2PropertyToTerraform(struct!.templateV2),
        template_v3: ccTemplateTemplateV3PropertyToTerraform(struct!.templateV3),
        template_v4: ccTemplateTemplateV4PropertyToTerraform(struct!.templateV4),
    }
}


export function ccTemplateTemplateDefinitionPropertyToHclTerraform(struct?: CcTemplate.TemplateDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        template_v2: {
            value: ccTemplateTemplateV2PropertyToHclTerraform(struct!.templateV2),
            isBlock: true,
            type: "struct",
            storageClassType: "TemplateV2Property",
        },
        template_v3: {
            value: ccTemplateTemplateV3PropertyToHclTerraform(struct!.templateV3),
            isBlock: true,
            type: "struct",
            storageClassType: "TemplateV3Property",
        },
        template_v4: {
            value: ccTemplateTemplateV4PropertyToHclTerraform(struct!.templateV4),
            isBlock: true,
            type: "struct",
            storageClassType: "TemplateV4Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTemplate {
export interface ValidityPeriodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period CcTemplate#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period_type CcTemplate#period_type}
    */
    readonly periodType?: string;
}
export class ValidityPeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValidityPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._periodType !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodType = this._periodType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidityPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._period = undefined;
            this._periodType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._period = value.period;
            this._periodType = value.periodType;
        }
    }

    // period - computed: true, optional: true, required: false
    private _period?: number; 
    public get period() {
        return this.getNumberAttribute('period');
    }
    public set period(value: number) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // period_type - computed: true, optional: true, required: false
    private _periodType?: string; 
    public get periodType() {
        return this.getStringAttribute('period_type');
    }
    public set periodType(value: string) {
        this._periodType = value;
    }
    public resetPeriodType() {
        this._periodType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodTypeInput() {
        return this._periodType;
    }
}
export interface DefinitionTemplateV2CertificateValidityValidityPeriodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period CcTemplate#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period_type CcTemplate#period_type}
    */
    readonly periodType?: string;
}
export class DefinitionTemplateV2CertificateValidityValidityPeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV2CertificateValidityValidityPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._periodType !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodType = this._periodType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV2CertificateValidityValidityPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._period = undefined;
            this._periodType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._period = value.period;
            this._periodType = value.periodType;
        }
    }

    // period - computed: true, optional: true, required: false
    private _period?: number; 
    public get period() {
        return this.getNumberAttribute('period');
    }
    public set period(value: number) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // period_type - computed: true, optional: true, required: false
    private _periodType?: string; 
    public get periodType() {
        return this.getStringAttribute('period_type');
    }
    public set periodType(value: string) {
        this._periodType = value;
    }
    public resetPeriodType() {
        this._periodType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodTypeInput() {
        return this._periodType;
    }
}
export interface CertificateValidityProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#renewal_period CcTemplate#renewal_period}
    */
    readonly renewalPeriod?: ValidityPeriodProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#validity_period CcTemplate#validity_period}
    */
    readonly validityPeriod?: DefinitionTemplateV2CertificateValidityValidityPeriodProperty;
}
export class CertificateValidityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CertificateValidityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._renewalPeriod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.renewalPeriod = this._renewalPeriod?.internalValue;
        }
        if (this._validityPeriod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validityPeriod = this._validityPeriod?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertificateValidityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._renewalPeriod.internalValue = undefined;
            this._validityPeriod.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._renewalPeriod.internalValue = value.renewalPeriod;
            this._validityPeriod.internalValue = value.validityPeriod;
        }
    }

    // renewal_period - computed: true, optional: true, required: false
    private _renewalPeriod = new ValidityPeriodPropertyOutputReference(this, "renewal_period");
    public get renewalPeriod() {
        return this._renewalPeriod;
    }
    public putRenewalPeriod(value: ValidityPeriodProperty) {
        this._renewalPeriod.internalValue = value;
    }
    public resetRenewalPeriod() {
        this._renewalPeriod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renewalPeriodInput() {
        return this._renewalPeriod.internalValue;
    }

    // validity_period - computed: true, optional: true, required: false
    private _validityPeriod = new DefinitionTemplateV2CertificateValidityValidityPeriodPropertyOutputReference(this, "validity_period");
    public get validityPeriod() {
        return this._validityPeriod;
    }
    public putValidityPeriod(value: DefinitionTemplateV2CertificateValidityValidityPeriodProperty) {
        this._validityPeriod.internalValue = value;
    }
    public resetValidityPeriod() {
        this._validityPeriod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validityPeriodInput() {
        return this._validityPeriod.internalValue;
    }
}
export interface EnrollmentFlagsV2Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#enable_key_reuse_on_nt_token_keyset_storage_full CcTemplate#enable_key_reuse_on_nt_token_keyset_storage_full}
    */
    readonly enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#include_symmetric_algorithms CcTemplate#include_symmetric_algorithms}
    */
    readonly includeSymmetricAlgorithms?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#no_security_extension CcTemplate#no_security_extension}
    */
    readonly noSecurityExtension?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#remove_invalid_certificate_from_personal_store CcTemplate#remove_invalid_certificate_from_personal_store}
    */
    readonly removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#user_interaction_required CcTemplate#user_interaction_required}
    */
    readonly userInteractionRequired?: boolean | cdktn.IResolvable;
}
export class EnrollmentFlagsV2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnrollmentFlagsV2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableKeyReuseOnNtTokenKeysetStorageFull !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableKeyReuseOnNtTokenKeysetStorageFull = this._enableKeyReuseOnNtTokenKeysetStorageFull;
        }
        if (this._includeSymmetricAlgorithms !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeSymmetricAlgorithms = this._includeSymmetricAlgorithms;
        }
        if (this._noSecurityExtension !== undefined) {
            hasAnyValues = true;
            internalValueResult.noSecurityExtension = this._noSecurityExtension;
        }
        if (this._removeInvalidCertificateFromPersonalStore !== undefined) {
            hasAnyValues = true;
            internalValueResult.removeInvalidCertificateFromPersonalStore = this._removeInvalidCertificateFromPersonalStore;
        }
        if (this._userInteractionRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.userInteractionRequired = this._userInteractionRequired;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnrollmentFlagsV2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
            this._includeSymmetricAlgorithms = undefined;
            this._noSecurityExtension = undefined;
            this._removeInvalidCertificateFromPersonalStore = undefined;
            this._userInteractionRequired = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableKeyReuseOnNtTokenKeysetStorageFull = value.enableKeyReuseOnNtTokenKeysetStorageFull;
            this._includeSymmetricAlgorithms = value.includeSymmetricAlgorithms;
            this._noSecurityExtension = value.noSecurityExtension;
            this._removeInvalidCertificateFromPersonalStore = value.removeInvalidCertificateFromPersonalStore;
            this._userInteractionRequired = value.userInteractionRequired;
        }
    }

    // enable_key_reuse_on_nt_token_keyset_storage_full - computed: true, optional: true, required: false
    private _enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable; 
    public get enableKeyReuseOnNtTokenKeysetStorageFull() {
        return this.getBooleanAttribute('enable_key_reuse_on_nt_token_keyset_storage_full');
    }
    public set enableKeyReuseOnNtTokenKeysetStorageFull(value: boolean | cdktn.IResolvable) {
        this._enableKeyReuseOnNtTokenKeysetStorageFull = value;
    }
    public resetEnableKeyReuseOnNtTokenKeysetStorageFull() {
        this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableKeyReuseOnNtTokenKeysetStorageFullInput() {
        return this._enableKeyReuseOnNtTokenKeysetStorageFull;
    }

    // include_symmetric_algorithms - computed: true, optional: true, required: false
    private _includeSymmetricAlgorithms?: boolean | cdktn.IResolvable; 
    public get includeSymmetricAlgorithms() {
        return this.getBooleanAttribute('include_symmetric_algorithms');
    }
    public set includeSymmetricAlgorithms(value: boolean | cdktn.IResolvable) {
        this._includeSymmetricAlgorithms = value;
    }
    public resetIncludeSymmetricAlgorithms() {
        this._includeSymmetricAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeSymmetricAlgorithmsInput() {
        return this._includeSymmetricAlgorithms;
    }

    // no_security_extension - computed: true, optional: true, required: false
    private _noSecurityExtension?: boolean | cdktn.IResolvable; 
    public get noSecurityExtension() {
        return this.getBooleanAttribute('no_security_extension');
    }
    public set noSecurityExtension(value: boolean | cdktn.IResolvable) {
        this._noSecurityExtension = value;
    }
    public resetNoSecurityExtension() {
        this._noSecurityExtension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noSecurityExtensionInput() {
        return this._noSecurityExtension;
    }

    // remove_invalid_certificate_from_personal_store - computed: true, optional: true, required: false
    private _removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable; 
    public get removeInvalidCertificateFromPersonalStore() {
        return this.getBooleanAttribute('remove_invalid_certificate_from_personal_store');
    }
    public set removeInvalidCertificateFromPersonalStore(value: boolean | cdktn.IResolvable) {
        this._removeInvalidCertificateFromPersonalStore = value;
    }
    public resetRemoveInvalidCertificateFromPersonalStore() {
        this._removeInvalidCertificateFromPersonalStore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeInvalidCertificateFromPersonalStoreInput() {
        return this._removeInvalidCertificateFromPersonalStore;
    }

    // user_interaction_required - computed: true, optional: true, required: false
    private _userInteractionRequired?: boolean | cdktn.IResolvable; 
    public get userInteractionRequired() {
        return this.getBooleanAttribute('user_interaction_required');
    }
    public set userInteractionRequired(value: boolean | cdktn.IResolvable) {
        this._userInteractionRequired = value;
    }
    public resetUserInteractionRequired() {
        this._userInteractionRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInteractionRequiredInput() {
        return this._userInteractionRequired;
    }
}
export interface ApplicationPolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#policy_object_identifier CcTemplate#policy_object_identifier}
    */
    readonly policyObjectIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#policy_type CcTemplate#policy_type}
    */
    readonly policyType?: string;
}
export class ApplicationPolicyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ApplicationPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policyObjectIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyObjectIdentifier = this._policyObjectIdentifier;
        }
        if (this._policyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyType = this._policyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policyObjectIdentifier = undefined;
            this._policyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policyObjectIdentifier = value.policyObjectIdentifier;
            this._policyType = value.policyType;
        }
    }

    // policy_object_identifier - computed: true, optional: true, required: false
    private _policyObjectIdentifier?: string; 
    public get policyObjectIdentifier() {
        return this.getStringAttribute('policy_object_identifier');
    }
    public set policyObjectIdentifier(value: string) {
        this._policyObjectIdentifier = value;
    }
    public resetPolicyObjectIdentifier() {
        this._policyObjectIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyObjectIdentifierInput() {
        return this._policyObjectIdentifier;
    }

    // policy_type - computed: true, optional: true, required: false
    private _policyType?: string; 
    public get policyType() {
        return this.getStringAttribute('policy_type');
    }
    public set policyType(value: string) {
        this._policyType = value;
    }
    public resetPolicyType() {
        this._policyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTypeInput() {
        return this._policyType;
    }
}

export class ApplicationPolicyPropertyList extends cdktn.ComplexList {
    public internalValue? : ApplicationPolicyProperty[] | cdktn.IResolvable

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
    public get(index: number): ApplicationPolicyPropertyOutputReference {
        return new ApplicationPolicyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ApplicationPoliciesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#critical CcTemplate#critical}
    */
    readonly critical?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#policies CcTemplate#policies}
    */
    readonly policies?: ApplicationPolicyProperty[] | cdktn.IResolvable;
}
export class ApplicationPoliciesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApplicationPoliciesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._critical !== undefined) {
            hasAnyValues = true;
            internalValueResult.critical = this._critical;
        }
        if (this._policies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policies = this._policies?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationPoliciesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._critical = undefined;
            this._policies.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._critical = value.critical;
            this._policies.internalValue = value.policies;
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

    // policies - computed: true, optional: true, required: false
    private _policies = new ApplicationPolicyPropertyList(this, "policies", false);
    public get policies() {
        return this._policies;
    }
    public putPolicies(value: ApplicationPolicyProperty[] | cdktn.IResolvable) {
        this._policies.internalValue = value;
    }
    public resetPolicies() {
        this._policies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policiesInput() {
        return this._policies.internalValue;
    }
}
export interface KeyUsageFlagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#data_encipherment CcTemplate#data_encipherment}
    */
    readonly dataEncipherment?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#digital_signature CcTemplate#digital_signature}
    */
    readonly digitalSignature?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_agreement CcTemplate#key_agreement}
    */
    readonly keyAgreement?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_encipherment CcTemplate#key_encipherment}
    */
    readonly keyEncipherment?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#non_repudiation CcTemplate#non_repudiation}
    */
    readonly nonRepudiation?: boolean | cdktn.IResolvable;
}
export class KeyUsageFlagsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KeyUsageFlagsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataEncipherment !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataEncipherment = this._dataEncipherment;
        }
        if (this._digitalSignature !== undefined) {
            hasAnyValues = true;
            internalValueResult.digitalSignature = this._digitalSignature;
        }
        if (this._keyAgreement !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyAgreement = this._keyAgreement;
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

    public set internalValue(value: KeyUsageFlagsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataEncipherment = undefined;
            this._digitalSignature = undefined;
            this._keyAgreement = undefined;
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
            this._dataEncipherment = value.dataEncipherment;
            this._digitalSignature = value.digitalSignature;
            this._keyAgreement = value.keyAgreement;
            this._keyEncipherment = value.keyEncipherment;
            this._nonRepudiation = value.nonRepudiation;
        }
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
export interface KeyUsageProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#critical CcTemplate#critical}
    */
    readonly critical?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#usage_flags CcTemplate#usage_flags}
    */
    readonly usageFlags?: KeyUsageFlagsProperty;
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
        if (this._critical !== undefined) {
            hasAnyValues = true;
            internalValueResult.critical = this._critical;
        }
        if (this._usageFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.usageFlags = this._usageFlags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyUsageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._critical = undefined;
            this._usageFlags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._critical = value.critical;
            this._usageFlags.internalValue = value.usageFlags;
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

    // usage_flags - computed: true, optional: true, required: false
    private _usageFlags = new KeyUsageFlagsPropertyOutputReference(this, "usage_flags");
    public get usageFlags() {
        return this._usageFlags;
    }
    public putUsageFlags(value: KeyUsageFlagsProperty) {
        this._usageFlags.internalValue = value;
    }
    public resetUsageFlags() {
        this._usageFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usageFlagsInput() {
        return this._usageFlags.internalValue;
    }
}
export interface ExtensionsV2Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#application_policies CcTemplate#application_policies}
    */
    readonly applicationPolicies?: ApplicationPoliciesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_usage CcTemplate#key_usage}
    */
    readonly keyUsage?: KeyUsageProperty;
}
export class ExtensionsV2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExtensionsV2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationPolicies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationPolicies = this._applicationPolicies?.internalValue;
        }
        if (this._keyUsage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyUsage = this._keyUsage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExtensionsV2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationPolicies.internalValue = undefined;
            this._keyUsage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationPolicies.internalValue = value.applicationPolicies;
            this._keyUsage.internalValue = value.keyUsage;
        }
    }

    // application_policies - computed: true, optional: true, required: false
    private _applicationPolicies = new ApplicationPoliciesPropertyOutputReference(this, "application_policies");
    public get applicationPolicies() {
        return this._applicationPolicies;
    }
    public putApplicationPolicies(value: ApplicationPoliciesProperty) {
        this._applicationPolicies.internalValue = value;
    }
    public resetApplicationPolicies() {
        this._applicationPolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationPoliciesInput() {
        return this._applicationPolicies.internalValue;
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
}
export interface GeneralFlagsV2Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#auto_enrollment CcTemplate#auto_enrollment}
    */
    readonly autoEnrollment?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#machine_type CcTemplate#machine_type}
    */
    readonly machineType?: boolean | cdktn.IResolvable;
}
export class GeneralFlagsV2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GeneralFlagsV2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoEnrollment !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoEnrollment = this._autoEnrollment;
        }
        if (this._machineType !== undefined) {
            hasAnyValues = true;
            internalValueResult.machineType = this._machineType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GeneralFlagsV2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoEnrollment = undefined;
            this._machineType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoEnrollment = value.autoEnrollment;
            this._machineType = value.machineType;
        }
    }

    // auto_enrollment - computed: true, optional: true, required: false
    private _autoEnrollment?: boolean | cdktn.IResolvable; 
    public get autoEnrollment() {
        return this.getBooleanAttribute('auto_enrollment');
    }
    public set autoEnrollment(value: boolean | cdktn.IResolvable) {
        this._autoEnrollment = value;
    }
    public resetAutoEnrollment() {
        this._autoEnrollment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoEnrollmentInput() {
        return this._autoEnrollment;
    }

    // machine_type - computed: true, optional: true, required: false
    private _machineType?: boolean | cdktn.IResolvable; 
    public get machineType() {
        return this.getBooleanAttribute('machine_type');
    }
    public set machineType(value: boolean | cdktn.IResolvable) {
        this._machineType = value;
    }
    public resetMachineType() {
        this._machineType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get machineTypeInput() {
        return this._machineType;
    }
}
export interface PrivateKeyAttributesV2Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#crypto_providers CcTemplate#crypto_providers}
    */
    readonly cryptoProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_spec CcTemplate#key_spec}
    */
    readonly keySpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#minimal_key_length CcTemplate#minimal_key_length}
    */
    readonly minimalKeyLength?: number;
}
export class PrivateKeyAttributesV2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateKeyAttributesV2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cryptoProviders !== undefined) {
            hasAnyValues = true;
            internalValueResult.cryptoProviders = this._cryptoProviders;
        }
        if (this._keySpec !== undefined) {
            hasAnyValues = true;
            internalValueResult.keySpec = this._keySpec;
        }
        if (this._minimalKeyLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimalKeyLength = this._minimalKeyLength;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateKeyAttributesV2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cryptoProviders = undefined;
            this._keySpec = undefined;
            this._minimalKeyLength = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cryptoProviders = value.cryptoProviders;
            this._keySpec = value.keySpec;
            this._minimalKeyLength = value.minimalKeyLength;
        }
    }

    // crypto_providers - computed: true, optional: true, required: false
    private _cryptoProviders?: string[]; 
    public get cryptoProviders() {
        return this.getListAttribute('crypto_providers');
    }
    public set cryptoProviders(value: string[]) {
        this._cryptoProviders = value;
    }
    public resetCryptoProviders() {
        this._cryptoProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cryptoProvidersInput() {
        return this._cryptoProviders;
    }

    // key_spec - computed: true, optional: true, required: false
    private _keySpec?: string; 
    public get keySpec() {
        return this.getStringAttribute('key_spec');
    }
    public set keySpec(value: string) {
        this._keySpec = value;
    }
    public resetKeySpec() {
        this._keySpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keySpecInput() {
        return this._keySpec;
    }

    // minimal_key_length - computed: true, optional: true, required: false
    private _minimalKeyLength?: number; 
    public get minimalKeyLength() {
        return this.getNumberAttribute('minimal_key_length');
    }
    public set minimalKeyLength(value: number) {
        this._minimalKeyLength = value;
    }
    public resetMinimalKeyLength() {
        this._minimalKeyLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimalKeyLengthInput() {
        return this._minimalKeyLength;
    }
}
export interface PrivateKeyFlagsV2Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#client_version CcTemplate#client_version}
    */
    readonly clientVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#exportable_key CcTemplate#exportable_key}
    */
    readonly exportableKey?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#strong_key_protection_required CcTemplate#strong_key_protection_required}
    */
    readonly strongKeyProtectionRequired?: boolean | cdktn.IResolvable;
}
export class PrivateKeyFlagsV2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateKeyFlagsV2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientVersion = this._clientVersion;
        }
        if (this._exportableKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportableKey = this._exportableKey;
        }
        if (this._strongKeyProtectionRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.strongKeyProtectionRequired = this._strongKeyProtectionRequired;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateKeyFlagsV2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientVersion = undefined;
            this._exportableKey = undefined;
            this._strongKeyProtectionRequired = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientVersion = value.clientVersion;
            this._exportableKey = value.exportableKey;
            this._strongKeyProtectionRequired = value.strongKeyProtectionRequired;
        }
    }

    // client_version - computed: true, optional: true, required: false
    private _clientVersion?: string; 
    public get clientVersion() {
        return this.getStringAttribute('client_version');
    }
    public set clientVersion(value: string) {
        this._clientVersion = value;
    }
    public resetClientVersion() {
        this._clientVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientVersionInput() {
        return this._clientVersion;
    }

    // exportable_key - computed: true, optional: true, required: false
    private _exportableKey?: boolean | cdktn.IResolvable; 
    public get exportableKey() {
        return this.getBooleanAttribute('exportable_key');
    }
    public set exportableKey(value: boolean | cdktn.IResolvable) {
        this._exportableKey = value;
    }
    public resetExportableKey() {
        this._exportableKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportableKeyInput() {
        return this._exportableKey;
    }

    // strong_key_protection_required - computed: true, optional: true, required: false
    private _strongKeyProtectionRequired?: boolean | cdktn.IResolvable; 
    public get strongKeyProtectionRequired() {
        return this.getBooleanAttribute('strong_key_protection_required');
    }
    public set strongKeyProtectionRequired(value: boolean | cdktn.IResolvable) {
        this._strongKeyProtectionRequired = value;
    }
    public resetStrongKeyProtectionRequired() {
        this._strongKeyProtectionRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strongKeyProtectionRequiredInput() {
        return this._strongKeyProtectionRequired;
    }
}
export interface SubjectNameFlagsV2Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_common_name CcTemplate#require_common_name}
    */
    readonly requireCommonName?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_directory_path CcTemplate#require_directory_path}
    */
    readonly requireDirectoryPath?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_dns_as_cn CcTemplate#require_dns_as_cn}
    */
    readonly requireDnsAsCn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_email CcTemplate#require_email}
    */
    readonly requireEmail?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_directory_guid CcTemplate#san_require_directory_guid}
    */
    readonly sanRequireDirectoryGuid?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_dns CcTemplate#san_require_dns}
    */
    readonly sanRequireDns?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_domain_dns CcTemplate#san_require_domain_dns}
    */
    readonly sanRequireDomainDns?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_email CcTemplate#san_require_email}
    */
    readonly sanRequireEmail?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_spn CcTemplate#san_require_spn}
    */
    readonly sanRequireSpn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_upn CcTemplate#san_require_upn}
    */
    readonly sanRequireUpn?: boolean | cdktn.IResolvable;
}
export class SubjectNameFlagsV2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SubjectNameFlagsV2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._requireCommonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireCommonName = this._requireCommonName;
        }
        if (this._requireDirectoryPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireDirectoryPath = this._requireDirectoryPath;
        }
        if (this._requireDnsAsCn !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireDnsAsCn = this._requireDnsAsCn;
        }
        if (this._requireEmail !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireEmail = this._requireEmail;
        }
        if (this._sanRequireDirectoryGuid !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireDirectoryGuid = this._sanRequireDirectoryGuid;
        }
        if (this._sanRequireDns !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireDns = this._sanRequireDns;
        }
        if (this._sanRequireDomainDns !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireDomainDns = this._sanRequireDomainDns;
        }
        if (this._sanRequireEmail !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireEmail = this._sanRequireEmail;
        }
        if (this._sanRequireSpn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireSpn = this._sanRequireSpn;
        }
        if (this._sanRequireUpn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireUpn = this._sanRequireUpn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubjectNameFlagsV2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._requireCommonName = undefined;
            this._requireDirectoryPath = undefined;
            this._requireDnsAsCn = undefined;
            this._requireEmail = undefined;
            this._sanRequireDirectoryGuid = undefined;
            this._sanRequireDns = undefined;
            this._sanRequireDomainDns = undefined;
            this._sanRequireEmail = undefined;
            this._sanRequireSpn = undefined;
            this._sanRequireUpn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._requireCommonName = value.requireCommonName;
            this._requireDirectoryPath = value.requireDirectoryPath;
            this._requireDnsAsCn = value.requireDnsAsCn;
            this._requireEmail = value.requireEmail;
            this._sanRequireDirectoryGuid = value.sanRequireDirectoryGuid;
            this._sanRequireDns = value.sanRequireDns;
            this._sanRequireDomainDns = value.sanRequireDomainDns;
            this._sanRequireEmail = value.sanRequireEmail;
            this._sanRequireSpn = value.sanRequireSpn;
            this._sanRequireUpn = value.sanRequireUpn;
        }
    }

    // require_common_name - computed: true, optional: true, required: false
    private _requireCommonName?: boolean | cdktn.IResolvable; 
    public get requireCommonName() {
        return this.getBooleanAttribute('require_common_name');
    }
    public set requireCommonName(value: boolean | cdktn.IResolvable) {
        this._requireCommonName = value;
    }
    public resetRequireCommonName() {
        this._requireCommonName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireCommonNameInput() {
        return this._requireCommonName;
    }

    // require_directory_path - computed: true, optional: true, required: false
    private _requireDirectoryPath?: boolean | cdktn.IResolvable; 
    public get requireDirectoryPath() {
        return this.getBooleanAttribute('require_directory_path');
    }
    public set requireDirectoryPath(value: boolean | cdktn.IResolvable) {
        this._requireDirectoryPath = value;
    }
    public resetRequireDirectoryPath() {
        this._requireDirectoryPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireDirectoryPathInput() {
        return this._requireDirectoryPath;
    }

    // require_dns_as_cn - computed: true, optional: true, required: false
    private _requireDnsAsCn?: boolean | cdktn.IResolvable; 
    public get requireDnsAsCn() {
        return this.getBooleanAttribute('require_dns_as_cn');
    }
    public set requireDnsAsCn(value: boolean | cdktn.IResolvable) {
        this._requireDnsAsCn = value;
    }
    public resetRequireDnsAsCn() {
        this._requireDnsAsCn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireDnsAsCnInput() {
        return this._requireDnsAsCn;
    }

    // require_email - computed: true, optional: true, required: false
    private _requireEmail?: boolean | cdktn.IResolvable; 
    public get requireEmail() {
        return this.getBooleanAttribute('require_email');
    }
    public set requireEmail(value: boolean | cdktn.IResolvable) {
        this._requireEmail = value;
    }
    public resetRequireEmail() {
        this._requireEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireEmailInput() {
        return this._requireEmail;
    }

    // san_require_directory_guid - computed: true, optional: true, required: false
    private _sanRequireDirectoryGuid?: boolean | cdktn.IResolvable; 
    public get sanRequireDirectoryGuid() {
        return this.getBooleanAttribute('san_require_directory_guid');
    }
    public set sanRequireDirectoryGuid(value: boolean | cdktn.IResolvable) {
        this._sanRequireDirectoryGuid = value;
    }
    public resetSanRequireDirectoryGuid() {
        this._sanRequireDirectoryGuid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireDirectoryGuidInput() {
        return this._sanRequireDirectoryGuid;
    }

    // san_require_dns - computed: true, optional: true, required: false
    private _sanRequireDns?: boolean | cdktn.IResolvable; 
    public get sanRequireDns() {
        return this.getBooleanAttribute('san_require_dns');
    }
    public set sanRequireDns(value: boolean | cdktn.IResolvable) {
        this._sanRequireDns = value;
    }
    public resetSanRequireDns() {
        this._sanRequireDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireDnsInput() {
        return this._sanRequireDns;
    }

    // san_require_domain_dns - computed: true, optional: true, required: false
    private _sanRequireDomainDns?: boolean | cdktn.IResolvable; 
    public get sanRequireDomainDns() {
        return this.getBooleanAttribute('san_require_domain_dns');
    }
    public set sanRequireDomainDns(value: boolean | cdktn.IResolvable) {
        this._sanRequireDomainDns = value;
    }
    public resetSanRequireDomainDns() {
        this._sanRequireDomainDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireDomainDnsInput() {
        return this._sanRequireDomainDns;
    }

    // san_require_email - computed: true, optional: true, required: false
    private _sanRequireEmail?: boolean | cdktn.IResolvable; 
    public get sanRequireEmail() {
        return this.getBooleanAttribute('san_require_email');
    }
    public set sanRequireEmail(value: boolean | cdktn.IResolvable) {
        this._sanRequireEmail = value;
    }
    public resetSanRequireEmail() {
        this._sanRequireEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireEmailInput() {
        return this._sanRequireEmail;
    }

    // san_require_spn - computed: true, optional: true, required: false
    private _sanRequireSpn?: boolean | cdktn.IResolvable; 
    public get sanRequireSpn() {
        return this.getBooleanAttribute('san_require_spn');
    }
    public set sanRequireSpn(value: boolean | cdktn.IResolvable) {
        this._sanRequireSpn = value;
    }
    public resetSanRequireSpn() {
        this._sanRequireSpn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireSpnInput() {
        return this._sanRequireSpn;
    }

    // san_require_upn - computed: true, optional: true, required: false
    private _sanRequireUpn?: boolean | cdktn.IResolvable; 
    public get sanRequireUpn() {
        return this.getBooleanAttribute('san_require_upn');
    }
    public set sanRequireUpn(value: boolean | cdktn.IResolvable) {
        this._sanRequireUpn = value;
    }
    public resetSanRequireUpn() {
        this._sanRequireUpn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireUpnInput() {
        return this._sanRequireUpn;
    }
}
export interface TemplateV2Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#certificate_validity CcTemplate#certificate_validity}
    */
    readonly certificateValidity?: CertificateValidityProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#enrollment_flags CcTemplate#enrollment_flags}
    */
    readonly enrollmentFlags?: EnrollmentFlagsV2Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#extensions CcTemplate#extensions}
    */
    readonly extensions?: ExtensionsV2Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#general_flags CcTemplate#general_flags}
    */
    readonly generalFlags?: GeneralFlagsV2Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#private_key_attributes CcTemplate#private_key_attributes}
    */
    readonly privateKeyAttributes?: PrivateKeyAttributesV2Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#private_key_flags CcTemplate#private_key_flags}
    */
    readonly privateKeyFlags?: PrivateKeyFlagsV2Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#subject_name_flags CcTemplate#subject_name_flags}
    */
    readonly subjectNameFlags?: SubjectNameFlagsV2Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#superseded_templates CcTemplate#superseded_templates}
    */
    readonly supersededTemplates?: string[];
}
export class TemplateV2PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TemplateV2Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateValidity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateValidity = this._certificateValidity?.internalValue;
        }
        if (this._enrollmentFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.enrollmentFlags = this._enrollmentFlags?.internalValue;
        }
        if (this._extensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extensions = this._extensions?.internalValue;
        }
        if (this._generalFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.generalFlags = this._generalFlags?.internalValue;
        }
        if (this._privateKeyAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKeyAttributes = this._privateKeyAttributes?.internalValue;
        }
        if (this._privateKeyFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKeyFlags = this._privateKeyFlags?.internalValue;
        }
        if (this._subjectNameFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectNameFlags = this._subjectNameFlags?.internalValue;
        }
        if (this._supersededTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.supersededTemplates = this._supersededTemplates;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TemplateV2Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateValidity.internalValue = undefined;
            this._enrollmentFlags.internalValue = undefined;
            this._extensions.internalValue = undefined;
            this._generalFlags.internalValue = undefined;
            this._privateKeyAttributes.internalValue = undefined;
            this._privateKeyFlags.internalValue = undefined;
            this._subjectNameFlags.internalValue = undefined;
            this._supersededTemplates = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateValidity.internalValue = value.certificateValidity;
            this._enrollmentFlags.internalValue = value.enrollmentFlags;
            this._extensions.internalValue = value.extensions;
            this._generalFlags.internalValue = value.generalFlags;
            this._privateKeyAttributes.internalValue = value.privateKeyAttributes;
            this._privateKeyFlags.internalValue = value.privateKeyFlags;
            this._subjectNameFlags.internalValue = value.subjectNameFlags;
            this._supersededTemplates = value.supersededTemplates;
        }
    }

    // certificate_validity - computed: true, optional: true, required: false
    private _certificateValidity = new CertificateValidityPropertyOutputReference(this, "certificate_validity");
    public get certificateValidity() {
        return this._certificateValidity;
    }
    public putCertificateValidity(value: CertificateValidityProperty) {
        this._certificateValidity.internalValue = value;
    }
    public resetCertificateValidity() {
        this._certificateValidity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateValidityInput() {
        return this._certificateValidity.internalValue;
    }

    // enrollment_flags - computed: true, optional: true, required: false
    private _enrollmentFlags = new EnrollmentFlagsV2PropertyOutputReference(this, "enrollment_flags");
    public get enrollmentFlags() {
        return this._enrollmentFlags;
    }
    public putEnrollmentFlags(value: EnrollmentFlagsV2Property) {
        this._enrollmentFlags.internalValue = value;
    }
    public resetEnrollmentFlags() {
        this._enrollmentFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enrollmentFlagsInput() {
        return this._enrollmentFlags.internalValue;
    }

    // extensions - computed: true, optional: true, required: false
    private _extensions = new ExtensionsV2PropertyOutputReference(this, "extensions");
    public get extensions() {
        return this._extensions;
    }
    public putExtensions(value: ExtensionsV2Property) {
        this._extensions.internalValue = value;
    }
    public resetExtensions() {
        this._extensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extensionsInput() {
        return this._extensions.internalValue;
    }

    // general_flags - computed: true, optional: true, required: false
    private _generalFlags = new GeneralFlagsV2PropertyOutputReference(this, "general_flags");
    public get generalFlags() {
        return this._generalFlags;
    }
    public putGeneralFlags(value: GeneralFlagsV2Property) {
        this._generalFlags.internalValue = value;
    }
    public resetGeneralFlags() {
        this._generalFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generalFlagsInput() {
        return this._generalFlags.internalValue;
    }

    // private_key_attributes - computed: true, optional: true, required: false
    private _privateKeyAttributes = new PrivateKeyAttributesV2PropertyOutputReference(this, "private_key_attributes");
    public get privateKeyAttributes() {
        return this._privateKeyAttributes;
    }
    public putPrivateKeyAttributes(value: PrivateKeyAttributesV2Property) {
        this._privateKeyAttributes.internalValue = value;
    }
    public resetPrivateKeyAttributes() {
        this._privateKeyAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyAttributesInput() {
        return this._privateKeyAttributes.internalValue;
    }

    // private_key_flags - computed: true, optional: true, required: false
    private _privateKeyFlags = new PrivateKeyFlagsV2PropertyOutputReference(this, "private_key_flags");
    public get privateKeyFlags() {
        return this._privateKeyFlags;
    }
    public putPrivateKeyFlags(value: PrivateKeyFlagsV2Property) {
        this._privateKeyFlags.internalValue = value;
    }
    public resetPrivateKeyFlags() {
        this._privateKeyFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyFlagsInput() {
        return this._privateKeyFlags.internalValue;
    }

    // subject_name_flags - computed: true, optional: true, required: false
    private _subjectNameFlags = new SubjectNameFlagsV2PropertyOutputReference(this, "subject_name_flags");
    public get subjectNameFlags() {
        return this._subjectNameFlags;
    }
    public putSubjectNameFlags(value: SubjectNameFlagsV2Property) {
        this._subjectNameFlags.internalValue = value;
    }
    public resetSubjectNameFlags() {
        this._subjectNameFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectNameFlagsInput() {
        return this._subjectNameFlags.internalValue;
    }

    // superseded_templates - computed: true, optional: true, required: false
    private _supersededTemplates?: string[]; 
    public get supersededTemplates() {
        return this.getListAttribute('superseded_templates');
    }
    public set supersededTemplates(value: string[]) {
        this._supersededTemplates = value;
    }
    public resetSupersededTemplates() {
        this._supersededTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supersededTemplatesInput() {
        return this._supersededTemplates;
    }
}
export interface DefinitionTemplateV3CertificateValidityRenewalPeriodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period CcTemplate#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period_type CcTemplate#period_type}
    */
    readonly periodType?: string;
}
export class DefinitionTemplateV3CertificateValidityRenewalPeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV3CertificateValidityRenewalPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._periodType !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodType = this._periodType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV3CertificateValidityRenewalPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._period = undefined;
            this._periodType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._period = value.period;
            this._periodType = value.periodType;
        }
    }

    // period - computed: true, optional: true, required: false
    private _period?: number; 
    public get period() {
        return this.getNumberAttribute('period');
    }
    public set period(value: number) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // period_type - computed: true, optional: true, required: false
    private _periodType?: string; 
    public get periodType() {
        return this.getStringAttribute('period_type');
    }
    public set periodType(value: string) {
        this._periodType = value;
    }
    public resetPeriodType() {
        this._periodType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodTypeInput() {
        return this._periodType;
    }
}
export interface DefinitionTemplateV3CertificateValidityValidityPeriodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period CcTemplate#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period_type CcTemplate#period_type}
    */
    readonly periodType?: string;
}
export class DefinitionTemplateV3CertificateValidityValidityPeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV3CertificateValidityValidityPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._periodType !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodType = this._periodType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV3CertificateValidityValidityPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._period = undefined;
            this._periodType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._period = value.period;
            this._periodType = value.periodType;
        }
    }

    // period - computed: true, optional: true, required: false
    private _period?: number; 
    public get period() {
        return this.getNumberAttribute('period');
    }
    public set period(value: number) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // period_type - computed: true, optional: true, required: false
    private _periodType?: string; 
    public get periodType() {
        return this.getStringAttribute('period_type');
    }
    public set periodType(value: string) {
        this._periodType = value;
    }
    public resetPeriodType() {
        this._periodType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodTypeInput() {
        return this._periodType;
    }
}
export interface DefinitionTemplateV3CertificateValidityProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#renewal_period CcTemplate#renewal_period}
    */
    readonly renewalPeriod?: DefinitionTemplateV3CertificateValidityRenewalPeriodProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#validity_period CcTemplate#validity_period}
    */
    readonly validityPeriod?: DefinitionTemplateV3CertificateValidityValidityPeriodProperty;
}
export class DefinitionTemplateV3CertificateValidityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV3CertificateValidityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._renewalPeriod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.renewalPeriod = this._renewalPeriod?.internalValue;
        }
        if (this._validityPeriod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validityPeriod = this._validityPeriod?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV3CertificateValidityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._renewalPeriod.internalValue = undefined;
            this._validityPeriod.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._renewalPeriod.internalValue = value.renewalPeriod;
            this._validityPeriod.internalValue = value.validityPeriod;
        }
    }

    // renewal_period - computed: true, optional: true, required: false
    private _renewalPeriod = new DefinitionTemplateV3CertificateValidityRenewalPeriodPropertyOutputReference(this, "renewal_period");
    public get renewalPeriod() {
        return this._renewalPeriod;
    }
    public putRenewalPeriod(value: DefinitionTemplateV3CertificateValidityRenewalPeriodProperty) {
        this._renewalPeriod.internalValue = value;
    }
    public resetRenewalPeriod() {
        this._renewalPeriod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renewalPeriodInput() {
        return this._renewalPeriod.internalValue;
    }

    // validity_period - computed: true, optional: true, required: false
    private _validityPeriod = new DefinitionTemplateV3CertificateValidityValidityPeriodPropertyOutputReference(this, "validity_period");
    public get validityPeriod() {
        return this._validityPeriod;
    }
    public putValidityPeriod(value: DefinitionTemplateV3CertificateValidityValidityPeriodProperty) {
        this._validityPeriod.internalValue = value;
    }
    public resetValidityPeriod() {
        this._validityPeriod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validityPeriodInput() {
        return this._validityPeriod.internalValue;
    }
}
export interface EnrollmentFlagsV3Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#enable_key_reuse_on_nt_token_keyset_storage_full CcTemplate#enable_key_reuse_on_nt_token_keyset_storage_full}
    */
    readonly enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#include_symmetric_algorithms CcTemplate#include_symmetric_algorithms}
    */
    readonly includeSymmetricAlgorithms?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#no_security_extension CcTemplate#no_security_extension}
    */
    readonly noSecurityExtension?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#remove_invalid_certificate_from_personal_store CcTemplate#remove_invalid_certificate_from_personal_store}
    */
    readonly removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#user_interaction_required CcTemplate#user_interaction_required}
    */
    readonly userInteractionRequired?: boolean | cdktn.IResolvable;
}
export class EnrollmentFlagsV3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnrollmentFlagsV3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableKeyReuseOnNtTokenKeysetStorageFull !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableKeyReuseOnNtTokenKeysetStorageFull = this._enableKeyReuseOnNtTokenKeysetStorageFull;
        }
        if (this._includeSymmetricAlgorithms !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeSymmetricAlgorithms = this._includeSymmetricAlgorithms;
        }
        if (this._noSecurityExtension !== undefined) {
            hasAnyValues = true;
            internalValueResult.noSecurityExtension = this._noSecurityExtension;
        }
        if (this._removeInvalidCertificateFromPersonalStore !== undefined) {
            hasAnyValues = true;
            internalValueResult.removeInvalidCertificateFromPersonalStore = this._removeInvalidCertificateFromPersonalStore;
        }
        if (this._userInteractionRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.userInteractionRequired = this._userInteractionRequired;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnrollmentFlagsV3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
            this._includeSymmetricAlgorithms = undefined;
            this._noSecurityExtension = undefined;
            this._removeInvalidCertificateFromPersonalStore = undefined;
            this._userInteractionRequired = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableKeyReuseOnNtTokenKeysetStorageFull = value.enableKeyReuseOnNtTokenKeysetStorageFull;
            this._includeSymmetricAlgorithms = value.includeSymmetricAlgorithms;
            this._noSecurityExtension = value.noSecurityExtension;
            this._removeInvalidCertificateFromPersonalStore = value.removeInvalidCertificateFromPersonalStore;
            this._userInteractionRequired = value.userInteractionRequired;
        }
    }

    // enable_key_reuse_on_nt_token_keyset_storage_full - computed: true, optional: true, required: false
    private _enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable; 
    public get enableKeyReuseOnNtTokenKeysetStorageFull() {
        return this.getBooleanAttribute('enable_key_reuse_on_nt_token_keyset_storage_full');
    }
    public set enableKeyReuseOnNtTokenKeysetStorageFull(value: boolean | cdktn.IResolvable) {
        this._enableKeyReuseOnNtTokenKeysetStorageFull = value;
    }
    public resetEnableKeyReuseOnNtTokenKeysetStorageFull() {
        this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableKeyReuseOnNtTokenKeysetStorageFullInput() {
        return this._enableKeyReuseOnNtTokenKeysetStorageFull;
    }

    // include_symmetric_algorithms - computed: true, optional: true, required: false
    private _includeSymmetricAlgorithms?: boolean | cdktn.IResolvable; 
    public get includeSymmetricAlgorithms() {
        return this.getBooleanAttribute('include_symmetric_algorithms');
    }
    public set includeSymmetricAlgorithms(value: boolean | cdktn.IResolvable) {
        this._includeSymmetricAlgorithms = value;
    }
    public resetIncludeSymmetricAlgorithms() {
        this._includeSymmetricAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeSymmetricAlgorithmsInput() {
        return this._includeSymmetricAlgorithms;
    }

    // no_security_extension - computed: true, optional: true, required: false
    private _noSecurityExtension?: boolean | cdktn.IResolvable; 
    public get noSecurityExtension() {
        return this.getBooleanAttribute('no_security_extension');
    }
    public set noSecurityExtension(value: boolean | cdktn.IResolvable) {
        this._noSecurityExtension = value;
    }
    public resetNoSecurityExtension() {
        this._noSecurityExtension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noSecurityExtensionInput() {
        return this._noSecurityExtension;
    }

    // remove_invalid_certificate_from_personal_store - computed: true, optional: true, required: false
    private _removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable; 
    public get removeInvalidCertificateFromPersonalStore() {
        return this.getBooleanAttribute('remove_invalid_certificate_from_personal_store');
    }
    public set removeInvalidCertificateFromPersonalStore(value: boolean | cdktn.IResolvable) {
        this._removeInvalidCertificateFromPersonalStore = value;
    }
    public resetRemoveInvalidCertificateFromPersonalStore() {
        this._removeInvalidCertificateFromPersonalStore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeInvalidCertificateFromPersonalStoreInput() {
        return this._removeInvalidCertificateFromPersonalStore;
    }

    // user_interaction_required - computed: true, optional: true, required: false
    private _userInteractionRequired?: boolean | cdktn.IResolvable; 
    public get userInteractionRequired() {
        return this.getBooleanAttribute('user_interaction_required');
    }
    public set userInteractionRequired(value: boolean | cdktn.IResolvable) {
        this._userInteractionRequired = value;
    }
    public resetUserInteractionRequired() {
        this._userInteractionRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInteractionRequiredInput() {
        return this._userInteractionRequired;
    }
}
export interface DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#policy_object_identifier CcTemplate#policy_object_identifier}
    */
    readonly policyObjectIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#policy_type CcTemplate#policy_type}
    */
    readonly policyType?: string;
}
export class DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policyObjectIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyObjectIdentifier = this._policyObjectIdentifier;
        }
        if (this._policyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyType = this._policyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policyObjectIdentifier = undefined;
            this._policyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policyObjectIdentifier = value.policyObjectIdentifier;
            this._policyType = value.policyType;
        }
    }

    // policy_object_identifier - computed: true, optional: true, required: false
    private _policyObjectIdentifier?: string; 
    public get policyObjectIdentifier() {
        return this.getStringAttribute('policy_object_identifier');
    }
    public set policyObjectIdentifier(value: string) {
        this._policyObjectIdentifier = value;
    }
    public resetPolicyObjectIdentifier() {
        this._policyObjectIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyObjectIdentifierInput() {
        return this._policyObjectIdentifier;
    }

    // policy_type - computed: true, optional: true, required: false
    private _policyType?: string; 
    public get policyType() {
        return this.getStringAttribute('policy_type');
    }
    public set policyType(value: string) {
        this._policyType = value;
    }
    public resetPolicyType() {
        this._policyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTypeInput() {
        return this._policyType;
    }
}

export class DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesPropertyList extends cdktn.ComplexList {
    public internalValue? : DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesProperty[] | cdktn.IResolvable

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
    public get(index: number): DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesPropertyOutputReference {
        return new DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DefinitionTemplateV3ExtensionsApplicationPoliciesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#critical CcTemplate#critical}
    */
    readonly critical?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#policies CcTemplate#policies}
    */
    readonly policies?: DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesProperty[] | cdktn.IResolvable;
}
export class DefinitionTemplateV3ExtensionsApplicationPoliciesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV3ExtensionsApplicationPoliciesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._critical !== undefined) {
            hasAnyValues = true;
            internalValueResult.critical = this._critical;
        }
        if (this._policies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policies = this._policies?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV3ExtensionsApplicationPoliciesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._critical = undefined;
            this._policies.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._critical = value.critical;
            this._policies.internalValue = value.policies;
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

    // policies - computed: true, optional: true, required: false
    private _policies = new DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesPropertyList(this, "policies", false);
    public get policies() {
        return this._policies;
    }
    public putPolicies(value: DefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesProperty[] | cdktn.IResolvable) {
        this._policies.internalValue = value;
    }
    public resetPolicies() {
        this._policies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policiesInput() {
        return this._policies.internalValue;
    }
}
export interface DefinitionTemplateV3ExtensionsKeyUsageUsageFlagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#data_encipherment CcTemplate#data_encipherment}
    */
    readonly dataEncipherment?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#digital_signature CcTemplate#digital_signature}
    */
    readonly digitalSignature?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_agreement CcTemplate#key_agreement}
    */
    readonly keyAgreement?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_encipherment CcTemplate#key_encipherment}
    */
    readonly keyEncipherment?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#non_repudiation CcTemplate#non_repudiation}
    */
    readonly nonRepudiation?: boolean | cdktn.IResolvable;
}
export class DefinitionTemplateV3ExtensionsKeyUsageUsageFlagsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV3ExtensionsKeyUsageUsageFlagsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataEncipherment !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataEncipherment = this._dataEncipherment;
        }
        if (this._digitalSignature !== undefined) {
            hasAnyValues = true;
            internalValueResult.digitalSignature = this._digitalSignature;
        }
        if (this._keyAgreement !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyAgreement = this._keyAgreement;
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

    public set internalValue(value: DefinitionTemplateV3ExtensionsKeyUsageUsageFlagsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataEncipherment = undefined;
            this._digitalSignature = undefined;
            this._keyAgreement = undefined;
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
            this._dataEncipherment = value.dataEncipherment;
            this._digitalSignature = value.digitalSignature;
            this._keyAgreement = value.keyAgreement;
            this._keyEncipherment = value.keyEncipherment;
            this._nonRepudiation = value.nonRepudiation;
        }
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
export interface DefinitionTemplateV3ExtensionsKeyUsageProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#critical CcTemplate#critical}
    */
    readonly critical?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#usage_flags CcTemplate#usage_flags}
    */
    readonly usageFlags?: DefinitionTemplateV3ExtensionsKeyUsageUsageFlagsProperty;
}
export class DefinitionTemplateV3ExtensionsKeyUsagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV3ExtensionsKeyUsageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._critical !== undefined) {
            hasAnyValues = true;
            internalValueResult.critical = this._critical;
        }
        if (this._usageFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.usageFlags = this._usageFlags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV3ExtensionsKeyUsageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._critical = undefined;
            this._usageFlags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._critical = value.critical;
            this._usageFlags.internalValue = value.usageFlags;
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

    // usage_flags - computed: true, optional: true, required: false
    private _usageFlags = new DefinitionTemplateV3ExtensionsKeyUsageUsageFlagsPropertyOutputReference(this, "usage_flags");
    public get usageFlags() {
        return this._usageFlags;
    }
    public putUsageFlags(value: DefinitionTemplateV3ExtensionsKeyUsageUsageFlagsProperty) {
        this._usageFlags.internalValue = value;
    }
    public resetUsageFlags() {
        this._usageFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usageFlagsInput() {
        return this._usageFlags.internalValue;
    }
}
export interface ExtensionsV3Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#application_policies CcTemplate#application_policies}
    */
    readonly applicationPolicies?: DefinitionTemplateV3ExtensionsApplicationPoliciesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_usage CcTemplate#key_usage}
    */
    readonly keyUsage?: DefinitionTemplateV3ExtensionsKeyUsageProperty;
}
export class ExtensionsV3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExtensionsV3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationPolicies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationPolicies = this._applicationPolicies?.internalValue;
        }
        if (this._keyUsage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyUsage = this._keyUsage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExtensionsV3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationPolicies.internalValue = undefined;
            this._keyUsage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationPolicies.internalValue = value.applicationPolicies;
            this._keyUsage.internalValue = value.keyUsage;
        }
    }

    // application_policies - computed: true, optional: true, required: false
    private _applicationPolicies = new DefinitionTemplateV3ExtensionsApplicationPoliciesPropertyOutputReference(this, "application_policies");
    public get applicationPolicies() {
        return this._applicationPolicies;
    }
    public putApplicationPolicies(value: DefinitionTemplateV3ExtensionsApplicationPoliciesProperty) {
        this._applicationPolicies.internalValue = value;
    }
    public resetApplicationPolicies() {
        this._applicationPolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationPoliciesInput() {
        return this._applicationPolicies.internalValue;
    }

    // key_usage - computed: true, optional: true, required: false
    private _keyUsage = new DefinitionTemplateV3ExtensionsKeyUsagePropertyOutputReference(this, "key_usage");
    public get keyUsage() {
        return this._keyUsage;
    }
    public putKeyUsage(value: DefinitionTemplateV3ExtensionsKeyUsageProperty) {
        this._keyUsage.internalValue = value;
    }
    public resetKeyUsage() {
        this._keyUsage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyUsageInput() {
        return this._keyUsage.internalValue;
    }
}
export interface GeneralFlagsV3Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#auto_enrollment CcTemplate#auto_enrollment}
    */
    readonly autoEnrollment?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#machine_type CcTemplate#machine_type}
    */
    readonly machineType?: boolean | cdktn.IResolvable;
}
export class GeneralFlagsV3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GeneralFlagsV3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoEnrollment !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoEnrollment = this._autoEnrollment;
        }
        if (this._machineType !== undefined) {
            hasAnyValues = true;
            internalValueResult.machineType = this._machineType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GeneralFlagsV3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoEnrollment = undefined;
            this._machineType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoEnrollment = value.autoEnrollment;
            this._machineType = value.machineType;
        }
    }

    // auto_enrollment - computed: true, optional: true, required: false
    private _autoEnrollment?: boolean | cdktn.IResolvable; 
    public get autoEnrollment() {
        return this.getBooleanAttribute('auto_enrollment');
    }
    public set autoEnrollment(value: boolean | cdktn.IResolvable) {
        this._autoEnrollment = value;
    }
    public resetAutoEnrollment() {
        this._autoEnrollment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoEnrollmentInput() {
        return this._autoEnrollment;
    }

    // machine_type - computed: true, optional: true, required: false
    private _machineType?: boolean | cdktn.IResolvable; 
    public get machineType() {
        return this.getBooleanAttribute('machine_type');
    }
    public set machineType(value: boolean | cdktn.IResolvable) {
        this._machineType = value;
    }
    public resetMachineType() {
        this._machineType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get machineTypeInput() {
        return this._machineType;
    }
}
export interface KeyUsagePropertyFlagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#decrypt CcTemplate#decrypt}
    */
    readonly decrypt?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_agreement CcTemplate#key_agreement}
    */
    readonly keyAgreement?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#sign CcTemplate#sign}
    */
    readonly sign?: boolean | cdktn.IResolvable;
}
export class KeyUsagePropertyFlagsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KeyUsagePropertyFlagsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._decrypt !== undefined) {
            hasAnyValues = true;
            internalValueResult.decrypt = this._decrypt;
        }
        if (this._keyAgreement !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyAgreement = this._keyAgreement;
        }
        if (this._sign !== undefined) {
            hasAnyValues = true;
            internalValueResult.sign = this._sign;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyUsagePropertyFlagsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._decrypt = undefined;
            this._keyAgreement = undefined;
            this._sign = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._decrypt = value.decrypt;
            this._keyAgreement = value.keyAgreement;
            this._sign = value.sign;
        }
    }

    // decrypt - computed: true, optional: true, required: false
    private _decrypt?: boolean | cdktn.IResolvable; 
    public get decrypt() {
        return this.getBooleanAttribute('decrypt');
    }
    public set decrypt(value: boolean | cdktn.IResolvable) {
        this._decrypt = value;
    }
    public resetDecrypt() {
        this._decrypt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptInput() {
        return this._decrypt;
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

    // sign - computed: true, optional: true, required: false
    private _sign?: boolean | cdktn.IResolvable; 
    public get sign() {
        return this.getBooleanAttribute('sign');
    }
    public set sign(value: boolean | cdktn.IResolvable) {
        this._sign = value;
    }
    public resetSign() {
        this._sign = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signInput() {
        return this._sign;
    }
}
export interface KeyUsagePropertyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#property_flags CcTemplate#property_flags}
    */
    readonly propertyFlags?: KeyUsagePropertyFlagsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#property_type CcTemplate#property_type}
    */
    readonly propertyType?: string;
}
export class KeyUsagePropertyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KeyUsagePropertyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._propertyFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyFlags = this._propertyFlags?.internalValue;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyUsagePropertyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._propertyFlags.internalValue = undefined;
            this._propertyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._propertyFlags.internalValue = value.propertyFlags;
            this._propertyType = value.propertyType;
        }
    }

    // property_flags - computed: true, optional: true, required: false
    private _propertyFlags = new KeyUsagePropertyFlagsPropertyOutputReference(this, "property_flags");
    public get propertyFlags() {
        return this._propertyFlags;
    }
    public putPropertyFlags(value: KeyUsagePropertyFlagsProperty) {
        this._propertyFlags.internalValue = value;
    }
    public resetPropertyFlags() {
        this._propertyFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyFlagsInput() {
        return this._propertyFlags.internalValue;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }
}
export interface PrivateKeyAttributesV3Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#algorithm CcTemplate#algorithm}
    */
    readonly algorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#crypto_providers CcTemplate#crypto_providers}
    */
    readonly cryptoProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_spec CcTemplate#key_spec}
    */
    readonly keySpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_usage_property CcTemplate#key_usage_property}
    */
    readonly keyUsageProperty?: KeyUsagePropertyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#minimal_key_length CcTemplate#minimal_key_length}
    */
    readonly minimalKeyLength?: number;
}
export class PrivateKeyAttributesV3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateKeyAttributesV3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._algorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithm = this._algorithm;
        }
        if (this._cryptoProviders !== undefined) {
            hasAnyValues = true;
            internalValueResult.cryptoProviders = this._cryptoProviders;
        }
        if (this._keySpec !== undefined) {
            hasAnyValues = true;
            internalValueResult.keySpec = this._keySpec;
        }
        if (this._keyUsageProperty?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyUsageProperty = this._keyUsageProperty?.internalValue;
        }
        if (this._minimalKeyLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimalKeyLength = this._minimalKeyLength;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateKeyAttributesV3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithm = undefined;
            this._cryptoProviders = undefined;
            this._keySpec = undefined;
            this._keyUsageProperty.internalValue = undefined;
            this._minimalKeyLength = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithm = value.algorithm;
            this._cryptoProviders = value.cryptoProviders;
            this._keySpec = value.keySpec;
            this._keyUsageProperty.internalValue = value.keyUsageProperty;
            this._minimalKeyLength = value.minimalKeyLength;
        }
    }

    // algorithm - computed: true, optional: true, required: false
    private _algorithm?: string; 
    public get algorithm() {
        return this.getStringAttribute('algorithm');
    }
    public set algorithm(value: string) {
        this._algorithm = value;
    }
    public resetAlgorithm() {
        this._algorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get algorithmInput() {
        return this._algorithm;
    }

    // crypto_providers - computed: true, optional: true, required: false
    private _cryptoProviders?: string[]; 
    public get cryptoProviders() {
        return this.getListAttribute('crypto_providers');
    }
    public set cryptoProviders(value: string[]) {
        this._cryptoProviders = value;
    }
    public resetCryptoProviders() {
        this._cryptoProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cryptoProvidersInput() {
        return this._cryptoProviders;
    }

    // key_spec - computed: true, optional: true, required: false
    private _keySpec?: string; 
    public get keySpec() {
        return this.getStringAttribute('key_spec');
    }
    public set keySpec(value: string) {
        this._keySpec = value;
    }
    public resetKeySpec() {
        this._keySpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keySpecInput() {
        return this._keySpec;
    }

    // key_usage_property - computed: true, optional: true, required: false
    private _keyUsageProperty = new KeyUsagePropertyPropertyOutputReference(this, "key_usage_property");
    public get keyUsageProperty() {
        return this._keyUsageProperty;
    }
    public putKeyUsageProperty(value: KeyUsagePropertyProperty) {
        this._keyUsageProperty.internalValue = value;
    }
    public resetKeyUsageProperty() {
        this._keyUsageProperty.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyUsagePropertyInput() {
        return this._keyUsageProperty.internalValue;
    }

    // minimal_key_length - computed: true, optional: true, required: false
    private _minimalKeyLength?: number; 
    public get minimalKeyLength() {
        return this.getNumberAttribute('minimal_key_length');
    }
    public set minimalKeyLength(value: number) {
        this._minimalKeyLength = value;
    }
    public resetMinimalKeyLength() {
        this._minimalKeyLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimalKeyLengthInput() {
        return this._minimalKeyLength;
    }
}
export interface PrivateKeyFlagsV3Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#client_version CcTemplate#client_version}
    */
    readonly clientVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#exportable_key CcTemplate#exportable_key}
    */
    readonly exportableKey?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_alternate_signature_algorithm CcTemplate#require_alternate_signature_algorithm}
    */
    readonly requireAlternateSignatureAlgorithm?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#strong_key_protection_required CcTemplate#strong_key_protection_required}
    */
    readonly strongKeyProtectionRequired?: boolean | cdktn.IResolvable;
}
export class PrivateKeyFlagsV3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateKeyFlagsV3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientVersion = this._clientVersion;
        }
        if (this._exportableKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportableKey = this._exportableKey;
        }
        if (this._requireAlternateSignatureAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireAlternateSignatureAlgorithm = this._requireAlternateSignatureAlgorithm;
        }
        if (this._strongKeyProtectionRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.strongKeyProtectionRequired = this._strongKeyProtectionRequired;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateKeyFlagsV3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientVersion = undefined;
            this._exportableKey = undefined;
            this._requireAlternateSignatureAlgorithm = undefined;
            this._strongKeyProtectionRequired = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientVersion = value.clientVersion;
            this._exportableKey = value.exportableKey;
            this._requireAlternateSignatureAlgorithm = value.requireAlternateSignatureAlgorithm;
            this._strongKeyProtectionRequired = value.strongKeyProtectionRequired;
        }
    }

    // client_version - computed: true, optional: true, required: false
    private _clientVersion?: string; 
    public get clientVersion() {
        return this.getStringAttribute('client_version');
    }
    public set clientVersion(value: string) {
        this._clientVersion = value;
    }
    public resetClientVersion() {
        this._clientVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientVersionInput() {
        return this._clientVersion;
    }

    // exportable_key - computed: true, optional: true, required: false
    private _exportableKey?: boolean | cdktn.IResolvable; 
    public get exportableKey() {
        return this.getBooleanAttribute('exportable_key');
    }
    public set exportableKey(value: boolean | cdktn.IResolvable) {
        this._exportableKey = value;
    }
    public resetExportableKey() {
        this._exportableKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportableKeyInput() {
        return this._exportableKey;
    }

    // require_alternate_signature_algorithm - computed: true, optional: true, required: false
    private _requireAlternateSignatureAlgorithm?: boolean | cdktn.IResolvable; 
    public get requireAlternateSignatureAlgorithm() {
        return this.getBooleanAttribute('require_alternate_signature_algorithm');
    }
    public set requireAlternateSignatureAlgorithm(value: boolean | cdktn.IResolvable) {
        this._requireAlternateSignatureAlgorithm = value;
    }
    public resetRequireAlternateSignatureAlgorithm() {
        this._requireAlternateSignatureAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireAlternateSignatureAlgorithmInput() {
        return this._requireAlternateSignatureAlgorithm;
    }

    // strong_key_protection_required - computed: true, optional: true, required: false
    private _strongKeyProtectionRequired?: boolean | cdktn.IResolvable; 
    public get strongKeyProtectionRequired() {
        return this.getBooleanAttribute('strong_key_protection_required');
    }
    public set strongKeyProtectionRequired(value: boolean | cdktn.IResolvable) {
        this._strongKeyProtectionRequired = value;
    }
    public resetStrongKeyProtectionRequired() {
        this._strongKeyProtectionRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strongKeyProtectionRequiredInput() {
        return this._strongKeyProtectionRequired;
    }
}
export interface SubjectNameFlagsV3Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_common_name CcTemplate#require_common_name}
    */
    readonly requireCommonName?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_directory_path CcTemplate#require_directory_path}
    */
    readonly requireDirectoryPath?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_dns_as_cn CcTemplate#require_dns_as_cn}
    */
    readonly requireDnsAsCn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_email CcTemplate#require_email}
    */
    readonly requireEmail?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_directory_guid CcTemplate#san_require_directory_guid}
    */
    readonly sanRequireDirectoryGuid?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_dns CcTemplate#san_require_dns}
    */
    readonly sanRequireDns?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_domain_dns CcTemplate#san_require_domain_dns}
    */
    readonly sanRequireDomainDns?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_email CcTemplate#san_require_email}
    */
    readonly sanRequireEmail?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_spn CcTemplate#san_require_spn}
    */
    readonly sanRequireSpn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_upn CcTemplate#san_require_upn}
    */
    readonly sanRequireUpn?: boolean | cdktn.IResolvable;
}
export class SubjectNameFlagsV3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SubjectNameFlagsV3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._requireCommonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireCommonName = this._requireCommonName;
        }
        if (this._requireDirectoryPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireDirectoryPath = this._requireDirectoryPath;
        }
        if (this._requireDnsAsCn !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireDnsAsCn = this._requireDnsAsCn;
        }
        if (this._requireEmail !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireEmail = this._requireEmail;
        }
        if (this._sanRequireDirectoryGuid !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireDirectoryGuid = this._sanRequireDirectoryGuid;
        }
        if (this._sanRequireDns !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireDns = this._sanRequireDns;
        }
        if (this._sanRequireDomainDns !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireDomainDns = this._sanRequireDomainDns;
        }
        if (this._sanRequireEmail !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireEmail = this._sanRequireEmail;
        }
        if (this._sanRequireSpn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireSpn = this._sanRequireSpn;
        }
        if (this._sanRequireUpn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireUpn = this._sanRequireUpn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubjectNameFlagsV3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._requireCommonName = undefined;
            this._requireDirectoryPath = undefined;
            this._requireDnsAsCn = undefined;
            this._requireEmail = undefined;
            this._sanRequireDirectoryGuid = undefined;
            this._sanRequireDns = undefined;
            this._sanRequireDomainDns = undefined;
            this._sanRequireEmail = undefined;
            this._sanRequireSpn = undefined;
            this._sanRequireUpn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._requireCommonName = value.requireCommonName;
            this._requireDirectoryPath = value.requireDirectoryPath;
            this._requireDnsAsCn = value.requireDnsAsCn;
            this._requireEmail = value.requireEmail;
            this._sanRequireDirectoryGuid = value.sanRequireDirectoryGuid;
            this._sanRequireDns = value.sanRequireDns;
            this._sanRequireDomainDns = value.sanRequireDomainDns;
            this._sanRequireEmail = value.sanRequireEmail;
            this._sanRequireSpn = value.sanRequireSpn;
            this._sanRequireUpn = value.sanRequireUpn;
        }
    }

    // require_common_name - computed: true, optional: true, required: false
    private _requireCommonName?: boolean | cdktn.IResolvable; 
    public get requireCommonName() {
        return this.getBooleanAttribute('require_common_name');
    }
    public set requireCommonName(value: boolean | cdktn.IResolvable) {
        this._requireCommonName = value;
    }
    public resetRequireCommonName() {
        this._requireCommonName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireCommonNameInput() {
        return this._requireCommonName;
    }

    // require_directory_path - computed: true, optional: true, required: false
    private _requireDirectoryPath?: boolean | cdktn.IResolvable; 
    public get requireDirectoryPath() {
        return this.getBooleanAttribute('require_directory_path');
    }
    public set requireDirectoryPath(value: boolean | cdktn.IResolvable) {
        this._requireDirectoryPath = value;
    }
    public resetRequireDirectoryPath() {
        this._requireDirectoryPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireDirectoryPathInput() {
        return this._requireDirectoryPath;
    }

    // require_dns_as_cn - computed: true, optional: true, required: false
    private _requireDnsAsCn?: boolean | cdktn.IResolvable; 
    public get requireDnsAsCn() {
        return this.getBooleanAttribute('require_dns_as_cn');
    }
    public set requireDnsAsCn(value: boolean | cdktn.IResolvable) {
        this._requireDnsAsCn = value;
    }
    public resetRequireDnsAsCn() {
        this._requireDnsAsCn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireDnsAsCnInput() {
        return this._requireDnsAsCn;
    }

    // require_email - computed: true, optional: true, required: false
    private _requireEmail?: boolean | cdktn.IResolvable; 
    public get requireEmail() {
        return this.getBooleanAttribute('require_email');
    }
    public set requireEmail(value: boolean | cdktn.IResolvable) {
        this._requireEmail = value;
    }
    public resetRequireEmail() {
        this._requireEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireEmailInput() {
        return this._requireEmail;
    }

    // san_require_directory_guid - computed: true, optional: true, required: false
    private _sanRequireDirectoryGuid?: boolean | cdktn.IResolvable; 
    public get sanRequireDirectoryGuid() {
        return this.getBooleanAttribute('san_require_directory_guid');
    }
    public set sanRequireDirectoryGuid(value: boolean | cdktn.IResolvable) {
        this._sanRequireDirectoryGuid = value;
    }
    public resetSanRequireDirectoryGuid() {
        this._sanRequireDirectoryGuid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireDirectoryGuidInput() {
        return this._sanRequireDirectoryGuid;
    }

    // san_require_dns - computed: true, optional: true, required: false
    private _sanRequireDns?: boolean | cdktn.IResolvable; 
    public get sanRequireDns() {
        return this.getBooleanAttribute('san_require_dns');
    }
    public set sanRequireDns(value: boolean | cdktn.IResolvable) {
        this._sanRequireDns = value;
    }
    public resetSanRequireDns() {
        this._sanRequireDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireDnsInput() {
        return this._sanRequireDns;
    }

    // san_require_domain_dns - computed: true, optional: true, required: false
    private _sanRequireDomainDns?: boolean | cdktn.IResolvable; 
    public get sanRequireDomainDns() {
        return this.getBooleanAttribute('san_require_domain_dns');
    }
    public set sanRequireDomainDns(value: boolean | cdktn.IResolvable) {
        this._sanRequireDomainDns = value;
    }
    public resetSanRequireDomainDns() {
        this._sanRequireDomainDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireDomainDnsInput() {
        return this._sanRequireDomainDns;
    }

    // san_require_email - computed: true, optional: true, required: false
    private _sanRequireEmail?: boolean | cdktn.IResolvable; 
    public get sanRequireEmail() {
        return this.getBooleanAttribute('san_require_email');
    }
    public set sanRequireEmail(value: boolean | cdktn.IResolvable) {
        this._sanRequireEmail = value;
    }
    public resetSanRequireEmail() {
        this._sanRequireEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireEmailInput() {
        return this._sanRequireEmail;
    }

    // san_require_spn - computed: true, optional: true, required: false
    private _sanRequireSpn?: boolean | cdktn.IResolvable; 
    public get sanRequireSpn() {
        return this.getBooleanAttribute('san_require_spn');
    }
    public set sanRequireSpn(value: boolean | cdktn.IResolvable) {
        this._sanRequireSpn = value;
    }
    public resetSanRequireSpn() {
        this._sanRequireSpn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireSpnInput() {
        return this._sanRequireSpn;
    }

    // san_require_upn - computed: true, optional: true, required: false
    private _sanRequireUpn?: boolean | cdktn.IResolvable; 
    public get sanRequireUpn() {
        return this.getBooleanAttribute('san_require_upn');
    }
    public set sanRequireUpn(value: boolean | cdktn.IResolvable) {
        this._sanRequireUpn = value;
    }
    public resetSanRequireUpn() {
        this._sanRequireUpn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireUpnInput() {
        return this._sanRequireUpn;
    }
}
export interface TemplateV3Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#certificate_validity CcTemplate#certificate_validity}
    */
    readonly certificateValidity?: DefinitionTemplateV3CertificateValidityProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#enrollment_flags CcTemplate#enrollment_flags}
    */
    readonly enrollmentFlags?: EnrollmentFlagsV3Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#extensions CcTemplate#extensions}
    */
    readonly extensions?: ExtensionsV3Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#general_flags CcTemplate#general_flags}
    */
    readonly generalFlags?: GeneralFlagsV3Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#hash_algorithm CcTemplate#hash_algorithm}
    */
    readonly hashAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#private_key_attributes CcTemplate#private_key_attributes}
    */
    readonly privateKeyAttributes?: PrivateKeyAttributesV3Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#private_key_flags CcTemplate#private_key_flags}
    */
    readonly privateKeyFlags?: PrivateKeyFlagsV3Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#subject_name_flags CcTemplate#subject_name_flags}
    */
    readonly subjectNameFlags?: SubjectNameFlagsV3Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#superseded_templates CcTemplate#superseded_templates}
    */
    readonly supersededTemplates?: string[];
}
export class TemplateV3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TemplateV3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateValidity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateValidity = this._certificateValidity?.internalValue;
        }
        if (this._enrollmentFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.enrollmentFlags = this._enrollmentFlags?.internalValue;
        }
        if (this._extensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extensions = this._extensions?.internalValue;
        }
        if (this._generalFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.generalFlags = this._generalFlags?.internalValue;
        }
        if (this._hashAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashAlgorithm = this._hashAlgorithm;
        }
        if (this._privateKeyAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKeyAttributes = this._privateKeyAttributes?.internalValue;
        }
        if (this._privateKeyFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKeyFlags = this._privateKeyFlags?.internalValue;
        }
        if (this._subjectNameFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectNameFlags = this._subjectNameFlags?.internalValue;
        }
        if (this._supersededTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.supersededTemplates = this._supersededTemplates;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TemplateV3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateValidity.internalValue = undefined;
            this._enrollmentFlags.internalValue = undefined;
            this._extensions.internalValue = undefined;
            this._generalFlags.internalValue = undefined;
            this._hashAlgorithm = undefined;
            this._privateKeyAttributes.internalValue = undefined;
            this._privateKeyFlags.internalValue = undefined;
            this._subjectNameFlags.internalValue = undefined;
            this._supersededTemplates = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateValidity.internalValue = value.certificateValidity;
            this._enrollmentFlags.internalValue = value.enrollmentFlags;
            this._extensions.internalValue = value.extensions;
            this._generalFlags.internalValue = value.generalFlags;
            this._hashAlgorithm = value.hashAlgorithm;
            this._privateKeyAttributes.internalValue = value.privateKeyAttributes;
            this._privateKeyFlags.internalValue = value.privateKeyFlags;
            this._subjectNameFlags.internalValue = value.subjectNameFlags;
            this._supersededTemplates = value.supersededTemplates;
        }
    }

    // certificate_validity - computed: true, optional: true, required: false
    private _certificateValidity = new DefinitionTemplateV3CertificateValidityPropertyOutputReference(this, "certificate_validity");
    public get certificateValidity() {
        return this._certificateValidity;
    }
    public putCertificateValidity(value: DefinitionTemplateV3CertificateValidityProperty) {
        this._certificateValidity.internalValue = value;
    }
    public resetCertificateValidity() {
        this._certificateValidity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateValidityInput() {
        return this._certificateValidity.internalValue;
    }

    // enrollment_flags - computed: true, optional: true, required: false
    private _enrollmentFlags = new EnrollmentFlagsV3PropertyOutputReference(this, "enrollment_flags");
    public get enrollmentFlags() {
        return this._enrollmentFlags;
    }
    public putEnrollmentFlags(value: EnrollmentFlagsV3Property) {
        this._enrollmentFlags.internalValue = value;
    }
    public resetEnrollmentFlags() {
        this._enrollmentFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enrollmentFlagsInput() {
        return this._enrollmentFlags.internalValue;
    }

    // extensions - computed: true, optional: true, required: false
    private _extensions = new ExtensionsV3PropertyOutputReference(this, "extensions");
    public get extensions() {
        return this._extensions;
    }
    public putExtensions(value: ExtensionsV3Property) {
        this._extensions.internalValue = value;
    }
    public resetExtensions() {
        this._extensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extensionsInput() {
        return this._extensions.internalValue;
    }

    // general_flags - computed: true, optional: true, required: false
    private _generalFlags = new GeneralFlagsV3PropertyOutputReference(this, "general_flags");
    public get generalFlags() {
        return this._generalFlags;
    }
    public putGeneralFlags(value: GeneralFlagsV3Property) {
        this._generalFlags.internalValue = value;
    }
    public resetGeneralFlags() {
        this._generalFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generalFlagsInput() {
        return this._generalFlags.internalValue;
    }

    // hash_algorithm - computed: true, optional: true, required: false
    private _hashAlgorithm?: string; 
    public get hashAlgorithm() {
        return this.getStringAttribute('hash_algorithm');
    }
    public set hashAlgorithm(value: string) {
        this._hashAlgorithm = value;
    }
    public resetHashAlgorithm() {
        this._hashAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashAlgorithmInput() {
        return this._hashAlgorithm;
    }

    // private_key_attributes - computed: true, optional: true, required: false
    private _privateKeyAttributes = new PrivateKeyAttributesV3PropertyOutputReference(this, "private_key_attributes");
    public get privateKeyAttributes() {
        return this._privateKeyAttributes;
    }
    public putPrivateKeyAttributes(value: PrivateKeyAttributesV3Property) {
        this._privateKeyAttributes.internalValue = value;
    }
    public resetPrivateKeyAttributes() {
        this._privateKeyAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyAttributesInput() {
        return this._privateKeyAttributes.internalValue;
    }

    // private_key_flags - computed: true, optional: true, required: false
    private _privateKeyFlags = new PrivateKeyFlagsV3PropertyOutputReference(this, "private_key_flags");
    public get privateKeyFlags() {
        return this._privateKeyFlags;
    }
    public putPrivateKeyFlags(value: PrivateKeyFlagsV3Property) {
        this._privateKeyFlags.internalValue = value;
    }
    public resetPrivateKeyFlags() {
        this._privateKeyFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyFlagsInput() {
        return this._privateKeyFlags.internalValue;
    }

    // subject_name_flags - computed: true, optional: true, required: false
    private _subjectNameFlags = new SubjectNameFlagsV3PropertyOutputReference(this, "subject_name_flags");
    public get subjectNameFlags() {
        return this._subjectNameFlags;
    }
    public putSubjectNameFlags(value: SubjectNameFlagsV3Property) {
        this._subjectNameFlags.internalValue = value;
    }
    public resetSubjectNameFlags() {
        this._subjectNameFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectNameFlagsInput() {
        return this._subjectNameFlags.internalValue;
    }

    // superseded_templates - computed: true, optional: true, required: false
    private _supersededTemplates?: string[]; 
    public get supersededTemplates() {
        return this.getListAttribute('superseded_templates');
    }
    public set supersededTemplates(value: string[]) {
        this._supersededTemplates = value;
    }
    public resetSupersededTemplates() {
        this._supersededTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supersededTemplatesInput() {
        return this._supersededTemplates;
    }
}
export interface DefinitionTemplateV4CertificateValidityRenewalPeriodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period CcTemplate#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period_type CcTemplate#period_type}
    */
    readonly periodType?: string;
}
export class DefinitionTemplateV4CertificateValidityRenewalPeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV4CertificateValidityRenewalPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._periodType !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodType = this._periodType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV4CertificateValidityRenewalPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._period = undefined;
            this._periodType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._period = value.period;
            this._periodType = value.periodType;
        }
    }

    // period - computed: true, optional: true, required: false
    private _period?: number; 
    public get period() {
        return this.getNumberAttribute('period');
    }
    public set period(value: number) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // period_type - computed: true, optional: true, required: false
    private _periodType?: string; 
    public get periodType() {
        return this.getStringAttribute('period_type');
    }
    public set periodType(value: string) {
        this._periodType = value;
    }
    public resetPeriodType() {
        this._periodType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodTypeInput() {
        return this._periodType;
    }
}
export interface DefinitionTemplateV4CertificateValidityValidityPeriodProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period CcTemplate#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#period_type CcTemplate#period_type}
    */
    readonly periodType?: string;
}
export class DefinitionTemplateV4CertificateValidityValidityPeriodPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV4CertificateValidityValidityPeriodProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._periodType !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodType = this._periodType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV4CertificateValidityValidityPeriodProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._period = undefined;
            this._periodType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._period = value.period;
            this._periodType = value.periodType;
        }
    }

    // period - computed: true, optional: true, required: false
    private _period?: number; 
    public get period() {
        return this.getNumberAttribute('period');
    }
    public set period(value: number) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // period_type - computed: true, optional: true, required: false
    private _periodType?: string; 
    public get periodType() {
        return this.getStringAttribute('period_type');
    }
    public set periodType(value: string) {
        this._periodType = value;
    }
    public resetPeriodType() {
        this._periodType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodTypeInput() {
        return this._periodType;
    }
}
export interface DefinitionTemplateV4CertificateValidityProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#renewal_period CcTemplate#renewal_period}
    */
    readonly renewalPeriod?: DefinitionTemplateV4CertificateValidityRenewalPeriodProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#validity_period CcTemplate#validity_period}
    */
    readonly validityPeriod?: DefinitionTemplateV4CertificateValidityValidityPeriodProperty;
}
export class DefinitionTemplateV4CertificateValidityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV4CertificateValidityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._renewalPeriod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.renewalPeriod = this._renewalPeriod?.internalValue;
        }
        if (this._validityPeriod?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validityPeriod = this._validityPeriod?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV4CertificateValidityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._renewalPeriod.internalValue = undefined;
            this._validityPeriod.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._renewalPeriod.internalValue = value.renewalPeriod;
            this._validityPeriod.internalValue = value.validityPeriod;
        }
    }

    // renewal_period - computed: true, optional: true, required: false
    private _renewalPeriod = new DefinitionTemplateV4CertificateValidityRenewalPeriodPropertyOutputReference(this, "renewal_period");
    public get renewalPeriod() {
        return this._renewalPeriod;
    }
    public putRenewalPeriod(value: DefinitionTemplateV4CertificateValidityRenewalPeriodProperty) {
        this._renewalPeriod.internalValue = value;
    }
    public resetRenewalPeriod() {
        this._renewalPeriod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renewalPeriodInput() {
        return this._renewalPeriod.internalValue;
    }

    // validity_period - computed: true, optional: true, required: false
    private _validityPeriod = new DefinitionTemplateV4CertificateValidityValidityPeriodPropertyOutputReference(this, "validity_period");
    public get validityPeriod() {
        return this._validityPeriod;
    }
    public putValidityPeriod(value: DefinitionTemplateV4CertificateValidityValidityPeriodProperty) {
        this._validityPeriod.internalValue = value;
    }
    public resetValidityPeriod() {
        this._validityPeriod.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validityPeriodInput() {
        return this._validityPeriod.internalValue;
    }
}
export interface EnrollmentFlagsV4Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#enable_key_reuse_on_nt_token_keyset_storage_full CcTemplate#enable_key_reuse_on_nt_token_keyset_storage_full}
    */
    readonly enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#include_symmetric_algorithms CcTemplate#include_symmetric_algorithms}
    */
    readonly includeSymmetricAlgorithms?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#no_security_extension CcTemplate#no_security_extension}
    */
    readonly noSecurityExtension?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#remove_invalid_certificate_from_personal_store CcTemplate#remove_invalid_certificate_from_personal_store}
    */
    readonly removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#user_interaction_required CcTemplate#user_interaction_required}
    */
    readonly userInteractionRequired?: boolean | cdktn.IResolvable;
}
export class EnrollmentFlagsV4PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnrollmentFlagsV4Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableKeyReuseOnNtTokenKeysetStorageFull !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableKeyReuseOnNtTokenKeysetStorageFull = this._enableKeyReuseOnNtTokenKeysetStorageFull;
        }
        if (this._includeSymmetricAlgorithms !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeSymmetricAlgorithms = this._includeSymmetricAlgorithms;
        }
        if (this._noSecurityExtension !== undefined) {
            hasAnyValues = true;
            internalValueResult.noSecurityExtension = this._noSecurityExtension;
        }
        if (this._removeInvalidCertificateFromPersonalStore !== undefined) {
            hasAnyValues = true;
            internalValueResult.removeInvalidCertificateFromPersonalStore = this._removeInvalidCertificateFromPersonalStore;
        }
        if (this._userInteractionRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.userInteractionRequired = this._userInteractionRequired;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnrollmentFlagsV4Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
            this._includeSymmetricAlgorithms = undefined;
            this._noSecurityExtension = undefined;
            this._removeInvalidCertificateFromPersonalStore = undefined;
            this._userInteractionRequired = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableKeyReuseOnNtTokenKeysetStorageFull = value.enableKeyReuseOnNtTokenKeysetStorageFull;
            this._includeSymmetricAlgorithms = value.includeSymmetricAlgorithms;
            this._noSecurityExtension = value.noSecurityExtension;
            this._removeInvalidCertificateFromPersonalStore = value.removeInvalidCertificateFromPersonalStore;
            this._userInteractionRequired = value.userInteractionRequired;
        }
    }

    // enable_key_reuse_on_nt_token_keyset_storage_full - computed: true, optional: true, required: false
    private _enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable; 
    public get enableKeyReuseOnNtTokenKeysetStorageFull() {
        return this.getBooleanAttribute('enable_key_reuse_on_nt_token_keyset_storage_full');
    }
    public set enableKeyReuseOnNtTokenKeysetStorageFull(value: boolean | cdktn.IResolvable) {
        this._enableKeyReuseOnNtTokenKeysetStorageFull = value;
    }
    public resetEnableKeyReuseOnNtTokenKeysetStorageFull() {
        this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableKeyReuseOnNtTokenKeysetStorageFullInput() {
        return this._enableKeyReuseOnNtTokenKeysetStorageFull;
    }

    // include_symmetric_algorithms - computed: true, optional: true, required: false
    private _includeSymmetricAlgorithms?: boolean | cdktn.IResolvable; 
    public get includeSymmetricAlgorithms() {
        return this.getBooleanAttribute('include_symmetric_algorithms');
    }
    public set includeSymmetricAlgorithms(value: boolean | cdktn.IResolvable) {
        this._includeSymmetricAlgorithms = value;
    }
    public resetIncludeSymmetricAlgorithms() {
        this._includeSymmetricAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeSymmetricAlgorithmsInput() {
        return this._includeSymmetricAlgorithms;
    }

    // no_security_extension - computed: true, optional: true, required: false
    private _noSecurityExtension?: boolean | cdktn.IResolvable; 
    public get noSecurityExtension() {
        return this.getBooleanAttribute('no_security_extension');
    }
    public set noSecurityExtension(value: boolean | cdktn.IResolvable) {
        this._noSecurityExtension = value;
    }
    public resetNoSecurityExtension() {
        this._noSecurityExtension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noSecurityExtensionInput() {
        return this._noSecurityExtension;
    }

    // remove_invalid_certificate_from_personal_store - computed: true, optional: true, required: false
    private _removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable; 
    public get removeInvalidCertificateFromPersonalStore() {
        return this.getBooleanAttribute('remove_invalid_certificate_from_personal_store');
    }
    public set removeInvalidCertificateFromPersonalStore(value: boolean | cdktn.IResolvable) {
        this._removeInvalidCertificateFromPersonalStore = value;
    }
    public resetRemoveInvalidCertificateFromPersonalStore() {
        this._removeInvalidCertificateFromPersonalStore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeInvalidCertificateFromPersonalStoreInput() {
        return this._removeInvalidCertificateFromPersonalStore;
    }

    // user_interaction_required - computed: true, optional: true, required: false
    private _userInteractionRequired?: boolean | cdktn.IResolvable; 
    public get userInteractionRequired() {
        return this.getBooleanAttribute('user_interaction_required');
    }
    public set userInteractionRequired(value: boolean | cdktn.IResolvable) {
        this._userInteractionRequired = value;
    }
    public resetUserInteractionRequired() {
        this._userInteractionRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userInteractionRequiredInput() {
        return this._userInteractionRequired;
    }
}
export interface DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#policy_object_identifier CcTemplate#policy_object_identifier}
    */
    readonly policyObjectIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#policy_type CcTemplate#policy_type}
    */
    readonly policyType?: string;
}
export class DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policyObjectIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyObjectIdentifier = this._policyObjectIdentifier;
        }
        if (this._policyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyType = this._policyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policyObjectIdentifier = undefined;
            this._policyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policyObjectIdentifier = value.policyObjectIdentifier;
            this._policyType = value.policyType;
        }
    }

    // policy_object_identifier - computed: true, optional: true, required: false
    private _policyObjectIdentifier?: string; 
    public get policyObjectIdentifier() {
        return this.getStringAttribute('policy_object_identifier');
    }
    public set policyObjectIdentifier(value: string) {
        this._policyObjectIdentifier = value;
    }
    public resetPolicyObjectIdentifier() {
        this._policyObjectIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyObjectIdentifierInput() {
        return this._policyObjectIdentifier;
    }

    // policy_type - computed: true, optional: true, required: false
    private _policyType?: string; 
    public get policyType() {
        return this.getStringAttribute('policy_type');
    }
    public set policyType(value: string) {
        this._policyType = value;
    }
    public resetPolicyType() {
        this._policyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTypeInput() {
        return this._policyType;
    }
}

export class DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesPropertyList extends cdktn.ComplexList {
    public internalValue? : DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesProperty[] | cdktn.IResolvable

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
    public get(index: number): DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesPropertyOutputReference {
        return new DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DefinitionTemplateV4ExtensionsApplicationPoliciesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#critical CcTemplate#critical}
    */
    readonly critical?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#policies CcTemplate#policies}
    */
    readonly policies?: DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesProperty[] | cdktn.IResolvable;
}
export class DefinitionTemplateV4ExtensionsApplicationPoliciesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV4ExtensionsApplicationPoliciesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._critical !== undefined) {
            hasAnyValues = true;
            internalValueResult.critical = this._critical;
        }
        if (this._policies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policies = this._policies?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV4ExtensionsApplicationPoliciesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._critical = undefined;
            this._policies.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._critical = value.critical;
            this._policies.internalValue = value.policies;
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

    // policies - computed: true, optional: true, required: false
    private _policies = new DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesPropertyList(this, "policies", false);
    public get policies() {
        return this._policies;
    }
    public putPolicies(value: DefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesProperty[] | cdktn.IResolvable) {
        this._policies.internalValue = value;
    }
    public resetPolicies() {
        this._policies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policiesInput() {
        return this._policies.internalValue;
    }
}
export interface DefinitionTemplateV4ExtensionsKeyUsageUsageFlagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#data_encipherment CcTemplate#data_encipherment}
    */
    readonly dataEncipherment?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#digital_signature CcTemplate#digital_signature}
    */
    readonly digitalSignature?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_agreement CcTemplate#key_agreement}
    */
    readonly keyAgreement?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_encipherment CcTemplate#key_encipherment}
    */
    readonly keyEncipherment?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#non_repudiation CcTemplate#non_repudiation}
    */
    readonly nonRepudiation?: boolean | cdktn.IResolvable;
}
export class DefinitionTemplateV4ExtensionsKeyUsageUsageFlagsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV4ExtensionsKeyUsageUsageFlagsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataEncipherment !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataEncipherment = this._dataEncipherment;
        }
        if (this._digitalSignature !== undefined) {
            hasAnyValues = true;
            internalValueResult.digitalSignature = this._digitalSignature;
        }
        if (this._keyAgreement !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyAgreement = this._keyAgreement;
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

    public set internalValue(value: DefinitionTemplateV4ExtensionsKeyUsageUsageFlagsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataEncipherment = undefined;
            this._digitalSignature = undefined;
            this._keyAgreement = undefined;
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
            this._dataEncipherment = value.dataEncipherment;
            this._digitalSignature = value.digitalSignature;
            this._keyAgreement = value.keyAgreement;
            this._keyEncipherment = value.keyEncipherment;
            this._nonRepudiation = value.nonRepudiation;
        }
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
export interface DefinitionTemplateV4ExtensionsKeyUsageProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#critical CcTemplate#critical}
    */
    readonly critical?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#usage_flags CcTemplate#usage_flags}
    */
    readonly usageFlags?: DefinitionTemplateV4ExtensionsKeyUsageUsageFlagsProperty;
}
export class DefinitionTemplateV4ExtensionsKeyUsagePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV4ExtensionsKeyUsageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._critical !== undefined) {
            hasAnyValues = true;
            internalValueResult.critical = this._critical;
        }
        if (this._usageFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.usageFlags = this._usageFlags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV4ExtensionsKeyUsageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._critical = undefined;
            this._usageFlags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._critical = value.critical;
            this._usageFlags.internalValue = value.usageFlags;
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

    // usage_flags - computed: true, optional: true, required: false
    private _usageFlags = new DefinitionTemplateV4ExtensionsKeyUsageUsageFlagsPropertyOutputReference(this, "usage_flags");
    public get usageFlags() {
        return this._usageFlags;
    }
    public putUsageFlags(value: DefinitionTemplateV4ExtensionsKeyUsageUsageFlagsProperty) {
        this._usageFlags.internalValue = value;
    }
    public resetUsageFlags() {
        this._usageFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usageFlagsInput() {
        return this._usageFlags.internalValue;
    }
}
export interface ExtensionsV4Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#application_policies CcTemplate#application_policies}
    */
    readonly applicationPolicies?: DefinitionTemplateV4ExtensionsApplicationPoliciesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_usage CcTemplate#key_usage}
    */
    readonly keyUsage?: DefinitionTemplateV4ExtensionsKeyUsageProperty;
}
export class ExtensionsV4PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExtensionsV4Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationPolicies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationPolicies = this._applicationPolicies?.internalValue;
        }
        if (this._keyUsage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyUsage = this._keyUsage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExtensionsV4Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationPolicies.internalValue = undefined;
            this._keyUsage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationPolicies.internalValue = value.applicationPolicies;
            this._keyUsage.internalValue = value.keyUsage;
        }
    }

    // application_policies - computed: true, optional: true, required: false
    private _applicationPolicies = new DefinitionTemplateV4ExtensionsApplicationPoliciesPropertyOutputReference(this, "application_policies");
    public get applicationPolicies() {
        return this._applicationPolicies;
    }
    public putApplicationPolicies(value: DefinitionTemplateV4ExtensionsApplicationPoliciesProperty) {
        this._applicationPolicies.internalValue = value;
    }
    public resetApplicationPolicies() {
        this._applicationPolicies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationPoliciesInput() {
        return this._applicationPolicies.internalValue;
    }

    // key_usage - computed: true, optional: true, required: false
    private _keyUsage = new DefinitionTemplateV4ExtensionsKeyUsagePropertyOutputReference(this, "key_usage");
    public get keyUsage() {
        return this._keyUsage;
    }
    public putKeyUsage(value: DefinitionTemplateV4ExtensionsKeyUsageProperty) {
        this._keyUsage.internalValue = value;
    }
    public resetKeyUsage() {
        this._keyUsage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyUsageInput() {
        return this._keyUsage.internalValue;
    }
}
export interface GeneralFlagsV4Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#auto_enrollment CcTemplate#auto_enrollment}
    */
    readonly autoEnrollment?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#machine_type CcTemplate#machine_type}
    */
    readonly machineType?: boolean | cdktn.IResolvable;
}
export class GeneralFlagsV4PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GeneralFlagsV4Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoEnrollment !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoEnrollment = this._autoEnrollment;
        }
        if (this._machineType !== undefined) {
            hasAnyValues = true;
            internalValueResult.machineType = this._machineType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GeneralFlagsV4Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoEnrollment = undefined;
            this._machineType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoEnrollment = value.autoEnrollment;
            this._machineType = value.machineType;
        }
    }

    // auto_enrollment - computed: true, optional: true, required: false
    private _autoEnrollment?: boolean | cdktn.IResolvable; 
    public get autoEnrollment() {
        return this.getBooleanAttribute('auto_enrollment');
    }
    public set autoEnrollment(value: boolean | cdktn.IResolvable) {
        this._autoEnrollment = value;
    }
    public resetAutoEnrollment() {
        this._autoEnrollment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoEnrollmentInput() {
        return this._autoEnrollment;
    }

    // machine_type - computed: true, optional: true, required: false
    private _machineType?: boolean | cdktn.IResolvable; 
    public get machineType() {
        return this.getBooleanAttribute('machine_type');
    }
    public set machineType(value: boolean | cdktn.IResolvable) {
        this._machineType = value;
    }
    public resetMachineType() {
        this._machineType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get machineTypeInput() {
        return this._machineType;
    }
}
export interface PropertyFlagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#decrypt CcTemplate#decrypt}
    */
    readonly decrypt?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_agreement CcTemplate#key_agreement}
    */
    readonly keyAgreement?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#sign CcTemplate#sign}
    */
    readonly sign?: boolean | cdktn.IResolvable;
}
export class PropertyFlagsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PropertyFlagsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._decrypt !== undefined) {
            hasAnyValues = true;
            internalValueResult.decrypt = this._decrypt;
        }
        if (this._keyAgreement !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyAgreement = this._keyAgreement;
        }
        if (this._sign !== undefined) {
            hasAnyValues = true;
            internalValueResult.sign = this._sign;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PropertyFlagsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._decrypt = undefined;
            this._keyAgreement = undefined;
            this._sign = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._decrypt = value.decrypt;
            this._keyAgreement = value.keyAgreement;
            this._sign = value.sign;
        }
    }

    // decrypt - computed: true, optional: true, required: false
    private _decrypt?: boolean | cdktn.IResolvable; 
    public get decrypt() {
        return this.getBooleanAttribute('decrypt');
    }
    public set decrypt(value: boolean | cdktn.IResolvable) {
        this._decrypt = value;
    }
    public resetDecrypt() {
        this._decrypt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get decryptInput() {
        return this._decrypt;
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

    // sign - computed: true, optional: true, required: false
    private _sign?: boolean | cdktn.IResolvable; 
    public get sign() {
        return this.getBooleanAttribute('sign');
    }
    public set sign(value: boolean | cdktn.IResolvable) {
        this._sign = value;
    }
    public resetSign() {
        this._sign = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signInput() {
        return this._sign;
    }
}
export interface DefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#property_flags CcTemplate#property_flags}
    */
    readonly propertyFlags?: PropertyFlagsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#property_type CcTemplate#property_type}
    */
    readonly propertyType?: string;
}
export class DefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._propertyFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyFlags = this._propertyFlags?.internalValue;
        }
        if (this._propertyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.propertyType = this._propertyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._propertyFlags.internalValue = undefined;
            this._propertyType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._propertyFlags.internalValue = value.propertyFlags;
            this._propertyType = value.propertyType;
        }
    }

    // property_flags - computed: true, optional: true, required: false
    private _propertyFlags = new PropertyFlagsPropertyOutputReference(this, "property_flags");
    public get propertyFlags() {
        return this._propertyFlags;
    }
    public putPropertyFlags(value: PropertyFlagsProperty) {
        this._propertyFlags.internalValue = value;
    }
    public resetPropertyFlags() {
        this._propertyFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyFlagsInput() {
        return this._propertyFlags.internalValue;
    }

    // property_type - computed: true, optional: true, required: false
    private _propertyType?: string; 
    public get propertyType() {
        return this.getStringAttribute('property_type');
    }
    public set propertyType(value: string) {
        this._propertyType = value;
    }
    public resetPropertyType() {
        this._propertyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertyTypeInput() {
        return this._propertyType;
    }
}
export interface PrivateKeyAttributesV4Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#algorithm CcTemplate#algorithm}
    */
    readonly algorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#crypto_providers CcTemplate#crypto_providers}
    */
    readonly cryptoProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_spec CcTemplate#key_spec}
    */
    readonly keySpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#key_usage_property CcTemplate#key_usage_property}
    */
    readonly keyUsageProperty?: DefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#minimal_key_length CcTemplate#minimal_key_length}
    */
    readonly minimalKeyLength?: number;
}
export class PrivateKeyAttributesV4PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateKeyAttributesV4Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._algorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithm = this._algorithm;
        }
        if (this._cryptoProviders !== undefined) {
            hasAnyValues = true;
            internalValueResult.cryptoProviders = this._cryptoProviders;
        }
        if (this._keySpec !== undefined) {
            hasAnyValues = true;
            internalValueResult.keySpec = this._keySpec;
        }
        if (this._keyUsageProperty?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyUsageProperty = this._keyUsageProperty?.internalValue;
        }
        if (this._minimalKeyLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimalKeyLength = this._minimalKeyLength;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateKeyAttributesV4Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithm = undefined;
            this._cryptoProviders = undefined;
            this._keySpec = undefined;
            this._keyUsageProperty.internalValue = undefined;
            this._minimalKeyLength = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithm = value.algorithm;
            this._cryptoProviders = value.cryptoProviders;
            this._keySpec = value.keySpec;
            this._keyUsageProperty.internalValue = value.keyUsageProperty;
            this._minimalKeyLength = value.minimalKeyLength;
        }
    }

    // algorithm - computed: true, optional: true, required: false
    private _algorithm?: string; 
    public get algorithm() {
        return this.getStringAttribute('algorithm');
    }
    public set algorithm(value: string) {
        this._algorithm = value;
    }
    public resetAlgorithm() {
        this._algorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get algorithmInput() {
        return this._algorithm;
    }

    // crypto_providers - computed: true, optional: true, required: false
    private _cryptoProviders?: string[]; 
    public get cryptoProviders() {
        return this.getListAttribute('crypto_providers');
    }
    public set cryptoProviders(value: string[]) {
        this._cryptoProviders = value;
    }
    public resetCryptoProviders() {
        this._cryptoProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cryptoProvidersInput() {
        return this._cryptoProviders;
    }

    // key_spec - computed: true, optional: true, required: false
    private _keySpec?: string; 
    public get keySpec() {
        return this.getStringAttribute('key_spec');
    }
    public set keySpec(value: string) {
        this._keySpec = value;
    }
    public resetKeySpec() {
        this._keySpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keySpecInput() {
        return this._keySpec;
    }

    // key_usage_property - computed: true, optional: true, required: false
    private _keyUsageProperty = new DefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyOutputReference(this, "key_usage_property");
    public get keyUsageProperty() {
        return this._keyUsageProperty;
    }
    public putKeyUsageProperty(value: DefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyProperty) {
        this._keyUsageProperty.internalValue = value;
    }
    public resetKeyUsageProperty() {
        this._keyUsageProperty.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyUsagePropertyInput() {
        return this._keyUsageProperty.internalValue;
    }

    // minimal_key_length - computed: true, optional: true, required: false
    private _minimalKeyLength?: number; 
    public get minimalKeyLength() {
        return this.getNumberAttribute('minimal_key_length');
    }
    public set minimalKeyLength(value: number) {
        this._minimalKeyLength = value;
    }
    public resetMinimalKeyLength() {
        this._minimalKeyLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimalKeyLengthInput() {
        return this._minimalKeyLength;
    }
}
export interface PrivateKeyFlagsV4Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#client_version CcTemplate#client_version}
    */
    readonly clientVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#exportable_key CcTemplate#exportable_key}
    */
    readonly exportableKey?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_alternate_signature_algorithm CcTemplate#require_alternate_signature_algorithm}
    */
    readonly requireAlternateSignatureAlgorithm?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_same_key_renewal CcTemplate#require_same_key_renewal}
    */
    readonly requireSameKeyRenewal?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#strong_key_protection_required CcTemplate#strong_key_protection_required}
    */
    readonly strongKeyProtectionRequired?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#use_legacy_provider CcTemplate#use_legacy_provider}
    */
    readonly useLegacyProvider?: boolean | cdktn.IResolvable;
}
export class PrivateKeyFlagsV4PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrivateKeyFlagsV4Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientVersion = this._clientVersion;
        }
        if (this._exportableKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportableKey = this._exportableKey;
        }
        if (this._requireAlternateSignatureAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireAlternateSignatureAlgorithm = this._requireAlternateSignatureAlgorithm;
        }
        if (this._requireSameKeyRenewal !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireSameKeyRenewal = this._requireSameKeyRenewal;
        }
        if (this._strongKeyProtectionRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.strongKeyProtectionRequired = this._strongKeyProtectionRequired;
        }
        if (this._useLegacyProvider !== undefined) {
            hasAnyValues = true;
            internalValueResult.useLegacyProvider = this._useLegacyProvider;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrivateKeyFlagsV4Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientVersion = undefined;
            this._exportableKey = undefined;
            this._requireAlternateSignatureAlgorithm = undefined;
            this._requireSameKeyRenewal = undefined;
            this._strongKeyProtectionRequired = undefined;
            this._useLegacyProvider = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientVersion = value.clientVersion;
            this._exportableKey = value.exportableKey;
            this._requireAlternateSignatureAlgorithm = value.requireAlternateSignatureAlgorithm;
            this._requireSameKeyRenewal = value.requireSameKeyRenewal;
            this._strongKeyProtectionRequired = value.strongKeyProtectionRequired;
            this._useLegacyProvider = value.useLegacyProvider;
        }
    }

    // client_version - computed: true, optional: true, required: false
    private _clientVersion?: string; 
    public get clientVersion() {
        return this.getStringAttribute('client_version');
    }
    public set clientVersion(value: string) {
        this._clientVersion = value;
    }
    public resetClientVersion() {
        this._clientVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientVersionInput() {
        return this._clientVersion;
    }

    // exportable_key - computed: true, optional: true, required: false
    private _exportableKey?: boolean | cdktn.IResolvable; 
    public get exportableKey() {
        return this.getBooleanAttribute('exportable_key');
    }
    public set exportableKey(value: boolean | cdktn.IResolvable) {
        this._exportableKey = value;
    }
    public resetExportableKey() {
        this._exportableKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportableKeyInput() {
        return this._exportableKey;
    }

    // require_alternate_signature_algorithm - computed: true, optional: true, required: false
    private _requireAlternateSignatureAlgorithm?: boolean | cdktn.IResolvable; 
    public get requireAlternateSignatureAlgorithm() {
        return this.getBooleanAttribute('require_alternate_signature_algorithm');
    }
    public set requireAlternateSignatureAlgorithm(value: boolean | cdktn.IResolvable) {
        this._requireAlternateSignatureAlgorithm = value;
    }
    public resetRequireAlternateSignatureAlgorithm() {
        this._requireAlternateSignatureAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireAlternateSignatureAlgorithmInput() {
        return this._requireAlternateSignatureAlgorithm;
    }

    // require_same_key_renewal - computed: true, optional: true, required: false
    private _requireSameKeyRenewal?: boolean | cdktn.IResolvable; 
    public get requireSameKeyRenewal() {
        return this.getBooleanAttribute('require_same_key_renewal');
    }
    public set requireSameKeyRenewal(value: boolean | cdktn.IResolvable) {
        this._requireSameKeyRenewal = value;
    }
    public resetRequireSameKeyRenewal() {
        this._requireSameKeyRenewal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireSameKeyRenewalInput() {
        return this._requireSameKeyRenewal;
    }

    // strong_key_protection_required - computed: true, optional: true, required: false
    private _strongKeyProtectionRequired?: boolean | cdktn.IResolvable; 
    public get strongKeyProtectionRequired() {
        return this.getBooleanAttribute('strong_key_protection_required');
    }
    public set strongKeyProtectionRequired(value: boolean | cdktn.IResolvable) {
        this._strongKeyProtectionRequired = value;
    }
    public resetStrongKeyProtectionRequired() {
        this._strongKeyProtectionRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strongKeyProtectionRequiredInput() {
        return this._strongKeyProtectionRequired;
    }

    // use_legacy_provider - computed: true, optional: true, required: false
    private _useLegacyProvider?: boolean | cdktn.IResolvable; 
    public get useLegacyProvider() {
        return this.getBooleanAttribute('use_legacy_provider');
    }
    public set useLegacyProvider(value: boolean | cdktn.IResolvable) {
        this._useLegacyProvider = value;
    }
    public resetUseLegacyProvider() {
        this._useLegacyProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useLegacyProviderInput() {
        return this._useLegacyProvider;
    }
}
export interface SubjectNameFlagsV4Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_common_name CcTemplate#require_common_name}
    */
    readonly requireCommonName?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_directory_path CcTemplate#require_directory_path}
    */
    readonly requireDirectoryPath?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_dns_as_cn CcTemplate#require_dns_as_cn}
    */
    readonly requireDnsAsCn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#require_email CcTemplate#require_email}
    */
    readonly requireEmail?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_directory_guid CcTemplate#san_require_directory_guid}
    */
    readonly sanRequireDirectoryGuid?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_dns CcTemplate#san_require_dns}
    */
    readonly sanRequireDns?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_domain_dns CcTemplate#san_require_domain_dns}
    */
    readonly sanRequireDomainDns?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_email CcTemplate#san_require_email}
    */
    readonly sanRequireEmail?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_spn CcTemplate#san_require_spn}
    */
    readonly sanRequireSpn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#san_require_upn CcTemplate#san_require_upn}
    */
    readonly sanRequireUpn?: boolean | cdktn.IResolvable;
}
export class SubjectNameFlagsV4PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SubjectNameFlagsV4Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._requireCommonName !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireCommonName = this._requireCommonName;
        }
        if (this._requireDirectoryPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireDirectoryPath = this._requireDirectoryPath;
        }
        if (this._requireDnsAsCn !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireDnsAsCn = this._requireDnsAsCn;
        }
        if (this._requireEmail !== undefined) {
            hasAnyValues = true;
            internalValueResult.requireEmail = this._requireEmail;
        }
        if (this._sanRequireDirectoryGuid !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireDirectoryGuid = this._sanRequireDirectoryGuid;
        }
        if (this._sanRequireDns !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireDns = this._sanRequireDns;
        }
        if (this._sanRequireDomainDns !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireDomainDns = this._sanRequireDomainDns;
        }
        if (this._sanRequireEmail !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireEmail = this._sanRequireEmail;
        }
        if (this._sanRequireSpn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireSpn = this._sanRequireSpn;
        }
        if (this._sanRequireUpn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sanRequireUpn = this._sanRequireUpn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubjectNameFlagsV4Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._requireCommonName = undefined;
            this._requireDirectoryPath = undefined;
            this._requireDnsAsCn = undefined;
            this._requireEmail = undefined;
            this._sanRequireDirectoryGuid = undefined;
            this._sanRequireDns = undefined;
            this._sanRequireDomainDns = undefined;
            this._sanRequireEmail = undefined;
            this._sanRequireSpn = undefined;
            this._sanRequireUpn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._requireCommonName = value.requireCommonName;
            this._requireDirectoryPath = value.requireDirectoryPath;
            this._requireDnsAsCn = value.requireDnsAsCn;
            this._requireEmail = value.requireEmail;
            this._sanRequireDirectoryGuid = value.sanRequireDirectoryGuid;
            this._sanRequireDns = value.sanRequireDns;
            this._sanRequireDomainDns = value.sanRequireDomainDns;
            this._sanRequireEmail = value.sanRequireEmail;
            this._sanRequireSpn = value.sanRequireSpn;
            this._sanRequireUpn = value.sanRequireUpn;
        }
    }

    // require_common_name - computed: true, optional: true, required: false
    private _requireCommonName?: boolean | cdktn.IResolvable; 
    public get requireCommonName() {
        return this.getBooleanAttribute('require_common_name');
    }
    public set requireCommonName(value: boolean | cdktn.IResolvable) {
        this._requireCommonName = value;
    }
    public resetRequireCommonName() {
        this._requireCommonName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireCommonNameInput() {
        return this._requireCommonName;
    }

    // require_directory_path - computed: true, optional: true, required: false
    private _requireDirectoryPath?: boolean | cdktn.IResolvable; 
    public get requireDirectoryPath() {
        return this.getBooleanAttribute('require_directory_path');
    }
    public set requireDirectoryPath(value: boolean | cdktn.IResolvable) {
        this._requireDirectoryPath = value;
    }
    public resetRequireDirectoryPath() {
        this._requireDirectoryPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireDirectoryPathInput() {
        return this._requireDirectoryPath;
    }

    // require_dns_as_cn - computed: true, optional: true, required: false
    private _requireDnsAsCn?: boolean | cdktn.IResolvable; 
    public get requireDnsAsCn() {
        return this.getBooleanAttribute('require_dns_as_cn');
    }
    public set requireDnsAsCn(value: boolean | cdktn.IResolvable) {
        this._requireDnsAsCn = value;
    }
    public resetRequireDnsAsCn() {
        this._requireDnsAsCn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireDnsAsCnInput() {
        return this._requireDnsAsCn;
    }

    // require_email - computed: true, optional: true, required: false
    private _requireEmail?: boolean | cdktn.IResolvable; 
    public get requireEmail() {
        return this.getBooleanAttribute('require_email');
    }
    public set requireEmail(value: boolean | cdktn.IResolvable) {
        this._requireEmail = value;
    }
    public resetRequireEmail() {
        this._requireEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireEmailInput() {
        return this._requireEmail;
    }

    // san_require_directory_guid - computed: true, optional: true, required: false
    private _sanRequireDirectoryGuid?: boolean | cdktn.IResolvable; 
    public get sanRequireDirectoryGuid() {
        return this.getBooleanAttribute('san_require_directory_guid');
    }
    public set sanRequireDirectoryGuid(value: boolean | cdktn.IResolvable) {
        this._sanRequireDirectoryGuid = value;
    }
    public resetSanRequireDirectoryGuid() {
        this._sanRequireDirectoryGuid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireDirectoryGuidInput() {
        return this._sanRequireDirectoryGuid;
    }

    // san_require_dns - computed: true, optional: true, required: false
    private _sanRequireDns?: boolean | cdktn.IResolvable; 
    public get sanRequireDns() {
        return this.getBooleanAttribute('san_require_dns');
    }
    public set sanRequireDns(value: boolean | cdktn.IResolvable) {
        this._sanRequireDns = value;
    }
    public resetSanRequireDns() {
        this._sanRequireDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireDnsInput() {
        return this._sanRequireDns;
    }

    // san_require_domain_dns - computed: true, optional: true, required: false
    private _sanRequireDomainDns?: boolean | cdktn.IResolvable; 
    public get sanRequireDomainDns() {
        return this.getBooleanAttribute('san_require_domain_dns');
    }
    public set sanRequireDomainDns(value: boolean | cdktn.IResolvable) {
        this._sanRequireDomainDns = value;
    }
    public resetSanRequireDomainDns() {
        this._sanRequireDomainDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireDomainDnsInput() {
        return this._sanRequireDomainDns;
    }

    // san_require_email - computed: true, optional: true, required: false
    private _sanRequireEmail?: boolean | cdktn.IResolvable; 
    public get sanRequireEmail() {
        return this.getBooleanAttribute('san_require_email');
    }
    public set sanRequireEmail(value: boolean | cdktn.IResolvable) {
        this._sanRequireEmail = value;
    }
    public resetSanRequireEmail() {
        this._sanRequireEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireEmailInput() {
        return this._sanRequireEmail;
    }

    // san_require_spn - computed: true, optional: true, required: false
    private _sanRequireSpn?: boolean | cdktn.IResolvable; 
    public get sanRequireSpn() {
        return this.getBooleanAttribute('san_require_spn');
    }
    public set sanRequireSpn(value: boolean | cdktn.IResolvable) {
        this._sanRequireSpn = value;
    }
    public resetSanRequireSpn() {
        this._sanRequireSpn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireSpnInput() {
        return this._sanRequireSpn;
    }

    // san_require_upn - computed: true, optional: true, required: false
    private _sanRequireUpn?: boolean | cdktn.IResolvable; 
    public get sanRequireUpn() {
        return this.getBooleanAttribute('san_require_upn');
    }
    public set sanRequireUpn(value: boolean | cdktn.IResolvable) {
        this._sanRequireUpn = value;
    }
    public resetSanRequireUpn() {
        this._sanRequireUpn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sanRequireUpnInput() {
        return this._sanRequireUpn;
    }
}
export interface TemplateV4Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#certificate_validity CcTemplate#certificate_validity}
    */
    readonly certificateValidity?: DefinitionTemplateV4CertificateValidityProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#enrollment_flags CcTemplate#enrollment_flags}
    */
    readonly enrollmentFlags?: EnrollmentFlagsV4Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#extensions CcTemplate#extensions}
    */
    readonly extensions?: ExtensionsV4Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#general_flags CcTemplate#general_flags}
    */
    readonly generalFlags?: GeneralFlagsV4Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#hash_algorithm CcTemplate#hash_algorithm}
    */
    readonly hashAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#private_key_attributes CcTemplate#private_key_attributes}
    */
    readonly privateKeyAttributes?: PrivateKeyAttributesV4Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#private_key_flags CcTemplate#private_key_flags}
    */
    readonly privateKeyFlags?: PrivateKeyFlagsV4Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#subject_name_flags CcTemplate#subject_name_flags}
    */
    readonly subjectNameFlags?: SubjectNameFlagsV4Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#superseded_templates CcTemplate#superseded_templates}
    */
    readonly supersededTemplates?: string[];
}
export class TemplateV4PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TemplateV4Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateValidity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateValidity = this._certificateValidity?.internalValue;
        }
        if (this._enrollmentFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.enrollmentFlags = this._enrollmentFlags?.internalValue;
        }
        if (this._extensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.extensions = this._extensions?.internalValue;
        }
        if (this._generalFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.generalFlags = this._generalFlags?.internalValue;
        }
        if (this._hashAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.hashAlgorithm = this._hashAlgorithm;
        }
        if (this._privateKeyAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKeyAttributes = this._privateKeyAttributes?.internalValue;
        }
        if (this._privateKeyFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKeyFlags = this._privateKeyFlags?.internalValue;
        }
        if (this._subjectNameFlags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subjectNameFlags = this._subjectNameFlags?.internalValue;
        }
        if (this._supersededTemplates !== undefined) {
            hasAnyValues = true;
            internalValueResult.supersededTemplates = this._supersededTemplates;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TemplateV4Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateValidity.internalValue = undefined;
            this._enrollmentFlags.internalValue = undefined;
            this._extensions.internalValue = undefined;
            this._generalFlags.internalValue = undefined;
            this._hashAlgorithm = undefined;
            this._privateKeyAttributes.internalValue = undefined;
            this._privateKeyFlags.internalValue = undefined;
            this._subjectNameFlags.internalValue = undefined;
            this._supersededTemplates = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateValidity.internalValue = value.certificateValidity;
            this._enrollmentFlags.internalValue = value.enrollmentFlags;
            this._extensions.internalValue = value.extensions;
            this._generalFlags.internalValue = value.generalFlags;
            this._hashAlgorithm = value.hashAlgorithm;
            this._privateKeyAttributes.internalValue = value.privateKeyAttributes;
            this._privateKeyFlags.internalValue = value.privateKeyFlags;
            this._subjectNameFlags.internalValue = value.subjectNameFlags;
            this._supersededTemplates = value.supersededTemplates;
        }
    }

    // certificate_validity - computed: true, optional: true, required: false
    private _certificateValidity = new DefinitionTemplateV4CertificateValidityPropertyOutputReference(this, "certificate_validity");
    public get certificateValidity() {
        return this._certificateValidity;
    }
    public putCertificateValidity(value: DefinitionTemplateV4CertificateValidityProperty) {
        this._certificateValidity.internalValue = value;
    }
    public resetCertificateValidity() {
        this._certificateValidity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateValidityInput() {
        return this._certificateValidity.internalValue;
    }

    // enrollment_flags - computed: true, optional: true, required: false
    private _enrollmentFlags = new EnrollmentFlagsV4PropertyOutputReference(this, "enrollment_flags");
    public get enrollmentFlags() {
        return this._enrollmentFlags;
    }
    public putEnrollmentFlags(value: EnrollmentFlagsV4Property) {
        this._enrollmentFlags.internalValue = value;
    }
    public resetEnrollmentFlags() {
        this._enrollmentFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enrollmentFlagsInput() {
        return this._enrollmentFlags.internalValue;
    }

    // extensions - computed: true, optional: true, required: false
    private _extensions = new ExtensionsV4PropertyOutputReference(this, "extensions");
    public get extensions() {
        return this._extensions;
    }
    public putExtensions(value: ExtensionsV4Property) {
        this._extensions.internalValue = value;
    }
    public resetExtensions() {
        this._extensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extensionsInput() {
        return this._extensions.internalValue;
    }

    // general_flags - computed: true, optional: true, required: false
    private _generalFlags = new GeneralFlagsV4PropertyOutputReference(this, "general_flags");
    public get generalFlags() {
        return this._generalFlags;
    }
    public putGeneralFlags(value: GeneralFlagsV4Property) {
        this._generalFlags.internalValue = value;
    }
    public resetGeneralFlags() {
        this._generalFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generalFlagsInput() {
        return this._generalFlags.internalValue;
    }

    // hash_algorithm - computed: true, optional: true, required: false
    private _hashAlgorithm?: string; 
    public get hashAlgorithm() {
        return this.getStringAttribute('hash_algorithm');
    }
    public set hashAlgorithm(value: string) {
        this._hashAlgorithm = value;
    }
    public resetHashAlgorithm() {
        this._hashAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hashAlgorithmInput() {
        return this._hashAlgorithm;
    }

    // private_key_attributes - computed: true, optional: true, required: false
    private _privateKeyAttributes = new PrivateKeyAttributesV4PropertyOutputReference(this, "private_key_attributes");
    public get privateKeyAttributes() {
        return this._privateKeyAttributes;
    }
    public putPrivateKeyAttributes(value: PrivateKeyAttributesV4Property) {
        this._privateKeyAttributes.internalValue = value;
    }
    public resetPrivateKeyAttributes() {
        this._privateKeyAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyAttributesInput() {
        return this._privateKeyAttributes.internalValue;
    }

    // private_key_flags - computed: true, optional: true, required: false
    private _privateKeyFlags = new PrivateKeyFlagsV4PropertyOutputReference(this, "private_key_flags");
    public get privateKeyFlags() {
        return this._privateKeyFlags;
    }
    public putPrivateKeyFlags(value: PrivateKeyFlagsV4Property) {
        this._privateKeyFlags.internalValue = value;
    }
    public resetPrivateKeyFlags() {
        this._privateKeyFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyFlagsInput() {
        return this._privateKeyFlags.internalValue;
    }

    // subject_name_flags - computed: true, optional: true, required: false
    private _subjectNameFlags = new SubjectNameFlagsV4PropertyOutputReference(this, "subject_name_flags");
    public get subjectNameFlags() {
        return this._subjectNameFlags;
    }
    public putSubjectNameFlags(value: SubjectNameFlagsV4Property) {
        this._subjectNameFlags.internalValue = value;
    }
    public resetSubjectNameFlags() {
        this._subjectNameFlags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectNameFlagsInput() {
        return this._subjectNameFlags.internalValue;
    }

    // superseded_templates - computed: true, optional: true, required: false
    private _supersededTemplates?: string[]; 
    public get supersededTemplates() {
        return this.getListAttribute('superseded_templates');
    }
    public set supersededTemplates(value: string[]) {
        this._supersededTemplates = value;
    }
    public resetSupersededTemplates() {
        this._supersededTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supersededTemplatesInput() {
        return this._supersededTemplates;
    }
}
export interface TemplateDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#template_v2 CcTemplate#template_v2}
    */
    readonly templateV2?: TemplateV2Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#template_v3 CcTemplate#template_v3}
    */
    readonly templateV3?: TemplateV3Property;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template#template_v4 CcTemplate#template_v4}
    */
    readonly templateV4?: TemplateV4Property;
}
export class TemplateDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TemplateDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._templateV2?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateV2 = this._templateV2?.internalValue;
        }
        if (this._templateV3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateV3 = this._templateV3?.internalValue;
        }
        if (this._templateV4?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateV4 = this._templateV4?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TemplateDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._templateV2.internalValue = undefined;
            this._templateV3.internalValue = undefined;
            this._templateV4.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._templateV2.internalValue = value.templateV2;
            this._templateV3.internalValue = value.templateV3;
            this._templateV4.internalValue = value.templateV4;
        }
    }

    // template_v2 - computed: true, optional: true, required: false
    private _templateV2 = new TemplateV2PropertyOutputReference(this, "template_v2");
    public get templateV2() {
        return this._templateV2;
    }
    public putTemplateV2(value: TemplateV2Property) {
        this._templateV2.internalValue = value;
    }
    public resetTemplateV2() {
        this._templateV2.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateV2Input() {
        return this._templateV2.internalValue;
    }

    // template_v3 - computed: true, optional: true, required: false
    private _templateV3 = new TemplateV3PropertyOutputReference(this, "template_v3");
    public get templateV3() {
        return this._templateV3;
    }
    public putTemplateV3(value: TemplateV3Property) {
        this._templateV3.internalValue = value;
    }
    public resetTemplateV3() {
        this._templateV3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateV3Input() {
        return this._templateV3.internalValue;
    }

    // template_v4 - computed: true, optional: true, required: false
    private _templateV4 = new TemplateV4PropertyOutputReference(this, "template_v4");
    public get templateV4() {
        return this._templateV4;
    }
    public putTemplateV4(value: TemplateV4Property) {
        this._templateV4.internalValue = value;
    }
    public resetTemplateV4() {
        this._templateV4.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateV4Input() {
        return this._templateV4.internalValue;
    }
}
}
