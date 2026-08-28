// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAcmeDomainValidationProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the ACME endpoint this domain validation is associated with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#acme_endpoint_arn CcAcmeDomainValidation#acme_endpoint_arn}
    */
    readonly acmeEndpointArn: string;
    /**
    * The domain name to validate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#domain_name CcAcmeDomainValidation#domain_name}
    */
    readonly domainName: string;
    /**
    * Prevalidation method configuration. Currently only DNS-based prevalidation is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#prevalidation_options CcAcmeDomainValidation#prevalidation_options}
    */
    readonly prevalidationOptions: CcAcmeDomainValidation.PrevalidationOptionsProperty;
    /**
    * Tags associated with the domain validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#tags CcAcmeDomainValidation#tags}
    */
    readonly tags?: CcAcmeDomainValidation.TagsItemsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation awscc_certificatemanager_acme_domain_validation}
*/
export class CcAcmeDomainValidation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_certificatemanager_acme_domain_validation";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAcmeDomainValidation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAcmeDomainValidation to import
    * @param importFromId The id of the existing CcAcmeDomainValidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAcmeDomainValidation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_certificatemanager_acme_domain_validation", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation awscc_certificatemanager_acme_domain_validation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAcmeDomainValidationProps
    */
    public constructor(scope: Construct, id: string, config: CcAcmeDomainValidationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_certificatemanager_acme_domain_validation',
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
        this._acmeEndpointArn = config.acmeEndpointArn;
        this._domainName = config.domainName;
        this._prevalidationOptions.internalValue = config.prevalidationOptions;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // acme_endpoint_arn - computed: false, optional: false, required: true
    private _acmeEndpointArn?: string; 
    public get acmeEndpointArn() {
        return this.getStringAttribute('acme_endpoint_arn');
    }
    public set acmeEndpointArn(value: string) {
        this._acmeEndpointArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get acmeEndpointArnInput() {
        return this._acmeEndpointArn;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // prevalidation_options - computed: false, optional: false, required: true
    private _prevalidationOptions = new CcAcmeDomainValidation.PrevalidationOptionsPropertyOutputReference(this, "prevalidation_options");
    public get prevalidationOptions() {
        return this._prevalidationOptions;
    }
    public putPrevalidationOptions(value: CcAcmeDomainValidation.PrevalidationOptionsProperty) {
        this._prevalidationOptions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prevalidationOptionsInput() {
        return this._prevalidationOptions.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAcmeDomainValidation.TagsItemsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAcmeDomainValidation.TagsItemsProperty[] | cdktn.IResolvable) {
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
            acme_endpoint_arn: cdktn.stringToTerraform(this._acmeEndpointArn),
            domain_name: cdktn.stringToTerraform(this._domainName),
            prevalidation_options: ccAcmeDomainValidationPrevalidationOptionsPropertyToTerraform(this._prevalidationOptions.internalValue),
            tags: cdktn.listMapper(ccAcmeDomainValidationTagsItemsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            acme_endpoint_arn: {
                value: cdktn.stringToHclTerraform(this._acmeEndpointArn),
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
            prevalidation_options: {
                value: ccAcmeDomainValidationPrevalidationOptionsPropertyToHclTerraform(this._prevalidationOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAcmeDomainValidation.PrevalidationOptionsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAcmeDomainValidationTagsItemsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAcmeDomainValidation.TagsItemsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAcmeDomainValidationDomainScopePropertyToTerraform(struct?: CcAcmeDomainValidation.DomainScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exact_domain: cdktn.stringToTerraform(struct!.exactDomain),
        subdomains: cdktn.stringToTerraform(struct!.subdomains),
        wildcards: cdktn.stringToTerraform(struct!.wildcards),
    }
}


export function ccAcmeDomainValidationDomainScopePropertyToHclTerraform(struct?: CcAcmeDomainValidation.DomainScopeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exact_domain: {
            value: cdktn.stringToHclTerraform(struct!.exactDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subdomains: {
            value: cdktn.stringToHclTerraform(struct!.subdomains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        wildcards: {
            value: cdktn.stringToHclTerraform(struct!.wildcards),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAcmeDomainValidationDnsPrevalidationOptionsPropertyToTerraform(struct?: CcAcmeDomainValidation.DnsPrevalidationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        domain_scope: ccAcmeDomainValidationDomainScopePropertyToTerraform(struct!.domainScope),
        hosted_zone_id: cdktn.stringToTerraform(struct!.hostedZoneId),
    }
}


export function ccAcmeDomainValidationDnsPrevalidationOptionsPropertyToHclTerraform(struct?: CcAcmeDomainValidation.DnsPrevalidationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        domain_scope: {
            value: ccAcmeDomainValidationDomainScopePropertyToHclTerraform(struct!.domainScope),
            isBlock: true,
            type: "struct",
            storageClassType: "DomainScopeProperty",
        },
        hosted_zone_id: {
            value: cdktn.stringToHclTerraform(struct!.hostedZoneId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAcmeDomainValidationPrevalidationOptionsPropertyToTerraform(struct?: CcAcmeDomainValidation.PrevalidationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dns_prevalidation: ccAcmeDomainValidationDnsPrevalidationOptionsPropertyToTerraform(struct!.dnsPrevalidation),
    }
}


export function ccAcmeDomainValidationPrevalidationOptionsPropertyToHclTerraform(struct?: CcAcmeDomainValidation.PrevalidationOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dns_prevalidation: {
            value: ccAcmeDomainValidationDnsPrevalidationOptionsPropertyToHclTerraform(struct!.dnsPrevalidation),
            isBlock: true,
            type: "struct",
            storageClassType: "DnsPrevalidationOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAcmeDomainValidationTagsItemsPropertyToTerraform(struct?: CcAcmeDomainValidation.TagsItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAcmeDomainValidationTagsItemsPropertyToHclTerraform(struct?: CcAcmeDomainValidation.TagsItemsProperty | cdktn.IResolvable): any {
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


export namespace CcAcmeDomainValidation {
export interface DomainScopeProperty {
    /**
    * Whether certificates may be issued for the exact domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#exact_domain CcAcmeDomainValidation#exact_domain}
    */
    readonly exactDomain?: string;
    /**
    * Whether certificates may be issued for subdomains of the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#subdomains CcAcmeDomainValidation#subdomains}
    */
    readonly subdomains?: string;
    /**
    * Whether wildcard certificates may be issued for the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#wildcards CcAcmeDomainValidation#wildcards}
    */
    readonly wildcards?: string;
}
export class DomainScopePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DomainScopeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exactDomain !== undefined) {
            hasAnyValues = true;
            internalValueResult.exactDomain = this._exactDomain;
        }
        if (this._subdomains !== undefined) {
            hasAnyValues = true;
            internalValueResult.subdomains = this._subdomains;
        }
        if (this._wildcards !== undefined) {
            hasAnyValues = true;
            internalValueResult.wildcards = this._wildcards;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DomainScopeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exactDomain = undefined;
            this._subdomains = undefined;
            this._wildcards = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exactDomain = value.exactDomain;
            this._subdomains = value.subdomains;
            this._wildcards = value.wildcards;
        }
    }

    // exact_domain - computed: true, optional: true, required: false
    private _exactDomain?: string; 
    public get exactDomain() {
        return this.getStringAttribute('exact_domain');
    }
    public set exactDomain(value: string) {
        this._exactDomain = value;
    }
    public resetExactDomain() {
        this._exactDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exactDomainInput() {
        return this._exactDomain;
    }

    // subdomains - computed: true, optional: true, required: false
    private _subdomains?: string; 
    public get subdomains() {
        return this.getStringAttribute('subdomains');
    }
    public set subdomains(value: string) {
        this._subdomains = value;
    }
    public resetSubdomains() {
        this._subdomains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subdomainsInput() {
        return this._subdomains;
    }

    // wildcards - computed: true, optional: true, required: false
    private _wildcards?: string; 
    public get wildcards() {
        return this.getStringAttribute('wildcards');
    }
    public set wildcards(value: string) {
        this._wildcards = value;
    }
    public resetWildcards() {
        this._wildcards = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get wildcardsInput() {
        return this._wildcards;
    }
}
export interface DnsPrevalidationOptionsProperty {
    /**
    * Controls which certificate types are authorized to be issued for the domain via the ACME endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#domain_scope CcAcmeDomainValidation#domain_scope}
    */
    readonly domainScope?: DomainScopeProperty;
    /**
    * The Route 53 hosted zone ID for automatic DNS record management. When provided, the service creates the validation DNS record on the customer's behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#hosted_zone_id CcAcmeDomainValidation#hosted_zone_id}
    */
    readonly hostedZoneId?: string;
}
export class DnsPrevalidationOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DnsPrevalidationOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._domainScope?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.domainScope = this._domainScope?.internalValue;
        }
        if (this._hostedZoneId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostedZoneId = this._hostedZoneId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DnsPrevalidationOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._domainScope.internalValue = undefined;
            this._hostedZoneId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._domainScope.internalValue = value.domainScope;
            this._hostedZoneId = value.hostedZoneId;
        }
    }

    // domain_scope - computed: true, optional: true, required: false
    private _domainScope = new DomainScopePropertyOutputReference(this, "domain_scope");
    public get domainScope() {
        return this._domainScope;
    }
    public putDomainScope(value: DomainScopeProperty) {
        this._domainScope.internalValue = value;
    }
    public resetDomainScope() {
        this._domainScope.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainScopeInput() {
        return this._domainScope.internalValue;
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
}
export interface PrevalidationOptionsProperty {
    /**
    * DNS-based prevalidation options for the domain validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#dns_prevalidation CcAcmeDomainValidation#dns_prevalidation}
    */
    readonly dnsPrevalidation: DnsPrevalidationOptionsProperty;
}
export class PrevalidationOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrevalidationOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dnsPrevalidation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dnsPrevalidation = this._dnsPrevalidation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrevalidationOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dnsPrevalidation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dnsPrevalidation.internalValue = value.dnsPrevalidation;
        }
    }

    // dns_prevalidation - computed: false, optional: false, required: true
    private _dnsPrevalidation = new DnsPrevalidationOptionsPropertyOutputReference(this, "dns_prevalidation");
    public get dnsPrevalidation() {
        return this._dnsPrevalidation;
    }
    public putDnsPrevalidation(value: DnsPrevalidationOptionsProperty) {
        this._dnsPrevalidation.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsPrevalidationInput() {
        return this._dnsPrevalidation.internalValue;
    }
}
export interface TagsItemsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#key CcAcmeDomainValidation#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/certificatemanager_acme_domain_validation#value CcAcmeDomainValidation#value}
    */
    readonly value?: string;
}
export class TagsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsItemsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsItemsProperty | cdktn.IResolvable | undefined) {
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

export class TagsItemsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsItemsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsItemsPropertyOutputReference {
        return new TagsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
