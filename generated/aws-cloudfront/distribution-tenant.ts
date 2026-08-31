// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDistributionTenantProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of the connection group for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CcDistributionTenant#connection_group_id}
    */
    readonly connectionGroupId?: string;
    /**
    * Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#customizations CcDistributionTenant#customizations}
    */
    readonly customizations?: CcDistributionTenant.CustomizationsProperty;
    /**
    * The ID of the multi-tenant distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#distribution_id CcDistributionTenant#distribution_id}
    */
    readonly distributionId: string;
    /**
    * The domains associated with the distribution tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#domains CcDistributionTenant#domains}
    */
    readonly domains: string[];
    /**
    * Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#enabled CcDistributionTenant#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * An object that represents the request for the Amazon CloudFront managed ACM certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#managed_certificate_request CcDistributionTenant#managed_certificate_request}
    */
    readonly managedCertificateRequest?: CcDistributionTenant.ManagedCertificateRequestProperty;
    /**
    * The name of the distribution tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#name CcDistributionTenant#name}
    */
    readonly name: string;
    /**
    * A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#parameters CcDistributionTenant#parameters}
    */
    readonly parameters?: CcDistributionTenant.ParameterProperty[] | cdktn.IResolvable;
    /**
    * A complex type that contains zero or more ``Tag`` elements.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#tags CcDistributionTenant#tags}
    */
    readonly tags?: CcDistributionTenant.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant awscc_cloudfront_distribution_tenant}
*/
export class CcDistributionTenant extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_distribution_tenant";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDistributionTenant resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDistributionTenant to import
    * @param importFromId The id of the existing CcDistributionTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDistributionTenant to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_distribution_tenant", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant awscc_cloudfront_distribution_tenant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDistributionTenantProps
    */
    public constructor(scope: Construct, id: string, config: CcDistributionTenantProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_distribution_tenant',
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
        this._connectionGroupId = config.connectionGroupId;
        this._customizations.internalValue = config.customizations;
        this._distributionId = config.distributionId;
        this._domains = config.domains;
        this._enabled = config.enabled;
        this._managedCertificateRequest.internalValue = config.managedCertificateRequest;
        this._name = config.name;
        this._parameters.internalValue = config.parameters;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // connection_group_id - computed: true, optional: true, required: false
    private _connectionGroupId?: string; 
    public get connectionGroupId() {
        return this.getStringAttribute('connection_group_id');
    }
    public set connectionGroupId(value: string) {
        this._connectionGroupId = value;
    }
    public resetConnectionGroupId() {
        this._connectionGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionGroupIdInput() {
        return this._connectionGroupId;
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // customizations - computed: true, optional: true, required: false
    private _customizations = new CcDistributionTenant.CustomizationsPropertyOutputReference(this, "customizations");
    public get customizations() {
        return this._customizations;
    }
    public putCustomizations(value: CcDistributionTenant.CustomizationsProperty) {
        this._customizations.internalValue = value;
    }
    public resetCustomizations() {
        this._customizations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customizationsInput() {
        return this._customizations.internalValue;
    }

    // distribution_id - computed: false, optional: false, required: true
    private _distributionId?: string; 
    public get distributionId() {
        return this.getStringAttribute('distribution_id');
    }
    public set distributionId(value: string) {
        this._distributionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionIdInput() {
        return this._distributionId;
    }

    // distribution_tenant_id - computed: true, optional: false, required: false
    public get distributionTenantId() {
        return this.getStringAttribute('distribution_tenant_id');
    }

    // domain_results - computed: true, optional: false, required: false
    private _domainResults = new CcDistributionTenant.DomainResultsPropertyList(this, "domain_results", false);
    public get domainResults() {
        return this._domainResults;
    }

    // domains - computed: false, optional: false, required: true
    private _domains?: string[]; 
    public get domains() {
        return this.getListAttribute('domains');
    }
    public set domains(value: string[]) {
        this._domains = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainsInput() {
        return this._domains;
    }

    // e_tag - computed: true, optional: false, required: false
    public get eTag() {
        return this.getStringAttribute('e_tag');
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // managed_certificate_request - computed: true, optional: true, required: false
    private _managedCertificateRequest = new CcDistributionTenant.ManagedCertificateRequestPropertyOutputReference(this, "managed_certificate_request");
    public get managedCertificateRequest() {
        return this._managedCertificateRequest;
    }
    public putManagedCertificateRequest(value: CcDistributionTenant.ManagedCertificateRequestProperty) {
        this._managedCertificateRequest.internalValue = value;
    }
    public resetManagedCertificateRequest() {
        this._managedCertificateRequest.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedCertificateRequestInput() {
        return this._managedCertificateRequest.internalValue;
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

    // parameters - computed: true, optional: true, required: false
    private _parameters = new CcDistributionTenant.ParameterPropertyList(this, "parameters", false);
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: CcDistributionTenant.ParameterProperty[] | cdktn.IResolvable) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDistributionTenant.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDistributionTenant.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            connection_group_id: cdktn.stringToTerraform(this._connectionGroupId),
            customizations: ccDistributionTenantCustomizationsPropertyToTerraform(this._customizations.internalValue),
            distribution_id: cdktn.stringToTerraform(this._distributionId),
            domains: cdktn.listMapper(cdktn.stringToTerraform, false)(this._domains),
            enabled: cdktn.booleanToTerraform(this._enabled),
            managed_certificate_request: ccDistributionTenantManagedCertificateRequestPropertyToTerraform(this._managedCertificateRequest.internalValue),
            name: cdktn.stringToTerraform(this._name),
            parameters: cdktn.listMapper(ccDistributionTenantParameterPropertyToTerraform, false)(this._parameters.internalValue),
            tags: cdktn.listMapper(ccDistributionTenantTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            connection_group_id: {
                value: cdktn.stringToHclTerraform(this._connectionGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            customizations: {
                value: ccDistributionTenantCustomizationsPropertyToHclTerraform(this._customizations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDistributionTenant.CustomizationsProperty",
            },
            distribution_id: {
                value: cdktn.stringToHclTerraform(this._distributionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domains: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._domains),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            enabled: {
                value: cdktn.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            managed_certificate_request: {
                value: ccDistributionTenantManagedCertificateRequestPropertyToHclTerraform(this._managedCertificateRequest.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDistributionTenant.ManagedCertificateRequestProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameters: {
                value: cdktn.listMapperHcl(ccDistributionTenantParameterPropertyToHclTerraform, false)(this._parameters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDistributionTenant.ParameterPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDistributionTenantTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDistributionTenant.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDistributionTenantCertificatePropertyToTerraform(struct?: CcDistributionTenant.CertificateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccDistributionTenantCertificatePropertyToHclTerraform(struct?: CcDistributionTenant.CertificateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionTenantGeoRestrictionCustomizationPropertyToTerraform(struct?: CcDistributionTenant.GeoRestrictionCustomizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.locations),
        restriction_type: cdktn.stringToTerraform(struct!.restrictionType),
    }
}


export function ccDistributionTenantGeoRestrictionCustomizationPropertyToHclTerraform(struct?: CcDistributionTenant.GeoRestrictionCustomizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        locations: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.locations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        restriction_type: {
            value: cdktn.stringToHclTerraform(struct!.restrictionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionTenantWebAclCustomizationPropertyToTerraform(struct?: CcDistributionTenant.WebAclCustomizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action: cdktn.stringToTerraform(struct!.action),
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccDistributionTenantWebAclCustomizationPropertyToHclTerraform(struct?: CcDistributionTenant.WebAclCustomizationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionTenantCustomizationsPropertyToTerraform(struct?: CcDistributionTenant.CustomizationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate: ccDistributionTenantCertificatePropertyToTerraform(struct!.certificate),
        geo_restrictions: ccDistributionTenantGeoRestrictionCustomizationPropertyToTerraform(struct!.geoRestrictions),
        web_acl: ccDistributionTenantWebAclCustomizationPropertyToTerraform(struct!.webAcl),
    }
}


export function ccDistributionTenantCustomizationsPropertyToHclTerraform(struct?: CcDistributionTenant.CustomizationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate: {
            value: ccDistributionTenantCertificatePropertyToHclTerraform(struct!.certificate),
            isBlock: true,
            type: "struct",
            storageClassType: "CertificateProperty",
        },
        geo_restrictions: {
            value: ccDistributionTenantGeoRestrictionCustomizationPropertyToHclTerraform(struct!.geoRestrictions),
            isBlock: true,
            type: "struct",
            storageClassType: "GeoRestrictionCustomizationProperty",
        },
        web_acl: {
            value: ccDistributionTenantWebAclCustomizationPropertyToHclTerraform(struct!.webAcl),
            isBlock: true,
            type: "struct",
            storageClassType: "WebAclCustomizationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionTenantDomainResultsPropertyToTerraform(struct?: CcDistributionTenant.DomainResultsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDistributionTenantDomainResultsPropertyToHclTerraform(struct?: CcDistributionTenant.DomainResultsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDistributionTenantManagedCertificateRequestPropertyToTerraform(struct?: CcDistributionTenant.ManagedCertificateRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_transparency_logging_preference: cdktn.stringToTerraform(struct!.certificateTransparencyLoggingPreference),
        primary_domain_name: cdktn.stringToTerraform(struct!.primaryDomainName),
        validation_token_host: cdktn.stringToTerraform(struct!.validationTokenHost),
    }
}


export function ccDistributionTenantManagedCertificateRequestPropertyToHclTerraform(struct?: CcDistributionTenant.ManagedCertificateRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_transparency_logging_preference: {
            value: cdktn.stringToHclTerraform(struct!.certificateTransparencyLoggingPreference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        primary_domain_name: {
            value: cdktn.stringToHclTerraform(struct!.primaryDomainName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation_token_host: {
            value: cdktn.stringToHclTerraform(struct!.validationTokenHost),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionTenantParameterPropertyToTerraform(struct?: CcDistributionTenant.ParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDistributionTenantParameterPropertyToHclTerraform(struct?: CcDistributionTenant.ParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccDistributionTenantTagPropertyToTerraform(struct?: CcDistributionTenant.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDistributionTenantTagPropertyToHclTerraform(struct?: CcDistributionTenant.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDistributionTenant {
export interface CertificateProperty {
    /**
    * The Amazon Resource Name (ARN) of the ACM certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#arn CcDistributionTenant#arn}
    */
    readonly arn?: string;
}
export class CertificatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CertificateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertificateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }
}
export interface GeoRestrictionCustomizationProperty {
    /**
    * The locations for geographic restrictions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#locations CcDistributionTenant#locations}
    */
    readonly locations?: string[];
    /**
    * The method that you want to use to restrict distribution of your content by country:
    *   +  ``none``: No geographic restriction is enabled, meaning access to content is not restricted by client geo location.
    *   +  ``blacklist``: The ``Location`` elements specify the countries in which you don't want CloudFront to distribute your content.
    *   +  ``whitelist``: The ``Location`` elements specify the countries in which you want CloudFront to distribute your content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#restriction_type CcDistributionTenant#restriction_type}
    */
    readonly restrictionType?: string;
}
export class GeoRestrictionCustomizationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GeoRestrictionCustomizationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._locations !== undefined) {
            hasAnyValues = true;
            internalValueResult.locations = this._locations;
        }
        if (this._restrictionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictionType = this._restrictionType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GeoRestrictionCustomizationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._locations = undefined;
            this._restrictionType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._locations = value.locations;
            this._restrictionType = value.restrictionType;
        }
    }

    // locations - computed: true, optional: true, required: false
    private _locations?: string[]; 
    public get locations() {
        return this.getListAttribute('locations');
    }
    public set locations(value: string[]) {
        this._locations = value;
    }
    public resetLocations() {
        this._locations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationsInput() {
        return this._locations;
    }

    // restriction_type - computed: true, optional: true, required: false
    private _restrictionType?: string; 
    public get restrictionType() {
        return this.getStringAttribute('restriction_type');
    }
    public set restrictionType(value: string) {
        this._restrictionType = value;
    }
    public resetRestrictionType() {
        this._restrictionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictionTypeInput() {
        return this._restrictionType;
    }
}
export interface WebAclCustomizationProperty {
    /**
    * The action for the WAF web ACL customization. You can specify ``override`` to specify a separate WAF web ACL for the distribution tenant. If you specify ``disable``, the distribution tenant won't have WAF web ACL protections and won't inherit from the multi-tenant distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#action CcDistributionTenant#action}
    */
    readonly action?: string;
    /**
    * The Amazon Resource Name (ARN) of the WAF web ACL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#arn CcDistributionTenant#arn}
    */
    readonly arn?: string;
}
export class WebAclCustomizationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WebAclCustomizationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebAclCustomizationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._action = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._action = value.action;
            this._arn = value.arn;
        }
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }
}
export interface CustomizationsProperty {
    /**
    * The ACMlong (ACM) certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#certificate CcDistributionTenant#certificate}
    */
    readonly certificate?: CertificateProperty;
    /**
    * The geographic restrictions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#geo_restrictions CcDistributionTenant#geo_restrictions}
    */
    readonly geoRestrictions?: GeoRestrictionCustomizationProperty;
    /**
    * The WAF web ACL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#web_acl CcDistributionTenant#web_acl}
    */
    readonly webAcl?: WebAclCustomizationProperty;
}
export class CustomizationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomizationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificate = this._certificate?.internalValue;
        }
        if (this._geoRestrictions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.geoRestrictions = this._geoRestrictions?.internalValue;
        }
        if (this._webAcl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.webAcl = this._webAcl?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomizationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificate.internalValue = undefined;
            this._geoRestrictions.internalValue = undefined;
            this._webAcl.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificate.internalValue = value.certificate;
            this._geoRestrictions.internalValue = value.geoRestrictions;
            this._webAcl.internalValue = value.webAcl;
        }
    }

    // certificate - computed: true, optional: true, required: false
    private _certificate = new CertificatePropertyOutputReference(this, "certificate");
    public get certificate() {
        return this._certificate;
    }
    public putCertificate(value: CertificateProperty) {
        this._certificate.internalValue = value;
    }
    public resetCertificate() {
        this._certificate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
        return this._certificate.internalValue;
    }

    // geo_restrictions - computed: true, optional: true, required: false
    private _geoRestrictions = new GeoRestrictionCustomizationPropertyOutputReference(this, "geo_restrictions");
    public get geoRestrictions() {
        return this._geoRestrictions;
    }
    public putGeoRestrictions(value: GeoRestrictionCustomizationProperty) {
        this._geoRestrictions.internalValue = value;
    }
    public resetGeoRestrictions() {
        this._geoRestrictions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get geoRestrictionsInput() {
        return this._geoRestrictions.internalValue;
    }

    // web_acl - computed: true, optional: true, required: false
    private _webAcl = new WebAclCustomizationPropertyOutputReference(this, "web_acl");
    public get webAcl() {
        return this._webAcl;
    }
    public putWebAcl(value: WebAclCustomizationProperty) {
        this._webAcl.internalValue = value;
    }
    public resetWebAcl() {
        this._webAcl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webAclInput() {
        return this._webAcl.internalValue;
    }
}
export interface DomainResultsProperty {
}
export class DomainResultsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): DomainResultsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DomainResultsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // domain - computed: true, optional: false, required: false
    public get domain() {
        return this.getStringAttribute('domain');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }
}

export class DomainResultsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): DomainResultsPropertyOutputReference {
        return new DomainResultsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ManagedCertificateRequestProperty {
    /**
    * You can opt out of certificate transparency logging by specifying the ``disabled`` option. Opt in by specifying ``enabled``. For more information, see [Certificate Transparency Logging](https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency) in the *User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#certificate_transparency_logging_preference CcDistributionTenant#certificate_transparency_logging_preference}
    */
    readonly certificateTransparencyLoggingPreference?: string;
    /**
    * The primary domain name associated with the CloudFront managed ACM certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#primary_domain_name CcDistributionTenant#primary_domain_name}
    */
    readonly primaryDomainName?: string;
    /**
    * Specify how the HTTP validation token will be served when requesting the CloudFront managed ACM certificate.
    *   +  For ``cloudfront``, CloudFront will automatically serve the validation token. Choose this mode if you can point the domain's DNS to CloudFront immediately.
    *   +  For ``self-hosted``, you serve the validation token from your existing infrastructure. Choose this mode when you need to maintain current traffic flow while your certificate is being issued. You can place the validation token at the well-known path on your existing web server, wait for ACM to validate and issue the certificate, and then update your DNS to point to CloudFront.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#validation_token_host CcDistributionTenant#validation_token_host}
    */
    readonly validationTokenHost?: string;
}
export class ManagedCertificateRequestPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManagedCertificateRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateTransparencyLoggingPreference !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateTransparencyLoggingPreference = this._certificateTransparencyLoggingPreference;
        }
        if (this._primaryDomainName !== undefined) {
            hasAnyValues = true;
            internalValueResult.primaryDomainName = this._primaryDomainName;
        }
        if (this._validationTokenHost !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationTokenHost = this._validationTokenHost;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManagedCertificateRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateTransparencyLoggingPreference = undefined;
            this._primaryDomainName = undefined;
            this._validationTokenHost = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateTransparencyLoggingPreference = value.certificateTransparencyLoggingPreference;
            this._primaryDomainName = value.primaryDomainName;
            this._validationTokenHost = value.validationTokenHost;
        }
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

    // primary_domain_name - computed: true, optional: true, required: false
    private _primaryDomainName?: string; 
    public get primaryDomainName() {
        return this.getStringAttribute('primary_domain_name');
    }
    public set primaryDomainName(value: string) {
        this._primaryDomainName = value;
    }
    public resetPrimaryDomainName() {
        this._primaryDomainName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryDomainNameInput() {
        return this._primaryDomainName;
    }

    // validation_token_host - computed: true, optional: true, required: false
    private _validationTokenHost?: string; 
    public get validationTokenHost() {
        return this.getStringAttribute('validation_token_host');
    }
    public set validationTokenHost(value: string) {
        this._validationTokenHost = value;
    }
    public resetValidationTokenHost() {
        this._validationTokenHost = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationTokenHostInput() {
        return this._validationTokenHost;
    }
}
export interface ParameterProperty {
    /**
    * The parameter name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#name CcDistributionTenant#name}
    */
    readonly name?: string;
    /**
    * The parameter value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#value CcDistributionTenant#value}
    */
    readonly value?: string;
}
export class ParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
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

export class ParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : ParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): ParameterPropertyOutputReference {
        return new ParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * A string that contains ``Tag`` key.
    *  The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#key CcDistributionTenant#key}
    */
    readonly key?: string;
    /**
    * A string that contains an optional ``Tag`` value.
    *  The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudfront_distribution_tenant#value CcDistributionTenant#value}
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
