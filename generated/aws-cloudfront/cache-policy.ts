// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCachePolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * The cache policy configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#cache_policy_config CcCachePolicy#cache_policy_config}
    */
    readonly cachePolicyConfig: CcCachePolicy.CachePolicyConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy awscc_cloudfront_cache_policy}
*/
export class CcCachePolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_cache_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCachePolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCachePolicy to import
    * @param importFromId The id of the existing CcCachePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCachePolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_cache_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy awscc_cloudfront_cache_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCachePolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcCachePolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_cache_policy',
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
        this._cachePolicyConfig.internalValue = config.cachePolicyConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cache_policy_config - computed: false, optional: false, required: true
    private _cachePolicyConfig = new CcCachePolicy.CachePolicyConfigPropertyOutputReference(this, "cache_policy_config");
    public get cachePolicyConfig() {
        return this._cachePolicyConfig;
    }
    public putCachePolicyConfig(value: CcCachePolicy.CachePolicyConfigProperty) {
        this._cachePolicyConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cachePolicyConfigInput() {
        return this._cachePolicyConfig.internalValue;
    }

    // cache_policy_id - computed: true, optional: false, required: false
    public get cachePolicyId() {
        return this.getStringAttribute('cache_policy_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cache_policy_config: ccCachePolicyCachePolicyConfigPropertyToTerraform(this._cachePolicyConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cache_policy_config: {
                value: ccCachePolicyCachePolicyConfigPropertyToHclTerraform(this._cachePolicyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCachePolicy.CachePolicyConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCachePolicyCookiesConfigPropertyToTerraform(struct?: CcCachePolicy.CookiesConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cookie_behavior: cdktn.stringToTerraform(struct!.cookieBehavior),
        cookies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cookies),
    }
}


export function ccCachePolicyCookiesConfigPropertyToHclTerraform(struct?: CcCachePolicy.CookiesConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cookie_behavior: {
            value: cdktn.stringToHclTerraform(struct!.cookieBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cookies: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cookies),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCachePolicyHeadersConfigPropertyToTerraform(struct?: CcCachePolicy.HeadersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header_behavior: cdktn.stringToTerraform(struct!.headerBehavior),
        headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.headers),
    }
}


export function ccCachePolicyHeadersConfigPropertyToHclTerraform(struct?: CcCachePolicy.HeadersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header_behavior: {
            value: cdktn.stringToHclTerraform(struct!.headerBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        headers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.headers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCachePolicyQueryStringsConfigPropertyToTerraform(struct?: CcCachePolicy.QueryStringsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        query_string_behavior: cdktn.stringToTerraform(struct!.queryStringBehavior),
        query_strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.queryStrings),
    }
}


export function ccCachePolicyQueryStringsConfigPropertyToHclTerraform(struct?: CcCachePolicy.QueryStringsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        query_string_behavior: {
            value: cdktn.stringToHclTerraform(struct!.queryStringBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        query_strings: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.queryStrings),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCachePolicyParametersInCacheKeyAndForwardedToOriginPropertyToTerraform(struct?: CcCachePolicy.ParametersInCacheKeyAndForwardedToOriginProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cookies_config: ccCachePolicyCookiesConfigPropertyToTerraform(struct!.cookiesConfig),
        enable_accept_encoding_brotli: cdktn.booleanToTerraform(struct!.enableAcceptEncodingBrotli),
        enable_accept_encoding_gzip: cdktn.booleanToTerraform(struct!.enableAcceptEncodingGzip),
        headers_config: ccCachePolicyHeadersConfigPropertyToTerraform(struct!.headersConfig),
        query_strings_config: ccCachePolicyQueryStringsConfigPropertyToTerraform(struct!.queryStringsConfig),
    }
}


export function ccCachePolicyParametersInCacheKeyAndForwardedToOriginPropertyToHclTerraform(struct?: CcCachePolicy.ParametersInCacheKeyAndForwardedToOriginProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cookies_config: {
            value: ccCachePolicyCookiesConfigPropertyToHclTerraform(struct!.cookiesConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CookiesConfigProperty",
        },
        enable_accept_encoding_brotli: {
            value: cdktn.booleanToHclTerraform(struct!.enableAcceptEncodingBrotli),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_accept_encoding_gzip: {
            value: cdktn.booleanToHclTerraform(struct!.enableAcceptEncodingGzip),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        headers_config: {
            value: ccCachePolicyHeadersConfigPropertyToHclTerraform(struct!.headersConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "HeadersConfigProperty",
        },
        query_strings_config: {
            value: ccCachePolicyQueryStringsConfigPropertyToHclTerraform(struct!.queryStringsConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "QueryStringsConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCachePolicyCachePolicyConfigPropertyToTerraform(struct?: CcCachePolicy.CachePolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comment: cdktn.stringToTerraform(struct!.comment),
        default_ttl: cdktn.numberToTerraform(struct!.defaultTtl),
        max_ttl: cdktn.numberToTerraform(struct!.maxTtl),
        min_ttl: cdktn.numberToTerraform(struct!.minTtl),
        name: cdktn.stringToTerraform(struct!.name),
        parameters_in_cache_key_and_forwarded_to_origin: ccCachePolicyParametersInCacheKeyAndForwardedToOriginPropertyToTerraform(struct!.parametersInCacheKeyAndForwardedToOrigin),
    }
}


export function ccCachePolicyCachePolicyConfigPropertyToHclTerraform(struct?: CcCachePolicy.CachePolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comment: {
            value: cdktn.stringToHclTerraform(struct!.comment),
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
        max_ttl: {
            value: cdktn.numberToHclTerraform(struct!.maxTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_ttl: {
            value: cdktn.numberToHclTerraform(struct!.minTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameters_in_cache_key_and_forwarded_to_origin: {
            value: ccCachePolicyParametersInCacheKeyAndForwardedToOriginPropertyToHclTerraform(struct!.parametersInCacheKeyAndForwardedToOrigin),
            isBlock: true,
            type: "struct",
            storageClassType: "ParametersInCacheKeyAndForwardedToOriginProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCachePolicy {
export interface CookiesConfigProperty {
    /**
    * Determines whether any cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
    *   +  ``none`` ? No cookies in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any cookies that are listed in an ``OriginRequestPolicy``*are* included in origin requests.
    *   +  ``whitelist`` ? Only the cookies in viewer requests that are listed in the ``CookieNames`` type are included in the cache key and in requests that CloudFront sends to the origin.
    *   +  ``allExcept`` ? All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, *except* for those that are listed in the ``CookieNames`` type, which are not included.
    *   +  ``all`` ? All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#cookie_behavior CcCachePolicy#cookie_behavior}
    */
    readonly cookieBehavior: string;
    /**
    * Contains a list of cookie names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#cookies CcCachePolicy#cookies}
    */
    readonly cookies?: string[];
}
export class CookiesConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CookiesConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cookieBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookieBehavior = this._cookieBehavior;
        }
        if (this._cookies !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookies = this._cookies;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CookiesConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cookieBehavior = undefined;
            this._cookies = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cookieBehavior = value.cookieBehavior;
            this._cookies = value.cookies;
        }
    }

    // cookie_behavior - computed: false, optional: false, required: true
    private _cookieBehavior?: string; 
    public get cookieBehavior() {
        return this.getStringAttribute('cookie_behavior');
    }
    public set cookieBehavior(value: string) {
        this._cookieBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cookieBehaviorInput() {
        return this._cookieBehavior;
    }

    // cookies - computed: true, optional: true, required: false
    private _cookies?: string[]; 
    public get cookies() {
        return this.getListAttribute('cookies');
    }
    public set cookies(value: string[]) {
        this._cookies = value;
    }
    public resetCookies() {
        this._cookies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cookiesInput() {
        return this._cookies;
    }
}
export interface HeadersConfigProperty {
    /**
    * Determines whether any HTTP headers are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
    *   +  ``none`` ? No HTTP headers are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any headers that are listed in an ``OriginRequestPolicy``*are* included in origin requests.
    *   +  ``whitelist`` ? Only the HTTP headers that are listed in the ``Headers`` type are included in the cache key and in requests that CloudFront sends to the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#header_behavior CcCachePolicy#header_behavior}
    */
    readonly headerBehavior: string;
    /**
    * Contains a list of HTTP header names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#headers CcCachePolicy#headers}
    */
    readonly headers?: string[];
}
export class HeadersConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HeadersConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headerBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerBehavior = this._headerBehavior;
        }
        if (this._headers !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HeadersConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headerBehavior = undefined;
            this._headers = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headerBehavior = value.headerBehavior;
            this._headers = value.headers;
        }
    }

    // header_behavior - computed: false, optional: false, required: true
    private _headerBehavior?: string; 
    public get headerBehavior() {
        return this.getStringAttribute('header_behavior');
    }
    public set headerBehavior(value: string) {
        this._headerBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    public get headerBehaviorInput() {
        return this._headerBehavior;
    }

    // headers - computed: true, optional: true, required: false
    private _headers?: string[]; 
    public get headers() {
        return this.getListAttribute('headers');
    }
    public set headers(value: string[]) {
        this._headers = value;
    }
    public resetHeaders() {
        this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
        return this._headers;
    }
}
export interface QueryStringsConfigProperty {
    /**
    * Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
    *   +  ``none`` ? No query strings in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any query strings that are listed in an ``OriginRequestPolicy``*are* included in origin requests.
    *   +  ``whitelist`` ? Only the query strings in viewer requests that are listed in the ``QueryStringNames`` type are included in the cache key and in requests that CloudFront sends to the origin.
    *   +  ``allExcept`` ? All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, *except* those that are listed in the ``QueryStringNames`` type, which are not included.
    *   +  ``all`` ? All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#query_string_behavior CcCachePolicy#query_string_behavior}
    */
    readonly queryStringBehavior: string;
    /**
    * Contains a list of query string names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#query_strings CcCachePolicy#query_strings}
    */
    readonly queryStrings?: string[];
}
export class QueryStringsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueryStringsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._queryStringBehavior !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringBehavior = this._queryStringBehavior;
        }
        if (this._queryStrings !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStrings = this._queryStrings;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryStringsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._queryStringBehavior = undefined;
            this._queryStrings = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._queryStringBehavior = value.queryStringBehavior;
            this._queryStrings = value.queryStrings;
        }
    }

    // query_string_behavior - computed: false, optional: false, required: true
    private _queryStringBehavior?: string; 
    public get queryStringBehavior() {
        return this.getStringAttribute('query_string_behavior');
    }
    public set queryStringBehavior(value: string) {
        this._queryStringBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringBehaviorInput() {
        return this._queryStringBehavior;
    }

    // query_strings - computed: true, optional: true, required: false
    private _queryStrings?: string[]; 
    public get queryStrings() {
        return this.getListAttribute('query_strings');
    }
    public set queryStrings(value: string[]) {
        this._queryStrings = value;
    }
    public resetQueryStrings() {
        this._queryStrings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringsInput() {
        return this._queryStrings;
    }
}
export interface ParametersInCacheKeyAndForwardedToOriginProperty {
    /**
    * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#cookies_config CcCachePolicy#cookies_config}
    */
    readonly cookiesConfig: CookiesConfigProperty;
    /**
    * A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.
    *  This field is related to the ``EnableAcceptEncodingGzip`` field. If one or both of these fields is ``true``*and* the viewer request includes the ``Accept-Encoding`` header, then CloudFront does the following:
    *   +  Normalizes the value of the viewer's ``Accept-Encoding`` header
    *   +  Includes the normalized header in the cache key
    *   +  Includes the normalized header in the request to the origin, if a request is necessary
    *   
    *  For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
    *  If you set this value to ``true``, and this cache behavior also has an origin request policy attached, do not include the ``Accept-Encoding`` header in the origin request policy. CloudFront always includes the ``Accept-Encoding`` header in origin requests when the value of this field is ``true``, so including this header in an origin request policy has no effect.
    *  If both of these fields are ``false``, then CloudFront treats the ``Accept-Encoding`` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add ``Accept-Encoding`` to the headers whitelist like any other HTTP header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#enable_accept_encoding_brotli CcCachePolicy#enable_accept_encoding_brotli}
    */
    readonly enableAcceptEncodingBrotli?: boolean | cdktn.IResolvable;
    /**
    * A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.
    *  This field is related to the ``EnableAcceptEncodingBrotli`` field. If one or both of these fields is ``true``*and* the viewer request includes the ``Accept-Encoding`` header, then CloudFront does the following:
    *   +  Normalizes the value of the viewer's ``Accept-Encoding`` header
    *   +  Includes the normalized header in the cache key
    *   +  Includes the normalized header in the request to the origin, if a request is necessary
    *   
    *  For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
    *  If you set this value to ``true``, and this cache behavior also has an origin request policy attached, do not include the ``Accept-Encoding`` header in the origin request policy. CloudFront always includes the ``Accept-Encoding`` header in origin requests when the value of this field is ``true``, so including this header in an origin request policy has no effect.
    *  If both of these fields are ``false``, then CloudFront treats the ``Accept-Encoding`` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add ``Accept-Encoding`` to the headers whitelist like any other HTTP header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#enable_accept_encoding_gzip CcCachePolicy#enable_accept_encoding_gzip}
    */
    readonly enableAcceptEncodingGzip: boolean | cdktn.IResolvable;
    /**
    * An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#headers_config CcCachePolicy#headers_config}
    */
    readonly headersConfig: HeadersConfigProperty;
    /**
    * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#query_strings_config CcCachePolicy#query_strings_config}
    */
    readonly queryStringsConfig: QueryStringsConfigProperty;
}
export class ParametersInCacheKeyAndForwardedToOriginPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ParametersInCacheKeyAndForwardedToOriginProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cookiesConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cookiesConfig = this._cookiesConfig?.internalValue;
        }
        if (this._enableAcceptEncodingBrotli !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableAcceptEncodingBrotli = this._enableAcceptEncodingBrotli;
        }
        if (this._enableAcceptEncodingGzip !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableAcceptEncodingGzip = this._enableAcceptEncodingGzip;
        }
        if (this._headersConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.headersConfig = this._headersConfig?.internalValue;
        }
        if (this._queryStringsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringsConfig = this._queryStringsConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParametersInCacheKeyAndForwardedToOriginProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cookiesConfig.internalValue = undefined;
            this._enableAcceptEncodingBrotli = undefined;
            this._enableAcceptEncodingGzip = undefined;
            this._headersConfig.internalValue = undefined;
            this._queryStringsConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cookiesConfig.internalValue = value.cookiesConfig;
            this._enableAcceptEncodingBrotli = value.enableAcceptEncodingBrotli;
            this._enableAcceptEncodingGzip = value.enableAcceptEncodingGzip;
            this._headersConfig.internalValue = value.headersConfig;
            this._queryStringsConfig.internalValue = value.queryStringsConfig;
        }
    }

    // cookies_config - computed: false, optional: false, required: true
    private _cookiesConfig = new CookiesConfigPropertyOutputReference(this, "cookies_config");
    public get cookiesConfig() {
        return this._cookiesConfig;
    }
    public putCookiesConfig(value: CookiesConfigProperty) {
        this._cookiesConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cookiesConfigInput() {
        return this._cookiesConfig.internalValue;
    }

    // enable_accept_encoding_brotli - computed: true, optional: true, required: false
    private _enableAcceptEncodingBrotli?: boolean | cdktn.IResolvable; 
    public get enableAcceptEncodingBrotli() {
        return this.getBooleanAttribute('enable_accept_encoding_brotli');
    }
    public set enableAcceptEncodingBrotli(value: boolean | cdktn.IResolvable) {
        this._enableAcceptEncodingBrotli = value;
    }
    public resetEnableAcceptEncodingBrotli() {
        this._enableAcceptEncodingBrotli = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAcceptEncodingBrotliInput() {
        return this._enableAcceptEncodingBrotli;
    }

    // enable_accept_encoding_gzip - computed: false, optional: false, required: true
    private _enableAcceptEncodingGzip?: boolean | cdktn.IResolvable; 
    public get enableAcceptEncodingGzip() {
        return this.getBooleanAttribute('enable_accept_encoding_gzip');
    }
    public set enableAcceptEncodingGzip(value: boolean | cdktn.IResolvable) {
        this._enableAcceptEncodingGzip = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enableAcceptEncodingGzipInput() {
        return this._enableAcceptEncodingGzip;
    }

    // headers_config - computed: false, optional: false, required: true
    private _headersConfig = new HeadersConfigPropertyOutputReference(this, "headers_config");
    public get headersConfig() {
        return this._headersConfig;
    }
    public putHeadersConfig(value: HeadersConfigProperty) {
        this._headersConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get headersConfigInput() {
        return this._headersConfig.internalValue;
    }

    // query_strings_config - computed: false, optional: false, required: true
    private _queryStringsConfig = new QueryStringsConfigPropertyOutputReference(this, "query_strings_config");
    public get queryStringsConfig() {
        return this._queryStringsConfig;
    }
    public putQueryStringsConfig(value: QueryStringsConfigProperty) {
        this._queryStringsConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringsConfigInput() {
        return this._queryStringsConfig.internalValue;
    }
}
export interface CachePolicyConfigProperty {
    /**
    * A comment to describe the cache policy. The comment cannot be longer than 128 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#comment CcCachePolicy#comment}
    */
    readonly comment?: string;
    /**
    * The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value as the object's time to live (TTL) only when the origin does *not* send ``Cache-Control`` or ``Expires`` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
    *  The default value for this field is 86400 seconds (one day). If the value of ``MinTTL`` is more than 86400 seconds, then the default value for this field is the same as the value of ``MinTTL``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#default_ttl CcCachePolicy#default_ttl}
    */
    readonly defaultTtl: number;
    /**
    * The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value only when the origin sends ``Cache-Control`` or ``Expires`` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
    *  The default value for this field is 31536000 seconds (one year). If the value of ``MinTTL`` or ``DefaultTTL`` is more than 31536000 seconds, then the default value for this field is the same as the value of ``DefaultTTL``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#max_ttl CcCachePolicy#max_ttl}
    */
    readonly maxTtl: number;
    /**
    * The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#min_ttl CcCachePolicy#min_ttl}
    */
    readonly minTtl: number;
    /**
    * A unique name to identify the cache policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#name CcCachePolicy#name}
    */
    readonly name: string;
    /**
    * The HTTP headers, cookies, and URL query strings to include in the cache key. The values included in the cache key are also included in requests that CloudFront sends to the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cache_policy#parameters_in_cache_key_and_forwarded_to_origin CcCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}
    */
    readonly parametersInCacheKeyAndForwardedToOrigin: ParametersInCacheKeyAndForwardedToOriginProperty;
}
export class CachePolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CachePolicyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._defaultTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultTtl = this._defaultTtl;
        }
        if (this._maxTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxTtl = this._maxTtl;
        }
        if (this._minTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.minTtl = this._minTtl;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._parametersInCacheKeyAndForwardedToOrigin?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.parametersInCacheKeyAndForwardedToOrigin = this._parametersInCacheKeyAndForwardedToOrigin?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CachePolicyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comment = undefined;
            this._defaultTtl = undefined;
            this._maxTtl = undefined;
            this._minTtl = undefined;
            this._name = undefined;
            this._parametersInCacheKeyAndForwardedToOrigin.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comment = value.comment;
            this._defaultTtl = value.defaultTtl;
            this._maxTtl = value.maxTtl;
            this._minTtl = value.minTtl;
            this._name = value.name;
            this._parametersInCacheKeyAndForwardedToOrigin.internalValue = value.parametersInCacheKeyAndForwardedToOrigin;
        }
    }

    // comment - computed: true, optional: true, required: false
    private _comment?: string; 
    public get comment() {
        return this.getStringAttribute('comment');
    }
    public set comment(value: string) {
        this._comment = value;
    }
    public resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
        return this._comment;
    }

    // default_ttl - computed: false, optional: false, required: true
    private _defaultTtl?: number; 
    public get defaultTtl() {
        return this.getNumberAttribute('default_ttl');
    }
    public set defaultTtl(value: number) {
        this._defaultTtl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultTtlInput() {
        return this._defaultTtl;
    }

    // max_ttl - computed: false, optional: false, required: true
    private _maxTtl?: number; 
    public get maxTtl() {
        return this.getNumberAttribute('max_ttl');
    }
    public set maxTtl(value: number) {
        this._maxTtl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxTtlInput() {
        return this._maxTtl;
    }

    // min_ttl - computed: false, optional: false, required: true
    private _minTtl?: number; 
    public get minTtl() {
        return this.getNumberAttribute('min_ttl');
    }
    public set minTtl(value: number) {
        this._minTtl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minTtlInput() {
        return this._minTtl;
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

    // parameters_in_cache_key_and_forwarded_to_origin - computed: false, optional: false, required: true
    private _parametersInCacheKeyAndForwardedToOrigin = new ParametersInCacheKeyAndForwardedToOriginPropertyOutputReference(this, "parameters_in_cache_key_and_forwarded_to_origin");
    public get parametersInCacheKeyAndForwardedToOrigin() {
        return this._parametersInCacheKeyAndForwardedToOrigin;
    }
    public putParametersInCacheKeyAndForwardedToOrigin(value: ParametersInCacheKeyAndForwardedToOriginProperty) {
        this._parametersInCacheKeyAndForwardedToOrigin.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInCacheKeyAndForwardedToOriginInput() {
        return this._parametersInCacheKeyAndForwardedToOrigin.internalValue;
    }
}
}
