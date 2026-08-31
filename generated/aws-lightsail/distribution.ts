// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDistributionProps extends cdktn.TerraformMetaArguments {
    /**
    * The bundle ID to use for the distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#bundle_id CcDistribution#bundle_id}
    */
    readonly bundleId: string;
    /**
    * An object that describes the cache behavior settings for the distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cache_behavior_settings CcDistribution#cache_behavior_settings}
    */
    readonly cacheBehaviorSettings?: CcDistribution.CacheSettingsProperty;
    /**
    * An array of objects that describe the per-path cache behavior for the distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cache_behaviors CcDistribution#cache_behaviors}
    */
    readonly cacheBehaviors?: CcDistribution.CacheBehaviorPerPathProperty[] | cdktn.IResolvable;
    /**
    * The certificate attached to the Distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#certificate_name CcDistribution#certificate_name}
    */
    readonly certificateName?: string;
    /**
    * An object that describes the default cache behavior for the distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#default_cache_behavior CcDistribution#default_cache_behavior}
    */
    readonly defaultCacheBehavior: CcDistribution.CacheBehaviorProperty;
    /**
    * The name for the distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#distribution_name CcDistribution#distribution_name}
    */
    readonly distributionName: string;
    /**
    * The IP address type for the distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#ip_address_type CcDistribution#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Indicates whether the distribution is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#is_enabled CcDistribution#is_enabled}
    */
    readonly isEnabled?: boolean | cdktn.IResolvable;
    /**
    * An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#origin CcDistribution#origin}
    */
    readonly origin: CcDistribution.InputOriginProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#tags CcDistribution#tags}
    */
    readonly tags?: CcDistribution.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution awscc_lightsail_distribution}
*/
export class CcDistribution extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lightsail_distribution";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDistribution resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDistribution to import
    * @param importFromId The id of the existing CcDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDistribution to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_distribution", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution awscc_lightsail_distribution} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDistributionProps
    */
    public constructor(scope: Construct, id: string, config: CcDistributionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lightsail_distribution',
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
        this._bundleId = config.bundleId;
        this._cacheBehaviorSettings.internalValue = config.cacheBehaviorSettings;
        this._cacheBehaviors.internalValue = config.cacheBehaviors;
        this._certificateName = config.certificateName;
        this._defaultCacheBehavior.internalValue = config.defaultCacheBehavior;
        this._distributionName = config.distributionName;
        this._ipAddressType = config.ipAddressType;
        this._isEnabled = config.isEnabled;
        this._origin.internalValue = config.origin;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // able_to_update_bundle - computed: true, optional: false, required: false
    public get ableToUpdateBundle() {
        return this.getBooleanAttribute('able_to_update_bundle');
    }

    // bundle_id - computed: false, optional: false, required: true
    private _bundleId?: string; 
    public get bundleId() {
        return this.getStringAttribute('bundle_id');
    }
    public set bundleId(value: string) {
        this._bundleId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleIdInput() {
        return this._bundleId;
    }

    // cache_behavior_settings - computed: true, optional: true, required: false
    private _cacheBehaviorSettings = new CcDistribution.CacheSettingsPropertyOutputReference(this, "cache_behavior_settings");
    public get cacheBehaviorSettings() {
        return this._cacheBehaviorSettings;
    }
    public putCacheBehaviorSettings(value: CcDistribution.CacheSettingsProperty) {
        this._cacheBehaviorSettings.internalValue = value;
    }
    public resetCacheBehaviorSettings() {
        this._cacheBehaviorSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheBehaviorSettingsInput() {
        return this._cacheBehaviorSettings.internalValue;
    }

    // cache_behaviors - computed: true, optional: true, required: false
    private _cacheBehaviors = new CcDistribution.CacheBehaviorPerPathPropertyList(this, "cache_behaviors", true);
    public get cacheBehaviors() {
        return this._cacheBehaviors;
    }
    public putCacheBehaviors(value: CcDistribution.CacheBehaviorPerPathProperty[] | cdktn.IResolvable) {
        this._cacheBehaviors.internalValue = value;
    }
    public resetCacheBehaviors() {
        this._cacheBehaviors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheBehaviorsInput() {
        return this._cacheBehaviors.internalValue;
    }

    // certificate_name - computed: true, optional: true, required: false
    private _certificateName?: string; 
    public get certificateName() {
        return this.getStringAttribute('certificate_name');
    }
    public set certificateName(value: string) {
        this._certificateName = value;
    }
    public resetCertificateName() {
        this._certificateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateNameInput() {
        return this._certificateName;
    }

    // default_cache_behavior - computed: false, optional: false, required: true
    private _defaultCacheBehavior = new CcDistribution.CacheBehaviorPropertyOutputReference(this, "default_cache_behavior");
    public get defaultCacheBehavior() {
        return this._defaultCacheBehavior;
    }
    public putDefaultCacheBehavior(value: CcDistribution.CacheBehaviorProperty) {
        this._defaultCacheBehavior.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultCacheBehaviorInput() {
        return this._defaultCacheBehavior.internalValue;
    }

    // distribution_arn - computed: true, optional: false, required: false
    public get distributionArn() {
        return this.getStringAttribute('distribution_arn');
    }

    // distribution_name - computed: false, optional: false, required: true
    private _distributionName?: string; 
    public get distributionName() {
        return this.getStringAttribute('distribution_name');
    }
    public set distributionName(value: string) {
        this._distributionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get distributionNameInput() {
        return this._distributionName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }

    // is_enabled - computed: true, optional: true, required: false
    private _isEnabled?: boolean | cdktn.IResolvable; 
    public get isEnabled() {
        return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktn.IResolvable) {
        this._isEnabled = value;
    }
    public resetIsEnabled() {
        this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
        return this._isEnabled;
    }

    // origin - computed: false, optional: false, required: true
    private _origin = new CcDistribution.InputOriginPropertyOutputReference(this, "origin");
    public get origin() {
        return this._origin;
    }
    public putOrigin(value: CcDistribution.InputOriginProperty) {
        this._origin.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get originInput() {
        return this._origin.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDistribution.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDistribution.TagProperty[] | cdktn.IResolvable) {
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
            bundle_id: cdktn.stringToTerraform(this._bundleId),
            cache_behavior_settings: ccDistributionCacheSettingsPropertyToTerraform(this._cacheBehaviorSettings.internalValue),
            cache_behaviors: cdktn.listMapper(ccDistributionCacheBehaviorPerPathPropertyToTerraform, false)(this._cacheBehaviors.internalValue),
            certificate_name: cdktn.stringToTerraform(this._certificateName),
            default_cache_behavior: ccDistributionCacheBehaviorPropertyToTerraform(this._defaultCacheBehavior.internalValue),
            distribution_name: cdktn.stringToTerraform(this._distributionName),
            ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
            is_enabled: cdktn.booleanToTerraform(this._isEnabled),
            origin: ccDistributionInputOriginPropertyToTerraform(this._origin.internalValue),
            tags: cdktn.listMapper(ccDistributionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bundle_id: {
                value: cdktn.stringToHclTerraform(this._bundleId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cache_behavior_settings: {
                value: ccDistributionCacheSettingsPropertyToHclTerraform(this._cacheBehaviorSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDistribution.CacheSettingsProperty",
            },
            cache_behaviors: {
                value: cdktn.listMapperHcl(ccDistributionCacheBehaviorPerPathPropertyToHclTerraform, false)(this._cacheBehaviors.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDistribution.CacheBehaviorPerPathPropertyList",
            },
            certificate_name: {
                value: cdktn.stringToHclTerraform(this._certificateName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_cache_behavior: {
                value: ccDistributionCacheBehaviorPropertyToHclTerraform(this._defaultCacheBehavior.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDistribution.CacheBehaviorProperty",
            },
            distribution_name: {
                value: cdktn.stringToHclTerraform(this._distributionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_address_type: {
                value: cdktn.stringToHclTerraform(this._ipAddressType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_enabled: {
                value: cdktn.booleanToHclTerraform(this._isEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            origin: {
                value: ccDistributionInputOriginPropertyToHclTerraform(this._origin.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDistribution.InputOriginProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDistributionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDistribution.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDistributionCookieObjectPropertyToTerraform(struct?: CcDistribution.CookieObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cookies_allow_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cookiesAllowList),
        option: cdktn.stringToTerraform(struct!.option),
    }
}


export function ccDistributionCookieObjectPropertyToHclTerraform(struct?: CcDistribution.CookieObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cookies_allow_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cookiesAllowList),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        option: {
            value: cdktn.stringToHclTerraform(struct!.option),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionHeaderObjectPropertyToTerraform(struct?: CcDistribution.HeaderObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        headers_allow_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.headersAllowList),
        option: cdktn.stringToTerraform(struct!.option),
    }
}


export function ccDistributionHeaderObjectPropertyToHclTerraform(struct?: CcDistribution.HeaderObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        headers_allow_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.headersAllowList),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        option: {
            value: cdktn.stringToHclTerraform(struct!.option),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionQueryStringObjectPropertyToTerraform(struct?: CcDistribution.QueryStringObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        option: cdktn.booleanToTerraform(struct!.option),
        query_strings_allow_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.queryStringsAllowList),
    }
}


export function ccDistributionQueryStringObjectPropertyToHclTerraform(struct?: CcDistribution.QueryStringObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        option: {
            value: cdktn.booleanToHclTerraform(struct!.option),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        query_strings_allow_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.queryStringsAllowList),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionCacheSettingsPropertyToTerraform(struct?: CcDistribution.CacheSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_http_methods: cdktn.stringToTerraform(struct!.allowedHttpMethods),
        cached_http_methods: cdktn.stringToTerraform(struct!.cachedHttpMethods),
        default_ttl: cdktn.numberToTerraform(struct!.defaultTtl),
        forwarded_cookies: ccDistributionCookieObjectPropertyToTerraform(struct!.forwardedCookies),
        forwarded_headers: ccDistributionHeaderObjectPropertyToTerraform(struct!.forwardedHeaders),
        forwarded_query_strings: ccDistributionQueryStringObjectPropertyToTerraform(struct!.forwardedQueryStrings),
        maximum_ttl: cdktn.numberToTerraform(struct!.maximumTtl),
        minimum_ttl: cdktn.numberToTerraform(struct!.minimumTtl),
    }
}


export function ccDistributionCacheSettingsPropertyToHclTerraform(struct?: CcDistribution.CacheSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_http_methods: {
            value: cdktn.stringToHclTerraform(struct!.allowedHttpMethods),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cached_http_methods: {
            value: cdktn.stringToHclTerraform(struct!.cachedHttpMethods),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        default_ttl: {
            value: cdktn.numberToHclTerraform(struct!.defaultTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        forwarded_cookies: {
            value: ccDistributionCookieObjectPropertyToHclTerraform(struct!.forwardedCookies),
            isBlock: true,
            type: "struct",
            storageClassType: "CookieObjectProperty",
        },
        forwarded_headers: {
            value: ccDistributionHeaderObjectPropertyToHclTerraform(struct!.forwardedHeaders),
            isBlock: true,
            type: "struct",
            storageClassType: "HeaderObjectProperty",
        },
        forwarded_query_strings: {
            value: ccDistributionQueryStringObjectPropertyToHclTerraform(struct!.forwardedQueryStrings),
            isBlock: true,
            type: "struct",
            storageClassType: "QueryStringObjectProperty",
        },
        maximum_ttl: {
            value: cdktn.numberToHclTerraform(struct!.maximumTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum_ttl: {
            value: cdktn.numberToHclTerraform(struct!.minimumTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionCacheBehaviorPerPathPropertyToTerraform(struct?: CcDistribution.CacheBehaviorPerPathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        behavior: cdktn.stringToTerraform(struct!.behavior),
        path: cdktn.stringToTerraform(struct!.path),
    }
}


export function ccDistributionCacheBehaviorPerPathPropertyToHclTerraform(struct?: CcDistribution.CacheBehaviorPerPathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        behavior: {
            value: cdktn.stringToHclTerraform(struct!.behavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionCacheBehaviorPropertyToTerraform(struct?: CcDistribution.CacheBehaviorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        behavior: cdktn.stringToTerraform(struct!.behavior),
    }
}


export function ccDistributionCacheBehaviorPropertyToHclTerraform(struct?: CcDistribution.CacheBehaviorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        behavior: {
            value: cdktn.stringToHclTerraform(struct!.behavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionInputOriginPropertyToTerraform(struct?: CcDistribution.InputOriginProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        protocol_policy: cdktn.stringToTerraform(struct!.protocolPolicy),
        region_name: cdktn.stringToTerraform(struct!.regionName),
    }
}


export function ccDistributionInputOriginPropertyToHclTerraform(struct?: CcDistribution.InputOriginProperty | cdktn.IResolvable): any {
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
        protocol_policy: {
            value: cdktn.stringToHclTerraform(struct!.protocolPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region_name: {
            value: cdktn.stringToHclTerraform(struct!.regionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDistributionTagPropertyToTerraform(struct?: CcDistribution.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDistributionTagPropertyToHclTerraform(struct?: CcDistribution.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDistribution {
export interface CookieObjectProperty {
    /**
    * The specific cookies to forward to your distribution's origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cookies_allow_list CcDistribution#cookies_allow_list}
    */
    readonly cookiesAllowList?: string[];
    /**
    * Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#option CcDistribution#option}
    */
    readonly option?: string;
}
export class CookieObjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CookieObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cookiesAllowList !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookiesAllowList = this._cookiesAllowList;
        }
        if (this._option !== undefined) {
            hasAnyValues = true;
            internalValueResult.option = this._option;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CookieObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cookiesAllowList = undefined;
            this._option = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cookiesAllowList = value.cookiesAllowList;
            this._option = value.option;
        }
    }

    // cookies_allow_list - computed: true, optional: true, required: false
    private _cookiesAllowList?: string[]; 
    public get cookiesAllowList() {
        return cdktn.Fn.tolist(this.getListAttribute('cookies_allow_list'));
    }
    public set cookiesAllowList(value: string[]) {
        this._cookiesAllowList = value;
    }
    public resetCookiesAllowList() {
        this._cookiesAllowList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cookiesAllowListInput() {
        return this._cookiesAllowList;
    }

    // option - computed: true, optional: true, required: false
    private _option?: string; 
    public get option() {
        return this.getStringAttribute('option');
    }
    public set option(value: string) {
        this._option = value;
    }
    public resetOption() {
        this._option = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionInput() {
        return this._option;
    }
}
export interface HeaderObjectProperty {
    /**
    * The specific headers to forward to your distribution's origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#headers_allow_list CcDistribution#headers_allow_list}
    */
    readonly headersAllowList?: string[];
    /**
    * The headers that you want your distribution to forward to your origin and base caching on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#option CcDistribution#option}
    */
    readonly option?: string;
}
export class HeaderObjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HeaderObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headersAllowList !== undefined) {
            hasAnyValues = true;
            internalValueResult.headersAllowList = this._headersAllowList;
        }
        if (this._option !== undefined) {
            hasAnyValues = true;
            internalValueResult.option = this._option;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HeaderObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headersAllowList = undefined;
            this._option = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headersAllowList = value.headersAllowList;
            this._option = value.option;
        }
    }

    // headers_allow_list - computed: true, optional: true, required: false
    private _headersAllowList?: string[]; 
    public get headersAllowList() {
        return cdktn.Fn.tolist(this.getListAttribute('headers_allow_list'));
    }
    public set headersAllowList(value: string[]) {
        this._headersAllowList = value;
    }
    public resetHeadersAllowList() {
        this._headersAllowList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersAllowListInput() {
        return this._headersAllowList;
    }

    // option - computed: true, optional: true, required: false
    private _option?: string; 
    public get option() {
        return this.getStringAttribute('option');
    }
    public set option(value: string) {
        this._option = value;
    }
    public resetOption() {
        this._option = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionInput() {
        return this._option;
    }
}
export interface QueryStringObjectProperty {
    /**
    * Indicates whether the distribution forwards and caches based on query strings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#option CcDistribution#option}
    */
    readonly option?: boolean | cdktn.IResolvable;
    /**
    * The specific query strings that the distribution forwards to the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#query_strings_allow_list CcDistribution#query_strings_allow_list}
    */
    readonly queryStringsAllowList?: string[];
}
export class QueryStringObjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueryStringObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._option !== undefined) {
            hasAnyValues = true;
            internalValueResult.option = this._option;
        }
        if (this._queryStringsAllowList !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringsAllowList = this._queryStringsAllowList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryStringObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._option = undefined;
            this._queryStringsAllowList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._option = value.option;
            this._queryStringsAllowList = value.queryStringsAllowList;
        }
    }

    // option - computed: true, optional: true, required: false
    private _option?: boolean | cdktn.IResolvable; 
    public get option() {
        return this.getBooleanAttribute('option');
    }
    public set option(value: boolean | cdktn.IResolvable) {
        this._option = value;
    }
    public resetOption() {
        this._option = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionInput() {
        return this._option;
    }

    // query_strings_allow_list - computed: true, optional: true, required: false
    private _queryStringsAllowList?: string[]; 
    public get queryStringsAllowList() {
        return cdktn.Fn.tolist(this.getListAttribute('query_strings_allow_list'));
    }
    public set queryStringsAllowList(value: string[]) {
        this._queryStringsAllowList = value;
    }
    public resetQueryStringsAllowList() {
        this._queryStringsAllowList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringsAllowListInput() {
        return this._queryStringsAllowList;
    }
}
export interface CacheSettingsProperty {
    /**
    * The HTTP methods that are processed and forwarded to the distribution's origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#allowed_http_methods CcDistribution#allowed_http_methods}
    */
    readonly allowedHttpMethods?: string;
    /**
    * The HTTP method responses that are cached by your distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cached_http_methods CcDistribution#cached_http_methods}
    */
    readonly cachedHttpMethods?: string;
    /**
    * The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#default_ttl CcDistribution#default_ttl}
    */
    readonly defaultTtl?: number;
    /**
    * An object that describes the cookies that are forwarded to the origin. Your content is cached based on the cookies that are forwarded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#forwarded_cookies CcDistribution#forwarded_cookies}
    */
    readonly forwardedCookies?: CookieObjectProperty;
    /**
    * An object that describes the headers that are forwarded to the origin. Your content is cached based on the headers that are forwarded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#forwarded_headers CcDistribution#forwarded_headers}
    */
    readonly forwardedHeaders?: HeaderObjectProperty;
    /**
    * An object that describes the query strings that are forwarded to the origin. Your content is cached based on the query strings that are forwarded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#forwarded_query_strings CcDistribution#forwarded_query_strings}
    */
    readonly forwardedQueryStrings?: QueryStringObjectProperty;
    /**
    * The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#maximum_ttl CcDistribution#maximum_ttl}
    */
    readonly maximumTtl?: number;
    /**
    * The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#minimum_ttl CcDistribution#minimum_ttl}
    */
    readonly minimumTtl?: number;
}
export class CacheSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CacheSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedHttpMethods !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedHttpMethods = this._allowedHttpMethods;
        }
        if (this._cachedHttpMethods !== undefined) {
            hasAnyValues = true;
            internalValueResult.cachedHttpMethods = this._cachedHttpMethods;
        }
        if (this._defaultTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultTtl = this._defaultTtl;
        }
        if (this._forwardedCookies?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardedCookies = this._forwardedCookies?.internalValue;
        }
        if (this._forwardedHeaders?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardedHeaders = this._forwardedHeaders?.internalValue;
        }
        if (this._forwardedQueryStrings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.forwardedQueryStrings = this._forwardedQueryStrings?.internalValue;
        }
        if (this._maximumTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumTtl = this._maximumTtl;
        }
        if (this._minimumTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumTtl = this._minimumTtl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CacheSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedHttpMethods = undefined;
            this._cachedHttpMethods = undefined;
            this._defaultTtl = undefined;
            this._forwardedCookies.internalValue = undefined;
            this._forwardedHeaders.internalValue = undefined;
            this._forwardedQueryStrings.internalValue = undefined;
            this._maximumTtl = undefined;
            this._minimumTtl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedHttpMethods = value.allowedHttpMethods;
            this._cachedHttpMethods = value.cachedHttpMethods;
            this._defaultTtl = value.defaultTtl;
            this._forwardedCookies.internalValue = value.forwardedCookies;
            this._forwardedHeaders.internalValue = value.forwardedHeaders;
            this._forwardedQueryStrings.internalValue = value.forwardedQueryStrings;
            this._maximumTtl = value.maximumTtl;
            this._minimumTtl = value.minimumTtl;
        }
    }

    // allowed_http_methods - computed: true, optional: true, required: false
    private _allowedHttpMethods?: string; 
    public get allowedHttpMethods() {
        return this.getStringAttribute('allowed_http_methods');
    }
    public set allowedHttpMethods(value: string) {
        this._allowedHttpMethods = value;
    }
    public resetAllowedHttpMethods() {
        this._allowedHttpMethods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedHttpMethodsInput() {
        return this._allowedHttpMethods;
    }

    // cached_http_methods - computed: true, optional: true, required: false
    private _cachedHttpMethods?: string; 
    public get cachedHttpMethods() {
        return this.getStringAttribute('cached_http_methods');
    }
    public set cachedHttpMethods(value: string) {
        this._cachedHttpMethods = value;
    }
    public resetCachedHttpMethods() {
        this._cachedHttpMethods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachedHttpMethodsInput() {
        return this._cachedHttpMethods;
    }

    // default_ttl - computed: true, optional: true, required: false
    private _defaultTtl?: number; 
    public get defaultTtl() {
        return this.getNumberAttribute('default_ttl');
    }
    public set defaultTtl(value: number) {
        this._defaultTtl = value;
    }
    public resetDefaultTtl() {
        this._defaultTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultTtlInput() {
        return this._defaultTtl;
    }

    // forwarded_cookies - computed: true, optional: true, required: false
    private _forwardedCookies = new CookieObjectPropertyOutputReference(this, "forwarded_cookies");
    public get forwardedCookies() {
        return this._forwardedCookies;
    }
    public putForwardedCookies(value: CookieObjectProperty) {
        this._forwardedCookies.internalValue = value;
    }
    public resetForwardedCookies() {
        this._forwardedCookies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardedCookiesInput() {
        return this._forwardedCookies.internalValue;
    }

    // forwarded_headers - computed: true, optional: true, required: false
    private _forwardedHeaders = new HeaderObjectPropertyOutputReference(this, "forwarded_headers");
    public get forwardedHeaders() {
        return this._forwardedHeaders;
    }
    public putForwardedHeaders(value: HeaderObjectProperty) {
        this._forwardedHeaders.internalValue = value;
    }
    public resetForwardedHeaders() {
        this._forwardedHeaders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardedHeadersInput() {
        return this._forwardedHeaders.internalValue;
    }

    // forwarded_query_strings - computed: true, optional: true, required: false
    private _forwardedQueryStrings = new QueryStringObjectPropertyOutputReference(this, "forwarded_query_strings");
    public get forwardedQueryStrings() {
        return this._forwardedQueryStrings;
    }
    public putForwardedQueryStrings(value: QueryStringObjectProperty) {
        this._forwardedQueryStrings.internalValue = value;
    }
    public resetForwardedQueryStrings() {
        this._forwardedQueryStrings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forwardedQueryStringsInput() {
        return this._forwardedQueryStrings.internalValue;
    }

    // maximum_ttl - computed: true, optional: true, required: false
    private _maximumTtl?: number; 
    public get maximumTtl() {
        return this.getNumberAttribute('maximum_ttl');
    }
    public set maximumTtl(value: number) {
        this._maximumTtl = value;
    }
    public resetMaximumTtl() {
        this._maximumTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumTtlInput() {
        return this._maximumTtl;
    }

    // minimum_ttl - computed: true, optional: true, required: false
    private _minimumTtl?: number; 
    public get minimumTtl() {
        return this.getNumberAttribute('minimum_ttl');
    }
    public set minimumTtl(value: number) {
        this._minimumTtl = value;
    }
    public resetMinimumTtl() {
        this._minimumTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumTtlInput() {
        return this._minimumTtl;
    }
}
export interface CacheBehaviorPerPathProperty {
    /**
    * The cache behavior for the specified path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#behavior CcDistribution#behavior}
    */
    readonly behavior?: string;
    /**
    * The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify wildcard directories (path/to/assets/*), and file types (*.html, *jpg, *js). Directories and file paths are case-sensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#path CcDistribution#path}
    */
    readonly path?: string;
}
export class CacheBehaviorPerPathPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CacheBehaviorPerPathProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._behavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.behavior = this._behavior;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CacheBehaviorPerPathProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._behavior = undefined;
            this._path = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._behavior = value.behavior;
            this._path = value.path;
        }
    }

    // behavior - computed: true, optional: true, required: false
    private _behavior?: string; 
    public get behavior() {
        return this.getStringAttribute('behavior');
    }
    public set behavior(value: string) {
        this._behavior = value;
    }
    public resetBehavior() {
        this._behavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get behaviorInput() {
        return this._behavior;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }
}

export class CacheBehaviorPerPathPropertyList extends cdktn.ComplexList {
    public internalValue? : CacheBehaviorPerPathProperty[] | cdktn.IResolvable

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
    public get(index: number): CacheBehaviorPerPathPropertyOutputReference {
        return new CacheBehaviorPerPathPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CacheBehaviorProperty {
    /**
    * The cache behavior of the distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#behavior CcDistribution#behavior}
    */
    readonly behavior?: string;
}
export class CacheBehaviorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CacheBehaviorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._behavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.behavior = this._behavior;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CacheBehaviorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._behavior = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._behavior = value.behavior;
        }
    }

    // behavior - computed: true, optional: true, required: false
    private _behavior?: string; 
    public get behavior() {
        return this.getStringAttribute('behavior');
    }
    public set behavior(value: string) {
        this._behavior = value;
    }
    public resetBehavior() {
        this._behavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get behaviorInput() {
        return this._behavior;
    }
}
export interface InputOriginProperty {
    /**
    * The name of the origin resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#name CcDistribution#name}
    */
    readonly name?: string;
    /**
    * The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#protocol_policy CcDistribution#protocol_policy}
    */
    readonly protocolPolicy?: string;
    /**
    * The AWS Region name of the origin resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#region_name CcDistribution#region_name}
    */
    readonly regionName?: string;
}
export class InputOriginPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputOriginProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._protocolPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocolPolicy = this._protocolPolicy;
        }
        if (this._regionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.regionName = this._regionName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputOriginProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._protocolPolicy = undefined;
            this._regionName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._protocolPolicy = value.protocolPolicy;
            this._regionName = value.regionName;
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

    // protocol_policy - computed: true, optional: true, required: false
    private _protocolPolicy?: string; 
    public get protocolPolicy() {
        return this.getStringAttribute('protocol_policy');
    }
    public set protocolPolicy(value: string) {
        this._protocolPolicy = value;
    }
    public resetProtocolPolicy() {
        this._protocolPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolPolicyInput() {
        return this._protocolPolicy;
    }

    // region_name - computed: true, optional: true, required: false
    private _regionName?: string; 
    public get regionName() {
        return this.getStringAttribute('region_name');
    }
    public set regionName(value: string) {
        this._regionName = value;
    }
    public resetRegionName() {
        this._regionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionNameInput() {
        return this._regionName;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#key CcDistribution#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#value CcDistribution#value}
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
